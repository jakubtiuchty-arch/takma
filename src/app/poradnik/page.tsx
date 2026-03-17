import { Metadata } from 'next'
import Image from 'next/image'
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
        {/* Hero with background image */}
        <div className="relative overflow-hidden bg-[#0a1628]">
          <Image
            src="/images/poradniki-hero.png"
            alt="Poradniki TAKMA — drukarki etykiet, terminale mobilne, skanery kodów"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="relative z-10">
            {/* Breadcrumbs */}
            <nav className="container-main pt-4 pb-2" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-sm text-gray-300">
                <li><Link href="/" className="hover:text-white transition-colors">Strona główna</Link></li>
                <li><ChevronRightIcon size={14} className="text-gray-500" /></li>
                <li className="text-white font-medium">Poradniki</li>
              </ol>
            </nav>

            {/* Header */}
            <header className="container-main pt-6 pb-10">
              <h1 className="text-3xl lg:text-4xl font-bold text-white">
                Poradniki i przewodniki
              </h1>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl">
                Eksperckie artykuły oparte na ponad 20 latach doświadczenia i 500+ wdrożeniach.
                Porównania modeli, kalkulacje kosztów i wskazówki doboru drukarek etykiet, terminali mobilnych i skanerów kodów.
              </p>
            </header>
          </div>
        </div>

        {/* Guide Grid with Filters */}
        <div className="container-main py-10">
          <GuidesGrid guides={guides} />
        </div>
      </div>
    </>
  )
}
