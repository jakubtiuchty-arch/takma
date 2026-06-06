'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AllegroEndOfferButton({ offerId }: { offerId: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function end() {
    if (!confirm('Zakończyć tę starą ofertę? (publication ENDED)')) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/admin/allegro/end-offer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ offerId }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) setError(data?.error || `Błąd ${res.status}`)
      else {
        setDone(true)
        router.refresh()
      }
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  if (done) return <span className="text-xs text-gray-400">Zakończona</span>

  return (
    <div className="inline-flex flex-col items-end gap-1">
      <button
        onClick={end}
        disabled={loading}
        className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors bg-red-600 text-white hover:bg-red-700 disabled:opacity-40"
      >
        {loading ? 'Kończę…' : 'Wygaś'}
      </button>
      {error && <span className="text-[11px] text-red-600 max-w-[200px] text-right">{error}</span>}
    </div>
  )
}
