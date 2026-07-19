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
        url: "https://kubertechsolutions.in/kuber_logo_dark.jpeg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://kubertechsolutions.in/newsletter/${issue.slug}`,
    },
  };

  const avatar = (size: "sm" | "lg") => (
    <div
      className={`${size === "sm" ? "w-10 h-10" : "w-12 h-12"} rounded-full bg-[#8B5CF6]/10 overflow-hidden shrink-0 flex items-center justify-center`}
    >
      {photoFailed ? (
        <span className={`${size === "sm" ? "text-[12px]" : "text-[13px]"} font-semibold text-[#8B5CF6]`}>
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
    <div className="min-h-screen bg-[#0A0A0B]">
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
        <blockquote className="border-l-2 border-[#8B5CF6] pl-4 sm:pl-5">
          <p className="text-[17px] sm:text-[19px] italic text-white/50 leading-[1.55]">
            {issue.summary}
          </p>
        </blockquote>

        <div className="flex items-center gap-3 mt-10">
          {avatar("sm")}
          <div className="leading-tight">
            <p className="text-[13px] font-semibold text-[#FAFAFA] uppercase tracking-wide">
              Vinit Brahmankar
            </p>
            <p className="text-[13px] text-white/50 mt-0.5">
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
        <div className="flex gap-4 border-t border-white/10 pt-8">
          {avatar("lg")}
          <div>
            <p className="text-[12px] text-white/50 mb-1">Written by</p>
            <p className="text-[15px] font-semibold text-[#FAFAFA] mb-2">Vinit Brahmankar</p>
            <p className="text-[14px] text-white/60 leading-[1.6] max-w-lg">
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
          <div className="border-t border-white/10 pt-8 grid sm:grid-cols-2 gap-4 sm:gap-6">
            {previous ? (
              <Link
                to={`/newsletter/${previous.slug}`}
                className="group flex flex-col gap-2 rounded-2xl border border-white/10 hover:border-[#8B5CF6]/40 p-5 transition-colors duration-200"
              >
                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-wider text-white/40">
                  <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
                  Previous issue
                </span>
                <span className="text-[14.5px] font-semibold text-[#FAFAFA] leading-[1.4]">
                  {previous.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to={`/newsletter/${next.slug}`}
                className="group flex flex-col gap-2 rounded-2xl border border-white/10 hover:border-[#8B5CF6]/40 p-5 text-right sm:items-end transition-colors duration-200"
              >
                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Next issue
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
                <span className="text-[14.5px] font-semibold text-[#FAFAFA] leading-[1.4]">
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
