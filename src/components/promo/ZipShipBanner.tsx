import AskAboutProductButton from '@/app/produkt/[slug]/AskAboutProductButton'
import { zipshipActive } from '@/data/promos'

/**
 * Promocja Zebra na materiały eksploatacyjne (do 31.12.2026, rabat do 56% od
 * cennika Zebra na 3 opakowania per drukarka; wewn. ZipShip — nazwy nie używamy w UI).
 *
 * Warianty:
 *  - drawer: pełnowymiarowy PASEK pod ciemnym hero stron kategorii/serii — o ton
 *    jaśniejszy niż hero (slate-900 vs 950) z limonkową szwową linią u góry,
 *    czyta się jako dolny panel hero, nie doklejony box (trend: slim & blended),
 *  - card: ciemny kafel-szuflada pod szarym boxem ceny na kartach wariantów.
 * Procent zawsze w kontekstowym badge'u „PROMOCJA · DO −56%". Znika po endDate.
 */
export default function ZipShipBanner({
  context = 'materiały eksploatacyjne Zebra',
  variant = 'drawer',
}: {
  context?: string
  variant?: 'drawer' | 'card'
}) {
  if (!zipshipActive()) return null

  const initialMessage = `Dzień dobry, chcę skorzystać z promocji Zebra na materiały eksploatacyjne (${context}). Numer seryjny mojej drukarki: `

  if (variant === 'card') {
    return (
      <div className="relative z-0 overflow-hidden rounded-2xl bg-gray-950 px-5 sm:px-6 pb-4 pt-9 sm:pt-10 mb-6 mx-3 sm:mx-5 -mt-10 shadow-[0_24px_50px_-16px_rgba(4,10,6,0.6)]">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/50 to-transparent" />
        <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-25 blur-3xl" style={{ background: '#A8F000' }} />
        <div className="relative">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-gray-950" style={{ background: '#A8F000' }}>
              Promocja&nbsp;·&nbsp;do −15%
            </span>
            <span className="shrink-0 text-[11px] font-semibold text-white/60 tabular-nums">do 31 grudnia</span>
          </div>
          <p className="text-white font-bold leading-snug text-[15px]">
            3 kartony nawet 15% taniej do Twojej drukarki Zebra
          </p>
          <p className="text-[13px] text-white/60 mt-1 mb-3.5">
            Promocja na wybrane etykiety i taśmy z asortymentu magazynowego Zebra.
            Podaj numer seryjny drukarki — przygotujemy wycenę.
          </p>
          <AskAboutProductButton
            productName={context}
            productSlug="promocja-materialy"
            promo
            promoStyle
            label="Odbierz rabat"
            initialMessage={initialMessage}
          />
        </div>
      </div>
    )
  }

  return null
}
