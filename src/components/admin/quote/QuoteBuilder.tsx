'use client'

import { useEffect, useTransition } from 'react'
import { useQuoteStore } from '@/store/quoteStore'
import { createQuote } from '@/actions/admin-quotes'
import NipLookup from './NipLookup'
import ProductSearch from './ProductSearch'
import ManualItemForm from './ManualItemForm'
import PdfImport from './PdfImport'
import QuoteItemsTable from './QuoteItemsTable'
import QuoteSummary from './QuoteSummary'

export default function QuoteBuilder() {
  const store = useQuoteStore()
  const [isPending, startTransition] = useTransition()

  // Reset store przy otwarciu nowej oferty
  useEffect(() => {
    store.resetAll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSave = () => {
    if (!store.client.company) {
      alert('Wpisz nazwę firmy')
      return
    }
    if (store.items.length === 0) {
      alert('Dodaj przynajmniej jedną pozycję')
      return
    }

    startTransition(async () => {
      await createQuote({
        client: {
          company: store.client.company,
          nip: store.client.nip,
          contact: store.client.contact,
          email: store.client.email,
          phone: store.client.phone,
          address: store.client.address,
        },
        items: store.items.map((item) => ({
          source: item.source,
          productId: item.productId,
          productName: item.productName,
          partNumber: item.partNumber,
          description: item.description,
          quantity: item.quantity,
          purchasePrice: item.purchasePrice,
          priceNetto: item.priceNetto,
          marginPercent: item.marginPercent,
        })),
        validDays: store.validDays,
        paymentTerms: store.paymentTerms,
        deliveryTerms: store.deliveryTerms,
        notes: store.notes || undefined,
        internalNotes: store.internalNotes || undefined,
        freebiesNote: store.freebiesNote || undefined,
      })
      // redirect happens in createQuote
    })
  }

  return (
    <div className="space-y-6">
      {/* Client data */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <NipLookup />
      </div>

      {/* Add items */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
        <ProductSearch />
        <div className="border-t border-gray-200 pt-6">
          <ManualItemForm />
        </div>
        <div className="border-t border-gray-200 pt-6">
          <PdfImport />
        </div>
      </div>

      {/* Items table */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
          Pozycje oferty ({store.items.length})
        </h3>
        <QuoteItemsTable />
      </div>

      {/* Summary + terms */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <QuoteSummary />
      </div>

      {/* Save */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => store.resetAll()}
          className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          Wyczyść
        </button>
        <button
          type="button"
          onClick={handleSave}
          disabled={isPending || store.items.length === 0 || !store.client.company}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
        >
          {isPending ? 'Zapisywanie...' : 'Zapisz ofertę'}
        </button>
      </div>
    </div>
  )
}
