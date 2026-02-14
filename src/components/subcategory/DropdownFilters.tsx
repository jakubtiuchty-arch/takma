'use client'

import { useState, useMemo } from 'react'
import { Product } from '@/data/products'
import ProductGrid from '@/components/product/ProductGrid'

export interface DropdownFilterDef {
  specKey: string
  label: string
  transform?: 'extract-width' | 'extract-height'
  sort?: 'alpha' | 'numeric'
}

interface DropdownFiltersProps {
  products: Product[]
  filters: DropdownFilterDef[]
  variant?: 'grid' | 'list' | 'compact'
  columns?: 2 | 3 | 4
}

function extractNumeric(val: string): number {
  const match = val.match(/[\d,.]+/)
  return match ? parseFloat(match[0].replace(',', '.')) : 0
}

function applyTransform(value: string, transform?: 'extract-width' | 'extract-height'): string {
  if (!transform) return value
  const parts = value.split('×').map(s => s.trim().replace(/\s*mm\s*$/, ''))
  if (transform === 'extract-width') return parts[0] ? `${parts[0]} mm` : value
  if (transform === 'extract-height') return parts[1] ? `${parts[1]} mm` : value
  return value
}

/** Unikalny klucz filtra (obsługuje dwa filtra na tym samym specKey z różnym transform) */
function filterId(f: DropdownFilterDef): string {
  return f.transform ? `${f.specKey}::${f.transform}` : f.specKey
}

export default function DropdownFilters({
  products,
  filters,
  variant = 'grid',
  columns = 3,
}: DropdownFiltersProps) {
  const [selected, setSelected] = useState<Record<string, string>>({})

  const filterOptions = useMemo(() => {
    const result: Record<string, string[]> = {}
    for (const filter of filters) {
      const id = filterId(filter)
      const values = new Set<string>()
      for (const product of products) {
        const spec = product.specifications.find(s => s.name === filter.specKey)
        if (spec) values.add(applyTransform(spec.value, filter.transform))
      }
      let sorted = Array.from(values)
      if (filter.sort === 'numeric') {
        sorted.sort((a, b) => extractNumeric(a) - extractNumeric(b))
      } else {
        sorted.sort((a, b) => a.localeCompare(b, 'pl'))
      }
      result[id] = sorted
    }
    return result
  }, [products, filters])

  const filteredProducts = useMemo(() => {
    const activeFilters = filters
      .map(f => ({ ...f, id: filterId(f), value: selected[filterId(f)] || '' }))
      .filter(f => f.value !== '')

    if (activeFilters.length === 0) return products

    return products.filter(product =>
      activeFilters.every(f => {
        const spec = product.specifications.find(s => s.name === f.specKey)
        if (!spec) return false
        return applyTransform(spec.value, f.transform) === f.value
      })
    )
  }, [products, selected, filters])

  const hasActiveFilters = Object.values(selected).some(v => v !== '')

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {filters.map(filter => {
          const id = filterId(filter)
          const options = filterOptions[id]
          if (!options || options.length <= 1) return null
          const value = selected[id] || ''
          const isActive = value !== ''

          return (
            <select
              key={id}
              value={value}
              onChange={e => setSelected(prev => ({ ...prev, [id]: e.target.value }))}
              className={`px-4 py-2.5 border rounded-full text-sm font-medium transition-colors appearance-none cursor-pointer pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                isActive
                  ? 'bg-primary-50 border-primary-300 text-primary-700'
                  : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
              }`}
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='${isActive ? '%234f46e5' : '%236b7280'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
            >
              <option value="">{filter.label} — wszystkie</option>
              {options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          )
        })}

        {hasActiveFilters && (
          <button
            onClick={() => setSelected({})}
            className="px-4 py-2.5 text-sm font-medium text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-full transition-colors"
          >
            Wyczyść filtry
          </button>
        )}
      </div>

      <ProductGrid products={filteredProducts} variant={variant} columns={columns} />
    </div>
  )
}
