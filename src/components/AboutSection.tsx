import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const SMALL_IMG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85'

const LARGE_IMG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85'

function OrangeButton({ label }: { label: string }) {
  return (
    <motion.button
      className="group flex items-center gap-2 bg-[#F26522] text-white text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 shrink-0"
      whileHover={{ scale: 1.03, backgroundColor: '#e05a1a' }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      <div className="overflow-hidden h-[20px]">
        <div
          className="flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2"
          style={{ transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' }}
        >
          <span className="h-[20px] flex items-center">{label}</span>
          <span className="h-[20px] flex items-center">{label}</span>
        </div>
      </div>
      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shrink-0">
        <ArrowRight
          size={12}
          className="text-[#F26522] transition-transform duration-500 group-hover:-rotate-45"
          style={{ transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' }}
        />
      </div>
    </motion.button>
  )
}

export default function AboutSection() {
  return (
    <section id="studio" className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden scroll-mt-4">
      <div className="max-w-[1440px] mx-auto">
        {/* Badge row */}
        <ScrollReveal className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8" delay={0}>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
            <span className="text-white font-semibold" style={{ fontSize: '11px' }}>1</span>
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-700">
            Introducing Kuber Tech
          </span>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal
          className="px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16 lg:mb-28"
          delay={0.1}
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)' } as React.CSSProperties}
        >
          <h2
            className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)' }}
          >
            A full-stack studio, built to ship fast
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            without cutting corners.
          </h2>
        </ScrollReveal>

        {/* Mobile / tablet */}
        <div className="lg:hidden px-5 sm:px-8 space-y-8">
          <ScrollReveal className="space-y-6" delay={0.15}>
            <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900">
              Through careful scoping, hands-on engineering and fast iterations
              we help growing businesses reach their full digital potential, with
              one team that owns frontend, backend, and cloud.
            </p>
            <OrangeButton label="About our studio" />
          </ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <ScrollReveal className="sm:w-[45%]" delay={0.2} y={16} scale={0.96}>
              <img
                src={SMALL_IMG}
                alt="Developer at work"
                className="w-full rounded-xl sm:rounded-2xl object-cover"
                style={{ aspectRatio: '438/346' }}
              />
            </ScrollReveal>
            <ScrollReveal className="sm:w-[55%]" delay={0.3} y={16} scale={0.96}>
              <img
                src={LARGE_IMG}
                alt="Team planning session"
                className="w-full rounded-xl sm:rounded-2xl object-cover"
                style={{ aspectRatio: '900/600' }}
              />
            </ScrollReveal>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-12">
          <ScrollReveal className="self-end" delay={0.15} y={16} scale={0.96}>
            <img
              src={SMALL_IMG}
              alt="Developer at work"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: '438/346' }}
            />
          </ScrollReveal>

          <ScrollReveal className="self-start flex flex-col items-end gap-8 pb-4" delay={0.2}>
            <p className="text-[16px] sm:text-[18px] leading-[1.65] font-medium text-gray-900 whitespace-nowrap text-right">
              Through careful scoping,<br />
              hands-on engineering and<br />
              fast iterations we help<br />
              growing businesses reach<br />
              their full digital potential,<br />
              with one team that owns<br />
              frontend, backend, and cloud.
            </p>
            <OrangeButton label="About our studio" />
          </ScrollReveal>

          <ScrollReveal className="self-end" delay={0.25} y={16} scale={0.96}>
            <img
              src={LARGE_IMG}
              alt="Team planning session"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: '3/2' }}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
