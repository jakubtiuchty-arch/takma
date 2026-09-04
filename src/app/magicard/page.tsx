import type { Metadata } from 'next'
import BrandPillarPage from '@/components/brand-pillar/BrandPillarPage'

const MANUFACTURER_ID = 'magicard'

export const metadata: Metadata = {
  title: 'Magicard by Brady — drukarki kart i identyfikatorów',
  description:
    'Magicard by Brady: brytyjskie drukarki kart PVC i identyfikatorów z zabezpieczeniem HoloKote. Modele Pronto100, 300 i 600 Duo, taśmy oraz akcesoria.',
  alternates: {
    canonical: 'https://www.takma.com.pl/magicard',
  },
  openGraph: {
    title: 'Magicard by Brady — drukarki kart i identyfikatorów | TAKMA',
    description:
      'Drukarki kart Magicard Pronto100, 300 i 600 Duo, oryginalne taśmy oraz akcesoria. Poznaj brytyjskiego producenta należącego do Brady Corporation.',
    url: 'https://www.takma.com.pl/magicard',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'TAKMA',
    images: [
      {
        url: 'https://www.takma.com.pl/images/takma-og.png',
        width: 1200,
        height: 630,
        alt: 'Magicard by Brady — drukarki kart w ofercie TAKMA',
      },
    ],
  },
}

export default function Page() {
  return <BrandPillarPage manufacturerId={MANUFACTURER_ID} />
}
