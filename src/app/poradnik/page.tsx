import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/Icons'
import { guides } from '@/data/guides'
import GuidesGrid from './GuidesGrid'

export const metadata: Metadata = {
  title: 'Poradniki — drukarki etykiet, skanery, terminale | TAKMA',
  description: 'Eksperckie poradniki, porównania i przewodniki po drukarkach etykiet, skanerach kodów kreskowych i terminalach mobilnych. Dane z ponad 500 wdrożeń.',
  openGraph: {
    title: 'Poradniki — drukarki etykiet, skanery, terminale | TAKMA',
    description: 'Eksperckie poradniki, porównania i przewodniki po drukarkach etykiet, skanerach kodów kreskowych i terminalach mobilnych.',
    url: 'https://www.takma.com.pl/poradnik',
  },
  alternates: { canonical: 'https://www.takma.com.pl/poradnik' },
}

export default function PoradnikiPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://www.takma.com.pl' },
      { '@type': 'ListItem', position: 2, name: 'Poradniki', item: 'https://www.takma.com.pl/poradnik' },
    ],
  }

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Poradniki TAKMA',
    description: 'Eksperckie poradniki o drukarkach etykiet, skanerach i terminalach mobilnych.',
    url: 'https://www.takma.com.pl/poradnik',
    numberOfItems: guides.length,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: guides.map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://www.takma.com.pl/poradnik/${g.slug}`,
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
            Porównania modeli, kalkulacje kosztów i wskazówki doboru drukarek etykiet, terminali mobilnych i skanerów kodów.
          </p>
        </header>

        {/* Guide Grid with Filters */}
        <div className="container-main py-10">
          <GuidesGrid guides={guides} />
        </div>
      </div>
    </>
  )
}
