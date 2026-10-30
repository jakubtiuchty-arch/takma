import { satoCl4nxPlusRfidProducts, satoCl4nxPlusRfidAccessories } from './sato-cl4nx-plus-rfid-products'
import type { Product } from './products'
import { satoCl4SxrRfidProducts, satoCl4SxrRfidAccessories } from './sato-cl4-sxr-rfid-products'

import { satoCl6SxrRfidProducts, satoCl6SxrRfidAccessories } from './sato-cl6-sxr-rfid-products'
const cl6Reference = satoCl6SxrRfidProducts[0]

const reference = satoCl4SxrRfidProducts[0]
export const satoIndustrialProducts: Product[] = [{
  ...reference,
  id: 'sato-cl4-sxr', slug: 'sato-cl4-sxr', name: 'SATO CL4-SXR', seoH1: 'SATO CL4-SXR',
  seoTitle: 'SATO CL4-SXR — przemysłowa drukarka etykiet 104 mm | TAKMA',
  seoDescription: 'SATO CL4-SXR: przemysłowa drukarka etykiet 104 mm, do 457,2 mm/s, 203, 305 lub 609 dpi, ekran dotykowy 4,3 cala, taśma 600 m i emulacja ZPL.',
  shortDescription: 'Przemysłowa drukarka etykiet do produkcji i logistyki. Nadruk do 104 mm, prędkość do 457,2 mm/s, ekran dotykowy 4,3 cala i taśma barwiąca do 600 m.',
  description: `SATO CL4-SXR to przemysłowa drukarka termiczna i termotransferowa do etykiet produktów, opakowań i przesyłek. Drukuje na szerokości do 104 mm w rozdzielczości 203, 305 lub 609 dpi. Ma aluminiową konstrukcję i kolorowy ekran dotykowy 4,3 cala.

## Prędkość do 457,2 mm/s i dokładność ±0,3 mm

Wersja 203 dpi drukuje z prędkością 50,8–457,2 mm/s, czyli 2–18 cali/s. Wersja 305 dpi osiąga do 406,4 mm/s, a wersja 609 dpi do 152,4 mm/s. Najdłuższy wydruk ma odpowiednio 2500, 1500 i 400 mm. W trybie wysokiej precyzji drukarka utrzymuje położenie nadruku z dokładnością do ±0,3 mm. Producent podaje tę wartość na podstawie testów wewnętrznych, dlatego wynik zależy od materiału.

## Etykiety 22–128 mm i taśma do 600 m

Etykieta bez podkładu może mieć 22–128 mm szerokości i 60–268 μm grubości. Rolka ma do 220 mm średnicy, na gilzie 76 lub 101 mm. Drukarka przyjmuje etykiety w rolce i w składance oraz materiał ciągły. Taśma barwiąca ma do 600 m długości, 39,5–128 mm szerokości i gilzę 25,4 mm. Nawój etykiet i taśmy do wewnątrz lub na zewnątrz nie wymaga zmiany ustawień. Czujnik zapobiegania stratom pozwala drukować od pierwszej etykiety na nowej rolce.

## Łączność i emulacja ZPL

W standardzie drukarka ma USB typu B, dwa porty USB typu A (z przodu i z tyłu), Ethernet 10/100/1000, RS-232C i port EXT. Wi-Fi 6E w pasmach 2,4, 5 i 6 GHz oraz Bluetooth 5.2 wymagają dodatkowego modułu. Własnym językiem drukarki jest SBPL. Drukarka automatycznie rozpoznaje też emulacje SZPL, SDPL, SIPL, STCL, SEPL, SMGL, SPGL i SFPL. SZPL to emulacja języka ZPL drukarek Zebra. Sterowniki są dostępne dla Windows 11 i Windows Server 2016–2025, a dla macOS i Linuksa przez CUPS.

## Konserwacja, SOS i AEP

Szeroko otwierana pokrywa daje dostęp do głowicy, wałka i toru materiału. Elementy obsługi mają niebieski kolor. Drukarka sama sprawdza głowicę i ostrzega przed końcem etykiet i taśmy. SATO Online Services (SOS) zbiera dane o pracy drukarek i pomaga zaplanować wymianę głowicy. Platforma AEP uruchamia aplikacje bezpośrednio na drukarce. Około 34% masy elementów z tworzywa sztucznego pochodzi z recyklingu.

## Wyposażenie dodatkowe

Warianty w sklepie mają ręczne odrywanie etykiet. Jako opcje są dostępne: obcinak, obcinak rotacyjny, odklejak z wewnętrznym nawijakiem podkładu, obcinak do etykiet bez podkładu, moduły RFID UHF i HF, moduł Wi-Fi z Bluetooth oraz zewnętrzny nawijak RWG500.`,
  subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],
  quoteOnly: false, priceFrom: 7946.36, availability: 'available', isNew: true,
  images: ['/images/products/sato-cl4-sxr.webp', '/images/sato-cl4-sxr/open.webp', '/images/sato-cl4-sxr/closed.webp'],
  imageDescriptions: ['SATO CL4-SXR — widok z przodu pod kątem z wydrukowaną etykietą', 'SATO CL4-SXR — otwarty mechanizm i tor materiału', 'SATO CL4-SXR — boczne okno kontroli rolki'],
  keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni', rozdzielczosc: '203 / 305 / 609 dpi', szerokoscDruku: '104 mm', szerokoscEtykiet: '22–128 mm (bez szerokości podkładu)', predkoscDruku: 'Do 457,2 mm/s (203 dpi)' },
  specifications: reference.specifications.filter(s => !['RFID', 'Zegar RTC', 'Łączność', 'Prędkość nadruku', 'Rolka materiału'].includes(s.name)).concat([
    { name: 'Prędkość druku', value: 'Do 457,2 mm/s przy 203 dpi; 406,4 mm/s przy 305 dpi; 152,4 mm/s przy 609 dpi' },
    { name: 'Dokładność pozycjonowania', value: 'Do ±0,3 mm w trybie wysokiej precyzji; zależy od materiału i warunków pracy' },
    { name: 'Materiał', value: 'Etykiety w rolce lub składance; szerokość 22–128 mm bez podkładu; rolka do 220 mm; gilza 76 lub 101 mm' },
    { name: 'Interfejsy standardowe', value: 'USB typu B, 2 × USB Host typu A, Gigabit Ethernet, RS-232C, EXT' },
    { name: 'Łączność opcjonalna', value: 'Wi-Fi 6E, Wi-Fi Direct i Bluetooth 5.2; wymagają odpowiedniego wyposażenia' },
    { name: 'RFID', value: 'Opcjonalne moduły UHF lub HF; nie są wyposażeniem standardowym' },
    { name: 'Maksymalna długość wydruku', value: '2500 mm (203 dpi), 1500 mm (305 dpi), 400 mm (609 dpi)' },
    { name: 'Grubość materiału', value: '60–268 μm (0,06–0,28 mm)' },
    { name: 'Czujniki', value: 'Czujnik znacznika (odbiciowy), dwa czujniki przerwy (prześwitowe), czujnik zapobiegania stratom etykiet, czujnik kończącego się materiału; czujniki kończącej się i końca taśmy' },
    { name: 'Procesor', value: 'ARM Cortex-A53, 4 rdzenie' },
    { name: 'Sterowniki', value: 'Windows 11, Windows Server 2016–2025; macOS i Linux przez CUPS' },
    { name: 'Temperatura pracy', value: '0–40°C, wilgotność 20–85% bez kondensacji; z odklejakiem 5–35°C, 30–80%' },
    { name: 'Opcje', value: 'Obcinak, obcinak rotacyjny, odklejak z wewnętrznym nawijakiem, obcinak do etykiet bez podkładu, moduł RFID UHF lub HF, Wi-Fi i Bluetooth, nawijak zewnętrzny RWG500' },
  ]),
  variants: [
    { partNumber: 'WWCLX1042', name: '203 dpi, RTC, przewód zasilający EU', priceFrom: 7946.36, availability: 'available', attributes: { 'Rozdzielczość': '203 dpi', 'Łączność': 'USB, Ethernet, RS-232C', 'Obsługa etykiet': 'Ręczne odrywanie' } },
    { partNumber: 'WWCLX2042', name: '305 dpi, RTC, przewód zasilający EU', priceFrom: 9526.90, availability: 'available', attributes: { 'Rozdzielczość': '305 dpi', 'Łączność': 'USB, Ethernet, RS-232C', 'Obsługa etykiet': 'Ręczne odrywanie' } },
    { partNumber: 'WWCLX3042', name: '609 dpi, RTC, przewód zasilający EU', priceFrom: 15310.44, availability: 'unavailable', attributes: { 'Rozdzielczość': '609 dpi', 'Łączność': 'USB, Ethernet, RS-232C', 'Obsługa etykiet': 'Ręczne odrywanie' } },
  ],
  relatedAccessories: satoCl4SxrRfidAccessories.map(a => a.id),
  applications: ['Etykiety produktów i komponentów', 'Etykiety opakowań i przesyłek', 'Oznaczanie w produkcji i logistyce'],
  faq: [
    { question: 'Jaka jest maksymalna prędkość druku SATO CL4-SXR?', answer: 'Do 457,2 mm/s, czyli 18 cali/s, w wersji 203 dpi. Wersja 305 dpi drukuje do 406,4 mm/s, a wersja 609 dpi do 152,4 mm/s. Rzeczywista prędkość zależy od materiału, danych na etykiecie i ustawień.' },
    { question: 'Czy CL4-SXR drukuje etykiety przygotowane w języku ZPL?', answer: 'Tak. Oprócz własnego języka SBPL drukarka automatycznie rozpoznaje emulację SZPL, zgodną z językiem ZPL drukarek Zebra, oraz emulacje SDPL, SIPL, STCL, SEPL, SMGL, SPGL i SFPL. Przed wymianą drukarki na linii należy wydrukować próbne etykiety z obecnego systemu.' },
    { question: 'Jakie etykiety pasują do SATO CL4-SXR?', answer: 'Etykiety o szerokości 22–128 mm bez podkładu i grubości 60–268 μm, w rolce o średnicy do 220 mm na gilzie 76 lub 101 mm. Drukarka przyjmuje też składankę i materiał ciągły. Etykiety na gilzie 25 mm do niej nie pasują. Nawój etykietą do wewnątrz lub na zewnątrz nie wymaga zmiany ustawień.' },
    { question: 'Jaka taśma barwiąca pasuje do CL4-SXR?', answer: 'Taśma o długości do 600 m i szerokości 39,5–128 mm, na gilzie 25,4 mm. Barwnik może być na zewnątrz lub do wewnątrz, bez zmiany ustawień. Taśma powinna być nieco szersza od etykiety, aby chronić głowicę.' },
    { question: 'Czy CL4-SXR ma obcinak lub odklejak?', answer: 'Warianty WWCLX1042, WWCLX2042 i WWCLX3042 mają ręczne odrywanie etykiet. Obcinak, obcinak rotacyjny, odklejak z wewnętrznym nawijakiem podkładu i obcinak do etykiet bez podkładu są dostępne jako zestawy opcjonalne. Zewnętrzny nawijak to model RWG500.' },
    { question: 'Czy Wi-Fi i RFID są standardowym wyposażeniem?', answer: 'Nie. Wi-Fi 6E z Bluetooth 5.2 oraz moduły RFID UHF i HF to opcje. Do kodowania etykiet UHF służy wersja [SATO CL4-SXR RFID](/produkt/sato-cl4-sxr-rfid).' },
    { question: 'Czy CL4-SXR drukuje bez komputera?', answer: 'Tak, przez platformę SATO AEP, która uruchamia aplikacje bezpośrednio na drukarce. Aplikację przygotowuje się i konfiguruje dla konkretnego procesu.' },
    { question: 'Czym SATO CL4-SXR różni się od CL4NX Plus?', answer: 'CL4-SXR drukuje do 457,2 mm/s, a [CL4NX Plus](/produkt/sato-cl4nx-plus-rfid) do 355 mm/s. CL4-SXR ma kolorowy ekran dotykowy 4,3 cala zamiast wyświetlacza LCD 3,5 cala. Wysokość wydruku i rozstaw nóżek są takie same jak w serii CL4NX, dlatego nowa drukarka pasuje do istniejących instalacji.' },
    { question: 'Czym SATO CL4-SXR różni się od Zebra ZT411?', answer: 'Obie drukarki drukują na szerokości 104 mm i mają kolorowy ekran dotykowy 4,3 cala. CL4-SXR drukuje do 457,2 mm/s przy 203 dpi, a [Zebra ZT411](/produkt/zebra-zt411) do 356 mm/s. CL4-SXR przyjmuje też większą rolkę (220 mm zamiast 203 mm) i dłuższą taśmę (600 m zamiast 450 m). ZT411 używa języka ZPL bezpośrednio, a CL4-SXR przez emulację SZPL.' },
    { question: 'Jakie systemy obsługuje sterownik CL4-SXR?', answer: 'Producent udostępnia sterowniki dla Windows 11 oraz Windows Server 2016, 2019, 2022 i 2025. Na komputerach z macOS i Linuksem drukarka działa przez sterowniki CUPS. Odnośnik do sterowników jest w sekcji „Pliki do pobrania”.' },
    { question: 'W jakich warunkach pracuje CL4-SXR?', answer: 'W temperaturze 0–40°C i wilgotności 20–85% bez kondensacji przy druku ciągłym, z odrywaniem i z obcinakiem. Z odklejakiem zakres wynosi 5–35°C i 30–80%, a z obcinakiem do etykiet bez podkładu 5–35°C i 30–75%.' },
    { question: 'Co oznacza dokładność ±0,3 mm?', answer: 'To dokładność położenia nadruku w trybie wysokiej precyzji, uzyskana przez producenta w testach wewnętrznych na wybranych etykietach. Rzeczywisty wynik zależy od materiału i warunków pracy.' },
    { question: 'Jaka jest gwarancja na SATO CL4-SXR?', answer: 'Producent daje 2 lata ograniczonej gwarancji. Zakres zależy od regionu, numeru katalogowego i warunków gwarancji SATO.' },
  ],
  downloads: [{ name: 'Broszura SATO CL4-SXR / CL6-SXR (PL)', type: 'datasheet', url: '/datasheets/sato-cl-sxr-brochure-pl.pdf', size: '7,6 MB' }, { name: 'Karta katalogowa CL4-SXR / CL6-SXR (EN)', type: 'datasheet', url: '/downloads/sato-cl4-sxr-karta-en.pdf', size: 'PDF' }, ...reference.downloads.filter(d => d.type !== 'datasheet')],
  relatedProducts: ['sato-cl4-sxr-rfid', 'sato-cl4nx-plus-rfid', 'zebra-zt411'],
  sameAs: 'https://www.satoeurope.com/pl/products/industrial-printers.php#cl4-sxr', createdAt: '2026-10-30',
}]


satoIndustrialProducts.push({
  ...cl6Reference,
  id: 'sato-cl6-sxr', slug: 'sato-cl6-sxr', name: 'SATO CL6-SXR', seoH1: 'SATO CL6-SXR',
  seoTitle: 'SATO CL6-SXR — przemysłowa drukarka szerokich etykiet | TAKMA',
  seoDescription: 'SATO CL6-SXR: nadruk do 167,5 mm w trybie rozszerzonym, 203 lub 305 dpi, prędkość do 355,6 mm/s. Ceny, warianty EU i akcesoria w TAKMA.',
  shortDescription: '6-calowa drukarka przemysłowa do etykiet kartonów, palet i produktów. Druk do 167,5 mm w trybie rozszerzonym, 203 lub 305 dpi, taśma do 600 m.',
  description: 'SATO CL6-SXR to przemysłowa drukarka termiczna i termotransferowa do szerokich etykiet logistycznych. Drukuje z prędkością do 355,6 mm/s przy 203 i 305 dpi. Standardowa szerokość nadruku wynosi 152 mm przy 203 dpi i 165,3 mm przy 305 dpi. Tryb rozszerzony zwiększa ją do 167,5 mm. Ekran dotykowy 4,3 cala, podgląd etykiety i dostęp do toru materiału ułatwiają obsługę. SATO AEP pozwala uruchamiać aplikacje bezpośrednio na drukarce. SOS wspiera monitoring i planowanie konserwacji.',
  subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],
  quoteOnly: false, priceFrom: 14794.70, availability: 'available',
  images: ['/images/products/sato-cl6-sxr-main-v2.png'],
  imageDescriptions: ['SATO CL6-SXR — przemysłowa drukarka etykiet, widok z przodu pod kątem'],
  keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni', rozdzielczosc: '203 / 305 dpi', szerokoscDruku: 'Do 167,5 mm w trybie rozszerzonym; standardowo 152 / 165,3 mm', szerokoscEtykiet: '47–177 mm bez podkładu', predkoscDruku: 'Do 355,6 mm/s (14 cali/s)' },
  specifications: cl6Reference.specifications.filter(s => !['RFID', 'Rolka materiału', 'Zegar RTC', 'Łączność'].includes(s.name)).concat([
    { name: 'Rolka materiału', value: 'Średnica do 220 mm; gilza 76 lub 101 mm; szerokość materiału 47–177 mm bez podkładu' },
    { name: 'Dokładność pozycjonowania', value: 'Do ±0,3 mm w trybie wysokiej precyzji; zależy od materiału i warunków pracy' },
    { name: 'Interfejsy standardowe', value: 'USB typu B, 2 × USB Host typu A, Gigabit Ethernet, RS-232C, EXT' },
    { name: 'Łączność opcjonalna', value: 'Wi-Fi 6E, Wi-Fi Direct i Bluetooth 5.2; wymagają odpowiedniego wyposażenia' },
    { name: 'RFID', value: 'Opcjonalny moduł UHF; nie jest wyposażeniem standardowym' },
  ]),
  variants: [
    {
        "partNumber": "WWCLXA042",
        "name": "203 dpi, ręczne odrywanie, RTC, przewód EU",
        "priceFrom": 14794.7,
        "availability": "available",
        "attributes": {
            "Rozdzielczość": "203 dpi",
            "Łączność": "USB, Ethernet, RS-232C",
            "Obsługa etykiet": "Ręczne odrywanie"
        }
    },
    {
        "partNumber": "WWCLXB042",
        "name": "305 dpi, ręczne odrywanie, RTC, przewód EU",
        "priceFrom": 16863.35,
        "availability": "available",
        "attributes": {
            "Rozdzielczość": "305 dpi",
            "Łączność": "USB, Ethernet, RS-232C",
            "Obsługa etykiet": "Ręczne odrywanie"
        }
    },
    {
        "partNumber": "WWCLXA10ZNAREU",
        "name": "203 dpi, obcinak, RTC, przewód EU",
        "priceFrom": 18324.13,
        "availability": "unavailable",
        "attributes": {
            "Rozdzielczość": "203 dpi",
            "Łączność": "USB, Ethernet, RS-232C",
            "Obsługa etykiet": "Obcinak"
        }
    },
    {
        "partNumber": "WWCLXA10ZWAREU",
        "name": "203 dpi, obcinak, Wi-Fi i Bluetooth, RTC, przewód EU",
        "priceFrom": 19732.32,
        "availability": "unavailable",
        "attributes": {
            "Rozdzielczość": "203 dpi",
            "Łączność": "USB, Ethernet, RS-232C, Wi-Fi, Bluetooth",
            "Obsługa etykiet": "Obcinak"
        }
    },
    {
        "partNumber": "WWCLXA20ZNAREU",
        "name": "203 dpi, odklejak z nawijakiem podkładu, RTC, przewód EU",
        "priceFrom": 17383.82,
        "availability": "unavailable",
        "attributes": {
            "Rozdzielczość": "203 dpi",
            "Łączność": "USB, Ethernet, RS-232C",
            "Obsługa etykiet": "Odklejak z nawijakiem podkładu"
        }
    },
    {
        "partNumber": "WWCLXA20ZWAREU",
        "name": "203 dpi, odklejak z nawijakiem podkładu, Wi-Fi i Bluetooth, RTC, przewód EU",
        "priceFrom": 19215.37,
        "availability": "unavailable",
        "attributes": {
            "Rozdzielczość": "203 dpi",
            "Łączność": "USB, Ethernet, RS-232C, Wi-Fi, Bluetooth",
            "Obsługa etykiet": "Odklejak z nawijakiem podkładu"
        }
    },
    {
        "partNumber": "WWCLXA30ZNAREU",
        "name": "203 dpi, odklejak, RTC, przewód EU",
        "priceFrom": 16256.38,
        "availability": "unavailable",
        "attributes": {
            "Rozdzielczość": "203 dpi",
            "Łączność": "USB, Ethernet, RS-232C",
            "Obsługa etykiet": "Odklejak"
        }
    },
    {
        "partNumber": "WWCLXA00ZWAREU",
        "name": "203 dpi, ręczne odrywanie, Wi-Fi i Bluetooth, RTC, przewód EU",
        "priceFrom": 16207.38,
        "availability": "unavailable",
        "attributes": {
            "Rozdzielczość": "203 dpi",
            "Łączność": "USB, Ethernet, RS-232C, Wi-Fi, Bluetooth",
            "Obsługa etykiet": "Ręczne odrywanie"
        }
    },
    {
        "partNumber": "WWCLXB10ZNAREU",
        "name": "305 dpi, obcinak, RTC, przewód EU",
        "priceFrom": 20392.77,
        "availability": "unavailable",
        "attributes": {
            "Rozdzielczość": "305 dpi",
            "Łączność": "USB, Ethernet, RS-232C",
            "Obsługa etykiet": "Obcinak"
        }
    },
    {
        "partNumber": "WWCLXB10ZWAREU",
        "name": "305 dpi, obcinak, Wi-Fi i Bluetooth, RTC, przewód EU",
        "priceFrom": 21800.98,
        "availability": "unavailable",
        "attributes": {
            "Rozdzielczość": "305 dpi",
            "Łączność": "USB, Ethernet, RS-232C, Wi-Fi, Bluetooth",
            "Obsługa etykiet": "Obcinak"
        }
    },
    {
        "partNumber": "WWCLXB20ZNAREU",
        "name": "305 dpi, odklejak z nawijakiem podkładu, RTC, przewód EU",
        "priceFrom": 19452.44,
        "availability": "unavailable",
        "attributes": {
            "Rozdzielczość": "305 dpi",
            "Łączność": "USB, Ethernet, RS-232C",
            "Obsługa etykiet": "Odklejak z nawijakiem podkładu"
        }
    },
    {
        "partNumber": "WWCLXB20ZWAREU",
        "name": "305 dpi, odklejak z nawijakiem podkładu, Wi-Fi i Bluetooth, RTC, przewód EU",
        "priceFrom": 21284.0,
        "availability": "unavailable",
        "attributes": {
            "Rozdzielczość": "305 dpi",
            "Łączność": "USB, Ethernet, RS-232C, Wi-Fi, Bluetooth",
            "Obsługa etykiet": "Odklejak z nawijakiem podkładu"
        }
    },
    {
        "partNumber": "WWCLXB30ZNAREU",
        "name": "305 dpi, odklejak, RTC, przewód EU",
        "priceFrom": 18325.0,
        "availability": "unavailable",
        "attributes": {
            "Rozdzielczość": "305 dpi",
            "Łączność": "USB, Ethernet, RS-232C",
            "Obsługa etykiet": "Odklejak"
        }
    },
    {
        "partNumber": "WWCLXB00ZWAREU",
        "name": "305 dpi, ręczne odrywanie, Wi-Fi i Bluetooth, RTC, przewód EU",
        "priceFrom": 18275.99,
        "availability": "unavailable",
        "attributes": {
            "Rozdzielczość": "305 dpi",
            "Łączność": "USB, Ethernet, RS-232C, Wi-Fi, Bluetooth",
            "Obsługa etykiet": "Ręczne odrywanie"
        }
    }
],
  relatedAccessories: satoCl6SxrRfidAccessories.map(a => a.id),
  applications: ['Etykiety logistyczne kartonów i palet', 'Oznaczanie opakowań zbiorczych', 'Szerokie etykiety produktów i komponentów'],
  faq: [
    { question: 'Jak szeroko drukuje SATO CL6-SXR?', answer: 'Standardowo do 152 mm przy 203 dpi i 165,3 mm przy 305 dpi. Tryb rozszerzony zwiększa szerokość nadruku do 167,5 mm w obu rozdzielczościach. Nie należy mylić szerokości nadruku z szerokością materiału, która wynosi 47–177 mm bez podkładu.' },
    { question: 'Czy CL6-SXR osiąga taką samą prędkość przy 203 i 305 dpi?', answer: 'Tak. Maksymalna prędkość wynosi 355,6 mm/s, czyli 14 cali/s, przy obu rozdzielczościach. Rzeczywista prędkość zależy od etykiet, taśmy, danych i ustawień.' },
    { question: 'Czy CL6-SXR ma Wi-Fi i RFID?', answer: 'To wyposażenie opcjonalne. Wi-Fi i Bluetooth są dostępne w odpowiednio wyposażonych drukarkach. Kodowanie etykiet UHF RFID wymaga modułu UHF oraz doboru i testu materiału.' },
    { question: 'Czym CL6-SXR różni się od CL4-SXR?', answer: 'CL6-SXR obsługuje szerszy nadruk: do 167,5 mm w trybie rozszerzonym, wobec 104 mm w CL4-SXR. CL6-SXR ma rozdzielczość 203 lub 305 dpi i prędkość do 355,6 mm/s. CL4-SXR oferuje również 609 dpi oraz do 457,2 mm/s przy 203 dpi.' },
  ],
  downloads: [{ name: 'Broszura SATO CL4-SXR / CL6-SXR (PL)', type: 'datasheet', url: '/datasheets/sato-cl-sxr-brochure-pl.pdf', size: '7,6 MB' }, ...cl6Reference.downloads.filter(d => d.type !== 'datasheet')],
  relatedProducts: ['sato-cl4-sxr', 'sato-cl6-sxr-rfid', 'zebra-zt421'],
  sameAs: 'https://www.satoeurope.com/pl/products/industrial-printers.php#cl6-sxr', createdAt: '2026-10-30',
})

const nxReference = satoCl4nxPlusRfidProducts[0]
satoIndustrialProducts.push({
  ...nxReference,
  id: 'sato-cl4nx-plus', slug: 'sato-cl4nx-plus', name: 'SATO CL4NX Plus', seoH1: 'SATO CL4NX Plus',
  images: ['/images/products/sato-cl4nx-plus-main.png'],
  imageDescriptions: ['SATO CL4NX Plus — przemysłowa drukarka etykiet, widok z przodu pod kątem'],
  seoTitle: 'SATO CL4NX Plus — drukarka etykiet 203, 305 i 609 dpi | TAKMA',
  seoDescription: 'SATO CL4NX Plus: przemysłowa drukarka etykiet 104 mm, do 355 mm/s, taśma 600 m i platforma AEP. Sprawdź ceny, dostępność i akcesoria w TAKMA.',
  shortDescription: 'Przemysłowa drukarka termiczna i termotransferowa. Nadruk do 104 mm, prędkość do 355 mm/s, kolorowy LCD i taśma do 600 m.',
  description: 'SATO CL4NX Plus to przemysłowa drukarka etykiet do produkcji, handlu i logistyki. Drukuje na szerokości do 104 mm. Aluminiowa konstrukcja i stalowy tor materiału wspierają pracę w wymagającym otoczeniu. Tryb Micro Label pomaga pozycjonować nadruk na małych etykietach. Kolorowy ekran LCD pokazuje stan urządzenia oraz instrukcje obsługi. Głowicę i wałek można wymienić bez narzędzi. Platforma AEP umożliwia uruchamianie aplikacji na drukarce, a SATO Online Services wspiera zdalny nadzór.',
  subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],
  quoteOnly: false, priceFrom: 7946.36, availability: 'available',
  keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni', rozdzielczosc: '203 / 305 / 609 dpi', szerokoscDruku: '104 mm', szerokoscEtykiet: '22–128 mm bez podkładu', predkoscDruku: 'Do 355 mm/s przy 203 i 305 dpi' },
  specifications: [
    { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
    { name: 'Rozdzielczość', value: '203, 305 lub 609 dpi' },
    { name: 'Szerokość druku', value: 'Do 104 mm' },
    { name: 'Prędkość druku', value: 'Do 355 mm/s przy 203 i 305 dpi; do 152 mm/s przy 609 dpi' },
    { name: 'Długość nadruku', value: 'Do 2500 mm przy 203 dpi; 1500 mm przy 305 dpi; 400 mm przy 609 dpi' },
    { name: 'Materiał', value: '22–128 mm bez podkładu; 25–131 mm z podkładem; grubość 0,060–0,268 mm' },
    { name: 'Rolka materiału', value: 'Średnica do 265 mm; gilza 76 lub 101 mm' },
    { name: 'Taśma barwiąca', value: 'Do 600 m; przy szerokości 39,5 mm do 450 m. Szerokość 39,5–128 mm; gilza 25,4 mm' },
    { name: 'Wyświetlacz', value: 'Kolorowy LCD 3,5 cala, 320 × 240 pikseli; obsługa przyciskami' },
    { name: 'Interfejsy', value: 'USB 2.0 typu A i B, Ethernet IPv4/IPv6, RS-232C, IEEE 1284, EXT, NFC' },
    { name: 'Łączność opcjonalna', value: 'Wi-Fi 802.11a/b/g/n/ac 2,4 i 5 GHz, Wi-Fi Direct; Bluetooth 3.0' },
    { name: 'Emulacje', value: 'SBPL, SZPL, SDPL, SIPL, STCL i SEPL' },
    { name: 'Platformy', value: 'SATO AEP i SATO Online Services; wymagają konfiguracji' },
    { name: 'Pamięć', value: 'CPU1: 2 GB ROM i 256 MB RAM; CPU2: 4 MB ROM i 64 MB RAM' },
    { name: 'Konstrukcja', value: 'Aluminiowa obudowa, stalowy tor materiału, dwuczęściowa pokrywa' },
    { name: 'Wymiary', value: '271 × 457 × 321 mm (szer. × gł. × wys.)' },
    { name: 'Masa', value: '15,1 kg bez materiałów i opcji' },
  ],
  variants: [
  {
    "partNumber": "WWCLP102NEU",
    "name": "203 dpi, ręczne odrywanie, przewód EU",
    "priceFrom": 7946.36,
    "availability": "available",
    "attributes": {
      "Rozdzielczość": "203 dpi",
      "Łączność": "USB, Ethernet, RS-232C",
      "Obsługa etykiet": "Ręczne odrywanie"
    }
  },
  {
    "partNumber": "WWCLP202NEU",
    "name": "305 dpi, ręczne odrywanie, przewód EU",
    "priceFrom": 9526.86,
    "availability": "available",
    "attributes": {
      "Rozdzielczość": "305 dpi",
      "Łączność": "USB, Ethernet, RS-232C",
      "Obsługa etykiet": "Ręczne odrywanie"
    }
  },
  {
    "partNumber": "WWCLP122ZNAREU",
    "name": "203 dpi, odklejak z nawijakiem podkładu, RTC, przewód EU",
    "priceFrom": 9165.61,
    "availability": "available",
    "attributes": {
      "Rozdzielczość": "203 dpi",
      "Łączność": "USB, Ethernet, RS-232C",
      "Obsługa etykiet": "Odklejak z nawijakiem podkładu"
    }
  },
  {
    "partNumber": "WWCLP102ZNAREU",
    "name": "203 dpi, ręczne odrywanie, RTC, przewód EU",
    "priceFrom": 8376.95,
    "availability": "available",
    "attributes": {
      "Rozdzielczość": "203 dpi",
      "Łączność": "USB, Ethernet, RS-232C",
      "Obsługa etykiet": "Ręczne odrywanie"
    }
  },
  {
    "partNumber": "WWCLP100NEU",
    "name": "203 dpi, ręczne odrywanie, Bluetooth, przewód EU",
    "priceFrom": 8995.9,
    "availability": "available",
    "attributes": {
      "Rozdzielczość": "203 dpi",
      "Łączność": "USB, Ethernet, RS-232C, Bluetooth",
      "Obsługa etykiet": "Ręczne odrywanie"
    }
  },
  {
    "partNumber": "WWCLP102ZWANEU",
    "name": "203 dpi, ręczne odrywanie, Wi-Fi, przewód EU",
    "priceFrom": 9383.19,
    "availability": "available",
    "attributes": {
      "Rozdzielczość": "203 dpi",
      "Łączność": "USB, Ethernet, RS-232C, Wi-Fi",
      "Obsługa etykiet": "Ręczne odrywanie"
    }
  },
  {
    "partNumber": "WWCLP222ZNAREU",
    "name": "305 dpi, odklejak z nawijakiem podkładu, RTC, przewód EU",
    "priceFrom": 10746.18,
    "availability": "available",
    "attributes": {
      "Rozdzielczość": "305 dpi",
      "Łączność": "USB, Ethernet, RS-232C",
      "Obsługa etykiet": "Odklejak z nawijakiem podkładu"
    }
  },
  {
    "partNumber": "WWCLP112ZNANEU",
    "name": "203 dpi, gilotyna, przewód EU",
    "priceFrom": 10244.38,
    "availability": "available",
    "attributes": {
      "Rozdzielczość": "203 dpi",
      "Łączność": "USB, Ethernet, RS-232C",
      "Obsługa etykiet": "Gilotyna"
    }
  },
  {
    "partNumber": "WWCLP212ZNANEU",
    "name": "305 dpi, gilotyna, przewód EU",
    "priceFrom": 11820.37,
    "availability": "available",
    "attributes": {
      "Rozdzielczość": "305 dpi",
      "Łączność": "USB, Ethernet, RS-232C",
      "Obsługa etykiet": "Gilotyna"
    }
  },
  {
    "partNumber": "WWCLP300NEU",
    "name": "609 dpi, ręczne odrywanie, Bluetooth, przewód EU",
    "priceFrom": 16359.97,
    "availability": "unavailable",
    "attributes": {
      "Rozdzielczość": "609 dpi",
      "Łączność": "USB, Ethernet, RS-232C, Bluetooth",
      "Obsługa etykiet": "Ręczne odrywanie"
    }
  }
],
  applications: ['Etykiety produktów i komponentów', 'Małe etykiety w elektronice', 'Oznaczanie kartonów i przesyłek', 'Etykiety w handlu i produkcji'],
  relatedAccessories: satoCl4nxPlusRfidAccessories.map(a => a.id),
  faq: [
    { question: 'Czy CL4NX Plus ma ekran dotykowy?', answer: 'Nie. Kolorowy LCD 3,5 cala obsługuje się przyciskami. Ekran wyświetla komunikaty i filmy instruktażowe.' },
    { question: 'Do czego służy tryb Micro Label?', answer: 'Pomaga utrzymać położenie nadruku na małych etykietach. Dobór materiału, ustawień i rozdzielczości wymaga uwzględnienia docelowego kodu oraz wielkości etykiety.' },
    { question: 'Czy CL4NX Plus może pracować bez komputera?', answer: 'Tak, z odpowiednio przygotowaną aplikacją SATO AEP. Aplikacja może korzystać z danych ze skanera lub innych urządzeń peryferyjnych. Wymaga wdrożenia dla danego procesu.' },
    { question: 'Czy Wi-Fi i kodowanie RFID są standardowe?', answer: 'Nie. Łączność bezprzewodowa i moduły RFID są opcjonalne. Pokazane tutaj standardowe drukarki nie zawierają kodera RFID.' },
  ],
  downloads: [{ name: 'Broszura SATO CL4NX Plus (PL)', type: 'datasheet', url: '/datasheets/sato-cl4nx-plus-brochure-pl.pdf', size: 'PDF' }, ...nxReference.downloads.filter(d => d.type === 'manual' && !d.url.includes('inlay'))],
  relatedProducts: ['sato-cl4-sxr', 'sato-cl6-sxr', 'zebra-zt411'],
  sameAs: 'https://www.satoeurope.com/pl/products/industrial-printers.php#cl4nx-plus', createdAt: '2026-10-30',
})
