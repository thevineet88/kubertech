/**
 * Renders JSON-LD as a real server-rendered <script> tag, so AI crawlers and
 * non-JS-executing bots can read it. Next's Metadata API has no slot for
 * structured data, so this stays a component.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
