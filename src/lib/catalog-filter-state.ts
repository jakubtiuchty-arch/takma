export type SelectedFilters = Record<string, Set<string>>
export type CatalogSort = 'domyslne' | 'cena-rosnaco' | 'cena-malejaco' | 'nazwa'
const sorts: CatalogSort[] = ['domyslne', 'cena-rosnaco', 'cena-malejaco', 'nazwa']

export function readCatalogFilterState(search: string, options: Record<string, string[]>, prefix: string) {
  const params = new URLSearchParams(search)
  const selected: SelectedFilters = {}
  for (const [id, allowed] of Object.entries(options)) {
    const values = params.getAll(prefix + id).filter(value => allowed.includes(value))
    if (values.length) selected[id] = new Set(values)
  }
  const rawSort = params.get(prefix + 'sortuj')
  const sort = sorts.includes(rawSort as CatalogSort) ? rawSort as CatalogSort : 'domyslne'
  return { selected, sort }
}

export function writeCatalogFilterState(search: string, selected: SelectedFilters, sort: CatalogSort, prefix: string) {
  const params = new URLSearchParams(search)
  for (const key of Array.from(params.keys())) if (key.startsWith(prefix)) params.delete(key)
  for (const [id, values] of Object.entries(selected)) for (const value of Array.from(values)) params.append(prefix + id, value)
  if (sort !== 'domyslne') params.set(prefix + 'sortuj', sort)
  return params.toString()
}
