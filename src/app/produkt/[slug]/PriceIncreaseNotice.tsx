'use client'

import { useSmartPrice } from './SmartPriceContext'
import { PRICE_INCREASE, priceIncreaseActive, priceIncreaseDaysLeft, type PriceIncreaseInfo } from '@/data/price-increase'

const fmt = (n: number) => n.toLocaleString('pl-PL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })

/**
 * Boks o podwyżce cen Zebry na karcie produktu.
 *
 * Z wytycznych o komunikatach terminowych: jeden konkret (data i procent od
 * producenta), strata nazwana kwotą dla tego modelu z ceny na żywo (awersja do
 * straty działa ok. dwa razy mocniej niż obietnica zysku), licznik dni, jedno
 * wezwanie. Termin jest prawdziwy i boks znika sam po nim.
 *
 * Wygląd jak pozostałe ciemne kafle na karcie (PromoBanner): tło z Higgsfield
 * z limonkową poświatą po prawej, tekst wyłącznie na ciemnej części.
 * Bez własnego przycisku — wezwaniem są przyciski zamówienia tuż pod boksem.
 */
export default function PriceIncreaseNotice({
  priceFrom,
  info,
}: {
  priceFrom?: number
  info: PriceIncreaseInfo
}) {
  // cena z tego samego źródła co box ceny (live z magazynu, z fallbackiem do katalogu)
  const { price: livePrice } = useSmartPrice()
  if (!priceIncreaseActive()) return null
  const basePrice = livePrice ?? priceFrom

  const daysLeft = priceIncreaseDaysLeft()
  const effective = new Date(`${PRICE_INCREASE.effectiveDate}T12:00:00+02:00`)
  const lastOrder = new Date(`${PRICE_INCREASE.lastOrderDate}T12:00:00+02:00`)
  const effectiveLabel = effective.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' })
  const lastOrderLabel = lastOrder.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' })
  // różnica w zł netto dla tego modelu, zaokrąglona do 10 zł
  const delta = basePrice ? Math.round((basePrice * info.percent) / 100 / 10) * 10 : null
  const daysLabel = daysLeft === 0 ? 'ostatni dzień' : daysLeft === 1 ? 'został 1 dzień' : `zostało ${daysLeft} dni`

  return (
    <div
      className="relative z-0 overflow-hidden rounded-2xl bg-gray-950 px-5 sm:px-6 py-5 sm:py-6 mb-6 mx-3 sm:mx-5 shadow-[0_24px_50px_-16px_rgba(4,10,6,0.6)]"
      style={{
        backgroundImage: "url('/images/promo/podwyzka-zebra-bg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
      }}
    >
      {/* domknięcie kontrastu po lewej — tekst ma leżeć wyłącznie na ciemnym polu */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gray-950 from-55% via-gray-950/90 via-80% to-gray-950/20" />

      {/* licznik przy prawej krawędzi kafla, w tej samej odległości co tekst od lewej */}
      <span className="absolute top-5 right-5 sm:top-6 sm:right-6 z-10 rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-semibold text-white/80 tabular-nums">
        {daysLabel}
      </span>

      <div className="relative pr-4 sm:pr-12 lg:pr-14">
        <p className="mb-2.5 pr-24 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: '#A8F000' }}>
          Nowe ceny Zebry od {effectiveLabel}
        </p>

        <p className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-tight">
          {info.headline}
        </p>

        <p className="mt-2.5 text-[13.5px] sm:text-sm text-white/75 leading-relaxed max-w-[27rem]">
          Od {effectiveLabel} Zebra wprowadza wyższe ceny z powodu wzrostu kosztów komponentów. Zamówienia złożone do{' '}
          {lastOrderLabel} realizujemy w cenie widocznej wyżej.
          {delta ? (
            <>
              {' '}
              Po tej dacie różnica dla tego modelu wyniesie około <strong className="text-white">{fmt(delta)} zł netto</strong> za sztukę.
            </>
          ) : null}
        </p>

      </div>
    </div>
  )
}
