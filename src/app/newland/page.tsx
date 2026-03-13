import { Metadata } from 'next'
import { getManufacturerById } from '@/data/products'
import BrandPillarPage from '@/components/brand-pillar/BrandPillarPage'

const MANUFACTURER_ID = 'newland'

export async function generateMetadata(): Promise<Metadata> {
  const m = getManufacturerById(MANUFACTURER_ID)!
  return {
    title: `Produkty Newland AIDC — skanery kodów i terminale mobilne | TAKMA`,
    description: 'Pełna oferta Newland AIDC: skanery kodów od 181 zł netto (HR11, HR23, HR33, NVH300), terminale mobilne z Androidem (N7, MT93, MT95). Gwarancja 5 lat na skanery, bezpłatny MDM Ndevor. Ceny z dystrybucji Ingram Micro.',
    openGraph: {
      title: `Produkty Newland AIDC | TAKMA — dystrybutor AutoID`,
      description: 'Skanery kodów kreskowych i terminale mobilne Newland AIDC. Ceny netto z dystrybucji Ingram Micro, gwarancja 5 lat na skanery, dostawa z magazynu w Polsce. TAKMA — 25 lat na rynku AutoID.',
      url: `https://www.takma.com.pl/${m.slug}`,
      type: 'website',
      locale: 'pl_PL',
      siteName: 'TAKMA',
      images: [{
        url: 'https://www.takma.com.pl/images/takma-og.png',
        width: 1200,
        height: 630,
        alt: 'Produkty Newland AIDC — TAKMA',
      }],
    },
    alternates: { canonical: `https://www.takma.com.pl/${m.slug}` },
  }
}

export default function Page() {
  return <BrandPillarPage manufacturerId={MANUFACTURER_ID} />
}
