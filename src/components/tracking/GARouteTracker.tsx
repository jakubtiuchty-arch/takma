'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

/**
 * Wysyła `page_view` do GA4 przy KAŻDEJ nawigacji klienckiej (App Router / SPA).
 *
 * Dlaczego: GA4 jest ładowane przez gtag.js z `send_page_view: true`, które
 * wysyła page_view tylko przy pełnym załadowaniu strony. Nawigacje SPA
 * (klik w link bez przeładowania) NIE emitowały żadnego page_view. Gdy sesja
 * GA zaczynała się po takiej nawigacji (timeout 30 min, powrót z bfcache),
 * pierwszym hitem był custom event bez page_view → landing page = "(not set)"
 * (112 sesji / 13,2% w panelu).
 *
 * Pierwsze wejście (initial load) page_view wysyła config gtag — tu pomijamy
 * pierwszy render (ref), żeby nie liczyć go podwójnie, i łapiemy tylko kolejne
 * przejścia SPA.
 */
export default function GARouteTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

    const qs = searchParams?.toString()
    const pagePath = qs ? `${pathname}?${qs}` : pathname

    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pathname, searchParams])

  return null
}
