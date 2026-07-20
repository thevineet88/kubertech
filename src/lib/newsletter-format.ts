/**
 * Pure helpers with no filesystem access, so client components can import them.
 * The fs-backed loading lives in ./newsletter, which is server-only.
 */

export interface NewsletterIssue {
  title: string;
  date: string;
  slug: string;
  summary: string;
  html: string;
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
