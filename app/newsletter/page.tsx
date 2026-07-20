import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getAllIssues } from "@/lib/newsletter";
import NewsletterIndex from "@/views/NewsletterIndex";

export const metadata: Metadata = buildMetadata({
  title: "Newsletter | Kuber Tech Solutions",
  description:
    "Monthly notes on the engineering decisions, trade-offs, and lessons behind the systems Kuber Tech Solutions builds.",
  path: "/newsletter",
});

export default function Page() {
  return <NewsletterIndex issues={getAllIssues()} />;
}
