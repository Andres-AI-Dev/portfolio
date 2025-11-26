import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import ProjectItem from "@/components/project/main";
import { MotionEffect } from "@/components/ui/animations/motion-effect";
import MainTitle from "@/components/ui/main-title";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { HEAD } from "@/config/seo";
import { getBaseUrl } from "@/lib/utils";
import { HeadType } from "@/types";
import { allResearch } from "content-collections";
import { Metadata } from "next";
import { Fragment } from "react";

// Validate SEO configuration
if (!HEAD || HEAD.length === 0) {
  console.error("⚠️ HEAD configuration is missing or empty");
}

const PAGE = "Research";
const page = HEAD.find((page: HeadType) => page.page === PAGE) as HeadType;

export const metadata: Metadata = {
  title: page.title,
  applicationName: page.title,
  description: page.description,
  metadataBase: new URL(getBaseUrl(page.slug)),
  alternates: {
    canonical: getBaseUrl(page.slug),
  },
};

export default async function ResearchPage() {
  const research = allResearch.sort((a, b) => a.order - b.order);

  return (
    <Fragment>
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
        <div className="relative mx-auto -mt-12 max-w-3xl px-4 sm:px-6 lg:px-8">
          {research.map((item, index) => (
            <ProjectItem key={index} project={item} className="mb-8" />
          ))}
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </Fragment>
  );
}
