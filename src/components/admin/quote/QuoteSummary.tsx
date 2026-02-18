'use client'

import { useQuoteStore } from '@/store/quoteStore'

function formatPrice(grosze: number): string {
  return (grosze / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function QuoteSummary() {
  const { getSubtotalNetto, getVatAmount, getTotalBrutto, setTerms, validDays, paymentTerms, deliveryTerms, notes, internalNotes, freebiesNote } =
    useQuoteStore()

  const subtotal = getSubtotalNetto()
  const vat = getVatAmount()
  const total = getTotalBrutto()

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
            <select
              value={paymentTerms}
              onChange={(e) => setTerms({ paymentTerms: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
            >
              <option value="7 dni">7 dni</option>
              <option value="14 dni">14 dni</option>
              <option value="21 dni">21 dni</option>
              <option value="30 dni">30 dni</option>
              <option value="Przedpłata">Przedpłata</option>
              <option value="Za pobraniem">Za pobraniem</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Dostawa</label>
            <select
              value={deliveryTerms}
              onChange={(e) => setTerms({ deliveryTerms: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
            >
              <option value="2-5 dni roboczych">2-5 dni roboczych</option>
              <option value="1-3 dni robocze">1-3 dni robocze</option>
              <option value="7-10 dni roboczych">7-10 dni roboczych</option>
              <option value="Do uzgodnienia">Do uzgodnienia</option>
            </select>
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
    </div>
  )
}
