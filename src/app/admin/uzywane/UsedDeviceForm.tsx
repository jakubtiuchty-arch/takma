'use client'

import { useState } from 'react'
import Link from 'next/link'
import { KATEGORIE, STANY } from '@/lib/used-devices'

interface Sztuka {
  id: string
  name: string
  brand: string
  category: string
  partNumber: string | null
  serialNumber: string | null
  conditionGrade: string
  conditionNote: string | null
  accessories: string | null
  description: string | null
  specs: unknown
  priceNetto: number
  newPriceNetto: number | null
  warrantyMonths: number
  status: string
  images: string[]
}

const pole =
  'w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20'
const etykieta = 'block text-sm font-medium text-gray-700 mb-1.5'

function zlotowki(grosze: number | null): string {
  return grosze == null ? '' : String(grosze / 100)
}

function specsDoPola(specs: unknown): string {
  if (!Array.isArray(specs)) return ''
  return specs
    .map(s => (s && typeof s === 'object' && 'nazwa' in s ? `${(s as { nazwa: string }).nazwa}: ${(s as { wartosc: string }).wartosc}` : ''))
    .filter(Boolean)
    .join('\n')
}

/**
 * Formularz jednej sztuki. Zdjęcia idą przez multipart prosto do akcji
 * serwerowej (żadnego pośredniego endpointu) — plików jest kilka na sztukę,
 * a serwer i tak musi je zobaczyć, zanim trafią do bucketa.
 */
export default function UsedDeviceForm({
  sztuka,
  onSubmit,
}: {
  sztuka?: Sztuka
  onSubmit: (form: FormData) => Promise<void>
}) {
  const [zdjecia, setZdjecia] = useState<string[]>(sztuka?.images ?? [])
  const [wysyla, setWysyla] = useState(false)

  return (
    <form
      action={async (form) => {
        setWysyla(true)
        try {
          await onSubmit(form)
        } finally {
          setWysyla(false)
        }
      }}
      className="space-y-6 max-w-3xl"
    >
      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className={etykieta} htmlFor="name">Nazwa <span className="text-red-500">*</span></label>
            <input id="name" name="name" required defaultValue={sztuka?.name} placeholder="Zebra TC57 (2021)" className={pole} />
          </div>
          <div>
            <label className={etykieta} htmlFor="brand">Producent</label>
            <input id="brand" name="brand" defaultValue={sztuka?.brand ?? 'Zebra'} className={pole} />
          </div>
          <div>
            <label className={etykieta} htmlFor="category">Kategoria</label>
            <select id="category" name="category" defaultValue={sztuka?.category ?? 'terminal'} className={pole}>
              {Object.entries(KATEGORIE).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className={etykieta} htmlFor="partNumber">Numer katalogowy</label>
            <input id="partNumber" name="partNumber" defaultValue={sztuka?.partNumber ?? ''} placeholder="TC57BH-2AJK2AA-A6" className={pole} />
          </div>
          <div>
            <label className={etykieta} htmlFor="serialNumber">Numer seryjny <span className="text-gray-400 font-normal">(tylko dla nas)</span></label>
            <input id="serialNumber" name="serialNumber" defaultValue={sztuka?.serialNumber ?? ''} className={pole} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className={etykieta} htmlFor="priceNetto">Cena netto (zł) <span className="text-red-500">*</span></label>
            <input id="priceNetto" name="priceNetto" required defaultValue={zlotowki(sztuka?.priceNetto ?? null)} placeholder="2490" className={pole} />
          </div>
          <div>
            <label className={etykieta} htmlFor="newPriceNetto">Cena nowego (zł)</label>
            <input id="newPriceNetto" name="newPriceNetto" defaultValue={zlotowki(sztuka?.newPriceNetto ?? null)} placeholder="5900" className={pole} />
          </div>
          <div>
            <label className={etykieta} htmlFor="warrantyMonths">Gwarancja (miesiące)</label>
            <input id="warrantyMonths" name="warrantyMonths" type="number" min={0} defaultValue={sztuka?.warrantyMonths ?? 6} className={pole} />
          </div>
          <div>
            <label className={etykieta} htmlFor="conditionGrade">Stan</label>
            <select id="conditionGrade" name="conditionGrade" defaultValue={sztuka?.conditionGrade ?? 'B'} className={pole}>
              {Object.entries(STANY).map(([k, v]) => <option key={k} value={k}>{v.etykieta}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={etykieta} htmlFor="status">Dostępność</label>
            <select id="status" name="status" defaultValue={sztuka?.status ?? 'AVAILABLE'} className={pole}>
              <option value="AVAILABLE">Dostępny — widoczny w ofercie</option>
              <option value="RESERVED">Zarezerwowany — ukryty</option>
              <option value="SOLD">Sprzedany — ukryty</option>
            </select>
          </div>
        </div>

        <div>
          <label className={etykieta} htmlFor="conditionNote">Co widać na tej sztuce</label>
          <input id="conditionNote" name="conditionNote" defaultValue={sztuka?.conditionNote ?? ''} placeholder="Rysy na obudowie z lewej strony, ekran bez zarysowań" className={pole} />
        </div>
        <div>
          <label className={etykieta} htmlFor="accessories">W zestawie</label>
          <input id="accessories" name="accessories" defaultValue={sztuka?.accessories ?? ''} placeholder="Bateria, zasilacz, stacja dokująca" className={pole} />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
        <div>
          <label className={etykieta} htmlFor="description">Opis</label>
          <textarea id="description" name="description" rows={4} defaultValue={sztuka?.description ?? ''} className={pole}
            placeholder="Terminal po jednym najemcy, wymieniona bateria, pełna sprawność potwierdzona testem." />
        </div>
        <div>
          <label className={etykieta} htmlFor="specs">Dane techniczne <span className="text-gray-400 font-normal">— jedna linia = jeden wiersz, format &bdquo;Nazwa: wartość&rdquo;</span></label>
          <textarea id="specs" name="specs" rows={5} defaultValue={specsDoPola(sztuka?.specs)} className={`${pole} font-mono text-xs`}
            placeholder={'Ekran: 5 cali, 1280×720\nSystem: Android 11\nSkaner: SE4770'} />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
        <label className={etykieta} htmlFor="images">Zdjęcia</label>
        {zdjecia.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {zdjecia.map(url => (
              <div key={url} className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt="" className="w-24 h-24 object-cover rounded-lg border border-gray-200" />
                <input type="hidden" name="keepImages" value={url} />
                <button
                  type="button"
                  onClick={() => setZdjecia(zdjecia.filter(z => z !== url))}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-gray-300 text-gray-500 hover:text-red-600 text-sm leading-none"
                  aria-label="Usuń zdjęcie"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
        <input id="images" name="images" type="file" accept="image/jpeg,image/png,image/webp" multiple className="text-sm" />
        <p className="text-xs text-gray-500">Pierwsze zdjęcie jest zdjęciem głównym na liście. Do 10 MB na plik.</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={wysyla}
          className="px-6 py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 disabled:opacity-50 transition-colors"
        >
          {wysyla ? 'Zapisuję...' : sztuka ? 'Zapisz zmiany' : 'Dodaj do oferty'}
        </button>
        <Link href="/admin/uzywane" className="text-sm text-gray-500 hover:text-gray-700">Anuluj</Link>
      </div>
    </form>
  )
}
