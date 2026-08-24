'use client'

import { useState, useTransition } from 'react'
import { wycofajKod } from './actions'

export default function RevokeButton({ code }: { code: string }) {
  const [pending, startTransition] = useTransition()
  const [potwierdza, setPotwierdza] = useState(false)

  if (!potwierdza) {
    return (
      <button
        type="button"
        onClick={() => setPotwierdza(true)}
        className="text-sm text-gray-500 hover:text-red-600 transition-colors"
      >
        Wycofaj
      </button>
    )
  }

  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <button
        type="button"
        disabled={pending}
        onClick={() => startTransition(() => void wycofajKod(code))}
        className="text-sm font-medium text-red-600 hover:text-red-700 disabled:opacity-50"
      >
        {pending ? 'Wycofuję...' : 'Potwierdź'}
      </button>
      <button
        type="button"
        onClick={() => setPotwierdza(false)}
        className="text-sm text-gray-400 hover:text-gray-600"
      >
        Anuluj
      </button>
    </span>
  )
}
