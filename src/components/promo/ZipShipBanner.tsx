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
  const [tipOpen, setTipOpen] = useState(false)
  const [settled, setSettled] = useState(false) // po zakończeniu animacji rozwijania — odblokowuje overflow dla tooltipa

  if (!zipshipActive() || variant !== 'card') return null

  return (
    <div className={`relative ${tipOpen ? 'z-30' : 'z-0'} rounded-2xl bg-gray-950 mx-3 sm:mx-5 -mt-10 mb-6 shadow-[0_24px_50px_-16px_rgba(4,10,6,0.6)]`}>
      {/* warstwa dekoracyjna z clippingiem (tooltip musi móc wystawać nad kafel) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/50 to-transparent z-[1]" />
        <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-25 blur-3xl" style={{ background: '#A8F000' }} />
      </div>

      {/* pasek-zajawka (zawsze widoczny, klik przełącza) */}
      <button
        type="button"
        onClick={() => { setOpen((v) => !v); setSettled(false); setTipOpen(false) }}
        aria-expanded={open}
        className="relative w-full flex items-center justify-between gap-2 px-4 sm:px-6 pt-8 pb-4 text-left focus:outline-none"
      >
        <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-gray-950" style={{ background: '#A8F000' }}>
          Promocja&nbsp;·&nbsp;do −15%
        </span>
        <span className="flex items-center gap-2 text-[12px] font-semibold text-white/70">
          <span className="hidden xs:inline">{open ? 'zwiń' : 'zobacz szczegóły'}</span><span className="xs:hidden">{open ? 'zwiń' : 'szczegóły'}</span>
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
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        onTransitionEnd={() => setSettled(open)}
      >
        <div className={open && settled ? 'overflow-visible' : 'overflow-hidden'}>
          <div className="relative px-4 sm:px-6 pb-4">
            <div className="flex items-center justify-between gap-3 mb-2">
              <p className="text-white font-bold leading-snug text-[15px]">
                Do 3 kartonów nawet 15% taniej do Twojej drukarki Zebra{' '}
                <span
                  className="relative inline-block align-middle"
                  onMouseEnter={() => setTipOpen(true)}
                  onMouseLeave={() => setTipOpen(false)}
                >
                  <button
                    type="button"
                    aria-label="Szczegóły promocji"
                    onClick={() => setTipOpen((v) => !v)}
                    className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#A8F000]/60 text-[11px] font-bold leading-none text-[#A8F000] hover:bg-[#A8F000] hover:text-gray-950 transition-colors"
                  >
                    ?
                  </button>
                  {tipOpen && (
                    <span className="hidden sm:block absolute bottom-full left-1/2 z-20 mb-2 w-80 -translate-x-1/2 rounded-xl border border-white/10 bg-gray-900 p-4 text-left shadow-2xl">
                      <span className="block text-[13px] font-bold text-white mb-2">Jak działa promocja?</span>
                      <span className="block space-y-1.5">
                        <span className="block text-[12px] leading-relaxed text-white/75">• <b className="text-white">Do 3 kartonów na każdą drukarkę</b> — można kupić 1, 2 lub 3, bez minimum. Masz 5 drukarek? Limit liczy się osobno dla każdej.</span>
                        <span className="block text-[12px] leading-relaxed text-white/75">• Przy etykietach termotransferowych <b className="text-white">dodatkowo do 3 kartonów taśm</b> w promocji.</span>
                        <span className="block text-[12px] leading-relaxed text-white/75">• Dotyczy wybranych etykiet i taśm z magazynowego asortymentu Zebra — nowej lub już posiadanej drukarki (także kupionej gdzie indziej).</span>
                        <span className="block text-[12px] leading-relaxed text-white/75">• Podajesz numer seryjny drukarki, my w <b className="text-white">24 h</b> odsyłamy wycenę. Promocja do <b className="text-white">31 grudnia 2026</b>.</span>
                      </span>
                      <span aria-hidden className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-gray-900" />
                    </span>
                  )}
                </span>
              </p>
              <span className="shrink-0 text-[11px] font-semibold text-white/60 tabular-nums">do 31 grudnia</span>
            </div>
            {tipOpen && (
              <div className="sm:hidden mt-3 rounded-xl border border-white/10 bg-gray-900 p-4">
                  <p className="text-[13px] font-bold text-white mb-2">Jak działa promocja?</p>
                  <ul className="space-y-1.5">
                    <li className="text-[12px] leading-relaxed text-white/75">• <b className="text-white">Do 3 kartonów na każdą drukarkę</b> — można kupić 1, 2 lub 3, bez minimum. Masz 5 drukarek? Limit liczy się osobno dla każdej.</li>
                    <li className="text-[12px] leading-relaxed text-white/75">• Przy etykietach termotransferowych <b className="text-white">dodatkowo do 3 kartonów taśm</b> w promocji.</li>
                    <li className="text-[12px] leading-relaxed text-white/75">• Dotyczy wybranych etykiet i taśm z magazynowego asortymentu Zebra — nowej lub już posiadanej drukarki (także kupionej gdzie indziej).</li>
                    <li className="text-[12px] leading-relaxed text-white/75">• Podajesz numer seryjny drukarki, my w <b className="text-white">24 h</b> odsyłamy wycenę. Promocja do <b className="text-white">31 grudnia 2026</b>.</li>
                  </ul>
                </div>
              )}
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
