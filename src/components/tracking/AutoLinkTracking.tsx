'use client'

import { useEffect } from 'react'
import { trackPhoneClick, trackEmailClick } from '@/lib/ga-events'

/**
 * Global event listener — automatycznie strzela klik_tel i klik_mail
 * dla wszystkich <a href="tel:..."> i <a href="mailto:..."> w całej aplikacji.
 * Wstawione w app/layout.tsx, więc działa na każdej stronie.
 */
export function AutoLinkTracking() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const anchor = target.closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href) return

      try {
        if (href.startsWith('tel:')) {
          trackPhoneClick(href.replace('tel:', ''), window.location.pathname)
        } else if (href.startsWith('mailto:')) {
          const email = href.replace('mailto:', '').split('?')[0]
          trackEmailClick(email, window.location.pathname)
        }
      } catch (err) {
        // Tracking failure must not break navigation
        console.warn('AutoLinkTracking error:', err)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
