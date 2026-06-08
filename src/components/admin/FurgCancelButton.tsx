'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'

export default function FurgCancelButton({ packageId }: { packageId: string }) {
  const router = useRouter()
  const [pending, start] = useTransition()
  const [err, setErr] = useState<string | null>(null)

  function run() {
    if (!confirm('Anulować tę przesyłkę w Furgonetce? Tej operacji nie cofniesz.')) return
    setErr(null)
    start(async () => {
      const res = await fetch('/admin/allegro/duplikaty/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ packageId }),
      })
      const d = await res.json().catch(() => ({}))
      if (!res.ok) setErr(d.error || `Błąd ${res.status}`)
      else router.refresh()
    })
  }

  return (
    <span className="inline-flex items-center gap-2">
      <button
        onClick={run}
        disabled={pending}
        className="px-3 py-1 text-xs font-semibold rounded bg-red-600 text-white hover:bg-red-700 disabled:opacity-40"
      >
        {pending ? 'Anuluję…' : 'Anuluj'}
      </button>
      {err && <span className="text-xs text-red-600">{err}</span>}
    </span>
  )
}
