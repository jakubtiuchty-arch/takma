import { products } from '@/data/products'

/**
 * Zasada: baner „Autoryzowany serwis Zebra” (w mailu ofertowym i w PDF) pojawia
 * się WYŁĄCZNIE wtedy, gdy w ofercie jest sprzęt Zebry. Przy innych producentach
 * baneru nie ma — bez względu na ustawienia w panelu.
 *
 * Rozpoznanie: pozycja z katalogu → producent produktu; pozycja ręczna → słowo
 * „Zebra” w nazwie.
 */
export interface QuoteItemLike {
  productName: string
  productId?: string | null
}

const zebraIds = new Set(products.filter(p => p.manufacturerId === 'zebra').map(p => p.id))

export function quoteHasZebra(items: QuoteItemLike[]): boolean {
  return items.some(
    item => (item.productId ? zebraIds.has(item.productId) : false) || /\bzebra\b/i.test(item.productName),
  )
}
