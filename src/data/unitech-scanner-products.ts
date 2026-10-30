import type { Product } from './products'

// Skanery przewodowe Unitech MS852, MS852 Plus, MS852 LR, MS852 DPM ESD, MS852 Plus ESD, MS851 ESD, MS838, MS282e, MS836, MS250 i TS100 (30.10.2026).
// Warianty tylko dla PN z ceną w /api/stock; priceFrom to wartość startowa, ceny i stany na karcie aktualizuje API.
// Wersje europejskie `-SG` (standard) i `-LG` (ESD-safe) nie przełączają trybu automatycznie w podstawce.
// Dokumentacja: docs/catalog/unitech-skanery-2026-10-30/S1.md

const MS85X_AKCESORIA = ['unitech-ms85x-podstawka', 'unitech-ms85x-uchwyt-biurkowy', 'unitech-ms85x-etui', 'unitech-ms85x-przewod-usb']

function plik(name: string, file: string, size: string, type: 'datasheet' | 'manual' = 'manual') {
  return { name, type, url: `/downloads/unitech/${file}`, size }
}

const ms852: Product = {
  id: 'unitech-ms852',
  slug: 'unitech-ms852',
  name: 'Unitech MS852',
  seoH1: 'Unitech MS852',
  shortDescription: 'Unitech MS852 — przewodowy skaner kodów kreskowych 2D do kas w handlu i hotelarstwie: odczyt kodów z ekranów telefonów, OCR, masa 147 g, obudowa IP42.',
  seoTitle: 'Skaner kodów kreskowych Unitech MS852 — czytnik 2D USB do kasy',
  seoDescription: 'Przewodowy skaner kodów kreskowych Unitech MS852: czytnik kodów 2D z OCR, odczyt kodów z ekranów telefonów, 147 g, IP42, upadki z 2,1 m. Skaner Unitech MS852, MS852 Unitech, skaner 2D do kasy. PN: MS852-AUCB00-SG.',
  description: `Unitech MS852 to przewodowy skaner 2D do stanowisk kasowych. W sklepie obsługuje karty lojalnościowe, płatności mobilne i elektroniczne kupony, a poza handlem pracuje w hotelarstwie i administracji publicznej. Czyta etykiety drukowane, kody pokazywane na telefonach, nadruki uszkodzone lub blade, a także tekst OCR.

Optykę tworzą sensor CMOS 1280 × 960 z migawką rolling shutter, zielony celownik LED 610 nm i jedna dioda o ciepłej białej barwie. Lista symboli obejmuje DotCode, Han Xin, Mailmark, UPU FICS i UK Postal.

Zasięg zależy od rodzaju kodu. UPC 100% jest czytany w przedziale 4,6–49,5 cm, QR 20 mil w przedziale 3,8–29,2 cm, a Data Matrix o module 10 mil między 7,4 a 21,6 cm. Kod może być pochylony lub odchylony o ±60° i obrócony w dowolnym kierunku.

Bez przewodu skaner waży 147 g. Mocniejszy brzęczyk i jaśniejsze diody sygnalizują odczyt nawet w ciemnym miejscu. Po podłączeniu do portu USB skaner działa od razu, bez instalowania oprogramowania; w pracy pobiera 235 mA, w czuwaniu 60 mA.

W pudełku MS852-AUCB00-SG są skaner i przewód. Pracę bez trzymania w dłoni umożliwiają tryb prezentacyjny, włączany kodem konfiguracyjnym, oraz osobna podstawka.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-przewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS852',
  priceFrom: 668.34,
  images: [
    '/images/products/MS852-AUCB00-SG.png',
    '/images/products/MS852-AUCB00-SG-2.png',
    '/images/products/MS852-AUCB00-SG-3.png',
    '/images/products/MS852-AUCB00-SG-4.png',
  ],
  imageDescriptions: [
    'Unitech MS852 — czarny skaner 2D widziany z przodu pod kątem, okno odczytu i żółty spust',
    'Unitech MS852 — widok z przodu na okno odczytu, rękojeść i żółty spust',
    'Unitech MS852 — widok z tyłu na głowicę i wąską rękojeść',
    'Unitech MS852 — widok z tyłu na głowicę ze znakiem unitech i rękojeść',
  ],
  tags: ['retail'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner 2D (imager), przewodowy' },
    { name: 'Matryca', value: 'CMOS 1280 × 960 pikseli, migawka rolling shutter' },
    { name: 'Celownik i oświetlenie', value: 'Celownik: zielona dioda LED 610 nm; oświetlenie: jedna ciepła biała dioda LED' },
    { name: 'Kody 1D', value: 'UPC/EAN/JAN, Code 128, Code 39, Code 93, Code 11, Interleaved 2 of 5, Discrete 2 of 5, Codabar, MSI, Chinese 2 of 5, Matrix 2 of 5, Inverse 1D, GS1 DataBar, kody złożone' },
    { name: 'Kody 2D', value: 'QR Code, DotCode, Data Matrix, Aztec Code, PDF417, Macro PDF417, Micro PDF417, MaxiCode, Codablock A, Codablock F, GS1 Composite, Han Xin' },
    { name: 'Kody pocztowe i OCR', value: 'Australia Post, UK Postal, Japan Postal, Netherlands KIX, Korea Post, US Postnet, US Planet, USPS 4CB, UPU FICS, Mailmark; OCR' },
    { name: 'Rozdzielczość optyczna', value: '5,0 mil (Code 39), 6,6 mil (PDF417); minimalny kontrast druku 20%' },
    { name: 'Zasięg (przykłady)', value: 'UPC 100%: 4,6–49,5 cm; Code 39 5 mil: 6,1–24,1 cm; QR 20 mil: 3,8–29,2 cm; Data Matrix 10 mil: 7,4–21,6 cm' },
    { name: 'Kąty odczytu', value: 'Pochylenie ±60°, odchylenie ±60°, obrót 0–360°' },
    { name: 'Interfejsy', value: 'USB' },
    { name: 'Zasilanie', value: '5 V DC ±10%; pobór prądu: praca 235 mA, czuwanie 60 mA' },
    { name: 'Klasa ochrony', value: 'IP42' },
    { name: 'Odporność na upadki', value: '2,1 m na beton (sam skaner)' },
    { name: 'Odporność na wyładowania elektrostatyczne', value: 'Sprawny po wyładowaniu 8 kV kontaktowym i 15 kV w powietrzu' },
    { name: 'Temperatura pracy', value: 'Od −10°C do +50°C' },
    { name: 'Temperatura przechowywania', value: 'Od −20°C do +60°C' },
    { name: 'Wilgotność', value: '95% bez kondensacji' },
    { name: 'Wymiary i masa', value: '87,8 × 71,6 × 177,7 mm; 147 g bez przewodu' },
    { name: 'Trwałość spustu', value: '10 mln naciśnięć' },
    { name: 'Zawartość zestawu', value: 'Skaner, przewód USB' },
    { name: 'Elementy poza zestawem', value: 'Podstawka hands-free' },
    { name: 'Certyfikaty', value: 'CE, FCC, BSMI, VCCI' },
    { name: 'Gwarancja producenta', value: '60 miesięcy' },
    { name: 'Part Number', value: 'MS852-AUCB00-SG' },
  ],
  applications: ['Kasy w handlu: karty lojalnościowe, płatności mobilne, e-kupony', 'Hotelarstwo i gastronomia', 'Administracja publiczna'],
  variants: [
    { partNumber: 'MS852-AUCB00-SG', name: 'MS852, USB', attributes: {}, priceFrom: 668.34, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: MS85X_AKCESORIA,
  relatedProducts: ['unitech-ms852-plus', 'unitech-ms838', 'unitech-ms282e', 'zebra-ds2208', 'newland-hr23-dorada', 'datalogic-quickscan-qd2590'],
  downloads: [
    plik('Karta katalogowa Unitech MS852 (EN)', 'unitech-ms852-karta-katalogowa-en.pdf', '1,1 MB', 'datasheet'),
    plik('Instrukcja obsługi Unitech MS852 (EN)', 'unitech-ms852-instrukcja-en.pdf', '5,3 MB'),
  ],
  faq: [
    {
      question: 'Czy MS852 przełącza tryb pracy po odłożeniu do podstawki?',
      answer: 'Nie. Wersja MS852-AUCB00-SG nie ma czujnika przełączającego tryb w podstawce. Tryb prezentacyjny włącza się kodem konfiguracyjnym z instrukcji obsługi. Podstawka [Unitech 5200-900009G](/produkt/unitech-ms85x-podstawka) utrzymuje skaner na blacie.',
    },
    {
      question: 'Czy Unitech MS852 działa z kasami opartymi na OPOS?',
      answer: 'Tak. Skaner obsługuje OPOS od wersji oprogramowania sprzętowego PAADLS00-002-R00.',
    },
    {
      question: 'Dlaczego celownik MS852 gaśnie w trybie prezentacyjnym?',
      answer: 'W trybach Presentation (Blink) i Auto Aim with Illumination celownik gaśnie po około 10 minutach skanowania. To mechanizm ochrony termicznej silnika skanującego, a nie usterka.',
    },
    {
      question: 'Czy MS852-AUCB00-SG ma wyjście RS-232?',
      answer: 'Nie. Drugi znak w numerze PN oznacza interfejs: litera U to USB, a litera R to RS-232. Oferowana wersja ma USB.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS852?',
      answer: 'Odczyt w ruchu i kody Digimarc zapewnia [Unitech MS852 Plus](/produkt/unitech-ms852-plus). Wersję z interfejsem RS-232 i klasę IP52 oferuje [Unitech MS838](/produkt/unitech-ms838). Smukłą obudowę o masie 125 g ma [Unitech MS282e](/produkt/unitech-ms282e). Podobne zadania przy kasie wykonują też [Zebra DS2208](/produkt/zebra-ds2208) i [Newland HR23 Dorada](/produkt/newland-hr23-dorada).',
    },
  ],
  createdAt: '2026-10-30',
}

const ms852Plus: Product = {
  id: 'unitech-ms852-plus',
  slug: 'unitech-ms852-plus',
  name: 'Unitech MS852 Plus',
  seoH1: 'Unitech MS852 Plus',
  shortDescription: 'Unitech MS852 Plus — przewodowy skaner kodów 2D z migawką global shutter: odczyt w ruchu, DotCode, Digimarc i OCR, interfejs USB.',
  seoTitle: 'Skaner 2D Unitech MS852 Plus — global shutter, DotCode, Digimarc',
  seoDescription: 'Skaner kodów kreskowych Unitech MS852 Plus: czytnik 2D z migawką global shutter, odczyt kodów w ruchu, DotCode, Digimarc i OCR, USB, IP42. Skaner Unitech MS852 Plus, MS852+ Unitech, skaner 2D do produkcji i kas. PN: MS852-VUCB00-SG, MS852-ZUCB00-SG.',
  description: `Unitech MS852 Plus czyta kody w ruchu. Matryca 1280 × 800 z migawką global shutter toleruje przesuwanie skanera i kodu, więc skaner pracuje także tam, gdzie towar nie stoi w miejscu.

Trzy funkcje wykraczają poza zwykłe etykiety: OCR, np. strony paszportu, DotCode nanoszony na opony i paczki papierosów, a także Digimarc na specjalnych opakowaniach w handlu. Skaner czyta też kody Grid Matrix i Han Xin. Rozdzielczość kodów 1D wynosi 3 mil, a praca w świetle słonecznym jest możliwa do 100 000 lx.

Zastosowania to bilety mobilne na lotniskach, kasy z kuponami mobilnymi, logistyka i produkcja. Dla Code 39 20 mil czytelność utrzymuje się do 80 cm od okna.

Skaner pobiera 252 mA w pracy i 77 mA w czuwaniu. Obudowa ma klasę ochrony IP42 i wytrzymuje upadek z 2,1 m. Kody pocztowe obejmują m.in. Australian Post, British Post i Postnet.

Karta obejmuje dwa numery PN: MS852-VUCB00-SG i MS852-ZUCB00-SG. Każdy ma w zestawie przewód USB, a skaner waży 165 g. Żaden z nich nie przełącza trybu pracy po włożeniu do podstawki; tryb prezentacyjny włącza się kodem konfiguracyjnym.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-przewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS852PLUS',
  priceFrom: 889.91,
  images: [
    '/images/products/MS852-VUCB00-SG.png',
    '/images/products/MS852-VUCB00-SG-2.png',
    '/images/products/MS852-VUCB00-SG-3.png',
    '/images/products/MS852-VUCB00-SG-4.png',
  ],
  imageDescriptions: [
    'Unitech MS852 Plus — czarny skaner 2D widziany z przodu pod kątem, otwarte okno odczytu i żółty spust',
    'Unitech MS852 Plus — widok z boku na rękojeść, spust i górną część głowicy',
    'Unitech MS852 Plus — widok z góry pod kątem na głowicę i rękojeść',
    'Unitech MS852 Plus — skaner z zielonym wskaźnikiem odczytu na głowicy',
  ],
  tags: ['retail', 'produkcja', 'logistyka'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner 2D (imager), przewodowy' },
    { name: 'Matryca', value: '1280 × 800 pikseli, migawka global shutter, tolerancja ruchu' },
    { name: 'Celownik i oświetlenie', value: 'Celownik: czerwony laser; oświetlenie: białe LED' },
    { name: 'Kody 1D', value: 'Codabar, Code 11, Code 128, Code 2 of 5, Code 39, Code 93 i 93i, EAN/JAN-13, EAN/JAN-8, IATA Code 2 of 5, Interleaved 2 of 5, Matrix 2 of 5, MSI, GS1 DataBar, UPC-A, UPC-E, Code 32 (PARAF), TLC39' },
    { name: 'Kody 2D', value: 'Codablock A, Codablock F, PDF417, MicroPDF417, Aztec Code, Data Matrix, MaxiCode, QR Code, Han Xin, Grid Matrix, DotCode' },
    { name: 'Kody pocztowe, OCR i Digimarc', value: 'Australian Post, British Post, Canadian Post, China Post, Japanese Post, Korea Post, Netherlands Post, Planet Code, Postnet; OCR; Digimarc' },
    { name: 'Rozdzielczość optyczna', value: '1D: 3 mil (0,075 mm); minimalny kontrast druku 20%' },
    { name: 'Zasięg (przykłady)', value: 'UPC 13 mil: 3,4–57,3 cm; Code 39 20 mil: 3,5–80 cm; Code 128 15 mil: 3,4–65 cm; Data Matrix 10 mil: 7,2–29,7 cm; QR 15 mil: 3,3–39 cm' },
    { name: 'Odporność na światło otoczenia', value: 'Do 100 000 lx (światło słoneczne)' },
    { name: 'Kąty odczytu', value: 'Pochylenie ±60°, odchylenie ±60°, obrót 360°' },
    { name: 'Interfejsy', value: 'USB' },
    { name: 'Zasilanie', value: '4–5,5 V DC; pobór prądu: praca 252 mA, czuwanie 77 mA' },
    { name: 'Klasa ochrony', value: 'IP42' },
    { name: 'Odporność na upadki', value: '2,1 m na beton (sam skaner)' },
    { name: 'Odporność na wyładowania elektrostatyczne', value: 'Sprawny po wyładowaniu 8 kV kontaktowym i 15 kV w powietrzu' },
    { name: 'Temperatura pracy', value: 'Od −10°C do +50°C' },
    { name: 'Temperatura przechowywania', value: 'Od −40°C do +70°C' },
    { name: 'Wilgotność', value: '95% bez kondensacji' },
    { name: 'Wymiary i masa', value: '87,8 × 71,6 × 177,7 mm; 165 g' },
    { name: 'Trwałość spustu', value: '10 mln naciśnięć' },
    { name: 'Zawartość zestawu', value: 'Skaner, przewód USB' },
    { name: 'Elementy poza zestawem', value: 'Podstawka hands-free' },
    { name: 'Certyfikaty', value: 'CE, FCC, BSMI, VCCI' },
    { name: 'Gwarancja producenta', value: '60 miesięcy' },
    { name: 'Part Number', value: 'MS852-VUCB00-SG, MS852-ZUCB00-SG' },
  ],
  applications: ['Bilety mobilne na lotniskach', 'Kasy i kupony mobilne w handlu', 'Produkcja i logistyka', 'Odczyt DotCode na oponach i paczkach papierosów'],
  variants: [
    { partNumber: 'MS852-VUCB00-SG', name: 'MS852 Plus, USB', attributes: {}, priceFrom: 889.91, availability: 'unavailable' },
    { partNumber: 'MS852-ZUCB00-SG', name: 'MS852 Plus, USB', attributes: {}, priceFrom: 937.57, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: MS85X_AKCESORIA,
  relatedProducts: ['unitech-ms852', 'unitech-ms838', 'unitech-ms282e', 'zebra-ds4608', 'newland-hr33-marlin', 'honeywell-xenon-ultra-1960'],
  downloads: [
    plik('Karta katalogowa Unitech MS852 Plus (EN)', 'unitech-ms852-plus-karta-katalogowa-en.pdf', '868 KB', 'datasheet'),
    plik('Instrukcja obsługi Unitech MS852 Plus (EN)', 'unitech-ms852-plus-instrukcja-en.pdf', '9,1 MB'),
    plik('Skrócona instrukcja Unitech MS852 Plus (EN)', 'unitech-ms852-plus-skrocona-instrukcja-en.pdf', '1,2 MB'),
  ],
  faq: [
    {
      question: 'Czym MS852 Plus różni się od MS852?',
      answer: 'MS852 Plus ma matrycę 1280 × 800 z migawką global shutter i tolerancją ruchu, a [MS852](/produkt/unitech-ms852) matrycę 1280 × 960 z migawką rolling shutter. Tylko MS852 Plus czyta kody Digimarc. Waży 165 g, a MS852 147 g.',
    },
    {
      question: 'Czym różnią się numery MS852-VUCB00-SG i MS852-ZUCB00-SG?',
      answer: 'Oba numery oznaczają MS852 Plus z interfejsem USB i przewodem USB w zestawie. Różnice w wykonaniu potwierdzamy przed realizacją zamówienia.',
    },
    {
      question: 'Do czego służy odczyt DotCode?',
      answer: 'DotCode to kod złożony z punktów, nanoszony m.in. na opony i paczki papierosów. MS852 Plus odczytuje ten kod.',
    },
    {
      question: 'Czy MS852 Plus ma interfejs RS-232?',
      answer: 'Nie. Obie wersje w ofercie mają interfejs USB; wersje RS-232 mają w numerze PN literę R w miejscu litery U.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS852 Plus?',
      answer: 'Ta sama optyka w wersji ESD to [Unitech MS852 Plus ESD](/produkt/unitech-ms852-plus-esd). Zasięg do 21 m ma [Unitech MS852 LR](/produkt/unitech-ms852-lr). Do porównania z innymi markami nadają się [Zebra DS4608](/produkt/zebra-ds4608), [Newland HR33 Marlin](/produkt/newland-hr33-marlin) i [Honeywell Xenon Ultra 1960](/produkt/honeywell-xenon-ultra-1960).',
    },
  ],
  createdAt: '2026-10-30',
}

const ms852Lr: Product = {
  id: 'unitech-ms852-lr',
  slug: 'unitech-ms852-lr',
  name: 'Unitech MS852 LR',
  seoH1: 'Unitech MS852 LR',
  shortDescription: 'Unitech MS852 LR — przewodowy skaner 2D dalekiego zasięgu: odczyt kodów z odległości od 7,6 cm do 21 m, przewód USB i przewód Y w zestawie, praca od −20°C.',
  seoTitle: 'Skaner dalekiego zasięgu Unitech MS852 LR — kody 2D do 21 m',
  seoDescription: 'Skaner kodów kreskowych Unitech MS852 LR: czytnik 2D dalekiego zasięgu, odczyt z odległości od 7,6 cm do 21 m, praca od −20°C, USB, przewód Y w zestawie. Skaner Unitech MS852 LR do magazynu i wysokich regałów, MS852 LR Unitech. PN: MS852-OUCB00-SG.',
  description: `Unitech MS852 LR odczytuje kody z odległości od 7,6 cm do 21 m. Służy do etykiet na paletach i półkach w magazynie. Najdalej, do 20,9 m, sięga odczyt kodu QR 100 mil. Papierowa etykieta Code 39 100 mil jest czytelna z 17,8 m, a Code 128 15 mil z 2,5 m.

Sensor 1280 × 800 pikseli z migawką global shutter współpracuje z celownikiem 655 nm i oświetleniem Hyper Red 660 nm. Skaner odczytuje też OCR, DotCode oraz kody z ekranów telefonów, a dzięki tolerancji ruchu czyta kod także w trakcie przesuwania.

Sam skaner przetrwa upadek na beton z 1,8 m; po założeniu etui 386793G wysokość rośnie do 2,2 m. Zakres pracy zaczyna się od −20°C i kończy na +50°C. W trakcie odczytu pobór prądu sięga 710 mA.

W zestawie MS852-OUCB00-SG są przewód USB i przewód Y. Przewód Y zasila skaner z dwóch portów USB 2.0 w komputerach bez portu USB 3.0. W porcie USB 3.0 wystarcza zwykły przewód USB.

Kody 1D czyta od 3 mil przy minimalnym kontraście druku 25%. Skaner waży 184 g.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-przewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS852LR',
  priceFrom: 2221.55,
  images: [
    '/images/products/MS852-OUCB00-SG.png',
    '/images/products/MS852-OUCB00-SG-2.png',
    '/images/products/MS852-OUCB00-SG-3.png',
  ],
  imageDescriptions: [
    'Unitech MS852 LR — czarny skaner 2D dalekiego zasięgu, widok z boku na rękojeść i żółty spust',
    'Unitech MS852 LR — widok z przodu pod kątem na okno odczytu i żółty spust',
    'Unitech MS852 LR — widok z tyłu pod kątem na głowicę z napisem LR i logo unitech oraz rękojeść',
  ],
  tags: ['magazyn', 'logistyka', 'produkcja'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner 2D dalekiego zasięgu (imager), przewodowy' },
    { name: 'Matryca', value: '1280 × 800 pikseli, migawka global shutter, tolerancja ruchu' },
    { name: 'Celownik i oświetlenie', value: 'Celownik 655 nm; oświetlenie Hyper Red 660 nm' },
    { name: 'Kody 1D i 2D', value: 'Code 39, Code 128, EAN/UPC, Interleaved 2 of 5, Codabar, Code 93, MSI, GS1 DataBar i inne kody 1D; PDF417, Aztec, Data Matrix, QR Code, Micro QR, MaxiCode, Han Xin, Grid Matrix, DotCode; OCR; kody pocztowe' },
    { name: 'Rozdzielczość optyczna', value: '3,0 mil (Code 39), 5,0 mil (PDF417); minimalny kontrast druku 25%' },
    { name: 'Zasięg (przykłady)', value: 'Code 39 10 mil: 7,6–215,9 cm; Code 128 15 mil: 15,2–254 cm; Code 39 100 mil (papier): 50,8–1778 cm; QR 100 mil: 40–2085 cm; Data Matrix 10 mil: 12,7–114,3 cm' },
    { name: 'Odporność na światło otoczenia', value: 'Do 107 639 lx' },
    { name: 'Kąty odczytu', value: 'Pochylenie ±60°, odchylenie ±60°, obrót 0–360°' },
    { name: 'Interfejsy', value: 'USB' },
    { name: 'Zasilanie', value: '4–5,5 V DC; pobór prądu: praca 710 mA, czuwanie 79 mA' },
    { name: 'Klasa ochrony', value: 'IP42' },
    { name: 'Odporność na upadki', value: '1,8 m na beton' },
    { name: 'Upadek w etui ochronnym', value: '2,2 m na beton (etui 386793G, sprzedawane osobno)' },
    { name: 'Odporność na wyładowania elektrostatyczne', value: 'Sprawny po wyładowaniu 8 kV kontaktowym i 15 kV w powietrzu' },
    { name: 'Temperatura pracy', value: 'Od −20°C do +50°C' },
    { name: 'Temperatura przechowywania', value: 'Od −40°C do +70°C' },
    { name: 'Wilgotność', value: '95% bez kondensacji' },
    { name: 'Wymiary i masa', value: '87,8 × 71,6 × 177,7 mm; 184 g' },
    { name: 'Trwałość spustu', value: '10 mln naciśnięć' },
    { name: 'Zawartość zestawu', value: 'Skaner, przewód USB, przewód Y' },
    { name: 'Elementy poza zestawem', value: 'Podstawka hands-free, etui ochronne' },
    { name: 'Certyfikaty', value: 'CE, FCC, BSMI, VCCI' },
    { name: 'Gwarancja producenta', value: '60 miesięcy' },
    { name: 'Part Number', value: 'MS852-OUCB00-SG' },
  ],
  applications: ['Etykiety na paletach i regałach magazynu', 'Odczyt kodów z dużej odległości w logistyce', 'Produkcja'],
  variants: [
    { partNumber: 'MS852-OUCB00-SG', name: 'MS852 LR, USB, przewód Y', attributes: {}, priceFrom: 2221.55, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: MS85X_AKCESORIA,
  relatedProducts: ['zebra-ds3608-xr', 'honeywell-granit-xp-1990ixlr', 'unitech-ms852-plus', 'unitech-ms852'],
  downloads: [
    plik('Karta katalogowa Unitech MS852 LR (EN)', 'unitech-ms852-lr-karta-katalogowa-en.pdf', '1,3 MB', 'datasheet'),
    plik('Instrukcja obsługi Unitech MS852 LR (EN)', 'unitech-ms852-lr-instrukcja-en.pdf', '8,0 MB'),
    plik('Skrócona instrukcja Unitech MS852 LR (EN)', 'unitech-ms852-lr-skrocona-instrukcja-en.pdf', '1,3 MB'),
  ],
  faq: [
    {
      question: 'Czy zasięg 21 m obowiązuje w trybie prezentacyjnym?',
      answer: 'Nie. Maksymalny zasięg dotyczy odczytu ze spustem. W trybach automatycznych (Presentation, Auto Aim i Auto Aim with Illumination) zasięg odczytu jest ograniczony.',
    },
    {
      question: 'Do czego służy przewód Y w zestawie MS852 LR?',
      answer: 'Skaner pobiera 710 mA w pracy. W komputerze bez portu USB 3.0 przewód Y dodaje drugi port USB 2.0 jako źródło zasilania. W porcie USB 3.0 skaner pracuje na zwykłym przewodzie USB.',
    },
    {
      question: 'Czy etui ochronne jest w zestawie MS852-OUCB00-SG?',
      answer: 'Nie. Bez etui skaner wytrzymuje upadek z 1,8 m. Z [etui ochronnym Unitech 386793G](/produkt/unitech-ms85x-etui) wytrzymuje upadek z 2,2 m.',
    },
    {
      question: 'W jakiej temperaturze pracuje MS852 LR?',
      answer: 'Przewodowy MS852 LR działa od −20°C do +50°C. Wersja Bluetooth [Unitech MS852B LR](/produkt/unitech-ms852b-lr) ma węższy zakres: od −10°C do +50°C.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS852 LR?',
      answer: 'Kody czytane z odległości do 80 cm obsłuży [Unitech MS852 Plus](/produkt/unitech-ms852-plus). Daleki zasięg oferują też [Zebra DS3608-XR](/produkt/zebra-ds3608-xr) i [Honeywell Granit XP 1990i XLR](/produkt/honeywell-granit-xp-1990ixlr).',
    },
  ],
  createdAt: '2026-10-30',
}

const ms852DpmEsd: Product = {
  id: 'unitech-ms852-dpm-esd',
  slug: 'unitech-ms852-dpm-esd',
  name: 'Unitech MS852 DPM ESD',
  seoH1: 'Unitech MS852 DPM ESD',
  shortDescription: 'Unitech MS852 DPM ESD — przewodowy skaner 2D do kodów DPM w strefach ESD: grawer laserowy, mikroudar i druk atramentowy, krzyżowy celownik laserowy, 60 FPS.',
  seoTitle: 'Skaner DPM ESD Unitech MS852 DPM ESD — kody grawerowane 2D',
  seoDescription: 'Skaner kodów DPM Unitech MS852 DPM ESD: czytnik 2D do kodów grawerowanych laserem, nabijanych i drukowanych na elementach, obudowa i przewód ESD-safe, USB HID i CDC. Skaner ESD Unitech MS852 DPM do produkcji elektroniki, MS852 DPM ESD Unitech. PN: MS852-XUCB00-LG.',
  description: `Unitech MS852 DPM ESD odczytuje kody naniesione bezpośrednio na element (DPM, Direct Part Marking): grawerowane laserem, nabijane mikroudarem i drukowane atramentem. Taki kod identyfikuje część przez cały cykl życia, np. na chipach.

Obudowa i przewód są z tworzywa z dodatkiem antystatycznym, o rezystancji powierzchniowej 10⁵–10⁹ Ω/sq i bez chloru. Skaner pracuje więc w cleanroomach i w strefach produkcji chronionych przed wyładowaniami elektrostatycznymi.

Krzyżowy czerwony celownik laserowy wskazuje kod, a matryca 1280 × 800 pracuje z prędkością 60 FPS. Skaner działa z bliska: Data Matrix 10 mil odczytuje z odległości 40–140 mm, a QR 20 mil z 40–200 mm. Interfejs USB pracuje w trybach HID i CDC.

Zastosowania to produkcja, motoryzacja, lotnictwo, elektronika i opieka zdrowotna, śledzenie części i kontrola jakości. W zestawie są skaner, przewód USB i skrócona instrukcja. Podstawka i etui ochronne są osobnymi akcesoriami.

Skaner czyta także kody drukowane 1D i 2D, m.in. QR Code, Aztec Code, Data Matrix, PDF417 i GS1 DataBar, oraz kody z ekranów urządzeń mobilnych. Masa wynosi 165 g bez przewodu, a pobór prądu w pracy 252 mA.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-przewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS852DPM_ESD',
  priceFrom: 1008.79,
  images: [
    '/images/products/MS852-XUCB00-LG.png',
    '/images/products/MS852-XUCB00-LG-2.png',
    '/images/products/MS852-XUCB00-LG-3.png',
    '/images/products/MS852-XUCB00-LG-4.png',
  ],
  imageDescriptions: [
    'Unitech MS852 DPM ESD — czarny skaner z widocznym oknem odczytu i spustem, widok z przodu pod kątem',
    'Unitech MS852 DPM ESD — widok z przodu na okno odczytu z soczewką i rękojeść',
    'Unitech MS852 DPM ESD — widok z przodu pod kątem na głowicę z oznaczeniem ESD',
    'Unitech MS852 DPM ESD — widok z góry pod kątem na głowicę i rękojeść',
  ],
  tags: ['produkcja'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner 2D do kodów DPM (imager), ESD-safe, przewodowy' },
    { name: 'Matryca', value: '1280 × 800 pikseli; 60 FPS' },
    { name: 'Celownik', value: 'Krzyżowy czerwony celownik laserowy' },
    { name: 'Kody 1D', value: 'Codabar, Code 11, Code 39, Code 32, Interleaved 2 of 5, Industrial 2 of 5, Matrix 2 of 5, Code 93, Code 128, GS1-128, UPC-A, UPC-E, EAN-8, EAN-13, GS1 DataBar (RSS-14), GS1 DataBar Limited, GS1 DataBar Expanded' },
    { name: 'Kody 2D', value: 'PDF417, Micro PDF417, QR Code, Micro QR, Data Matrix, Aztec Code; kody DPM' },
    { name: 'Zasięg (przykłady)', value: 'Code 39 5 mil: 50–140 mm; Code 39 20 mil: 160–320 mm; EAN-13 13 mil: 50–200 mm; Data Matrix 10 mil: 40–140 mm; QR 20 mil: 40–200 mm' },
    { name: 'Kąty odczytu', value: 'Pochylenie ±60°, odchylenie ±60°, obrót ±360°' },
    { name: 'Interfejsy', value: 'USB (HID, CDC)' },
    { name: 'Ochrona ESD', value: 'Obudowa i przewód z tworzywa z dodatkiem antystatycznym; rezystancja powierzchniowa 10⁵–10⁹ Ω/sq; bez chloru' },
    { name: 'Zasilanie', value: '4–5,5 V DC; pobór prądu: praca 252 mA, czuwanie 77 mA' },
    { name: 'Klasa ochrony', value: 'IP42' },
    { name: 'Odporność na upadki', value: '2,1 m na beton (sam skaner)' },
    { name: 'Odporność na wyładowania elektrostatyczne', value: 'Sprawny po wyładowaniu 8 kV kontaktowym i 15 kV w powietrzu' },
    { name: 'Temperatura pracy', value: 'Od −10°C do +50°C' },
    { name: 'Temperatura przechowywania', value: 'Od −40°C do +70°C' },
    { name: 'Wilgotność', value: '95% bez kondensacji' },
    { name: 'Wymiary i masa', value: '87,8 × 71,6 × 177,7 mm; 165 g bez przewodu' },
    { name: 'Trwałość spustu', value: '10 mln naciśnięć' },
    { name: 'Zawartość zestawu', value: 'Skaner, przewód USB, skrócona instrukcja' },
    { name: 'Elementy poza zestawem', value: 'Podstawka hands-free, etui ochronne' },
    { name: 'Certyfikaty', value: 'CE, FCC, BSMI, VCCI' },
    { name: 'Gwarancja producenta', value: '60 miesięcy' },
    { name: 'Part Number', value: 'MS852-XUCB00-LG' },
  ],
  applications: ['Odczyt kodów DPM na częściach w produkcji', 'Motoryzacja i lotnictwo', 'Produkcja elektroniki i kontrola jakości', 'Opieka zdrowotna i medycyna'],
  variants: [
    { partNumber: 'MS852-XUCB00-LG', name: 'MS852 DPM ESD, USB', attributes: {}, priceFrom: 1008.79, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: MS85X_AKCESORIA,
  relatedProducts: ['unitech-ms852-plus-esd', 'unitech-ms851-esd', 'newland-nvh300', 'datalogic-powerscan-pd9531-dpm'],
  downloads: [
    plik('Karta katalogowa Unitech MS852 DPM ESD (EN)', 'unitech-ms852-dpm-esd-karta-katalogowa-en.pdf', '853 KB', 'datasheet'),
    plik('Instrukcja obsługi Unitech MS852 DPM ESD (EN)', 'unitech-ms852-dpm-esd-instrukcja-en.pdf', '2,6 MB'),
    plik('Skrócona instrukcja Unitech MS852 DPM ESD (EN)', 'unitech-ms852-dpm-esd-skrocona-instrukcja-en.pdf', '5,5 MB'),
  ],
  faq: [
    {
      question: 'Czym są kody DPM i jak je oznaczać?',
      answer: 'DPM (Direct Part Marking) to kod naniesiony bezpośrednio na element, bez etykiety, np. na tworzywo lub metal. Stosuje się trzy techniki: grawer laserowy, nabijanie mikroudarem (dot peen) i druk atramentowy. Kod jest trwały i identyfikuje element do końca cyklu życia.',
    },
    {
      question: 'Czy MS852 DPM ESD czyta zwykłe etykiety i kody z ekranów?',
      answer: 'Tak. Skaner czyta większość kodów 1D i 2D z etykiet oraz z ekranów urządzeń mobilnych. Lista symboli jest węższa niż w [Unitech MS852 Plus ESD](/produkt/unitech-ms852-plus-esd): nie obejmuje OCR ani kodów pocztowych.',
    },
    {
      question: 'Z jakiej odległości MS852 DPM ESD odczytuje kody?',
      answer: 'Skaner pracuje z bliska. Data Matrix 10 mil odczytuje z odległości 40–140 mm, kod QR 20 mil z 40–200 mm, a Code 39 20 mil z 160–320 mm.',
    },
    {
      question: 'Czy MS852 DPM ESD wymaga sterowników?',
      answer: 'Skaner łączy się przez USB jako klawiatura (ustawienie domyślne) albo jako wirtualny port COM. Tryb klawiatury nie wymaga sterowników. Tryb wirtualnego portu COM wymaga zainstalowania sterownika w komputerze.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS852 DPM ESD?',
      answer: 'Kody drukowane i z ekranów w strefach ESD czyta [Unitech MS852 Plus ESD](/produkt/unitech-ms852-plus-esd). Kody 1D z dużej odległości czyta [Unitech MS851 ESD](/produkt/unitech-ms851-esd). Przewodowe skanery DPM innych marek to [Newland NVH300 Angler DP](/produkt/newland-nvh300) i [Datalogic PowerScan PD9531 DPM Evo](/produkt/datalogic-powerscan-pd9531-dpm).',
    },
  ],
  createdAt: '2026-10-30',
}

const ms852PlusEsd: Product = {
  id: 'unitech-ms852-plus-esd',
  slug: 'unitech-ms852-plus-esd',
  name: 'Unitech MS852 Plus ESD',
  seoH1: 'Unitech MS852 Plus ESD',
  shortDescription: 'Unitech MS852 Plus ESD — przewodowy skaner 2D w wersji ESD-safe do kodów drukowanych w strefach EPA i cleanroomach; OCR, DotCode, Digimarc, USB.',
  seoTitle: 'Skaner 2D ESD Unitech MS852 Plus ESD — OCR, DotCode, USB',
  seoDescription: 'Unitech MS852 Plus ESD — skaner kodów kreskowych 2D z obudową i przewodem ESD-safe, OCR, DotCode i Digimarc, odczyt kodów w ruchu, USB. Skaner ESD Unitech MS852 Plus, MS852+ ESD Unitech do cleanroomów i stref EPA. PN: MS852-ZUCB00-LG.',
  description: `Unitech MS852 Plus ESD to skaner 2D do pomieszczeń czystych i stref produkcji chronionych przed wyładowaniami elektrostatycznymi. Optyka z serii MS852 Plus pracuje w obudowie i z przewodem z tworzywa antystatycznego.

Sensor 1280 × 800 ma migawkę global shutter, więc ruch skanera lub kodu nie przeszkadza w odczycie. Skaner czyta kody drukowane i z ekranów telefonów, OCR, DotCode i kody Digimarc. Zasięg dla Code 39 20 mil sięga 80 cm, dla UPC 13 mil wynosi 3,4–57,3 cm, dla Data Matrix 10 mil 7,2–29,7 cm. Pobór prądu w pracy to 252 mA.

Tworzywo z dodatkiem antystatycznym ma rezystancję powierzchniową 10⁵–10⁹ Ω/sq. Dodatek jest wymieszany w masie tworzywa, a nie naniesiony na powierzchnię. Szczegóły ochrony ESD opisano na stronie [skanerów Unitech](/skanery-unitech).

Skaner ma interfejs USB i pracuje w handlu, logistyce i produkcji. Masa wynosi 165 g. W zestawie jest przewód USB; podstawka jest sprzedawana osobno.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-przewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS852_plus_ESD',
  priceFrom: 1207.73,
  images: [
    '/images/products/MS852-ZUCB00-LG.png',
    '/images/products/MS852-ZUCB00-LG-2.png',
  ],
  imageDescriptions: [
    'Unitech MS852 Plus ESD — czarny skaner w obudowie ESD-safe, widok z góry i z przodu na głowicę oraz rękojeść (zdjęcie poglądowe: obudowa wspólna dla serii MS85x ESD)',
    'Unitech MS852 Plus ESD — widok z przodu pod kątem na okno odczytu i rękojeść (zdjęcie poglądowe: obudowa wspólna dla serii MS85x ESD)',
  ],
  tags: ['produkcja', 'magazyn'],
  availability: 'on-order',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner 2D (imager), ESD-safe, przewodowy' },
    { name: 'Matryca', value: '1280 × 800 pikseli, migawka global shutter, tolerancja ruchu' },
    { name: 'Kody 1D', value: 'Codabar, Code 11, Code 128, Code 2 of 5, Code 39, Code 93 i 93i, EAN/JAN-13, EAN/JAN-8, IATA Code 2 of 5, Interleaved 2 of 5, Matrix 2 of 5, MSI, GS1 DataBar, UPC-A, UPC-E, Code 32 (PARAF), TLC39' },
    { name: 'Kody 2D', value: 'Codablock A, Codablock F, PDF417, MicroPDF417, Aztec Code, Data Matrix, MaxiCode, QR Code, Han Xin, Grid Matrix, DotCode' },
    { name: 'Kody pocztowe, OCR i Digimarc', value: 'Australian Post, British Post, Canadian Post, China Post, Japanese Post, Korea Post, Netherlands Post, Planet Code, Postnet; OCR; Digimarc' },
    { name: 'Rozdzielczość optyczna', value: '1D: 3 mil (0,075 mm); minimalny kontrast druku 20%' },
    { name: 'Zasięg (przykłady)', value: 'UPC 13 mil: 3,4–57,3 cm; Code 39 20 mil: 3,5–80 cm; Code 128 15 mil: 3,4–65 cm; Data Matrix 10 mil: 7,2–29,7 cm; QR 15 mil: 3,3–39 cm' },
    { name: 'Odporność na światło otoczenia', value: 'Do 100 000 lx (światło słoneczne)' },
    { name: 'Kąty odczytu', value: 'Pochylenie ±60°, odchylenie ±60°, obrót 360°' },
    { name: 'Interfejsy', value: 'USB' },
    { name: 'Ochrona ESD', value: 'Obudowa i przewód z tworzywa z dodatkiem antystatycznym; rezystancja powierzchniowa 10⁵–10⁹ Ω/sq; bez chloru' },
    { name: 'Zasilanie', value: '4–5,5 V DC; pobór prądu: praca 252 mA, czuwanie 77 mA' },
    { name: 'Klasa ochrony', value: 'IP42' },
    { name: 'Odporność na upadki', value: '2,1 m na beton (sam skaner)' },
    { name: 'Odporność na wyładowania elektrostatyczne', value: 'Sprawny po wyładowaniu 8 kV kontaktowym i 15 kV w powietrzu' },
    { name: 'Temperatura pracy', value: 'Od −10°C do +50°C' },
    { name: 'Temperatura przechowywania', value: 'Od −40°C do +70°C' },
    { name: 'Wilgotność', value: '95% bez kondensacji' },
    { name: 'Wymiary i masa', value: '87,8 × 71,6 × 177,7 mm; 165 g' },
    { name: 'Trwałość spustu', value: '10 mln naciśnięć' },
    { name: 'Zawartość zestawu', value: 'Skaner, przewód USB' },
    { name: 'Elementy poza zestawem', value: 'Podstawka hands-free' },
    { name: 'Certyfikaty', value: 'CE, FCC, BSMI, VCCI' },
    { name: 'Gwarancja producenta', value: '60 miesięcy' },
    { name: 'Part Number', value: 'MS852-ZUCB00-LG' },
  ],
  applications: ['Cleanroomy i strefy EPA', 'Produkcja w środowiskach chronionych przed ładunkami elektrostatycznymi', 'Magazyn i logistyka w strefach ESD'],
  variants: [
    { partNumber: 'MS852-ZUCB00-LG', name: 'MS852 Plus ESD, USB', attributes: {}, priceFrom: 1207.73, availability: 'on-order' },
  ],
  compatibleAccessories: [],
  relatedAccessories: MS85X_AKCESORIA,
  relatedProducts: ['unitech-ms852-dpm-esd', 'unitech-ms851-esd', 'zebra-ds4608', 'newland-hr33-marlin'],
  downloads: [
    plik('Karta katalogowa Unitech MS852 Plus ESD (EN)', 'unitech-ms852-plus-esd-karta-katalogowa-en.pdf', '404 KB', 'datasheet'),
    plik('Instrukcja obsługi Unitech MS852 Plus ESD (EN)', 'unitech-ms852-plus-esd-instrukcja-en.pdf', '4,2 MB'),
    plik('Skrócona instrukcja Unitech MS852 Plus ESD (EN)', 'unitech-ms852-plus-skrocona-instrukcja-en.pdf', '1,2 MB'),
  ],
  faq: [
    {
      question: 'Czym MS852 Plus ESD różni się od MS852 Plus?',
      answer: 'Optyka jest ta sama. Wersja ESD ma obudowę i przewód z tworzywa antystatycznego oraz interfejs USB. W ofercie jest numer MS852-ZUCB00-LG.',
    },
    {
      question: 'Czym MS852 Plus ESD różni się od MS852 DPM ESD?',
      answer: 'MS852 Plus ESD czyta kody drukowane, kody z ekranów, OCR, DotCode i Digimarc na odległość do 80 cm. [MS852 DPM ESD](/produkt/unitech-ms852-dpm-esd) czyta kody grawerowane, nabijane i drukowane atramentem na elementach, z bliska: Data Matrix 10 mil z odległości 4–14 cm.',
    },
    {
      question: 'Czy przewód USB też jest antystatyczny?',
      answer: 'Tak. W zestawie jest przewód USB z tworzywa antystatycznego. Zapasowy przewód z ochroną ESD to [Unitech 1550-905920G](/produkt/unitech-ms85x-przewod-usb).',
    },
    {
      question: 'Czy antystatyczna warstwa ściera się przy czyszczeniu?',
      answer: 'Nie. Dodatek antystatyczny jest wymieszany w masie tworzywa, a nie naniesiony na powierzchnię. Gdy powierzchnia jest przecierana, dodatek z wnętrza tworzywa uzupełnia jej warstwę.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS852 Plus ESD?',
      answer: 'Duże kody liniowe, np. z odległości 4,57 m, czyta [Unitech MS851 ESD](/produkt/unitech-ms851-esd). Bez ochrony ESD ta sama optyka jest w [Unitech MS852 Plus](/produkt/unitech-ms852-plus). Z innych marek kody drukowane w 2D czytają m.in. [Zebra DS4608](/produkt/zebra-ds4608) i [Newland HR33 Marlin](/produkt/newland-hr33-marlin).',
    },
  ],
  createdAt: '2026-10-30',
}

const ms851Esd: Product = {
  id: 'unitech-ms851-esd',
  slug: 'unitech-ms851-esd',
  name: 'Unitech MS851 ESD',
  seoH1: 'Unitech MS851 ESD',
  shortDescription: 'Unitech MS851 ESD — przewodowy skaner laserowy kodów 1D w wersji ESD-safe: 104 skany na sekundę, odczyt do 4,57 m (Code 39 100 mil), cztery tryby pracy, masa 147 g.',
  seoTitle: 'Skaner laserowy ESD Unitech MS851 ESD — kody 1D do 4,57 m',
  seoDescription: 'Skaner kodów kreskowych Unitech MS851 ESD: czytnik laserowy 1D, 104 skany na sekundę, odczyt do 4,57 m (Code 39 100 mil), obudowa i przewód ESD-safe, USB, IP42, 147 g. Skaner laserowy Unitech MS851 ESD, MS851 Unitech ESD do strefy EPA. PN: MS851-SUCB00-LG.',
  description: `Unitech MS851 ESD to skaner laserowy do kodów liniowych 1D, który czyta duże kody Code 39 100 mil z odległości do 4,57 m. Dla Code 39 20 mil zasięg to 1,17 m, a dla UPC 13 mil 63,5 cm.

Dioda laserowa 650 nm wykonuje 104 (±12) skany na sekundę w obu kierunkach. Rozdzielczość wynosi 4 mil (0,1 mm). Skaner toleruje pochylenie ±65° i skos ±40°. Do wyboru są cztery tryby pracy: spustu, impulsowy, migowy i ciągły.

Masa skanera bez przewodu to 147 g, a pobór prądu w pracy poniżej 110 mA. Obudowa i przewód z tworzywa antystatycznego pasują do stref EPA. Przewód jest wymienny, a konfiguracja odbywa się przez USB.

Skaner czyta m.in. Code 39, Code 128, Interleaved 2 of 5, Codabar, UPC, EAN i GS1 DataBar.

Zastosowania to obieg dokumentów, handel i inwentaryzacja, a także odczyt kodów 1D z dużej odległości w strefach ESD. W zestawie MS851-SUCB00-LG są skaner i przewód USB, a podstawkę kupuje się osobno.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-przewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS851ESD',
  priceFrom: 826.33,
  images: [
    '/images/products/MS851-SUCB00-LG.png',
    '/images/products/MS851-SUCB00-LG-2.png',
    '/images/products/MS851-SUCB00-LG-3.png',
  ],
  imageDescriptions: [
    'Unitech MS851 ESD — czarny skaner laserowy, widok z tyłu pod kątem na głowicę z napisem ESD i logo unitech',
    'Unitech MS851 ESD — widok z góry pod kątem na głowicę i rękojeść (zdjęcie poglądowe: obudowa wspólna dla serii MS85x ESD)',
    'Unitech MS851 ESD — widok z przodu pod kątem na okno odczytu i rękojeść (zdjęcie poglądowe: obudowa wspólna dla serii MS85x ESD)',
  ],
  tags: ['produkcja', 'magazyn'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner liniowy 1D (laser), ESD-safe, przewodowy' },
    { name: 'Źródło światła', value: 'Dioda laserowa 650 nm' },
    { name: 'Szybkość skanowania', value: '104 (±12) skany na sekundę, dwukierunkowo' },
    { name: 'Rozdzielczość optyczna', value: '4 mil (0,1 mm); minimalny kontrast druku 20%' },
    { name: 'Kody 1D', value: 'Code 39, Full ASCII Code 39, Interleaved 2 of 5, UPC A/E/E1, MSI, Codabar, Code 11, EAN-8, EAN-13, Code 93, Code 128, EAN-128, Code 32, GS1 DataBar, Bookland EAN, Discrete 2 of 5, Chinese 2 of 5, ISBT 128, UCC Coupon Extended Code, Bookland 128' },
    { name: 'Zasięg (przykłady)', value: 'Code 128 5 mil: 3,6–17,8 cm; Code 39 7,5 mil: 3,0–41,9 cm; UPC 13 mil: 4,6–63,5 cm; Code 39 20 mil: 3,6–116,8 cm; Code 39 55 mil: 8,6–177,8 cm; Code 39 100 mil: 61–457 cm' },
    { name: 'Kąty odczytu', value: 'Pochylenie ±65°, skos ±40°' },
    { name: 'Tryby pracy', value: 'Spust, impulsowy, migowy, ciągły' },
    { name: 'Interfejsy', value: 'USB' },
    { name: 'Ochrona ESD', value: 'Obudowa i przewód z tworzywa z dodatkiem antystatycznym; rezystancja powierzchniowa 10⁵–10⁹ Ω/sq; bez chloru' },
    { name: 'Zasilanie', value: '4–5,5 V DC; pobór prądu: praca poniżej 110 mA, czuwanie poniżej 20 mA' },
    { name: 'Klasa ochrony', value: 'IP42' },
    { name: 'Odporność na upadki', value: '2,1 m na beton (sam skaner)' },
    { name: 'Odporność na wyładowania elektrostatyczne', value: 'Sprawny po wyładowaniu 8 kV kontaktowym i 15 kV w powietrzu' },
    { name: 'Temperatura pracy', value: 'Od −10°C do +50°C' },
    { name: 'Temperatura przechowywania', value: 'Od −40°C do +70°C' },
    { name: 'Wilgotność', value: '95% bez kondensacji' },
    { name: 'Wymiary i masa', value: '87,8 × 71,6 × 177,7 mm; 147 g bez przewodu' },
    { name: 'Trwałość spustu', value: '10 mln naciśnięć' },
    { name: 'Zawartość zestawu', value: 'Skaner, przewód USB' },
    { name: 'Elementy poza zestawem', value: 'Podstawka hands-free' },
    { name: 'Certyfikaty', value: 'CE, FCC, BSMI, VCCI' },
    { name: 'Gwarancja producenta', value: '60 miesięcy' },
    { name: 'Part Number', value: 'MS851-SUCB00-LG' },
  ],
  applications: ['Obieg dokumentów', 'Handel i inwentaryzacja', 'Odczyt kodów 1D z dużej odległości w strefach ESD'],
  variants: [
    { partNumber: 'MS851-SUCB00-LG', name: 'MS851 ESD, laser 1D, USB', attributes: {}, priceFrom: 826.33, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: MS85X_AKCESORIA,
  relatedProducts: ['unitech-ms836', 'unitech-ms250', 'zebra-li2208', 'newland-hr11-aringa', 'datalogic-gryphon-gd4220'],
  downloads: [
    plik('Karta katalogowa Unitech MS851 ESD (EN)', 'unitech-ms851-esd-karta-katalogowa-en.pdf', '1,3 MB', 'datasheet'),
    plik('Instrukcja obsługi Unitech MS851 (EN)', 'unitech-ms851-esd-instrukcja-en.pdf', '1,0 MB'),
    plik('Skrócona instrukcja Unitech MS851 (EN)', 'unitech-ms851-esd-skrocona-instrukcja-en.pdf', '186 KB'),
  ],
  faq: [
    {
      question: 'Czy Unitech MS851 ESD czyta kody 2D i QR?',
      answer: 'Nie. To skaner laserowy 1D, który czyta tylko kody liniowe. Kody 2D i QR czytają [Unitech MS852 Plus ESD](/produkt/unitech-ms852-plus-esd) i [Unitech MS852 DPM ESD](/produkt/unitech-ms852-dpm-esd).',
    },
    {
      question: 'Do czego służą tryby impulsowy, migowy i ciągły?',
      answer: 'W trybie spustu laser świeci do zwolnienia spustu, udanego odczytu albo upływu limitu czasu. W trybie impulsowym spust uruchamia laser, który świeci do udanego odczytu lub limitu czasu. Tryby ciągły i migowy działają bez spustu. W trybie migowym zasięg odczytu jest mniejszy.',
    },
    {
      question: 'Jaka jest różnica między zasięgiem 4,57 m a odczytem zwykłych etykiet?',
      answer: 'Zasięg 4,57 m dotyczy kodu Code 39 o module 100 mil, czyli bardzo dużego kodu. Zwykłe etykiety UPC o module 13 mil skaner czyta do 63,5 cm.',
    },
    {
      question: 'Czy MS851 ESD ma RS-232?',
      answer: 'Nie w tej wersji. Zestaw MS851-SUCB00-LG zawiera przewód USB, a wariantu RS-232 nie oferujemy.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS851 ESD?',
      answer: 'Laser 1D bez ochrony ESD to [Unitech MS836](/produkt/unitech-ms836). Z innych marek kody liniowe czytają [Zebra LI2208](/produkt/zebra-li2208) i [Datalogic Gryphon GD4220](/produkt/datalogic-gryphon-gd4220).',
    },
  ],
  createdAt: '2026-10-30',
}

const ms838: Product = {
  id: 'unitech-ms838',
  slug: 'unitech-ms838',
  name: 'Unitech MS838',
  seoH1: 'Unitech MS838',
  shortDescription: 'Unitech MS838 — przewodowy skaner 2D do kas w sklepach i aptekach: obudowa IP52, odczyt kodów 1D od 3 mil, wersje USB z podstawką hands-free i RS-232.',
  seoTitle: 'Skaner kodów kreskowych Unitech MS838 — czytnik 2D USB lub RS-232',
  seoDescription: 'Skaner kodów kreskowych Unitech MS838: czytnik 2D z USB lub RS-232, obudowa IP52, upadki z 1,5 m, odczyt kodów 1D od 3 mil, tryb prezentacyjny. Skaner Unitech MS838, MS838 Unitech do kasy w sklepie i aptece. PN: MS838-2UCB0S-SG (USB, podstawka), MS838-2RCB00-SG (RS-232).',
  description: `Unitech MS838 jest dostępny w dwóch wersjach: z przewodem USB i podstawką hands-free (MS838-2UCB0S-SG) oraz z przewodem RS-232 bez podstawki (MS838-2RCB00-SG). Głowica 2D jest w obu taka sama: matryca 640 × 480 rejestruje 60 klatek na sekundę i współpracuje z czerwonym celownikiem LED oraz białym oświetleniem.

Skaner czyta kody 1D o rozdzielczości do 3 mil, także uszkodzone i słabo wydrukowane, oraz kody 2D: QR Code, Data Matrix, Aztec Code i PDF417. Dla kodu EAN-13 13 mil głębia ostrości wynosi 60–310 mm.

Obudowa ma klasę IP52, a test wielokrotnych zrzutów na beton przeprowadzono z 1,5 m. Skaner waży 245 g, a spust ma trwałość 1 mln naciśnięć. Pracuje w trybie spustu oraz w trybie prezentacyjnym z automatycznym wykrywaniem kodu.

Skaner obsługuje OPOS i JPOS. Do danych można dodać prefiks, sufiks i identyfikator kodu oraz zmienić ich format. Zakres temperatur pracy to −10…+50°C, a pobór prądu w pracy wynosi poniżej 142 mA.

Zastosowania to sklepy, supermarkety, apteki i hotele.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-przewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS838',
  priceFrom: 311.88,
  images: [
    '/images/products/MS838-2UCB0S-SG.png',
    '/images/products/MS838-2UCB0S-SG-2.png',
    '/images/products/MS838-2UCB0S-SG-3.png',
    '/images/products/MS838-2UCB0S-SG-4.png',
  ],
  imageDescriptions: [
    'Unitech MS838 — czarny skaner 2D z pomarańczowym spustem, widok z przodu na okno odczytu',
    'Unitech MS838 — widok z przodu pod kątem, okno odczytu i pomarańczowy spust',
    'Unitech MS838 — widok z tyłu na pokrywę głowicy z napisem unitech i rękojeść',
    'Unitech MS838 — widok z góry i z przodu na głowicę oraz pomarańczowy spust',
  ],
  tags: ['retail'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner 2D (imager), przewodowy' },
    { name: 'Matryca', value: 'CMOS 640 × 480 pikseli; 60 klatek na sekundę' },
    { name: 'Celownik i oświetlenie', value: 'Celownik: czerwona dioda LED; oświetlenie: białe LED' },
    { name: 'Kody 1D', value: 'Code 128, EAN-13, EAN-8, Code 39, Code 32, UPC-A, UPC-E, Codabar, Interleaved 2 of 5, Code 93, GS1-128, GS1 DataBar (także Limited i Expanded), Matrix 2 of 5, Code 11, Industrial 2 of 5' },
    { name: 'Kody 2D', value: 'PDF417, Micro PDF417, QR Code, Micro QR, Data Matrix, Aztec Code' },
    { name: 'Rozdzielczość optyczna', value: '1D: co najmniej 3 mil' },
    { name: 'Głębia ostrości', value: 'EAN-13 13 mil: 60–310 mm' },
    { name: 'Odporność na światło otoczenia', value: '0–100 000 lx (światło dzienne)' },
    { name: 'Kąty odczytu', value: 'Pochylenie ±60°, odchylenie ±60°, obrót 0–360°' },
    { name: 'Tryby pracy', value: 'Spust; prezentacyjny (Auto Sense)' },
    { name: 'Interfejsy', value: 'USB albo RS-232, zależnie od PN' },
    { name: 'Zasilanie', value: 'Pobór prądu: praca poniżej 142 mA, czuwanie poniżej 42 mA' },
    { name: 'Klasa ochrony', value: 'IP52' },
    { name: 'Odporność na upadki', value: '1,5 m na beton' },
    { name: 'Temperatura pracy', value: 'Od −10°C do +50°C' },
    { name: 'Temperatura przechowywania', value: 'Od −20°C do +60°C' },
    { name: 'Wilgotność', value: '5–95% bez kondensacji' },
    { name: 'Wymiary i masa', value: '174 × 72 × 96 mm; 245 g' },
    { name: 'Trwałość spustu', value: '1 mln naciśnięć' },
    { name: 'Zawartość zestawu', value: 'Skaner, przewód USB lub RS-232 (zależnie od PN), podstawka hands-free (tylko w MS838-2UCB0S-SG)' },
    { name: 'Certyfikaty', value: 'CE, FCC, BSMI, VCCI' },
    { name: 'Part Number', value: 'MS838-2UCB0S-SG, MS838-2RCB00-SG' },
  ],
  applications: ['Kasy w sklepach i supermarketach', 'Apteki', 'Hotele'],
  variants: [
    { partNumber: 'MS838-2UCB0S-SG', name: 'MS838, USB, z podstawką', attributes: { 'Interfejs': 'USB', 'Podstawka': 'Tak' }, priceFrom: 311.88, availability: 'available' },
    { partNumber: 'MS838-2RCB00-SG', name: 'MS838, RS-232', attributes: { 'Interfejs': 'RS-232' }, priceFrom: 311.88, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    'Interfejs': 'Sposób podłączenia skanera MS838 do komputera lub kasy.\n\n• USB — port USB komputera lub kasy.\n\n• RS-232 — port szeregowy komputera lub kasy.',
    'Podstawka': 'Podstawka hands-free w zestawie.\n\n• Tak — skaner stoi na blacie i czyta kody bez trzymania w dłoni, w trybie prezentacyjnym.',
  },
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms83x-podstawka'],
  relatedProducts: ['unitech-ms852', 'unitech-ms282e', 'unitech-ms852-plus', 'zebra-ds2208', 'honeywell-voyager-xp-1470g', 'datalogic-quickscan-qd2590'],
  downloads: [
    plik('Karta katalogowa Unitech MS838 (EN)', 'unitech-ms838-karta-katalogowa-en.pdf', '922 KB', 'datasheet'),
    plik('Instrukcja obsługi Unitech MS838 (EN)', 'unitech-ms838-instrukcja-en.pdf', '2,3 MB'),
    plik('Skrócona instrukcja Unitech MS838 (EN)', 'unitech-ms838-skrocona-instrukcja-en.pdf', '11,6 MB'),
  ],
  faq: [
    {
      question: 'Którą wersję Unitech MS838 wybrać: USB czy RS-232?',
      answer: 'Skaner MS838-2UCB0S-SG łączy się przez USB i ma w zestawie podstawkę hands-free. Skaner MS838-2RCB00-SG łączy się przez RS-232 i nie ma podstawki; podstawkę [Unitech 5200-900014G](/produkt/unitech-ms83x-podstawka) kupuje się osobno.',
    },
    {
      question: 'Czy MS838 obsługuje OPOS i JPOS?',
      answer: 'Tak. Skaner obsługuje OPOS i JPOS, co ułatwia podłączenie do systemów kasowych.',
    },
    {
      question: 'Jak włączyć tryb prezentacyjny w MS838?',
      answer: 'Tryb Auto Sense włącza kod z instrukcji obsługi, który należy zeskanować. Domyślnie tryb jest wyłączony i skaner odczytuje kod po naciśnięciu spustu. Po włączeniu skaner sam wykrywa kod pod oknem odczytu.',
    },
    {
      question: 'Z jakiej odległości MS838 odczytuje kody?',
      answer: 'Głębia ostrości dla kodu EAN-13 13 mil wynosi 60–310 mm. Najmniejszy czytany moduł kodów 1D to 3 mil.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS838?',
      answer: 'Skaner o smukłej obudowie i masie 125 g to [Unitech MS282e](/produkt/unitech-ms282e). Skaner z matrycą 1280 × 960 i odczytem OCR to [Unitech MS852](/produkt/unitech-ms852). Wśród innych marek podobną klasę mają [Zebra DS2208](/produkt/zebra-ds2208) i [Honeywell Voyager XP 1470g](/produkt/honeywell-voyager-xp-1470g).',
    },
  ],
  createdAt: '2026-10-30',
}

const ms282e: Product = {
  id: 'unitech-ms282e',
  slug: 'unitech-ms282e',
  name: 'Unitech MS282e',
  seoH1: 'Unitech MS282e',
  shortDescription: 'Unitech MS282e — smukły przewodowy skaner 2D o masie 125 g do stanowisk kasowych: odczyt kart lojalnościowych i kuponów z ekranów, tryb ręczny i prezentacyjny.',
  seoTitle: 'Skaner 2D Unitech MS282e — smukły czytnik kodów 125 g, USB',
  seoDescription: 'Skaner kodów kreskowych Unitech MS282e: smukły czytnik 2D o masie 125 g, odczyt kodów z ekranów urządzeń mobilnych, tryb ręczny i prezentacyjny, USB, IP42. Skaner Unitech MS282e, MS282e Unitech do stanowisk kasowych w handlu i hotelarstwie. PN: MS282-3UCB00-SG.',
  description: `Unitech MS282e ma smukłą, wygiętą obudowę o wymiarach 179,7 × 47,5 × 51,3 mm i masie 125 g. Skaner jest przeznaczony do kas w handlu i hotelarstwie: odczytuje karty lojalnościowe i kupony mobilne z ekranów urządzeń mobilnych i kody z uszkodzeniami lub słabym wydrukiem.

Matryca 640 × 480 ma pole widzenia 42° × 31,5° i czerwony celownik LED 625 nm. Kody 1D skaner czyta od 3 mil, a kody 2D (PDF417, QR Code, Micro QR i Data Matrix) od 6,67 mil. Głębia ostrości dla EAN-13 13 mil wynosi 60–350 mm, a dla QR 15 mil 30–170 mm.

Skaner pracuje ręcznie ze spustem albo w trybie prezentacyjnym, bez naciskania przycisku. Dostępne są też tryby Sense, Pulse, Continuous i Batch. Obudowa IP42 przetrwa zrzut z 1,5 m, a spust jest przewidziany na 10 mln naciśnięć. Pobór prądu to poniżej 110 mA w pracy. Przez USB skaner pracuje jako klawiatura HID, wirtualny port COM albo urządzenie HID-POS.

Zestaw MS282-3UCB00-SG zawiera skaner i przewód USB. Podstawka jest opcjonalnym akcesorium.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-przewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS282e',
  priceFrom: 712.87,
  images: [
    '/images/products/MS282-3UCB00-SG.png',
    '/images/products/MS282-3UCB00-SG-2.png',
    '/images/products/MS282-3UCB00-SG-3.png',
    '/images/products/MS282-3UCB00-SG-4.png',
  ],
  imageDescriptions: [
    'Unitech MS282e — smukły czarny skaner z niebieskim podświetleniem na głowicy, widok z przodu pod kątem',
    'Unitech MS282e — skaner leżący z przewodem, widok na głowicę z logo unitech i niebieskim podświetleniem',
    'Unitech MS282e — widok z boku na wygiętą rękojeść i żółty spust',
    'Unitech MS282e — skaner z opcjonalną podstawką na giętkim ramieniu',
  ],
  tags: ['retail'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner 2D (imager), przewodowy, smukła obudowa' },
    { name: 'Matryca', value: 'CMOS 640 × 480 pikseli; pole widzenia 42° × 31,5°' },
    { name: 'Celownik i oświetlenie', value: 'Celownik: czerwona dioda LED 625 nm; oświetlenie: białe LED' },
    { name: 'Kody 1D', value: 'Code 128, EAN-13, EAN-8, Code 39, UPC-A, UPC-E, Codabar, Interleaved 2 of 5, ITF-6, ITF-14, ISBN, ISSN, Code 93, UCC/EAN-128, GS1 DataBar, Matrix 2 of 5, Code 11, Industrial 2 of 5, Standard 2 of 5, AIM128, Plessey, MSI-Plessey' },
    { name: 'Kody 2D', value: 'PDF417, QR Code, Micro QR, Data Matrix' },
    { name: 'Rozdzielczość optyczna', value: '1D: co najmniej 3 mil; 2D: co najmniej 6,67 mil; minimalny kontrast druku 25%' },
    { name: 'Głębia ostrości', value: 'EAN-13 13 mil: 60–350 mm; Code 39 5 mil: 40–150 mm; PDF417 6,7 mil: 50–125 mm; Data Matrix 10 mil: 45–120 mm; QR 15 mil: 30–170 mm' },
    { name: 'Odporność na światło otoczenia', value: '0–100 000 lx (światło dzienne)' },
    { name: 'Kąty odczytu', value: 'Pochylenie ±60°, odchylenie ±60°, obrót 0–360°' },
    { name: 'Tryby pracy', value: 'Spust, Sense, Pulse, Continuous, Batch; ręczny i prezentacyjny' },
    { name: 'Interfejsy', value: 'USB (klawiatura HID, wirtualny port COM, HID-POS)' },
    { name: 'Zasilanie', value: '5 V DC ±10%; pobór prądu: praca poniżej 110 mA, czuwanie poniżej 7 mA' },
    { name: 'Klasa ochrony', value: 'IP42' },
    { name: 'Odporność na upadki', value: '1,5 m na beton' },
    { name: 'Odporność na wyładowania elektrostatyczne', value: 'Sprawny po wyładowaniu 8 kV kontaktowym i 12 kV w powietrzu' },
    { name: 'Temperatura pracy', value: 'Od −10°C do +50°C' },
    { name: 'Temperatura przechowywania', value: 'Od −20°C do +60°C' },
    { name: 'Wilgotność', value: '95% bez kondensacji' },
    { name: 'Wymiary i masa', value: '179,7 × 47,5 × 51,3 mm; 125 g' },
    { name: 'Trwałość spustu', value: '10 mln naciśnięć' },
    { name: 'Zawartość zestawu', value: 'Skaner, przewód USB' },
    { name: 'Elementy poza zestawem', value: 'Podstawka hands-free' },
    { name: 'Certyfikaty', value: 'CE, FCC, BSMI, VCCI' },
    { name: 'Gwarancja producenta', value: '60 miesięcy' },
    { name: 'Part Number', value: 'MS282-3UCB00-SG' },
  ],
  applications: ['Kasy w handlu: karty lojalnościowe i kupony mobilne', 'Hotelarstwo i gastronomia'],
  variants: [
    { partNumber: 'MS282-3UCB00-SG', name: 'MS282e, USB', attributes: {}, priceFrom: 712.87, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms282e-podstawka'],
  relatedProducts: ['unitech-ms838', 'unitech-ms852', 'zebra-ds2208', 'newland-hr23-dorada', 'datalogic-quickscan-qd2590', 'honeywell-voyager-xp-1470g'],
  downloads: [
    plik('Karta katalogowa Unitech MS282e (EN)', 'unitech-ms282e-karta-katalogowa-en.pdf', '1,4 MB', 'datasheet'),
    plik('Instrukcja obsługi Unitech MS282e (EN)', 'unitech-ms282e-instrukcja-en.pdf', '1,9 MB'),
    plik('Skrócona instrukcja Unitech MS282e (EN)', 'unitech-ms282e-skrocona-instrukcja-en.pdf', '8,4 MB'),
  ],
  faq: [
    {
      question: 'Czym są tryby Sense, Pulse, Continuous i Batch w MS282e?',
      answer: 'W trybie Sense skaner rozpoczyna odczyt za każdym razem, gdy wykryje kod przed oknem. W trybie Continuous odczyty następują jeden po drugim, a naciśnięcie spustu je wstrzymuje lub wznawia. W trybie Pulse odczyt startuje po zwolnieniu spustu i trwa do zdekodowania kodu lub do końca czasu sesji. Tryb Batch powtarza odczyty, dopóki spust jest wciśnięty.',
    },
    {
      question: 'Czy MS282e czyta kody z ekranów telefonów?',
      answer: 'Tak. Kupony mobilne i karty lojalnościowe pokazane na ekranie smartfona skaner czyta tak samo jak etykiety. Czyta też kody uszkodzone lub słabo wydrukowane.',
    },
    {
      question: 'Jak ustawić MS282e na stanowisku?',
      answer: 'Do tego służy opcjonalna [podstawka Unitech 5200-900013G](/produkt/unitech-ms282e-podstawka) z giętkim ramieniem. Skaner ma tryb prezentacyjny, w którym czyta kody bez naciskania spustu, oraz tryb ręczny ze spustem; tryb wybiera się kodem konfiguracyjnym z instrukcji.',
    },
    {
      question: 'Jak MS282e łączy się z komputerem?',
      answer: 'Przez USB w jednym z trzech trybów: klawiatura HID, wirtualny port COM albo HID-POS. Tryb wybiera się kodem konfiguracyjnym z instrukcji.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS282e?',
      answer: 'Obudowę IP52 i opcję RS-232 ma [Unitech MS838](/produkt/unitech-ms838). Odczyt OCR zapewnia [Unitech MS852](/produkt/unitech-ms852). Z innych marek odpowiednikiem jest [Datalogic QuickScan QD2590](/produkt/datalogic-quickscan-qd2590) lub [Newland HR23 Dorada](/produkt/newland-hr23-dorada).',
    },
  ],
  createdAt: '2026-10-30',
}

const ms836: Product = {
  id: 'unitech-ms836',
  slug: 'unitech-ms836',
  name: 'Unitech MS836',
  seoH1: 'Unitech MS836',
  shortDescription: 'Unitech MS836 — przewodowy skaner laserowy kodów 1D z trzema trybami pracy, szerokością odczytu 220 mm i dekodowaniem w 3,3 ms; obudowa IP52, USB.',
  seoTitle: 'Skaner laserowy Unitech MS836 — czytnik kodów 1D z USB, IP52',
  seoDescription: 'Skaner kodów kreskowych Unitech MS836: przewodowy laser do kodów 1D (100 skanów/s), trzy tryby pracy, odczyt kodów do 4 mil, obudowa IP52, USB. Skaner laserowy Unitech MS836, MS836 Unitech do kodów liniowych. PN: MS836-SUCBS0-SG.',
  description: `Unitech MS836 to skaner laserowy 1D z trzema trybami pracy: spustu, prezentacyjnym i auto-sensing. Tryb zmienia się przez przytrzymanie spustu. W trybie auto-sensing skaner sam wykrywa kod pod oknem odczytu.

Dioda laserowa 650 nm wykonuje 100 skanów na sekundę, a dekodowanie trwa 3,3 ms. Skaner odczytuje kody liniowe o rozdzielczości 4 mil. Szerokość odczytu wynosi 220 mm, a głębia ostrości dla kodu EAN-13 o module 13 mil sięga 10–265 mm. Kąt skanowania wynosi ±30°. Skaner czyta wyłącznie kody liniowe 1D.

Obsługiwane są m.in. EAN-8, EAN-13, UPC-A, UPC-E, Code 39, Code 128, Codabar i GS1 DataBar. Konfiguracja pozwala dopisać do każdego odczytu prefiks, sufiks i identyfikator kodu. Odczyt jest możliwy przy świetle otoczenia 0–100 000 lx, a kąt pochylenia i odchylenia skanera względem kodu może wynosić ±60°.

Obudowa IP52 jest sprawdzona w upadkach z wysokości 1,5 m. Masa wynosi 245 g, pobór prądu w pracy poniżej 85 mA, a interfejs to USB. Skaner jest przeznaczony do handlu i hotelarstwa, a przy intensywnym skanowaniu kodów liniowych także do zadań przemysłowych.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-przewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS836',
  priceFrom: 241.54,
  images: [
    '/images/products/MS836-SUCBS0-SG.png',
    '/images/products/MS836-SUCBS0-SG-2.png',
  ],
  imageDescriptions: [
    'Unitech MS836 — czarny skaner laserowy z niebieskim spustem, widok z przodu pod kątem na okno odczytu',
    'Unitech MS836 — widok z przodu na okno odczytu z czerwonym filtrem i niebieski spust',
  ],
  tags: ['retail'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner liniowy 1D (laser), przewodowy' },
    { name: 'Źródło światła', value: 'Dioda laserowa 650 nm; pojedyncza linia skanowania' },
    { name: 'Szybkość skanowania', value: '100 skanów na sekundę; dekodowanie 3,3 ms' },
    { name: 'Rozdzielczość optyczna', value: '4 mil; kontrast druku 30%' },
    { name: 'Kody 1D', value: 'EAN-8, EAN-13, UPC-A, UPC-E, Code 39, Code 93, Code 128, Code 32, EAN-128, Codabar, Industrial 2 of 5, Interleaved 2 of 5, Matrix 2 of 5, MSI, China Post 25, Plessey, Code 11, ISBN, ISSN, GS1 DataBar' },
    { name: 'Głębia ostrości', value: 'EAN-13 13 mil: 10–265 mm; szerokość odczytu 220 mm' },
    { name: 'Odporność na światło otoczenia', value: '0–100 000 lx' },
    { name: 'Kąty odczytu', value: 'Kąt skanowania ±30°, pochylenie ±60°, odchylenie ±60°' },
    { name: 'Tryby pracy', value: 'Spust, prezentacyjny, auto-sensing' },
    { name: 'Interfejsy', value: 'USB' },
    { name: 'Zasilanie', value: '5 V DC; pobór prądu: praca poniżej 85 mA, czuwanie poniżej 36 mA' },
    { name: 'Klasa ochrony', value: 'IP52' },
    { name: 'Odporność na upadki', value: '1,5 m na beton' },
    { name: 'Temperatura pracy', value: 'Od −10°C do +50°C' },
    { name: 'Temperatura przechowywania', value: 'Od −20°C do +60°C' },
    { name: 'Wilgotność', value: '5–95% bez kondensacji' },
    { name: 'Wymiary i masa', value: '174 × 72 × 96 mm; 245 g' },
    { name: 'Zawartość zestawu', value: 'Skaner, skrócona instrukcja (podstawkę hands-free i przewód USB potwierdzamy przy zamówieniu)' },
    { name: 'Certyfikaty', value: 'CE, FCC' },
    { name: 'Gwarancja producenta', value: '15 miesięcy' },
    { name: 'Part Number', value: 'MS836-SUCBS0-SG' },
  ],
  applications: ['Odczyt kodów liniowych 1D w handlu', 'Hotelarstwo'],
  variants: [
    { partNumber: 'MS836-SUCBS0-SG', name: 'MS836, USB', attributes: {}, priceFrom: 241.54, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: [],
  relatedProducts: ['unitech-ms851-esd', 'unitech-ms250', 'newland-hr15-wahoo', 'zebra-li2208', 'datalogic-gryphon-gd4220'],
  downloads: [
    plik('Karta katalogowa Unitech MS836 (EN)', 'unitech-ms836-karta-katalogowa-en.pdf', '1,2 MB', 'datasheet'),
    plik('Instrukcja obsługi Unitech MS836 (EN)', 'unitech-ms836-instrukcja-en.pdf', '3,1 MB'),
    plik('Skrócona instrukcja Unitech MS836 (EN)', 'unitech-ms836-skrocona-instrukcja-en.pdf', '2,2 MB'),
  ],
  faq: [
    {
      question: 'Co zawiera zestaw MS836-SUCBS0-SG?',
      answer: 'W zestawie są skaner i skrócona instrukcja. Obecność podstawki hands-free i przewodu USB potwierdzamy przy zamówieniu, bo te elementy mogą być dołączone albo sprzedawane osobno.',
    },
    {
      question: 'Jak zmienić tryb pracy skanera MS836?',
      answer: 'Tryb zmienia się przez dłuższe przytrzymanie spustu. Włączenie trybu auto-sensing i jego czułość ustawia się też kodami konfiguracyjnymi z instrukcji obsługi.',
    },
    {
      question: 'Czy MS836 czyta kody 2D i kody z ekranów telefonów?',
      answer: 'Nie. MS836 czyta wyłącznie kody liniowe 1D. Kody 2D i kody z ekranów czyta m.in. [Unitech MS838](/produkt/unitech-ms838).',
    },
    {
      question: 'Z jakiej odległości MS836 czyta kod EAN-13?',
      answer: 'Etykietę EAN-13 o module 13 mil laser obejmuje w przedziale 10–265 mm od okna. Linia skanowania ma do 220 mm szerokości.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS836?',
      answer: 'W wersji ESD i z zasięgiem do 4,57 m (Code 39 100 mil) skaner laserowy to [Unitech MS851 ESD](/produkt/unitech-ms851-esd). Skaner kontaktowy z czujnikiem CCD to [Unitech MS250](/produkt/unitech-ms250). Kody liniowe czytają też [Newland HR15 Wahoo](/produkt/newland-hr15-wahoo) i [Zebra LI2208](/produkt/zebra-li2208).',
    },
  ],
  createdAt: '2026-10-30',
}

const ms250: Product = {
  id: 'unitech-ms250',
  slug: 'unitech-ms250',
  name: 'Unitech MS250',
  seoH1: 'Unitech MS250',
  shortDescription: 'Unitech MS250 — przewodowy skaner kontaktowy z czujnikiem CCD do kodów 1D: odczyt od zetknięcia do 90 mm, 200 skanów na sekundę, masa 83 g, USB.',
  seoTitle: 'Skaner kontaktowy CCD Unitech MS250 — czytnik kodów 1D z USB',
  seoDescription: 'Skaner kodów kreskowych Unitech MS250: czytnik kontaktowy CCD do kodów 1D, odczyt do 90 mm, 200 skanów na sekundę, rozdzielczość 3 mil, masa 83 g, USB. Skaner CCD Unitech MS250, MS250 Unitech do kasy POS i dokumentów. PN: MS250-CUCB00-DG.',
  description: `Unitech MS250 jest skanerem kontaktowym do kodów liniowych 1D. Odczytuje kody od zetknięcia z powierzchnią do odległości 90 mm (Code 39 20 mil), a pole odczytu ma szerokość 80 mm. Wystarczy przyłożyć okno do etykiety.

Liniowy czujnik CCD z diodą LED 635 nm wykonuje do 200 skanów na sekundę z rozdzielczością 3 mil (0,076 mm). Radzi sobie z nadrukami zniszczonymi i słabej jakości, obsługuje też symbolikę GS1 DataBar. Czujnik nie ma ruchomych części.

Obudowa ABS o wymiarach 163,3 × 79 × 62,5 mm waży 83 g. Duży spust ma trwałość 1 mln naciśnięć, a sygnał dźwiękowy 90 dBA potwierdza odczyt w hałaśliwym otoczeniu. Skaner pracuje w trybie spustu i migowym. Oświetlenie otoczenia nie powinno przekraczać 20 000 lx, a temperatura pracy mieści się między 0 a +50°C. Prefiks, sufiks i identyfikator kodu ustawia się kodami konfiguracyjnymi.

Zastosowania to kasy POS, obieg dokumentów, identyfikacja danych osobowych i kontrola zapasów. Model występuje z interfejsami USB, RS-232, Keyboard Wedge i USB COM. Wersja MS250-CUCB00-DG ma interfejs USB i przewód w zestawie.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-przewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS250',
  priceFrom: 179.37,
  images: [
    '/images/products/MS250-CUCB00-DG.png',
    '/images/products/MS250-CUCB00-DG-2.png',
    '/images/products/MS250-CUCB00-DG-3.png',
    '/images/products/MS250-CUCB00-DG-4.png',
  ],
  imageDescriptions: [
    'Unitech MS250 — ciemny skaner kontaktowy, widok z góry pod kątem na głowicę z oknem odczytu',
    'Unitech MS250 — widok z przodu na okno odczytu i wąską rękojeść',
    'Unitech MS250 — widok z boku na zakrzywioną rękojeść i niebieski spust',
    'Unitech MS250 — widok od spodu na duży niebieski spust',
  ],
  tags: ['retail'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner liniowy 1D (CCD), kontaktowy, przewodowy' },
    { name: 'Czujnik i oświetlenie', value: 'Liniowy czujnik CCD; czerwona dioda LED 635 nm' },
    { name: 'Szybkość skanowania', value: '200 skanów na sekundę (±10%)' },
    { name: 'Rozdzielczość optyczna', value: '3 mil (0,076 mm); minimalny kontrast druku 45%' },
    { name: 'Pole odczytu', value: 'Szerokość 80 mm; odległość odczytu do 90 mm (Code 39 20 mil)' },
    { name: 'Kody 1D', value: 'UPC-A, UPC-E, EAN-8, EAN-13, Industrial 2 of 5, Codabar, Matrix 2 of 5, Code 11, Code 93, Code 32, Code 128, Full ASCII Code 39, Interleaved 2 of 5, China Postal Code, MSI Plessey, EAN/UCC 128, Telepen, IATA, GS1 DataBar' },
    { name: 'Odporność na światło otoczenia', value: 'Do 20 000 lx' },
    { name: 'Kąty odczytu', value: 'Przód i tył ±10°–30° (±5°), boki ±60° (±5°)' },
    { name: 'Tryby pracy', value: 'Spust, migowy (flash)' },
    { name: 'Interfejsy', value: 'USB' },
    { name: 'Zasilanie', value: '5 V DC; pobór prądu: praca poniżej 120 mA, czuwanie poniżej 20 mA' },
    { name: 'Sygnał dźwiękowy', value: 'Co najmniej 90 dBA' },
    { name: 'Odporność na upadki', value: '1,5 m na beton (sam skaner)' },
    { name: 'Odporność na wyładowania elektrostatyczne', value: 'Sprawny po wyładowaniu 8 kV kontaktowym i 12 kV w powietrzu' },
    { name: 'Temperatura pracy', value: 'Od 0°C do +50°C' },
    { name: 'Temperatura przechowywania', value: 'Od −20°C do +70°C' },
    { name: 'Wilgotność', value: '20–95% bez kondensacji' },
    { name: 'Wymiary i masa', value: '163,3 × 79 × 62,5 mm; 83 g; obudowa ABS' },
    { name: 'Trwałość spustu', value: '1 mln naciśnięć' },
    { name: 'Konfiguracja', value: 'Kody konfiguracyjne; prefiks, sufiks i identyfikator kodu' },
    { name: 'Zawartość zestawu', value: 'Skaner, przewód USB' },
    { name: 'Certyfikaty', value: 'CE, FCC, BSMI, VCCI' },
    { name: 'Gwarancja producenta', value: '24 miesiące' },
    { name: 'Part Number', value: 'MS250-CUCB00-DG' },
  ],
  applications: ['Kasy POS i obieg dokumentów', 'Identyfikacja danych osobowych', 'Kontrola zapasów'],
  variants: [
    { partNumber: 'MS250-CUCB00-DG', name: 'MS250, USB', attributes: {}, priceFrom: 179.37, availability: 'available' },
  ],
  compatibleAccessories: [],
  relatedAccessories: [],
  relatedProducts: ['unitech-ms836', 'unitech-ms851-esd', 'zebra-li2208', 'newland-hr15-wahoo', 'newland-hr11-aringa'],
  downloads: [
    plik('Karta katalogowa Unitech MS250 (EN)', 'unitech-ms250-karta-katalogowa-en.pdf', '769 KB', 'datasheet'),
    plik('Instrukcja obsługi Unitech MS250 (EN)', 'unitech-ms250-instrukcja-en.pdf', '1,2 MB'),
  ],
  faq: [
    {
      question: 'Co oznacza, że MS250 jest skanerem kontaktowym?',
      answer: 'Skaner odczytuje kod od zetknięcia okna z etykietą do odległości 90 mm. Pole odczytu ma szerokość 80 mm, więc kod nie może być szerszy.',
    },
    {
      question: 'Czy MS250 czyta kody QR i Data Matrix?',
      answer: 'Nie. Liniowy czujnik CCD odczytuje wyłącznie symbole jednowymiarowe. Do QR i Data Matrix służą m.in. [Unitech MS838](/produkt/unitech-ms838) i [Unitech MS282e](/produkt/unitech-ms282e).',
    },
    {
      question: 'Jakie interfejsy ma Unitech MS250?',
      answer: 'Model występuje z interfejsami USB, RS-232, Keyboard Wedge i USB COM. Oferowana wersja MS250-CUCB00-DG łączy się przez USB, a przewód jest dołączony do skanera.',
    },
    {
      question: 'Jak konfiguruje się MS250?',
      answer: 'Przez kody konfiguracyjne z instrukcji obsługi. Pozwalają ustawić m.in. tryb pracy, prefiks, sufiks i identyfikator kodu.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS250?',
      answer: 'Laser 1D z szerokością odczytu 220 mm to [Unitech MS836](/produkt/unitech-ms836). Skanery 1D innych marek to [Newland HR11 Aringa](/produkt/newland-hr11-aringa) i [Newland HR15 Wahoo](/produkt/newland-hr15-wahoo).',
    },
  ],
  createdAt: '2026-10-30',
}

const ts100: Product = {
  id: 'unitech-ts100',
  slug: 'unitech-ts100',
  name: 'Unitech TS100',
  seoH1: 'Unitech TS100',
  shortDescription: 'Unitech TS100 — przewodowy skaner prezentacyjny 2D z dużym oknem odczytu 50° × 35°, odczytem auto-sensing 60 fps i podstawą kątową; USB.',
  seoTitle: 'Skaner prezentacyjny Unitech TS100 — czytnik 2D hands-free USB',
  seoDescription: 'Skaner prezentacyjny Unitech TS100: czytnik kodów 2D hands-free, okno odczytu 50° × 35°, auto-sensing 60 fps, podstawa kątowa, USB, 345 g. Skaner biurkowy Unitech TS100, TS100 Unitech do kas w handlu i hotelarstwie. PN: TS100-SUCB00-SG.',
  description: `Unitech TS100 to skaner prezentacyjny 2D do blatu kasy. Duże prostokątne okno odczytu obejmuje 50° w poziomie i 35° w pionie, a kod wystarczy pokazać przed skanerem. W trybie auto-sensing skaner pracuje z prędkością 60 klatek na sekundę i obie ręce zostają wolne.

TS100 odczytuje drukowane i wyświetlane kody 1D oraz 2D, m.in. kody kart członkowskich i płatności z ekranów smartfonów lub tabletów. Rozdzielczość wynosi 4 mil dla kodów 1D i 6,7 mil dla 2D. Kod QR 20 mil odczytuje z odległości 0–230 mm, a kod UPC-A 13 mil z 10–180 mm.

Podstawa kątowa pozwala ustawić skaner poziomo albo pochylić go do przodu o 15°. Obudowa o wymiarach 105 × 146 × 70 mm waży 345 g bez przewodu, więc mieści się na wąskich blatach.

Dostępne tryby to spust, prezentacyjny i buforowy (Buffer). W zestawie TS100-SUCB00-SG są skaner, przewód USB o długości 2 m i skrócona instrukcja. Zastosowania to handel, hotelarstwo i supermarkety.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-prezentacyjne'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/TS100',
  priceFrom: 356.41,
  images: [
    '/images/products/TS100-SUCB00-SG.png',
    '/images/products/TS100-SUCB00-SG-2.png',
    '/images/products/TS100-SUCB00-SG-3.png',
    '/images/products/TS100-SUCB00-SG-4.png',
  ],
  imageDescriptions: [
    'Unitech TS100 — czarny skaner prezentacyjny z niebieską ramką okna odczytu, widok z przodu pod kątem',
    'Unitech TS100 — widok z przodu na duże okno odczytu z niebieską ramką',
    'Unitech TS100 — widok z boku pod kątem na okno odczytu i obudowę',
    'Unitech TS100 — widok z tyłu na obudowę z etykietą znamionową i gniazdem przewodu',
  ],
  tags: ['retail'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Skaner prezentacyjny 2D (imager), przewodowy' },
    { name: 'Matryca', value: '1280 × 800 pikseli; 60 klatek na sekundę w trybie auto-sensing' },
    { name: 'Oświetlenie', value: 'Czerwona dioda LED 650 nm' },
    { name: 'Okno odczytu', value: 'Poziomo 50°, pionowo 35°' },
    { name: 'Kody 1D', value: 'UPC-A/E, EAN-8/13, dodatki UPC/EAN, Code 128, Code 39, Code 93, Code 11, Interleaved 2 of 5, Matrix 2 of 5, Codabar, MSI Plessey, GS1 DataBar, kody pocztowe (Chiny, Korea)' },
    { name: 'Kody 2D', value: 'PDF417, MicroPDF417, Data Matrix (także inverse), MaxiCode, QR Code, Micro QR, Aztec (także inverse), Han Xin (także inverse)' },
    { name: 'Rozdzielczość optyczna', value: '1D: 4 mil; 2D: 6,7 mil; minimalny kontrast druku 25%' },
    { name: 'Głębia ostrości', value: 'Code 39 3,13 mil: 30–50 mm; Code 39 5,13 mil: 20–115 mm; PDF 6,88 mil: 0–160 mm; UPC-A 13 mil: 10–180 mm; QR 20 mil: 0–230 mm' },
    { name: 'Odporność na światło otoczenia', value: '0–100 000 lx' },
    { name: 'Kąty odczytu', value: 'Pochylenie ±65°, obrót 360°' },
    { name: 'Tryby pracy', value: 'Spust, prezentacyjny, buforowy (Buffer)' },
    { name: 'Interfejsy', value: 'USB' },
    { name: 'Zasilanie', value: '5 V DC; pobór prądu 500 mA' },
    { name: 'Odporność na upadki', value: '1,0 m' },
    { name: 'Odporność na wyładowania elektrostatyczne', value: '±15 kV w powietrzu' },
    { name: 'Temperatura pracy', value: 'Od 0°C do +50°C' },
    { name: 'Temperatura przechowywania', value: 'Od −40°C do +70°C' },
    { name: 'Wilgotność', value: '0–95% bez kondensacji' },
    { name: 'Wymiary i masa', value: '105 × 146 × 70 mm; 345 g bez przewodu' },
    { name: 'Zawartość zestawu', value: 'Skaner, przewód USB 2 m, skrócona instrukcja' },
    { name: 'Certyfikaty', value: 'CE, FCC, BSMI' },
    { name: 'Part Number', value: 'TS100-SUCB00-SG' },
  ],
  applications: ['Kasy w handlu: karty członkowskie i płatności kodem z telefonu', 'Hotelarstwo', 'Supermarkety'],
  variants: [
    { partNumber: 'TS100-SUCB00-SG', name: 'TS100, USB', attributes: {}, priceFrom: 356.41, availability: 'available' },
  ],
  compatibleAccessories: [],
  relatedAccessories: [],
  relatedProducts: ['zebra-ds9308', 'zebra-ds9908', 'datalogic-magellan-900i', 'datalogic-magellan-1500i'],
  downloads: [
    plik('Karta katalogowa Unitech TS100 (EN)', 'unitech-ts100-karta-katalogowa-en.pdf', '478 KB', 'datasheet'),
    plik('Instrukcja obsługi Unitech TS100 (EN)', 'unitech-ts100-instrukcja-en.pdf', '2,4 MB'),
    plik('Skrócona instrukcja Unitech TS100 (EN)', 'unitech-ts100-skrocona-instrukcja-en.pdf', '7,9 MB'),
  ],
  faq: [
    {
      question: 'Do czego służy przycisk funkcyjny w TS100?',
      answer: 'Przycisk przełącza dwa tryby odczytu. Tryb Normal Scan (niebieska dioda) czyta kody drukowane i z ekranów. Tryb 1D Barcode Quick Scan (żółta dioda) czyta kody 1D i nie czyta kodów z ekranów. W nowszym oprogramowaniu tryb Normal Scan jest równie szybki.',
    },
    {
      question: 'Jak ustawić skaner TS100 na blacie?',
      answer: 'Podstawę kątową montuje się w dwóch położeniach. Podstawa zamontowana do góry ustawia skaner poziomo, a zamontowana do dołu pochyla go do przodu o 15°.',
    },
    {
      question: 'Czy TS100 czyta kody z ekranu telefonu?',
      answer: 'Tak. W trybie Normal Scan skaner czyta kody drukowane i cyfrowe, w tym kody wyświetlane na smartfonach i tabletach. Funkcja odczytu adresu URL z kodu QR włącza się kodem konfiguracyjnym z instrukcji.',
    },
    {
      question: 'Jakie interfejsy ma TS100?',
      answer: 'Model obsługuje USB i RS-232. Sprzedawany zestaw TS100-SUCB00-SG to wersja USB z dwumetrowym przewodem; wariantu RS-232 nie oferujemy.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech TS100?',
      answer: 'Skanery prezentacyjne innych producentów to m.in. [Zebra DS9308](/produkt/zebra-ds9308), [Zebra DS9908](/produkt/zebra-ds9908) i [Datalogic Magellan 900i](/produkt/datalogic-magellan-900i). Skaner ręczny, który można też ustawić w podstawce, to [Unitech MS282e](/produkt/unitech-ms282e).',
    },
  ],
  createdAt: '2026-10-30',
}

export const unitechScannerProducts: Product[] = [
  ms852,
  ms852Plus,
  ms852Lr,
  ms852DpmEsd,
  ms852PlusEsd,
  ms851Esd,
  ms838,
  ms282e,
  ms836,
  ms250,
  ts100,
]
