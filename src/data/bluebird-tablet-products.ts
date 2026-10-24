import type { Product } from './products'

// Tablety Bluebird (24.10.2026). Osobno od bluebirdProducts, bo terminale są w LIVE_OFFER_SLUGS, a tablety (jak Getac) nie.
// Ceny i stany na karcie aktualizuje /api/stock; priceFrom to wartość startowa.
export const bluebirdTabletProducts: Product[] = [
  {
    "id": "bluebird-t30",
    "slug": "bluebird-t30",
    "name": "Bluebird T30",
    "seoH1": "Bluebird T30",
    "seoTitle": "Tablet przemysłowy Bluebird T30 10,1″ z Androidem 13, 5G, IP65",
    "seoDescription": "Bluebird T30: tablet przemysłowy 10,1″ z Androidem 13, Wi-Fi 6E, opcją 5G i NFC do płatności, IP65. Tablet Bluebird T30, PN: T30-ANLB, T30-A5LAW.",
    "shortDescription": "Bluebird T30 — tablet 10,1″ o grubości 11,4 mm w obudowie IP65, z Wi-Fi 6E, opcją 5G i NFC do płatności zbliżeniowych; baterię wymienia się na miejscu.",
    "description": "Bluebird T30 to 10-calowy tablet z Androidem dla firm, które chcą sprzętu o wyglądzie tabletu konsumenckiego i parametrach urządzenia firmowego. Obudowa ma 11,4 mm grubości, masę 650 g i klasę szczelności IP65.\n\nW sklepie T30 skraca kolejki przy kasie (line busting), wyszukuje towar i obsługuje zaplecze. Na produkcji rejestruje zamówienia, zwroty i zlecenia, a w magazynie wspiera kompletację. Kurierzy planują na nim trasy i potwierdzają odbiór oraz doręczenie. W administracji publicznej służy do wystawiania mandatów elektronicznych i ewidencji majątku.\n\nNFC przyjmuje płatności zbliżeniowe (ECP 1.0 i 2.0) i ma certyfikat Apple VAS. Ekran WUXGA pod szkłem Corning Gorilla Glass ma typowo 500 nitów i reaguje na dotyk w rękawicach oraz rysikiem przewodzącym. Procesor Qualcomm QC4490 współpracuje z pamięcią 6/64 GB. Obie wersje mają Wi-Fi 6E, a droższa dodaje modem 5G z eSIM i dwuzakresowy GNSS.\n\nZużytą baterię wymienia się na miejscu, bez wysyłki tabletu do serwisu. Bez osłony T30 znosi wielokrotne upadki z 1,0 m na płytki, a w osłonie rugged boot test MIL-STD-810H obejmuje 1,6 m. System Android 13 można zaktualizować do wersji 17 po zakupie kontraktu Bluebird Care. Okres gwarancji wynosi 12 miesięcy.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Zasilacz sieciowy 5 V / 3 A Bluebird (602010041)](/produkt/bluebird-602010041)\n- [Wtyczka EU do zasilacza Bluebird 5 V / 3 A (602020024)](/produkt/bluebird-602020024)\n- [Kabel USB-A – USB-C Bluebird (603010005)](/produkt/bluebird-603010005)\n\nTablet jest dostarczany bez zasilacza, wtyczki i kabla.",
    "categoryId": "tablety-przemyslowe",
    "subcategoryIds": [
      "tablety-przemyslowe"
    ],
    "manufacturerId": "bluebird",
    "sameAs": "https://www.bluebirdcorp.com/products/Enterprise-Tablets/Rugged-Tablets/T30",
    "priceFrom": 1965.92,
    "availability": "available",
    "images": [
      "/images/products/T30-ANLB.png",
      "/images/products/T30-ANLB-2.png",
      "/images/products/T30-ANLB-3.png",
      "/images/products/T30-ANLB-4.png"
    ],
    "imageDescriptions": [
      "Bluebird T30 — widok z przodu, ekran 10,1 cala w poziomie",
      "Bluebird T30 — widok z przodu pod kątem, cienka obudowa z przednim aparatem",
      "Bluebird T30 — tył obudowy z aparatem 13 MP",
      "Bluebird T30 — tył obudowy pod kątem"
    ],
    "tags": [
      "retail",
      "magazyn",
      "logistyka"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "System operacyjny",
        "value": "Android 13 z usługami Google (GMS); aktualizacja do Androida 17 w ramach kontraktu Bluebird Care"
      },
      {
        "name": "Procesor",
        "value": "Qualcomm QC4490, 8 rdzeni, 2,4 GHz"
      },
      {
        "name": "Pamięć RAM / Flash",
        "value": "6 GB / 64 GB UFS 3.1; microSD do 2 TB"
      },
      {
        "name": "Wyświetlacz",
        "value": "10,1″ WUXGA 1920 × 1200, TFT IPS, min. 400 nitów, typowo 500 nitów, Corning Gorilla Glass"
      },
      {
        "name": "Ekran dotykowy",
        "value": "Pojemnościowy, obsługa palcem, w rękawicach i rysikiem przewodzącym (sprzedawany osobno); odrzucanie kropli wody, powłoka przeciw odciskom palców"
      },
      {
        "name": "Aparaty",
        "value": "Tylny 13 MP z autofokusem PDAF i lampą LED; przedni 8 MP"
      },
      {
        "name": "Wi-Fi",
        "value": "Wi-Fi 6E (802.11ax), 2×2 MU-MIMO, do 2402 Mb/s"
      },
      {
        "name": "Bluetooth",
        "value": "5.2"
      },
      {
        "name": "Łączność komórkowa",
        "value": "Wersja T30-A5LAW: 5G Sub-6 (NSA, SA), 4G LTE, 3G, 2G; VoLTE; prywatne sieci LTE i 5G; nano-SIM i eSIM"
      },
      {
        "name": "GNSS",
        "value": "Wersja T30-A5LAW: GPS, GLONASS, Galileo, BeiDou, QZSS; dwuzakresowy L1 + L5"
      },
      {
        "name": "NFC",
        "value": "ISO 14443 A/B, FeliCa, ISO 15693; HCE; płatności zbliżeniowe ECP 1.0 i 2.0; certyfikat Apple VAS"
      },
      {
        "name": "Porty",
        "value": "USB-C 3.1 OTG; 10-pinowe złącza komunikacji i ładowania na dolnej krawędzi i z tyłu; gniazdo audio 3,5 mm; microSD"
      },
      {
        "name": "Audio",
        "value": "Dwa mikrofony z redukcją szumów, dwa głośniki 1 W; obsługa zestawów słuchawkowych PTT i Bluetooth"
      },
      {
        "name": "Bateria",
        "value": "Li-Po 8000 mAh, 3,89 V (30,34 Wh), wymienna; szybkie ładowanie Qualcomm Quick Charge 3.0 przez POGO lub USB-C"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP65"
      },
      {
        "name": "Odporność na upadki",
        "value": "Wielokrotne upadki z 1,0 m na płytki na betonie; 1,6 m według MIL-STD-810H w osłonie rugged boot"
      },
      {
        "name": "Test przewrotów",
        "value": "300 przewrotów z 0,5 m w osłonie rugged boot"
      },
      {
        "name": "Temperatura pracy",
        "value": "Od −20°C do +50°C"
      },
      {
        "name": "Temperatura przechowywania",
        "value": "Od −40°C do +70°C"
      },
      {
        "name": "Wilgotność",
        "value": "95% bez kondensacji"
      },
      {
        "name": "Wymiary",
        "value": "256,6 × 165 × 11,4 mm"
      },
      {
        "name": "Masa",
        "value": "650 g"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Tablet z baterią 8000 mAh; zasilacz, wtyczkę i kabel zamawia się osobno"
      },
      {
        "name": "Gwarancja",
        "value": "12 miesięcy"
      },
      {
        "name": "Part Number",
        "value": "T30-ANLB, T30-A5LAW"
      }
    ],
    "applications": [
      "Obsługa kolejek i wyszukiwanie towaru w sklepie (line busting)",
      "Zamówienia, zwroty i zlecenia na produkcji",
      "Kompletacja zamówień w magazynie",
      "Potwierdzanie odbioru i doręczenia przesyłek",
      "Mandaty elektroniczne i ewidencja majątku w administracji"
    ],
    "variants": [
      {
        "partNumber": "T30-ANLB",
        "name": "T30 — Wi-Fi 6E, 6/64 GB",
        "priceFrom": 1965.92,
        "availability": "available",
        "attributes": {
          "Łączność": "Wi-Fi 6E"
        }
      },
      {
        "partNumber": "T30-A5LAW",
        "name": "T30 — 5G, GPS, Wi-Fi 6E, 6/64 GB",
        "priceFrom": 2363.12,
        "availability": "available",
        "attributes": {
          "Łączność": "Wi-Fi 6E, 5G, GPS"
        }
      }
    ],
    "variantAttributeTooltips": {
      "Łączność": "Sieci, z którymi T30 łączy się bez dodatkowych akcesoriów. Obie wersje mają Wi-Fi 6E 2×2 z pasmem 6 GHz i Bluetooth 5.2.\n\n• 5G — modem Sub-6 z nano-SIM i eSIM, obsługuje też prywatne sieci LTE i 5G.\n\n• GPS — dwuzakresowy odbiornik L1 + L5 (GPS, GLONASS, Galileo, BeiDou, QZSS)."
    },
    "compatibleAccessories": [],
    "relatedAccessories": [
      "bluebird-602010041",
      "bluebird-602020024",
      "bluebird-603010005",
      "bluebird-351120036",
      "bluebird-355040109",
      "bluebird-204020040",
      "bluebird-204010093",
      "bluebird-501260136",
      "bluebird-357010004",
      "bluebird-626010007",
      "bluebird-626010004",
      "bluebird-19346",
      "bluebird-624010038",
      "bluebird-355040121",
      "bluebird-602010025",
      "bluebird-14948"
    ],
    "relatedProducts": [
      "bluebird-t10",
      "getac-zx10-g2",
      "honeywell-eda10a",
      "honeywell-rt10a",
      "zebra-et40",
      "zebra-et45",
      "brady-rt710"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa Bluebird T30 (EN)",
        "type": "datasheet",
        "url": "/datasheets/bluebird-t30.pdf",
        "size": "278 KB"
      },
      {
        "name": "Przewodnik akcesoriów Bluebird T30 (EN)",
        "type": "manual",
        "url": "/datasheets/bluebird-t30-akcesoria.pdf",
        "size": "4,7 MB"
      }
    ],
    "faq": [
      {
        "question": "Czy Bluebird T30 ma zasilacz w zestawie?",
        "answer": "Nie. W pudełku jest tablet z baterią. Zasilacz 5 V / 3 A, wtyczkę EU i kabel USB-A – USB-C trzeba zamówić osobno. Kilka tabletów jednocześnie ładuje <a href=\"/produkt/bluebird-204020040\">stacja 4-gniazdowa</a>."
      },
      {
        "question": "Jak wymienia się baterię w Bluebird T30?",
        "answer": "Baterię wymienia się na miejscu pracy, bez oddawania tabletu do serwisu. Zapasową <a href=\"/produkt/bluebird-355040109\">baterię standardową</a> zamawia się osobno."
      },
      {
        "question": "Jaką odporność ma Bluebird T30?",
        "answer": "Obudowa ma klasę IP65. Sam tablet wytrzymuje wielokrotne upadki z 1,0 m na płytki ułożone na betonie. Po założeniu <a href=\"/produkt/bluebird-351120036\">osłony rugged boot</a> wysokość upadku według MIL-STD-810H rośnie do 1,6 m, a test obejmuje też 300 przewrotów z 0,5 m. Tablet pracuje w temperaturze od −20°C do +50°C."
      },
      {
        "question": "Czym różnią się wersje Bluebird T30?",
        "answer": "Wspólne są Wi-Fi 6E, Bluetooth 5.2, NFC, pamięć 6/64 GB i Android 13 z usługami Google. Droższa wersja ma dodatkowo modem 5G z gniazdem nano-SIM i eSIM oraz dwuzakresowy odbiornik GNSS."
      },
      {
        "question": "Czy Bluebird T30 otrzyma nowsze wersje Androida?",
        "answer": "Producent zapowiada aktualizacje od Androida 13 do Androida 17. Usługa aktualizacji jest dostępna po zakupie kontraktu serwisowego Bluebird Care."
      },
      {
        "question": "Jakie są alternatywy dla Bluebird T30?",
        "answer": "Cieńszy i lżejszy jest <a href=\"/produkt/bluebird-t10\">Bluebird T10</a> z ekranem 10,95″ i opcją 4G LTE, ale ma zintegrowaną baterię, a producent nie deklaruje dla niego klasy IP ani odporności na upadki. Obudowę o wyższej szczelności i Androida mają <a href=\"/produkt/getac-zx10-g2\">Getac ZX10 G2</a> (IP66) i <a href=\"/produkt/brady-rt710\">Brady RT710</a> (IP66 i IP68)."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "bluebird-t10",
    "slug": "bluebird-t10",
    "name": "Bluebird T10",
    "seoH1": "Bluebird T10",
    "seoTitle": "Tablet Bluebird T10 10,95″ z Androidem 14 i opcją 4G LTE, 7,4 mm",
    "seoDescription": "Bluebird T10: smukły tablet biznesowy 10,95″ 2K z Androidem 14, grubość 7,4 mm, NFC i opcja 4G LTE. Tablet T10 Bluebird, PN: T10-ANLC, T10-A4LFW.",
    "shortDescription": "Bluebird T10 — smukły tablet biznesowy z ekranem 10,95″ 2000 × 1200 (7,4 mm, 492 g), Androidem 14, NFC i złączem POGO do klawiatury 2 w 1; wersja 4G LTE ma eSIM i GPS.",
    "description": "Bluebird T10 to smukły tablet z Androidem przeznaczony dla firm różnej wielkości. Ma 7,4 mm grubości, masę 492 g i ekran 10,95 cala o rozdzielczości 2000 × 1200. Jest to tablet biznesowy, nie wersja wzmocniona: producent nie deklaruje dla niego klasy szczelności ani odporności na upadki.\n\nW handlu T10 pracuje jako mobilny punkt sprzedaży (mPOS), służy do prezentacji produktów i sprzedaży uzupełniającej z oferty internetowej. W placówkach medycznych obsługuje dokumentację kliniczną, zlecenia leków i badań oraz ankiety wypełniane przez pacjentów. W restauracjach przyjmuje zamówienia i płatności, a w transporcie zapewnia łączność z kierowcą i rejestrację czasu jazdy (ELD).\n\nOśmiordzeniowy procesor Qualcomm osiąga do 2,8 GHz. Moduł NFC obsługuje płatności zbliżeniowe i karty ISO 14443, ISO 15693 oraz FeliCa. Do 5-pinowego złącza POGO podłącza się klawiaturę 2 w 1, przydatną przy pracy z dokumentami. Wersja Wi-Fi ma 4/64 GB pamięci. Wersja z 4G LTE ma 6/128 GB, eSIM, GPS i pasma dla wszystkich rynków w jednej konfiguracji (Global 1 SKU).\n\nBateria 8000 mAh jest zintegrowana z obudową. Bluebird deklaruje cykl 3+3 lata (dostawy i wsparcie) oraz aktualizacje z Androida 14 do wersji 16 i 18 w ramach płatnej usługi Bluebird Care.",
    "categoryId": "tablety-przemyslowe",
    "subcategoryIds": [
      "tablety-przemyslowe"
    ],
    "manufacturerId": "bluebird",
    "sameAs": "https://www.bluebirdcorp.com/products/Enterprise-Tablets/Managed-Tablets/T10",
    "priceFrom": 1459.16,
    "availability": "unavailable",
    "images": [
      "/images/products/T10-ANLC.png",
      "/images/products/T10-ANLC-2.png",
      "/images/products/T10-ANLC-3.png"
    ],
    "imageDescriptions": [
      "Bluebird T10 — widok z przodu, ekran 10,95 cala w poziomie",
      "Bluebird T10 — widok z przodu pod kątem, wygaszony ekran i obudowa o grubości 7,4 mm",
      "Bluebird T10 — przód i tył obudowy z aparatem 13 MP"
    ],
    "tags": [
      "retail",
      "healthcare",
      "logistyka"
    ],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "System operacyjny",
        "value": "Android 14; aktualizacja do Androida 16 i 18 w ramach usługi Bluebird Care"
      },
      {
        "name": "Procesor",
        "value": "Qualcomm, 8 rdzeni, do 2,8 GHz"
      },
      {
        "name": "Pamięć RAM / Flash",
        "value": "4 GB / 64 GB albo 6 GB / 128 GB UFS 2.2, zależnie od wersji; microSD do 2 TB"
      },
      {
        "name": "Wyświetlacz",
        "value": "10,95″ 2000 × 1200 (2K), min. 330 nitów, typowo 410 nitów"
      },
      {
        "name": "Ekran dotykowy",
        "value": "Pojemnościowy, 10 punktów dotyku"
      },
      {
        "name": "Aparaty",
        "value": "Tylny 13 MP z autofokusem i lampą LED; przedni 8 MP"
      },
      {
        "name": "Wi-Fi",
        "value": "Wi-Fi 5 (802.11ac), 2,4 i 5 GHz, 1×1, do 433 Mb/s"
      },
      {
        "name": "Bluetooth",
        "value": "5.0, BLE"
      },
      {
        "name": "Łączność komórkowa",
        "value": "Wersja T10-A4LFW: 4G LTE, 3G, 2G; nano-SIM i eSIM"
      },
      {
        "name": "GNSS",
        "value": "Wersja T10-A4LFW: GPS, GLONASS, Galileo, BeiDou"
      },
      {
        "name": "NFC",
        "value": "ISO 14443 A/B, FeliCa, ISO 15693; HCE"
      },
      {
        "name": "Porty",
        "value": "USB-C OTG; 5-pinowe złącze POGO do klawiatury; microSD"
      },
      {
        "name": "Audio",
        "value": "Dwa mikrofony, dwa głośniki stereo 1 W; dźwięk przewodowy przez USB-C"
      },
      {
        "name": "Bateria",
        "value": "Zintegrowana Li-Po 8000 mAh, 3,8 V (30,4 Wh), bez wymiany w trakcie pracy; ładowanie 5 V / 3 A, obsługa 9 V / 2 A"
      },
      {
        "name": "Temperatura pracy",
        "value": "Od −20°C do +50°C"
      },
      {
        "name": "Temperatura przechowywania",
        "value": "Od −30°C do +70°C"
      },
      {
        "name": "Wilgotność",
        "value": "95% bez kondensacji"
      },
      {
        "name": "Wymiary",
        "value": "257,4 × 162,7 × 7,4 mm"
      },
      {
        "name": "Masa",
        "value": "492 g"
      },
      {
        "name": "Cykl życia",
        "value": "3 + 3 lata: okres dostaw i okres wsparcia"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Tablet ze zintegrowaną baterią, zasilacz 5 V / 3 A z wtyczką, kabel USB"
      },
      {
        "name": "Gwarancja",
        "value": "12 miesięcy"
      },
      {
        "name": "Part Number",
        "value": "T10-ANLC, T10-A4LFW"
      }
    ],
    "applications": [
      "Mobilny punkt sprzedaży (mPOS) i prezentacja produktów",
      "Dokumentacja kliniczna i informacja dla pacjenta",
      "Zamówienia, menu elektroniczne i płatności w gastronomii",
      "Łączność z kierowcą i rejestracja czasu jazdy (ELD)"
    ],
    "variants": [
      {
        "partNumber": "T10-ANLC",
        "name": "T10 — Wi-Fi 5, 4/64 GB",
        "priceFrom": 1459.16,
        "availability": "unavailable",
        "attributes": {
          "Łączność": "Wi-Fi 5",
          "RAM / Flash": "4 / 64 GB"
        }
      },
      {
        "partNumber": "T10-A4LFW",
        "name": "T10 — 4G LTE, GPS, 6/128 GB",
        "priceFrom": 1513.03,
        "availability": "unavailable",
        "attributes": {
          "Łączność": "Wi-Fi 5, 4G LTE, GPS",
          "RAM / Flash": "6 / 128 GB"
        }
      }
    ],
    "variantAttributeTooltips": {
      "Łączność": "Sieci dostępne w danej wersji T10. Każda ma Wi-Fi 5 (802.11ac, 2,4 i 5 GHz) i Bluetooth 5.0.\n\n• 4G LTE — modem z pasmami dla wszystkich rynków, nano-SIM i eSIM.\n\n• GPS — odbiornik GPS, GLONASS, Galileo i BeiDou w wersji z 4G LTE.",
      "RAM / Flash": "Pamięć operacyjna oraz pamięć UFS 2.2 na system, aplikacje i dane.\n\n• 6 / 128 GB — więcej miejsca na aplikacje i dokumenty przechowywane w tablecie.\n\n• Obie wersje przyjmują kartę microSD do 2 TB."
    },
    "compatibleAccessories": [],
    "relatedAccessories": [
      "bluebird-638010002",
      "bluebird-351120041",
      "bluebird-624010038",
      "bluebird-626010007",
      "bluebird-621040006",
      "bluebird-621060003",
      "bluebird-602010041",
      "bluebird-602020024",
      "bluebird-603010005"
    ],
    "relatedProducts": [
      "bluebird-t30",
      "getac-zx10-g2",
      "honeywell-eda10a",
      "honeywell-rt10a",
      "zebra-et40",
      "zebra-et45",
      "brady-rt710"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa Bluebird T10 (EN)",
        "type": "datasheet",
        "url": "/datasheets/bluebird-t10.pdf",
        "size": "262 KB"
      },
      {
        "name": "Przewodnik akcesoriów Bluebird T10 (EN)",
        "type": "manual",
        "url": "/datasheets/bluebird-t10-akcesoria.pdf",
        "size": "4,5 MB"
      }
    ],
    "faq": [
      {
        "question": "Czy Bluebird T10 jest tabletem wzmocnionym (rugged)?",
        "answer": "Nie. T10 to smukły tablet biznesowy o grubości 7,4 mm. Producent nie podaje dla niego klasy szczelności IP ani testu upadku. Do pracy w pyle, wilgoci i z ryzykiem upadków przeznaczony jest <a href=\"/produkt/bluebird-t30\">Bluebird T30</a> z obudową IP65."
      },
      {
        "question": "Do czego służy złącze POGO w Bluebird T10?",
        "answer": "Pięciopinowe złącze POGO łączy tablet z dedykowaną <a href=\"/produkt/bluebird-638010002\">klawiaturą 2 w 1</a> w układzie US QWERTY. Klawiatura jest sprzedawana osobno i ułatwia wprowadzanie dłuższych tekstów."
      },
      {
        "question": "Czy baterię w Bluebird T10 można wymienić?",
        "answer": "Bateria 8000 mAh jest zintegrowana z obudową, a tablet nie obsługuje jej wymiany w trakcie pracy. T10 ładuje się przez USB-C prądem 5 V / 3 A i obsługuje też ładowanie 9 V / 2 A."
      },
      {
        "question": "Ile pamięci ma Bluebird T10?",
        "answer": "Wersja z samym Wi-Fi ma 4 GB RAM i 64 GB pamięci UFS 2.2, a wersja z 4G LTE ma 6 GB RAM i 128 GB. W obu można dołożyć kartę microSD do 2 TB."
      },
      {
        "question": "Jak długo Bluebird T10 będzie dostępny i wspierany?",
        "answer": "Producent deklaruje cykl 3+3 lata: okres dostaw, a po nim okres wsparcia. Fabrycznie tablet ma Androida 14. Przejście na Androida 16 i 18 wymaga płatnej usługi Bluebird Care."
      },
      {
        "question": "Jakie są alternatywy dla Bluebird T10?",
        "answer": "Obudowę IP65, wymienną baterię i opcję 5G ma <a href=\"/produkt/bluebird-t30\">Bluebird T30</a>. Wzmocnione tablety 10″ z Androidem to także <a href=\"/produkt/getac-zx10-g2\">Getac ZX10 G2</a> i <a href=\"/produkt/honeywell-eda10a\">Honeywell EDA10A</a>."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "bluebird-t40-ultra",
    "slug": "bluebird-t40-ultra",
    "name": "Bluebird T40 Ultra",
    "seoH1": "Bluebird T40 Ultra",
    "seoTitle": "Bluebird T40 Ultra — tablet 8″ dla zakładów karnych (zapowiedź)",
    "seoDescription": "Bluebird T40 Ultra (zapowiedź): tablet 8″ dla zakładów karnych z czujnikiem ingerencji, przezroczystym tyłem, IP68 i ładowaniem Qi. Tablet T40 Ultra Bluebird.",
    "shortDescription": "Bluebird T40 Ultra — zapowiedziany tablet 8″ dla zakładów karnych: czujnik ingerencji, przezroczysty tył, IP68, upadki z 2 m i magnetyczne złącze POGO zamiast portu USB.",
    "description": "Bluebird T40 Ultra to zapowiedziany przez producenta tablet 8″ zaprojektowany dla zakładów karnych. Sprzedaż jeszcze się nie rozpoczęła. Termin dostępności i cenę podamy na zapytanie.\n\nKonstrukcja utrudnia rozebranie tabletu i użycie jego elementów jako niebezpiecznych przedmiotów. Czujnik ingerencji od razu zgłasza próbę demontażu i działa także przy wyłączonym tablecie. Tył obudowy, domyślnie przezroczysty, zamyka 16 śrub, które odkręca się specjalnym narzędziem. Zamiast odsłoniętego portu USB tablet ma magnetyczne złącze POGO, a wersje z modemem WWAN ładują się bezprzewodowo (Qi, 15 W). Ekran chroni szkło hartowane o grubości 2 mm.\n\nOsadzeni korzystają z tabletu do wideorozmów i wiadomości, nauki, czytania e-booków, zamówień z kantyny i przeglądania dokumentów prawnych. Administrator blokuje reset do ustawień fabrycznych i głośnik, kontroluje dostęp do portów i lokalizuje tablety przez BLE, NFC albo opcjonalny tag RFID.\n\nProcesor MediaTek MT8873 pracuje z pamięcią 6/64 GB i Androidem 16. Obudowa ma klasę IP68 i znosi wielokrotne upadki z 2 m na beton według MIL-STD-810H. Bateria 8000 mAh zapewnia do 12 godzin pracy.",
    "categoryId": "tablety-przemyslowe",
    "subcategoryIds": [
      "tablety-przemyslowe"
    ],
    "manufacturerId": "bluebird",
    "sameAs": "https://www.bluebirdcorp.com/products/Enterprise-Tablets/Rugged-Tablets/T40-Ultra",
    "quoteOnly": true,
    "comingSoon": true,
    "availability": "unavailable",
    "images": [
      "/images/products/bluebird-t40-ultra.png",
      "/images/products/bluebird-t40-ultra-2.png",
      "/images/products/bluebird-t40-ultra-3.png"
    ],
    "imageDescriptions": [
      "Bluebird T40 Ultra — widok z przodu, ekran 8 cali w pionie i wzmocnione narożniki obudowy",
      "Bluebird T40 Ultra — tył obudowy w wersji nieprzezroczystej",
      "Bluebird T40 Ultra — przód pod kątem i przezroczysty tył obudowy"
    ],
    "tags": [],
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Dostępność",
        "value": "Zapowiedź producenta; termin dostępności i cena na zapytanie"
      },
      {
        "name": "System operacyjny",
        "value": "Android 16"
      },
      {
        "name": "Procesor",
        "value": "MediaTek MT8873, 8 rdzeni, do 2,6 GHz"
      },
      {
        "name": "Pamięć RAM / Flash",
        "value": "6 GB LPDDR5X / 64 GB UFS; opcja: 8 GB / 128 GB"
      },
      {
        "name": "Wyświetlacz",
        "value": "8″ HD 1280 × 800, 60 Hz, 600 nitów; szkło hartowane 2 mm"
      },
      {
        "name": "Ekran dotykowy",
        "value": "Pojemnościowy, obsługa palcem, w rękawicach i rysikiem; odrzucanie kropli wody, powłoka przeciw odciskom palców"
      },
      {
        "name": "Zabezpieczenia",
        "value": "Czujnik ingerencji działający także po wyłączeniu tabletu; tył obudowy zamknięty 16 śrubami otwieranymi specjalnym narzędziem"
      },
      {
        "name": "Tył obudowy",
        "value": "Przezroczysty; opcja: nieprzezroczysty"
      },
      {
        "name": "Obudowa",
        "value": "Materiał trudnopalny UL94 V-1 lub lepszy; powłoka antybakteryjna"
      },
      {
        "name": "Biometria",
        "value": "Czytnik linii papilarnych w przycisku zasilania"
      },
      {
        "name": "Aparaty",
        "value": "Przedni 8 MP z autofokusem; bez tylnego aparatu"
      },
      {
        "name": "Wi-Fi",
        "value": "Wi-Fi 6E (802.11ax), 2×2 MU-MIMO, do 1200 Mb/s"
      },
      {
        "name": "Bluetooth",
        "value": "6.0; nadawanie beaconów BLE"
      },
      {
        "name": "Łączność komórkowa",
        "value": "Opcja (wersje WWAN): 5G Sub-6, 4G LTE, 3G, 2G; nano-SIM i eSIM, dual SIM"
      },
      {
        "name": "GNSS",
        "value": "Opcja (wersje WWAN): GPS, GLONASS, Galileo, BeiDou, QZSS; dwuzakresowy L1 + L5"
      },
      {
        "name": "NFC",
        "value": "ISO 14443 A/B, Mifare, FeliCa, ISO 15693; HCE; płatności zbliżeniowe; certyfikat Google Smart Tap"
      },
      {
        "name": "RFID",
        "value": "Opcja: wbudowany tag RFID"
      },
      {
        "name": "Złącza",
        "value": "Magnetyczne złącze POGO (USB 2.0 OTG, ładowanie); opcja: USB-C 2.0 OTG; gniazdo audio 3,5 mm na osobnej płytce FPCB"
      },
      {
        "name": "Audio",
        "value": "Dwa mikrofony z redukcją szumów; jeden lub dwa głośniki 95 dB"
      },
      {
        "name": "Bateria",
        "value": "8000 mAh, 4,45 V; do 12 h pracy; wymiana po zdjęciu pokrywy specjalnym narzędziem; opcja: praca bez baterii przy zasilaniu zewnętrznym"
      },
      {
        "name": "Ładowanie",
        "value": "Szybkie ładowanie 30 W; bezprzewodowe Qi 15 W na środku tylnej ścianki (wersje WWAN)"
      },
      {
        "name": "Klasa szczelności",
        "value": "IP68 (do 1,5 m przez 30 min)"
      },
      {
        "name": "Odporność na upadki",
        "value": "Wielokrotne upadki z 2,0 m na beton w temperaturze od −20°C do +50°C (MIL-STD-810H)"
      },
      {
        "name": "Test przewrotów",
        "value": "1000 przewrotów z 0,5 m"
      },
      {
        "name": "Temperatura pracy",
        "value": "Od −20°C do +50°C"
      },
      {
        "name": "Temperatura przechowywania",
        "value": "Od −40°C do +70°C"
      },
      {
        "name": "Wilgotność",
        "value": "95% bez kondensacji"
      },
      {
        "name": "Wymiary",
        "value": "223,9 × 135,9 × 17 mm"
      },
      {
        "name": "Masa",
        "value": "630 g"
      },
      {
        "name": "Cykl życia",
        "value": "4 + 4 lata: okres dostaw i okres wsparcia"
      },
      {
        "name": "Zawartość zestawu",
        "value": "Tablet, bateria, przejściówka z magnetycznego złącza POGO na gniazdo USB-C, narzędzie do otwierania obudowy, zasilacz PD, kabel USB-C – USB-C, folia zabezpieczająca"
      },
      {
        "name": "Gwarancja",
        "value": "12 miesięcy"
      }
    ],
    "applications": [
      "Wideorozmowy i wiadomości osadzonych",
      "Edukacja i e-booki w zakładach karnych",
      "Zamówienia z kantyny i samoobsługa",
      "Przegląd dokumentów prawnych i biblioteka prawnicza",
      "Ogłoszenia i harmonogramy zajęć"
    ],
    "variants": [],
    "variantAttributeTooltips": {},
    "compatibleAccessories": [],
    "relatedAccessories": [],
    "relatedProducts": [
      "getac-zx80",
      "zebra-et40",
      "zebra-et45"
    ],
    "downloads": [
      {
        "name": "Karta katalogowa Bluebird T40 Ultra (EN)",
        "type": "datasheet",
        "url": "/datasheets/bluebird-t40-ultra.pdf",
        "size": "197 KB"
      }
    ],
    "faq": [
      {
        "question": "Kiedy Bluebird T40 Ultra będzie dostępny?",
        "answer": "Bluebird zapowiedział model, ale nie podał daty premiery ani numerów katalogowych wersji. Termin dostępności i cenę podamy na zapytanie."
      },
      {
        "question": "Jak T40 Ultra chroni się przed ingerencją?",
        "answer": "Tył obudowy zamyka 16 śrub, które odkręca się tylko specjalnym narzędziem. Czujnik ingerencji zgłasza próbę rozebrania tabletu na bieżąco, także gdy tablet jest wyłączony."
      },
      {
        "question": "Dlaczego Bluebird T40 Ultra nie ma portu USB?",
        "answer": "Producent zastąpił odsłonięty port magnetycznym złączem POGO z USB 2.0, które służy do ładowania i transmisji danych. Wersje z modemem WWAN ładują się też bezprzewodowo (Qi, 15 W) i nie wymagają kabla, który mógłby posłużyć jako niebezpieczny przedmiot. Złącze USB-C 2.0 jest dostępne jako opcja."
      },
      {
        "question": "Do czego osadzeni używają tabletu T40 Ultra?",
        "answer": "Do wideorozmów z rodziną i konsultacji prawnych przez przedni aparat 8 MP z autofokusem, wiadomości, nauki i e-booków, zamówień z kantyny, rozrywki oraz przeglądania dokumentów prawnych. Tablet nie ma tylnego aparatu, a dźwięk można ograniczyć do słuchawek."
      },
      {
        "question": "Jaki system ma Bluebird T40 Ultra?",
        "answer": "Fabrycznie Android 16. Producent zapowiada wersje 18 i 20, a usługa aktualizacji wymaga wykupienia programu gwarancyjnego Bluebird. Okres dostaw i wsparcia wynosi łącznie 4+4 lata."
      },
      {
        "question": "Jakie są alternatywy dla Bluebird T40 Ultra?",
        "answer": "Tablet 8″ z Androidem i obudową IP67 to <a href=\"/produkt/getac-zx80\">Getac ZX80</a>. Ekran 8″ w wybranych wersjach mają też <a href=\"/produkt/zebra-et40\">Zebra ET40</a> i <a href=\"/produkt/zebra-et45\">Zebra ET45</a>. Te modele nie mają funkcji przeznaczonych dla zakładów karnych, takich jak czujnik ingerencji czy przezroczysty tył."
      }
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  }
]

export const bluebirdTabletAccessories: Product[] = [
  {
    "id": "bluebird-204020040",
    "slug": "bluebird-204020040",
    "name": "Stacja ładująca 4-gniazdowa Bluebird T30",
    "seoH1": "Stacja ładująca 4-gniazdowa Bluebird T30",
    "seoTitle": "Stacja ładująca 4-gniazdowa Bluebird T30 — 204020040",
    "seoDescription": "Stacja ładująca 4-gniazdowa Bluebird T30 (204020040) ładuje cztery tablety T30; zasilacz 10 A i przewód EU osobno, podkładki do tabletów bez osłony.",
    "shortDescription": "Stacja ładująca 4-gniazdowa Bluebird T30 — ładuje jednocześnie cztery tablety, zasilacz 10 A i przewód sieciowy zamawia się osobno. PN 204020040.",
    "description": "Stacja 4-gniazdowa ładuje jednocześnie do czterech tabletów [Bluebird T30](/produkt/bluebird-t30), ustawionych pionowo w gniazdach. Służy tylko do ładowania i nie ma złączy sieciowych. Otwory w spodzie pozwalają przykręcić stację do podłoża. Każdy tablet bez osłony rugged boot wymaga w gnieździe osobnej podkładki, czyli do czterech sztuk na stację. Stację zasila zasilacz 10 A z przewodem sieciowym EU. Model zasilacza dobierzemy przy zamówieniu.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Przewód zasilający EU Bluebird (14948)](/produkt/bluebird-14948)\n\n**Wymagane dla tabletu T30 bez osłony rugged boot — sprzedawane osobno**\n\n- [Podkładka do stacji Bluebird T30 (501260136)](/produkt/bluebird-501260136)\n\nZasilacza 10 A ani przewodu nie ma w zestawie ze stacją.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-tabletow"
    ],
    "manufacturerId": "bluebird",
    "images": [
      "/images/products/bluebird-204020040.png"
    ],
    "imageDescriptions": [
      "Stacja ładująca 4-gniazdowa Bluebird T30 — stacja z czterema gniazdami tabletów"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 939.37,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "204020040"
      },
      {
        "name": "Kompatybilność",
        "value": "Bluebird T30"
      },
      {
        "name": "Liczba gniazd",
        "value": "4 tablety"
      },
      {
        "name": "Funkcja",
        "value": "Tylko ładowanie"
      },
      {
        "name": "Zasilacz",
        "value": "10 A, sprzedawany osobno; model dobierany przy zamówieniu"
      },
      {
        "name": "Montaż",
        "value": "Otwory montażowe w spodzie"
      },
      {
        "name": "Podkładka",
        "value": "1 szt. na gniazdo dla tabletu bez osłony rugged boot"
      }
    ],
    "applications": [
      "Ładowanie kilku tabletów T30 na zapleczu lub w biurze zmiany"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "bluebird-t30"
    ],
    "downloads": [],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "bluebird-204010093",
    "slug": "bluebird-204010093",
    "name": "Stacja ładująca 1-gniazdowa Bluebird T30",
    "seoH1": "Stacja ładująca 1-gniazdowa Bluebird T30",
    "seoTitle": "Stacja ładująca 1-gniazdowa Bluebird T30 — 204010093",
    "seoDescription": "Stacja ładująca 1-gniazdowa Bluebird T30 (204010093): jeden tablet T30 na stanowisku pracy; zasilacz 12 V / 5 A i przewód EU osobno.",
    "shortDescription": "Stacja ładująca 1-gniazdowa Bluebird T30 — ładuje jeden tablet na stanowisku pracy, zasilacz 12 V / 5 A sprzedawany osobno. PN 204010093.",
    "description": "Stacja 1-gniazdowa ładuje jeden tablet [Bluebird T30](/produkt/bluebird-t30) na stanowisku pracy. Tablet ładuje się po wstawieniu do gniazda, bez podłączania kabla do złącza USB-C. Stacja nie ma portów komunikacyjnych. Gdy tablet nie ma osłony rugged boot, w gnieździe montuje się jedną podkładkę.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Zasilacz 12 V / 5 A do stacji Bluebird (602010025)](/produkt/bluebird-602010025)\n- [Przewód zasilający EU Bluebird (14948)](/produkt/bluebird-14948)\n\n**Wymagane dla tabletu T30 bez osłony rugged boot — sprzedawane osobno**\n\n- [Podkładka do stacji Bluebird T30 (501260136)](/produkt/bluebird-501260136)\n\nPrzewód EU łączy zasilacz 12 V / 5 A z gniazdkiem sieciowym.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-tabletow"
    ],
    "manufacturerId": "bluebird",
    "images": [
      "/images/products/bluebird-204010093.png"
    ],
    "imageDescriptions": [
      "Stacja ładująca 1-gniazdowa Bluebird T30 — stacja z jednym gniazdem i wstawionym tabletem"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "unavailable",
    "priceFrom": 414.44,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "204010093"
      },
      {
        "name": "Kompatybilność",
        "value": "Bluebird T30"
      },
      {
        "name": "Liczba gniazd",
        "value": "1 tablet"
      },
      {
        "name": "Funkcja",
        "value": "Tylko ładowanie"
      },
      {
        "name": "Zasilacz",
        "value": "12 V / 5 A, sprzedawany osobno"
      },
      {
        "name": "Podkładka",
        "value": "1 szt. dla tabletu bez osłony rugged boot"
      }
    ],
    "applications": [
      "Ładowanie tabletu T30 na stanowisku obsługi"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "bluebird-t30"
    ],
    "downloads": [],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "bluebird-501260136",
    "slug": "bluebird-501260136",
    "name": "Podkładka do stacji Bluebird T30",
    "seoH1": "Podkładka do stacji Bluebird T30",
    "seoTitle": "Podkładka do stacji Bluebird T30 — 501260136",
    "seoDescription": "Podkładka do stacji Bluebird T30 (501260136) do tabletu T30 bez osłony rugged boot: 1 szt. na gniazdo stacji 1- i 4-gniazdowej.",
    "shortDescription": "Podkładka do stacji Bluebird T30 — dopasowuje gniazdo stacji 1- lub 4-gniazdowej do tabletu bez osłony rugged boot. PN 501260136.",
    "description": "Podkładka dopasowuje gniazdo stacji ładującej do tabletu [Bluebird T30](/produkt/bluebird-t30) bez osłony rugged boot. Gniazda stacji T30 bez podkładki są przewidziane dla tabletu w osłonie. Jedna podkładka obsługuje jedno gniazdo: [stacja 1-gniazdowa (204010093)](/produkt/bluebird-204010093) potrzebuje jednej sztuki, a [stacja 4-gniazdowa (204020040)](/produkt/bluebird-204020040) czterech. Tablet w [osłonie rugged boot (351120036)](/produkt/bluebird-351120036) wstawia się do stacji bez podkładki.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-tabletow"
    ],
    "manufacturerId": "bluebird",
    "images": [
      "/images/products/bluebird-501260136.png"
    ],
    "imageDescriptions": [
      "Podkładka do stacji Bluebird T30 — podkładka do gniazda stacji"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 11.07,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "501260136"
      },
      {
        "name": "Kompatybilność",
        "value": "Bluebird T30"
      },
      {
        "name": "Pasuje do",
        "value": "Stacja ładująca 1-gniazdowa Bluebird T30 (204010093), Stacja ładująca 4-gniazdowa Bluebird T30 (204020040)"
      },
      {
        "name": "Liczba na gniazdo",
        "value": "1 szt."
      }
    ],
    "applications": [
      "Ładowanie w stacji tabletu T30 bez osłony"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "bluebird-t30"
    ],
    "downloads": [],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "bluebird-351120036",
    "slug": "bluebird-351120036",
    "name": "Osłona rugged boot Bluebird T30",
    "seoH1": "Osłona rugged boot Bluebird T30",
    "seoTitle": "Osłona rugged boot Bluebird T30 — 351120036",
    "seoDescription": "Osłona rugged boot Bluebird T30 (351120036): odporność tabletu T30 na upadki do 1,6 m (MIL-STD-810H), test 300 przewrotów z 0,5 m.",
    "shortDescription": "Osłona rugged boot Bluebird T30 — zwiększa odporność tabletu na upadki do 1,6 m. PN 351120036.",
    "description": "Osłona rugged boot zwiększa odporność tabletu [Bluebird T30](/produkt/bluebird-t30) na upadki z 1,0 m do 1,6 m według MIL-STD-810H. Z założoną osłoną T30 przechodzi też test 300 przewrotów z wysokości 0,5 m. Tablet w osłonie wstawia się do stacji ładujących T30 bez podkładki. Osłona jest potrzebna do zamocowania linki rysika: [prostej (626010004)](/produkt/bluebird-626010004) albo [spiralnej (19346)](/produkt/bluebird-19346).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-tabletow"
    ],
    "manufacturerId": "bluebird",
    "images": [
      "/images/products/bluebird-351120036.png"
    ],
    "imageDescriptions": [
      "Osłona rugged boot Bluebird T30 — tablet T30 w założonej osłonie, widok z przodu"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 110.53,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "351120036"
      },
      {
        "name": "Kompatybilność",
        "value": "Bluebird T30"
      },
      {
        "name": "Odporność na upadki",
        "value": "Do 1,6 m według MIL-STD-810H (bez osłony: 1,0 m)"
      },
      {
        "name": "Test przewrotów",
        "value": "300 przewrotów z 0,5 m"
      }
    ],
    "applications": [
      "Ochrona tabletu T30 przy pracy w terenie i w magazynie"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "bluebird-t30"
    ],
    "downloads": [],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "bluebird-355040109",
    "slug": "bluebird-355040109",
    "name": "Bateria standardowa 8000 mAh Bluebird T30",
    "seoH1": "Bateria standardowa 8000 mAh Bluebird T30",
    "seoTitle": "Bateria standardowa 8000 mAh Bluebird T30 — 355040109",
    "seoDescription": "Bateria standardowa 8000 mAh Bluebird T30 (355040109): zapasowa bateria Li-Po 3,89 V do tabletu T30, wymiana na miejscu bez wizyty w serwisie.",
    "shortDescription": "Bateria standardowa 8000 mAh Bluebird T30 — zapasowa bateria litowo-polimerowa do wymiany na miejscu pracy. PN 355040109.",
    "description": "Bateria standardowa 8000 mAh zasila tablet [Bluebird T30](/produkt/bluebird-t30). Ma ogniwa litowo-polimerowe o napięciu 3,89 V. Tablet pozwala wymienić baterię na miejscu pracy, bez wysyłki urządzenia do serwisu. Nowa bateria zastępuje dotychczasową, gdy jej żywotność dobiega końca. Bateria ma pojemność taką samą jak bateria dostarczana z tabletem.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-tabletow"
    ],
    "manufacturerId": "bluebird",
    "images": [],
    "imageDescriptions": [],
    "tags": [
      "magazyn"
    ],
    "availability": "on-order",
    "priceFrom": 234.83,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "355040109"
      },
      {
        "name": "Kompatybilność",
        "value": "Bluebird T30"
      },
      {
        "name": "Pojemność",
        "value": "8000 mAh"
      },
      {
        "name": "Napięcie",
        "value": "3,89 V"
      },
      {
        "name": "Typ",
        "value": "Litowo-polimerowa"
      }
    ],
    "applications": [
      "Wymiana zużytej baterii tabletu T30"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "bluebird-t30"
    ],
    "downloads": [],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "bluebird-357010004",
    "slug": "bluebird-357010004",
    "name": "Pasek na dłoń Bluebird T30",
    "seoH1": "Pasek na dłoń Bluebird T30",
    "seoTitle": "Pasek na dłoń Bluebird T30 — 357010004",
    "seoDescription": "Pasek na dłoń Bluebird T30 (357010004) do trzymania tabletu T30 w jednej dłoni, z wbudowaną pętlą na rysik aluminiowy 626010007.",
    "shortDescription": "Pasek na dłoń Bluebird T30 — pozwala trzymać tablet w jednej dłoni, z pętlą na rysik. PN 357010004.",
    "description": "Pasek na dłoń ułatwia trzymanie tabletu [Bluebird T30](/produkt/bluebird-t30) w jednej dłoni. Druga ręka pozostaje wolna do obsługi ekranu, np. przy inwentaryzacji lub obsłudze klienta przy półce. Pasek ma wbudowaną pętlę na rysik, np. [rysik aluminiowy Bluebird (626010007)](/produkt/bluebird-626010007), który w ten sposób jest zawsze pod ręką.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-tabletow"
    ],
    "manufacturerId": "bluebird",
    "images": [
      "/images/products/bluebird-357010004.png"
    ],
    "imageDescriptions": [
      "Pasek na dłoń Bluebird T30 — pasek z logo Bluebird i klamrą regulacyjną"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 78.74,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "357010004"
      },
      {
        "name": "Kompatybilność",
        "value": "Bluebird T30"
      },
      {
        "name": "Pętla na rysik",
        "value": "Tak"
      }
    ],
    "applications": [
      "Praca z tabletem T30 trzymanym w dłoni"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "bluebird-t30"
    ],
    "downloads": [],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "bluebird-624010038",
    "slug": "bluebird-624010038",
    "name": "Szkło ochronne Bluebird T30 i T10",
    "seoH1": "Szkło ochronne Bluebird T30 i T10",
    "seoTitle": "Szkło ochronne Bluebird T30 i T10 — 624010038",
    "seoDescription": "Szkło ochronne Bluebird T30 i T10 (624010038): szkło hartowane z powłoką przeciw odciskom palców do ekranów tabletów T30 i T10.",
    "shortDescription": "Szkło ochronne Bluebird T30 i T10 — szkło hartowane z powłoką przeciw odciskom palców, wspólne dla obu tabletów. PN 624010038.",
    "description": "Szkło ochronne z hartowanego szkła nakleja się na ekran tabletu [Bluebird T30](/produkt/bluebird-t30) albo [Bluebird T10](/produkt/bluebird-t10). Chroni wyświetlacz przed zarysowaniami i częściowo przed skutkami drobnych uderzeń. Powłoka ogranicza widoczność odcisków palców. Szkło nie zastępuje osłony rugged boot, która chroni obudowę T30 przy upadkach. Oba tablety korzystają z tego samego numeru katalogowego.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-tabletow"
    ],
    "manufacturerId": "bluebird",
    "images": [
      "/images/products/bluebird-624010038.png"
    ],
    "imageDescriptions": [
      "Szkło ochronne Bluebird T30 i T10 — szkło ochronne z naklejkami pomocniczymi do montażu"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "unavailable",
    "priceFrom": 65.79,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "624010038"
      },
      {
        "name": "Kompatybilność",
        "value": "Bluebird T30, Bluebird T10"
      },
      {
        "name": "Materiał",
        "value": "Szkło hartowane"
      },
      {
        "name": "Powłoka",
        "value": "Przeciw odciskom palców"
      }
    ],
    "applications": [
      "Ochrona ekranu tabletu T30 lub T10"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "bluebird-t30",
      "bluebird-t10"
    ],
    "downloads": [],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "bluebird-355040121",
    "slug": "bluebird-355040121",
    "name": "Uchwyt do wózka widłowego Bluebird T30",
    "seoH1": "Uchwyt do wózka widłowego Bluebird T30",
    "seoTitle": "Uchwyt do wózka widłowego Bluebird T30 — 355040121",
    "seoDescription": "Uchwyt do wózka widłowego Bluebird T30 (355040121): mocowanie tabletu T30 w wózku widłowym; wymaga zgodnej powierzchni montażowej.",
    "shortDescription": "Uchwyt do wózka widłowego Bluebird T30 — mocuje tablet w wózku widłowym, wymaga zgodnej powierzchni montażowej. PN 355040121.",
    "description": "Uchwyt mocuje tablet [Bluebird T30](/produkt/bluebird-t30) w wózku widłowym. Dzięki temu operator może korzystać z tabletu bez trzymania go w ręku. Uchwyt ma ramiona obejmujące krawędzie tabletu oraz podstawę montażową. Do instalacji w pojeździe potrzebna jest zgodna powierzchnia montażowa. Przed zamówieniem sprawdź, czy wózek ma takie miejsce.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-tabletow"
    ],
    "manufacturerId": "bluebird",
    "images": [
      "/images/products/bluebird-355040121.png"
    ],
    "imageDescriptions": [
      "Uchwyt do wózka widłowego Bluebird T30 — uchwyt z ramionami zaciskowymi i podstawą montażową"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "unavailable",
    "priceFrom": 393.71,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "355040121"
      },
      {
        "name": "Kompatybilność",
        "value": "Bluebird T30"
      },
      {
        "name": "Montaż",
        "value": "Wymaga zgodnej powierzchni montażowej w pojeździe"
      }
    ],
    "applications": [
      "Praca z tabletem T30 w kabinie wózka widłowego"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "bluebird-t30"
    ],
    "downloads": [],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "bluebird-626010004",
    "slug": "bluebird-626010004",
    "name": "Linka prosta 350 mm do rysika Bluebird",
    "seoH1": "Linka prosta 350 mm do rysika Bluebird",
    "seoTitle": "Linka prosta 350 mm do rysika Bluebird — 626010004",
    "seoDescription": "Linka prosta 350 mm do rysika Bluebird (626010004) przypina rysik do tabletu T30 w osłonie rugged boot i chroni go przed zgubieniem.",
    "shortDescription": "Linka prosta 350 mm do rysika Bluebird — zabezpiecza rysik przed zgubieniem, wymaga osłony rugged boot na tablecie. PN 626010004.",
    "description": "Prosta linka o długości 350 mm przypina rysik do tabletu [Bluebird T30](/produkt/bluebird-t30), aby nie zgubił się podczas pracy. Jeden koniec mocuje się w punkcie mocowania rysika, np. [rysika aluminiowego Bluebird (626010007)](/produkt/bluebird-626010007). Drugi koniec przypina się do osłony rugged boot, dlatego linka wymaga tej osłony na tablecie.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Osłona rugged boot Bluebird T30 (351120036)](/produkt/bluebird-351120036)\n\nOsłona nie jest dołączona do linki.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-tabletow"
    ],
    "manufacturerId": "bluebird",
    "images": [
      "/images/products/bluebird-626010004.png"
    ],
    "imageDescriptions": [
      "Linka prosta 350 mm do rysika Bluebird — prosta linka z pętlami na końcach"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 7.88,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "626010004"
      },
      {
        "name": "Kompatybilność",
        "value": "Bluebird T30"
      },
      {
        "name": "Długość",
        "value": "350 mm"
      },
      {
        "name": "Typ",
        "value": "Prosta"
      }
    ],
    "applications": [
      "Zabezpieczenie rysika przy tablecie T30"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "bluebird-t30"
    ],
    "downloads": [],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "bluebird-19346",
    "slug": "bluebird-19346",
    "name": "Linka spiralna 170 mm do rysika Bluebird",
    "seoH1": "Linka spiralna 170 mm do rysika Bluebird",
    "seoTitle": "Linka spiralna 170 mm do rysika Bluebird — 19346",
    "seoDescription": "Linka spiralna 170 mm do rysika Bluebird (19346): elastyczna linka przytrzymująca rysik przy tablecie T30 w osłonie rugged boot.",
    "shortDescription": "Linka spiralna 170 mm do rysika Bluebird — elastyczna linka do rysika, wymaga osłony rugged boot na tablecie. PN 19346.",
    "description": "Spiralna linka o długości 170 mm jest elastyczna i przytrzymuje rysik blisko tabletu [Bluebird T30](/produkt/bluebird-t30). Mocuje się ją do punktu mocowania na rysiku, a po stronie tabletu do osłony rugged boot. Bez założonej osłony linki nie da się przypiąć do tabletu.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Osłona rugged boot Bluebird T30 (351120036)](/produkt/bluebird-351120036)\n\nLinka jest sprzedawana bez osłony.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-tabletow"
    ],
    "manufacturerId": "bluebird",
    "images": [
      "/images/products/bluebird-19346.png"
    ],
    "imageDescriptions": [
      "Linka spiralna 170 mm do rysika Bluebird — spiralna linka z pętlami na końcach"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "unavailable",
    "priceFrom": 13.82,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "19346"
      },
      {
        "name": "Kompatybilność",
        "value": "Bluebird T30"
      },
      {
        "name": "Długość",
        "value": "170 mm"
      },
      {
        "name": "Typ",
        "value": "Spiralna, elastyczna"
      }
    ],
    "applications": [
      "Zabezpieczenie rysika przy tablecie T30"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "bluebird-t30"
    ],
    "downloads": [],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "bluebird-638010002",
    "slug": "bluebird-638010002",
    "name": "Klawiatura 2 w 1 Bluebird T10 (US QWERTY)",
    "seoH1": "Klawiatura 2 w 1 Bluebird T10 (US QWERTY)",
    "seoTitle": "Klawiatura 2 w 1 Bluebird T10 (US QWERTY) — 638010002",
    "seoDescription": "Klawiatura 2 w 1 Bluebird T10 (638010002) z układem US QWERTY, podłączana do tabletu T10 przez 5-pinowe złącze POGO (UART).",
    "shortDescription": "Klawiatura 2 w 1 Bluebird T10 (US QWERTY) — dedykowana klawiatura z układem US QWERTY, podłączana przez 5-pinowe złącze POGO. PN 638010002.",
    "description": "Klawiatura 2 w 1 jest akcesorium zaprojektowanym dla tabletu [Bluebird T10](/produkt/bluebird-t10). Łączy się z tabletem przez 5-pinowe złącze POGO (UART) na obudowie, bez kabla. Ma układ US QWERTY. Klawiatura jest sprzedawana osobno i nie wchodzi w skład zestawu z tabletem. Z klawiaturą T10 ułatwia pracę z dokumentami i wprowadzanie dłuższych tekstów.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-tabletow"
    ],
    "manufacturerId": "bluebird",
    "images": [
      "/images/products/bluebird-638010002.png"
    ],
    "imageDescriptions": [
      "Klawiatura 2 w 1 Bluebird T10 (US QWERTY) — klawiatura z podłączonym tabletem T10 na podpórce"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "unavailable",
    "priceFrom": 374.97,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "638010002"
      },
      {
        "name": "Kompatybilność",
        "value": "Bluebird T10"
      },
      {
        "name": "Układ klawiszy",
        "value": "US QWERTY"
      },
      {
        "name": "Złącze",
        "value": "5-pinowe POGO (UART)"
      }
    ],
    "applications": [
      "Praca z dokumentami na tablecie T10"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "bluebird-t10"
    ],
    "downloads": [],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "bluebird-351120041",
    "slug": "bluebird-351120041",
    "name": "Etui ochronne Bluebird T10",
    "seoH1": "Etui ochronne Bluebird T10",
    "seoTitle": "Etui ochronne Bluebird T10 — 351120041",
    "seoDescription": "Etui ochronne Bluebird T10 (351120041) chroni tablet T10 przed zarysowaniami i zabrudzeniami; wymagane do paska na ramię z łącznikiem.",
    "shortDescription": "Etui ochronne Bluebird T10 — chroni obudowę przed zarysowaniami i zabrudzeniami, potrzebne do paska na ramię. PN 351120041.",
    "description": "Etui ochronne zakłada się na tablet [Bluebird T10](/produkt/bluebird-t10). Chroni obudowę przed zarysowaniami i szkodliwymi substancjami z zewnątrz. Tablet jest dostarczany bez etui. Etui jest też potrzebne, aby nosić tablet na [pasku na ramię (621040006)](/produkt/bluebird-621040006): pasek przypina się do etui za pomocą [łącznika (621060003)](/produkt/bluebird-621060003).",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-tabletow"
    ],
    "manufacturerId": "bluebird",
    "images": [
      "/images/products/bluebird-351120041.png"
    ],
    "imageDescriptions": [
      "Etui ochronne Bluebird T10 — tablet T10 w założonym etui, widok z przodu"
    ],
    "tags": [
      "magazyn"
    ],
    "availability": "available",
    "priceFrom": 39.47,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "351120041"
      },
      {
        "name": "Kompatybilność",
        "value": "Bluebird T10"
      },
      {
        "name": "Ochrona",
        "value": "Zarysowania i zabrudzenia obudowy"
      }
    ],
    "applications": [
      "Ochrona obudowy tabletu T10"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "bluebird-t10"
    ],
    "downloads": [],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "bluebird-621040006",
    "slug": "bluebird-621040006",
    "name": "Pasek na ramię 1600 mm Bluebird T10",
    "seoH1": "Pasek na ramię 1600 mm Bluebird T10",
    "seoTitle": "Pasek na ramię 1600 mm Bluebird T10 — 621040006",
    "seoDescription": "Pasek na ramię 1600 mm Bluebird T10 (621040006) do noszenia tabletu T10 w etui; wymaga łącznika 621060003 i etui 351120041.",
    "shortDescription": "Pasek na ramię 1600 mm Bluebird T10 — pasek do noszenia tabletu przez ramię, wymaga łącznika i etui. PN 621040006.",
    "description": "Pasek o długości 1600 mm pozwala nosić tablet [Bluebird T10](/produkt/bluebird-t10) przez ramię. Pasek nie mocuje się bezpośrednio do obudowy tabletu. Potrzebne są etui ochronne T10 i łącznik paska, który łączy etui z paskiem.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Łącznik paska na ramię Bluebird T10 (621060003)](/produkt/bluebird-621060003)\n- [Etui ochronne Bluebird T10 (351120041)](/produkt/bluebird-351120041)\n\nŁącznik i etui nie są dołączone do paska.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-tabletow"
    ],
    "manufacturerId": "bluebird",
    "images": [],
    "imageDescriptions": [],
    "tags": [
      "magazyn"
    ],
    "availability": "unavailable",
    "priceFrom": 16.57,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "621040006"
      },
      {
        "name": "Kompatybilność",
        "value": "Bluebird T10"
      },
      {
        "name": "Długość",
        "value": "1600 mm"
      }
    ],
    "applications": [
      "Noszenie tabletu T10 przez ramię"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "bluebird-t10"
    ],
    "downloads": [],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  },
  {
    "id": "bluebird-621060003",
    "slug": "bluebird-621060003",
    "name": "Łącznik paska na ramię Bluebird T10",
    "seoH1": "Łącznik paska na ramię Bluebird T10",
    "seoTitle": "Łącznik paska na ramię Bluebird T10 — 621060003",
    "seoDescription": "Łącznik paska na ramię Bluebird T10 (621060003), 87 mm: łączy tablet T10 w etui ochronnym z paskiem na ramię 621040006.",
    "shortDescription": "Łącznik paska na ramię Bluebird T10 — łączy etui tabletu z paskiem na ramię 1600 mm. PN 621060003.",
    "description": "Łącznik o długości 87 mm przypina pasek na ramię do tabletu [Bluebird T10](/produkt/bluebird-t10). Bez łącznika [pasek na ramię (621040006)](/produkt/bluebird-621040006) nie połączy się z tabletem. Łącznik wymaga etui ochronnego założonego na tablet.\n\n## Co jest potrzebne do użycia?\n\n**Wymagane — sprzedawane osobno**\n\n- [Etui ochronne Bluebird T10 (351120041)](/produkt/bluebird-351120041)\n\nEtui nie jest dołączone do łącznika.",
    "categoryId": "akcesoria",
    "subcategoryIds": [
      "akcesoria-do-tabletow"
    ],
    "manufacturerId": "bluebird",
    "images": [],
    "imageDescriptions": [],
    "tags": [
      "magazyn"
    ],
    "availability": "unavailable",
    "priceFrom": 2.75,
    "isNew": true,
    "isBestseller": false,
    "specifications": [
      {
        "name": "Part Number",
        "value": "621060003"
      },
      {
        "name": "Kompatybilność",
        "value": "Bluebird T10"
      },
      {
        "name": "Długość",
        "value": "87 mm"
      },
      {
        "name": "Pasuje do",
        "value": "Pasek na ramię 1600 mm Bluebird T10 (621040006)"
      }
    ],
    "applications": [
      "Mocowanie paska na ramię do tabletu T10"
    ],
    "compatibleAccessories": [],
    "relatedProducts": [
      "bluebird-t10"
    ],
    "downloads": [],
    "faq": [],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24"
  }
]
