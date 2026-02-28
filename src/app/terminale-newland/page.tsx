import { Metadata } from 'next'
import { getBrandCategoryBySlug } from '@/data/products'
import BrandCategoryPage from '@/components/brand-category/BrandCategoryPage'

const SLUG = 'terminale-newland'

export async function generateMetadata(): Promise<Metadata> {
  const bc = getBrandCategoryBySlug(SLUG)!
  return {
    title: bc.seoTitle,
    description: bc.seoDescription,
    openGraph: { title: bc.seoTitle, description: bc.seoDescription, url: `https://www.takma.com.pl/${bc.slug}` },
    alternates: { canonical: `https://www.takma.com.pl/${bc.slug}` },
  }
}

export default function Page() {
  return <BrandCategoryPage slug={SLUG} />
}
