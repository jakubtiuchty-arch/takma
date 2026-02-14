import { Metadata } from 'next'
import { getCategoryById } from '@/data/products'
import CategoryPage from '@/components/category/CategoryPage'

const SLUG = 'materialy-eksploatacyjne'

export async function generateMetadata(): Promise<Metadata> {
  const cat = getCategoryById(SLUG)!
  return {
    title: cat.seoTitle,
    description: cat.seoDescription,
    openGraph: {
      title: cat.seoTitle,
      description: cat.seoDescription,
      url: `https://takma.com.pl/${cat.slug}`,
    },
    alternates: { canonical: `https://takma.com.pl/${cat.slug}` },
  }
}

export default function Page() {
  return <CategoryPage slug={SLUG} />
}
