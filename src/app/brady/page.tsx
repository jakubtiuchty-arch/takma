import { Metadata } from 'next'
import { getManufacturerById } from '@/data/products'
import BrandPillarPage from '@/components/brand-pillar/BrandPillarPage'

const MANUFACTURER_ID = 'brady'

export async function generateMetadata(): Promise<Metadata> {
  const m = getManufacturerById(MANUFACTURER_ID)!
  return {
    title: m.seoTitle,
    description: m.seoDescription,
    alternates: { canonical: 'https://www.takma.com.pl/brady' },
    openGraph: { title: m.seoTitle, description: m.seoDescription, url: 'https://www.takma.com.pl/brady', type: 'website', locale: 'pl_PL', siteName: 'TAKMA' },
  }
}

export default function Page() {
  return <BrandPillarPage manufacturerId={MANUFACTURER_ID} />
}
