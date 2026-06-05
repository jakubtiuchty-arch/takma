'use client'

import { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { thermalSizeSlug, type ProductVariant } from '@/data/products'
import type { StockInfo } from '@/lib/ingram'
import { ChevronDownIcon, HelpCircleIcon, SearchIcon, CloseIcon } from '@/components/ui/Icons'

interface Props {
  variants: ProductVariant[]
  productSlug: string
  productImage?: string
  seriesTitle: string
  manufacturerName?: string
  /** Stock żywy ze StockCache, pobrany po stronie serwera — zasila SSR realnymi cenami. */
  initialStock?: StockInfo[]
}

/** Bezpieczne wyciągnięcie atrybutu */
function attr(v: ProductVariant, key: string): string {
  return v.attributes[key] ?? ''
}


/** Parsowanie "102×152 mm" → { width: 102, height: 152 } */
function parseSize(raw: string): { width: number; height: number } | null {
  if (!raw) return null
  const m = raw.match(/(\d+(?:[.,]\d+)?)\s*[×x]\s*(\d+(?:[.,]\d+)?)/i)
  if (!m) return null
  return {
    width: parseFloat(m[1].replace(',', '.')),
    height: parseFloat(m[2].replace(',', '.')),
  }
}

/** Formatuje wymiar jako label "102 mm" (lub "57.2 mm" jeśli z ułamkiem) */
function dimLabel(v: number): string {
  return Number.isInteger(v) ? `${v} mm` : `${v.toString().replace('.', ',')} mm`
}

/** Normalizacja perforacji */
function perforationLabel(raw: string): string {
  if (!raw) return 'Brak'
  const r = raw.toLowerCase().trim()
  if (r === 'tak' || r === 'true' || r === 'yes') return 'Tak'
  if (r === 'nie' || r === 'false' || r === 'no') return 'Nie'
  return raw
}

/** Tooltip — fixed position żeby ucieł spod overflow */
function InfoTooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false)
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  const updateCoords = useCallback(() => {
    if (!btnRef.current) return
    const r = btnRef.current.getBoundingClientRect()
    setCoords({
      top: r.top - 8,
      left: Math.min(Math.max(r.left + r.width / 2, 140), window.innerWidth - 140),
    })
  }, [])

  useEffect(() => {
    if (!show) return
    const close = () => setShow(false)
    window.addEventListener('scroll', close, true)
    window.addEventListener('resize', close)
    return () => {
      window.removeEventListener('scroll', close, true)
      window.removeEventListener('resize', close)
    }
  }, [show])

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        aria-label="Pokaż wyjaśnienie filtra"
        onMouseEnter={() => { updateCoords(); setShow(true) }}
        onMouseLeave={() => setShow(false)}
        onFocus={() => { updateCoords(); setShow(true) }}
        onBlur={() => setShow(false)}
        onClick={e => { e.stopPropagation(); e.preventDefault() }}
        className="inline-flex items-center justify-center text-gray-400 hover:text-gray-700 focus:text-gray-700 focus:outline-none rounded-full"
      >
        <HelpCircleIcon size={14} />
      </button>
      {show && coords && (
        <span
          role="tooltip"
          style={{ position: 'fixed', top: coords.top, left: coords.left, transform: 'translate(-50%, -100%)', zIndex: 9999 }}
          className="w-64 p-2.5 rounded-md bg-gray-900 text-white text-xs font-normal leading-relaxed shadow-lg pointer-events-none normal-case"
        >
          {text}
          <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-900" />
        </span>
      )}
    </>
  )
}

/** Badge dostępności wariantu */
function AvailabilityBadge({ value }: { value: ProductVariant['availability'] }) {
  if (value === 'available') {
    return (
      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
        Dostępny
      </span>
    )
  }
  if (value === 'on-order') {
    return (
      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
        Na zamówienie
      </span>
    )
  }
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100">
      Niedostępny
    </span>
  )
}

const INITIAL_VISIBLE = 24
const LOAD_MORE_STEP = 24

export default function SeriesVariantsTable({
  variants,
  productSlug,
  productImage,
  seriesTitle,
  manufacturerName = 'Zebra',
  initialStock,
}: Props) {
  // Stan filtrów
  const [search, setSearch] = useState('')
  const [filterSzerokosc, setFilterSzerokosc] = useState<Set<number>>(new Set())
  const [filterWysokosc, setFilterWysokosc] = useState<Set<number>>(new Set())
  const [filterGilza, setFilterGilza] = useState<Set<string>>(new Set())
  const [filterPerforacja, setFilterPerforacja] = useState<Set<string>>(new Set())
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)
  // Mobile: panel filtrów zwinięty domyślnie, żeby produkty były od razu widoczne. Desktop (lg) zawsze widoczny.
  const [showFilters, setShowFilters] = useState(false)

  /**
   * Cross-filtering: opcje danego filtra liczymy z wariantów pasujących do POZOSTAŁYCH filtrów.
   * Klient nigdy nie zobaczy opcji której wybranie dałoby 0 wyników.
   */
  type FilterKey = 'sz' | 'wy' | 'gi' | 'pe' | 's'
  const matchesExcept = useCallback(
    (v: ProductVariant, except: FilterKey | null) => {
      const size = parseSize(attr(v, 'Rozmiar'))
      if (except !== 'sz' && filterSzerokosc.size > 0) {
        if (!size || !filterSzerokosc.has(size.width)) return false
      }
      if (except !== 'wy' && filterWysokosc.size > 0) {
        if (!size || !filterWysokosc.has(size.height)) return false
      }
      if (except !== 'gi' && filterGilza.size > 0 && !filterGilza.has(attr(v, 'Rdzeń (gilza)'))) return false
      if (except !== 'pe' && filterPerforacja.size > 0 && !filterPerforacja.has(perforationLabel(attr(v, 'Perforacja')))) return false
      if (except !== 's' && search.trim()) {
        const q = search.toLowerCase()
        if (!attr(v, 'Rozmiar').toLowerCase().includes(q) && !v.partNumber.toLowerCase().includes(q)) return false
      }
      return true
    },
    [filterSzerokosc, filterWysokosc, filterGilza, filterPerforacja, search],
  )

  // Opcje filtrów — dynamic na podstawie aktualnego stanu pozostałych filtrów
  const szerokoscOpts = useMemo(() => {
    const widths = new Set<number>()
    variants.forEach(v => {
      if (!matchesExcept(v, 'sz')) return
      const size = parseSize(attr(v, 'Rozmiar'))
      if (size) widths.add(size.width)
    })
    return Array.from(widths).sort((a, b) => a - b)
  }, [variants, matchesExcept])

  const wysokoscOpts = useMemo(() => {
    const heights = new Set<number>()
    variants.forEach(v => {
      if (!matchesExcept(v, 'wy')) return
      const size = parseSize(attr(v, 'Rozmiar'))
      if (size) heights.add(size.height)
    })
    return Array.from(heights).sort((a, b) => a - b)
  }, [variants, matchesExcept])

  const gilzaOpts = useMemo(() => {
    const set = new Set<string>()
    variants.forEach(v => {
      if (!matchesExcept(v, 'gi')) return
      const g = attr(v, 'Rdzeń (gilza)')
      if (g) set.add(g)
    })
    return Array.from(set).sort((a, b) => (parseInt(a) || 0) - (parseInt(b) || 0))
  }, [variants, matchesExcept])

  const perforacjaOpts = useMemo(() => {
    const set = new Set<string>()
    variants.forEach(v => {
      if (!matchesExcept(v, 'pe')) return
      set.add(perforationLabel(attr(v, 'Perforacja')))
    })
    return Array.from(set).sort()
  }, [variants, matchesExcept])

  const toggleSzerokosc = (val: number) => {
    const next = new Set(filterSzerokosc)
    next.has(val) ? next.delete(val) : next.add(val)
    setFilterSzerokosc(next)
    setVisibleCount(INITIAL_VISIBLE)
  }
  const toggleWysokosc = (val: number) => {
    const next = new Set(filterWysokosc)
    next.has(val) ? next.delete(val) : next.add(val)
    setFilterWysokosc(next)
    setVisibleCount(INITIAL_VISIBLE)
  }
  const togglePerforacja = (val: string) => {
    const next = new Set(filterPerforacja)
    next.has(val) ? next.delete(val) : next.add(val)
    setFilterPerforacja(next)
    setVisibleCount(INITIAL_VISIBLE)
  }
  const toggleGilza = (val: string) => {
    const next = new Set(filterGilza)
    next.has(val) ? next.delete(val) : next.add(val)
    setFilterGilza(next)
    setVisibleCount(INITIAL_VISIBLE)
  }
  const onSearchChange = (val: string) => {
    setSearch(val)
    setVisibleCount(INITIAL_VISIBLE)
  }

  // Filtrowanie wszystkimi filtrami
  const filtered = useMemo(
    () => variants.filter(v => matchesExcept(v, null)),
    [variants, matchesExcept],
  )

  const visible = filtered.slice(0, visibleCount)
  const hasMore = filtered.length > visibleCount

  // ── LIVE STOCK fetch dla widocznych wariantów (Ingram/Jarltech) ──
  const [stockMap, setStockMap] = useState<Map<string, StockInfo>>(
    () => new Map((initialStock ?? []).map(s => [s.partNumber, s])),
  )
  const [stockLoading, setStockLoading] = useState(false)

  const visiblePnsKey = visible.map(v => v.partNumber).join(',')
  useEffect(() => {
    if (!visiblePnsKey) return
    const visiblePns = visiblePnsKey.split(',')
    const toFetch = visiblePns.filter(pn => !stockMap.has(pn))
    if (toFetch.length === 0) return

    let cancelled = false
    setStockLoading(true)

    // Chunki po 12 PNów — limit Jarltech concurrent
    const chunks: string[][] = []
    for (let i = 0; i < toFetch.length; i += 12) chunks.push(toFetch.slice(i, i + 12))

    Promise.all(
      chunks.map(chunk =>
        fetch(`/api/stock?pn=${chunk.join(',')}`, {
          signal: AbortSignal.timeout(15000),
          cache: 'no-store',
        })
          .then(r => (r.ok ? r.json() : { results: [] }))
          .catch(() => ({ results: [] })),
      ),
    )
      .then(responses => {
        if (cancelled) return
        setStockMap(prev => {
          const next = new Map(prev)
          for (const data of responses) {
            for (const item of data.results || []) {
              next.set(item.partNumber, item as StockInfo)
            }
          }
          return next
        })
      })
      .finally(() => {
        if (!cancelled) setStockLoading(false)
      })

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visiblePnsKey])

  const clearAll = () => {
    setSearch('')
    setFilterSzerokosc(new Set())
    setFilterWysokosc(new Set())
    setFilterGilza(new Set())
    setFilterPerforacja(new Set())
    setVisibleCount(INITIAL_VISIBLE)
  }
  const activeFilterCount =
    (search ? 1 : 0) +
    filterSzerokosc.size +
    filterWysokosc.size +
    filterGilza.size +
    filterPerforacja.size
  const hasFilters = activeFilterCount > 0

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-6">
      {/* ── SIDEBAR FILTRÓW ─────────────────────────────────────── */}
      <aside className="space-y-4">
        {/* Mobile: przełącznik zwijający panel filtrów (na desktopie ukryty — panel zawsze widoczny). */}
        <button
          type="button"
          onClick={() => setShowFilters(s => !s)}
          aria-expanded={showFilters}
          className="lg:hidden flex items-center justify-between w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900"
        >
          <span className="flex items-center gap-2">
            Filtry wariantów
            {activeFilterCount > 0 && (
              <span className="bg-primary-600 text-white text-[10px] rounded-full min-w-[16px] h-4 px-1 flex items-center justify-center leading-none">
                {activeFilterCount}
              </span>
            )}
          </span>
          <ChevronDownIcon
            size={16}
            className={`text-gray-400 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`}
          />
        </button>

        <div className={`${showFilters ? 'block' : 'hidden'} lg:block bg-white border border-slate-200 rounded-xl p-4 space-y-4 lg:sticky lg:top-6`}>
          <div className="flex items-center justify-end lg:justify-between">
            <h3 className="hidden lg:block text-sm font-bold text-gray-900">Filtry wariantów</h3>
            {hasFilters && (
              <button
                onClick={clearAll}
                className="text-xs text-primary-600 hover:text-primary-700 font-medium"
              >
                Wyczyść
              </button>
            )}
          </div>

          {/* Szukaj */}
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
              Szukaj rozmiaru / PN
              <InfoTooltip text="Wpisz fragment rozmiaru (np. '102x152') lub numeru katalogowego (Part Number, np. '3003355')." />
            </label>
            <div className="relative">
              <SearchIcon size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="search"
                value={search}
                onChange={e => onSearchChange(e.target.value)}
                placeholder="np. 102x152 lub 3003355"
                className="w-full pl-8 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-200"
              />
              {search && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  aria-label="Wyczyść"
                >
                  <CloseIcon size={14} />
                </button>
              )}
            </div>
          </div>

          {szerokoscOpts.length > 1 && (
            <FilterCheckboxGroup
              label="Szerokość"
              info="Szerokość etykiety (pierwsza liczba z wymiaru, np. 102 z '102×152'). Wybierz jedną lub kilka popularnych szerokości."
              options={szerokoscOpts.map(String)}
              selected={new Set(Array.from(filterSzerokosc).map(String))}
              onToggle={s => toggleSzerokosc(parseFloat(s))}
              formatLabel={s => dimLabel(parseFloat(s))}
            />
          )}

          {wysokoscOpts.length > 1 && (
            <FilterCheckboxGroup
              label="Wysokość"
              info="Wysokość etykiety (druga liczba z wymiaru, np. 152 z '102×152'). Wybierz jedną lub kilka."
              options={wysokoscOpts.map(String)}
              selected={new Set(Array.from(filterWysokosc).map(String))}
              onToggle={s => toggleWysokosc(parseFloat(s))}
              formatLabel={s => dimLabel(parseFloat(s))}
            />
          )}

          {gilzaOpts.length > 1 && (
            <FilterCheckboxGroup
              label="Rdzeń (gilza)"
              info="Średnica wewnętrzna rolki — typowo 19 mm (3/4″), 25 mm (1″) lub 76 mm (3″). Drukarki desktopowe biorą 19/25 mm, industrialne także 76 mm."
              options={gilzaOpts}
              selected={filterGilza}
              onToggle={toggleGilza}
            />
          )}

          {perforacjaOpts.length > 1 && (
            <FilterCheckboxGroup
              label="Perforacja"
              info="Linie nacięcia między etykietami pozwalające oddzielić je ręcznie bez nożyczek. Przydatne dla paragonów i pasków w bloczkach."
              options={perforacjaOpts}
              selected={filterPerforacja}
              onToggle={togglePerforacja}
            />
          )}
        </div>
      </aside>

      {/* ── GRID WARIANTÓW ─────────────────────────────────────── */}
      <div>
        {/* Licznik */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'wariant' : filtered.length < 5 && filtered.length !== 0 ? 'warianty' : 'wariantów'}
            {filtered.length !== variants.length && (
              <span className="text-gray-400"> / {variants.length}</span>
            )}
          </p>
          {filtered.length > 0 && hasMore && (
            <p className="text-xs text-gray-500">
              Pokazano {visible.length} z {filtered.length}
            </p>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
            <p className="text-gray-600 mb-3">Brak wariantów spełniających filtry.</p>
            <button
              onClick={clearAll}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Wyczyść filtry
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
              {visible.map(v => (
                <VariantCard
                  key={v.partNumber}
                  variant={v}
                  productSlug={productSlug}
                  productImage={productImage}
                  seriesTitle={seriesTitle}
                  manufacturerName={manufacturerName}
                  stockInfo={stockMap.get(v.partNumber)}
                  stockLoading={stockLoading && !stockMap.has(v.partNumber)}
                />
              ))}
            </div>

            {hasMore && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setVisibleCount(c => c + LOAD_MORE_STEP)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 rounded-lg text-sm font-semibold text-gray-700 transition-colors"
                >
                  Pokaż więcej
                  <span className="text-xs text-gray-500">
                    (pozostało {filtered.length - visibleCount})
                  </span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

/** Pojedyncza karta wariantu — wzorzec z designu */
function VariantCard({
  variant: v,
  productSlug,
  productImage,
  seriesTitle,
  manufacturerName,
  stockInfo,
  stockLoading,
}: {
  variant: ProductVariant
  productSlug: string
  productImage?: string
  seriesTitle: string
  manufacturerName: string
  stockInfo?: StockInfo
  stockLoading?: boolean
}) {
  const rozmiar = attr(v, 'Rozmiar')
  const gilza = attr(v, 'Rdzeń (gilza)')
  const hasImage = !!productImage
  // Wersja (np. 8000D Jewelry: ze skrzydełkami / bez skrzydełek) — różnicuje warianty o tym samym rozmiarze.
  const wersja = attr(v, 'Wersja')

  // Live nadpisuje editorial gdy dystrybutor zwrócił realny sygnał: found=true LUB totalStock>0
  // (np. override Jarltech, który nie ustawia found). Brak sygnału (found=false, stock 0
  // = „Brak danych z dystrybutora") → zostaje editorial fallback (v.availability).
  const liveSignal = !!stockInfo && (stockInfo.found || stockInfo.totalStock > 0)
  const liveAvailability: ProductVariant['availability'] =
    liveSignal ? stockInfo!.availability : v.availability

  // Live price (Ingram netto z marżą) — jeśli niedostępna, fallback na priceFrom z products.ts
  const livePrice = liveSignal && stockInfo!.price ? stockInfo!.price : v.priceFrom

  // URL wariantu: /produkt/[slug]/[size]/[pn] — statyczny, indeksowalny per SKU
  const sizeSlug = rozmiar ? thermalSizeSlug(rozmiar) : ''
  const variantHref = sizeSlug
    ? `/produkt/${productSlug}/${sizeSlug}/${v.partNumber}`
    : `/produkt/${productSlug}` // fallback gdy wariant nie ma rozmiaru (nie powinno się zdarzyć dla etykiet)

  return (
    <Link
      href={variantHref}
      className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-md transition-all flex flex-col"
    >
      {/* Image area — większy obraz, mniejszy padding (wzorzec drukarek) */}
      <div className="relative aspect-square bg-white">
        {hasImage ? (
          <Image
            src={productImage}
            alt={`${manufacturerName} ${seriesTitle} ${rozmiar}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 50vw, 33vw"
            className="object-contain p-3 sm:p-4"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-xs">
            brak zdjęcia
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-3 sm:p-5 flex flex-col flex-1 border-t border-slate-100">
        {/* Manufacturer eyebrow */}
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
          {manufacturerName}
        </div>

        {/* Title — krótki, spójny z wzorcem drukarek */}
        <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-snug mb-1">
          {manufacturerName} {seriesTitle}
          {rozmiar && ` ${rozmiar}`}
        </h4>

        {/* Sub-info: wersja + gilza + PN — różnicuje warianty z tym samym rozmiarem */}
        <p className="text-xs text-gray-500 mb-3 flex items-center gap-1.5 flex-wrap">
          {wersja && <span className="font-medium text-primary-700">{wersja}</span>}
          {wersja && <span aria-hidden className="text-gray-300">·</span>}
          {gilza && <span>Gilza: <span className="font-medium text-gray-700">{gilza}</span></span>}
          {gilza && <span aria-hidden className="text-gray-300">·</span>}
          <span className="font-mono">{v.partNumber}</span>
        </p>

        {/* Availability — live z stock API */}
        <div className="mb-4 min-h-[26px]">
          {stockLoading ? (
            <span className="inline-block h-6 w-24 bg-slate-100 rounded-full animate-pulse" />
          ) : (
            <AvailabilityBadge value={liveAvailability} />
          )}
        </div>

        {/* Cena dokładna (z "netto" jak wzorzec) */}
        <div className="mt-auto pt-3 border-t border-slate-100">
          <div className="flex items-baseline gap-1.5 mb-3 min-h-[28px]">
            {livePrice ? (
              <>
                <span className="text-lg sm:text-xl font-bold text-gray-900">
                  {livePrice.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł
                </span>
                <span className="text-xs sm:text-sm text-gray-500">netto</span>
              </>
            ) : (
              <span className="text-gray-400 text-sm">Zapytaj o cenę</span>
            )}
          </div>

          {/* CTA — zielony A8F000 (cała karta i tak klikalna, button to wizualne wskazanie) */}
          <span className="block w-full text-center bg-[#A8F000] group-hover:bg-[#94d600] text-gray-900 font-semibold py-2.5 sm:py-3 rounded-lg transition-colors text-sm">
            Zobacz więcej
          </span>
        </div>
      </div>
    </Link>
  )
}

function FilterCheckboxGroup({
  label,
  info,
  options,
  selected,
  onToggle,
  formatLabel,
}: {
  label: string
  info: string
  options: string[]
  selected: Set<string>
  onToggle: (v: string) => void
  formatLabel?: (opt: string) => string
}) {
  const [expanded, setExpanded] = useState(true)
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
      >
        <span className="flex items-center gap-1.5">
          {label}
          <InfoTooltip text={info} />
          {selected.size > 0 && (
            <span className="bg-primary-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center leading-none">
              {selected.size}
            </span>
          )}
        </span>
        <ChevronDownIcon
          size={14}
          className={`text-gray-400 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>
      {expanded && (
        <div className="px-3 pb-3 pt-1 space-y-1.5 max-h-56 overflow-y-auto">
          {options.map(opt => {
            const isSelected = selected.has(opt)
            return (
              <label
                key={opt}
                className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-gray-900"
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onToggle(opt)}
                  className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 focus:ring-2 focus:ring-offset-0"
                />
                <span>{formatLabel ? formatLabel(opt) : opt}</span>
              </label>
            )
          })}
        </div>
      )}
    </div>
  )
}
