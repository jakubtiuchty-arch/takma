'use client'

import { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ribbonSizeSlug, type ProductVariant } from '@/data/products'
import type { StockInfo } from '@/lib/ingram'
import { ChevronDownIcon, HelpCircleIcon, SearchIcon, CloseIcon } from '@/components/ui/Icons'

interface Props {
  variants: ProductVariant[]
  productSlug: string
  productImage?: string
  /** Obraz desktop (krótkie taśmy < 200 m). Override do productImage per-variant. */
  productImageDesktop?: string
  /** Obraz industrial (długie taśmy ≥ 200 m). Override do productImage per-variant. */
  productImageIndustrial?: string
  seriesTitle: string
  manufacturerName?: string
  /** Stock żywy ze StockCache, pobrany po stronie serwera — zasila SSR realnymi cenami. */
  initialStock?: StockInfo[]
}

/** Bezpieczne wyciągnięcie atrybutu */
function attr(v: ProductVariant, key: string): string {
  return v.attributes[key] ?? ''
}

/** Parsowanie "110 mm" → 110, "450 m" → 450 */
function parseNumber(raw: string): number | null {
  if (!raw) return null
  const m = raw.match(/(\d+(?:[.,]\d+)?)/)
  if (!m) return null
  return parseFloat(m[1].replace(',', '.'))
}

/** Formatowanie szerokości jako "110 mm" */
function widthLabel(v: number): string {
  return Number.isInteger(v) ? `${v} mm` : `${v.toString().replace('.', ',')} mm`
}

/** Formatowanie długości jako "450 m" */
function lengthLabel(v: number): string {
  return Number.isInteger(v) ? `${v} m` : `${v.toString().replace('.', ',')} m`
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
  // Taśma → forma żeńska. Każdy stan poza „dostępna" pokazujemy jako „Niedostępna”.
  if (value === 'available') {
    return (
      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
        Dostępna
      </span>
    )
  }
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100">
      Niedostępna
    </span>
  )
}

const INITIAL_VISIBLE = 24
const LOAD_MORE_STEP = 24

export default function RibbonVariantsTable({
  variants,
  productSlug,
  productImage,
  productImageDesktop,
  productImageIndustrial,
  seriesTitle,
  manufacturerName = 'Zebra',
  initialStock,
}: Props) {
  // Stan filtrów — taśma: Szerokość / Długość / Rdzeń
  const [search, setSearch] = useState('')
  const [filterSzerokosc, setFilterSzerokosc] = useState<Set<number>>(new Set())
  const [filterDlugosc, setFilterDlugosc] = useState<Set<number>>(new Set())
  const [filterRdzen, setFilterRdzen] = useState<Set<string>>(new Set())
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)
  // Mobile: panel filtrów zwinięty domyślnie, żeby produkty były od razu widoczne. Desktop (lg) zawsze widoczny.
  const [showFilters, setShowFilters] = useState(false)

  /**
   * Cross-filtering: opcje danego filtra liczymy z wariantów pasujących do POZOSTAŁYCH filtrów.
   */
  type FilterKey = 'sz' | 'dl' | 'rd' | 's'
  const matchesExcept = useCallback(
    (v: ProductVariant, except: FilterKey | null) => {
      const w = parseNumber(attr(v, 'Szerokość'))
      const l = parseNumber(attr(v, 'Długość'))
      if (except !== 'sz' && filterSzerokosc.size > 0) {
        if (w === null || !filterSzerokosc.has(w)) return false
      }
      if (except !== 'dl' && filterDlugosc.size > 0) {
        if (l === null || !filterDlugosc.has(l)) return false
      }
      if (except !== 'rd' && filterRdzen.size > 0 && !filterRdzen.has(attr(v, 'Rdzeń'))) return false
      if (except !== 's' && search.trim()) {
        const q = search.toLowerCase()
        const matchesPn = v.partNumber.toLowerCase().includes(q)
        const matchesSz = attr(v, 'Szerokość').toLowerCase().includes(q)
        const matchesDl = attr(v, 'Długość').toLowerCase().includes(q)
        if (!matchesPn && !matchesSz && !matchesDl) return false
      }
      return true
    },
    [filterSzerokosc, filterDlugosc, filterRdzen, search],
  )

  // Opcje filtrów — dynamic na podstawie aktualnego stanu pozostałych filtrów
  const szerokoscOpts = useMemo(() => {
    const widths = new Set<number>()
    variants.forEach(v => {
      if (!matchesExcept(v, 'sz')) return
      const w = parseNumber(attr(v, 'Szerokość'))
      if (w !== null) widths.add(w)
    })
    return Array.from(widths).sort((a, b) => a - b)
  }, [variants, matchesExcept])

  const dlugoscOpts = useMemo(() => {
    const lengths = new Set<number>()
    variants.forEach(v => {
      if (!matchesExcept(v, 'dl')) return
      const l = parseNumber(attr(v, 'Długość'))
      if (l !== null) lengths.add(l)
    })
    return Array.from(lengths).sort((a, b) => a - b)
  }, [variants, matchesExcept])

  const rdzenOpts = useMemo(() => {
    const set = new Set<string>()
    variants.forEach(v => {
      if (!matchesExcept(v, 'rd')) return
      const r = attr(v, 'Rdzeń')
      if (r) set.add(r)
    })
    return Array.from(set).sort((a, b) => (parseInt(a) || 0) - (parseInt(b) || 0))
  }, [variants, matchesExcept])

  const toggleSzerokosc = (val: number) => {
    const next = new Set(filterSzerokosc)
    next.has(val) ? next.delete(val) : next.add(val)
    setFilterSzerokosc(next)
    setVisibleCount(INITIAL_VISIBLE)
  }
  const toggleDlugosc = (val: number) => {
    const next = new Set(filterDlugosc)
    next.has(val) ? next.delete(val) : next.add(val)
    setFilterDlugosc(next)
    setVisibleCount(INITIAL_VISIBLE)
  }
  const toggleRdzen = (val: string) => {
    const next = new Set(filterRdzen)
    next.has(val) ? next.delete(val) : next.add(val)
    setFilterRdzen(next)
    setVisibleCount(INITIAL_VISIBLE)
  }
  const onSearchChange = (val: string) => {
    setSearch(val)
    setVisibleCount(INITIAL_VISIBLE)
  }

  // Filtrowanie + sortowanie po cenie ASC (default)
  // ── LIVE STOCK (zasilane serwerowo) — do sortowania (dostępne na górze) i wyświetlania ──
  const [stockMap, setStockMap] = useState<Map<string, StockInfo>>(
    () => new Map((initialStock ?? []).map(s => [s.partNumber, s])),
  )
  const [stockLoading, setStockLoading] = useState(false)

  // Ranga dostępności: dostępne (0) → na zamówienie (1) → niedostępne (2)
  const availabilityRank = useCallback((v: ProductVariant): number => {
    const s = stockMap.get(v.partNumber)
    const live = !!s && (s.found || s.totalStock > 0)
    const avail = live ? s!.availability : v.availability
    return avail === 'available' ? 0 : avail === 'on-order' ? 1 : 2
  }, [stockMap])

  // Filtr + sort po cenie (rosnąco)
  const filtered = useMemo(() => {
    const list = variants.filter(v => matchesExcept(v, null))
    return list.sort((a, b) => {
      const pa = a.priceFrom ?? Infinity
      const pb = b.priceFrom ?? Infinity
      return pa - pb
    })
  }, [variants, matchesExcept])
  // Dostępne na górze, niedostępne na dole — cena pozostaje secondary (sort stabilny przez indeks)
  const sorted = useMemo(
    () => filtered
      .map((v, i) => [v, i] as const)
      .sort(([a, ia], [b, ib]) => availabilityRank(a) - availabilityRank(b) || ia - ib)
      .map(([v]) => v),
    [filtered, availabilityRank],
  )

  const visible = sorted.slice(0, visibleCount)
  const hasMore = filtered.length > visibleCount

  const visiblePnsKey = visible.map(v => v.partNumber).join(',')
  useEffect(() => {
    if (!visiblePnsKey) return
    const visiblePns = visiblePnsKey.split(',')
    const toFetch = visiblePns.filter(pn => !stockMap.has(pn))
    if (toFetch.length === 0) return

    let cancelled = false
    setStockLoading(true)

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
    setFilterDlugosc(new Set())
    setFilterRdzen(new Set())
    setVisibleCount(INITIAL_VISIBLE)
  }
  const activeFilterCount =
    (search ? 1 : 0) +
    filterSzerokosc.size +
    filterDlugosc.size +
    filterRdzen.size
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
              <InfoTooltip text="Wpisz fragment szerokości, długości (np. '110' lub '450') lub numeru katalogowego (Part Number, np. '02300BK11045')." />
            </label>
            <div className="relative">
              <SearchIcon size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="search"
                value={search}
                onChange={e => onSearchChange(e.target.value)}
                placeholder="np. 110 lub 02300BK11045"
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
              info="Szerokość taśmy w mm — powinna być o 2–5 mm szersza niż etykieta. Np. 110 mm taśma do etykiety 102–108 mm."
              options={szerokoscOpts.map(String)}
              selected={new Set(Array.from(filterSzerokosc).map(String))}
              onToggle={s => toggleSzerokosc(parseFloat(s))}
              formatLabel={s => widthLabel(parseFloat(s))}
            />
          )}

          {dlugoscOpts.length > 1 && (
            <FilterCheckboxGroup
              label="Długość"
              info="Długość rolki taśmy w metrach. Desktop typowo 74 m, mid-range/przemysłowe 300–900 m. Sprawdź maksymalną pojemność drukarki."
              options={dlugoscOpts.map(String)}
              selected={new Set(Array.from(filterDlugosc).map(String))}
              onToggle={s => toggleDlugosc(parseFloat(s))}
              formatLabel={s => lengthLabel(parseFloat(s))}
            />
          )}

          {rdzenOpts.length > 1 && (
            <FilterCheckboxGroup
              label="Rdzeń"
              info={"Średnica wewnętrzna rdzenia (gilzy) rolki — typowo 12 mm (1/2\") dla drukarek biurkowych lub 25 mm (1\") dla przemysłowych."}
              options={rdzenOpts}
              selected={filterRdzen}
              onToggle={toggleRdzen}
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
              {visible.map(v => {
                // Per-variant image: industrial dla ≥ 200 m, desktop dla < 200 m.
                const lengthM = parseNumber(attr(v, 'Długość')) ?? 0
                const variantImage = lengthM >= 200
                  ? (productImageIndustrial ?? productImage)
                  : lengthM > 0
                    ? (productImageDesktop ?? productImage)
                    : productImage
                return (
                  <VariantCard
                    key={v.partNumber}
                    variant={v}
                    productSlug={productSlug}
                    productImage={variantImage}
                    seriesTitle={seriesTitle}
                    manufacturerName={manufacturerName}
                    stockInfo={stockMap.get(v.partNumber)}
                    stockLoading={stockLoading && !stockMap.has(v.partNumber)}
                  />
                )
              })}
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

/** Kolor taśmy 5319 wyprowadzony z numeru katalogowego (BK/BL/RD/GD/GL = kolory; 800132-* = czarny legacy).
 *  Tylko 5319 jest dostępna w kolorach — pozostałe taśmy są czarne, więc nie pokazujemy etykiety koloru. */
const RIBBON_5319_COLORS: Record<string, { label: string; hex: string }> = {
  BK: { label: 'czarny', hex: '#1f2937' },
  BL: { label: 'niebieski', hex: '#2563eb' },
  RD: { label: 'czerwony', hex: '#dc2626' },
  GD: { label: 'złoty', hex: '#c79a3a' },
  GL: { label: 'złoty', hex: '#c79a3a' },
}
function ribbon5319Color(pn: string): { label: string; hex: string } | null {
  const m = pn.match(/^0?5319(BK|BL|RD|GD|GL)/i)
  if (m) return RIBBON_5319_COLORS[m[1].toUpperCase()] ?? null
  if (/^800132-/.test(pn)) return RIBBON_5319_COLORS.BK // starsze PN-y czarnej 5319
  return null
}

/** Pojedyncza karta wariantu taśmy */
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
  const sz = attr(v, 'Szerokość')
  const dl = attr(v, 'Długość')
  const rdzen = attr(v, 'Rdzeń')
  const hasImage = !!productImage

  // Live nadpisuje editorial gdy dystrybutor zwrócił realny sygnał: found=true (dane produktowe/cenowe)
  // LUB totalStock>0 (np. override Jarltech, który nie ustawia found). Brak sygnału (found=false, stock 0
  // = „Brak danych z dystrybutora") → zostaje editorial fallback (v.availability).
  const liveSignal = !!stockInfo && (stockInfo.found || stockInfo.totalStock > 0)
  const liveAvailability: ProductVariant['availability'] =
    liveSignal ? stockInfo!.availability : v.availability

  // Live price
  const livePrice = liveSignal && stockInfo!.price ? stockInfo!.price : v.priceFrom

  // URL wariantu: /produkt/[slug]/[size]/[pn]
  const sizeSlug = ribbonSizeSlug(v)
  const variantHref = `/produkt/${productSlug}/${sizeSlug}/${v.partNumber}`

  // Tytuł karty — "Zebra {series} 110×450" lub fallback do v.name dla wariantów bez gabarytów
  const sizeLabel = sz && dl
    ? `${parseNumber(sz)}×${parseNumber(dl)}`
    : v.name

  // Kolor (tylko 5319 — jedyna kolorowa taśma w gamie)
  const color = productSlug === 'zebra-5319-wax' ? ribbon5319Color(v.partNumber) : null

  return (
    <Link
      href={variantHref}
      className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-md transition-all flex flex-col"
    >
      {/* Image area */}
      <div className="relative aspect-square bg-white">
        {hasImage ? (
          <Image
            src={productImage}
            alt={`${seriesTitle} ${sizeLabel}`}
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
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
          {manufacturerName}
        </div>

        <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-snug mb-1">
          {seriesTitle} {sizeLabel}
          {color && (
            <span className="inline-flex items-center gap-1 align-baseline">
              {' — '}
              <span
                aria-hidden
                className="inline-block w-3 h-3 rounded-full border border-black/10 align-middle"
                style={{ backgroundColor: color.hex }}
              />
              {color.label}
            </span>
          )}
        </h4>

        {/* Sub-info: rdzeń + PN */}
        <p className="text-xs text-gray-500 mb-3 flex items-center gap-1.5 flex-wrap">
          {rdzen && <span>Rdzeń: <span className="font-medium text-gray-700">{rdzen}</span></span>}
          {rdzen && <span aria-hidden className="text-gray-300">·</span>}
          <span className="font-mono">{v.partNumber}</span>
        </p>

        {/* Availability — live */}
        <div className="mb-4 min-h-[26px]">
          {stockLoading ? (
            <span className="inline-block h-6 w-24 bg-slate-100 rounded-full animate-pulse" />
          ) : (
            <AvailabilityBadge value={liveAvailability} />
          )}
        </div>

        {/* Cena */}
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
