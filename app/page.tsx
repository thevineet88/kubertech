import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Home from "@/views/Home";

export const metadata: Metadata = buildMetadata({
  title: "Kuber Tech Solutions: AI, Cloud, IoT & Full-Stack Engineering",
  description:
    "Full-stack, AI, cloud, and IoT engineering for funded startups in the US, UK, and UAE. We build fast, scalable products and the infrastructure behind them.",
  path: "/",
});

export default function Page() {
  return <Home />;
}
