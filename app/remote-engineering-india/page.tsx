import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import RemoteEngineeringIndia from "@/views/RemoteEngineeringIndia";

export const metadata: Metadata = buildMetadata({
  title: "Hire Remote Engineers in India | Kuber Tech Solutions",
  description:
    "An async-first engineering team in India, deliberate US EST and UK overlap, not generic outsourcing.",
  path: "/remote-engineering-india",
});

export default function Page() {
  return <RemoteEngineeringIndia />;
}
