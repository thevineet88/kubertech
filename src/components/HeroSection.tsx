import { ChevronDown, ArrowRight } from "lucide-react";
import { openBooking } from "../booking";
import {
  Shader,
  Swirl,
  ChromaFlow,
  FlutedGlass,
  FilmGrain,
} from "shaders/react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const easeOut = [0.25, 0.1, 0.25, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: easeOut },
  }),
};

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section
      id="top"
      className="relative min-h-[86svh] md:min-h-screen bg-[#EFEFEF] flex flex-col"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 z-[15] pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[280px] h-[280px] md:w-[480px] md:h-[480px] rounded-full bg-[#ff5f03] opacity-25 md:opacity-30 blur-[80px] animate-[blobFloat1_7s_ease-in-out_infinite]" />
        <div className="absolute -bottom-16 -right-10 w-[220px] h-[220px] md:w-[380px] md:h-[380px] rounded-full bg-[#ff8c42] opacity-20 md:opacity-25 blur-[70px] animate-[blobFloat2_9s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 right-1/4 w-[160px] h-[160px] md:w-[260px] md:h-[260px] rounded-full bg-[#ffb347] opacity-15 md:opacity-20 blur-[60px] animate-[blobFloat3_6s_ease-in-out_infinite]" />
      </div>

      {/* Full-screen shader overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Shader style={{ width: "100%", height: "100%" }}>
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#fff7f3"
            downColor="#ff5f03"
            leftColor="#ff5f03"
            rightColor="#ff5f03"
            upColor="#ff5f03"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.05} />
        </Shader>
      </div>

      {/* Spacer pushes content to bottom */}
      <div className="flex-1" />

      {/* Hero content */}
      <div className="relative z-20 max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
        {/* Label */}
        <motion.p
          className="text-[13px] sm:text-[14px] text-gray-900 tracking-wide mb-5 sm:mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
        >
          Kuber Tech Solutions
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-8 sm:mb-12"
          style={{ fontSize: "clamp(1.75rem, 7vw, 4.2rem)" }}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.35}
        >
          <span className="sm:hidden">
            We build, scale, and AI-enable your product.
          </span>
          <span
            className="hidden sm:block"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}
          >
            We build, scale, and
            <br />
            AI-enable your product.
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          className="text-[15px] sm:text-[17px] text-gray-600 leading-[1.55] max-w-xl -mt-2 sm:-mt-4 mb-8 sm:mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.45}
        >
          Full-stack products, cloud infrastructure, and production AI systems,
          built to launch fast, scale confidently, and earn their keep.
        </motion.p>

        {/* CTA */}
        <motion.button
          type="button"
          onClick={openBooking}
          className="group inline-flex items-center gap-2 bg-gray-900 hover:bg-[#F26522] text-white text-[14px] font-medium rounded-full pl-6 pr-2 py-2.5 transition-colors duration-300"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.55}
        >
          <span>Book a free 30-min call</span>
          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shrink-0">
            <ArrowRight
              size={12}
              className="text-gray-900 transition-transform duration-500 group-hover:-rotate-45"
              style={{
                transitionTimingFunction: "cubic-bezier(0.25,0.1,0.25,1)",
              }}
            />
          </div>
        </motion.button>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#studio"
        aria-label="Scroll to next section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-gray-500"
        animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <ChevronDown size={24} strokeWidth={1.75} />
      </motion.a>
    </section>
  );
}
