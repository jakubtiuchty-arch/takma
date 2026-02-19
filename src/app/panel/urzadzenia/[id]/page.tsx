'use client'

import { useState, useEffect, useRef } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { updateDevice, deleteDevice } from '@/actions/customer-devices'
import { Button, Input, Textarea } from '@/components/ui'
import Link from 'next/link'
import { products } from '@/data/products'

const productSuggestions = products.map((p) => ({
  name: p.name,
  slug: p.slug,
}))

interface DeviceData {
  id: string
  productName: string
  productSlug: string | null
  partNumber: string | null
  serialNumber: string | null
  purchaseDate: string | null
  warrantyEnd: string | null
  oneCareEnd: string | null
  notes: string | null
}

function formatDateForInput(dateStr: string | null): string {
  if (!dateStr) return ''
  try {
    return new Date(dateStr).toISOString().split('T')[0]
  } catch {
    return ''
  }
}

function SaveButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" isLoading={pending}>
      Zapisz zmiany
    </Button>
  )
}

export default function EdytujUrzadzeniePage({ params }: { params: { id: string } }) {
  const { id } = params

  const [device, setDevice] = useState<DeviceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [productName, setProductName] = useState('')
  const [productSlug, setProductSlug] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const [state, formAction] = useFormState(updateDevice, null)

  const filteredProducts = productName.length >= 2
    ? productSuggestions.filter((p) =>
        p.name.toLowerCase().includes(productName.toLowerCase())
      ).slice(0, 8)
    : []

  useEffect(() => {
    async function fetchDevice() {
      try {
        const res = await fetch(`/api/panel/urzadzenia/${id}`)
        if (!res.ok) {
          const data = await res.json()
          throw new Error(data.error || 'Blad pobierania danych')
        }
        const data: DeviceData = await res.json()
        setDevice(data)
        setProductName(data.productName)
        setProductSlug(data.productSlug || '')
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Blad pobierania danych')
      } finally {
        setLoading(false)
      }
    }
    fetchDevice()
  }, [id])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  async function handleDelete() {
    setDeleting(true)
    const result = await deleteDevice(id)
    if (result?.error) {
      setError(result.error)
      setDeleting(false)
      setShowDeleteConfirm(false)
    }
    // If successful, deleteDevice redirects to /panel/urzadzenia
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin h-8 w-8 border-4 border-primary-600 border-t-transparent rounded-full" />
      </div>
    )
  }

  if (error && !device) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="rounded-lg px-4 py-3 text-sm font-medium bg-red-50 text-red-800 border border-red-200">
          {error}
        </div>
        <Link
          href="/panel/urzadzenia"
          className="inline-flex items-center gap-2 mt-4 text-sm text-primary-600 hover:underline"
        >
          Wroc do listy urzadzen
        </Link>
      </div>
    )
  }

  if (!device) return null

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/panel/urzadzenia" className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Edytuj urzadzenie</h1>
      </div>

      {(state?.error || error) && (
        <div className="rounded-lg px-4 py-3 text-sm font-medium bg-red-50 text-red-800 border border-red-200 mb-6">
          {state?.error || error}
        </div>
      )}

      <form action={formAction} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
        <input type="hidden" name="deviceId" value={device.id} />

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
            defaultValue={device.partNumber || ''}
            placeholder="np. TC220K-2HD224RG"
          />
          <Input
            label="Numer seryjny"
            name="serialNumber"
            defaultValue={device.serialNumber || ''}
            placeholder="np. 22111234500001"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Input
            label="Data zakupu"
            name="purchaseDate"
            type="date"
            defaultValue={formatDateForInput(device.purchaseDate)}
          />
          <Input
            label="Koniec gwarancji"
            name="warrantyEnd"
            type="date"
            defaultValue={formatDateForInput(device.warrantyEnd)}
          />
          <Input
            label="Koniec OneCare"
            name="oneCareEnd"
            type="date"
            defaultValue={formatDateForInput(device.oneCareEnd)}
          />
        </div>

        <Textarea
          label="Notatki"
          name="notes"
          defaultValue={device.notes || ''}
          placeholder="Dodatkowe informacje o urzadzeniu..."
          rows={3}
        />

        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-3">
            <SaveButton />
            <Link href="/panel/urzadzenia">
              <Button type="button" variant="ghost">
                Anuluj
              </Button>
            </Link>
          </div>

          <Button
            type="button"
            variant="danger"
            size="sm"
            onClick={() => setShowDeleteConfirm(true)}
          >
            Usun urzadzenie
          </Button>
        </div>
      </form>

      {/* Modal potwierdzenia usuwania */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Usunac urzadzenie?
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Czy na pewno chcesz usunac <strong>{device.productName}</strong>? Tej operacji nie
              mozna cofnac.
            </p>
            <div className="flex gap-3 justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowDeleteConfirm(false)}
                disabled={deleting}
              >
                Anuluj
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={handleDelete}
                isLoading={deleting}
              >
                Usun
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
