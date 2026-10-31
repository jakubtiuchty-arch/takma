import Link from 'next/link'
import type { RibbonSeries } from '@/data/transfer-ribbon-series'
import { ArrowRightIcon } from '@/components/ui/Icons'
import { stripMarkdown } from '@/lib/strip-markdown'

/** Pojedynczy kafelek modelu taśmy na hubie (Zebra i SATO) — dwa rozmiary (large dla flagowców). */
export default function RibbonSeriesBannerCard({
  series: s,
  href,
  chip,
  priceFrom,
  size = 'normal',
  className = '',
  showImage = true,
}: {
  series: RibbonSeries
  href: string
  chip: string
  /** Brak ceny → kafelek bez linii „od X zł netto”. */
  priceFrom?: number | null
  size?: 'normal' | 'large'
  className?: string
  /** false → bez tapety ze zdjęciem także na dużym kafelku (hub SATO: heroImage służy tylko hero serii). */
  showImage?: boolean
}) {
  const isLarge = size === 'large'
  // Tapeta ze zdjęciem tylko na flagowcach (duże karty). Mała karta używa radial-gradientu,
  // nawet jeśli seria ma `heroImage` (to zdjęcie służy wyłącznie hero strony serii).
  const hasImage = showImage && isLarge && Boolean(s.heroImage)
  return (
    <Link
      href={href}
      className={`group relative h-full overflow-hidden bg-white border border-slate-200 rounded-xl hover:border-[#A8F000] hover:shadow-lg transition-all flex flex-col ${
        isLarge ? 'p-7' : 'p-5'
      } ${className}`}
    >
      {hasImage ? (
        // Tapeta — obraz wypełnia całą kartę (bg-cover bg-center). Półprzezroczysty biały
        // overlay (75%) nad obrazem zapewnia czytelność tekstu pełnej szerokości karty.
        <>
          <span
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-[1.02]"
            style={{ backgroundImage: `url('${s.heroImage}')`, backgroundPosition: s.cardImagePosition ?? s.heroImagePosition ?? '50% center' }}
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none bg-white/75"
          />
        </>
      ) : (
        // Bez obrazu — subtelny radial gradient z prawego-dolnego rogu z accent koloru serii
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-80 group-hover:opacity-100"
          style={{
            background: `radial-gradient(ellipse 65% 35% at bottom right, ${s.accent}55 0%, ${s.accent}1A 40%, transparent 80%)`,
          }}
        />
      )}

      <div className="relative z-10 flex flex-col h-full">
        {/* Chip + strzałka */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded bg-slate-100 text-slate-700">
            {chip}
          </span>
          <ArrowRightIcon
            size={isLarge ? 18 : 16}
            className="text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all"
          />
        </div>

        {/* Title */}
        <h4 className={`font-bold text-gray-900 leading-tight mb-2 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
          {s.title}
        </h4>

        {/* Tagline */}
        <p className={`text-gray-700 leading-snug flex-1 ${isLarge ? 'text-base' : 'text-sm'}`}>
          {stripMarkdown(s.tagline)}
        </p>

        {/* Cena od */}
        {priceFrom ? (
          <p className={`mt-3 text-gray-500 ${isLarge ? 'text-sm' : 'text-xs'}`}>
            od <span className="font-semibold text-gray-900">{priceFrom.toLocaleString('pl-PL', { maximumFractionDigits: 0 })} zł</span> netto
          </p>
        ) : null}
      </div>
    </Link>
  )
}
