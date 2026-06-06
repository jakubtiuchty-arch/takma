import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { allegroFetch } from '@/lib/allegro/client'
import { cappedAvailable } from '@/lib/allegro/stock'
import { ALLEGRO_ENV } from '@/lib/allegro/auth'

export const runtime = 'nodejs'
export const maxDuration = 300
export const dynamic = 'force-dynamic'

/**
 * Synchronizacja stanów ofert Allegro z żywym StockCache.
 *
 * Dla każdej wystawionej oferty (z allegroId): available = min(totalStock, 30).
 *  - stan spadł do 0  → Allegro automatycznie kończy ofertę (pauza)
 *  - stan wrócił (0 → >0) → PATCH stock + publication ACTIVE (wznowienie);
 *    gdy oferta to jeszcze szkic (nieaktywowana), wznowienie się nie uda —
 *    wtedy tylko aktualizujemy stan (fallback).
 *
 * Aktualizujemy tylko oferty, których stan się ZMIENIŁ (pole stockAvailable),
 * żeby nie bić w API bez potrzeby. Uruchamiane cronem po stock-sync.
 */
export async function GET() {
  const offers = await prisma.allegroOffer.findMany({
    where: { environment: ALLEGRO_ENV, allegroId: { not: null }, status: { not: 'ERROR' } },
    select: { partNumber: true, allegroId: true, stockAvailable: true },
  })
  if (offers.length === 0) return NextResponse.json({ ok: true, checked: 0, updated: 0 })

  // Żywe stany jednym zapytaniem
  const pns = offers.map((o) => o.partNumber)
  const stockRows = await prisma.stockCache.findMany({
    where: { partNumber: { in: pns } },
    select: { partNumber: true, totalStock: true },
  })
  const stockByPN = new Map(stockRows.map((r) => [r.partNumber, r.totalStock]))

  let updated = 0,
    revived = 0,
    paused = 0,
    errors = 0

  for (const o of offers) {
    const available = cappedAvailable(stockByPN.get(o.partNumber))
    if (available === o.stockAvailable) continue // bez zmian

    const reviving = (o.stockAvailable ?? 0) === 0 && available > 0
    try {
      if (reviving) {
        try {
          await allegroFetch(`/sale/product-offers/${o.allegroId}`, {
            method: 'PATCH',
            body: JSON.stringify({ stock: { available }, publication: { status: 'ACTIVE' } }),
          })
          revived++
        } catch {
          // szkic jeszcze nieaktywowany — tylko zaktualizuj stan
          await allegroFetch(`/sale/product-offers/${o.allegroId}`, {
            method: 'PATCH',
            body: JSON.stringify({ stock: { available } }),
          })
        }
      } else {
        await allegroFetch(`/sale/product-offers/${o.allegroId}`, {
          method: 'PATCH',
          body: JSON.stringify({ stock: { available } }),
        })
        if (available === 0) paused++
      }
      await prisma.allegroOffer.update({
        where: { environment_partNumber: { environment: ALLEGRO_ENV, partNumber: o.partNumber } },
        data: { stockAvailable: available },
      })
      updated++
    } catch (e) {
      errors++
      console.error(`[Allegro Stock] ${o.partNumber}:`, (e as Error).message)
    }
  }

  return NextResponse.json({ ok: true, checked: offers.length, updated, revived, paused, errors })
}
