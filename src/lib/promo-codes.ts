import { prisma } from '@/lib/db'
import { activePromo, promoBySku, MAX_PROMO_QTY, ZEBRA_CEE_PROMO, KODY_RABATOWE_AUTO, type ProductPromo } from '@/data/promos'

/**
 * Kody rabatowe do promocji producenckich.
 *
 * Rabat Zebry pochodzi z vouchera wystawianego imiennie na klienta końcowego,
 * więc cena promocyjna nie może obowiązywać każdego, kto doda produkt do
 * koszyka. Klient zgłasza się formularzem z karty produktu, dostaje mailem kod
 * przypisany do siebie, do jednego numeru katalogowego i do jednego zamówienia.
 * Kod ma termin ważności — im krócej żyje, tym mniejsza ekspozycja, gdyby
 * voucher nie przeszedł i sprzęt trzeba było kupić w cenie regularnej.
 */

/** Ile dni ważny jest kod (nigdy dłużej niż sama promocja). */
const WAZNOSC_DNI = 14

/** Bez znaków, które klient pomyli przy przepisywaniu z maila: O/0, I/1, U/V. */
const ALFABET = 'ABCDEFGHJKLMNPRSTWXYZ23456789'

function losowyKod(): string {
  const bytes = new Uint8Array(8)
  crypto.getRandomValues(bytes)
  const znaki = Array.from(bytes, b => ALFABET[b % ALFABET.length])
  return `ZEBRA-${znaki.slice(0, 4).join('')}-${znaki.slice(4).join('')}`
}

function dataWaznosci(): Date {
  const zaDwaTygodnie = new Date(Date.now() + WAZNOSC_DNI * 24 * 60 * 60 * 1000)
  const koniecPromocji = new Date(`${ZEBRA_CEE_PROMO.endDate}T23:59:59+02:00`)
  return zaDwaTygodnie < koniecPromocji ? zaDwaTygodnie : koniecPromocji
}

export interface WystawionyKod {
  code: string
  sku: string
  promoNetto: number
  regularNetto: number
  maxQty: number
  expiresAt: Date
}

/**
 * Wystawia kod dla zgłoszenia z karty produktu. Zwraca null, gdy automat jest
 * wyłączony (KODY_RABATOWE_AUTO), produkt nie jest objęty promocją albo
 * promocja się skończyła — wtedy zgłoszenie idzie zwykłą ścieżką zapytania.
 *
 * `wymus: true` pomija flagę — tak wystawiamy kod ręcznie ze skryptu.
 */
export async function wystawKod(dane: {
  productSlug: string
  productName: string
  name: string
  email: string
  phone?: string
  wymus?: boolean
}): Promise<WystawionyKod | null> {
  if (!KODY_RABATOWE_AUTO && !dane.wymus) return null

  const promo: ProductPromo | null = activePromo(dane.productSlug)
  if (!promo) return null

  const expiresAt = dataWaznosci()

  // Kolizja kodu jest praktycznie niemożliwa (29^8), ale unikat trzyma baza,
  // więc przy trafieniu po prostu losujemy jeszcze raz.
  for (let proba = 0; proba < 5; proba++) {
    const code = losowyKod()
    try {
      await prisma.promoCode.create({
        data: {
          code,
          sku: promo.sku,
          priceNetto: Math.round(promo.promoNetto * 100),
          maxQty: MAX_PROMO_QTY,
          productName: dane.productName,
          productSlug: dane.productSlug,
          name: dane.name,
          email: dane.email,
          phone: dane.phone || null,
          expiresAt,
        },
      })
      return {
        code,
        sku: promo.sku,
        promoNetto: promo.promoNetto,
        regularNetto: promo.regularNetto,
        maxQty: MAX_PROMO_QTY,
        expiresAt,
      }
    } catch (e) {
      if (proba === 4) throw e
    }
  }
  return null
}

export interface SprawdzonyKod {
  code: string
  sku: string
  promoNetto: number
  maxQty: number
  productName: string | null
  expiresAt: string
}

/**
 * Sprawdza kod podany w koszyku. Cena bierze się z promos.ts, nie z bazy —
 * gdybyśmy zmienili cennik promocji, kod nie zamraża starej kwoty.
 */
export async function sprawdzKod(
  kodWpisany: string,
): Promise<{ ok: true; kod: SprawdzonyKod } | { ok: false; blad: string }> {
  const code = kodWpisany.trim().toUpperCase()
  if (!code) return { ok: false, blad: 'Podaj kod rabatowy.' }

  const wpis = await prisma.promoCode.findUnique({ where: { code } })
  if (!wpis) return { ok: false, blad: 'Nie znamy takiego kodu. Sprawdź, czy przepisałeś go dokładnie z wiadomości.' }
  if (wpis.revoked) return { ok: false, blad: 'Ten kod został wycofany. Napisz do nas, ustalimy warunki.' }
  if (wpis.usedAt) return { ok: false, blad: 'Ten kod został już wykorzystany w zamówieniu.' }
  if (wpis.expiresAt < new Date()) {
    return { ok: false, blad: `Kod stracił ważność ${wpis.expiresAt.toLocaleDateString('pl-PL')}. Napisz do nas po nowy.` }
  }

  const promo = promoBySku(wpis.sku)
  if (!promo) return { ok: false, blad: 'Promocja na ten produkt już się zakończyła.' }

  return {
    ok: true,
    kod: {
      code,
      sku: wpis.sku,
      promoNetto: promo.promoNetto,
      maxQty: wpis.maxQty,
      productName: wpis.productName,
      expiresAt: wpis.expiresAt.toISOString(),
    },
  }
}

interface PozycjaZKodem {
  partNumber?: string | null
  quantity: number
  priceNetto: number
}

/**
 * Podmienia cenę pozycji objętej kodem. Wołane po stronie serwera przed
 * zapisaniem zamówienia — koszyk jest w przeglądarce, więc kwota, która stamtąd
 * przychodzi, jest danymi od klienta. Kod nieważny albo niepasujący do żadnej
 * pozycji przechodzi bez efektu; zamówienie idzie wtedy po cenach regularnych.
 */
export async function zastosujKod<T extends PozycjaZKodem>(
  items: T[],
  kodWpisany?: string | null,
): Promise<T[]> {
  if (!kodWpisany) return items
  const wynik = await sprawdzKod(kodWpisany)
  if (!wynik.ok) return items

  const { sku, promoNetto, maxQty } = wynik.kod
  let objete = 0

  return items.map(item => {
    if (item.partNumber !== sku) return item
    if (objete >= maxQty) return item
    // Kod obejmuje maxQty sztuk łącznie; nadwyżka w tej samej pozycji zostaje
    // po cenie regularnej, więc rozbijamy ją na dwie linie tylko wtedy, gdy
    // trzeba — a że koszyk trzyma jedną cenę na pozycję, przy nadwyżce po
    // prostu nie ruszamy pozycji i klient dostaje informację w koszyku.
    if (item.quantity > maxQty - objete) return item
    objete += item.quantity
    return { ...item, priceNetto: promoNetto }
  })
}

/** Zamyka kod po złożeniu zamówienia — jeden kod, jedno zamówienie. */
export async function oznaczKodJakoUzyty(kodWpisany: string | null | undefined, orderNumber: string) {
  if (!kodWpisany) return
  try {
    await prisma.promoCode.updateMany({
      where: { code: kodWpisany.trim().toUpperCase(), usedAt: null },
      data: { usedAt: new Date(), orderNumber },
    })
  } catch (e) {
    console.error('[PromoCode] Nie udało się oznaczyć kodu jako użyty:', (e as Error).message)
  }
}
