import type { Product } from './products'

const id = 'tsc-alpha-40l-rfid'
const support = 'https://emea.tscprinters.com/en/products/alpha-series-4-inch-performance-mobile-rfid-printers'
const datasheet = '/downloads/tsc-alpha-40l-rfid-karta-produktu-en.pdf'
const accessories = [
  { id: 'tsc-alpha40l-battery', slug: 'tsc-bateria-alpha-40l-op-p-sb-001-0001', pn: 'OP-P-SB-001-0001', image: 'battery', name: 'Bateria TSC Alpha-40L 6200 mAh', description: 'TSC OP-P-SB-001-0001 to wymienna bateria Li-ion Smart Battery 6200 mAh do Alpha-40L, także wersji RFID. Napięcie nominalne wynosi 7,4 V. Zestaw obejmuje jedną baterię, bez drukarki i ładowarki. Bateria zapasowa pozwala wymienić rozładowany akumulator podczas pracy. Dane o stanie baterii można odczytać przez narzędzia zarządzania zgodnej drukarki.' },
  { id: 'tsc-alpha40l-dock1', slug: 'tsc-stacja-alpha-40l-op-p-dc1-001-2001', pn: 'OP-P-DC1-001-2001', image: 'dock1', name: 'Stacja ładująca TSC Alpha-40L — 1 drukarka, EU', description: 'TSC OP-P-DC1-001-2001 to stacja do ładowania jednej drukarki Alpha-40L, także wersji RFID. Ładuje baterię zamontowaną w drukarce. Konfiguracja EU obejmuje zasilacz i przewód europejski. Drukarka jest sprzedawana osobno. Stacja nie jest ładowarką do wyjętej baterii.' },
  { id: 'tsc-alpha40l-case', slug: 'tsc-etui-alpha-40l-op-p-ec-002-0001', pn: 'OP-P-EC-002-0001', image: 'case', name: 'Etui z paskiem TSC Alpha-40L', description: 'TSC OP-P-EC-002-0001 to etui ochronne z paskiem na ramię do drukarki Alpha-40L, także wersji RFID. Umożliwia noszenie drukarki i zapewnia dodatkową osłonę w terenie. Zgodna drukarka w etui ma deklarowaną odporność na upadek z 2,5 m. Drukarka jest sprzedawana osobno. Pasek jest częścią tego zestawu, więc nie trzeba kupować drugiego paska do etui.' },
  { id: 'tsc-alpha40l-strap', slug: 'tsc-pasek-alpha-40l-op-p-ss-001-0001', pn: 'OP-P-SS-001-0001', image: 'strap', name: 'Pasek na ramię TSC Alpha-40L', description: 'TSC OP-P-SS-001-0001 to pasek do noszenia drukarki Alpha-40L na ramieniu, także wersji RFID. Jest przeznaczony do bezpośredniego noszenia drukarki bez etui. Zestaw nie obejmuje drukarki ani etui. Jeśli wybierasz etui OP-P-EC-002-0001, pasek jest już częścią zestawu etui.' },
  { id: 'tsc-alpha40l-dock4', slug: 'tsc-stacja-alpha-40l-op-p-dc4-001-2001', pn: 'OP-P-DC4-001-2001', image: 'dock4', name: 'Stacja ładująca TSC Alpha-40L — 4 drukarki, EU', description: 'TSC OP-P-DC4-001-2001 to stacja do ładowania maksymalnie czterech drukarek Alpha-40L, także wersji RFID. Ładuje baterie bez wyjmowania ich z drukarek. Konfiguracja EU obejmuje zasilacz i przewód europejski. Drukarki są sprzedawane osobno. Stacja nie zastępuje ładowarki wyjętych baterii.' },
  { id: 'tsc-alpha40l-charger4', slug: 'tsc-ladowarka-alpha-40l-op-p-bc4-001-2001', pn: 'OP-P-BC4-001-2001', image: 'charger4', name: 'Ładowarka TSC Alpha-40L — 4 baterie, EU', description: 'TSC OP-P-BC4-001-2001 to ładowarka do maksymalnie czterech baterii wyjętych z drukarek Alpha-40L, także wersji RFID. Konfiguracja EU obejmuje zasilacz i przewód europejski. Baterie oraz drukarki są sprzedawane osobno. Baterie widoczne na zdjęciu przedstawiają sposób użycia i nie są częścią zestawu. Do ładowania całych drukarek wybierz stację dokującą.' },
]

export const tscAlpha40lRfidAccessories: Product[] = accessories.map(a => ({
  id: a.id, slug: a.slug, name: `${a.name} — ${a.pn}`,
  shortDescription: a.description.split('. ')[0] + '.', description: a.description,
  seoTitle: `${a.name} | TAKMA`, seoDescription: `${a.name}, PN ${a.pn}. Zgodność z Alpha-40L RFID. Sprawdź cenę, dostępność i zawartość zestawu w TAKMA.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'tsc',
  images: [`/images/products/tsc-alpha40l-${a.image}.webp`], imageDescriptions: [`${a.name} — ${a.pn}${a.image === 'charger4' ? '; baterie pokazano dla zilustrowania użycia i są sprzedawane osobno' : ''}`],
  tags: ['magazyn', 'logistyka'], specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Zgodność', value: 'TSC Alpha-40L oraz Alpha-40L RFID' }],
  availability: 'unavailable', isNew: false, isBestseller: false, applications: [], compatibleAccessories: [], relatedAccessories: [id],
  downloads: [{ name: 'Karta Alpha-40L RFID i akcesoria (EN)', type: 'datasheet', url: datasheet, size: 'PDF' }], createdAt: '2026-10-16',
}))

export const tscAlpha40lRfidProduct: Product = {
  id, slug: id, name: 'TSC Alpha-40L RFID', seoH1: 'TSC Alpha-40L RFID',
  seoTitle: 'TSC Alpha-40L RFID — drukarka RFID UHF 203 dpi',
  seoDescription: 'TSC Alpha-40L RFID – mobilna drukarka RFID UHF 203 dpi. Druk 104 mm do 127 mm/s, rolka do 67 mm, bateria 6200 mAh, klasa IP54 i upadek z 1,8 m.',
  shortDescription: 'Mobilna drukarka termiczna i koder RAIN UHF RFID. Druk do 104 mm, bateria 6200 mAh oraz warianty Bluetooth i Wi-Fi. Europejski zasilacz w zestawie.',
  description: `TSC Alpha-40L RFID to mobilna drukarka RFID UHF z drukiem termicznym bezpośrednim. Koduje etykiety RAIN UHF zgodne z GS1 EPC Gen2 v2 i ISO 18000-63 przy towarze, bez osobnego stanowiska druku. Drukuje na szerokości 104 mm z prędkością do 127 mm/s.

## Rolka 67 mm i etykiety od 15,9 mm

Rolka materiału ma do 67 mm średnicy zewnętrznej. Gilza ma 25,4 mm, a z adapterami z zestawu 19,1 lub 38,1 mm. Materiał z podkładem ma 50,8–112 mm szerokości i 0,06–0,16 mm grubości. Etykieta może mieć 15,9–2794 mm długości. Drukarka obsługuje etykiety RFID z przerwą lub z czarnym znacznikiem.

## Antena o stałym położeniu i przekreślanie błędów

Antena RFID ma stałe położenie. Automatyczna kalibracja etykiet RFID nie wymaga osobnego oprogramowania. Etykietę, której nie udało się zakodować, drukarka przekreśla. Liczniki zapisują liczbę etykiet poprawnych i przekreślonych. Polecenia RFID drukarka przyjmuje w TSPL i ZPL2.

## Bateria 6200 mAh i odporność IP54

Bateria Li-ion 7,4 V ma 6200 mAh i współpracuje z TSC Console oraz SOTI Connect. Drukarka waży 1025 g z baterią. Ma klasę IP54, bez toru papieru, i wytrzymuje upadek z 1,8 m, a w etui ochronnym z 2,5 m. Port USB-C służy tylko do komunikacji. Do ładowania bez wyjmowania baterii służy [stacja 1-gniazdowa](/produkt/tsc-stacja-alpha-40l-op-p-dc1-001-2001) lub [stacja 4-gniazdowa](/produkt/tsc-stacja-alpha-40l-op-p-dc4-001-2001).

[Zebra ZQ521 RFID](/produkt/zebra-zq521-rfid) przyjmuje rolkę do 57 mm i wymaga materiału z czarnym znacznikiem.`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'mobilne-drukarki-etykiet', 'termiczne-drukarki-etykiet'], manufacturerId: 'tsc',
  tags: ['magazyn', 'logistyka', 'retail', 'outdoor'],
  images: ['/images/products/tsc-alpha40l-main.webp', '/images/products/tsc-alpha40l-front.webp', '/images/products/tsc-alpha40l-open.webp'],
  imageDescriptions: ['TSC Alpha-40L RFID — mobilna drukarka z ekranem i przyciskami, widok pod kątem', 'TSC Alpha-40L RFID — widok z przodu z oznaczeniem UHF RFID', 'TSC Alpha-40L RFID — otwarta drukarka z widocznym torem materiałów'],
  availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: { rodzajDruku: 'Termiczny bezpośredni; RAIN UHF RFID', rozdzielczosc: '203 dpi', szerokoscDruku: '104 mm', predkoscDruku: 'do 127 mm/s; kodowanie zależy od etykiety', szerokoscEtykiet: '50,8–112 mm' },
  specifications: [
    { name: 'Rozdzielczość', value: '203 dpi' },
    { name: 'Metoda druku', value: 'Termiczny bezpośredni' },
    { name: 'Szerokość druku', value: '104 mm' },
    { name: 'Prędkość nadruku', value: 'do 127 mm/s; RFID zależy od materiału i danych' },
    { name: 'RFID', value: 'RAIN UHF, GS1 EPC Gen2 v2 / ISO 18000-63; antena w stałym położeniu' },
    { name: 'Szerokość materiału', value: '50,8–112 mm z podkładem' },
    { name: 'Grubość materiału', value: '0,06–0,16 mm' },
    { name: 'Długość etykiety', value: '15,9–2794 mm' },
    { name: 'Średnica rolki', value: 'Do 67 mm' },
    { name: 'Gilza', value: '25,4 mm; 19,1 i 38,1 mm z adapterami' },
    { name: 'Minimalny rozstaw RFID', value: '15,9 mm; wymaga zgodnej wkładki i kalibracji' },
    { name: 'Obsługa etykiet', value: 'Odrywanie (tryb Tear Off)' },
    { name: 'Czujniki materiału', value: 'Przerwa między etykietami i czarny znacznik' },
    { name: 'Łączność', value: 'USB-C do komunikacji, NFC do parowania; Bluetooth lub Wi-Fi z Bluetooth zależnie od PN' },
    { name: 'Wyświetlacz', value: 'Kolorowy LCD 2,3 cala z przyciskami' },
    { name: 'Pamięć', value: '128 MB RAM i 128 MB Flash; microSD do 32 GB' },
    { name: 'Zegar RTC', value: 'Tak' },
    { name: 'Polecenia RFID', value: 'TSPL i wybrane polecenia ZPL2' },
    { name: 'Bateria', value: 'Li-ion Smart Battery 7,4 V, 6200 mAh; wymienna' },
    { name: 'Klasa ochrony', value: 'IP54 z wyłączeniem toru papieru' },
    { name: 'Odporność na upadek', value: '1,8 m; z opcjonalnym etui 2,5 m' },
    { name: 'Temperatura pracy', value: 'od −20 do 50°C; ładowanie od 0 do 40°C' },
    { name: 'Wymiary', value: '160 × 191 × 79 mm' },
    { name: 'Masa', value: 'około 1,025 kg z baterią' },
    { name: 'W zestawie', value: 'Bateria, zasilacz i przewód EU, klips do paska, adaptery gilz i skrócona instrukcja' },
    { name: 'Gwarancja', value: 'Drukarka 2 lata; bateria 1 rok; głowica 12 miesięcy / 25 km; wałek 12 miesięcy / 50 km — pierwszy osiągnięty limit' },
  ],
  variants: [
    { partNumber: 'A40LR-A001-0002', name: 'EU — Bluetooth', attributes: { 'Łączność bezprzewodowa': 'Bluetooth MFi' }, availability: 'unavailable' },
    { partNumber: 'A40LR-A001-1002', name: 'EU — Wi-Fi i Bluetooth', attributes: { 'Łączność bezprzewodowa': 'Wi-Fi 802.11a/b/g/n/ac + Bluetooth' }, availability: 'unavailable' },
  ],
  compatibleAccessories: [], relatedAccessories: accessories.map(a => a.id),
  applications: ['Kodowanie etykiet UHF w terenie na zasilaniu z baterii', 'Ponowne etykietowanie towaru RFID w sklepie'],
  faq: [
    { question: 'Jaka rolka zmieści się w TSC Alpha-40L RFID?', answer: 'Rolka o średnicy zewnętrznej do 67 mm. Gilza może mieć 25,4 mm albo, z adapterami z zestawu, 19,1 lub 38,1 mm.' },
    { question: 'Czy Alpha-40L RFID ładuje się przez USB-C?', answer: 'Nie. Gniazdo USB-C służy do komunikacji. Baterię ładuje zasilacz z zestawu, stacja dokująca albo zewnętrzna ładowarka baterii.' },
    { question: 'Co Alpha-40L RFID robi z etykietą, której nie zakodowała?', answer: 'Przekreśla ją. Liczniki zapisują liczbę etykiet poprawnych i przekreślonych.' },
  ],
  downloads: [
    { name: 'Karta Alpha-40L RFID i akcesoria (EN)', type: 'datasheet', url: datasheet, size: 'PDF' },
    { name: 'Instrukcja Alpha-40L RFID (EN)', type: 'manual', url: '/downloads/tsc-alpha-40l-rfid-instrukcja-en.pdf', size: 'PDF' },
    { name: 'Sterowniki i wsparcie TSC Alpha-40L RFID', type: 'driver', url: support, size: 'Online' },
  ],
  relatedProducts: ['zebra-zq521-rfid', 'zebra-zq630-plus-rfid', 'zebra-zq511-rfid'], createdAt: '2026-10-16', sameAs: support,
}
