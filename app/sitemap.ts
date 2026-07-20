import type { MetadataRoute } from "next";
import { getAllIssues } from "@/lib/newsletter";
import { SITE_URL } from "@/lib/seo";

/**
 * Generated from the real route list, so pages can't silently go missing the
 * way /about, /contact and /case-studies/iot-xponent did in the hand-written
 * sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number }[] = [
    { path: "/", priority: 1.0 },
    { path: "/services", priority: 0.9 },
    { path: "/case-studies", priority: 0.9 },
    { path: "/case-studies/marks-and-spencer-performance", priority: 0.8 },
    { path: "/case-studies/custom-print-platform", priority: 0.8 },
    { path: "/case-studies/rag-knowledge-engine", priority: 0.8 },
    { path: "/case-studies/iot-xponent", priority: 0.8 },
    { path: "/remote-engineering-india", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/newsletter", priority: 0.8 },
  ];

  const now = new Date();

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...getAllIssues().map((issue) => ({
      url: `${SITE_URL}/newsletter/${issue.slug}`,
      lastModified: new Date(issue.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
