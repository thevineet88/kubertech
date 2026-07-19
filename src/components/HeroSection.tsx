import { motion, useScroll, useTransform, useReducedMotion, type Variants } from "framer-motion";
import HeroGlobe from "./HeroGlobe";

const MUTED = "#A1A1AA";
const FG = "#FAFAFA";

const headline = "We engineer what's next.";

export default function HeroSection() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const cueOpacity = useTransform(scrollY, [0, 120], [1, 0]);

  const heroContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.07, delayChildren: 0.2 } },
  };
  const heroWord: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : "0.7em" },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
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

      {/* Subtle halo behind the globe, above the canvas so it actually shows */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "min(82vw, 56vh)",
          height: "min(82vw, 56vh)",
          background: "radial-gradient(circle, #6B94CC40 0%, #6B94CC1F 42%, transparent 72%)",
          filter: "blur(14px)",
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
        variants={heroContainer}
        initial="hidden"
        animate="show"
        className="absolute bottom-28 sm:bottom-36 left-0 right-0 z-10 mx-auto flex max-w-5xl justify-center px-6"
      >
        <motion.p
          variants={heroWord}
          className="max-w-xl text-center"
          style={{ color: "#E4E4E7", fontWeight: 500, fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)", lineHeight: 1.6 }}
        >
          The engineering team behind fast, scalable, AI-enabled products.
        </motion.p>
      </motion.div>

      <motion.div
        style={{ opacity: cueOpacity }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
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
    </section>
  );
}
