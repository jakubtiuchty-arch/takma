import { prisma } from '@/lib/db'
import { allegroFetch } from './client'
import { ALLEGRO_ENV } from './auth'
import { allegroPriceForPN } from './pricing'
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
  status: 'DRAFT' | 'ACTIVE' | 'ERROR'
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

  const price = await allegroPriceForPN(partNumber)
  if (!price) {
    return {
      ok: false,
      partNumber,
      kind,
      status: 'ERROR',
      error: 'Brak żywej ceny w StockCache — pomijam (nie wystawiam z błędną ceną).',
    }
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
  const available = await liveAvailableForPN(partNumber)

  const services = offerServices()
  const gpsr = gpsrForProductSet()
  const active = ALLEGRO_AUTO_PUBLISH
  let payload: AllegroOfferPayload = buildOfferPayload({
    kind, product, variant, price, images, services, ean, available, gpsr, active,
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

  // Ponów bez EAN jako SZKIC (zwraca [res, forcedDraft]).
  const retryWithoutEan = async (m: 'POST' | 'PATCH', pa: string) => {
    const draft = buildOfferPayload({
      kind, product, variant, price, images, services, ean: undefined, available, gpsr, active: false,
    })
    payload = draft
    return send(draft, m, pa)
  }

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
          if (ean && COLLISION.test((e2 as Error).message)) {
            res = await retryWithoutEan('POST', '/sale/product-offers')
            forcedDraft = true
          } else {
            throw e2
          }
        }
      } else if (ean && COLLISION.test(m1)) {
        res = await retryWithoutEan(method, path)
        forcedDraft = true
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
