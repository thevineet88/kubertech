import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Services from "@/views/Services";

export const metadata: Metadata = buildMetadata({
  title: "AI, Cloud & Full-Stack Services | Kuber Tech Solutions",
  description:
    "AI engineering, cloud infrastructure, IoT and connected hardware, frontend engineering, full-stack development, design systems, and performance optimization.",
  path: "/services",
});

export default function Page() {
  return <Services />;
}
