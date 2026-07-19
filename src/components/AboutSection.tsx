import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    n: "01",
    title: "Scope",
    body: "We pin down the outcome, the constraints, and what done and fast means before any quote.",
  },
  {
    n: "02",
    title: "Build",
    body: "You get shipped, reviewable work in short iterations, in the open, the whole way.",
  },
  {
    n: "03",
    title: "Ship and own",
    body: "We deploy to production-grade infrastructure with CI/CD, then hand you the code, the repo, and the runbook. Ongoing support is optional, never a lock-in.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 border-t border-white/10 pt-10 sm:pt-14 lg:pt-18 pb-10 sm:pb-14 lg:pb-18 scroll-mt-4 md:scroll-mt-24"
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
              2
            </span>
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-white/15 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-white/70">
            About
          </span>
        </ScrollReveal>

        <div className="grid gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:px-12">
          <ScrollReveal delay={0.08}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <img
                src="/team/vinit.png"
                alt="Vinit Brahmankar"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <h2
                className="max-w-3xl font-medium leading-[1.12] tracking-[-0.02em] text-[#FAFAFA]"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3.2rem)" }}
              >
                Led by Vinit Brahmankar, a full-stack engineer who likes owning
                the whole system.
              </h2>
            </ScrollReveal>

            <ScrollReveal className="mt-6 max-w-3xl space-y-4" delay={0.15}>
              <p className="text-[15px] sm:text-[17px] leading-[1.65] text-white/64">
                I build Kuber Tech around a simple engineering belief: the
                product in the browser and the cloud it runs on should be
                designed together. That means fewer handoff gaps, fewer mystery
                production issues, and a team that can move from user experience
                to infrastructure without losing context.
              </p>
              <p className="text-[15px] sm:text-[17px] leading-[1.65] text-white/64">
                My background spans frontend systems, full-stack product builds,
                cloud infrastructure, performance work, and practical AI
                systems. The kind that have to be observable, cost-aware, and
                useful after the demo is over.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Engagement steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 px-5 sm:px-8 lg:px-12 mt-10 sm:mt-14">
          {steps.map((s, i) => (
            <ScrollReveal key={s.n} delay={0.1 + i * 0.07} y={24}>
              <div className="h-full rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-7">
                <p className="text-[28px] sm:text-[34px] font-semibold text-[color:var(--color-accent)] leading-none mb-4">
                  {s.n}
                </p>
                <h3 className="text-[17px] sm:text-[19px] font-semibold text-[#FAFAFA] mb-2">
                  {s.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14px] text-white/55 leading-[1.6]">
                  {s.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
