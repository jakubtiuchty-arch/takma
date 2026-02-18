'use client'

import { useQuoteStore, type QuoteItemData } from '@/store/quoteStore'

function formatPrice(grosze: number): string {
  return (grosze / 100).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function ItemRow({ item, index }: { item: QuoteItemData; index: number }) {
  const { updateItem, removeItem, reorderItems } = useQuoteStore()

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="px-3 py-2 text-sm text-gray-500 text-center w-10">
        <div className="flex flex-col gap-0.5">
          {index > 0 && (
            <button
              type="button"
              onClick={() => reorderItems(index, index - 1)}
              className="text-gray-400 hover:text-gray-600"
              title="W górę"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          )}
          <span>{index + 1}</span>
        </div>
      </td>
      <td className="px-3 py-2">
        <input
          type="text"
          value={item.productName}
          onChange={(e) => updateItem(item.id, { productName: e.target.value })}
          className="w-full text-sm border-0 bg-transparent focus:ring-1 focus:ring-blue-500 rounded px-1 py-0.5"
        />
        {item.partNumber && (
          <span className="text-xs text-gray-400 font-mono px-1">{item.partNumber}</span>
        )}
      </td>
      <td className="px-3 py-2 w-20">
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => updateItem(item.id, { quantity: Math.max(1, parseInt(e.target.value) || 1) })}
          min="1"
          className="w-full text-sm text-center border border-gray-200 rounded px-2 py-1"
        />
      </td>
      <td className="px-3 py-2 w-32">
        <input
          type="number"
          value={(item.priceNetto / 100).toFixed(2)}
          onChange={(e) => {
            const val = parseFloat(e.target.value)
            if (!isNaN(val)) {
              const newPrice = Math.round(val * 100)
              const margin = item.purchasePrice && item.purchasePrice > 0
                ? ((newPrice - item.purchasePrice) / item.purchasePrice) * 100
                : undefined
              updateItem(item.id, { priceNetto: newPrice, marginPercent: margin })
            }
          }}
          step="0.01"
          className="w-full text-sm text-right border border-gray-200 rounded px-2 py-1 tabular-nums"
        />
      </td>
      <td className="px-3 py-2 w-28 text-right text-sm font-medium tabular-nums">
        {formatPrice(item.priceNetto * item.quantity)} zł
      </td>
      <td className="px-3 py-2 w-20 text-center">
        {item.marginPercent !== undefined ? (
          <span className={`text-xs font-medium ${item.marginPercent >= 10 ? 'text-green-600' : 'text-orange-600'}`}>
            {item.marginPercent.toFixed(1)}%
          </span>
        ) : (
          <span className="text-xs text-gray-400">—</span>
        )}
      </td>
      <td className="px-3 py-2 w-10">
        <button
          type="button"
          onClick={() => removeItem(item.id)}
          className="text-red-400 hover:text-red-600"
          title="Usuń"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </td>
    </tr>
  )
}

export default function QuoteItemsTable() {
  const items = useQuoteStore((s) => s.items)

  if (items.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400 text-sm">
        Brak pozycji — dodaj produkty z katalogu, ręcznie lub z importu PDF
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-10">Lp.</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Nazwa</th>
            <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-20">Ilość</th>
            <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase w-32">Cena netto</th>
            <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase w-28">Razem netto</th>
            <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-20">Marża</th>
            <th className="px-3 py-2 w-10" />
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <ItemRow key={item.id} item={item} index={i} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
