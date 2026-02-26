import { MetadataRoute } from 'next'
import { products, subcategories, brandCategories } from '@/data/products'
import { guides } from '@/data/guides'
import { industryPages } from '@/data/industry-content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.takma.com.pl'
  const lastUpdated = new Date('2026-02-15')

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: lastUpdated },
    { url: `${baseUrl}/katalog`, lastModified: lastUpdated },
    { url: `${baseUrl}/drukarki-etykiet`, lastModified: lastUpdated },
    { url: `${baseUrl}/drukarki-kart`, lastModified: lastUpdated },
    { url: `${baseUrl}/drukarki-opasek`, lastModified: lastUpdated },
    { url: `${baseUrl}/materialy-eksploatacyjne`, lastModified: lastUpdated },
    { url: `${baseUrl}/oprogramowanie`, lastModified: lastUpdated },
    { url: `${baseUrl}/terminale-mobilne`, lastModified: lastUpdated },
    { url: `${baseUrl}/skanery-kodow-kreskowych`, lastModified: lastUpdated },
    { url: `${baseUrl}/o-nas`, lastModified: new Date('2025-12-01') },
    { url: `${baseUrl}/kontakt`, lastModified: new Date('2025-12-01') },
    { url: `${baseUrl}/serwis`, lastModified: lastUpdated },
    { url: `${baseUrl}/zapytanie`, lastModified: new Date('2025-12-01') },
    { url: `${baseUrl}/polityka-prywatnosci`, lastModified: new Date('2025-06-01') },
    { url: `${baseUrl}/regulamin`, lastModified: new Date('2026-02-17') },
    { url: `${baseUrl}/mapa-strony`, lastModified: lastUpdated },
    // Hub pages taśm per typ
    { url: `${baseUrl}/tasmy-wax`, lastModified: lastUpdated },
    { url: `${baseUrl}/tasmy-wax-resin`, lastModified: lastUpdated },
    { url: `${baseUrl}/tasmy-resin`, lastModified: lastUpdated },
  ]

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/produkt/${product.slug}`,
    lastModified: new Date(product.createdAt),
  }))

  const subcategoryPages: MetadataRoute.Sitemap = subcategories.map((sub) => ({
    url: `${baseUrl}/${sub.slug}`,
    lastModified: lastUpdated,
  }))

  const guidePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/poradnik`, lastModified: lastUpdated },
    ...guides.map((guide) => ({
      url: `${baseUrl}/poradnik/${guide.slug}`,
      lastModified: new Date(guide.updatedAt),
    })),
  ]

  const industryLandingPages: MetadataRoute.Sitemap = industryPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: lastUpdated,
  }))

  const brandCategoryPages: MetadataRoute.Sitemap = brandCategories.map((bc) => ({
    url: `${baseUrl}/${bc.slug}`,
    lastModified: lastUpdated,
  }))

  return [...staticPages, ...subcategoryPages, ...brandCategoryPages, ...productPages, ...guidePages, ...industryLandingPages]
}
