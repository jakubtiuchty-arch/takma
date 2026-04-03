import { Metadata } from 'next'
import { getSubcategoryBySlug } from '@/data/products'
import SubcategoryPage from '@/components/subcategory/SubcategoryPage'

const SLUG = 'skanery-kodow-kreskowych/pierscieniowe'

export async function generateMetadata(): Promise<Metadata> {
  const sub = getSubcategoryBySlug(SLUG)!
  return {
    title: sub.seoTitle,
    description: sub.seoDescription,
    openGraph: {
      title: sub.seoTitle,
      description: sub.seoDescription,
      url: `https://www.takma.com.pl/${sub.slug}`,
      images: [{ url: '/images/takma-og.png', width: 1200, height: 630, alt: 'TAKMA — Autoryzowany partner urządzeń AutoID' }],
    },
    alternates: { canonical: `https://www.takma.com.pl/${sub.slug}` },
  }
}

export default function Page() {
  return <SubcategoryPage slug={SLUG} />
}
