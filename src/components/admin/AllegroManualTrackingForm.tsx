'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const COURIERS = ['DPD', 'InPost', 'DHL', 'GLS', 'UPS', 'FedEx', 'Poczta Polska', 'Orlen Paczka', 'Geis', 'Ambro Express', 'Inny']

export default function AllegroManualTrackingForm({ orderId }: { orderId: string }) {
  const router = useRouter()
  const [waybill, setWaybill] = useState('')
  const [courier, setCourier] = useState('DPD')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState<string | null>(null)

  async function submit() {
    if (!waybill.trim()) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/admin/allegro/zamowienia/add-tracking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, waybill, courier }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) setError(data?.error || `Błąd ${res.status}`)
      else {
        setDone(`Wysłano do Allegro: ${data.waybill}`)
        setWaybill('')
        router.refresh()
      }
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <h2 className="font-semibold text-gray-900 text-sm mb-1">Numer listu spoza Furgonetki</h2>
      <p className="text-xs text-gray-500 mb-3">
        Wysyłka prosto z magazynu dystrybutora — wpisz numer listu i przewoźnika, a my przekażemy go do Allegro
        (kupujący zobaczy przesyłkę).
      </p>
      <div className="flex flex-wrap items-end gap-2">
        <div className="flex-1 min-w-[180px]">
          <label className="block text-xs text-gray-500 mb-1">Numer listu przewozowego</label>
          <input
            value={waybill}
            onChange={(e) => setWaybill(e.target.value)}
            placeholder="np. 0000123456789"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Przewoźnik</label>
          <select
            value={courier}
            onChange={(e) => setCourier(e.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {COURIERS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={submit}
          disabled={loading || !waybill.trim()}
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-40"
        >
          {loading ? 'Wysyłam…' : 'Dodaj i wyślij do Allegro'}
        </button>
      </div>
      {error && <p className="text-xs text-red-600 mt-2">{error}</p>}
      {done && <p className="text-xs text-emerald-700 mt-2">{done}</p>}
    </div>
  )
}
