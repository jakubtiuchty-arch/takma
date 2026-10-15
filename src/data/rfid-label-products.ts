import type { Product } from './products'
import catalog from './rfid-label-catalog.json'

/** Materiały RFID z potwierdzonym zapasem podczas wprowadzenia do oferty.
 * Aktualną cenę i dostępność wyznacza wspólna integracja dystrybucji.
 * Dokumentacja źródłowa i rozbieżności: docs/rfid-labels/.
 */
export const rfidLabelProducts = catalog as Product[]
export const rfidLabelSlugs = new Set(rfidLabelProducts.map(product => product.slug))
export const rfidLabelPartNumbers = new Set(rfidLabelProducts.flatMap(product =>
  product.variants?.map(variant => variant.partNumber) ?? [],
))
