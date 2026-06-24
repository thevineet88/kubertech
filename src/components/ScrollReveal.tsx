import { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  delay?: number
  y?: number
  scale?: number
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
}

export default function ScrollReveal({
  delay = 0,
  y = 24,
  scale,
  className,
  children,
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Check if already in viewport on mount (e.g. page loaded scrolled down)
    const check = () => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight - 60 && rect.bottom > 0) {
        setVisible(true)
        return true
      }
      return false
    }

    if (check()) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0 }
    )
    observer.observe(el)

    // Scroll fallback: poll until visible
    const onScroll = () => { if (check()) window.removeEventListener('scroll', onScroll) }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const transitionStyle: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible
      ? 'translateY(0px) scale(1)'
      : `translateY(${y}px) scale(${scale ?? 1})`,
    transition: `opacity 0.65s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 0.65s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
    willChange: 'opacity, transform',
    ...style,
  }

  return (
    <div ref={ref} className={className} style={transitionStyle}>
      {children}
    </div>
  )
}
