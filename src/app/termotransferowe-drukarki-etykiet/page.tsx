import { Metadata } from 'next'
import { getSubcategoryBySlug } from '@/data/products'
import SubcategoryPage from '@/components/subcategory/SubcategoryPage'

const SLUG = 'termotransferowe-drukarki-etykiet'

export async function generateMetadata(): Promise<Metadata> {
  const sub = getSubcategoryBySlug(SLUG)!
  return {
    title: sub.seoTitle,
    description: sub.seoDescription,
    openGraph: {
      images: ['/images/takma-og.png'],
      title: sub.seoTitle,
      description: sub.seoDescription,
      url: `https://www.takma.com.pl/${sub.slug}`,
    },
    alternates: { canonical: `https://www.takma.com.pl/${sub.slug}` },
  }
}

export default function Page() {
  return <SubcategoryPage slug={SLUG} />
}
