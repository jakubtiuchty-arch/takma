import { Metadata } from 'next'
import { categories, manufacturers } from '@/data/products'
import CatalogClient from './CatalogClient'

interface CatalogPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ searchParams }: CatalogPageProps): Promise<Metadata> {
  const params = await searchParams
  const categorySlug = params.kategoria as string | undefined
  const manufacturerSlug = params.producent as string | undefined
  const searchQuery = params.szukaj as string | undefined

  const category = categorySlug ? categories.find(c => c.slug === categorySlug) : null
  const manufacturer = manufacturerSlug ? manufacturers.find(m => m.slug === manufacturerSlug) : null

  if (category) {
    return {
      title: category.seoTitle,
      description: category.seoDescription,
      openGraph: {
        title: category.seoTitle,
        description: category.seoDescription,
      },
    }
  }

  if (manufacturer) {
    const title = manufacturer.seoTitle || 'Produkty ' + manufacturer.name
    const description = manufacturer.seoDescription || 'Oferta produktów ' + manufacturer.name + ' w TAKMA. Autoryzowany partner, serwis, doradztwo.'
    return {
      title: title,
      description: description,
      openGraph: {
        title: title + ' | TAKMA',
        description: description,
      },
    }
  }

  if (searchQuery) {
    return {
      title: 'Wyniki wyszukiwania: ' + searchQuery,
      description: 'Wyniki wyszukiwania "' + searchQuery + '" w katalogu TAKMA. Drukarki etykiet, skanery kodów, terminale mobilne, RFID.',
    }
  }

  return {
    title: 'Katalog produktów AutoID',
    description: 'Katalog urządzeń AutoID: drukarki etykiet, skanery kodów kreskowych, terminale mobilne, systemy RFID. Zebra, Honeywell, Datalogic, TSC. Profesjonalne doradztwo i serwis.',
    openGraph: {
      title: 'Katalog produktów AutoID | TAKMA',
      description: 'Pełna oferta urządzeń do automatycznej identyfikacji od wiodących producentów.',
    },
  }
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const params = await searchParams
  return <CatalogClient initialParams={params} />
}
