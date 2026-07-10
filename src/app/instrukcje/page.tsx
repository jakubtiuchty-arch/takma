import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRightIcon } from '@/components/ui/Icons'
import { manuals } from '@/data/manuals'
import InstrukcjeGrid from './InstrukcjeGrid'

export const metadata: Metadata = {
  title: 'Instrukcje obsługi PDF — terminale, skanery, drukarki etykiet',
  description:
    'Darmowe instrukcje obsługi PDF do urządzeń ze sklepu TAKMA: terminale mobilne, skanery kodów, drukarki etykiet. Zebra, Honeywell, Datalogic, Newland — szybki start, konfiguracja, obsługa po polsku.',
  openGraph: {
      images: ['/images/takma-og.png'],
    title: 'Instrukcje obsługi PDF — urządzenia auto-ID | TAKMA',
    description:
      'Darmowe instrukcje obsługi PDF: terminale, skanery i drukarki etykiet Zebra, Honeywell, Datalogic, Newland. Pobierz lub przeglądaj online.',
    url: 'https://www.takma.com.pl/instrukcje',
  },
  alternates: { canonical: 'https://www.takma.com.pl/instrukcje' },
}

export default function InstrukcjePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://www.takma.com.pl' },
      { '@type': 'ListItem', position: 2, name: 'Instrukcje', item: 'https://www.takma.com.pl/instrukcje' },
    ],
  }

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Instrukcje obsługi TAKMA',
    description:
      'Instrukcje obsługi PDF do terminali mobilnych, skanerów kodów i drukarek etykiet.',
    url: 'https://www.takma.com.pl/instrukcje',
    numberOfItems: manuals.length,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: manuals.map((m, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://www.takma.com.pl/instrukcje/${m.slug}`,
        name: `${m.name} — instrukcja obsługi`,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />

      <div className="bg-white">
        {/* Hero z grafiką (Higgsfield) */}
        <section className="relative overflow-hidden bg-[#0b1220]">
          <Image
            src="/images/instrukcje-hero.webp"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220]/90 to-[#0b1220]/25" />

          <div className="relative container-main py-10 md:py-14">
            {/* Breadcrumb */}
            <nav className="pb-4" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-sm text-slate-300">
                <li><Link href="/" className="hover:text-white">Strona główna</Link></li>
                <li><ChevronRightIcon size={14} /></li>
                <li className="font-medium text-white">Instrukcje</li>
              </ol>
            </nav>

            <h1 className="max-w-2xl text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Instrukcje obsługi urządzeń — PDF do pobrania
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-200 md:text-lg">
              Instrukcje obsługi, szybkiego startu i konfiguracji do terminali mobilnych,
              skanerów kodów i drukarek etykiet ze sklepu TAKMA. Przeglądaj online lub
              pobieraj PDF — Zebra, Honeywell, Datalogic, Newland, M3 Mobile.
            </p>
          </div>
        </section>

        {/* Lista */}
        <div className="container-main py-10 md:py-12">
          <InstrukcjeGrid />
        </div>
      </div>
    </>
  )
}
