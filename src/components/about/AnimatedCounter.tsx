'use client'

import { useEffect, useRef, useState } from 'react'

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
}

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          const start = performance.now()
          const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = easeOutExpo(progress)
            setCount(Math.round(eased * end))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('pl-PL')}{suffix}
    </span>
  )
}
