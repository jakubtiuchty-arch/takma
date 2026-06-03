import { tool } from 'ai'
import { z } from 'zod'
import { thermalLabelSeries } from '@/data/thermal-label-series'
import { transferLabelSeries } from '@/data/transfer-label-series'
import { transferRibbonSeries } from '@/data/transfer-ribbon-series'
import { products } from '@/data/products'
import { stripMarkdown } from '@/lib/strip-markdown'

function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_BASE_URL) return process.env.NEXT_PUBLIC_BASE_URL
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return 'https://www.takma.com.pl'
}

type MatType = 'etykieta termiczna' | 'etykieta termotransferowa' | 'taśma barwiąca'

interface MatEntry {
  type: MatType
  url: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  s: any
}

let _all: MatEntry[] | null = null
function allMaterials(): MatEntry[] {
  if (_all) return _all
  _all = [
    ...thermalLabelSeries.map(s => ({ type: 'etykieta termiczna' as const, url: `/etykiety-termiczne-zebra/serie/${s.slug}`, s })),
    ...transferLabelSeries.map(s => ({ type: 'etykieta termotransferowa' as const, url: `/etykiety-termotransferowe-zebra/${s.subcategory}/serie/${s.slug}`, s })),
    ...transferRibbonSeries.map(s => ({ type: 'taśma barwiąca' as const, url: `/tasmy-termotransferowe/serie/${s.slug}`, s })),
  ]
  return _all
}

function score(text: string, query: string): number {
  const lower = text.toLowerCase()
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  let n = 0
  for (const t of terms) if (lower.includes(t)) n++
  if (lower.includes(query.toLowerCase())) n += terms.length
  return n
}

export const searchMaterials = tool({
  description: 'Szukaj serii materiałów (etykiety termiczne/termotransferowe, taśmy) po zastosowaniu, parametrze lub nazwie. Używaj, gdy klient opisuje potrzebę (np. „etykieta do mrożonek", „taśma do folii PP").',
  inputSchema: z.object({
    query: z.string().describe('Opis potrzeby lub nazwa serii'),
    type: z.enum(['termiczna', 'termotransferowa', 'tasma', 'dowolny']).optional().describe('Zawęź do typu materiału'),
    limit: z.number().optional().default(5),
  }),
  execute: async ({ query, type, limit }) => {
    let pool = allMaterials()
    if (type === 'termiczna') pool = pool.filter(m => m.type === 'etykieta termiczna')
    else if (type === 'termotransferowa') pool = pool.filter(m => m.type === 'etykieta termotransferowa')
    else if (type === 'tasma') pool = pool.filter(m => m.type === 'taśma barwiąca')

    const ranked = pool
      .map(m => {
        const hay = [
          m.s.title, m.s.tagline, m.s.heroIntro, m.s.positioning,
          (m.s.applications ?? []).join(' '),
          (m.s.keyHighlights ?? []).join(' '),
          (m.s.techSpecs ?? []).map((t: { value: string }) => t.value).join(' '),
        ].join(' ')
        return { m, sc: score(hay, query) }
      })
      .filter(x => x.sc > 0)
      .sort((a, b) => b.sc - a.sc)
      .slice(0, limit)

    if (ranked.length === 0) return { results: [], hint: 'Brak dopasowania — doprecyzuj potrzebę lub zaproponuj kontakt.' }

    return {
      results: ranked.map(({ m }) => ({
        type: m.type,
        name: m.s.title,
        url: m.url,
        tagline: stripMarkdown(m.s.tagline ?? ''),
        priceFrom: m.s.priceFrom ?? null,
        foodSafe: m.s.foodSafe === true,
        applications: (m.s.applications ?? []).slice(0, 4),
      })),
    }
  },
})

export const getMaterialSeries = tool({
  description: 'Pobierz pełne dane serii materiału (opis, pełna specyfikacja, atesty, wszystkie FAQ, rozmiary). Używaj, gdy klient pyta o szczegóły konkretnej serii.',
  inputSchema: z.object({
    slug: z.string().describe('Slug serii (np. "z-select-2000d", "3200-premium-wax-resin")'),
  }),
  execute: async ({ slug }) => {
    const m = allMaterials().find(x => x.s.slug === slug)
    if (!m) return { error: `Nie znaleziono serii: ${slug}` }
    const s = m.s
    // Rozmiary celowo POMIJAMY — od doboru rozmiaru jest findClosestSize (taniej w kontekście).
    return {
      type: m.type,
      name: s.title,
      url: m.url,
      positioning: s.positioning,
      priceFrom: s.priceFrom ?? null,
      description: stripMarkdown(s.heroIntro ?? s.tagline ?? ''),
      techSpecs: (s.techSpecs ?? []).map((t: { label: string; value: string }) => ({ label: t.label, value: t.value })),
      certifications: (s.certifications ?? []).map((c: { name: string }) => c.name),
      applications: s.applications ?? [],
      notRecommendedFor: s.notRecommendedFor ?? [],
      faq: (s.faq ?? []).slice(0, 4).map((f: { question: string; answer: string }) => ({ q: f.question, a: stripMarkdown(f.answer) })),
    }
  },
})

function num(s: unknown): number { return parseFloat(String(s).replace(',', '.')) }

// Parsuje wymiar wariantu (szer × wys) w mm. Etykiety: attributes.Rozmiar lub name
// („102×152 mm"). Taśmy: Szerokość (mm) × Długość (m).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseDim(v: any): { w: number; h: number } | null {
  const rozmiar = v.attributes?.['Rozmiar'] || v.attributes?.['Wymiar etykiety']
  const re = /(\d+(?:[.,]\d+)?)\s*[×xX]\s*(\d+(?:[.,]\d+)?)/
  let mm = rozmiar ? String(rozmiar).match(re) : null
  if (!mm && v.attributes?.['Szerokość'] && v.attributes?.['Długość']) {
    const w = num(v.attributes['Szerokość']); const h = num(v.attributes['Długość'])
    if (w > 0 && h > 0) return { w, h }
  }
  if (!mm && v.name) mm = String(v.name).match(re)
  if (mm) { const w = num(mm[1]); const h = num(mm[2]); if (w > 0 && h > 0) return { w, h } }
  return null
}

export const findClosestSize = tool({
  description: 'Znajdź warianty serii o rozmiarze NAJBLIŻSZYM żądanemu (szer × wys w mm). Używaj ZAWSZE, gdy klient podaje rozmiar — NIGDY nie dobieraj rozmiaru ręcznie ani „na oko".',
  inputSchema: z.object({
    slug: z.string().describe('Slug serii (np. "z-ultimate-3000t-white")'),
    width: z.number().describe('Żądana szerokość w mm'),
    height: z.number().describe('Żądana wysokość (etykiety) lub długość w m (taśmy)'),
    limit: z.number().optional().default(5),
  }),
  execute: async ({ slug, width, height, limit }) => {
    const m = allMaterials().find(x => x.s.slug === slug)
    if (!m) return { error: `Nie znaleziono serii: ${slug}` }
    const product = products.find(p => p.id === m.s.productId)
    const variants = product?.variants ?? []
    const ranked = variants
      .map(v => {
        const d = parseDim(v)
        if (!d) return null
        return {
          partNumber: v.partNumber,
          size: `${d.w}×${d.h} mm`,
          distance: Math.round((Math.abs(d.w - width) + Math.abs(d.h - height)) * 10) / 10,
          availability: v.availability,
        }
      })
      .filter((x): x is NonNullable<typeof x> => x !== null)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, limit ?? 5)
    if (ranked.length === 0) return { error: 'Brak wariantów z rozpoznawalnym rozmiarem.' }
    return {
      series: m.s.title,
      requested: `${width}×${height} mm`,
      closest: ranked,
      note: 'Polecaj wariant o najmniejszej wartości distance. distance=0 oznacza dokładne trafienie.',
    }
  },
})

function findVariant(partNumber: string) {
  const product = products.find(p => p.variants?.some(v => v.partNumber === partNumber))
  const variant = product?.variants?.find(v => v.partNumber === partNumber)
  return { product, variant }
}

async function liveStock(partNumber: string) {
  try {
    const res = await fetch(`${getBaseUrl()}/api/stock?pn=${encodeURIComponent(partNumber)}`, {
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) return null
    const j = await res.json()
    const r = j.results?.[0] ?? j
    return {
      price: r.price ? Math.round(r.price * 100) / 100 : null,
      stockPL: r.stockPL ?? 0,
      stockEU: r.stockDE ?? 0,
    }
  } catch {
    return null
  }
}

export const checkMaterialStock = tool({
  description: 'Sprawdź aktualną cenę (netto PLN) i dostępność materiału po Part Number wariantu. Używaj ZAWSZE gdy klient pyta o cenę lub dostępność.',
  inputSchema: z.object({
    partNumber: z.string().describe('Part Number wariantu (np. "800261-105")'),
  }),
  execute: async ({ partNumber }) => {
    const { product, variant } = findVariant(partNumber)
    if (!variant) return { error: `Nie znaleziono wariantu o PN ${partNumber}.` }
    const live = await liveStock(partNumber)
    const stockPL = live?.stockPL ?? 0
    const stockEU = live?.stockEU ?? 0
    const available = live ? (stockPL > 0 || stockEU > 0) : variant.availability === 'available'
    // UWAGA: stan w magazynie EU = również DOSTĘPNA (tylko dłuższa wysyłka), NIE „na zamówienie".
    const delivery = stockPL > 0
      ? 'magazyn PL — wysyłka 24h'
      : stockEU > 0
        ? 'magazyn EU — wysyłka 2-3 dni'
        : null
    return {
      partNumber,
      name: `${product?.name ?? ''} ${variant.name}`.trim(),
      price: live?.price ?? variant.priceFrom ?? null,
      status: available ? 'Dostępna' : 'Niedostępna',
      available,
      delivery,
      hint: available ? null : 'Aktualnie niedostępna w magazynie — zapytaj o termin: takma@takma.com.pl',
    }
  },
})

export const prepareCartItem = tool({
  description: 'Przygotuj pozycję do dodania do koszyka (konkretny rozmiar materiału). Zwraca dane; klient potwierdzi dodanie w interfejsie. Użyj, gdy klient chce kupić/dodać konkretny wariant.',
  inputSchema: z.object({
    partNumber: z.string().describe('Part Number wariantu do dodania'),
    quantity: z.number().optional().default(1).describe('Liczba sztuk/rolek'),
  }),
  execute: async ({ partNumber, quantity }) => {
    const { product, variant } = findVariant(partNumber)
    if (!product || !variant) return { error: `Nie znaleziono wariantu o PN ${partNumber}.` }
    const live = await liveStock(partNumber)
    const price = live?.price ?? variant.priceFrom ?? null
    if (!price) return { error: 'Brak ceny dla tego wariantu — zaproponuj kontakt.' }
    return {
      // payload do koszyka (klient woła cartStore.addItem po potwierdzeniu)
      cartItem: {
        id: `${product.slug}__${partNumber}`,
        name: `${product.name} ${variant.name}`.trim(),
        slug: product.slug,
        image: product.images?.[0] ?? null,
        partNumber,
        priceNetto: price,
        categoryId: product.categoryId,
        quantity: quantity ?? 1,
      },
    }
  },
})

export const materialsTools = {
  searchMaterials,
  getMaterialSeries,
  findClosestSize,
  checkMaterialStock,
  prepareCartItem,
}
