'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AllegroReplyForm({ threadId }: { threadId: string }) {
  const router = useRouter()
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function send() {
    if (!text.trim()) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/admin/allegro/wiadomosci/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ threadId, text }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) setError(data?.error || `Błąd ${res.status}`)
      else {
        setText('')
        router.refresh()
      }
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="border-t border-gray-200 pt-3 mt-3">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder="Napisz odpowiedź…"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
      <div className="flex justify-end mt-2">
        <button
          onClick={send}
          disabled={loading || !text.trim()}
          className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40"
        >
          {loading ? 'Wysyłam…' : 'Wyślij odpowiedź'}
        </button>
      </div>
    </div>
  )
}
