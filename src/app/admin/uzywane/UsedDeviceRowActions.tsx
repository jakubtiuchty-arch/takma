'use client'

import Link from 'next/link'
import { useState, useTransition } from 'react'
import { usunUzywke, zmienStatus } from './actions'

export default function UsedDeviceRowActions({
  id,
  slug,
  status,
}: {
  id: string
  slug: string
  status: string
}) {
  const [pending, startTransition] = useTransition()
  const [potwierdza, setPotwierdza] = useState(false)

  if (potwierdza) {
    return (
      <span className="inline-flex items-center gap-2 whitespace-nowrap">
        <button
          type="button"
          disabled={pending}
          onClick={() => startTransition(() => void usunUzywke(id))}
          className="text-sm font-medium text-red-600 hover:text-red-700 disabled:opacity-50"
        >
          {pending ? 'Usuwam...' : 'Usuń na stałe'}
        </button>
        <button type="button" onClick={() => setPotwierdza(false)} className="text-sm text-gray-400 hover:text-gray-600">
          Anuluj
        </button>
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-3 whitespace-nowrap">
      {status === 'AVAILABLE' ? (
        <Link href={`/uzywane/${slug}`} target="_blank" className="text-sm text-gray-500 hover:text-gray-700">
          Podgląd
        </Link>
      ) : (
        <button
          type="button"
          disabled={pending}
          onClick={() => startTransition(() => void zmienStatus(id, 'AVAILABLE'))}
          className="text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50"
        >
          Przywróć
        </button>
      )}
      <Link href={`/admin/uzywane/${id}`} className="text-sm text-primary-600 hover:text-primary-700">
        Edytuj
      </Link>
      <button type="button" onClick={() => setPotwierdza(true)} className="text-sm text-gray-400 hover:text-red-600">
        Usuń
      </button>
    </span>
  )
}
