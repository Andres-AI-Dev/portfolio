import Footer from "@/components/footer/main";
import { DocsLayout } from "@/components/fuma/fuma-layout";
import { DocsBody, DocsPage } from "@/components/fuma/fuma-page";
import Header from "@/components/header/main";
import { source } from "@/lib/source";
import { getBaseUrl } from "@/lib/utils";
import { getMDXComponents } from "@/mdx-components";
import { MDXContent } from "@content-collections/mdx/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return (
    <Fragment>
      <Header />
      <div className="border-border bg-background relative min-h-52 max-w-full border-t">
        <div className="mx-auto w-full max-w-5xl">
          <DocsLayout tree={source.pageTree}>
            <DocsPage toc={page.data.toc}>
              <DocsBody>
                <MDXContent
                  code={page.data.body}
                  components={getMDXComponents()}
                />
              </DocsBody>
            </DocsPage>
          </DocsLayout>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const url = getBaseUrl(`docs/posts/${(params.slug ?? []).join("/")}`);
  const image = Array.isArray(page.data.image)
    ? page.data.image[0]
    : page.data.image;

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      type: "article",
      url,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: page.data.title,
              type: "image/png",
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description,
      images: image ? [image] : undefined,
    },
  };
}
