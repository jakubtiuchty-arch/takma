'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  orderId: string
  existingTracking?: string | null
}

export default function AllegroGenerateLabelButton({ orderId, existingTracking }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const [tracking, setTracking] = useState<string | null>(existingTracking || null)

  function openPdf(base64: string) {
    try {
      const bin = atob(base64)
      const arr = new Uint8Array(bin.length)
      for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i)
      const blob = new Blob([arr], { type: 'application/pdf' })
      const url = URL.createObjectURL(blob)
      window.open(url, '_blank')
    } catch {
      /* ignore */
    }
  }

  async function generate() {
    setLoading(true)
    setError(null)
    setNotice(null)
    try {
      const res = await fetch('/admin/allegro/zamowienia/generuj-list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data?.error || `Błąd ${res.status}`)
      } else {
        if (data.tracking) setTracking(data.tracking)
        if (data.labelBase64) {
          openPdf(data.labelBase64)
          setNotice('Etykieta otwarta do druku.')
        } else if (data.warning) {
          setNotice(data.warning)
        }
        router.refresh()
      }
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="font-semibold text-gray-900 text-sm">List przewozowy (Furgonetka)</h2>
          {tracking ? (
            <p className="text-sm text-emerald-700 mt-0.5">Nr listu: <span className="font-mono">{tracking}</span></p>
          ) : (
            <p className="text-sm text-gray-500 mt-0.5">Wygeneruj list i wydrukuj etykietę.</p>
          )}
          {notice && <p className="text-xs text-amber-700 mt-1">{notice}</p>}
          {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
        </div>
        <button
          onClick={generate}
          disabled={loading}
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 whitespace-nowrap"
        >
          {loading ? 'Generuję…' : tracking ? 'Generuj ponownie' : 'Generuj list'}
        </button>
      </div>
    </div>
  )
}
