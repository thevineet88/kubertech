import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import MarksAndSpencerCaseStudy from "@/views/MarksAndSpencerCaseStudy";

export const metadata: Metadata = buildMetadata({
  title: "M&S Performance Case Study | Kuber Tech Solutions",
  description:
    "LCP improved from 4.1s to 1.8s across 2M+ monthly product pages and checkout conversion doubled from 2% to 4%, backed by a 50–60 component design system.",
  path: "/case-studies/marks-and-spencer-performance",
  ogType: "article",
});

export default function Page() {
  return <MarksAndSpencerCaseStudy />;
}
