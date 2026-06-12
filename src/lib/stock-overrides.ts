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
  // Datalogic Skorpio X40 — premiera, dostawy w drodze do dystrybucji
  '946400001', '946400002', '946400003', '946400004', '946400005',
  '946400006', '946400007', '946400008', '946400009', '946400010',
  '946400011',
])

const PRELAUNCH_TEXT = 'Przedsprzedaż — wysyłka po premierze (ok. 2-4 tygodnie)'

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
    // Stan z API nie jest sprzedażowo dostępny — pokazujemy przedsprzedaż,
    // ilości przenosimy do „w drodze", cena zostaje (jest prawdziwa).
    const qty = (row.stockPL || 0) + (row.stockDE || 0) + (row.inDelivery || 0) || row.totalStock || 0
    row.stockPL = 0
    row.stockDE = 0
    row.inDelivery = qty
    row.totalStock = 0
    row.availability = 'on-order'
    row.deliveryText = PRELAUNCH_TEXT
  }
  return row
}
