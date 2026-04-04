'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function SyncKsefButton() {
  const router = useRouter()
  const [syncing, setSyncing] = useState(false)

  const sync = async () => {
    setSyncing(true)
    try {
      const res = await fetch('/api/admin/invoices/sync-ksef', { method: 'POST' })
      const data = await res.json()
      if (data.error) {
        alert(data.error)
      } else {
        alert(`Pobrano ${data.newInvoices} nowych faktur z KSeF`)
        router.refresh()
      }
    } catch {
      alert('Błąd synchronizacji z KSeF')
    } finally {
      setSyncing(false)
    }
  }

  return (
    <button
      onClick={sync}
      disabled={syncing}
      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
    >
      {syncing ? 'Synchronizuję...' : '↻ Pobierz z KSeF'}
    </button>
  )
}

export default function InvoiceActions({ invoiceId }: { invoiceId: string; status: string }) {
  return (
    <a
      href={`/api/admin/invoices/${invoiceId}/pdf`}
      target="_blank"
      className="px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
    >
      PDF
    </a>
  )
}
