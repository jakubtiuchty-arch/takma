import type { Product } from './products'

const accessoryGuide = 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/mobile-printer-guide-accessory-en-us.pdf'

export const zq511RfidAccessoryIds = [
  'zebra-ac-adapter-zq5', 'zebra-battery-zq5-standard', 'zebra-charger-1slot-zq5', 'zebra-charger-3slot-zq5',
  'zebra-battery-zq5-extended', 'zebra-soft-case-zq5', 'zebra-exoskeleton-zq5', 'zebra-zq630-charger-6',
  'zebra-zq5-vehicle-cradle', 'zebra-zq5-power-station-4', 'zebra-zq5-rugged-strap', 'zebra-zq5-mounting-plate',
  'zebra-usb-cable-zq5', 'zebra-car-charger-zq5', 'zebra-cleaning-pens-zd621r',
]

export const zq511RfidAccessorySlugs = [
  'zebra-zasilacz-ac-zq5-zq6', 'zebra-bateria-3250mah-zq511-zq521', 'zebra-ladowarka-1-gniazdowa-zq5-zq6',
  'zebra-ladowarka-3-gniazdowa-zq5-zq6', 'zebra-bateria-6500mah-zq511-zq521', 'zebra-etui-pasek-zq511', 'zebra-egzoszkielet-zq511',
  'zebra-ladowarka-6-baterii-sac-mpp-6bcheu1-01', 'zebra-stacja-pojazdowa-p1063406-062', 'zebra-stacja-4-drukarek-p1063406-053',
  'zebra-pasek-na-ramie-p1063406-035', 'zebra-plyta-montazowa-p1063406-042', 'zebra-kabel-usb-twist-lock-zq5-zq6',
  'zebra-zasilacz-samochodowy-zq5', 'zebra-pisaki-czyszczace-105950-035',
]

export const zq511RfidProduct: Product = {
  id: 'zebra-zq511-rfid', slug: 'zebra-zq511-rfid', name: 'Zebra ZQ511 RFID', seoH1: 'Zebra ZQ511 RFID',
  seoTitle: 'Zebra ZQ511 RFID — drukarka RFID UHF 203 dpi',
  seoDescription: 'Zebra ZQ511 RFID – mobilna drukarka RFID UHF 203 dpi. Nadruk 72 mm, materiał z czarnym znacznikiem 35–80 mm, rolka 51 mm, IP54 i upadek z 2 m.',
  shortDescription: 'Mobilna drukarka i koder RAIN UHF RFID. Druk do 72 mm, Wi-Fi 802.11ac, Bluetooth 4.1, bateria 3250 mAh i obudowa IP54.',
  description: `Zebra ZQ511 RFID to mobilna drukarka RFID UHF do etykiet o szerokości nadruku do 72 mm. Koduje znaczniki zgodne z EPC Gen 2 v2, ISO/IEC 18000-63 i RAIN RFID. Drukuje termicznie bezpośrednio, bez taśmy barwiącej.

## Materiał z czarnym znacznikiem 35–80 mm

Wersja RFID wymaga etykiet RFID z czarnym znacznikiem i nie wykrywa przerw. Materiał ma 35–80 mm szerokości i 0,058–0,16 mm grubości. Rolka może mieć do 51 mm średnicy. Wkładki mogą występować co 16 mm, a wydruk może mieć do 990 mm długości.

## SGTIN-96 i polecenia ZPL RFID

Kodowanie adaptacyjne upraszcza konfigurację RFID. Drukarka zapisuje dane w standardach SGTIN-96, DSGTIN+, GS1 TDS 2.0 i RAIN ISO CIN. Polecenia ZPL RFID są zgodne z innymi drukarkami RFID Zebra. Maksymalna prędkość wynosi 127 mm/s w trybie Draft.

## MIL-STD 810G, IP54 i bateria 3250 mAh

Drukarka spełnia wymagania MIL-STD 810G i wytrzymuje wielokrotne upadki z 2 m na beton. Opcjonalny [egzoszkielet](/produkt/zebra-egzoszkielet-zq511) podnosi tę wartość do 3 m i zwiększa szczelność do IP65. Bateria PowerPrecision+ ma 3250 mAh, a opcjonalna 6500 mAh. Masa z baterią standardową wynosi 0,63 kg. Zegar RTC mają tylko modele z WLAN.

Szersza [Zebra ZQ521 RFID](/produkt/zebra-zq521-rfid) drukuje do 104 mm i przyjmuje rolkę do 57 mm.`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'mobilne-drukarki-etykiet', 'termiczne-drukarki-etykiet'], manufacturerId: 'zebra',
  images: ['/images/products/zq511-rfid-framed.webp'], imageDescriptions: ['Zebra ZQ511 RFID — mobilna drukarka z oznaczeniem UHF RFID, widok z przodu'],
  tags: ['magazyn', 'logistyka', 'outdoor', 'retail'], availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: { rodzajDruku: 'Termiczny bezpośredni; kodowanie RAIN UHF RFID', rozdzielczosc: '203 dpi', predkoscDruku: 'do 127 mm/s z Draft Mode', szerokoscDruku: 'do 72 mm', szerokoscEtykiet: '35–80 mm; czarny znacznik' },
  specifications: [
    { name: 'Typ urządzenia', value: 'Mobilna drukarka i koder etykiet RAIN UHF RFID' },
    { name: 'Oferowany PN', value: 'ZQ51-BUW030E-00 — EMEA, bateria standardowa' },
    { name: 'RFID', value: 'UHF EPC Gen2 v2, ISO/IEC 18000-63, RAIN RFID; Adaptive Encoding' },
    { name: 'Rodzaj druku', value: 'Termiczny bezpośredni; bez taśmy barwiącej' },
    { name: 'Rozdzielczość', value: '203 dpi' },
    { name: 'Szerokość druku', value: 'do 72 mm' },
    { name: 'Prędkość nadruku', value: 'do 127 mm/s z Draft Mode; kodowanie może zmniejszyć wydajność' },
    { name: 'Materiał', value: 'Szerokość 35–80 mm; grubość 0,058–0,16 mm; czarny znacznik; brak wykrywania przerw' },
    { name: 'Średnica rolki', value: 'do 51 mm' },
    { name: 'Długość wydruku', value: 'Do 990 mm' },
    { name: 'Odstęp wkładek RFID', value: 'Od 16 mm dla zgodnych etykiet po kalibracji' },
    { name: 'Łączność', value: 'Wi-Fi 802.11ac 2,4/5 GHz, Bluetooth 4.1 Classic i BLE' },
    { name: 'USB', value: 'USB 2.0 On-The-Go, 12 Mb/s; złącze micro-B' },
    { name: 'NFC', value: 'Print Touch do parowania; bez kodowania NFC' },
    { name: 'Bateria standardowa', value: 'PowerPrecision+ Li-Ion, nominalnie 3250 mAh; wymienna' },
    { name: 'Bateria opcjonalna', value: '6500 mAh' },
    { name: 'Ekran', value: 'LCD z ikonami stanu' },
    { name: 'Pamięć', value: '256 MB RAM, 512 MB Flash; użytkownik: 8 MB RAM i 64 MB Flash' },
    { name: 'System i języki', value: 'Link-OS; CPCL, ZPL, ZBI 2.x' },
    { name: 'Klasa ochrony', value: 'IP54; IP65 z opcjonalnym egzoszkieletem' },
    { name: 'Odporność na upadki', value: '2 m na beton; do 3 m z egzoszkieletem' },
    { name: 'Temperatura pracy', value: '−20 do 55°C' },
    { name: 'Wymiary (dł. × szer. × wys.)', value: '150 × 120 × 62 mm' },
    { name: 'Masa z baterią standardową', value: 'Około 0,63 kg' },
    { name: 'W zestawie', value: 'Drukarka z koderem RFID i bateria standardowa' },
    { name: 'Do kupienia osobno', value: 'Zasilacz lub ładowarka baterii, etykiety RFID i dodatkowe wyposażenie' },
    { name: 'Gwarancja', value: 'Drukarka 2 lata od daty wysyłki; bateria 1 rok; głowica 6 miesięcy' },
  ],
  variants: [{ partNumber: 'ZQ51-BUW030E-00', name: 'RFID — Wi-Fi, Bluetooth, bateria, EMEA', attributes: {}, availability: 'unavailable' }],
  applications: ['Mobilne kodowanie etykiet UHF z czarnym znacznikiem', 'Etykiety RFID w usługach kurierskich i pocztowych'],
  compatibleAccessories: [], relatedAccessories: zq511RfidAccessoryIds,
  faq: [
    { question: 'Czy ZQ511 RFID obsługuje etykiety z przerwą?', answer: 'Nie. Wersja RFID wymaga materiału z czarnym znacznikiem. Czujnik ma stałe, środkowe położenie.' },
    { question: 'Jak ładować ZQ511 RFID?', answer: 'Zasilacz AC ładuje baterię w drukarce lub w stacji dokującej. Wyjętą baterię ładuje ładowarka 1- lub 3-gniazdowa. Zasilacza nie ma w PN ZQ51-BUW030E-00.' },
    { question: 'Jakie złącze USB ma ZQ511 RFID?', answer: 'USB 2.0 On-The-Go ze złączem micro-B i opcjonalnym odprężaczem. Interfejs pracuje z prędkością 12 Mb/s.' },
  ],
  downloads: [
    { name: 'Karta katalogowa Zebra ZQ511 / ZQ521 RFID (PL)', type: 'datasheet', url: '/datasheets/zebra-zq511-zq521-rfid-karta-pl.pdf', size: 'PDF' },
    { name: 'Karta katalogowa ZQ511/ZQ521 RFID (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zq511-zq521-rfid-spec-sheet-en-us.pdf', size: 'PDF' },
    { name: 'Katalog akcesoriów do drukarek mobilnych Zebra (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/mobile-printer-guide-accessory-en-us.pdf', size: 'PDF' },
    { name: 'Sterowniki, instrukcje i wsparcie ZQ511', type: 'driver', url: 'https://www.zebra.com/us/en/support-downloads/printers/mobile/zq511.html', size: 'Online' },
  ],
  relatedProducts: ['zebra-zq511', 'zebra-zq521-rfid', 'zebra-zq630-plus-rfid'], createdAt: '2026-10-15',
  sameAs: 'https://www.zebra.com/ap/en/products/printers/mobile/zq500/zq511-rfid.html',
}
