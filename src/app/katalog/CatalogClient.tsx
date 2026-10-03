'use client'

import { useMemo, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { Badge, Button } from '@/components/ui'
import { CloseIcon } from '@/components/ui/Icons'
import FilterableProductGrid, { type FilterDefinition } from '@/components/subcategory/FilterableProductGrid'
import { filtrCenaKatalogu, categoryFilters } from '@/data/category-filters'
import {
  categories,
  manufacturers,
  brandCategories,
  filterProducts,
  products as catalogProducts,
  ProductTag,
  getSubcategoriesForCategory,
  isThermalLabelProduct,
  isTransferLabelProduct,
  variantSizeSlug,
} from '@/data/products'
import { findSearchModel } from '@/lib/model-search'
import { findPartNumberSearch } from '@/lib/part-number-search'
import { buildAccessoryFilters } from '@/lib/catalog-filters'
import { catalogPartNumbers, withLiveCatalogData } from '@/lib/catalog-live'
import { useStockData } from '@/app/produkt/[slug]/StockInfo'

const tagOptions: { value: ProductTag; label: string }[] = [
  { value: 'magazyn', label: 'Magazyn' },
  { value: 'retail', label: 'Retail' },
  { value: 'produkcja', label: 'Produkcja' },
  { value: 'logistyka', label: 'Logistyka' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'outdoor', label: 'Outdoor' },
]

interface CatalogClientProps {
  initialParams: { [key: string]: string | string[] | undefined }
}

function CatalogContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const categoryParam = searchParams.get('kategoria') || ''
  const manufacturerParam = searchParams.get('producent') || ''
  const searchParam = searchParams.get('szukaj') || ''
  const isNewParam = searchParams.get('nowosc') === 'tak'
  const tagsParam = searchParams.get('zastosowanie')?.split(',').filter(Boolean) as ProductTag[] | undefined

  // Parametry z adresu zawężają listę (linki z reklam, wyszukiwarki i strony
  // głównej), a reszta filtrowania dzieje się już w sidebarze — tak samo jak na
  // stronach kategorii.
  const matchingProducts = useMemo(
    () =>
      filterProducts({
        categoryId: categoryParam || undefined,
        manufacturerId: manufacturerParam || undefined,
        search: searchParam || undefined,
        isNew: isNewParam || undefined,
        tags: tagsParam,
      }),
    [categoryParam, manufacturerParam, searchParam, isNewParam, tagsParam]
  )

  const selectedCategory = categories.find((c) => c.slug === categoryParam)
  const selectedManufacturer = manufacturers.find((m) => m.slug === manufacturerParam)
  const searchModel = useMemo(() => findSearchModel(searchParam, catalogProducts), [searchParam])
  const exactPnSearch = useMemo(() => searchModel ? undefined : findPartNumberSearch(searchParam, catalogProducts), [searchParam, searchModel])
  const exactPartNumber = exactPnSearch?.exact ? exactPnSearch.matches.values().next().value?.[0] : undefined
  const accessoryBrowsing = !!searchModel || categoryParam === 'akcesoria' ||
    (matchingProducts.length > 0 && matchingProducts.filter(p => p.categoryId === 'akcesoria').length > matchingProducts.length / 2)
  const stockPns = useMemo(() => accessoryBrowsing ? Array.from(new Set(matchingProducts.flatMap(catalogPartNumbers))) : [], [accessoryBrowsing, matchingProducts])
  const { stockData, loading: stockLoading } = useStockData(stockPns)
  const products = useMemo(() => matchingProducts.map(product => {
    const p = accessoryBrowsing ? withLiveCatalogData(product, stockData) : product
    const variant = exactPartNumber ? p.variants?.find(v => v.partNumber === exactPartNumber) : undefined
    if (!variant) return p
    const href = isThermalLabelProduct(p) || isTransferLabelProduct(p)
      ? `/produkt/${p.slug}/${variantSizeSlug(variant)}/${variant.partNumber}`
      : `/produkt/${p.slug}?pn=${encodeURIComponent(variant.partNumber)}`
    return { ...p, href }
  }), [matchingProducts, accessoryBrowsing, stockData, exactPartNumber])

  /** Model i akcesoria mają filtry doboru; pozostałe kategorie używają swoich filtrów. */
  const filters = useMemo<FilterDefinition[]>(() => {
    if (accessoryBrowsing) return [
      ...buildAccessoryFilters(products, catalogProducts, searchModel),
      { specKey: 'katalog-producent', label: 'Producent', defaultCollapsed: true, derived: manufacturers.map(m => ({ value: m.name, manufacturer: m.id })) },
      { ...filtrCenaKatalogu, defaultCollapsed: true },
    ]
    const zKategorii = selectedCategory ? categoryFilters[selectedCategory.slug] : undefined
    if (zKategorii) return zKategorii
    return [
      {
        specKey: 'katalog-producent',
        label: 'Producent',
        derived: manufacturers.map((m) => ({ value: m.name, manufacturer: m.id })),
      },
      filtrCenaKatalogu,
    ]
  }, [selectedCategory, accessoryBrowsing, products, searchModel])

  const categoryNav = useMemo(
    () =>
      categories.map((cat) => {
        const isParent = cat.id === selectedCategory?.id
        const subs = getSubcategoriesForCategory(cat.id)
        const marki = brandCategories
          .filter((b) => b.categoryId === cat.id)
          .map((bc) => ({ id: bc.id, slug: bc.slug, name: bc.name, productCount: 0, isCurrent: false }))
        const podkategorie = subs.map((sub) => ({
          id: sub.id,
          slug: sub.slug,
          name: sub.name,
          productCount: sub.productCount,
          isCurrent: false,
        }))
        return {
          id: cat.id,
          slug: cat.slug,
          name: cat.name,
          productCount: cat.productCount,
          isParent,
          children: isParent ? [...marki, ...podkategorie] : [],
        }
      }),
    [selectedCategory]
  )

  const usunParametr = (klucz: string, wartosc?: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (wartosc) {
      const reszta = (params.get(klucz) || '').split(',').filter((v) => v && v !== wartosc)
      if (reszta.length) params.set(klucz, reszta.join(','))
      else params.delete(klucz)
    } else {
      params.delete(klucz)
    }
    const query = params.toString()
    router.push(query ? `/katalog?${query}` : '/katalog', { scroll: false })
  }

  const chipy = [
    ...(selectedCategory ? [{ klucz: 'kategoria', etykieta: selectedCategory.name }] : []),
    ...(selectedManufacturer ? [{ klucz: 'producent', etykieta: selectedManufacturer.name }] : []),
    ...(searchParam ? [{ klucz: 'szukaj', etykieta: `„${searchParam}”` }] : []),
    ...(isNewParam ? [{ klucz: 'nowosc', etykieta: 'Nowości' }] : []),
    ...(tagsParam ?? []).map((tag) => ({
      klucz: 'zastosowanie',
      wartosc: tag,
      etykieta: tagOptions.find((t) => t.value === tag)?.label ?? tag,
    })),
  ]

  return (
    <div className="container-main py-8 lg:py-12">
      <div className="mb-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          {searchModel ? `${searchModel.name} — urządzenie i akcesoria` : exactPartNumber ? `Wyniki dla PN ${exactPartNumber}` : selectedCategory
            ? selectedCategory.name
            : selectedManufacturer
              ? `Produkty ${selectedManufacturer.name}`
              : searchParam
                ? `Wyniki dla "${searchParam}"`
                : 'Katalog produktów'}
        </h1>

        {selectedCategory && (
          <p className="text-gray-600 mb-4 max-w-3xl">{selectedCategory.longDescription}</p>
        )}
        {accessoryBrowsing && !exactPartNumber && (
          <p className="mt-3 max-w-3xl text-gray-600">Wybierz rodzaj akcesorium. Następnie dobierz funkcję stacji, liczbę terminali lub wersję zestawu.</p>
        )}

        {chipy.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mt-4">
            {chipy.map((chip) => (
              <Badge key={`${chip.klucz}-${chip.etykieta}`} variant="primary" className="flex items-center gap-1 pr-1">
                {chip.etykieta}
                <button
                  onClick={() => usunParametr(chip.klucz, 'wartosc' in chip ? chip.wartosc : undefined)}
                  className="ml-1 p-0.5 hover:bg-primary-200 rounded"
                  aria-label={`Usuń filtr ${chip.etykieta}`}
                >
                  <CloseIcon size={14} />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      {products.length === 0 && manufacturerParam ? (
        <div className="text-center py-16 px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Produkty tego producenta dopiero wchodzą do katalogu</h2>
          <p className="text-gray-500 max-w-md mx-auto mb-6">
            Sprzęt mamy w ofercie — jeśli szukasz konkretnego modelu, wyceniamy go z dnia na dzień.
          </p>
          <Link href="/kontakt">
            <Button size="md">Zapytaj o ofertę</Button>
          </Link>
        </div>
      ) : (
        /* Ten sam sidebar co na kategoriach: nawigacja po kategoriach + checkboxy z licznikiem */
        <FilterableProductGrid
          key={[categoryParam, manufacturerParam, searchParam, isNewParam, tagsParam?.join(',')].join('|')}
          products={products}
          filters={filters}
          categoryNav={categoryNav}
          columns={3}
          filtersFirst
          maxInitial={48}
          listName="katalog"
          urlFilterPrefix="f."
          loadingMessage={stockLoading && accessoryBrowsing ? 'Sprawdzanie cen i dostępności…' : undefined}
        />
      )}
    </div>
  )
}

export default function CatalogClient({ initialParams }: CatalogClientProps) {
  void initialParams
  return (
    <Suspense
      fallback={
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
      }
    >
      <CatalogContent />
    </Suspense>
  )
}
