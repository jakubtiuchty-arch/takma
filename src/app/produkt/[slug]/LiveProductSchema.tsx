'use client'

import type { Product } from '@/data/products'
import { productVariantSchema } from '@/lib/product-variant-offers'
import { useSmartPrice } from './SmartPriceContext'

export default function LiveProductSchema({ product }: { product: Product }) {
  const { stockData } = useSmartPrice()
  const schema = productVariantSchema(product, Array.from(stockData.values()))
  // Bez żadnej ceny nie ma Product ani ProductGroup (Google wymaga offers), więc nie ma też skryptu.
  if (!schema) return null
  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
  }} />
}
