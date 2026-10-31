import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  getSatoRibbonSeriesBySlug,
  getAllSatoRibbonSeriesSlugs,
} from '@/data/sato-ribbon-series'
import { ribbonSeriesUrl } from '@/data/ribbon-series-registry'
import { getProductBySlug } from '@/data/products'
import RibbonSeriesLanding from '@/components/ribbons/RibbonSeriesLanding'

const siteUrl = 'https://www.takma.com.pl'

// ISR — odświeżaj cenę „od X zł" (StockCache) co 6h, zgodnie z cyklem crona stocku.
export const revalidate = 21600

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSatoRibbonSeriesSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const series = getSatoRibbonSeriesBySlug(slug)
  if (!series) return { title: 'Nie znaleziono modelu' }

  const seriesProduct = getProductBySlug(series.productId)
  const ogImage = seriesProduct?.images?.[0]
    ? [seriesProduct.images[0].startsWith('http') ? seriesProduct.images[0] : `${siteUrl}${seriesProduct.images[0]}`]
    : undefined
  const url = `${siteUrl}${ribbonSeriesUrl(series)}`

  return {
    title: series.seoTitle,
    description: series.seoDescription,
    openGraph: {
      title: series.seoTitle,
      description: series.seoDescription,
      url,
      type: 'article',
      ...(ogImage ? { images: ogImage } : {}),
    },
    ...(ogImage ? { twitter: { card: 'summary_large_image', images: ogImage } } : {}),
    alternates: {
      canonical: url,
    },
  }
}

export default async function SatoRibbonSeriesPage({ params }: PageProps) {
  const { slug } = await params
  const series = getSatoRibbonSeriesBySlug(slug)
  if (!series) notFound()

  return <RibbonSeriesLanding series={series} />
}
