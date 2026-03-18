import { Metadata } from 'next'
import { getManufacturerById } from '@/data/products'
import BrandPillarPage from '@/components/brand-pillar/BrandPillarPage'

const MANUFACTURER_ID = 'tsc'

export async function generateMetadata(): Promise<Metadata> {
  const m = getManufacturerById(MANUFACTURER_ID)!
  return {
    title: `Produkty TSC — drukarki etykiet półprzemysłowe i przemysłowe | TAKMA`,
    description: 'Drukarki etykiet TSC: kompaktowe półprzemysłowe ML241P i ML341P z emulacją ZPL/EPL/DPL. Ceny netto od 2 223 zł z dystrybucji BlueStar. TAKMA — autoryzowany partner AutoID, 25 lat na rynku.',
    openGraph: {
      title: `Produkty TSC | TAKMA — autoryzowany partner AutoID`,
      description: 'Drukarki etykiet TSC z automatyczną emulacją ZPL. Kompaktowa obudowa, rolki 8" OD, ENERGY STAR. Ceny netto z dystrybucji BlueStar, dostawa z magazynu EU.',
      url: `https://www.takma.com.pl/${m.slug}`,
      type: 'website',
      locale: 'pl_PL',
      siteName: 'TAKMA',
      images: [{
        url: 'https://www.takma.com.pl/images/takma-og.png',
        width: 1200,
        height: 630,
        alt: 'Produkty TSC — TAKMA',
      }],
    },
    alternates: { canonical: `https://www.takma.com.pl/${m.slug}` },
  }
}

export default function Page() {
  return <BrandPillarPage manufacturerId={MANUFACTURER_ID} />
}
