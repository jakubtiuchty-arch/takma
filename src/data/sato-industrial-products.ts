import { satoCl6nxPlusRfidProducts, satoCl6nxPlusRfidAccessories } from './sato-cl6nx-plus-rfid-products'
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
  seoDescription: 'SATO CL6-SXR: przemysłowa drukarka etykiet 6 cali, nadruk do 167,5 mm, 203 lub 305 dpi, do 355,6 mm/s, taśma 600 m i emulacja ZPL.',
  shortDescription: '6-calowa drukarka przemysłowa do etykiet kartonów, palet i produktów. Druk do 167,5 mm w trybie rozszerzonym, 203 lub 305 dpi, taśma do 600 m.',
  description: `SATO CL6-SXR to przemysłowa drukarka termiczna i termotransferowa do szerokich etykiet na kartony, palety i opakowania zbiorcze. Drukuje w rozdzielczości 203 lub 305 dpi. Ma aluminiową konstrukcję i kolorowy ekran dotykowy 4,3 cala.

## Nadruk do 167,5 mm z prędkością do 355,6 mm/s

Standardowa szerokość nadruku wynosi 152 mm przy 203 dpi i 165,3 mm przy 305 dpi. Tryb rozszerzony zwiększa ją do 167,5 mm w obu rozdzielczościach. Drukarka drukuje z prędkością 50,8–355,6 mm/s, czyli 2–14 cali/s, w obu rozdzielczościach. Najdłuższy wydruk ma 2500 mm przy 203 dpi i 1500 mm przy 305 dpi. W trybie wysokiej precyzji drukarka utrzymuje położenie nadruku z dokładnością do ±0,3 mm. Producent podaje tę wartość na podstawie testów wewnętrznych, dlatego wynik zależy od materiału.

## Etykiety 47–177 mm i taśma do 600 m

Etykieta bez podkładu może mieć 47–177 mm szerokości i 60–268 μm grubości. Rolka ma do 220 mm średnicy, na gilzie 76 lub 101 mm. Drukarka przyjmuje etykiety w rolce i w składance oraz materiał ciągły. Taśma barwiąca ma do 600 m długości, 59–177 mm szerokości i gilzę 25,4 mm. Nawój etykiet i taśmy do wewnątrz lub na zewnątrz nie wymaga zmiany ustawień. Czujnik zapobiegania stratom pozwala drukować od pierwszej etykiety na nowej rolce.

## Łączność i emulacja ZPL

W standardzie drukarka ma USB typu B, dwa porty USB typu A (z przodu i z tyłu), Ethernet 10/100/1000, RS-232C i port EXT. Wi-Fi 6E w pasmach 2,4, 5 i 6 GHz oraz Bluetooth 5.2 wymagają dodatkowego modułu. Własnym językiem drukarki jest SBPL. Drukarka automatycznie rozpoznaje też emulacje SZPL, SDPL, SIPL, STCL, SEPL, SMGL, SPGL i SFPL. SZPL to emulacja języka ZPL drukarek Zebra. Sterowniki są dostępne dla Windows 11 i Windows Server 2016–2025, a dla macOS i Linuksa przez CUPS.

## Konserwacja, SOS i AEP

Szeroko otwierana pokrywa daje dostęp do głowicy, wałka i toru materiału. Elementy obsługi mają niebieski kolor. Drukarka sama sprawdza głowicę i ostrzega przed końcem etykiet i taśmy. SATO Online Services (SOS) zbiera dane o pracy drukarek i pomaga zaplanować wymianę głowicy. Platforma AEP uruchamia aplikacje bezpośrednio na drukarce. Około 34% masy elementów z tworzywa sztucznego pochodzi z recyklingu.

## Wyposażenie dodatkowe

W ofercie są wersje z ręcznym odrywaniem, z obcinakiem, z odklejakiem i z odklejakiem z nawijakiem podkładu, także z Wi-Fi i Bluetooth. Jako opcje są dostępne: obcinak, odklejak z wewnętrznym nawijakiem podkładu, moduł RFID UHF, moduł Wi-Fi z Bluetooth, osłona zewnętrzna i zewnętrzny nawijak RWG500.`,
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
    { name: 'Maksymalna długość wydruku', value: '2500 mm (203 dpi), 1500 mm (305 dpi)' },
    { name: 'Grubość materiału', value: '60–268 μm (0,06–0,28 mm)' },
    { name: 'Czujniki', value: 'Czujnik znacznika (odbiciowy), dwa czujniki przerwy (prześwitowe), czujnik zapobiegania stratom etykiet, czujnik kończącego się materiału; czujniki kończącej się i końca taśmy' },
    { name: 'Procesor', value: 'ARM Cortex-A53, 4 rdzenie' },
    { name: 'Sterowniki', value: 'Windows 11, Windows Server 2016–2025; macOS i Linux przez CUPS' },
    { name: 'Temperatura pracy', value: '0–40°C, wilgotność 20–85% bez kondensacji; z odklejakiem 5–35°C, 30–80%' },
    { name: 'Opcje', value: 'Obcinak, odklejak z wewnętrznym nawijakiem, moduł RFID UHF, Wi-Fi i Bluetooth, osłona zewnętrzna, nawijak zewnętrzny RWG500' },
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
    { question: 'Jak szeroko drukuje SATO CL6-SXR?', answer: 'Standardowo do 152 mm przy 203 dpi i 165,3 mm przy 305 dpi. Tryb rozszerzony zwiększa szerokość nadruku do 167,5 mm w obu rozdzielczościach. Szerokość materiału bez podkładu wynosi 47–177 mm.' },
    { question: 'Czy CL6-SXR osiąga taką samą prędkość przy 203 i 305 dpi?', answer: 'Tak. Maksymalna prędkość wynosi 355,6 mm/s, czyli 14 cali/s, przy obu rozdzielczościach. Rzeczywista prędkość zależy od etykiet, taśmy, danych i ustawień.' },
    { question: 'Czy CL6-SXR drukuje etykiety logistyczne A6 i A5?', answer: 'Tak. Etykiety A6 (105 × 148 mm) i A5 (148 × 210 mm), stosowane jako etykiety logistyczne GS1 na kartony i palety, mieszczą się w szerokości nadruku 152 mm przy 203 dpi i 165,3 mm przy 305 dpi. Na drukarce 4-calowej, takiej jak [SATO CL4-SXR](/produkt/sato-cl4-sxr), etykieta A5 się nie zmieści.' },
    { question: 'Czy CL6-SXR drukuje etykiety przygotowane w języku ZPL?', answer: 'Tak. Oprócz własnego języka SBPL drukarka automatycznie rozpoznaje emulację SZPL, zgodną z językiem ZPL drukarek Zebra, oraz emulacje SDPL, SIPL, STCL, SEPL, SMGL, SPGL i SFPL. Przed wymianą drukarki na linii należy wydrukować próbne etykiety z obecnego systemu.' },
    { question: 'Jakie etykiety pasują do SATO CL6-SXR?', answer: 'Etykiety o szerokości 47–177 mm bez podkładu i grubości 60–268 μm, w rolce o średnicy do 220 mm na gilzie 76 lub 101 mm. Drukarka przyjmuje też składankę i materiał ciągły. Etykiety węższe niż 47 mm i rolki na gilzie 25 mm do niej nie pasują.' },
    { question: 'Jaka taśma barwiąca pasuje do CL6-SXR?', answer: 'Taśma o długości do 600 m i szerokości 59–177 mm, na gilzie 25,4 mm. Barwnik może być na zewnątrz lub do wewnątrz, bez zmiany ustawień. Taśmy 900 m są za długie do tej drukarki.' },
    { question: 'Czy CL6-SXR ma obcinak lub odklejak?', answer: 'Tak, w wybranych wariantach. W ofercie są wersje z ręcznym odrywaniem (WWCLXA042 i WWCLXB042), z obcinakiem, z odklejakiem i z odklejakiem z nawijakiem podkładu. Obcinak i odklejak z nawijakiem są też dostępne jako zestawy opcjonalne.' },
    { question: 'Czy CL6-SXR ma Wi-Fi i RFID?', answer: 'Nie w standardzie. Wi-Fi 6E z Bluetooth 5.2 mają warianty z oznaczeniem „Wi-Fi i Bluetooth”. Kodowanie etykiet UHF wymaga modułu RFID UHF, który ma wersja [SATO CL6-SXR RFID](/produkt/sato-cl6-sxr-rfid). Modułu HF dla CL6-SXR producent nie przewiduje.' },
    { question: 'Czym CL6-SXR różni się od CL4-SXR?', answer: 'CL6-SXR drukuje szerzej: do 167,5 mm w trybie rozszerzonym, wobec 104 mm w [CL4-SXR](/produkt/sato-cl4-sxr). CL6-SXR ma rozdzielczość 203 lub 305 dpi i prędkość do 355,6 mm/s. CL4-SXR ma też wersję 609 dpi i drukuje do 457,2 mm/s przy 203 dpi.' },
    { question: 'Czym SATO CL6-SXR różni się od Zebra ZT421?', answer: 'Obie drukarki drukują szerokie etykiety i mają kolorowy ekran dotykowy 4,3 cala. CL6-SXR drukuje do 355,6 mm/s, a [Zebra ZT421](/produkt/zebra-zt421) do 305 mm/s. ZT421 ma nadruk do 168 mm, a CL6-SXR do 167,5 mm w trybie rozszerzonym. CL6-SXR przyjmuje większą rolkę (220 mm zamiast 203 mm) i dłuższą taśmę (600 m zamiast 450 m). ZT421 używa języka ZPL bezpośrednio, a CL6-SXR przez emulację SZPL.' },
    { question: 'Jakie systemy obsługuje sterownik CL6-SXR?', answer: 'Producent udostępnia sterowniki dla Windows 11 oraz Windows Server 2016, 2019, 2022 i 2025. Na komputerach z macOS i Linuksem drukarka działa przez sterowniki CUPS. Odnośnik do sterowników jest w sekcji „Pliki do pobrania”.' },
    { question: 'W jakich warunkach pracuje CL6-SXR?', answer: 'W temperaturze 0–40°C i wilgotności 20–85% bez kondensacji przy druku ciągłym, z odrywaniem i z obcinakiem. Z odklejakiem zakres wynosi 5–35°C i 30–80%.' },
    { question: 'Jaka jest gwarancja na SATO CL6-SXR?', answer: 'Producent daje 2 lata ograniczonej gwarancji. Zakres zależy od regionu, numeru katalogowego i warunków gwarancji SATO.' },
  ],
  downloads: [{ name: 'Broszura SATO CL4-SXR / CL6-SXR (PL)', type: 'datasheet', url: '/datasheets/sato-cl-sxr-brochure-pl.pdf', size: '7,6 MB' }, { name: 'Karta katalogowa CL4-SXR / CL6-SXR (EN)', type: 'datasheet', url: '/downloads/sato-cl4-sxr-karta-en.pdf', size: 'PDF' }, ...cl6Reference.downloads.filter(d => d.type !== 'datasheet')],
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
  seoDescription: 'SATO CL4NX Plus: przemysłowa drukarka etykiet 104 mm, 203, 305 lub 609 dpi, do 355 mm/s, taśma 600 m, tryb Micro Label i emulacja ZPL.',
  shortDescription: 'Przemysłowa drukarka termiczna i termotransferowa. Nadruk do 104 mm, prędkość do 355 mm/s, kolorowy LCD i taśma do 600 m.',
  description: `SATO CL4NX Plus to przemysłowa drukarka termiczna i termotransferowa do etykiet w produkcji, handlu i logistyce. Drukuje na szerokości do 104 mm w rozdzielczości 203, 305 lub 609 dpi. Ma aluminiową obudowę, stalowy tor materiału i dwuczęściową pokrywę.

## Prędkość do 355 mm/s i tryb Micro Label

Wersje 203 i 305 dpi drukują z prędkością do 355 mm/s, czyli 14 cali/s. Wersja 609 dpi drukuje do 152 mm/s. Najdłuższy wydruk ma odpowiednio 2500, 1500 i 400 mm. Tryb Micro Label pomaga utrzymać położenie nadruku na małych etykietach, na przykład na płytkach drukowanych i komponentach.

## Etykiety 22–128 mm i taśma do 600 m

Etykieta bez podkładu może mieć 22–128 mm szerokości i 0,060–0,268 mm grubości. Rolka ma do 265 mm średnicy, na gilzie 76 lub 101 mm. Taśma barwiąca ma 39,5–128 mm szerokości, gilzę 25,4 mm i do 600 m długości. Taśma o szerokości 39,5 mm może mieć najwyżej 450 m. Nawój etykiet i taśmy do wewnątrz lub na zewnątrz nie wymaga zmiany ustawień.

## Łączność i emulacja ZPL

W standardzie drukarka ma USB 2.0 typu A i B, Ethernet, RS-232C, port równoległy IEEE 1284, port EXT i NFC. Wi-Fi 802.11a/b/g/n/ac w pasmach 2,4 i 5 GHz oraz Bluetooth 3.0 są opcją. Własnym językiem drukarki jest SBPL. Drukarka automatycznie rozpoznaje też emulacje SZPL, SDPL, SIPL, STCL i SEPL. SZPL to emulacja języka ZPL drukarek Zebra.

## Obsługa i konserwacja

Kolorowy wyświetlacz LCD 3,5 cala obsługuje się przyciskami. Pokazuje stan drukarki, komunikaty w 31 językach i 18 filmów instruktażowych. Głowicę i wałek dociskowy można wymienić bez narzędzi. Biała linia na wałku pokazuje zużycie jego powierzchni. Platforma AEP uruchamia aplikacje bezpośrednio na drukarce, a SATO Online Services (SOS) pomaga nadzorować drukarki zdalnie.

## Wyposażenie dodatkowe

W ofercie są wersje z ręcznym odrywaniem, z gilotyną i z odklejakiem z nawijakiem podkładu, a także z Wi-Fi lub Bluetooth. Producent oferuje też gilotynę rotacyjną, gilotynę do etykiet bez podkładu, zegar RTC, moduł RFID, zewnętrzny nawijak i osłonę zewnętrzną.`,
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
    { name: 'Procesor', value: '2 × 800 MHz: Linux i ITRON' },
    { name: 'Czujniki', value: 'Czujnik znacznika I-mark (odbiciowy) i czujnik przerwy (prześwitowy); kontrola głowicy, czujniki końca papieru, końca taśmy i podniesienia głowicy' },
    { name: 'Temperatura pracy', value: '0–40°C, wilgotność 30–80% bez kondensacji; z etykietami bez podkładu 5–35°C, 30–75%' },
    { name: 'Opcje', value: 'Gilotyna, gilotyna rotacyjna, gilotyna do etykiet bez podkładu, odklejak z wbudowanym nawijakiem podkładu, zegar RTC, moduł Wi-Fi i Bluetooth, moduł RFID, nawijak zewnętrzny, osłona zewnętrzna, stanowisko kontroli kodów kreskowych' },
    { name: 'Funkcje', value: '18 filmów instruktażowych i komunikaty w 31 językach na wyświetlaczu, tryb Micro Label, dioda LED stanu, kopiowanie danych przez pamięć USB' },
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
    { question: 'Jaka jest maksymalna prędkość druku SATO CL4NX Plus?', answer: 'Do 355 mm/s, czyli 14 cali/s, w wersjach 203 i 305 dpi. Wersja 609 dpi drukuje do 152 mm/s. Rzeczywista prędkość zależy od materiału, danych na etykiecie i ustawień.' },
    { question: 'Czy CL4NX Plus drukuje etykiety przygotowane w języku ZPL?', answer: 'Tak. Oprócz własnego języka SBPL drukarka automatycznie rozpoznaje emulację SZPL, zgodną z językiem ZPL drukarek Zebra, oraz emulacje SDPL, SIPL, STCL i SEPL. Przed wymianą drukarki na linii należy wydrukować próbne etykiety z obecnego systemu.' },
    { question: 'Jakie etykiety pasują do SATO CL4NX Plus?', answer: 'Etykiety o szerokości 22–128 mm bez podkładu i grubości 0,060–0,268 mm, w rolce o średnicy do 265 mm na gilzie 76 lub 101 mm. Drukarka przyjmuje też składankę. Rolki na gilzie 25 mm do niej nie pasują. Nawój etykietą do wewnątrz lub na zewnątrz nie wymaga zmiany ustawień.' },
    { question: 'Jaka taśma barwiąca pasuje do CL4NX Plus?', answer: 'Taśma o szerokości 39,5–128 mm, na gilzie 25,4 mm, o długości do 600 m. Taśma o szerokości 39,5 mm może mieć najwyżej 450 m. Barwnik może być na zewnątrz lub do wewnątrz, bez zmiany ustawień.' },
    { question: 'Czy CL4NX Plus ma gilotynę lub odklejak?', answer: 'Tak, w wybranych wariantach. W ofercie są wersje z ręcznym odrywaniem, z gilotyną i z odklejakiem z nawijakiem podkładu. Producent oferuje też gilotynę rotacyjną, gilotynę do etykiet bez podkładu i zewnętrzny nawijak.' },
    { question: 'Czy CL4NX Plus ma ekran dotykowy?', answer: 'Nie. Kolorowy wyświetlacz LCD 3,5 cala obsługuje się przyciskami. Ekran pokazuje komunikaty w 31 językach i 18 filmów instruktażowych.' },
    { question: 'Do czego służy tryb Micro Label?', answer: 'Pomaga utrzymać położenie nadruku na małych etykietach, na przykład na płytkach drukowanych i komponentach elektronicznych. Rozdzielczość i materiał należy dobrać do wielkości kodu i etykiety.' },
    { question: 'Czy CL4NX Plus może pracować bez komputera?', answer: 'Tak, z aplikacją SATO AEP, która działa bezpośrednio na drukarce. Aplikacja może korzystać z danych ze skanera lub innych urządzeń peryferyjnych. Aplikację przygotowuje się dla konkretnego procesu.' },
    { question: 'Czy Wi-Fi i kodowanie RFID są standardowe?', answer: 'Nie. W ofercie są warianty z Wi-Fi i z Bluetooth. Moduł RFID jest opcją. Do kodowania etykiet UHF służy [SATO CL4NX Plus RFID](/produkt/sato-cl4nx-plus-rfid).' },
    { question: 'Czym CL4NX Plus różni się od CL4-SXR?', answer: '[CL4-SXR](/produkt/sato-cl4-sxr) to nowszy model. Drukuje do 457,2 mm/s zamiast 355 mm/s i ma kolorowy ekran dotykowy 4,3 cala zamiast wyświetlacza LCD 3,5 cala obsługiwanego przyciskami. CL4NX Plus ma za to port równoległy IEEE 1284, NFC i rolkę etykiet do 265 mm zamiast 220 mm. Wysokość wydruku i rozstaw nóżek są w obu modelach takie same.' },
    { question: 'Czym SATO CL4NX Plus różni się od Zebra ZT411?', answer: 'Obie drukarki drukują na szerokości 104 mm. CL4NX Plus drukuje do 355 mm/s, a [Zebra ZT411](/produkt/zebra-zt411) do 356 mm/s. ZT411 ma kolorowy ekran dotykowy 4,3 cala, a CL4NX Plus wyświetlacz LCD 3,5 cala z przyciskami. CL4NX Plus przyjmuje większą rolkę (265 mm zamiast 203 mm) i dłuższą taśmę (600 m zamiast 450 m). ZT411 używa języka ZPL bezpośrednio, a CL4NX Plus przez emulację SZPL.' },
    { question: 'W jakich warunkach pracuje CL4NX Plus?', answer: 'W temperaturze 0–40°C i wilgotności 30–80% bez kondensacji. Z etykietami bez podkładu zakres wynosi 5–35°C i 30–75%.' },
  ],
  downloads: [{ name: 'Broszura SATO CL4NX Plus (PL)', type: 'datasheet', url: '/datasheets/sato-cl4nx-plus-brochure-pl.pdf', size: 'PDF' }, ...nxReference.downloads.filter(d => d.type === 'manual' && !d.url.includes('inlay'))],
  relatedProducts: ['sato-cl4-sxr', 'sato-cl6-sxr', 'zebra-zt411'],
  sameAs: 'https://www.satoeurope.com/pl/products/industrial-printers.php#cl4nx-plus', createdAt: '2026-10-30',
})

const nx6Reference = satoCl6nxPlusRfidProducts[0]
satoIndustrialProducts.push({
  ...nx6Reference,
  id: 'sato-cl6nx-plus', slug: 'sato-cl6nx-plus', name: 'SATO CL6NX Plus', seoH1: 'SATO CL6NX Plus',
  seoTitle: 'SATO CL6NX Plus — przemysłowa drukarka etykiet 6 cali | TAKMA',
  seoDescription: 'SATO CL6NX Plus: przemysłowa drukarka etykiet 6 cali, nadruk do 167,5 mm, 203 lub 305 dpi, do 254 mm/s, taśma 600 m i emulacja ZPL.',
  shortDescription: '6-calowa drukarka przemysłowa do szerokich etykiet produktów, kartonów i palet. Nadruk do 167,5 mm, 203 lub 305 dpi i taśma do 600 m.',
  description: `SATO CL6NX Plus to przemysłowa drukarka termiczna i termotransferowa do szerokich etykiet na produkty, kartony i palety. Drukuje na szerokości do 167,5 mm w rozdzielczości 203 lub 305 dpi. Ma metalową obudowę ze składaną pokrywą.

## Prędkość do 254 mm/s i tryb Micro Label

Wersja 203 dpi drukuje z prędkością 51–254 mm/s, czyli 2–10 cali/s. Wersja 305 dpi drukuje z prędkością 51–203 mm/s, czyli 2–8 cali/s. Najdłuższy wydruk ma 2500 mm przy 203 dpi i 1500 mm przy 305 dpi. Tryb Micro Label pomaga utrzymać położenie nadruku na małych etykietach.

## Etykiety 47–177 mm i taśma do 600 m

Etykieta bez podkładu może mieć 47–177 mm szerokości i 0,060–0,268 mm grubości. Rolka ma do 220 mm średnicy, a po zmianie ustawienia do 254 mm, na gilzie 76 lub 101 mm. Taśma barwiąca ma 59–177 mm szerokości i do 600 m długości. Taśma o szerokości 59 mm może mieć najwyżej 450 m. Nawój etykiet do wewnątrz lub na zewnątrz nie wymaga zmiany ustawień.

## Łączność i emulacja ZPL

W standardzie drukarka ma USB 2.0 typu A i B, Ethernet, RS-232C, port równoległy IEEE 1284, port EXT i NFC. Wi-Fi 802.11a/b/g/n/ac w pasmach 2,4 i 5 GHz oraz Bluetooth 3.0 są opcją. Własnym językiem drukarki jest SBPL. Drukarka automatycznie rozpoznaje też emulacje SZPL, SDPL, SIPL, STCL i SEPL. SZPL to emulacja języka ZPL drukarek Zebra. Funkcja PDF Direct Printing drukuje pliki PDF bez sterownika.

## Obsługa i konserwacja

Kolorowy wyświetlacz LCD 3,5 cala obsługuje się przyciskami. Pokazuje stan drukarki, komunikaty w 31 językach i 18 filmów instruktażowych. Głowicę i wałek dociskowy można wymienić bez narzędzi. Biała linia na wałku pokazuje zużycie jego powierzchni, a głowica zapisuje dane o swoim przebiegu. Platforma AEP uruchamia aplikacje bezpośrednio na drukarce. SATO Online Services (SOS) i SOTI Connect pomagają nadzorować drukarki zdalnie.

## Wyposażenie dodatkowe

W ofercie są wersje z ręcznym odrywaniem, z gilotyną i z odklejakiem z nawijakiem podkładu, a także z Wi-Fi. Producent oferuje też zegar RTC, czytnik kodów kreskowych i moduł RFID UHF.`,
  subcategoryIds: ['przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet', 'termiczne-drukarki-etykiet'],
  quoteOnly: false, priceFrom: 14794.68, availability: 'available',
  images: ['/images/products/sato-cl6nx-plus-main.png'],
  imageDescriptions: ['SATO CL6NX Plus — przemysłowa drukarka szerokich etykiet, widok z przodu pod kątem'],
  keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni', rozdzielczosc: '203 / 305 dpi', szerokoscDruku: 'Do 167,5 mm', szerokoscEtykiet: '47–177 mm bez podkładu', predkoscDruku: 'Do 254 mm/s przy 203 dpi; 203 mm/s przy 305 dpi' },
  specifications: [
    { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
    { name: 'Rozdzielczość', value: '203 lub 305 dpi' },
    { name: 'Szerokość nadruku', value: 'Do 167,5 mm' },
    { name: 'Prędkość druku', value: 'Do 254 mm/s przy 203 dpi; do 203 mm/s przy 305 dpi' },
    { name: 'Długość nadruku', value: 'Do 2500 mm przy 203 dpi; 1500 mm przy 305 dpi' },
    { name: 'Materiał', value: 'Szerokość 47–177 mm bez podkładu, 50–180 mm z podkładem; grubość 0,060–0,268 mm' },
    { name: 'Rolka materiału', value: 'Średnica do 220 mm, opcjonalne ustawienie do 254 mm; gilza 76 lub 101 mm' },
    { name: 'Taśma barwiąca', value: 'Do 600 m, przy szerokości 59 mm do 450 m; szerokość 59–177 mm; średnica rolki do 90 mm' },
    { name: 'Wyświetlacz', value: 'Kolorowy LCD TFT 3,5 cala, 320 × 240 pikseli; obsługa przyciskami' },
    { name: 'Interfejsy standardowe', value: 'USB 2.0 typu A i B, Ethernet IPv4/IPv6, RS-232C, IEEE 1284, EXT, NFC' },
    { name: 'Łączność opcjonalna', value: 'Wi-Fi 802.11a/b/g/n/ac 2,4 i 5 GHz, Wi-Fi Direct; Bluetooth 3.0' },
    { name: 'Emulacje', value: 'SBPL, SZPL, SDPL, SIPL, STCL, SEPL' },
    { name: 'Pamięć', value: 'CPU1: 2 GB ROM i 256 MB RAM; CPU2: 4 MB ROM i 64 MB RAM' },
    { name: 'Integracja', value: 'SATO AEP, SOS, SOTI Connect, PDF Direct Printing i App Storage; wymagają odpowiedniej konfiguracji' },
    { name: 'Warunki pracy', value: '0–40°C; wilgotność 30–80% bez kondensacji' },
    { name: 'Wymiary', value: '338 × 457 × 321 mm (szer. × gł. × wys.)' },
    { name: 'Masa', value: '20,3 kg' },
    { name: 'Procesor', value: '2 × 800 MHz: Linux i ITRON' },
    { name: 'Czujniki', value: 'Czujnik znacznika I-mark (odbiciowy) i czujnik przerwy (prześwitowy); kontrola głowicy, czujniki końca papieru, końca taśmy i podniesienia głowicy' },
    { name: 'Opcje', value: 'Gilotyna, odklejak z wbudowanym nawijakiem podkładu, zegar RTC, moduł Wi-Fi i Bluetooth, czytnik kodów kreskowych, moduł RFID UHF' },
    { name: 'Funkcje', value: '18 filmów instruktażowych i komunikaty w 31 językach na wyświetlaczu, tryb Micro Label, PDF Direct Printing, dioda LED stanu, kopiowanie danych przez pamięć USB' },
  ],
  variants: [
  {
    "partNumber": "WWCLPA02NEU",
    "name": "203 dpi, ręczne odrywanie, przewód EU",
    "priceFrom": 14794.68,
    "availability": "available",
    "attributes": {
      "Rozdzielczość": "203 dpi",
      "Łączność": "USB, Ethernet, RS-232C",
      "Obsługa etykiet": "Ręczne odrywanie"
    }
  },
  {
    "partNumber": "WWCLPB02NEU",
    "name": "305 dpi, ręczne odrywanie, przewód EU",
    "priceFrom": 16863.32,
    "availability": "available",
    "attributes": {
      "Rozdzielczość": "305 dpi",
      "Łączność": "USB, Ethernet, RS-232C",
      "Obsługa etykiet": "Ręczne odrywanie"
    }
  },
  {
    "partNumber": "WWCLPA12ZNANEU",
    "name": "203 dpi, gilotyna, przewód EU",
    "priceFrom": 18324.13,
    "availability": "available",
    "attributes": {
      "Rozdzielczość": "203 dpi",
      "Łączność": "USB, Ethernet, RS-232C",
      "Obsługa etykiet": "Gilotyna"
    }
  },
  {
    "partNumber": "WWCLPA02ZWANEU",
    "name": "203 dpi, ręczne odrywanie, Wi-Fi, przewód EU",
    "priceFrom": 16207.38,
    "availability": "available",
    "attributes": {
      "Rozdzielczość": "203 dpi",
      "Łączność": "USB, Ethernet, RS-232C, Wi-Fi",
      "Obsługa etykiet": "Ręczne odrywanie"
    }
  },
  {
    "partNumber": "WWCLPA22ZNAREU",
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
    "partNumber": "WWCLPB12ZNANEU",
    "name": "305 dpi, gilotyna, przewód EU",
    "priceFrom": 20392.77,
    "availability": "unavailable",
    "attributes": {
      "Rozdzielczość": "305 dpi",
      "Łączność": "USB, Ethernet, RS-232C",
      "Obsługa etykiet": "Gilotyna"
    }
  },
  {
    "partNumber": "WWCLPB22ZNAREU",
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
    "partNumber": "WWCLPB02ZWANEU",
    "name": "305 dpi, ręczne odrywanie, Wi-Fi, przewód EU",
    "priceFrom": 18275.99,
    "availability": "unavailable",
    "attributes": {
      "Rozdzielczość": "305 dpi",
      "Łączność": "USB, Ethernet, RS-232C, Wi-Fi",
      "Obsługa etykiet": "Ręczne odrywanie"
    }
  }
],
  relatedAccessories: satoCl6nxPlusRfidAccessories.map(a => a.id),
  applications: ['Szerokie etykiety logistyczne', 'Oznaczanie kartonów i palet', 'Etykiety produktów i komponentów', 'Identyfikacja w produkcji i handlu'],
  faq: [
    { question: 'Jak szeroki nadruk obsługuje SATO CL6NX Plus?', answer: 'Do 167,5 mm w obu rozdzielczościach. Etykieta bez podkładu może mieć 47–177 mm szerokości. Szerokość nadruku i szerokość materiału to różne parametry.' },
    { question: 'Jaka jest maksymalna prędkość druku CL6NX Plus?', answer: 'Do 254 mm/s, czyli 10 cali/s, przy 203 dpi i do 203 mm/s, czyli 8 cali/s, przy 305 dpi. Ustawienie domyślne to 152 mm/s. Rzeczywista prędkość zależy od materiału, danych na etykiecie i ustawień.' },
    { question: 'Czy CL6NX Plus drukuje etykiety logistyczne A6 i A5?', answer: 'Tak. Etykiety A6 (105 × 148 mm) i A5 (148 × 210 mm), stosowane jako etykiety logistyczne GS1 na kartony i palety, mieszczą się w szerokości nadruku 167,5 mm. Na drukarce 4-calowej, takiej jak [SATO CL4NX Plus](/produkt/sato-cl4nx-plus), etykieta A5 się nie zmieści.' },
    { question: 'Czy CL6NX Plus drukuje etykiety przygotowane w języku ZPL?', answer: 'Tak. Oprócz własnego języka SBPL drukarka automatycznie rozpoznaje emulację SZPL, zgodną z językiem ZPL drukarek Zebra, oraz emulacje SDPL, SIPL, STCL i SEPL. Przed wymianą drukarki na linii należy wydrukować próbne etykiety z obecnego systemu.' },
    { question: 'Jakie etykiety pasują do SATO CL6NX Plus?', answer: 'Etykiety o szerokości 47–177 mm bez podkładu i grubości 0,060–0,268 mm, w rolce o średnicy do 220 mm, a po zmianie ustawienia do 254 mm, na gilzie 76 lub 101 mm. Drukarka przyjmuje też składankę. Etykiety węższe niż 47 mm i rolki na gilzie 25 mm do niej nie pasują.' },
    { question: 'Jaka taśma barwiąca pasuje do CL6NX Plus?', answer: 'Taśma o szerokości 59–177 mm i długości do 600 m. Taśma o szerokości 59 mm może mieć najwyżej 450 m. Taśma powinna być nieco szersza od etykiety, aby chronić głowicę.' },
    { question: 'Czy CL6NX Plus ma gilotynę lub odklejak?', answer: 'Tak, w wybranych wariantach. W ofercie są wersje z ręcznym odrywaniem, z gilotyną i z odklejakiem z nawijakiem podkładu.' },
    { question: 'Czy ekran CL6NX Plus jest dotykowy?', answer: 'Nie. Kolorowy wyświetlacz LCD 3,5 cala obsługuje się przyciskami. Ekran pokazuje stan urządzenia, komunikaty w 31 językach i 18 filmów instruktażowych.' },
    { question: 'Czy Wi-Fi i RFID są standardowe?', answer: 'Nie. W ofercie są warianty z Wi-Fi. Moduł RFID UHF jest opcją. Do kodowania etykiet UHF służy [SATO CL6NX Plus RFID](/produkt/sato-cl6nx-plus-rfid).' },
    { question: 'Czy CL6NX Plus może drukować bez komputera?', answer: 'Tak, z aplikacją SATO AEP przygotowaną do konkretnego procesu. Dane mogą pochodzić ze skanera, klawiatury lub wagi. Takie połączenie wymaga konfiguracji i wdrożenia.' },
    { question: 'Czym CL6NX Plus różni się od CL6-SXR?', answer: '[CL6-SXR](/produkt/sato-cl6-sxr) to nowszy model. Drukuje do 355,6 mm/s w obu rozdzielczościach i ma kolorowy ekran dotykowy 4,3 cala zamiast wyświetlacza LCD 3,5 cala obsługiwanego przyciskami. CL6NX Plus ma za to port równoległy IEEE 1284, NFC i opcję rolki do 254 mm. Obie drukarki drukują na szerokości do 167,5 mm i przyjmują etykiety 47–177 mm.' },
    { question: 'Czym SATO CL6NX Plus różni się od Zebra ZT421?', answer: 'Obie drukarki drukują szerokie etykiety. [Zebra ZT421](/produkt/zebra-zt421) drukuje do 305 mm/s i ma kolorowy ekran dotykowy 4,3 cala. CL6NX Plus drukuje do 254 mm/s przy 203 dpi i ma wyświetlacz LCD 3,5 cala z przyciskami. CL6NX Plus przyjmuje większą rolkę (220 mm, po zmianie ustawienia 254 mm, zamiast 203 mm) i dłuższą taśmę (600 m zamiast 450 m). ZT421 używa języka ZPL bezpośrednio, a CL6NX Plus przez emulację SZPL.' },
  ],
  downloads: [{ name: 'Broszura SATO CL6NX Plus (PL)', type: 'datasheet', url: '/datasheets/sato-cl6nx-plus-brochure-pl.pdf', size: 'PDF' }, ...nx6Reference.downloads.filter(d => d.type === 'manual' && !d.url.includes('inlay'))],
  relatedProducts: ['sato-cl4nx-plus', 'sato-cl6-sxr', 'zebra-zt421'],
  sameAs: 'https://www.satoeurope.com/pl/products/industrial-printers.php#cl6nx-plus', createdAt: '2026-10-30',
})
