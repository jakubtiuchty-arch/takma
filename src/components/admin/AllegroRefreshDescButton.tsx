'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AllegroRefreshDescButton() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  async function run() {
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch('/admin/allegro/hurtowe/refresh', { method: 'POST' })
      const d = await res.json().catch(() => ({}))
      if (!res.ok) setResult(d?.error || `Błąd ${res.status}`)
      else {
        setResult(`Odświeżono ${d.succeeded}, błędy ${d.failed} (paczka ${d.processed}).`)
        router.refresh()
      }
    } catch (e) {
      setResult((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={run}
        disabled={loading}
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-gray-700 text-white hover:bg-gray-800 disabled:opacity-40"
      >
        {loading ? 'Odświeżam…' : 'Odśwież opisy istniejących (20)'}
      </button>
      {result && <span className="text-sm text-gray-600">{result}</span>}
    </div>
  )
}
