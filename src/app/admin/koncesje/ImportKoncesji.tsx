'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

/**
 * Wgranie PDF-a z PartnerConnect. Dokument czyta serwer (kolumny tabeli trzeba
 * odtworzyć z pozycji tekstu na stronie), tutaj tylko wybór pliku i komunikat.
 */
export default function ImportKoncesji() {
  const router = useRouter()
  const [stan, setStan] = useState<'idle' | 'wysylam'>('idle')
  const [wynik, setWynik] = useState<string | null>(null)
  const [blad, setBlad] = useState<string | null>(null)

  const wyslij = async (plik: File) => {
    setStan('wysylam')
    setWynik(null)
    setBlad(null)
    try {
      const form = new FormData()
      form.append('file', plik)
      const res = await fetch('/api/admin/koncesje', { method: 'POST', body: form })
      const dane = await res.json()
      if (res.ok) {
        const co = dane.source === 'JARLTECH'
          ? `ofertę Jarltecha ${dane.docNumber ?? ''} do koncesji ${dane.requestId}`
          : `koncesję ${dane.requestId}`
        setWynik(`Wczytano ${co} dla ${dane.reseller} — ${dane.pozycji} pozycji, ważna do ${new Date(dane.waznaDo).toLocaleDateString('pl-PL')}.`)
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
      <h2 className="font-semibold text-gray-900">Wczytaj dokument z ceną specjalną</h2>
      <p className="text-sm text-gray-500 mt-0.5 mb-3">
        Rozpoznajemy dwa rodzaje: koncesję &bdquo;Price Concession&rdquo; z PartnerConnect i ofertę Jarltecha
        wystawioną na tę koncesję. Numery katalogowe, ceny, ilości i termin czytamy z pliku — nic nie
        trzeba przepisywać. Nowa wersja zastępuje poprzednią, ale koncesja Zebry i oferta dystrybutora
        żyją obok siebie, bo mówią o innej cenie.
      </p>
      <input
        type="file"
        accept="application/pdf"
        disabled={stan === 'wysylam'}
        onChange={(e) => {
          const plik = e.target.files?.[0]
          if (plik) void wyslij(plik)
          e.target.value = ''
        }}
        className="text-sm"
      />
      {stan === 'wysylam' && <p className="text-sm text-gray-500 mt-2">Czytam dokument…</p>}
      {wynik && <p className="text-sm text-green-700 mt-2">{wynik}</p>}
      {blad && <p className="text-sm text-red-600 mt-2">{blad}</p>}
    </div>
  )
}
