import { WrenchIcon } from '@/components/ui/Icons'

const serviceLinks: Record<string, { label: string; url: string; description: string }> = {
  'drukarki-etykiet': {
    label: 'Serwis drukarek Zebra',
    url: 'https://www.serwis-zebry.pl/serwis-drukarek-zebra',
    description: 'Autoryzowany serwis drukarek etykiet Zebra — naprawy gwarancyjne i pogwarancyjne, przeglądy, wymiana głowic i części eksploatacyjnych.',
  },
  'drukarki-kart': {
    label: 'Serwis drukarek Zebra',
    url: 'https://www.serwis-zebry.pl/serwis-drukarek-zebra',
    description: 'Autoryzowany serwis drukarek kart Zebra — naprawy gwarancyjne i pogwarancyjne, czyszczenie, kalibracja modułów kodujących.',
  },
  'drukarki-opasek': {
    label: 'Serwis drukarek Zebra',
    url: 'https://www.serwis-zebry.pl/serwis-drukarek-zebra',
    description: 'Autoryzowany serwis drukarek opasek Zebra — naprawy gwarancyjne i pogwarancyjne, wymiana głowic i rolek.',
  },
  'terminale-mobilne': {
    label: 'Serwis terminali Zebra',
    url: 'https://www.serwis-zebry.pl/serwis-terminali-zebra',
    description: 'Autoryzowany serwis terminali mobilnych Zebra — naprawy gwarancyjne i pogwarancyjne, wymiana ekranów, baterii i portów.',
  },
  'skanery-kodow-kreskowych': {
    label: 'Serwis skanerów Zebra',
    url: 'https://www.serwis-zebry.pl/serwis-skanerow-zebra',
    description: 'Autoryzowany serwis skanerów kodów kreskowych Zebra — naprawy gwarancyjne i pogwarancyjne, wymiana okien skanujących i kabli.',
  },
}

interface ServiceBannerProps {
  categoryId: string
}

export default function ServiceBanner({ categoryId }: ServiceBannerProps) {
  const service = serviceLinks[categoryId]
  if (!service) return null

  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener"
      className="block mt-10 p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors group"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
          <WrenchIcon size={20} className="text-primary-400" />
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg group-hover:text-primary-400 transition-colors">
            {service.label}
          </h3>
          <p className="text-gray-400 text-sm mt-1 leading-relaxed">
            {service.description}
          </p>
          <span className="inline-block mt-3 text-primary-400 text-sm font-medium">
            serwis-zebry.pl &rarr;
          </span>
        </div>
      </div>
    </a>
  )
}
