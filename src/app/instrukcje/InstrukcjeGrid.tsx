'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  SearchIcon,
  ChevronRightIcon,
  FilterIcon,
} from '@/components/ui/Icons'
import {
  manuals,
  manualCategories,
  docTypeMeta,
  categoryLabel,
  type ManualCategory,
} from '@/data/manuals'

type FilterKey = 'all' | ManualCategory

const docTagClass: Record<string, string> = {
  'quick-start': 'bg-emerald-100 text-emerald-700',
  'user-guide': 'bg-blue-100 text-blue-700',
  programming: 'bg-purple-100 text-purple-700',
  service: 'bg-amber-100 text-amber-700',
  datasheet: 'bg-slate-100 text-slate-700',
}

export default function InstrukcjeGrid() {
  const [selectedCategory, setSelectedCategory] = useState<FilterKey>('all')
  const [query, setQuery] = useState('')

  // Kategorie, które faktycznie mają instrukcje (puste nie pokazujemy)
  const activeCategories = useMemo(
    () =>
      manualCategories.filter((c) =>
        manuals.some((m) => m.category === c.id),
      ),
    [],
  )

  const filtered = useMemo(() => {
    return manuals.filter((m) => {
      if (selectedCategory !== 'all' && m.category !== selectedCategory) {
        return false
      }
      if (query) {
        const q = query.toLowerCase()
        return (
          m.model.toLowerCase().includes(q) ||
          m.name.toLowerCase().includes(q) ||
          m.brand.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [selectedCategory, query])

  return (
    <div>
      {/* Szukajka */}
      <div className="relative max-w-xl mb-6">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
          <SearchIcon size={20} />
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Szukaj modelu, marki lub urządzenia…"
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400"
          aria-label="Szukaj instrukcji"
        />
      </div>

      {/* Filtry kategorii */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium border transition-colors ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <FilterIcon size={16} /> Wszystkie
        </button>
        {activeCategories.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium border transition-colors ${
              selectedCategory === c.id
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid kart */}
      {filtered.length === 0 ? (
        <p className="text-slate-500 py-12 text-center">
          Brak instrukcji dla wybranych kryteriów. Spróbuj innej frazy.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((m) => (
            <Link
              key={m.slug}
              href={`/instrukcje/${m.slug}`}
              className="group block rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                  {categoryLabel(m.category)}
                </span>
                <span className="text-xs text-slate-400">
                  {m.documents.length}{' '}
                  {m.documents.length === 1 ? 'dokument' : 'dokumenty'}
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900">{m.name}</h2>
              <p className="text-sm text-slate-500 line-clamp-2 mt-1 mb-3">
                {m.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {m.polishManual && (
                  <span className="px-1.5 py-0.5 rounded text-[11px] font-medium bg-rose-100 text-rose-700">
                    Instrukcja PL
                  </span>
                )}
                {m.documents.map((d, i) => (
                  <span
                    key={i}
                    className={`px-1.5 py-0.5 rounded text-[11px] font-medium ${
                      docTagClass[d.type] ?? 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {docTypeMeta[d.type].short}
                    {d.lang === 'pl' ? ' PL' : ' EN'}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-0.5 text-sm font-medium text-blue-600">
                Zobacz instrukcję
                <ChevronRightIcon
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
