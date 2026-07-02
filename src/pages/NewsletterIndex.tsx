import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { getAllIssues, formatIssueMonth, groupIssuesByYear } from "../lib/newsletter";

const hubJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Newsletter | Kuber Tech Solutions",
  description:
    "Monthly notes on the engineering decisions, trade-offs, and lessons behind the systems Kuber Tech Solutions builds.",
  url: "https://kubertechsolutions.in/newsletter",
};

export default function NewsletterIndex() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const issues = getAllIssues();
  const yearGroups = groupIssuesByYear(issues);

  return (
    <div className="min-h-screen bg-paper">
      <PageHeader
        variant="article"
        seo={{
          title: "Newsletter | Kuber Tech Solutions",
          description:
            "Monthly notes on the engineering decisions, trade-offs, and lessons behind the systems Kuber Tech Solutions builds.",
          path: "/newsletter",
          jsonLd: hubJsonLd,
        }}
        backTo={{ fallback: "/", label: "Back to Kuber Tech", alwaysFallback: true }}
        eyebrow="Newsletter"
        title="Notes from the build."
        description="One issue a month on what we shipped, what broke, and what we'd do differently, straight from the engagements we're running."
      />

      {/* Timeline */}
      <div className="max-w-[680px] mx-auto px-5 sm:px-0 pb-16 sm:pb-24">
        {issues.length === 0 ? (
          <p className="text-[15px] text-gray-500">
            The first issue is on its way.
          </p>
        ) : (
          <div className="border-t border-gray-200">
            {yearGroups.map((group) => (
              <div
                key={group.year}
                className="flex gap-6 sm:gap-10 border-b border-gray-200 py-8 sm:py-10"
              >
                <span className="shrink-0 w-12 sm:w-16 text-[14px] sm:text-[15px] font-semibold text-brand pt-1">
                  {group.year}
                </span>
                <div className="flex-1 divide-y divide-gray-100">
                  {group.issues.map((issue) => (
                    <Link
                      key={issue.slug}
                      to={`/newsletter/${issue.slug}`}
                      className="group flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-6 py-5 first:pt-0 last:pb-0"
                    >
                      <span className="shrink-0 sm:w-24 text-[12px] font-medium uppercase tracking-wider text-gray-400">
                        {formatIssueMonth(issue.date)}
                      </span>
                      <div className="flex-1">
                        <h2 className="text-[17px] sm:text-[19px] font-semibold text-gray-900 leading-[1.3] mb-1.5">
                          {issue.title}
                        </h2>
                        <p className="text-[14px] text-gray-600 leading-[1.6]">
                          {issue.summary}
                        </p>
                      </div>
                      <ArrowRight
                        size={15}
                        className="shrink-0 self-center sm:ml-auto text-gray-400 group-hover:text-brand group-hover:translate-x-0.5 transition-all duration-200"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
