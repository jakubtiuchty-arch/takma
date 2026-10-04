import { prisma } from '@/lib/db'
import { sendEmail, adminRecipients } from '@/lib/email'
import { products } from '@/data/products'

/**
 * Stróż anomalii cen dystrybutorów — mail do właściciela, gdy przy synchronizacji
 * cena jest rażąco za niska.
 *
 * Powód (4.10.2026): Ingram podał przez API dla ok. 160 numerów Zebry ceny o 40–48%
 * niższe niż Jarltech — sklep przez kilka dni pokazywał ceny poniżej całego rynku
 * i nikt tego nie zauważył.
 *
 * Trzy rodzaje alarmu:
 *  - `dystrybutor-nisko` — cena jednego dystrybutora < 75% mediany pozostałych,
 *  - `ponizej-katalogu` — cena sprzedaży < 70% ceny katalogowej (priceFrom),
 *  - `spadek` — cena sprzedaży < 75% ceny z poprzedniej synchronizacji.
 * Etykiety i taśmy pomijamy w dwóch pierwszych: rozjazdy pakiet/sztuka są u nich
 * normalne i obsługuje je lib/price-selection. Spadek sprawdzamy dla wszystkich.
 *
 * Każdy alarm zgłaszamy mailem raz (tabela PriceAnomaly, `notifiedAt`). Gdy anomalia
 * zniknie przy kolejnej synchronizacji, rekord jest usuwany — powrót wywoła nowy mail.
 */

export type RodzajAnomalii = 'dystrybutor-nisko' | 'ponizej-katalogu' | 'spadek'

export interface Anomalia {
  partNumber: string
  kind: RodzajAnomalii
  /** 'ingram' | 'bluestar' | 'jarltech' albo 'sklep' dla ceny sprzedaży */
  source: string
  /** cena, która wzbudziła alarm (PLN netto) */
  price: number
  /** punkt odniesienia (PLN netto) */
  reference: number
  details: string
}

const PROG_DYSTRYBUTOR = 0.75
const PROG_KATALOG = 0.7
const PROG_SPADEK = 0.75

const zl = (v: number) => `${v.toFixed(2).replace('.', ',')} zł`
const proc = (a: number, b: number) => `${Math.round((a / b) * 100)}%`
const mediana = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b)
  const m = Math.floor(s.length / 2)
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2
}

export function wykryjAnomalie(dane: {
  partNumber: string
  /** ceny zakupu w PLN po przeliczeniu waluty i korekcie pakietowej */
  ceny: { ingram?: number; bluestar?: number; jarltech?: number }
  /** cena sprzedaży netto po tej synchronizacji */
  cenaSprzedazy?: number
  /** cena sprzedaży netto sprzed tej synchronizacji */
  poprzedniaCena?: number | null
  katalog?: number
  /** etykiety i taśmy */
  nosnik: boolean
}): Anomalia[] {
  const { partNumber, cenaSprzedazy, poprzedniaCena, katalog, nosnik } = dane
  const wynik: Anomalia[] = []
  const zrodla = (Object.entries(dane.ceny) as [string, number | undefined][])
    .filter((e): e is [string, number] => e[1] != null && e[1] > 0)

  if (!nosnik && zrodla.length >= 2) {
    for (const [zrodlo, cena] of zrodla) {
      const pozostale = zrodla.filter(([z]) => z !== zrodlo).map(([, c]) => c)
      const odniesienie = mediana(pozostale)
      if (cena < PROG_DYSTRYBUTOR * odniesienie) {
        wynik.push({
          partNumber,
          kind: 'dystrybutor-nisko',
          source: zrodlo,
          price: cena,
          reference: odniesienie,
          details: `${zrodlo}: ${zl(cena)} = ${proc(cena, odniesienie)} ceny pozostałych dystrybutorów (${zrodla.filter(([z]) => z !== zrodlo).map(([z, c]) => `${z} ${zl(c)}`).join(', ')})`,
        })
        break // jeden alarm tego rodzaju na numer wystarczy
      }
    }
  }

  if (!nosnik && katalog && katalog > 0 && cenaSprzedazy && cenaSprzedazy < PROG_KATALOG * katalog) {
    wynik.push({
      partNumber,
      kind: 'ponizej-katalogu',
      source: 'sklep',
      price: cenaSprzedazy,
      reference: katalog,
      details: `cena sprzedaży ${zl(cenaSprzedazy)} netto = ${proc(cenaSprzedazy, katalog)} ceny katalogowej (${zl(katalog)})`,
    })
  }

  if (poprzedniaCena && poprzedniaCena > 0 && cenaSprzedazy && cenaSprzedazy < PROG_SPADEK * poprzedniaCena) {
    wynik.push({
      partNumber,
      kind: 'spadek',
      source: 'sklep',
      price: cenaSprzedazy,
      reference: poprzedniaCena,
      details: `cena sprzedaży spadła z ${zl(poprzedniaCena)} do ${zl(cenaSprzedazy)} netto (${proc(cenaSprzedazy, poprzedniaCena)} poprzedniej)`,
    })
  }

  return wynik
}

const ETYKIETA: Record<RodzajAnomalii, string> = {
  'dystrybutor-nisko': 'Dystrybutor dużo taniej od pozostałych',
  'ponizej-katalogu': 'Cena sprzedaży dużo poniżej katalogu',
  spadek: 'Nagły spadek ceny sprzedaży',
}

function linkProduktu(pn: string): string | null {
  const p = products.find(
    (x) => x.variants?.some((v) => v.partNumber === pn) || x.specifications.some((s) => s.name === 'Part Number' && s.value === pn),
  )
  return p ? `https://www.takma.com.pl/produkt/${p.slug}?pn=${encodeURIComponent(pn)}` : null
}

/**
 * Zapisuje anomalie z przebiegu, usuwa te, które ustąpiły, i wysyła jeden mail o nowych.
 * `przetworzone` = numery, które ten przebieg faktycznie zsynchronizował z ceną.
 */
export async function zapiszIZglosAnomalie(anomalie: Anomalia[], przetworzone: string[]) {
  const teraz = new Date()
  for (const a of anomalie) {
    await prisma.priceAnomaly.upsert({
      where: { partNumber_kind: { partNumber: a.partNumber, kind: a.kind } },
      create: { ...a, firstSeenAt: teraz, lastSeenAt: teraz },
      update: { source: a.source, price: a.price, reference: a.reference, details: a.details, lastSeenAt: teraz },
    })
  }

  // Ustąpiły: numer zsynchronizowany w tym przebiegu, a danego rodzaju anomalii już nie ma
  const aktualne = new Set(anomalie.map((a) => `${a.partNumber}|${a.kind}`))
  const zapisane = await prisma.priceAnomaly.findMany({
    where: { partNumber: { in: przetworzone } },
    select: { partNumber: true, kind: true },
  })
  const ustapily = zapisane.filter((z) => !aktualne.has(`${z.partNumber}|${z.kind}`))
  for (const z of ustapily) {
    await prisma.priceAnomaly.delete({ where: { partNumber_kind: { partNumber: z.partNumber, kind: z.kind } } })
  }

  const nowe = await prisma.priceAnomaly.findMany({ where: { notifiedAt: null }, orderBy: { partNumber: 'asc' } })
  if (nowe.length === 0) return { zapisane: anomalie.length, ustapily: ustapily.length, wyslano: 0 }

  const posortowane = [...nowe].sort((a, b) => a.price / a.reference - b.price / b.reference)
  const wiersze = posortowane.slice(0, 150).map((a) => {
    const link = linkProduktu(a.partNumber)
    const pn = link ? `<a href="${link}">${a.partNumber}</a>` : a.partNumber
    return `<tr><td style="padding:4px 8px;font-family:monospace">${pn}</td><td style="padding:4px 8px">${ETYKIETA[a.kind as RodzajAnomalii] ?? a.kind}</td><td style="padding:4px 8px;text-align:right">${proc(a.price, a.reference)}</td><td style="padding:4px 8px">${a.details}</td></tr>`
  })
  const naRodzaj = Object.entries(
    nowe.reduce<Record<string, number>>((acc, a) => ({ ...acc, [a.kind]: (acc[a.kind] ?? 0) + 1 }), {}),
  ).map(([k, n]) => `<li>${ETYKIETA[k as RodzajAnomalii] ?? k}: ${n}</li>`)

  const html = `
    <p>Stróż cen wykrył przy synchronizacji ${nowe.length} nowych podejrzanie niskich cen.</p>
    <ul>${naRodzaj.join('')}</ul>
    <p>Sklep stosuje regułę: gdy Ingram ma mniej niż 75% ceny Jarltecha, cena sprzedaży liczona jest z Jarltecha. Pozostałe przypadki należy sprawdzić ręcznie.</p>
    <table style="border-collapse:collapse;font-size:13px" border="1">
      <tr><th style="padding:4px 8px">Numer</th><th style="padding:4px 8px">Rodzaj</th><th style="padding:4px 8px">% odniesienia</th><th style="padding:4px 8px">Szczegóły</th></tr>
      ${wiersze.join('\n')}
    </table>
    ${nowe.length > 150 ? `<p>Pokazano 150 z ${nowe.length} (najniższe najpierw).</p>` : ''}
    <p style="color:#666;font-size:12px">Każdy przypadek zgłaszany jest raz. Gdy cena wróci do normy i znowu spadnie, przyjdzie nowy mail.</p>`

  const wynik = await sendEmail({
    to: adminRecipients(),
    subject: `Stróż cen: ${nowe.length} podejrzanie niskich cen u dystrybutorów`,
    html,
  })
  if (wynik.success) {
    await prisma.priceAnomaly.updateMany({ where: { notifiedAt: null }, data: { notifiedAt: teraz } })
  } else {
    console.error('[stróż cen] mail nie wyszedł:', wynik.error)
  }
  return { zapisane: anomalie.length, ustapily: ustapily.length, wyslano: wynik.success ? nowe.length : 0 }
}
