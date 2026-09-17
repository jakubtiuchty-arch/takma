import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Porównuje ceny wpisane na sztywno (priceFrom w katalogu, kwoty w opisach,
// poradnikach i treściach kategorii) z cenami z /api/stock. Nic nie zmienia —
// wypisuje listę miejsc do poprawienia. Uruchamiać raz w miesiącu:
//   node scripts/audyt-cen.mjs                      (produkcja)
//   node scripts/audyt-cen.mjs http://localhost:3005
//   node scripts/audyt-cen.mjs --tylko m3-,zebra-tc
//
// Skąd bierze prawdę: dla każdego produktu zbiera part numbery (warianty albo
// specyfikację „Part Number”), pyta API o cenę i stan, po czym za cenę
// wyjściową uznaje najtańszy wariant, który leży na magazynie. Tak samo liczy
// ją kafel produktu, więc raport pokazuje to, co widzi klient.

const args = process.argv.slice(2)
const filtrIdx = args.indexOf('--tylko')
const filtry = filtrIdx >= 0 ? (args[filtrIdx + 1] ?? '').split(',').filter(Boolean) : []
const origin = new URL(args.find(a => a.startsWith('http')) || 'https://www.takma.com.pl').origin

const PROG_PROC = 3      // poniżej tego odchylenia nie zawracamy sobie głowy
const PROG_ZL = 50
const CHUNK = 50

const root = resolve(process.cwd(), 'src/data')
const zrodla = {
  'products.ts': readFileSync(resolve(root, 'products.ts'), 'utf8'),
  'brand-category-content.ts': readFileSync(resolve(root, 'brand-category-content.ts'), 'utf8'),
  'guides.ts': readFileSync(resolve(root, 'guides.ts'), 'utf8'),
}
const katalog = zrodla['products.ts']

/** Wycina blok jednego produktu — od jego `slug:` do `slug:` następnego. */
function bloki() {
  const wynik = []
  const wzor = /\n    slug: '([a-z0-9-]+)',/g
  const trafienia = [...katalog.matchAll(wzor)]
  for (let i = 0; i < trafienia.length; i++) {
    const start = trafienia[i].index
    const koniec = i + 1 < trafienia.length ? trafienia[i + 1].index : katalog.length
    wynik.push({ slug: trafienia[i][1], tresc: katalog.slice(start, koniec) })
  }
  return wynik
}

const produkty = bloki()
  .filter(p => !filtry.length || filtry.some(f => p.slug.startsWith(f)))
  .map(p => {
    const priceFrom = p.tresc.match(/\n    priceFrom: ([\d.]+),/)?.[1]
    // Tylko tablica `variants` — `servicePlans` też ma partNumber, a plan
    // serwisowy potrafi być tańszy od terminala i zaniżyłby cenę wyjściową.
    const start = p.tresc.indexOf('\n    variants: [')
    const blokWariantow = start < 0 ? '' : p.tresc.slice(start, p.tresc.indexOf('\n    ],', start) + 1)
    const warianty = [...blokWariantow.matchAll(/partNumber: '([^']+)'/g)].map(m => m[1])
    const zeSpecow = p.tresc.match(/name: 'Part Number', value: '([^']+)'/)?.[1]
    const pny = warianty.length ? warianty : zeSpecow ? [zeSpecow] : []
    return { slug: p.slug, priceFrom: priceFrom ? Number(priceFrom) : null, pny }
  })
  .filter(p => p.priceFrom && p.pny.length)

const wszystkiePny = [...new Set(produkty.flatMap(p => p.pny))]
console.log(`${produkty.length} produktów, ${wszystkiePny.length} part numberów → ${origin}/api/stock`)

const stan = new Map()
for (let i = 0; i < wszystkiePny.length; i += CHUNK) {
  const paczka = wszystkiePny.slice(i, i + CHUNK)
  const res = await fetch(`${origin}/api/stock?pn=${paczka.map(encodeURIComponent).join(',')}`, {
    signal: AbortSignal.timeout(60000),
  })
  if (!res.ok) {
    console.error(`  API odpowiedziało ${res.status} dla paczki ${i / CHUNK + 1} — pomijam`)
    continue
  }
  const dane = await res.json()
  for (const item of dane.results ?? []) stan.set(item.partNumber, item)
  process.stdout.write(`\r  pobrano ${Math.min(i + CHUNK, wszystkiePny.length)}/${wszystkiePny.length}`)
}
console.log('')

const fmt = n => new Intl.NumberFormat('pl-PL', { maximumFractionDigits: 0 }).format(n)
/** Kwota tak, jak zapisujemy ją w treściach: „4 132”. */
const jakWTresci = n => fmt(Math.round(n)).replace(/ /g, ' ')

const rozbiezne = []
for (const p of produkty) {
  const znalezione = p.pny.map(pn => stan.get(pn)).filter(s => s?.found && s.price > 0)
  if (!znalezione.length) continue
  const naStanie = znalezione.filter(s => s.totalStock > 0)
  const zrodlo = naStanie.length ? naStanie : znalezione
  const zywa = Math.min(...zrodlo.map(s => s.price))
  const roznica = zywa - p.priceFrom
  const proc = (roznica / p.priceFrom) * 100
  if (Math.abs(proc) < PROG_PROC && Math.abs(roznica) < PROG_ZL) continue
  rozbiezne.push({ ...p, zywa, roznica, proc, naStanie: naStanie.length })
}

rozbiezne.sort((a, b) => Math.abs(b.proc) - Math.abs(a.proc))

if (!rozbiezne.length) {
  console.log('\nCeny w katalogu zgadzają się z dystrybucją.')
} else {
  console.log(`\n${rozbiezne.length} produktów z nieaktualnym priceFrom:\n`)
  for (const r of rozbiezne) {
    const znak = r.roznica > 0 ? '+' : ''
    const uwaga = r.naStanie ? '' : '  (żaden wariant nie ma stanu — cena katalogowa)'
    console.log(`  ${r.slug.padEnd(28)} ${fmt(r.priceFrom)} → ${fmt(r.zywa)} zł  (${znak}${r.proc.toFixed(1)}%)${uwaga}`)
  }

  // Ta sama kwota bywa przepisana do opisów, FAQ, tabel porównawczych
  // i poradników. Wyszukujemy ją tam, bo sam priceFrom to za mało.
  console.log('\nKwoty do poprawienia w treściach:\n')
  let razem = 0
  for (const r of rozbiezne) {
    const stara = jakWTresci(r.priceFrom)
    const nowa = jakWTresci(r.zywa)
    const wzor = new RegExp(stara.replace(/ /g, '[  ]') + '(?=\\s*zł)', 'g')
    const miejsca = Object.entries(zrodla)
      .map(([plik, tresc]) => [plik, (tresc.match(wzor) || []).length])
      .filter(([, ile]) => ile > 0)
    if (!miejsca.length) continue
    razem += miejsca.reduce((s, [, ile]) => s + ile, 0)
    const gdzie = miejsca.map(([plik, ile]) => `${plik} ×${ile}`).join(', ')
    console.log(`  ${stara} zł → ${nowa} zł   ${gdzie}   [${r.slug}]`)
  }
  console.log(`\nRazem ${razem} wystąpień. Uwaga: ta sama kwota może należeć do innego modelu — sprawdź kontekst przed podmianą.`)
}
