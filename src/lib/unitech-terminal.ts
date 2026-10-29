import type { Product } from '@/data/products'

/** Czytniki RFID Unitech w kategorii terminali: RP300 (uchwyty RFID) i RP902 (czytniki RFID). */
const CZYTNIKI_RFID = ['uchwyty-rfid', 'czytniki-rfid']

/**
 * Terminale Unitech EA (EA660, EA530, EA530 UHF) stoją w jednej siatce z Bluebird i CipherLab, więc mają ten sam układ kart.
 * Czytniki RFID Unitech (RP300, RP902) mają tę samą kategorię, ale własny wygląd, więc są wyłączone.
 */
export function isUnitechTerminal(product: Pick<Product, 'manufacturerId' | 'categoryId' | 'subcategoryIds'>): boolean {
  return product.manufacturerId === 'unitech'
    && product.categoryId === 'terminale-mobilne'
    && !product.subcategoryIds?.some(id => CZYTNIKI_RFID.includes(id))
}
