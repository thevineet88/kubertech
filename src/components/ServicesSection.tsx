import type { ComponentType } from 'react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGraphql,
  SiTerraform,
  SiKubernetes,
  SiDocker,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'

type IconCmp = ComponentType<{ className?: string }>

interface Offering {
  buyer: string
  title: string
  outcome: string
  stack: string
  logos: IconCmp[]
}

const offerings: Offering[] = [
  {
    buyer: 'Performance rescue',
    title: 'For e-commerce and high-traffic web products',
    outcome:
      'Your product is live and slow, and slow is costing you orders. We cut load times and lift Core Web Vitals under real production traffic, then prove the conversion lift.',
    stack:
      'React, Next.js, TypeScript, rendering strategy per surface (SSR, SSG, ISR), image and asset optimization, render-blocking removal, Core Web Vitals tuning, A/B validation.',
    logos: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss],
  },
  {
    buyer: 'Full-cycle product builds',
    title: 'For funded startups',
    outcome:
      'You need a web product built right the first time, from design to deploy, by people who own it end to end. We take it from blank repo to production, fast in the browser and reliable on the infrastructure.',
    stack:
      'Product and UI in React and Next.js, design systems and component libraries, conversion-focused flows, cloud infrastructure, CI/CD, production hosting and the ops to keep it up.',
    logos: [FaAws, SiTerraform, SiKubernetes, SiDocker, SiNodedotjs, SiGraphql],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20 lg:pb-28 scroll-mt-4">
      <div className="max-w-[1440px] mx-auto">
        {/* Badge row */}
        <ScrollReveal className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8" delay={0}>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
            <span className="text-white font-semibold" style={{ fontSize: '11px' }}>1</span>
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-700">
            What we do
          </span>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal className="px-5 sm:px-8 lg:px-12 mb-3 sm:mb-4" delay={0.1}>
          <h2
            className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)' }}
          >
            Two ways we get hired.
          </h2>
        </ScrollReveal>
        <ScrollReveal className="px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14 lg:mb-16" delay={0.15}>
          <p className="text-[15px] sm:text-[17px] text-gray-600">
            Both measured in load time and conversion.
          </p>
        </ScrollReveal>

        {/* Offering cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 px-5 sm:px-8 lg:px-12">
          {offerings.map((o, i) => (
            <ScrollReveal key={o.buyer} delay={0.1 + i * 0.08} y={28}>
              <div className="h-full rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-gray-300 transition-colors duration-300 flex flex-col">
                <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-[#F26522] mb-1.5">
                  {o.buyer}
                </p>
                <h3 className="text-[19px] sm:text-[22px] font-semibold text-gray-900 mb-4 leading-snug">
                  {o.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.6] mb-6">
                  {o.outcome}
                </p>
                <div className="mt-auto pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-gray-400 mb-3">
                    {o.logos.map((Icon, idx) => (
                      <Icon key={idx} className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
                    ))}
                  </div>
                  <p className="text-[12.5px] sm:text-[13px] text-gray-500 leading-[1.55]">
                    {o.stack}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
