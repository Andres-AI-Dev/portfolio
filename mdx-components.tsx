import defaultMdxComponents from "fumadocs-ui/mdx";
import { GoogleDriveEmbed } from "@/components/mdx/google-drive-embed";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    GoogleDriveEmbed,
    ...components,
  };
}
