import type { Product } from '@/data/products'
import type { FilterDefinition } from '@/components/subcategory/FilterableProductGrid'

export type CatalogFacets = Record<string, string[]>
const spec = (p: Product, names: string[]) => p.specifications.filter(s => names.includes(s.name)).map(s => s.value).join(' ')

/** Use product facts only. Required or optional peripherals do not add features to a station. */
export function getCatalogFacets(p: Product): CatalogFacets {
  const values: CatalogFacets = {}
  const put = (key: string, value: string) => { (values[key] ??= []).push(value) }
  put('oferta', p.categoryId === 'akcesoria' ? 'Akcesoria' : ['materialy-eksploatacyjne', 'oprogramowanie'].includes(p.categoryId) ? 'Pozostałe produkty' : 'Urządzenia')
  put('dostepnosc', p.availability === 'available' ? 'Dostępny' : 'Niedostępny')
  if (p.categoryId !== 'akcesoria') return values

  const name = p.name.toLowerCase()
  const pn = spec(p, ['Part Number']).toUpperCase()
  let type: string
  if (/^(gniazdo|wkładk|uchwyt (gniazda|stacji)|baza |zestaw modernizacji|adapter stacji)/.test(name) || /^(HLD-|SHIM-|CRDCUP-NG)/.test(pn)) type = 'Części i modernizacja stacji'
  else if (/^(stacja|zestaw stacji|uchwyt (pojazdowy|samochodowy))/.test(name)) type = /pojazdow|samochodow/.test(name) ? 'Stacje i uchwyty pojazdowe' : 'Stacje biurkowe'
  else if (/^ładowarka/.test(name)) type = 'Ładowarki baterii'
  else if (/^bateri/.test(name)) type = 'Baterie'
  else if (/pistoletow/.test(name) && /^uchwyt/.test(name)) type = 'Uchwyty pistoletowe'
  else if (/^(szkło|folia)/.test(name)) type = 'Ochrona ekranu'
  else if (/^(osłona|etui)/.test(name)) type = 'Osłony i etui'
  else if (/^kabur/.test(name)) type = 'Kabury'
  else if (/^(pasek|pas |opaska|rękaw|smycz)/.test(name)) type = 'Paski i opaski'
  else if (/^(rysik|linka|zestaw rysik)/.test(name)) type = 'Rysiki i linki'
  else if (/^(słuchaw|zestaw słuchaw|mikrofon|moduł (mikrofon|hs)|pałąk|poduszk)/.test(name) || /^(HS3100|HDST-|CBL-HS3100|SAC-HS3100)/.test(pn)) type = 'Słuchawki i ich akcesoria'
  else if (/^(zasilacz|adapter zasil|przetwornic)/.test(name)) type = 'Zasilacze'
  else if (/^(przewód|kabel)/.test(name)) type = 'Przewody'
  else if (/^klawiatur/.test(name)) type = 'Klawiatury'
  else if (/^(mocowanie|obejma|podstawa|uchwyt|adapter)/.test(name)) type = 'Mocowania i uchwyty'
  else type = 'Pozostałe akcesoria'
  put('rodzaj-akcesorium', type)
  const pack = (name + ' ' + spec(p, ['Opakowanie', 'Liczba sztuk', 'Liczba sztuk w zestawie'])).match(/\b(\d+)\s*szt(?:\.|uk)?/i)?.[1]
  if (pack) put('liczba-sztuk', pack)

  const station = ['Stacje biurkowe', 'Stacje i uchwyty pojazdowe'].includes(type)
  if (station) {
    const communication = spec(p, ['Komunikacja', 'Interfejsy', 'Łączność', 'Funkcja', 'Funkcje'])
    // Don't turn “nie obsługuje Ethernet” into an Ethernet capability.
    const positive = communication.split(/[.;]/).filter(s => !/nie obsługuje|brak|bez (komunikacji|ethernet)/i.test(s)).join(' ')
    const intro = p.description.split('\n\n')[0]
    if (/ethernet/i.test(positive) || /ethernet/.test(name)) put('funkcja-stacji', 'Ethernet')
    if (/USB/i.test(positive) || /(?:,|—)\s*USB(?:\s*\/|,|\s*—|\s*$)/i.test(p.name) || /przenosi dane przez USB-C/i.test(intro)) put('funkcja-stacji', 'USB — transmisja danych')
    if (/tylko.{0,5}ładowan/i.test(communication) || /służy tylko do ładowania/i.test(intro) || (/ładowan/.test(name) && !values['funkcja-stacji']?.length)) put('funkcja-stacji', 'Tylko ładowanie')
    if (/bez ładowania/.test(name) || /nie ładuje terminala/i.test(intro)) put('funkcja-stacji', 'Bez ładowania')
    if (/szybkie ładowanie/.test(name)) put('szybkosc-ladowania', 'Szybkie ładowanie')

    const terminals = spec(p, ['Liczba terminali', 'Liczba urządzeń', 'Liczba stanowisk']).match(/\d+/)?.[0]
      ?? name.match(/\b(\d+)\s+(?:terminal|urządze|stanowisk)/)?.[1]
    if (terminals) put('liczba-terminali', terminals)
    const batteries = spec(p, ['Liczba zapasowych baterii', 'Liczba baterii', 'Liczba gniazd baterii']).match(/\d+/)?.[0]
      ?? name.match(/\bi\s+(\d+)\s+bateri/)?.[1]
    if (batteries) put('ladowanie-baterii', Number(batteries) ? 'Z ładowaniem baterii zapasowych' : 'Bez ładowania baterii zapasowych')
    if (batteries && Number(batteries) > 0) put('liczba-baterii', batteries)

    const kit = spec(p, ['Zawartość zestawu', 'Zestaw'])
    if (/bez zasilacza|zasilacz.{0,30}sprzedawany osobno/i.test(kit) || /bez zasilacza/.test(name)) put('zasilacz-w-zestawie', 'Bez zasilacza')
    else if (/zasilacz/i.test(kit) || /zestaw z zasilaczem/.test(name)) put('zasilacz-w-zestawie', 'Z zasilaczem')
  }

  if (type === 'Ładowarki baterii') {
    const batteries = spec(p, ['Liczba baterii', 'Liczba gniazd', 'Liczba gniazd baterii', 'Liczba stanowisk']).match(/\d+/)?.[0]
      ?? name.match(/\b(\d+)\s+bateri/)?.[1]
    if (batteries) put('liczba-baterii', batteries)
  }

  if (station || type === 'Uchwyty pistoletowe') {
    const variant = name + ' ' + spec(p, ['Wariant', 'Wersja terminala', 'Konfiguracja terminala']).toLowerCase()
    if (/bez osłony|bez etui/.test(variant)) put('oslona-terminala', 'Do terminala bez osłony')
    if (/(?:^|\s)z osłoną|z etui/.test(variant)) put('oslona-terminala', 'Do terminala z osłoną')
    if (/bez zamka/.test(name)) put('zamek', 'Bez zamka')
    else if (/z zamkiem|z zamknięciem/.test(name)) put('zamek', 'Z zamkiem')
  }

  if (type === 'Baterie') {
    const capacity = (spec(p, ['Pojemność', 'Pojemność baterii']) || name).match(/(\d[\d ]*)\s*mAh/i)?.[1]
    if (capacity) put('pojemnosc-baterii', capacity.replace(/\s/g, '') + ' mAh')
    if (/bezprzewodow/.test(name) || /-WC-/.test(pn)) put('wariant-baterii', 'Do ładowania bezprzewodowego')
    else if (/rozszerzon/.test(name) || /-EC-/.test(pn)) put('wariant-baterii', 'Rozszerzona')
    else if (/standardow/.test(name) || /-SC-/.test(pn)) put('wariant-baterii', 'Standardowa')
  }
  if (type === 'Zasilacze') {
    const voltage = spec(p, ['Napięcie wejściowe', 'Wejście', 'Zasilanie wejściowe'])
    if (/\bAC\b|100.{0,3}240|230\s*V/.test(voltage) || /\bEU\b/.test(p.name)) put('zasilanie', 'Sieć 230 V')
    if (/\bDC\b/.test(voltage) || /pojazdow|zapalniczk/.test(name)) put('zasilanie', 'Pojazd — napięcie DC')
    const watts = (spec(p, ['Moc', 'Moc maksymalna', 'Moc wyjściowa']) || name).match(/(\d+)\s*W\b/i)?.[1]
    if (watts) put('moc', watts + ' W')
  }
  if (['Zasilacze', 'Przewody', 'Stacje i uchwyty pojazdowe', 'Ładowarki baterii'].includes(type)) {
    const connectors = name + ' ' + spec(p, ['Złącze', 'Złącze zasilania', 'Złącze wyjściowe', 'Złącza', 'Typ złącza', 'Interfejs'])
    if (/USB-C|USBC/i.test(connectors)) put('zlacze', 'USB-C')
    if (/Micro-USB/i.test(connectors)) put('zlacze', 'Micro-USB')
    if (/\bC13\b/i.test(connectors)) put('zlacze', 'IEC C13')
    if (/\bDC\s*5|wtyk DC|złącze DC/i.test(connectors)) put('zlacze', 'Wtyk DC')
    if (/\bDEX\b/i.test(connectors)) put('zlacze', 'DEX')
  }
  return values
}

const definitions: [string, string, string?][] = [
  ['rodzaj-akcesorium', 'Rodzaj akcesorium'],
  ['oferta', 'Szukam'],
  ['funkcja-stacji', 'Funkcja stacji', 'Ethernet i USB oznaczają transmisję danych. Sam port USB-C do zasilania nie oznacza transmisji danych.'],
  ['liczba-terminali', 'Liczba terminali w stacji'],
  ['ladowanie-baterii', 'Ładowanie baterii zapasowych'],
  ['liczba-baterii', 'Liczba ładowanych baterii'],
  ['oslona-terminala', 'Osłona terminala', 'Dobierz stację lub uchwyt do terminala z osłoną albo bez osłony. Ten filtr nie oznacza, że osłona jest w zestawie.'],
  ['zasilacz-w-zestawie', 'Zasilacz w zestawie', 'Przewód sieciowy może być sprzedawany osobno także w zestawie z zasilaczem. Sprawdź wymagane elementy na karcie produktu.'],
  ['szybkosc-ladowania', 'Szybkie ładowanie'],
  ['pojemnosc-baterii', 'Pojemność baterii'],
  ['wariant-baterii', 'Wariant baterii', 'Bateria do ładowania bezprzewodowego może wymagać określonej wersji terminala. Sprawdź zgodność na karcie produktu.'],
  ['zasilanie', 'Źródło zasilania'],
  ['moc', 'Moc zasilacza'],
  ['zlacze', 'Złącze'],
  ['zamek', 'Zamek stacji'],
  ['liczba-sztuk', 'Liczba sztuk w opakowaniu'],
  ['dostepnosc', 'Dostępność'],
]

/** Exact slug rules keep facet evaluation cheap and avoid parsing descriptions in the UI. */
export function buildAccessoryFilters(list: Product[], catalog: Product[], model?: Product): FilterDefinition[] {
  const facets = list.map(p => ({ product: p, values: getCatalogFacets(p) }))
  const filters = definitions.map(([key, label, description]): FilterDefinition => {
    const options = key === 'dostepnosc' ? ['Dostępny', 'Niedostępny'] : Array.from(new Set(facets.flatMap(p => p.values[key] ?? [])))
    if (['liczba-terminali', 'liczba-baterii', 'liczba-sztuk', 'pojemnosc-baterii', 'moc'].includes(key)) options.sort((a, b) => parseInt(a) - parseInt(b))
    return { specKey: 'katalog-' + key, label, description, prominent: key === 'rodzaj-akcesorium', style: key === 'rodzaj-akcesorium' ? 'dropdown' : 'checkbox', defaultCollapsed: !['oferta', 'rodzaj-akcesorium', 'funkcja-stacji', 'liczba-terminali'].includes(key), derived: options.map(value => ({ value, slugs: facets.filter(p => p.values[key]?.includes(value)).map(p => p.product.slug) })) }
  }).filter(f => f.derived!.length)
  // Compatibility comes from curated device relationships, never from comparison prose.
  const models = catalog.filter(p => p.categoryId !== 'akcesoria' && p.relatedAccessories?.length)
  const compatible = models.map(p => ({ p, slugs: list.filter(item => p.id === item.id || p.relatedAccessories!.includes(item.id) || p.compatibleAccessories.includes(item.id)).map(item => item.slug) })).filter(p => p.slugs.length)
  compatible.sort((a, b) => (a.p.id === model?.id ? -1 : b.p.id === model?.id ? 1 : b.slugs.length - a.slugs.length))
  if (compatible.length > 1) filters.push({ specKey: 'katalog-model', label: 'Zgodny model', defaultCollapsed: true, description: 'Pokazuje akcesoria powiązane z wybranym modelem. Sprawdź też wymaganą wersję terminala na karcie akcesorium.', derived: compatible.map(({ p, slugs }) => ({ value: p.name, slugs })) })
  return filters
}
