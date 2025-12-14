'use client'

import { ProductGrid } from '@/components/product'
import { Product } from '@/data/products'

interface RelatedProductsProps {
  title: string
  products: Product[]
}

export default function RelatedProducts({ title, products }: RelatedProductsProps) {
  if (products.length === 0) return null

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <ProductGrid products={products} columns={4} />
    </section>
  )
}
