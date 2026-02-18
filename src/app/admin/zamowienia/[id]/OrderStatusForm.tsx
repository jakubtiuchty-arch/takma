'use client'

import { useState, useTransition } from 'react'
import { updateOrderStatus } from '@/actions/admin-orders'
import { OrderStatus } from '@/generated/prisma/client'

const statusLabels: Record<OrderStatus, string> = {
  PENDING_PAYMENT: 'Oczekuje na płatność',
  AWAITING_PAYMENT: 'Oczekuje na przelew',
  PAID: 'Opłacone',
  PROCESSING: 'W realizacji',
  SHIPPED: 'Wysłane',
  DELIVERED: 'Dostarczone',
  CANCELLED: 'Anulowane',
  EXPIRED: 'Wygasłe',
  REFUNDED: 'Zwrócone',
}

export default function OrderStatusForm({ orderId, currentStatus }: { orderId: string; currentStatus: OrderStatus }) {
  const [status, setStatus] = useState(currentStatus)
  const [isPending, startTransition] = useTransition()
  const [saved, setSaved] = useState(false)

  const handleChange = (newStatus: OrderStatus) => {
    setStatus(newStatus)
    setSaved(false)
    startTransition(async () => {
      await updateOrderStatus(orderId, newStatus)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    })
  }

  return (
    <div>
      <select
        value={status}
        onChange={(e) => handleChange(e.target.value as OrderStatus)}
        disabled={isPending}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white disabled:opacity-50"
      >
        {Object.entries(statusLabels).map(([key, label]) => (
          <option key={key} value={key}>{label}</option>
        ))}
      </select>
      {isPending && <p className="text-xs text-gray-500 mt-2">Zapisywanie...</p>}
      {saved && <p className="text-xs text-green-600 mt-2">Zapisano</p>}
    </div>
  )
}
