import { Metadata } from 'next'
import { getSubcategoryBySlug } from '@/data/products'
import SubcategoryPage from '@/components/subcategory/SubcategoryPage'

const SLUG = 'opaski-identyfikacyjne'

export async function generateMetadata(): Promise<Metadata> {
  const sub = getSubcategoryBySlug(SLUG)!
  return {
    title: sub.seoTitle,
    description: sub.seoDescription,
    openGraph: {
      title: sub.seoTitle,
      description: sub.seoDescription,
      url: `https://takma.com.pl/${sub.slug}`,
    },
    alternates: { canonical: `https://takma.com.pl/${sub.slug}` },
  }
}

export default function Page() {
  return <SubcategoryPage slug={SLUG} />
}
