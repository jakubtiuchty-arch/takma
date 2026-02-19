'use client'

import { useState, useRef, useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { addDevice } from '@/actions/customer-devices'
import { Button, Input, Textarea } from '@/components/ui'
import Link from 'next/link'
import { products } from '@/data/products'

const productSuggestions = products.map((p) => ({
  name: p.name,
  slug: p.slug,
}))

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" isLoading={pending}>
      Dodaj urzadzenie
    </Button>
  )
}

export default function DodajUrzadzeniePage() {
  const [state, formAction] = useFormState(addDevice, null)

  const [productName, setProductName] = useState('')
  const [productSlug, setProductSlug] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  const filteredProducts = productName.length >= 2
    ? productSuggestions.filter((p) =>
        p.name.toLowerCase().includes(productName.toLowerCase())
      ).slice(0, 8)
    : []

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/panel/urzadzenia" className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Dodaj urzadzenie</h1>
      </div>

      {state?.error && (
        <div className="rounded-lg px-4 py-3 text-sm font-medium bg-red-50 text-red-800 border border-red-200 mb-6">
          {state.error}
        </div>
      )}

      <form action={formAction} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
        {/* Nazwa produktu z autocomplete */}
        <div className="relative" ref={suggestionsRef}>
          <Input
            label="Nazwa produktu"
            name="productName"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value)
              setProductSlug('')
              setShowSuggestions(true)
            }}
            onFocus={() => setShowSuggestions(true)}
            required
            placeholder="np. Zebra TC22, Zebra ZD621t"
            error={state?.fieldErrors?.productName}
          />
          <input type="hidden" name="productSlug" value={productSlug} />

          {showSuggestions && filteredProducts.length > 0 && (
            <div className="absolute z-10 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredProducts.map((p) => (
                <button
                  key={p.slug}
                  type="button"
                  className="w-full text-left px-4 py-2.5 text-sm hover:bg-primary-50 transition-colors"
                  onClick={() => {
                    setProductName(p.name)
                    setProductSlug(p.slug)
                    setShowSuggestions(false)
                  }}
                >
                  {p.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Part Number"
            name="partNumber"
            placeholder="np. TC220K-2HD224RG"
          />
          <Input
            label="Numer seryjny"
            name="serialNumber"
            placeholder="np. 22111234500001"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Input
            label="Data zakupu"
            name="purchaseDate"
            type="date"
          />
          <Input
            label="Koniec gwarancji"
            name="warrantyEnd"
            type="date"
          />
          <Input
            label="Koniec OneCare"
            name="oneCareEnd"
            type="date"
          />
        </div>

        <Textarea
          label="Notatki"
          name="notes"
          placeholder="Dodatkowe informacje o urzadzeniu..."
          rows={3}
        />

        <div className="flex gap-3 pt-2">
          <SubmitButton />
          <Link href="/panel/urzadzenia">
            <Button type="button" variant="ghost">
              Anuluj
            </Button>
          </Link>
        </div>
      </form>
    </div>
  )
}
