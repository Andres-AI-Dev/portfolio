import { visit } from "unist-util-visit";

// Inline <video> elements authored as literal JSX in MDX compile to host
// elements (jsx("video", ...)) and bypass the MDX `components` map, so a
// `video` override in mdx-components can never apply. Inject the autoplay /
// loop / muted playback attributes at compile time instead, for every post.
export function rehypeVideoAttributes() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "video") return;

      node.properties = {
        className: ["my-6", "h-auto", "w-full", "rounded-lg"],
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        controls: true,
        preload: "metadata",
        ...node.properties,
      };
    });
  };
}
