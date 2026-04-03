'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SeoDigestActions() {
  const router = useRouter()
  const [running, setRunning] = useState(false)
  const [marking, setMarking] = useState(false)

  const runDigest = async () => {
    setRunning(true)
    try {
      const res = await fetch('/api/admin/seo-digest/run', { method: 'POST' })
      const data = await res.json()
      alert(`Pobrano ${data.newArticles} nowych artykułów (${data.translated} przetłumaczonych)`)
      router.refresh()
    } catch {
      alert('Błąd pobierania')
    } finally {
      setRunning(false)
    }
  }

  const markAllRead = async () => {
    setMarking(true)
    try {
      await fetch('/api/admin/seo-digest/mark-read', { method: 'POST' })
      router.refresh()
    } catch {
      alert('Błąd')
    } finally {
      setMarking(false)
    }
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={markAllRead}
        disabled={marking}
        className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 transition-colors"
      >
        {marking ? '...' : '✓ Przeczytane'}
      </button>
      <button
        onClick={runDigest}
        disabled={running}
        className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
      >
        {running ? 'Pobieram...' : '↻ Pobierz'}
      </button>
    </div>
  )
}
