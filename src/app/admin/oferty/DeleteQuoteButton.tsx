'use client'

import { useState, useTransition } from 'react'
import { deleteQuote } from '@/actions/admin-quotes'

/**
 * Kasowanie oferty prosto z listy — przy testowaniu ofertownika zbiera się ich
 * sporo i wchodzenie w każdą kartę jest uciążliwe. Potwierdzenie jest inline
 * (a nie przez `confirm()`), żeby nie blokować wątku przeglądarki.
 */
export default function DeleteQuoteButton({
  quoteId,
  quoteNumber,
}: {
  quoteId: string
  quoteNumber: string
}) {
  const [confirming, setConfirming] = useState(false)
  const [isPending, startTransition] = useTransition()

  if (confirming) {
    return (
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
        <button
          onClick={() => startTransition(() => { void deleteQuote(quoteId) })}
          disabled={isPending}
          className="px-2 py-1 text-xs font-medium text-white bg-red-600 rounded hover:bg-red-700 disabled:opacity-50"
          title={`Skasuj ofertę ${quoteNumber}`}
        >
          {isPending ? 'Kasuję…' : 'Skasuj'}
        </button>
        <button
          onClick={() => setConfirming(false)}
          disabled={isPending}
          className="px-2 py-1 text-xs text-gray-600 rounded hover:bg-gray-100 disabled:opacity-50"
        >
          Anuluj
        </button>
      </span>
    )
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="p-1.5 text-gray-400 rounded hover:text-red-600 hover:bg-red-50"
      aria-label={`Skasuj ofertę ${quoteNumber}`}
      title={`Skasuj ofertę ${quoteNumber}`}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    </button>
  )
}
