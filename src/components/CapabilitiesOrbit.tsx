"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiGraphql,
  SiTailwindcss,
  SiTerraform,
  SiKubernetes,
  SiDocker,
  SiOpenai,
  SiRaspberrypi,
  SiFlutter,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import ScrambleText from "./ScrambleText";

const MUTED = "#A1A1AA";
const FG = "#FAFAFA";

type IconCmp = ComponentType<{ className?: string }>;

interface Panel {
  num: string;
  accent: string;
  label: string;
  headline: string;
  line: string;
  bullets: string[];
  logos: IconCmp[];
}

// Real Kuber offerings — same copy as ServicesSection/AISection, restyled for the dark theme.
const PANELS: Panel[] = [
  {
    num: "01",
    accent: "#8B5CF6",
    label: "AI Engineering",
    headline: "AI that works in production.",
    line: "RAG pipelines, copilots, document search, agentic workflows. Not demos — production systems that are traceable, evaluatable, and cost-controlled from day one.",
    bullets: [
      "Custom LLM applications, agents & RAG pipelines",
      "Model evaluation, guardrails & observability",
      "Hybrid search, contextual chunking & re-ranking",
    ],
    logos: [SiOpenai, SiNodedotjs, SiTypescript, FaAws],
  },
  {
    num: "02",
    accent: "#06B6D4",
    label: "Cloud & Infrastructure",
    headline: "Infrastructure that stays up.",
    line: "Most teams build the app and outsource the cloud. We own both — production-grade hosting, CI/CD, and the operations behind a product that has to stay reliable under real traffic.",
    bullets: [
      "AWS, Terraform, Kubernetes, Docker",
      "CI/CD pipelines & observability",
      "Autoscaling & cost-optimised infrastructure as code",
    ],
    logos: [FaAws, SiTerraform, SiKubernetes, SiDocker],
  },
  {
    num: "03",
    accent: "#6B94CC",
    label: "IoT & Connected Hardware",
    headline: "Connected hardware that can run offline.",
    line: "Embedded control systems for solar, battery, awning, sensing, and mobile control workflows — designed for local operation, cloud sync, OTA updates, and secure fleet access.",
    bullets: [
      "Raspberry Pi controllers, hardware drivers, CAN bus & BLE pairing",
      "AWS IoT Greengrass/Core, MQTT telemetry, ECR/S3 component delivery",
      "Tailscale access, GitHub CI/CD, versioned OTA rollout & rollback",
    ],
    logos: [SiRaspberrypi, FaAws, SiDocker, SiFlutter],
  },
  {
    num: "04",
    accent: "#10B981",
    label: "Full-Cycle Development",
    headline: "Idea to production, end to end.",
    line: "From first wireframe to live in production. We design, build, and ship complete web products — and stay accountable for how they run, not just how they look in a demo.",
    bullets: [
      "Product and UI, design systems, APIs and data layers",
      "React, Next.js, TypeScript and Node — or whatever fits",
      "The pipeline that puts it live",
    ],
    logos: [SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiGraphql, SiTailwindcss],
  },
];

export default function CapabilitiesOrbit() {
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  // Track which panel currently crosses the vertical middle of the viewport
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const mid = window.innerHeight * 0.5;
        let idx = 0;
        panelRefs.current.forEach((el, i) => {
          if (el && el.getBoundingClientRect().top <= mid) idx = i;
        });
        setActiveIdx(idx);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToPanel = (i: number) => {
    panelRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section
      style={{ paddingTop: "38vh" }}
      className="relative z-10 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 grid md:grid-cols-[minmax(0,280px)_1fr] gap-10 md:gap-16 lg:gap-24">
        {/* Static left column, stays put while panels scroll past on the right */}
        <div className="md:sticky md:top-32 md:self-start">
          <ScrollReveal>
            <ScrambleText
              as="p"
              text="What we do"
              className="text-xs uppercase mb-4"
              style={{ color: MUTED, fontFamily: "ui-monospace, Menlo, monospace", letterSpacing: "0.3em" }}
            />
            <ScrambleText
              as="h2"
              text="Our capabilities."
              delay={0.15}
              className="font-semibold mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em", lineHeight: 1.1, color: FG }}
            />
            <p style={{ color: MUTED, fontSize: "15px", lineHeight: 1.6, maxWidth: "22rem" }}>
              Build it, run it, or make it fast. Often all three.
            </p>

            {/* Progress rail: highlights the panel currently in view */}
            <nav aria-label="Capabilities" className="mt-10 hidden md:flex flex-col gap-1">
              {PANELS.map((p, i) => {
                const active = i === activeIdx;
                return (
                  <button
                    key={p.num}
                    type="button"
                    onClick={() => scrollToPanel(i)}
                    aria-current={active ? "true" : undefined}
                    className="group flex items-center gap-3 py-2 text-left"
                  >
                    <span
                      className="h-px transition-all duration-500 ease-out"
                      style={{
                        width: active ? 28 : 12,
                        background: active ? p.accent : "#3F3F46",
                      }}
                    />
                    <span
                      className="text-xs uppercase transition-colors duration-300"
                      style={{
                        fontFamily: "ui-monospace, Menlo, monospace",
                        letterSpacing: "0.2em",
                        color: active ? "#FAFAFA" : "#52525B",
                      }}
                    >
                      {p.num} / {p.label}
                    </span>
                  </button>
                );
              })}
            </nav>
          </ScrollReveal>
        </div>

        {/* Panels, one per capability, normal scroll reveal */}
        <div className="flex flex-col gap-14 sm:gap-20">
          {PANELS.map((p, i) => (
            <ScrollReveal key={p.num} delay={0.05} y={28}>
              <div
                ref={(el) => { panelRefs.current[i] = el; }}
                className="pb-10 sm:pb-14 transition-opacity duration-500"
                style={{
                  borderBottom: i < PANELS.length - 1 ? "1px solid #1F1F23" : "none",
                  opacity: i === activeIdx ? 1 : 0.45,
                }}
              >
                <p
                  className="text-xs uppercase mb-3"
                  style={{ color: p.accent, fontFamily: "ui-monospace, Menlo, monospace", letterSpacing: "0.25em" }}
                >
                  {p.num} / {p.label}
                </p>
                <h3
                  className="font-semibold mb-4"
                  style={{
                    fontSize: "clamp(1.5rem, 3.2vw, 2.25rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                    color: FG,
                  }}
                >
                  {p.headline}
                </h3>
                <p style={{ color: MUTED, fontSize: "15px", lineHeight: 1.6, maxWidth: "34rem" }} className="mb-6">
                  {p.line}
                </p>
                <ul className="flex flex-col gap-3 mb-6">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-4">
                      <span className="inline-block h-px w-6 flex-none" style={{ background: p.accent }} />
                      <span style={{ color: "#D4D4D8", fontSize: "14px", lineHeight: 1.6 }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3" style={{ color: MUTED }}>
                  {p.logos.map((Icon, idx) => (
                    <Icon key={idx} className="w-[18px] h-[18px] opacity-70" />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
