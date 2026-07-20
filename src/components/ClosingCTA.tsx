"use client";

import { ArrowRight } from "lucide-react";
import { openBooking } from "../booking";
import ScrollReveal from "./ScrollReveal";
import ScrambleText from "./ScrambleText";

export default function ClosingCTA() {
  return (
    <section className="relative z-10 border-t border-white/10 flex flex-col items-center justify-center px-5 sm:px-8 py-20 sm:py-28 text-center">
      <ScrollReveal y={20}>
        <ScrambleText
          as="p"
          text="Ready when you are"
          className="text-xs uppercase mb-6 sm:mb-8"
          style={{
            color: "#A1A1AA",
            fontFamily: "ui-monospace, Menlo, monospace",
            letterSpacing: "0.3em",
          }}
        />
      </ScrollReveal>

      <ScrollReveal delay={0.1} y={26}>
        <h2
          className="mx-auto max-w-4xl font-semibold text-[#FAFAFA]"
          style={{
            fontSize: "clamp(1.9rem, 5vw, 3.2rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          <ScrambleText text="Let's build" delay={0.15} />{" "}
          <ScrambleText text="what's next." delay={0.35} />
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2} y={20}>
        <p className="mx-auto mt-6 max-w-md text-[15px] sm:text-[16px] leading-relaxed text-white/55">
          Thirty minutes, no deck, no pressure. Bring the problem — we'll bring
          an engineering opinion.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.3} y={16}>
        <button
          type="button"
          onClick={openBooking}
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#FAFAFA] px-7 py-3.5 text-[14px] sm:text-[15px] font-semibold text-[#0A0A0B] transition-colors duration-200 hover:bg-[#8B5CF6] hover:text-white"
        >
          Book a 30-minute call
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:-rotate-45"
          />
        </button>
      </ScrollReveal>
    </section>
  );
}
