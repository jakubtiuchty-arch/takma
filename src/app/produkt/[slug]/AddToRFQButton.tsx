'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui'
import { PlusIcon, CheckIcon } from '@/components/ui/Icons'
import { useRFQStore } from '@/store/rfqStore'
import { Product } from '@/data/products'

interface AddToRFQButtonProps {
  product: Product
  compact?: boolean
}

export default function AddToRFQButton({ product, compact = false }: AddToRFQButtonProps) {
  const { addItem, isInRFQ } = useRFQStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const inRFQ = mounted ? isInRFQ(product.id) : false

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
    })
  }

  if (compact) {
    return (
      <Button
        fullWidth
        variant={inRFQ ? 'secondary' : 'primary'}
        onClick={handleAdd}
        leftIcon={inRFQ ? <CheckIcon size={18} /> : <PlusIcon size={18} />}
      >
        {inRFQ ? 'W zapytaniu' : 'Dodaj do zapytania'}
      </Button>
    )
  }

  return (
    <Button
      size="lg"
      fullWidth
      variant={inRFQ ? 'secondary' : 'primary'}
      onClick={handleAdd}
      leftIcon={inRFQ ? <CheckIcon size={20} /> : <PlusIcon size={20} />}
    >
      {inRFQ ? 'Produkt w zapytaniu' : 'Dodaj do zapytania ofertowego'}
    </Button>
  )
}
