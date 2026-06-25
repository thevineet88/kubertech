import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { openBooking } from '../booking'

const steps = [
  {
    n: '01',
    title: 'Scope',
    body: 'We pin down the outcome, the constraints, and what done and fast means before any quote.',
  },
  {
    n: '02',
    title: 'Build',
    body: 'You get shipped, reviewable work in short iterations, in the open, the whole way.',
  },
  {
    n: '03',
    title: 'Ship and own',
    body: 'We deploy to production-grade infrastructure with CI/CD, then hand you the code, the repo, and the runbook. Ongoing support is optional, never a lock-in.',
  },
]

export default function AboutSection() {
  return (
    <section id="studio" className="bg-[#FAFAFA] border-t border-gray-100 pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 scroll-mt-4 md:scroll-mt-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Badge row */}
        <ScrollReveal className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8" delay={0}>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
            <span className="text-white font-semibold" style={{ fontSize: '11px' }}>2</span>
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-700">
            How we work
          </span>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal className="px-5 sm:px-8 lg:px-12 mb-5 sm:mb-6" delay={0.1}>
          <h2
            className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-3xl"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)' }}
          >
            Design to deploy, owned end to end.
          </h2>
        </ScrollReveal>

        {/* Ownership + async/IST */}
        <ScrollReveal className="px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16" delay={0.15}>
          <div className="max-w-3xl space-y-4">
            <p className="text-[15px] sm:text-[17px] leading-[1.6] text-gray-700">
              One team owns the whole path: the product in the browser and the
              cloud it runs on. Performance is designed in, not bolted on, so there
              is no handoff gap where a fast build turns into a slow production site.
            </p>
            <p className="text-[15px] sm:text-[17px] leading-[1.6] text-gray-700">
              We work fully async on IST. Decisions, progress, and code land in
              writing, so you get reviewable work on a predictable cadence instead
              of standups. This is how we have delivered on distributed teams for
              years, built for founders who want momentum without managing it.
            </p>
          </div>
        </ScrollReveal>

        {/* Engagement steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 px-5 sm:px-8 lg:px-12">
          {steps.map((s, i) => (
            <ScrollReveal key={s.n} delay={0.1 + i * 0.07} y={24}>
              <div className="h-full rounded-2xl bg-white border border-gray-200 p-6 sm:p-7">
                <p className="text-[28px] sm:text-[34px] font-semibold text-[#F26522] leading-none mb-4">
                  {s.n}
                </p>
                <h3 className="text-[17px] sm:text-[19px] font-semibold text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14px] text-gray-600 leading-[1.6]">
                  {s.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal className="px-5 sm:px-8 lg:px-12 mt-10 sm:mt-12" delay={0.1}>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              openBooking()
            }}
            className="group inline-flex items-center gap-2 bg-[#F26522] text-white text-[14px] font-medium rounded-full pl-6 pr-2 py-2.5"
            whileHover={{ scale: 1.03, backgroundColor: '#e05a1a' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <span>Book a 30-minute call</span>
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shrink-0">
              <ArrowRight
                size={12}
                className="text-[#F26522] transition-transform duration-500 group-hover:-rotate-45"
                style={{ transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' }}
              />
            </div>
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  )
}
