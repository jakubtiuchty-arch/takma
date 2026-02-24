import { Metadata } from 'next'
import { getCategoryById } from '@/data/products'
import CategoryPage from '@/components/category/CategoryPage'

const SLUG = 'skanery-kodow-kreskowych'

export async function generateMetadata(): Promise<Metadata> {
  const cat = getCategoryById(SLUG)!
  return {
    title: cat.seoTitle,
    description: cat.seoDescription,
    openGraph: {
      title: cat.seoTitle,
      description: cat.seoDescription,
      url: `https://takma.com.pl/${cat.slug}`,
      images: [{ url: '/images/takma-og.png', width: 1200, height: 630, alt: 'TAKMA — Autoryzowany dystrybutor urządzeń AutoID' }],
    },
    alternates: { canonical: `https://takma.com.pl/${cat.slug}` },
  }
}

export default function Page() {
  return <CategoryPage slug={SLUG} />
}
