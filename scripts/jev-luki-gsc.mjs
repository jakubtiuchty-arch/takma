#!/usr/bin/env node
/**
 * Pilot Jev (TypeSafe): luki treściowe z zapytań Google Search Console.
 *
 * Wejście:  plik JSON z zapytaniami z GSC (keyword, clicks, impressions, position, top_url)
 *           + inwentarz naszych stron (url, typ, tytul).
 * Pytania do każdego zapytania (oceniane paczkami po kilkanaście w jednym wywołaniu):
 *   intencja  — czego szuka użytkownik (kupno / poradnik / serwis / nawigacja / poza ofertą)
 *   rodzina   — której rodziny produktów dotyczy
 *   trafiona  — czy strona, którą Google nam pokazuje, odpowiada na to zapytanie wprost
 *   wartosc   — ile warte dla nas handlowo (0–3)
 * Wyjście:  CSV z ocenami i lista luk: dużo wyświetleń, intencja zakupowa lub poradnikowa,
 *           a strona nietrafiona — czyli Google już nas pokazuje, a my nie mamy na to strony.
 *
 * Użycie:
 *   node --env-file=.env.local scripts/jev-luki-gsc.mjs <gsc.json> <strony.json> [--limit=200] [--paczka=20] [--proba]
 * Wymaga TYPESAFE_API_KEY w env (klucz z https://console.typesafe.ai/keys).
 * `--proba` wypisuje stan i liczbę pytań pierwszej paczki bez wywołania API (klucz niepotrzebny).
 */
import fs from 'node:fs'
import path from 'node:path'

const PROBA = process.argv.includes('--proba')
const KLUCZ = process.env.TYPESAFE_API_KEY
if (!KLUCZ && !PROBA) { console.error('Brak TYPESAFE_API_KEY w env.'); process.exit(1) }

const [plikGsc, plikStron] = process.argv.slice(2).filter((a) => !a.startsWith('--'))
if (!plikGsc || !plikStron) { console.error('Użycie: jev-luki-gsc.mjs <gsc.json> <strony.json> [--limit=N] [--paczka=N]'); process.exit(1) }
const opcja = (n, d) => { const a = process.argv.find((x) => x.startsWith(`--${n}=`)); return a ? Number(a.split('=')[1]) : d }
const LIMIT = opcja('limit', 300)
const PACZKA = opcja('paczka', 20)

const zapytania = JSON.parse(fs.readFileSync(plikGsc, 'utf8'))
  .filter((k) => k.keyword && (k.impressions ?? 0) > 0)
  .sort((a, b) => (b.impressions ?? 0) - (a.impressions ?? 0))
  .slice(0, LIMIT)
// Inwentarz trzyma ścieżki względne, strona główna jako '' — GSC daje pełne adresy, więc porównujemy po pathname.
const strony = JSON.parse(fs.readFileSync(plikStron, 'utf8'))
const stronaPoSciezce = new Map(strony.map((s) => [s.url || '/', s]))
const sciezka = (u) => { try { return new URL(u).pathname } catch { return u || '' } }

/** Stały kontekst o sklepie — Jev nie wie, kim jesteśmy, więc mówimy mu to w każdym stanie. */
const KONTEKST = `Sklep B2B TAKMA (takma.com.pl), Wrocław. Sprzedajemy i serwisujemy sprzęt do automatycznej identyfikacji:
drukarki etykiet Zebra/TSC/Honeywell/Brother, drukarki kart plastikowych Zebra ZC100/ZC300/ZC350 i Magicard,
terminale mobilne, skanery kodów kreskowych, tablety przemysłowe, materiały eksploatacyjne (etykiety, taśmy
termotransferowe, taśmy YMCKO, karty PVC), akcesoria. Serwis drukarek Zebra pod marką serwis-zebry.pl.`

function zbudujStan(paczka) {
  const linie = paczka.map((k, i) => {
    const url = sciezka(k.top_url)
    const s = stronaPoSciezce.get(url)
    const opisStrony = s ? `[${s.typ}] ${s.tytul}` : '(strona spoza inwentarza)'
    return `#${i + 1} zapytanie: "${k.keyword}" | wyświetlenia 28 dni: ${k.impressions} | kliknięcia: ${k.clicks ?? 0} | pozycja: ${k.position?.toFixed(1) ?? '—'}
    strona, którą Google pokazuje: ${url || '(brak)'} — ${opisStrony}`
  })
  return `${KONTEKST}\n\nZapytania z Google Search Console i strona, którą Google pokazał dla każdego:\n\n${linie.join('\n')}`
}

function zbudujPytania(paczka) {
  const q = {}
  paczka.forEach((_, i) => {
    const n = i + 1
    q[`q${n}_intencja`] = {
      type: 'choice',
      instructions: `Czego szuka osoba wpisująca zapytanie #${n}?`,
      criteria: {
        kupno: 'chce kupić produkt lub porównać ceny (model, część, materiał eksploatacyjny)',
        poradnik: 'chce się dowiedzieć, jak coś zrobić, skonfigurować albo dlaczego coś nie działa',
        serwis: 'szuka naprawy, serwisu, gwarancji lub części zamiennej do naprawy',
        nawigacja: 'szuka konkretnej firmy, strony lub logowania',
        poza_oferta: 'temat nie ma związku z naszym sprzętem i usługami',
      },
    }
    q[`q${n}_rodzina`] = {
      type: 'choice',
      instructions: `Której rodziny produktów dotyczy zapytanie #${n}?`,
      criteria: {
        drukarki_etykiet: 'drukarki etykiet, kodów kreskowych, przemysłowe i biurkowe',
        drukarki_kart: 'drukarki kart plastikowych, identyfikatorów, legitymacji',
        terminale: 'terminale mobilne, kolektory danych, komputery mobilne',
        skanery: 'skanery i czytniki kodów kreskowych',
        tablety: 'tablety przemysłowe',
        materialy: 'etykiety, taśmy termotransferowe, taśmy do drukarek kart, karty PVC',
        akcesoria: 'baterie, stacje dokujące, kable, uchwyty, głowice, wałki',
        inne: 'nic z powyższych',
      },
    }
    q[`q${n}_trafiona`] = {
      type: 'noul',
      instructions: `Strona pokazana przy zapytaniu #${n} odpowiada na to zapytanie wprost — użytkownik znajdzie na niej to, czego szukał, bez dalszego klikania.`,
    }
    q[`q${n}_wartosc`] = {
      type: 'score',
      instructions: `Jak cenne handlowo dla sklepu B2B ze sprzętem AutoID jest zapytanie #${n}?`,
      criteria: [
        'bez wartości — temat obok naszej oferty',
        'niska — ogólna ciekawość, mały związek z zakupem',
        'średnia — problem lub potrzeba, która prowadzi do zakupu materiałów, części albo serwisu',
        'wysoka — wprost szuka produktu, modelu lub usługi, które sprzedajemy',
      ],
    }
  })
  return q
}

async function zapytajJev(state, questions) {
  const r = await fetch('https://api.typesafe.ai/v1/systemone', {
    method: 'POST',
    headers: { Authorization: `Bearer ${KLUCZ}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ state, model: 'jev-latest', questions }),
  })
  if (!r.ok) throw new Error(`Jev ${r.status}: ${(await r.text()).slice(0, 300)}`)
  return r.json()
}

if (PROBA) {
  const paczka = zapytania.slice(0, PACZKA)
  const stan = zbudujStan(paczka)
  console.log(stan)
  console.log(`\n— pytań w paczce: ${Object.keys(zbudujPytania(paczka)).length}, znaków stanu: ${stan.length}, zapytań: ${zapytania.length}, paczek: ${Math.ceil(zapytania.length / PACZKA)}`)
  process.exit(0)
}

const wyniki = []
let tokeny = 0
for (let i = 0; i < zapytania.length; i += PACZKA) {
  const paczka = zapytania.slice(i, i + PACZKA)
  process.stdout.write(`paczka ${i / PACZKA + 1}/${Math.ceil(zapytania.length / PACZKA)}… `)
  const odp = await zapytajJev(zbudujStan(paczka), zbudujPytania(paczka))
  tokeny += odp.usage?.input_tokens ?? 0
  paczka.forEach((k, j) => {
    const n = j + 1
    const a = odp.answers
    wyniki.push({
      zapytanie: k.keyword,
      wyswietlenia: k.impressions,
      klikniecia: k.clicks ?? 0,
      pozycja: k.position != null ? Number(k.position.toFixed(1)) : null,
      strona: sciezka(k.top_url),
      intencja: a[`q${n}_intencja`]?.choice,
      intencja_p: a[`q${n}_intencja`]?.probabilities?.[a[`q${n}_intencja`]?.choice],
      rodzina: a[`q${n}_rodzina`]?.choice,
      trafiona: a[`q${n}_trafiona`]?.noul,
      wartosc: a[`q${n}_wartosc`]?.score,
    })
  })
  console.log('ok')
}

const stamp = new Date().toISOString().slice(0, 10)
const katalog = path.dirname(plikGsc)
const csv = [
  'zapytanie;wyswietlenia;klikniecia;pozycja;strona;intencja;p_intencji;rodzina;trafiona;wartosc',
  ...wyniki.map((w) => [w.zapytanie, w.wyswietlenia, w.klikniecia, w.pozycja ?? '', w.strona, w.intencja, w.intencja_p?.toFixed(2) ?? '', w.rodzina, w.trafiona?.toFixed(2) ?? '', w.wartosc?.toFixed(2) ?? ''].join(';')),
].join('\n')
fs.writeFileSync(path.join(katalog, `jev-oceny-${stamp}.csv`), csv)

// Luka: Google już nas pokazuje (wyświetlenia), intencja warta strony, a pokazana strona nie odpowiada wprost.
const luki = wyniki
  .filter((w) => (w.trafiona ?? 1) < 0.4 && ['kupno', 'poradnik', 'serwis'].includes(w.intencja) && (w.wartosc ?? 0) >= 1.5)
  .sort((a, b) => b.wyswietlenia - a.wyswietlenia)
fs.writeFileSync(path.join(katalog, `jev-luki-${stamp}.json`), JSON.stringify(luki, null, 2))

console.log(`\nOcenionych zapytań: ${wyniki.length} | tokenów wejścia: ${tokeny}`)
console.log(`Luk treściowych: ${luki.length} (trafiona < 0,4, intencja kupno/poradnik/serwis, wartość ≥ 1,5)\n`)
console.log('Top 25 luk wg wyświetleń:')
for (const l of luki.slice(0, 25)) {
  console.log(`  ${String(l.wyswietlenia).padStart(6)}  ${l.intencja.padEnd(9)} ${l.rodzina.padEnd(17)} traf ${l.trafiona.toFixed(2)}  ${l.zapytanie}  ← ${l.strona}`)
}
console.log(`\nPliki: ${path.join(katalog, `jev-oceny-${stamp}.csv`)}, ${path.join(katalog, `jev-luki-${stamp}.json`)}`)
