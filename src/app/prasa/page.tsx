import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'TAKMA w mediach — artykuły i publikacje prasowe',
  description:
    'Publikacje i artykuły eksperckie TAKMA w mediach branżowych: trans.info, logistyka.net.pl i inne. Tematyka: TCO sprzętu AutoID, terminale mobilne, drukarki etykiet w logistyce.',
  alternates: {
    canonical: '/prasa',
  },
}

interface PressItem {
  title: string
  outlet: string
  outletUrl: string
  date: string
  url?: string
  type: 'article' | 'mention' | 'interview'
  description: string
  topics: string[]
}

const pressItems: PressItem[] = [
  {
    title: 'Prawdziwy koszt sprzętu AutoID w logistyce — cena zakupu to dopiero początek',
    outlet: 'trans.info',
    outletUrl: 'https://trans.info/pl',
    date: '2026-04',
    type: 'article',
    description:
      'Artykuł ekspercki o TCO (Total Cost of Ownership) terminali mobilnych i drukarek etykiet w logistyce. Porównanie Zebra TC22 vs MC3400, analiza kosztów głowic drukujących, rola serwisu w obniżaniu TCO floty urządzeń.',
    topics: ['TCO', 'terminale mobilne', 'drukarki etykiet', 'Zebra', 'serwis'],
  },
  {
    title: 'Jak wybrać terminal mobilny do magazynu w 2026 roku — kryteria, które naprawdę mają znaczenie',
    outlet: 'logistyka.net.pl',
    outletUrl: 'https://logistyka.net.pl',
    date: '2026-03',
    url: 'https://logistyka.net.pl/jak-wybrac-terminal-mobilny-do-magazynu-w-2026-roku-kryteria-ktore-naprawde-maja-znaczenie/',
    type: 'article',
    description:
      'Poradnik dotyczący wyboru terminali mobilnych do magazynu. Omawia kluczowe kryteria: klasa ochrony IP, wytrzymałość na upadki, systemy operacyjne, ergonomia i TCO. Perspektywa 25 lat doświadczenia w branży AutoID.',
    topics: ['terminale mobilne', 'magazyn', 'WMS', 'poradnik zakupowy'],
  },
  {
    title: 'Szkolenia: konkret vs. propaganda',
    outlet: 'CRN Polska',
    outletUrl: 'https://crn.pl',
    date: '2018-04',
    url: 'https://crn.pl/artykuly/szkolenia-konkret-vs-propaganda/',
    type: 'mention',
    description:
      'Artykuł o wartości szkoleń w kanale dystrybucyjnym IT — porównanie szkoleń merytorycznych i marketingowych. TAKMA wymieniona wśród firm z branży AutoID uczestniczących w programach szkoleniowych partnerów.',
    topics: ['szkolenia', 'kanał dystrybucyjny', 'IT B2B', 'Zebra'],
  },
  {
    title: 'Rejestrator leśniczego',
    outlet: 'Gazeta Leśna',
    outletUrl: 'https://www.gazetalesna.pl',
    date: '2012-05',
    url: 'https://www.gazetalesna.pl/czytaj/81/Rejestrator-le%C5%9Bniczego',
    type: 'article',
    description:
      'Artykuł autorstwa Tadeusza Tiuchty (TAKMA) o rejestratorach i kolektorach danych używanych przez leśniczych w Lasach Państwowych. Praktyczny poradnik dotyczący urządzeń do pracy w terenie leśnym.',
    topics: ['leśnictwo', 'kolektor danych', 'Lasy Państwowe', 'terminal mobilny'],
  },
  {
    title: 'EKO-LAS 2016: Złote medale MTP',
    outlet: 'DREWNO.PL',
    outletUrl: 'https://www.drewno.pl',
    date: '2016-08',
    url: 'https://www.drewno.pl/artykuly/10610,eko-las-2016-zlote-medale-mtp.html',
    type: 'mention',
    description:
      'Relacja z targów EKO-LAS 2016. TAKMA Tadeusz Tiuchty wymieniona jako zgłaszający produkt nagrodzony Złotym Medalem Międzynarodowych Targów Poznańskich.',
    topics: ['targi EKO-LAS', 'Złoty Medal MTP', 'leśnictwo', 'AutoID'],
  },
  {
    title: 'LAS-EXPO po raz szesnasty w Kielcach',
    outlet: 'Lasy Państwowe (lasy.gov.pl)',
    outletUrl: 'https://www.lasy.gov.pl',
    date: '2013',
    url: 'https://www.lasy.gov.pl/pl/informacje/aktualnosci/las-expo-po-raz-szesnasty-w-kielcach',
    type: 'mention',
    description:
      'Relacja z 16. edycji targów LAS-EXPO i AGRO-TECH w Kielcach. Niemal 70 tys. odwiedzających, prezentacja nowoczesnych technologii w branży leśnej — w tym rozwiązania AutoID.',
    topics: ['targi LAS-EXPO', 'Kielce', 'leśnictwo', 'technologie leśne'],
  },
]

const typeLabels: Record<PressItem['type'], { label: string; color: string }> = {
  article: { label: 'Artykuł ekspercki', color: 'bg-blue-100 text-blue-700' },
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
              Strona główna
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
            Publikacje eksperckie, artykuły branżowe i wzmianki prasowe. Dzielimy się wiedzą
            o sprzęcie AutoID w logistyce, produkcji i handlu.
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
                    Czytaj artykuł &rarr;
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 bg-white rounded-xl border border-gray-200 p-6 sm:p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Kontakt dla mediów
          </h2>
          <p className="text-sm text-gray-600 mb-4 max-w-lg mx-auto">
            Chcesz porozmawiać o trendach w AutoID, zapytać o komentarz ekspercki lub
            umówić wywiad? Skontaktuj się z nami.
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
