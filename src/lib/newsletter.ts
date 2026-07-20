import fs from "node:fs";
import nodePath from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { z } from "zod";
import type { NewsletterIssue } from "./newsletter-format";

export type { NewsletterIssue };

const frontmatterSchema = z.object({
  title: z.string().min(1, "title is required"),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "date must be in YYYY-MM-DD format"),
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/, "slug must be lowercase, numbers, and hyphens only"),
  summary: z.string().min(1, "summary is required"),
});

// Read on the server at build time. The Vite app did this in the browser via
// import.meta.glob, which is why it needed a Buffer polyfill for gray-matter.
const CONTENT_DIR = nodePath.join(process.cwd(), "content", "newsletter");

const issues: NewsletterIssue[] = fs
  .readdirSync(CONTENT_DIR)
  .filter((file) => file.endsWith(".md"))
  .map((file) => {
    const raw = fs.readFileSync(nodePath.join(CONTENT_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const result = frontmatterSchema.safeParse(data);

    if (!result.success) {
      const problems = result.error.issues
        .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
        .join("\n");
      throw new Error(
        `Invalid newsletter frontmatter in content/newsletter/${file}:\n${problems}`,
      );
    }

    return {
      ...result.data,
      html: marked.parse(content.trim(), { async: false }) as string,
    };
  });

const slugCounts = new Map<string, number>();
for (const issue of issues) {
  slugCounts.set(issue.slug, (slugCounts.get(issue.slug) ?? 0) + 1);
}
const duplicateSlugs = [...slugCounts.entries()].filter(([, count]) => count > 1);
if (duplicateSlugs.length > 0) {
  throw new Error(
    `Duplicate newsletter slugs found: ${duplicateSlugs.map(([slug]) => slug).join(", ")}`,
  );
}

issues.sort((a, b) => (a.date < b.date ? 1 : -1));

export function getAllIssues(): NewsletterIssue[] {
  return issues;
}

export function getIssueBySlug(slug: string): NewsletterIssue | undefined {
  return issues.find((issue) => issue.slug === slug);
}

export function getAdjacentIssues(slug: string): {
  previous: NewsletterIssue | null;
  next: NewsletterIssue | null;
} {
  const index = issues.findIndex((issue) => issue.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index < issues.length - 1 ? issues[index + 1] : null,
    next: index > 0 ? issues[index - 1] : null,
  };
}

// Re-exported so server code can pull loading + formatting from one place.
export {
  formatIssueDate,
  formatIssueMonth,
  groupIssuesByYear,
} from "./newsletter-format";
