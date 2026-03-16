import { tool } from 'ai'
import { z } from 'zod'
import { products, categories } from '@/data/products'
import { guides } from '@/data/guides'

// ─── Helper: simple text search scoring ──────────────────────────────────────

function searchScore(text: string, query: string): number {
  const lower = text.toLowerCase()
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  let score = 0
  for (const term of terms) {
    if (lower.includes(term)) score++
  }
  if (lower.includes(query.toLowerCase())) score += terms.length
  return score
}

// ─── Helper: strip product for token efficiency ──────────────────────────────

function stripProduct(p: typeof products[number]) {
  return {
    id: p.id,
    name: p.name,
    slug: p.slug,
    shortDescription: p.shortDescription,
    priceFrom: p.priceFrom,
    availability: p.availability,
    categoryId: p.categoryId,
    manufacturerId: p.manufacturerId,
    tags: p.tags,
    isNew: p.isNew,
    isBestseller: p.isBestseller,
  }
}

// ─── Faza 1: Narzędzia produktowe ────────────────────────────────────────────

export const searchProducts = tool({
  description: 'Szukaj produktów po nazwie, kategorii, zastosowaniu, producencie. Używaj gdy klient pyta o produkty.',
  inputSchema: z.object({
    query: z.string().describe('Fraza wyszukiwania — nazwa, model, zastosowanie, kategoria'),
    category: z.string().optional().describe('ID kategorii: drukarki-etykiet, terminale-mobilne, skanery-kodow, akcesoria'),
    manufacturer: z.string().optional().describe('ID producenta: zebra, honeywell, datalogic, newland, tsc'),
    limit: z.number().optional().default(10).describe('Maks. liczba wyników (domyślnie 10)'),
  }),
  execute: async ({ query, category, manufacturer, limit }) => {
    let filtered = [...products]

    if (category) {
      filtered = filtered.filter(p => p.categoryId === category)
    }
    if (manufacturer) {
      filtered = filtered.filter(p => p.manufacturerId === manufacturer)
    }

    const scored = filtered.map(p => {
      const searchText = [
        p.name,
        p.shortDescription,
        p.description,
        p.categoryId,
        p.manufacturerId,
        ...p.tags,
        ...p.applications,
        ...(p.variants?.map(v => v.partNumber + ' ' + v.name) ?? []),
        p.seoTitle ?? '',
      ].join(' ')

      return { product: p, score: searchScore(searchText, query) }
    })

    const results = scored
      .filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(s => stripProduct(s.product))

    const categoryName = categories.find(c => c.id === category)?.name
    return {
      results,
      totalFound: results.length,
      category: categoryName ?? null,
      hint: results.length === 0
        ? 'Nie znaleziono produktów. Spróbuj innych słów kluczowych.'
        : null,
    }
  },
})

export const getProductDetails = tool({
  description: 'Pobierz pełne dane produktu: opis, specyfikację, FAQ, warianty, akcesoria. Używaj gdy klient pyta o konkretny produkt.',
  inputSchema: z.object({
    slug: z.string().describe('Slug produktu (np. "zebra-zd421t", "zebra-tc22")'),
  }),
  execute: async ({ slug }) => {
    const product = products.find(p => p.slug === slug)
    if (!product) {
      return { error: `Nie znaleziono produktu o slug: ${slug}` }
    }

    const { images, imageDescriptions, description, ...rest } = product
    const shortDesc = description.length > 1500
      ? description.slice(0, 1500) + '...'
      : description

    return {
      ...rest,
      description: shortDesc,
      imageCount: images.length,
      url: `/produkt/${product.slug}`,
    }
  },
})

export const compareProducts = tool({
  description: 'Porównaj 2-3 produkty pod kątem specyfikacji, cen, zastosowań. Używaj gdy klient pyta o różnice.',
  inputSchema: z.object({
    slugs: z.array(z.string()).min(2).max(3).describe('Slugi produktów do porównania'),
  }),
  execute: async ({ slugs }) => {
    const found = slugs.map(slug => products.find(p => p.slug === slug)).filter(Boolean)

    if (found.length < 2) {
      return { error: 'Znaleziono mniej niż 2 produkty. Sprawdź slugi.' }
    }

    const productSpecs = found.map(p => {
      const specs: Record<string, string> = {}
      for (const s of p!.specifications) {
        specs[s.name] = s.value
      }
      return {
        name: p!.name,
        slug: p!.slug,
        priceFrom: p!.priceFrom,
        availability: p!.availability,
        tags: p!.tags,
        specs,
        variantCount: p!.variants?.length ?? 0,
        url: `/produkt/${p!.slug}`,
      }
    })

    const allSpecNames = new Set<string>()
    productSpecs.forEach(ps => Object.keys(ps.specs).forEach(k => allSpecNames.add(k)))

    return {
      products: productSpecs,
      specNames: Array.from(allSpecNames),
    }
  },
})

export const getGuideRecommendation = tool({
  description: 'Znajdź poradnik/artykuł pasujący do pytania klienta. Używaj gdy klient pyta ogólnie o wybór lub technologię.',
  inputSchema: z.object({
    topic: z.string().describe('Temat pytania klienta (np. "jak wybrać drukarkę", "termiczna vs termotransferowa")'),
  }),
  execute: async ({ topic }) => {
    const scored = guides.map(g => {
      const searchText = [g.title, g.excerpt, ...g.tags, g.seoTitle, g.seoDescription].join(' ')
      return { guide: g, score: searchScore(searchText, topic) }
    })

    const results = scored
      .filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(s => ({
        title: s.guide.title,
        slug: s.guide.slug,
        excerpt: s.guide.excerpt,
        category: s.guide.category,
        url: `/poradnik/${s.guide.slug}`,
      }))

    return {
      results,
      hint: results.length === 0
        ? 'Nie znaleziono pasujących poradników.'
        : null,
    }
  },
})

export const findProductByUseCase = tool({
  description: 'Znajdź produkty pasujące do konkretnego zastosowania/branży/budżetu. Używaj gdy klient opisuje potrzeby.',
  inputSchema: z.object({
    useCase: z.string().describe('Opis zastosowania (np. "drukarka do magazynu", "terminal do inwentaryzacji")'),
    budget: z.number().optional().describe('Maksymalny budżet netto PLN'),
    features: z.array(z.string()).optional().describe('Wymagane cechy (np. ["Wi-Fi", "IP65", "Android"])'),
  }),
  execute: async ({ useCase, budget, features }) => {
    const tagMap: Record<string, string[]> = {
      'magazyn': ['magazyn', 'logistyka'],
      'sklep': ['retail'],
      'produkcja': ['produkcja'],
      'logistyka': ['logistyka', 'magazyn'],
      'szpital': ['healthcare'],
      'apteka': ['healthcare'],
      'outdoor': ['outdoor'],
      'kuriersk': ['logistyka', 'outdoor'],
      'inwentaryzacja': ['magazyn', 'retail'],
    }

    const useCaseLower = useCase.toLowerCase()
    let matchTags: string[] = []
    for (const [keyword, tags] of Object.entries(tagMap)) {
      if (useCaseLower.includes(keyword)) {
        matchTags = [...matchTags, ...tags]
      }
    }

    const scored = products
      .filter(p => p.categoryId !== 'akcesoria')
      .filter(p => !budget || !p.priceFrom || p.priceFrom <= budget)
      .map(p => {
        let score = 0

        for (const tag of matchTags) {
          if ((p.tags as string[]).includes(tag)) score += 3
        }

        score += searchScore([...p.applications, p.shortDescription, p.description].join(' '), useCase) * 2

        if (features) {
          const specText = p.specifications.map(s => s.name + ' ' + s.value).join(' ').toLowerCase()
          const descText = (p.shortDescription + ' ' + p.description).toLowerCase()
          for (const feat of features) {
            if (specText.includes(feat.toLowerCase()) || descText.includes(feat.toLowerCase())) {
              score += 2
            }
          }
        }

        if (p.availability === 'available') score += 1

        return { product: p, score }
      })
      .filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)

    return {
      recommendations: scored.map(s => ({
        name: s.product.name,
        slug: s.product.slug,
        shortDescription: s.product.shortDescription,
        priceFrom: s.product.priceFrom,
        availability: s.product.availability,
        tags: s.product.tags,
        matchScore: s.score,
        url: `/produkt/${s.product.slug}`,
      })),
      hint: scored.length === 0
        ? 'Nie znaleziono produktów pasujących do opisu. Spróbuj opisać potrzeby innymi słowami.'
        : null,
    }
  },
})

// ─── Faza 2: Narzędzia stockowe (live dane) ─────────────────────────────────

function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_BASE_URL) return process.env.NEXT_PUBLIC_BASE_URL
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return 'http://localhost:3000'
}

export const checkStock = tool({
  description: 'Sprawdź dostępność i cenę produktu w magazynie (PL + EU). Używaj ZAWSZE gdy klient pyta o dostępność lub cenę.',
  inputSchema: z.object({
    partNumber: z.string().describe('Part Number produktu (np. "ZD4A042-30EM00EZ")'),
  }),
  execute: async ({ partNumber }) => {
    try {
      const res = await fetch(`${getBaseUrl()}/api/stock?pn=${encodeURIComponent(partNumber)}`, {
        cache: 'no-store',
      })

      if (!res.ok) {
        return { error: 'Nie udało się sprawdzić stanu magazynowego. Spróbuj ponownie.' }
      }

      const data = await res.json()

      return {
        partNumber,
        stockPL: data.stockPL ?? 0,
        stockEU: data.stockDE ?? 0,
        price: data.price ? Math.round(data.price * 100) / 100 : null,
        available: (data.stockPL ?? 0) > 0 || (data.stockDE ?? 0) > 0,
        hint: (data.stockPL ?? 0) === 0 && (data.stockDE ?? 0) === 0
          ? 'Produkt aktualnie niedostępny. Zapytaj o termin dostawy: takma@takma.com.pl'
          : null,
      }
    } catch {
      return { error: 'Błąd połączenia z API magazynowym.' }
    }
  },
})

export const checkVariantAvailability = tool({
  description: 'Sprawdź dostępność wszystkich wariantów produktu. Używaj gdy klient pyta o konkretny model/konfigurację.',
  inputSchema: z.object({
    slug: z.string().describe('Slug produktu (np. "zebra-zd421t")'),
  }),
  execute: async ({ slug }) => {
    const product = products.find(p => p.slug === slug)
    if (!product) {
      return { error: `Nie znaleziono produktu: ${slug}` }
    }

    if (!product.variants || product.variants.length === 0) {
      return {
        productName: product.name,
        message: 'Produkt nie ma wariantów.',
        priceFrom: product.priceFrom,
        availability: product.availability,
      }
    }

    const baseUrl = getBaseUrl()
    const variantsToCheck = product.variants.slice(0, 10)
    const results = await Promise.all(
      variantsToCheck.map(async (v) => {
        try {
          const res = await fetch(
            `${baseUrl}/api/stock?pn=${encodeURIComponent(v.partNumber)}`,
            { cache: 'no-store' }
          )
          if (!res.ok) return { partNumber: v.partNumber, name: v.name, error: true as const }
          const data = await res.json()
          return {
            partNumber: v.partNumber,
            name: v.name,
            attributes: v.attributes,
            stockPL: data.stockPL ?? 0,
            stockEU: data.stockDE ?? 0,
            price: data.price ? Math.round(data.price * 100) / 100 : v.priceFrom,
            available: (data.stockPL ?? 0) > 0 || (data.stockDE ?? 0) > 0,
          }
        } catch {
          return {
            partNumber: v.partNumber,
            name: v.name,
            attributes: v.attributes,
            price: v.priceFrom,
            available: v.availability === 'available',
          }
        }
      })
    )

    return {
      productName: product.name,
      url: `/produkt/${product.slug}`,
      variants: results,
      totalVariants: product.variants.length,
    }
  },
})

// ─── Faza 3: Narzędzia RFQ (wyceny) ─────────────────────────────────────────

export const createQuoteDraft = tool({
  description: 'Utwórz wstępną wycenę dla klienta. Pokazuje podsumowanie z cenami. NIE zapisuje do bazy.',
  inputSchema: z.object({
    items: z.array(z.object({
      slug: z.string().describe('Slug produktu'),
      partNumber: z.string().optional().describe('Konkretny PN wariantu'),
      quantity: z.number().min(1).describe('Ilość sztuk'),
    })).min(1).describe('Lista produktów do wyceny'),
  }),
  execute: async ({ items }) => {
    const baseUrl = getBaseUrl()

    const lineItems = await Promise.all(
      items.map(async (item) => {
        const product = products.find(p => p.slug === item.slug)
        if (!product) {
          return { name: item.slug, error: 'Nie znaleziono produktu' as const }
        }

        let unitPrice = product.priceFrom
        let partNumber = item.partNumber

        if (partNumber && product.variants) {
          const variant = product.variants.find(v => v.partNumber === partNumber)
          if (variant?.priceFrom) unitPrice = variant.priceFrom
        } else if (product.variants?.[0]) {
          partNumber = product.variants[0].partNumber
        }

        if (partNumber) {
          try {
            const res = await fetch(
              `${baseUrl}/api/stock?pn=${encodeURIComponent(partNumber)}`,
              { cache: 'no-store' }
            )
            if (res.ok) {
              const data = await res.json()
              if (data.price) unitPrice = Math.round(data.price * 100) / 100
            }
          } catch {
            // Use static price as fallback
          }
        }

        const total = unitPrice ? unitPrice * item.quantity : null

        return {
          name: product.name,
          partNumber: partNumber ?? '—',
          quantity: item.quantity,
          unitPrice: unitPrice ?? null,
          total,
        }
      })
    )

    const validItems = lineItems.filter(
      (li): li is { name: string; partNumber: string; quantity: number; unitPrice: number; total: number } =>
        'total' in li && li.total !== null && li.total !== undefined
    )
    const subtotal = validItems.reduce((sum, li) => sum + li.total, 0)
    const vat = Math.round(subtotal * 0.23 * 100) / 100
    const totalBrutto = Math.round((subtotal + vat) * 100) / 100

    return {
      items: lineItems,
      subtotalNetto: Math.round(subtotal * 100) / 100,
      vat23: vat,
      totalBrutto,
      currency: 'PLN',
      note: 'Wycena wstępna — ceny mogą się zmienić. Finalna oferta zostanie przygotowana przez zespół TAKMA.',
    }
  },
})

export const submitRfqToAdmin = tool({
  description: 'Wyślij zapytanie ofertowe (RFQ) do zespołu TAKMA. Wymaga email klienta.',
  inputSchema: z.object({
    items: z.array(z.object({
      name: z.string(),
      partNumber: z.string().optional(),
      quantity: z.number(),
    })).min(1).describe('Lista produktów'),
    customerEmail: z.string().email().describe('Email klienta'),
    customerName: z.string().describe('Nazwa firmy lub imię klienta'),
    message: z.string().optional().describe('Dodatkowa wiadomość od klienta'),
  }),
  execute: async ({ items, customerEmail, customerName, message }) => {
    try {
      const baseUrl = getBaseUrl()

      const itemsText = items
        .map(i => `- ${i.name}${i.partNumber ? ` (${i.partNumber})` : ''} x ${i.quantity} szt.`)
        .join('\n')

      const fullMessage = [
        `ZAPYTANIE OFERTOWE z czatu AI`,
        ``,
        `Klient: ${customerName}`,
        `Email: ${customerEmail}`,
        ``,
        `Produkty:`,
        itemsText,
        message ? `\nWiadomość: ${message}` : '',
      ].join('\n')

      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: customerName,
          email: customerEmail,
          phone: '',
          company: customerName,
          message: fullMessage,
          _hp: '',
          _ts: Date.now() - 10000,
        }),
      })

      if (!res.ok) {
        return { sent: false, error: 'Nie udało się wysłać zapytania. Prosimy o kontakt: takma@takma.com.pl' }
      }

      return {
        sent: true,
        message: `Zapytanie ofertowe zostało wysłane do zespołu TAKMA. Odpowiemy na adres ${customerEmail} w ciągu 1 dnia roboczego.`,
      }
    } catch {
      return { sent: false, error: 'Błąd wysyłki. Prosimy o kontakt: takma@takma.com.pl lub 730 500 668' }
    }
  },
})

// ─── Export all tools ────────────────────────────────────────────────────────

export const chatTools = {
  searchProducts,
  getProductDetails,
  compareProducts,
  getGuideRecommendation,
  findProductByUseCase,
  checkStock,
  checkVariantAvailability,
  createQuoteDraft,
  submitRfqToAdmin,
}
