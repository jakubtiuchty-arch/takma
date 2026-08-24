import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { prisma } from '@/lib/db'
import { KATEGORIE, stanOpis, usedProductId, UZYWANE_WIDOCZNE } from '@/lib/used-devices'
import { getSessionFromCookie } from '@/lib/auth'
import AddUsedToCart from './AddUsedToCart'

// Jak na liście: podgląd dla admina wymusza render dynamiczny do czasu premiery.
export const dynamic = 'force-dynamic'

const fmt = (grosze: number) => (grosze / 100).toLocaleString('pl-PL', { maximumFractionDigits: 0 })

async function pobierz(slug: string) {
  return prisma.usedDevice.findUnique({ where: { slug } })
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const s = await pobierz(params.slug)
  if (!s) return { title: 'Nie znaleziono — TAKMA' }

  const cena = `${fmt(s.priceNetto)} zł netto`
  return {
    title: `${s.name} — używany, ${cena} | TAKMA`,
    description:
      `${s.name} po serwisie i testach. ${stanOpis(s.conditionGrade).etykieta}, gwarancja ${s.warrantyMonths} mies., ` +
      `faktura VAT. Jedna sztuka, cena ${cena}.`,
    alternates: { canonical: `https://www.takma.com.pl/uzywane/${s.slug}` },
    robots: s.status === 'AVAILABLE' && UZYWANE_WIDOCZNE ? undefined : { index: false },
    openGraph: s.images[0] ? { images: [s.images[0]] } : undefined,
  }
}

export default async function UzywanaSztukaPage({ params }: { params: { slug: string } }) {
  if (!UZYWANE_WIDOCZNE && !(await getSessionFromCookie())) notFound()

  const s = await pobierz(params.slug)
  if (!s) notFound()

  const stan = stanOpis(s.conditionGrade)
  const dostepny = s.status === 'AVAILABLE'
  const specs = Array.isArray(s.specs) ? (s.specs as { nazwa: string; wartosc: string }[]) : []

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: s.name,
    brand: { '@type': 'Brand', name: s.brand },
    ...(s.partNumber ? { mpn: s.partNumber } : {}),
    ...(s.images.length > 0 ? { image: s.images } : {}),
    description: s.description ?? `${s.name} używany, ${stan.etykieta.toLowerCase()}.`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'PLN',
      price: (s.priceNetto / 100).toFixed(2),
      itemCondition: 'https://schema.org/UsedCondition',
      availability: dostepny ? 'https://schema.org/InStock' : 'https://schema.org/SoldOut',
      url: `https://www.takma.com.pl/uzywane/${s.slug}`,
      seller: { '@type': 'Organization', name: 'TAKMA' },
      ...(dostepny ? { inventoryLevel: { '@type': 'QuantitativeValue', value: 1 } } : {}),
    },
  }

  return (
    <div className="container-main py-8 lg:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/uzywane" className="hover:text-gray-700">Sprzęt używany</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900">{s.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Zdjęcia — pokazujemy tę konkretną sztukę, nie render katalogowy */}
        <div className="space-y-3">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 border border-gray-200">
            {s.images[0] ? (
              <Image src={s.images[0]} alt={s.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">Zdjęcia w przygotowaniu</div>
            )}
          </div>
          {s.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {s.images.slice(1).map(url => (
                <div key={url} className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-200">
                  <Image src={url} alt="" fill sizes="120px" className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">{s.name}</h1>
          <p className="text-gray-500 mb-6">
            {KATEGORIE[s.category as keyof typeof KATEGORIE] ?? s.category}
            {s.partNumber && <> · {s.partNumber}</>}
          </p>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-6">
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-3xl font-bold text-gray-900">{fmt(s.priceNetto)} zł</span>
              <span className="text-gray-500">netto</span>
              {s.newPriceNetto && s.newPriceNetto > s.priceNetto && (
                <span className="text-gray-400 line-through">{fmt(s.newPriceNetto)} zł nowy</span>
              )}
            </div>
            <p className="text-sm text-gray-500 mb-4">
              {fmt(Math.round(s.priceNetto * 1.23))} zł brutto · gwarancja {s.warrantyMonths} mies. · faktura VAT
            </p>

            {dostepny ? (
              <AddUsedToCart
                productId={usedProductId(s.slug)}
                name={s.name}
                slug={s.slug}
                image={s.images[0] ?? undefined}
                partNumber={s.partNumber ?? undefined}
                priceNetto={s.priceNetto / 100}
              />
            ) : (
              <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                <p className="font-semibold text-gray-900">Ten egzemplarz jest już sprzedany</p>
                <p className="text-sm text-gray-600 mt-1">
                  Sprzęt używany mamy po jednej sztuce.{' '}
                  <Link href="/kontakt" className="text-primary-600 underline">Napisz do nas</Link>
                  {' '}— odezwiemy się, gdy wpadnie podobny.
                </p>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 mb-6">
            <h2 className="font-semibold text-gray-900 mb-2">{stan.etykieta}</h2>
            <p className="text-gray-600 leading-relaxed">{s.conditionNote || stan.opis}</p>
            {s.accessories && (
              <p className="text-gray-600 leading-relaxed mt-3">
                <span className="font-medium text-gray-900">W zestawie:</span> {s.accessories}
              </p>
            )}
          </div>

          {s.description && (
            <div className="prose prose-gray max-w-none mb-6">
              {s.description.split('\n').filter(Boolean).map((akapit, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">{akapit}</p>
              ))}
            </div>
          )}

          {specs.length > 0 && (
            <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
              <h2 className="font-semibold text-gray-900 px-5 py-4 border-b border-gray-200">Dane techniczne</h2>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {specs.map(w => (
                    <tr key={w.nazwa}>
                      <td className="px-5 py-3 text-gray-500 w-1/3">{w.nazwa}</td>
                      <td className="px-5 py-3 text-gray-900">{w.wartosc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
