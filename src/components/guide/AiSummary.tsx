'use client'

import { useState } from 'react'

export default function AiSummary({ slug }: { slug: string }) {
  const [open, setOpen] = useState(false)
  const [summary, setSummary] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const generate = async () => {
    if (summary) {
      setOpen(!open)
      return
    }

    setOpen(true)
    setLoading(true)
    setError(false)

    try {
      const res = await fetch('/api/guide-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      })
      const data = await res.json()
      if (data.summary) {
        setSummary(data.summary)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mb-6">
      {/* Toggle button */}
      <button
        onClick={generate}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium text-sm transition-colors"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
        Podsumowanie AI
        <svg
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Summary panel */}
      {open && (
        <div className="mt-3 rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 animate-fade-in">
          {loading ? (
            <div className="flex items-center gap-3 text-blue-600">
              <div className="w-5 h-5 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin" />
              <span className="text-sm font-medium">Generuję podsumowanie...</span>
            </div>
          ) : error ? (
            <p className="text-sm text-red-600">Nie udało się wygenerować podsumowania. Spróbuj ponownie później.</p>
          ) : summary ? (
            <>
              <p className="text-[15px] text-gray-800 leading-relaxed">{summary}</p>
              <p className="text-[11px] text-gray-400 mt-3">Wygenerowane przez AI (Claude). Podsumowanie ma charakter informacyjny.</p>
            </>
          ) : null}
        </div>
      )}
    </div>
  )
}
