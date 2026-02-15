'use client'

import { useEffect, useState, useRef } from 'react'
import { Button } from '@/components/ui'
import { PlusIcon, CheckIcon, BellIcon } from '@/components/ui/Icons'
import { useRFQStore } from '@/store/rfqStore'
import { Product } from '@/data/products'
import { useStockData } from './StockInfo'

interface AddToRFQButtonProps {
  product: Product
  compact?: boolean
}

function NotifyForm({ partNumber, productName, compact }: { partNumber: string; productName: string; compact?: boolean }) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('sending')
    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, partNumber, productName }),
      })
      if (res.ok) {
        setStatus('done')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="flex items-center justify-center gap-2 py-3 px-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium">
        <CheckIcon size={18} />
        Powiadomimy Cię o dostępności
      </div>
    )
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className={`w-full flex items-center justify-center gap-2 font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-xl transition-colors ${
          compact ? 'py-2.5 px-4 text-sm' : 'py-3.5 px-6 text-base'
        }`}
      >
        <BellIcon size={compact ? 18 : 20} />
        Powiadom o dostępności
      </button>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        ref={inputRef}
        type="email"
        placeholder="Twój adres email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={`flex-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
          compact ? 'px-3 py-2.5 text-sm' : 'px-4 py-3 text-sm'
        }`}
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className={`font-medium text-white bg-amber-600 hover:bg-amber-700 disabled:opacity-50 rounded-xl transition-colors ${
          compact ? 'px-4 py-2.5 text-sm' : 'px-5 py-3 text-sm'
        }`}
      >
        {status === 'sending' ? '...' : 'Wyślij'}
      </button>
      <button
        type="button"
        onClick={() => { setOpen(false); setStatus('idle') }}
        className="text-gray-400 hover:text-gray-600 text-lg px-1"
      >
        &times;
      </button>
      {status === 'error' && (
        <span className="text-xs text-red-500">Błąd</span>
      )}
    </form>
  )
}

export default function AddToRFQButton({ product, compact = false }: AddToRFQButtonProps) {
  const { addItem, isInRFQ } = useRFQStore()
  const [mounted, setMounted] = useState(false)

  // Wyciągnij Part Numbery z wariantów lub specyfikacji
  const partNumbers = product.variants && product.variants.length > 0
    ? product.variants.map(v => v.partNumber)
    : (() => {
        const pnSpec = product.specifications.find(s => s.name === 'Part Number')
        return pnSpec ? [pnSpec.value] : []
      })()

  const { stockData, loading: stockLoading } = useStockData(partNumbers)

  useEffect(() => {
    setMounted(true)
  }, [])

  const inRFQ = mounted ? isInRFQ(product.id) : false

  // Sprawdź czy produkt jest niedostępny wg Ingram
  // Tylko jeśli Ingram faktycznie znalazł PN-y (found: true) — inaczej fallback na statyczną dostępność
  const isUnavailable = !stockLoading && partNumbers.length > 0 && (() => {
    let anyFound = false
    for (const pn of partNumbers) {
      const stock = stockData.get(pn)
      if (stock?.found) {
        anyFound = true
        if (stock.totalStock > 0) return false
      }
    }
    return anyFound
  })()

  const handleAdd = () => {
    const pn = product.variants?.[0]?.partNumber
      || product.specifications.find(s => s.name === 'Part Number')?.value
    addItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
      image: product.images[0],
      partNumber: pn,
    })
  }

  if (isUnavailable) {
    const pn = partNumbers[0] || product.id
    return <NotifyForm partNumber={pn} productName={product.name} compact={compact} />
  }

  const isZebra = product.manufacturerId === 'zebra'
  const activeVariant = isZebra ? 'zebra' : 'primary'

  if (compact) {
    return (
      <Button
        fullWidth
        variant={inRFQ ? 'secondary' : activeVariant}
        onClick={handleAdd}
        leftIcon={inRFQ ? <CheckIcon size={18} /> : <PlusIcon size={18} />}
      >
        {inRFQ ? 'W koszyku' : 'Dodaj do koszyka'}
      </Button>
    )
  }

  return (
    <Button
      size="lg"
      fullWidth
      variant={inRFQ ? 'secondary' : activeVariant}
      onClick={handleAdd}
      leftIcon={inRFQ ? <CheckIcon size={20} /> : <PlusIcon size={20} />}
    >
      {inRFQ ? 'Produkt w koszyku' : 'Dodaj do koszyka'}
    </Button>
  )
}
