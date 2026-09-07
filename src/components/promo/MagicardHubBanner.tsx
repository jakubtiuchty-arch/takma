'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { DownloadIcon } from '@/components/ui/Icons'

/**
 * Baner na kartach drukarek kart Magicard: program do projektowania kart jest bezpłatny
 * i do pobrania z naszej strony. Po prawej wideo z Higgsfield: na pustej karcie powstaje
 * projekt identyfikatora (zdjęcie, dane, kod QR). Odtwarza się RAZ, gdy baner wjedzie
 * w widok, i zostaje na gotowym projekcie; kolejny raz dopiero po odświeżeniu strony.
 * Plakat = ta sama scena z pustą kartą; przy ograniczonym ruchu wideo nie startuje.
 * Tekst w HTML wyłącznie na ciemnej, lewej części. Prowadzi na kartę programu /produkt/magicard-hub.
 */
export default function MagicardHubBanner({ printerName }: { printerName: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const video = videoRef.current
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // start dopiero, gdy co najmniej połowa banera jest widoczna — inaczej animacja przeleci poza ekranem
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          video.play().catch(() => {})
          io.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [])

  return (
    <Link
      href="/produkt/magicard-hub"
      className="group relative block overflow-hidden rounded-2xl bg-[#0f2247] text-white shadow-[0_24px_50px_-16px_rgba(6,14,36,0.55)]"
    >
      <video
        ref={videoRef}
        className="absolute inset-y-0 right-0 h-full w-auto max-w-none"
        muted
        playsInline
        preload="auto"
        poster="/images/promo/magicard-hub-bg.webp"
        aria-hidden="true"
      >
        <source src="/video/magicard-hub-card.mp4" type="video/mp4" />
      </video>
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0f2247] from-45% via-[#0f2247]/85 via-65% to-transparent" />
      <div className="relative px-5 sm:px-6 py-5 sm:py-6 pr-28 sm:pr-40">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-300">Program w cenie drukarki</p>
        <p className="text-lg sm:text-xl font-extrabold tracking-tight leading-tight">Magicard HUB: projektowanie kart bez opłat</p>
        <p className="mt-2 text-[13.5px] sm:text-sm text-white/75 leading-relaxed max-w-[30rem]">
          Do drukarki {printerName} producent dostarcza bezpłatny program: instalacja przez USB, Wi-Fi lub Ethernet,
          projektant identyfikatorów i legitymacji, dane z listy uczniów lub pracowników, kody QR.
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:underline">
          <DownloadIcon size={16} />
          Pobierz Magicard HUB
        </span>
      </div>
    </Link>
  )
}
