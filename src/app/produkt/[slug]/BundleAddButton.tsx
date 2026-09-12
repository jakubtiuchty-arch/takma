'use client'

import { useEffect, useState } from 'react'
import { useCartStore } from '@/store/cartStore'
import { CheckIcon, ShoppingCartIcon } from '@/components/ui/Icons'

interface BundleAddButtonProps {
  bundle: {
    id: string
    name: string
    slug: string
    image?: string
    partNumber?: string
    priceNetto: number
    categoryId: string
  }
  /** Pełna szerokość (boks na karcie drukarki) albo zwykły przycisk */
  block?: boolean
}

/** Dodaje zestaw do koszyka jako jedną pozycję w stałej cenie (bez live stocku: cena zestawu jest ustalona ręcznie). */
export default function BundleAddButton({ bundle, block }: BundleAddButtonProps) {
  const { addItem, isInCart, openDrawer } = useCartStore()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const inCart = mounted && isInCart(bundle.id)

  const handleClick = () => {
    if (!inCart) {
      addItem({
        id: bundle.id,
        name: bundle.name,
        slug: bundle.slug,
        image: bundle.image,
        partNumber: bundle.partNumber,
        priceNetto: bundle.priceNetto,
        categoryId: bundle.categoryId,
      })
    }
    openDrawer()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors ${
        inCart ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
      } ${block ? 'w-full' : ''}`}
    >
      {inCart ? <CheckIcon size={18} /> : <ShoppingCartIcon size={18} />}
      {inCart ? 'Zestaw w koszyku' : 'Zestaw do koszyka'}
    </button>
  )
}
