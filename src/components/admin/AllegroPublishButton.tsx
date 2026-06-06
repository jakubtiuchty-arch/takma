'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  partNumber: string
  disabled?: boolean
  published?: boolean
  autoPublish?: boolean
}

export default function AllegroPublishButton({ partNumber, disabled, published, autoPublish }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function publish() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/admin/allegro/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ partNumber }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data?.error || `Błąd ${res.status}`)
      } else {
        router.refresh()
      }
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="inline-flex flex-col items-end gap-1">
      <button
        onClick={publish}
        disabled={disabled || loading}
        className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors bg-[#ff5a00] text-white hover:bg-[#e65100] disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {loading
          ? 'Wystawiam…'
          : autoPublish
            ? published
              ? 'Publikuj ponownie'
              : 'Publikuj (live)'
            : published
              ? 'Wystaw ponownie'
              : 'Wystaw szkic'}
      </button>
      {error && <span className="text-[11px] text-red-600 max-w-[220px] text-right">{error}</span>}
    </div>
  )
}
