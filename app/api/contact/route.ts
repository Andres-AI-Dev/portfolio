import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Server-side validation schema. Trims and enforces length caps to prevent
// oversized/abusive payloads. Kept in sync with the client form schema.
const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().max(254).email(),
  message: z.string().trim().min(1).max(5000),
  // Honeypot: real users never see or fill this. Bots often do.
  company: z.string().optional(),
});

// Lightweight in-memory sliding-window rate limiter keyed by client IP.
// NOTE: module-level state is per-instance and resets on cold start, so in a
// serverless deployment this only throttles within a single warm instance.
// Adequate as a first line of defense; a shared store (e.g. Redis) is needed
// for strict cross-instance limits.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const rateLimitStore = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  // Prune stale entries so the store doesn't grow unbounded on long-lived
  // instances: re-filter every IP against the current window and drop any
  // whose timestamps have all aged out. Cheap for the low request volume this
  // endpoint sees.
  for (const [key, times] of rateLimitStore) {
    const fresh = times.filter((ts) => ts > windowStart);
    if (fresh.length === 0) {
      rateLimitStore.delete(key);
    } else {
      rateLimitStore.set(key, fresh);
    }
  }

  // Pruning above already refreshed this IP's entry within the window.
  const timestamps = rateLimitStore.get(ip) ?? [];

  if (timestamps.length >= RATE_LIMIT_MAX) {
    return true;
  }

  timestamps.push(now);
  rateLimitStore.set(ip, timestamps);
  return false;
}

// Escape HTML special characters to prevent injection into the email markup.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  // Recipient must be configured explicitly — no personal fallback address.
  const recipient = process.env.CONTACT_EMAIL;
  if (!recipient) {
    console.error("❌ CONTACT_EMAIL is not configured");
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 },
    );
  }

  // Rate limit by client IP (x-forwarded-for is set by the hosting proxy).
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  // Parse body defensively — malformed JSON must not leak parser internals.
  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, message, company } = parsed.data;

  // Honeypot tripped: pretend success without sending anything.
  if (company && company.trim().length > 0) {
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log("📧 Sending contact form submission:", { name, email });

    // Sender defaults to the Resend sandbox address; acceptable until a custom
    // domain is verified in Resend (then set CONTACT_FROM).
    const { data, error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM ||
        "Portfolio Contact <onboarding@resend.dev>",
      to: recipient,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      // Log full detail server-side; never echo provider details to the client.
      console.error("❌ Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 },
      );
    }

    console.log("✅ Email sent successfully:", data);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("❌ Unexpected error in contact form:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 },
    );
  }
}
