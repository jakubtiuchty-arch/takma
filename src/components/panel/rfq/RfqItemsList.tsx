'use client'

import Image from 'next/image'
import { useCustomerRfqStore } from '@/store/customerRfqStore'

export default function RfqItemsList() {
  const items = useCustomerRfqStore((s) => s.items)
  const updateQuantity = useCustomerRfqStore((s) => s.updateQuantity)
  const updateNote = useCustomerRfqStore((s) => s.updateNote)
  const removeItem = useCustomerRfqStore((s) => s.removeItem)

  if (items.length === 0) {
    return (
      <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-8 text-center">
        <svg className="mx-auto h-8 w-8 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25-2.25M12 13.875V7.5M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
        <p className="text-sm text-gray-600 font-medium">Brak pozycji</p>
        <p className="text-xs text-gray-400 mt-1">Wyszukaj produkt powyżej, aby dodać go do zapytania</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-700">
          Pozycje zapytania ({items.length})
        </h3>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Produkt</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase w-28">PN</th>
              <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-28">Ilość</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase w-44">Uwagi</th>
              <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase w-12"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map((item) => (
              <tr key={item.productId} className="hover:bg-gray-50">
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-2.5">
                    {item.productImage ? (
                      <div className="w-8 h-8 bg-gray-50 rounded flex-shrink-0 overflow-hidden relative">
                        <Image src={item.productImage} alt="" fill className="object-contain p-0.5" sizes="32px" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gray-100 rounded flex-shrink-0" />
                    )}
                    <span className="text-sm font-medium text-gray-900 truncate">{item.productName}</span>
                  </div>
                </td>
                <td className="px-3 py-2.5 text-xs text-gray-500 font-mono">
                  {item.partNumber || '—'}
                </td>
                <td className="px-3 py-2.5">
                  <div className="flex items-center justify-center gap-1">
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                      className="w-7 h-7 rounded border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-sm"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value, 10)
                        if (val > 0) updateQuantity(item.productId, val)
                      }}
                      className="w-12 h-7 text-center text-sm border border-gray-300 rounded tabular-nums focus:outline-none focus:ring-1 focus:ring-primary-500"
                    />
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                      className="w-7 h-7 rounded border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-sm"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-3 py-2.5">
                  <input
                    type="text"
                    value={item.note}
                    onChange={(e) => updateNote(item.productId, e.target.value)}
                    placeholder="Opcjonalne uwagi..."
                    className="w-full text-sm border border-gray-200 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-primary-500 placeholder:text-gray-400"
                  />
                </td>
                <td className="px-3 py-2.5 text-center">
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                    title="Usuń"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-2">
        {items.map((item) => (
          <div key={item.productId} className="bg-white rounded-lg border border-gray-200 p-3">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                {item.productImage ? (
                  <div className="w-8 h-8 bg-gray-50 rounded flex-shrink-0 overflow-hidden relative">
                    <Image src={item.productImage} alt="" fill className="object-contain p-0.5" sizes="32px" />
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-gray-100 rounded flex-shrink-0" />
                )}
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{item.productName}</p>
                  {item.partNumber && (
                    <p className="text-xs text-gray-500 font-mono">{item.partNumber}</p>
                  )}
                </div>
              </div>
              <button
                onClick={() => removeItem(item.productId)}
                className="p-1 text-gray-400 hover:text-red-500 flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                  className="w-7 h-7 rounded border border-gray-300 flex items-center justify-center text-gray-600 text-sm"
                >
                  −
                </button>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10)
                    if (val > 0) updateQuantity(item.productId, val)
                  }}
                  className="w-12 h-7 text-center text-sm border border-gray-300 rounded tabular-nums"
                />
                <button
                  onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                  className="w-7 h-7 rounded border border-gray-300 flex items-center justify-center text-gray-600 text-sm"
                >
                  +
                </button>
              </div>
              <input
                type="text"
                value={item.note}
                onChange={(e) => updateNote(item.productId, e.target.value)}
                placeholder="Uwagi..."
                className="flex-1 text-sm border border-gray-200 rounded px-2 py-1 placeholder:text-gray-400"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
