// Reguły licencji oprogramowania (lib/licencje, lib/licencje-katalog): dostępność „kod e-mailem”,
// pozycje na zapytanie (quoteOnly) i dane licencjobiorcy w zamówieniu.
// Uruchomienie: node scripts/test-licencje.cjs
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const Module = require('node:module')
const ts = require('typescript')

require.extensions['.ts'] = (module, filename) => {
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
    fileName: filename,
  })
  module._compile(outputText, filename)
}
const originalResolve = Module._resolveFilename
Module._resolveFilename = function (request, ...rest) {
  if (request.startsWith('@/')) request = path.resolve(__dirname, '../src', request.slice(2))
  return originalResolve.call(this, request, ...rest)
}

const { products } = require('../src/data/products.ts')
const {
  LICENCJA_DOSTAWA, zastosujRegulyLicencji, jestNaStanie, czyNaZapytanie, czyLicencjaElektroniczna,
  dopiszLicencjobiorce, odczytajLicencjobiorce, poprawnyLicencjobiorca,
} = require('../src/lib/licencje.ts')

// Karty testowe dopisane do katalogu przed zbudowaniem zbiorów PN w lib/licencje-katalog
// (bez zmian w plikach danych): licencja z wariantem na zapytanie i cała karta na zapytanie.
const zwyklyPn = products.find(p => p.slug === 'zebra-zd421t').variants[0].partNumber
products.push(
  {
    id: 'test-licencja', slug: 'test-licencja', name: 'Test Licencja', shortDescription: '', description: '',
    categoryId: 'oprogramowanie', manufacturerId: 'zebra', images: [], tags: [], availability: 'unavailable',
    isNew: false, isBestseller: false, specifications: [], applications: [], compatibleAccessories: [], downloads: [],
    createdAt: '2026-10-25', licenseDelivery: 'email',
    variants: [
      { partNumber: 'TEST-LIC-1', name: 'Essentials', attributes: {}, availability: 'unavailable' },
      { partNumber: 'TEST-LIC-ENT', name: 'Enterprise', attributes: {}, availability: 'unavailable', quoteOnly: true },
    ],
  },
  {
    id: 'test-enterprise', slug: 'test-enterprise', name: 'Test Enterprise', shortDescription: '', description: '',
    categoryId: 'oprogramowanie', manufacturerId: 'zebra', images: [], tags: [], availability: 'unavailable',
    isNew: false, isBestseller: false, specifications: [], applications: [], compatibleAccessories: [], downloads: [],
    createdAt: '2026-10-25', licenseDelivery: 'email', quoteOnly: true,
    variants: [
      { partNumber: 'TEST-ENT-3', name: '3 drukarki', attributes: {}, availability: 'unavailable' },
      // PN sprzedawany normalnie na innej karcie nie traci ceny przez kartę na zapytanie
      { partNumber: zwyklyPn, name: 'wspólny PN', attributes: {}, availability: 'unavailable' },
    ],
  },
)
const { czyPnLicencji, czyPnNaZapytanie, nalozRegulyLicencji, przygotujUwagiZamowienia } = require('../src/lib/licencje-katalog.ts')

const wiersz = (pola) => ({
  partNumber: 'X', found: true, price: 1000, priceBrutto: 1230, stockPL: 0, stockDE: 0, inDelivery: 0, totalStock: 0,
  availability: 'unavailable', deliveryText: 'Niedostepny', lastSync: '2026-10-25T00:00:00Z', ...pola,
})

// 1. Licencja z Jarltecha (wirtualne 9999 szt.) — dostępna, bez liczby sztuk, cena bez zmian
{
  const r = zastosujRegulyLicencji(wiersz({ stockDE: 9999, inDelivery: 1, totalStock: 10000, availability: 'available', deliveryText: 'Dostepny — wysylka 2-3 dni (9999 szt.)' }), { licencja: true })
  assert.equal(r.availability, 'available')
  assert.equal(r.deliveryText, LICENCJA_DOSTAWA)
  assert.equal(r.deliveryText, 'Licencja elektroniczna — kod e-mailem')
  assert.deepEqual([r.stockPL, r.stockDE, r.inDelivery, r.totalStock], [0, 0, 0, 0])
  assert.equal(r.electronicLicense, true)
  assert.equal(r.price, 1000)
  assert.equal(r.priceBrutto, 1230)
  assert.equal(jestNaStanie(r), true)
}
// 2. Licencja z BlueStar (0 szt., „W dostawie” albo „Niedostępny”) z ceną — też dostępna
for (const pola of [{ inDelivery: 3, totalStock: 3, availability: 'on-order', deliveryText: 'W dostawie (3 szt.)' }, {}]) {
  const r = zastosujRegulyLicencji(wiersz(pola), { licencja: true })
  assert.equal(r.availability, 'available')
  assert.equal(r.electronicLicense, true)
}
// 3. Licencja bez ceny albo nieznaleziona — bez zmian (jak dziś)
for (const pola of [{ price: undefined, priceBrutto: undefined }, { price: 0 }, { found: false, price: undefined }]) {
  const przed = wiersz({ ...pola, stockDE: 5, totalStock: 5, availability: 'available', deliveryText: 'Dostepny — wysylka 2-3 dni (5 szt.)' })
  const r = zastosujRegulyLicencji({ ...przed }, { licencja: true })
  assert.deepEqual(r, przed)
}
// 4. Zwykły towar — bez zmian
{
  const przed = wiersz({ stockDE: 4, totalStock: 4, availability: 'available' })
  assert.deepEqual(zastosujRegulyLicencji({ ...przed }, {}), przed)
}
// 5. Na zapytanie — bez ceny i stanu, nawet gdy dystrybutor podaje cenę i 9999 szt.
{
  const r = zastosujRegulyLicencji(wiersz({ stockDE: 9999, totalStock: 9999, cartonPrice: 5, servicePlanPrice: 7, availability: 'available' }), { licencja: true, naZapytanie: true })
  assert.equal(r.price, undefined)
  assert.equal(r.priceBrutto, undefined)
  assert.equal(r.cartonPrice, undefined)
  assert.equal(r.servicePlanPrice, undefined)
  assert.equal(r.availability, 'unavailable')
  assert.equal(r.totalStock, 0)
  assert.equal(r.electronicLicense, undefined)
  assert.equal(jestNaStanie(r), false)
}
// 6. jestNaStanie dla towaru
assert.equal(jestNaStanie({ stockPL: 1, stockDE: 0 }), true)
assert.equal(jestNaStanie({ stockPL: 0, stockDE: 2 }), true)
assert.equal(jestNaStanie({ stockPL: 0, stockDE: 0 }), false)
assert.equal(jestNaStanie(undefined), false)

// 7. czyNaZapytanie: karta, wariant (wielkość liter PN bez znaczenia), brak PN
const testLicencja = products.find(p => p.slug === 'test-licencja')
const testEnterprise = products.find(p => p.slug === 'test-enterprise')
assert.equal(czyNaZapytanie(testLicencja, 'TEST-LIC-ENT'), true)
assert.equal(czyNaZapytanie(testLicencja, 'test-lic-ent'), true)
assert.equal(czyNaZapytanie(testLicencja, 'TEST-LIC-1'), false)
assert.equal(czyNaZapytanie(testLicencja, undefined), false)
assert.equal(czyNaZapytanie(testEnterprise, undefined), true)
assert.equal(czyNaZapytanie(undefined, 'TEST-LIC-ENT'), false)

// 8. Katalog: CardStudio jest licencją e-mailem, jej PN dostają regułę; zwykła drukarka nie
const cardstudio = products.find(p => p.slug === 'zebra-cardstudio')
assert.equal(czyLicencjaElektroniczna(cardstudio), true)
for (const v of cardstudio.variants) {
  assert.equal(czyPnLicencji(v.partNumber), true, v.partNumber)
  assert.equal(czyPnNaZapytanie(v.partNumber), false, v.partNumber)
  const r = nalozRegulyLicencji(wiersz({ partNumber: v.partNumber, stockDE: 9999, totalStock: 9999, availability: 'available' }))
  assert.equal(r.deliveryText, LICENCJA_DOSTAWA, v.partNumber)
}
assert.equal(czyPnLicencji(zwyklyPn), false)
assert.equal(czyPnNaZapytanie(zwyklyPn), false, 'PN w sprzedaży na innej karcie nie jest „na zapytanie”')
{
  const przed = wiersz({ partNumber: zwyklyPn, stockPL: 3, totalStock: 3, availability: 'available' })
  assert.deepEqual(nalozRegulyLicencji({ ...przed }), przed)
}
assert.equal(czyPnLicencji('test-lic-1'), true, 'PN bez względu na wielkość liter')
assert.equal(czyPnNaZapytanie('TEST-LIC-ENT'), true)
assert.equal(czyPnNaZapytanie('TEST-ENT-3'), true)
assert.equal(czyPnNaZapytanie('TEST-LIC-1'), false)
{
  const r = nalozRegulyLicencji(wiersz({ partNumber: 'TEST-LIC-ENT', stockDE: 9999, totalStock: 9999, availability: 'available' }))
  assert.equal(r.price, undefined)
  assert.equal(r.availability, 'unavailable')
  const s = nalozRegulyLicencji(wiersz({ partNumber: 'TEST-LIC-1' }))
  assert.equal(s.availability, 'available')
  assert.equal(s.price, 1000)
}
// Żadna z istniejących kart nie ma dziś PN jednocześnie w sprzedaży i jako licencja na zapytanie
for (const p of products) for (const v of p.variants ?? []) {
  if (v.quoteOnly) assert.equal(p.variants.some(x => x !== v && x.partNumber === v.partNumber && !x.quoteOnly), false, v.partNumber)
}

// 9. Dane licencjobiorcy: zapis w uwagach i odczyt
{
  const dane = { firma: '  ACME; Sp. z o.o.  ', email: ' it@acme.pl ' }
  assert.equal(poprawnyLicencjobiorca(dane), true)
  const tekst = dopiszLicencjobiorce('Proszę o fakturę z dopiskiem.', dane)
  assert.equal(tekst, 'Dane licencjobiorcy — firma: ACME, Sp. z o.o.; e-mail: it@acme.pl\n\nProszę o fakturę z dopiskiem.')
  assert.deepEqual(odczytajLicencjobiorce(tekst), { licencjobiorca: { firma: 'ACME, Sp. z o.o.', email: 'it@acme.pl' }, uwagi: 'Proszę o fakturę z dopiskiem.' })
  const bezUwag = dopiszLicencjobiorce(undefined, { firma: 'Firma', email: 'a@b.pl' })
  assert.deepEqual(odczytajLicencjobiorce(bezUwag), { licencjobiorca: { firma: 'Firma', email: 'a@b.pl' }, uwagi: '' })
  assert.deepEqual(odczytajLicencjobiorce('Zwykłe uwagi'), { uwagi: 'Zwykłe uwagi' })
  assert.deepEqual(odczytajLicencjobiorce(null), { uwagi: '' })
  assert.equal(poprawnyLicencjobiorca({ firma: '', email: 'a@b.pl' }), false)
  assert.equal(poprawnyLicencjobiorca({ firma: 'Firma', email: 'bez-maila' }), false)
  assert.equal(poprawnyLicencjobiorca(undefined), false)
}

// 10. Strażnik zamówienia (serwer)
{
  const poz = (slug, partNumber, quoteNumber) => ({ productSlug: slug, productName: slug, partNumber, quoteNumber })
  const licencjobiorca = { firma: 'ACME', email: 'it@acme.pl' }
  assert.throws(() => przygotujUwagiZamowienia([poz('test-licencja', 'TEST-LIC-ENT')], undefined, licencjobiorca), /na zapytanie/)
  assert.throws(() => przygotujUwagiZamowienia([poz('test-enterprise', 'TEST-ENT-3')], undefined, licencjobiorca), /na zapytanie/)
  // pozycja z oferty handlowej (wycena indywidualna) przechodzi
  assert.match(przygotujUwagiZamowienia([poz('test-enterprise', 'TEST-ENT-3', 'OF/1')], undefined, licencjobiorca), /^Dane licencjobiorcy — firma: ACME; e-mail: it@acme\.pl$/)
  assert.throws(() => przygotujUwagiZamowienia([poz('test-licencja', 'TEST-LIC-1')], 'uwagi', undefined), /użytkownika licencji/)
  assert.throws(() => przygotujUwagiZamowienia([poz('zebra-cardstudio', 'CSR2S-SW00-E')], 'uwagi', { firma: 'A', email: 'zly' }), /użytkownika licencji/)
  assert.equal(przygotujUwagiZamowienia([poz('zebra-cardstudio', 'CSR2S-SW00-E')], 'uwagi', licencjobiorca), 'Dane licencjobiorcy — firma: ACME; e-mail: it@acme.pl\n\nuwagi')
  // koszyk bez licencji: uwagi bez zmian, dane licencjobiorcy pominięte
  assert.equal(przygotujUwagiZamowienia([poz('zebra-zd421t', zwyklyPn)], 'uwagi', licencjobiorca), 'uwagi')
  assert.equal(przygotujUwagiZamowienia([poz('zebra-zd421t', zwyklyPn)], undefined, undefined), undefined)
}

console.log('test-licencje: OK')
