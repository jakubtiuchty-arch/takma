'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateInvoiceButton({ orderId }: { orderId: string }) {
  const router = useRouter()
  const [creating, setCreating] = useState(false)

  const create = async () => {
    setCreating(true)
    try {
      const res = await fetch('/api/admin/invoices/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId }),
      })
      const data = await res.json()
      if (data.error) {
        alert(data.error)
      } else {
        router.refresh()
      }
    } catch {
      alert('Błąd tworzenia faktury')
    } finally {
      setCreating(false)
    }
  }

  return (
    <button
      onClick={create}
      disabled={creating}
      className="w-full py-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 disabled:opacity-50 transition-colors"
    >
      {creating ? 'Tworzenie...' : '+ Wystaw fakturę'}
    </button>
  )
}
