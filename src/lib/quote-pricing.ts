import { prisma } from '@/lib/db'
import { promoBySku, MAX_PROMO_QTY } from '@/data/promos'

/**
 * Weryfikacja cen pozycji pochodzących z oferty handlowej.
 *
 * Koszyk jest po stronie przeglądarki, więc ceny, które przychodzą do akcji
 * checkoutu, są w praktyce danymi od klienta. Dla pozycji oznaczonych numerem
 * oferty nie ufamy im w ogóle — czytamy kwoty z bazy i podmieniamy. Dzięki temu
 * link „zamów z oferty" nie staje się sposobem na kupno czegokolwiek za złotówkę.
 *
 * Cena z oferty ma pierwszeństwo także wtedy, gdy jest WYŻSZA od przysłanej:
 * obowiązuje to, co klient dostał w mailu, a nie to, co ma w pamięci przeglądarki.
 */

export interface PricedItem {
  productId: string
  partNumber?: string | null
  quantity: number
  priceNetto: number // PLN
  quoteNumber?: string | null
  promoSku?: string | null
}

/**
 * Ceny promocyjne liczone od nowa z promos.ts — tak samo jak przy ofertach nie
 * ufamy kwocie z koszyka. Powyżej MAX_PROMO_QTY promocja nie obowiązuje i cenę
 * ustala zwykła ścieżka (żywy cennik), więc pozycja zostaje bez zmian.
 */
export function applyPromoPricing<T extends PricedItem>(items: T[]): T[] {
  return items.map(item => {
    if (!item.promoSku) return item
    const promo = promoBySku(item.promoSku)
    if (!promo) return item                       // promocja wygasła lub zmyślony SKU
    if (item.quantity > MAX_PROMO_QTY) return item
    return { ...item, priceNetto: promo.promoNetto }
  })
}

export class QuotePricingError extends Error {}

export async function applyQuotePricing<T extends PricedItem>(items: T[]): Promise<T[]> {
  const numbers = Array.from(
    new Set(items.map((i) => i.quoteNumber).filter((n): n is string => !!n)),
  )
  if (numbers.length === 0) return items

  const quotes = await prisma.quote.findMany({
    where: { quoteNumber: { in: numbers } },
    include: { items: true },
  })

  const now = new Date()
  const byNumber = new Map(quotes.map((q) => [q.quoteNumber, q]))

  return items.map((item) => {
    if (!item.quoteNumber) return item

    const quote = byNumber.get(item.quoteNumber)
    if (!quote) {
      throw new QuotePricingError(`Nie znaleźliśmy oferty ${item.quoteNumber}.`)
    }
    if (quote.validUntil < now) {
      throw new QuotePricingError(
        `Oferta ${item.quoteNumber} straciła ważność ${quote.validUntil.toLocaleDateString('pl-PL')}. ` +
        'Napisz do nas po aktualną wycenę.',
      )
    }

    const line =
      quote.items.find((qi) => !!item.partNumber && qi.partNumber === item.partNumber) ??
      quote.items.find((qi) => !!qi.productId && qi.productId === item.productId)

    if (!line) {
      throw new QuotePricingError(
        `Pozycja „${item.productId}" nie należy do oferty ${item.quoteNumber}.`,
      )
    }

    return { ...item, priceNetto: line.priceNetto / 100 }
  })
}
