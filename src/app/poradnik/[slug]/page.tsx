import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getGuideBySlug, getAllGuideSlugs } from '@/data/guides'
import GuidePage from '@/components/guide/GuidePage'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllGuideSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) return { title: 'Nie znaleziono' }

  return {
    title: guide.seoTitle,
    description: guide.seoDescription,
    openGraph: {
      title: guide.seoTitle,
      description: guide.seoDescription,
      url: `https://www.takma.com.pl/poradnik/${guide.slug}`,
      type: 'article',
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
      authors: ['TAKMA'],
      ...(guide.heroImage ? { images: [{ url: `https://www.takma.com.pl${guide.heroImage}`, width: 1200, height: 630 }] } : {}),
    },
    alternates: { canonical: `https://www.takma.com.pl/poradnik/${guide.slug}` },
  }
}

export default async function GuideArticlePage({ params }: Props) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) notFound()

  return <GuidePage guide={guide} />
}
