'use client'

import { useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { Product } from '@/data/products'
import ProductGrid from '@/components/product/ProductGrid'
import { FilterIcon, CloseIcon, ChevronDownIcon } from '@/components/ui/Icons'

export interface FilterDefinition {
  specKey: string
  label: string
  sort?: 'alpha' | 'numeric' | 'none'
  displayMap?: Record<string, string>
  transform?: 'extract-width' | 'extract-height'
  /** checkbox (domyślny, multi-select) lub dropdown (single-select) */
  style?: 'checkbox' | 'dropdown'
}

export interface CategoryNavItem {
  id: string
  slug: string
  name: string
  productCount: number
  isParent?: boolean
  isCurrent?: boolean
  children?: { id: string; slug: string; name: string; productCount: number; isCurrent: boolean }[]
}

interface FilterableProductGridProps {
  products: Product[]
  filters: FilterDefinition[]
  categoryNav: CategoryNavItem[]
  variant?: 'grid' | 'list' | 'compact'
  columns?: 2 | 3 | 4
  children?: React.ReactNode
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

function fId(f: FilterDefinition): string {
  return f.transform ? `${f.specKey}::${f.transform}` : f.specKey
}

export default function FilterableProductGrid({
  products,
  filters,
  categoryNav,
  variant = 'grid',
  columns = 3,
  children,
}: FilterableProductGridProps) {
  const [activeFilters, setActiveFilters] = useState<Record<string, Set<string>>>({})
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    () => Object.fromEntries(filters.map(f => [fId(f), true]))
  )
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Mapa filter ID → transform
  const filterLookup = useMemo(
    () => Object.fromEntries(filters.map(f => [fId(f), f])),
    [filters]
  )

  // Wszystkie opcje (bez cross-filtrowania) — do checkboxów
  const allFilterOptions = useMemo(() => {
    const result: Record<string, string[]> = {}
    for (const filter of filters) {
      const id = fId(filter)
      const values = new Set<string>()
      for (const product of products) {
        const spec = product.specifications.find(s => s.name === filter.specKey)
        if (spec) values.add(applyTransform(spec.value, filter.transform))
      }
      let sorted = Array.from(values)
      if (filter.sort === 'numeric') {
        sorted.sort((a, b) => extractNumeric(a) - extractNumeric(b))
      } else if (filter.sort !== 'none') {
        sorted.sort((a, b) => a.localeCompare(b, 'pl'))
      }
      result[id] = sorted
    }
    return result
  }, [products, filters])

  // Opcje z cross-filtrowaniem — dla dropdownów: tylko wartości dostępne przy aktywnych INNYCH filtrach
  const filteredOptions = useMemo(() => {
    const result: Record<string, string[]> = {}
    for (const filter of filters) {
      const id = fId(filter)
      const otherActive = Object.entries(activeFilters)
        .filter(([k, v]) => k !== id && v.size > 0)

      // Produkty pasujące do WSZYSTKICH innych filtrów
      const matchingProducts = otherActive.length === 0
        ? products
        : products.filter(p => otherActive.every(([otherId, sv]) => {
            const otherDef = filterLookup[otherId]
            if (!otherDef) return true
            const s = p.specifications.find(sp => sp.name === otherDef.specKey)
            if (!s) return false
            return sv.has(applyTransform(s.value, otherDef.transform))
          }))

      const values = new Set<string>()
      for (const product of matchingProducts) {
        const spec = product.specifications.find(s => s.name === filter.specKey)
        if (spec) values.add(applyTransform(spec.value, filter.transform))
      }
      let sorted = Array.from(values)
      if (filter.sort === 'numeric') {
        sorted.sort((a, b) => extractNumeric(a) - extractNumeric(b))
      } else if (filter.sort !== 'none') {
        sorted.sort((a, b) => a.localeCompare(b, 'pl'))
      }
      result[id] = sorted
    }
    return result
  }, [products, filters, activeFilters, filterLookup])

  const filteredProducts = useMemo(() => {
    const activeKeys = Object.entries(activeFilters).filter(([, vals]) => vals.size > 0)
    if (activeKeys.length === 0) return products

    return products.filter(product => {
      return activeKeys.every(([id, selectedValues]) => {
        const def = filterLookup[id]
        if (!def) return true
        const spec = product.specifications.find(s => s.name === def.specKey)
        if (!spec) return false
        return selectedValues.has(applyTransform(spec.value, def.transform))
      })
    })
  }, [products, activeFilters, filterLookup])

  const totalActiveCount = useMemo(
    () => Object.values(activeFilters).reduce((sum, s) => sum + s.size, 0),
    [activeFilters]
  )

  const toggleFilter = useCallback((id: string, value: string) => {
    setActiveFilters(prev => {
      const current = new Set(prev[id] || [])
      if (current.has(value)) {
        current.delete(value)
      } else {
        current.add(value)
      }
      return { ...prev, [id]: current }
    })
  }, [])

  const setDropdownFilter = useCallback((id: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [id]: value ? new Set([value]) : new Set(),
    }))
  }, [])

  const clearAll = useCallback(() => {
    setActiveFilters({})
  }, [])

  const toggleGroup = useCallback((id: string) => {
    setExpandedGroups(prev => ({ ...prev, [id]: !prev[id] }))
  }, [])

  const productWord = filteredProducts.length === 1
    ? 'produkt'
    : filteredProducts.length < 5
      ? 'produkty'
      : 'produktów'

  const filterSidebarContent = (
    <>
      {/* Nawigacja kategorii */}
      <div className="mb-6">
        <h2 className="font-semibold text-gray-900 mb-3">Kategoria</h2>
        <ul className="space-y-1">
          {categoryNav.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`/${cat.slug}`}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  cat.isParent
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {cat.name}
                <span className="text-gray-400 ml-1">({cat.productCount})</span>
              </Link>
              {cat.isParent && cat.children && cat.children.length > 0 && (
                <ul className="ml-3 mt-1 space-y-0.5">
                  {cat.children.map((sub) => (
                    <li key={sub.id}>
                      <Link
                        href={`/${sub.slug}`}
                        className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${
                          sub.isCurrent
                            ? 'bg-primary-50 text-primary-700 font-medium'
                            : 'text-gray-500 hover:bg-primary-50 hover:text-primary-600'
                        }`}
                      >
                        {sub.name}
                        <span className="text-gray-400 ml-1">({sub.productCount})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Separator */}
      <div className="border-t border-gray-200 mb-5" />

      {/* Filtry */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900 flex items-center gap-2">
            <FilterIcon size={16} className="text-gray-500" />
            Filtry
          </h2>
          {totalActiveCount > 0 && (
            <button
              onClick={clearAll}
              className="text-xs text-primary-600 hover:text-primary-700 font-medium"
            >
              Wyczyść ({totalActiveCount})
            </button>
          )}
        </div>

        <div className="space-y-3">
          {filters.map(filter => {
            const id = fId(filter)
            const isDropdown = filter.style === 'dropdown'
            // Dropdowny: cross-filtrowane opcje; Checkboxy: pełna lista (count robi cross-filtrowanie)
            const options = isDropdown ? filteredOptions[id] : allFilterOptions[id]
            if (!options || options.length <= 1) return null
            const selected = activeFilters[id] || new Set()

            // ── Dropdown ──
            if (isDropdown) {
              const currentValue = selected.size > 0 ? Array.from(selected)[0] : ''
              const isActive = currentValue !== ''
              return (
                <div key={id}>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">
                    {filter.label}
                  </span>
                  <select
                    value={currentValue}
                    onChange={e => setDropdownFilter(id, e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg text-sm font-medium transition-colors appearance-none cursor-pointer pr-8 outline-none focus:outline-none focus:ring-0 ${
                      isActive
                        ? 'bg-primary-50 border-primary-400 text-primary-700'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='${isActive ? '%234f46e5' : '%236b7280'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center' }}
                  >
                    <option value="">Wszystkie</option>
                    {options.map(opt => (
                      <option key={opt} value={opt}>{filter.displayMap?.[opt] || opt}</option>
                    ))}
                  </select>
                </div>
              )
            }

            // ── Checkbox (accordion) ──
            const isExpanded = expandedGroups[id] !== false
            return (
              <div key={id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleGroup(id)}
                  className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    {filter.label}
                    {selected.size > 0 && (
                      <span className="bg-primary-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center leading-none">
                        {selected.size}
                      </span>
                    )}
                  </span>
                  <ChevronDownIcon
                    size={14}
                    className={`text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-3 pb-3 space-y-1">
                    {options.map(value => {
                      const isSelected = selected.has(value)
                      const displayLabel = filter.displayMap?.[value] || value

                      const otherKeys = Object.entries(activeFilters)
                        .filter(([k, v]) => k !== id && v.size > 0)
                      const count = products.filter(p => {
                        const spec = p.specifications.find(s => s.name === filter.specKey)
                        if (!spec || applyTransform(spec.value, filter.transform) !== value) return false
                        return otherKeys.every(([otherId, sv]) => {
                          const otherDef = filterLookup[otherId]
                          if (!otherDef) return true
                          const s = p.specifications.find(sp => sp.name === otherDef.specKey)
                          if (!s) return false
                          return sv.has(applyTransform(s.value, otherDef.transform))
                        })
                      }).length

                      return (
                        <label
                          key={value}
                          className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm cursor-pointer transition-colors ${
                            count === 0 && !isSelected
                              ? 'text-gray-300 cursor-not-allowed'
                              : isSelected
                                ? 'bg-primary-50 text-primary-700'
                                : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            disabled={count === 0 && !isSelected}
                            onChange={() => toggleFilter(id, value)}
                            className="w-3.5 h-3.5 rounded border-gray-300 text-primary-600 focus:ring-primary-500 focus:ring-1 disabled:opacity-30"
                          />
                          <span className="flex-1 leading-tight">{displayLabel}</span>
                          <span className={`text-xs ${isSelected ? 'text-primary-500' : 'text-gray-400'}`}>
                            {count}
                          </span>
                        </label>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar — desktop */}
      <aside className="hidden lg:block w-60 flex-shrink-0">
        <div className="sticky top-32 max-h-[calc(100vh-9rem)] overflow-y-auto pr-1">
          {filterSidebarContent}
        </div>
      </aside>

      {/* Mobile: przycisk filtrów + drawer */}
      <div className="lg:hidden">
        <button
          onClick={() => setShowMobileFilters(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors w-full justify-center"
        >
          <FilterIcon size={16} />
          Filtry i kategorie
          {totalActiveCount > 0 && (
            <span className="bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalActiveCount}
            </span>
          )}
        </button>

        {showMobileFilters && (
          <>
            <div
              className="fixed inset-0 bg-black/30 z-40"
              onClick={() => setShowMobileFilters(false)}
            />
            <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white z-50 overflow-y-auto shadow-xl">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 sticky top-0 bg-white">
                <span className="font-semibold text-gray-900">Filtry i kategorie</span>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <CloseIcon size={20} />
                </button>
              </div>
              <div className="p-4">
                {filterSidebarContent}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Siatka produktów */}
      <div className="flex-1 min-w-0">
        {totalActiveCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-sm text-gray-500">
              {filteredProducts.length} {productWord}
            </span>
            {Object.entries(activeFilters).map(([id, values]) =>
              Array.from(values).map(val => {
                const def = filterLookup[id]
                const displayLabel = def?.displayMap?.[val] || val
                return (
                  <button
                    key={`${id}-${val}`}
                    onClick={() => def?.style === 'dropdown' ? setDropdownFilter(id, '') : toggleFilter(id, val)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary-50 text-primary-700 rounded-lg text-xs font-medium hover:bg-primary-100 transition-colors"
                  >
                    {displayLabel}
                    <CloseIcon size={12} />
                  </button>
                )
              })
            )}
          </div>
        )}

        <ProductGrid products={filteredProducts} variant={variant} columns={columns} />

        {children}
      </div>
    </div>
  )
}
