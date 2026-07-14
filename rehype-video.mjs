import { visit } from "unist-util-visit";

const VIDEO_PROPERTIES = {
  className: ["my-6", "h-auto", "w-full", "rounded-lg"],
  autoPlay: true,
  loop: true,
  muted: true,
  playsInline: true,
  controls: true,
  preload: "metadata",
};

// Camel-cased JSX attribute names for mdxJsx* nodes (kept verbatim by MDX).
const JSX_ATTRIBUTES = [
  ["className", "my-6 h-auto w-full rounded-lg"],
  ["autoPlay", null],
  ["loop", null],
  ["muted", null],
  ["playsInline", null],
  ["controls", null],
  ["preload", "metadata"],
];

// Inline <video> elements authored as literal JSX in MDX compile to
// mdxJsxFlowElement / mdxJsxTextElement nodes (NOT hast `element` nodes) and
// bypass the MDX `components` map, so a `video` override in mdx-components can
// never apply. Inject the autoplay / loop / muted playback attributes at
// compile time instead, for every post — covering both node shapes.
export function rehypeVideoAttributes() {
  return (tree) => {
    // Markdown-derived <video> host elements (hast).
    visit(tree, "element", (node) => {
      if (node.tagName !== "video") return;
      node.properties = { ...VIDEO_PROPERTIES, ...node.properties };
    });

    // Literal JSX <video /> authored in MDX bodies.
    visit(tree, ["mdxJsxFlowElement", "mdxJsxTextElement"], (node) => {
      if (node.name !== "video") return;
      const existing = new Set(
        node.attributes
          .filter((attr) => attr.type === "mdxJsxAttribute")
          .map((attr) => attr.name),
      );
      for (const [name, value] of JSX_ATTRIBUTES) {
        if (existing.has(name)) continue;
        node.attributes.push({ type: "mdxJsxAttribute", name, value });
      }
    });
  };
}
