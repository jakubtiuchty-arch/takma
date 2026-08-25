import { prisma } from '@/lib/db'
import { allegroFetch } from './client'
import { ALLEGRO_ENV } from './auth'
import { allegroPriceForPN } from './pricing'
import { packQtyForPN, allegroPackPriceForPN, packsFromRolls, ALLEGRO_SELL_BY_CARTON } from './pack'
import { buildOfferPayload, type AllegroOfferPayload } from './mapper'
import { uploadImageByUrl } from './images'
import { offerServices } from './selling-policies'
import { isValidGtin } from './gtin'
import { liveAvailableForPN } from './stock'
import { gpsrForProductSet, ALLEGRO_AUTO_PUBLISH } from './gpsr'
import type { AllegroProductKind } from './categories'
import { transferRibbonProducts } from '@/data/transfer-ribbon-products'
import { products as allProducts } from '@/data/products'
import type { Product, ProductVariant } from '@/data/products'

/** Wszystkie produkty etykiet (TT + DT) z głównej listy — po subkategoriach. */
export const labelProducts: Product[] = allProducts.filter((p) =>
  (p.subcategoryIds || []).some(
    (s) => s === 'etykiety-termiczne' || s.startsWith('etykiety-termotransferowe'),
  ),
)

export interface ResolvedVariant {
  kind: AllegroProductKind
  product: Product
  variant: ProductVariant
}

/** Znajdź produkt + wariant + rodzaj (taśma/etykieta) po Part Number. */
export function resolveByPN(partNumber: string): ResolvedVariant | null {
  for (const product of transferRibbonProducts) {
    const variant = product.variants?.find((v) => v.partNumber === partNumber)
    if (variant) return { kind: 'ribbon', product, variant }
  }
  for (const product of labelProducts) {
    const variant = product.variants?.find((v) => v.partNumber === partNumber)
    if (variant) return { kind: 'label', product, variant }
  }
  return null
}

export interface PublishResult {
  ok: boolean
  partNumber: string
  kind?: AllegroProductKind
  allegroId?: string
  status: 'DRAFT' | 'ACTIVE' | 'ERROR' | 'ENDED'
  error?: string
  priceNet?: number
  priceGross?: number
}

interface AllegroOfferResponse {
  id: string
}

/**
 * Wystaw wariant (taśma lub etykieta) jako DRAFT na Allegro i zapisz w AllegroOffer.
 * Nie publikuje (status INACTIVE) — aktywację robi się ręcznie w panelu.
 */
export async function publishDraft(partNumber: string): Promise<PublishResult> {
  const resolved = resolveByPN(partNumber)
  if (!resolved) {
    return { ok: false, partNumber, status: 'ERROR', error: 'Nie znaleziono wariantu dla PN.' }
  }
  const { kind, product, variant } = resolved

  // Materiały kupujemy kartonami, więc kartonami je sprzedajemy — Allegro nie ma
  // minimalnej liczby sztuk w zamówieniu, a karton jako jedna pozycja załatwia to
  // samo (patrz lib/allegro/pack.ts). Bez znanego pakowania zostaje sprzedaż na sztuki.
  const packQty = ALLEGRO_SELL_BY_CARTON ? packQtyForPN(partNumber, kind) : null
  const price = packQty
    ? (await allegroPackPriceForPN(partNumber, kind, packQty)) ?? (await allegroPriceForPN(partNumber))
    : await allegroPriceForPN(partNumber)
  if (!price) {
    return {
      ok: false,
      partNumber,
      kind,
      status: 'ERROR',
      error: 'Brak żywej ceny w StockCache — pomijam (nie wystawiam z błędną ceną).',
    }
  }

  // Sprzedajemy wyłącznie kartonami, więc PN bez znanego pakowania nie ma jak
  // trafić na Allegro — istniejącą ofertę wygaszamy, nowej nie zakładamy.
  // (Wystarczy uzupełnić dane w label-carton-qty.ts / ribbon-carton-qty.ts.)
  if (ALLEGRO_SELL_BY_CARTON && !packQty) {
    const istniejaca = await prisma.allegroOffer.findUnique({
      where: { environment_partNumber: { environment: ALLEGRO_ENV, partNumber } },
      select: { allegroId: true, status: true },
    })
    if (istniejaca?.allegroId && istniejaca.status !== 'ENDED') {
      try {
        await allegroFetch(`/sale/product-offers/${istniejaca.allegroId}`, {
          method: 'PATCH',
          body: JSON.stringify({ publication: { status: 'ENDED' } }),
        })
        await prisma.allegroOffer.update({
          where: { environment_partNumber: { environment: ALLEGRO_ENV, partNumber } },
          data: { status: 'ENDED', lastError: 'Brak danych o pakowaniu — oferta wygaszona.' },
        })
      } catch (e) {
        return { ok: false, partNumber, kind, status: 'ERROR', error: `Nie udało się wygasić oferty: ${(e as Error).message}` }
      }
    }
    return { ok: true, partNumber, kind, status: 'ENDED', error: undefined }
  }

  // Allegro wymaga min. 1 obrazu przy tworzeniu inline-produktu — wgrywamy do /sale/images.
  const imgPath = product.images?.[0] || product.imageDesktop || product.imageIndustrial
  if (!imgPath) {
    return { ok: false, partNumber, kind, status: 'ERROR', error: 'Brak obrazu produktu — Allegro wymaga zdjęcia.' }
  }
  let images: string[]
  try {
    images = [await uploadImageByUrl(imgPath)]
  } catch (e) {
    return { ok: false, partNumber, kind, status: 'ERROR', error: `Nie udało się wgrać obrazu do Allegro: ${(e as Error).message}` }
  }

  // EAN/GTIN z ProductEan (klucze trzymane wielkimi literami) — wymagany do aktywacji.
  // Filtrujemy placeholdery Ingrama walidatorem; gdyby coś przeszło, ponawiamy bez EAN.
  const eanRow = await prisma.productEan.findUnique({
    where: { partNumber: partNumber.toUpperCase() },
    select: { ean: true },
  })
  const ean = isValidGtin(eanRow?.ean) ? eanRow!.ean : undefined

  // Żywy stan z StockCache (min(totalStock, 30)) — synchronizowany później cronem.
  // Przy sprzedaży kartonowej przeliczamy rolki na kartony.
  const rolls = await liveAvailableForPN(partNumber)
  const skutecznyPack = packQty && price ? packQty : 1
  const available = skutecznyPack > 1 ? packsFromRolls(rolls, skutecznyPack) : rolls

  const services = offerServices()
  const gpsr = gpsrForProductSet()
  const active = ALLEGRO_AUTO_PUBLISH
  let payload: AllegroOfferPayload = buildOfferPayload({
    kind, product, variant, price, images, services, ean, available, gpsr, active,
    packQty: skutecznyPack,
  })

  // Edycja istniejącego szkicu (PATCH) zamiast tworzenia nowego (POST) — bez osieroconych ofert.
  const existing = await prisma.allegroOffer.findUnique({
    where: { environment_partNumber: { environment: ALLEGRO_ENV, partNumber } },
    select: { allegroId: true },
  })
  const method = existing?.allegroId ? 'PATCH' : 'POST'
  const path = existing?.allegroId ? `/sale/product-offers/${existing.allegroId}` : '/sale/product-offers'

  const send = (
    p: AllegroOfferPayload,
    m: 'POST' | 'PATCH' = method,
    pa: string = path,
  ) => allegroFetch<AllegroOfferResponse>(pa, { method: m, body: JSON.stringify(p) })

  // Błędy „kolizji z katalogiem" Allegro: nasz EAN/kod trafił w istniejący produkt
  // (inna kategoria lub inny kod producenta). Bez EAN Allegro tworzy świeży produkt
  // w NASZEJ kategorii. Allegro nie pozwala na ofertę AKTYWNĄ bez GTIN → zapisujemy
  // wtedy jako SZKIC (do ręcznej aktywacji / uzupełnienia realnego EAN).
  const COLLISION =
    /GTIN|225693|Existing Product related to submitted data|does not match the existing parameter|does not match the existing product category/i

  // Ostatnia deska ratunku: bez EAN i z własną nazwą katalogową, jako SZKIC. Bez EAN-u
  // Allegro nie pozwala aktywować oferty, ale przynajmniej nie wpada w cudzy wpis.
  const retryWithoutEan = async (m: 'POST' | 'PATCH', pa: string) => {
    const draft = buildOfferPayload({
      kind, product, variant, price, images, services, ean: undefined, available, gpsr, active: false,
      uniqueCatalogName: true,
    })
    payload = draft
    return send(draft, m, pa)
  }

  // Ponów z WŁASNĄ nazwą produktu katalogowego (z PN na końcu). Dotyczy kolizji, w której
  // Allegro dopasowało nasz produkt do cudzego wpisu o innym „Kodzie producenta" — wtedy
  // ani EAN, ani jego brak nie pomagają, bo dopasowanie idzie po nazwie. Zachowujemy EAN,
  // więc oferta może zostać AKTYWNA (Allegro wymaga GTIN do aktywacji).
  const retryUniqueCatalogName = async (m: 'POST' | 'PATCH', pa: string) => {
    const unique = buildOfferPayload({
      kind, product, variant, price, images, services, ean, available, gpsr, active,
      uniqueCatalogName: true,
    })
    payload = unique
    return send(unique, m, pa)
  }

  /** Kolizja nazwy z cudzym wpisem katalogowym — rozwiązywalna własną nazwą produktu. */
  const NAME_COLLISION = /does not match the existing parameter/i

  try {
    let res: AllegroOfferResponse
    let forcedDraft = false
    try {
      res = await send(payload)
    } catch (e1) {
      const m1 = (e1 as Error).message
      if (method === 'PATCH' && /\b404\b|Not Found/i.test(m1)) {
        // Zapisany allegroId nie istnieje (oferta usunięta na Allegro) — utwórz od nowa (POST).
        try {
          res = await send(payload, 'POST', '/sale/product-offers')
        } catch (e2) {
          const m2 = (e2 as Error).message
          if (NAME_COLLISION.test(m2)) {
            res = await retryUniqueCatalogName('POST', '/sale/product-offers')
          } else if (ean && COLLISION.test(m2)) {
            res = await retryWithoutEan('POST', '/sale/product-offers')
            forcedDraft = true
          } else {
            throw e2
          }
        }
      } else if (COLLISION.test(m1) || NAME_COLLISION.test(m1)) {
        // Najpierw własna nazwa produktu katalogowego Z EAN-em — tylko taka oferta może
        // być AKTYWNA. Dopiero gdy i to odpadnie, schodzimy do szkicu bez EAN.
        try {
          res = await retryUniqueCatalogName(method, path)
        } catch (e3) {
          if (!ean) throw e3
          res = await retryWithoutEan(method, path)
          forcedDraft = true
        }
      } else {
        throw e1
      }
    }
    const offerStatus = !forcedDraft && active ? 'ACTIVE' : 'DRAFT'
    await prisma.allegroOffer.upsert({
      where: { environment_partNumber: { environment: ALLEGRO_ENV, partNumber } },
      create: {
        environment: ALLEGRO_ENV,
        partNumber,
        seriesSlug: product.slug,
        productKind: kind,
        allegroId: res.id,
        status: offerStatus,
        priceNet: price.net,
        priceGross: price.gross,
        stockAvailable: available,
        payload: JSON.stringify(payload),
      },
      update: {
        allegroId: res.id,
        status: offerStatus,
        priceNet: price.net,
        priceGross: price.gross,
        stockAvailable: available,
        lastError: null,
        payload: JSON.stringify(payload),
      },
    })
    return { ok: true, partNumber, kind, allegroId: res.id, status: offerStatus, priceNet: price.net, priceGross: price.gross }
  } catch (e) {
    const error = (e as Error).message
    // „cannot be changed to INACTIVE" = oferta JEST już aktywna na Allegro (próba zrobienia
    // z niej szkicu bez EAN). To nie błąd — uznajemy ją za ACTIVE i przestajemy ponawiać.
    if (existing?.allegroId && /cannot be changed to INACTIVE/i.test(error)) {
      await prisma.allegroOffer
        .update({
          where: { environment_partNumber: { environment: ALLEGRO_ENV, partNumber } },
          data: { status: 'ACTIVE', lastError: null },
        })
        .catch(() => {})
      return { ok: true, partNumber, kind, allegroId: existing.allegroId, status: 'ACTIVE', priceNet: price.net, priceGross: price.gross }
    }
    await prisma.allegroOffer
      .upsert({
        where: { environment_partNumber: { environment: ALLEGRO_ENV, partNumber } },
        create: {
          environment: ALLEGRO_ENV,
          partNumber,
          seriesSlug: product.slug,
          productKind: kind,
          status: 'ERROR',
          priceNet: price.net,
          priceGross: price.gross,
          lastError: error.slice(0, 1000),
          payload: JSON.stringify(payload),
        },
        update: { status: 'ERROR', lastError: error.slice(0, 1000), payload: JSON.stringify(payload) },
      })
      .catch(() => {})
    return { ok: false, partNumber, kind, status: 'ERROR', error, priceNet: price.net, priceGross: price.gross }
  }
}
