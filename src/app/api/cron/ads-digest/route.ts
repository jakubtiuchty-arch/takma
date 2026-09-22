import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { prisma } from '@/lib/db'
import { sendEmail, adminRecipients } from '@/lib/email'
import { buildAdsDigestEmail } from '@/lib/email-templates'
import { adsConfigured } from '@/lib/googleAds'
import { podsumowanieAds, godzinaKonta, type PodsumowanieAds } from '@/lib/ads-daily'

/**
 * Wieczorne podsumowanie Google Ads — mail codziennie, niezależnie od tego,
 * czy coś się dzieje. To raport, nie alarm: alarmy chodzą osobno w /api/cron/alerts.
 *
 * Cron stoi o 18:00 UTC, czyli 20:00 czasu polskiego latem i 19:00 zimą.
 * Dzień handlowy jest wtedy zamknięty, a kampanie dochodzą ostatnie godziny —
 * dlatego koszt dnia bieżącego opisujemy jako stan na godzinę, nie jako wynik.
 */
export const maxDuration = 120

const zl = (v: number) => `${v.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} zł`
const zl0 = (v: number) => `${Math.round(v).toLocaleString('pl-PL')} zł`

function skrocNazwe(n: string): string {
  return n.replace(/\s*\[API\]\s*$/, '').replace(/\s*-\s*(MB|DK)\s*-\s*Verseo\s*$/i, '').trim()
}

/** „22.09” z „2026-09-22”. */
const dzienMiesiac = (d: string) => `${d.slice(8, 10)}.${d.slice(5, 7)}`

/**
 * Komentarz od modelu. Dostaje te same liczby co mail, plus jawnie napisane,
 * czego NIE wolno mu wnioskować — bez tego dopisywał tezy o konwersjach
 * z dnia bieżącego, który jeszcze się nie domknął.
 */
async function komentarz(p: PodsumowanieAds): Promise<string> {
  if (!process.env.ANTHROPIC_API_KEY) throw new Error('brak ANTHROPIC_API_KEY')

  const kampanie = p.kampanie
    .filter((k) => k.koszt > 0)
    .map((k) => {
      const zb = k.zmianaBudzetu
      const budzet = zb
        ? `budżet ${zl(k.budzetDzienny)}/dzień od ${dzienMiesiac(zb.data)}, wcześniej ${zl(zb.z)} (${zb.dniStarych} z 7 dni okna na starej kwocie)`
        : `budżet ${zl(k.budzetDzienny)}/dzień`
      return `  - ${skrocNazwe(k.nazwa)}${k.status === 'PAUSED' ? ' [wstrzymana]' : ''}: ${zl(k.koszt)} (poprzedni tydzień ${zl(k.kosztPoprzednio)}), ${k.klikniecia} kliknięć, ${k.konwersje.toFixed(1)} konwersji (poprzednio ${k.konwersjePoprzednio.toFixed(1)}), ${budzet}, traci przez budżet ${((k.utraconeBudzet ?? 0) * 100).toFixed(0)}%`
    })
    .join('\n')

  const prompt = `Jesteś analitykiem Google Ads sklepu B2B TAKMA (sprzęt Zebra, Honeywell, Datalogic: drukarki etykiet, drukarki kart, skanery, terminale, materiały eksploatacyjne). Konto jest wspólne ze stroną serwisową serwis-zebry.pl, dlatego w rozbiciu konwersji widać także akcje tamtej strony.

Dane na ${p.dzien}, godzina ${godzinaKonta()}.

## Koszt
- dziś do tej godziny: ${zl(p.dzis.koszt)}, ${p.dzis.klikniecia} kliknięć (dzień NIEDOMKNIĘTY)
- wczoraj: ${zl(p.wczoraj.koszt)}, ${p.wczoraj.klikniecia} kliknięć, ${p.wczoraj.konwersje.toFixed(1)} konwersji
- ten sam dzień tygodnia tydzień wcześniej: ${zl(p.wczorajTydzienTemu.koszt)}, ${p.wczorajTydzienTemu.konwersje.toFixed(1)} konwersji
- 7 dni zakończonych wczoraj: ${zl(p.okno7.koszt)}, ${p.okno7.klikniecia} kliknięć, ${p.okno7.konwersje.toFixed(1)} konwersji, wartość konwersji ${zl(p.okno7.wartosc)}
- poprzednie 7 dni: ${zl(p.poprzednie7.koszt)}, ${p.poprzednie7.klikniecia} kliknięć, ${p.poprzednie7.konwersje.toFixed(1)} konwersji
- suma budżetów dziennych kampanii aktywnych: ${zl(p.budzetDzienny)}

## Kampanie (7 dni zakończonych wczoraj)
${kampanie || '  - brak kosztu w oknie'}

## Akcje konwersji (7 dni, wszystkie akcje włącznie z pomocniczymi)
${p.akcje.map((a) => `  - ${a.nazwa}: ${a.konwersje.toFixed(1)} po ${zl(a.wartosc)}`).join('\n') || '  - brak'}

## Hasła z kosztem i zerem konwersji (7 dni, 20 najdroższych)
${p.frazyBezKonwersji.map((f) => `  - „${f.fraza}” (${skrocNazwe(f.kampania)}): ${zl(f.koszt)}, ${f.klikniecia} kliknięć`).join('\n') || '  - brak'}

## Twarde wyniki z bazy sklepu (przypisane po identyfikatorze kliknięcia gclid)
- 7 dni: ${p.sklep7.zamowienia} opłaconych zamówień z gclid (na ${p.sklep7.zamowieniaOgolem} opłaconych w ogóle), przychód netto ${zl(p.sklep7.przychodNetto)}, marża netto ${zl(p.sklep7.marzaNetto)}, ${p.sklep7.leady} leadów
- 30 dni: ${p.sklep30.zamowienia} opłaconych zamówień z gclid (na ${p.sklep30.zamowieniaOgolem} opłaconych w ogóle), przychód netto ${zl(p.sklep30.przychodNetto)}, marża netto ${zl(p.sklep30.marzaNetto)}, ${p.sklep30.leady} leadów
- koszt Ads za 30 dni: ${zl(p.dni.reduce((a, d) => a + d.koszt, 0))}
- UWAGA: gclid ma tylko część zamówień (klient, który zadzwonił albo wrócił później bez parametru, nie zostanie przypisany). Marża przypisana jest więc dolnym oszacowaniem, a nie wynikiem kampanii. Nie odejmuj jej od kosztu i nie orzekaj na tej podstawie, że kampanie są nierentowne.

## Reguły kontrolne zgłosiły
${p.uwagi.map((u) => `  - ${u}`).join('\n') || '  - nic'}

## Czego nie wolno robić
- Nie wyciągaj wniosków o skuteczności z dnia bieżącego ani z wczorajszego: konwersje domykają się przez 24-48 godzin. Do ocen używaj okna 7 dni.
- Nie powtarzaj reguł kontrolnych słowo w słowo — one już są w mailu wyżej.
- Nie proponuj działań, których nie da się wykonać w Google Ads albo na stronie sklepu.
- Jeśli budżet kampanii zmieniono w oknie 7 dni, jej koszt, konwersje i utrata wyświetleń przez budżet opisują w części starą kwotę. Nie proponuj ponownie zmiany, która już zaszła, i nie oceniaj nowej kwoty, dopóki większość okna przypada na starą.
- Nie pisz ogólników („warto monitorować", „kluczowe znaczenie"). Każde zdanie ma mieć liczbę albo nazwę.

## Zadanie
Napisz 120-180 słów zwykłego tekstu (bez nagłówków, bez list) o tym, co dziś w koncie jest najważniejsze i co z tym zrobić jutro. Zacznij od najmocniejszego wniosku. Jeśli widzisz, że pieniądze stoją w złym miejscu — powiedz wprost, z której kampanii do której je przenieść i ile. Rejestr rzeczowy, bez potoczności.`

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  const msg = await client.messages.create({
    model: 'claude-sonnet-5',
    // Limit musi pomieścić rozumowanie modelu i dopiero po nim odpowiedź.
    // Przy 700 całość szła na blok `thinking`, zapytanie kończyło się na
    // stop_reason `max_tokens` i wracała pusta treść bez żadnego błędu.
    max_tokens: 4000,
    messages: [{ role: 'user', content: prompt }],
  })
  const tekst = msg.content
    .filter((b) => b.type === 'text')
    .map((b) => (b as { text: string }).text)
    .join('\n')
    .trim()
  if (!tekst) {
    throw new Error(`model nie zwrócił tekstu (stop_reason: ${msg.stop_reason}, bloki: ${msg.content.map((b) => b.type).join(',')})`)
  }
  return tekst
}

export async function GET(request: NextRequest) {
  if (request.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  if (!adsConfigured()) {
    return NextResponse.json({ ok: false, error: 'Google Ads nie jest skonfigurowany' }, { status: 500 })
  }

  const p = await podsumowanieAds()
  const godzina = godzinaKonta()
  const koszt30 = p.dni.reduce((a, d) => a + d.koszt, 0)

  // Komentarz jest dodatkiem: gdy model nie odpowie, mail i tak ma wyjść z liczbami.
  // Powód zapisujemy w odpowiedzi, bo cron widać tylko przez nią.
  let tekst = ''
  let bladAI: string | null = null
  try {
    tekst = await komentarz(p)
  } catch (e) {
    bladAI = e instanceof Error ? e.message.slice(0, 200) : String(e).slice(0, 200)
    console.error('[Ads Digest] komentarz AI nie powstał:', bladAI)
  }

  await prisma.adsDigest.upsert({
    where: { date: p.dzien },
    create: { date: p.dzien, summary: tekst, metrics: JSON.stringify(p) },
    update: { summary: tekst, metrics: JSON.stringify(p) },
  })

  const html = buildAdsDigestEmail({
    dzien: p.dzien,
    godzina,
    kafle: [
      { label: `Dziś do ${godzina}`, value: zl0(p.dzis.koszt), sub: `średnia dzienna ${zl0(p.okno7.koszt / 7)}` },
      { label: 'Koszt 7 dni', value: zl0(p.okno7.koszt), sub: `poprzednio ${zl0(p.poprzednie7.koszt)}` },
      {
        label: 'Zamówienia z Ads (30 dni)',
        value: String(p.sklep30.zamowienia),
        sub: p.sklep30.zamowienia ? `${zl0(koszt30 / p.sklep30.zamowienia)} za zamówienie` : 'brak w oknie',
      },
    ],
    uwagi: p.uwagi,
    kampanie: p.kampanie
      .filter((k) => k.koszt > 0)
      .slice(0, 10)
      .map((k) => ({
        nazwa: skrocNazwe(k.nazwa),
        koszt: zl0(k.koszt),
        konwersje: k.konwersje.toFixed(1).replace('.', ','),
        kosztKonw: k.konwersje > 0 ? zl0(k.koszt / k.konwersje) : '—',
        budzet: k.zmianaBudzetu
          ? `${zl0(k.zmianaBudzetu.z)} → ${zl0(k.budzetDzienny)}/dz.`
          : `${zl0(k.budzetDzienny)}/dz.`,
      })),
    frazy: p.frazyBezKonwersji.slice(0, 8).map((f) => ({
      fraza: f.fraza,
      koszt: zl0(f.koszt),
      klikniecia: String(f.klikniecia),
    })),
    sklep: [
      {
        label: 'Zamówienia przypisane do Ads',
        value: `${p.sklep30.zamowienia} z ${p.sklep30.zamowieniaOgolem} opłaconych`,
      },
      { label: 'Leady z formularzy', value: String(p.sklep30.leady) },
      { label: 'Przychód netto z tych zamówień', value: zl(p.sklep30.przychodNetto) },
      { label: 'Marża netto z tych zamówień', value: zl(p.sklep30.marzaNetto) },
      { label: 'Koszt Google Ads', value: zl(koszt30), bold: true },
    ],
    komentarz: tekst || undefined,
  })

  const wyslano = await sendEmail({
    to: adminRecipients(),
    subject: `Google Ads ${p.dzien}: ${zl0(p.dzis.koszt)} dzisiaj${p.uwagi.length ? `, ${p.uwagi.length} do sprawdzenia` : ''}`,
    html,
  })

  return NextResponse.json({
    ok: wyslano.success,
    dzien: p.dzien,
    kosztDzis: p.dzis.koszt,
    koszt7: p.okno7.koszt,
    uwagi: p.uwagi.length,
    komentarz: tekst.length,
    bladAI,
    mail: wyslano.success ? 'wysłany' : wyslano.error,
  })
}
