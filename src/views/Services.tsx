import Link from "next/link";
import AmbientMeshBackground from "../components/AmbientMeshBackground";
import BookingButton from "../components/BookingButton";
import FaqAccordion from "../components/FaqAccordion";
import PageHeader from "../components/PageHeader";
import { buildFaqSchema, type Faq } from "../lib/schema";

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
    id: "iot-connected-hardware",
    tag: "IoT & Connected Hardware",
    answer:
      "We build embedded hardware control systems that connect device-side logic, cloud fleet management, and mobile apps. Think Raspberry Pi controllers for solar, battery, awning, wind sensing, and telemetry workflows that need to work online and offline.",
    points: [
      "Raspberry Pi controllers, CAN bus drivers, motor control, BLE pairing",
      "AWS IoT Greengrass/Core, MQTT telemetry, ECR/S3 component delivery",
      "Tailscale-secured device access and GitHub Actions deployment pipelines",
      "Versioned OTA updates, rollback, local storage, and sync-to-cloud",
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

const faqs: Faq[] = [
  {
    q: "Can we bring you in for one area, or do you need the whole stack?",
    a: "One area is fine, and plenty of engagements start that way, usually with a single specific problem like a checkout flow that has gotten slow or a retrieval system returning the wrong documents. Others span several areas because the problem genuinely does. The Rivian work covered AI engineering, cloud infrastructure, and observability together, since splitting them would have meant three teams negotiating over the same latency budget.",
  },
  {
    q: "How do you scope and price the work?",
    a: "We scope before we quote. That means understanding what you are building, what already exists, and where the real constraint sits, which is frequently not where it first appears. On the Marks and Spencer engagement the assumed problem was JavaScript bundle size. It turned out to be render-blocking third-party scripts and unoptimized hero imagery. Scoping first is what keeps a quote honest rather than optimistic.",
  },
  {
    q: "What does the team on a project usually look like?",
    a: "Small, and shaped around the work rather than a template. The custom print platform ran with two frontend engineers, three backend engineers, and one QA over roughly six months. We would rather tell you a project needs four people and explain why than staff it with eight and find work for them.",
  },
  {
    q: "How does an India-based team work with US and UK schedules?",
    a: "We are in IST, UTC+5:30, and we hold deliberate overlap windows with US Eastern and UK hours rather than expecting people to reach us whenever. Everything outside those windows runs async: decisions and progress land in writing, and reviewable work arrives on a predictable cadence. It is a different arrangement from generic outsourcing, and it is built that way deliberately.",
  },
  {
    q: "Do you hand the system over at the end, or stay involved?",
    a: "Either, depending on what the system needs. The goal is infrastructure your own team can operate after launch, which means readable code, documented decisions, and infrastructure as code where it applies. When staying on is the right call, we stay. The custom print engagement continued about six months past initial launch through A/B testing and new feature work, with no regressions shipped.",
  },
  {
    q: "Is this mostly new builds, or do you take on existing systems?",
    a: "Both, and a good share is existing production systems. Marks and Spencer was a live platform serving over two million product pages a month, not a greenfield build. Working inside something already carrying real traffic is a different discipline: you have users to protect and no appetite for regressions while you change the rendering path underneath them.",
  },
];

export default function Services() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[var(--color-bg)]">
      <AmbientMeshBackground />
      <PageHeader
        jsonLd={[servicesJsonLd, buildFaqSchema(faqs)]}
        backTo={{ fallback: "/", label: "Back to Kuber Tech" }}
        eyebrow="Services"
        title="AI, cloud, IoT, and product engineering, under one team."
        description="Our team partners with funded startups and hardware-enabled products across AI, HealthTech, FinTech, EdTech, and connected devices, engaged for one of these areas, or several of them together."
      />

      {/* Service grid */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-10 sm:pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="h-full rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7 hover:border-[color:var(--color-accent)] transition-colors duration-300 flex flex-col scroll-mt-24"
            >
              <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-[color:var(--color-accent)] mb-3">
                {s.tag}
              </p>
              <h2 className="sr-only">{s.tag}</h2>
              <p className="text-[14px] sm:text-[15px] text-[color:var(--color-text-muted)] leading-[1.6] mb-6">
                {s.answer}
              </p>
              <ul className="mt-auto pt-5 border-t border-[color:var(--color-border)] space-y-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="text-[13px] sm:text-[13.5px] text-[color:var(--color-text-subtle)] leading-snug flex items-start gap-2"
                  >
                    <span className="text-[color:var(--color-accent)] mt-1">•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-10 sm:pb-14">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-white/30 mb-8">
          Common questions
        </p>
        <FaqAccordion faqs={faqs} />
      </div>

      {/* Cross-link: remote engineering */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-10 sm:pb-14">
        <div className="rounded-2xl bg-[var(--color-surface)] border border-[color:var(--color-border)] p-6 sm:p-8">
          <p className="text-[14px] sm:text-[15px] text-[color:var(--color-text-muted)] leading-[1.6]">
            Based in the US or UK and exploring remote engineering capacity?
            See how we{" "}
            <Link
              href="/remote-engineering-india"
              className="text-[color:var(--color-accent)] font-medium hover:underline"
            >
              deliver async-first with US and UK teams from India
            </Link>
            .
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 border-t border-[color:var(--color-border)]">
        <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
          <h2
            className="font-medium leading-[1.1] tracking-[-0.02em] text-[color:var(--color-text)] mb-4"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}
          >
            Currently taking on new engagements.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[color:var(--color-text-muted)] leading-[1.6] max-w-lg mb-8">
            Tell us what you're building. If your scope fits one of these
            seven areas, let's talk.
          </p>
          <BookingButton />
        </div>
      </div>
    </div>
  );
}
