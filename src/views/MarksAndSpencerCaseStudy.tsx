import { ArrowRight } from "lucide-react";
import { AUTHOR_VINIT, ORGANIZATION } from "../lib/schema";
import { BACK_LINK_CLASS } from "../lib/layout";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import MetricsGrid from "../components/MetricsGrid";
import SectionDivider from "../components/SectionDivider";
import BackLink from "../components/BackLink";

const metrics = [
  {
    value: "4.1s → 1.8s",
    label: "Largest Contentful Paint (LCP) across 2M+ monthly product pages",
  },
  { value: "2% → 4%", label: "Checkout conversion rate, doubled" },
  {
    value: "50–60",
    label: "Component design system built and maintained across product squads",
  },
  { value: "2M+", label: "Monthly product pages served by the platform" },
];

const approach = [
  {
    n: "01",
    title: "Diagnose against real traffic, not synthetic tests",
    body: "We profiled Core Web Vitals against real production traffic rather than lab conditions alone. The biggest LCP cost wasn't where the team first assumed. Render-blocking third-party scripts and unoptimized hero imagery across product pages were the real problem, not JavaScript bundle size.",
  },
  {
    n: "02",
    title: "Rebuild the rendering strategy",
    body: "We restructured the rendering approach for product pages: moving critical content earlier in the render path, deferring non-critical scripts, and optimizing image delivery (sizing, formats, lazy loading below the fold) without changing the visual design.",
  },
  {
    n: "03",
    title: "Govern UI consistency with a design system",
    body: "Performance gains erode if every squad rebuilds components inconsistently. We built and maintained a 50–60 component design system on design tokens, used across multiple product squads, so performance budgets and accessibility standards were enforced by default, not by review.",
  },
  {
    n: "04",
    title: "Integrate martech without re-introducing the cost",
    body: "The platform ran Tealium CDP, Adobe Analytics, Adobe Target, Contentsquare, GTM, and OneTrust, all of which can quietly bring back the performance cost we'd just removed. We sequenced and lazy-loaded these integrations so analytics and consent management didn't undo the LCP work.",
  },
  {
    n: "05",
    title: "Tie performance to the metric the business cared about",
    body: "LCP improvement is a means, not an end. We tracked checkout conversion alongside Core Web Vitals throughout, which is how a 4.1s → 1.8s LCP improvement showed up as checkout conversion moving from 2% to 4%.",
  },
];

const stack = [
  { category: "Frontend", items: "React, Next.js, TypeScript" },
  {
    category: "Design system",
    items:
      "Design tokens, atomic design, 50–60 components across multiple product squads",
  },
  {
    category: "Martech",
    items:
      "Tealium CDP, Adobe Analytics, Adobe Target, Contentsquare, GTM, OneTrust",
  },
  {
    category: "Performance",
    items:
      "Core Web Vitals tuning (LCP focus), rendering strategy, asset optimization",
  },
];

const faqs = [
  {
    q: "What caused the slow LCP on the original platform?",
    a: "Render-blocking third-party scripts and unoptimized hero imagery across 2M+ monthly product pages were the real cause, not JavaScript bundle size, which is where most teams look first.",
  },
  {
    q: "How was LCP improved from 4.1s to 1.8s?",
    a: "By restructuring the rendering path to prioritize critical content, deferring non-critical scripts, optimizing image delivery, and sequencing martech integrations (Tealium, Adobe Analytics, Adobe Target, Contentsquare, GTM, OneTrust) so they didn't reintroduce the performance cost.",
  },
  {
    q: "Did the design system slow down development?",
    a: "No. A governed 50–60 component design system on design tokens let multiple product squads ship consistent, performant UI without each squad re-solving accessibility and performance from scratch.",
  },
  {
    q: "How did LCP improvement translate to checkout conversion?",
    a: "Checkout conversion doubled from 2% to 4% over the engagement, tracked alongside Core Web Vitals throughout, since on a commerce platform, page speed and willingness to complete checkout are directly linked.",
  },
];

const caseStudyJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Marks & Spencer Performance Case Study: LCP 4.1s to 1.8s, Conversion 2% to 4%",
    description:
      "How a governed design system and a rebuilt rendering strategy took Largest Contentful Paint from 4.1s to 1.8s across 2M+ monthly product pages, doubling checkout conversion from 2% to 4%.",
    author: AUTHOR_VINIT,
    publisher: ORGANIZATION,
    datePublished: "2026-06-30",
    dateModified: "2026-06-30",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  },
];

export default function MarksAndSpencerCaseStudy() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <JsonLd data={caseStudyJsonLd} />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-6 sm:pt-8">
        <BackLink
          fallback="/case-studies"
          label="Back"
          className={BACK_LINK_CLASS}
        />
      </div>

      {/* Hero, answer-first */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-10 sm:pb-14">
        <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-[color:var(--color-accent)] mb-4">
          Full-stack commerce case study
        </p>
        <h1
          className="font-medium leading-[1.08] tracking-[-0.03em] text-white mb-6 max-w-4xl"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3.8rem)" }}
        >
          Marks &amp; Spencer: LCP from 4.1s to 1.8s, conversion 2% to 4%.
        </h1>
        <p className="text-[16px] sm:text-[18px] text-white/60 leading-[1.6] max-w-2xl">
          We rebuilt the rendering strategy and governed it with a 50–60
          component design system across 2M+ monthly product pages, taking
          Largest Contentful Paint from 4.1s to 1.8s and doubling checkout
          conversion from 2% to 4%.
        </p>

        {/* Metrics */}
        <MetricsGrid metrics={metrics} size="md" />
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
              A 2M+ monthly page e-commerce platform was losing checkout
              conversion to slow Largest Contentful Paint: 4.1 seconds on
              product pages, well past the point where users start abandoning
              before the page is even usable.
            </p>
            <p className="text-[16px] sm:text-[17px] text-white/80 leading-[1.65]">
              Multiple product squads were shipping UI independently, which
              meant performance regressions kept re-appearing even after fixes
              landed, and the platform's heavy martech stack (Tealium, Adobe
              Analytics, Adobe Target, Contentsquare, GTM, OneTrust) was a
              recurring source of render-blocking cost.
            </p>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* Approach */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-white/30 mb-10">
          Our approach
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {approach.map((a) => (
            <div
              key={a.n}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7"
            >
              <p className="text-[28px] sm:text-[32px] font-semibold text-[color:var(--color-accent)] leading-none mb-4">
                {a.n}
              </p>
              <h3 className="text-[16px] sm:text-[17px] font-semibold text-white mb-3 leading-snug">
                {a.title}
              </h3>
              <p className="text-[13.5px] text-white/55 leading-[1.65]">
                {a.body}
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* FAQ */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-white/30 mb-8">
          Frequently asked
        </p>
        <div className="space-y-6 max-w-3xl">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="text-[15px] sm:text-[16px] font-semibold text-white mb-2">
                {f.q}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-white/55 leading-[1.65]">
                {f.a}
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
          Got a slow product losing conversion?
        </h2>
        <p className="text-[15px] sm:text-[16px] text-white/55 leading-[1.6] max-w-lg mb-8">
          Our team specializes in exactly this kind of performance work. See our
          full{" "}
          <Link
            href="/services"
            className="text-[color:var(--color-accent)] hover:underline"
          >
            services
          </Link>
          .
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
