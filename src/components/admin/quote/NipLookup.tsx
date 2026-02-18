'use client'

import { useState } from 'react'
import { useQuoteStore } from '@/store/quoteStore'

export default function NipLookup() {
  const { client, setClient } = useQuoteStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

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
