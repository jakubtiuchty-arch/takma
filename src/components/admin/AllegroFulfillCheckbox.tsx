'use client'

import { useState } from 'react'

export default function AllegroFulfillCheckbox({
  orderId,
  initial,
}: {
  orderId: string
  initial: boolean
}) {
  const [checked, setChecked] = useState(initial)
  const [loading, setLoading] = useState(false)

  async function toggle() {
    const next = !checked
    setChecked(next) // optymistycznie
    setLoading(true)
    try {
      const res = await fetch('/admin/allegro/zamowienia/fulfill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, fulfilled: next }),
      })
      if (!res.ok) setChecked(!next) // cofnij przy błędzie
    } catch {
      setChecked(!next)
    } finally {
      setLoading(false)
    }
  }

  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none" onClick={(e) => e.stopPropagation()}>
      <input
        type="checkbox"
        checked={checked}
        onChange={toggle}
        disabled={loading}
        className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
      />
      <span className={`text-xs ${checked ? 'text-emerald-700 font-medium' : 'text-gray-400'}`}>
        {checked ? 'Zrealizowano' : '—'}
      </span>
    </label>
  )
}
