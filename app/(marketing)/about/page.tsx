import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import { FadeUp } from "@/components/ui/animations/fade-up";
import { MotionEffect } from "@/components/ui/animations/motion-effect";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import MainTitle from "@/components/ui/main-title";
import { HEAD } from "@/config/seo";
import { getBaseUrl } from "@/lib/utils";
import { HeadType } from "@/types";
import {
  ArrowUpRightIcon,
  CheckIcon,
  PaperclipIcon as FileIcon,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Validate SEO configuration to ensure all required fields are present
// This helps catch missing or incomplete SEO setup early
if (!HEAD || HEAD.length === 0) {
  console.error("⚠️ HEAD configuration is missing or empty");
}

// Define the current page for SEO configuration
const PAGE = "About";

// Get SEO configuration for the current page from the HEAD array
const page = HEAD.find((page: HeadType) => page.page === PAGE) as HeadType;

// Configure comprehensive metadata for SEO and social sharing
// This includes all necessary meta tags for search engines and social media platforms
export const metadata: Metadata = {
  // Basic metadata
  title: page.title,
  applicationName: page.title,
  description: page.description,

  // URL configurations for canonical links and RSS feed
  metadataBase: new URL(getBaseUrl(page.slug)),
  alternates: {
    canonical: getBaseUrl(page.slug),
  },
};

export default async function AboutPage() {
  return (
    <div>
      <Header />
      <Heading variant="default">
        <MotionEffect
          fade
          blur="10px"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          inView
        >
          <MainTitle
            title={page.page}
            description={page.description}
            className="mx-auto mt-6 mb-14 max-w-3xl px-4 sm:px-6 lg:px-8"
          />
        </MotionEffect>
      </Heading>

      <div className="border-border bg-background relative min-h-[50vh] max-w-full border-t">
        <div className="relative mx-auto -mt-10 max-w-3xl items-center px-4 sm:px-6 lg:px-8">
          <FadeUp delay={0.6} duration={0.3}>
            <Card className="mb-6 overflow-hidden">
              <div className="shrink-0">
                <Image
                  title="Cover Image"
                  alt="Cover Image"
                  src="/images/cover.jpg"
                  layout="responsive"
                  width={1200}
                  height={630}
                  quality={100}
                  className="h-128 w-full object-cover"
                  priority
                />
              </div>

              <div className="relative mx-auto flex max-w-3xl flex-col px-8 pt-6 pb-8 text-pretty sm:px-14">
                <div className="flex items-center justify-center sm:justify-start">
                  <MotionEffect
                    fade
                    blur="10px"
                    delay={0.7}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    inView
                  >
                    <h2 className="text-accent-foreground w-full text-center text-3xl font-semibold tracking-tight sm:w-auto sm:text-left">
                      About Andres
                    </h2>
                  </MotionEffect>
                </div>
                <MotionEffect
                  fade
                  blur="10px"
                  delay={0.7}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  inView
                >
                  <article id="about-me" className="mt-4">
                    <p className="text-foreground w-full text-center text-lg sm:w-auto sm:text-left">
                      I'm an educator and innovator at heart who builds the technical infrastructure that powers learning. I'm still very much in education, I just moved from the classroom to the technical side.
                    </p>

                    <ul
                      role="list"
                      className="text-foreground wrap-everywhere mt-6 max-w-xl space-y-4"
                    >
                      <li className="flex gap-x-3">
                        <CheckIcon
                          aria-hidden="true"
                          className="text-primary mt-1 size-5 flex-none"
                        />
                        <span>
                          I&apos;m an AI Systems Architect/Engineer at{" "}
                          <strong className="font-semibold">HCISD</strong>, building
                          the{" "}
                          <strong className="font-semibold">HCISD AI application</strong> to serve our district.
                        </span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <CheckIcon
                          aria-hidden="true"
                          className="text-primary mt-1 size-5 flex-none"
                        />
                        <span>
                          I live in{" "}
                          <strong className="font-semibold">
                            Harlingen, Texas
                          </strong>
                          , in the Rio Grande Valley.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <CheckIcon
                          aria-hidden="true"
                          className="text-primary mt-1 size-5 flex-none"
                        />
                        <span>
                          I&apos;m pursuing my{" "}
                          <strong className="font-semibold">
                            Master&apos;s in Computer Science
                          </strong>{" "}
                          at UTRGV, conducting research in{" "}
                          <strong className="font-semibold">
                            reinforcement learning and swarm robotics
                          </strong>{" "}
                          at the MARS Lab.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <CheckIcon
                          aria-hidden="true"
                          className="text-primary mt-1 size-5 flex-none"
                        />
                        <span>
                          I&apos;m a former{" "}
                          <strong className="font-semibold">
                            AP Chemistry Teacher
                          </strong>{" "}
                          with a{" "}
                          <strong className="font-semibold">
                            Bachelor&apos;s in Biology
                          </strong>{" "}
                          from UTRGV.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <CheckIcon
                          aria-hidden="true"
                          className="text-primary mt-1 size-5 flex-none"
                        />
                        <span>
                          I love education, and I really, really love technology - now I get to do both.
                        </span>
                      </li>
                    </ul>
                  </article>
                </MotionEffect>
                <div className="mt-8 flex w-full flex-col gap-3 sm:mx-auto sm:flex-row">
                  <Link
                    href="/files/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="hover:ring-border cursor-pointer overflow-hidden rounded-lg px-5 py-2 [--liquid-button-color:var(--accent)] [background:_linear-gradient(var(--liquid-button-color)_0_0)_no-repeat_calc(200%-var(--liquid-button-fill,0%))_100%/200%_var(--liquid-button-fill,0.2em)] [transition:_background_0.3s_var(--liquid-button-delay,0s),_color_0.3s_var(--liquid-button-delay,0s),_background-position_0.3s_calc(0.3s_-_var(--liquid-button-delay,0s))] hover:ring-2 hover:[--liquid-button-delay:0.3s] hover:[--liquid-button-fill:100%]"
                    >
                      <FileIcon className="size-4" aria-hidden="true" />
                      Download Resume
                      <ArrowUpRightIcon className="size-4" aria-hidden="true" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </FadeUp>
        </div>
      </div>
      <Footer />
    </div>
  );
}
