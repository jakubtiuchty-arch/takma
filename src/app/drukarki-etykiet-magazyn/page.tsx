import { Metadata } from 'next'
import { getIndustryPageBySlug } from '@/data/industry-content'
import IndustryPage from '@/components/industry/IndustryPage'

const SLUG = 'drukarki-etykiet-magazyn'

export async function generateMetadata(): Promise<Metadata> {
  const page = getIndustryPageBySlug(SLUG)!
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    openGraph: { title: page.seoTitle, description: page.seoDescription, url: `https://takma.com.pl/${page.slug}` },
    alternates: { canonical: `https://takma.com.pl/${page.slug}` },
  }
}

export default function Page() {
  return <IndustryPage slug={SLUG} />
}
