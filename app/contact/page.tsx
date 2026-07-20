import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Contact from "@/views/Contact";

export const metadata: Metadata = buildMetadata({
  title: "Contact Kuber Tech Solutions",
  description:
    "Contact Kuber Tech Solutions to scope AI, cloud, and full-stack product engineering work.",
  path: "/contact",
});

export default function Page() {
  return <Contact />;
}
