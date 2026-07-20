import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import {
  getAllIssues,
  getIssueBySlug,
  getAdjacentIssues,
} from "@/lib/newsletter";
import NewsletterIssue from "@/views/NewsletterIssue";

type Params = { slug: string };

// Prerenders every issue as static HTML at build time.
export function generateStaticParams(): Params[] {
  return getAllIssues().map((issue) => ({ slug: issue.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);

  if (!issue) return {};

  return buildMetadata({
    title: `${issue.title} | Kuber Tech Solutions Newsletter`,
    description: issue.summary,
    path: `/newsletter/${issue.slug}`,
    ogType: "article",
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);

  // The Vite app redirected unknown slugs to /newsletter, which returned a
  // soft 200. A real 404 is the correct signal for crawlers.
  if (!issue) notFound();

  const { previous, next } = getAdjacentIssues(slug);

  return <NewsletterIssue issue={issue} previous={previous} next={next} />;
}
