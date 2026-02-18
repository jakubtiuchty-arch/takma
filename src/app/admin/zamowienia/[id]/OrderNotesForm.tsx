'use client'

import { useState, useTransition } from 'react'
import { addOrderNote } from '@/actions/admin-orders'

export default function OrderNotesForm({ orderId, currentNotes }: { orderId: string; currentNotes: string }) {
  const [notes, setNotes] = useState(currentNotes)
  const [isPending, startTransition] = useTransition()
  const [saved, setSaved] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(false)
    startTransition(async () => {
      await addOrderNote(orderId, notes)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notatki administracyjne..."
        rows={4}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-y"
      />
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-900 disabled:opacity-50"
        >
          {isPending ? 'Zapisywanie...' : 'Zapisz notatki'}
        </button>
        {saved && <span className="text-xs text-green-600">Zapisano</span>}
      </div>
    </form>
  )
}
