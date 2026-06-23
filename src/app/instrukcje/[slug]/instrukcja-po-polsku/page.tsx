import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRightIcon, DownloadIcon } from '@/components/ui/Icons'
import { manuals, getManualBySlug, categoryLabel } from '@/data/manuals'
import { getProductBySlug } from '@/data/products'
import { ManualBlocks } from '@/app/instrukcje/_components/ManualBlocks'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return manuals.filter((m) => m.polishManual).map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const manual = getManualBySlug(slug)
  if (!manual || !manual.polishManual) return { title: 'Instrukcja nie znaleziona' }

  const url = `https://www.takma.com.pl/instrukcje/${manual.slug}/instrukcja-po-polsku`
  const title = `${manual.name} — instrukcja obsługi po polsku`
  const description = `Skrócona instrukcja obsługi ${manual.name} po polsku: konfiguracja, obsługa, częste problemy. ${manual.description}`
  return {
    title,
    description,
    keywords: manual.keywords,
    openGraph: { title: `${title} | TAKMA`, description, url },
    alternates: { canonical: url },
  }
}

export default async function PolishManualPage({ params }: PageProps) {
  const { slug } = await params
  const manual = getManualBySlug(slug)
  if (!manual || !manual.polishManual) notFound()

  const pm = manual.polishManual
  const url = `https://www.takma.com.pl/instrukcje/${manual.slug}/instrukcja-po-polsku`
  const product = manual.productSlug ? getProductBySlug(manual.productSlug) : undefined
  const heading = `${manual.name} — instrukcja obsługi po polsku`

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://www.takma.com.pl' },
      { '@type': 'ListItem', position: 2, name: 'Instrukcje', item: 'https://www.takma.com.pl/instrukcje' },
      { '@type': 'ListItem', position: 3, name: manual.name, item: `https://www.takma.com.pl/instrukcje/${manual.slug}` },
      { '@type': 'ListItem', position: 4, name: 'Instrukcja po polsku', item: url },
    ],
  }

  const techArticleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: heading,
    description: manual.description,
    url,
    inLanguage: 'pl-PL',
    isAccessibleForFree: true,
    author: { '@type': 'Organization', name: manual.brand },
    publisher: { '@type': 'Organization', name: 'TAKMA', url: 'https://www.takma.com.pl' },
    dateModified: pm.updatedAt,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleJsonLd) }} />

      <div className="bg-white">
        {/* Breadcrumb */}
        <nav className="container-main pt-4 pb-2" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
            <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
            <li><ChevronRightIcon size={14} /></li>
            <li><Link href="/instrukcje" className="hover:text-blue-600">Instrukcje</Link></li>
            <li><ChevronRightIcon size={14} /></li>
            <li><Link href={`/instrukcje/${manual.slug}`} className="hover:text-blue-600">{manual.name}</Link></li>
            <li><ChevronRightIcon size={14} /></li>
            <li className="text-slate-700 font-medium">Instrukcja po polsku</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="container-main pt-6 pb-8">
          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
            {categoryLabel(manual.category)} · {manual.brand}
          </span>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">{heading}</h1>
        </header>

        <div className="container-main pb-16 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <article>
              {pm.intro && <p className="text-lg text-slate-600 mb-6">{pm.intro}</p>}

              {/* Pobranie brandowanego PDF (dane TAKMA) */}
              <a
                href={`/api/instrukcja-pdf/${manual.slug}`}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                <DownloadIcon size={16} /> Pobierz skróconą instrukcję (PDF)
              </a>

              {/* Spis treści */}
              {pm.sections.length > 1 && (
                <nav className="my-8 rounded-xl border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Spis treści</p>
                  <ol className="columns-1 gap-x-8 text-sm sm:columns-2">
                    {pm.sections.map((s, i) => (
                      <li key={i} className="mb-1.5 break-inside-avoid">
                        <a href={`#sekcja-${i}`} className="text-blue-600 hover:underline">{i + 1}. {s.title}</a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              <div className="space-y-8">
                {pm.sections.map((s, i) => (
                  <section key={i} id={`sekcja-${i}`}>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">{i + 1}. {s.title}</h2>
                    <ManualBlocks blocks={s.blocks} />
                  </section>
                ))}
              </div>

              <p className="text-xs text-slate-400 mt-8">
                Aktualizacja: {pm.updatedAt}. Instrukcja ma charakter informacyjny.
              </p>

              <div className="mt-10 pt-6 border-t border-slate-100">
                <Link href={`/instrukcje/${manual.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
                  ← Wszystkie dokumenty: {manual.name}
                </Link>
              </div>
            </article>
          </div>

          {/* Prawa: produkt + CTA */}
          <aside className="lg:col-span-1 space-y-6">
            {product && (
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900">Kup {manual.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{product.shortDescription}</p>
                <Link href={`/produkt/${product.slug}`} className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-blue-600 hover:underline">
                  Zobacz w sklepie <ChevronRightIcon size={16} />
                </Link>
              </div>
            )}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">Masz problem z {manual.name}?</h3>
              <p className="text-sm text-slate-600 mt-1">
                Nie skanuje, nie włącza się albo zgłasza błąd? Zdiagnozujemy usterkę, naprawimy
                urządzenie i pomożemy w konfiguracji oraz wdrożeniu floty.
              </p>
              <Link href={`/serwis/${manual.brand.toLowerCase()}`} className="inline-flex items-center justify-center w-full mt-4 px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
                Zgłoś do serwisu
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
