'use client'

import { useState, useRef } from 'react'
import { useQuoteStore } from '@/store/quoteStore'

interface ParsedItem {
  name: string
  partNumber?: string
  price?: number
  quantity: number
  selected: boolean
}

export default function PdfImport() {
  const [items, setItems] = useState<ParsedItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)
  const addItem = useQuoteStore((s) => s.addItem)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !file.name.endsWith('.pdf')) {
      setError('Wybierz plik PDF')
      return
    }

    setLoading(true)
    setError('')
    setItems([])

    try {
      const formData = new FormData()
      formData.append('file', file)

      const res = await fetch('/api/admin/parse-pdf', { method: 'POST', body: formData })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Błąd parsowania')
        return
      }

      setItems(data.items.map((item: Omit<ParsedItem, 'selected'>) => ({ ...item, selected: true })))
    } catch {
      setError('Błąd podczas przetwarzania pliku')
    } finally {
      setLoading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  const addSelectedItems = () => {
    const selected = items.filter((item) => item.selected)
    for (const item of selected) {
      const purchasePrice = Math.round((item.price || 0) * 100)
      addItem({
        source: 'import',
        productName: item.name,
        partNumber: item.partNumber,
        quantity: item.quantity,
        purchasePrice,
        priceNetto: purchasePrice, // 0% marży na start
        marginPercent: 0,
      })
    }
    setItems([])
  }

  const toggleItem = (index: number) => {
    setItems(items.map((item, i) => (i === index ? { ...item, selected: !item.selected } : item)))
  }

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
        Import z PDF dystrybutora
      </h3>

      <div className="flex items-center gap-3">
        <input
          ref={fileRef}
          type="file"
          accept=".pdf"
          onChange={handleUpload}
          className="text-sm file:mr-3 file:px-3 file:py-1.5 file:rounded-lg file:border-0 file:bg-gray-100 file:text-gray-700 file:text-sm file:font-medium file:cursor-pointer hover:file:bg-gray-200"
        />
        {loading && <span className="text-sm text-gray-500">Przetwarzanie...</span>}
      </div>

      {error && <p className="text-xs text-red-600 mt-2">{error}</p>}

      {items.length > 0 && (
        <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-3 py-2 flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              Znaleziono {items.length} pozycji
            </span>
            <button
              onClick={addSelectedItems}
              className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700"
            >
              Dodaj zaznaczone ({items.filter((i) => i.selected).length})
            </button>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {items.map((item, i) => (
              <label
                key={i}
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0"
              >
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => toggleItem(i)}
                  className="rounded border-gray-300"
                />
                <div className="flex-1 min-w-0 text-sm">
                  <span className="font-medium text-gray-900">{item.name}</span>
                  {item.partNumber && <span className="text-gray-500 ml-2 font-mono text-xs">{item.partNumber}</span>}
                </div>
                <span className="text-sm text-gray-600">×{item.quantity}</span>
                {item.price && (
                  <span className="text-sm font-medium tabular-nums">
                    {item.price.toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł
                  </span>
                )}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
