import { ArrowRight, Cpu, FileSearch, Bot } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { openBooking } from "../booking";

const useCases = [
  {
    icon: FileSearch,
    label: "RAG and enterprise search",
    headline: "Your teams find answers, not documents",
    body: "We build hybrid retrieval pipelines with contextual chunking and re-ranking. Accurate results over your internal docs, wikis, and data in under 200ms.",
  },
  {
    icon: Bot,
    label: "Copilots and chat interfaces",
    headline: "AI embedded in your product, not bolted on",
    body: "Scoped, grounded, traceable. We wire LLMs to your data with guardrails so the copilot stays on-topic, cites sources, and never hallucinates your policies.",
  },
  {
    icon: Cpu,
    label: "Agentic workflows",
    headline: "Automate the work your team does by hand",
    body: "Multi-step agents that extract, classify, route, and act. Human-in-the-loop checkpoints, full observability, and cost controls built in from day one.",
  },
];

export default function AISection() {
  return (
    <section
      id="ai"
      className="bg-gray-950 pt-10 sm:pt-14 lg:pt-18 pb-10 sm:pb-14 lg:pb-18 scroll-mt-4 md:scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Badge row */}
        <ScrollReveal className="flex items-center gap-3 mb-6 sm:mb-8" delay={0}>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand flex items-center justify-center shrink-0">
            <Cpu size={13} className="text-white" />
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-white/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-white/70">
            AI engineering
          </span>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={0.1}>
          <h2
            className="font-medium leading-[1.1] tracking-[-0.02em] text-white mb-4 sm:mb-5"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}
          >
            We add AI that actually works<br className="hidden sm:block" /> in production.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-[15px] sm:text-[17px] text-white/60 leading-[1.55] max-w-2xl mb-10 sm:mb-14">
            Not demos. Not wrappers. Production systems built on your data, deployed on your infrastructure, with the tracing and evaluation to prove they work.
          </p>
        </ScrollReveal>

        {/* Use case cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-14">
          {useCases.map((uc, i) => (
            <ScrollReveal key={uc.label} delay={0.1 + i * 0.08} y={28}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7 hover:border-brand/50 hover:bg-white/[0.08] transition-all duration-300 flex flex-col">
                <div className="w-9 h-9 rounded-xl bg-brand/15 flex items-center justify-center mb-4 shrink-0">
                  <uc.icon size={18} className="text-brand" />
                </div>
                <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-brand mb-2">
                  {uc.label}
                </p>
                <h3 className="text-[17px] sm:text-[19px] font-semibold text-white mb-3 leading-snug">
                  {uc.headline}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-white/55 leading-[1.6] mt-auto">
                  {uc.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA strip */}
        <ScrollReveal delay={0.25}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-8 border-t border-white/10">
            <p className="text-[15px] sm:text-[16px] text-white/70 leading-snug max-w-sm">
              Already have a use case in mind? Let's scope it in 30 minutes.
            </p>
            <button
              type="button"
              onClick={openBooking}
              className="group shrink-0 inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-[14px] font-medium rounded-full pl-6 pr-2 py-2.5 transition-colors duration-300"
            >
              <span>Book a free call</span>
              <div className="w-7 h-7 bg-white/15 rounded-full flex items-center justify-center shrink-0">
                <ArrowRight size={12} className="text-white transition-transform duration-500 group-hover:-rotate-45" style={{ transitionTimingFunction: "cubic-bezier(0.25,0.1,0.25,1)" }} />
              </div>
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
