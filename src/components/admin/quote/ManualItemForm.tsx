'use client'

import { useState } from 'react'
import { useQuoteStore } from '@/store/quoteStore'
import { parsujKwotePln } from '@/lib/kwota-pln'

export default function ManualItemForm() {
  const addItem = useQuoteStore((s) => s.addItem)
  const [name, setName] = useState('')
  const [partNumber, setPartNumber] = useState('')
  const [priceNetto, setPriceNetto] = useState('')
  const [quantity, setQuantity] = useState('1')

  const purchasePrice = parsujKwotePln(priceNetto) // PLN → grosze, null = błędny wpis

  const handleAdd = () => {
    if (!name.trim() || purchasePrice === null) return
    addItem({
      source: 'manual',
      productName: name.trim(),
      partNumber: partNumber.trim() || undefined,
      quantity: parseInt(quantity) || 1,
      purchasePrice,
      priceNetto: purchasePrice, // 0% marży na start
      marginPercent: 0,
    })
    setName('')
    setPartNumber('')
    setPriceNetto('')
    setQuantity('1')
  }

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
        Dodaj pozycję ręcznie
      </h3>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nazwa produktu"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        <div className="col-span-3">
          <input
            type="text"
            value={partNumber}
            onChange={(e) => setPartNumber(e.target.value)}
            placeholder="Part Number (opcj.)"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        <div className="col-span-2">
          {/* tekst, nie number — w części przeglądarek pole liczbowe nie przyjmuje „9,29" */}
          <input
            type="text"
            inputMode="decimal"
            value={priceNetto}
            onChange={(e) => setPriceNetto(e.target.value)}
            placeholder="Cena netto"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        <div className="col-span-1">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        <div className="col-span-2">
          <button
            type="button"
            onClick={handleAdd}
            disabled={!name.trim() || purchasePrice === null}
            className="w-full px-3 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-50"
          >
            Dodaj
          </button>
        </div>
      </div>
    </div>
  )
}
