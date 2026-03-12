import { Metadata } from 'next'
import { getManufacturerById } from '@/data/products'
import BrandPillarPage from '@/components/brand-pillar/BrandPillarPage'

const MANUFACTURER_ID = 'zebra'

export async function generateMetadata(): Promise<Metadata> {
  const m = getManufacturerById(MANUFACTURER_ID)!
  return {
    title: `Produkty Zebra Technologies — drukarki, terminale, skanery | TAKMA`,
    description: 'Pełna oferta Zebra Technologies: drukarki etykiet od 576 zł, terminale mobilne, skanery kodów, tablety przemysłowe. Autoryzowany Premier Solution Partner Zebra. Ceny netto, serwis, dostawa 24h.',
    openGraph: {
      title: `Produkty Zebra Technologies | Autoryzowany partner — TAKMA`,
      description: 'Drukarki etykiet, terminale mobilne, skanery i tablety Zebra Technologies. Ceny netto z dystrybucji, serwis serwis-zebry.pl, dostawa 24h. TAKMA — 25 lat na rynku AutoID.',
      url: `https://www.takma.com.pl/${m.slug}`,
      type: 'website',
      locale: 'pl_PL',
      siteName: 'TAKMA',
      images: [{
        url: 'https://www.takma.com.pl/images/takma-og.png',
        width: 1200,
        height: 630,
        alt: 'Produkty Zebra Technologies — TAKMA',
      }],
    },
    alternates: { canonical: `https://www.takma.com.pl/${m.slug}` },
  }
}

export default function Page() {
  return <BrandPillarPage manufacturerId={MANUFACTURER_ID} />
}
