import SingleBlogPostLoading from "@/components/blog/single-blog-post/loading";
import SingleBlogPost from "@/components/blog/single-blog-post/main";
import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import { MotionEffect } from "@/components/ui/animations/motion-effect";
import MainTitle from "@/components/ui/main-title";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { HEAD } from "@/config/seo";
import { source } from "@/lib/source";
import { getBaseUrl } from "@/lib/utils";
import { HeadType } from "@/types";
import { Metadata } from "next";
import { Fragment, Suspense } from "react";

// Validate SEO configuration to ensure all required fields are present
// This helps catch missing or incomplete SEO setup early
if (!HEAD || HEAD.length === 0) {
  console.error("⚠️ HEAD configuration is missing or empty");
}

// Define the current page for SEO configuration
const PAGE = "Blog";

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

export async function generateStaticParams() {
  return source.generateParams();
}

export default async function BlogPage() {
  const allPosts = source
    .getPages()
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
    );

  const pinnedPosts = allPosts.filter((post) => post.data.pinned);
  const regularPosts = allPosts.filter((post) => !post.data.pinned);

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
            className="mx-auto mt-6 mb-4 max-w-3xl px-4 sm:px-6 lg:px-8"
          />
        </MotionEffect>
      </Heading>
      <div className="border-border bg-background relative min-h-[50vh] max-w-full border-t">
        {/* Pinned Posts Section */}
        {pinnedPosts.length > 0 && (
          <div className="mx-auto w-full max-w-5xl px-3 pt-10 lg:px-4 xl:px-0">
            <MotionEffect fade inView>
              <h2 className="text-muted-foreground mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-wider">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 17v5" />
                  <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
                </svg>
                Pinned
              </h2>
            </MotionEffect>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
              {pinnedPosts.map((post, index) => (
                <MotionEffect
                  key={`pinned-${index}`}
                  fade
                  zoom
                  inView
                  delay={0.1 + index * 0.1}
                >
                  <Suspense fallback={<SingleBlogPostLoading />}>
                    <SingleBlogPost post={post.data} />
                  </Suspense>
                </MotionEffect>
              ))}
            </div>
            {/* Divider */}
            <div className="border-border my-10 border-t" />
          </div>
        )}

        {/* Regular Posts Section */}
        <div className={`mx-auto w-full max-w-5xl px-3 lg:px-4 xl:px-0 ${pinnedPosts.length > 0 ? "pb-10" : "py-10"}`}>
          {pinnedPosts.length > 0 && (
            <MotionEffect fade inView>
              <h2 className="text-muted-foreground mb-4 text-sm font-medium uppercase tracking-wider">
                Latest Posts
              </h2>
            </MotionEffect>
          )}
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
            {regularPosts.map((post, index) => (
              <MotionEffect
                key={`regular-${index}`}
                fade
                zoom
                inView
                delay={0.1 + index * 0.1}
              >
                <Suspense fallback={<SingleBlogPostLoading />}>
                  <SingleBlogPost post={post.data} />
                </Suspense>
              </MotionEffect>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </Fragment>
  );
}
