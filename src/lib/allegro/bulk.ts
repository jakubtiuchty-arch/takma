import { prisma } from '@/lib/db'
import { ALLEGRO_ENV } from './auth'
import { isValidGtin } from './gtin'
import { publishDraft, labelProducts } from './publisher'
import { transferRibbonProducts } from '@/data/transfer-ribbon-products'

/**
 * PN taśm + etykiet kwalifikujące się do hurtowego wystawienia:
 *  - mają poprawny GTIN (inaczej Allegro nie aktywuje),
 *  - mają stan magazynowy > 0 (Allegro nie wystawi oferty z ilością 0 → „Invalid quantity").
 */
export async function candidatePNsWithGtin(): Promise<string[]> {
  const pns: string[] = []
  for (const p of transferRibbonProducts) for (const v of p.variants || []) pns.push(v.partNumber)
  for (const p of labelProducts) for (const v of p.variants || []) pns.push(v.partNumber)
  const unique = Array.from(new Set(pns))

  const gtin = new Set<string>()
  const inStock = new Set<string>() // PN (oryginalna wielkość liter) z totalStock > 0
  for (let i = 0; i < unique.length; i += 500) {
    const chunk = unique.slice(i, i + 500)
    const [eanRows, stockRows] = await Promise.all([
      prisma.productEan.findMany({
        where: { partNumber: { in: chunk.map((s) => s.toUpperCase()) } },
        select: { partNumber: true, ean: true },
      }),
      prisma.stockCache.findMany({
        where: { partNumber: { in: chunk }, totalStock: { gt: 0 } },
        select: { partNumber: true },
      }),
    ])
    for (const r of eanRows) if (isValidGtin(r.ean)) gtin.add(r.partNumber)
    for (const r of stockRows) inStock.add(r.partNumber)
  }
  return unique.filter((pn) => gtin.has(pn.toUpperCase()) && inStock.has(pn))
}

/** Postęp hurtowego wystawiania (bez publikowania) — do wyświetlenia. */
export async function getBulkProgress(): Promise<{ total: number; published: number; errors: number; remaining: number }> {
  const candidates = await candidatePNsWithGtin()
  let published = 0
  let errors = 0
  for (let i = 0; i < candidates.length; i += 500) {
    const chunk = candidates.slice(i, i + 500)
    const rows = await prisma.allegroOffer.findMany({
      where: { environment: ALLEGRO_ENV, partNumber: { in: chunk } },
      select: { status: true },
    })
    for (const r of rows) {
      if (r.status === 'DRAFT' || r.status === 'ACTIVE') published++
      else if (r.status === 'ERROR') errors++
    }
  }
  return { total: candidates.length, published, errors, remaining: Math.max(0, candidates.length - published) }
}

export interface BulkProgress {
  totalCandidates: number
  alreadyPublished: number
  processed: number
  succeeded: number
  failed: number
  remaining: number
}

/**
 * Jedna paczka hurtowego wystawiania: bierze do `limit` wariantów z GTIN, które
 * nie są jeszcze wystawione (brak rekordu DRAFT/ACTIVE w AllegroOffer), i publikuje.
 * Idempotentne — kolejne wywołania kończą resztę.
 */
export async function bulkPublishBatch(limit = 30): Promise<BulkProgress> {
  const candidates = await candidatePNsWithGtin()

  const publishedSet = new Set<string>()
  for (let i = 0; i < candidates.length; i += 500) {
    const chunk = candidates.slice(i, i + 500)
    const rows = await prisma.allegroOffer.findMany({
      where: { environment: ALLEGRO_ENV, partNumber: { in: chunk }, status: { in: ['DRAFT', 'ACTIVE'] } },
      select: { partNumber: true },
    })
    rows.forEach((r) => publishedSet.add(r.partNumber))
  }

  const todo = candidates.filter((pn) => !publishedSet.has(pn)).slice(0, limit)
  let succeeded = 0
  let failed = 0
  for (const pn of todo) {
    const r = await publishDraft(pn)
    if (r.ok) succeeded++
    else failed++
  }

  return {
    totalCandidates: candidates.length,
    alreadyPublished: publishedSet.size,
    processed: todo.length,
    succeeded,
    failed,
    remaining: Math.max(0, candidates.length - publishedSet.size - todo.length),
  }
}
