import Image from 'next/image'
import Link from 'next/link'

/**
 * Baner produktowy (most do zakupu/wdrożenia) — wizualnie zgodny z banerem lejka
 * z instrukcji serwis-zebry.pl. Aurora 2026 (CSS) + ikona, lime #A8F000.
 * Renderowany na wybranych kartach produktu (np. nowości — ET401).
 */
export default function ProductFunnelBanner({
  headline,
  sub,
  ctaLabel,
  ctaHref,
  alt = 'Nowy tablet Zebra w ofercie TAKMA',
}: {
  headline: string
  sub: string
  ctaLabel: string
  ctaHref: string
  alt?: string
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/10 min-h-[200px]">
      <Image
        src="/sklep_photo/banners/funnel-buy.jpeg"
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 1024px"
        className="object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/10" />
      {/* Animowana aurora — dryfujące limonkowo-fioletowe światło po prawej (CSS, wygasza się przy reduced-motion) */}
      <div className="absolute inset-y-0 right-0 w-2/3 overflow-hidden pointer-events-none mix-blend-screen" aria-hidden="true">
        <div className="aurora-blob-a absolute top-[-40%] right-[2%] w-[55%] aspect-square rounded-full bg-[#A8F000]/60 blur-3xl" />
        <div className="aurora-blob-b absolute bottom-[-45%] right-[30%] w-[60%] aspect-square rounded-full bg-fuchsia-500/40 blur-3xl" />
      </div>
      <div className="relative p-6 sm:p-7 flex items-start gap-4">
        <Image
          src="/sklep_photo/banners/icon-buy.jpeg"
          alt=""
          width={56}
          height={56}
          className="flex-shrink-0 w-14 h-14 rounded-2xl shadow-lg shadow-[#A8F000]/30 ring-1 ring-[#A8F000]/20"
        />
        <div className="flex-1 max-w-2xl">
          <p className="text-lg sm:text-xl font-bold text-white drop-shadow-sm">{headline}</p>
          <p className="text-sm text-slate-200 mt-1.5 drop-shadow-sm max-w-lg text-pretty">{sub}</p>
          <div className="flex flex-wrap gap-2.5 mt-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#A8F000] text-slate-950 text-sm font-bold hover:bg-[#bcff33] transition-colors shadow-lg shadow-[#A8F000]/30"
            >
              {ctaLabel}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
