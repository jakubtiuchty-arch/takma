import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'TAKMA w mediach — artykuly i publikacje prasowe',
  description:
    'Publikacje i artykuly eksperckie TAKMA w mediach branzowych: trans.info, logistyka.net.pl i inne. Tematyka: TCO sprzetu AutoID, terminale mobilne, drukarki etykiet w logistyce.',
  alternates: {
    canonical: '/prasa',
  },
}

interface PressItem {
  title: string
  outlet: string
  outletUrl: string
  /** DR portalu (Domain Rating) */
  dr?: number
  date: string
  url?: string
  type: 'article' | 'mention' | 'interview'
  description: string
  topics: string[]
}

const pressItems: PressItem[] = [
  {
    title: 'Prawdziwy koszt sprzetu AutoID w logistyce — cena zakupu to dopiero poczatek',
    outlet: 'trans.info',
    outletUrl: 'https://trans.info/pl',
    dr: 71,
    date: '2026-04',
    type: 'article',
    description:
      'Artykul ekspercki o TCO (Total Cost of Ownership) terminali mobilnych i drukarek etykiet w logistyce. Porownanie Zebra TC22 vs MC3400, analiza kosztow glowic drukujacych, rola serwisu w obnizaniu TCO floty urzadzen.',
    topics: ['TCO', 'terminale mobilne', 'drukarki etykiet', 'Zebra', 'serwis'],
  },
  // Kolejne artykuly dodawac tutaj w formacie:
  // {
  //   title: 'Tytul artykulu',
  //   outlet: 'Nazwa portalu',
  //   outletUrl: 'https://...',
  //   dr: 50,
  //   date: '2026-05',
  //   url: 'https://pelny-link-do-artykulu',
  //   type: 'article',
  //   description: 'Krotki opis artykulu...',
  //   topics: ['temat1', 'temat2'],
  // },
]

const typeLabels: Record<PressItem['type'], { label: string; color: string }> = {
  article: { label: 'Artykul ekspercki', color: 'bg-blue-100 text-blue-700' },
  mention: { label: 'Wzmianka', color: 'bg-gray-100 text-gray-700' },
  interview: { label: 'Wywiad', color: 'bg-purple-100 text-purple-700' },
}

export default function PressPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-600 transition-colors">
              Strona glowna
            </Link>
            <ChevronRightIcon size={14} />
            <span className="text-gray-700 font-medium">TAKMA w mediach</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            TAKMA w mediach
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Publikacje eksperckie, artykuly branzowe i wzmianki prasowe. Dzielimy sie wiedza
            o sprzecie AutoID w logistyce, produkcji i handlu.
          </p>
        </div>

        {/* Press items */}
        <div className="space-y-6">
          {pressItems.map((item, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl border border-gray-200 p-5 sm:p-7 hover:border-gray-300 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${typeLabels[item.type].color}`}
                >
                  {typeLabels[item.type].label}
                </span>
                <span className="text-xs text-gray-400">{item.date}</span>
                <span className="text-xs text-gray-300">|</span>
                <a
                  href={item.outletUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.outlet}
                  {item.dr && (
                    <span className="ml-1 text-gray-400 font-normal">(DR {item.dr})</span>
                  )}
                </a>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-snug">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-600 transition-colors"
                  >
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h2>

              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {item.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs text-gray-500 bg-gray-100 rounded-md px-2 py-0.5"
                  >
                    {topic}
                  </span>
                ))}
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Czytaj artykul &rarr;
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 bg-white rounded-xl border border-gray-200 p-6 sm:p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Kontakt dla mediow
          </h2>
          <p className="text-sm text-gray-600 mb-4 max-w-lg mx-auto">
            Chcesz porozmawiaz o trendach w AutoID, zapytac o komentarz ekspercki lub
            umowic wywiad? Skontaktuj sie z nami.
          </p>
          <a
            href="mailto:takma@takma.com.pl?subject=Kontakt%20prasowy"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors"
          >
            takma@takma.com.pl
          </a>
        </div>
      </div>
    </main>
  )
}
