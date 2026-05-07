import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { RmaProcessSteps } from '../_components/RmaProcessSteps'
import { PricingTable } from '../_components/PricingTable'
import { ServiceManagerContact } from '../_components/ServiceManagerContact'
import RepairForm from '../_components/RepairForm'
import { getBrandBySlug, getAllBrandSlugs, type ServiceBrand } from '../_data/brands'

type Props = { params: { brand: string } }

export function generateStaticParams() {
  return getAllBrandSlugs().map(brand => ({ brand }))
}

export function generateMetadata({ params }: Props): Metadata {
  const brand = getBrandBySlug(params.brand)
  if (!brand) return {}
  return {
    title: { absolute: brand.metaTitle },
    description: brand.metaDescription,
    alternates: { canonical: `https://www.takma.com.pl/serwis/${brand.slug}` },
    openGraph: {
      type: 'website',
      locale: 'pl_PL',
      url: `https://www.takma.com.pl/serwis/${brand.slug}`,
      title: brand.heroTitle,
      description: brand.heroDescription,
    },
  }
}

export default function BrandServicePage({ params }: Props) {
  const brand = getBrandBySlug(params.brand)
  if (!brand) notFound()

  const brandServiceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.takma.com.pl/#organization',
        name: 'TAKMA',
        url: 'https://www.takma.com.pl',
        telephone: '+48-601-619-898',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ul. Poświęcka 1a',
          postalCode: '51-128',
          addressLocality: 'Wrocław',
          addressCountry: 'PL',
        },
        areaServed: { '@type': 'Country', name: 'Polska' },
        priceRange: '$$',
        openingHoursSpecification: [{
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:30',
          closes: '15:30',
        }],
      },
      {
        '@type': 'Service',
        '@id': `https://www.takma.com.pl/serwis/${brand.slug}#service`,
        serviceType: `Serwis urządzeń ${brand.name}`,
        name: brand.heroTitle,
        description: brand.heroDescription,
        provider: { '@id': 'https://www.takma.com.pl/#organization' },
        areaServed: { '@type': 'Country', name: 'Polska' },
        brand: { '@type': 'Brand', name: brand.name },
      },
      {
        '@type': 'FAQPage',
        mainEntity: brand.faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://www.takma.com.pl' },
          { '@type': 'ListItem', position: 2, name: 'Serwis', item: 'https://www.takma.com.pl/serwis' },
          { '@type': 'ListItem', position: 3, name: `Serwis ${brand.name}`, item: `https://www.takma.com.pl/serwis/${brand.slug}` },
        ],
      },
    ],
  }

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brandServiceSchema) }} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <li><Link href="/" className="hover:text-gray-900 transition-colors">Strona główna</Link></li>
            <li><span className="mx-1">/</span></li>
            <li><Link href="/serwis" className="hover:text-gray-900 transition-colors">Serwis</Link></li>
            <li><span className="mx-1">/</span></li>
            <li className="font-medium text-gray-900">Serwis {brand.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      {brand.heroImage ? (
        // Dark hero z obrazem tła
        <section className="relative overflow-hidden border-b border-gray-800" style={{ backgroundColor: '#0B1520' }}>
          {/* Obraz — contain (brak obcinania), right (po prawej) */}
          <div
            className="absolute inset-0 bg-contain bg-right bg-no-repeat"
            style={{ backgroundImage: `url(${brand.heroImage})` }}
            aria-hidden="true"
          />
          {/* Overlay zaciemnia lewą stronę dla tekstu, ale szybciej odsłania obraz po prawej */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, #0B1520 0%, #0B1520 40%, rgba(11,21,32,0.9) 48%, rgba(11,21,32,0.4) 56%, rgba(11,21,32,0) 62%)' }}
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14">
            <div className="max-w-xl">
              <div className="w-20 h-10 sm:w-24 sm:h-12 relative mb-3 opacity-90">
                <Image src={brand.logoSrc} alt={brand.logoAlt} fill className="object-contain object-left brightness-0 invert" sizes="96px" priority />
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {brand.heroTitle}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                {brand.heroDescription}
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
                <a
                  href="#formularz-naprawy"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-gray-900 text-sm font-bold transition-all"
                >
                  Zgłoś naprawę {brand.name}
                </a>
                <a
                  href="tel:+48601619898"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 hover:border-white/40 text-white text-sm font-bold transition-all backdrop-blur-sm"
                >
                  +48 601 619 898
                </a>
              </div>

              {/* Trust metrics — kompaktowe */}
              <div className="mt-5 inline-flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs text-gray-300">
                  <span className="text-lime-400 font-bold">48h</span> diagnostyka
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs text-gray-300">
                  <span className="text-lime-400 font-bold">3–6 mies.</span> gwarancji
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs text-gray-300">
                  <span className="text-lime-400 font-bold">20+ lat</span> w branży
                </span>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Fallback: light hero (dla marek bez heroImage)
        <section className="bg-gradient-to-br from-gray-50 to-white py-14 sm:py-20 border-b border-gray-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <div className="shrink-0 w-32 h-20 sm:w-40 sm:h-24 relative opacity-80">
                <Image src={brand.logoSrc} alt={brand.logoAlt} fill className="object-contain" sizes="160px" priority />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                  {brand.heroTitle}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                  {brand.heroDescription}
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                  <a
                    href="#formularz-naprawy"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-gray-900 font-bold transition-all"
                  >
                    Zgłoś naprawę {brand.name}
                  </a>
                  <a
                    href="tel:+48601619898"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-500 text-gray-900 font-bold transition-all"
                  >
                    +48 601 619 898
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Lead / intro */}
      <section className="bg-white py-12 sm:py-16 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {brand.heroLead}
          </p>
        </div>
      </section>

      {/* Sekcja edukacyjna (opcjonalna) */}
      {brand.educationalSection && (
        <section className="bg-white py-12 sm:py-16 border-b border-gray-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-6">
              {brand.educationalSection.heading}
            </h2>
            <div className="space-y-4">
              {brand.educationalSection.paragraphs.map((p, i) => (
                <p key={i} className="text-base text-gray-700 leading-relaxed">{p}</p>
              ))}
            </div>
            {brand.educationalSection.bullets && brand.educationalSection.bullets.length > 0 && (
              <ul className="mt-6 space-y-3">
                {brand.educationalSection.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-500" aria-hidden="true" />
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      <strong className="text-gray-900">{b.title}</strong> — {b.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* Serie urządzeń */}
      <section className="bg-gray-50 py-14 sm:py-20 border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Które urządzenia {brand.name} serwisujemy?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {brand.seriesList.map(s => (
              <div key={s.series} className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6">
                <h3 className="text-lg font-bold text-gray-900">{s.series}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.description}</p>
                <p className="mt-3 text-xs text-gray-500 font-mono">
                  Typowe modele: <span className="text-gray-700">{s.typicalDevices}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Najczęstsze usterki */}
      <section className="bg-white py-14 sm:py-20 border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-3">
            Najczęstsze usterki {brand.name} — i jak je naprawiamy
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Poniżej realne przypadki z naszego serwisu. Jeśli masz podobny problem — zgłoś urządzenie, darmowa diagnostyka w 48h.
          </p>
          <div className="space-y-4">
            {brand.commonIssues.map((issue, i) => (
              <div key={i} className="flex gap-4 p-5 sm:p-6 rounded-2xl border border-gray-200 bg-gray-50">
                <div className="shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{issue.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{issue.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cennik — wariant dopasowany do kategorii marki (override w brand.pricingVariant) */}
      <PricingTable variant={brand.pricingVariant ?? (brand.category === 'drukarki' ? 'printers' : 'devices')} />

      {/* Proces RMA (reused) */}
      <RmaProcessSteps />

      {/* Contact Manager (reused) */}
      <ServiceManagerContact />

      {/* FAQ per brand */}
      <section className="bg-gray-50 py-14 sm:py-20 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Najczęstsze pytania — serwis {brand.name}
          </h2>
          <div className="space-y-3">
            {brand.faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="cursor-pointer p-5 font-semibold text-gray-900 hover:text-lime-600 transition-colors">
                  {f.q}
                </summary>
                <p className="px-5 pb-5 text-sm text-gray-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell do katalogu */}
      <section className="bg-gradient-to-br from-lime-50 to-white py-12 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Szukasz nowego urządzenia {brand.name}?
          </h2>
          <p className="text-sm text-gray-600 mb-5 max-w-xl mx-auto">
            Zobacz aktualną ofertę sprzętu {brand.name} w sklepie TAKMA — drukarki, terminale, skanery i akcesoria w cenach B2B.
          </p>
          <Link
            href={`/katalog?producent=${brand.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-700 transition-colors"
          >
            Zobacz urządzenia {brand.name} w sklepie
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Other brands cross-link */}
      <OtherBrandsLinks currentSlug={brand.slug} />

      {/* Repair form */}
      <div id="formularz-naprawy">
        <RepairForm />
      </div>
    </main>
  )
}

function OtherBrandsLinks({ currentSlug }: { currentSlug: string }) {
  const otherBrands: ServiceBrand[] = getAllBrandSlugs()
    .filter(s => s !== currentSlug)
    .map(slug => getBrandBySlug(slug))
    .filter((b): b is ServiceBrand => Boolean(b))

  return (
    <section className="bg-white py-14 sm:py-20 border-b border-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-3">
          Serwisujemy także inne marki
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Pełna lista obsługiwanych producentów urządzeń AutoID — drukarki etykiet, terminale mobilne, skanery kodów.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {otherBrands.map(b => (
            <Link
              key={b.slug}
              href={`/serwis/${b.slug}`}
              className="block p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white hover:border-lime-500 hover:shadow-md transition-all text-center"
            >
              <span className="font-semibold text-gray-900">Serwis {b.name}</span>
              <span className="block mt-1 text-[11px] text-gray-500 leading-tight">{b.shortDesc}</span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/serwis"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-700 transition-colors"
          >
            ← Wszystkie usługi serwisu TAKMA
          </Link>
        </div>
      </div>
    </section>
  )
}
