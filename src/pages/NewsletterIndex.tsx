import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import BackLink from "../components/BackLink";
import { getAllIssues, formatIssueDate } from "../lib/newsletter";

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
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {issues.map((issue) => (
              <Link
                key={issue.slug}
                to={`/newsletter/${issue.slug}`}
                className="group flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-8 py-8 sm:py-10"
              >
                <span className="shrink-0 sm:w-40 text-[13px] font-medium uppercase tracking-wider text-gray-400">
                  {formatIssueDate(issue.date)}
                </span>
                <div className="flex-1">
                  <h2 className="text-[19px] sm:text-[22px] font-semibold text-gray-900 leading-[1.3] mb-2 flex items-center gap-2">
                    {issue.title}
                    <ArrowRight
                      size={16}
                      className="text-gray-400 group-hover:text-[#F26522] group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
                    />
                  </h2>
                  <p className="text-[14.5px] sm:text-[15px] text-gray-600 leading-[1.6]">
                    {issue.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
