import { Metadata } from 'next'
import { getManufacturerById } from '@/data/products'
import BrandPillarPage from '@/components/brand-pillar/BrandPillarPage'

const MANUFACTURER_ID = 'epson'

export async function generateMetadata(): Promise<Metadata> {
  const m = getManufacturerById(MANUFACTURER_ID)!
  const title = 'Epson — drukarki ColorWorks, POS, tusze i etykiety'
  const description = 'Oferta Epson w TAKMA: drukarki ColorWorks do kolorowych etykiet, modele POS i mobilne drukarki potwierdzeń. Tusze, materiały, konfiguracje PN i ceny.'
  return {
    title,
    description,
    openGraph: {
      title, description, url: `https://www.takma.com.pl/${m.slug}`,
      type: 'website', locale: 'pl_PL', siteName: 'TAKMA',
      images: [{ url: 'https://www.takma.com.pl/images/takma-og.png', width: 1200, height: 630, alt: 'Epson — oferta drukarek i materiałów w TAKMA' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['https://www.takma.com.pl/images/takma-og.png'] },
    alternates: { canonical: `https://www.takma.com.pl/${m.slug}` },
  }
}

export default function Page() {
  return <BrandPillarPage manufacturerId={MANUFACTURER_ID} />
}
