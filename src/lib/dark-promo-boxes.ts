import { type Product, isThermalLabelProduct, isTransferLabelProduct, isRibbonProduct } from '@/data/products'
import { activePromo, zipshipActive, ds3678DemoActive, DS3678_DEMO } from '@/data/promos'
import { PROMOTIONS, isPromotionActive } from '@/data/promotions'
import { priceIncreaseFor, priceIncreaseActive } from '@/data/price-increase'

/**
 * Czy pod boksem ceny na karcie produktu stoi już ciemny kafel (promocja, ZipShip,
 * program testów DS3678, promocje z /promocje, komunikat o podwyżce). Wtedy koszt
 * dostawy pokazujemy w płaskiej formie w szarym boksie, żeby dwa ciemne kafle
 * nie stały jeden pod drugim. Warunki te same, co przy renderowaniu kafli w page.tsx.
 */
export function hasDarkPromoBox(product: Product): boolean {
  if (activePromo(product.slug)) return true
  if (zipshipActive() && (isThermalLabelProduct(product) || isTransferLabelProduct(product) || isRibbonProduct(product))) return true
  if (ds3678DemoActive() && DS3678_DEMO.slugs.includes(product.slug)) return true
  if (PROMOTIONS.some(p => isPromotionActive(p) && p.products?.some(x => x.slug === product.slug))) return true
  if (priceIncreaseFor(product) && priceIncreaseActive()) return true
  return false
}
