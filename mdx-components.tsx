import defaultMdxComponents from "fumadocs-ui/mdx";
import { GoogleDriveEmbed } from "@/components/mdx/google-drive-embed";
import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    GoogleDriveEmbed,
    video: (props: ComponentProps<"video">) => (
      <video
        className="my-6 h-auto w-full rounded-lg"
        autoPlay
        loop
        muted
        playsInline
        controls
        preload="metadata"
        {...props}
      />
    ),
    ...components,
  };
}
