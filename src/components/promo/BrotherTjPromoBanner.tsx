'use client'

import { useState } from 'react'
import AskAboutProductButton from '@/app/produkt/[slug]/AskAboutProductButton'
import { brotherTjPromoFor } from '@/data/promos'

const AKCENT = '#7DB3FF' // jasnoniebieski akcent Brothera (nie limonka Zebry)

/**
 * Promocja Brother na drukarki TJ 300 dpi (TJ-4120TN, TJ-4121TN): rabat do 50%,
 * cena wyłącznie w wycenie. Mechanika jak ZipShipBanner (wariant card):
 * zwijana szuflada pod boxem ceny, domyślnie widać tylko pasek z pigułką
 * i animowaną strzałką. Znika sam poza listą slugów i po endDate.
 */
export default function BrotherTjPromoBanner({
  productSlug,
  productName,
}: {
  productSlug: string
  productName: string
}) {
  const [open, setOpen] = useState(false)

  const promo = brotherTjPromoFor(productSlug)
  if (!promo) return null

  const doKiedy = promo.endDate
    ? new Date(`${promo.endDate}T12:00:00Z`).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', timeZone: 'Europe/Warsaw' })
    : null

  return (
    <div className="relative z-0 rounded-2xl bg-gray-950 mx-3 sm:mx-5 -mt-10 mb-6 shadow-[0_24px_50px_-16px_rgba(4,10,6,0.6)]">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/50 to-transparent z-[1]" />
        <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-25 blur-3xl" style={{ background: AKCENT }} />
      </div>

      {/* pasek-zajawka (zawsze widoczny, klik przełącza) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="relative w-full flex items-center justify-between gap-2 px-4 sm:px-6 pt-8 pb-4 text-left focus:outline-none"
      >
        <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-gray-950" style={{ background: AKCENT }}>
          {`Promocja · do −${promo.percent}%`}
        </span>
        <span className="flex items-center gap-2 text-[12px] font-semibold text-white/70">
          <span className="hidden xs:inline">{open ? 'zwiń' : 'zobacz szczegóły'}</span><span className="xs:hidden">{open ? 'zwiń' : 'szczegóły'}</span>
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={AKCENT} strokeWidth="2.5"
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
          <div className="relative px-4 sm:px-6 pb-4">
            <div className="flex items-center justify-between gap-3 mb-2">
              <p className="text-white font-bold leading-snug text-[15px]">
                Drukarki Brother TJ 300&nbsp;dpi z&nbsp;rabatem do&nbsp;{promo.percent}%
              </p>
              {doKiedy && (
                <span className="shrink-0 text-[11px] font-semibold text-white/60 tabular-nums">do {doKiedy}</span>
              )}
            </div>
            <p className="text-[13px] text-white/60 mb-3.5">
              Promocja obejmuje drukarki półprzemysłowe Brother <span className="whitespace-nowrap">TJ-4120TN</span> i&nbsp;<span className="whitespace-nowrap">TJ-4121TN</span>. Cenę promocyjną podajemy w&nbsp;wycenie.
              Wyślij zapytanie, a&nbsp;odeślemy wycenę w&nbsp;ciągu jednego dnia roboczego.
            </p>
            <AskAboutProductButton
              productName={productName}
              productSlug={productSlug}
              promoStyle
              label="Odbierz rabat"
              initialMessage={`Dzień dobry, proszę o wycenę drukarki ${productName} w promocji Brother. Liczba sztuk: `}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
