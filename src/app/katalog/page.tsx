'use client'

import { useState, useEffect, useMemo, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button, Select, Badge } from '@/components/ui'
import {
  FilterIcon,
  GridIcon,
  ListIcon,
  CloseIcon,
  ChevronDownIcon,
} from '@/components/ui/Icons'
import { ProductGrid } from '@/components/product'
import {
  products,
  categories,
  manufacturers,
  filterProducts,
  ProductTag,
} from '@/data/products'
import clsx from 'clsx'

const sortOptions = [
  { value: 'popularity', label: 'Popularność' },
  { value: 'price-asc', label: 'Cena: od najniższej' },
  { value: 'price-desc', label: 'Cena: od najwyższej' },
  { value: 'newest', label: 'Najnowsze' },
]

const tagOptions: { value: ProductTag; label: string }[] = [
  { value: 'magazyn', label: 'Magazyn' },
  { value: 'retail', label: 'Retail' },
  { value: 'produkcja', label: 'Produkcja' },
  { value: 'logistyka', label: 'Logistyka' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'outdoor', label: 'Outdoor' },
]

function CatalogContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Stan filtrów
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  // Odczyt parametrów z URL
  const categoryParam = searchParams.get('kategoria') || ''
  const manufacturerParam = searchParams.get('producent') || ''
  const searchParam = searchParams.get('szukaj') || ''
  const sortParam = (searchParams.get('sortuj') as 'popularity' | 'price-asc' | 'price-desc' | 'newest') || 'popularity'
  const isNewParam = searchParams.get('nowosc') === 'tak'
  const tagsParam = searchParams.get('zastosowanie')?.split(',').filter(Boolean) as ProductTag[] | undefined

  // Filtrowane produkty
  const filteredProducts = useMemo(() => {
    return filterProducts({
      categoryId: categoryParam || undefined,
      manufacturerId: manufacturerParam || undefined,
      search: searchParam || undefined,
      sortBy: sortParam,
      isNew: isNewParam || undefined,
      tags: tagsParam,
    })
  }, [categoryParam, manufacturerParam, searchParam, sortParam, isNewParam, tagsParam])

  // Aktualizacja URL
  const updateFilters = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString())

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === '') {
        params.delete(key)
      } else {
        params.set(key, value)
      }
    })

    router.push(`/katalog?${params.toString()}`, { scroll: false })
  }

  // Zliczanie aktywnych filtrów
  const activeFiltersCount = [
    categoryParam,
    manufacturerParam,
    isNewParam,
    tagsParam?.length,
  ].filter(Boolean).length

  // Resetowanie filtrów
  const resetFilters = () => {
    router.push('/katalog')
  }

  // Kategoria z URL
  const selectedCategory = categories.find((c) => c.slug === categoryParam)
  const selectedManufacturer = manufacturers.find((m) => m.slug === manufacturerParam)

  return (
    <div className="container-main py-8 lg:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          {selectedCategory
            ? selectedCategory.name
            : selectedManufacturer
            ? `Produkty ${selectedManufacturer.name}`
            : searchParam
            ? `Wyniki dla "${searchParam}"`
            : 'Katalog produktów'}
        </h1>
        <p className="text-gray-600">
          {filteredProducts.length}{' '}
          {filteredProducts.length === 1
            ? 'produkt'
            : filteredProducts.length < 5
            ? 'produkty'
            : 'produktów'}
        </p>
      </div>

      <div className="flex gap-8">
        {/* Sidebar filters - Desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-28 space-y-6">
            {/* Kategorie */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Kategoria</h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => updateFilters({ kategoria: null })}
                    className={clsx(
                      'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                      !categoryParam
                        ? 'bg-primary-50 text-primary-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    )}
                  >
                    Wszystkie kategorie
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => updateFilters({ kategoria: category.slug })}
                      className={clsx(
                        'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                        categoryParam === category.slug
                          ? 'bg-primary-50 text-primary-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      )}
                    >
                      {category.name}
                      <span className="text-gray-400 ml-1">({category.productCount})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Producenci */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Producent</h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => updateFilters({ producent: null })}
                    className={clsx(
                      'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                      !manufacturerParam
                        ? 'bg-primary-50 text-primary-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    )}
                  >
                    Wszyscy producenci
                  </button>
                </li>
                {manufacturers.map((manufacturer) => (
                  <li key={manufacturer.id}>
                    <button
                      onClick={() => updateFilters({ producent: manufacturer.slug })}
                      className={clsx(
                        'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                        manufacturerParam === manufacturer.slug
                          ? 'bg-primary-50 text-primary-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      )}
                    >
                      {manufacturer.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Zastosowanie */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Zastosowanie</h3>
              <div className="flex flex-wrap gap-2">
                {tagOptions.map((tag) => {
                  const isActive = tagsParam?.includes(tag.value)
                  return (
                    <button
                      key={tag.value}
                      onClick={() => {
                        const newTags = isActive
                          ? tagsParam?.filter((t) => t !== tag.value)
                          : [...(tagsParam || []), tag.value]
                        updateFilters({
                          zastosowanie: newTags?.length ? newTags.join(',') : null,
                        })
                      }}
                      className={clsx(
                        'px-3 py-1.5 rounded-full text-sm transition-colors',
                        isActive
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      )}
                    >
                      {tag.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Tylko nowości */}
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isNewParam}
                  onChange={(e) =>
                    updateFilters({ nowosc: e.target.checked ? 'tak' : null })
                  }
                  className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">Tylko nowości</span>
              </label>
            </div>

            {/* Reset */}
            {activeFiltersCount > 0 && (
              <Button variant="ghost" fullWidth onClick={resetFilters}>
                Wyczyść filtry ({activeFiltersCount})
              </Button>
            )}
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-200">
            {/* Mobile filter button */}
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <FilterIcon size={18} />
              Filtry
              {activeFiltersCount > 0 && (
                <Badge variant="primary" size="sm">
                  {activeFiltersCount}
                </Badge>
              )}
            </button>

            {/* Active filters badges - Desktop */}
            <div className="hidden lg:flex items-center gap-2 flex-wrap flex-1">
              {categoryParam && (
                <Badge
                  variant="primary"
                  className="flex items-center gap-1 pr-1"
                >
                  {selectedCategory?.name}
                  <button
                    onClick={() => updateFilters({ kategoria: null })}
                    className="ml-1 p-0.5 hover:bg-primary-200 rounded"
                  >
                    <CloseIcon size={14} />
                  </button>
                </Badge>
              )}
              {manufacturerParam && (
                <Badge
                  variant="primary"
                  className="flex items-center gap-1 pr-1"
                >
                  {selectedManufacturer?.name}
                  <button
                    onClick={() => updateFilters({ producent: null })}
                    className="ml-1 p-0.5 hover:bg-primary-200 rounded"
                  >
                    <CloseIcon size={14} />
                  </button>
                </Badge>
              )}
              {tagsParam?.map((tag) => (
                <Badge
                  key={tag}
                  variant="primary"
                  className="flex items-center gap-1 pr-1"
                >
                  {tagOptions.find((t) => t.value === tag)?.label}
                  <button
                    onClick={() => {
                      const newTags = tagsParam.filter((t) => t !== tag)
                      updateFilters({
                        zastosowanie: newTags.length ? newTags.join(',') : null,
                      })
                    }}
                    className="ml-1 p-0.5 hover:bg-primary-200 rounded"
                  >
                    <CloseIcon size={14} />
                  </button>
                </Badge>
              ))}
              {isNewParam && (
                <Badge
                  variant="primary"
                  className="flex items-center gap-1 pr-1"
                >
                  Nowości
                  <button
                    onClick={() => updateFilters({ nowosc: null })}
                    className="ml-1 p-0.5 hover:bg-primary-200 rounded"
                  >
                    <CloseIcon size={14} />
                  </button>
                </Badge>
              )}
            </div>

            {/* Sort & View */}
            <div className="flex items-center gap-3">
              <Select
                options={sortOptions}
                value={sortParam}
                onChange={(e) => updateFilters({ sortuj: e.target.value })}
                className="w-48"
              />

              <div className="hidden sm:flex items-center border border-gray-200 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={clsx(
                    'p-2 rounded transition-colors',
                    viewMode === 'grid'
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-400 hover:text-gray-600'
                  )}
                  aria-label="Widok siatki"
                >
                  <GridIcon size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={clsx(
                    'p-2 rounded transition-colors',
                    viewMode === 'list'
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-400 hover:text-gray-600'
                  )}
                  aria-label="Widok listy"
                >
                  <ListIcon size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          <ProductGrid products={filteredProducts} variant={viewMode} columns={3} />
        </div>
      </div>

      {/* Mobile filters drawer */}
      {isMobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setIsMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto animate-slide-in-right">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Filtry</h2>
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <CloseIcon size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Kategorie */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Kategoria</h3>
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => {
                        updateFilters({ kategoria: null })
                        setIsMobileFiltersOpen(false)
                      }}
                      className={clsx(
                        'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                        !categoryParam
                          ? 'bg-primary-50 text-primary-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      )}
                    >
                      Wszystkie kategorie
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => {
                          updateFilters({ kategoria: category.slug })
                          setIsMobileFiltersOpen(false)
                        }}
                        className={clsx(
                          'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                          categoryParam === category.slug
                            ? 'bg-primary-50 text-primary-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        )}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Producenci */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Producent</h3>
                <ul className="space-y-1">
                  {manufacturers.map((manufacturer) => (
                    <li key={manufacturer.id}>
                      <button
                        onClick={() => {
                          updateFilters({ producent: manufacturer.slug })
                          setIsMobileFiltersOpen(false)
                        }}
                        className={clsx(
                          'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                          manufacturerParam === manufacturer.slug
                            ? 'bg-primary-50 text-primary-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        )}
                      >
                        {manufacturer.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Zastosowanie */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Zastosowanie</h3>
                <div className="flex flex-wrap gap-2">
                  {tagOptions.map((tag) => {
                    const isActive = tagsParam?.includes(tag.value)
                    return (
                      <button
                        key={tag.value}
                        onClick={() => {
                          const newTags = isActive
                            ? tagsParam?.filter((t) => t !== tag.value)
                            : [...(tagsParam || []), tag.value]
                          updateFilters({
                            zastosowanie: newTags?.length ? newTags.join(',') : null,
                          })
                        }}
                        className={clsx(
                          'px-3 py-1.5 rounded-full text-sm transition-colors',
                          isActive
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        )}
                      >
                        {tag.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Tylko nowości */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isNewParam}
                    onChange={(e) =>
                      updateFilters({ nowosc: e.target.checked ? 'tak' : null })
                    }
                    className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-700">Tylko nowości</span>
                </label>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-6 space-y-3">
              <Button fullWidth onClick={() => setIsMobileFiltersOpen(false)}>
                Pokaż {filteredProducts.length} produktów
              </Button>
              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={() => {
                    resetFilters()
                    setIsMobileFiltersOpen(false)
                  }}
                >
                  Wyczyść filtry
                </Button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default function CatalogPage() {
  return (
    <Suspense fallback={
      <div className="container-main py-8 lg:py-12">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/3 mb-4" />
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-xl h-96" />
            ))}
          </div>
        </div>
      </div>
    }>
      <CatalogContent />
    </Suspense>
  )
}
