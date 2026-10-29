import type { Product } from '@/data/products'

/**
 * Terminale Unitech EA (EA660, EA530, EA530 UHF) stoją w jednej siatce z Bluebird i CipherLab, więc mają ten sam układ kart.
 * Uchwyty RFID Unitech (RP300, RP902) mają tę samą kategorię, ale własny wygląd, więc są wyłączone.
 */
export function isUnitechTerminal(product: Pick<Product, 'manufacturerId' | 'categoryId' | 'subcategoryIds'>): boolean {
  return product.manufacturerId === 'unitech'
    && product.categoryId === 'terminale-mobilne'
    && !product.subcategoryIds?.includes('uchwyty-rfid')
}
