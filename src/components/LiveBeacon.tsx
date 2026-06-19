'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Wysyła lekki sygnał „jestem na stronie" przy każdej zmianie ścieżki —
 * serwer (/api/track/live) zapisuje IP+miasto do podglądu „kto teraz na stronie"
 * w /admin/analytics. Fire-and-forget, nie blokuje renderu.
 */
export default function LiveBeacon() {
  const pathname = usePathname()
  useEffect(() => {
    if (!pathname || pathname.startsWith('/admin') || pathname.startsWith('/panel')) return
    const body = JSON.stringify({ path: pathname })
    try {
      // sendBeacon nie blokuje nawigacji; fallback na fetch
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/track/live', new Blob([body], { type: 'application/json' }))
      } else {
        fetch('/api/track/live', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {})
      }
    } catch { /* ignore */ }
  }, [pathname])
  return null
}
