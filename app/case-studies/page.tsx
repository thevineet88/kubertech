import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CaseStudiesHub from "@/views/CaseStudiesHub";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies | Kuber Tech Solutions",
  description:
    "Real engagements in frontend performance, full-stack commerce, AI engineering, and IoT: Marks & Spencer, a custom print platform, Rivian, and device fleets.",
  path: "/case-studies",
});

export default function Page() {
  return <CaseStudiesHub />;
}
