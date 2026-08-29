'use client'

import { useState, useTransition } from 'react'
import { zapiszWykorzystanie } from './actions'

/**
 * Wiersz pozycji koncesji. Licznik wykorzystania prowadzimy ręcznie — Zebra
 * rozlicza limit na całą koncesję, a zamówienia idą przez różnych dystrybutorów,
 * więc nie ma czego automatycznie odejmować.
 */
export default function WierszPozycji({
  id, partNumber, description, cena, cenaPln, rabat, maxQty, usedQty, zablokowany,
}: {
  id: string
  partNumber: string
  description: string | null
  cena: string
  cenaPln: string
  rabat: string
  maxQty: number | null
  usedQty: number
  zablokowany: boolean
}) {
  const [wartosc, setWartosc] = useState(String(usedQty))
  const [pending, start] = useTransition()
  const zostalo = maxQty != null ? Math.max(0, maxQty - Number(wartosc || 0)) : null

  return (
    <tr>
      <td className="px-5 py-2.5">
        <span className="font-mono text-gray-900">{partNumber}</span>
        {description && <span className="block text-xs text-gray-400 truncate max-w-[280px]">{description}</span>}
      </td>
      <td className="px-3 py-2.5 text-right tabular-nums text-gray-900">{cena}</td>
      <td className="px-3 py-2.5 text-right tabular-nums text-gray-500">{cenaPln}</td>
      <td className="px-3 py-2.5 text-right tabular-nums text-gray-500">{rabat}</td>
      <td className="px-3 py-2.5 text-right tabular-nums text-gray-500">
        {maxQty ?? '—'}
        {zostalo != null && <span className={`block text-xs ${zostalo === 0 ? 'text-red-600' : 'text-gray-400'}`}>zostało {zostalo}</span>}
      </td>
      <td className="px-5 py-2.5 text-right">
        <input
          type="number"
          min={0}
          value={wartosc}
          disabled={zablokowany || pending}
          onChange={(e) => setWartosc(e.target.value)}
          onBlur={() => {
            const ile = Number(wartosc)
            if (!Number.isNaN(ile) && ile !== usedQty) start(() => void zapiszWykorzystanie(id, ile))
          }}
          className="w-16 text-right border border-gray-200 rounded px-2 py-1 tabular-nums disabled:bg-gray-50 disabled:text-gray-400"
        />
      </td>
    </tr>
  )
}
