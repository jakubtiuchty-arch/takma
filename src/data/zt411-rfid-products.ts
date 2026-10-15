import type { Product } from './products'
import { zt411RfidAccessoryIds } from './zt411-rfid-accessories'

// PN EU/ROW: Solutions Pathway, model 227842, 15.10.2026.
// Starsze SKU ...C0Z z oznaczeniem Pending End Of Sale nie są nową ofertą.
export const zt411RfidProduct: Product = {
  id: 'zebra-zt411-rfid',
  slug: 'zebra-zt411-rfid',
  name: 'Zebra ZT411 RFID',
  seoH1: 'Zebra ZT411 RFID',
  seoTitle: 'Zebra ZT411 RFID — przemysłowa drukarka etykiet UHF',
  seoDescription: 'Zebra ZT411 RFID drukuje i koduje etykiety RAIN UHF. Warianty 203 i 300 dpi, Wi-Fi 6 oraz On-metal. Sprawdź ceny i dostępność w TAKMA.',
  shortDescription: 'Przemysłowa drukarka Zebra ZT411 RFID drukuje i koduje etykiety RAIN UHF. Wybierz 203 lub 300 dpi, Wi-Fi 6 albo wersję On-metal.',
  description: `Zebra ZT411 RFID to przemysłowa drukarka i koder etykiet RAIN UHF RFID. Drukuje tekst, grafikę i kody kreskowe oraz zapisuje dane w układzie etykiety.

Wbudowany moduł RFID obsługuje EPC UHF Gen2 v2.1 i ISO/IEC 18000-63. Adaptacyjne kodowanie ułatwia kalibrację dla różnych wkładek RFID. Drukarka może przygotowywać etykiety z odstępem między kolejnymi wkładkami od 16 mm. Przed wdrożeniem sprawdź wybraną etykietę na docelowym produkcie.

W tej ofercie są wersje 203 i 300 dpi z modułem RFID ze sprzęgaczem w linii druku. Wersja 203 dpi drukuje z prędkością do 356 mm/s, a 300 dpi do 254 mm/s. Szerokość druku wynosi do 104 mm. Druk termotransferowy wymaga taśmy barwiącej; druk termiczny bezpośredni wymaga odpowiednich etykiet termoczułych.

Do standardowych etykiet RFID wybierz wariant T0. Do grubszych etykiet przeznaczonych na metal wybierz wariant T5 On-metal. Wersja On-metal obsługuje materiał o grubości do 1,5 mm. Zwykła ZT411 RFID obsługuje materiał do 0,25 mm. Tych wersji nie należy traktować jako zamiennych przy doborze etykiet i części.

Każdy pokazany wariant ma USB, dwa porty USB Host, RS-232 i Ethernet 10/100. Wariant ZT41142-T0EG0G0Z ma fabryczne Wi-Fi 6 i Bluetooth 5.3. Pozostałe warianty mają Bluetooth 4.1 i nie mają fabrycznego Wi-Fi. Wszystkie podane numery PN obejmują konfigurację EU/ROW i przewody zasilające EU oraz UK.

Kolorowy ekran dotykowy 4,3 cala służy do ustawiania druku, mediów i kodowania RFID. Metalowa obudowa oraz składana pokrywa ułatwiają pracę na stanowisku magazynowym lub produkcyjnym. Drukarka mieści rolkę etykiet o średnicy do 203 mm i taśmę barwiącą o długości 450 m.

Opcjonalne akcesoria obejmują odklejak, obcinacz, nawijak podkładu i moduły łączności. Elementy te są sprzedawane osobno. Obcinacz musi ciąć materiał między wkładkami RFID. Głowicę dobierz do rozdzielczości, generacji modułu RFID i wersji standardowej lub On-metal. Nowe głowice STRIPLINE nie są zamiennikami wszystkich głowic ZT411.

Gwarancja na drukarkę w regionie EMEA wynosi 24 miesiące. Obcinacz i części zużywające się mają ochronę ograniczoną do 12 miesięcy. Dla głowicy obowiązuje 12 miesięcy lub milion cali druku, zależnie od tego, co nastąpi wcześniej.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],
  manufacturerId: 'zebra',
  images: ['/images/products/zt411_1_s.png', '/images/products/zt411-rfid.jpg', '/images/products/zt411_3_s.png'],
  imageDescriptions: [
    'Zebra ZT411 RFID — drukarka przemysłowa z ekranem dotykowym',
    'Zebra ZT411 RFID — widok pod kątem, konfiguracja z odklejakiem',
    'Zebra ZT411 RFID — obudowa i komora materiałów drukarki',
  ],
  tags: ['magazyn', 'logistyka', 'produkcja'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  keyParams: {
    rodzajDruku: 'Termotransferowy lub termiczny bezpośredni; kodowanie RAIN UHF RFID',
    rozdzielczosc: '203 lub 300 dpi',
    predkoscDruku: 'do 356 mm/s (203 dpi) lub 254 mm/s (300 dpi)',
    szerokoscDruku: 'do 104 mm',
    szerokoscEtykiet: '25,4–114 mm przy odrywaniu',
  },
  specifications: [
    { name: 'Typ urządzenia', value: 'Przemysłowa drukarka i koder etykiet RAIN UHF RFID' },
    { name: 'Metoda druku', value: 'Termotransferowy lub termiczny bezpośredni' },
    { name: 'RFID', value: 'EPC UHF Gen2 v2.1, ISO/IEC 18000-63, RAIN RFID; sprzęgacz w linii druku' },
    { name: 'Rozdzielczość oferowanych wariantów', value: '203 lub 300 dpi — zależnie od PN' },
    { name: 'Prędkość druku', value: 'do 356 mm/s (203 dpi) lub 254 mm/s (300 dpi); prędkość kodowania zależy od etykiety i danych' },
    { name: 'Szerokość druku', value: 'do 104 mm' },
    { name: 'Szerokość mediów', value: '25,4–114 mm przy odrywaniu i cięciu; do 108 mm przy odklejaniu i nawijaniu' },
    { name: 'Minimalny odstęp wkładek RFID', value: '16 mm; wymaga doboru i kalibracji materiału' },
    { name: 'Grubość mediów', value: '0,058–0,25 mm; wersja T5 On-metal: do 1,5 mm' },
    { name: 'Średnica rolki etykiet', value: 'do 203 mm, gilza 76 mm' },
    { name: 'Taśma barwiąca', value: 'do 450 m; szerokość 51–110 mm; gilza 25,4 mm' },
    { name: 'Ekran', value: 'Kolorowy, dotykowy, 4,3 cala' },
    { name: 'Interfejsy przewodowe', value: 'USB 2.0, dwa porty USB Host, RS-232, Ethernet 10/100' },
    { name: 'Łączność bezprzewodowa', value: 'ZT41142-T0EG0G0Z: Wi-Fi 6 i Bluetooth 5.3; pozostałe PN: Bluetooth 4.1, bez fabrycznego Wi-Fi' },
    { name: 'Pamięć', value: '256 MB SDRAM i 512 MB Flash' },
    { name: 'Wymiary (gł. × szer. × wys.)', value: '495 × 269 × 324 mm' },
    { name: 'Masa', value: '16,33 kg' },
    { name: 'Zasilanie', value: '100–240 V AC, 50–60 Hz' },
    { name: 'W zestawie', value: 'Drukarka wybranego wariantu z modułem RFID, przewody zasilające EU i UK; etykiety i taśma sprzedawane osobno' },
    { name: 'Gwarancja EMEA', value: 'Drukarka: 24 miesiące; obcinacz i części zużywające się: 12 miesięcy; głowica: 12 miesięcy lub milion cali druku' },
  ],
  variants: [
    { partNumber: 'ZT41142-T0E00G0Z', name: '203 dpi — RFID', attributes: { 'Rozdzielczość': '203 dpi', 'Wersja RFID': 'Standardowa', 'Łączność': 'Ethernet, USB, RS-232, Bluetooth 4.1' }, availability: 'unavailable' },
    { partNumber: 'ZT41143-T0E00G0Z', name: '300 dpi — RFID', attributes: { 'Rozdzielczość': '300 dpi', 'Wersja RFID': 'Standardowa', 'Łączność': 'Ethernet, USB, RS-232, Bluetooth 4.1' }, availability: 'unavailable' },
    { partNumber: 'ZT41142-T0EG0G0Z', name: '203 dpi — RFID, Wi-Fi 6', attributes: { 'Rozdzielczość': '203 dpi', 'Wersja RFID': 'Standardowa', 'Łączność': 'Ethernet, USB, RS-232, Wi-Fi 6, Bluetooth 5.3' }, availability: 'unavailable' },
    { partNumber: 'ZT41142-T5E00G0Z', name: '203 dpi — RFID On-metal', attributes: { 'Rozdzielczość': '203 dpi', 'Wersja RFID': 'On-metal', 'Łączność': 'Ethernet, USB, RS-232, Bluetooth 4.1' }, availability: 'unavailable' },
    { partNumber: 'ZT41143-T5E00G0Z', name: '300 dpi — RFID On-metal', attributes: { 'Rozdzielczość': '300 dpi', 'Wersja RFID': 'On-metal', 'Łączność': 'Ethernet, USB, RS-232, Bluetooth 4.1' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    'Wersja RFID': 'Standardowa obsługuje zwykłe etykiety RFID. Wersja On-metal ma konstrukcję do grubszych etykiet na metal, do 1,5 mm. Dobierz etykietę do wersji drukarki.',
    'Łączność': 'Każdy PN ma także dwa porty USB Host. Fabryczne Wi-Fi 6 i Bluetooth 5.3 ma tylko ZT41142-T0EG0G0Z.',
  },
  applications: ['Druk i kodowanie etykiet RFID na towary i opakowania', 'Oznaczanie pojemników zwrotnych i wyposażenia', 'Przygotowanie etykiet RFID dla produkcji i magazynu', 'Znakowanie narzędzi i urządzeń na metalu — wersja On-metal i odpowiednie etykiety'],
  compatibleAccessories: [],
  relatedAccessories: zt411RfidAccessoryIds,
  faq: [
    { question: 'Czym ZT411 RFID różni się od zwykłej ZT411?', answer: 'ZT411 RFID ma moduł do radiowego zapisu i odczytu układu etykiety podczas jej przygotowania. Zwykła ZT411 bez modułu RFID wykonuje tylko nadruk. Ta karta obejmuje drukarki z fabrycznym modułem RFID.' },
    { question: 'Kiedy wybrać wersję On-metal?', answer: 'Wybierz ją do zgodnych, grubszych etykiet RFID przeznaczonych na metal. Warianty T5 obsługują materiał do 1,5 mm. Przed zakupem sprawdź konkretną etykietę oraz jej zgodność z drukarką i oznaczanym przedmiotem.' },
    { question: 'Który wariant ma Wi-Fi 6?', answer: 'W tej ofercie fabryczne Wi-Fi 6 i Bluetooth 5.3 ma ZT41142-T0EG0G0Z. Pozostałe PN mają Bluetooth 4.1 oraz łączność przewodową. Moduły Wi-Fi do rozbudowy są sprzedawane osobno.' },
    { question: 'Czy drukarka może odczytać zawartość całej półki?', answer: 'Nie. Drukarka koduje i sprawdza etykietę w swoim torze materiałów. Do inwentaryzacji półki potrzebujesz czytnika UHF RFID i odpowiedniego oprogramowania.' },
    { question: 'Czy każda głowica do ZT411 pasuje do ZT411 RFID?', answer: 'Nie. Sprawdź rozdzielczość, generację modułu RFID oraz wersję standardową lub On-metal. Głowice P1105147-304 i P1105147-306 są przeznaczone do wersji RFID STRIPLINE, odpowiednio 203 i 300 dpi.' },
    { question: 'Czy etykiety i taśma są w zestawie?', answer: 'Nie. Etykiety RFID i taśmę barwiącą dobierz osobno. Do druku termicznego bezpośredniego taśma nie jest potrzebna. Odklejak, obcinacz i nawijak podkładu są opcjonalnymi akcesoriami.' },
  ],
  downloads: [
    { name: 'Karta katalogowa ZT400 RFID (EN)', type: 'datasheet', url: 'https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/zt400-rfid-series-spec-sheet-en-us.pdf', size: 'PDF' },
    { name: 'Katalog głowic i akcesoriów do drukarek przemysłowych Zebra (EN)', type: 'pdf', url: 'https://www.zebra.com/content/dam/zebra_dam/en/guide/configuration-and-accessories/print-head-guide-accessories-en-us.pdf', size: 'PDF' },
    { name: 'Sterowniki i instrukcje ZT411 RFID', type: 'driver', url: 'https://www.zebra.com/us/en/support-downloads/printers/industrial/zt411.html', size: 'Online' },
    { name: 'Instrukcja obsługi ZT411 (PL)', type: 'manual', url: 'https://www.serwis-zebry.pl/instrukcje/zebra-zt411/instrukcja-po-polsku', size: 'Online' },
  ],
  relatedProducts: ['zebra-zd621r', 'zebra-zt411'],
  createdAt: '2026-10-15',
  sameAs: 'https://www.zebra.com/us/en/products/printers/industrial/zt400-series/zt411-rfid.html',
}
