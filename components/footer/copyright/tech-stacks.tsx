import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface TechLink {
  label: string;
  href: string;
}

const defaultClass =
  "text-muted-foreground hover:text-accent-foreground underline underline-offset-4 transition-colors";

const techLinks: TechLink[] = [
  { label: "v0", href: "https://v0.dev/" },
  { label: "Cursor", href: "https://www.cursor.com/" },
  { label: "Next.js", href: "https://nextjs.org/" },
  { label: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { label: "Vercel", href: "https://vercel.com/" },
  { label: "Geist", href: "https://fonts.google.com/specimen/Geist" },
  {
    label: "GitHub",
    href: "https://github.com/timtbdev/Next.js-Portfolio-App-v2",
  },
];

const TechLinkButton: React.FC<{ link: TechLink }> = ({ link }) => (
  <Button
    variant="link"
    asChild
    className="text-foreground group-hover:text-accent-foreground transition-colors duration-200"
  >
    <Link href={link.href} aria-label={`View ${link.label}`}>
      {link.label}
    </Link>
  </Button>
);

const TechStacks: React.FC = () => null;

export default TechStacks;
