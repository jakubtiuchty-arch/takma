import type { Metadata } from 'next'
import { getBrandCategoryBySlug } from '@/data/products'
import BrandCategoryPage from '@/components/brand-category/BrandCategoryPage'

const SLUG = 'drukarki-sato'
const category = getBrandCategoryBySlug(SLUG)!
export const metadata: Metadata = {
  title: category.seoTitle,
  description: category.seoDescription,
  alternates: { canonical: 'https://www.takma.com.pl/drukarki-sato' },
  openGraph: { title: category.seoTitle, description: category.seoDescription, url: 'https://www.takma.com.pl/drukarki-sato', type: 'website', locale: 'pl_PL' },
}
export default function Page() {
  return <BrandCategoryPage slug={SLUG} />
}
