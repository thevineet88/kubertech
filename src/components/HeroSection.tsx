"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from "framer-motion";
import HeroGlobe from "./HeroGlobe";
import { introState } from "./Preloader";

const MUTED = "#A1A1AA";
const FG = "#FAFAFA";

const headline = "We engineer what's next.";

export default function HeroSection() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const cueOpacity = useTransform(scrollY, [0, 120], [1, 0]);

  // HeroGlobe's big-bang intro plays on every genuine page load, but only
  // once per that run — see introState / skipForm in HeroGlobe.tsx. Any
  // later mount of this page (nav back from Work/Contact/anywhere via
  // client-side routing) shows the globe already formed with no replay, so
  // the text should reveal right away too instead of waiting out a
  // formation that isn't happening.
  const [instant] = useState(() => introState.seen);

  // Choreographed with the globe's big-bang intro: the preloader lifts at
  // ~1.5s, the blast debris curves back into the sphere until lock-in at
  // ~4.85s. Headline words ride the settle, the subhead follows, and
  // everything has landed by the shockwave finale. On repeat visits (globe
  // already formed) this collapses to the same near-instant reveal reduced
  // motion uses.
  const heroContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced || instant ? 0 : 0.1,
        delayChildren: reduced || instant ? 0.2 : 2.4,
      },
    },
  };
  const subContainer: Variants = {
    hidden: {},
    show: { transition: { delayChildren: reduced || instant ? 0.3 : 3.3 } },
  };
  const heroWord: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : "0.7em" },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 sm:px-6 bg-[#0A0A0B]"
    >
      {/* Ambient colour wash, so the hero isn't flat black */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(120deg, #6B94CC24 0%, transparent 34%, #8B5CF61F 68%, transparent 100%), radial-gradient(74% 58% at 50% 100%, #1E1B4BCC 0%, #6B94CC26 38%, transparent 74%), radial-gradient(54% 42% at 10% 94%, #06B6D43D 0%, transparent 72%), radial-gradient(50% 42% at 88% 4%, #8B5CF647 0%, transparent 74%), radial-gradient(42% 36% at 62% 18%, #6B94CC24 0%, transparent 72%)",
        }}
      />

      <HeroGlobe />

      {/* Small, subtle glow just outside the wireframe mesh's outer edge —
          blooms in at the moment the blast debris locks into the globe */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced || instant ? 0 : 4.35, duration: 1.1, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "min(70vw, 48vh)",
          height: "min(70vw, 48vh)",
          background:
            "radial-gradient(circle, transparent 0%, transparent 54%, #6B94CC22 62%, #6B94CC0F 72%, transparent 88%)",
          filter: "blur(8px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Scrim to keep headline legible over the globe */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(58% 46% at 50% 50%, #0A0A0BCC 0%, #0A0A0B4D 34%, transparent 64%), radial-gradient(120% 90% at 50% 45%, transparent 58%, #0A0A0B 94%)",
        }}
      />

      {/* Dedicated bottom scrim: guarantees the subhead stays legible no matter what
          the globe (any side, any interaction state) is doing behind it */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[3]"
        style={{
          height: "42%",
          background: "linear-gradient(to bottom, transparent 0%, #0A0A0B8F 45%, #0A0A0B 100%)",
        }}
      />

      {/* Standalone decorative mesh border — plain SVG, not tied to the 3D globe,
          so it never reacts to hover/click and never distracts from the text */}
      <svg
        aria-hidden="true"
        className="absolute bottom-20 sm:bottom-24 left-1/2 z-[4] -translate-x-1/2 opacity-[0.06]"
        width="280"
        height="14"
        viewBox="0 0 280 14"
      >
        <line x1="0" y1="7" x2="280" y2="7" stroke="#3F3F46" strokeWidth="0.5" />
        {Array.from({ length: 15 }).map((_, i) => (
          <line key={i} x1={i * 20} y1="3" x2={i * 20} y2="11" stroke="#3F3F46" strokeWidth="0.5" />
        ))}
      </svg>

      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 -mt-16 sm:mt-0 flex max-w-4xl flex-col items-center gap-6 sm:gap-8 text-center"
      >
        <h1
          className="font-semibold"
          style={{
            fontSize: "clamp(2.45rem, 13vw, 6rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            color: FG,
          }}
        >
          {headline.split(" ").map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-top pb-2">
              <motion.span variants={heroWord} className="inline-block">
                {w}&#8202;&nbsp;
              </motion.span>
            </span>
          ))}
        </h1>

      </motion.div>

      <motion.div
        variants={subContainer}
        initial="hidden"
        animate="show"
        className="absolute bottom-28 sm:bottom-36 left-0 right-0 z-10 mx-auto flex max-w-5xl justify-center px-6"
      >
        <motion.p
          variants={heroWord}
          className="max-w-xl text-center"
          style={{ color: "#E4E4E7", fontWeight: 500, fontSize: "clamp(1.05rem, 2.2vw, 1.3rem)", lineHeight: 1.6 }}
        >
          The engineering team behind fast, scalable, AI-enabled products.
        </motion.p>
      </motion.div>

      <motion.div
        style={{ opacity: cueOpacity }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduced || instant ? 0.4 : 5.0, duration: 0.9 }}
          className="flex flex-col items-center gap-3"
        >
        <span
          className="text-[10px] uppercase"
          style={{ color: MUTED, fontFamily: "ui-monospace, Menlo, monospace", letterSpacing: "0.3em" }}
        >
          Scroll
        </span>
        <div className="relative h-10 w-px overflow-hidden" style={{ background: "#27272A" }}>
          <motion.div
            className="absolute left-0 top-0 h-4 w-px"
            style={{ background: FG }}
            animate={reduced ? undefined : { y: [-16, 44] }}
            transition={reduced ? undefined : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
