'use client'

import { useState, useEffect, useRef } from 'react'
import { useQuoteStore } from '@/store/quoteStore'

export default function NipLookup() {
  const { client, setClient } = useQuoteStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [historyInfo, setHistoryInfo] = useState('')
  /** NIP-y już sprawdzone w historii — żeby nie odpytywać w kółko przy każdym znaku. */
  const checkedNips = useRef(new Set<string>())

  // Klient wraca po kolejną ofertę: po wpisaniu 10 cyfr dociągamy jego dane
  // z ostatniej wyceny. Uzupełniamy tylko puste pola — tego, co handlowiec
  // zdążył wpisać ręcznie, nie nadpisujemy.
  useEffect(() => {
    const nip = (client.nip ?? '').replace(/\D/g, '')
    if (nip.length !== 10 || checkedNips.current.has(nip)) return

    const timer = setTimeout(async () => {
      checkedNips.current.add(nip)
      try {
        const res = await fetch(`/api/admin/klient-nip?nip=${nip}`)
        if (!res.ok) return
        const data = await res.json()
        if (!data.found) return

        const current = useQuoteStore.getState().client
        const filled: Record<string, string> = {}
        for (const key of ['company', 'contact', 'email', 'phone', 'address'] as const) {
          if (!current[key] && data.client[key]) filled[key] = data.client[key]
        }
        if (Object.keys(filled).length > 0) setClient(filled)
        setHistoryInfo(`Dane uzupełnione z ${data.sourceLabel}`)
      } catch {
        // brak sieci — handlowiec i tak może wpisać ręcznie albo pobrać z GUS
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [client.nip, setClient])

  const lookupNip = async () => {
    const nip = client.nip?.replace(/-/g, '')
    if (!nip || nip.length !== 10) {
      setError('Wpisz 10-cyfrowy NIP')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch(`/api/admin/nip?nip=${nip}`)
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Nie znaleziono')
        return
      }

      setClient({
        company: data.name || client.company,
        address: data.address || client.address,
        nip: data.nip || nip,
      })
    } catch {
      setError('Błąd połączenia z API')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Dane klienta</h3>

      <div className="flex gap-2">
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-500 mb-1">NIP</label>
          <input
            type="text"
            value={client.nip || ''}
            onChange={(e) => setClient({ nip: e.target.value })}
            placeholder="000-000-00-00"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        <div className="flex items-end">
          <button
            type="button"
            onClick={lookupNip}
            disabled={loading}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-900 disabled:opacity-50 whitespace-nowrap"
          >
            {loading ? 'Szukam...' : 'Pobierz z GUS'}
          </button>
        </div>
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
      {historyInfo && !error && <p className="text-xs text-green-700">{historyInfo}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-gray-500 mb-1">Firma</label>
          <input
            type="text"
            value={client.company}
            onChange={(e) => setClient({ company: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Osoba kontaktowa</label>
          <input
            type="text"
            value={client.contact || ''}
            onChange={(e) => setClient({ contact: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Email</label>
          <input
            type="email"
            value={client.email || ''}
            onChange={(e) => setClient({ email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Telefon</label>
          <input
            type="tel"
            value={client.phone || ''}
            onChange={(e) => setClient({ phone: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Adres</label>
          <input
            type="text"
            value={client.address || ''}
            onChange={(e) => setClient({ address: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
      </div>
    </div>
  )
}
