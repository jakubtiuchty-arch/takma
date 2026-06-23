'use client'

import { useEffect, useRef } from 'react'

/**
 * Jednorazowy, kolorowy „glow" pod elementem (styl Google/Gemini), uruchamiany
 * ~3,5 s po wejściu na stronę — delikatnie kieruje wzrok np. na box „Kup …".
 * Zapala się i gaśnie raz. Szanuje prefers-reduced-motion.
 */
export default function AttentionGlow({
  children,
  delay = 3500,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = glowRef.current
    if (!el) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    const t = setTimeout(() => {
      el.animate(
        [
          { opacity: 0, transform: 'scale(0.97)' },
          { opacity: 0.85, transform: 'scale(1.03)', offset: 0.45 },
          { opacity: 0, transform: 'scale(1.03)' },
        ],
        { duration: 2600, easing: 'ease-in-out' },
      )
    }, delay)

    return () => clearTimeout(t)
  }, [delay])

  return (
    <div className="relative isolate">
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2.5 -z-10 rounded-3xl opacity-0 blur-2xl"
        style={{
          background:
            'linear-gradient(90deg, #4285F4 0%, #9b72cb 28%, #d96570 52%, #f2a60c 76%, #34a853 100%)',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
