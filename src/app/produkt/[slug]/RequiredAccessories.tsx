import { products } from '@/data/products'
import RequiredAccessoryList from './RequiredAccessoryList'
import { getRequiredAccessoriesCopy } from '@/lib/required-accessory-copy'

export interface RequiredAccessoryItem {
  id: string
  slug: string
  name: string
  pn?: string
  image?: string
  price?: number
  availability: 'available' | 'on-order' | 'unavailable'
  categoryId: string
  manufacturerId: string
  condition?: string
}

export function getRequiredAccessories(description: string): RequiredAccessoryItem[] {
  const blocks = Array.from(description.matchAll(/\*\*Wymagane(?: dla ([^*\n]+))? — sprzedawane osobno\*\*\n\n([\s\S]*?)\n\n/g))
  return blocks.flatMap(([, condition, links]) => links.split('\n').filter(line => line.startsWith('- ')).flatMap<RequiredAccessoryItem>(line => {
    const linked = line.match(/\[([^\]]+)\]\(\/produkt\/([^)]+)\)/)
    const label = linked?.[1] ?? line.slice(2)
    const slug = linked?.[2] ?? ''
    const product = products.find(p => p.slug === slug)
    const match = label.match(/^(.*) \(([^)]+)\)$/)
    if (!product) return [{
      id: `required-${match?.[2] ?? label}`,
      slug: '',
      name: match?.[1] ?? label,
      pn: match?.[2],
      availability: 'unavailable' as const,
      categoryId: 'akcesoria',
      manufacturerId: 'zebra',
      condition,
    }]
    const pn = match?.[2] ?? product.specifications.find(s => s.name === 'Part Number')?.value
    const variant = product.variants?.find(v => v.partNumber === pn)
    return [{
      id: variant ? `${product.slug}__${variant.partNumber}` : product.id,
      slug,
      name: match?.[1] ?? label,
      pn,
      image: product.images[0],
      price: variant?.promoPrice ?? variant?.priceFrom ?? product.priceFrom,
      availability: variant?.availability ?? product.availability,
      categoryId: product.categoryId,
      manufacturerId: product.manufacturerId,
      condition,
    }]
  }))
}

export default function RequiredAccessories({ items, productName }: { items: ReturnType<typeof getRequiredAccessories>; productName: string }) {
  if (!items.length) return null
  const subject = items.every(item => item.condition?.startsWith('lokalizowania'))
    ? 'z funkcji lokalizowania'
    : /^(?:Stacja\b|Zestaw stacji\b)/i.test(productName)
      ? 'ze stacji'
      : /^Ładowarka\b/i.test(productName)
        ? 'z ładowarki'
        : /^Kabura\b/i.test(productName)
          ? 'z kabury'
          : /^Uchwyt\b/i.test(productName) ? 'z uchwytu' : 'z tego produktu'
  const copy = getRequiredAccessoriesCopy(items.map(item => item.condition), subject)
  return (
    <section id="wymagane-elementy" aria-labelledby="wymagane-elementy-heading" className="my-5 overflow-hidden rounded-2xl border-2 border-amber-300 bg-white scroll-mt-24">
      <div className="flex items-start gap-3 bg-amber-50 px-4 py-4 sm:px-5">
        <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-200 text-lg font-bold text-amber-950">!</span>
        <div>
          <h2 id="wymagane-elementy-heading" className="text-base font-bold text-gray-950">{copy.heading}</h2>
          <p className="mt-1 text-sm leading-5 text-gray-700">{copy.description}</p>
        </div>
      </div>
      <RequiredAccessoryList items={items} showCommonRequirement={items.some(item => !!item.condition)} />
    </section>
  )
}
