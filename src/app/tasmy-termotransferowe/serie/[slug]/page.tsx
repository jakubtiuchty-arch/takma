import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  getRibbonSeriesBySlug,
  getAllRibbonSeriesSlugs,
} from '@/data/transfer-ribbon-series'
import { getProductBySlug } from '@/data/products'
import RibbonSeriesLanding from '@/components/ribbons/RibbonSeriesLanding'

const siteUrl = 'https://www.takma.com.pl'

// ISR — odświeżaj cenę „od X zł" (StockCache) co 6h, zgodnie z cyklem crona stocku.
export const revalidate = 21600

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllRibbonSeriesSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const series = getRibbonSeriesBySlug(slug)
  if (!series) return { title: 'Nie znaleziono modelu' }

  const seriesProduct = getProductBySlug(series.productId)
  const ogImage = seriesProduct?.images?.[0]
    ? [seriesProduct.images[0].startsWith('http') ? seriesProduct.images[0] : `${siteUrl}${seriesProduct.images[0]}`]
    : undefined

  return {
    title: series.seoTitle,
    description: series.seoDescription,
    openGraph: {
      title: series.seoTitle,
      description: series.seoDescription,
      url: `${siteUrl}/tasmy-termotransferowe/serie/${series.slug}`,
      type: 'article',
      ...(ogImage ? { images: ogImage } : {}),
    },
    ...(ogImage ? { twitter: { card: 'summary_large_image', images: ogImage } } : {}),
    alternates: {
      canonical: `${siteUrl}/tasmy-termotransferowe/serie/${series.slug}`,
    },
  }
}

export default async function RibbonSeriesPage({ params }: PageProps) {
  const { slug } = await params
  const series = getRibbonSeriesBySlug(slug)
  if (!series) notFound()

  return <RibbonSeriesLanding series={series} />
}
