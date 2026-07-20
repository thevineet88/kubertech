"use client";

import { type ComponentType } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiGraphql,
  SiRedux,
  SiTailwindcss,
  SiTerraform,
  SiKubernetes,
  SiDocker,
  SiGrafana,
  SiAnsible,
  SiJenkins,
  SiRedhatopenshift,
  SiD3,
  SiSocketdotio,
  SiApollographql,
  SiRubyonrails,
  SiKonva,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import ScrambleText from "./ScrambleText";

type IconCmp = ComponentType<{ className?: string }>;

const ICONS: Record<string, IconCmp> = {
  react: SiReact,
  next: SiNextdotjs,
  ts: SiTypescript,
  node: SiNodedotjs,
  graphql: SiGraphql,
  redux: SiRedux,
  tailwind: SiTailwindcss,
  terraform: SiTerraform,
  k8s: SiKubernetes,
  docker: SiDocker,
  grafana: SiGrafana,
  ansible: SiAnsible,
  jenkins: SiJenkins,
  openshift: SiRedhatopenshift,
  d3: SiD3,
  socketio: SiSocketdotio,
  apollo: SiApollographql,
  rails: SiRubyonrails,
  konva: SiKonva,
  aws: FaAws,
};

function TechRow({ keys, className }: { keys: string[]; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      {keys.map((k) => {
        const Icon = ICONS[k];
        return Icon ? (
          <Icon key={k} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
        ) : null;
      })}
    </div>
  );
}

interface Project {
  title: string;
  tag: string;
  metric: string;
  metricLabel: string;
  description: string;
  logos: string[];
  gradient: string;
  slug?: string;
}

const featured: Project[] = [
  {
    title: "Rivian: RAG Knowledge Engine",
    tag: "AI engineering",
    metric: "sub-200ms",
    metricLabel: "500k+ docs indexed, 35% lower cloud cost",
    description:
      "Designed and built an internal search system indexing 500k+ technical documents using hybrid dense + sparse retrieval (Weaviate). Deployed on Kubernetes (EKS) with sub-200ms latency at 35% lower cloud cost than initial provisioning.",
    logos: ["aws", "k8s", "node", "ts"],
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
    slug: "/case-studies/rag-knowledge-engine",
  },
  {
    title: "Smart IoT Device Management Platform",
    tag: "IoT & connected devices",
    metric: "AWS IoT",
    metricLabel: "Secure fleet provisioning, OTA updates, real-time telemetry",
    description:
      "A cloud-connected IoT platform managing Raspberry Pi powered devices end to end: secure provisioning over Tailscale, automated over-the-air deployments via AWS IoT Greengrass, and live MQTT telemetry between edge devices and AWS IoT Core.",
    logos: ["aws", "node", "ts"],
    gradient: "linear-gradient(135deg, #F59E0B 0%, #b5421a 100%)",
    slug: "/case-studies/iot-xponent",
  },
];

export default function CaseStudiesSection() {
  return (
    <section
      id="work"
      className="relative z-10 border-t border-white/10 pt-6 sm:pt-10 lg:pt-12 pb-10 sm:pb-14 lg:pb-16 scroll-mt-4 md:scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <ScrollReveal
          className="px-5 sm:px-8 lg:px-12 mb-8 sm:mb-14 lg:mb-16"
          delay={0.1}
        >
          <h2
            className="font-medium leading-[1.08] tracking-[-0.03em] text-[#FAFAFA]"
            style={{ fontSize: "clamp(1.75rem, 7vw, 4.2rem)" }}
          >
            <ScrambleText text="Our projects" className="sm:hidden" />
            <ScrambleText
              text="Our projects"
              className="hidden sm:block"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}
            />
          </h2>
        </ScrollReveal>

        {/* Featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12">
          {featured.map((p, i) => (
            <ScrollReveal key={p.title} delay={0.15 + i * 0.1} y={32}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
                style={{ background: p.gradient, aspectRatio: "16/10" }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[11px] sm:text-[12px] font-medium uppercase tracking-wider text-white/75 bg-white/10 rounded-full px-3 py-1">
                    {p.tag}
                  </span>
                  {p.slug && (
                    <Link
                      href={p.slug}
                      className="group/btn inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-[12px] sm:text-[13px] font-medium rounded-full pl-4 pr-1.5 py-1.5 transition-colors duration-200 shrink-0"
                    >
                      <span>Case study</span>
                      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                        <ArrowRight size={10} className="text-white transition-transform duration-300 group-hover/btn:-rotate-45" style={{ transitionTimingFunction: "cubic-bezier(0.25,0.1,0.25,1)" }} />
                      </div>
                    </Link>
                  )}
                </div>
                <div>
                  <TechRow
                    keys={p.logos}
                    className="text-white/85 mb-4 sm:mb-5"
                  />
                  <p className="text-white text-[32px] sm:text-[40px] font-semibold leading-none">
                    {p.metric}
                  </p>
                  <p className="text-white/70 text-[13px] sm:text-[14px] mt-2">
                    {p.metricLabel}
                  </p>
                </div>
              </motion.div>
              <p className="text-[13px] sm:text-[14px] text-white/50 mt-4 leading-relaxed">
                {p.description}
              </p>
              <p className="text-[14px] sm:text-[15px] font-semibold text-[#FAFAFA] mt-1">
                {p.title}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="px-5 sm:px-8 lg:px-12 mt-8 sm:mt-10" delay={0.3}>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#FAFAFA] hover:text-[#8B5CF6] transition-colors duration-200"
          >
            More projects
            <ArrowRight size={14} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
