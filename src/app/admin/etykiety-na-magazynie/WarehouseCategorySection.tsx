'use client'
import { useState } from 'react'
import type { WarehouseProduct } from '@/lib/takma-warehouse'
import { warehouseSize, warehouseSizes } from '@/lib/warehouse-sizes'

const number = (n: number) => n.toLocaleString('pl-PL')
const date = (n: number) => new Date(n).toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })

export default function WarehouseCategorySection({ category: c, products: allProducts }: {
  category: { key: string; id: string; title: string }; products: WarehouseProduct[]
}) {
  const [size, setSize] = useState('')
  const sizes = warehouseSizes(allProducts)
  const hasUnknown = allProducts.some(p => warehouseSize(p) === null)
  // Keep a valid selection through the existing 15-second server refresh.
  const selected = sizes.includes(size) || (size === 'unknown' && hasUnknown) ? size : ''
  const products = allProducts.filter(p => !selected || (selected === 'unknown' ? warehouseSize(p) === null : warehouseSize(p) === selected))
  return <section key={c.key} id={c.id} className="scroll-mt-24 overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 px-5 py-4">
          <h2 className="text-lg font-semibold text-gray-900">{c.title}</h2>
          <div className="flex flex-wrap items-center gap-3">
            <label htmlFor={`rozmiar-${c.id}`} className="text-sm font-medium text-gray-700">Rozmiar</label>
            <select id={`rozmiar-${c.id}`} value={selected} onChange={event => setSize(event.target.value)} className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="">Wszystkie rozmiary</option>
              {sizes.map(size => <option key={size} value={size}>{size}</option>)}
              {hasUnknown && <option value="unknown">Rozmiar niepodany</option>}
            </select>
            {selected && <button type="button" onClick={() => setSize('')} className="text-sm font-medium text-blue-700 hover:underline">Wyczyść filtr</button>}
          </div>
        </div>
        {selected && <p role="status" className="px-5 pt-4 text-sm text-gray-500">Produkty: {products.length} z {allProducts.length} · Rolki: {number(products.reduce((sum, p) => sum + p.rolls, 0))}</p>}
        {!products.length ? <p className="p-5 text-sm text-gray-500">Nie zapisano jeszcze policzonych kartonów w tej grupie.</p> :
          <div className="overflow-x-auto"><table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500"><tr><th className="px-5 py-3">PN</th><th className="px-5 py-3">Produkt i wariant</th><th className="px-5 py-3 text-right">Dostępne rolki</th><th className="px-5 py-3 text-right">Kartony</th><th className="px-5 py-3 text-right">Półka</th></tr></thead>
            <tbody className="divide-y divide-gray-100">{products.map(p=><tr key={p.id} className="align-top">
              <td className="whitespace-nowrap px-5 py-4 font-semibold text-gray-900">{p.url ? <a href={p.url} className="text-blue-700 hover:underline">{p.pn}</a> : p.pn}</td>
              <td className="min-w-[260px] px-5 py-4"><p className="font-medium text-gray-900">{p.name}</p><p className="mt-1 text-gray-500">{p.variant}</p><p className="mt-1 text-xs text-gray-500">Policzono: {number(p.countedRolls)} · Wydano: {number(p.issuedRolls)}</p>
                <details className="mt-3 text-xs text-gray-500"><summary className="cursor-pointer text-blue-700">Pokaż policzone kartony</summary>
                  <ul className="mt-2 space-y-2">{p.cartons.map(box=><li key={box.id}><span className="font-medium text-gray-700">{box.number} · Rolki: {number(box.rolls)}</span>{box.location && <> · Półka: {box.location}</>}<br/>{box.worker} · {date(box.countedAt)}</li>)}</ul>
                </details>
              </td><td className="px-5 py-4 text-right text-lg font-semibold tabular-nums text-gray-900">{number(p.rolls)}</td><td className="px-5 py-4 text-right tabular-nums text-gray-600">{number(p.cartons.length)}</td><td className="min-w-[100px] px-5 py-4 text-right font-semibold text-blue-700">{Array.from(new Set(p.cartons.map(box=>box.location).filter(Boolean))).join(', ')||'—'}</td>
            </tr>)}</tbody>
          </table></div>}
      </section>

}
