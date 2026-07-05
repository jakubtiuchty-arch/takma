'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

/**
 * Atrybucja marketingowa (droga klienta od kliknięcia):
 *  - cookie `takma_attr` (90 dni): gclid/UTM + strona lądowania — ustawiane przy wejściu z reklamy/kampanii,
 *  - cookie `takma_journey` (sesja): ostatnie strony odwiedzone w tej wizycie.
 * Serwer dokleja te dane do leadów (formularze) i zamówień — patrz src/lib/attribution.ts.
 */
const ATTR_COOKIE = 'takma_attr'
const JOURNEY_COOKIE = 'takma_journey'
const JOURNEY_MAX = 15

function setCookie(name: string, value: string, maxAgeSec?: number) {
  document.cookie =
    `${name}=${encodeURIComponent(value)}; path=/; SameSite=Lax` +
    (maxAgeSec ? `; max-age=${maxAgeSec}` : '') +
    (location.protocol === 'https:' ? '; Secure' : '')
}

function getCookie(name: string): string | null {
  const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
  return m ? decodeURIComponent(m[1]) : null
}

export default function AttributionTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Wejście z kampanii → zapisz/odśwież atrybucję (last non-direct click)
  useEffect(() => {
    const gclid = searchParams.get('gclid') || searchParams.get('gbraid') || searchParams.get('wbraid')
    const utmSource = searchParams.get('utm_source')
    if (!gclid && !utmSource) return
    const attr = {
      gclid: searchParams.get('gclid') || null,
      utmSource: utmSource || (gclid ? 'google' : null),
      utmMedium: searchParams.get('utm_medium') || (gclid ? 'cpc' : null),
      utmCampaign: searchParams.get('utm_campaign') || null,
      landingPage: pathname,
      ts: Date.now(),
    }
    setCookie(ATTR_COOKIE, JSON.stringify(attr), 90 * 24 * 3600)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  // Ścieżka wizyty (cookie sesyjne) — bez powtórzeń pod rząd, max 15 wpisów
  useEffect(() => {
    if (!pathname || pathname.startsWith('/admin') || pathname.startsWith('/panel')) return
    let journey: string[] = []
    try { journey = JSON.parse(getCookie(JOURNEY_COOKIE) || '[]') } catch { /* od zera */ }
    if (journey[journey.length - 1] !== pathname) {
      journey.push(pathname)
      if (journey.length > JOURNEY_MAX) journey = journey.slice(-JOURNEY_MAX)
      setCookie(JOURNEY_COOKIE, JSON.stringify(journey))
    }
  }, [pathname])

  return null
}
