import Link from "next/link";
import CtaBand from "@/components/CtaBand";

const services = [
  {
    title: "Frontend",
    description:
      "Fast, accessible interfaces built to convert. React, Next.js, TypeScript, Tailwind. Performant by default, with Core Web Vitals and real-user experience as the measure of success.",
  },
  {
    title: "Backend",
    description:
      "APIs and data layers that hold up under load. Ruby on Rails and Node.js in production, with solid auth, clean data models, and the kind of structure that does not slow teams down later.",
  },
  {
    title: "DevOps and cloud",
    description:
      "AWS infrastructure that runs reliably and scales without drama. Terraform, Kubernetes, Docker, CI/CD pipelines. 99.9% uptime is the floor, not the goal.",
  },
  {
    title: "Full-stack delivery",
    description:
      "End-to-end ownership from design to deployment. One team, no handoffs, no information lost between disciplines. Shipped in fast iterations with you in the loop at every step.",
  },
];

const caseStudies = [
  {
    slug: "marks-and-spencer",
    client: "Marks and Spencer",
    summary:
      "Product pages serving millions of monthly users were slow and hurting conversion at scale.",
    metric: "LCP 4.1s to 1.8s",
    metricSub: "across 2M+ monthly product pages",
  },
  {
    slug: "jiffy-conversion",
    client: "Jiffy",
    summary:
      "Checkout was leaking conversions and the team was shipping on guesswork rather than data.",
    metric: "Checkout conversion 2% to 4%",
    metricSub: "across 40k+ monthly users",
  },
  {
    slug: "cloud-reliability",
    client: "Cloud and DevOps",
    summary:
      "A regulated banking platform needed high availability and auditable, automated delivery at scale.",
    metric: "99.9% uptime, MTTR down 30%",
    metricSub: "across 50+ production workloads",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We scope the work properly before quoting anything. That means understanding your goals, constraints, and what done looks like, not just what you want built.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "You work directly with the team building your product. No account managers, no handoff loss. Shipped in fast iterations with you reviewing real progress, not slide decks.",
  },
  {
    number: "03",
    title: "Handoff",
    description:
      "You own the code and the repo, no lock-in. We document what we built and why. Optional ongoing support if you want us to keep moving with you.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.08] tracking-tight mb-6">
            Speed is a feature.
            <br />
            <span className="text-[#ccff00]">So is craft.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#a3a3a3] max-w-xl mb-10 leading-relaxed">
            We build fast, conversion-focused web products and the infrastructure
            behind them.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#ccff00] text-[#1a2200] font-medium rounded hover:bg-[#d9ff33] transition-colors duration-150"
            >
              Start a project
            </Link>
            <Link
              href="/case-studies"
              className="px-6 py-3 border border-[#262626] text-[#fafafa] rounded hover:border-[#a3a3a3] transition-colors duration-150"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* Intro band */}
      <section className="border-y border-[#262626] bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-lg md:text-xl text-[#a3a3a3] max-w-2xl leading-relaxed">
            You have a product that needs to move faster, a site that is not
            converting, or cloud infrastructure that breaks at the worst possible
            moment. Kuber Tech Solutions covers frontend, backend, and cloud
            in-house, so the same team that designs your product also ships it and
            runs the infrastructure behind it.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <h2 className="text-2xl md:text-3xl font-medium mb-12">
          What we build
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-[#262626] rounded-lg p-6 bg-[#0a0a0a] hover:border-[#3a3a3a] transition-colors duration-200"
            >
              <h3 className="text-base font-medium text-[#fafafa] mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/services"
            className="text-sm text-[#a3a3a3] hover:text-[#ccff00] transition-colors duration-150"
          >
            Full service details &rarr;
          </Link>
        </div>
      </section>

      {/* Selected work */}
      <section className="border-t border-[#262626] bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-2xl md:text-3xl font-medium mb-12">
            Selected work
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies#${cs.slug}`}
                className="group border border-[#262626] rounded-lg p-6 bg-[#0a0a0a] hover:border-[#3a3a3a] transition-colors duration-200 flex flex-col"
              >
                <p className="text-xs text-[#a3a3a3] uppercase tracking-widest mb-3">
                  {cs.client}
                </p>
                <p className="text-sm text-[#fafafa] leading-relaxed mb-6 flex-1">
                  {cs.summary}
                </p>
                <div className="border-t border-[#262626] pt-4">
                  <p className="text-[#ccff00] font-medium text-sm">
                    {cs.metric}
                  </p>
                  <p className="text-xs text-[#a3a3a3] mt-1">{cs.metricSub}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/case-studies"
              className="text-sm text-[#a3a3a3] hover:text-[#ccff00] transition-colors duration-150"
            >
              View all case studies &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-t border-[#262626] bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-2xl md:text-3xl font-medium mb-12">
            How we work
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step) => (
              <div key={step.number}>
                <p className="text-[#ccff00] text-sm font-medium mb-3">
                  {step.number}
                </p>
                <h3 className="text-base font-medium text-[#fafafa] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand />
    </>
  );
}
