"use client";

import { useEffect, useRef, useState } from 'react'
import ScrollReveal from './ScrollReveal'
import ScrambleText from './ScrambleText'

const stats = [
  { end: 8, suffix: '+ yrs', label: 'Full-cycle product delivery, design to deploy' },
  { end: 2, suffix: 'M+', label: 'Users served on products we have built and run' },
  { end: 500, suffix: 'k+', label: 'Documents indexed in a production RAG system we shipped' },
  { end: 99.9, suffix: '%', label: 'Uptime on the cloud infrastructure we own' },
]

function useCountUp(end: number, duration = 1.6, started: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((eased * end).toFixed(end % 1 !== 0 ? 1 : 0)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, end, duration])
  return count
}

function StatItem({ end, suffix, label, delay }: typeof stats[0] & { delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const count = useCountUp(end, 1.6, started)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <ScrollReveal delay={delay} y={18}>
      <div ref={ref}>
        <p className="text-[28px] sm:text-[34px] lg:text-[38px] font-semibold tracking-tight text-[#FAFAFA] leading-none">
          {count}{suffix}
        </p>
        <p className="text-[12px] sm:text-[13px] text-white/50 mt-2 leading-[1.45] max-w-[240px]">
          {label}
        </p>
      </div>
    </ScrollReveal>
  )
}

export default function ProofBar() {
  return (
    <section className="relative z-10 border-t border-white/10 py-10 sm:py-12 lg:py-14">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <ScrambleText
            as="p"
            text="Proof, not promises"
            className="text-xs uppercase mb-8 sm:mb-10"
            style={{ color: '#A1A1AA', fontFamily: 'ui-monospace, Menlo, monospace', letterSpacing: '0.3em' }}
          />
        </ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 sm:gap-y-10">
          {stats.map((s, i) => (
            <StatItem key={s.suffix} {...s} delay={0.06 * i} />
          ))}
        </div>
      </div>
    </section>
  )
}
