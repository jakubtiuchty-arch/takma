import { Metadata } from 'next'
import { getManufacturerById } from '@/data/products'
import BrandPillarPage from '@/components/brand-pillar/BrandPillarPage'

const MANUFACTURER_ID = 'epson'

export async function generateMetadata(): Promise<Metadata> {
  const m = getManufacturerById(MANUFACTURER_ID)!
  return {
    title: 'Epson ColorWorks — kolorowe drukarki etykiet, tusze i etykiety',
    description: 'Drukarki etykiet Epson ColorWorks: sześć modeli od 5 653 zł netto, tusz pigmentowy CMYK, druk do 300 mm/s. Oryginalne tusze SJIC i etykiety, własny serwis, dostawa 2-3 dni.',
    openGraph: {
      title: 'Epson ColorWorks | TAKMA — kolorowe drukarki etykiet',
      description: 'Sześć modeli Epson ColorWorks z cenami netto i stanem magazynowym: C3500, D3800e, C4000e, C6000, C6500 i C8000e. Tusze, etykiety i serwis w jednym miejscu.',
      url: `https://www.takma.com.pl/${m.slug}`,
      type: 'website',
      locale: 'pl_PL',
      siteName: 'TAKMA',
      images: [{
        url: 'https://www.takma.com.pl/images/takma-og.png',
        width: 1200,
        height: 630,
        alt: 'Epson ColorWorks — kolorowe drukarki etykiet w TAKMA',
      }],
    },
    alternates: { canonical: `https://www.takma.com.pl/${m.slug}` },
  }
}

export default function Page() {
  return <BrandPillarPage manufacturerId={MANUFACTURER_ID} />
}
