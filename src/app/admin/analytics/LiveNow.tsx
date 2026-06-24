'use client'

import { useEffect, useState } from 'react'
import type { GaRealtime } from '@/lib/ga'

interface LiveIp { ip: string; path: string; city: string | null; country: string | null; minutesAgo: number }
type LiveData = GaRealtime & { liveIps?: LiveIp[] }

/**
 * Sekcja „Na żywo": kto jest teraz na stronie (Realtime API, ostatnie 30 min)
 * + skąd przyszły dzisiejsze sesje (intraday — GA4 nie udostępnia źródeł
 * w realtime). Odświeża się co 30 s.
 */
export default function LiveNow() {
  const [data, setData] = useState<LiveData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [updatedAt, setUpdatedAt] = useState<string>('')

  useEffect(() => {
    let alive = true
    const load = async () => {
      try {
        // Endpoint pod /admin/* — cookie sesji admina ma path '/admin' i nie jest
        // wysyłane na /api/*, stąd route obok strony (wzorzec jak /admin/empik/*).
        const res = await fetch('/admin/analytics/realtime', { cache: 'no-store' })
        const d = await res.json()
        if (!alive) return
        if (!res.ok) { setError(d.error || `HTTP ${res.status}`); return }
        setData(d)
        setError(null)
        setUpdatedAt(new Date().toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
      } catch (e) {
        if (alive) setError((e as Error).message)
      }
    }
    load()
    // 60 s = zgodne z serwerowym cache GA Realtime (TTL) → nie przepala limitu tokenów
    const timer = setInterval(load, 60000)
    return () => { alive = false; clearInterval(timer) }
  }, [])

  const maxMin = Math.max(1, ...(data?.byMinute.map((m) => m.users) || [1]))

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
      <div className="flex items-center gap-3 flex-wrap mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Na żywo</h2>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-semibold bg-emerald-50 text-emerald-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {data ? data.activeUsers : '…'} {data?.activeUsers === 1 ? 'osoba' : 'osób'} na stronie
        </span>
        <span className="text-xs text-gray-400 ml-auto">
          {error ? `błąd: ${error}` : updatedAt ? `odświeżono ${updatedAt} · auto co 30 s` : 'ładowanie…'}
        </span>
      </div>

      {/* Aktywni minuta po minucie (ostatnie 30 min) */}
      <div className="flex items-end gap-px h-12 mb-5" title="Aktywni użytkownicy minuta po minucie (ostatnie 30 min)">
        {(data?.byMinute || Array.from({ length: 30 }, (_, i) => ({ minutesAgo: 29 - i, users: 0 }))).map((m) => (
          <div key={m.minutesAgo} className="flex-1 flex flex-col justify-end h-full" title={`${m.minutesAgo} min temu: ${m.users}`}>
            <div
              className={`rounded-t min-h-[2px] ${m.users > 0 ? 'bg-emerald-500/80' : 'bg-gray-100'}`}
              style={{ height: `${(m.users / maxMin) * 100}%` }}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Gdzie są teraz</h3>
          {!data || data.pages.length === 0 ? (
            <p className="text-xs text-gray-400">Nikogo nie ma w tej chwili (ostatnie 30 min puste).</p>
          ) : (
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                {data.pages.map((p, i) => (
                  <tr key={i}>
                    <td className="py-1.5 pr-2 text-gray-800 truncate max-w-[300px]" title={p.label}>{p.label}</td>
                    <td className="py-1.5 text-right tabular-nums text-gray-700 whitespace-nowrap">{p.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Skąd przyszli dzisiaj{' '}
            <span className="font-normal text-gray-400" title="GA4 nie udostępnia źródeł w czasie rzeczywistym — to dane z dzisiejszego dnia (opóźnienie kilku–kilkunastu minut).">
              (sesje / użytkownicy)
            </span>
          </h3>
          {!data || data.sourcesToday.length === 0 ? (
            <p className="text-xs text-gray-400">Jeszcze brak dzisiejszych sesji.</p>
          ) : (
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                {data.sourcesToday.map((s, i) => (
                  <tr key={i}>
                    <td className="py-1.5 pr-2 text-gray-800 truncate max-w-[300px]" title={s.label}>{s.label}</td>
                    <td className="py-1.5 text-right tabular-nums text-gray-700 whitespace-nowrap">{s.value}</td>
                    <td className="py-1.5 pl-3 text-right tabular-nums text-gray-400 whitespace-nowrap">{s.value2 || 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Adresy IP teraz na stronie (własny log żądań — retencja 48 h) */}
      <div className="mt-5 pt-5 border-t border-gray-100">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          Adresy IP na stronie{' '}
          <span className="font-normal text-gray-400" title="Z własnego logu żądań (Vercel). Unikalne IP z ostatnich 10 minut. Dane techniczne, retencja 48 h.">
            (ostatnie 10 min)
          </span>
        </h3>
        {!data?.liveIps || data.liveIps.length === 0 ? (
          <p className="text-xs text-gray-400">Brak aktywnych adresów w ostatnich 10 minutach.</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-400">
                <th className="font-medium pb-1">IP</th>
                <th className="font-medium pb-1">Miasto</th>
                <th className="font-medium pb-1">Strona</th>
                <th className="font-medium pb-1 text-right">Aktywność</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.liveIps.map((v, i) => (
                <tr key={i}>
                  <td className="py-1.5 pr-2 font-mono text-xs text-gray-800 whitespace-nowrap">{v.ip}</td>
                  <td className="py-1.5 pr-2 text-gray-600 whitespace-nowrap">{[v.city, v.country].filter(Boolean).join(', ') || '—'}</td>
                  <td className="py-1.5 pr-2 text-gray-600 truncate max-w-[280px]" title={v.path}>{v.path}</td>
                  <td className="py-1.5 text-right text-gray-400 whitespace-nowrap">{v.minutesAgo === 0 ? 'teraz' : `${v.minutesAgo} min temu`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
