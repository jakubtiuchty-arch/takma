import AskAboutProductButton from './AskAboutProductButton'
import { ZEBRA_CEE_PROMO, type ProductPromo } from '@/data/promos'

const VAT = 1.23
const fmt = (n: number) =>
  n.toLocaleString('pl-PL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })

/**
 * Baner promocji producenckiej (Zebra CEE Voucher) na karcie produktu.
 * Pokazuje naszą cenę promocyjną (przekreślona regularna); realizacja przez
 * formularz zapytania — koszyk liczy ceny regularne. Znika po endDate.
 */
export default function PromoBanner({
  productName,
  productSlug,
  promo,
}: {
  productName: string
  productSlug: string
  promo: ProductPromo
}) {
  const end = new Date(`${ZEBRA_CEE_PROMO.endDate}T23:59:59+02:00`)
  const daysLeft = Math.max(0, Math.ceil((end.getTime() - Date.now()) / 86_400_000))
  const endLabel = end.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' })
  const savingPct = Math.round((1 - promo.promoNetto / promo.regularNetto) * 100)

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gray-950 p-5 sm:p-6 mb-6">
      {/* poświata w rogu — subtelny akcent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-25 blur-3xl"
        style={{ background: '#A8F000' }}
      />
      <div className="relative">
        <div className="flex items-center justify-between gap-3 mb-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: '#A8F000' }}>
            Promocja
          </p>
          <span className="shrink-0 rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-semibold text-white/80 tabular-nums">
            do {endLabel} · zostało {daysLeft} dni
          </span>
        </div>

        {/* Cena promo — duża, z przekreśloną regularną i procentem */}
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: '#A8F000' }}>
            {fmt(promo.promoNetto)} zł <span className="text-base font-semibold text-white/70">netto</span>
          </span>
          <span className="text-base text-white/45 line-through">{fmt(promo.regularNetto)} zł</span>
          <span className="rounded-md px-1.5 py-0.5 text-xs font-bold text-gray-950" style={{ background: '#A8F000' }}>
            −{savingPct}%
          </span>
        </div>
        <p className="text-sm text-white/60 mt-1">
          {fmt(Math.round(promo.promoNetto * VAT))} zł brutto &nbsp;·&nbsp; wariant {promo.sku}
        </p>
        <p className="text-sm text-white/60 leading-relaxed mt-2.5 mb-5">
          Zamówienie przez formularz — potwierdzamy w&nbsp;24&nbsp;h w&nbsp;dni robocze.
        </p>

        <AskAboutProductButton
          productName={productName}
          productSlug={productSlug}
          promoStyle
          label="Zamów w cenie promocyjnej"
          initialMessage={`Dzień dobry, zamawiam ${productName} (${promo.sku}) w cenie promocyjnej ${fmt(promo.promoNetto)} zł netto/szt. Liczba sztuk: `}
        />
      </div>
    </div>
  )
}
