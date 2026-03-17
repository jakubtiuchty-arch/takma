import { Metadata } from 'next'
import { getManufacturerById } from '@/data/products'
import BrandPillarPage from '@/components/brand-pillar/BrandPillarPage'

const MANUFACTURER_ID = 'honeywell'

export async function generateMetadata(): Promise<Metadata> {
  const m = getManufacturerById(MANUFACTURER_ID)!
  return {
    title: `Produkty Honeywell — drukarki, terminale, skanery | TAKMA`,
    description: 'Pełna oferta Honeywell AutoID: drukarki etykiet od 1 518 zł, terminale mobilne z 5G, skanery Voyager/Xenon/Granit, tablety przemysłowe. Ceny netto z dystrybucji, serwis w Polsce, dostawa 24h.',
    openGraph: {
      title: `Produkty Honeywell | TAKMA — autoryzowany partner AutoID`,
      description: 'Drukarki etykiet, terminale mobilne, skanery i tablety Honeywell. Ceny netto z dystrybucji Ingram Micro i BlueStar, dostawa z magazynu w Polsce. TAKMA — 25 lat na rynku AutoID.',
      url: `https://www.takma.com.pl/${m.slug}`,
      type: 'website',
      locale: 'pl_PL',
      siteName: 'TAKMA',
      images: [{
        url: 'https://www.takma.com.pl/images/takma-og.png',
        width: 1200,
        height: 630,
        alt: 'Produkty Honeywell — TAKMA',
      }],
    },
    alternates: { canonical: `https://www.takma.com.pl/${m.slug}` },
  }
}

export default function Page() {
  return <BrandPillarPage manufacturerId={MANUFACTURER_ID} />
}
