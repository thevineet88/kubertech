import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import BackLink from "../components/BackLink";

const caseStudies = [
  {
    title: "Marks & Spencer: Performance & Conversion",
    tag: "Full-stack commerce platform",
    metric: "4.1s → 1.8s",
    metricLabel: "LCP across 2M+ monthly pages, conversion 2% → 4%",
    description:
      "Rebuilt the rendering strategy and governed it with a 50–60 component design system across 2M+ monthly product pages.",
    href: "/case-studies/marks-and-spencer-performance",
    gradient: "linear-gradient(135deg, #0b3d2e 0%, #05140f 100%)",
  },
  {
    title: "Custom Print Platform",
    tag: "Full-stack real-time app",
    metric: "Full funnel",
    metricLabel: "Upload, customise, checkout, owned end to end",
    description:
      "A canvas-based design tool where users upload artwork, customise placement live, and order print products, built on Konva.js with WebSockets throughout.",
    href: "/case-studies/custom-print-platform",
    gradient: "linear-gradient(135deg, #F26522 0%, #b5421a 100%)",
  },
  {
    title: "Rivian: RAG Knowledge Engine",
    tag: "AI engineering",
    metric: "sub-200ms",
    metricLabel: "500k+ docs indexed, 35% lower cloud cost",
    description:
      "An internal search system indexing 500k+ technical documents using hybrid dense + sparse retrieval, deployed on Kubernetes with sub-200ms latency.",
    href: "/case-studies/rag-knowledge-engine",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
  },
];

const hubJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Case Studies | Kuber Tech Solutions",
  description:
    "Case studies covering frontend performance, full-stack commerce, and AI engineering work delivered by Kuber Tech Solutions.",
  url: "https://kubertechsolutions.in/case-studies",
};

export default function CaseStudiesHub() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Seo
        title="Case Studies | Kuber Tech Solutions"
        description="Real engagements: frontend performance, full-stack commerce, and AI engineering work for Marks & Spencer, a custom print platform, and Rivian."
        path="/case-studies"
        jsonLd={hubJsonLd}
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-6 sm:pt-8">
        <BackLink
          fallback="/"
          label="Back to Kuber Tech"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 text-[14px] transition-colors duration-200"
        />
      </div>

      {/* Hero */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-8 sm:pb-10">
        <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-[#F26522] mb-4">
          Case studies
        </p>
        <h1
          className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-6 max-w-3xl"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3.4rem)" }}
        >
          Engagements where the numbers moved.
        </h1>
        <p className="text-[16px] sm:text-[18px] text-gray-600 leading-[1.6] max-w-2xl">
          Frontend performance, full-stack commerce, and AI engineering work
          our team has delivered for funded startups and enterprise platforms.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-10 sm:pb-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {caseStudies.map((c) => (
            <Link
              key={c.href}
              to={c.href}
              className="group block rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors duration-300"
            >
              <div
                className="relative p-6 sm:p-7 flex flex-col justify-between min-h-[200px]"
                style={{ background: c.gradient }}
              >
                <span className="text-[11px] font-medium uppercase tracking-wider text-white/70">
                  {c.tag}
                </span>
                <div>
                  <p className="text-[22px] sm:text-[24px] font-semibold text-white leading-tight">
                    {c.metric}
                  </p>
                  <p className="text-[12px] text-white/70 mt-1">
                    {c.metricLabel}
                  </p>
                </div>
              </div>
              <div className="bg-white p-5 sm:p-6">
                <p className="text-[15px] sm:text-[16px] font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  {c.title}
                  <ArrowRight
                    size={14}
                    className="text-gray-400 group-hover:text-[#F26522] group-hover:translate-x-0.5 transition-all duration-200"
                  />
                </p>
                <p className="text-[13.5px] text-gray-600 leading-[1.6]">
                  {c.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
