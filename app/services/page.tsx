import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Frontend, backend, DevOps and cloud, full-stack delivery. We cover the full stack in-house.",
};

const services = [
  {
    id: "frontend",
    title: "Frontend",
    tagline: "Interfaces that load fast and convert.",
    description:
      "Most frontend problems are performance problems or experience problems in disguise. We build with React, Next.js, and TypeScript, with Core Web Vitals as a hard constraint from day one. Server components by default, minimal client JavaScript, and image and font delivery that does not add weight. We have built and governed a 50-60 component design system at enterprise scale, so we know how to build for one team or ten.",
    outcomes: [
      "Sub-second load times and strong LCP, CLS, and INP scores",
      "Accessible, keyboard-navigable interfaces with proper semantic HTML",
      "Analytics and experimentation wired in from the start (Mixpanel, Adobe Target, GTM)",
      "A design system you can hand to future engineers and not regret",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    tagline: "APIs and data layers that hold up under load.",
    description:
      "We build backends in Ruby on Rails and Node.js, both in production at scale. Clean data models, solid authentication, and the kind of structure that does not accumulate technical debt quietly. We write for the engineers who come after us as much as for the product running today.",
    outcomes: [
      "RESTful and GraphQL APIs designed for the clients consuming them",
      "Reliable auth, role management, and data access patterns",
      "Database design that scales without heroics",
      "Clear, maintainable code with tests that actually catch regressions",
    ],
  },
  {
    id: "devops",
    title: "DevOps and cloud",
    tagline: "Infrastructure that runs without drama.",
    description:
      "We provision and operate AWS infrastructure with Terraform, containerize with Docker, orchestrate with Kubernetes and OpenShift, and wire up CI/CD pipelines that do not slow teams down. Our cloud practice holds AWS Solutions Architect, CKA, and HashiCorp Terraform Associate certifications, with a track record of 99.9% uptime, 30% MTTR reduction, and 25-35% fewer deployment failures.",
    outcomes: [
      "Infrastructure as code with Terraform, fully version-controlled and repeatable",
      "CI/CD pipelines that catch problems before they reach production",
      "Observability from day one: Grafana, Prometheus, CloudWatch",
      "Cloud cost optimisation as an ongoing practice, not an afterthought",
    ],
  },
  {
    id: "fullstack",
    title: "Full-stack delivery",
    tagline: "End-to-end ownership with no handoffs.",
    description:
      "When you need a product built from the ground up, or a feature that crosses frontend, backend, and infrastructure, we take it end-to-end. One team that owns the whole thing, no information lost between disciplines, shipped in fast iterations. You work directly with the team building it.",
    outcomes: [
      "One point of contact who understands the whole system",
      "Fast iterations with real progress visible at every step",
      "You own the code, the repo, and the documentation",
      "Optional ongoing support if you want us to keep moving with you",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-8 md:pt-28">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">Services</h1>
        <p className="text-[#a3a3a3] text-lg max-w-xl leading-relaxed">
          We cover the full stack in-house. No subcontracting, no specialists
          brought in for individual surfaces.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <div className="space-y-4">
          {services.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="border border-[#262626] rounded-lg overflow-hidden"
            >
              <div className="bg-[#1a1a1a] px-8 py-6 border-b border-[#262626]">
                <h2 className="text-xl font-medium text-[#fafafa] mb-1">
                  {s.title}
                </h2>
                <p className="text-[#a3a3a3] text-sm">{s.tagline}</p>
              </div>
              <div className="px-8 py-8 grid md:grid-cols-2 gap-8">
                <p className="text-sm text-[#fafafa] leading-relaxed">
                  {s.description}
                </p>
                <ul className="space-y-2">
                  {s.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex items-start gap-3 text-sm text-[#a3a3a3] leading-relaxed"
                    >
                      <span
                        className="text-[#ccff00] mt-1 shrink-0 text-xs"
                        aria-hidden="true"
                      >
                        &#10003;
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#a3a3a3] mb-6">
            Not sure which combination you need? Tell us the problem and we will
            work it out together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-[#ccff00] text-[#1a2200] font-medium rounded hover:bg-[#d9ff33] transition-colors duration-150"
          >
            Start a conversation
          </Link>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
