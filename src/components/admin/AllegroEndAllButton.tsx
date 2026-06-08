'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AllegroEndAllButton({
  count,
  matchedOnly = false,
}: {
  count: number
  matchedOnly?: boolean
}) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  async function endAll() {
    const what = matchedOnly
      ? `${count} stare oferty, które MAJĄ już nowy odpowiednik`
      : `WSZYSTKIE ${count} stare oferty materiałów`
    if (!confirm(`Zakończyć ${what}? Tej operacji nie cofniesz.`)) return
    setLoading(true)
    setResult(null)
    try {
      const url = matchedOnly
        ? '/admin/allegro/stare-oferty/end-all?matched=1'
        : '/admin/allegro/stare-oferty/end-all'
      const res = await fetch(url, { method: 'POST' })
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

  const cls = matchedOnly ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-red-600 hover:bg-red-700'

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={endAll}
        disabled={loading || count === 0}
        className={`inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg text-white disabled:opacity-40 ${cls}`}
      >
        {loading
          ? 'Wygaszam…'
          : matchedOnly
            ? `Wygaś z odpowiednikiem (${count})`
            : `Wygaś wszystkie (${count})`}
      </button>
      {result && <span className="text-sm text-gray-600">{result}</span>}
    </div>
  )
}
