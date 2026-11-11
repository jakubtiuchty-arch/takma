import { NextRequest, NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'
import { GusError, lookupGus, normalizeNip } from '@/lib/gus-regon'

export const maxDuration = 45

export async function GET(request: NextRequest) {
  if (!await getSessionFromCookie()) {
    return NextResponse.json({ error: 'Brak autoryzacji' }, { status: 401 })
  }
  const nip = normalizeNip(request.nextUrl.searchParams.get('nip') || '')
  if (!nip) return NextResponse.json({ error: 'Nieprawidłowy NIP. Sprawdź wszystkie 10 cyfr.' }, { status: 400 })

  let gusProblem: 'not-configured' | 'unavailable' | null = null
  try {
    const company = await lookupGus(nip)
    if (company) return NextResponse.json(company)
  } catch (error) {
    gusProblem = error instanceof GusError ? error.code : 'unavailable'
    // Never log upstream responses, API keys or session identifiers.
    console.error('[NIP Lookup] GUS:', gusProblem)
  }

  // Preserve VAT lookups during GUS outages or until its key is configured.
  try {
    const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Warsaw' }).format(new Date())
    const res = await fetch(`https://wykazpodatnikowvat.mf.gov.pl/api/search/nip/${nip}?date=${today}`, {
      cache: 'no-store', signal: AbortSignal.timeout(7000),
    })
    if (!res.ok) throw new Error('MF unavailable')
    const data = await res.json()
    const subject = data.result?.subject
    if (subject?.name && subject.nip === nip) {
      return NextResponse.json({
        name: subject.name, nip, address: subject.workingAddress || subject.residenceAddress || '',
        regon: subject.regon, krs: subject.krs, statusVat: subject.statusVat, source: 'mf',
      })
    }
  } catch {
    return NextResponse.json({ error: 'Nie udało się pobrać danych z rejestrów. Spróbuj ponownie lub wpisz dane ręcznie.' }, { status: 503 })
  }

  if (gusProblem) {
    return NextResponse.json({
      error: gusProblem === 'not-configured'
        ? 'Brak klucza GUS w konfiguracji. Wykaz VAT nie zwrócił danych. Dane instytucji możesz wpisać ręcznie.'
        : 'GUS jest chwilowo niedostępny, a wykaz VAT nie zwrócił danych. Spróbuj ponownie lub wpisz dane ręcznie.',
    }, { status: 503 })
  }
  return NextResponse.json({ error: 'Nie znaleziono podmiotu dla tego NIP. Sprawdź numer lub wpisz dane ręcznie.' }, { status: 404 })
}
