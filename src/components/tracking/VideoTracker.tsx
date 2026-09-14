'use client'

import { useEffect } from 'react'
import { trackVideoStart, trackVideoProgress, trackVideoComplete } from '@/lib/ga-events'

/**
 * Mierzy odtwarzanie filmów wgranych u nas (karty produktów i instrukcje PL).
 *
 * Dlaczego osobny komponent: wbudowane w GA4 „zaangażowanie w filmy” działa
 * tylko dla osadzonych YouTube z włączonym JS API. Nasze filmy to natywny
 * `<video>` z Vercel Blob, więc GA4 nie widzi ich wcale. Podpinamy się pod
 * zdarzenia odtwarzacza i wysyłamy `video_start`, `video_progress`
 * i `video_complete` z parametrami zgodnymi ze schematem GA4.
 *
 * Sekcje z filmami są renderowane po stronie serwera, więc wystarczy raz
 * przejść po DOM po zamontowaniu. Pomijamy filmy dekoracyjne (autoplay albo
 * loop: obrót 360 stopni, tła banerów) — te nie mówią nic o zainteresowaniu.
 */
const PROGI = [10, 25, 50, 75]

export default function VideoTracker() {
  useEffect(() => {
    const sprzatanie: Array<() => void> = []

    const podepnij = (el: HTMLVideoElement) => {
      if (el.dataset.gaPodpiety === '1') return
      if (el.autoplay || el.loop || !el.controls) return
      el.dataset.gaPodpiety = '1'

      const tytul =
        el.getAttribute('title') ||
        el.closest('figure')?.querySelector('figcaption')?.textContent?.trim() ||
        (el.currentSrc || el.src).split('/').pop() ||
        'film'
      const dane = () => ({
        title: tytul,
        url: el.currentSrc || el.src,
        duration: el.duration || 0,
        currentTime: el.currentTime,
        percent: el.duration ? Math.round((el.currentTime / el.duration) * 100) : 0,
      })

      let zaczete = false
      const wyslane = new Set<number>()

      const onPlay = () => {
        if (zaczete) return
        zaczete = true
        // Filmy mają preload="none", więc w chwili wciśnięcia play długość
        // bywa jeszcze nieznana. Czekamy na metadane, żeby video_duration
        // nie poszło jako zero.
        if (el.duration && !Number.isNaN(el.duration)) trackVideoStart(dane())
        else el.addEventListener('loadedmetadata', () => trackVideoStart(dane()), { once: true })
      }
      const onTime = () => {
        if (!el.duration) return
        const p = (el.currentTime / el.duration) * 100
        for (const prog of PROGI) {
          if (p >= prog && !wyslane.has(prog)) {
            wyslane.add(prog)
            trackVideoProgress({ ...dane(), percent: prog })
          }
        }
      }
      const onEnd = () => trackVideoComplete({ ...dane(), percent: 100 })

      el.addEventListener('play', onPlay)
      el.addEventListener('timeupdate', onTime)
      el.addEventListener('ended', onEnd)
      sprzatanie.push(() => {
        el.removeEventListener('play', onPlay)
        el.removeEventListener('timeupdate', onTime)
        el.removeEventListener('ended', onEnd)
        // Znacznik musi zniknąć razem z nasłuchami. W trybie deweloperskim React
        // montuje efekt dwa razy (StrictMode), a przy nawigacji klienckiej
        // komponent odmontowuje się i wraca — bez tego drugie podejście widzi
        // znacznik, pomija element i film przestaje być mierzony.
        delete el.dataset.gaPodpiety
      })
    }

    document.querySelectorAll<HTMLVideoElement>('video').forEach(podepnij)

    // Film w instrukcji potrafi dojechać po hydratacji sekcji, więc pilnujemy DOM.
    const obserwator = new MutationObserver((zmiany) => {
      for (const z of zmiany) {
        z.addedNodes.forEach((n) => {
          if (!(n instanceof HTMLElement)) return
          if (n instanceof HTMLVideoElement) podepnij(n)
          n.querySelectorAll?.<HTMLVideoElement>('video').forEach(podepnij)
        })
      }
    })
    obserwator.observe(document.body, { childList: true, subtree: true })

    return () => {
      obserwator.disconnect()
      sprzatanie.forEach((f) => f())
    }
  }, [])

  return null
}
