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
      "bluebird-626010007",
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
      "bluebird-626010007",
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

export const bluebirdTabletAccessories: Product[] = []
