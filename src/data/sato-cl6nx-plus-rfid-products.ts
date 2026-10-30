import type { Product } from './products'

const id = 'sato-cl6nx-plus-rfid'
const parts = [
  { key: 'head-203', pn: 'R38747500', price: 2610.73, stock: 74, name: 'Głowica 203 dpi SATO CL6NX Plus', image: 'head', match: 'Wersja 203 dpi', description: 'Głowica R38747500 do SATO CL6NX Plus 203 dpi, także z UHF RFID. Dobierz ją do wersji 203 dpi.' },
  { key: 'head-305', pn: 'R38747600', price: 3676.32, stock: 23, name: 'Głowica 305 dpi SATO CL6NX Plus', image: 'head', match: 'Wersja 305 dpi', description: 'Głowica R38747600 do SATO CL6NX Plus 305 dpi, także z UHF RFID. Dobierz ją do wersji 305 dpi.' },
  { key: 'platen', pn: 'R38353500', price: 330.36, stock: 105, name: 'Wałek dociskowy SATO CL6NX Plus', image: 'platen', match: '203 i 305 dpi', description: 'Wałek dociskowy R38353500 do SATO CL6NX Plus, także z UHF RFID. Wskaźnik Pure Line pomaga ocenić zużycie powierzchni wałka.' },
  { key: 'cutter', pn: 'WWCL95100', price: 3524.98, stock: 0, name: 'Gilotyna SATO CL6NX Plus', image: 'cutter', match: '203 i 305 dpi; dobór do materiału', description: 'Zestaw gilotyny WWCL95100 do SATO CL6NX Plus. Przy RFID ustaw cięcie między wkładkami. Gilotyna obsługuje materiał o grubości 0,060–0,268 mm. Nie przecinaj wkładek RFID. Przed montażem potwierdź zgodność wybranego materiału.' },
]

export const satoCl6nxPlusRfidAccessories: Product[] = parts.map(a => ({
  id: `sato-cl6nx-plus-${a.key}`, slug: `sato-cl6nx-plus-${a.pn.toLowerCase()}`, name: `${a.name} — ${a.pn}`,
  shortDescription: a.description.split('. ')[0] + '.',
  description: `${a.description} Przed zakupem podaj numer seryjny drukarki. Montaż zleć serwisowi. Drukarka jest sprzedawana osobno.${a.image === 'head' ? ' Zdjęcie przedstawia głowicę z tej serii. Rozdzielczość określa numer PN.' : ''}`,
  seoTitle: `${a.name} ${a.pn} | TAKMA`, seoDescription: `${a.name}, PN ${a.pn}. Zgodność z CL6NX Plus RFID, cena i dostępność. Dobierz część do wersji drukarki.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'logistyka'],
  images: [`/images/products/sato-cl6nx-plus-${a.image}.webp`], imageDescriptions: [`${a.name} — ${a.image === 'head' ? 'widok głowicy z serii CL6NX Plus' : a.pn}`],
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Zgodność', value: `SATO CL6NX Plus; ${a.match}` }],
  priceFrom: a.price, applications: [], availability: a.stock > 0 ? 'available' : 'unavailable', isNew: false, isBestseller: false, compatibleAccessories: [], relatedAccessories: [id, 'sato-cl6nx-plus'],
  downloads: [{ name: 'Katalog części CL6NX Plus (EN)', type: 'manual', url: '/downloads/sato-cl6nx-plus-czesci-en.pdf', size: 'PDF' }], createdAt: '2026-10-16',
}))

export const satoCl6nxPlusRfidProducts: Product[] = [{
  id, slug: id, name: 'SATO CL6NX Plus RFID', seoH1: 'SATO CL6NX Plus RFID',
  seoTitle: 'SATO CL6NX Plus RFID — drukarka RFID UHF 203/305 dpi',
  seoDescription: 'SATO CL6NX Plus RFID – 6-calowa drukarka RFID UHF 203 lub 305 dpi. Nadruk do 168 mm, materiał 50–180 mm, do 254 mm/s, taśma 600 m i Ethernet.',
  shortDescription: 'Przemysłowa drukarka i koder UHF RFID do szerokich etykiet. Wersje 203 i 305 dpi, nadruk do 168 mm, taśma do 600 m. Oba PN mają RTC i przewód EU.',
  description: `SATO CL6NX Plus RFID to 6-calowa drukarka RFID UHF do etykiet na kartony, palety i duże opakowania. Pole nadruku ma do 168 mm szerokości. Koder obsługuje wkładki UHF Gen 2 zgodne z ISO/IEC 18000-6C.

## WWCLPA72ZNAREU 254 mm/s i WWCLPB72ZNAREU 203 mm/s

Wersja 203 dpi drukuje do 254 mm/s, czyli 10 cali/s. Wersja 305 dpi drukuje do 203 mm/s, czyli 8 cali/s. Obie mają zegar RTC, ręczne odrywanie i łączność przewodową, a moduł Wi-Fi 802.11ac jest opcją. Wydruk może mieć do 2500 mm długości przy 203 dpi i do 1500 mm przy 305 dpi.

## Materiał z podkładem 50–180 mm

Materiał ma 50–180 mm szerokości i 0,060–0,268 mm grubości. Rolka może mieć 220 mm średnicy na gilzie 76 mm. Taśma do 600 m ma 59–177 mm szerokości i do 90 mm średnicy. Etykiety i taśmy nawinięte do wewnątrz lub na zewnątrz nie wymagają zmiany ustawień.

## Wałek Pure Line i kodowanie do 102 mm/s

Wałek Pure Line ma wizualny wskaźnik zużycia, a głowicę i wałek wymienia się bez narzędzi. Kodowanie RFID działa najlepiej przy prędkości do 4 cali/s, około 102 mm/s. Dla wkładek SATO w paśmie ETSI 865–868 MHz przewidziano konkretne położenie, moc i antenę. Drukarka waży 20,3 kg.

[SATO CL6-SXR RFID](/produkt/sato-cl6-sxr-rfid) drukuje szerokie etykiety szybciej, do 355,6 mm/s, i ma ekran 4,3 cala.`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'logistyka', 'produkcja'],
  images: ['/images/products/sato-cl6nx-plus-rfid-sized.webp'], imageDescriptions: ['SATO CL6NX Plus RFID — przemysłowa drukarka etykiet, widok z przodu i prawego boku'],
  availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID',
    rozdzielczosc: '203 / 305 dpi',
    szerokoscDruku: 'Do 168 mm',
    szerokoscEtykiet: '50–180 mm z podkładem; dobór wkładki RFID',
    predkoscDruku: 'Do 254 mm/s (203 dpi) / 203 mm/s (305 dpi)',
  },
  specifications: [
    { name: 'Rozdzielczość', value: '203 lub 305 dpi, zależnie od PN' },
    { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
    { name: 'Szerokość druku', value: 'Do 168 mm' },
    { name: 'Prędkość nadruku', value: 'Do 254 mm/s przy 203 dpi; do 203 mm/s przy 305 dpi; przy kodowaniu RFID zalecane do 102 mm/s' },
    { name: 'RFID', value: 'UHF Gen 2, ISO/IEC 18000-6C; ustawienia wkładek SATO dla pasma ETSI 865–868 MHz' },
    { name: 'Szerokość materiału', value: '50–180 mm z podkładem; RFID wymaga doboru wkładki' },
    { name: 'Rolka materiału', value: 'Średnica do 220 mm na gilzie 76 mm; zależnie od wyposażenia' },
    { name: 'Taśma barwiąca', value: 'Do 600 m; szerokość 59–177 mm; gilza 25,4 mm; barwnik na zewnątrz lub do wewnątrz' },
    { name: 'Łączność', value: 'USB 2.0 (A i B) z tyłu, USB 2.0 (A) z przodu, Ethernet, RS-232C, port równoległy, EXT I/O, NFC; bez fabrycznego Wi-Fi w pokazanych PN' },
    { name: 'Wyświetlacz', value: 'Kolorowy LCD 3,5 cala' },
    { name: 'Pamięć', value: 'CPU1: 256 MB RAM i 2 GB Flash; CPU2: 64 MB RAM i 4 MB Flash' },
    { name: 'Zegar RTC', value: 'Tak, w obu pokazanych PN' },
    { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; gilotyna i odklejak jako osobne opcje' },
    { name: 'Wymiary', value: '338 × 457 × 321 mm (szer. × gł. × wys.)' },
    { name: 'Masa', value: '20,3 kg' },
  ],
  variants: [
    { partNumber: 'WWCLPA72ZNAREU', name: '203 dpi, UHF RFID, RTC, EU', attributes: { 'Rozdzielczość': '203 dpi', 'Prędkość nadruku': 'Do 254 mm/s' }, availability: 'unavailable' },
    { partNumber: 'WWCLPB72ZNAREU', name: '305 dpi, UHF RFID, RTC, EU', attributes: { 'Rozdzielczość': '305 dpi', 'Prędkość nadruku': 'Do 203 mm/s' }, availability: 'unavailable' },
  ],
  applications: ['Szerokie etykiety RFID do 168 mm na kartony', 'Kodowanie etykiet UHF w paśmie ETSI'],
  compatibleAccessories: [], relatedAccessories: parts.map(a => `sato-cl6nx-plus-${a.key}`),
  faq: [
    { question: 'Jaka jest maksymalna szerokość nadruku SATO CL6NX Plus RFID?', answer: '168 mm. Materiał z podkładem może mieć 50–180 mm szerokości.' },
    { question: 'Jakie porty ma CL6NX Plus RFID bez dodatkowych modułów?', answer: 'USB typu A i B z tyłu, USB typu A z przodu, Ethernet, RS-232C, port równoległy, EXT I/O i NFC. Wi-Fi 802.11ac wymaga opcjonalnego modułu wewnętrznego.' },
    { question: 'Która rozdzielczość CL6NX Plus RFID drukuje dłuższe etykiety?', answer: 'Wersja 203 dpi, WWCLPA72ZNAREU. Wydruk może mieć do 2500 mm. Wersja 305 dpi drukuje do 1500 mm.' },
  ],
  downloads: [
    { name: 'SATO CL6NX Plus — karta katalogowa (EN)', type: 'datasheet', url: '/downloads/sato-cl6nx-plus-karta-en.pdf', size: 'PDF' },
    { name: 'CL6NX Plus — katalog części (EN)', type: 'manual', url: '/downloads/sato-cl6nx-plus-czesci-en.pdf', size: 'PDF' },
    { name: 'CL6NX Plus — dobór wkładek UHF (EN)', type: 'manual', url: '/downloads/sato-cl6nx-plus-uhf-inlay-en.pdf', size: 'PDF' },
  ],
  relatedProducts: ['sato-cl6-sxr-rfid', 'sato-cl4nx-plus-rfid', 'zebra-zt421-rfid', 'zebra-zt620-rfid'],
  createdAt: '2026-10-16',
}]
