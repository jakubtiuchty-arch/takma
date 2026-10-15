import type { Metadata } from 'next'
import SubcategoryPage from '@/components/subcategory/SubcategoryPage'
import { rfidLabelCategory as category } from '@/data/rfid-label-category'

const url = `https://www.takma.com.pl/${category.slug}`
export const metadata: Metadata = {
  title: { absolute: category.seoTitle },
  description: category.seoDescription,
  alternates: { canonical: url },
  openGraph: { type: 'website', locale: 'pl_PL', title: category.seoTitle, description: category.seoDescription, url, images: ['/images/takma-og.png'] },
  twitter: { card: 'summary_large_image', title: category.seoTitle, description: category.seoDescription, images: ['/images/takma-og.png'] },
}
export default function Page() { return <SubcategoryPage slug={category.slug} /> }
