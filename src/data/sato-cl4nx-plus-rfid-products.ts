import type { Product } from './products'

const id = 'sato-cl4nx-plus-rfid'
const parts = [
  { key: 'head-203', pn: 'R37901800', price: 2397.58, name: 'Głowica 203 dpi SATO CL4NX Plus', image: 'head', match: 'Wersja 203 dpi', description: 'Głowica R37901800 do SATO CL4NX Plus 203 dpi, także z UHF RFID. Nie pasuje do wersji 305 dpi i nie służy do zmiany rozdzielczości drukarki.' },
  { key: 'head-305', pn: 'R37901900', price: 2877.06, name: 'Głowica 305 dpi SATO CL4NX Plus', image: 'head', match: 'Wersja 305 dpi', description: 'Głowica R37901900 do SATO CL4NX Plus 305 dpi, także z UHF RFID. Nie pasuje do wersji 203 dpi i nie służy do zmiany rozdzielczości drukarki.' },
  { key: 'platen', pn: 'R37901501', price: 223.8, name: 'Wałek dociskowy SATO CL4NX Plus', image: 'platen', match: '203 i 305 dpi', description: 'Wałek dociskowy R37901501 do SATO CL4NX Plus, także z UHF RFID. Wskaźnik Pure Line pomaga ocenić zużycie powierzchni wałka.' },
  { key: 'cutter', pn: 'WWCL05100', price: 2293.47, name: 'Gilotyna SATO CL4NX Plus', image: 'cutter', match: '203 i 305 dpi; dobór do materiału', description: 'Zestaw gilotyny WWCL05100 do SATO CL4NX Plus. Przy RFID ustaw cięcie między wkładkami. Gilotyna obsługuje materiał o grubości 0,060–0,268 mm. Grube etykiety On-Metal mogą przekraczać ten zakres. Przed zamówieniem podaj nam grubość etykiety. Ten zestaw nie jest obcinakiem rotacyjnym WWCLP5500.' },
]

export const satoCl4nxPlusRfidAccessories: Product[] = parts.map(a => ({
  id: `sato-cl4nx-plus-${a.key}`, slug: `sato-cl4nx-plus-${a.pn.toLowerCase()}`, name: `${a.name} — ${a.pn}`,
  shortDescription: a.description.split('. ')[0] + '.',
  description: `${a.description} Przed zakupem podaj numer seryjny drukarki. Montaż zleć serwisowi. Drukarka jest sprzedawana osobno.${a.image === 'head' ? ' Zdjęcie przedstawia głowicę z tej serii. Rozdzielczość określa numer PN.' : ''}`,
  seoTitle: `${a.name} ${a.pn} | TAKMA`, seoDescription: `${a.name}, PN ${a.pn}. Zgodność z CL4NX Plus RFID, cena i dostępność. Dobierz część do wersji drukarki.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'logistyka'],
  images: [`/images/products/sato-cl4nx-plus-${a.image}.webp`], imageDescriptions: [`${a.name} — ${a.image === 'head' ? 'widok głowicy z serii CL4NX Plus' : a.pn}`],
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Zgodność', value: `SATO CL4NX Plus; ${a.match}` }],
  priceFrom: a.price, applications: [], availability: 'available', isNew: false, isBestseller: false, compatibleAccessories: [], relatedAccessories: [id, 'sato-cl4nx-plus'],
  downloads: [{ name: 'Katalog części CL4NX Plus (EN)', type: 'manual', url: '/downloads/sato-cl4nx-plus-czesci-en.pdf', size: 'PDF' }], createdAt: '2026-10-16',
}))

export const satoCl4nxPlusRfidProducts: Product[] = [{
  id, slug: id, name: 'SATO CL4NX Plus RFID', seoH1: 'SATO CL4NX Plus RFID',
  seoTitle: 'SATO CL4NX Plus RFID — drukarka RFID UHF 203/305 dpi',
  seoDescription: 'SATO CL4NX Plus RFID – przemysłowa drukarka RFID UHF 203 lub 305 dpi. Druk 104 mm do 355 mm/s, rolka 254 mm, taśma 600 m, port równoległy i NFC.',
  shortDescription: 'Przemysłowa drukarka i koder UHF RFID. Nadruk do 104 mm, rozdzielczość 203 lub 305 dpi, taśma do 600 m. Wersja 305 dpi ma Wi-Fi i zestaw On-Metal.',
  description: `SATO CL4NX Plus RFID to przemysłowa drukarka RFID UHF w aluminiowej obudowie z dwuczęściową pokrywą. Koduje wkładki UHF Gen 2 zgodne z ISO/IEC 18000-6C i drukuje etykiety o szerokości nadruku 104 mm. Prędkość nadruku wynosi do 355 mm/s.

## WWCLP172ZNAREU i WWCLP272ZWPREU

WWCLP172ZNAREU ma głowicę 203 dpi i łączność przewodową. WWCLP272ZWPREU ma głowicę 305 dpi, Wi-Fi i zestaw On-Metal do etykiet RFID na metal. Moduł Wi-Fi obsługuje 802.11ac w pasmach 2,4 i 5 GHz. Oba warianty mają zegar RTC.

## Kodowanie przy 4 calach na sekundę

Kodowanie etykiet RFID daje najlepsze wyniki przy prędkości do 4 cali/s, czyli około 102 mm/s. Dla wybranych wkładek SATO w paśmie ETSI 865–868 MHz określono położenie wkładki, moc zapisu i odczytu oraz wybór anteny. Działanie wybranej wkładki trzeba potwierdzić w docelowej instalacji.

## Rolka 254 mm i porty z NFC

Rolka może mieć do 254 mm średnicy na gilzie 76 mm. Materiał z podkładem ma 25–131 mm szerokości i 0,060–0,268 mm grubości. Taśma ma do 600 m długości i 39,5–128 mm szerokości. Standardowo drukarka ma USB typu A i B, Ethernet, RS-232C, port równoległy, EXT I/O i NFC. Obcinak rotacyjny WWCLP5500 nie współpracuje z RFID i zgłasza błąd.

[SATO CL4-SXR RFID](/produkt/sato-cl4-sxr-rfid) ma ekran dotykowy 4,3 cala i drukuje do 457 mm/s przy 203 dpi.`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'logistyka', 'produkcja'],
  images: ['/images/products/sato-cl4nx-plus-rfid.webp'], imageDescriptions: ['SATO CL4NX Plus RFID — przemysłowa drukarka etykiet, widok z przodu i prawego boku'],
  availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID',
    rozdzielczosc: '203 / 305 dpi',
    szerokoscDruku: '104 mm',
    szerokoscEtykiet: '25–131 mm z podkładem; dobór wkładki RFID',
    predkoscDruku: 'Do 355 mm/s; przy kodowaniu RFID zalecane do 102 mm/s',
  },
  specifications: [
    { name: 'Rozdzielczość', value: '203 lub 305 dpi, zależnie od PN' },
    { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
    { name: 'Szerokość druku', value: 'Do 104 mm' },
    { name: 'Prędkość nadruku', value: 'Do 355 mm/s w obu rozdzielczościach; przy kodowaniu RFID zalecane do 102 mm/s (4 cale/s)' },
    { name: 'RFID', value: 'UHF Gen 2, ISO/IEC 18000-6C; ustawienia wkładek SATO dla pasma ETSI 865–868 MHz' },
    { name: 'Szerokość materiału', value: '25–131 mm z podkładem; RFID wymaga doboru wkładki' },
    { name: 'Rolka materiału', value: 'Do 254 mm na gilzie 76 mm' },
    { name: 'Taśma barwiąca', value: 'Do 600 m; szerokość 39,5–128 mm; gilza 25,4 mm; barwnik na zewnątrz lub do wewnątrz' },
    { name: 'Łączność', value: 'USB 2.0 (A i B) z tyłu, USB 2.0 (A) z przodu, Ethernet, RS-232C, port równoległy, EXT I/O, NFC; Wi-Fi 802.11ac w WWCLP272ZWPREU' },
    { name: 'Wyświetlacz', value: 'Kolorowy LCD 3,5 cala' },
    { name: 'Pamięć', value: 'CPU1: 256 MB RAM i 2 GB Flash; CPU2: 64 MB RAM i 4 MB Flash' },
    { name: 'Zegar RTC', value: 'Tak, w obu pokazanych PN' },
    { name: 'Zestaw On-Metal', value: 'W konfiguracji WWCLP272ZWPREU' },
    { name: 'Wymiary', value: '271 × 457 × 321 mm (szer. × gł. × wys.)' },
    { name: 'Masa', value: 'Około 15,1 kg bez materiałów i opcji' },
  ],
  variants: [
    { partNumber: 'WWCLP172ZNAREU', name: '203 dpi, UHF RFID, RTC, EU', attributes: { 'Rozdzielczość': '203 dpi', 'Wi-Fi': 'Brak', 'Zestaw On-Metal': 'Brak' }, availability: 'unavailable' },
    { partNumber: 'WWCLP272ZWPREU', name: '305 dpi, UHF RFID, RTC, Wi-Fi, On-Metal, EU', attributes: { 'Rozdzielczość': '305 dpi', 'Wi-Fi': 'Tak', 'Zestaw On-Metal': 'Tak' }, availability: 'unavailable' },
  ],
  applications: ['Kodowanie etykiet UHF przy 102 mm/s', 'Etykiety RFID na metal z zestawem On-Metal'],
  compatibleAccessories: [], relatedAccessories: parts.map(a => `sato-cl4nx-plus-${a.key}`),
  faq: [
    { question: 'Który obcinak nie działa z RFID w CL4NX Plus?', answer: 'Obcinak rotacyjny WWCLP5500. Połączenie go z RFID nie jest obsługiwane i kończy się błędem. Gilotyna WWCL05100 to osobny zestaw montowany na miejscu.' },
    { question: 'Z jaką prędkością kodować etykiety w CL4NX Plus RFID?', answer: 'Do 4 cali/s, czyli około 102 mm/s. Maksymalna prędkość nadruku drukarki wynosi 355 mm/s.' },
    { question: 'Która wersja CL4NX Plus RFID ma zestaw On-Metal?', answer: 'WWCLP272ZWPREU z głowicą 305 dpi. Ma też Wi-Fi 802.11ac. Wersja WWCLP172ZNAREU z głowicą 203 dpi nie ma tych elementów.' },
  ],
  downloads: [
    { name: 'SATO CL4NX Plus — karta katalogowa (EN)', type: 'datasheet', url: '/downloads/sato-cl4nx-plus-karta-en.pdf', size: 'PDF' },
    { name: 'CL4NX Plus — katalog części (EN)', type: 'manual', url: '/downloads/sato-cl4nx-plus-czesci-en.pdf', size: 'PDF' },
    { name: 'CL4NX Plus — dobór wkładek UHF (EN)', type: 'manual', url: '/downloads/sato-cl4nx-plus-uhf-inlay-en.pdf', size: 'PDF' },
    { name: 'CL4NX Plus — porównanie obcinaków (EN)', type: 'datasheet', url: '/downloads/sato-cl4nx-plus-obcinaki-en.pdf', size: 'PDF' },
  ],
  relatedProducts: ['sato-cl4-sxr-rfid', 'zebra-zt411-rfid', 'sato-cl6nx-plus-rfid'],
  createdAt: '2026-10-16',
}]
