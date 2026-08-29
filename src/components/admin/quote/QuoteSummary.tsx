'use client'

import { useQuoteStore } from '@/store/quoteStore'

function formatPrice(grosze: number): string {
  return (grosze / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function QuoteSummary() {
  const { items, getSubtotalNetto, getVatAmount, getTotalBrutto, setTerms, validDays, paymentTerms, deliveryTerms, notes, internalNotes, freebiesNote, zebraServiceBanner } =
    useQuoteStore()

  const subtotal = getSubtotalNetto()
  const vat = getVatAmount()
  const total = getTotalBrutto()

  // Zarobek liczymy tylko z pozycji, dla których znamy cenę zakupu — przy
  // reszcie zaznaczamy, ilu pozycji nie obejmuje, zamiast po cichu zaniżać.
  const zCenaZakupu = items.filter((i) => i.purchasePrice && i.purchasePrice > 0)
  const kosztWlasny = zCenaZakupu.reduce((s, i) => s + i.purchasePrice! * i.quantity, 0)
  const przychod = zCenaZakupu.reduce((s, i) => s + i.priceNetto * i.quantity, 0)
  const zarobek = przychod - kosztWlasny
  const marza = kosztWlasny > 0 ? (zarobek / kosztWlasny) * 100 : 0
  const bezCeny = items.length - zCenaZakupu.length

  return (
    <div className="space-y-6">
      {/* Totals */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Netto:</span>
            <span className="font-medium tabular-nums">{formatPrice(subtotal)} zł</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">VAT 23%:</span>
            <span className="tabular-nums">{formatPrice(vat)} zł</span>
          </div>
          <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-300">
            <span>Brutto:</span>
            <span className="tabular-nums">{formatPrice(total)} zł</span>
          </div>
        </div>
      </div>

      {/* Rachunek dla nas — nie trafia do oferty ani do PDF-a */}
      {zCenaZakupu.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Tylko dla nas</p>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Koszt zakupu:</span>
              <span className="tabular-nums">{formatPrice(kosztWlasny)} zł</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className={zarobek <= 0 ? 'text-red-600' : 'text-gray-900'}>Zarobek:</span>
              <span className={`tabular-nums ${zarobek <= 0 ? 'text-red-600' : marza < 5 ? 'text-orange-600' : 'text-green-700'}`}>
                {formatPrice(zarobek)} zł ({marza.toFixed(1)}%)
              </span>
            </div>
            {bezCeny > 0 && (
              <p className="text-xs text-gray-400 pt-1">
                Nie obejmuje {bezCeny} {bezCeny === 1 ? 'pozycji' : 'pozycji'} bez znanej ceny zakupu.
              </p>
            )}
            {zarobek <= 0 && (
              <p className="text-xs text-red-600 pt-1">
                Przy tych cenach oferta nie zarabia — sprawdź rabaty na pozycjach.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Terms */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Warunki oferty</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Ważność (dni)</label>
            <input
              type="number"
              value={validDays}
              onChange={(e) => setTerms({ validDays: parseInt(e.target.value) || 14 })}
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Płatność</label>
            <input
              type="text"
              value={paymentTerms}
              onChange={(e) => setTerms({ paymentTerms: e.target.value })}
              placeholder="np. 14 dni, przedpłata"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Dostawa</label>
            <input
              type="text"
              value={deliveryTerms}
              onChange={(e) => setTerms({ deliveryTerms: e.target.value })}
              placeholder="np. 2-5 dni roboczych"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>
      </div>

      {/* Freebies */}
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Gratisy</label>
        <input
          type="text"
          value={freebiesNote}
          onChange={(e) => setTerms({ freebiesNote: e.target.value })}
          placeholder="np. Etykiety testowe 1 rolka, kabel USB"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
        />
      </div>

      {/* Notes */}
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Uwagi na ofercie (widoczne dla klienta)</label>
        <textarea
          value={notes}
          onChange={(e) => setTerms({ notes: e.target.value })}
          rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-y"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Notatki wewnętrzne (niewidoczne)</label>
        <textarea
          value={internalNotes}
          onChange={(e) => setTerms({ internalNotes: e.target.value })}
          rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-y"
        />
      </div>

      <div className="pt-4 border-t border-gray-200">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={zebraServiceBanner}
            onChange={(e) => setTerms({ zebraServiceBanner: e.target.checked })}
            className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded"
          />
          <span className="text-sm">
            <span className="font-medium text-gray-900">Baner wsparcia serwisowego Zebra</span>
            <span className="block text-xs text-gray-500 mt-0.5">
              Dodaj na końcu PDF: loga Zebra Premier Solution Partner (Printer Repair + Public Sector Specialist) oraz informację o wsparciu gwarancyjnym i pogwarancyjnym przez serwis-zebry.pl. Używaj przy ofertach na urządzenia Zebra.
            </span>
          </span>
        </label>
      </div>
    </div>
  )
}
