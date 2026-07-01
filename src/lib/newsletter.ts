import { marked } from "marked";

export interface NewsletterIssue {
  title: string;
  date: string;
  slug: string;
  summary: string;
  html: string;
}

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };

  const [, frontmatter, body] = match;
  const data: Record<string, string> = {};

  for (const line of frontmatter.split("\n")) {
    const lineMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!lineMatch) continue;
    const [, key, rawValue] = lineMatch;
    data[key] = rawValue.trim().replace(/^"(.*)"$/, "$1");
  }

  return { data, body: body.trim() };
}

const modules = import.meta.glob("/content/newsletter/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const issues: NewsletterIssue[] = Object.values(modules)
  .map((raw) => {
    const { data, body } = parseFrontmatter(raw);
    return {
      title: data.title ?? "",
      date: data.date ?? "",
      slug: data.slug ?? "",
      summary: data.summary ?? "",
      html: marked.parse(body, { async: false }) as string,
    };
  })
  .filter((issue) => issue.slug)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

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
