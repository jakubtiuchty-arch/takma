import { ChevronRightIcon } from '@/components/ui/Icons'

const serviceLinks: Record<string, { label: string; url: string; alt: string; subtitle: string }> = {
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

interface ServiceBannerProps {
  categoryId: string
  manufacturerId?: string
}

export default function ServiceBanner({ categoryId, manufacturerId }: ServiceBannerProps) {
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
        src="/images/serwis-zebry-banner.jpg"
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
