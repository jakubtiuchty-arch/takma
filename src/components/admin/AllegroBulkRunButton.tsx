'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AllegroBulkRunButton() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  async function run() {
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch('/admin/allegro/hurtowe/run', { method: 'POST' })
      const d = await res.json().catch(() => ({}))
      if (!res.ok) setResult(d?.error || `Błąd ${res.status}`)
      else {
        setResult(`Paczka: wystawiono ${d.succeeded}, błędy ${d.failed}. Zostało ~${d.remaining}.`)
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
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40"
      >
        {loading ? 'Wystawiam paczkę…' : 'Wystaw kolejną paczkę (20)'}
      </button>
      {result && <span className="text-sm text-gray-600">{result}</span>}
    </div>
  )
}
