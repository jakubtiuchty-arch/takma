import type { Product } from '@/data/products'

export const accessoryModelIds = [
  'zebra-et65', 'zebra-et65w', 'zebra-tc201', 'zebra-tc22', 'zebra-tc27',
  'zebra-mc3400', 'zebra-mc3450', 'zebra-mc9400', 'zebra-mc9450',
  'zebra-tc53', 'zebra-tc58', 'zebra-tc53e', 'zebra-tc58e',
  'zebra-tc73', 'zebra-tc78', 'zebra-tc501', 'zebra-tc701',
]

type LinkedProduct = Pick<Product, 'id' | 'slug' | 'name'>
type LinkedAccessory = LinkedProduct & { image?: string; partNumber?: string; condition?: string }
export interface AccessoryNavigation {
  models: LinkedProduct[]
  configurations: LinkedAccessory[]
}

/** Only existing explicit requirements create accessory-to-accessory links. */
function requirements(description: string) {
  return Array.from(description.matchAll(/\*\*Wymagane(?: dla ([^*\n]+))? — sprzedawane osobno\*\*\n\n([\s\S]*?)\n\n/g))
    .flatMap(([, condition, text]) => Array.from(text.matchAll(/^\s*- .*?\]\(\/produkt\/([^)]+)\)/gm))
      .map(([, slug]) => ({ slug, condition })))
}

function existingLinks(product: Product, byId: Map<string, Product>) {
  const text = [product.description, product.shortDescription, ...(product.faq ?? []).map(f => f.answer), ...product.applications].join('\n')
  return new Set([
    product.slug,
    ...Array.from(text.matchAll(/(?:\]\(|href=")\/produkt\/([^\s)"#?]+)/g)).map(([, slug]) => slug),
    ...[...(product.relatedAccessories ?? []), ...product.compatibleAccessories].flatMap(id => byId.get(id)?.slug ?? []),
  ])
}

/** Build once on the server. Lists are bounded and do not repeat links already on a card. */
export function buildAccessoryNavigation(catalog: Product[]): Map<string, AccessoryNavigation> {
  const byId = new Map(catalog.map(p => [p.id, p]))
  const bySlug = new Map(catalog.map(p => [p.slug, p]))
  const models = accessoryModelIds.flatMap(id => byId.get(id) ?? [])
  const modelsFor = (p: Product) => models.filter(m => m.relatedAccessories?.includes(p.id) || m.compatibleAccessories.includes(p.id))
    .sort((a, b) => {
      const texts = [p.name, p.specifications.filter(s => /zgodność|kompatybilność/i.test(s.name)).map(s => s.value).join(' '), p.shortDescription, p.description]
      const priority = (model: Product) => {
        const token = model.id.replace(/^zebra-/, '')
        const pattern = new RegExp(`(?:^|[^a-z0-9])${token}(?=$|[^a-z0-9])`, 'i')
        for (let i = 0; i < texts.length; i++) {
          const match = texts[i].match(pattern)
          if (match) return i * 100000 + (match.index ?? 0)
        }
        return Infinity
      }
      return priority(a) - priority(b)
    })
  const accessories = catalog.filter(p => p.categoryId === 'akcesoria' && modelsFor(p).length)
  const incoming = new Map<string, (Product & { condition?: string })[]>()
  for (const source of accessories) {
    for (const required of requirements(source.description)) {
      const target = bySlug.get(required.slug)
      if (!target || target.id === source.id || target.categoryId !== 'akcesoria') continue
      const candidates = incoming.get(target.id) ?? []
      // Preserve conditions. A BLE-only requirement does not become mandatory for charging.
      if (!candidates.some(p => p.id === source.id && p.condition === required.condition)) candidates.push({ ...source, condition: required.condition })
      incoming.set(target.id, candidates)
    }
  }

  const result = new Map<string, AccessoryNavigation>()
  for (const accessory of accessories) {
    const existing = existingLinks(accessory, byId)
    const candidates = (incoming.get(accessory.id) ?? []).filter(p => !existing.has(p.slug))
    // Prefer examples from different model families, not three versions of one station.
    const examples: typeof candidates = []
    const seenFamilies = new Set<string>()
    for (const candidate of candidates) {
      const family = modelsFor(candidate).map(m => m.id).sort().join('|')
      if (seenFamilies.has(family)) continue
      seenFamilies.add(family)
      examples.push(candidate)
    }
    for (const candidate of candidates) if (!examples.some(p => p.id === candidate.id)) examples.push(candidate)
    const simplify = ({ id, slug, name }: Product): LinkedProduct => ({ id, slug, name })
    result.set(accessory.id, {
      models: modelsFor(accessory).filter(p => !existing.has(p.slug)).slice(0, 4).map(simplify),
      configurations: examples.slice(0, 3).map(p => ({
        ...simplify(p),
        image: p.images[0],
        partNumber: p.specifications.find(s => s.name === 'Part Number')?.value,
        condition: p.condition,
      })),
    })
  }
  return result
}
