import { MetadataRoute } from 'next'
import {
  products,
  subcategories,
  brandCategories,
  thermalSizeSlug,
  variantSizeSlug,
  isThermalLabelProduct,
  isTransferLabelProduct,
} from '@/data/products'
import { guides } from '@/data/guides'
import { industryPages } from '@/data/industry-content'
import { thermalLabelSeries } from '@/data/thermal-label-series'
import { transferLabelSeries } from '@/data/transfer-label-series'
import { transferRibbonSeries } from '@/data/transfer-ribbon-series'
import { isRibbonProduct } from '@/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.takma.com.pl'
  const lastUpdated = new Date('2026-02-15')

  // Brand pillar pages
  const brandPillarPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/zebra`, lastModified: new Date('2026-03-12') },
    { url: `${baseUrl}/honeywell`, lastModified: new Date('2026-03-12') },
    { url: `${baseUrl}/newland`, lastModified: new Date('2026-03-13') },
  ]

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
    { url: `${baseUrl}/tablety-przemyslowe`, lastModified: lastUpdated },
    { url: `${baseUrl}/o-nas`, lastModified: new Date('2025-12-01') },
    { url: `${baseUrl}/kontakt`, lastModified: new Date('2025-12-01') },
    { url: `${baseUrl}/serwis`, lastModified: lastUpdated },
    { url: `${baseUrl}/zapytanie`, lastModified: new Date('2025-12-01') },
    { url: `${baseUrl}/polityka-prywatnosci`, lastModified: new Date('2025-06-01') },
    { url: `${baseUrl}/regulamin`, lastModified: new Date('2026-02-17') },
    { url: `${baseUrl}/mapa-strony`, lastModified: lastUpdated },
  ]

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/produkt/${product.slug}`,
    lastModified: new Date(product.updatedAt || product.createdAt),
  }))

  // Stare flat slugi TT (etykiety-termotransferowe-papierowe/-foliowe/-specjalne)
  // 301-redirectują na zagnieżdżony URL /etykiety-termotransferowe-zebra/{sub} — wykluczamy.
  // Rodzic ma slug 'etykiety-termotransferowe-zebra' i jest dodawany w transferCategoryPages niżej.
  // Daty świeżości dla przebudowanych landingów (spójne z dateModified w schema na stronie).
  const reworkedLandingLastMod: Record<string, Date> = {
    'tasmy-termotransferowe': new Date('2026-05-31'),
    'etykiety-termiczne': new Date('2026-06-03'),
  }
  const subcategoryPages: MetadataRoute.Sitemap = subcategories
    .filter((sub) => !/^etykiety-termotransferowe-(papierowe|foliowe|specjalne)$/.test(sub.slug))
    .filter((sub) => sub.slug !== 'etykiety-termotransferowe-zebra')
    .map((sub) => ({
      url: `${baseUrl}/${sub.slug}`,
      lastModified: reworkedLandingLastMod[sub.slug] ?? lastUpdated,
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

  // Landing pages dla serii etykiet termicznych — /etykiety-termiczne/serie/[slug]
  const thermalSeriesPages: MetadataRoute.Sitemap = thermalLabelSeries.map((s) => ({
    url: `${baseUrl}/etykiety-termiczne/serie/${s.slug}`,
    lastModified: new Date('2026-05-18'),
  }))

  // Warianty etykiet termicznych — /produkt/[slug]/[size]/[pn]
  // Każdy SKU ma własny URL → indeksowalne w Google dla zapytań typu
  // "etykiety zebra 102x152" / "PN 3003355" / "Z-Perform 1000D 152x216".
  const thermalVariantPages: MetadataRoute.Sitemap = products
    .filter(isThermalLabelProduct)
    .flatMap((p) =>
      (p.variants ?? [])
        .filter((v) => !!v.attributes['Rozmiar'])
        .map((v) => ({
          url: `${baseUrl}/produkt/${p.slug}/${thermalSizeSlug(v.attributes['Rozmiar'])}/${v.partNumber}`,
          lastModified: new Date(p.updatedAt || p.createdAt),
        })),
    )

  // Etykiety termotransferowe — landing-rodzic + 3 podkategorie + 16 serii
  const ttLastMod = new Date('2026-05-29')
  const transferCategoryPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/etykiety-termotransferowe-zebra`, lastModified: ttLastMod },
    { url: `${baseUrl}/etykiety-termotransferowe-zebra/papierowe`, lastModified: ttLastMod },
    { url: `${baseUrl}/etykiety-termotransferowe-zebra/foliowe`, lastModified: ttLastMod },
    { url: `${baseUrl}/etykiety-termotransferowe-zebra/specjalne`, lastModified: ttLastMod },
  ]
  const transferSeriesPages: MetadataRoute.Sitemap = transferLabelSeries.map((s) => ({
    url: `${baseUrl}/etykiety-termotransferowe-zebra/${s.subcategory}/serie/${s.slug}`,
    lastModified: ttLastMod,
  }))

  // Warianty TT — /produkt/[slug]/[size]/[pn] (z 'bez-rozmiaru' dla SKU bez rozmiaru)
  const transferVariantPages: MetadataRoute.Sitemap = products
    .filter(isTransferLabelProduct)
    .flatMap((p) =>
      (p.variants ?? []).map((v) => ({
        url: `${baseUrl}/produkt/${p.slug}/${variantSizeSlug(v)}/${v.partNumber}`,
        lastModified: new Date(p.updatedAt || p.createdAt),
      })),
    )

  // Taśmy termotransferowe — landing istniejący (zaindeksowany) + 12 stron serii + 140 wariantów
  const ribbonLastMod = new Date('2026-05-30')
  const ribbonSeriesPages: MetadataRoute.Sitemap = transferRibbonSeries.map((s) => ({
    url: `${baseUrl}/tasmy-termotransferowe/serie/${s.slug}`,
    lastModified: ribbonLastMod,
  }))
  const ribbonVariantPages: MetadataRoute.Sitemap = products
    .filter(isRibbonProduct)
    .flatMap((p) =>
      (p.variants ?? []).map((v) => ({
        url: `${baseUrl}/produkt/${p.slug}/${variantSizeSlug(v)}/${v.partNumber}`,
        lastModified: new Date(p.updatedAt || p.createdAt),
      })),
    )

  return [
    ...staticPages,
    ...brandPillarPages,
    ...subcategoryPages,
    ...brandCategoryPages,
    ...productPages,
    ...guidePages,
    ...industryLandingPages,
    ...thermalSeriesPages,
    ...thermalVariantPages,
    ...transferCategoryPages,
    ...transferSeriesPages,
    ...transferVariantPages,
    ...ribbonSeriesPages,
    ...ribbonVariantPages,
  ]
}
