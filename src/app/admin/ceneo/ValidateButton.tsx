'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'

export default function ValidateButton() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [msg, setMsg] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function run() {
    setMsg(null)
    setError(null)
    startTransition(async () => {
      try {
        const res = await fetch('/admin/ceneo/validate', { method: 'POST' })
        const data = await res.json()
        if (!data.ok) setError(data.error || 'Błąd walidacji.')
        else {
          const bad = (data.results || []).filter((r: { ok: boolean }) => !r.ok).length
          setMsg(bad ? `Gotowe — ${bad} feed(y) z problemem.` : 'Gotowe — oba feedy OK.')
          router.refresh()
        }
      } catch (e) {
        setError((e as Error).message)
      }
    })
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={run}
        disabled={isPending}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {isPending ? 'Waliduję…' : 'Waliduj teraz'}
      </button>
      {msg && <span className="text-sm text-emerald-700">{msg}</span>}
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  )
}
