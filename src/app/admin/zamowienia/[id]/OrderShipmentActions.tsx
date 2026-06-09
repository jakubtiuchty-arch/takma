'use client'

import { useState, useTransition } from 'react'
import { getFurgonetkaLabel, deleteOrderShipment } from '@/actions/admin-orders'

function openPdf(base64: string) {
  try {
    const bin = atob(base64)
    const arr = new Uint8Array(bin.length)
    for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i)
    const url = URL.createObjectURL(new Blob([arr], { type: 'application/pdf' }))
    window.open(url, '_blank')
  } catch {
    /* ignore */
  }
}

export default function OrderShipmentActions({
  rowId,
  shipmentId,
  legacy,
}: {
  rowId: string
  shipmentId?: string | null
  legacy?: boolean
}) {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  function downloadLabel() {
    if (!shipmentId) return
    setError(null)
    startTransition(async () => {
      const res = await getFurgonetkaLabel(shipmentId)
      if (res.ok) openPdf(res.labelBase64)
      else setError(res.error)
    })
  }

  function remove() {
    if (legacy) return
    if (!confirm('Usunąć tę przesyłkę z zamówienia? (nie anuluje paczki w Furgonetce)')) return
    setError(null)
    startTransition(async () => {
      const res = await deleteOrderShipment(rowId)
      if (!res.success) setError(res.error || 'Błąd usuwania.')
    })
  }

  return (
    <div className="flex items-center gap-2">
      {shipmentId && (
        <button
          onClick={downloadLabel}
          disabled={isPending}
          className="text-xs font-medium text-blue-600 hover:underline disabled:opacity-50"
        >
          {isPending ? '…' : 'Pobierz etykietę'}
        </button>
      )}
      {!legacy && (
        <button
          onClick={remove}
          disabled={isPending}
          className="text-xs font-medium text-red-500 hover:underline disabled:opacity-50"
        >
          Usuń
        </button>
      )}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  )
}
