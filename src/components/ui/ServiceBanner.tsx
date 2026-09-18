import { ChevronRightIcon } from '@/components/ui/Icons'

/** Zdjęcie domyślne: warsztat z drukarką etykiet. Kategorie z innym sprzętem podmieniają je polem `image`. */
const DOMYSLNE_ZDJECIE = '/images/serwis-zebry-banner.jpg'

/** Adresy i opisy serwisu Zebry per kategoria — używane też przez baner na dole karty produktu. */
export const serviceLinks: Record<string, { label: string; url: string; alt: string; subtitle: string; image?: string }> = {
  'drukarki-etykiet': {
    label: 'Serwis drukarek Zebra',
    url: 'https://www.serwis-zebry.pl/serwis-drukarek-zebra',
    alt: 'Serwis-Zebry.pl — autoryzowany serwis drukarek etykiet Zebra',
    subtitle: 'Wymiana głowic, przeglądy, naprawy gwarancyjne i pogwarancyjne z odbiorem kurierem',
  },
  'drukarki-kart': {
    label: 'Serwis drukarek Zebra',
    url: 'https://www.serwis-zebry.pl/serwis-drukarek-zebra',
    alt: 'Serwis-Zebry.pl — autoryzowany serwis drukarek kart Zebra',
    subtitle: 'Czyszczenie, kalibracja, naprawy gwarancyjne i pogwarancyjne z odbiorem kurierem',
  },
  'drukarki-opasek': {
    label: 'Serwis drukarek Zebra',
    url: 'https://www.serwis-zebry.pl/serwis-drukarek-zebra',
    alt: 'Serwis-Zebry.pl — autoryzowany serwis drukarek opasek Zebra',
    subtitle: 'Wymiana głowic i rolek, naprawy gwarancyjne i pogwarancyjne z odbiorem kurierem',
  },
  'terminale-mobilne': {
    label: 'Serwis terminali Zebra',
    url: 'https://www.serwis-zebry.pl/serwis-terminali-zebra',
    alt: 'Serwis-Zebry.pl — autoryzowany serwis terminali mobilnych Zebra',
    subtitle: 'Wymiana ekranów i baterii, naprawy gwarancyjne i pogwarancyjne z odbiorem kurierem',
  },
  'skanery-kodow-kreskowych': {
    label: 'Serwis skanerów Zebra',
    url: 'https://www.serwis-zebry.pl/serwis-skanerow-zebra',
    alt: 'Serwis-Zebry.pl — autoryzowany serwis skanerów kodów kreskowych Zebra',
    subtitle: 'Wymiana okien skanujących, naprawy gwarancyjne i pogwarancyjne z odbiorem kurierem',
  },
  'tablety-przemyslowe': {
    label: 'Serwis tabletów Zebra',
    url: 'https://www.serwis-zebry.pl/serwis-tabletow-zebra',
    alt: 'Serwis-Zebry.pl — autoryzowany serwis tabletów przemysłowych Zebra',
    subtitle: 'Instrukcje po polsku, sterowniki, diagnostyka AI 24/7, naprawa z odbiorem kurierem',
  },
}

interface PanelSerwisu {
  eyebrow: string
  title: string
  subtitle: string
  url: string
  image: string
  alt: string
  manufacturerId: string
  zewnetrzny?: boolean
}

/**
 * Drukarki kart serwisujemy dla dwóch marek i każda ma własny adres, więc baner
 * dzieli się na połowy zamiast wskazywać jeden serwis. Strona zawężona do jednej
 * marki pokazuje sam jej panel, na całej szerokości.
 */
const banerPodzielony: Record<string, PanelSerwisu[]> = {
  'drukarki-kart': [
    {
      manufacturerId: 'magicard',
      eyebrow: 'Serwis Magicard',
      title: 'Wymiana głowic i wałków',
      subtitle: 'Pronto100, 300, 600 i Rio Pro. Diagnostyka w 48 godzin.',
      url: '/serwis/magicard',
      image: '/images/serwis-banner/serwis-panel-magicard.webp',
      alt: 'Drukarka kart Magicard 300 z czerwonym komunikatem błędu na wyświetlaczu',
    },
    {
      manufacturerId: 'zebra',
      eyebrow: 'Serwis-Zebry.pl',
      title: 'Naprawy gwarancyjne i pogwarancyjne',
      subtitle: 'Czyszczenie, kalibracja, wymiana głowicy. Odbiór kurierem.',
      url: 'https://www.serwis-zebry.pl/serwis-drukarek-zebra',
      image: '/images/serwis-banner/serwis-panel-zebra.webp',
      alt: 'Drukarka kart Zebra ZC300 z czerwonym ekranem błędu na wyświetlaczu',
      zewnetrzny: true,
    },
  ],
}

/**
 * Zdjęcie stoi obok tekstu, nie pod nim — drukarka z czerwonym ekranem ma być
 * widoczna w całości, a nie przykryta nagłówkiem. Krawędzie plików są wtopione
 * w kolor tła panelu, więc wycinek nie ma widocznej ramki.
 */
function PolowaBanera({ panel }: { panel: PanelSerwisu }) {
  return (
    <a
      href={panel.url}
      {...(panel.zewnetrzny ? { target: '_blank', rel: 'noopener' } : {})}
      className="group flex items-center gap-4 bg-[#0d1424] p-6 transition-colors hover:bg-[#131d33]"
    >
      <div className="flex-1 min-w-0">
        <p className="text-xs text-primary-400 font-semibold uppercase tracking-wide mb-1">{panel.eyebrow}</p>
        <h3 className="text-lg font-bold text-white mb-1">{panel.title}</h3>
        <p className="text-sm text-gray-300">{panel.subtitle}</p>
      </div>
      <img
        src={panel.image}
        alt={panel.alt}
        className="hidden sm:block h-[140px] lg:h-[168px] w-auto flex-shrink-0 object-contain"
      />
      <ChevronRightIcon size={24} className="text-gray-400 group-hover:text-primary-400 transition-colors flex-shrink-0" />
    </a>
  )
}

interface ServiceBannerProps {
  categoryId: string
  manufacturerId?: string
}

export default function ServiceBanner({ categoryId, manufacturerId }: ServiceBannerProps) {
  const polowy = banerPodzielony[categoryId]
  if (polowy) {
    const widoczne = manufacturerId ? polowy.filter((p) => p.manufacturerId === manufacturerId) : polowy
    if (widoczne.length) {
      return (
        <div
          className={`mt-10 grid grid-cols-1 rounded-xl overflow-hidden divide-y divide-white/10 md:divide-y-0 ${
            widoczne.length > 1 ? 'md:grid-cols-2 md:divide-x' : ''
          }`}
        >
          {widoczne.map((panel) => (
            <PolowaBanera key={panel.url} panel={panel} />
          ))}
        </div>
      )
    }
    return null
  }

  // Baner serwis-zebry.pl dotyczy tylko produktów Zebra
  if (manufacturerId && manufacturerId !== 'zebra') return null
  const service = serviceLinks[categoryId]
  if (!service) return null

  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener"
      className="block mt-10 relative rounded-xl overflow-hidden hover:shadow-lg transition-all group bg-gray-900 min-h-[160px]"
    >
      <img
        src={service.image ?? DOMYSLNE_ZDJECIE}
        alt={service.alt}
        className="absolute inset-0 w-full h-full object-cover object-[65%_28%]"
      />
      <div className="relative h-full flex items-center justify-between p-6">
        <div>
          <p className="text-xs text-primary-400 font-semibold uppercase tracking-wide mb-1">Serwis-Zebry.pl</p>
          <h3 className="text-lg font-bold text-white mb-1">Autoryzowany serwis gwarancyjny i pogwarancyjny</h3>
          <p className="text-sm text-gray-300">
            {service.subtitle}
          </p>
        </div>
        <ChevronRightIcon size={24} className="text-gray-400 group-hover:text-primary-400 transition-colors flex-shrink-0 ml-4" />
      </div>
    </a>
  )
}
