import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import BackLink from "../components/BackLink";
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
    <div className="min-h-screen bg-[#FAFAFA]">
      <Seo
        title="Newsletter | Kuber Tech Solutions"
        description="Monthly notes on the engineering decisions, trade-offs, and lessons behind the systems Kuber Tech Solutions builds."
        path="/newsletter"
        jsonLd={hubJsonLd}
      />

      <div className="max-w-[680px] mx-auto px-5 sm:px-0 pt-6 sm:pt-10">
        <BackLink
          fallback="/"
          label="Back to Kuber Tech"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 text-[14px] transition-colors duration-200"
        />
      </div>

      {/* Hero */}
      <div className="max-w-[680px] mx-auto px-5 sm:px-0 pt-10 sm:pt-12 pb-8 sm:pb-10">
        <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-[#F26522] mb-4">
          Newsletter
        </p>
        <h1
          className="font-medium leading-[1.15] tracking-[-0.03em] text-gray-900 mb-6"
          style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.6rem)" }}
        >
          Notes from the build.
        </h1>
        <p className="text-[17px] sm:text-[19px] text-gray-500 leading-[1.55]">
          One issue a month on what we shipped, what broke, and what we'd do
          differently, straight from the engagements we're running.
        </p>
      </div>

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
                <span className="shrink-0 w-12 sm:w-16 text-[14px] sm:text-[15px] font-semibold text-[#F26522] pt-1">
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
                        className="shrink-0 self-center sm:ml-auto text-gray-400 group-hover:text-[#F26522] group-hover:translate-x-0.5 transition-all duration-200"
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
