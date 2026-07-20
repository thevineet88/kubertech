import type { Metadata } from "next";

export const SITE_URL = "https://kubertechsolutions.in";
const DEFAULT_OG_IMAGE = "/kuber_logo_dark.jpeg";

interface BuildMetadataArgs {
  title: string;
  description: string;
  /** Route path, e.g. "/services". Used for the canonical + og:url. */
  path: string;
  ogType?: "website" | "article";
  ogImage?: string;
}

/**
 * Replaces the old react-helmet <Seo> component. Emitted server-side by Next,
 * so titles/descriptions/canonicals land in the raw HTML instead of only
 * appearing after hydration.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
}: BuildMetadataArgs): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: ogType,
      images: [ogImage],
      siteName: "Kuber Tech Solutions",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
