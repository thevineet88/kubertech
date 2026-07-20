import ScrollReveal from "./ScrollReveal";
import ScrambleText from "./ScrambleText";
import { AISim, IoTSim } from "./CapabilitySims";

export default function LiveSection() {
  return (
    <section
      id="ai"
      className="relative z-10 border-t border-white/10 py-12 sm:py-16 lg:py-20 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <ScrambleText
            as="p"
            text="Live from production"
            className="text-xs uppercase mb-4"
            style={{
              color: "#A1A1AA",
              fontFamily: "ui-monospace, Menlo, monospace",
              letterSpacing: "0.3em",
            }}
          />
          <h2
            className="font-semibold mb-3"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#FAFAFA",
            }}
          >
            Systems we run, running.
          </h2>
          <p className="text-[15px] leading-relaxed max-w-xl" style={{ color: "#A1A1AA" }}>
            A feel for what our work looks like in the wild — a RAG pipeline
            answering queries and an IoT fleet reporting home.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 mt-8 sm:mt-10">
          <ScrollReveal delay={0.1} y={24}>
            <AISim />
          </ScrollReveal>
          <ScrollReveal delay={0.2} y={24}>
            <IoTSim />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
