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
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
        Podsumowanie
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
              <p className="text-[11px] text-gray-400 mt-3">Podsumowanie ma charakter informacyjny.</p>
            </>
          ) : null}
        </div>
      )}
    </div>
  )
}
