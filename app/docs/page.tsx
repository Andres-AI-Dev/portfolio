import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import { FadeUp } from "@/components/ui/animations/fade-up";
import { MotionEffect } from "@/components/ui/animations/motion-effect";
import MainTitle from "@/components/ui/main-title";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { source } from "@/lib/source";
import { getBaseUrl } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

// Shared description so the metadata and the on-page heading stay in sync.
const DESCRIPTION =
  "Technical documentation, guides, and notes on AI, machine learning, and educational technology.";

// Configure metadata for SEO and social sharing so the docs index has a
// unique title/description instead of falling back to the generic root title.
export const metadata: Metadata = {
  title: "Docs | Andres Gonzales",
  applicationName: "Docs | Andres Gonzales",
  description: DESCRIPTION,
  metadataBase: new URL(getBaseUrl("/docs")),
  alternates: {
    canonical: getBaseUrl("/docs"),
  },
};

export async function generateStaticParams() {
  return source.generateParams();
}

export default async function DocsPage() {
  const docs = source.getPages();

  return (
    <Fragment>
      <Header />
      <Heading variant="default">
        <MotionEffect
          fade
          blur="10px"
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          inView
        >
          <MainTitle
            title="Docs"
            description={DESCRIPTION}
            className="mx-auto mt-6 mb-4 max-w-3xl px-4 sm:px-6 lg:px-8"
          />
        </MotionEffect>
      </Heading>

      <div className="border-border bg-background relative min-h-[50vh] max-w-full border-t">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 px-3 py-10 md:grid-cols-3 lg:px-4 xl:px-0">
          {docs?.map((doc, index) => (
            <FadeUp key={index} delay={0.1 + index * 0.1} duration={0.3}>
              <Link href={`/docs/posts/${doc.data._meta.path}`}>
                <div className="bg-card hover:bg-accent rounded-lg p-6 transition-colors">
                  <h3 className="text-lg font-semibold">{doc.data.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {doc.data.date} • {doc.data.category}
                  </p>
                  {doc.data.description && (
                    <>
                      <p className="text-muted-foreground mt-2 text-sm">
                        {doc.data.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {doc.data.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-secondary text-secondary-foreground rounded-full px-2.5 py-0.5 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </Fragment>
  );
}
