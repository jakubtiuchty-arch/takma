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

  // Źródło sesji z referrera — dla wejść NIEoznaczonych (organic/direct/referral).
  // Ustawiane raz na sesję; wejścia z gclid/UTM obsługuje efekt wyżej (takma_attr).
  useEffect(() => {
    try {
      if (getCookie('takma_src')) return
      const sp = new URLSearchParams(location.search)
      if (sp.get('gclid') || sp.get('gbraid') || sp.get('wbraid') || sp.get('utm_source')) return
      const ref = document.referrer
      let utmSource = '(direct)'
      let utmMedium = '(none)'
      if (ref) {
        const host = new URL(ref).hostname.replace(/^www\./, '')
        if (host === location.hostname.replace(/^www\./, '')) return // nawigacja wewnętrzna
        if (/google\./.test(host)) { utmSource = 'google'; utmMedium = 'organic' }
        else if (/bing\./.test(host)) { utmSource = 'bing'; utmMedium = 'organic' }
        else if (/duckduckgo/.test(host)) { utmSource = 'duckduckgo'; utmMedium = 'organic' }
        else { utmSource = host; utmMedium = 'referral' }
      }
      setCookie('takma_src', JSON.stringify({ utmSource, utmMedium, landingPage: location.pathname, ts: Date.now() }))
    } catch { /* pomiń */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
