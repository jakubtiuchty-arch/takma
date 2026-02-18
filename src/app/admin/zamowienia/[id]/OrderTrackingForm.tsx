'use client'

import { useState, useTransition } from 'react'
import { addOrderTracking } from '@/actions/admin-orders'

export default function OrderTrackingForm({ orderId }: { orderId: string }) {
  const [isPending, startTransition] = useTransition()
  const [trackingNumber, setTrackingNumber] = useState('')
  const [carrier, setCarrier] = useState('DPD')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber.trim()) return
    startTransition(async () => {
      await addOrderTracking(orderId, trackingNumber.trim(), carrier)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Kurier</label>
        <select
          value={carrier}
          onChange={(e) => setCarrier(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
        >
          <option value="DPD">DPD</option>
          <option value="DHL">DHL</option>
          <option value="InPost">InPost</option>
          <option value="UPS">UPS</option>
          <option value="FedEx">FedEx</option>
          <option value="GLS">GLS</option>
          <option value="Poczta Polska">Poczta Polska</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Nr przesyłki</label>
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Numer przesyłki"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
        />
      </div>
      <button
        type="submit"
        disabled={isPending || !trackingNumber.trim()}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
      >
        {isPending ? 'Zapisywanie...' : 'Zapisz i wyślij email'}
      </button>
    </form>
  )
}
