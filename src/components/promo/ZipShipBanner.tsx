'use client'

import { useState } from 'react'
import AskAboutProductButton from '@/app/produkt/[slug]/AskAboutProductButton'
import { zipshipActive } from '@/data/promos'

/**
 * Promocja Zebra na materiały eksploatacyjne (do 31.12.2026; wewn. ZipShip —
 * nazwy nie używamy w UI; rabat partnerski POUFNY, na froncie tylko −15% od
 * naszych cen). Wariant card = zwijana szuflada pod boxem ceny: domyślnie
 * wystaje tylko pasek "PROMOCJA · DO −15%" z animowaną strzałką, klik rozwija
 * pełny kafel. Znika sam po endDate.
 */
export default function ZipShipBanner({
  context = 'materiały eksploatacyjne Zebra',
  variant = 'card',
}: {
  context?: string
  variant?: 'drawer' | 'card'
}) {
  const [open, setOpen] = useState(false)

  if (!zipshipActive() || variant !== 'card') return null

  return (
    <div className="relative z-0 overflow-hidden rounded-2xl bg-gray-950 mx-3 sm:mx-5 -mt-10 mb-6 shadow-[0_24px_50px_-16px_rgba(4,10,6,0.6)]">
      {/* cień od boxa ceny — wrażenie szuflady */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/50 to-transparent z-[1]" />
      <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-25 blur-3xl" style={{ background: '#A8F000' }} />

      {/* pasek-zajawka (zawsze widoczny, klik przełącza) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="relative w-full flex items-center justify-between gap-3 px-5 sm:px-6 pt-8 pb-4 text-left focus:outline-none"
      >
        <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-gray-950" style={{ background: '#A8F000' }}>
          Promocja&nbsp;·&nbsp;do −15%
        </span>
        <span className="flex items-center gap-2 text-[12px] font-semibold text-white/70">
          {open ? 'zwiń' : 'zobacz szczegóły'}
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A8F000" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            className={open ? 'rotate-180 transition-transform duration-300' : 'animate-promo-arrow transition-transform duration-300'}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      {/* rozwijana treść */}
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="relative px-5 sm:px-6 pb-4">
            <div className="flex items-center justify-between gap-3 mb-2">
              <p className="text-white font-bold leading-snug text-[15px]">
                Do 3 kartonów nawet 15% taniej do Twojej drukarki Zebra
              </p>
              <span className="shrink-0 text-[11px] font-semibold text-white/60 tabular-nums">do 31 grudnia</span>
            </div>
            <p className="text-[13px] text-white/60 mb-3.5">
              Promocja na wybrane etykiety i taśmy z asortymentu magazynowego Zebra.
              Podaj numer seryjny drukarki — przygotujemy wycenę.
            </p>
            <AskAboutProductButton
              productName={context}
              productSlug="promocja-materialy"
              promo
              promoStyle
              label="Odbierz rabat"
              initialMessage={`Dzień dobry, chcę skorzystać z promocji Zebra na materiały eksploatacyjne (${context}). Numer seryjny mojej drukarki: `}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
