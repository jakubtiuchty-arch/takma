import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import {
  empikProductsByEans,
  empikImportOffersCsv,
  empikOfferImportInfo,
  empikOfferImportErrorReport,
} from '@/lib/empik/client'
import {
  collectEmpikCandidates,
  buildOffersCsv,
  PACK_SIZE_BY_SKU,
  EXCLUDED_SKUS,
  type EmpikOfferRow,
} from '@/lib/empik/offers'
import { empikGrossFromShopNet } from '@/lib/empik/pricing'
import { cappedAvailable } from '@/lib/allegro/stock'
import { isValidGtin } from '@/lib/allegro/gtin'

export const runtime = 'nodejs'
export const maxDuration = 300
export const dynamic = 'force-dynamic'

/**
 * Synchronizacja ofert Empik (Mirakl OF01) — jeden cron robi wszystko:
 *  - nowa karta w katalogu Empika dopasowana po EAN → oferta wystawia się sama,
 *  - zmiana ceny w StockCache → aktualizacja (cena = sklep × 1,08 × VAT),
 *  - stan 0 → oferta znika z Empika, stan wraca → oferta wraca (quantity w CSV).
 *
 * Tryb NORMAL: create/update po SKU, pełny zrzut wszystkich dopasowanych
 * materiałów przy każdym przebiegu (import plikowy Mirakla jest idempotentny).
 * Bez żywej ceny w StockCache NIE wysyłamy oferty (lepiej brak niż błędna cena).
 *
 * Diagnostyka: GET ?check=<import_id> zwraca status OF02 + raport błędów OF03.
 */
export async function GET(req: Request) {
  const checkId = new URL(req.url).searchParams.get('check')
  if (checkId) {
    const info = await empikOfferImportInfo(Number(checkId))
    let errorReport: string | null = null
    if (info.has_error_report) {
      errorReport = await empikOfferImportErrorReport(Number(checkId))
    }
    return NextResponse.json({ info, errorReport })
  }

  // 1) Kandydaci: etykiety + taśmy z Part Number
  const candidates = collectEmpikCandidates()
  const pns = candidates.map((c) => c.pn)

  // 2) EAN-y i żywe ceny/stany wsadowo
  const [eanRows, stockRows] = await Promise.all([
    prisma.productEan.findMany({
      where: { partNumber: { in: pns.map((p) => p.toUpperCase()) } },
      select: { partNumber: true, ean: true },
    }),
    prisma.stockCache.findMany({
      where: { partNumber: { in: pns } },
      select: { partNumber: true, price: true, totalStock: true, found: true },
    }),
  ])
  const eanByPN = new Map(eanRows.filter((r) => isValidGtin(r.ean)).map((r) => [r.partNumber, r.ean]))
  const stockByPN = new Map(stockRows.map((r) => [r.partNumber, r]))

  // 3) Które EAN-y mają kartę w katalogu Empika (P31)
  const withEan = candidates.filter((c) => eanByPN.has(c.pn.toUpperCase()))
  const cards = await empikProductsByEans(withEan.map((c) => eanByPN.get(c.pn.toUpperCase())!))

  // 4) Wiersze CSV — tylko dopasowane karty + żywa cena.
  //    Karty-wielopaki: cena × pack, ilość = pełne paczki ze stanu.
  //    SKU wykluczone (błędne karty): wiersz `delete`.
  const rows: EmpikOfferRow[] = []
  let skippedNoPrice = 0
  for (const c of withEan) {
    const ean = eanByPN.get(c.pn.toUpperCase())!
    if (!cards.has(ean)) continue
    if (EXCLUDED_SKUS.has(c.pn)) {
      rows.push({ sku: c.pn, ean, grossPrice: 0, quantity: 0, manufacturerId: c.product.manufacturerId, remove: true })
      continue
    }
    const sc = stockByPN.get(c.pn)
    if (!sc?.found || !sc.price || sc.price <= 0) {
      skippedNoPrice++
      continue
    }
    const pack = PACK_SIZE_BY_SKU[c.pn] ?? 1
    rows.push({
      sku: c.pn,
      ean,
      grossPrice: empikGrossFromShopNet(sc.price * pack),
      quantity: pack > 1 ? Math.floor(cappedAvailable(sc.totalStock) / pack) : cappedAvailable(sc.totalStock),
      manufacturerId: c.product.manufacturerId,
    })
  }

  if (rows.length === 0) {
    return NextResponse.json({ ok: true, candidates: candidates.length, matchedCards: 0, sent: 0 })
  }

  // 5) Import OF01
  const csv = buildOffersCsv(rows)
  const { import_id } = await empikImportOffersCsv(csv)

  return NextResponse.json({
    ok: true,
    candidates: candidates.length,
    withEan: withEan.length,
    matchedCards: cards.size,
    sent: rows.length,
    skippedNoPrice,
    importId: import_id,
  })
}
