import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getSessionFromCookie } from '@/lib/auth'

/**
 * Dane klienta z historii po numerze NIP — do autouzupełniania w generatorze ofert.
 *
 * Źródłem jest ostatnia wystawiona oferta (najświeższa wiedza o osobie kontaktowej
 * i telefonie), a gdy jej nie ma — kartoteka klienta ze sklepu. NIP-y porównujemy
 * po samych cyfrach, bo w bazie leżą i z myślnikami, i bez.
 */
export async function GET(request: NextRequest) {
  // Endpoint zwraca dane klientów, więc pilnuje sesji sam — middleware pomija /api.
  const session = await getSessionFromCookie()
  if (!session) {
    return NextResponse.json({ error: 'Brak autoryzacji' }, { status: 401 })
  }

  const nip = (request.nextUrl.searchParams.get('nip') ?? '').replace(/\D/g, '')
  if (nip.length !== 10) {
    return NextResponse.json({ error: 'NIP musi mieć 10 cyfr' }, { status: 400 })
  }

  const quotes = await prisma.$queryRaw<
    {
      quoteNumber: string
      clientCompany: string
      clientNip: string | null
      clientContact: string | null
      clientEmail: string | null
      clientPhone: string | null
      clientAddress: string | null
      createdAt: Date
    }[]
  >`
    SELECT "quoteNumber", "clientCompany", "clientNip", "clientContact",
           "clientEmail", "clientPhone", "clientAddress", "createdAt"
    FROM "Quote"
    WHERE regexp_replace(COALESCE("clientNip", ''), '\\D', '', 'g') = ${nip}
    ORDER BY "createdAt" DESC
    LIMIT 1
  `

  const last = quotes[0]
  if (last) {
    return NextResponse.json({
      found: true,
      source: 'quote',
      sourceLabel: `oferty ${last.quoteNumber} z ${last.createdAt.toLocaleDateString('pl-PL')}`,
      client: {
        company: last.clientCompany,
        nip: last.clientNip ?? nip,
        contact: last.clientContact ?? '',
        email: last.clientEmail ?? '',
        phone: last.clientPhone ?? '',
        address: last.clientAddress ?? '',
      },
    })
  }

  const customers = await prisma.$queryRaw<
    {
      company: string
      nip: string | null
      firstName: string
      lastName: string
      email: string
      phone: string | null
      address: string | null
      createdAt: Date
    }[]
  >`
    SELECT "company", "nip", "firstName", "lastName", "email", "phone", "address", "createdAt"
    FROM "Customer"
    WHERE regexp_replace(COALESCE("nip", ''), '\\D', '', 'g') = ${nip}
    ORDER BY "createdAt" DESC
    LIMIT 1
  `

  const customer = customers[0]
  if (customer) {
    return NextResponse.json({
      found: true,
      source: 'customer',
      sourceLabel: 'kartoteki klienta ze sklepu',
      client: {
        company: customer.company,
        nip: customer.nip ?? nip,
        contact: `${customer.firstName} ${customer.lastName}`.trim(),
        email: customer.email,
        phone: customer.phone ?? '',
        address: customer.address ?? '',
      },
    })
  }

  return NextResponse.json({ found: false })
}
