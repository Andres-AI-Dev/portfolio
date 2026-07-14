import { getBaseUrl } from "@/lib/utils";
import { allDocs, allPosts } from "content-collections";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Generate sitemap entries for blog posts
  const blogPosts = allPosts.map((post) => ({
    url: getBaseUrl(`/blog/post/${post._meta.path}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const, // Blog posts typically don't change often
    priority: 0.5,
  }));

  // Generate sitemap entries for docs posts
  const docsPosts = allDocs.map((doc) => ({
    url: getBaseUrl(`/docs/posts/${doc._meta.path}`),
    lastModified: new Date(doc.date),
    changeFrequency: "monthly" as const, // Docs posts typically don't change often
    priority: 0.5,
  }));

  // Define static pages with their configurations
  const staticPages = [
    {
      url: getBaseUrl(),
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0, // Homepage gets highest priority
    },
    {
      url: getBaseUrl("/about"),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: getBaseUrl("/projects"),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: getBaseUrl("/research"),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: getBaseUrl("/blog"),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: getBaseUrl("/docs"),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: getBaseUrl("/contact"),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return [...staticPages, ...blogPosts, ...docsPosts];
}
