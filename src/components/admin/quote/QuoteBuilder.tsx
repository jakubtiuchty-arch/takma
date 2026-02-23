'use client'

import { useEffect, useTransition, useRef } from 'react'
import { useQuoteStore } from '@/store/quoteStore'
import { createQuote, priceRfqQuote, updateQuote } from '@/actions/admin-quotes'
import NipLookup from './NipLookup'
import ProductSearch from './ProductSearch'
import ManualItemForm from './ManualItemForm'
import PdfImport from './PdfImport'
import QuoteItemsTable from './QuoteItemsTable'
import QuoteSummary from './QuoteSummary'

interface RfqData {
  rfqQuoteId: string
  client: {
    company: string
    nip?: string
    contact?: string
    email?: string
    phone?: string
    address?: string
  }
  items: {
    productId?: string
    productName: string
    partNumber?: string
    description?: string
    quantity: number
  }[]
}

export interface EditData {
  quoteId: string
  client: {
    company: string
    nip?: string
    contact?: string
    email?: string
    phone?: string
    address?: string
  }
  items: {
    source: string
    productId?: string
    productName: string
    partNumber?: string
    description?: string
    quantity: number
    priceNetto: number
    purchasePrice?: number
    marginPercent?: number
    discountPercent?: number
    catalogPrice?: number
  }[]
  terms: {
    validDays: number
    paymentTerms: string
    deliveryTerms: string
    notes?: string
    internalNotes?: string
    freebiesNote?: string
  }
}

interface QuoteBuilderProps {
  rfqData?: RfqData
  editData?: EditData
}

export default function QuoteBuilder({ rfqData, editData }: QuoteBuilderProps) {
  const store = useQuoteStore()
  const [isPending, startTransition] = useTransition()
  const initialized = useRef(false)

  // Reset store przy otwarciu nowej oferty, lub załaduj dane z RFQ/edycji
  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    store.resetAll()

    if (editData) {
      // Załaduj dane z istniejącej oferty do edycji
      store.setClient({
        company: editData.client.company,
        nip: editData.client.nip,
        contact: editData.client.contact,
        email: editData.client.email,
        phone: editData.client.phone,
        address: editData.client.address,
      })

      for (const item of editData.items) {
        store.addItem({
          source: item.source as 'catalog' | 'manual' | 'import',
          productId: item.productId,
          productName: item.productName,
          partNumber: item.partNumber,
          description: item.description,
          quantity: item.quantity,
          priceNetto: item.priceNetto,
          purchasePrice: item.purchasePrice,
          marginPercent: item.marginPercent,
          discountPercent: item.discountPercent,
          catalogPrice: item.catalogPrice,
        })
      }

      store.setTerms({
        validDays: editData.terms.validDays,
        paymentTerms: editData.terms.paymentTerms,
        deliveryTerms: editData.terms.deliveryTerms,
        notes: editData.terms.notes || '',
        internalNotes: editData.terms.internalNotes || '',
        freebiesNote: editData.terms.freebiesNote || '',
      })
    } else if (rfqData) {
      // Załaduj dane klienta z zapytania
      store.setClient({
        company: rfqData.client.company,
        nip: rfqData.client.nip,
        contact: rfqData.client.contact,
        email: rfqData.client.email,
        phone: rfqData.client.phone,
        address: rfqData.client.address,
      })

      // Załaduj pozycje z zapytania (ceny = 0, do uzupełnienia przez admina)
      for (const item of rfqData.items) {
        store.addItem({
          source: 'catalog',
          productId: item.productId,
          productName: item.productName,
          partNumber: item.partNumber,
          description: item.description,
          quantity: item.quantity,
          priceNetto: 0,
        })
      }
    }
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

    const itemsData = store.items.map((item) => ({
      source: item.source,
      productId: item.productId,
      productName: item.productName,
      partNumber: item.partNumber,
      description: item.description,
      quantity: item.quantity,
      purchasePrice: item.purchasePrice,
      priceNetto: item.priceNetto,
      marginPercent: item.marginPercent,
    }))

    const commonPayload = {
      client: {
        company: store.client.company,
        nip: store.client.nip,
        contact: store.client.contact,
        email: store.client.email,
        phone: store.client.phone,
        address: store.client.address,
      },
      items: itemsData,
      validDays: store.validDays,
      paymentTerms: store.paymentTerms,
      deliveryTerms: store.deliveryTerms,
      notes: store.notes || undefined,
      internalNotes: store.internalNotes || undefined,
      freebiesNote: store.freebiesNote || undefined,
    }

    startTransition(async () => {
      if (editData?.quoteId) {
        await updateQuote(editData.quoteId, commonPayload)
      } else if (rfqData?.rfqQuoteId) {
        await priceRfqQuote(rfqData.rfqQuoteId, {
          items: itemsData,
          validDays: store.validDays,
          paymentTerms: store.paymentTerms,
          deliveryTerms: store.deliveryTerms,
          notes: store.notes || undefined,
          internalNotes: store.internalNotes || undefined,
          freebiesNote: store.freebiesNote || undefined,
        })
      } else {
        await createQuote(commonPayload)
      }
      // redirect happens in action
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
          {isPending ? 'Zapisywanie...' : editData ? 'Zapisz zmiany' : 'Zapisz ofertę'}
        </button>
      </div>
    </div>
  )
}
