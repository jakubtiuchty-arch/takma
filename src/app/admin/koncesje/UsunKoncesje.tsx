'use client'

import { useState, useTransition } from 'react'
import { usunKoncesje } from './actions'

export default function UsunKoncesje({ id, etykieta }: { id: string; etykieta: string }) {
  const [pending, start] = useTransition()
  const [potwierdza, setPotwierdza] = useState(false)

  // Przycisk siedzi w nagłówku rozwijanej karty — bez zatrzymania kliknięcia
  // każde „Usuń" zwijałoby albo rozwijało kartę pod spodem.
  const bezRozwijania = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  if (!potwierdza) {
    return (
      <button
        type="button"
        onClick={(e) => {
          bezRozwijania(e)
          setPotwierdza(true)
        }}
        className="text-sm text-gray-400 hover:text-red-600"
      >
        Usuń
      </button>
    )
  }
  return (
    <span onClick={bezRozwijania} className="inline-flex items-center gap-2 text-sm whitespace-nowrap">
      <span className="text-gray-500">Usunąć {etykieta}?</span>
      <button type="button" disabled={pending} onClick={() => start(() => void usunKoncesje(id))} className="font-medium text-red-600 hover:text-red-700 disabled:opacity-50">
        {pending ? 'Usuwam…' : 'Tak'}
      </button>
      <button type="button" onClick={() => setPotwierdza(false)} className="text-gray-400 hover:text-gray-600">Anuluj</button>
    </span>
  )
}
