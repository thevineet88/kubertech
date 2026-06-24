import type { ComponentType } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
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
  SiLeaflet,
  SiSocketdotio,
  SiApollographql,
  SiRubyonrails,
  SiKonva,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'

type IconCmp = ComponentType<{ className?: string }>

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
  leaflet: SiLeaflet,
  socketio: SiSocketdotio,
  apollo: SiApollographql,
  rails: SiRubyonrails,
  konva: SiKonva,
  aws: FaAws,
}

function TechRow({ keys, className }: { keys: string[]; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ''}`}>
      {keys.map((k) => {
        const Icon = ICONS[k]
        return Icon ? <Icon key={k} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" /> : null
      })}
    </div>
  )
}

interface Project {
  title: string
  tag: string
  metric: string
  metricLabel: string
  description: string
  logos: string[]
  gradient: string
}

const featured: Project[] = [
  {
    title: 'Marks and Spencer',
    tag: 'Full-stack commerce platform',
    metric: '4.1s → 1.8s',
    metricLabel: 'LCP across 2M+ monthly pages',
    description:
      'The e-commerce experience end to end, frontend and backend, on React, Next.js and TypeScript with a governed design system. LCP cut from 4.1s to 1.8s and checkout conversion doubled from 2% to 4%.',
    logos: ['next', 'react', 'ts', 'node', 'graphql'],
    gradient: 'linear-gradient(135deg, #0b3d2e 0%, #05140f 100%)',
  },
  {
    title: 'Enterprise banking platform',
    tag: 'Cloud platform & SRE',
    metric: '99.9%',
    metricLabel: 'Uptime, MTTR down 30%',
    description:
      'Cloud infrastructure and SRE for a regulated banking platform: 50+ production workloads on Kubernetes and OpenShift, automated GitLab delivery, and full observability across the estate.',
    logos: ['aws', 'terraform', 'k8s', 'openshift', 'grafana'],
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 55%, #2c5364 100%)',
  },
]

const moreWork: Project[] = [
  {
    title: 'Jiffy: Design Lab',
    tag: 'Full-stack real-time app',
    metric: 'Real-time',
    metricLabel: 'In-browser print-ready editor',
    description:
      'A real-time design tool with a WebSocket image pipeline and a Konva.js canvas for placing print-ready artwork live.',
    logos: ['react', 'ts', 'konva', 'socketio', 'rails'],
    gradient: 'linear-gradient(135deg, #F26522 0%, #b5421a 100%)',
  },
  {
    title: 'Jiffy: Conversion flow',
    tag: 'Full-stack commerce',
    metric: '2% → 4%',
    metricLabel: 'Checkout conversion, 40k+ users',
    description:
      'Fixed fragmented checkout state and instrumented the full funnel with Mixpanel, then iterated on real drop-off data behind feature flags.',
    logos: ['react', 'ts', 'redux'],
    gradient: 'linear-gradient(135deg, #1f2a5a 0%, #3b4ba0 100%)',
  },
  {
    title: 'Cloud: 5G telecom platform',
    tag: 'Cloud platform',
    metric: '-50%',
    metricLabel: 'Deployment cycle time',
    description:
      'Fully automated, cost-optimised AWS infrastructure with reusable Terraform modules and Jenkins CI/CD for a production 5G platform.',
    logos: ['aws', 'terraform', 'jenkins', 'docker', 'ansible'],
    gradient: 'linear-gradient(135deg, #102a43 0%, #486581 100%)',
  },
  {
    title: 'Siemens: Facility Floor Planner',
    tag: 'Full-stack app',
    metric: 'Multi-floor',
    metricLabel: 'Interactive seating map',
    description:
      'An interactive seating tool on a custom Leaflet.js coordinate system, with drag-and-drop placement wired to a REST API.',
    logos: ['react', 'ts', 'leaflet'],
    gradient: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
  },
  {
    title: 'Siemens Teamcenter: Data grid',
    tag: 'Full-stack app',
    metric: 'Excel-like',
    metricLabel: 'Frozen rows and columns',
    description:
      'A spreadsheet-grade PLM data grid with frozen panes and rich inline editing, rendered with D3.js over an Apollo GraphQL backend.',
    logos: ['react', 'ts', 'd3', 'apollo'],
    gradient: 'linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)',
  },
  {
    title: 'Cigora & Pipes and Cigars',
    tag: 'Design system',
    metric: '2 brands',
    metricLabel: 'One themeable system',
    description:
      'A themeable design system on design tokens and atomic design, powering two distinct e-commerce brands from one source of truth.',
    logos: ['react', 'ts', 'tailwind'],
    gradient: 'linear-gradient(135deg, #3a1c71 0%, #874da2 100%)',
  },
]

export default function CaseStudiesSection() {
  return (
    <section id="work" className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 scroll-mt-4">
      <div className="max-w-[1440px] mx-auto">
        {/* Badge row */}
        <ScrollReveal className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8" delay={0}>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
            <span className="text-white font-semibold" style={{ fontSize: '11px' }}>2</span>
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-700">
            Selected work
          </span>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal className="px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14 lg:mb-16" delay={0.1}>
          <h2
            className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900"
            style={{ fontSize: 'clamp(1.75rem, 7vw, 4.2rem)' }}
          >
            <span className="sm:hidden">Our projects</span>
            <span className="hidden sm:block" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)' }}>
              Our projects
            </span>
          </h2>
        </ScrollReveal>

        {/* Featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12">
          {featured.map((p, i) => (
            <ScrollReveal key={p.title} delay={0.15 + i * 0.1} y={32}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
                style={{ background: p.gradient, aspectRatio: '16/10' }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[11px] sm:text-[12px] font-medium uppercase tracking-wider text-white/75 bg-white/10 rounded-full px-3 py-1">
                    {p.tag}
                  </span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <ArrowRight
                      size={14}
                      className="text-white transition-transform duration-500 group-hover:-rotate-45"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' }}
                    />
                  </div>
                </div>
                <div>
                  <TechRow keys={p.logos} className="text-white/85 mb-4 sm:mb-5" />
                  <p className="text-white text-[32px] sm:text-[40px] font-semibold leading-none">
                    {p.metric}
                  </p>
                  <p className="text-white/70 text-[13px] sm:text-[14px] mt-2">{p.metricLabel}</p>
                </div>
              </motion.div>
              <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
                {p.description}
              </p>
              <p className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
                {p.title}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* More work */}
        <ScrollReveal className="px-5 sm:px-8 lg:px-12 mt-16 sm:mt-20 lg:mt-24 mb-8 sm:mb-10" delay={0}>
          <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900">
            More from the studio
          </h3>
          <p className="text-[13px] sm:text-[14px] text-gray-600 mt-1">
            Full-stack products and cloud platforms, frontend to infrastructure.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 px-5 sm:px-8 lg:px-12">
          {moreWork.map((p, i) => (
            <ScrollReveal key={p.title} delay={0.1 + i * 0.06} y={28}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl p-5 flex flex-col justify-between min-h-[200px]"
                style={{ background: p.gradient }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-white/70">
                    {p.tag}
                  </span>
                </div>
                <div>
                  <TechRow keys={p.logos} className="text-white/80 mb-3" />
                  <p className="text-[22px] sm:text-[24px] font-semibold text-white leading-tight">
                    {p.metric}
                  </p>
                  <p className="text-[12px] text-white/70 mt-1">{p.metricLabel}</p>
                </div>
              </motion.div>
              <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
                {p.description}
              </p>
              <p className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
                {p.title}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
