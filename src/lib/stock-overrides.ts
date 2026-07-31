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

interface StockLike {
  partNumber: string
  found?: boolean
  availability?: string
  deliveryText?: string | null
  stockPL?: number
  stockDE?: number
  totalStock?: number
  inDelivery?: number
}

/** Nakłada korekty na pojedynczy wiersz stanu (mutuje i zwraca ten sam obiekt). */
export function applyStockOverrides<T extends StockLike>(row: T): T {
  if (row.found && PRELAUNCH_PNS.has(row.partNumber.toUpperCase())) {
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
