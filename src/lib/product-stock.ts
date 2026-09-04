import { cache } from 'react'
import { getProductBySlug } from '@/data/products'
import { lookupUnifiedStock } from '@/lib/unified-stock'
import type { StockInfo } from '@/lib/ingram'

/** Jeden odczyt na render: metadata, JSON-LD i HTML otrzymują ten sam zestaw ofert. */
export const getProductStock = cache(async (slug: string): Promise<StockInfo[] | undefined> => {
  if (slug !== 'zebra-zd421t') return undefined
  const product = getProductBySlug(slug)
  const partNumbers = product?.variants?.map(variant => variant.partNumber) ?? []
  const response = await lookupUnifiedStock(partNumbers)
  // Do komponentów klienta nie przekazujemy cen zakupu u dystrybutora.
  return (response.body.results ?? []).map(({ ingramPrice: _purchasePrice, ...stock }) => stock)
})
