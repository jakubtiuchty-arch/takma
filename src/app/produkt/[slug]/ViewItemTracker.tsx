'use client'

import { useEffect } from 'react'
import { trackViewItem } from '@/lib/ga-events'

interface Props {
  itemId: string
  itemName: string
  itemCategory?: string
  price?: number
}

export default function ViewItemTracker({ itemId, itemName, itemCategory, price }: Props) {
  useEffect(() => {
    trackViewItem({
      item_id: itemId,
      item_name: itemName,
      item_category: itemCategory,
      price,
    })
  }, [itemId, itemName, itemCategory, price])

  return null
}
