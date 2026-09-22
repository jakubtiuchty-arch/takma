/**
 * Ręczne korekty stanów per Part Number — nakładane na wynik scalania
 * dystrybutorów (stock-sync ORAZ /api/stock), więc przeżywają każdy sync.
 *
 * PRZEDSPRZEDAŻ (pre-launch): API dystrybutora raportuje stan magazynowy,
 * ale zamówienie jest niemożliwe do premiery. Przykład 2026-06-12:
 * BlueStar pokazywał inventory 2-33 szt. dla Datalogic Skorpio X40,
 * a webshop: „PRE-LAUNCH STATUS: contact your sales representative".
 * Bez override sklep obiecywał „wysyłka 2-3 dni" — nie do zrealizowania.
 *
 * USUNĄĆ PN z listy, gdy dystrybutor realnie sprzedaje (webshop pozwala
 * dodać do koszyka) — wtedy żywe stany wracają automatycznie.
 */

export const PRELAUNCH_PNS = new Set<string>([
  // Skorpio X40 i Falcon X60 zdjęte z listy 2026-07-31 — Jarltech ma realny
  // stan magazynowy (X40: 57/12/3 szt., X60: 33/8/7/13 szt.).
  // Datalogic Skorpio X45 (5G) — nadal przedsprzedaż (brak stanów w dystrybucji)
  '946450001', '946450002', '946450003',
  // Datalogic Falcon X65 (5G) — nadal przedsprzedaż (brak stanów w dystrybucji)
  '946650001', '946650002', '946650003', '946650004', '946650005',
  '946650006',
])

const PRELAUNCH_TEXT = 'Przedsprzedaż — dostawy w drodze do dystrybucji'

interface ManualStockOverride {
  stockPL: number
  stockDE: number
  deliveryText: string
}

/**
 * Stany utrzymywane ręcznie dla dystrybutorów bez API.
 * Wartość ma pierwszeństwo przed cache'em i odpowiedziami pozostałych dostawców.
 */
export const MANUAL_STOCK_OVERRIDES = new Map<string, ManualStockOverride>([
  [
    '3100-0001/3',
    {
      stockPL: 10,
      stockDE: 0,
      deliveryText: 'Dostępny — wysyłka 24h (10 szt.)',
    },
  ],
  [
    '3300-0021/S',
    {
      stockPL: 10,
      stockDE: 0,
      deliveryText: 'Dostępny — wysyłka 24h (10 szt.)',
    },
  ],
  [
    '3652-5021/3',
    {
      stockPL: 10,
      stockDE: 0,
      deliveryText: 'Dostępny — wysyłka 24h (10 szt.)',
    },
  ],
  [
    'MD100YMCKO/S',
    {
      stockPL: 10,
      stockDE: 0,
      deliveryText: 'Dostępny — wysyłka 24h (10 szt.)',
    },
  ],
  [
    'MD200YMCKO/S',
    {
      stockPL: 10,
      stockDE: 0,
      deliveryText: 'Dostępny — wysyłka 24h (10 szt.)',
    },
  ],
  [
    'MC300YMCKO/S',
    {
      stockPL: 10,
      stockDE: 0,
      deliveryText: 'Dostępny — wysyłka 24h (10 szt.)',
    },
  ],
  [
    'MC600KO/S',
    {
      stockPL: 10,
      stockDE: 0,
      deliveryText: 'Dostępny — wysyłka 24h (10 szt.)',
    },
  ],
  [
    'MB300YMCKO/S',
    {
      stockPL: 10,
      stockDE: 0,
      deliveryText: 'Dostępny — wysyłka 24h (10 szt.)',
    },
  ],
  [
    'MB250YMCKOK/S',
    {
      stockPL: 10,
      stockDE: 0,
      deliveryText: 'Dostępny — wysyłka 24h (10 szt.)',
    },
  ],
  [
    'MB600KO/S',
    {
      stockPL: 10,
      stockDE: 0,
      deliveryText: 'Dostępny — wysyłka 24h (10 szt.)',
    },
  ],
  ...([
    'MA1000K-BLACK',
    'MA1000K-WHITE',
    'MA1000K-BLUE',
    'MA1000K-GREEN',
    'MA1000K-RED',
    'MA1000K-SILVER',
    'MA1000K-GOLD',
    'MA1000K-SCRATCH',
    '3633-0053',
  ] as const).map((partNumber): [string, ManualStockOverride] => [
    partNumber,
    {
      stockPL: 10,
      stockDE: 0,
      deliveryText: 'Dostępny — wysyłka 24h (10 szt.)',
    },
  ]),
  [
    'E9100',
    {
      stockPL: 10,
      stockDE: 0,
      deliveryText: 'Dostępny — wysyłka 24h (10 szt.)',
    },
  ],
])

interface StockLike {
  partNumber: string
  found?: boolean
  availability?: string
  deliveryText?: string | null
  stockPL?: number
  stockDE?: number
  totalStock?: number
  inDelivery?: number
  price?: number
  priceBrutto?: number
}

/** Nakłada korekty na pojedynczy wiersz stanu (mutuje i zwraca ten sam obiekt). */
/**
 * Ręcznie ustalona cena sprzedaży netto per Part Number.
 *
 * Normalnie cena wychodzi z ceny zakupu razy marża, więc podąża za cennikiem
 * dystrybutora. Tu ustawiamy ją wprost, bo wynika z decyzji handlowej, a nie
 * z bieżącego kosztu — przykładem jest Zebra Trade UP, gdzie zakup jest niższy
 * od standardowego, ale **tylko przy zamówieniu z voucherem i oddaniu starego
 * sprzętu**. Bez tej ścieżki kupujemy drożej i sprzedaż poniżej kosztu.
 *
 * Dlatego każdy wpis musi mieć powód i datę, a przy wygaśnięciu promocji
 * (Trade UP: 31.12.2026) trzeba go usunąć, żeby cena wróciła do rachunku
 * z żywego kosztu.
 */
export const MANUAL_NET_PRICES = new Map<string, { netto: number; powod: string }>([
  [
    'ZC32-000C000EM00',
    {
      netto: 4573,
      powod: 'Zebra Trade UP (rabat 62 %, zakup 4163 zł) — cena na pierwsze miejsce w rankingu Ceneo; wymaga vouchera i oddania starego sprzętu. Ustawione 22.09.2026, wygasa z promocją 31.12.2026.',
    },
  ],
])

export function applyStockOverrides<T extends StockLike>(row: T): T {
  const partNumber = row.partNumber.toUpperCase()
  const manualStock = MANUAL_STOCK_OVERRIDES.get(partNumber)

  if (manualStock) {
    row.found = true
    row.stockPL = manualStock.stockPL
    row.stockDE = manualStock.stockDE
    row.inDelivery = 0
    row.totalStock = manualStock.stockPL + manualStock.stockDE
    row.availability = 'available'
    row.deliveryText = manualStock.deliveryText
    return row
  }

  // Cena ustalona ręcznie ma pierwszeństwo przed rachunkiem z kosztu i przed
  // wartością zapisaną w StockCache. Nakładamy ją tutaj, bo przez tę funkcję
  // przechodzą wszystkie ścieżki: odczyt z cache, wyliczenie na żywo i nocny sync.
  const recznaCena = MANUAL_NET_PRICES.get(partNumber)
  if (recznaCena && row.price != null) {
    row.price = recznaCena.netto
    row.priceBrutto = Math.round(recznaCena.netto * 1.23 * 100) / 100
  }

  if (row.found && PRELAUNCH_PNS.has(partNumber)) {
    // Stan z API nie jest sprzedażowo dostępny. Zasada sklepu (2026-06-12):
    // binarnie — brak stanu = Niedostępny; informacja o przedsprzedaży tylko
    // w deliveryText. Cena zostaje (jest prawdziwa).
    row.stockPL = 0
    row.stockDE = 0
    row.inDelivery = 0
    row.totalStock = 0
    row.availability = 'unavailable'
    row.deliveryText = PRELAUNCH_TEXT
  }
  return row
}
