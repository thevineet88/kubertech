import { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { getIssueBySlug, getAdjacentIssues, formatIssueDate } from "../lib/newsletter";

export default function NewsletterIssue() {
  const { slug = "" } = useParams();
  const issue = getIssueBySlug(slug);
  const [photoFailed, setPhotoFailed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!issue) {
    return <Navigate to="/newsletter" replace />;
  }

  const { previous, next } = getAdjacentIssues(slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: issue.title,
    description: issue.summary,
    datePublished: issue.date,
    dateModified: issue.date,
    author: {
      "@type": "Organization",
      name: "Kuber Tech Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "Kuber Tech Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://kubertechsolutions.in/logos/KuberTechLogo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://kubertechsolutions.in/newsletter/${issue.slug}`,
    },
  };

  const avatar = (size: "sm" | "lg") => (
    <div
      className={`${size === "sm" ? "w-10 h-10" : "w-12 h-12"} rounded-full bg-brand/10 overflow-hidden shrink-0 flex items-center justify-center`}
    >
      {photoFailed ? (
        <span className={`${size === "sm" ? "text-[12px]" : "text-[13px]"} font-semibold text-brand`}>
          VB
        </span>
      ) : (
        <img
          src="/team/vinit.png"
          alt="Vinit Brahmankar"
          className="w-full h-full object-cover"
          onError={() => setPhotoFailed(true)}
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-paper">
      <PageHeader
        variant="article"
        seo={{
          title: `${issue.title} | Kuber Tech Solutions Newsletter`,
          description: issue.summary,
          path: `/newsletter/${issue.slug}`,
          ogType: "article",
          jsonLd: articleJsonLd,
        }}
        backTo={{ fallback: "/newsletter", label: "Back to newsletter", alwaysFallback: true }}
        eyebrow={formatIssueDate(issue.date)}
        title={issue.title}
      >
        <blockquote className="border-l-2 border-brand pl-4 sm:pl-5">
          <p className="text-[17px] sm:text-[19px] italic text-gray-500 leading-[1.55]">
            {issue.summary}
          </p>
        </blockquote>

        <div className="flex items-center gap-3 mt-10">
          {avatar("sm")}
          <div className="leading-tight">
            <p className="text-[13px] font-semibold text-gray-900 uppercase tracking-wide">
              Vinit Brahmankar
            </p>
            <p className="text-[13px] text-gray-500 mt-0.5">
              {formatIssueDate(issue.date)} · Founder
            </p>
          </div>
        </div>
      </PageHeader>

      {/* Article body */}
      <div className="max-w-[680px] mx-auto px-5 sm:px-0 pb-12 sm:pb-16">
        <div
          className="newsletter-prose"
          dangerouslySetInnerHTML={{ __html: issue.html }}
        />
      </div>

      {/* Author bio */}
      <div className="max-w-[680px] mx-auto px-5 sm:px-0 pb-12 sm:pb-16">
        <div className="flex gap-4 border-t border-gray-200 pt-8">
          {avatar("lg")}
          <div>
            <p className="text-[12px] text-gray-500 mb-1">Written by</p>
            <p className="text-[15px] font-semibold text-gray-900 mb-2">Vinit Brahmankar</p>
            <p className="text-[14px] text-gray-600 leading-[1.6] max-w-lg">
              Founder of Kuber Tech Solutions. I write these straight out of
              whatever we're building that month, the calls we made and why,
              and what we'd do differently next time.
            </p>
          </div>
        </div>
      </div>

      {/* Prev / next navigation */}
      {(previous || next) && (
        <div className="max-w-[680px] mx-auto px-5 sm:px-0 pb-16 sm:pb-24">
          <div className="border-t border-gray-200 pt-8 grid sm:grid-cols-2 gap-4 sm:gap-6">
            {previous ? (
              <Link
                to={`/newsletter/${previous.slug}`}
                className="group flex flex-col gap-2 rounded-2xl border border-gray-200 hover:border-gray-300 p-5 transition-colors duration-200"
              >
                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-wider text-gray-400">
                  <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
                  Previous issue
                </span>
                <span className="text-[14.5px] font-semibold text-gray-900 leading-[1.4]">
                  {previous.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to={`/newsletter/${next.slug}`}
                className="group flex flex-col gap-2 rounded-2xl border border-gray-200 hover:border-gray-300 p-5 text-right sm:items-end transition-colors duration-200"
              >
                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-wider text-gray-400">
                  Next issue
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
                <span className="text-[14.5px] font-semibold text-gray-900 leading-[1.4]">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
