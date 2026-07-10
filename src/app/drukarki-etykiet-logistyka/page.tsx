import { Metadata } from 'next'
import { getIndustryPageBySlug } from '@/data/industry-content'
import IndustryPage from '@/components/industry/IndustryPage'

const SLUG = 'drukarki-etykiet-logistyka'

export async function generateMetadata(): Promise<Metadata> {
  const page = getIndustryPageBySlug(SLUG)!
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    openGraph: {
      images: ['/images/logistyka-transport.jpeg'], title: page.seoTitle, description: page.seoDescription, url: `https://www.takma.com.pl/${page.slug}` },
    alternates: { canonical: `https://www.takma.com.pl/${page.slug}` },
  }
}

export default function Page() {
  return <IndustryPage slug={SLUG} />
}
