import type { Product } from './products'

const id = 'sato-cl4-sxr-rfid'
const parts = [
  { key: 'head-203', pn: 'R48221101', price: 2397.58, name: 'Głowica 203 dpi SATO CL4-SXR', image: 'head', match: '203 dpi' },
  { key: 'head-305', pn: 'R48221201', price: 2877.06, name: 'Głowica 305 dpi SATO CL4-SXR', image: 'head', match: '305 dpi' },
  { key: 'head-609', pn: 'R48221401', price: 6520.43, name: 'Głowica 609 dpi SATO CL4-SXR', image: 'head', match: '609 dpi' },
  { key: 'platen', pn: 'R55375100', price: 223.80, name: 'Wałek dociskowy SATO CL4-SXR', image: 'platen', match: '203, 305 i 609 dpi' },
]
export const satoCl4SxrRfidAccessories: Product[] = parts.map(a => ({
  id: `sato-cl4-sxr-${a.key}`, slug: `sato-cl4-sxr-${a.pn.toLowerCase()}`, name: `${a.name} — ${a.pn}`,
  shortDescription: `${a.name}, PN ${a.pn}. Część do wersji ${a.match}.`,
  description: `${a.name}, PN ${a.pn}, to część eksploatacyjna do drukarki CL4-SXR, także z UHF RFID. Zgodność: ${a.match}. Przed zakupem podaj numer seryjny i rozdzielczość urządzenia. Wymianę zleć serwisowi. Głowica nie służy do zmiany rozdzielczości drukarki. Drukarka jest sprzedawana osobno. Ilustracja przedstawia poglądowy rysunek części.`,
  seoTitle: `${a.name} ${a.pn} | TAKMA`, seoDescription: `${a.name}, PN ${a.pn}. Zgodność z CL4-SXR RFID, aktualna cena i dostępność w TAKMA.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'logistyka'],
  images: [`/images/products/sato-cl4-sxr-${a.image}.webp`], imageDescriptions: [`${a.name} — ${a.pn}, rysunek poglądowy`],
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Zgodność', value: `SATO CL4-SXR, także UHF RFID; ${a.match}` }],
  priceFrom: a.price, applications: [], availability: 'unavailable', isNew: false, isBestseller: false, compatibleAccessories: [], relatedAccessories: [id],
  downloads: [{ name: 'Katalog części CL4-SXR (EN)', type: 'manual', url: '/downloads/sato-cl4-sxr-czesci-en.pdf', size: 'PDF' }], createdAt: '2026-10-16',
}))

export const satoCl4SxrRfidProducts: Product[] = [{
  id, slug: id, name: 'SATO CL4-SXR RFID', seoH1: 'SATO CL4-SXR RFID',
  seoTitle: 'SATO CL4-SXR RFID — drukarka RFID UHF 203–609 dpi',
  seoDescription: 'SATO CL4-SXR RFID – przemysłowa drukarka RFID UHF 203, 305 lub 609 dpi. Druk 104 mm z prędkością do 457 mm/s, taśma 600 m, ekran dotykowy 4,3 cala.',
  shortDescription: 'Przemysłowa drukarka i koder UHF RFID. Druk do 104 mm, rozdzielczość 203, 305 lub 609 dpi, prędkość do 457 mm/s, taśma do 600 m i ekran dotykowy 4,3 cala.',
  description: `SATO CL4-SXR RFID to przemysłowa drukarka RFID UHF do etykiet o szerokości nadruku 104 mm. Koduje wkładki UHF i drukuje termotransferowo lub termicznie bezpośrednio. Do wyboru są głowice 203, 305 i 609 dpi.

## Prędkość 457, 406 lub 152 mm/s

Wersja 203 dpi drukuje z prędkością 51–457 mm/s, czyli 2–18 cali/s. Wersja 305 dpi osiąga do 406 mm/s, a wersja 609 dpi do 152 mm/s. Najdłuższy wydruk ma odpowiednio 2500, 1500 i 400 mm. Tryb wysokiej precyzji utrzymuje pozycję nadruku z dokładnością ±0,3 mm.

## Materiał 22–128 mm bez przestawiania nawoju

Etykieta bez podkładu może mieć 22–128 mm szerokości i 60–268 μm grubości. Rolka ma do 220 mm średnicy, na gilzie 76 lub 101 mm. Nawój etykietą do wewnątrz lub na zewnątrz nie wymaga zmiany ustawień. To samo dotyczy taśmy do 600 m o szerokości 39,5–128 mm. Czujnik zapobiegania stratom etykiet pozwala drukować od pierwszej etykiety na rolce.

## Gigabit Ethernet, Wi-Fi 2,4/5/6 GHz i emulacje

Drukarka ma USB typu A z przodu i z tyłu, USB typu B, Ethernet 10/100/1000, RS-232C i port EXT. Warianty z Wi-Fi obsługują 802.11a/b/g/n/ac/ax w pasmach 2,4, 5 i 6 GHz oraz Bluetooth 5.2. Oprócz SBPL drukarka sama rozpoznaje emulacje SZPL, SDPL, SIPL, STCL, SEPL, SMGL, SPGL i SFPL. Ekran dotykowy 4,3 cala z głośnikiem odtwarza filmy instruktażowe.

[SATO CL6-SXR RFID](/produkt/sato-cl6-sxr-rfid) drukuje szersze etykiety, do 167,5 mm, z prędkością do 355,6 mm/s.`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'sato', tags: ['magazyn', 'logistyka', 'produkcja'],
  images: ['/images/products/sato-cl4-sxr-rfid.webp'], imageDescriptions: ['SATO CL4-SXR RFID — przemysłowa drukarka etykiet, widok pod kątem z prawym bokiem'],
  availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID',
    rozdzielczosc: '203 / 305 / 609 dpi',
    szerokoscDruku: '104 mm',
    szerokoscEtykiet: '22–128 mm bez podkładu; RFID wymaga doboru wkładki',
    predkoscDruku: 'Do 457 mm/s (203 dpi), 406 mm/s (305 dpi) lub 152 mm/s (609 dpi)',
  },
  specifications: [
    { name: 'Rozdzielczość', value: '203 / 305 / 609 dpi, zależnie od PN' },
    { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
    { name: 'Szerokość druku', value: '104 mm' },
    { name: 'Prędkość nadruku', value: 'Do 457 mm/s (18 cali/s) przy 203 dpi; do 406 mm/s (16 cali/s) przy 305 dpi; do 152 mm/s (6 cali/s) przy 609 dpi' },
    { name: 'RFID', value: 'Koder UHF RFID; bez kodera HF' },
    { name: 'Rolka materiału', value: 'Średnica do 220 mm; gilza 76 lub 101 mm; materiał RFID wymaga testu' },
    { name: 'Taśma barwiąca', value: 'Do 600 m; szerokość 39,5–128 mm; gilza 25,4 mm; barwnik na zewnątrz lub do wewnątrz' },
    { name: 'Łączność', value: 'USB, 2 × USB Host, Gigabit Ethernet, RS-232, EXT; Wi-Fi i Bluetooth zależnie od PN' },
    { name: 'Wyświetlacz', value: 'Kolorowy ekran dotykowy 4,3 cala' },
    { name: 'Pamięć', value: '2 GB RAM; 8 GB Flash' },
    { name: 'Język', value: 'SBPL; emulacje SZPL, SDPL, SIPL, STCL, SEPL, SMGL, SPGL, SFPL (wykrywane automatycznie); aplikacje AEP' },
    { name: 'Zegar RTC', value: 'Tak, we wszystkich pokazanych PN' },
    { name: 'Wymiary', value: '275 × 457 × 321 mm (szer. × gł. × wys.)' },
    { name: 'Masa', value: '15,5 kg bez materiałów i opcji' },
    { name: 'Gwarancja', value: '2 lata ograniczonej gwarancji SATO; zależnie od regionu, SKU i warunków gwarancji' },
  ],
  variants: [1, 2, 3].flatMap(n => ['70', 'A0', 'C0'].flatMap(mode => ['N', 'W'].map(radio => ({
    partNumber: `WWCLX${n}${mode}Z${radio}AREU`,
    name: `${[203, 305, 609][n - 1]} dpi, UHF EU${radio === 'W' ? ', Wi-Fi + BT' : ''}, ${mode === '70' ? 'odrywanie' : mode === 'A0' ? 'obcinak' : 'odklejak'}`,
    attributes: { 'Rozdzielczość': `${[203, 305, 609][n - 1]} dpi`, 'Obsługa etykiet': mode === '70' ? 'Ręczne odrywanie' : mode === 'A0' ? 'Obcinak' : 'Odklejak', 'Łączność': radio === 'W' ? 'USB, Ethernet, RS-232, Wi-Fi, Bluetooth' : 'USB, Ethernet, RS-232' },
    availability: 'unavailable' as const,
  })))),
  compatibleAccessories: [], relatedAccessories: satoCl4SxrRfidAccessories.map(a => a.id),
  applications: ['Szybkie kodowanie etykiet UHF do 457 mm/s', 'Etykiety RFID z drobnym nadrukiem 609 dpi'],
  faq: [
    { question: 'Jak szybko drukuje SATO CL4-SXR RFID?', answer: 'Do 457 mm/s, czyli 18 cali/s, z głowicą 203 dpi i do 406 mm/s, czyli 16 cali/s, z głowicą 305 dpi. Wersja 609 dpi drukuje do 152 mm/s.' },
    { question: 'Jakie emulacje obsługuje CL4-SXR RFID?', answer: 'Oprócz języka SBPL drukarka automatycznie wykrywa SZPL, SDPL, SIPL, STCL, SEPL, SMGL, SPGL i SFPL. Aplikacje AEP działają bezpośrednio na drukarce.' },
    { question: 'W jakiej temperaturze pracuje CL4-SXR RFID?', answer: 'W zakresie 0–40°C przy wilgotności 20–85% w trybie ciągłym, z odrywaniem i z obcinakiem. Z odklejakiem zakres wynosi 5–35°C.' },
  ],
  downloads: [
    { name: 'Karta katalogowa CL4-SXR / CL6-SXR (EN)', type: 'datasheet', url: '/downloads/sato-cl4-sxr-karta-en.pdf', size: 'PDF' },
    { name: 'Instrukcja CL-SXR (EN)', type: 'manual', url: 'https://www.manual.sato-global.com/printer/cl-sxr/en/main/index.html', size: 'Online' },
    { name: 'Sterowniki i narzędzia CL4-SXR', type: 'driver', url: 'https://www.satoamerica.com/support_downloads/printers/industrial/cl4-sxr/', size: 'Online' },
  ],
  relatedProducts: ['zebra-zt411-rfid', 'zebra-zt610-rfid', 'sato-ct4-lx-rfid'],
  sameAs: 'https://www.satoamerica.com/products/printers/industrial/cl4-sxr/', createdAt: '2026-10-16',
}]
