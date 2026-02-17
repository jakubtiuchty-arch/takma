'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import clsx from 'clsx'
import { SearchIcon, CloseIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { products, categories, manufacturers, type Product, type Category } from '@/data/products'

interface SearchBarProps {
  fullWidth?: boolean
  onSearch?: () => void
}

interface SearchResult {
  type: 'product' | 'variant' | 'category'
  id: string
  slug: string
  title: string
  subtitle: string
  badge?: string
  badgeColor?: string
  price?: number
  image?: string
  parentProduct?: string
  availability?: 'available' | 'on-order' | 'unavailable'
  categoryId?: string
}

// Buduj indeks wyszukiwania raz
function buildSearchIndex(): { product: Product; searchText: string; partNumbers: string[] }[] {
  return products.map((p) => {
    const partNumbers = (p.variants || []).map((v) => v.partNumber.toLowerCase())
    const variantNames = (p.variants || []).map((v) => v.name.toLowerCase())
    const specValues = p.specifications.map((s) => `${s.name} ${s.value}`.toLowerCase())
    const manufacturer = manufacturers.find((m) => m.id === p.manufacturerId)

    const searchText = [
      p.name,
      p.slug.replace(/-/g, ' '),
      p.shortDescription,
      p.id,
      manufacturer?.name || '',
      ...p.tags,
      ...p.applications,
      ...partNumbers,
      ...variantNames,
      ...specValues,
    ]
      .join(' ')
      .toLowerCase()

    return { product: p, searchText, partNumbers }
  })
}

function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query || query.length < 2) return text
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-primary-100 text-primary-800 rounded-sm px-0.5">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  )
}

export default function SearchBar({ fullWidth = false, onSearch }: SearchBarProps) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const searchIndex = useMemo(() => buildSearchIndex(), [])

  const search = useCallback(
    (q: string) => {
      if (q.length < 2) {
        setResults([])
        setIsOpen(false)
        return
      }

      const queryLower = q.toLowerCase().trim()
      const queryNormalized = queryLower.replace(/\s+/g, '')
      const queryTokens = queryLower.split(/\s+/).filter(Boolean)
      const found: (SearchResult & { _score: number })[] = []

      // Szukaj w produktach
      for (const entry of searchIndex) {
        const { product, searchText, partNumbers } = entry

        // Sprawdź czy wszystkie tokeny pasują
        const allMatch = queryTokens.every((token) => searchText.includes(token))
        if (!allMatch) continue

        // Scoring — im wyższy, tym lepszy match
        let score = 0
        const nameLower = product.name.toLowerCase()
        const slugLower = product.slug.toLowerCase()
        const idLower = product.id.toLowerCase()
        const shortDescLower = product.shortDescription.toLowerCase()

        if (nameLower === queryLower) score += 100            // exact name match
        else if (nameLower.includes(queryNormalized)) score += 80  // name contains
        if (slugLower.includes(queryNormalized)) score += 60  // slug contains
        if (idLower.includes(queryNormalized)) score += 50    // id contains
        if (shortDescLower.includes(queryNormalized)) score += 20  // shortDescription
        // PN match gets high score
        const matchedPN = partNumbers.find((pn) => pn.includes(queryNormalized))
        if (matchedPN) score += 90

        // Bonus: główne produkty (z wariantami) wyżej niż akcesoria
        if (product.categoryId !== 'akcesoria' && product.categoryId !== 'oprogramowanie') score += 40

        // Jeśli query nie pasuje do nazwy/slug/id/PN/shortDesc — to match jest tylko z FAQ/opisu/specyfikacji
        // Te wyniki są mało istotne
        if (score === 0) score = 1

        // Sprawdź wariant
        const matchedVariant = matchedPN
          ? product.variants?.find((v) => v.partNumber.toLowerCase().includes(queryNormalized))
          : null

        if (matchedVariant) {
          found.push({
            _score: score,
            type: 'variant',
            id: `${product.id}__${matchedVariant.partNumber}`,
            slug: product.slug,
            title: matchedVariant.partNumber,
            subtitle: `${product.name} — ${matchedVariant.name}`,
            badge: 'Part Number',
            badgeColor: 'bg-accent-100 text-accent-700',
            price: matchedVariant.priceFrom,
            image: product.images[0],
            parentProduct: product.name,
            availability: product.availability,
            categoryId: product.categoryId,
          })
        } else {
          const category = categories.find((c) => c.id === product.categoryId)
          found.push({
            _score: score,
            type: 'product',
            id: product.id,
            slug: product.slug,
            title: product.name,
            subtitle: product.shortDescription,
            badge: category?.name,
            badgeColor: 'bg-gray-100 text-gray-600',
            price: product.priceFrom,
            image: product.images[0],
            availability: product.availability,
            categoryId: product.categoryId,
          })
        }
      }

      // Szukaj w kategoriach
      for (const cat of categories) {
        const catText = `${cat.name} ${cat.description}`.toLowerCase()
        if (queryTokens.every((t) => catText.includes(t))) {
          found.push({
            _score: 30,
            type: 'category',
            id: cat.id,
            slug: cat.slug,
            title: cat.name,
            subtitle: cat.description,
            badge: 'Kategoria',
            badgeColor: 'bg-primary-50 text-primary-700',
          })
        }
      }

      // Sortuj wg relevance score (malejąco)
      found.sort((a, b) => b._score - a._score)

      setResults(found.slice(0, 10))
      setIsOpen(found.length > 0 || q.length >= 2)
      setActiveIndex(-1)
    },
    [searchIndex]
  )

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => search(query), 150)
    return () => clearTimeout(timer)
  }, [query, search])

  // Zamknij przy kliknięciu poza
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Keyboard — Ctrl+K / Cmd+K
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
        inputRef.current?.blur()
      }
    }
    document.addEventListener('keydown', handleGlobalKey)
    return () => document.removeEventListener('keydown', handleGlobalKey)
  }, [])

  const navigate = (result: SearchResult) => {
    if (result.type === 'category') {
      router.push(`/${result.slug}`)
    } else {
      router.push(`/produkt/${result.slug}`)
    }
    setQuery('')
    setIsOpen(false)
    onSearch?.()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (activeIndex >= 0 && results[activeIndex]) {
      navigate(results[activeIndex])
      return
    }
    if (query.trim()) {
      router.push(`/katalog?szukaj=${encodeURIComponent(query.trim())}`)
      setQuery('')
      setIsOpen(false)
      onSearch?.()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1))
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault()
      navigate(results[activeIndex])
    }
  }

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const items = listRef.current.children
      if (items[activeIndex]) {
        (items[activeIndex] as HTMLElement).scrollIntoView({ block: 'nearest' })
      }
    }
  }, [activeIndex])

  return (
    <div ref={wrapperRef} className={clsx('relative', fullWidth ? 'w-full' : 'w-96')}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query.length >= 2 && results.length > 0 && setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Szukaj produktu, modelu, PN..."
            className={clsx(
              'w-full pl-10 pr-20 py-2.5 rounded-xl border border-gray-300 shadow-sm',
              'bg-white placeholder:text-gray-500 text-base sm:text-sm',
              'focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500',
              'transition-all duration-200'
            )}
            aria-label="Wyszukaj produkty"
            aria-autocomplete="list"
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls="search-suggestions"
            aria-activedescendant={activeIndex >= 0 ? `search-item-${activeIndex}` : undefined}
          />
          <SearchIcon
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          {/* Kbd hint / clear */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
            {query ? (
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setResults([])
                  setIsOpen(false)
                  inputRef.current?.focus()
                }}
                className="p-0.5 rounded text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Wyczyść"
              >
                <CloseIcon size={16} />
              </button>
            ) : (
              <span className="hidden" />
            )}
          </div>
        </div>
      </form>

      {/* Results dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 sm:left-auto sm:right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-fade-in max-h-[70vh] sm:max-h-[480px] flex flex-col sm:min-w-[480px] sm:w-max sm:max-w-[560px]">
          {results.length > 0 ? (
            <>
              <ul
                ref={listRef}
                role="listbox"
                id="search-suggestions"
                className="overflow-y-auto flex-1"
              >
                {results.map((result, i) => (
                  <li
                    key={result.id}
                    id={`search-item-${i}`}
                    role="option"
                    aria-selected={i === activeIndex}
                  >
                    <button
                      onClick={() => navigate(result)}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={clsx(
                        'w-full flex items-center gap-3 px-4 py-3 text-left transition-colors',
                        i === activeIndex ? 'bg-primary-50' : 'hover:bg-gray-50'
                      )}
                    >
                      {/* Image / icon */}
                      {result.type === 'category' ? (
                        <div className="w-10 h-10 bg-primary-50 rounded-lg flex-shrink-0 flex items-center justify-center">
                          <ArrowRightIcon size={16} className="text-primary-600" />
                        </div>
                      ) : result.image ? (
                        <div className="w-10 h-10 bg-gray-50 rounded-lg flex-shrink-0 overflow-hidden relative">
                          <Image
                            src={result.image}
                            alt=""
                            fill
                            className="object-contain p-1"
                            sizes="40px"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                          <SearchIcon size={16} className="text-gray-400" />
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {highlightMatch(result.title, query)}
                          </p>
                          {result.badge && (
                            <span
                              className={clsx(
                                'inline-flex px-1.5 py-0.5 rounded text-[10px] font-medium flex-shrink-0',
                                result.badgeColor
                              )}
                            >
                              {result.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 truncate mt-0.5">
                          {highlightMatch(result.subtitle, query)}
                        </p>
                      </div>

                      {/* Availability + Price — hidden on mobile */}
                      <div className="hidden sm:flex flex-col items-end flex-shrink-0 gap-0.5">
                        {result.availability && (
                          <span className={clsx(
                            'text-[10px] font-medium flex items-center gap-1',
                            result.availability === 'available' && 'text-green-600',
                            result.availability === 'on-order' && 'text-yellow-600',
                            result.availability === 'unavailable' && 'text-red-500',
                          )}>
                            <span className={clsx(
                              'w-1.5 h-1.5 rounded-full',
                              result.availability === 'available' && 'bg-green-500',
                              result.availability === 'on-order' && 'bg-yellow-500',
                              result.availability === 'unavailable' && 'bg-red-400',
                            )} />
                            {result.availability === 'available'
                              ? (result.categoryId === 'drukarki-etykiet' ? 'Dostępna' : 'Dostępny')
                              : result.availability === 'on-order'
                              ? 'Na zamówienie'
                              : (result.categoryId === 'drukarki-etykiet' ? 'Niedostępna' : 'Niedostępny')}
                          </span>
                        )}
                        {result.price && (
                          <span className="text-sm font-semibold text-gray-900 tabular-nums">
                            {result.price.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
                          </span>
                        )}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="border-t border-gray-100 px-4 py-2.5 bg-gray-50/50 flex items-center justify-center flex-shrink-0">
                <button
                  onClick={() => {
                    router.push(`/katalog?szukaj=${encodeURIComponent(query.trim())}`)
                    setQuery('')
                    setIsOpen(false)
                    onSearch?.()
                  }}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
                >
                  Wszystkie wyniki dla &quot;{query}&quot;
                  <ArrowRightIcon size={14} />
                </button>
              </div>
            </>
          ) : (
            <div className="px-4 py-8 text-center">
              <SearchIcon size={32} className="mx-auto text-gray-300 mb-2" />
              <p className="text-sm text-gray-500">
                Brak wyników dla &quot;{query}&quot;
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Spróbuj wpisać nazwę produktu, model lub Part Number
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
