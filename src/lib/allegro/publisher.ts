import { prisma } from '@/lib/db'
import { allegroFetch } from './client'
import { ALLEGRO_ENV } from './auth'
import { allegroPriceForPN } from './pricing'
import { buildOfferPayload, type AllegroOfferPayload } from './mapper'
import { uploadImageByUrl } from './images'
import { offerServices } from './selling-policies'
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
  status: 'DRAFT' | 'ERROR'
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

  const payload: AllegroOfferPayload = buildOfferPayload({
    kind,
    product,
    variant,
    price,
    images,
    services: offerServices(),
  })

  // Edycja istniejącego szkicu (PATCH) zamiast tworzenia nowego (POST) — bez osieroconych ofert.
  const existing = await prisma.allegroOffer.findUnique({
    where: { environment_partNumber: { environment: ALLEGRO_ENV, partNumber } },
    select: { allegroId: true },
  })
  const method = existing?.allegroId ? 'PATCH' : 'POST'
  const path = existing?.allegroId ? `/sale/product-offers/${existing.allegroId}` : '/sale/product-offers'

  try {
    const res = await allegroFetch<AllegroOfferResponse>(path, { method, body: JSON.stringify(payload) })
    await prisma.allegroOffer.upsert({
      where: { environment_partNumber: { environment: ALLEGRO_ENV, partNumber } },
      create: {
        environment: ALLEGRO_ENV,
        partNumber,
        seriesSlug: product.slug,
        productKind: kind,
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
    return { ok: true, partNumber, kind, allegroId: res.id, status: 'DRAFT', priceNet: price.net, priceGross: price.gross }
  } catch (e) {
    const error = (e as Error).message
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
