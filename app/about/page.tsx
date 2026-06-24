import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kuber Tech Solutions is a full-stack web development studio covering frontend, backend, and cloud in-house.",
};

const capabilities = [
  {
    title: "Frontend",
    body: "React, TypeScript, and Next.js (SSR, SSG, ISR), built for Core Web Vitals and real-user performance. Design systems at enterprise scale, with analytics and experimentation wired in from the start.",
  },
  {
    title: "Backend",
    body: "APIs and data layers that hold up under load, with clean data models, solid auth, and GraphQL or REST designed around the clients that consume them.",
  },
  {
    title: "Cloud and DevOps",
    body: "AWS infrastructure as code with Terraform, Kubernetes and Docker, CI/CD pipelines, and observability. AWS Solutions Architect, CKA, and HashiCorp Terraform Associate certified, with a track record of 99.9% uptime.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-8 md:pt-28">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">About us</h1>
        <p className="text-[#a3a3a3] text-lg max-w-xl leading-relaxed">
          A full-stack web development studio. Frontend, backend, and cloud,
          covered in-house.
        </p>
      </div>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-6 pb-16 md:pb-20">
        <div className="max-w-2xl space-y-5">
          <p className="text-[#fafafa] leading-relaxed">
            Kuber Tech Solutions builds fast, conversion-focused web products and
            the cloud infrastructure behind them. The motto is simple: ship
            products fast without sacrificing quality.
          </p>
          <p className="text-[#fafafa] leading-relaxed">
            Most agencies solve the staffing problem by adding layers: account
            managers who translate requirements, project managers who coordinate
            handoffs, subcontractors brought in to fill gaps. By the time code gets
            written, the original context is diluted. We work differently. The same
            team that scopes your work designs it, ships it, and runs the
            infrastructure behind it.
          </p>
          <p className="text-[#fafafa] leading-relaxed">
            Covering the full stack in-house is the core of how we work. Frontend
            performance, backend architecture, and cloud reliability are not
            separate vendors with separate priorities, they are one team with one
            view of your system. That is what lets us move fast without things
            breaking between disciplines.
          </p>
          <p className="text-[#fafafa] leading-relaxed">
            We take on work a lean senior team can deliver well, for clients of any
            size. What we care about is that the problem is real and the work is
            good.
          </p>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="border-y border-[#262626] bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-medium mb-10">
            What sets us apart
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Full stack, in-house",
                body: "Frontend, backend, and cloud are all covered by the team itself. No specialists brought in for individual surfaces, no gaps between disciplines.",
              },
              {
                title: "Outcomes, not output",
                body: "We measure success in Core Web Vitals, conversion, uptime, and MTTR, not in tickets closed. Metrics drive the work, not the other way around.",
              },
              {
                title: "You own what we build",
                body: "You own the code, the repo, and the documentation. No lock-in. We build it to last well beyond the engagement.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-medium text-[#fafafa] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <h2 className="text-2xl md:text-3xl font-medium mb-12">
          What we cover
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="border border-[#262626] rounded-lg p-6 bg-[#0a0a0a]"
            >
              <h3 className="text-base font-medium text-[#fafafa] mb-3">
                {c.title}
              </h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
