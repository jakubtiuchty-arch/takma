import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const nip = request.nextUrl.searchParams.get('nip')

  if (!nip || !/^\d{10}$/.test(nip.replace(/-/g, ''))) {
    return NextResponse.json({ error: 'Nieprawidłowy NIP' }, { status: 400 })
  }

  const cleanNip = nip.replace(/-/g, '')
  const today = new Date().toISOString().split('T')[0]

  try {
    const res = await fetch(
      `https://wl-api.mf.gov.pl/api/search/nip/${cleanNip}?date=${today}`,
      { next: { revalidate: 86400 } } // cache 24h
    )

    if (!res.ok) {
      if (res.status === 400) {
        return NextResponse.json({ error: 'NIP nie znaleziony' }, { status: 404 })
      }
      throw new Error(`White List API returned ${res.status}`)
    }

    const data = await res.json()
    const subject = data.result?.subject

    if (!subject) {
      return NextResponse.json({ error: 'Brak danych dla tego NIP' }, { status: 404 })
    }

    return NextResponse.json({
      name: subject.name,
      nip: subject.nip,
      address: subject.workingAddress || subject.residenceAddress || '',
      regon: subject.regon,
      krs: subject.krs,
      statusVat: subject.statusVat,
    })
  } catch (error) {
    console.error('[NIP Lookup Error]', error)
    return NextResponse.json(
      { error: 'Błąd podczas pobierania danych z API Ministerstwa Finansów' },
      { status: 500 }
    )
  }
}
