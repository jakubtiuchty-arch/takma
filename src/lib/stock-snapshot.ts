import { prisma } from '@/lib/db'

/**
 * Migawka StockCache do renderowania po stronie serwera (schema.org na stronach
 * wariantów).
 *
 * Po co: `priceFrom` w products.ts bywa nieaktualny, więc JSON-LD albo podawał
 * starą cenę, albo — gdy pola brakowało — pomijał `offers` w całości. Google
 * traktował takie strony jako produkty bez ceny: w sierpniu 2026 automatyczny
 * crawl utworzył z nich 305 ofert w Merchant Center, wszystkie odrzucone
 * („Missing product price").
 *
 * Dlaczego migawka, a nie zapytanie per strona: strony wariantów są statyczne
 * (generateStaticParams, ~2400 sztuk), więc każda pytałaby bazę osobno.
 * Tu leci JEDNO zapytanie na proces, spamiętane na 15 minut.
 *
 * Awaria bazy nie może wywalić strony — przy błędzie zwracamy pustą mapę,
 * a strona spada na `priceFrom` tak jak dotąd.
 */
export interface StockSnapshotRow {
  /** Cena netto w PLN (StockCache trzyma netto — brutto liczą feedy). */
  price: number | null
  availability: string | null
  totalStock: number
}

const TTL_MS = 15 * 60 * 1000
let cached: { at: number; map: Map<string, StockSnapshotRow> } | null = null
let inFlight: Promise<Map<string, StockSnapshotRow>> | null = null

async function load(): Promise<Map<string, StockSnapshotRow>> {
  const map = new Map<string, StockSnapshotRow>()
  try {
    const rows = await prisma.stockCache.findMany({
      where: { found: true },
      select: { partNumber: true, price: true, availability: true, totalStock: true },
    })
    for (const r of rows) {
      map.set(r.partNumber.toUpperCase(), {
        price: r.price ?? null,
        availability: r.availability ?? null,
        totalStock: r.totalStock ?? 0,
      })
    }
  } catch {
    // brak bazy (np. build bez DATABASE_URL) → pusta mapa, fallback na priceFrom
  }
  return map
}

export async function getStockSnapshot(): Promise<Map<string, StockSnapshotRow>> {
  if (cached && Date.now() - cached.at < TTL_MS) return cached.map
  if (!inFlight) {
    inFlight = load().then((map) => {
      cached = { at: Date.now(), map }
      inFlight = null
      return map
    })
  }
  return inFlight
}

/** Cena netto do JSON-LD: live ze StockCache, a gdy brak — statyczny priceFrom. */
export function schemaPrice(
  snapshot: Map<string, StockSnapshotRow>,
  partNumber: string,
  fallback?: number | null,
): number | null {
  const live = snapshot.get(partNumber.toUpperCase())
  if (live?.price && live.price > 0) return live.price
  return fallback && fallback > 0 ? fallback : null
}
