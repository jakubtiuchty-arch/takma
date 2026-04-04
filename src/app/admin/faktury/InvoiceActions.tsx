'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function InvoiceActions({ invoiceId, status }: { invoiceId: string; status: string }) {
  const router = useRouter()
  const [sending, setSending] = useState(false)

  const sendToKsef = async () => {
    setSending(true)
    try {
      const res = await fetch(`/api/admin/invoices/${invoiceId}/send-ksef`, { method: 'POST' })
      const data = await res.json()
      if (data.error) alert(data.error)
      router.refresh()
    } catch {
      alert('Błąd wysyłki do KSeF')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="flex items-center gap-1 justify-end">
      {(status === 'DRAFT' || status === 'ERROR') && (
        <button
          onClick={sendToKsef}
          disabled={sending}
          className="px-2.5 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 disabled:opacity-50 transition-colors"
        >
          {sending ? '...' : 'Wyślij KSeF'}
        </button>
      )}
      <a
        href={`/api/admin/invoices/${invoiceId}/pdf`}
        target="_blank"
        className="px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
      >
        PDF
      </a>
    </div>
  )
}
