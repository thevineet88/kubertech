import matter from "gray-matter";
import { marked } from "marked";
import { z } from "zod";

export interface NewsletterIssue {
  title: string;
  date: string;
  slug: string;
  summary: string;
  html: string;
}

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

const modules = import.meta.glob("/content/newsletter/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const issues: NewsletterIssue[] = Object.entries(modules).map(([path, raw]) => {
  const { data, content } = matter(raw);
  const result = frontmatterSchema.safeParse(data);

  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
      .join("\n");
    throw new Error(`Invalid newsletter frontmatter in ${path}:\n${issues}`);
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

export function formatIssueDate(date: string): string {
  const [year, month] = date.split("-").map(Number);
  if (!year || !month) return date;
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function formatIssueMonth(date: string): string {
  const [year, month] = date.split("-").map(Number);
  if (!year || !month) return date;
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString("en-US", {
    month: "long",
    timeZone: "UTC",
  });
}

export function groupIssuesByYear(
  issuesToGroup: NewsletterIssue[],
): { year: string; issues: NewsletterIssue[] }[] {
  const groups: { year: string; issues: NewsletterIssue[] }[] = [];

  for (const issue of issuesToGroup) {
    const year = issue.date.slice(0, 4);
    const lastGroup = groups[groups.length - 1];
    if (lastGroup && lastGroup.year === year) {
      lastGroup.issues.push(issue);
    } else {
      groups.push({ year, issues: [issue] });
    }
  }

  return groups;
}
