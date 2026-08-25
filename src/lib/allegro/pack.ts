import { prisma } from '@/lib/db'
import { labelCartonQty } from '@/data/label-carton-qty'
import { ribbonCartonQty } from '@/data/ribbon-carton-qty'
import { ALLEGRO_MARKUP, VAT_RATE, type AllegroPrice } from './pricing'
import type { AllegroProductKind } from './categories'

/**
 * Sprzedaż w kartonach na Allegro.
 *
 * Materiały kupujemy u dystrybutora całymi kartonami, a Allegro nie zna pojęcia
 * „minimalna liczba sztuk w zamówieniu" — nie ma takiego pola ani w API, ani w
 * panelu. Jedyny sposób, żeby ktoś nie kupił jednej rolki z kartonu, to sprzedaż
 * kartonu jako jednej pozycji: `productSet[].quantity.value` mówi Allegro, ile
 * sztuk produktu zawiera jedna sprzedawana jednostka. Kupujący nie może wtedy
 * wziąć mniej, bo mniejszej jednostki po prostu nie ma w sprzedaży.
 *
 * Ceny liczymy marżą kartonową (jak w sklepie: taśmy 13%, etykiety 10%), więc
 * karton na Allegro nie wychodzi drożej za rolkę niż karton u nas.
 */

/**
 * Czy nowe i aktualizowane oferty idą jako kartony. Wyłączenie (`false`) wraca
 * do sprzedaży na sztuki bez ruszania kodu — istniejące oferty trzeba wtedy
 * przepublikować, bo pakowanie jest zapisane w samej ofercie na Allegro.
 */
export const ALLEGRO_SELL_BY_CARTON = true

/** Marża kartonowa — ta sama, którą sklep pokazuje w opcji „karton". */
const CARTON_MARGIN: Record<AllegroProductKind, number> = {
  ribbon: 1.13,
  label: 1.10,
}

/** Marża sztukowa ze sklepu — potrzebna, by zejść z ceny sklepowej na kartonową. */
const SINGLE_MARGIN: Record<AllegroProductKind, number> = {
  ribbon: 1.20,
  label: 1.15,
}

/** Ile rolek w kartonie dla tego PN (null = nie wiemy, zostaje sprzedaż na sztuki). */
export function packQtyForPN(partNumber: string, kind: AllegroProductKind): number | null {
  const qty = kind === 'ribbon' ? ribbonCartonQty(partNumber) : labelCartonQty(partNumber)
  return qty && qty > 1 ? qty : null
}

/**
 * Cena kartonu na Allegro: cena zakupu × marża kartonowa × prowizja Allegro,
 * razy liczba rolek. Bez ceny zakupu z Ingrama nie ma na czym liczyć marży
 * kartonowej — wtedy null i oferta zostaje na sztuki.
 */
export async function allegroPackPriceForPN(
  partNumber: string,
  kind: AllegroProductKind,
  packQty: number,
): Promise<AllegroPrice | null> {
  const row = await prisma.stockCache.findUnique({
    where: { partNumber },
    select: { ingramPrice: true, price: true },
  })
  if (!row?.ingramPrice && !row?.price) return null

  // Dwie drogi do ceny kartonowej: od ceny zakupu z Ingrama i od ceny sklepowej
  // (ta bywa liczona z tańszego źródła — Jarltech, BlueStar). Bierzemy niższą,
  // bo karton nigdy nie może wyjść drożej za rolkę niż sprzedaż na sztuki.
  const kandydaci = [
    row.ingramPrice ? row.ingramPrice * CARTON_MARGIN[kind] : null,
    row.price ? (row.price * CARTON_MARGIN[kind]) / SINGLE_MARGIN[kind] : null,
  ].filter((x): x is number => !!x && x > 0)
  if (kandydaci.length === 0) return null

  const perRoll = Math.min(...kandydaci) * ALLEGRO_MARKUP
  const net = Math.round(perRoll * packQty * 100) / 100
  return { net, gross: Math.round(net * VAT_RATE * 100) / 100 }
}

/** Ile kartonów da się wystawić przy danym stanie rolek. */
export function packsFromRolls(rolls: number, packQty: number): number {
  return Math.floor(rolls / packQty)
}
