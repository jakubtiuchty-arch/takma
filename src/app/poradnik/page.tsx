import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/Icons'
import { guides, guideCategoryLabels } from '@/data/guides'

export const metadata: Metadata = {
  title: 'Poradniki — drukarki etykiet, skanery, terminale | TAKMA',
  description: 'Eksperckie poradniki, porównania i przewodniki po drukarkach etykiet, skanerach kodów kreskowych i terminalach mobilnych. Dane z ponad 500 wdrożeń.',
  openGraph: {
    title: 'Poradniki — drukarki etykiet, skanery, terminale | TAKMA',
    description: 'Eksperckie poradniki, porównania i przewodniki po drukarkach etykiet, skanerach kodów kreskowych i terminalach mobilnych.',
    url: 'https://takma.com.pl/poradnik',
  },
  alternates: { canonical: 'https://takma.com.pl/poradnik' },
}

export default function PoradnikiPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://takma.com.pl' },
      { '@type': 'ListItem', position: 2, name: 'Poradniki', item: 'https://takma.com.pl/poradnik' },
    ],
  }

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Poradniki TAKMA',
    description: 'Eksperckie poradniki o drukarkach etykiet, skanerach i terminalach mobilnych.',
    url: 'https://takma.com.pl/poradnik',
    numberOfItems: guides.length,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: guides.map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://takma.com.pl/poradnik/${g.slug}`,
        name: g.title,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />

      <div className="bg-white">
        {/* Breadcrumbs */}
        <nav className="container-main pt-4 pb-2" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-primary-600 transition-colors">Strona główna</Link></li>
            <li><ChevronRightIcon size={14} className="text-gray-400" /></li>
            <li className="text-gray-900 font-medium">Poradniki</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="container-main pt-6 pb-10 border-b border-gray-100">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Poradniki i przewodniki
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            Eksperckie artykuły oparte na ponad 20 latach doświadczenia i 500+ wdrożeniach.
            Jak wybrać drukarkę etykiet, porównania modeli, kalkulacje kosztów i wskazówki serwisowe.
          </p>
        </header>

        {/* Guide Grid */}
        <div className="container-main py-10">
          {guides.length === 0 ? (
            <p className="text-gray-500 text-center py-16">Artykuły w przygotowaniu — wkrótce tutaj pojawią się eksperckie poradniki.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map(guide => (
                <Link
                  key={guide.slug}
                  href={`/poradnik/${guide.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-card-hover hover:border-primary-200 transition-all duration-300"
                >
                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-100 text-primary-700">
                        {guideCategoryLabels[guide.category]}
                      </span>
                      <span className="text-xs text-gray-400">{guide.readTime}</span>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                      {guide.title}
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {guide.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-sm text-primary-600 font-medium">
                      Czytaj więcej
                      <ChevronRightIcon size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
