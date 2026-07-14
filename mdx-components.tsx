import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

// Note: inline <video> in post bodies is authored as literal JSX, which MDX
// compiles to a host element that bypasses this components map. Its autoplay /
// loop / muted attributes are injected at compile time by rehypeVideoAttributes
// (see content-collections.ts / rehype-video.mjs), not overridden here.
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
  };
}
