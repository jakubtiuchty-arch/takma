import { Metadata } from 'next'
import Link from 'next/link'
import {
  products,
  categories,
  subcategories,
  getManufacturerById,
} from '@/data/products'
import { guides } from '@/data/guides'
import { industryPages } from '@/data/industry-content'

export const metadata: Metadata = {
  title: 'Mapa strony — TAKMA',
  description:
    'Pełna mapa strony takma.com.pl — drukarki etykiet, terminale mobilne, skanery kodów, materiały eksploatacyjne i akcesoria.',
  alternates: { canonical: 'https://takma.com.pl/mapa-strony' },
}

function SitemapSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold text-gray-900 mb-3 pb-2 border-b border-gray-200">
        {title}
      </h2>
      {children}
    </section>
  )
}

function SitemapLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-primary-600 hover:text-primary-800 hover:underline transition-colors"
      >
        {label}
      </Link>
    </li>
  )
}

export default function MapaStrony() {
  // Grupowanie produktów po kategoriach
  const productsByCategory = new Map<string, typeof products>()
  for (const p of products) {
    const key = p.categoryId
    if (!productsByCategory.has(key)) productsByCategory.set(key, [])
    productsByCategory.get(key)!.push(p)
  }

  return (
    <div className="container-main py-8 lg:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Mapa strony
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Pełna lista stron i produktów dostępnych w serwisie takma.com.pl
      </p>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
        {/* ── Strony główne ── */}
        <SitemapSection title="Strony główne">
          <ul className="space-y-1.5">
            <SitemapLink href="/" label="Strona główna" />
            <SitemapLink href="/katalog" label="Katalog produktów" />
            <SitemapLink href="/o-nas" label="O nas" />
            <SitemapLink href="/kontakt" label="Kontakt" />
            <SitemapLink href="/serwis" label="Serwis" />
            <SitemapLink href="/zapytanie" label="Zapytanie ofertowe" />
          </ul>
        </SitemapSection>

        {/* ── Poradniki ── */}
        <SitemapSection title="Poradniki">
          <ul className="space-y-1.5">
            <SitemapLink href="/poradnik" label="Wszystkie poradniki" />
            {guides.map((g) => (
              <SitemapLink
                key={g.slug}
                href={`/poradnik/${g.slug}`}
                label={g.title}
              />
            ))}
          </ul>
        </SitemapSection>

        {/* ── Strony branżowe ── */}
        <SitemapSection title="Rozwiązania branżowe">
          <ul className="space-y-1.5">
            {industryPages.map((p) => (
              <SitemapLink key={p.slug} href={`/${p.slug}`} label={p.name} />
            ))}
          </ul>
        </SitemapSection>

        {/* ── Kategorie i podkategorie ── */}
        <SitemapSection title="Kategorie">
          <ul className="space-y-3">
            {categories.map((cat) => {
              const subs = subcategories.filter(
                (s) => s.parentCategoryId === cat.id
              )
              return (
                <li key={cat.id}>
                  <Link
                    href={`/${cat.slug}`}
                    className="text-sm font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    {cat.name}
                  </Link>
                  {subs.length > 0 && (
                    <ul className="mt-1 ml-4 space-y-1">
                      {subs.map((sub) => (
                        <SitemapLink
                          key={sub.id}
                          href={`/${sub.slug}`}
                          label={sub.name}
                        />
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </SitemapSection>
      </div>

      {/* ── Produkty — pełna lista po kategoriach ── */}
      <h2 className="text-xl font-bold text-gray-900 mb-6 mt-4 pb-2 border-b border-gray-200">
        Wszystkie produkty ({products.length})
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
        {categories.map((cat) => {
          const catProducts = productsByCategory.get(cat.id)
          if (!catProducts || catProducts.length === 0) return null
          return (
            <div key={cat.id}>
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">
                {cat.name}{' '}
                <span className="text-gray-400 font-normal">
                  ({catProducts.length})
                </span>
              </h3>
              <ul className="space-y-1">
                {catProducts.map((p) => {
                  const mfr = getManufacturerById(p.manufacturerId)
                  return (
                    <SitemapLink
                      key={p.id}
                      href={`/produkt/${p.slug}`}
                      label={mfr ? `${mfr.name} ${p.name.replace(mfr.name, '').trim()}` : p.name}
                    />
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>

      {/* ── Informacje ── */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <SitemapSection title="Informacje">
          <ul className="space-y-1.5">
            <SitemapLink href="/polityka-prywatnosci" label="Polityka prywatności" />
            <SitemapLink href="/regulamin" label="Regulamin" />
          </ul>
        </SitemapSection>
      </div>
    </div>
  )
}
