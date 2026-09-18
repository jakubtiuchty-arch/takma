'use client'

import { useState } from 'react'
import { etykietaPowiazania } from '@/lib/koncesja-etykieta'
import { useRouter } from 'next/navigation'

/**
 * Wgranie dokumentu z ceną zakupu: PDF-a z PartnerConnect albo oferty Jarltecha
 * (treść czyta serwer — kolumny tabeli trzeba odtworzyć z pozycji tekstu na
 * stronie) oraz cennika producenta w arkuszu. Arkusz nie niesie metryki, więc
 * przy nim pytamy o dostawcę i termin obowiązywania.
 */

/** Pierwszy dzień bieżącego miesiąca i rok później — typowy okres cennika. */
function domyslneDaty() {
  const teraz = new Date()
  const od = new Date(Date.UTC(teraz.getFullYear(), teraz.getMonth(), 1))
  const doKiedy = new Date(Date.UTC(teraz.getFullYear() + 1, teraz.getMonth(), 1))
  const iso = (d: Date) => d.toISOString().slice(0, 10)
  return { od: iso(od), do: iso(doKiedy) }
}

/** „Takma Magicard  VII-2026.xlsx" → „Magicard”. */
function dostawcaZNazwy(nazwa: string): string {
  const bez = nazwa.replace(/\.[a-z]+$/i, '').replace(/takma/gi, ' ')
  const slowo = bez.match(/[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż][\w-]{2,}/)?.[0] ?? ''
  return slowo ? slowo[0].toUpperCase() + slowo.slice(1) : ''
}

export default function ImportKoncesji() {
  const router = useRouter()
  const [stan, setStan] = useState<'idle' | 'wysylam'>('idle')
  const [wynik, setWynik] = useState<string | null>(null)
  const [blad, setBlad] = useState<string | null>(null)
  const [arkusz, setArkusz] = useState<File | null>(null)
  const [dostawca, setDostawca] = useState('')
  const [daty, setDaty] = useState(domyslneDaty())

  const wyslij = async (plik: File, meta?: { dostawca: string; od: string; do: string }) => {
    setStan('wysylam')
    setWynik(null)
    setBlad(null)
    try {
      const form = new FormData()
      form.append('file', plik)
      if (meta) {
        form.append('dostawca', meta.dostawca)
        form.append('od', meta.od)
        form.append('do', meta.do)
      }
      const res = await fetch('/api/admin/koncesje', { method: 'POST', body: form })
      const dane = await res.json()
      if (res.ok) {
        const co =
          dane.source === 'CENNIK'
            ? `cennik ${dane.distributor ?? dane.requestId}`
            : dane.source === 'JARLTECH'
              ? `ofertę Jarltecha ${dane.docNumber ?? ''} na ${etykietaPowiazania(dane.requestId)}`
              : `koncesję ${dane.requestId}`
        const dlaKogo = dane.source === 'CENNIK' ? '' : ` dla ${dane.reseller}`
        setWynik(
          `Wczytano ${co}${dlaKogo} — ${dane.pozycji} pozycji, ważny do ${new Date(dane.waznaDo).toLocaleDateString('pl-PL')}.`
        )
        setArkusz(null)
        setDostawca('')
        router.refresh()
      } else {
        setBlad(dane.error || 'Nie udało się wczytać dokumentu.')
      }
    } catch {
      setBlad('Nie udało się wysłać pliku.')
    }
    setStan('idle')
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-6">
      <h2 className="font-semibold text-gray-900">Wczytaj dokument z ceną zakupu</h2>
      <p className="text-sm text-gray-500 mt-0.5 mb-3">
        Rozpoznajemy trzy rodzaje: koncesję &bdquo;Price Concession&rdquo; z PartnerConnect, ofertę Jarltecha
        wystawioną na tę koncesję i cennik zakupowy producenta w arkuszu (kolumny: numer katalogowy, opis,
        cena netto). Numery, ceny i terminy czytamy z pliku — nic nie trzeba przepisywać. Nowa wersja
        zastępuje poprzednią, ale koncesja Zebry i oferta dystrybutora żyją obok siebie, bo mówią o innej cenie.
      </p>
      <input
        type="file"
        accept="application/pdf,.xlsx,.xls"
        disabled={stan === 'wysylam'}
        onChange={(e) => {
          const plik = e.target.files?.[0]
          e.target.value = ''
          if (!plik) return
          if (/\.xlsx?$/i.test(plik.name)) {
            // Cennik: najpierw metryka, dopiero potem wysyłka
            setArkusz(plik)
            setDostawca(dostawcaZNazwy(plik.name))
            setWynik(null)
            setBlad(null)
          } else {
            void wyslij(plik)
          }
        }}
        className="text-sm"
      />

      {arkusz && (
        <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm text-gray-700 mb-3">
            Cennik <span className="font-medium">{arkusz.name}</span> — powiedz jeszcze, czyj jest i jak długo
            obowiązuje. Na tydzień przed końcem przyjdzie mail, że czas poprosić o nowy.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <label className="text-sm">
              <span className="block text-gray-600 mb-1">Dostawca</span>
              <input
                type="text"
                value={dostawca}
                onChange={(e) => setDostawca(e.target.value)}
                placeholder="Magicard"
                className="w-full rounded-lg border border-gray-300 px-2 py-1.5 text-sm"
              />
            </label>
            <label className="text-sm">
              <span className="block text-gray-600 mb-1">Obowiązuje od</span>
              <input
                type="date"
                value={daty.od}
                onChange={(e) => setDaty({ ...daty, od: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-2 py-1.5 text-sm"
              />
            </label>
            <label className="text-sm">
              <span className="block text-gray-600 mb-1">do</span>
              <input
                type="date"
                value={daty.do}
                onChange={(e) => setDaty({ ...daty, do: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-2 py-1.5 text-sm"
              />
            </label>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <button
              type="button"
              disabled={stan === 'wysylam' || !dostawca.trim()}
              onClick={() => void wyslij(arkusz, { dostawca: dostawca.trim(), od: daty.od, do: daty.do })}
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 disabled:opacity-40"
            >
              Wczytaj cennik
            </button>
            <button
              type="button"
              onClick={() => setArkusz(null)}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Anuluj
            </button>
          </div>
        </div>
      )}

      {stan === 'wysylam' && <p className="text-sm text-gray-500 mt-2">Czytam dokument…</p>}
      {wynik && <p className="text-sm text-green-700 mt-2">{wynik}</p>}
      {blad && <p className="text-sm text-red-600 mt-2">{blad}</p>}
    </div>
  )
}
