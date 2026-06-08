import { allegroFetch } from './client'
import { prisma } from '@/lib/db'
import { ALLEGRO_ENV } from './auth'
import { resolveByPN } from './publisher'

export type MatchKind = 'exact' | 'size' | 'none'

export interface ExistingOffer {
  id: string
  name: string
  status: string
  price?: string
  stock?: number
  match: MatchKind          // czy mamy żywy nowy odpowiednik
  replacement?: string      // nazwa nowego odpowiednika (jeśli jest)
}

interface AllegroOfferListItem {
  id: string
  name?: string
  publication?: { status?: string }
  sellingMode?: { price?: { amount?: string } }
  stock?: { available?: number }
}

/** Czy nazwa to materiał (taśma/etykieta), a NIE sprzęt (drukarka, plan, akumulator…). */
function isMaterialName(name: string): boolean {
  if (!/etykiet|taśm|tasm|ribbon/i.test(name)) return false
  if (/drukark|plan serwis|akumulator|bater|etui|uchwyt|stacja|kabel|zasilacz|czytnik|skaner|terminal/i.test(name))
    return false
  return true
}

/** Klucz rozmiaru „WxH" z dwóch pierwszych liczb (np. „57 mm x 32 mm" → „57x32"). */
function sizeKey(s?: string): string | null {
  if (!s) return null
  const m = s.match(/(\d+(?:[.,]\d+)?)\s*(?:mm|m)?\s*[x×X]\s*(\d+(?:[.,]\d+)?)/)
  if (!m) return null
  const norm = (x: string) => x.replace(',', '.').replace(/\.0+$/, '')
  return `${norm(m[1])}x${norm(m[2])}`
}

// Tokeny serii materiałów — do potwierdzenia, że nowy odpowiednik to ta sama linia.
const SERIES_TOKENS = [
  'z-perform', 'z-select', 'z-ultimate', 'z-essentials', 'polypro', 'polye', 'polyo',
  '8000t', '8000d', '1000t', '1000d', '2000t', '3000t', '3100t', '4000t',
  '2300', '2100', '3200', '3400', '4800', '5095', '5100', '5555', '6000',
]
function seriesTokens(name: string): Set<string> {
  const lower = name.toLowerCase()
  return new Set(SERIES_TOKENS.filter((t) => lower.includes(t)))
}

/** Rozmiar wariantu z naszej oferty (etykieta: Rozmiar; taśma: Szerokość×Długość). */
function variantSizeKey(pn: string): { key: string | null; name: string } | null {
  const r = resolveByPN(pn)
  if (!r) return null
  const a = r.variant.attributes || {}
  if (a['Rozmiar']) return { key: sizeKey(a['Rozmiar']), name: r.product.name }
  if (a['Szerokość'] && a['Długość']) return { key: sizeKey(`${a['Szerokość']}x${a['Długość']}`), name: r.product.name }
  return { key: null, name: r.product.name }
}

/**
 * Stare oferty materiałów na koncie — oferty taśm/etykiet, które NIE pochodzą z
 * naszej integracji (brak allegroId w AllegroOffer). Każda dostaje `match`:
 *  - exact: mamy żywą (ACTIVE) ofertę o tym samym rozmiarze I serii → bezpieczne wygaszenie,
 *  - size:  mamy żywą ofertę o tym rozmiarze, ale inna/niepewna seria → sprawdź,
 *  - none:  brak żywego odpowiednika → wygaszenie zostawi lukę.
 */
export async function listOldMaterialOffers(): Promise<ExistingOffer[]> {
  const all: AllegroOfferListItem[] = []
  let offset = 0
  for (let guard = 0; guard < 50; guard++) {
    const j = await allegroFetch<{ offers?: AllegroOfferListItem[] }>(`/sale/offers?limit=100&offset=${offset}`)
    const batch = j.offers || []
    all.push(...batch)
    if (batch.length < 100) break
    offset += 100
  }

  // Nasze oferty: do wykluczenia (wszystkie z allegroId) + indeks żywych (ACTIVE) po rozmiarze.
  const ours = await prisma.allegroOffer.findMany({
    where: { environment: ALLEGRO_ENV, allegroId: { not: null } },
    select: { allegroId: true, partNumber: true, status: true },
  })
  const ourIds = new Set(ours.map((o) => o.allegroId))

  const bySize = new Map<string, Array<{ name: string; tokens: Set<string> }>>()
  for (const o of ours) {
    if (o.status !== 'ACTIVE') continue
    const v = variantSizeKey(o.partNumber)
    if (!v?.key) continue
    const entry = { name: v.name, tokens: seriesTokens(v.name) }
    const arr = bySize.get(v.key)
    if (arr) arr.push(entry)
    else bySize.set(v.key, [entry])
  }

  const matchOf = (name: string): { match: MatchKind; replacement?: string } => {
    const key = sizeKey(name)
    const candidates = key ? bySize.get(key) : undefined
    if (!candidates || candidates.length === 0) return { match: 'none' }
    const oldTokens = seriesTokens(name)
    const exact = candidates.find((c) => Array.from(c.tokens).some((t) => oldTokens.has(t)))
    if (exact) return { match: 'exact', replacement: exact.name }
    return { match: 'size', replacement: candidates[0].name }
  }

  return all
    .filter((o) => o.name && isMaterialName(o.name) && !ourIds.has(o.id))
    .map((o) => {
      const m = matchOf(o.name || '')
      return {
        id: o.id,
        name: o.name || '',
        status: o.publication?.status || '',
        price: o.sellingMode?.price?.amount,
        stock: o.stock?.available,
        match: m.match,
        replacement: m.replacement,
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name, 'pl'))
}

/** Zakończ ofertę (publication ENDED). */
export async function endOffer(offerId: string): Promise<void> {
  await allegroFetch(`/sale/product-offers/${offerId}`, {
    method: 'PATCH',
    body: JSON.stringify({ publication: { status: 'ENDED' } }),
  })
}
