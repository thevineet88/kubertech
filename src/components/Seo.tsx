import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  jsonLd?: object | object[];
  ogType?: "website" | "article";
  ogImage?: string;
}

const SITE_URL = "https://kubertechsolutions.in";
const DEFAULT_OG_IMAGE = `${SITE_URL}/kuber_logo_dark.jpeg`;

export default function Seo({
  title,
  description,
  path,
  jsonLd,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
}: SeoProps) {
  const url = `${SITE_URL}${path}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
