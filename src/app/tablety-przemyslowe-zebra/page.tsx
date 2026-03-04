import { Metadata } from 'next'
import { getBrandCategoryBySlug } from '@/data/products'
import BrandCategoryPage from '@/components/brand-category/BrandCategoryPage'

const SLUG = 'tablety-przemyslowe-zebra'

export async function generateMetadata(): Promise<Metadata> {
  const bc = getBrandCategoryBySlug(SLUG)!
  return {
    title: bc.seoTitle,
    description: bc.seoDescription,
    openGraph: { title: bc.seoTitle, description: bc.seoDescription, url: `https://www.takma.com.pl/${bc.slug}`, type: 'website', locale: 'pl_PL', siteName: 'TAKMA', images: [{ url: 'https://www.takma.com.pl/images/takma-og.png', width: 1200, height: 630, alt: bc.name }] },
    alternates: { canonical: `https://www.takma.com.pl/${bc.slug}` },
  }
}

export default function Page() {
  return <BrandCategoryPage slug={SLUG} />
}
