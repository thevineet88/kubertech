import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    // AI search crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
    // are covered by this allow-all. Blocking them would make those engines
    // unable to cite the site at all.
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
