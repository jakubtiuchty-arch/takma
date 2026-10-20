import type { Metadata } from 'next'
import SubcategoryPage from '@/components/subcategory/SubcategoryPage'
import { rfidReaderCategory as category } from '@/data/rfid-reader-category'

const url = `https://www.takma.com.pl/${category.slug}`

export const revalidate = 3600

export const metadata: Metadata = {
  title: { absolute: category.seoTitle },
  description: category.seoDescription,
  alternates: { canonical: url },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    title: category.seoTitle,
    description: category.seoDescription,
    url,
    images: ['/images/takma-og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: category.seoTitle,
    description: category.seoDescription,
    images: ['/images/takma-og.png'],
  },
}

export default function Page() {
  return <SubcategoryPage slug={category.slug} />
}
