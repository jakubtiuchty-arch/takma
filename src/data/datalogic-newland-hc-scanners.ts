import type { Product } from './products'

// Skanery dla ochrony zdrowia: Datalogic Gryphon 4600 HC (GD4690, GD4620, GBT4600, GM4600) i Newland HR33 / HR23 AI White
// oraz akcesoria w kolorze białym. Konfiguracje PN: karta Gryphon 4600 Rev A (05.2025), strona serii i e-katalog Datalogic,
// instrukcja GD4600 (lista środków dla modeli HC), karty katalogowe Newland White (09–10.2026); ceny i stany z /api/stock z 25.10.2026.
// GM4600-HC-910-HP i GM4600-HC-910K1-HP pominięte (910 MHz poza UE). Dokumentacja: docs/catalog/skanery-hc-2026-10-25/S3.md

const GRYPHON_DATASHEET = { name: 'Karta katalogowa Gryphon 4600 (EN)', type: 'datasheet' as const, url: '/datasheets/datalogic-gryphon-4600-en.pdf', size: '676 KB' }
const GRYPHON_CORDED_GUIDE = { name: 'Skrócona instrukcja Gryphon GD4600 z listą środków dla modeli HC (EN)', type: 'manual' as const, url: '/instrukcje/datalogic-gryphon-corded-en.pdf', size: '3,4 MB' }
const GRYPHON_CORDLESS_GUIDE = { name: 'Skrócona instrukcja Gryphon GBT4600 / GM4600 i baz WLC4690 (EN)', type: 'manual' as const, url: '/instrukcje/datalogic-gryphon-cordless-en.pdf', size: '3,0 MB' }
const GRYPHON_SAME_AS = 'https://www.datalogic.com/eng/retail-manufacturing-transportation-logistics-healthcare-gs1-digital-link-other-applications/handheld-scanners/gryphon-4600-series-pd-1147.html'

const NL_CORDED_GUIDE = { name: 'Instrukcja HR23 / HR33 AI, wersje przewodowe (EN)', type: 'manual' as const, url: '/downloads/newland/HR23-HR33-AI-Corded-User-Guide.pdf', size: '5,6 MB' }
const NL_BT_GUIDE = { name: 'Instrukcja HR23 / HR33 AI BT (EN)', type: 'manual' as const, url: '/downloads/newland/HR23-HR33-AI-BT-User-Guide.pdf', size: '6,1 MB' }

const CORDED_HC = ['datalogic-gryphon-gd4690-hc', 'datalogic-gryphon-gd4620-hc', 'zebra-ds2208-hc', 'zebra-ds4608-hc', 'zebra-ds8208-hc', 'honeywell-xenon-ultra-1960h', 'newland-hr33-marlin-ai-white', 'newland-hr23-dorada-ai-white']
const CORDLESS_HC = ['datalogic-gryphon-gbt4600-hc', 'datalogic-gryphon-gm4600-hc', 'zebra-ds2278-hc', 'zebra-ds8288-hc', 'honeywell-xenon-ultra-1962h', 'newland-hr33-marlin-ai-bt-white', 'newland-hr23-dorada-ai-bt-white', 'socket-mobile-durascan-d745', 'socket-mobile-durascan-d765', 'zebra-cs60-hc']
const without = (list: string[], id: string) => list.filter(item => item !== id)

// ---- Datalogic Gryphon 4600 HC ----

const gd4690Hc: Product = {
  id: 'datalogic-gryphon-gd4690-hc',
  slug: 'datalogic-gryphon-gd4690-hc',
  name: 'Datalogic Gryphon GD4690 HC',
  shortDescription: 'Datalogic Gryphon GD4690 HC — przewodowy skaner kodów 2D dla szpitali, laboratoriów i aptek: obudowa White HC przygotowana do dezynfekcji, optyka HP z dwiema matrycami, złącza USB i RS-232.',
  seoTitle: 'Datalogic Gryphon GD4690 HC — skaner 2D dla służby zdrowia',
  seoDescription: 'Skaner kodów Datalogic Gryphon GD4690 HC do szpitali, laboratoriów i aptek: obudowa przygotowana do dezynfekcji z dodatkami antymikrobowymi (ISO 22196), optyka HP, USB i RS-232. Skaner medyczny Datalogic GD4690 HC, Gryphon GD4690 HC Datalogic. PN: GD4690-HCK1-HP.',
  description: `Datalogic Gryphon GD4690 HC to przewodowy skaner 2D w białej wersji dla ochrony zdrowia. Jest przeznaczony dla laboratoriów, aptek i opieki przy łóżku pacjenta. Skaner służy do identyfikacji pacjenta, weryfikacji leków i oznaczania próbek.

Obudowę przygotowano do dezynfekcji. Tworzywo zawiera dodatki antymikrobowe zgodne z ISO 22196 i jest przeznaczone do codziennego czyszczenia silnymi środkami dezynfekcyjnymi. Listę zalecanych środków dla białych modeli GD4600 HC zawiera skrócona instrukcja w plikach do pobrania.

Optyka HP łączy sensor 1,5 MP z sensorem VGA. Taki układ odczytuje kody zarówno z bliska, jak i z większej odległości, także małe kody o wysokiej gęstości. Dwurdzeniowy procesor z algorytmami AI dekoduje kody uszkodzone, słabo wydrukowane, błyszczące i umieszczone na zakrzywionej powierzchni. Odczyt sygnalizują: Green Spot widoczny na kodzie, diody 3GL oraz dźwięk.

Zestaw GD4690-HCK1-HP zawiera skaner i biały [przewód USB-A 90A052278](/produkt/datalogic-usb-90a052278). Skaner komunikuje się przez USB-C, USB lub RS-232 i pracuje przy napięciu 4,5–14 V DC. Przewodowe modele Gryphon 4600 mają 5 lat gwarancji producenta.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-dla-sluzby-zdrowia', 'skanery-przewodowe'],
  manufacturerId: 'datalogic',
  priceFrom: 990.19,
  images: [
    '/images/products/GD4690-HCK1-HP.png',
    '/images/products/GD4690-HCK1-HP-2.png',
    '/images/products/GD4690-HCK1-HP-3.png',
    '/images/products/GD4690-HCK1-HP-4.png',
  ],
  imageDescriptions: [
    'Datalogic Gryphon GD4690 HC — biały skaner w wersji dla ochrony zdrowia, widok z przodu pod kątem na okno odczytu i spust',
    'Datalogic Gryphon GD4690 HC — widok z góry na rękojeść i jasny przewód',
    'Datalogic Gryphon GD4690 HC — widok z boku, rękojeść z przewodem',
    'Datalogic Gryphon GD4690 HC z białym przewodem USB',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner 2D (imager), przewodowy' },
    { name: 'Wersja', value: 'Healthcare (HC), kolor biały' },
    { name: 'Obudowa', value: 'Przygotowana do dezynfekcji; tworzywo z dodatkami antymikrobowymi zgodne z ISO 22196' },
    { name: 'Optyka', value: 'HP (High Performance), dwie matryce: 1,5 MP (1360 × 1120) i VGA (640 × 600)' },
    { name: 'Dekodowanie', value: 'Dwurdzeniowy procesor, algorytmy AI z dekodowaniem neuronowym' },
    { name: 'Kody 1D i 2D', value: 'Kody liniowe, w tym GS1 DataBar; Aztec, Data Matrix, MaxiCode, QR, Micro QR, Dot Code, Han Xin, GS1 Digital Link; PDF417, MicroPDF417 i kody złożone; kody pocztowe' },
    { name: 'Inne funkcje odczytu', value: 'Kody Digimarc; OCR-A, OCR-B, MICR; zapis obrazu BMP, JPEG, TIFF' },
    { name: 'Rozdzielczość maks.', value: '1D i PDF417: 0,077 mm (3 mil); Data Matrix: 0,102 mm (4 mil)' },
    { name: 'Zasięg (przykłady)', value: 'EAN/UPC 13 mil: do 100 cm; Data Matrix 10 mil: 0,5–29,5 cm; QR 10 mil: 0,5–25 cm' },
    { name: 'Celownik i oświetlenie', value: 'Zielony krzyż LED; oświetlenie ciepłe białe lub czerwone, wybierane przez użytkownika' },
    { name: 'Potwierdzenie odczytu', value: 'Green Spot na kodzie, dioda odczytu, sygnał dźwiękowy z regulacją tonu' },
    { name: 'Tolerancja ruchu', value: '70 IPS' },
    { name: 'Kąty odczytu', value: 'Pochylenie ±65°, obrót 360°, odchylenie ±65°' },
    { name: 'Interfejsy', value: 'USB-C, USB, RS-232' },
    { name: 'Zasilanie', value: '4,5–14 V DC ±5%' },
    { name: 'Pobór prądu', value: 'Praca: < 300 mA przy 5 V, < 150 mA przy 12 V; czuwanie: < 70 mA przy 5 V' },
    { name: 'Klasa ochrony', value: 'IP52' },
    { name: 'Odporność', value: 'Wielokrotne upadki z 1,8 m na beton; 2000 przewrotów z 0,5 m; spust na 10 mln naciśnięć; ESD 16 kV' },
    { name: 'Temperatura', value: 'Praca: 0–50 °C; przechowywanie: −40–70 °C' },
    { name: 'Wilgotność', value: '0–95% bez kondensacji' },
    { name: 'Wymiary i masa', value: '18 × 6,5 × 7,9 cm; 144 g' },
    { name: 'W zestawie GD4690-HCK1-HP', value: 'Skaner GD4690 HC, biały przewód USB-A 90A052278 (2 m)' },
    { name: 'Oprogramowanie', value: 'Datalogic Aladdin (konfiguracja), Datalogic Connect (zarządzanie zdalne), OPOS, JavaPOS, SDK dla Androida' },
    { name: 'Gwarancja producenta', value: '5 lat' },
  ],
  applications: ['Identyfikacja pacjenta', 'Weryfikacja leków', 'Oznaczanie próbek w laboratorium', 'Apteka szpitalna'],
  variants: [
    { partNumber: 'GD4690-HCK1-HP', name: 'Zestaw: skaner HC i biały przewód USB-A', attributes: {}, priceFrom: 990.19, availability: 'available' },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['datalogic-usb-90a052278', 'datalogic-usb-c-90a052353', 'datalogic-gryphon-std-g041-wh', 'datalogic-gryphon-hld-g041-wh'],
  faq: [
    {
      question: 'Czym Gryphon GD4690 HC różni się od czarnego GD4690?',
      answer: 'Wersja HC ma białą obudowę przygotowaną do dezynfekcji, z dodatkami antymikrobowymi zgodnymi z ISO 22196. W zestawie jest biały przewód 90A052278. Optyka HP, interfejsy i zasilanie nie różnią się od czarnego modelu [Datalogic Gryphon GD4690](/produkt/datalogic-gryphon-gd4690).',
    },
    {
      question: 'Jakie środki dezynfekcyjne Datalogic dopuszcza dla GD4690 HC?',
      answer: 'Dla białych modeli GD4600 HC Datalogic zaleca: Sani-Cloth HB, Sani-Cloth Plus i Super Sani-Cloth (czwartorzędowe chlorki amoniowe), Hepacide Quat II, chusteczki z 70% alkoholem izopropylowym, CaviWipes, Virex 256, Formula 409 Glass and Surface Cleaner, Windex Blue, Clorox Bleach i Clorox Healthcare Bleach Germicidal Cleaner (podchloryn sodu), 3% nadtlenek wodoru, chusteczki ProSpray oraz łagodny płyn do naczyń z wodą. Środek nanosi się na miękką ściereczkę, a nie bezpośrednio na skaner. Nie wolno używać środków stężonych, aerozoli, rozpuszczalników ani materiałów ściernych. Po czyszczeniu skaner wyciera się do sucha.',
    },
    {
      question: 'Czy GD4690 HC odczytuje kody z ekranów telefonów i tabletów?',
      answer: 'Tak. Seria Gryphon 4600 odczytuje kody 1D i 2D z ekranów urządzeń mobilnych, także kody GS1 Digital Link.',
    },
    {
      question: 'Którą wersję wybrać: GD4690 HC czy GD4620 HC?',
      answer: 'GD4690 HC ma optykę HP z dwiema matrycami, interfejs RS-232 oraz zasilanie 4,5–14 V DC. Kod EAN/UPC 13 mil odczytuje z odległości do 100 cm. [Gryphon GD4620 HC](/produkt/datalogic-gryphon-gd4620-hc) ma optykę HD z jedną matrycą 1,5 MP, sam interfejs USB i zasilanie 5 V. Ten sam kod odczytuje do 50 cm.',
    },
    {
      question: 'Jak ustawić GD4690 HC na stanowisku?',
      answer: 'Do pracy na blacie służy biała podstawka z ramieniem [STD-G041-WH](/produkt/datalogic-gryphon-std-g041-wh). Uchwyt [HLD-G041-WH](/produkt/datalogic-gryphon-hld-g041-wh) montuje się na biurku albo na ścianie.',
    },
    {
      question: 'Jakie inne przewodowe skanery dla służby zdrowia są w ofercie?',
      answer: 'Porównywalne przewodowe modele dla ochrony zdrowia to m.in. [Zebra DS2208-HC](/produkt/zebra-ds2208-hc), [Zebra DS4608-HC](/produkt/zebra-ds4608-hc), [Honeywell Xenon Ultra 1960h](/produkt/honeywell-xenon-ultra-1960h) i [Newland HR33 Marlin AI Corded White](/produkt/newland-hr33-marlin-ai-white). Wersje bezprzewodowe Gryphon 4600 HC to [GBT4600 HC](/produkt/datalogic-gryphon-gbt4600-hc) z Bluetooth i [GM4600 HC](/produkt/datalogic-gryphon-gm4600-hc) z radiem STAR 433 MHz.',
    },
  ],
  downloads: [GRYPHON_DATASHEET, GRYPHON_CORDED_GUIDE],
  relatedProducts: without(CORDED_HC, 'datalogic-gryphon-gd4690-hc'),
  createdAt: '2026-10-25',
  sameAs: GRYPHON_SAME_AS,
}

const gd4620Hc: Product = {
  id: 'datalogic-gryphon-gd4620-hc',
  slug: 'datalogic-gryphon-gd4620-hc',
  name: 'Datalogic Gryphon GD4620 HC',
  shortDescription: 'Datalogic Gryphon GD4620 HC — przewodowy skaner 2D HD z USB dla szpitali i laboratoriów: biała obudowa antymikrobowa, zasilanie 5 V, 5 lat gwarancji.',
  seoTitle: 'Datalogic Gryphon GD4620 HC — skaner kodów USB do szpitala',
  seoDescription: 'Datalogic Gryphon GD4620 HC: biały skaner kodów 2D z optyką HD i samym USB, obudowa przygotowana do dezynfekcji, tworzywo antymikrobowe ISO 22196. Skaner kodów kreskowych do szpitala Datalogic GD4620 HC, GD4620 HC Datalogic. PN: GD4620-HCK1-HD.',
  description: `Datalogic Gryphon GD4620 HC to biały skaner 2D z przewodem USB, przeznaczony dla placówek ochrony zdrowia. Ma jedną matrycę 1,5 MP w optyce HD (High Density). Wersja HD jest przeznaczona do kodów zwartych i złożonych. Kod EAN/UPC 13 mil skaner odczytuje z odległości do 50 cm, a symbol Data Matrix 10 mil z zakresu 0,5–20 cm.

GD4620 HC wymaga zasilania 5 V DC. Model nie ma interfejsu RS-232, dlatego pasuje do stanowisk, na których wszystkie urządzenia łączą się przez USB lub USB-C. W zestawie GD4620-HCK1-HD jest biały [przewód USB-A 90A052278](/produkt/datalogic-usb-90a052278) o długości 2 m.

Obudowa w kolorze White HC znosi codzienne przecieranie silnymi środkami dezynfekcyjnymi. Tworzywo z dodatkami antymikrobowymi spełnia normę ISO 22196. Wykaz preparatów do białych modeli jest w skróconej instrukcji GD4600.

Dekodowanie wspierają algorytmy AI. Ułatwiają odczyt kodów zniszczonych, zniekształconych oraz kodów na lśniących lub wypukłych opakowaniach. Kod wskazuje zielony celownik LED w kształcie krzyża. Oświetlenie przełącza się między światłem ciepłym białym i czerwonym. Gwarancja Datalogic na model przewodowy wynosi 5 lat.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-dla-sluzby-zdrowia', 'skanery-przewodowe'],
  manufacturerId: 'datalogic',
  priceFrom: 891.64,
  images: ['/images/products/GD4620-HCK1-HD.png', '/images/products/GD4620-HCK1-HD-2.png'],
  imageDescriptions: [
    'Datalogic Gryphon GD4620 HC — biała obudowa dla ochrony zdrowia, widok z przodu pod kątem (zdjęcie poglądowe: obudowa wspólna dla przewodowych Gryphon 4600 HC)',
    'Datalogic Gryphon GD4620 HC — biała obudowa z jasnym przewodem, ujęcie z góry (obudowa wspólna dla przewodowych Gryphon 4600 HC)',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner 2D (imager), przewodowy, USB' },
    { name: 'Wersja', value: 'Healthcare (HC), kolor White HC' },
    { name: 'Obudowa', value: 'Przygotowana do dezynfekcji, z dodatkami antymikrobowymi zgodnymi z ISO 22196' },
    { name: 'Optyka', value: 'HD (High Density), jedna matryca 1,5 MP (1360 × 1120)' },
    { name: 'Dekodowanie', value: 'Dwurdzeniowy procesor i algorytmy AI' },
    { name: 'Kody 1D i 2D', value: 'Kody liniowe i GS1 DataBar; Data Matrix, QR, Micro QR, Aztec, MaxiCode, Dot Code, Han Xin, GS1 Digital Link; PDF417, MicroPDF417, kody złożone; kody pocztowe' },
    { name: 'Inne funkcje odczytu', value: 'Digimarc; OCR-A, OCR-B, MICR; przechwytywanie obrazu (BMP, JPEG, TIFF)' },
    { name: 'Rozdzielczość maks.', value: '0,077 mm (3 mil) dla 1D i PDF417; 0,102 mm (4 mil) dla Data Matrix' },
    { name: 'Zasięg (przykłady)', value: 'EAN/UPC 13 mil: do 50 cm; Code 39 3 mil: 2,5–15 cm; Data Matrix 10 mil: 0,5–20 cm; QR 10 mil: 0,5–20 cm' },
    { name: 'Celownik i oświetlenie', value: 'Zielony krzyż LED; dwukolorowe LED: ciepłe białe i czerwone' },
    { name: 'Sygnalizacja odczytu', value: 'Green Spot, dioda odczytu, brzęczyk z regulowanym tonem' },
    { name: 'Interfejsy', value: 'USB-C, USB (bez RS-232)' },
    { name: 'Zasilanie', value: '5 V DC ±5%' },
    { name: 'Klasa ochrony', value: 'IP52' },
    { name: 'Odporność', value: 'Upadki z 1,8 m na beton; 2000 przewrotów z 0,5 m; spust 10 mln naciśnięć' },
    { name: 'Temperatura pracy', value: '0–50 °C' },
    { name: 'Wymiary i masa', value: '18 × 6,5 × 7,9 cm; 144 g' },
    { name: 'W zestawie GD4620-HCK1-HD', value: 'Skaner GD4620 HC i biały przewód USB-A 90A052278' },
    { name: 'Gwarancja producenta', value: '5 lat' },
  ],
  applications: ['Rejestracja i przyjęcie pacjenta', 'Oznaczanie próbek', 'Laboratorium', 'Apteka'],
  variants: [
    { partNumber: 'GD4620-HCK1-HD', name: 'Zestaw: skaner HD i biały przewód USB-A', attributes: {}, priceFrom: 891.64, availability: 'available' },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['datalogic-usb-90a052278', 'datalogic-usb-c-90a052353', 'datalogic-gryphon-std-g041-wh', 'datalogic-gryphon-hld-g041-wh'],
  faq: [
    {
      question: 'Czy GD4620 HC można podłączyć do portu RS-232?',
      answer: 'Nie. GD4620 HC obsługuje wyłącznie USB i USB-C oraz wymaga zasilania 5 V. Do stanowisk z RS-232 przeznaczony jest [Gryphon GD4690 HC](/produkt/datalogic-gryphon-gd4690-hc).',
    },
    {
      question: 'Czym czyścić i dezynfekować GD4620 HC?',
      answer: 'Lista Datalogic dla białych skanerów GD4600 HC obejmuje: alkohol izopropylowy 70% w chusteczkach, nadtlenek wodoru 3%, chusteczki Sani-Cloth HB, Sani-Cloth Plus i Super Sani-Cloth z roztworem czwartorzędowego chlorku amoniowego, wirusobójczy Hepacide Quat II, Windex Blue, Formula 409 Glass and Surface Cleaner, Virex 256, CaviWipes, preparaty Clorox z podchlorynem sodu (Clorox Bleach, Clorox Healthcare Bleach Germicidal Cleaner), ProSpray Wipes oraz wodę z delikatnym płynem do mycia naczyń. Płyn należy nanieść na ściereczkę i wycisnąć jego nadmiar. Skanera nie spryskuje się ani nie polewa. Na koniec obudowę osusza się drugą czystą ściereczką.',
    },
    {
      question: 'Co oznacza optyka HD w GD4620 HC?',
      answer: 'HD (High Density) to wersja z jedną matrycą 1,5 MP. Odczytuje kody 1D o szerokości modułu 3 mil i Data Matrix 4 mil. Zasięg jest krótszy niż w optyce HP: kod EAN/UPC 13 mil GD4620 HC odczytuje z odległości do 50 cm.',
    },
    {
      question: 'Jaki przewód zamówić do komputera z gniazdem USB-C?',
      answer: 'Do portu USB-C służy biały [przewód USB-C 90A052353](/produkt/datalogic-usb-c-90a052353) o długości 2 m. Zestaw GD4620-HCK1-HD zawiera przewód USB-A 90A052278.',
    },
    {
      question: 'Jaka jest gwarancja na GD4620 HC?',
      answer: 'Datalogic udziela 5 lat gwarancji fabrycznej na przewodowe modele Gryphon 4600. Programy serwisowe EASEOFCARE rozszerzają zakres ochrony.',
    },
    {
      question: 'Jakie skanery są alternatywą dla GD4620 HC?',
      answer: 'Alternatywą dla GD4620 HC mogą być: [Honeywell Xenon Ultra 1960h](/produkt/honeywell-xenon-ultra-1960h), [Newland HR23 Dorada AI Corded White](/produkt/newland-hr23-dorada-ai-white) albo [Zebra DS2208-HC](/produkt/zebra-ds2208-hc).',
    },
  ],
  downloads: [GRYPHON_DATASHEET, GRYPHON_CORDED_GUIDE],
  relatedProducts: without(CORDED_HC, 'datalogic-gryphon-gd4620-hc'),
  createdAt: '2026-10-25',
  sameAs: GRYPHON_SAME_AS,
}

const KIT_TOOLTIP_BT = 'Zawartość pozycji.\n\nSkaner, baza i przewód — skaner HC z akumulatorem, biała baza Bluetooth z ładowaniem indukcyjnym i biały przewód USB-A.\n\nSam skaner — skaner HC z akumulatorem 3250 mAh, bez bazy i przewodu; do uzupełnienia lub wymiany skanera przy istniejącej bazie.'
const KIT_TOOLTIP_433 = 'Zakres dostawy GM4600 HC.\n\nSkaner, baza i przewód — skaner, biały odbiornik radiowy STAR 433 MHz z ładowaniem indukcyjnym i biały przewód USB-A.\n\nSam skaner — tylko skaner z akumulatorem; pracuje z posiadaną bazą 433 MHz w wersji HC, do której można przypisać kolejne skanery.'

const gbt4600Hc: Product = {
  id: 'datalogic-gryphon-gbt4600-hc',
  slug: 'datalogic-gryphon-gbt4600-hc',
  name: 'Datalogic Gryphon GBT4600 HC',
  shortDescription: 'Datalogic Gryphon GBT4600 HC — bezprzewodowy skaner 2D Bluetooth 5.2 dla szpitali: obudowa antymikrobowa przygotowana do dezynfekcji, ładowanie indukcyjne, wibracja.',
  seoTitle: 'Datalogic Gryphon GBT4600 HC — skaner Bluetooth dla szpitali',
  seoDescription: 'Bezprzewodowy skaner Datalogic Gryphon GBT4600 HC dla służby zdrowia: Bluetooth 5.2, ładowanie indukcyjne bez styków, obudowa antymikrobowa ISO 22196, wibracja. Skaner Bluetooth Datalogic GBT4600 HC, GBT4600 HC Datalogic. PN: GBT4600-HC-BTK1-HP, GBT4600-HC-HP.',
  description: `Datalogic Gryphon GBT4600 HC to biały skaner kodów 2D bez przewodu, wyposażony w Bluetooth 5.2 i przeznaczony dla ochrony zdrowia. Bez przewodu łatwiej skanować przy łóżku pacjenta i w laboratorium.

Skaner ładuje się indukcyjnie w bazie WLC4690. Baza nie ma styków, więc nie trzeba ich czyścić ani konserwować. Obudowa jest przygotowana do dezynfekcji, a tworzywo z dodatkami antymikrobowymi spełnia ISO 22196.

Poza sygnałem dźwiękowym i zielonym punktem Green Spot model bezprzewodowy potwierdza odczyt wibracją. Optyka HP z matrycami 1,5 MP i VGA odczytuje kody 1D i 2D, także z ekranów. Jedna baza obsługuje do 7 skanerów, a zasięg Bluetooth klasy 1 między skanerem a bazą w otwartej przestrzeni wynosi 100 m. Akumulator 3250 mAh wystarcza na ponad 80 000 odczytów.

Zestaw GBT4600-HC-BTK1-HP zawiera skaner, [bazę WLC4690-HC-BT](/produkt/datalogic-gryphon-wlc4690-hc-bt) i biały [przewód USB-A 90A052278](/produkt/datalogic-usb-90a052278). GBT4600-HC-HP to sam skaner do posiadanej bazy. Dane trafiają do bazy albo wprost do komputera lub tabletu; skaner obsługuje profile SPP, HID i HOGP. Gwarancja producenta na model bezprzewodowy wynosi 3 lata.

**Wymagane dla GBT4600-HC-HP — sprzedawane osobno**

- [Baza Bluetooth Datalogic WLC4690-HC-BT (WLC4690-HC-BT)](/produkt/datalogic-gryphon-wlc4690-hc-bt)
- [Przewód USB-A Datalogic biały (90A052278)](/produkt/datalogic-usb-90a052278)

Baza ładuje akumulator skanera. Przewód łączy bazę z komputerem.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-dla-sluzby-zdrowia', 'skanery-bezprzewodowe'],
  manufacturerId: 'datalogic',
  priceFrom: 1634.28,
  images: [
    '/images/products/GBT4600-HC-HP.png',
    '/images/products/GBT4600-HC-BTK1-HP-2.png',
    '/images/products/GBT4600-HC-HP-2.png',
    '/images/products/GBT4600-HC-BTK1-HP.png',
  ],
  imageDescriptions: [
    'Datalogic Gryphon GBT4600 HC — biały skaner bezprzewodowy dla służby zdrowia, widok z przodu z lewej strony na okno odczytu, zielony spust i rękojeść bez przewodu',
    'Datalogic Gryphon GBT4600 HC w białej bazie WLC4690-HC-BT z ładowaniem indukcyjnym',
    'Datalogic Gryphon GBT4600 HC — widok z przodu z prawej strony na okno odczytu z włączonym oświetleniem',
    'Datalogic Gryphon GBT4600 HC — widok z góry na obudowę z białym i zielonym wzorem oraz logo Datalogic',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner 2D (imager), bezprzewodowy, Bluetooth' },
    { name: 'Wersja', value: 'Healthcare (HC), kolor White HC' },
    { name: 'Obudowa', value: 'Przygotowana do dezynfekcji; dodatki antymikrobowe zgodne z ISO 22196' },
    { name: 'Optyka', value: 'HP: 1,5 MP (1360 × 1120) + VGA (640 × 600)' },
    { name: 'Odczyt', value: 'Kody 1D i 2D, GS1 Digital Link, Digimarc, OCR-A, OCR-B, MICR; odczyt z ekranów urządzeń mobilnych' },
    { name: 'Zasięg (przykłady)', value: 'EAN/UPC 13 mil: do 100 cm; PDF417 10 mil: 0,5–38,5 cm; Data Matrix 10 mil: 0,5–29,5 cm' },
    { name: 'Potwierdzenie odczytu', value: 'Green Spot, 3GL, sygnał dźwiękowy, wibracja' },
    { name: 'Bluetooth', value: '5.2 Classic i Low Energy; klasa mocy 1, 2 lub 3 do wyboru; 2,4 GHz' },
    { name: 'Zasięg radiowy', value: 'Do 100 m w otwartej przestrzeni (klasa 1, połączenie z bazą)' },
    { name: 'Profile', value: 'SPP, HID, HOGP' },
    { name: 'Skanery na jedną bazę', value: 'Do 7' },
    { name: 'Bezpieczeństwo transmisji', value: 'Szyfrowanie danych, uwierzytelnianie skanera' },
    { name: 'Akumulator', value: 'Li-Ion 3250 mAh; ponad 80 000 odczytów na ładowaniu; ładowanie do pełna 3,5 h, 10–80% w 2 h (przy 12 V DC)' },
    { name: 'Ładowanie', value: 'Indukcyjne w bazie WLC4690 (zasilanie bazy 4,5–14 V DC)' },
    { name: 'Interfejsy bazy', value: 'USB-C, USB, RS-232' },
    { name: 'Klasa ochrony', value: 'IP52' },
    { name: 'Odporność', value: 'Upadki z 1,8 m na beton; 2000 przewrotów z 0,5 m' },
    { name: 'Temperatura pracy', value: '0–50 °C' },
    { name: 'Wymiary i masa', value: '18 × 6,5 × 7,9 cm; 218 g z akumulatorem' },
    { name: 'Gwarancja producenta', value: '3 lata' },
  ],
  applications: ['Identyfikacja pacjenta przy łóżku', 'Weryfikacja leków', 'Laboratorium', 'Apteka'],
  variants: [
    { partNumber: 'GBT4600-HC-BTK1-HP', name: 'Zestaw: skaner, baza WLC4690-HC-BT, przewód USB-A', attributes: { 'Zawartość': 'Skaner, baza i przewód' }, priceFrom: 2388.96, availability: 'available' },
    { partNumber: 'GBT4600-HC-HP', name: 'Sam skaner z akumulatorem', attributes: { 'Zawartość': 'Sam skaner' }, priceFrom: 1634.28, availability: 'unavailable' },
  ],
  variantAttributeTooltips: { 'Zawartość': KIT_TOOLTIP_BT },
  compatibleAccessories: [],
  relatedAccessories: ['datalogic-gryphon-wlc4690-hc-bt', 'datalogic-usb-90a052278', 'datalogic-gryphon-cc-wlc4690-hc', 'datalogic-gryphon-pa-wlc4690-hc', 'datalogic-gryphon-ba-wlc4690-hc', 'datalogic-gryphon-hld-g041-wh', 'datalogic-powerscan-8-0935', 'datalogic-powerscan-6003-0940'],
  faq: [
    {
      question: 'Czym GBT4600 HC różni się od zwykłego GBT4600?',
      answer: 'Różni się kolorem White HC i tworzywem obudowy: jest ono przygotowane do dezynfekcji i zawiera dodatki antymikrobowe (ISO 22196). Do ładowania służy biała baza WLC4690-HC-BT. Bluetooth 5.2, optyka HP i akumulator 3250 mAh pozostają takie, jak w [Datalogic Gryphon GBT4600](/produkt/datalogic-gryphon-gbt4600).',
    },
    {
      question: 'Czy GBT4600 HC połączy się z tabletem bez bazy?',
      answer: 'Tak. Przez Bluetooth skaner paruje się wprost z komputerem lub tabletem w profilu HID, SPP albo HOGP. Akumulator w skanerze ładuje się indukcyjnie w bazie WLC4690-HC-BT.',
    },
    {
      question: 'Czy GBT4600 HC potwierdza odczyt bez dźwięku?',
      answer: 'Tak. Modele bezprzewodowe Gryphon 4600 sygnalizują odczyt wibracją. Zielony punkt Green Spot pojawia się bezpośrednio na odczytanym kodzie. Ton sygnału dźwiękowego można zmienić w konfiguracji.',
    },
    {
      question: 'Jak dezynfekować GBT4600 HC?',
      answer: 'Obudowa wersji HC jest przeznaczona do codziennego czyszczenia silnymi środkami dezynfekcyjnymi. Przed wyborem preparatu warto potwierdzić go w TAKMA lub u producenta. Ładowanie indukcyjne nie wymaga czyszczenia styków.',
    },
    {
      question: 'Jak zamocować bazę WLC4690-HC-BT na wózku medycznym?',
      answer: 'Do mocowania bazy na wózku służy biały [klips CC-WLC4690-HC](/produkt/datalogic-gryphon-cc-wlc4690-hc). Adaptery [PA-WLC4690-HC](/produkt/datalogic-gryphon-pa-wlc4690-hc) i [BA-WLC4690-HC](/produkt/datalogic-gryphon-ba-wlc4690-hc) pozwalają użyć systemów mocowania WLC4090 i WLC4190.',
    },
    {
      question: 'Jakie bezprzewodowe skanery dla służby zdrowia są alternatywą?',
      answer: 'Do porównania w klasie skanerów Bluetooth: [Newland HR33 Marlin AI Bluetooth White](/produkt/newland-hr33-marlin-ai-bt-white), [Zebra DS2278-HC](/produkt/zebra-ds2278-hc) oraz [Honeywell Xenon Ultra 1962h](/produkt/honeywell-xenon-ultra-1962h). Wersja z radiem STAR 433 MHz to [Gryphon GM4600 HC](/produkt/datalogic-gryphon-gm4600-hc).',
    },
  ],
  downloads: [GRYPHON_DATASHEET, GRYPHON_CORDLESS_GUIDE],
  relatedProducts: without(CORDLESS_HC, 'datalogic-gryphon-gbt4600-hc'),
  createdAt: '2026-10-25',
  sameAs: GRYPHON_SAME_AS,
}

const gm4600Hc: Product = {
  id: 'datalogic-gryphon-gm4600-hc',
  slug: 'datalogic-gryphon-gm4600-hc',
  name: 'Datalogic Gryphon GM4600 HC',
  shortDescription: 'Datalogic Gryphon GM4600 HC — bezprzewodowy skaner 2D z radiem STAR 433 MHz dla ochrony zdrowia: do 16 skanerów na odbiornik, biała obudowa do dezynfekcji.',
  seoTitle: 'Datalogic Gryphon GM4600 HC — skaner radiowy 433 MHz HC',
  seoDescription: 'Datalogic Gryphon GM4600 HC: bezprzewodowy skaner 2D z systemem STAR 433 MHz dla szpitali i laboratoriów, obudowa antymikrobowa ISO 22196, ładowanie indukcyjne. Skaner bezprzewodowy Datalogic GM4600 HC, GM4600 HC Datalogic. PN: GM4600-HC-433K1-HP, GM4600-HC-433-HP.',
  description: `Datalogic Gryphon GM4600 HC przesyła dane przez system radiowy STAR Cordless w paśmie 433,92 MHz. To biała wersja skanera Gryphon 4600 dla ochrony zdrowia. Komunikacja między skanerem a bazą jest dwukierunkowa.

Do jednego odbiornika można przypisać do 16 skanerów w trybie punkt–wielopunkt. Na otwartej przestrzeni łączność sięga co najmniej 50 m.

Tworzywo obudowy zawiera dodatek antymikrobowy (zgodność z ISO 22196), a samą obudowę przygotowano do codziennej dezynfekcji. Baza [WLC4690-HC-433](/produkt/datalogic-gryphon-wlc4690-hc-433) jest jednocześnie odbiornikiem radiowym i ładowarką indukcyjną. Odczyt sygnalizują wibracja, Green Spot i dźwięk. Optyka HP z dwiema matrycami czyta też kody wyświetlane na ekranach urządzeń mobilnych. Skaner waży 218 g z akumulatorem, ma klasę szczelności IP52 i znosi wielokrotne upadki na beton z 1,8 m. Naładowanie akumulatora Li-Ion 3250 mAh z 10 do 80% zajmuje 2 h, jeśli baza ma zasilanie 12 V DC.

GM4600-HC-433K1-HP zawiera skaner, bazę WLC4690-HC-433 i biały [przewód USB-A 90A052278](/produkt/datalogic-usb-90a052278). GM4600-HC-433-HP obejmuje tylko skaner. Model bezprzewodowy ma 3 lata gwarancji Datalogic.

**Wymagane dla GM4600-HC-433-HP — sprzedawane osobno**

- [Baza STAR 433 MHz Datalogic WLC4690-HC-433 (WLC4690-HC-433)](/produkt/datalogic-gryphon-wlc4690-hc-433)
- [Biały przewód USB-A Datalogic (90A052278)](/produkt/datalogic-usb-90a052278)

Skaner przesyła dane wyłącznie przez bazę STAR, która łączy się z komputerem przewodem.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-dla-sluzby-zdrowia', 'skanery-bezprzewodowe'],
  manufacturerId: 'datalogic',
  priceFrom: 1634.28,
  images: [
    '/images/products/GM4600-HC-433-HP.png',
    '/images/products/GM4600-HC-433K1-HP-2.png',
    '/images/products/GM4600-HC-433-HP-2.png',
    '/images/products/GM4600-HC-433K1-HP.png',
  ],
  imageDescriptions: [
    'Datalogic Gryphon GM4600 HC — biały skaner radiowy 433 MHz dla służby zdrowia, widok z przodu z lewej strony na okno odczytu, zielony spust i rękojeść bez przewodu',
    'Datalogic Gryphon GM4600 HC w białej bazie WLC4690 z ładowaniem indukcyjnym',
    'Datalogic Gryphon GM4600 HC — widok z przodu z prawej strony na okno odczytu z włączonym oświetleniem',
    'Datalogic Gryphon GM4600 HC — widok z góry na obudowę z białym i zielonym wzorem oraz logo Datalogic',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner 2D (imager), bezprzewodowy, radio STAR' },
    { name: 'Wersja', value: 'Healthcare (HC), biała' },
    { name: 'Obudowa', value: 'Disinfectant-ready (przygotowana do dezynfekcji), tworzywo z dodatkami antymikrobowymi wg ISO 22196' },
    { name: 'Optyka', value: 'HP, dwie matryce 1,5 MP + VGA' },
    { name: 'Odczyt', value: '1D, 2D, GS1 Digital Link, Digimarc, OCR; kody z ekranów' },
    { name: 'Zasięg (przykłady)', value: 'EAN/UPC 13 mil: do 100 cm; Code 128 5 mil: 1,5–30 cm; QR 10 mil: 0,5–25 cm' },
    { name: 'Sygnalizacja', value: 'Wibracja, Green Spot, 3GL, dźwięk' },
    { name: 'Radio', value: 'Datalogic STAR Cordless System, 433,92 MHz (pasmo ISM), moc wypromieniowana < 10 dBm' },
    { name: 'Konfiguracje radiowe', value: 'Punkt–punkt i punkt–wielopunkt; komunikacja dwukierunkowa' },
    { name: 'Skanery na jeden odbiornik', value: 'Do 16' },
    { name: 'Zasięg radiowy', value: 'Minimum 50 m w otwartej przestrzeni' },
    { name: 'Akumulator', value: 'Li-Ion 3250 mAh; ponad 80 000 odczytów; 10–80% w 2 h, do pełna 3,5 h przy 12 V DC' },
    { name: 'Baza', value: 'WLC4690-HC-433: ładowanie indukcyjne, USB-C / USB / RS-232, zasilanie 4,5–14 V DC' },
    { name: 'Klasa ochrony', value: 'IP52' },
    { name: 'Odporność na upadki', value: 'Wielokrotne, z 1,8 m na beton' },
    { name: 'Temperatura pracy', value: '0–50 °C' },
    { name: 'Masa', value: '218 g z akumulatorem' },
    { name: 'Gwarancja producenta', value: '3 lata' },
  ],
  applications: ['Oddział z wieloma skanerami na jednym odbiorniku', 'Weryfikacja leków na oddziale', 'Oznaczanie próbek', 'Apteka szpitalna'],
  variants: [
    { partNumber: 'GM4600-HC-433K1-HP', name: 'Zestaw: skaner, baza WLC4690-HC-433, przewód USB-A', attributes: { 'Zawartość': 'Skaner, baza i przewód' }, priceFrom: 2388.96, availability: 'available' },
    { partNumber: 'GM4600-HC-433-HP', name: 'Sam skaner 433 MHz z akumulatorem', attributes: { 'Zawartość': 'Sam skaner' }, priceFrom: 1634.28, availability: 'available' },
  ],
  variantAttributeTooltips: { 'Zawartość': KIT_TOOLTIP_433 },
  compatibleAccessories: [],
  relatedAccessories: ['datalogic-gryphon-wlc4690-hc-433', 'datalogic-usb-90a052278', 'datalogic-gryphon-cc-wlc4690-hc', 'datalogic-gryphon-pa-wlc4690-hc', 'datalogic-gryphon-ba-wlc4690-hc', 'datalogic-gryphon-hld-g041-wh', 'datalogic-powerscan-8-0935', 'datalogic-powerscan-6003-0940'],
  faq: [
    {
      question: 'Kiedy wybrać GM4600 HC zamiast GBT4600 HC?',
      answer: 'GM4600 HC przesyła dane w paśmie 433 MHz przez system STAR i obsługuje do 16 skanerów na jednym odbiorniku. [GBT4600 HC](/produkt/datalogic-gryphon-gbt4600-hc) korzysta z Bluetooth 5.2, łączy do 7 skanerów z bazą i może pracować z tabletem bez bazy. GM4600 HC przesyła dane wyłącznie przez bazę radiową STAR 433 MHz; w wersji HC jest to WLC4690-HC-433.',
    },
    {
      question: 'Czym GM4600 HC różni się od GM4600 w kolorze czarnym?',
      answer: 'Model HC ma białą obudowę z tworzywa z dodatkiem antymikrobowym wg ISO 22196, przystosowaną do dezynfekcji. Współpracuje z bazą WLC4690-HC-433. Radio STAR, optykę i akumulator ma wspólne z czarnym [Datalogic Gryphon GM4600](/produkt/datalogic-gryphon-gm4600).',
    },
    {
      question: 'Jakich środków użyć do dezynfekcji GM4600 HC?',
      answer: 'Obudowy HC Datalogic są przeznaczone do częstej dezynfekcji silnymi preparatami. Preparat warto uzgodnić z TAKMA lub z Datalogic przed wdrożeniem. Baza ładuje skaner indukcyjnie, bez odsłoniętych styków.',
    },
    {
      question: 'Ile trwa ładowanie akumulatora GM4600 HC?',
      answer: 'Od 10 do 80% w 2 h, a od zera do pełna w 3,5 h przy zasilaniu bazy 12 V DC. Pełne naładowanie wystarcza na ponad 80 000 odczytów. Baza może być zasilana przez przewód USB albo przez [zasilacz 12 V 8-0935](/produkt/datalogic-powerscan-8-0935).',
    },
    {
      question: 'Jakie skanery bezprzewodowe dla służby zdrowia są alternatywą?',
      answer: 'Podobną klasę reprezentują m.in. [Zebra DS8288-HC](/produkt/zebra-ds8288-hc), [Honeywell Xenon Ultra 1962h](/produkt/honeywell-xenon-ultra-1962h) oraz [Newland HR23 Dorada AI Bluetooth White](/produkt/newland-hr23-dorada-ai-bt-white).',
    },
  ],
  downloads: [GRYPHON_DATASHEET, GRYPHON_CORDLESS_GUIDE],
  relatedProducts: without(CORDLESS_HC, 'datalogic-gryphon-gm4600-hc'),
  createdAt: '2026-10-25',
  sameAs: GRYPHON_SAME_AS,
}

// ---- Akcesoria Gryphon 4600 HC (PN z ceną w /api/stock, 25.10.2026) ----

const GRYPHON_CORDLESS_HC = ['datalogic-gryphon-gbt4600-hc', 'datalogic-gryphon-gm4600-hc']
const GRYPHON_CORDED_HC = ['datalogic-gryphon-gd4690-hc', 'datalogic-gryphon-gd4620-hc']
const PLACEHOLDER = '/images/products/placeholder.svg'

const wlcHcBt: Product = {
  id: 'datalogic-gryphon-wlc4690-hc-bt',
  slug: 'datalogic-gryphon-wlc4690-hc-bt',
  name: 'Baza Bluetooth Datalogic WLC4690-HC-BT do Gryphon GBT4600 HC',
  shortDescription: 'Datalogic WLC4690-HC-BT — biała baza Bluetooth z ładowaniem indukcyjnym do skanera Gryphon GBT4600 HC.',
  seoTitle: 'Baza Datalogic WLC4690-HC-BT do Gryphon GBT4600 HC',
  seoDescription: 'Baza Datalogic WLC4690-HC-BT White HC: Bluetooth, indukcyjne ładowanie skanera Gryphon GBT4600 HC, interfejsy USB-C, USB i RS-232. PN: WLC4690-HC-BT.',
  description: `WLC4690-HC-BT to biała baza Bluetooth do skanera [Gryphon GBT4600 HC](/produkt/datalogic-gryphon-gbt4600-hc). Odbiera dane ze skanera i ładuje jego akumulator indukcyjnie, bez styków. Do jednej bazy można przypisać do 7 skanerów.

Do komputera bazę podłącza się złączem USB-C, USB lub RS-232 (do wyboru). Napięcie zasilania bazy wynosi 4,5–14 V DC. Przewód do komputera i zasilacz są sprzedawane osobno. Zestaw GBT4600-HC-BTK1-HP zawiera już tę bazę. Na wózku medycznym bazę mocuje klips [CC-WLC4690-HC](/produkt/datalogic-gryphon-cc-wlc4690-hc).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-skanerow', 'stacje-ladowarki-skanerow'],
  manufacturerId: 'datalogic',
  priceFrom: 718.6,
  images: [PLACEHOLDER],
  imageDescriptions: ['Baza Bluetooth Datalogic WLC4690-HC-BT w kolorze White HC do Gryphon GBT4600 HC'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'WLC4690-HC-BT' },
    { name: 'Typ', value: 'Baza komunikacyjna Bluetooth z ładowaniem indukcyjnym' },
    { name: 'Kolor', value: 'White HC' },
    { name: 'Interfejsy', value: 'USB-C, USB, RS-232' },
    { name: 'Zasilanie', value: '4,5–14 V DC ±5%; ładowanie typowo < 6 W' },
    { name: 'Diody', value: 'Ładowanie (pulsuje na pomarańczowo), naładowany (świeci na zielono)' },
    { name: 'Kompatybilność', value: 'Datalogic Gryphon GBT4600 HC' },
  ],
  applications: ['Ładowanie i komunikacja GBT4600 HC', 'Baza zapasowa na drugim stanowisku'],
  compatibleAccessories: [],
  relatedAccessories: ['datalogic-usb-90a052278', 'datalogic-gryphon-cc-wlc4690-hc', 'datalogic-gryphon-pa-wlc4690-hc', 'datalogic-gryphon-ba-wlc4690-hc', 'datalogic-powerscan-8-0935', 'datalogic-powerscan-6003-0940'],
  downloads: [GRYPHON_DATASHEET, GRYPHON_CORDLESS_GUIDE],
  relatedProducts: ['datalogic-gryphon-gbt4600-hc'],
  createdAt: '2026-10-25',
}

const wlcHc433: Product = {
  id: 'datalogic-gryphon-wlc4690-hc-433',
  slug: 'datalogic-gryphon-wlc4690-hc-433',
  name: 'Baza STAR 433 MHz Datalogic WLC4690-HC-433 do Gryphon GM4600 HC',
  shortDescription: 'Datalogic WLC4690-HC-433 — biały odbiornik radiowy STAR 433 MHz i ładowarka indukcyjna do skanera Gryphon GM4600 HC.',
  seoTitle: 'Baza Datalogic WLC4690-HC-433 do Gryphon GM4600 HC',
  seoDescription: 'Baza radiowa Datalogic WLC4690-HC-433 w kolorze White HC do Gryphon GM4600 HC: STAR 433 MHz, ładowanie indukcyjne, USB-C, USB, RS-232. PN: WLC4690-HC-433.',
  description: `Baza Datalogic WLC4690-HC-433 pracuje ze skanerem [Gryphon GM4600 HC](/produkt/datalogic-gryphon-gm4600-hc). Jest odbiornikiem systemu STAR w paśmie 433 MHz i jednocześnie ładowarką indukcyjną. Może obsługiwać jednocześnie do 16 skanerów (konfiguracja punkt–wielopunkt).

Komputer podłącza się do bazy złączem USB-C, USB lub RS-232. Wymaga zasilania 4,5–14 V DC z przewodu lub zasilacza, które są sprzedawane osobno. Ta sama baza wchodzi w skład zestawu GM4600-HC-433K1-HP. Nie współpracuje ze skanerami Bluetooth ani z wersjami 910 MHz.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-skanerow', 'stacje-ladowarki-skanerow'],
  manufacturerId: 'datalogic',
  priceFrom: 718.6,
  images: [PLACEHOLDER],
  imageDescriptions: ['Baza STAR 433 MHz Datalogic WLC4690-HC-433 w kolorze White HC do Gryphon GM4600 HC'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'WLC4690-HC-433' },
    { name: 'Typ', value: 'Odbiornik radiowy STAR 433 MHz z ładowaniem indukcyjnym' },
    { name: 'Kolor', value: 'White HC' },
    { name: 'Interfejsy', value: 'USB-C, USB, RS-232' },
    { name: 'Zasilanie', value: '4,5–14 V DC ±5%' },
    { name: 'Skanery na odbiornik', value: 'Do 16' },
    { name: 'Kompatybilność', value: 'Datalogic Gryphon GM4600 HC (433 MHz)' },
  ],
  applications: ['Odbiór danych z kilku skanerów GM4600 HC', 'Ładowanie skanera na stanowisku'],
  compatibleAccessories: [],
  relatedAccessories: ['datalogic-usb-90a052278', 'datalogic-gryphon-cc-wlc4690-hc', 'datalogic-gryphon-pa-wlc4690-hc', 'datalogic-gryphon-ba-wlc4690-hc', 'datalogic-powerscan-8-0935', 'datalogic-powerscan-6003-0940'],
  downloads: [GRYPHON_DATASHEET, GRYPHON_CORDLESS_GUIDE],
  relatedProducts: ['datalogic-gryphon-gm4600-hc'],
  createdAt: '2026-10-25',
}

const cartClipHc: Product = {
  id: 'datalogic-gryphon-cc-wlc4690-hc',
  slug: 'datalogic-gryphon-cc-wlc4690-hc',
  name: 'Klips na wózek Datalogic CC-WLC4690-HC do bazy WLC4690-HC',
  shortDescription: 'Datalogic CC-WLC4690-HC — biały klips do zamocowania bazy WLC4690-HC na wózku, do skanerów Gryphon GBT4600 HC i GM4600 HC.',
  seoTitle: 'Klips na wózek Datalogic CC-WLC4690-HC White HC',
  seoDescription: 'Klips Datalogic CC-WLC4690-HC (Cart Clip, White HC) do mocowania bazy WLC4690-HC na wózku; dla skanerów Gryphon GBT4600 HC oraz GM4600 HC. PN: CC-WLC4690-HC.',
  description: `CC-WLC4690-HC to klips w kolorze White HC do mocowania bazy WLC4690-HC na wózku. Pasuje do bazy Bluetooth [WLC4690-HC-BT](/produkt/datalogic-gryphon-wlc4690-hc-bt) i bazy radiowej [WLC4690-HC-433](/produkt/datalogic-gryphon-wlc4690-hc-433). Baza ze skanerem [GBT4600 HC](/produkt/datalogic-gryphon-gbt4600-hc) lub [GM4600 HC](/produkt/datalogic-gryphon-gm4600-hc) może wtedy stać na wózku.

Pozycja obejmuje sam klips. Baza i skaner są sprzedawane osobno.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-skanerow'],
  manufacturerId: 'datalogic',
  priceFrom: 73.1,
  images: [PLACEHOLDER],
  imageDescriptions: ['Klips na wózek Datalogic CC-WLC4690-HC w kolorze White HC do bazy WLC4690-HC'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'CC-WLC4690-HC' },
    { name: 'Typ', value: 'Klips do montażu bazy na wózku (Cart Clip)' },
    { name: 'Kolor', value: 'White HC' },
    { name: 'Kompatybilność', value: 'Bazy WLC4690-HC-BT i WLC4690-HC-433' },
  ],
  applications: ['Baza skanera na wózku'],
  compatibleAccessories: [],
  relatedAccessories: ['datalogic-gryphon-wlc4690-hc-bt', 'datalogic-gryphon-wlc4690-hc-433'],
  downloads: [GRYPHON_DATASHEET],
  relatedProducts: GRYPHON_CORDLESS_HC,
  createdAt: '2026-10-25',
}

const presentationAdapterHc: Product = {
  id: 'datalogic-gryphon-pa-wlc4690-hc',
  slug: 'datalogic-gryphon-pa-wlc4690-hc',
  name: 'Adapter prezentacyjny Datalogic PA-WLC4690-HC do bazy WLC4690-HC',
  shortDescription: 'Datalogic PA-WLC4690-HC — biały adapter trybu prezentacyjnego i mocowania WLC4090 do bazy WLC4690-HC (Gryphon GBT4600 HC, GM4600 HC).',
  seoTitle: 'Adapter Datalogic PA-WLC4690-HC do bazy WLC4690-HC',
  seoDescription: 'Datalogic PA-WLC4690-HC White HC: adapter trybu prezentacyjnego i uchwytu zgodnego z systemem mocowania WLC4090 do bazy WLC4690-HC. PN: PA-WLC4690-HC.',
  description: `PA-WLC4690-HC to biały adapter do bazy WLC4690-HC. Włącza tryb prezentacyjny i pozwala zamocować bazę w systemie mocowania WLC4090. Dotyczy baz [WLC4690-HC-BT](/produkt/datalogic-gryphon-wlc4690-hc-bt) i [WLC4690-HC-433](/produkt/datalogic-gryphon-wlc4690-hc-433) do skanerów Gryphon GBT4600 HC i GM4600 HC.

Adapter jest sprzedawany bez bazy i bez skanera. Do czarnej bazy WLC4690-BK przeznaczona jest wersja PA-WLC4690-BK.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-skanerow'],
  manufacturerId: 'datalogic',
  priceFrom: 87.68,
  images: [PLACEHOLDER],
  imageDescriptions: ['Adapter prezentacyjny Datalogic PA-WLC4690-HC w kolorze White HC do bazy WLC4690-HC'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'PA-WLC4690-HC' },
    { name: 'Typ', value: 'Adapter trybu prezentacyjnego i mocowania zgodnego z WLC4090' },
    { name: 'Kolor', value: 'White HC' },
    { name: 'Kompatybilność', value: 'Bazy WLC4690-HC-BT i WLC4690-HC-433' },
  ],
  applications: ['Praca w trybie prezentacyjnym na stanowisku', 'Montaż bazy w uchwycie WLC4090'],
  compatibleAccessories: [],
  relatedAccessories: ['datalogic-gryphon-wlc4690-hc-bt', 'datalogic-gryphon-wlc4690-hc-433'],
  downloads: [GRYPHON_DATASHEET],
  relatedProducts: GRYPHON_CORDLESS_HC,
  createdAt: '2026-10-25',
}

const bracketAdapterHc: Product = {
  id: 'datalogic-gryphon-ba-wlc4690-hc',
  slug: 'datalogic-gryphon-ba-wlc4690-hc',
  name: 'Adapter montażowy Datalogic BA-WLC4690-HC do bazy WLC4690-HC',
  shortDescription: 'Datalogic BA-WLC4690-HC — adapter montażowy zgodny z systemem mocowania WLC4190, do bazy WLC4690-HC skanerów Gryphon 4600 HC.',
  seoTitle: 'Adapter montażowy Datalogic BA-WLC4690-HC (WLC4190)',
  seoDescription: 'Adapter Datalogic BA-WLC4690-HC (Bracket Adapter) do zamocowania bazy WLC4690-HC w systemie mocowania WLC4190. Do skanerów bezprzewodowych GBT4600 HC / GM4600 HC. PN: BA-WLC4690-HC.',
  description: `BA-WLC4690-HC to adapter montażowy dla bazy WLC4690-HC. Pozwala osadzić bazę [WLC4690-HC-BT](/produkt/datalogic-gryphon-wlc4690-hc-bt) lub [WLC4690-HC-433](/produkt/datalogic-gryphon-wlc4690-hc-433) w systemie mocowania WLC4190. Dzięki temu bazę skanera Gryphon GBT4600 HC lub GM4600 HC można zamontować w istniejącym uchwycie WLC4190.

W pozycji jest wyłącznie adapter. Wersja BA-WLC4690-BK pasuje do czarnej bazy WLC4690-BK.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-skanerow'],
  manufacturerId: 'datalogic',
  priceFrom: 73.1,
  images: [PLACEHOLDER],
  imageDescriptions: ['Adapter montażowy Datalogic BA-WLC4690-HC do bazy WLC4690-HC i systemu mocowania WLC4190'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'BA-WLC4690-HC' },
    { name: 'Typ', value: 'Adapter montażowy (Bracket Adapter) zgodny z systemem mocowania WLC4190' },
    { name: 'Kompatybilność', value: 'Bazy WLC4690-HC-BT i WLC4690-HC-433' },
  ],
  applications: ['Montaż nowej bazy w istniejącym uchwycie WLC4190'],
  compatibleAccessories: [],
  relatedAccessories: ['datalogic-gryphon-wlc4690-hc-bt', 'datalogic-gryphon-wlc4690-hc-433'],
  downloads: [GRYPHON_DATASHEET],
  relatedProducts: GRYPHON_CORDLESS_HC,
  createdAt: '2026-10-25',
}

const usbWhite: Product = {
  id: 'datalogic-usb-90a052278',
  slug: 'datalogic-usb-90a052278',
  name: 'Przewód USB-A Datalogic 90A052278, biały, 2 m',
  shortDescription: 'Datalogic 90A052278 — biały prosty przewód USB-A 2 m z zestawów Gryphon 4600 HC: łączy skaner GD4690 HC lub GD4620 HC albo bazę WLC4690-HC z komputerem.',
  seoTitle: 'Przewód USB-A Datalogic 90A052278 biały do Gryphon 4600 HC',
  seoDescription: 'Biały przewód USB-A Datalogic 90A052278 (PVC, prosty, 2 m) do skanerów Gryphon GD4690 HC, GD4620 HC i baz WLC4690-HC. PN: 90A052278.',
  description: `Datalogic 90A052278 to przewód USB-A w białej izolacji, prosty, długość 2 m. Datalogic dołącza go do wszystkich zestawów Gryphon 4600 HC: [GD4690 HC](/produkt/datalogic-gryphon-gd4690-hc), [GD4620 HC](/produkt/datalogic-gryphon-gd4620-hc), [GBT4600 HC](/produkt/datalogic-gryphon-gbt4600-hc) i [GM4600 HC](/produkt/datalogic-gryphon-gm4600-hc).

W modelach przewodowych łączy skaner z komputerem. W modelach bezprzewodowych łączy z komputerem bazę WLC4690-HC. Osobny przewód przydaje się przy zakupie samego skanera lub jako zapas. Czarny odpowiednik ma numer 90A052258.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-skanerow', 'kable-do-skanerow'],
  manufacturerId: 'datalogic',
  priceFrom: 67.24,
  images: ['/images/products/90A052278.png'],
  imageDescriptions: ['Przewód USB-A Datalogic 90A052278 — biały zwinięty przewód 2 m z wtykiem USB-A i złączem do skanera'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '90A052278' },
    { name: 'Typ', value: 'Przewód USB typu A, prosty' },
    { name: 'Izolacja', value: 'PVC' },
    { name: 'Długość', value: '2 m' },
    { name: 'Kolor', value: 'Biały' },
    { name: 'Kompatybilność', value: 'Gryphon GD4690 HC, GD4620 HC; bazy WLC4690-HC-BT i WLC4690-HC-433' },
  ],
  applications: ['Podłączenie skanera HC do komputera', 'Przewód zapasowy'],
  compatibleAccessories: [],
  relatedAccessories: ['datalogic-usb-c-90a052353'],
  downloads: [GRYPHON_DATASHEET],
  relatedProducts: [...GRYPHON_CORDED_HC, ...GRYPHON_CORDLESS_HC],
  createdAt: '2026-10-25',
}

const usbCWhite: Product = {
  id: 'datalogic-usb-c-90a052353',
  slug: 'datalogic-usb-c-90a052353',
  name: 'Przewód USB-C Datalogic 90A052353, biały, 2 m',
  shortDescription: 'Datalogic 90A052353 — biały przewód USB-C 2 m, prosty, do podłączenia skanera Datalogic GD4690 HC albo GD4620 HC.',
  seoTitle: 'Przewód USB-C Datalogic 90A052353 biały, 2 m',
  seoDescription: 'Biały przewód USB-C Datalogic 90A052353 (PVC, prosty, 2 m) do podłączenia skanera Gryphon GD4690 HC lub GD4620 HC do portu USB-C. PN: 90A052353.',
  description: `Przewód Datalogic 90A052353 ma wtyk USB typu C, długość 2 m i białą izolację z PVC. Łączy z komputerem z portem USB-C przewodowy skaner [GD4690 HC](/produkt/datalogic-gryphon-gd4690-hc) albo [GD4620 HC](/produkt/datalogic-gryphon-gd4620-hc).

Zestawy Gryphon 4600 HC zawierają przewód USB-A 90A052278. Wersję USB-C zamawia się osobno. Datalogic oferuje ją także w kolorze czarnym (90A052352).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-skanerow', 'kable-do-skanerow'],
  manufacturerId: 'datalogic',
  priceFrom: 73.1,
  images: [PLACEHOLDER],
  imageDescriptions: ['Przewód USB-C Datalogic 90A052353, biały, 2 m, do skanerów Gryphon 4600 HC'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '90A052353' },
    { name: 'Typ', value: 'Przewód USB typu C, prosty' },
    { name: 'Izolacja', value: 'PVC' },
    { name: 'Długość', value: '2 m' },
    { name: 'Kolor', value: 'Biały' },
    { name: 'Kompatybilność', value: 'Gryphon GD4690 HC, GD4620 HC' },
  ],
  applications: ['Komputer lub terminal z portem USB-C'],
  compatibleAccessories: [],
  relatedAccessories: ['datalogic-usb-90a052278'],
  downloads: [GRYPHON_DATASHEET],
  relatedProducts: GRYPHON_CORDED_HC,
  createdAt: '2026-10-25',
}

const standWhite: Product = {
  id: 'datalogic-gryphon-std-g041-wh',
  slug: 'datalogic-gryphon-std-g041-wh',
  name: 'Podstawka Datalogic STD-G041-WH, biała, do Gryphon GD4690 HC i GD4620 HC',
  shortDescription: 'Datalogic STD-G041-WH — biała podstawka z ramieniem; trzyma przewodowy Gryphon GD4690 HC lub GD4620 HC i uruchamia odczyt automatyczny.',
  seoTitle: 'Podstawka Datalogic STD-G041-WH biała do Gryphon 4600 HC',
  seoDescription: 'Biała podstawka Datalogic STD-G041-WH (Stand, Auto) z elastycznym ramieniem dla przewodowych Gryphon GD4690 HC i GD4620 HC. PN: STD-G041-WH.',
  description: `STD-G041-WH to biała podstawka z ramieniem z serii akcesoriów Gryphon 4600. Utrzymuje przewodowy skaner [Gryphon GD4690 HC](/produkt/datalogic-gryphon-gd4690-hc) lub [GD4620 HC](/produkt/datalogic-gryphon-gd4620-hc) nad blatem. Po włożeniu do podstawki skaner odczytuje kody automatycznie, bez naciskania spustu.

Podstawka nie ładuje skanera i nie przesyła danych. Nie zastępuje baz WLC4690-HC do modeli bezprzewodowych. Skaner i przewód są sprzedawane osobno.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-skanerow', 'podstawki-do-skanerow'],
  manufacturerId: 'datalogic',
  priceFrom: 125.7,
  images: ['/images/products/STD-G041-WH.png'],
  imageDescriptions: ['Podstawka Datalogic STD-G041-WH — biała podstawka z giętkim ramieniem i uchwytem na skaner, bez skanera'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'STD-G041-WH' },
    { name: 'Typ', value: 'Podstawka z ramieniem, tryb automatyczny (Stand, Auto)' },
    { name: 'Kolor', value: 'Biały' },
    { name: 'Kompatybilność', value: 'Przewodowe Gryphon GD4690 HC i GD4620 HC' },
  ],
  applications: ['Odczyt bez trzymania skanera na stanowisku', 'Rejestracja i apteka'],
  compatibleAccessories: [],
  relatedAccessories: [],
  downloads: [GRYPHON_DATASHEET],
  relatedProducts: GRYPHON_CORDED_HC,
  createdAt: '2026-10-25',
}

const holderWhite: Product = {
  id: 'datalogic-gryphon-hld-g041-wh',
  slug: 'datalogic-gryphon-hld-g041-wh',
  name: 'Uchwyt biurkowy i ścienny Datalogic HLD-G041-WH, biały, do Gryphon 4600 HC',
  shortDescription: 'Datalogic HLD-G041-WH — biały uchwyt na biurko lub ścianę do odkładania skanerów Gryphon 4600 HC.',
  seoTitle: 'Uchwyt Datalogic HLD-G041-WH biały do Gryphon 4600 HC',
  seoDescription: 'Biały uchwyt Datalogic HLD-G041-WH (Holder, Desk/Wall Mount) do skanerów Datalogic Gryphon 4600 HC (GD4690 HC, GD4620 HC, GBT4600 HC lub GM4600 HC). PN: HLD-G041-WH.',
  description: `HLD-G041-WH to biały uchwyt do odkładania skanera Gryphon 4600. Można go postawić na biurku albo przykręcić do ściany. W uchwycie mieści się skaner przewodowy [GD4690 HC](/produkt/datalogic-gryphon-gd4690-hc) lub [GD4620 HC](/produkt/datalogic-gryphon-gd4620-hc) i bezprzewodowy [GBT4600 HC](/produkt/datalogic-gryphon-gbt4600-hc) lub [GM4600 HC](/produkt/datalogic-gryphon-gm4600-hc).

Uchwyt nie ładuje skanera bezprzewodowego. Do ładowania służą bazy WLC4690-HC.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-skanerow', 'podstawki-do-skanerow'],
  manufacturerId: 'datalogic',
  priceFrom: 55.55,
  images: ['/images/products/HLD-G041-WH.png'],
  imageDescriptions: ['Uchwyt Datalogic HLD-G041-WH — biały uchwyt na biurko lub ścianę, bez skanera'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'HLD-G041-WH' },
    { name: 'Typ', value: 'Uchwyt biurkowy lub ścienny (Holder, Desk/Wall Mount)' },
    { name: 'Kolor', value: 'Biały' },
    { name: 'Kompatybilność', value: 'Gryphon GD4690 HC, GD4620 HC, GBT4600 HC, GM4600 HC' },
  ],
  applications: ['Miejsce na skaner przy stanowisku', 'Montaż na ścianie w gabinecie'],
  compatibleAccessories: [],
  relatedAccessories: [],
  downloads: [GRYPHON_DATASHEET],
  relatedProducts: [...GRYPHON_CORDED_HC, ...GRYPHON_CORDLESS_HC],
  createdAt: '2026-10-25',
}

// ---- Newland HR33 Marlin AI White i HR23 Dorada AI White ----

const hr33White: Product = {
  id: 'newland-hr33-marlin-ai-white',
  slug: 'newland-hr33-marlin-ai-white',
  name: 'Newland HR33 Marlin AI Corded White',
  shortDescription: 'Newland HR33 Marlin AI Corded White — przewodowy skaner kodów 1D i 2D do zastosowań medycznych: antymikrobowa powłoka obudowy, matryca 1280 × 800, wibracja; 5 lat gwarancji.',
  seoTitle: 'Newland HR33 Marlin AI Corded White — skaner dla szpitali',
  seoDescription: 'Przewodowy skaner Newland HR33 Marlin AI Corded White dla służby zdrowia: powłoka antymikrobowa, matryca 1280 × 800, wykrywanie kodów AI, USB lub RS-232, IP52. Skaner medyczny Newland HR33, HR33 Marlin White Newland. PN: NLS-HR3300-V2-S5-W, NLS-HR3300-V2-SA-W, NLS-HR3300-V2-S8-W.',
  description: `Newland HR33 Marlin AI Corded White to przewodowy skaner 2D, który Newland projektuje dla zastosowań w ochronie zdrowia. Obudowa ma powłokę antymikrobową i biały kolor. Newland wskazuje ten model jako zamiennik wycofanego HR32 Marlin Corded HC.

Matryca 1280 × 800 i technologia UIMG z wykrywaniem kodów przez AI odczytują kody 1D i 2D, także uszkodzone, zniekształcone, odblaskowe lub umieszczone na zakrzywionej powierzchni. Skaner rozpoznaje znaki OCR i kody Digimarc. Celownik LED wskazuje kod, a odczyt potwierdzają sygnał dźwiękowy, dioda i wibracja.

Skaner wspiera skrypty w języku Lua (Advanced Scripting). Pozwalają one zmienić sposób przetwarzania danych z kodu przed wysłaniem do systemu. Prostsze ustawienia wprowadza się w programie EasySet.

Wersja NLS-HR3300-V2-S5-W ma biały przewód USB 2 m. NLS-HR3300-V2-SA-W dodaje białą podstawkę [NLS-STD23-33-SA-W](/produkt/newland-std23-33-sa-w), którą można ustawić pionowo lub płasko oraz zamocować na ścianie. NLS-HR3300-V2-S8-W ma przewód RS-232 2 m z adapterem Multiplug. Skaner ma klasę IP52, wytrzymuje upadki z 1,8 m i jest objęty 5-letnią gwarancją Newland.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-dla-sluzby-zdrowia', 'skanery-przewodowe'],
  manufacturerId: 'newland',
  priceFrom: 460.46,
  images: [
    '/images/products/NLS-HR3300-V2-S5-W.png',
    '/images/products/NLS-HR3300-V2-S5-W-2.png',
    '/images/products/NLS-HR3300-V2-S5-W-3.png',
    '/images/products/NLS-HR3300-V2-S5-W-4.png',
    '/images/products/NLS-HR3300-V2-S5-W-5.png',
    '/images/products/NLS-HR3300-V2-S5-W-6.png',
  ],
  imageDescriptions: [
    'Newland HR33 Marlin AI Corded White — widok z przodu pod kątem, okno skanera i spust',
    'Newland HR33 Marlin AI Corded White — widok z przodu na okno skanera i rękojeść',
    'Newland HR33 Marlin AI Corded White — widok z boku, rękojeść i przewód',
    'Newland HR33 Marlin AI Corded White — skaner położony na boku',
    'Newland HR33 Marlin AI Corded White — widok z góry na głowicę z logo Newland',
    'Newland HR33 Marlin AI Corded White — widok z tyłu na głowicę i rękojeść',
  ],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner 2D, przewodowy' },
    { name: 'Obudowa', value: 'Biała, z powłoką antymikrobową' },
    { name: 'Matryca', value: 'CMOS 1280 × 800' },
    { name: 'Dekodowanie', value: 'UIMG, wykrywanie kodów przez AI' },
    { name: 'Kody 1D', value: 'Code 128, GS1-128, ISBT 128, Code 39, Code 93, Codabar, UPC-A/E, EAN-13/8, ISBN, ISSN, ITF-14, 2 z 5, MSI-Plessey, GS1 DataBar, Code 49, Code 16K i inne' },
    { name: 'Kody 2D', value: 'PDF417, Micro PDF417, QR, Micro QR, Data Matrix, Aztec, MaxiCode, Dotcode, Code One, TLC-39, Han Xin (Chinese Sensible), GM Code, Digimarc' },
    { name: 'OCR', value: 'Standardowo: paszporty i wybrane dokumenty; opcjonalnie: daty i znaki alfanumeryczne' },
    { name: 'Rozdzielczość', value: '≥ 3 mil' },
    { name: 'Głębia ostrości', value: 'EAN-13 13 mil: 35–535 mm; Data Matrix 10 mil: 20–245 mm; Code 39 5 mil: 30–270 mm; PDF417 6,7 mil: 35–215 mm' },
    { name: 'Pole widzenia', value: '48° w poziomie, 30° w pionie' },
    { name: 'Kąty odczytu', value: 'Pochylenie ±60°, obrót 360°, odchylenie ±60°' },
    { name: 'Minimalny kontrast', value: '15%' },
    { name: 'Celownik i oświetlenie', value: 'Celownik LED, oświetlenie białe LED' },
    { name: 'Sygnalizacja', value: 'Dźwięk, dioda LED, wibracja' },
    { name: 'Interfejsy', value: 'USB, USB-KBW, USB-CDC, HID-POS, RS-232' },
    { name: 'Zasilanie', value: '5 V DC ±5%; maks. 260 mA w pracy, 100 mA w czuwaniu' },
    { name: 'Klasa ochrony', value: 'IP52' },
    { name: 'Odporność na upadki', value: '1,8 m na beton' },
    { name: 'ESD', value: '±8 kV kontaktowo, ±15 kV przez powietrze' },
    { name: 'Temperatura', value: 'Praca: −20–50 °C; przechowywanie: −40–70 °C' },
    { name: 'Wilgotność', value: '5–95% bez kondensacji' },
    { name: 'Wymiary i masa', value: '117,5 × 67,5 × 144 mm; 140 g' },
    { name: 'Konfiguracja', value: 'EasySet; Advanced Scripting (Lua)' },
    { name: 'Gwarancja producenta', value: '5 lat; kontrakty serwisowe na 3 lub 5 lat' },
  ],
  applications: ['Skanowanie w ochronie zdrowia z dużą liczbą odczytów', 'Odczyt kodów uszkodzonych i na zakrzywionych powierzchniach', 'Stanowisko z podstawką w trybie bez trzymania'],
  variants: [
    { partNumber: 'NLS-HR3300-V2-S5-W', name: 'Skaner z białym przewodem USB 2 m', attributes: { 'Przewód': 'USB, biały, 2 m' }, priceFrom: 460.46, availability: 'unavailable' },
    { partNumber: 'NLS-HR3300-V2-SA-W', name: 'Skaner z przewodem USB i białą podstawką', attributes: { 'Przewód': 'USB, biały, 2 m', 'Podstawka': 'Tak' }, priceFrom: 768.69, availability: 'unavailable' },
    { partNumber: 'NLS-HR3300-V2-S8-W', name: 'Skaner z przewodem RS-232 i adapterem Multiplug', attributes: { 'Przewód': 'RS-232, 2 m, adapter Multiplug' }, priceFrom: 808.87, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    'Przewód': 'Przewód dołączony do HR33 Marlin AI Corded White.\n\nUSB — biały prosty przewód 2 m; skaner pracuje jako klawiatura (USB-KBW), port szeregowy (USB-CDC) albo HID-POS.\n\nRS-232 — przewód 2 m z adapterem Multiplug do systemów z portem szeregowym.',
    'Podstawka': 'Biała regulowana podstawka Newland w zestawie.\n\nUstawienie od pionowego do płaskiego; montaż na biurku albo na ścianie.',
  },
  compatibleAccessories: [],
  relatedAccessories: ['newland-std23-33-sa-w'],
  faq: [
    {
      question: 'Czym HR33 Marlin AI Corded White różni się od HR33 Marlin w kolorze czarnym?',
      answer: 'Wersja White ma białą obudowę z powłoką antymikrobową i jest przeznaczona dla ochrony zdrowia. Należy do generacji AI, która wykrywa kody przy użyciu sztucznej inteligencji. W ofercie jest też czarny [Newland HR33 Marlin](/produkt/newland-hr33-marlin) poprzedniej generacji.',
    },
    {
      question: 'Czy HR33 AI Corded White zastępuje HR32 Marlin Corded HC?',
      answer: 'Tak. Newland wycofał HR32 Marlin Corded HC i jako alternatywę wskazuje HR33 Marlin AI Corded White.',
    },
    {
      question: 'Jak czyścić HR33 Marlin AI Corded White?',
      answer: 'Przed czyszczeniem skaner należy odłączyć i wyłączyć. Przewodnik czyszczenia Newland dla skanerów ręcznych dopuszcza chusteczki dezynfekcyjne lub preparaty, których składnikiem aktywnym jest alkohol izopropylowy (co najmniej 70%), podchloryn sodu (roztwór 8,25%), nadtlenek wodoru, chlorek amonu lub łagodny płyn do naczyń. Preparat nanosi się na miękką ściereczkę i wyciska nadmiar; płyn nie może zbierać się przy oknie, spuście ani przewodzie. Okno skanera przeciera się ściereczką niepylącą zwilżoną wodą.',
    },
    {
      question: 'Którą konfigurację HR33 AI Corded White wybrać?',
      answer: 'NLS-HR3300-V2-S5-W to skaner z białym przewodem USB. NLS-HR3300-V2-SA-W zawiera dodatkowo białą podstawkę regulowaną. NLS-HR3300-V2-S8-W ma przewód RS-232 z adapterem Multiplug do systemów z portem szeregowym.',
    },
    {
      question: 'Czy HR33 AI Corded White sygnalizuje odczyt wibracją?',
      answer: 'Tak. Poza sygnałem dźwiękowym i diodą LED skaner potwierdza odczyt wibracją.',
    },
    {
      question: 'Jakie skanery są alternatywą dla HR33 Marlin AI Corded White?',
      answer: 'Tańszy model tej serii to [Newland HR23 Dorada AI Corded White](/produkt/newland-hr23-dorada-ai-white). Inne przewodowe skanery dla ochrony zdrowia to m.in. [Datalogic Gryphon GD4690 HC](/produkt/datalogic-gryphon-gd4690-hc) i [Zebra DS2208-HC](/produkt/zebra-ds2208-hc). Wersja bez przewodu to [HR33 Marlin AI Bluetooth White](/produkt/newland-hr33-marlin-ai-bt-white).',
    },
  ],
  downloads: [
    { name: 'Karta katalogowa HR33 Marlin AI Corded White (EN)', type: 'datasheet', url: '/downloads/newland/HR33-Marlin-AI-Corded-White-Datasheet.pdf', size: '947 KB' },
    NL_CORDED_GUIDE,
    { name: 'EasySet — oprogramowanie konfiguracyjne (strona producenta)', type: 'software', url: 'https://www.newland-id.com/en/software/easyset', size: 'Online' },
  ],
  relatedProducts: without(CORDED_HC, 'newland-hr33-marlin-ai-white'),
  createdAt: '2026-10-25',
  sameAs: 'https://www.newland-id.com/en/products/general-purpose-handheld-scanners/hr33-marlin-ai-corded-white',
}

const hr33BtWhite: Product = {
  id: 'newland-hr33-marlin-ai-bt-white',
  slug: 'newland-hr33-marlin-ai-bt-white',
  name: 'Newland HR33 Marlin AI Bluetooth White',
  shortDescription: 'Newland HR33 Marlin AI Bluetooth White — bezprzewodowy skaner 2D dla ochrony zdrowia: powłoka antymikrobowa, Bluetooth 5.0 do 100 m, wymienny akumulator 2600 mAh.',
  seoTitle: 'Newland HR33 Marlin AI Bluetooth White — skaner do szpitala',
  seoDescription: 'Bezprzewodowy skaner Newland HR33 Marlin AI Bluetooth White dla szpitali: powłoka antymikrobowa, Bluetooth 5.0, pamięć ponad 16 000 kodów, akumulator 2600 mAh, stacja w zestawie. Skaner Bluetooth Newland HR33, HR33 BT White Newland. PN: NLS-HR3300-BT-V2-W.',
  description: `Newland HR33 Marlin AI Bluetooth White to bezprzewodowy skaner 2D w białej obudowie z powłoką antymikrobową. Newland przeznacza go do zastosowań w ochronie zdrowia i wskazuje jako zalecaną alternatywę dla wycofanego HR32 Marlin Bluetooth HC.

Dane trafiają przez Bluetooth 5.0 do stacji komunikacyjno-ładującej, do klucza sprzętowego (dongle) albo bezpośrednio do urządzenia z Bluetooth. W otwartej przestrzeni zasięg wynosi do 100 m. Dane można wysyłać od razu po odczycie albo gromadzić w pamięci i przesłać później. Pamięć mieści ponad 16 000 kodów o długości ponad 60 bajtów.

Akumulator litowo-jonowy 2600 mAh wyjmuje się po zwolnieniu zatrzasku komory. Dwukolorowy wskaźnik informuje o niskim poziomie naładowania. Stacja ładuje skaner przez styki magnetyczne. Zapasowy akumulator [NLS-BTY2333](/produkt/newland-bty2333) można ładować w ładowarce [NLS-CD3233-4C](/produkt/newland-cd3233-4c).

Matryca 1280 × 800 z wykrywaniem kodów przez AI odczytuje kody uszkodzone i odblaskowe, a także kody Digimarc i znaki OCR. Zakres temperatury pracy wynosi −20–50 °C. NLS-HR3300-BT-V2-W zawiera skaner, stację dokującą i przewód USB. Newland udziela 5 lat gwarancji.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-dla-sluzby-zdrowia', 'skanery-bezprzewodowe'],
  manufacturerId: 'newland',
  priceFrom: 1005.83,
  images: [
    '/images/products/NLS-HR3300-BT-V2-W.png',
    '/images/products/NLS-HR3300-BT-V2-W-2.png',
    '/images/products/NLS-HR3300-BT-V2-W-3.png',
    '/images/products/NLS-HR3300-BT-V2-W-4.png',
    '/images/products/NLS-HR3300-BT-V2-W-5.png',
    '/images/products/NLS-HR3300-BT-V2-W-6.png',
  ],
  imageDescriptions: [
    'Newland HR33 Marlin AI Bluetooth White — biały skaner bez przewodu, widok z przodu pod kątem',
    'Newland HR33 Marlin AI Bluetooth White w stacji dokującej — widok z przodu',
    'Newland HR33 Marlin AI Bluetooth White w stacji dokującej — widok z boku',
    'Newland HR33 Marlin AI Bluetooth White — widok z boku na rękojeść z akumulatorem',
    'Newland HR33 Marlin AI Bluetooth White — skaner położony na boku',
    'Newland HR33 Marlin AI Bluetooth White — widok z góry na głowicę z logo Newland',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner 2D, bezprzewodowy, Bluetooth' },
    { name: 'Obudowa', value: 'Biała, z powłoką antymikrobową' },
    { name: 'Matryca', value: 'CMOS 1280 × 800' },
    { name: 'Dekodowanie', value: 'UIMG, wykrywanie kodów przez AI' },
    { name: 'Kody 2D', value: 'PDF417, Micro PDF417, QR, Micro QR, Data Matrix, Aztec, MaxiCode, Dotcode, Code One, Han Xin (Chinese Sensible), GM Code, Digimarc' },
    { name: 'Kody 1D', value: 'Code 128, GS1-128, ISBT 128, Code 39, Codabar, UPC/EAN, ITF-14, GS1 DataBar, Code 49, Code 16K i inne' },
    { name: 'Głębia ostrości', value: 'EAN-13 13 mil: 35–535 mm; Data Matrix 10 mil: 20–245 mm' },
    { name: 'Sygnalizacja', value: 'Dźwięk, wibracja, dioda LED' },
    { name: 'Bluetooth', value: '5.0; zasięg ≥ 100 m w otwartej przestrzeni' },
    { name: 'Tryby komunikacji', value: 'Synchroniczny, asynchroniczny, wsadowy (batch)' },
    { name: 'Pamięć', value: '≥ 16 384 kody (powyżej 60 bajtów)' },
    { name: 'Interfejsy stacji', value: 'USB-A, USB-KBW, USB-CDC, HID-POS' },
    { name: 'Akumulator', value: 'Li-Ion 2600 mAh, wymienny; ≥ 15 h pracy ciągłej przy odczycie co 6 s; ładowanie ≤ 6 h' },
    { name: 'Temperatura ładowania', value: '0–45 °C' },
    { name: 'Klasa ochrony', value: 'IP52' },
    { name: 'Odporność na upadki', value: '1,8 m na beton' },
    { name: 'Temperatura pracy', value: '−20–50 °C' },
    { name: 'Wymiary', value: 'Skaner: 117,5 × 67,5 × 144 mm; stacja: 140 × 90 × 144,5 mm' },
    { name: 'Masa', value: 'Skaner: 210 g; stacja: 340,5 g' },
    { name: 'Certyfikaty', value: 'CE RED, FCC ID, RoHS 2.0, IEC 62471, IEC 60825' },
    { name: 'W zestawie', value: 'Skaner, stacja komunikacyjno-ładująca, przewód USB' },
    { name: 'Gwarancja producenta', value: '5 lat' },
  ],
  applications: ['Odczyt kodów przy łóżku pacjenta bez przewodu', 'Inwentaryzacja z zapisem kodów w pamięci', 'Zamiennik wycofanego HR32 Marlin Bluetooth HC'],
  variants: [
    { partNumber: 'NLS-HR3300-BT-V2-W', name: 'Skaner Bluetooth ze stacją dokującą i przewodem USB', attributes: {}, priceFrom: 1005.83, availability: 'available' },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['newland-bty2333', 'newland-cd3233-4c'],
  faq: [
    {
      question: 'Czy HR33 Marlin AI Bluetooth White działa bez stacji?',
      answer: 'Tak. Bluetooth pozwala połączyć skaner wprost z urządzeniem, bez stacji. Stacja z zestawu ładuje skaner i może przekazywać dane do komputera.',
    },
    {
      question: 'Co, jeśli skaner wyjdzie poza zasięg Bluetooth?',
      answer: 'W trybie wsadowym skaner zapisuje kody w pamięci i wysyła je po ponownym połączeniu. Pamięć mieści ponad 16 000 kodów.',
    },
    {
      question: 'Jak długo działa akumulator HR33 AI Bluetooth White?',
      answer: 'Przy jednym odczycie co 6 s akumulator wystarcza na co najmniej 15 h pracy ciągłej. Ładowanie trwa do 6 h. Akumulator 2600 mAh jest wymienny.',
    },
    {
      question: 'Jak dezynfekować HR33 Marlin AI Bluetooth White?',
      answer: 'Obudowa ma powłokę antymikrobową. Newland zaleca do skanerów ręcznych środki z nadtlenkiem wodoru, chlorkiem amonu, alkoholem izopropylowym (min. 70%), podchlorynem sodu (roztwór 8,25%) lub łagodnym płynem do naczyń, nanoszone na ściereczkę albo w postaci gotowych chusteczek. Przed włożeniem do stacji skaner musi całkowicie wyschnąć. Styki ładowania czyści się patyczkiem z bawełną zwilżonym alkoholem izopropylowym.',
    },
    {
      question: 'Czy HR33 AI Bluetooth White zastępuje HR32 Marlin Bluetooth HC?',
      answer: 'Tak. Newland wycofał HR32 Marlin Bluetooth HC i wskazuje HR33 Marlin AI Bluetooth White jako zamiennik.',
    },
    {
      question: 'Jakie bezprzewodowe skanery dla ochrony zdrowia są alternatywą?',
      answer: 'Prostszą wersją z tej serii jest [Newland HR23 Dorada AI Bluetooth White](/produkt/newland-hr23-dorada-ai-bt-white). Inne skanery Bluetooth dla ochrony zdrowia: [Datalogic Gryphon GBT4600 HC](/produkt/datalogic-gryphon-gbt4600-hc) i [Zebra DS2278-HC](/produkt/zebra-ds2278-hc).',
    },
  ],
  downloads: [
    { name: 'Karta katalogowa HR33 Marlin AI Bluetooth White (EN)', type: 'datasheet', url: '/downloads/newland/HR33-Marlin-AI-Bluetooth-White-Datasheet.pdf', size: '1,0 MB' },
    NL_BT_GUIDE,
    { name: 'EasySet — oprogramowanie konfiguracyjne (strona producenta)', type: 'software', url: 'https://www.newland-id.com/en/software/easyset', size: 'Online' },
  ],
  relatedProducts: without(CORDLESS_HC, 'newland-hr33-marlin-ai-bt-white'),
  createdAt: '2026-10-25',
  sameAs: 'https://www.newland-id.com/en/products/general-purpose-handheld-scanners/hr33-marlin-ai-bluetooth-white',
}

const hr23White: Product = {
  id: 'newland-hr23-dorada-ai-white',
  slug: 'newland-hr23-dorada-ai-white',
  name: 'Newland HR23 Dorada AI Corded White',
  shortDescription: 'Newland HR23 Dorada AI Corded White — podstawowy skaner 2D z przewodem USB lub RS-232 dla placówek medycznych; obudowa z powłoką antymikrobową, sygnalizacja wibracją.',
  seoTitle: 'Newland HR23 Dorada AI Corded White — skaner kodów szpitalny',
  seoDescription: 'Newland HR23 Dorada AI Corded White: przewodowy skaner kodów 1D i 2D do placówek medycznych, antymikrobowa powłoka obudowy, AI, interfejs USB albo RS-232, 5 lat gwarancji. Skaner kodów kreskowych Newland HR23, HR23 Dorada White Newland. PN: NLS-HR2300-V2-S5-W, NLS-HR2300-V2-SA-W, NLS-HR2300-V2-S8-W.',
  description: `Newland HR23 Dorada AI Corded White to podstawowy przewodowy skaner 2D z białej serii Newland dla ochrony zdrowia. Biała obudowa ma powłokę antymikrobową. Biały kolor jest przeznaczony do placówek medycznych, w których liczą się higiena i schludny wygląd.

HR23 korzysta z matrycy 800 × 640. Kod EAN-13 13 mil odczytuje z odległości 50–280 mm. Klasa szczelności obudowy to IP52. Odczytuje kody liniowe oraz PDF417, Micro PDF417, Data Matrix, QR, Micro QR i Aztec. Wykrywanie kodów przez AI pomaga przy kodach uszkodzonych, zniekształconych, odblaskowych i na zaokrąglonych powierzchniach. Funkcja OCR standardowo rozpoznaje dane z paszportów.

Skaner jest lekki: waży 137 g. Pracuje w temperaturze od −20 do 60 °C. Odczyt sygnalizuje dźwiękiem, diodą i wibracją. Działanie skanera można dostosować skryptami Lua albo w programie EasySet.

Dostępne są trzy konfiguracje: NLS-HR2300-V2-S5-W z przewodem USB 2 m, NLS-HR2300-V2-SA-W z przewodem USB i białą podstawką [NLS-STD23-33-SA-W](/produkt/newland-std23-33-sa-w) oraz NLS-HR2300-V2-S8-W z przewodem RS-232 i adapterem Multiplug. Gwarancja Newland obejmuje 5 lat.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-dla-sluzby-zdrowia', 'skanery-przewodowe'],
  manufacturerId: 'newland',
  priceFrom: 336.36,
  images: [
    '/images/products/NLS-HR2300-V2-S5-W.png',
    '/images/products/NLS-HR2300-V2-S5-W-2.png',
    '/images/products/NLS-HR2300-V2-S5-W-3.png',
    '/images/products/NLS-HR2300-V2-S5-W-4.png',
    '/images/products/NLS-HR2300-V2-S5-W-5.png',
    '/images/products/NLS-HR2300-V2-S5-W-6.png',
  ],
  imageDescriptions: [
    'Newland HR23 Dorada AI Corded White — biały skaner przewodowy, widok z przodu pod kątem',
    'Newland HR23 Dorada AI Corded White — okno skanera i rękojeść, widok z przodu',
    'Newland HR23 Dorada AI Corded White — profil skanera z przewodem',
    'Newland HR23 Dorada AI Corded White — skaner leżący na boku',
    'Newland HR23 Dorada AI Corded White — widok z góry, logo Newland na głowicy',
    'Newland HR23 Dorada AI Corded White w białej podstawce NLS-STD23-33-SA-W (podstawka w zestawie SA-W lub sprzedawana osobno)',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner 2D, przewodowy' },
    { name: 'Obudowa', value: 'Biała, powłoka antymikrobowa' },
    { name: 'Matryca', value: 'CMOS 800 × 640' },
    { name: 'Dekodowanie', value: 'Wykrywanie kodów przez AI' },
    { name: 'Kody 2D', value: 'PDF417, QR, Aztec, Data Matrix, Micro PDF417, Micro QR' },
    { name: 'Kody 1D', value: 'Code 128, GS1-128, ISBT 128, Code 39, Code 93, Codabar, UPC/EAN, ITF-14, 2 z 5, MSI-Plessey, GS1 DataBar i inne' },
    { name: 'OCR', value: 'Standardowo: paszporty i wybrane dokumenty; opcjonalnie: daty i znaki alfanumeryczne' },
    { name: 'Głębia ostrości', value: 'EAN-13 13 mil: 50–280 mm; Data Matrix 10 mil: 30–125 mm; Code 39 5 mil: 50–120 mm; PDF417 6,7 mil: 40–120 mm' },
    { name: 'Pole widzenia', value: '45° w poziomie, 34° w pionie' },
    { name: 'Rozdzielczość / kontrast', value: '≥ 3 mil; minimalny kontrast 20%' },
    { name: 'Celownik i oświetlenie', value: 'Celownik LED, oświetlenie białe LED' },
    { name: 'Sygnalizacja', value: 'Dźwięk, LED, wibracja' },
    { name: 'Interfejsy', value: 'USB, USB-KBW, USB-CDC, HID-POS, RS-232' },
    { name: 'Zasilanie', value: '5 V DC ±5%; 190 mA typowo, 200 mA maks.; czuwanie 35 mA' },
    { name: 'Klasa ochrony', value: 'IP52' },
    { name: 'Odporność na upadki', value: '1,8 m na beton' },
    { name: 'Temperatura', value: 'Praca: −20–60 °C; przechowywanie: −40–70 °C' },
    { name: 'Wymiary i masa', value: '95 × 68 × 161 mm; 137 g' },
    { name: 'Konfiguracja', value: 'EasySet; Advanced Scripting (Lua)' },
    { name: 'Gwarancja producenta', value: '5 lat' },
  ],
  applications: ['Rejestracja pacjentów', 'Stanowisko z podstawką w gabinecie', 'Odczyt kodów 1D i 2D w placówce medycznej'],
  variants: [
    { partNumber: 'NLS-HR2300-V2-S5-W', name: 'Skaner z przewodem USB 2 m', attributes: { 'Przewód': 'USB, 2 m' }, priceFrom: 336.36, availability: 'available' },
    { partNumber: 'NLS-HR2300-V2-SA-W', name: 'Skaner z przewodem USB i białą podstawką', attributes: { 'Przewód': 'USB, 2 m', 'Podstawka': 'Tak' }, priceFrom: 587.82, availability: 'unavailable' },
    { partNumber: 'NLS-HR2300-V2-S8-W', name: 'Skaner z przewodem RS-232 i adapterem Multiplug', attributes: { 'Przewód': 'RS-232, 2 m, adapter Multiplug' }, priceFrom: 617.97, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    'Przewód': 'Sposób podłączenia HR23 Dorada AI Corded White do komputera.\n\nUSB — przewód 2 m; tryby USB-KBW, USB-CDC lub HID-POS.\n\nRS-232 — prosty przewód 2 m i adapter Multiplug dla urządzeń z portem szeregowym.',
    'Podstawka': 'Zestaw z białą regulowaną podstawką Newland.\n\nPodstawkę można pochylić od pozycji pionowej do płaskiej i zamocować na ścianie.',
  },
  compatibleAccessories: [],
  relatedAccessories: ['newland-std23-33-sa-w'],
  faq: [
    {
      question: 'HR23 Dorada AI White czy HR33 Marlin AI White?',
      answer: 'HR23 ma matrycę 800 × 640 i krótszy zasięg: kod EAN-13 13 mil odczytuje z 50–280 mm. [HR33 Marlin AI Corded White](/produkt/newland-hr33-marlin-ai-white) ma matrycę 1280 × 800, czyta ten kod z 35–535 mm i obsługuje kody Digimarc. HR23 pracuje w temperaturze do 60 °C.',
    },
    {
      question: 'Jakie środki można stosować do HR23 AI Corded White?',
      answer: 'Dopuszczalne są preparaty na bazie łagodnego płynu do naczyń, podchlorynu sodu (roztwór 8,25%), alkoholu izopropylowego (min. 70%), chlorku amonu lub nadtlenku wodoru. Tworzywo obudowy niszczą m.in. aceton, ketony, etery, toluen, benzen i zasadowe roztwory wodne lub alkoholowe. Środka nie nalewa się bezpośrednio na skaner, a przed ponownym użyciem obudowa musi wyschnąć.',
    },
    {
      question: 'Czy do HR23 AI Corded White można dokupić podstawkę?',
      answer: 'Tak. Biała podstawka [NLS-STD23-33-SA-W](/produkt/newland-std23-33-sa-w) pasuje do HR23 i HR33 White. Jest też częścią zestawu NLS-HR2300-V2-SA-W.',
    },
    {
      question: 'Jakie skanery są alternatywą dla HR23 Dorada AI Corded White?',
      answer: 'W klasie przewodowych skanerów dla ochrony zdrowia są m.in. [Datalogic Gryphon GD4620 HC](/produkt/datalogic-gryphon-gd4620-hc), [Zebra DS2208-HC](/produkt/zebra-ds2208-hc) i [Honeywell Xenon Ultra 1960h](/produkt/honeywell-xenon-ultra-1960h). Bezprzewodowa wersja HR23 to [HR23 Dorada AI Bluetooth White](/produkt/newland-hr23-dorada-ai-bt-white).',
    },
  ],
  downloads: [
    { name: 'Karta katalogowa HR23 Dorada AI Corded White (EN)', type: 'datasheet', url: '/downloads/newland/HR23-Dorada-AI-Corded-White-Datasheet.pdf', size: '885 KB' },
    NL_CORDED_GUIDE,
    { name: 'EasySet — oprogramowanie konfiguracyjne (strona producenta)', type: 'software', url: 'https://www.newland-id.com/en/software/easyset', size: 'Online' },
  ],
  relatedProducts: without(CORDED_HC, 'newland-hr23-dorada-ai-white'),
  createdAt: '2026-10-25',
  sameAs: 'https://www.newland-id.com/en/products/general-purpose-handheld-scanners/hr23-dorada-ai-corded-white',
}

const hr23BtWhite: Product = {
  id: 'newland-hr23-dorada-ai-bt-white',
  slug: 'newland-hr23-dorada-ai-bt-white',
  name: 'Newland HR23 Dorada AI Bluetooth White',
  shortDescription: 'Newland HR23 Dorada AI Bluetooth White — skaner kodów 2D z Bluetooth 5.0 dla ochrony zdrowia: powłoka antymikrobowa, pamięć 8000 kodów, stacja w zestawie.',
  seoTitle: 'Newland HR23 Dorada AI Bluetooth White — skaner Bluetooth HC',
  seoDescription: 'Newland HR23 Dorada AI Bluetooth White: bezprzewodowy skaner kodów 2D dla ochrony zdrowia, powłoka antymikrobowa, Bluetooth 5.0 do 100 m, wymienny akumulator 2600 mAh. Skaner bezprzewodowy Newland HR23, HR23 Dorada BT White Newland. PN: NLS-HR2300-BT-V2-W.',
  description: `Newland HR23 Dorada AI Bluetooth White to skaner 2D bez przewodu z białej serii przeznaczonej dla ochrony zdrowia. Ma obudowę z powłoką antymikrobową. W ofercie Newland jest to prostszy model niż HR33 Marlin AI Bluetooth White.

Skaner komunikuje się przez Bluetooth 5.0. Łączy się ze stacją komunikacyjno-ładującą, bezpośrednio z urządzeniem albo przez klucz sprzętowy. Zasięg w otwartej przestrzeni sięga 100 m. W trybie wsadowym kody trafiają do pamięci, która przechowuje co najmniej 8000 odczytów.

Matryca 800 × 640 współpracuje z wykrywaniem kodów opartym na AI. Skaner czyta kody liniowe i 2D, w tym QR, Data Matrix i PDF417, również zniszczone lub na błyszczących i zakrzywionych powierzchniach. Odczyt potwierdzają dźwięk, dioda i wibracja.

Akumulator 2600 mAh zapewnia co najmniej 15 h pracy ciągłej. Po zwolnieniu zatrzasku wymienia się go w trakcie zmiany na zapasowy [NLS-BTY2333](/produkt/newland-bty2333). Stacja łączy się ze skanerem przez magnetyczne styki. W zestawie NLS-HR2300-BT-V2-W są skaner, stacja i przewód USB. Skaner ma 5 lat gwarancji Newland.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-dla-sluzby-zdrowia', 'skanery-bezprzewodowe'],
  manufacturerId: 'newland',
  priceFrom: 587.82,
  images: [
    '/images/products/NLS-HR2300-BT-V2-W.png',
    '/images/products/NLS-HR2300-BT-V2-W-2.png',
    '/images/products/NLS-HR2300-BT-V2-W-3.png',
    '/images/products/NLS-HR2300-BT-V2-W-4.png',
    '/images/products/NLS-HR2300-BT-V2-W-5.png',
    '/images/products/NLS-HR2300-BT-V2-W-6.png',
  ],
  imageDescriptions: [
    'Newland HR23 Dorada AI Bluetooth White — biały skaner bezprzewodowy, ujęcie z przodu pod kątem',
    'Newland HR23 Dorada AI Bluetooth White — przód z oknem skanera',
    'Newland HR23 Dorada AI Bluetooth White — widok z boku',
    'Newland HR23 Dorada AI Bluetooth White — ujęcie z góry na głowicę z logo Newland',
    'Newland HR23 Dorada AI Bluetooth White w stacji dokującej z zestawu — ujęcie z przodu',
    'Newland HR23 Dorada AI Bluetooth White w stacji dokującej — ujęcie z boku',
  ],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ skanera', value: 'Ręczny skaner 2D, bezprzewodowy, Bluetooth' },
    { name: 'Obudowa', value: 'Biała, z powłoką antymikrobową' },
    { name: 'Matryca', value: 'CMOS 800 × 640' },
    { name: 'Kody 2D', value: 'PDF417, QR, Aztec, Data Matrix, Micro PDF417, Micro QR, Han Xin (Chinese Sensible)' },
    { name: 'Kody 1D', value: 'Code 128, GS1-128, ISBT 128, Code 39, Codabar, UPC/EAN, ITF-14, GS1 DataBar i inne' },
    { name: 'Głębia ostrości', value: 'EAN-13 13 mil: 50–280 mm; Data Matrix 10 mil: 30–125 mm' },
    { name: 'Sygnalizacja', value: 'Dźwięk, LED, wibracja' },
    { name: 'Bluetooth', value: '5.0; zasięg ≥ 100 m w otwartej przestrzeni' },
    { name: 'Tryby komunikacji', value: 'Synchroniczny, asynchroniczny, wsadowy' },
    { name: 'Pamięć', value: '≥ 8000 kodów' },
    { name: 'Interfejsy stacji', value: 'USB-A, USB-KBW, USB-CDC, HID-POS' },
    { name: 'Akumulator', value: 'Li-Ion 2600 mAh, wymienny; ≥ 15 h pracy ciągłej; ładowanie ≤ 6 h' },
    { name: 'Klasa ochrony', value: 'IP52' },
    { name: 'Odporność na upadki', value: '1,8 m na beton' },
    { name: 'Temperatura pracy', value: '−10–50 °C' },
    { name: 'Wymiary', value: 'Skaner: 117,5 × 67,5 × 144 mm; stacja: 140 × 90 × 144,5 mm' },
    { name: 'Masa', value: 'Skaner: 209 g; stacja: 340,5 g' },
    { name: 'W zestawie', value: 'Skaner, przewód USB, stacja dokująca' },
    { name: 'Gwarancja producenta', value: '5 lat' },
  ],
  applications: ['Skanowanie bez przewodu w gabinecie i na oddziale', 'Zbieranie kodów w pamięci poza zasięgiem'],
  variants: [
    { partNumber: 'NLS-HR2300-BT-V2-W', name: 'Skaner Bluetooth, stacja dokująca i przewód USB', attributes: {}, priceFrom: 587.82, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['newland-bty2333', 'newland-cd3233-4c'],
  faq: [
    {
      question: 'Czym HR23 AI Bluetooth White różni się od HR33 AI Bluetooth White?',
      answer: 'Model HR23 korzysta z matrycy 800 × 640 i zapisuje co najmniej 8000 kodów. [HR33 Marlin AI Bluetooth White](/produkt/newland-hr33-marlin-ai-bt-white) ma matrycę 1280 × 800, pamięć na ponad 16 000 kodów i odczytuje kody Digimarc. Oba modele mają Bluetooth 5.0 i akumulator 2600 mAh.',
    },
    {
      question: 'Czy zapasowy akumulator można ładować poza skanerem?',
      answer: 'Tak. Akumulatory [NLS-BTY2333](/produkt/newland-bty2333) ładuje 4-gniazdowa ładowarka [NLS-CD3233-4C](/produkt/newland-cd3233-4c), przeznaczona do serii HR23 i HR33.',
    },
    {
      question: 'Jak czyścić HR23 Dorada AI Bluetooth White?',
      answer: 'Skaner wyłącza się i przeciera gotową chusteczką dezynfekcyjną albo miękką ściereczką z preparatem zawierającym nadtlenek wodoru, alkohol izopropylowy (co najmniej 70%), chlorek amonu, podchloryn sodu (roztwór 8,25%) lub łagodny płyn do naczyń. Po użyciu podchlorynu sodu pozostałości usuwa się ściereczką zwilżoną alkoholem. Skaner wkłada się do stacji dopiero po wyschnięciu.',
    },
    {
      question: 'Co zawiera NLS-HR2300-BT-V2-W?',
      answer: 'Skaner HR23 Dorada AI Bluetooth White, stację dokującą, która ładuje skaner i przekazuje dane, oraz przewód USB.',
    },
    {
      question: 'Jakie skanery bezprzewodowe dla służby zdrowia są alternatywą?',
      answer: 'Do porównania warto wziąć m.in. [Datalogic Gryphon GM4600 HC](/produkt/datalogic-gryphon-gm4600-hc), [Honeywell Xenon Ultra 1962h](/produkt/honeywell-xenon-ultra-1962h) i [Socket Mobile DuraScan D745](/produkt/socket-mobile-durascan-d745).',
    },
  ],
  downloads: [
    { name: 'Karta katalogowa HR23 Dorada AI Bluetooth White (EN)', type: 'datasheet', url: '/downloads/newland/HR23-Dorada-AI-Bluetooth-White-Datasheet.pdf', size: '1,0 MB' },
    NL_BT_GUIDE,
    { name: 'EasySet — oprogramowanie konfiguracyjne (strona producenta)', type: 'software', url: 'https://www.newland-id.com/en/software/easyset', size: 'Online' },
  ],
  relatedProducts: without(CORDLESS_HC, 'newland-hr23-dorada-ai-bt-white'),
  createdAt: '2026-10-25',
  sameAs: 'https://www.newland-id.com/en/products/general-purpose-handheld-scanners/hr23-dorada-ai-bluetooth-white',
}

const standNlWhite: Product = {
  id: 'newland-std23-33-sa-w',
  slug: 'newland-std23-33-sa-w',
  name: 'Podstawka Newland NLS-STD23-33-SA-W, biała, do HR23 i HR33 AI White',
  shortDescription: 'Newland NLS-STD23-33-SA-W — biała regulowana podstawka do przewodowych skanerów HR23 Dorada AI White i HR33 Marlin AI White, na biurko lub ścianę.',
  seoTitle: 'Podstawka Newland NLS-STD23-33-SA-W do HR23 i HR33 White',
  seoDescription: 'Biała podstawka Newland NLS-STD23-33-SA-W (White Smart Adjustable Stand) do skanerów HR23 Dorada AI Corded White i HR33 Marlin AI Corded White. PN: NLS-STD23-33-SA-W.',
  description: `NLS-STD23-33-SA-W to biała regulowana podstawka do przewodowych skanerów [Newland HR33 Marlin AI Corded White](/produkt/newland-hr33-marlin-ai-white) i [HR23 Dorada AI Corded White](/produkt/newland-hr23-dorada-ai-white). Kąt ustawienia zmienia się od pozycji pionowej do płaskiej. Podstawkę można postawić na biurku albo zamocować na ścianie.

Biały kolor pasuje do skanerów serii White przeznaczonych dla ochrony zdrowia. Ta sama podstawka jest częścią zestawów NLS-HR3300-V2-SA-W i NLS-HR2300-V2-SA-W. Producent udziela na nią 3 miesięcy gwarancji. Skaner jest sprzedawany osobno.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['akcesoria-do-skanerow', 'podstawki-do-skanerow'],
  manufacturerId: 'newland',
  priceFrom: 55.52,
  images: ['/images/products/NLS-STD23-33-SA-W.png'],
  imageDescriptions: ['Podstawka Newland NLS-STD23-33-SA-W — biała regulowana podstawka do HR23 i HR33 White, bez skanera'],
  tags: ['healthcare'],
  availability: 'unavailable',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'NLS-STD23-33-SA-W' },
    { name: 'Typ', value: 'Regulowana podstawka (White Smart Adjustable Stand)' },
    { name: 'Kolor', value: 'Biały' },
    { name: 'Montaż', value: 'Na biurku lub na ścianie; ustawienie od pionowego do płaskiego' },
    { name: 'Kompatybilność', value: 'Newland HR33 Marlin AI Corded White, HR23 Dorada AI Corded White' },
    { name: 'Gwarancja producenta', value: '3 miesiące' },
  ],
  applications: ['Stanowisko rejestracji z odczytem bez trzymania skanera', 'Montaż skanera na ścianie gabinetu'],
  compatibleAccessories: [],
  relatedAccessories: [],
  downloads: [],
  relatedProducts: ['newland-hr33-marlin-ai-white', 'newland-hr23-dorada-ai-white'],
  createdAt: '2026-10-25',
}

// Skanery i akcesoria w jednej liście: integracja w products.ts dołącza ją do katalogu
// i rozdziela do podkategorii według `subcategoryIds`.
export const datalogicNewlandHcScanners: Product[] = [
  gd4690Hc,
  gd4620Hc,
  gbt4600Hc,
  gm4600Hc,
  hr33White,
  hr33BtWhite,
  hr23White,
  hr23BtWhite,
  wlcHcBt,
  wlcHc433,
  cartClipHc,
  presentationAdapterHc,
  bracketAdapterHc,
  usbWhite,
  usbCWhite,
  standWhite,
  holderWhite,
  standNlWhite,
]
