import { SITE_URL } from "./seo";

/**
 * Shared schema.org fragments. Previously copy-pasted into each case study and
 * newsletter issue, which meant a detail like the logo URL could drift per page.
 */

export const ORGANIZATION = {
  "@type": "Organization",
  name: "Kuber Tech Solutions",
} as const;

export const ORGANIZATION_WITH_LOGO = {
  "@type": "Organization",
  name: "Kuber Tech Solutions",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/kuber_logo_dark.jpeg`,
  },
} as const;

export const AUTHOR_VINIT = {
  "@type": "Person",
  name: "Vinit Brahmankar",
} as const;

export interface Faq {
  q: string;
  a: string;
}

/**
 * Builds FAQPage schema from the same array that renders the visible
 * accordion. Google requires the markup to match on-page content, so the two
 * must never be maintained separately.
 */
export function buildFaqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}
