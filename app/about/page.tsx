import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getAllIssues } from "@/lib/newsletter";
import About from "@/views/About";

export const metadata: Metadata = buildMetadata({
  title: "About Vinit Brahmankar | Kuber Tech Solutions",
  description:
    "Meet Vinit Brahmankar, the full-stack engineer behind Kuber Tech Solutions.",
  path: "/about",
});

export default function Page() {
  return <About latestIssue={getAllIssues()[0]} />;
}
