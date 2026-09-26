import { Metadata } from 'next'
import { getBrandCategoryBySlug } from '@/data/products'
import BrandCategoryPage from '@/components/brand-category/BrandCategoryPage'
import { wstawCeneOd } from '@/lib/cena-od'

const SLUG = 'drukarki-etykiet-zebra'

export async function generateMetadata(): Promise<Metadata> {
  const bc = getBrandCategoryBySlug(SLUG)!
  // Cena „od" w tytule i opisie liczona z tych samych produktów co pasek pod H1.
  const title = wstawCeneOd(bc.seoTitle, bc)
  const description = wstawCeneOd(bc.seoDescription, bc)
  return {
    title,
    description,
    openGraph: { title, description, url: `https://www.takma.com.pl/${bc.slug}`, type: 'website', locale: 'pl_PL', siteName: 'TAKMA', images: [{ url: 'https://www.takma.com.pl/images/takma-og.png', width: 1200, height: 630, alt: bc.name }] },
    alternates: { canonical: `https://www.takma.com.pl/${bc.slug}` },
  }
}

export default function Page() {
  return <BrandCategoryPage slug={SLUG} />
}
