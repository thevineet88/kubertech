import Link from "next/link";
import AmbientMeshBackground from "../components/AmbientMeshBackground";
import PageHeader from "../components/PageHeader";

const overlaps = [
  { zone: "US East (EST/EDT)", window: "IST is 9.5–10.5 hours ahead of EST. Our early-morning IST hours (7–10am IST) land in US EST evening (9–11.30pm EST the prior day) and our late-afternoon IST hours overlap US EST early morning." },
  { zone: "UK (GMT/BST)", window: "IST is 4.5–5.5 hours ahead of UK time. Our morning IST hours (9am–1pm IST) overlap UK mid-morning to midday, giving several hours of live overlap most working days." },
  { zone: "UAE (GST)", window: "IST is only 1.5 hours ahead of GST, close to full working-day overlap, so real-time collaboration is straightforward." },
];

const practices = [
  {
    title: "Decisions and progress land in writing",
    body: "Scope, technical decisions, and daily progress are documented, not discussed in a meeting that only some people attended. Anyone on the client side can catch up asynchronously without waiting for a standup.",
  },
  {
    title: "Reviewable work on a predictable cadence",
    body: "We ship in short iterations with clear checkpoints, so a US or UK stakeholder can review progress at the start of their day without needing live sync first.",
  },
  {
    title: "Deliberate overlap windows, not 'whenever'",
    body: "We schedule our working hours to create real-time overlap with US EST mornings and UK working hours, rather than treating async as an excuse to be unavailable.",
  },
  {
    title: "One team owns the full path",
    body: "The same team that builds the frontend owns the backend and the infrastructure it runs on, so there's no cross-timezone handoff gap between teams who never overlap at all.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the time difference between India and the US for remote engineering teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "India Standard Time (IST, UTC+5:30) is 9.5 to 10.5 hours ahead of US Eastern Time depending on daylight saving. Working a deliberate early-morning IST schedule creates overlap with US EST evenings and early mornings.",
      },
    },
    {
      "@type": "Question",
      name: "How does Kuber Tech Solutions handle async communication with US and UK clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Decisions, progress, and code land in writing on a predictable cadence, so clients can review reviewable work without needing to attend live meetings. Working hours are scheduled deliberately to create real-time overlap windows with US EST and UK business hours.",
      },
    },
    {
      "@type": "Question",
      name: "Why hire a remote engineering team in India instead of a generic outsourcing firm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generic outsourcing treats frontend as commodity work. Our team specializes in frontend performance and design systems, with proven enterprise-scale results (LCP 4.1s to 1.8s, conversion 2% to 4%), not just lower hourly rates.",
      },
    },
  ],
};

export default function RemoteEngineeringIndia() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[var(--color-bg)]">
      <AmbientMeshBackground />
      <PageHeader
        jsonLd={faqJsonLd}
        backTo={{ fallback: "/", label: "Back to Kuber Tech" }}
        eyebrow="Remote engineering, India"
        title="A remote engineering team in India, built for US and UK overlap."
        description="We're an India-based engineering team (IST, UTC+5:30) delivering frontend performance, design systems, and full-stack work for funded startups in the US, UK, and UAE, with deliberate timezone overlap and an async-first workflow, not a generic outsourcing arrangement."
      />

      {/* Timezone overlap */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-8 sm:pb-10">
        <h2 className="text-[20px] sm:text-[24px] font-semibold text-[color:var(--color-text)] mb-6">
          How does the IST/EST overlap actually work?
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
          {overlaps.map((o) => (
            <div
              key={o.zone}
              className="rounded-2xl bg-[var(--color-surface)] border border-[color:var(--color-border)] p-6"
            >
              <p className="text-[14px] font-semibold text-[color:var(--color-accent)] mb-3">
                {o.zone}
              </p>
              <p className="text-[13.5px] text-[color:var(--color-text-muted)] leading-[1.6]">
                {o.window}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Practices */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-8 sm:pb-10">
        <h2 className="text-[20px] sm:text-[24px] font-semibold text-[color:var(--color-text)] mb-6">
          How do we run async-first delivery with distributed teams?
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {practices.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-[var(--color-surface)] border border-[color:var(--color-border)] p-6"
            >
              <h3 className="text-[15px] sm:text-[16px] font-semibold text-[color:var(--color-text)] mb-2">
                {p.title}
              </h3>
              <p className="text-[13.5px] text-[color:var(--color-text-muted)] leading-[1.6]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why us, not generic outsourcing */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-10 sm:pb-14 flex justify-center">
        <div className="rounded-2xl bg-[var(--color-bg-deep)] border border-[color:var(--color-border)] p-6 sm:p-10 max-w-3xl">
          <h2 className="text-[20px] sm:text-[24px] font-semibold text-white mb-4">
            Why engineering teams choose us over outsourcing firms
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[color:var(--color-text-muted)] leading-[1.65] mb-4">
            Outsourcing firms compete on rate. We compete on outcomes. On one
            engagement, we took Largest Contentful Paint from 4.1s to 1.8s
            across 2M+ monthly product pages and doubled checkout conversion
            from 2% to 4%, work still running today on a 50–60 component
            design system used across multiple product squads. That's the
            standard we hold every engagement to. Read the full{" "}
            <Link
              href="/case-studies/marks-and-spencer-performance"
              className="text-[color:var(--color-accent)] font-medium hover:underline"
            >
              Marks &amp; Spencer case study
            </Link>
            .
          </p>
          <p className="text-[14px] sm:text-[15px] text-[color:var(--color-text-muted)] leading-[1.65]">
            We specialize in frontend engineering, performance optimization,
            and design systems. See the full{" "}
            <Link href="/services" className="text-[color:var(--color-accent)] font-medium hover:underline">
              breakdown of our services
            </Link>
            .
          </p>
        </div>
      </div>

    </div>
  );
}
