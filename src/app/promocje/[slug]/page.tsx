import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import AskAboutProductButton from '@/app/produkt/[slug]/AskAboutProductButton'
import { getManufacturerById } from '@/data/products'
import { ZEBRA_CEE_PROMO } from '@/data/promos'
import {
  PROMOTIONS,
  getPromotion,
  promotionProductGroups,
  isPromotionActive,
  deadlineLabel,
  daysLeft,
} from '@/data/promotions'

const SITE = 'https://www.takma.com.pl'

export function generateStaticParams() {
  return PROMOTIONS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const promo = getPromotion(slug)
  if (!promo) return {}
  const active = isPromotionActive(promo)
  return {
    title: promo.seoTitle,
    description: promo.seoDescription,
    alternates: { canonical: `${SITE}/promocje/${promo.slug}` },
    // wygasłe promocje zostają pod swoim URL-em, ale nie chcemy ich już w wynikach
    robots: active ? undefined : { index: false, follow: true },
  }
}

export default async function PromotionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const promo = getPromotion(slug)
  if (!promo) notFound()

  const brand = getManufacturerById(promo.brandId)
  const active = isPromotionActive(promo)
  const left = daysLeft(promo)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#060806] text-white overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-promocje.webp"
          alt=""
          aria-hidden
          className="absolute right-0 top-0 h-full w-auto max-w-[70%] object-cover object-right hidden lg:block"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
          }}
        />
        <div className="container-main relative py-12 lg:py-16">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/promocje" className="hover:text-white transition-colors">Promocje</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-300">{brand?.name}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-5">
            <span
              className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide"
              style={{ background: promo.accent.base, color: promo.accent.on }}
            >
              {promo.badge}
            </span>
            {active && left !== null && (
              <span className="text-sm font-medium text-gray-400">
                {deadlineLabel(promo)} <span className="text-gray-600">·</span> zostało {left} dni
              </span>
            )}
            {!active && <span className="text-sm font-medium text-gray-400">oferta zakończona</span>}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 max-w-3xl">
            {promo.title}
          </h1>
          <p className="text-gray-300 max-w-2xl text-base lg:text-lg leading-relaxed">{promo.lead}</p>

          {brand && (
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5 max-w-2xl">
              <Image src={brand.logo} alt={brand.name} width={110} height={32} className="h-8 w-auto object-contain brightness-0 invert opacity-80" />
              <span className="text-xs text-gray-500">Autoryzowany partner {brand.name}</span>
            </div>
          )}
        </div>
      </section>

      {/* Oferta zakończona */}
      {!active && (
        <section className="container-main pt-10">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-6 py-5">
            <p className="font-semibold text-amber-900 mb-1">Ta promocja już się zakończyła</p>
            <p className="text-sm text-amber-800">
              Aktualne oferty zebraliśmy na stronie{' '}
              <Link href="/promocje" className="underline font-medium">Promocje</Link>. Chętnie
              przygotujemy również wycenę indywidualną — wystarczy się z nami{' '}
              <Link href="/kontakt" className="underline font-medium">skontaktować</Link>.
            </p>
          </div>
        </section>
      )}

      {/* Produkty w promocji */}
      {promo.products && promo.products.length > 0 && (
        <section className="container-main py-12 lg:py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modele objęte promocją</h2>
          {promotionProductGroups(promo).map((group) => (
          <div key={group.label ?? 'all'} className="mb-8 last:mb-0">
            {group.label && (
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                {group.label}
              </h3>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
            {group.items.map((prod) => {
              const price = ZEBRA_CEE_PROMO.bySlug[prod.slug]
              // Drukarki są na zdjęciach poziome — przy tej samej szerokości co skaner
              // wychodziłyby dwa razy mniejsze, więc dostają szerszy kadr.
              const wide = /drukark/i.test(prod.name)
              return (
                <Link
                  key={prod.slug}
                  href={`/produkt/${prod.slug}`}
                  className="group relative block transition-transform hover:-translate-y-0.5"
                >
                  {/* Ciemny kafel jest węższy od komórki siatki, żeby urządzenie mogło
                      wyjść poza jego obrys po prawej — jak w kaflach operatorów.
                      Szerokość podana wprost (a nie odstępem), bo tylko wtedy da się
                      ją świadomie zmniejszać o konkretny procent. */}
                  <div
                    className={`relative overflow-hidden rounded-2xl bg-gray-950 p-5 pr-10 min-h-[190px] ${
                      wide ? 'w-[86%] sm:w-[60%]' : 'w-[88%] sm:w-[66%]'
                    }`}
                  >
                    <div aria-hidden className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-20 blur-2xl" style={{ background: promo.accent.light }} />
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wide mb-4" style={{ background: promo.accent.base, color: promo.accent.on }}>
                      −{prod.pct}%
                    </span>
                    <p className="text-white font-bold leading-snug mb-3 text-lg sm:text-xl">{prod.name}</p>
                    {price && active && (
                      <>
                        <p className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: promo.accent.light }}>
                          {price.promoNetto.toLocaleString('pl-PL')} zł{' '}
                          <span className="text-base sm:text-lg font-semibold text-white/60">netto</span>
                        </p>
                        <p className="text-base sm:text-lg text-white/45 line-through mb-4">
                          {price.regularNetto.toLocaleString('pl-PL')} zł
                        </p>
                      </>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-base sm:text-lg font-semibold text-white transition-colors group-hover:[color:var(--promo-accent)]" style={{ '--promo-accent': promo.accent.light } as React.CSSProperties}>
                      Zobacz produkt <span aria-hidden>→</span>
                    </span>
                  </div>

                  {prod.image && (
                    <Image
                      src={prod.image}
                      alt=""
                      aria-hidden
                      width={400}
                      height={800}
                      className={`pointer-events-none absolute right-0 h-auto object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-105 ${
                        wide
                          ? 'w-36 sm:w-60 max-h-[86%] -bottom-2 -translate-x-[6%] sm:-translate-x-[25%]'
                          // skaner jest wąski i wysoki — wsuwamy go 30% szerokości w głąb kafla
                          : 'w-24 sm:w-40 max-h-[88%] bottom-3 -translate-x-[20%] sm:-translate-x-[60%]'
                      }`}
                    />
                  )}
                </Link>
              )
            })}
            </div>
          </div>
          ))}
        </section>
      )}

      {/* Karty wyjaśniające */}
      {promo.cards && promo.cards.length > 0 && (
        <section className={promo.products ? 'bg-gray-50' : ''}>
          <div className="container-main py-12 lg:py-16">
            <div className="grid gap-6 lg:grid-cols-3">
              {promo.cards.map((c) => (
                <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="font-bold text-gray-900 mb-2">{c.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Kroki + CTA */}
      <section className="container-main pb-14 lg:pb-20">
        <div className="rounded-2xl bg-gray-950 p-6 lg:p-8 relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-25 blur-3xl" style={{ background: promo.accent.light }} />
          <div className="relative lg:flex lg:items-center lg:gap-10">
            <div className="lg:flex-1">
              {promo.steps && promo.steps.length > 0 ? (
                <>
                  <p className="text-white font-bold text-lg mb-4">{promo.stepsHeading || 'Jak skorzystać'}</p>
                  <ol className="space-y-2.5 text-sm text-white/75 mb-6 lg:mb-0">
                    {promo.steps.map((step, i) => (
                      <li key={i} className="leading-relaxed">
                        <b className="text-white">{i + 1}.</b> {step}
                      </li>
                    ))}
                  </ol>
                </>
              ) : (
                <p className="text-white font-bold text-lg mb-6 lg:mb-0">
                  Masz pytania o tę ofertę? Chętnie pomożemy w doborze sprzętu i materiałów.
                </p>
              )}
            </div>
            <div className="lg:w-[19rem] lg:shrink-0">
              <AskAboutProductButton
                productName={promo.cta.productName}
                productSlug={promo.cta.productSlug}
                promo
                arrow
                label={promo.cta.label}
                initialMessage={promo.cta.initialMessage}
                buttonClassName="w-full inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-[15px] font-bold whitespace-nowrap transition-all duration-200 hover:brightness-95 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950"
                buttonStyle={{ background: promo.accent.base, color: promo.accent.on }}
              />
              {promo.cta.note && (
                <p className="mt-3 text-[12px] leading-relaxed text-white/50">{promo.cta.note}</p>
              )}
            </div>
          </div>
        </div>

        {promo.links && promo.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {promo.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:border-slate-300 hover:bg-gray-50 transition"
              >
                {l.title}
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
