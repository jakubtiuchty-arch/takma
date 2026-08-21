import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getManufacturerById } from '@/data/products'
import { activePromotionsByBrand, deadlineLabel, daysLeft, type Promotion } from '@/data/promotions'

const LIME = '#A8F000'

export const metadata: Metadata = {
  title: 'Promocje — aktualne oferty specjalne',
  description:
    'Aktualne promocje i programy dla firm: skanery oraz drukarki Zebra z rabatem do 44%, rabat na etykiety i taśmy, a także bezpłatne wymiany głowic drukujących.',
  alternates: { canonical: 'https://www.takma.com.pl/promocje' },
}

/** Kafel promocji na hubie — prowadzi na dedykowany landing /promocje/[slug]. */
function PromotionCard({ promo }: { promo: Promotion }) {
  const left = daysLeft(promo)
  return (
    <Link
      href={`/promocje/${promo.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-gray-950 p-6 transition-transform hover:-translate-y-0.5"
    >
      {promo.cardImage && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={promo.cardImage}
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-0 bottom-0 h-[72%] w-auto object-cover object-right-bottom opacity-70 transition-opacity duration-300 group-hover:opacity-90"
          style={{
            maskImage: 'radial-gradient(125% 105% at 100% 100%, black 45%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(125% 105% at 100% 100%, black 45%, transparent 85%)',
          }}
        />
      )}
      <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full opacity-20 blur-3xl" style={{ background: promo.accent.light }} />
      <div className="relative flex items-center justify-between gap-3 mb-4">
        <span
          className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide"
          style={{ background: promo.accent.base, color: promo.accent.on }}
        >
          {promo.badge}
        </span>
        {left !== null && (
          <span className="text-[11px] font-semibold text-white/60 tabular-nums">
            {deadlineLabel(promo)} · {left} dni
          </span>
        )}
      </div>
      <p className="relative text-white font-bold text-lg leading-snug mb-2">{promo.hubTitle}</p>
      <p className="relative text-sm text-white/60 leading-relaxed mb-5 flex-1">{promo.hubExcerpt}</p>
      <span
        className="relative inline-flex items-center gap-1.5 text-sm font-bold text-white transition-colors group-hover:[color:var(--promo-accent)]"
        style={{ '--promo-accent': promo.accent.light } as React.CSSProperties}
      >
        Zobacz szczegóły <span aria-hidden>→</span>
      </span>
    </Link>
  )
}

export default function PromocjePage() {
  const groups = activePromotionsByBrand()
  const total = groups.reduce((n, g) => n + g.items.length, 0)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#060806] text-white overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-promocje.webp"
          alt=""
          aria-hidden
          className="absolute right-0 top-0 h-full w-auto max-w-[78%] object-cover object-right hidden sm:block"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 35%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-[55%] mix-blend-screen animate-hero-glow hidden sm:block"
          style={{ background: 'radial-gradient(ellipse at 68% 45%, rgba(168,240,0,0.16) 0%, transparent 60%)' }}
        />
        <div className="container-main relative py-16 lg:py-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Promocje</h1>
          <p className="text-gray-300 max-w-xl text-base lg:text-lg">
            Zebrane w jednym miejscu oferty specjalne i programy dla firm. Każda promocja
            obowiązuje w podanym terminie lub do wyczerpania puli urządzeń i materiałów.
          </p>
        </div>
      </section>

      {/* Sekcje producentów */}
      {groups.map((g) => {
        const brand = getManufacturerById(g.brandId)
        return (
          <section key={g.brandId} id={g.brandId} className="container-main py-12 lg:py-16">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-4 mb-8">
              {brand && (
                <Image src={brand.logo} alt={brand.name} width={146} height={42} className="h-[42px] w-auto object-contain" />
              )}
              <span className="text-sm font-semibold text-gray-500">
                {g.items.length}{' '}
                {g.items.length === 1 ? 'aktywna oferta' : g.items.length < 5 ? 'aktywne oferty' : 'aktywnych ofert'}
              </span>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {g.items.map((p) => (
                <PromotionCard key={p.slug} promo={p} />
              ))}
            </div>
          </section>
        )
      })}

      {/* Zapowiedź kolejnych marek / stan pusty */}
      <section className="container-main pb-16 lg:pb-20">
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center">
          <p className="text-gray-700 font-semibold mb-1">
            {total > 0 ? 'Szukasz promocji na sprzęt innej marki?' : 'Obecnie nie prowadzimy promocji'}
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Jesteśmy autoryzowanym partnerem także Honeywell, Datalogic, Brother i Newland.
            Oferty specjalne tych producentów pojawią się na tej stronie, gdy tylko zostaną
            ogłoszone. Po wycenę indywidualną zapraszamy do{' '}
            <Link href="/kontakt" className="underline text-gray-700">kontaktu</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
