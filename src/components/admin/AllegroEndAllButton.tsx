'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AllegroEndAllButton({ count }: { count: number }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  async function endAll() {
    if (!confirm(`Zakończyć WSZYSTKIE ${count} stare oferty materiałów? Tej operacji nie cofniesz.`)) return
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch('/admin/allegro/stare-oferty/end-all', { method: 'POST' })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) setResult(data?.error || `Błąd ${res.status}`)
      else {
        setResult(`Zakończono ${data.ended} z ${data.total}${data.err ? ` (błędy: ${data.err})` : ''}.`)
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
        onClick={endAll}
        disabled={loading}
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-40"
      >
        {loading ? 'Wygaszam…' : `Wygaś wszystkie (${count})`}
      </button>
      {result && <span className="text-sm text-gray-600">{result}</span>}
    </div>
  )
}
