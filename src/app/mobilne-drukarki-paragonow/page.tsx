import { Metadata } from 'next'
import { getCategoryById } from '@/data/products'
import CategoryPage from '@/components/category/CategoryPage'

const SLUG = 'mobilne-drukarki-paragonow'

export async function generateMetadata(): Promise<Metadata> {
  const cat = getCategoryById(SLUG)!
  return {
    title: cat.seoTitle,
    description: cat.seoDescription,
    twitter: { card: 'summary_large_image', title: cat.seoTitle, description: cat.seoDescription, images: ['/images/takma-og.png'] },
    openGraph: {
      images: ['/images/takma-og.png'],
      title: cat.seoTitle,
      description: cat.seoDescription,
      url: `https://www.takma.com.pl/${cat.slug}`,
    },
    alternates: { canonical: `https://www.takma.com.pl/${cat.slug}` },
  }
}

export default function Page() {
  return <CategoryPage slug={SLUG} />
}
