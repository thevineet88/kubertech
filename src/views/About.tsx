import { ArrowRight } from "lucide-react";
import { BACK_LINK_MUTED_CLASS } from "../lib/layout";
import Link from "next/link";
import AmbientMeshBackground from "../components/AmbientMeshBackground";
import BackLink from "../components/BackLink";
import {
  formatIssueDate,
  type NewsletterIssue,
} from "../lib/newsletter-format";

export default function About({
  latestIssue,
}: {
  latestIssue?: NewsletterIssue;
}) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#0A0A0B]">
      <AmbientMeshBackground />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pb-16 pt-6 sm:px-8 sm:pb-24 lg:px-12">
        <BackLink
          fallback="/"
          label="Back to Kuber Tech"
          className={BACK_LINK_MUTED_CLASS}
        />

        <div className="relative mt-14 grid min-h-[680px] gap-12 lg:grid-cols-[0.92fr_0.78fr] lg:gap-20">
          <section className="max-w-[560px] self-start lg:pt-12">
            <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-text-subtle)]">
              <span className="h-3 w-3 bg-[#E4E4E7]" />
              About
            </p>
            <h1 className="text-[34px] font-medium leading-[1.05] tracking-[-0.03em] text-[#FAFAFA] sm:text-[48px]">
              I build systems that make product teams faster.
            </h1>

            <div className="mt-10 space-y-6 text-[15px] leading-[1.7] text-[color:var(--color-text-muted)] sm:text-[16px]">
              <p>
                I’m Vinit Brahmankar, founder of Kuber Tech Solutions. My work
                sits across full-stack product engineering, cloud infrastructure,
                frontend performance, and practical AI systems.
              </p>
              <p>
                I started Kuber Tech because the best software teams rarely need
                more handoffs. They need someone who can understand the product,
                build the interface, shape the backend, and keep the system
                reliable once real users arrive.
              </p>
              <p>
                We stay intentionally focused: clear scope, short reviewable
                cycles, production-grade code, and infrastructure that teams can
                actually operate after launch.
              </p>
            </div>

            <div className="mt-10 grid gap-4">
              <article className="rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-5">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
                    <img
                      src="/team/vinit.png"
                      alt="Vinit Brahmankar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-[#FAFAFA]">
                      Vinit Brahmankar
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-text-faint)]">
                      Founder · Principal Architect
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-[14.5px] leading-[1.7] text-[color:var(--color-text-muted)]">
                  Vinit leads product and platform architecture across custom
                  software, cloud infrastructure, IoT systems, and practical AI.
                  He is strongest where frontend, backend, device workflows, and
                  production operations need to come together as one reliable
                  system.
                </p>
              </article>

              <article className="rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-5">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
                    <img
                      src="/team/tanmay.jpeg"
                      alt="Tanmay Tiwari"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-[#FAFAFA]">
                      Tanmay Tiwari
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-text-faint)]">
                      Principal Architect · AI Infrastructure
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-[14.5px] leading-[1.7] text-[color:var(--color-text-muted)]">
                  Tanmay architects AI, IoT, and custom software platforms that
                  have to survive real production load. His work spans hybrid
                  RAG pipelines, agentic workflows, Kubernetes-hosted inference,
                  distributed telemetry, and resilient device-to-cloud systems.
                </p>
              </article>
            </div>
          </section>

          <aside className="self-end lg:pb-10">
            <div className="mb-5">
              <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-text-subtle)]">
                <span className="h-3 w-3 bg-[#E4E4E7]" />
                Newsletter
              </p>
              <h2 className="max-w-md text-[30px] font-medium leading-[1.08] tracking-[-0.03em] text-[#FAFAFA] sm:text-[42px]">
                Notes from what we build.
              </h2>
            </div>

            {latestIssue && (
              <Link
                href={`/newsletter/${latestIssue.slug}`}
                className="group block overflow-hidden border border-[color:var(--color-border-strong)] bg-[var(--color-surface)] p-5 transition-colors duration-300 hover:border-[color:var(--color-accent)] hover:bg-[var(--color-surface-hover)]"
              >
                <div className="mb-6 flex aspect-[16/8.5] items-end overflow-hidden bg-[linear-gradient(135deg,#06070A_0%,#10213B_46%,#6B94CC_100%)] p-5">
                  <p className="max-w-xs font-mono text-[11px] uppercase tracking-[0.22em] text-white/70">
                    Kuber Tech Newsletter
                  </p>
                </div>
                <h3 className="text-[20px] font-medium leading-[1.2] text-[#FAFAFA]">
                  {latestIssue.title}
                </h3>
                <p className="mt-4 line-clamp-3 text-[14px] leading-[1.65] text-[color:var(--color-text-muted)]">
                  {latestIssue.summary}
                </p>
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-text-faint)]">
                    {formatIssueDate(latestIssue.date)}
                  </span>
                  <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[#8B5CF6]">
                    Read
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            )}

            <Link
              href="/newsletter"
              className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-[color:var(--color-text-muted)] transition-colors duration-200 hover:text-white"
            >
              View all notes
              <ArrowRight size={14} />
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
