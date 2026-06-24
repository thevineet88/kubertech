import type { ComponentType } from 'react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiRubyonrails,
  SiGraphql,
  SiTerraform,
  SiKubernetes,
  SiDocker,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'

type IconCmp = ComponentType<{ className?: string }>

interface Service {
  title: string
  blurb: string
  logos: IconCmp[]
}

const services: Service[] = [
  {
    title: 'Frontend',
    blurb:
      'Interfaces that load fast and convert. React, Next.js and TypeScript, built for Core Web Vitals and real-user performance, with design systems that scale.',
    logos: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss],
  },
  {
    title: 'Backend',
    blurb:
      'APIs and data layers that hold up under load. Node.js and Rails in production, clean data models, and GraphQL or REST designed around the clients that use them.',
    logos: [SiNodedotjs, SiRubyonrails, SiGraphql],
  },
  {
    title: 'Cloud & DevOps',
    blurb:
      'AWS infrastructure as code with Terraform, Kubernetes and Docker, CI/CD, and observability. 99.9% uptime as the floor, not the goal.',
    logos: [FaAws, SiTerraform, SiKubernetes, SiDocker],
  },
  {
    title: 'Full-stack delivery',
    blurb:
      'One team from design to deployment. No handoffs, no information lost between disciplines, shipped in fast iterations. You own the code and the repo.',
    logos: [SiGit, SiGithub],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 scroll-mt-4">
      <div className="max-w-[1440px] mx-auto">
        {/* Badge row */}
        <ScrollReveal className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8" delay={0}>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
            <span className="text-white font-semibold" style={{ fontSize: '11px' }}>3</span>
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-700">
            What we do
          </span>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal className="px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14 lg:mb-16" delay={0.1}>
          <h2
            className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)' }}
          >
            Full-stack, in-house.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Frontend to infrastructure.
          </h2>
        </ScrollReveal>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 px-5 sm:px-8 lg:px-12">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={0.1 + i * 0.06} y={28}>
              <div className="h-full rounded-2xl border border-gray-200 p-6 sm:p-7 hover:border-gray-300 transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[17px] sm:text-[18px] font-semibold text-gray-900">
                    {s.title}
                  </h3>
                  <div className="flex items-center gap-3 text-gray-400">
                    {s.logos.map((Icon, idx) => (
                      <Icon key={idx} className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
                    ))}
                  </div>
                </div>
                <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.6]">
                  {s.blurb}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
