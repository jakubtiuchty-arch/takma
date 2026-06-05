import { prisma } from '@/lib/db'
import { allegroFetch } from './client'
import { ALLEGRO_ENV } from './auth'
import { allegroPriceForPN } from './pricing'
import { buildRibbonOfferPayload, type AllegroOfferPayload } from './mapper'
import { uploadImageByUrl } from './images'
import { transferRibbonProducts } from '@/data/transfer-ribbon-products'
import { getRibbonSeriesByProductId } from '@/data/transfer-ribbon-series'
import type { Product, ProductVariant } from '@/data/products'

export interface ResolvedRibbonVariant {
  product: Product
  variant: ProductVariant
  series: ReturnType<typeof getRibbonSeriesByProductId>
}

/** Znajdź produkt + wariant + serię taśmy po Part Number. */
export function resolveRibbonByPN(partNumber: string): ResolvedRibbonVariant | null {
  for (const product of transferRibbonProducts) {
    const variant = product.variants?.find((v) => v.partNumber === partNumber)
    if (variant) {
      return { product, variant, series: getRibbonSeriesByProductId(product.id) }
    }
  }
  return null
}

export interface PublishResult {
  ok: boolean
  partNumber: string
  allegroId?: string
  status: 'DRAFT' | 'ERROR'
  error?: string
  priceNet?: number
  priceGross?: number
}

interface AllegroOfferResponse {
  id: string
}

/**
 * Wystaw wariant taśmy jako DRAFT na Allegro i zapisz w AllegroOffer.
 * Nie publikuje (status INACTIVE) — aktywację robi się ręcznie w panelu.
 */
export async function publishRibbonDraft(partNumber: string): Promise<PublishResult> {
  const resolved = resolveRibbonByPN(partNumber)
  if (!resolved || !resolved.series) {
    return { ok: false, partNumber, status: 'ERROR', error: 'Nie znaleziono wariantu/serii dla PN.' }
  }

  const price = await allegroPriceForPN(partNumber)
  if (!price) {
    return {
      ok: false,
      partNumber,
      status: 'ERROR',
      error: 'Brak żywej ceny w StockCache — pomijam (nie wystawiam z błędną ceną).',
    }
  }

  // Allegro wymaga min. 1 obrazu przy tworzeniu inline-produktu — wgrywamy do /sale/images.
  const imgPath =
    resolved.product.images?.[0] || resolved.product.imageDesktop || resolved.product.imageIndustrial
  if (!imgPath) {
    return { ok: false, partNumber, status: 'ERROR', error: 'Brak obrazu produktu — Allegro wymaga zdjęcia.' }
  }
  let images: string[]
  try {
    images = [await uploadImageByUrl(imgPath)]
  } catch (e) {
    return { ok: false, partNumber, status: 'ERROR', error: `Nie udało się wgrać obrazu do Allegro: ${(e as Error).message}` }
  }

  const payload: AllegroOfferPayload = buildRibbonOfferPayload({
    series: resolved.series,
    product: resolved.product,
    variant: resolved.variant,
    price,
    images,
  })

  // Edycja istniejącego szkicu (PUT) zamiast tworzenia nowego (POST) — bez osieroconych ofert.
  const existing = await prisma.allegroOffer.findUnique({
    where: { environment_partNumber: { environment: ALLEGRO_ENV, partNumber } },
    select: { allegroId: true },
  })
  const method = existing?.allegroId ? 'PATCH' : 'POST'
  const path = existing?.allegroId ? `/sale/product-offers/${existing.allegroId}` : '/sale/product-offers'

  try {
    const res = await allegroFetch<AllegroOfferResponse>(path, {
      method,
      body: JSON.stringify(payload),
    })
    await prisma.allegroOffer.upsert({
      where: { environment_partNumber: { environment: ALLEGRO_ENV, partNumber } },
      create: {
        environment: ALLEGRO_ENV,
        partNumber,
        seriesSlug: resolved.series.slug,
        productKind: 'ribbon',
        allegroId: res.id,
        status: 'DRAFT',
        priceNet: price.net,
        priceGross: price.gross,
        payload: JSON.stringify(payload),
      },
      update: {
        allegroId: res.id,
        status: 'DRAFT',
        priceNet: price.net,
        priceGross: price.gross,
        lastError: null,
        payload: JSON.stringify(payload),
      },
    })
    return { ok: true, partNumber, allegroId: res.id, status: 'DRAFT', priceNet: price.net, priceGross: price.gross }
  } catch (e) {
    const error = (e as Error).message
    await prisma.allegroOffer
      .upsert({
        where: { environment_partNumber: { environment: ALLEGRO_ENV, partNumber } },
        create: {
          environment: ALLEGRO_ENV,
          partNumber,
          seriesSlug: resolved.series.slug,
          productKind: 'ribbon',
          status: 'ERROR',
          priceNet: price.net,
          priceGross: price.gross,
          lastError: error.slice(0, 1000),
          payload: JSON.stringify(payload),
        },
        update: { status: 'ERROR', lastError: error.slice(0, 1000), payload: JSON.stringify(payload) },
      })
      .catch(() => {})
    return { ok: false, partNumber, status: 'ERROR', error, priceNet: price.net, priceGross: price.gross }
  }
}
