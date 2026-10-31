/**
 * Wspólny rejestr serii taśm termotransferowych (Zebra + SATO): adresy hubów i stron serii.
 * Strony, które obsługują obie marki (karta produktu, mapa witryny, czat), biorą URL stąd,
 * a nie z wpisanego na sztywno /tasmy-termotransferowe.
 */

import { transferRibbonSeries, getRibbonSeriesByProductId, type RibbonSeries } from './transfer-ribbon-series'
import { satoRibbonSeries, getSatoRibbonSeriesByProductId } from './sato-ribbon-series'

export type RibbonBrand = 'zebra' | 'sato'

export function ribbonHubUrl(brand: RibbonBrand): '/tasmy-termotransferowe' | '/tasmy-termotransferowe-sato' {
  return brand === 'sato' ? '/tasmy-termotransferowe-sato' : '/tasmy-termotransferowe'
}

export function ribbonSeriesUrl(series: RibbonSeries): string {
  return `${ribbonHubUrl(series.brand ?? 'zebra')}/serie/${series.slug}`
}

/** Seria po id produktu-rodzica: najpierw Zebra, potem SATO. */
export function getAnyRibbonSeriesByProductId(productId: string): RibbonSeries | undefined {
  return getRibbonSeriesByProductId(productId) ?? getSatoRibbonSeriesByProductId(productId)
}

export const allRibbonSeries: RibbonSeries[] = [...transferRibbonSeries, ...satoRibbonSeries]
