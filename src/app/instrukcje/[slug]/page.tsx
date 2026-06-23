import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRightIcon } from '@/components/ui/Icons'
import {
  manuals,
  getManualBySlug,
  docTypeMeta,
  docSlug,
  docBanner,
  PL_MANUAL_SLUG,
  PL_MANUAL_BANNER,
} from '@/data/manuals'
import { getProductBySlug } from '@/data/products'
import AttentionGlow from '@/app/instrukcje/_components/AttentionGlow'

interface PageProps {
  params: Promise<{ slug: string }>
}

/** Akcent kolorystyczny per marka (badge + delikatna poświata w hero). */
const BRAND_ACCENT: Record<string, { badge: string; glow: string }> = {
  Honeywell: { badge: 'bg-red-50 text-red-700', glow: 'rgba(220,38,38,0.16)' },
  Datalogic: { badge: 'bg-red-50 text-red-700', glow: 'rgba(220,38,38,0.16)' },
  Zebra: { badge: 'bg-lime-50 text-lime-700', glow: 'rgba(132,204,22,0.18)' },
}
const DEFAULT_ACCENT = { badge: 'bg-blue-50 text-blue-700', glow: 'rgba(37,99,235,0.14)' }

export function generateStaticParams() {
  return manuals.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const manual = getManualBySlug(slug)
  if (!manual) return { title: 'Instrukcja nie znaleziona' }

  const url = `https://www.takma.com.pl/instrukcje/${manual.slug}`
  const title = `Instrukcja obsługi ${manual.name} — pobierz PDF`
  const description = `Darmowa instrukcja obsługi ${manual.name} (${manual.model}). ${manual.description}`

  return {
    title,
    description,
    keywords: manual.keywords,
    openGraph: { title: `${title} | TAKMA`, description, url },
    alternates: { canonical: url },
  }
}

export default async function ManualHubPage({ params }: PageProps) {
  const { slug } = await params
  const manual = getManualBySlug(slug)
  if (!manual) notFound()

  const url = `https://www.takma.com.pl/instrukcje/${manual.slug}`
  const product = manual.productSlug ? getProductBySlug(manual.productSlug) : undefined
  const accent = BRAND_ACCENT[manual.brand] ?? DEFAULT_ACCENT

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://www.takma.com.pl' },
      { '@type': 'ListItem', position: 2, name: 'Instrukcje', item: 'https://www.takma.com.pl/instrukcje' },
      { '@type': 'ListItem', position: 3, name: manual.name, item: url },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="bg-white">
        {/* Hero ze stonowaną grafiką w tle */}
        <section className="relative overflow-hidden border-b border-slate-100">
          <Image
            src="/images/instrukcje-hero.webp"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right opacity-30"
          />
          {/* białe wybielenie po lewej — tekst czytelny, grafika widoczna po prawej */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-white/20" />
          {/* stonowana poświata w barwie marki (Honeywell = czerwień) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(55% 130% at 90% 8%, ${accent.glow}, transparent 70%)` }}
          />

          <div className="relative">
            <nav className="container-main pt-8 pb-3" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-sm text-slate-500">
                <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
                <li><ChevronRightIcon size={14} /></li>
                <li><Link href="/instrukcje" className="hover:text-blue-600">Instrukcje</Link></li>
                <li><ChevronRightIcon size={14} /></li>
                <li className="text-slate-700 font-medium">{manual.name}</li>
              </ol>
            </nav>

            <header className="container-main pt-2 pb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                {manual.name} — instrukcje i dokumentacja
              </h1>
            </header>
          </div>
        </section>

        <div className="container-main pt-12 pb-16 grid lg:grid-cols-3 gap-8">
          {/* Lewa: lista dokumentów (każdy = osobna podstrona) */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Dostępne dokumenty</h2>
            <div className="space-y-3">
              {/* Skrócona instrukcja PL (jeśli jest) — wyróżniona */}
              {manual.polishManual && (
                <Link
                  href={`/instrukcje/${manual.slug}/${PL_MANUAL_SLUG}`}
                  className="group flex items-stretch overflow-hidden rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="relative w-24 sm:w-36 shrink-0">
                    <Image src={PL_MANUAL_BANNER} alt="" fill sizes="160px" className="object-cover" />
                  </div>
                  <div className="flex flex-1 items-center gap-3 p-4 min-w-0">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <strong className="text-slate-900">Skrócona instrukcja po polsku</strong>
                        <span className="text-[11px] font-medium uppercase text-rose-600">PL</span>
                      </div>
                      <p className="text-sm text-slate-600 mt-0.5">
                        Najważniejsze informacje po polsku — konfiguracja, obsługa, częste problemy
                      </p>
                    </div>
                    <ChevronRightIcon size={18} className="text-slate-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              )}

              {/* Dokumenty PDF — otwierają się od razu (inline) w nowej karcie */}
              {manual.documents.map((doc, i) => (
                <a
                  key={i}
                  href={`/instrukcje/${manual.slug}/${docSlug(doc.type)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-stretch overflow-hidden rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="relative w-24 sm:w-36 shrink-0">
                    <Image src={docBanner[doc.type]} alt="" fill sizes="160px" className="object-cover" />
                  </div>
                  <div className="flex flex-1 items-center gap-3 p-4 min-w-0">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <strong className="text-slate-900">{docTypeMeta[doc.type].label}</strong>
                        <span className="text-[11px] font-medium uppercase text-slate-400">{doc.lang}</span>
                        <span className="text-[11px] font-medium uppercase text-slate-400">· PDF</span>
                      </div>
                      <p className="text-sm text-slate-600 mt-0.5">{doc.title}</p>
                    </div>
                    <ChevronRightIcon size={18} className="text-slate-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Prawa: produkt + CTA */}
          <aside className="lg:col-span-1 space-y-6">
            {product && (
              <AttentionGlow>
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-slate-900">Kup {manual.name}</h3>
                  <p className="text-sm text-slate-600 mt-1">{product.shortDescription}</p>
                  <Link
                    href={`/produkt/${product.slug}`}
                    className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-blue-600 hover:underline"
                  >
                    Zobacz w sklepie <ChevronRightIcon size={16} />
                  </Link>
                </div>
              </AttentionGlow>
            )}

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">Masz problem z {manual.name}?</h3>
              <p className="text-sm text-slate-600 mt-1">
                Nie skanuje, nie włącza się albo zgłasza błąd? Zdiagnozujemy usterkę, naprawimy
                urządzenie i pomożemy w konfiguracji oraz wdrożeniu floty.
              </p>
              <Link
                href={`/serwis/${manual.brand.toLowerCase()}`}
                className="inline-flex items-center justify-center w-full mt-4 px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Zgłoś do serwisu
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
