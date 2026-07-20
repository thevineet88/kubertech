import { ArrowRight } from "lucide-react";
import { AUTHOR_VINIT, ORGANIZATION } from "../lib/schema";
import { BACK_LINK_CLASS } from "../lib/layout";
import Link from "next/link";
import BackLink from "../components/BackLink";
import JsonLd from "../components/JsonLd";
import MetricsGrid from "../components/MetricsGrid";
import SectionDivider from "../components/SectionDivider";

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Custom Print Platform Case Study",
  description:
    "A canvas-based design tool built on Konva.js with WebSockets throughout, shipped and iterated on over six months with zero regressions.",
  author: AUTHOR_VINIT,
  publisher: ORGANIZATION,
  datePublished: "2026-06-30",
  dateModified: "2026-07-01",
};

const metrics = [
  {
    value: "6 mo",
    label: "Active engagement: A/B testing, iteration, no regressions",
  },
  {
    value: "3–4 wk",
    label: "POC for the canvas editor before we were confident to build on it",
  },
  {
    value: "Green",
    label: "Core Web Vitals across LCP, CLS, and FID in production",
  },
  { value: "6", label: "Engineers across frontend, backend, and QA, no bloat" },
];

const phases = [
  {
    n: "01",
    title: "Upload and instant preview",
    body: "It starts with artwork upload, drag and drop or browse. Instant preview with no page reload. Simple on the surface, but the pipeline behind it had to handle format validation, image processing, and state sync fast enough that the user never noticed the work happening.",
  },
  {
    n: "02",
    title: "The canvas editor, the hard part",
    body: "Most of the project lived here. Users resize, reposition, and adjust artwork placement on the product in real time. We built it on Konva.js, a canvas rendering library. The POC alone took three to four weeks: getting Konva talking to the Rails backend, keeping state consistent across renders, and handling edge cases in the rendering pipeline before we trusted it enough to build on.",
  },
  {
    n: "03",
    title: "WebSockets throughout",
    body: "Every change the user makes reflects instantly. No lag, no refresh. We wired WebSockets into the whole flow so the experience feels native rather than web-form-like. For a design tool where users are making dozens of small adjustments, that immediacy is the product.",
  },
  {
    n: "04",
    title: "Mobile wasn't an afterthought",
    body: "A large share of the platform's traffic is mobile. We made sure the canvas editor, the upload flow, and the customisation UI all worked properly on small screens, not a degraded experience, the same one. That took custom handling for touch events on the Konva canvas.",
  },
  {
    n: "05",
    title: "Performance and Core Web Vitals",
    body: "We got LCP, CLS, and FID into the green zone under real production traffic. That translated directly into conversion: faster load times on a commerce platform close deals that a slow one loses.",
  },
  {
    n: "06",
    title: "Six months of iteration",
    body: "This wasn't a build-and-leave engagement. We stayed on for around six months: A/B experiments, new features requested by the client, removing what wasn't working, and making sure nothing broke in the process. Consistent quality throughout with zero regressions shipped.",
  },
];

const stack = [
  {
    category: "Canvas and real-time",
    items: "Konva.js for canvas rendering, WebSockets for live state sync",
  },
  {
    category: "Frontend",
    items:
      "React, TypeScript, responsive layout including full canvas editor on mobile",
  },
  {
    category: "Backend",
    items:
      "Ruby on Rails API, image processing pipeline, cart and order management",
  },
  {
    category: "Performance",
    items:
      "Core Web Vitals tuning (LCP, CLS, FID), rendering strategy, asset optimisation",
  },
  {
    category: "Experimentation",
    items: "A/B testing framework, Mixpanel instrumentation, feature flags",
  },
  {
    category: "Team",
    items: "2 frontend engineers, 3 backend engineers, 1 QA, six months",
  },
];

export default function CustomPrintPlatformCaseStudy() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <JsonLd data={caseStudyJsonLd} />
      {/* Nav strip */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-6 sm:pt-8">
        <BackLink
          fallback="/case-studies"
          label="Back"
          className={BACK_LINK_CLASS}
        />
      </div>

      {/* Hero */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-10 sm:pb-14">
        <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-[color:var(--color-accent)] mb-4">
          Full-stack case study
        </p>
        <h1
          className="font-medium leading-[1.08] tracking-[-0.03em] text-white mb-6 max-w-4xl"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3.8rem)" }}
        >
          Custom Print Platform
        </h1>
        <p className="text-[16px] sm:text-[18px] text-white/60 leading-[1.6] max-w-2xl">
          A canvas-based design tool where users upload artwork, customise
          placement in real time, and order print products. The hard part was
          making a browser canvas feel native, on desktop and mobile, while
          keeping the backend in sync without a page reload.
        </p>

        {/* Metrics */}
        <MetricsGrid metrics={metrics} />
      </div>

      <SectionDivider />

      {/* Problem */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-white/30">
            The problem
          </p>
          <div className="space-y-5">
            <p className="text-[16px] sm:text-[17px] text-white/80 leading-[1.65]">
              This is a custom print platform. Users upload artwork, customise
              it on a product, and order. That sounds straightforward. The
              execution wasn't.
            </p>
            <p className="text-[16px] sm:text-[17px] text-white/80 leading-[1.65]">
              The core challenge was the canvas editor: a real-time design tool
              that had to feel instant, work on mobile, stay in sync with a
              Rails backend, and handle the messy edge cases of print-ready
              artwork. No off-the-shelf tool fit the requirement. We had to
              build it from the ground up.
            </p>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* Phases */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-white/30 mb-10">
          What we built
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {phases.map((ph) => (
            <div
              key={ph.n}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7"
            >
              <p className="text-[28px] sm:text-[32px] font-semibold text-[color:var(--color-accent)] leading-none mb-4">
                {ph.n}
              </p>
              <h3 className="text-[16px] sm:text-[17px] font-semibold text-white mb-3 leading-snug">
                {ph.title}
              </h3>
              <p className="text-[13.5px] text-white/55 leading-[1.65]">
                {ph.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* Stack */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-white/30 mb-8">
          Tech stack
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stack.map((s) => (
            <div
              key={s.category}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-[12px] font-semibold uppercase tracking-wider text-[color:var(--color-accent)] mb-2">
                {s.category}
              </p>
              <p className="text-[13.5px] text-white/60 leading-[1.6]">
                {s.items}
              </p>
            </div>
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* CTA */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
        <h2
          className="font-medium leading-[1.1] tracking-[-0.02em] text-white mb-4"
          style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}
        >
          Building something with this kind of depth?
        </h2>
        <p className="text-[15px] sm:text-[16px] text-white/55 leading-[1.6] max-w-lg mb-8">
          We take on complex product builds and stay in them. If your scope
          needs a team that treats your product like their own, let's talk.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C4DE8] text-white text-[14px] font-medium rounded-full pl-6 pr-2 py-2.5 transition-colors duration-300"
          >
            <span>See all work</span>
            <div className="w-7 h-7 bg-white/15 rounded-full flex items-center justify-center shrink-0">
              <ArrowRight
                size={12}
                className="text-white transition-transform duration-500 group-hover:-rotate-45"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.25,0.1,0.25,1)",
                }}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
