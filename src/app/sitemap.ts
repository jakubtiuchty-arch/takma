import { MetadataRoute } from 'next'
import { products, subcategories } from '@/data/products'
import { guides } from '@/data/guides'
import { industryPages } from '@/data/industry-content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://takma.com.pl'

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/katalog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/drukarki-etykiet`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/materialy-eksploatacyjne`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/o-nas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/kontakt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/zapytanie`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/polityka-prywatnosci`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/produkt/${product.slug}`,
    lastModified: new Date(product.createdAt),
    changeFrequency: (product.isNew ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: product.isBestseller ? 0.9 : product.isNew ? 0.85 : 0.8,
  }))

  const subcategoryPages: MetadataRoute.Sitemap = subcategories.map((sub) => ({
    url: `${baseUrl}/${sub.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const guidePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/poradnik`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    ...guides.map((guide) => ({
      url: `${baseUrl}/poradnik/${guide.slug}`,
      lastModified: new Date(guide.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
  ]

  const industryLandingPages: MetadataRoute.Sitemap = industryPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  return [...staticPages, ...subcategoryPages, ...productPages, ...guidePages, ...industryLandingPages]
}
