import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CustomPrintPlatformCaseStudy from "@/views/CustomPrintPlatformCaseStudy";

export const metadata: Metadata = buildMetadata({
  title: "Custom Print Platform Case Study | Kuber Tech Solutions",
  description:
    "A real-time canvas design tool built on Konva.js and WebSockets, shipped and iterated over six months with zero regressions.",
  path: "/case-studies/custom-print-platform",
  ogType: "article",
});

export default function Page() {
  return <CustomPrintPlatformCaseStudy />;
}
