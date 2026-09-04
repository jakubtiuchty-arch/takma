'use client'

import type { Product } from '@/data/products'
import { productVariantSchema } from '@/lib/product-variant-offers'
import { useSmartPrice } from './SmartPriceContext'

export default function LiveProductSchema({ product }: { product: Product }) {
  const { stockData } = useSmartPrice()
  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify(productVariantSchema(product, Array.from(stockData.values()))).replace(/</g, '\\u003c'),
  }} />
}
