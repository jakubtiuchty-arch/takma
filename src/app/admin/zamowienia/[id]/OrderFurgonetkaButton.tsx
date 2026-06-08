'use client'

import { useState, useTransition } from 'react'
import { generateFurgonetkaShipment } from '@/actions/admin-orders'

const COURIERS = ['DPD', 'InPost', 'DHL', 'GLS', 'UPS', 'FedEx', 'Poczta Polska', 'Orlen Paczka']

export default function OrderFurgonetkaButton({ orderId }: { orderId: string }) {
  const [isPending, startTransition] = useTransition()
  const [carrier, setCarrier] = useState('DPD')
  const [msg, setMsg] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function openPdf(base64: string) {
    try {
      const bin = atob(base64)
      const arr = new Uint8Array(bin.length)
      for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i)
      const url = URL.createObjectURL(new Blob([arr], { type: 'application/pdf' }))
      window.open(url, '_blank')
    } catch {
      /* ignore */
    }
  }

  function run() {
    setMsg(null)
    setError(null)
    startTransition(async () => {
      const res = await generateFurgonetkaShipment(orderId, carrier)
      if (!res.ok) setError(res.error)
      else {
        const warning = 'warning' in res ? res.warning : undefined
        setMsg(warning || `List utworzony${res.tracking ? `: ${res.tracking}` : ''} — mail do klienta wysłany.`)
        if (res.labelBase64) openPdf(res.labelBase64)
      }
    })
  }

  return (
    <div className="space-y-2">
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Kurier (Furgonetka)</label>
        <select
          value={carrier}
          onChange={(e) => setCarrier(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
        >
          {COURIERS.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={run}
        disabled={isPending}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 disabled:opacity-50"
      >
        {isPending ? 'Generuję list…' : 'Generuj list (Furgonetka)'}
      </button>
      {msg && <p className="text-xs text-emerald-700">{msg}</p>}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}
