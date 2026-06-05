import { prisma } from '@/lib/db'

/**
 * Cennik ofert Allegro dla TAKMA.
 *
 * Reguła (ustalona 2026-06-05): cena na Allegro = cena ze sklepu + 12%
 * (pokrycie prowizji Allegro ~12%). Źródłem ceny sklepu jest ZAWSZE
 * `StockCache.price` (żywa cena netto z marżą, aktualizowana cronem z Ingrama) —
 * NIGDY statyczny `priceFrom` z danych produktu (jest niewiarygodny: bywa
 * wielokrotnie zawyżony, np. Z-Essentials 500D priceFrom 1346 zł vs realne 61 zł).
 *
 * Allegro wyświetla ceny BRUTTO, więc do prezentacji liczymy też VAT 23%.
 */
export const ALLEGRO_MARKUP = 1.12 // cena sklepu × 1.12 (pokrycie prowizji Allegro)
export const VAT_RATE = 1.23

export interface AllegroPrice {
  net: number // netto PLN
  gross: number // brutto PLN (z VAT 23%)
}

function round2(n: number): number {
  return Math.round(n * 100) / 100
}

/** Cena Allegro z ceny sklepu netto (StockCache.price). */
export function allegroPriceFromShopNet(shopNet: number): AllegroPrice {
  const net = round2(shopNet * ALLEGRO_MARKUP)
  return { net, gross: round2(net * VAT_RATE) }
}

/**
 * Cena Allegro dla konkretnego Part Number — czyta żywą cenę sklepu ze StockCache.
 * Zwraca null, gdy brak ceny w cache (wtedy NIE publikujemy/aktualizujemy oferty —
 * lepiej pominąć niż wystawić z błędną ceną).
 */
export async function allegroPriceForPN(partNumber: string): Promise<AllegroPrice | null> {
  try {
    const row = await prisma.stockCache.findUnique({
      where: { partNumber },
      select: { price: true },
    })
    if (!row?.price) return null
    return allegroPriceFromShopNet(row.price)
  } catch {
    return null
  }
}
