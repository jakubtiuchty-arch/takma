'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { useCustomerRfqStore } from '@/store/customerRfqStore'
import { submitRfq } from '@/actions/customer-rfq'
import RfqProductSearch from './RfqProductSearch'
import RfqItemsList from './RfqItemsList'

export default function RfqBuilder() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const items = useCustomerRfqStore((s) => s.items)
  const message = useCustomerRfqStore((s) => s.message)
  const setMessage = useCustomerRfqStore((s) => s.setMessage)
  const clearAll = useCustomerRfqStore((s) => s.clearAll)

  const handleSubmit = () => {
    if (items.length === 0) {
      setError('Dodaj przynajmniej jeden produkt do zapytania.')
      return
    }

    setError('')
    startTransition(async () => {
      const result = await submitRfq({
        items: items.map((item) => ({
          productId: item.productId,
          productName: item.productName,
          productSlug: item.productSlug,
          partNumber: item.partNumber,
          quantity: item.quantity,
          note: item.note,
        })),
        message,
      })

      if (result.error) {
        setError(result.error)
      } else {
        setSuccess(true)
        clearAll()
        setTimeout(() => {
          router.push('/panel/oferty')
        }, 2000)
      }
    })
  }

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <svg className="mx-auto h-10 w-10 text-green-500 mb-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-lg font-semibold text-green-800 mb-1">Zapytanie wysłane!</h3>
        <p className="text-sm text-green-600">
          Twoje zapytanie ofertowe zostało przesłane. Skontaktujemy się z wyceną.
        </p>
        <p className="text-xs text-green-500 mt-2">Przekierowanie do listy ofert...</p>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      {/* Wyszukiwarka produktów */}
      <RfqProductSearch />

      {/* Lista dodanych produktów */}
      <RfqItemsList />

      {/* Wiadomość */}
      <div>
        <label htmlFor="rfq-message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Wiadomość (opcjonalnie)
        </label>
        <textarea
          id="rfq-message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Dodatkowe informacje, pytania, oczekiwane warunki..."
          className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 placeholder:text-gray-400 resize-none"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Submit */}
      <div className="flex items-center justify-between pt-2">
        <p className="text-sm text-gray-500">
          {items.length > 0
            ? `${items.length} ${items.length === 1 ? 'pozycja' : items.length < 5 ? 'pozycje' : 'pozycji'} w zapytaniu`
            : 'Dodaj produkty, aby wysłać zapytanie'}
        </p>
        <button
          onClick={handleSubmit}
          disabled={isPending || items.length === 0}
          className="px-5 py-2.5 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          {isPending ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Wysyłanie...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              Wyślij zapytanie
            </>
          )}
        </button>
      </div>
    </div>
  )
}
