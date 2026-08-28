'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import DeleteQuoteButton from './DeleteQuoteButton'

/**
 * Lista ofert z wyszukiwaniem w trakcie pisania.
 *
 * Ofert jest ~110, więc cała lista jedzie do przeglądarki i filtrujemy w
 * pamięci — wyniki pojawiają się po każdym znaku, bez zapytania do serwera i
 * bez opóźnienia. Serwer przygotowuje gotowe pole `szukajka` (numer oferty,
 * klient, numery katalogowe, nazwy produktów, notatki — wszystko małymi
 * literami), więc filtrowanie to jedno `includes`, a do przeglądarki nie lecą
 * pełne treści notatek.
 */

export interface OfertaDto {
  id: string
  quoteNumber: string
  clientCompany: string
  clientEmail: string | null
  status: string
  statusLabel: string
  statusClass: string
  totalBrutto: number
  validUntil: string
  createdAt: string
  pozycji: number
  pozycjeOpis: string
  szukajka: string
}

const odmiana = (n: number) =>
  n === 1 ? 'ofertę' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 'oferty' : 'ofert'

export default function ListaOfert({ oferty, fraza }: { oferty: OfertaDto[]; fraza: string }) {
  const [q, setQ] = useState(fraza)

  // Adres nadąża za wpisywaniem, żeby wynik dało się odświeżyć albo wysłać
  // linkiem. replaceState zamiast routera — nie przeładowuje strony.
  useEffect(() => {
    const url = q.trim() ? `/admin/oferty?q=${encodeURIComponent(q.trim())}` : '/admin/oferty'
    window.history.replaceState(null, '', url)
  }, [q])

  const widoczne = useMemo(() => {
    const szukane = q.trim().toLowerCase()
    if (!szukane) return oferty
    // Wiele słów = wszystkie muszą pasować („zebra restyle" znajdzie ofertę
    // dla Restyle z Zebrą, a nie wszystko, co ma choć jedno z tych słów).
    const slowa = szukane.split(/\s+/)
    return oferty.filter((o) => slowa.every((s) => o.szukajka.includes(s)))
  }, [oferty, q])

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoFocus
          placeholder="Zacznij pisać: numer katalogowy, model, klient, NIP, numer oferty…"
          className="flex-1 min-w-[280px] rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
        {q && (
          <button type="button" onClick={() => setQ('')} className="px-4 py-2.5 text-sm text-gray-500 hover:text-gray-700">
            Wyczyść
          </button>
        )}
      </div>

      <p className="text-sm text-gray-500 mb-4">
        {q.trim()
          ? widoczne.length === 0
            ? <>Nic nie pasuje do &bdquo;{q.trim()}&rdquo;.</>
            : <>Znaleziono {widoczne.length} {odmiana(widoczne.length)} z {oferty.length}.</>
          : <>Wszystkie oferty: {oferty.length}.</>}
      </p>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nr oferty</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Klient</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pozycje</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Kwota brutto</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ważna do</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Utworzona</th>
                <th className="px-4 py-3 w-10 text-right text-xs font-medium text-gray-500 uppercase">Akcje</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {widoczne.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-12 text-center text-gray-500">
                    {q.trim() ? (
                      <>Nic nie pasuje do &bdquo;{q.trim()}&rdquo;. <button type="button" onClick={() => setQ('')} className="text-blue-600 hover:underline">Pokaż wszystkie</button></>
                    ) : (
                      <>Brak ofert. <Link href="/admin/oferty/nowa" className="text-blue-600 hover:underline">Utwórz pierwszą ofertę</Link></>
                    )}
                  </td>
                </tr>
              ) : (
                widoczne.map((o) => (
                  <tr key={o.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <Link href={`/admin/oferty/${o.id}`} className="text-sm font-medium text-blue-600 hover:underline whitespace-nowrap">
                        {o.quoteNumber}
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm font-medium text-gray-900">{o.clientCompany}</div>
                      {o.clientEmail && <div className="text-xs text-gray-500">{o.clientEmail}</div>}
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm text-gray-900">{o.pozycji}</div>
                      <div className="text-xs text-gray-400 max-w-[260px] truncate" title={o.pozycjeOpis}>{o.pozycjeOpis}</div>
                    </td>
                    <td className="px-4 py-3 text-right text-sm font-medium tabular-nums whitespace-nowrap">
                      {(o.totalBrutto / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2 })} zł
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={clsx('inline-flex px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap', o.statusClass)}>
                        {o.statusLabel}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{o.validUntil}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{o.createdAt}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-3 whitespace-nowrap">
                        {/* Kopia oferty: pozycje i warunki zostają, klient do wpisania */}
                        <Link
                          href={`/admin/oferty/nowa?kopiaZ=${o.id}`}
                          className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                          title="Nowa oferta z tymi samymi pozycjami"
                        >
                          Dodaj podobną
                        </Link>
                        <DeleteQuoteButton quoteId={o.id} quoteNumber={o.quoteNumber} />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
