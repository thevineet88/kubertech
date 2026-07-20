import type { ComponentType } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiGraphql,
  SiTerraform,
  SiKubernetes,
  SiDocker,
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

type IconCmp = ComponentType<{ className?: string }>;

interface Offering {
  buyer: string;
  title: string;
  outcome: string;
  stack: string;
  logos: IconCmp[];
}

const offerings: Offering[] = [
  {
    buyer: "AI engineering",
    title: "For teams who need AI that works in production",
    outcome:
      "RAG pipelines, copilots, document search, agentic workflows. Not demos. Production systems that are traceable, evaluatable, and cost-controlled from day one.",
    stack:
      "LangGraph, RAG (hybrid search, contextual chunking, re-ranking), Weaviate, Pinecone, LLM evaluation, OpenTelemetry for AI, AWS for inference.",
    logos: [SiOpenai, SiNodedotjs, SiTypescript, FaAws],
  },
  {
    buyer: "Full-cycle development",
    title: "For teams who need it built right, end to end",
    outcome:
      "From first wireframe to live in production. We design, build, and ship complete web products, and stay accountable for how they run, not just how they look in a demo.",
    stack:
      "Full-stack web development end to end: product and UI, design systems, APIs and data layers, and the pipeline that puts it live. We reach for React, Next.js, TypeScript and Node, and pick the stack that fits the job.",
    logos: [
      SiReact,
      SiNextdotjs,
      SiTypescript,
      SiNodedotjs,
      SiGraphql,
      SiTailwindcss,
    ],
  },
  {
    buyer: "Cloud and infrastructure",
    title: "For products that have to stay up and scale",
    outcome:
      "Most teams build the app and outsource the cloud. We own both. Production-grade hosting, CI/CD, and the operations behind a product that has to stay reliable under real traffic.",
    stack:
      "AWS, Terraform, Kubernetes, Docker, CI/CD pipelines, observability, autoscaling, and cost-optimised infrastructure as code.",
    logos: [FaAws, SiTerraform, SiKubernetes, SiDocker],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-10 bg-paper pt-10 sm:pt-14 lg:pt-18 pb-10 sm:pb-14 lg:pb-18 scroll-mt-4 md:scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Badge row */}
        <ScrollReveal
          className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8"
          delay={0}
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand flex items-center justify-center shrink-0">
            <span
              className="text-white font-semibold"
              style={{ fontSize: "11px" }}
            >
              1
            </span>
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-white/10 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-white/64">
            What we do
          </span>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal
          className="px-5 sm:px-8 lg:px-12 mb-2 sm:mb-3"
          delay={0.1}
        >
          <h2
            className="font-medium leading-[1.12] tracking-[-0.02em] text-[#FAFAFA]"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}
          >
            Three ways we get hired.
          </h2>
        </ScrollReveal>
        <ScrollReveal
          className="px-5 sm:px-8 lg:px-12 mb-8 sm:mb-12"
          delay={0.15}
        >
          <p className="text-[15px] sm:text-[17px] text-white/60">
            Build it, run it, or make it fast. Often all three.
          </p>
        </ScrollReveal>

        {/* Offering cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 px-5 sm:px-8 lg:px-12">
          {offerings.map((o, i) => (
            <ScrollReveal key={o.buyer} delay={0.1 + i * 0.08} y={28}>
              <div className="h-full rounded-2xl border border-white/10 p-6 sm:p-7 hover:border-brand/40 transition-colors duration-300 flex flex-col">
                <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-[color:var(--color-accent)] mb-1.5">
                  {o.buyer}
                </p>
                <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#FAFAFA] mb-3 leading-snug">
                  {o.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-white/64 leading-[1.6] mb-6">
                  {o.outcome}
                </p>
                <div className="mt-auto pt-5 border-t border-white/10">
                  <div className="flex items-center gap-3 text-white/40 mb-3">
                    {o.logos.map((Icon, idx) => (
                      <Icon
                        key={idx}
                        className="w-[18px] h-[18px] sm:w-5 sm:h-5"
                      />
                    ))}
                  </div>
                  <p className="text-[12.5px] sm:text-[13px] text-white/50 leading-[1.55]">
                    {o.stack}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal
          className="px-5 sm:px-8 lg:px-12 mt-8 sm:mt-10"
          delay={0.3}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#FAFAFA] hover:text-[color:var(--color-accent)] transition-colors duration-200"
          >
            View all services
            <ArrowRight size={14} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
