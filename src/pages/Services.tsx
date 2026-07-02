import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { openBooking } from "../booking";
import PageHeader from "../components/PageHeader";

const services = [
  {
    id: "ai-engineering",
    tag: "AI Engineering",
    answer:
      "We build production AI systems, RAG pipelines, copilots, document search, agentic workflows, that are traceable, evaluatable, and cost-controlled, not demos that fall apart under real usage.",
    points: [
      "RAG and hybrid search pipelines",
      "Agentic workflows and copilots",
      "LLM evaluation and guardrails",
      "Cost and latency optimization for inference",
    ],
  },
  {
    id: "cloud-infrastructure",
    tag: "Cloud & Infrastructure",
    answer:
      "We own the infrastructure a product runs on, not just the application. Provisioning, CI/CD, observability, and the operational discipline that keeps it reliable under real traffic.",
    points: [
      "Infrastructure as code and provisioning",
      "CI/CD pipeline design",
      "Observability, alerting, and incident response",
      "Cost-optimized, autoscaling architecture",
    ],
  },
  {
    id: "frontend-engineering",
    tag: "Frontend Engineering",
    answer:
      "We build the product surface your users actually touch, engineered for maintainability and correctness, not just a working demo. The stack is picked for the requirement, never assumed in advance.",
    points: [
      "Component architecture and code review standards",
      "Accessibility and cross-browser support",
      "State management and data-layer integration",
      "Stack chosen for the requirement, not a default",
    ],
  },
  {
    id: "full-stack-development",
    tag: "Full-Stack Development",
    answer:
      "We pair frontend and backend capability so a feature ships as one piece of work, not two disconnected halves waiting on each other.",
    points: [
      "API design and data-layer architecture",
      "End-to-end feature ownership",
      "Backend technology matched to the requirement",
      "Analytics and third-party integration",
    ],
  },
  {
    id: "design-systems",
    tag: "Design Systems",
    answer:
      "We build and maintain governed component libraries that let multiple product squads ship consistent UI without each one re-solving the same problems.",
    points: [
      "Component library architecture on design tokens",
      "Multi-brand theming support",
      "Documentation for design and engineering handoff",
      "Adoption support across product squads",
    ],
  },
  {
    id: "performance-optimization",
    tag: "Performance Optimization",
    answer:
      "We diagnose and fix the Core Web Vitals issues that are actually costing conversion, not the ones a generic audit tool flags by default.",
    points: [
      "Core Web Vitals audits against real traffic",
      "Rendering strategy and asset optimization",
      "Third-party script and analytics sequencing",
      "Conversion-linked performance reporting",
    ],
  },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software Engineering",
  provider: {
    "@type": "Organization",
    name: "Kuber Tech Solutions",
    url: "https://kubertechsolutions.in",
  },
  areaServed: ["US", "GB", "AE", "IN"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Engineering Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.tag,
        description: s.answer,
      },
    })),
  },
};

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-paper">
      <PageHeader
        seo={{
          title: "AI, Cloud & Full-Stack Services | Kuber Tech Solutions",
          description:
            "AI engineering, cloud infrastructure, frontend engineering, full-stack development, design systems, and performance optimization for funded startups.",
          path: "/services",
          jsonLd: servicesJsonLd,
        }}
        backTo={{ fallback: "/", label: "Back to Kuber Tech" }}
        eyebrow="Services"
        title="AI, cloud, and product engineering, under one team."
        description="Our team partners with funded startups in AI, HealthTech, FinTech, and EdTech across the US, UK, and UAE, engaged for one of these six areas, or several of them together."
      />

      {/* Service grid */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-10 sm:pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="h-full rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 hover:border-gray-300 transition-colors duration-300 flex flex-col scroll-mt-24"
            >
              <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-brand mb-3">
                {s.tag}
              </p>
              <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.6] mb-6">
                {s.answer}
              </p>
              <ul className="mt-auto pt-5 border-t border-gray-100 space-y-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="text-[13px] sm:text-[13.5px] text-gray-600 leading-snug flex items-start gap-2"
                  >
                    <span className="text-brand mt-1">•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      {/* Cross-link: remote engineering */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-10 sm:pb-14">
        <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8">
          <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.6]">
            Based in the US or UK and exploring remote engineering capacity?
            See how we{" "}
            <Link
              to="/remote-engineering-india"
              className="text-brand font-medium hover:underline"
            >
              deliver async-first with US and UK teams from India
            </Link>
            .
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
          <h2
            className="font-medium leading-[1.1] tracking-[-0.02em] text-gray-900 mb-4"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}
          >
            Currently taking on new engagements.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-gray-600 leading-[1.6] max-w-lg mb-8">
            Tell us what you're building. If your scope fits one of these
            six areas, let's talk.
          </p>
          <button
            type="button"
            onClick={openBooking}
            className="group inline-flex items-center gap-2 bg-gray-900 hover:bg-brand text-white text-[14px] font-medium rounded-full pl-6 pr-2 py-2.5 transition-colors duration-300"
          >
            <span>Book a free 30-min call</span>
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shrink-0">
              <ArrowRight
                size={12}
                className="text-gray-900 transition-transform duration-500 group-hover:-rotate-45"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.25,0.1,0.25,1)",
                }}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
