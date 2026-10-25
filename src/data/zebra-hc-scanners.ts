import type { Product } from './products'

// Skanery Zebra w wersji dla ochrony zdrowia (HC) i akcesoria w kolorze Healthcare White.
// Źródła: karty katalogowe DS2200-HC (07/2019), DS4600-HC (10/2019), DS82-HC (08/2026), CS60-HC (09/2023),
// przewodnik czyszczenia i dezynfekcji skanerów Zebra Healthcare (07/2026), przewodniki akcesoriów,
// konfiguracje PN u dystrybutorów; ceny i stany z /api/stock z 25.10.2026.
// Dokumentacja: docs/catalog/skanery-hc-2026-10-25/S1.md

const listaDs82Cs60 = '3% roztwór nadtlenku wodoru (97% wody); 10% roztwór wybielacza (podchloryn sodu 0,55%, 90% wody)*; 91% alkohol izopropylowy (9% wody); Azowipe; Brulin BruTab 6S Tablets*; Clinell Universal Sanitizing Wipes; Clinell Universal Wipes; Clorox Dispatch Hospital Cleaner Disinfectant Towels with Bleach*; Clorox Formula 409 Glass and Surface Cleaner; Clorox Healthcare Bleach Germicidal Wipes*; Clorox Healthcare Hydrogen Peroxide Wipes; Clorox Healthcare Multi-Surface Quat Alcohol Wipes; Diversey D10 Concentrate Detergent Sanitizer; Diversey Dimension 256 Neutral Disinfectant Cleaner; Diversey Oxivir Tb Wipes; Diversey Virex II 256 One-Step Disinfectant Cleaner; Medipal Alcohol Wipes; Metrex CaviCide; Metrex CaviCide 1; Metrex CaviWipes; Metrex CaviWipes 1; łagodny płyn do naczyń; PDI Easy Screen Cleaning Wipe; PDI Sani-Cloth AF3 Germicidal Disposable Wipe; PDI Sani-Cloth Bleach Germicidal Disposable Wipe*; PDI Sani-Cloth HB Sani-Germicidal Disposable Wipe; PDI Sani-Cloth Plus Germicidal Disposable Cloth; PDI Super Sani-Cloth Germicidal Wipe; Progressive Products Wipes Plus; Sani Professional Disinfecting Multi-Surface Wipes; Sani-Hands Instant Hand Sanitizing Wipes; SC Johnson Windex Original Glass Cleaner with Ammonia-D; Spartan Hepacide Quat II; Sterets Alcowipe; Steris Coverage Plus Germicidal Surface Wipes; Veridien Viraguard; WipesPlus Hospital/Surgical Wipes'

const przewodnikDezynfekcji = { name: 'Czyszczenie i dezynfekcja skanerów Zebra Healthcare (EN)', type: 'pdf' as const, url: '/downloads/zebra-skanery-hc-czyszczenie-i-dezynfekcja-en.pdf', size: '424 KB' }

const ds2208Hc: Product = {
  id: 'zebra-ds2208-hc',
  slug: 'zebra-ds2208-hc',
  name: 'Zebra DS2208-HC',
  shortDescription: 'Zebra DS2208-HC — przewodowy skaner 2D dla służby zdrowia: obudowa przygotowana do dezynfekcji, ciche potwierdzenie odczytu w trybie „Do Not Disturb”, kolor Healthcare White.',
  seoTitle: 'Zebra DS2208-HC — przewodowy skaner 2D dla służby zdrowia',
  seoDescription: 'Skaner kodów kreskowych Zebra DS2208-HC do szpitali i przychodni: przewodowy imager 2D, obudowa przygotowana do dezynfekcji, tryb Do Not Disturb, USB i RS-232. Czytnik kodów 2D Zebra DS2208-HC, DS2208-HC Zebra. PN: DS2208-HCBU2100AZR, DS2208-HC0000BZZRW.',
  description: `Zebra DS2208-HC to przewodowy skaner ręczny 1D i 2D w wersji dla ochrony zdrowia, z obudową w kolorze Healthcare White. Obudowa jest przygotowana do regularnej dezynfekcji na stanowiskach przy pacjencie. Skaner odczytuje kody spotykane w szpitalu: na opaskach pacjentów, fiolkach z lekami, workach do kroplówek i tackach na próbki.

Matryca 640 × 480 pikseli i algorytmy PRZM Intelligent Imaging dekodują także słabo wydrukowane kody. Linia celownika pokazuje właściwą odległość od kodu. W trybie „Do Not Disturb” odczyt potwierdza podświetlenie kodu (Direct Decode Indicator) zamiast sygnału dźwiękowego, co ogranicza hałas przy łóżku pacjenta.

Po włożeniu do opcjonalnej podstawki skaner sam przechodzi w tryb prezentacyjny, a po podniesieniu wraca do pracy ręcznej. Przewody z automatycznym wykrywaniem hosta wybierają interfejs: USB, RS-232, Keyboard Wedge lub TGCS (IBM) 46XX przez RS485. Fabrycznie skaner jest skonfigurowany do typowych aplikacji szpitalnych, a ustawienia zmienia się w programie 123Scan.

Obudowa ma klasę IP52 i jest odporna na wielokrotne upadki na beton z wysokości 1,5 m. Gwarancja producenta na skaner wynosi 60 miesięcy.

## Co jest potrzebne do użycia?

**Wymagane dla wersji „sam skaner” — sprzedawane osobno**

- [Przewód USB Zebra 2,1 m (CBA-U21-S07ZBR)](/produkt/zebra-kabel-usb-ds22)

Dokup tylko te elementy, których jeszcze nie masz.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-dla-sluzby-zdrowia', 'skanery-przewodowe'],
  manufacturerId: 'zebra',
  priceFrom: 460.38,
  images: [
    '/images/products/DS2208-HCBU2100AZR.png',
    '/images/products/DS2208-HCBU2100AZR-2.png',
    '/images/products/DS2208-HCBU2100AZR-3.png',
  ],
  imageDescriptions: [
    'Zebra DS2208-HC — przewodowy skaner 2D w kolorze Healthcare White, widok pod kątem z oknem odczytu',
    'Zebra DS2208-HC — widok pod kątem od lewej strony, okno skanera i niebieski spust',
    'Zebra DS2208-HC — widok z przodu na okno odczytu i uchwyt z niebieską stopką',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ urządzenia', value: 'Przewodowy skaner ręczny 1D/2D (imager) w wersji dla ochrony zdrowia' },
    { name: 'Cechy wersji dla ochrony zdrowia', value: 'Obudowa przygotowana do dezynfekcji (disinfectant-ready); kolor Healthcare White; tryb „Do Not Disturb” z potwierdzeniem odczytu przez Direct Decode Indicator' },
    { name: 'Matryca', value: '640 × 480 pikseli' },
    { name: 'Celownik', value: 'Linia, bursztynowa dioda LED 624 nm' },
    { name: 'Oświetlenie', value: 'Dwie diody LED 645 nm (Super-Red)' },
    { name: 'Pole widzenia', value: '32,8° (poziomo) × 24,8° (pionowo)' },
    { name: 'Tolerancja ruchu', value: 'Praca ręczna: do 13 cm/s; tryb prezentacyjny: do 76,2 cm/s (UPC 13 mil)' },
    { name: 'Kody 1D', value: 'Code 39, Code 128, Code 93, Codabar/NW7, Code 11, MSI Plessey, UPC/EAN, I 2 of 5, Korean 3 of 5, GS1 DataBar, Base 32 (Italian Pharma)' },
    { name: 'Kody 2D', value: 'Data Matrix, QR Code, PDF417 i inne (pełna lista w przewodniku Product Reference Guide)' },
    { name: 'Najmniejszy element kodu', value: 'Code 39 i Code 128: 4 mil; Data Matrix: 6 mil; QR Code: 6,7 mil' },
    { name: 'Typowy zasięg odczytu', value: 'UPC 13 mil (100%): 1,3–36,8 cm; Data Matrix 10 mil: 0,8–15,7 cm; QR 20 mil: 0–27,9 cm; Code 39 5 mil: 0,5–15,2 cm; PDF417 6,7 mil: 2,0–14,5 cm' },
    { name: 'Interfejsy', value: 'USB, RS-232, Keyboard Wedge, TGCS (IBM) 46XX przez RS485' },
    { name: 'Sygnalizacja odczytu', value: 'Direct Decode Indicator, diody LED dobrego odczytu, diody widoczne z tyłu, sygnał dźwiękowy z regulacją tonu i głośności' },
    { name: 'Układy klawiatury', value: 'Ponad 90 układów międzynarodowych' },
    { name: 'Wymiary (wys. × szer. × gł.)', value: '16,5 × 6,6 × 9,9 cm' },
    { name: 'Waga', value: '161,6 g' },
    { name: 'Zasilanie', value: '4,5–5,5 V DC z hosta lub z zewnętrznego zasilacza' },
    { name: 'Temperatura pracy / przechowywania', value: '0–50 °C / −40–70 °C' },
    { name: 'Wilgotność', value: '5–95%, bez kondensacji' },
    { name: 'Odporność', value: 'Wielokrotne upadki z 1,5 m na beton; 250 cykli w bębnie 0,5 m; IP52' },
    { name: 'Odporność na światło otoczenia', value: '0–107 600 lx' },
    { name: 'Normy', value: 'Bezpieczeństwo elektryczne: EN 60950-1, IEC 60950-1, UL 60950-1, CAN/CSA-C22.2 No. 60950-1-07; LED: IEC 62471; emisja: EN 55032 klasa B; odporność: EN 55024; EN 61000-3-2, EN 61000-3-3; RoHS: EN 50581' },
    { name: 'Zawartość zależnie od PN', value: 'DS2208-HCBU2100AZR: skaner i przewód USB; DS2208-HC0000BZZRW: sam skaner' },
    { name: 'Gwarancja', value: '60 miesięcy' },
  ],
  applications: [
    'Rejestracja pacjentów',
    'Identyfikacja pacjenta po opasce',
    'Wydawanie leków przy łóżku, w aptece i przy wypisie',
    'Śledzenie leków w aptece i na wózku',
    'Oznaczanie worków do kroplówek',
    'Śledzenie próbek',
    'Podawanie produktów krwiopochodnych',
    'Dostęp do elektronicznej dokumentacji medycznej',
  ],
  variants: [
    {
      partNumber: 'DS2208-HCBU2100AZR',
      name: 'Zestaw z przewodem USB',
      attributes: { 'W zestawie': 'Przewód USB' },
      priceFrom: 517.04,
      availability: 'available',
    },
    {
      partNumber: 'DS2208-HC0000BZZRW',
      name: 'Sam skaner, przewód osobno',
      attributes: {},
      priceFrom: 460.38,
      availability: 'available',
    },
  ],
  variantAttributeTooltips: {
    'W zestawie': 'Elementy dołączone do skanera pod tym numerem katalogowym.\n\nPrzewód USB — łączy DS2208-HC z komputerem lub kasą; po podłączeniu skaner sam rozpoznaje typ hosta.\n\nWersja bez wpisu w tej kolumnie to sam skaner, do którego przewód kupuje się osobno.',
  },
  compatibleAccessories: [],
  relatedAccessories: ['zebra-cable-usb-ds22', 'zebra-hc-20-71043-0br', 'zebra-hc-22-71043-0br', 'zebra-hc-21-71043-0br'],
  faq: [
    {
      question: 'Czym Zebra DS2208-HC różni się od zwykłego DS2208?',
      answer: 'Wersja HC jest biała (Healthcare White), jej obudowę zaprojektowano z myślą o regularnej dezynfekcji, a tryb „Do Not Disturb” pozwala pracować cicho przy pacjencie. Fabrycznie jest skonfigurowany do aplikacji szpitalnych, a Zebra publikuje dla niego osobną listę dopuszczonych środków czyszczących. Wersja do handlu i biur to [Zebra DS2208](/produkt/zebra-ds2208).',
    },
    {
      question: 'Jakimi środkami można czyścić i dezynfekować DS2208-HC?',
      answer: 'Zebra dopuszcza dla serii DS2200-HC: 3% roztwór nadtlenku wodoru (97% wody), łagodny płyn do naczyń, Clorox Dispatch Hospital Cleaner Disinfectant Towels with Bleach, Clorox Healthcare Bleach Germicidal Wipes i PDI Sani-Cloth Bleach Germicidal Disposable Wipe. Trzech ostatnich środków, zawierających wybielacz, nie stosuje się na stacjach ładujących. Alkoholu izopropylowego nie ma na tej liście. Środki spoza listy mogą unieważnić gwarancję. Środka nie rozpyla się bezpośrednio na skaner, tylko nanosi zwilżoną ściereczką.',
    },
    {
      question: 'Jak działa tryb „Do Not Disturb”?',
      answer: 'Funkcja Direct Decode Indicator wyświetla światło na zeskanowanym kodzie. Personel widzi, że lek, opaska lub worek z kroplówką zostały odczytane, a pacjenta nie budzi sygnał dźwiękowy. DS2208-HC nie ma wibracji; potwierdzenie odczytu daje światło na kodzie, diody LED albo sygnał dźwiękowy z regulowaną głośnością.',
    },
    {
      question: 'Który wariant DS2208-HC wybrać?',
      answer: 'DS2208-HCBU2100AZR to zestaw z przewodem USB, gotowy do podłączenia do komputera. DS2208-HC0000BZZRW to sam skaner; potrzebny jest do niego osobny przewód, np. [USB Zebra CBA-U21-S07ZBR](/produkt/zebra-kabel-usb-ds22). Ta wersja przydaje się przy wymianie skanera na stanowisku, które ma już przewód, albo przy podłączeniu przez RS-232.',
    },
    {
      question: 'Czy DS2208-HC może pracować bez trzymania w ręku?',
      answer: 'Tak. W opcjonalnej podstawce skaner przechodzi w tryb prezentacyjny, a po wyjęciu wraca do pracy ręcznej. W kolorze HC White są [podstawka gooseneck 20-71043-0BR](/produkt/zebra-hc-20-71043-0br), jej wersja z obciążoną podstawą [22-71043-0BR](/produkt/zebra-hc-22-71043-0br) oraz [kubek 21-71043-0BR](/produkt/zebra-hc-21-71043-0br).',
    },
    {
      question: 'Jaka gwarancja obejmuje DS2208-HC?',
      answer: 'Zebra udziela na skaner DS2208-HC 60 miesięcy gwarancji od daty wysyłki, na warunkach ogólnej gwarancji sprzętowej Zebry. Szerszą ochronę serwisową można dokupić w programie Zebra OneCare.',
    },
    {
      question: 'Jakie są alternatywy dla DS2208-HC?',
      answer: 'Bez przewodu, z baterią na 14 godzin, pracuje [Zebra DS2278-HC](/produkt/zebra-ds2278-hc). Megapikselową matrycę, celownik LED do oddziału noworodków i wibrację ma [Zebra DS4608-HC](/produkt/zebra-ds4608-hc), a czujnik 2 MP i uszczelniony spust — [Zebra DS8208-HC](/produkt/zebra-ds8208-hc). Innych producentów: [Honeywell Xenon Ultra 1960h](/produkt/honeywell-xenon-ultra-1960h) oraz [Datalogic Gryphon GD4620-HC](/produkt/datalogic-gryphon-gd4620-hc).',
    },
  ],
  downloads: [
    { name: 'Karta katalogowa Zebra DS2200-HC (EN)', type: 'datasheet', url: '/downloads/zebra-ds2200-hc-karta-katalogowa-en.pdf', size: '415 KB' },
    przewodnikDezynfekcji,
    { name: 'Przewodnik akcesoriów Zebra DS2200 (EN)', type: 'pdf', url: '/downloads/zebra-ds2200-akcesoria-en.pdf', size: '522 KB' },
    { name: 'Instrukcja obsługi DS2208 (PL)', type: 'manual', url: 'https://www.serwis-zebry.pl/instrukcje/zebra-ds2208/instrukcja-po-polsku', size: 'Online' },
  ],
  relatedProducts: ['zebra-ds4608-hc', 'zebra-ds8208-hc', 'honeywell-xenon-ultra-1960h', 'datalogic-gryphon-gd4690-hc', 'datalogic-gryphon-gd4620-hc', 'newland-hr33-marlin-ai-white', 'newland-hr23-dorada-ai-white'],
  createdAt: '2026-10-25',
  sameAs: 'https://www.zebra.com/pl/pl/products/scanners/general-purpose-handheld-scanners/ds2200-series/ds2208-hc.html',
}

const ds2278Hc: Product = {
  id: 'zebra-ds2278-hc',
  slug: 'zebra-ds2278-hc',
  name: 'Zebra DS2278-HC',
  shortDescription: 'Zebra DS2278-HC — bezprzewodowy skaner 2D Bluetooth dla służby zdrowia: bateria na 14 godzin, stacja prezentacyjna bez osobnego zasilacza, obudowa w kolorze Healthcare White.',
  seoTitle: 'Zebra DS2278-HC — bezprzewodowy skaner 2D dla służby zdrowia',
  seoDescription: 'Bezprzewodowy skaner kodów Zebra DS2278-HC do szpitali: Bluetooth 4.0, bateria 2400 mAh na 14 godzin, obudowa przygotowana do dezynfekcji, stacja prezentacyjna HC White. Skaner Bluetooth Zebra DS2278-HC, DS2278-HC Zebra. PN: DS2278-HCBU2100PRR, DS2278-HC0000BZZRW.',
  description: `Zebra DS2278-HC to bezprzewodowy skaner kodów 1D i 2D dla placówek ochrony zdrowia, w kolorze Healthcare White. Służy do pracy przy łóżku pacjenta, w aptece i na wózkach z komputerem. Obudowę przygotowano do częstej dezynfekcji.

Skaner łączy się przez Bluetooth 4.0 z BLE (klasa 2, do 10 m) ze stacją prezentacyjną albo bezpośrednio z komputerem, tabletem lub smartfonem z Bluetooth. Do sparowania wystarczy zeskanowanie jednego kodu (Scan-to-Connect). Tryb Wi-Fi Friendly omija kanały, z których korzysta sieć Wi-Fi placówki.

Bateria litowo-jonowa 2400 mAh zapewnia 14 godzin pracy. Stacja prezentacyjna ładuje skaner także w trakcie pracy i nie wymaga osobnego zasilacza, więc można ją ustawić na wózku z komputerem. Odłożenie skanera do stacji włącza tryb prezentacyjny. Skaner można też ładować przewodem Micro USB bez stacji, np. przy pracy z tabletem i aplikacją dokumentacji medycznej.

Odczyt sygnalizuje światło rzucane na kod (tryb „Do Not Disturb”), dioda LED albo dźwięk. Obudowa ma klasę IP52. Gwarancja obejmuje skaner i stację przez 36 miesięcy, a baterię przez 12 miesięcy.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-dla-sluzby-zdrowia', 'skanery-bezprzewodowe'],
  manufacturerId: 'zebra',
  priceFrom: 473.62,
  images: [
    '/images/products/DS2278-HCBU2100PRR.png',
    '/images/products/DS2278-HCBU2100PRR-2.png',
    '/images/products/DS2278-HCBU2100PRR-3.png',
  ],
  imageDescriptions: [
    'Zebra DS2278-HC w stacji prezentacyjnej CR2278 w kolorze Healthcare White, widok z przodu',
    'Zebra DS2278-HC — bezprzewodowy skaner 2D w kolorze Healthcare White, widok pod kątem z oknem odczytu',
    'Zebra DS2278-HC — widok pod kątem od lewej strony, uchwyt z jasnym zakończeniem ze stykami ładowania',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ urządzenia', value: 'Bezprzewodowy skaner ręczny 1D/2D (imager) w wersji dla ochrony zdrowia' },
    { name: 'Cechy wersji dla ochrony zdrowia', value: 'Obudowa przygotowana do dezynfekcji (disinfectant-ready); kolor Healthcare White; tryb „Do Not Disturb” z potwierdzeniem odczytu przez Direct Decode Indicator' },
    { name: 'Łączność', value: 'Bluetooth 4.0 z BLE, klasa 2 (do 10 m), profile Serial Port i HID; moc nadawania regulowana w 8 krokach; tryb Wi-Fi Friendly' },
    { name: 'Matryca', value: '640 × 480 pikseli' },
    { name: 'Celownik / oświetlenie', value: 'Linia, bursztynowa dioda LED 624 nm / dwie diody LED 645 nm' },
    { name: 'Pole widzenia', value: '32,8° (poziomo) × 24,8° (pionowo)' },
    { name: 'Kody 1D', value: 'Code 39, Code 128, Code 93, Codabar/NW7, Code 11, MSI Plessey, UPC/EAN, I 2 of 5, Korean 3 of 5, GS1 DataBar, Base 32 (Italian Pharma)' },
    { name: 'Kody 2D', value: 'Data Matrix, QR Code, PDF417 i inne (pełna lista w przewodniku Product Reference Guide)' },
    { name: 'Typowy zasięg odczytu', value: 'UPC 13 mil (100%): 1,3–36,8 cm; Data Matrix 10 mil: 0,8–15,7 cm; QR 20 mil: 0–27,9 cm; Code 128 5 mil: 1,5–10,1 cm' },
    { name: 'Bateria', value: 'Li-Ion 2400 mAh; 110 000 odczytów przy 60 skanach na minutę lub 50 000 przy 10 skanach na minutę' },
    { name: 'Czas ładowania na 14-godzinną zmianę', value: 'Standardowy port USB: 4 h; USB BC1.2 lub zewnętrzne 5 V: 1 h; Micro USB: 1,5 h; Micro USB BC1.2: 1 h' },
    { name: 'Interfejsy stacji', value: 'USB, RS-232, Keyboard Wedge, TGCS (IBM) 46XX przez RS485' },
    { name: 'Sygnalizacja odczytu', value: 'Direct Decode Indicator, diody LED dobrego odczytu, diody widoczne z tyłu, sygnał dźwiękowy z regulacją tonu i głośności' },
    { name: 'Wymiary skanera (wys. × szer. × gł.)', value: '17,5 × 6,6 × 9,0 cm' },
    { name: 'Wymiary stacji prezentacyjnej', value: '7,2 × 9,4 × 12,2 cm; 151 g' },
    { name: 'Waga skanera', value: '214 g' },
    { name: 'Temperatura pracy', value: 'Skaner: 0–50 °C; stacja: 0–40 °C' },
    { name: 'Odporność', value: 'Wielokrotne upadki z 1,5 m na beton; 250 cykli w bębnie 0,5 m; IP52' },
    { name: 'Normy', value: 'Bezpieczeństwo elektryczne: EN 60950-1, IEC 60950-1, UL 60950-1; LED: IEC 62471; emisja: EN 55032 klasa B; odporność: EN 55024' },
    { name: 'Zawartość zależnie od PN', value: 'DS2278-HCBU2100PRR: skaner, stacja prezentacyjna i przewód USB; DS2278-HC0000BZZRW: sam skaner' },
    { name: 'Gwarancja', value: 'Skaner DS2278-HC i stacja CR2278: 36 miesięcy; bateria: 12 miesięcy' },
  ],
  applications: [
    'Identyfikacja pacjenta przy łóżku',
    'Podawanie i weryfikacja leków',
    'Wózki z komputerem (stacja bez osobnego zasilacza)',
    'Apteka szpitalna i laboratorium',
    'Aplikacje dokumentacji medycznej na tabletach',
    'Śledzenie próbek',
  ],
  variants: [
    {
      partNumber: 'DS2278-HCBU2100PRR',
      name: 'Zestaw ze stacją prezentacyjną i przewodem USB',
      attributes: { 'W zestawie': 'Stacja prezentacyjna, przewód USB' },
      priceFrom: 881.54,
      availability: 'available',
    },
    {
      partNumber: 'DS2278-HC0000BZZRW',
      name: 'Sam skaner',
      attributes: {},
      priceFrom: 473.62,
      availability: 'available',
    },
  ],
  variantAttributeTooltips: {
    'W zestawie': 'Elementy dołączone do DS2278-HC pod tym numerem katalogowym.\n\nStacja prezentacyjna — ładuje skaner i przełącza go w tryb prezentacyjny; zasilanie bierze z portu USB komputera.\n\nPrzewód USB — łączy stację z komputerem. Sam skaner paruje się bezpośrednio z urządzeniem z Bluetooth.',
  },
  compatibleAccessories: [],
  relatedAccessories: ['zebra-hc-cr2278-pc1000brw', 'zebra-battery-ds2278', 'zebra-cable-usb-ds22'],
  faq: [
    {
      question: 'Czym Zebra DS2278-HC różni się od zwykłego DS2278?',
      answer: 'Wersja dla ochrony zdrowia ma białą obudowę (Healthcare White) do częstej dezynfekcji, tryb „Do Not Disturb” i stację prezentacyjną w tym samym kolorze. Zebra publikuje dla serii DS2200-HC osobną listę dopuszczonych środków czyszczących. Wersja do handlu i magazynu to [Zebra DS2278](/produkt/zebra-ds2278).',
    },
    {
      question: 'Jakie środki czyszczące są dopuszczone do DS2278-HC i stacji?',
      answer: 'Lista Zebry dla serii DS2200-HC obejmuje: 3% roztwór nadtlenku wodoru (97% wody), łagodny płyn do naczyń, Clorox Dispatch Hospital Cleaner Disinfectant Towels with Bleach, Clorox Healthcare Bleach Germicidal Wipes i PDI Sani-Cloth Bleach Germicidal Disposable Wipe. Na stację prezentacyjną nadają się tylko nadtlenek wodoru i płyn do naczyń, bo środki z wybielaczem powodują korozję styków ładowania. Przed ponownym włożeniem skanera styki muszą być suche.',
    },
    {
      question: 'Czy DS2278-HC wymaga stacji?',
      answer: 'Nie. Skaner paruje się bezpośrednio z komputerem, tabletem lub smartfonem z Bluetooth po zeskanowaniu kodu Scan-to-Connect i ładuje się przewodem Micro USB podłączonym do portu USB lub zasilacza. Stacja [CR2278-PC1000BRW](/produkt/zebra-hc-cr2278-pc1000brw) dodaje ładowanie w trakcie pracy i tryb prezentacyjny.',
    },
    {
      question: 'Jak długo pracuje bateria DS2278-HC?',
      answer: 'Bateria 2400 mAh wystarcza na 14 godzin pracy. Z pustej baterii stacja podłączona do standardowego portu USB ładuje skaner na całą zmianę w 4 godziny, a port USB BC1.2 lub zewnętrzne zasilanie 5 V — w godzinę. Zapasowa bateria to [BTRY-DS22EAB0E-00](/produkt/zebra-akumulator-ds2278).',
    },
    {
      question: 'Który wariant DS2278-HC wybrać?',
      answer: 'DS2278-HCBU2100PRR zawiera skaner, stację prezentacyjną w kolorze HC White i przewód USB, więc jest gotowy do pracy przy komputerze. DS2278-HC0000BZZRW to sam skaner, np. do połączenia z tabletem przez Bluetooth albo jako dodatkowy skaner do istniejącej stacji.',
    },
    {
      question: 'Jaką gwarancję ma DS2278-HC?',
      answer: 'Skaner DS2278-HC i stacja prezentacyjna CR2278 są objęte 36-miesięczną gwarancją od daty wysyłki, a bateria 12-miesięczną. Rozszerzenie zapewniają usługi Zebra OneCare.',
    },
    {
      question: 'Jakie są alternatywy dla DS2278-HC?',
      answer: 'Większy zasięg Bluetooth, czujnik 2 MP i ładowanie indukcyjne ma [Zebra DS8288-HC](/produkt/zebra-ds8288-hc). Kompaktowy skaner do kieszeni, który można przerobić na przewodowy, to [Zebra CS60-HC](/produkt/zebra-cs60-hc). Podobne modele innych marek: [Honeywell Xenon Ultra 1962h](/produkt/honeywell-xenon-ultra-1962h) i [Datalogic Gryphon GBT4600-HC](/produkt/datalogic-gryphon-gbt4600-hc). Wersja przewodowa tej serii to [Zebra DS2208-HC](/produkt/zebra-ds2208-hc).',
    },
  ],
  downloads: [
    { name: 'Karta katalogowa Zebra DS2200-HC (EN)', type: 'datasheet', url: '/downloads/zebra-ds2200-hc-karta-katalogowa-en.pdf', size: '415 KB' },
    przewodnikDezynfekcji,
    { name: 'Przewodnik akcesoriów Zebra DS2200 (EN)', type: 'pdf', url: '/downloads/zebra-ds2200-akcesoria-en.pdf', size: '522 KB' },
    { name: 'Instrukcja obsługi DS2278 (PL)', type: 'manual', url: 'https://www.serwis-zebry.pl/instrukcje/zebra-ds2278/instrukcja-po-polsku', size: 'Online' },
  ],
  relatedProducts: ['zebra-ds8288-hc', 'zebra-cs60-hc', 'honeywell-xenon-ultra-1962h', 'datalogic-gryphon-gbt4600-hc', 'datalogic-gryphon-gm4600-hc', 'newland-hr33-marlin-ai-bt-white', 'newland-hr23-dorada-ai-bt-white', 'socket-mobile-durascan-d745', 'socket-mobile-durascan-d765'],
  createdAt: '2026-10-25',
  sameAs: 'https://www.zebra.com/pl/pl/products/scanners/general-purpose-handheld-scanners/ds2200-series/ds2278-hc.html',
}

const ds4608Hc: Product = {
  id: 'zebra-ds4608-hc',
  slug: 'zebra-ds4608-hc',
  name: 'Zebra DS4608-HC',
  shortDescription: 'Zebra DS4608-HC — przewodowy skaner 2D dla szpitala, apteki i laboratorium: matryca megapikselowa z ogniskowaniem HD, białe oświetlenie, celownik LED, tryb nocny z wibracją.',
  seoTitle: 'Zebra DS4608-HC — skaner 2D HD dla szpitali i laboratoriów',
  seoDescription: 'Przewodowy skaner kodów Zebra DS4608-HC: matryca megapikselowa, ogniskowanie HD do małych kodów na lekach i strzykawkach, białe oświetlenie, celownik LED, wibracja, IP52. Skaner szpitalny Zebra DS4608-HC, DS4608-HC Zebra. PN: DS4608-HCBU2100AZW, DS4608-HC4000BVZWW.',
  description: `Zebra DS4608-HC to skaner przewodowy do odczytu kodów 1D i 2D, przeznaczony do pracy w całym szpitalu: na oddziałach, w aptece i w laboratorium. Obudowa w kolorze Healthcare White jest przygotowana do regularnej dezynfekcji, a otwory na śruby i głośnik są zakryte.

Megapikselowa matryca 1280 × 800, procesor 800 MHz i PRZM Intelligent Imaging odczytują kody w złym stanie. Ogniskowanie o wysokiej gęstości (HD) pozwala czytać małe i zakrzywione kody na butelkach z lekami, strzykawkach i workach do kroplówek. Białe oświetlenie ułatwia odczyt kodów na kolorowych tackach na próbki i kasetkach biopsyjnych. Celownik LED można stosować także na oddziale intensywnej terapii noworodków, gdzie nie zaleca się celowników laserowych.

W trybie nocnym krótkie naciśnięcie spustu przełącza potwierdzenie między sygnałem dźwiękowym a wibracją. Funkcja Preferred Symbol przesyła tylko wskazany kod z kilku umieszczonych obok siebie, np. na worku z krwią. Multi-Code Data Formatting odczytuje kilka kodów jednym naciśnięciem spustu i wysyła je w kolejności oczekiwanej przez aplikację.

Skaner ma klasę IP52 i podwójnie uszczelniony układ optyczny. Konstrukcję zaprojektowano na wielokrotne upadki z wysokości 1,8 m na beton. Gwarancja wynosi 5 lat.

## Co jest potrzebne do użycia?

**Wymagane dla wersji „sam skaner” — sprzedawane osobno**

- [Przewód USB Zebra 2,1 m (CBA-U21-S07ZBR)](/produkt/zebra-kabel-usb-ds22)

Dokup tylko te elementy, których jeszcze nie masz.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-dla-sluzby-zdrowia', 'skanery-przewodowe'],
  manufacturerId: 'zebra',
  priceFrom: 839.8,
  images: [
    '/images/products/DS4608-HCBU2100AZW.png',
    '/images/products/DS4608-HCBU2100AZW-2.png',
  ],
  imageDescriptions: [
    'Zebra DS4608-HC — przewodowy skaner 2D w kolorze Healthcare White, widok z przodu pod kątem z prawej strony',
    'Zebra DS4608-HC — widok z przodu na zagłębione okno odczytu, spust i niebieską stopkę',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ urządzenia', value: 'Przewodowy skaner ręczny 1D/2D (imager) w wersji dla ochrony zdrowia' },
    { name: 'Cechy wersji dla ochrony zdrowia', value: 'Obudowa przygotowana do dezynfekcji (disinfectant-ready); zakryte otwory śrub i głośnika; kolor Healthcare White; białe oświetlenie; celownik LED; tryb nocny z wibracją' },
    { name: 'Matryca', value: '1280 × 800 pikseli, ogniskowanie o wysokiej gęstości (HD)' },
    { name: 'Procesor', value: '800 MHz' },
    { name: 'Celownik', value: 'Okrąg, zielona dioda LED 528 nm' },
    { name: 'Oświetlenie', value: 'Dwie diody LED o ciepłej, białej barwie' },
    { name: 'Pole widzenia', value: '35° (poziomo) × 22° (pionowo)' },
    { name: 'Kody 1D', value: 'Code 39, Code 128, Code 93, Codabar/NW7, Code 11, MSI Plessey, UPC/EAN, I 2 of 5, Korean 3 of 5, GS1 DataBar, Base 32 (Italian Pharma)' },
    { name: 'Kody 2D', value: 'PDF417, Micro PDF417, Composite Codes, TLC-39, Aztec, DataMatrix, MaxiCode, QR Code, Micro QR, Han Xin, Postal Codes, SecurPharm' },
    { name: 'Najmniejszy element kodu', value: 'Code 39: 2 mil; DataMatrix: 4 mil' },
    { name: 'Typowy zasięg odczytu', value: 'Code 39 3 mil: 3,3–15,2 cm; UPC 13 mil (100%): 0–45,7 cm; DataMatrix 10 mil: 0,5–24,1 cm; QR 20 mil: 0–34,3 cm; Code 39 20 mil: 1,5–73,7 cm' },
    { name: 'Obrazy', value: 'Eksport w formatach Bitmap, JPEG i TIFF' },
    { name: 'Interfejsy', value: 'USB, RS-232, TGCS (IBM) 46XX przez RS485' },
    { name: 'Sygnalizacja odczytu', value: 'Direct Decode Indicator, diody LED dobrego odczytu, diody widoczne z tyłu, sygnał dźwiękowy z regulacją tonu i głośności, wibracja' },
    { name: 'Wymiary (wys. × szer. × gł.)', value: '16,5 × 6,7 × 9,8 cm' },
    { name: 'Waga', value: '161,9 g' },
    { name: 'Zasilanie', value: '4,5–5,5 V DC z hosta lub z zewnętrznego zasilacza' },
    { name: 'Temperatura pracy / przechowywania', value: '0–50 °C / −40–70 °C' },
    { name: 'Odporność', value: 'Wielokrotne upadki z 1,8 m na beton; 2000 cykli w bębnie 0,5 m; IP52; podwójnie uszczelniony układ optyczny' },
    { name: 'Odporność na światło otoczenia', value: '0–107 000 lx' },
    { name: 'Normy', value: 'Bezpieczeństwo elektryczne: UL 60950-1, CAN/CSA-C22.2 No. 60950-1-07, EN 60950-1, IEC 60950-1, IEC 62368-1, EN 62368-1; LED: IEC 62471, EN 62471; kompatybilność elektromagnetyczna: EN 55032 klasa B, EN 55024, EN 55035, EN 60601-1-2:2015, IEC 60601-1-2:2014' },
    { name: 'Zawartość zależnie od PN', value: 'DS4608-HCBU2100AZW: skaner i przewód USB; DS4608-HC4000BVZWW: sam skaner' },
    { name: 'Gwarancja', value: '5 lat' },
  ],
  applications: [
    'Podawanie leków',
    'Apteka szpitalna: przyjęcie leków i inwentaryzacja',
    'Laboratorium: śledzenie próbek',
    'Blok operacyjny: narzędzia i implanty',
    'Identyfikacja i weryfikacja pacjenta',
    'Izba przyjęć i triaż',
    'Przychodnie i placówki ambulatoryjne',
  ],
  variants: [
    {
      partNumber: 'DS4608-HCBU2100AZW',
      name: 'Zestaw z przewodem USB',
      attributes: { 'W zestawie': 'Przewód USB' },
      priceFrom: 903.47,
      availability: 'available',
    },
    {
      partNumber: 'DS4608-HC4000BVZWW',
      name: 'Sam skaner, przewód osobno',
      attributes: {},
      priceFrom: 839.8,
      availability: 'unavailable',
    },
  ],
  variantAttributeTooltips: {
    'W zestawie': 'Co jest dołączone do DS4608-HC pod tym numerem.\n\nPrzewód USB — prosty przewód do komputera; skaner pobiera z niego zasilanie i sam rozpoznaje host.\n\nWersja bez wpisu to sam skaner — przewód USB lub RS-232 dobiera się osobno.',
  },
  compatibleAccessories: [],
  relatedAccessories: ['zebra-cable-usb-ds22', 'zebra-hc-20-71043-0br', 'zebra-hc-22-71043-0br', 'zebra-hc-21-71043-0br'],
  faq: [
    {
      question: 'Czym Zebra DS4608-HC różni się od DS4608?',
      answer: 'Odmiana HC dostała obudowę Healthcare White odporną na częste odkażanie zatwierdzonymi środkami, zakryte otwory śrub i głośnika, białe oświetlenie do kolorowych tacek na próbki oraz tryb nocny z wibracją. Zebra publikuje dla serii DS4600-HC osobną listę dopuszczonych środków czyszczących. Model do handlu to [Zebra DS4608](/produkt/zebra-ds4608).',
    },
    {
      question: 'Jakie środki do dezynfekcji są dopuszczone do DS4608-HC?',
      answer: 'Lista Zebry dla serii DS4600-HC: 3% roztwór nadtlenku wodoru (97% wody), 10% roztwór wybielacza (podchloryn sodu 0,55%, 90% wody), 70% alkohol izopropylowy (30% wody, także w chusteczkach), Clorox Dispatch Hospital Cleaner Disinfectant Towels with Bleach, Clorox Healthcare Bleach Germicidal Wipes, łagodny płyn do naczyń oraz PDI Sani-Cloth Bleach Germicidal Disposable Wipe. Podanych stężeń nie wolno przekraczać, a środków nie łączy się ze sobą.',
    },
    {
      question: 'Czy DS4608-HC można używać na oddziale noworodków?',
      answer: 'Tak. Skaner ma celownik z zieloną diodą LED zamiast lasera, dlatego Zebra przeznacza go do pracy w całym szpitalu, także na oddziale intensywnej terapii noworodków, gdzie nie zaleca się celowników laserowych. W nocy potwierdzenie odczytu można przełączyć na wibrację.',
    },
    {
      question: 'Czy DS4608-HC spełnia normę IEC 60601?',
      answer: 'Skaner spełnia normy kompatybilności elektromagnetycznej EN 60601-1-2:2015 i IEC 60601-1-2:2014. Bezpieczeństwo elektryczne potwierdzają normy IEC 60950-1 i IEC 62368-1. Producent nie deklaruje dla tego skanera zgodności z normą IEC 60601-1.',
    },
    {
      question: 'Który wariant DS4608-HC wybrać?',
      answer: 'DS4608-HCBU2100AZW to zestaw z przewodem USB. DS4608-HC4000BVZWW to sam skaner, do którego przewód kupuje się osobno, np. [USB Zebra CBA-U21-S07ZBR](/produkt/zebra-kabel-usb-ds22). Do pracy bez trzymania w ręku służy [podstawka gooseneck 20-71043-0BR](/produkt/zebra-hc-20-71043-0br) w kolorze HC White.',
    },
    {
      question: 'Jaką gwarancję ma DS4608-HC?',
      answer: 'Zebra daje na DS4608-HC 5 lat gwarancji od daty wysyłki. Pakiety Zebra OneCare Select lub Essential obejmują dodatkowo m.in. przyspieszone naprawy.',
    },
    {
      question: 'Jakie są alternatywy dla DS4608-HC?',
      answer: 'Tańszy skaner z trybem „Do Not Disturb” to [Zebra DS2208-HC](/produkt/zebra-ds2208-hc). Następca z czujnikiem 2 MP, uszczelnionym spustem i etykietami antymikrobowymi to [Zebra DS8208-HC](/produkt/zebra-ds8208-hc). Odpowiedniki innych marek: [Honeywell Xenon Ultra 1960h](/produkt/honeywell-xenon-ultra-1960h) i [Newland HR33 Marlin AI White](/produkt/newland-hr33-marlin-ai-white).',
    },
  ],
  downloads: [
    przewodnikDezynfekcji,
    { name: 'Przewodnik akcesoriów Zebra DS4608 i DS4608-HC (EN)', type: 'pdf', url: '/downloads/zebra-ds4608-ds4608-hc-akcesoria-en.pdf', size: '306 KB' },
    { name: 'Instrukcja obsługi DS4608 (PL)', type: 'manual', url: 'https://www.serwis-zebry.pl/instrukcje/zebra-ds4608/instrukcja-po-polsku', size: 'Online' },
  ],
  relatedProducts: ['zebra-ds8208-hc', 'zebra-ds2208-hc', 'honeywell-xenon-ultra-1960h', 'datalogic-gryphon-gd4690-hc', 'datalogic-gryphon-gd4620-hc', 'newland-hr33-marlin-ai-white', 'newland-hr23-dorada-ai-white'],
  createdAt: '2026-10-25',
  sameAs: 'https://www.zebra.com/pl/pl/products/scanners/general-purpose-handheld-scanners/ds4600-series/ds4608-hc.html',
}

const ds8208Hc: Product = {
  id: 'zebra-ds8208-hc',
  slug: 'zebra-ds8208-hc',
  name: 'Zebra DS8208-HC',
  shortDescription: 'Zebra DS8208-HC — przewodowy skaner dla służby zdrowia, czujnik 2 MP: uszczelniony spust indukcyjny, etykiety antymikrobowe, UDI Scan+ i Blood Bag Parse+, następca DS8108-HC.',
  seoTitle: 'Zebra DS8208-HC — skaner 2D 2 MP dla służby zdrowia',
  seoDescription: 'Przewodowy skaner kodów Zebra DS8208-HC do szpitali: czujnik 2 MP, uszczelniony spust, etykiety antymikrobowe, wibracja, tryb nocny, FIPS 140-3, 5 lat gwarancji. Skaner szpitalny Zebra DS8208-HC, DS8208-HC Zebra, następca DS8108-HC. PN: DS8208-HC4000BVZWW, DS8208-HCBU2104ZVW.',
  description: `Zebra DS8208-HC to przewodowy skaner ręczny serii DS82 dla ochrony zdrowia i następca DS8108-HC. Obudowa w kolorze Healthcare White ma gładkie powierzchnie bez szczelin i jest wykonana z tworzyw przygotowanych do częstej dezynfekcji. Spust indukcyjny jest uszczelniony, a etykiety na obudowie są antymikrobowe.

Czujnik 2 MP (1600 × 1200) z PRZM Intelligent Imaging i ogniskowaniem o wysokiej gęstości czyta kody na opaskach, także najmniejszych pacjentów, na lekach, workach z krwią, przezroczystych workach do kroplówek i próbkach. Funkcja UDI Scan+ rozdziela pola identyfikatora UDI wyrobów medycznych, a Blood Bag Parse+ odczytuje i formatuje dane z worka z krwią po jednym naciśnięciu spustu. Czujnik wykonuje też zdjęcia dokumentów pacjenta (Intelligent Document Capture).

Programowalny przycisk wielofunkcyjny działa jak drugi spust, np. do przełączania między dokumentacją medyczną a aplikacją do pobrań krwi. Zielony celownik LED można stosować na oddziale intensywnej terapii noworodków. Odczyt potwierdza wibracja, diody albo regulowany sygnał dźwiękowy. Tryb nocny włącza się jednym dotknięciem, a wbudowana lampka oświetla stanowisko.

Skaner ma certyfikat FIPS 140-3 i 5 lat gwarancji.

## Co jest potrzebne do użycia?

**Wymagane dla wersji „sam skaner” — sprzedawane osobno**

- [Przewód USB Zebra 2,1 m (CBA-U21-S07ZBR)](/produkt/zebra-kabel-usb-ds22)

Dokup tylko te elementy, których jeszcze nie masz.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-dla-sluzby-zdrowia', 'skanery-przewodowe'],
  manufacturerId: 'zebra',
  priceFrom: 1019.36,
  images: [
    '/images/products/DS8208-HC4000BVZWW.png',
    '/images/products/DS8208-HC4000BVZWW-2.png',
    '/images/products/DS8208-HC4000BVZWW-3.png',
    '/images/products/DS8208-HC4000BVZWW-4.png',
  ],
  imageDescriptions: [
    'Zebra DS8208-HC — przewodowy skaner 2D w kolorze Healthcare White, widok pod kątem z prawej strony z niebieską ramką okna',
    'Zebra DS8208-HC — widok z przodu na okno odczytu z czujnikiem 2 MP',
    'Zebra DS8208-HC — widok od tyłu z prawej strony, przycisk wielofunkcyjny na górze obudowy',
    'Zebra DS8208-HC w podstawce gooseneck STND-GS0082C-0B (podstawka sprzedawana osobno)',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ urządzenia', value: 'Przewodowy skaner ręczny 1D/2D (imager) w wersji dla ochrony zdrowia' },
    { name: 'Cechy wersji dla ochrony zdrowia', value: 'Tworzywa przygotowane do dezynfekcji, gładkie powierzchnie bez szczelin; uszczelniony spust indukcyjny; etykiety antymikrobowe; kolor Healthcare White; zielony celownik LED; tryb nocny; lampka stanowiska' },
    { name: 'Czujnik', value: '1600 × 1200 pikseli (2 MP), ogniskowanie o wysokiej gęstości' },
    { name: 'Celownik', value: 'Okrąg, zielona dioda LED 524 nm' },
    { name: 'Oświetlenie', value: 'Dwie diody LED o ciepłej, białej barwie' },
    { name: 'Pole widzenia', value: '48° (poziomo) × 36° (pionowo)' },
    { name: 'Tolerancja ruchu', value: 'Praca ręczna: do 406 cm/s; tryb prezentacyjny: do 102 cm/s (UPC 13 mil, tryb zoptymalizowany)' },
    { name: 'Kody 1D', value: 'Code 39, Code 128, Code 93, Codabar/NW7, Code 11, MSI Plessey, UPC/EAN, I 2 of 5, Korean 3 of 5, GS1 DataBar, Base 32 (Italian Pharma)' },
    { name: 'Kody 2D i inne', value: 'PDF417, Micro PDF417, Composite Codes, TLC-39, Aztec, DataMatrix, MaxiCode, QR Code, Micro QR, Han Xin, Postal Codes, SecurPharm; OCR-A, OCR-B, MICR; GS1 Digital Link; kody Digimarc' },
    { name: 'Najmniejszy element kodu', value: 'Code 39 i Code 128: 3 mil; DataMatrix i QR Code: 5 mil' },
    { name: 'Typowy zasięg odczytu', value: 'UPC 13 mil (100%): 0,8–56,4 cm; DataMatrix 10 mil: 1,3–28,7 cm; QR 10 mil: 1,0–29,2 cm; Code 39 20 mil: 2,0–80,0 cm' },
    { name: 'Obrazy', value: 'Eksport w formatach Bitmap, JPEG i TIFF; 140 PPI dla dokumentu 27,9 × 21,6 cm z odległości 30 cm' },
    { name: 'Funkcje dla ochrony zdrowia', value: 'UDI Scan+, Blood Bag Parse+, Intelligent Document Capture, przycisk wielofunkcyjny' },
    { name: 'Interfejsy', value: 'USB, RS-232' },
    { name: 'Sygnalizacja odczytu', value: 'Direct Decode Indicator, diody LED dobrego odczytu, diody widoczne z tyłu, głośnik z regulacją tonu i głośności, wibracja, dotykowy przycisk wielofunkcyjny z wibracją' },
    { name: 'Bezpieczeństwo', value: 'Certyfikat FIPS 140-3' },
    { name: 'Wymiary (wys. × szer. × gł.)', value: '16,5 × 6,9 × 10,5 cm' },
    { name: 'Waga', value: '185,5 g' },
    { name: 'Zasilanie', value: '4,8–5,5 V DC z hosta' },
    { name: 'Temperatura pracy / przechowywania', value: '0–50 °C / −40–70 °C' },
    { name: 'Odporność', value: '54 upadki z 1,8 m na beton; MIL-STD-810H, 2,4 m na sklejkę na betonie; 2000 cykli w bębnie 0,5 m; IP52' },
    { name: 'Normy', value: 'Bezpieczeństwo elektryczne: EN 62368-1, IEC 62368-1, UL 62368-1; LED: IEC 62471, EN 62471; kompatybilność elektromagnetyczna: EN 55032, EN 55035, EN 61000-3-2, EN 61000-3-3, EN 61000-6-2, EN 60601-1-2; środowisko: EN IEC 63000:2018' },
    { name: 'Zawartość zależnie od PN', value: 'DS8208-HCBU2104ZVW: skaner i przewód USB; DS8208-HC4000BVZWW: sam skaner' },
    { name: 'Gwarancja', value: '5 lat' },
  ],
  applications: [
    'Identyfikacja pacjenta (PPID)',
    'Podawanie leków',
    'Apteka szpitalna: przyjęcie leków i inwentaryzacja',
    'Laboratorium: śledzenie próbek',
    'Ewidencja substancji kontrolowanych',
    'Blok operacyjny: narzędzia i implanty',
    'Izba przyjęć i rejestracja pacjentów',
  ],
  variants: [
    {
      partNumber: 'DS8208-HCBU2104ZVW',
      name: 'Zestaw z przewodem USB',
      attributes: { 'W zestawie': 'Przewód USB' },
      priceFrom: 1080.9,
      availability: 'available',
    },
    {
      partNumber: 'DS8208-HC4000BVZWW',
      name: 'Sam skaner, przewód osobno',
      attributes: {},
      priceFrom: 1019.36,
      availability: 'available',
    },
  ],
  variantAttributeTooltips: {
    'W zestawie': 'Dodatkowy element w opakowaniu DS8208-HC.\n\nPrzewód USB — prosty przewód USB-A do komputera, z którego skaner jest zasilany.\n\nGdy kolumna jest pusta, kupuje się sam skaner, a przewód USB lub RS-232 osobno.',
  },
  compatibleAccessories: [],
  relatedAccessories: ['zebra-hc-stnd-gs0082c-0b', 'zebra-hc-stnd-ws0082c-0b', 'zebra-hc-cup-gs0082c-0b', 'zebra-cable-usb-ds22'],
  faq: [
    {
      question: 'Czym Zebra DS8208-HC różni się od DS8208?',
      answer: 'DS8208-HC dodaje do platformy DS82 tworzywa Healthcare White odporne na częstą dezynfekcję, uszczelniony spust indukcyjny, etykiety antymikrobowe, zielony celownik LED, tryb nocny i lampkę stanowiska. Ma też funkcje UDI Scan+ i Blood Bag Parse+. Model do handlu to [Zebra DS8208](/produkt/zebra-ds8208).',
    },
    {
      question: 'Jakie środki są dopuszczone do czyszczenia DS8208-HC?',
      answer: 'Dla serii DS82-HC, DS8100-HC i CS60-HC Zebra dopuszcza 37 środków: ' + listaDs82Cs60 + '. Gwiazdką oznaczono środki, których nie stosuje się na stacjach. Podanych stężeń nie wolno przekraczać.',
    },
    {
      question: 'Czy DS8208-HC zastępuje DS8108-HC?',
      answer: 'Tak. Zebra wskazuje DS8208-HC jako następcę przewodowego DS8108-HC. Nowy model ma czujnik 2 MP, uszczelniony spust indukcyjny, etykiety antymikrobowe i przycisk wielofunkcyjny. Bezprzewodowym następcą DS8178-HC jest [Zebra DS8288-HC](/produkt/zebra-ds8288-hc).',
    },
    {
      question: 'Co oznaczają UDI Scan+ i Blood Bag Parse+?',
      answer: 'UDI Scan+ automatycznie rozdziela pola identyfikatora UDI z opakowań wyrobów medycznych i wysyła je do właściwych pól aplikacji. Blood Bag Parse+ odczytuje jednym naciśnięciem spustu dane z worka z krwią, m.in. grupę krwi, dane donacji i datę ważności, i układa kody w prawidłowej kolejności.',
    },
    {
      question: 'Który wariant DS8208-HC wybrać i jakie podstawki pasują?',
      answer: 'DS8208-HCBU2104ZVW zawiera przewód USB, a DS8208-HC4000BVZWW to sam skaner. Do pracy prezentacyjnej Zebra oferuje w kolorze HC White [podstawkę gooseneck STND-GS0082C-0B](/produkt/zebra-hc-stnd-gs0082c-0b), jej obciążoną wersję [STND-WS0082C-0B](/produkt/zebra-hc-stnd-ws0082c-0b) i [kubek CUP-GS0082C-0B](/produkt/zebra-hc-cup-gs0082c-0b).',
    },
    {
      question: 'Jaka gwarancja obejmuje DS8208-HC?',
      answer: 'Gwarancja na przewodowy DS8208-HC trwa pięć lat od wysyłki. Kontrakt serwisowy Zebra OneCare można dokupić osobno.',
    },
    {
      question: 'Jakie są alternatywy dla DS8208-HC?',
      answer: 'Bezprzewodowa wersja tej serii z ładowaniem indukcyjnym to [Zebra DS8288-HC](/produkt/zebra-ds8288-hc). Z matrycą megapikselową i ogniskowaniem HD pracuje [Zebra DS4608-HC](/produkt/zebra-ds4608-hc). Z innych marek warto porównać [Datalogic Gryphon GD4690-HC](/produkt/datalogic-gryphon-gd4690-hc) i [Newland HR23 Dorada AI White](/produkt/newland-hr23-dorada-ai-white).',
    },
  ],
  downloads: [
    przewodnikDezynfekcji,
    { name: 'Przewodnik akcesoriów Zebra DS82-HC (EN)', type: 'pdf', url: '/downloads/zebra-ds82-hc-akcesoria-en.pdf', size: '398 KB' },
    { name: 'Instrukcja obsługi DS8208 (PL)', type: 'manual', url: 'https://www.serwis-zebry.pl/instrukcje/zebra-ds8208/instrukcja-po-polsku', size: 'Online' },
  ],
  relatedProducts: ['zebra-ds4608-hc', 'zebra-ds2208-hc', 'honeywell-xenon-ultra-1960h', 'datalogic-gryphon-gd4690-hc', 'datalogic-gryphon-gd4620-hc', 'newland-hr33-marlin-ai-white', 'newland-hr23-dorada-ai-white'],
  createdAt: '2026-10-25',
  sameAs: 'https://www.zebra.com/pl/pl/products/scanners/general-purpose-handheld-scanners/ds82-series/ds8208-hc.html',
}

const ds8288Hc: Product = {
  id: 'zebra-ds8288-hc',
  slug: 'zebra-ds8288-hc',
  name: 'Zebra DS8288-HC',
  shortDescription: 'Zebra DS8288-HC — bezprzewodowy skaner szpitalny 2 MP z ładowaniem indukcyjnym: bateria 3500 mAh lub PowerCap, Bluetooth 5.2, następca DS8178-HC.',
  seoTitle: 'Zebra DS8288-HC — bezprzewodowy skaner 2D dla służby zdrowia',
  seoDescription: 'Bezprzewodowy skaner kodów Zebra DS8288-HC do szpitali: czujnik 2 MP, ładowanie indukcyjne bez styków, bateria PowerPrecision+ 3500 mAh lub PowerCap, Bluetooth 5.2, Virtual Tether. Skaner Bluetooth Zebra DS8288-HC, DS8288-HC Zebra. PN: DS8288-HCBU210MPAW, DS8288-HCBU210MSAW, DS8288-HCMF00BVMWW, DS8288-HCPF00BVMWW, DS8288-HCBU210PPAW, DS8288-HCBU210PSAW.',
  description: `Zebra DS8288-HC to bezprzewodowy model z rodziny DS82-HC, który zastępuje DS8178-HC. Ładuje się indukcyjnie, bez odsłoniętych metalowych styków, więc skaner i stację łatwiej zdezynfekować. Obudowę w kolorze Healthcare White wyposażono w uszczelniony spust indukcyjny i etykiety antymikrobowe.

Źródło zasilania można wymienić. Bateria PowerPrecision+ 3500 mAh wystarcza na 100 000 odczytów z jednego ładowania. Superkondensator PowerCap starcza na 6000 odczytów i po 35 sekundach ładowania jest gotowy do 100 skanów. Sprawdza się tam, gdzie skaner między odczytami wraca do stacji. Wskaźnik zasilania pokazuje stan naładowania na początku zmiany.

Skaner łączy się przez Bluetooth 5.2 w klasie 1 (do 100 m) lub 2 (do 10 m). Virtual Tether ostrzega, gdy skaner wyjdzie poza zasięg albo zostanie poza stacją, np. w pościeli pacjenta. Tryb nocny wycisza te alarmy. Beaconing Bluetooth pozwala odnaleźć urządzenie w istniejącym systemie lokalizacji.

Do wyboru są dwie stacje zasilane z USB: prezentacyjna na wózek z komputerem oraz standardowa na biurko, ścianę lub ramię, z magnesem przytrzymującym skaner. Czujnik 2 MP, UDI Scan+ i Blood Bag Parse+ działają tak jak w przewodowym DS8208-HC. Skaner i stacja mają 3 lata gwarancji.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-dla-sluzby-zdrowia', 'skanery-bezprzewodowe'],
  manufacturerId: 'zebra',
  priceFrom: 1795,
  images: [
    '/images/products/DS8288-HCBU210MPAW.png',
    '/images/products/DS8288-HCBU210MPAW-2.png',
    '/images/products/DS8288-HCBU210MPAW-3.png',
    '/images/products/DS8288-HCBU210MPAW-4.png',
    '/images/products/DS8288-HCBU210MPAW-5.png',
  ],
  imageDescriptions: [
    'Zebra DS8288-HC — bezprzewodowy skaner 2D w kolorze Healthcare White, widok pod kątem z prawej strony',
    'Zebra DS8288-HC — widok pod kątem z lewej strony na okno odczytu z niebieską ramką',
    'Zebra DS8288-HC — widok od tyłu, przycisk wielofunkcyjny i wskaźnik zasilania na górze obudowy',
    'Zebra DS8288-HC w stacji prezentacyjnej CR8288 z ładowaniem indukcyjnym, widok z przodu',
    'Zebra DS8288-HC w stacji standardowej CR8288 do montażu na biurku lub ścianie',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ urządzenia', value: 'Bezprzewodowy skaner ręczny 1D/2D (imager) w wersji dla ochrony zdrowia' },
    { name: 'Cechy wersji dla ochrony zdrowia', value: 'Tworzywa przygotowane do dezynfekcji, gładkie powierzchnie bez szczelin; uszczelniony spust indukcyjny; etykiety antymikrobowe; ładowanie bez odsłoniętych styków; kolor Healthcare White; zielony celownik LED; tryb nocny; lampka stanowiska' },
    { name: 'Łączność', value: 'Bluetooth 5.2 z BLE: klasa 1 (do 100 m) i klasa 2 (do 10 m), profile Serial Port i HID; beaconing Bluetooth' },
    { name: 'Czujnik', value: '1600 × 1200 pikseli (2 MP), ogniskowanie o wysokiej gęstości' },
    { name: 'Celownik / oświetlenie', value: 'Okrąg, zielona dioda LED 524 nm / dwie diody LED o ciepłej, białej barwie' },
    { name: 'Pole widzenia', value: '48° (poziomo) × 36° (pionowo)' },
    { name: 'Kody 2D i inne', value: 'PDF417, Micro PDF417, Composite Codes, TLC-39, Aztec, DataMatrix, MaxiCode, QR Code, Micro QR, Han Xin, Postal Codes, SecurPharm; OCR-A, OCR-B, MICR; GS1 Digital Link; kody Digimarc' },
    { name: 'Typowy zasięg odczytu', value: 'UPC 13 mil (100%): 0,8–56,4 cm; DataMatrix 20 mil: 0–44,4 cm; QR 20 mil: 0–40,1 cm; Code 128 15 mil: 8,6–61,7 cm' },
    { name: 'Bateria PowerPrecision+', value: 'Li-Ion 3500 mAh; 100 000 odczytów przy 60 skanach na minutę lub 65 000 przy 10 skanach na minutę; 108 h pracy; pełne ładowanie: 13 h ze standardowego USB, 3,5 h z zewnętrznego 5 V lub USB-C' },
    { name: 'PowerCap', value: 'Superkondensator 1000 F; 6000 odczytów przy 60 skanach na minutę lub 4000 przy 10 skanach na minutę; 6,7 h pracy; pełne ładowanie: 60 min ze standardowego USB, 13–15 min z USB BC1.2, zewnętrznego zasilania lub USB-C' },
    { name: 'Stacje', value: 'Standardowa (biurko, ściana, ramię): 7,3 × 7,6 × 21,1 cm, 255,3 g; prezentacyjna: 7,7 × 9,4 × 12,5 cm, 226,3 g; zasilanie 4,7–5,5 V DC z hosta lub 10,8–13,2 V DC z zewnętrznego zasilacza' },
    { name: 'Interfejsy', value: 'USB, RS-232' },
    { name: 'Bezpieczeństwo', value: 'Certyfikat FIPS 140-3' },
    { name: 'Wymiary skanera (wys. × szer. × gł.)', value: '17,6 × 6,9 × 11,1 cm' },
    { name: 'Waga skanera', value: '272,5 g z baterią; 248,3 g z PowerCap' },
    { name: 'Temperatura pracy / przechowywania', value: '0–50 °C / −40–70 °C' },
    { name: 'Odporność', value: '54 upadki z 1,8 m na beton; MIL-STD-810H, 2,4 m na sklejkę na betonie; 2000 cykli w bębnie 0,5 m; IP52' },
    { name: 'Normy', value: 'Bezpieczeństwo elektryczne: EN 62368-1, IEC 62368-1, UL 62368-1; kompatybilność elektromagnetyczna: EN 55032, EN 55035, EN 60601-1-2; radio: EN 300 328, EN 303 417, EN 301 489-1, EN 301 489-17' },
    { name: 'Zawartość zależnie od PN', value: 'DS8288-HCBU210…: skaner, źródło zasilania, stacja i przewód USB; DS8288-HCMF00BVMWW i DS8288-HCPF00BVMWW: sam skaner z baterią lub PowerCap' },
    { name: 'Gwarancja', value: 'Skaner DS8288-HC i stacja CR8288-HC: 3 lata' },
  ],
  applications: [
    'Identyfikacja pacjenta (PPID) przy łóżku',
    'Podawanie leków z wózka z komputerem',
    'Apteka szpitalna i laboratorium',
    'Rejestracja pacjentów',
    'Ewidencja substancji kontrolowanych',
    'Inwentaryzacja materiałów medycznych',
  ],
  variants: [
    {
      partNumber: 'DS8288-HCBU210MPAW',
      name: 'Bateria, stacja prezentacyjna, przewód USB',
      attributes: { 'Zasilanie': 'Bateria 3500 mAh', 'Stacja': 'Prezentacyjna' },
      priceFrom: 2477.02,
      availability: 'available',
    },
    {
      partNumber: 'DS8288-HCBU210MSAW',
      name: 'Bateria, stacja standardowa, przewód USB',
      attributes: { 'Zasilanie': 'Bateria 3500 mAh', 'Stacja': 'Standardowa' },
      priceFrom: 2477.02,
      availability: 'available',
    },
    {
      partNumber: 'DS8288-HCMF00BVMWW',
      name: 'Sam skaner z baterią',
      attributes: { 'Zasilanie': 'Bateria 3500 mAh' },
      priceFrom: 1795,
      availability: 'on-order',
    },
    {
      partNumber: 'DS8288-HCPF00BVMWW',
      name: 'Sam skaner z PowerCap',
      attributes: { 'Zasilanie': 'PowerCap' },
      priceFrom: 1857.33,
      availability: 'unavailable',
    },
    {
      partNumber: 'DS8288-HCBU210PPAW',
      name: 'PowerCap, stacja prezentacyjna, przewód USB',
      attributes: { 'Zasilanie': 'PowerCap', 'Stacja': 'Prezentacyjna' },
      priceFrom: 2539.35,
      availability: 'available',
    },
    {
      partNumber: 'DS8288-HCBU210PSAW',
      name: 'PowerCap, stacja standardowa, przewód USB',
      attributes: { 'Zasilanie': 'PowerCap', 'Stacja': 'Standardowa' },
      priceFrom: 2539.35,
      availability: 'unavailable',
    },
  ],
  variantAttributeTooltips: {
    'Zasilanie': 'Źródło zasilania włożone do skanera; oba można później wymienić.\n\nBateria 3500 mAh — PowerPrecision+, do 100 000 odczytów z ładowania i analiza stanu baterii.\n\nPowerCap — superkondensator bez baterii do wymiany, 6000 odczytów; po 35 s ładowania gotowy do 100 skanów.',
    'Stacja': 'Stacja CR8288 w kolorze Healthcare White z ładowaniem indukcyjnym, dołączona do zestawu.\n\nPrezentacyjna — trzyma skaner pionowo i przełącza go w tryb prezentacyjny; mieści się na wózku z komputerem.\n\nStandardowa — trzyma skaner pionowo lub poziomo, do montażu na biurku, ścianie lub ramieniu.',
  },
  compatibleAccessories: [],
  relatedAccessories: ['zebra-hc-cr8288-pc100fbww', 'zebra-hc-cr8288-sc100fbww', 'zebra-battery-ds8288', 'zebra-hc-supr-ds82eab0e-00', 'zebra-cable-usb-ds22'],
  faq: [
    {
      question: 'Czym Zebra DS8288-HC różni się od DS8288?',
      answer: 'Bezprzewodowa wersja HC jest wykonana z tworzyw Healthcare White przeznaczonych do częstego odkażania. Spust indukcyjny jest w niej uszczelniony, etykiety są antymikrobowe, a celownik ma zieloną diodę LED; jest też tryb nocny. Stacje CR8288 w wersji HC mają ten sam kolor. Standardowy model to [Zebra DS8288](/produkt/zebra-ds8288).',
    },
    {
      question: 'Którymi środkami można dezynfekować DS8288-HC i stacje?',
      answer: 'Zebra dopuszcza dla skanerów DS82-HC, DS8100-HC i CS60-HC następujące środki: ' + listaDs82Cs60 + '. Środków oznaczonych gwiazdką nie stosuje się na stacjach. Skaner i stacja przed użyciem muszą wyschnąć.',
    },
    {
      question: 'Bateria czy PowerCap?',
      answer: 'Bateria PowerPrecision+ 3500 mAh jest przeznaczona do pracy z dala od stacji przez całą zmianę i dłużej: wystarcza na 100 000 odczytów. PowerCap nie wymaga wymiany baterii, ale starcza na 6000 odczytów i jest przeznaczony do pracy, w której skaner wraca do stacji między odczytami. Oba źródła są wymienne. Zapasowe to [bateria BTRY-DS82EAB0E-00](/produkt/zebra-akumulator-ds8288) i [PowerCap SUPR-DS82EAB0E-00](/produkt/zebra-hc-supr-ds82eab0e-00).',
    },
    {
      question: 'Czy DS8288-HC zastępuje DS8178-HC?',
      answer: 'Tak. Zebra wskazuje DS8288-HC jako następcę bezprzewodowego DS8178-HC. Przewodowym następcą DS8108-HC jest [Zebra DS8208-HC](/produkt/zebra-ds8208-hc). Akcesoria DS8178-HC, m.in. stacje CR8178, mają inne numery katalogowe niż stacje CR8288.',
    },
    {
      question: 'Która stacja pasuje do DS8288-HC?',
      answer: '[Stacja prezentacyjna CR8288-PC100FBWW](/produkt/zebra-hc-cr8288-pc100fbww) trzyma skaner pionowo i włącza tryb prezentacyjny. [Stacja standardowa CR8288-SC100FBWW](/produkt/zebra-hc-cr8288-sc100fbww) trzyma skaner pionowo lub poziomo i można ją zamocować na ścianie, ramieniu lub wózku. Obie ładują indukcyjnie, mają certyfikat FIPS i są w kolorze Healthcare White.',
    },
    {
      question: 'Jaką gwarancję ma DS8288-HC?',
      answer: 'DS8288-HC i stacja CR8288-HC mają trzyletnią gwarancję od daty wysyłki. Dla baterii PowerPrecision+ Zebra oferuje dodatkowe usługi Battery Maintenance, a dla skanerów kontrakty Zebra OneCare.',
    },
    {
      question: 'Jakie są alternatywy dla DS8288-HC?',
      answer: 'Tańszy skaner Bluetooth tej klasy to [Zebra DS2278-HC](/produkt/zebra-ds2278-hc), a kompaktowy skaner do kieszeni — [Zebra CS60-HC](/produkt/zebra-cs60-hc). Bezprzewodowe odpowiedniki innych producentów to m.in. [Honeywell Xenon Ultra 1962h](/produkt/honeywell-xenon-ultra-1962h), [Datalogic Gryphon GM4600-HC](/produkt/datalogic-gryphon-gm4600-hc) i [Socket Mobile DuraScan D765](/produkt/socket-mobile-durascan-d765).',
    },
  ],
  downloads: [
    przewodnikDezynfekcji,
    { name: 'Przewodnik akcesoriów Zebra DS82-HC (EN)', type: 'pdf', url: '/downloads/zebra-ds82-hc-akcesoria-en.pdf', size: '398 KB' },
    { name: 'Instrukcja obsługi DS8288 (PL)', type: 'manual', url: 'https://www.serwis-zebry.pl/instrukcje/zebra-ds8288/instrukcja-po-polsku', size: 'Online' },
  ],
  relatedProducts: ['zebra-ds2278-hc', 'zebra-cs60-hc', 'honeywell-xenon-ultra-1962h', 'datalogic-gryphon-gbt4600-hc', 'datalogic-gryphon-gm4600-hc', 'newland-hr33-marlin-ai-bt-white', 'newland-hr23-dorada-ai-bt-white', 'socket-mobile-durascan-d745', 'socket-mobile-durascan-d765'],
  createdAt: '2026-10-25',
  sameAs: 'https://www.zebra.com/pl/pl/products/scanners/general-purpose-handheld-scanners/ds82-series/ds8288-hc.html',
}

const cs60Hc: Product = {
  id: 'zebra-cs60-hc',
  slug: 'zebra-cs60-hc',
  name: 'Zebra CS60-HC',
  shortDescription: 'Zebra CS60-HC — kompaktowy skaner 2D dla służby zdrowia, przełączany między pracą bezprzewodową i przewodową: IP65, ładowanie Qi, NFC, Bluetooth 5.0, bateria na 18 godzin.',
  seoTitle: 'Zebra CS60-HC — kompaktowy skaner 2D dla służby zdrowia',
  seoDescription: 'Kompaktowy skaner kodów Zebra CS60-HC (CS6080-HC) dla szpitali: praca bezprzewodowa lub przewodowa, IP65, ładowanie bezstykowe Qi, Bluetooth 5.0, NFC, celownik LED, stacja prezentacyjna. Skaner kieszonkowy Zebra CS60-HC, CS6080-HC Zebra. PN: CS6080-HCB00004P1W, CS6080-HC4F00BVZWW.',
  description: `Zebra CS60-HC (CS6080-HC) to kompaktowy skaner towarzyszący dla ochrony zdrowia, który można przełączać między pracą bezprzewodową i przewodową oraz ręczną i prezentacyjną. W wersji bezprzewodowej mieści się w kieszeni odzieży medycznej. Po zamianie baterii na konwerter z przewodem USB działa jako skaner przewodowy, np. w aptece lub laboratorium.

Specjalne tworzywa i szczelność IP65 pozwalają przecierać skaner szeroką gamą środków dezynfekujących. Obudowa jednoczęściowa (monocoque), dotykowe przyciski indukcyjne i ładowanie bezstykowe ograniczają liczbę szczelin. Gdy w skanerze jest bateria, ładuje się w stacji Zebra albo na dowolnej ładowarce Qi.

Matryca 1280 × 960 z PRZM Intelligent Imaging czyta kody z opasek pacjentów, fiolek, worków z płynami infuzyjnymi i tacek z próbkami. Celownik z zieloną diodą LED pozwala używać skanera także na porodówce i na oddziale noworodków, gdzie unika się celowników laserowych. Drugi programowalny przycisk przełącza wysyłanie danych między dwiema aplikacjami.

Bateria 745 mAh wystarcza na 18 godzin pracy. Skaner paruje się przez NFC i łączy przez Bluetooth 5.0 (klasa 1, do 100 m). Ustawienia są zapisane w stacji (AutoConfig), a przycisk w stacji pomaga odnaleźć zgubiony skaner. Gwarancja na skaner i stację wynosi 3 lata.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-dla-sluzby-zdrowia', 'skanery-bezprzewodowe'],
  manufacturerId: 'zebra',
  priceFrom: 1640.66,
  images: [
    '/images/products/CS6080-HCB00004P1W.png',
    '/images/products/CS6080-HCB00004P1W-2.png',
    '/images/products/CS6080-HCB00004P1W-3.png',
    '/images/products/CS6080-HCB00004P1W-4.png',
    '/images/products/CS6080-HCB00004P1W-5.png',
  ],
  imageDescriptions: [
    'Zebra CS60-HC w stacji prezentacyjnej CR6080 w kolorze Healthcare White, widok z boku',
    'Zebra CS60-HC — kompaktowy skaner w kolorze Healthcare White, widok z przodu na dotykowe przyciski',
    'Zebra CS60-HC leżący na boku, okno odczytu z niebieską ramką',
    'Zebra CS60-HC w wersji bezprzewodowej i przewodowej z konwerterem USB (konwerter sprzedawany osobno)',
    'Zebra CS60-HC w stacji prezentacyjnej, widok z przodu na okno odczytu',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ urządzenia', value: 'Kompaktowy skaner 1D/2D (imager) dla ochrony zdrowia, bezprzewodowy lub przewodowy po zamianie baterii na konwerter USB' },
    { name: 'Cechy wersji dla ochrony zdrowia', value: 'Specjalne tworzywa przygotowane do dezynfekcji; IP65; obudowa jednoczęściowa (monocoque); dotykowe przyciski indukcyjne; ładowanie bezstykowe; kolor Healthcare White; zielony celownik LED; tryb nocny z wibracją; lampka stanowiska' },
    { name: 'Łączność', value: 'Bluetooth 5.0 z BLE: klasa 1 (do 100 m) i klasa 2 (do 10 m), profile Serial Port i HID; NFC (Tap-to-Pair); tryb Wi-Fi Friendly' },
    { name: 'Matryca', value: '1280 × 960 pikseli' },
    { name: 'Celownik / oświetlenie', value: 'Okrąg, zielona dioda LED 525 nm / jedna dioda LED o ciepłej, białej barwie' },
    { name: 'Pole widzenia', value: '45° (poziomo) × 34° (pionowo)' },
    { name: 'Kody 1D', value: 'Base 32 (Italian Pharma), Codabar/NW7, Code 11, Code 39, Code 93, Code 128, GS1 DataBar, I 2 of 5, Korean 3 of 5, MSI Plessey, UPC/EAN' },
    { name: 'Kody 2D i inne', value: 'Aztec, Composite Codes, DataMatrix, Dotted DataMatrix, Dotcode, Han Xin, MaxiCode, PDF417, Micro PDF417, Postal Codes, QR Code, Micro QR, TLC-39, SecurPharm; OCR-A, OCR-B, MICR' },
    { name: 'Typowy zasięg odczytu', value: 'UPC 13 mil (100%): 4,6–49,5 cm; DataMatrix 10 mil: 7,4–20,3 cm; QR 20 mil: 3,0–35,6 cm; Code 39 20 mil: 6,4–66,0 cm' },
    { name: 'Bateria', value: 'Litowo-polimerowa 745 mAh; 13 000 odczytów; 18 h pracy; pełne ładowanie: 8 h ze standardowego USB, 6 h z USB BC1.2' },
    { name: 'Ładowanie', value: 'Indukcyjne w stacji Zebra lub na ładowarce Qi (z baterią w skanerze); zapasowe baterie ładuje się w ładowarkach ze stykami' },
    { name: 'Interfejs', value: 'USB (certyfikat USB)' },
    { name: 'Sygnalizacja odczytu', value: 'Direct Decode Indicator, dioda LED dobrego odczytu, sygnał dźwiękowy z regulacją tonu i głośności, wibracja, wskaźnik baterii, dioda Bluetooth' },
    { name: 'Bezpieczeństwo', value: 'Certyfikat FIPS 140-3' },
    { name: 'Wymiary skanera (wys. × szer. × gł.)', value: '2,3 × 4,6 × 10,9 cm' },
    { name: 'Stacja prezentacyjna', value: '9,0 × 5,3 × 6,1 cm; 96 g; zasilanie 4,5–5,5 V DC z hosta lub zasilacza' },
    { name: 'Waga skanera', value: 'Bezprzewodowy: 87 g; przewodowy: 58 g' },
    { name: 'Temperatura pracy / przechowywania', value: '0–50 °C / −40–70 °C' },
    { name: 'Odporność', value: 'Wielokrotne upadki z 1,8 m na beton; 250 cykli w bębnie 0,5 m; skaner IP65' },
    { name: 'Normy', value: 'Bezpieczeństwo elektryczne: IEC 62368-1, EN 62368-1; LED: IEC 62471, EN 62471; kompatybilność elektromagnetyczna: EN 55032 klasa B, EN 55035, EN 61000-3-2, EN 61000-3-3; RoHS, REACH' },
    { name: 'Zawartość zależnie od PN', value: 'CS6080-HCB00004P1W: skaner, stacja prezentacyjna i przewód USB; CS6080-HC4F00BVZWW: sam skaner bezprzewodowy' },
    { name: 'Gwarancja', value: 'Skaner CS6080-HC i stacja CR6080-HC: 3 lata' },
  ],
  applications: [
    'Identyfikacja pacjenta (PPID)',
    'Podawanie leków',
    'Pobieranie krwi i próbek',
    'Apteka',
    'Dostęp do elektronicznej dokumentacji medycznej',
    'Inwentaryzacja',
  ],
  variants: [
    {
      partNumber: 'CS6080-HCB00004P1W',
      name: 'Zestaw ze stacją prezentacyjną i przewodem USB',
      attributes: { 'W zestawie': 'Stacja prezentacyjna, przewód USB' },
      priceFrom: 2492.01,
      availability: 'available',
    },
    {
      partNumber: 'CS6080-HC4F00BVZWW',
      name: 'Sam skaner bezprzewodowy',
      attributes: {},
      priceFrom: 1640.66,
      availability: 'available',
    },
  ],
  variantAttributeTooltips: {
    'W zestawie': 'Elementy dołączone do CS60-HC w tym zestawie.\n\nStacja prezentacyjna — ładuje skaner indukcyjnie, przełącza go w tryb prezentacyjny i przechowuje ustawienia (AutoConfig).\n\nPrzewód USB — łączy stację z komputerem. Sam skaner paruje się przez Bluetooth lub NFC i ładuje na ładowarce Qi.',
  },
  compatibleAccessories: [],
  relatedAccessories: ['zebra-hc-cr6080-pc100fbww', 'zebra-hc-cbl-cs6-s07-0b', 'zebra-hc-btry-cs60eabhe-0b', 'zebra-hc-cvtr-u70060c-0b', 'zebra-hc-stnd-gs0060c-0b', 'zebra-hc-stnd-ws0060c-0b', 'zebra-hc-cup-gs0060c-0b'],
  faq: [
    {
      question: 'Jak zmienić Zebra CS60-HC w skaner przewodowy?',
      answer: 'Wystarczy wyjąć baterię i włożyć w jej miejsce [konwerter USB CVTR-U70060C-0B](/produkt/zebra-hc-cvtr-u70060c-0b) z przewodem 2,1 m w kolorze HC White. Powrót do pracy bezprzewodowej wymaga ponownego włożenia baterii. Do wersji przewodowej Zebra oferuje [podstawkę gooseneck STND-GS0060C-0B](/produkt/zebra-hc-stnd-gs0060c-0b), jej obciążoną wersję i kubek.',
    },
    {
      question: 'Jakie środki dezynfekcyjne można stosować na CS60-HC?',
      answer: 'Lista Zebry dla CS60-HC jest wspólna ze skanerami DS82-HC i DS8100-HC i liczy 37 pozycji: ' + listaDs82Cs60 + '. Gwiazdka oznacza środki, których nie używa się na stacjach. Środki spoza listy mogą unieważnić gwarancję.',
    },
    {
      question: 'Jak ładuje się CS60-HC?',
      answer: 'Skaner z włożoną baterią ładuje się indukcyjnie w [stacji prezentacyjnej CR6080-PC100FBWW](/produkt/zebra-hc-cr6080-pc100fbww) albo na dowolnej ładowarce Qi. Stacja wymaga [przewodu USB-C/USB-A CBL-CS6-S07-0B](/produkt/zebra-hc-cbl-cs6-s07-0b), sprzedawanego osobno. Zapasowe baterie mają styki i nie ładują się na ładowarce Qi.',
    },
    {
      question: 'Ile pracuje bateria CS60-HC?',
      answer: 'Bateria litowo-polimerowa 745 mAh wystarcza na 18 godzin pracy, czyli dłużej niż najdłuższa zmiana. Wymienia się ją bez narzędzi, a wskaźnik baterii pokazuje, kiedy trzeba ją naładować lub wymienić. Zapasowa bateria do wersji HC to [BTRY-CS60EABHE-0B](/produkt/zebra-hc-btry-cs60eabhe-0b).',
    },
    {
      question: 'Który wariant CS60-HC wybrać?',
      answer: 'CS6080-HCB00004P1W zawiera skaner, stację prezentacyjną i przewód USB, więc nadaje się do stanowiska z komputerem lub wózka. CS6080-HC4F00BVZWW to sam skaner bezprzewodowy do sparowania z urządzeniem mobilnym lub komputerem przez Bluetooth.',
    },
    {
      question: 'Jaka gwarancja obejmuje CS60-HC?',
      answer: 'Okres gwarancji skanera CS6080-HC i stacji CR6080-HC wynosi trzy lata od wysyłki. Ładowarka Qi Zebra CR6080 ma jeden miesiąc gwarancji. Ochronę rozszerzają kontrakty Zebra OneCare.',
    },
    {
      question: 'Jakie są alternatywy dla CS60-HC?',
      answer: 'Klasyczny skaner pistoletowy Bluetooth dla służby zdrowia to [Zebra DS2278-HC](/produkt/zebra-ds2278-hc) albo [Zebra DS8288-HC](/produkt/zebra-ds8288-hc) z czujnikiem 2 MP. Kompaktowe skanery innej marki to [Socket Mobile DuraScan D745](/produkt/socket-mobile-durascan-d745) i [DuraScan D765](/produkt/socket-mobile-durascan-d765).',
    },
  ],
  downloads: [
    przewodnikDezynfekcji,
    { name: 'Przewodnik akcesoriów Zebra CS60 i CS60-HC (EN)', type: 'pdf', url: '/downloads/zebra-cs60-cs60-hc-akcesoria-en.pdf', size: '723 KB' },
    { name: 'Instrukcja obsługi CS6080 (PL)', type: 'manual', url: 'https://www.serwis-zebry.pl/instrukcje/zebra-cs6080/instrukcja-po-polsku', size: 'Online' },
  ],
  relatedProducts: ['zebra-ds2278-hc', 'zebra-ds8288-hc', 'socket-mobile-durascan-d745', 'socket-mobile-durascan-d765', 'honeywell-xenon-ultra-1962h', 'datalogic-gryphon-gbt4600-hc', 'newland-hr23-dorada-ai-bt-white'],
  createdAt: '2026-10-25',
  sameAs: 'https://www.zebra.com/pl/pl/products/scanners/general-purpose-handheld-scanners/cs60/cs60-hc.html',
}

// Akcesoria w kolorze HC White / Healthcare White z ceną w /api/stock (25.10.2026).
// Zdjęcia: strony i przewodniki akcesoriów Zebry; 20- i 21-71043-0BR od dystrybutora (Barcode Factory).
// Bez zdjęcia (logo zastępcze): 22-71043-0BR, STND-WS0060C-0B, CUP-GS0060C-0B, CBL-CS6-S07-0B.

type Akcesorium = Pick<Product, 'id' | 'slug' | 'name' | 'shortDescription' | 'description' | 'subcategoryIds' | 'priceFrom' | 'images' | 'imageDescriptions' | 'availability' | 'specifications' | 'applications' | 'relatedAccessories' | 'downloads'>

const akcesorium = (a: Akcesorium): Product => ({
  ...a,
  categoryId: 'akcesoria',
  manufacturerId: 'zebra',
  tags: ['healthcare'],
  isNew: true,
  isBestseller: false,
  compatibleAccessories: [],
  createdAt: '2026-10-25',
})

const przewodnikDs2200 = { name: 'Przewodnik akcesoriów Zebra DS2200 (EN)', type: 'pdf' as const, url: '/downloads/zebra-ds2200-akcesoria-en.pdf', size: '522 KB' }
const przewodnikDs82 = { name: 'Przewodnik akcesoriów Zebra DS82-HC (EN)', type: 'pdf' as const, url: '/downloads/zebra-ds82-hc-akcesoria-en.pdf', size: '398 KB' }
const przewodnikCs60 = { name: 'Przewodnik akcesoriów Zebra CS60 i CS60-HC (EN)', type: 'pdf' as const, url: '/downloads/zebra-cs60-cs60-hc-akcesoria-en.pdf', size: '723 KB' }

const akcesoriaHc: Product[] = [
  akcesorium({
    id: 'zebra-hc-20-71043-0br',
    slug: 'zebra-hc-20-71043-0br',
    name: 'Podstawka gooseneck Zebra Intellistand, HC White — 20-71043-0BR',
    shortDescription: 'Podstawka Zebra 20-71043-0BR na elastycznym wysięgniku w kolorze HC White do skanerów Zebra DS2208-HC i DS4608-HC — praca w trybie prezentacyjnym.',
    description: `Podstawka Intellistand 20-71043-0BR ma elastyczny wysięgnik (gooseneck) i trzyma skaner ręczny tak, aby kody można było przesuwać przed oknem odczytu. Ma kolor HC White, taki sam jak skanery Zebra w wersji dla ochrony zdrowia. Zebra przeznacza ją do sprzedaży razem z DS2208-HC w regionach EMEA, Ameryki Łacińskiej oraz Azji i Pacyfiku.

Pasuje do skanerów DS2208, DS4308, DS4608 i DS8108, w tym do [Zebra DS2208-HC](/produkt/zebra-ds2208-hc) i [Zebra DS4608-HC](/produkt/zebra-ds4608-hc). Po włożeniu skanera do podstawki włącza się tryb prezentacyjny; wyjęty skaner wraca do pracy ręcznej. Wersja z obciążoną podstawą ma numer [22-71043-0BR](/produkt/zebra-hc-22-71043-0br).`,
    subcategoryIds: ['akcesoria-do-skanerow', 'podstawki-do-skanerow'],
    priceFrom: 158.16,
    images: ['/images/products/20-71043-0BR.png'],
    imageDescriptions: ['Podstawka gooseneck Zebra Intellistand 20-71043-0BR w kolorze HC White z kubkiem na skaner i płaską podstawą'],
    availability: 'available',
    specifications: [
      { name: 'Part Number', value: '20-71043-0BR' },
      { name: 'Typ', value: 'Podstawka Intellistand na elastycznym wysięgniku (bez obciążenia)' },
      { name: 'Kolor', value: 'HC White' },
      { name: 'Kompatybilność', value: 'Zebra DS2208, DS4308, DS4608, DS8108, w tym DS2208-HC i DS4608-HC' },
    ],
    applications: ['Praca prezentacyjna skanera DS2208-HC lub DS4608-HC w aptece, laboratorium i rejestracji'],
    relatedAccessories: ['zebra-ds2208-hc', 'zebra-ds4608-hc', 'zebra-hc-22-71043-0br', 'zebra-hc-21-71043-0br'],
    downloads: [przewodnikDs2200],
  }),
  akcesorium({
    id: 'zebra-hc-22-71043-0br',
    slug: 'zebra-hc-22-71043-0br',
    name: 'Podstawka gooseneck Zebra Intellistand z obciążeniem, HC White — 22-71043-0BR',
    shortDescription: 'Zebra 22-71043-0BR — obciążona podstawka Intellistand HC White na elastycznym wysięgniku; pasuje do DS2208-HC i DS4608-HC.',
    description: `Podstawka Intellistand 22-71043-0BR to wersja podstawki gooseneck z obciążoną podstawą, w kolorze HC White. Trzyma skaner ręczny w pozycji do odczytu prezentacyjnego na blacie apteki, laboratorium lub rejestracji.

Zebra podaje zgodność ze skanerami DS2208, DS4308, DS4608 i DS8108. Obejmuje to wersje [DS2208-HC](/produkt/zebra-ds2208-hc) oraz [DS4608-HC](/produkt/zebra-ds4608-hc). Lżejsza wersja bez obciążenia to [20-71043-0BR](/produkt/zebra-hc-20-71043-0br).`,
    subcategoryIds: ['akcesoria-do-skanerow', 'podstawki-do-skanerow'],
    priceFrom: 196.86,
    images: ['/images/products/placeholder.svg'],
    imageDescriptions: ['Podstawka gooseneck Zebra Intellistand z obciążeniem 22-71043-0BR w kolorze HC White'],
    availability: 'available',
    specifications: [
      { name: 'Part Number', value: '22-71043-0BR' },
      { name: 'Typ', value: 'Podstawka Intellistand na elastycznym wysięgniku, z obciążoną podstawą' },
      { name: 'Kolor', value: 'HC White' },
      { name: 'Kompatybilność', value: 'Zebra DS2208, DS4308, DS4608, DS8108, w tym DS2208-HC i DS4608-HC' },
    ],
    applications: ['Stabilne ustawienie skanera w trybie prezentacyjnym na blacie'],
    relatedAccessories: ['zebra-ds2208-hc', 'zebra-ds4608-hc', 'zebra-hc-20-71043-0br', 'zebra-hc-21-71043-0br'],
    downloads: [przewodnikDs2200],
  }),
  akcesorium({
    id: 'zebra-hc-21-71043-0br',
    slug: 'zebra-hc-21-71043-0br',
    name: 'Kubek do podstawki Zebra Intellistand, HC White — 21-71043-0BR',
    shortDescription: 'Kubek Zebra 21-71043-0BR (HC White) z grupy podstawek Intellistand skanerów Zebra DS2208-HC i DS4608-HC.',
    description: `Kubek 21-71043-0BR to gniazdo na skaner z rodziny podstawek Intellistand 71043, w kolorze HC White. Zebra wymienia go razem z podstawkami gooseneck 20-71043-0BR i 22-71043-0BR.

Kubek pasuje do modeli DS2208, DS4308, DS4608 i DS8108 — z wersji dla ochrony zdrowia do [DS2208-HC](/produkt/zebra-ds2208-hc) oraz [DS4608-HC](/produkt/zebra-ds4608-hc). Czarna wersja kubka ma numer 21-71043-04R.`,
    subcategoryIds: ['akcesoria-do-skanerow', 'podstawki-do-skanerow'],
    priceFrom: 103.24,
    images: ['/images/products/21-71043-0BR.png'],
    imageDescriptions: ['Kubek Zebra 21-71043-0BR w kolorze HC White do podstawek Intellistand'],
    availability: 'unavailable',
    specifications: [
      { name: 'Part Number', value: '21-71043-0BR' },
      { name: 'Typ', value: 'Kubek (gniazdo na skaner) do podstawek Intellistand' },
      { name: 'Kolor', value: 'HC White' },
      { name: 'Kompatybilność', value: 'Zebra DS2208, DS4308, DS4608, DS8108, w tym DS2208-HC i DS4608-HC' },
    ],
    applications: ['Gniazdo na skaner w podstawce Intellistand'],
    relatedAccessories: ['zebra-hc-20-71043-0br', 'zebra-hc-22-71043-0br', 'zebra-ds2208-hc', 'zebra-ds4608-hc'],
    downloads: [przewodnikDs2200],
  }),
  akcesorium({
    id: 'zebra-hc-cr2278-pc1000brw',
    slug: 'zebra-hc-cr2278-pc1000brw',
    name: 'Stacja prezentacyjna Zebra CR2278 do DS2278-HC, Healthcare White — CR2278-PC1000BRW',
    shortDescription: 'Zebra CR2278-PC1000BRW — stacja prezentacyjna Bluetooth (Healthcare White) dla DS2278-HC: ładowanie skanera i tryb prezentacyjny.',
    description: `Stacja CR2278-PC1000BRW ładuje bezprzewodowy skaner [Zebra DS2278-HC](/produkt/zebra-ds2278-hc), komunikuje się z nim przez Bluetooth i przełącza go w tryb prezentacyjny po odłożeniu. Ma kolor Healthcare White. Zebra sprzedaje ją w regionach Ameryki Łacińskiej, EMEA oraz Azji i Pacyfiku.

Stacja ładuje baterię również podczas użytkowania skanera. Energię czerpie z gniazda USB komputera, więc zasilacz nie jest potrzebny, a stację da się postawić na mobilnym stanowisku z komputerem. Z portu standardowego USB stacja ładuje skaner na 14-godzinną zmianę w 4 godziny, a z portu USB BC1.2 w godzinę. Styki ładowania wykonano w technologii Connect+ Contact.

Do czyszczenia stacji nie stosuje się środków z wybielaczem, bo powodują korozję styków.`,
    subcategoryIds: ['akcesoria-do-skanerow', 'stacje-ladowarki-skanerow'],
    priceFrom: 469.94,
    images: ['/images/products/CR2278-PC1000BRW.png'],
    imageDescriptions: ['Stacja prezentacyjna Zebra CR2278-PC1000BRW w kolorze Healthcare White ze skanerem DS2278-HC (skaner sprzedawany osobno)'],
    availability: 'unavailable',
    specifications: [
      { name: 'Part Number', value: 'CR2278-PC1000BRW' },
      { name: 'Typ', value: 'Stacja prezentacyjna z Bluetooth, ładowanie skanera' },
      { name: 'Kolor', value: 'Healthcare White' },
      { name: 'Interfejsy', value: 'USB, RS-232, Keyboard Wedge, TGCS (IBM) 46XX przez RS485' },
      { name: 'Zasilanie', value: '4,5–5,5 V DC z hosta lub z zewnętrznego zasilacza' },
      { name: 'Wymiary (wys. × szer. × gł.)', value: '7,2 × 9,4 × 12,2 cm' },
      { name: 'Waga', value: '151 g' },
      { name: 'Temperatura pracy', value: '0–40 °C' },
      { name: 'Kompatybilność', value: 'Zebra DS2278-HC' },
      { name: 'Gwarancja', value: '36 miesięcy' },
    ],
    applications: ['Ładowanie i praca prezentacyjna skanera DS2278-HC na stanowisku lub wózku z komputerem'],
    relatedAccessories: ['zebra-ds2278-hc', 'zebra-battery-ds2278', 'zebra-cable-usb-ds22'],
    downloads: [przewodnikDs2200, przewodnikDezynfekcji],
  }),
  akcesorium({
    id: 'zebra-hc-stnd-gs0082c-0b',
    slug: 'zebra-hc-stnd-gs0082c-0b',
    name: 'Podstawka gooseneck Zebra do DS8208-HC, HC White — STND-GS0082C-0B',
    shortDescription: 'Podstawka gooseneck Intellistand Zebra STND-GS0082C-0B w kolorze HC White do przewodowego skanera Zebra DS8208-HC.',
    description: `STND-GS0082C-0B to podstawka Intellistand na elastycznym wysięgniku, przeznaczona do przewodowego skanera [Zebra DS8208-HC](/produkt/zebra-ds8208-hc). Kolor HC White pasuje do obudowy skanera.

Podstawka trzyma skaner w pozycji do odczytu prezentacyjnego, np. przy przyjmowaniu leków w aptece szpitalnej lub oznaczaniu próbek w laboratorium. Do pracy ręcznej skaner wyjmuje się z gniazda. Wersja z obciążoną podstawą to [STND-WS0082C-0B](/produkt/zebra-hc-stnd-ws0082c-0b), a sam kubek — [CUP-GS0082C-0B](/produkt/zebra-hc-cup-gs0082c-0b).`,
    subcategoryIds: ['akcesoria-do-skanerow', 'podstawki-do-skanerow'],
    priceFrom: 163.53,
    images: ['/images/products/STND-GS0082C-0B.png'],
    imageDescriptions: ['Podstawka gooseneck Zebra STND-GS0082C-0B w kolorze HC White ze skanerem DS8208-HC (skaner sprzedawany osobno)'],
    availability: 'available',
    specifications: [
      { name: 'Part Number', value: 'STND-GS0082C-0B' },
      { name: 'Typ', value: 'Podstawka Intellistand na elastycznym wysięgniku' },
      { name: 'Kolor', value: 'HC White' },
      { name: 'Kompatybilność', value: 'Zebra DS8208-HC' },
    ],
    applications: ['Praca prezentacyjna skanera DS8208-HC'],
    relatedAccessories: ['zebra-ds8208-hc', 'zebra-hc-stnd-ws0082c-0b', 'zebra-hc-cup-gs0082c-0b'],
    downloads: [przewodnikDs82],
  }),
  akcesorium({
    id: 'zebra-hc-stnd-ws0082c-0b',
    slug: 'zebra-hc-stnd-ws0082c-0b',
    name: 'Podstawka gooseneck Zebra z obciążeniem do DS8208-HC, HC White — STND-WS0082C-0B',
    shortDescription: 'Obciążona podstawka gooseneck Intellistand Zebra STND-WS0082C-0B w kolorze HC White do skanera Zebra DS8208-HC.',
    description: `STND-WS0082C-0B to obciążona wersja podstawki Intellistand na elastycznym wysięgniku do skanera [Zebra DS8208-HC](/produkt/zebra-ds8208-hc), w kolorze HC White. Cięższa podstawa stabilizuje skaner na blacie bez przykręcania.

Skaner odłożony do podstawki pracuje w trybie prezentacyjnym, a wyjęty służy do odczytu ręcznego. Podstawka bez obciążenia ma numer [STND-GS0082C-0B](/produkt/zebra-hc-stnd-gs0082c-0b).`,
    subcategoryIds: ['akcesoria-do-skanerow', 'podstawki-do-skanerow'],
    priceFrom: 204.45,
    images: ['/images/products/STND-WS0082C-0B.png'],
    imageDescriptions: ['Obciążona podstawka gooseneck Zebra STND-WS0082C-0B w kolorze HC White, bez skanera'],
    availability: 'available',
    specifications: [
      { name: 'Part Number', value: 'STND-WS0082C-0B' },
      { name: 'Typ', value: 'Podstawka Intellistand na elastycznym wysięgniku, z obciążoną podstawą' },
      { name: 'Kolor', value: 'HC White' },
      { name: 'Kompatybilność', value: 'Zebra DS8208-HC' },
    ],
    applications: ['Stabilne ustawienie skanera DS8208-HC w trybie prezentacyjnym'],
    relatedAccessories: ['zebra-ds8208-hc', 'zebra-hc-stnd-gs0082c-0b', 'zebra-hc-cup-gs0082c-0b'],
    downloads: [przewodnikDs82],
  }),
  akcesorium({
    id: 'zebra-hc-cup-gs0082c-0b',
    slug: 'zebra-hc-cup-gs0082c-0b',
    name: 'Kubek do podstawki gooseneck Zebra DS8208-HC, HC White — CUP-GS0082C-0B',
    shortDescription: 'Kubek Zebra CUP-GS0082C-0B w kolorze HC White do podstawek gooseneck skanera Zebra DS8208-HC.',
    description: `CUP-GS0082C-0B to kubek, czyli gniazdo na skaner, do podstawek gooseneck modelu [DS8208-HC](/produkt/zebra-ds8208-hc), w kolorze HC White.

Należy do akcesoriów prezentacyjnych DS8208-HC razem z podstawkami [STND-GS0082C-0B](/produkt/zebra-hc-stnd-gs0082c-0b) i [STND-WS0082C-0B](/produkt/zebra-hc-stnd-ws0082c-0b).`,
    subcategoryIds: ['akcesoria-do-skanerow', 'podstawki-do-skanerow'],
    priceFrom: 106.28,
    images: ['/images/products/CUP-GS0082C-0B.png'],
    imageDescriptions: ['Kubek Zebra CUP-GS0082C-0B w kolorze HC White z włożonym skanerem DS8208-HC (skaner sprzedawany osobno)'],
    availability: 'unavailable',
    specifications: [
      { name: 'Part Number', value: 'CUP-GS0082C-0B' },
      { name: 'Typ', value: 'Kubek (gniazdo na skaner) do podstawki gooseneck' },
      { name: 'Kolor', value: 'HC White' },
      { name: 'Kompatybilność', value: 'Zebra DS8208-HC' },
    ],
    applications: ['Gniazdo na skaner DS8208-HC w podstawce gooseneck'],
    relatedAccessories: ['zebra-ds8208-hc', 'zebra-hc-stnd-gs0082c-0b', 'zebra-hc-stnd-ws0082c-0b'],
    downloads: [przewodnikDs82],
  }),
  akcesorium({
    id: 'zebra-hc-cr8288-pc100fbww',
    slug: 'zebra-hc-cr8288-pc100fbww',
    name: 'Stacja prezentacyjna Zebra CR8288 do DS8288-HC, Healthcare White — CR8288-PC100FBWW',
    shortDescription: 'Zebra CR8288-PC100FBWW — stacja prezentacyjna DS8288-HC: skaner stoi pionowo i ładuje się indukcyjnie; Bluetooth, FIPS, Healthcare White.',
    description: `Stacja prezentacyjna CR8288-PC100FBWW trzyma skaner [Zebra DS8288-HC](/produkt/zebra-ds8288-hc) pionowo i ładuje go indukcyjnie, bez odsłoniętych metalowych styków. Jeśli w skanerze włączono odczyt prezentacyjny, stacja przełącza go w ten tryb, a po wyjęciu skaner wraca do odczytu spustem. Ma Bluetooth, certyfikat FIPS i kolor Healthcare White.

Ma wymiary 7,7 × 9,4 × 12,5 cm i mieści się na wózku z komputerem. Zasilanie pobiera z portu USB komputera albo z zewnętrznego zasilacza 10,8–13,2 V DC. Konstrukcja stacji ustawia skaner we właściwej pozycji do ładowania. Środków z wybielaczem nie stosuje się na stacjach.`,
    subcategoryIds: ['akcesoria-do-skanerow', 'stacje-ladowarki-skanerow'],
    priceFrom: 784.59,
    images: ['/images/products/CR8288-PC100FBWW.png'],
    imageDescriptions: ['Stacja prezentacyjna Zebra CR8288-PC100FBWW w kolorze Healthcare White ze skanerem DS8288-HC (skaner sprzedawany osobno)'],
    availability: 'unavailable',
    specifications: [
      { name: 'Part Number', value: 'CR8288-PC100FBWW' },
      { name: 'Typ', value: 'Stacja prezentacyjna, ładowanie indukcyjne, Bluetooth, FIPS' },
      { name: 'Kolor', value: 'Healthcare White' },
      { name: 'Wymiary (wys. × szer. × gł.)', value: '7,7 × 9,4 × 12,5 cm' },
      { name: 'Waga', value: '226,3 g' },
      { name: 'Zasilanie', value: '4,7–5,5 V DC z hosta lub 10,8–13,2 V DC z zewnętrznego zasilacza' },
      { name: 'Kompatybilność', value: 'Zebra DS8288-HC' },
      { name: 'Gwarancja', value: '3 lata' },
    ],
    applications: ['Ładowanie i praca prezentacyjna skanera DS8288-HC na stanowisku lub wózku z komputerem'],
    relatedAccessories: ['zebra-ds8288-hc', 'zebra-hc-cr8288-sc100fbww', 'zebra-battery-ds8288', 'zebra-hc-supr-ds82eab0e-00'],
    downloads: [przewodnikDs82, przewodnikDezynfekcji],
  }),
  akcesorium({
    id: 'zebra-hc-cr8288-sc100fbww',
    slug: 'zebra-hc-cr8288-sc100fbww',
    name: 'Stacja standardowa Zebra CR8288 do DS8288-HC, Healthcare White — CR8288-SC100FBWW',
    shortDescription: 'Zebra CR8288-SC100FBWW — stacja standardowa DS8288-HC na biurko, ścianę lub ramię; indukcja, Bluetooth, FIPS, kolor Healthcare White.',
    description: `Stacja standardowa CR8288-SC100FBWW trzyma skaner [Zebra DS8288-HC](/produkt/zebra-ds8288-hc) pionowo albo poziomo, więc można ją postawić na biurku lub zamocować na ścianie, ramieniu albo wózku. Ładuje skaner indukcyjnie, odbiera od niego dane przez Bluetooth i ma certyfikat FIPS. Kolor: Healthcare White.

Wbudowany magnes przytrzymuje skaner przy montażu pionowym. Stacja ma 7,3 × 7,6 × 21,1 cm i waży 255,3 g. Może być zasilana z USB komputera (4,8–5,5 V) lub z osobnego zasilacza 10,8–13,2 V DC. Do jej czyszczenia nie używa się środków z wybielaczem.`,
    subcategoryIds: ['akcesoria-do-skanerow', 'stacje-ladowarki-skanerow'],
    priceFrom: 784.59,
    images: ['/images/products/CR8288-SC100FBWW.png'],
    imageDescriptions: ['Stacja standardowa Zebra CR8288-SC100FBWW w kolorze Healthcare White ze skanerem DS8288-HC (skaner sprzedawany osobno)'],
    availability: 'unavailable',
    specifications: [
      { name: 'Part Number', value: 'CR8288-SC100FBWW' },
      { name: 'Typ', value: 'Stacja standardowa (biurko, ściana), ładowanie indukcyjne, Bluetooth, FIPS' },
      { name: 'Kolor', value: 'Healthcare White' },
      { name: 'Wymiary (wys. × szer. × gł.)', value: '7,3 × 7,6 × 21,1 cm' },
      { name: 'Waga', value: '255,3 g' },
      { name: 'Zasilanie', value: '4,8–5,5 V DC z hosta lub 10,8–13,2 V DC z zewnętrznego zasilacza' },
      { name: 'Kompatybilność', value: 'Zebra DS8288-HC' },
      { name: 'Gwarancja', value: '3 lata' },
    ],
    applications: ['Ładowanie skanera DS8288-HC na biurku, ścianie, ramieniu lub wózku'],
    relatedAccessories: ['zebra-ds8288-hc', 'zebra-hc-cr8288-pc100fbww', 'zebra-battery-ds8288', 'zebra-hc-supr-ds82eab0e-00'],
    downloads: [przewodnikDs82, przewodnikDezynfekcji],
  }),
  akcesorium({
    id: 'zebra-hc-supr-ds82eab0e-00',
    slug: 'zebra-hc-supr-ds82eab0e-00',
    name: 'Superkondensator PowerCap Zebra do DS8288-HC — SUPR-DS82EAB0E-00',
    shortDescription: 'Superkondensator PowerCap Zebra SUPR-DS82EAB0E-00 do skanera Zebra DS8288-HC: 6000 odczytów z ładowania, gotowy do 100 skanów po 35 sekundach.',
    description: `SUPR-DS82EAB0E-00 to superkondensator PowerCap, który zastępuje baterię w skanerze [Zebra DS8288-HC](/produkt/zebra-ds8288-hc). Nie trzeba go wymieniać jak baterii ani utylizować zużytych ogniw.

Pełne naładowanie wystarcza na 6000 odczytów przy 60 skanach na minutę, a po 35 sekundach ładowania skaner jest gotowy do 100 skanów. PowerCap trzyma ładunek przez kilka godzin, dlatego jest przeznaczony do stanowisk, na których skaner po każdym użyciu odkłada się do stacji. Można go zamienić na [baterię BTRY-DS82EAB0E-00](/produkt/zebra-akumulator-ds8288) w dowolnym momencie.`,
    subcategoryIds: ['akcesoria-do-skanerow', 'baterie-do-skanerow'],
    priceFrom: 354.34,
    images: ['/images/products/SUPR-DS82EAB0E-00.png'],
    imageDescriptions: ['Superkondensator PowerCap Zebra SUPR-DS82EAB0E-00 do skanera DS8288-HC, widok ze stykami'],
    availability: 'available',
    specifications: [
      { name: 'Part Number', value: 'SUPR-DS82EAB0E-00' },
      { name: 'Typ', value: 'Superkondensator PowerCap 1000 F' },
      { name: 'Odczyty z ładowania', value: '6000 przy 60 skanach na minutę; 4000 przy 10 skanach na minutę' },
      { name: 'Czas pracy', value: '6,7 h' },
      { name: 'Ładowanie', value: '60 min ze standardowego USB; 13–15 min z USB BC1.2, zasilania zewnętrznego lub USB-C' },
      { name: 'Kompatybilność', value: 'Zebra DS8288-HC' },
    ],
    applications: ['Zasilanie skanera DS8288-HC, który między odczytami wraca do stacji'],
    relatedAccessories: ['zebra-ds8288-hc', 'zebra-battery-ds8288', 'zebra-hc-cr8288-pc100fbww', 'zebra-hc-cr8288-sc100fbww'],
    downloads: [przewodnikDs82],
  }),
  akcesorium({
    id: 'zebra-hc-cr6080-pc100fbww',
    slug: 'zebra-hc-cr6080-pc100fbww',
    name: 'Stacja prezentacyjna Zebra CR6080 do CS60-HC, Healthcare White — CR6080-PC100FBWW',
    shortDescription: 'Zebra CR6080-PC100FBWW — stacja prezentacyjna CS60-HC do montażu na wózku; ładowanie indukcyjne, Bluetooth, kolor Healthcare White.',
    description: `Stacja CR6080-PC100FBWW ładuje indukcyjnie jeden skaner [Zebra CS60-HC](/produkt/zebra-cs60-hc), przekazuje jego dane przez Bluetooth i umożliwia odczyt prezentacyjny. Jest przeznaczona do montażu na wózku medycznym i ma kolor Healthcare White.

Stacja ma 9,0 × 5,3 × 6,1 cm i waży 96 g, więc zmieści się na zatłoczonym stanowisku. Przechowuje ustawienia skanera (AutoConfig), a przycisk przywoływania pomaga odnaleźć zgubiony skaner. Do połączenia z komputerem potrzebny jest przewód USB-C/USB-A [CBL-CS6-S07-0B](/produkt/zebra-hc-cbl-cs6-s07-0b), sprzedawany osobno.

## Co jest potrzebne do użycia?

**Wymagane — sprzedawane osobno**

- [Przewód USB-C / USB-A Zebra do stacji CS60-HC, 2,1 m (CBL-CS6-S07-0B)](/produkt/zebra-hc-cbl-cs6-s07-0b)

Dokup tylko te elementy, których jeszcze nie masz.`,
    subcategoryIds: ['akcesoria-do-skanerow', 'stacje-ladowarki-skanerow'],
    priceFrom: 953.57,
    images: ['/images/products/CR6080-PC100FBWW.png'],
    imageDescriptions: ['Stacja prezentacyjna Zebra CR6080-PC100FBWW w kolorze Healthcare White, widok z przodu na gniazdo skanera'],
    availability: 'unavailable',
    specifications: [
      { name: 'Part Number', value: 'CR6080-PC100FBWW' },
      { name: 'Typ', value: 'Stacja prezentacyjna do wózka, ładowanie indukcyjne, Bluetooth' },
      { name: 'Kolor', value: 'Healthcare White' },
      { name: 'Wymiary (wys. × szer. × gł.)', value: '9,0 × 5,3 × 6,1 cm' },
      { name: 'Waga', value: '96 g' },
      { name: 'Zasilanie', value: '4,5–5,5 V DC z hosta lub z zewnętrznego zasilacza' },
      { name: 'Przewód do komputera', value: 'CBL-CS6-S07-0B (sprzedawany osobno)' },
      { name: 'Kompatybilność', value: 'Zebra CS60-HC (CS6080-HC)' },
      { name: 'Gwarancja', value: '3 lata' },
    ],
    applications: ['Ładowanie i praca prezentacyjna skanera CS60-HC na wózku lub stanowisku'],
    relatedAccessories: ['zebra-cs60-hc', 'zebra-hc-cbl-cs6-s07-0b', 'zebra-hc-btry-cs60eabhe-0b'],
    downloads: [przewodnikCs60, przewodnikDezynfekcji],
  }),
  akcesorium({
    id: 'zebra-hc-cbl-cs6-s07-0b',
    slug: 'zebra-hc-cbl-cs6-s07-0b',
    name: 'Przewód USB-C / USB-A Zebra do stacji CS60-HC, 2,1 m, HC White — CBL-CS6-S07-0B',
    shortDescription: 'Przewód Zebra CBL-CS6-S07-0B, USB-C do stacji i USB-A do komputera, 2,1 m, prosty, w kolorze HC White — do stacji prezentacyjnej CR6080-PC100FBWW skanera Zebra CS60-HC.',
    description: `CBL-CS6-S07-0B łączy stację prezentacyjną [CR6080-PC100FBWW](/produkt/zebra-hc-cr6080-pc100fbww) skanera [Zebra CS60-HC](/produkt/zebra-cs60-hc) z komputerem. Od strony stacji ma wtyk USB-C, a od strony komputera USB-A. Ma 2,1 m długości, jest prosty (nie spiralny) i ma kolor HC White.

Stacja jest sprzedawana bez przewodu, dlatego przy zakupie samej stacji potrzebny jest ten element.`,
    subcategoryIds: ['akcesoria-do-skanerow', 'kable-do-skanerow'],
    priceFrom: 86.19,
    images: ['/images/products/placeholder.svg'],
    imageDescriptions: ['Przewód USB-C / USB-A Zebra CBL-CS6-S07-0B, 2,1 m, w kolorze HC White'],
    availability: 'available',
    specifications: [
      { name: 'Part Number', value: 'CBL-CS6-S07-0B' },
      { name: 'Typ', value: 'Przewód USB-C (stacja) do USB-A (komputer), prosty' },
      { name: 'Długość', value: '2,1 m (7 ft)' },
      { name: 'Kolor', value: 'HC White' },
      { name: 'Kompatybilność', value: 'Stacja prezentacyjna Zebra CR6080-PC100FBWW (CS60-HC)' },
    ],
    applications: ['Połączenie stacji prezentacyjnej CS60-HC z komputerem'],
    relatedAccessories: ['zebra-hc-cr6080-pc100fbww', 'zebra-cs60-hc'],
    downloads: [przewodnikCs60],
  }),
  akcesorium({
    id: 'zebra-hc-btry-cs60eabhe-0b',
    slug: 'zebra-hc-btry-cs60eabhe-0b',
    name: 'Bateria zapasowa Zebra do CS60-HC — BTRY-CS60EABHE-0B',
    shortDescription: 'Zapasowa bateria litowo-polimerowa Zebra BTRY-CS60EABHE-0B do skanera Zebra CS60-HC (CS6080-HC).',
    description: `BTRY-CS60EABHE-0B to zapasowa bateria litowo-polimerowa do skanera [Zebra CS60-HC](/produkt/zebra-cs60-hc). Zebra przeznacza ją do wersji CS6080-HC; zwykły CS6080-SR ma baterię o innym numerze.

Baterię wymienia się bez narzędzi, co pozwala utrzymać skaner w pracy przez całą dobę. Zapasowa bateria ma styki ładowania, dlatego nie ładuje się na ładowarce Qi; ładowanie indukcyjne działa tylko wtedy, gdy bateria jest w skanerze. Zamiast baterii można włożyć [konwerter USB CVTR-U70060C-0B](/produkt/zebra-hc-cvtr-u70060c-0b) i używać skanera przewodowo.`,
    subcategoryIds: ['akcesoria-do-skanerow', 'baterie-do-skanerow'],
    priceFrom: 344.73,
    images: ['/images/products/BTRY-CS60EABHE-0B.png'],
    imageDescriptions: ['Bateria zapasowa Zebra BTRY-CS60EABHE-0B do skanera CS60-HC, widok na styki i zatrzask'],
    availability: 'available',
    specifications: [
      { name: 'Part Number', value: 'BTRY-CS60EABHE-0B' },
      { name: 'Typ', value: 'Bateria litowo-polimerowa' },
      { name: 'Pojemność', value: '745 mAh według karty katalogowej CS60-HC (przewodnik akcesoriów podaje 735 mAh)' },
      { name: 'Kompatybilność', value: 'Zebra CS60-HC (CS6080-HC)' },
    ],
    applications: ['Zapasowa bateria do całodobowej pracy skanera CS60-HC'],
    relatedAccessories: ['zebra-cs60-hc', 'zebra-hc-cr6080-pc100fbww', 'zebra-hc-cvtr-u70060c-0b'],
    downloads: [przewodnikCs60],
  }),
  akcesorium({
    id: 'zebra-hc-cvtr-u70060c-0b',
    slug: 'zebra-hc-cvtr-u70060c-0b',
    name: 'Konwerter USB Zebra do CS60-HC z przewodem 2,1 m, HC White — CVTR-U70060C-0B',
    shortDescription: 'Konwerter Zebra CVTR-U70060C-0B z przewodem USB-A 2,1 m w kolorze HC White — zamienia bezprzewodowy skaner Zebra CS60-HC w przewodowy.',
    description: `CVTR-U70060C-0B wkłada się do skanera [Zebra CS60-HC](/produkt/zebra-cs60-hc) w miejsce baterii. Skaner działa wtedy jako przewodowy i jest zasilany przez przewód USB-A o długości 2,1 m. Konwerter ma kolor HC White.

Dzięki temu ten sam skaner można przenieść z wózka przy łóżku pacjenta na stanowisko w aptece lub laboratorium. Powrót do pracy bezprzewodowej wymaga włożenia [baterii BTRY-CS60EABHE-0B](/produkt/zebra-hc-btry-cs60eabhe-0b). W wersji przewodowej skaner może stać w [podstawce gooseneck STND-GS0060C-0B](/produkt/zebra-hc-stnd-gs0060c-0b).`,
    subcategoryIds: ['akcesoria-do-skanerow', 'kable-do-skanerow'],
    priceFrom: 206.86,
    images: ['/images/products/CVTR-U70060C-0B.png'],
    imageDescriptions: ['Konwerter USB Zebra CVTR-U70060C-0B w kolorze HC White, końcówka wkładana w miejsce baterii'],
    availability: 'unavailable',
    specifications: [
      { name: 'Part Number', value: 'CVTR-U70060C-0B' },
      { name: 'Typ', value: 'Konwerter na pracę przewodową z przewodem USB-A' },
      { name: 'Długość przewodu', value: '2,1 m (7 ft)' },
      { name: 'Kolor', value: 'HC White' },
      { name: 'Kompatybilność', value: 'Zebra CS60-HC (CS6080-HC)' },
    ],
    applications: ['Przewodowa praca skanera CS60-HC w aptece lub laboratorium'],
    relatedAccessories: ['zebra-cs60-hc', 'zebra-hc-stnd-gs0060c-0b', 'zebra-hc-btry-cs60eabhe-0b'],
    downloads: [przewodnikCs60],
  }),
  akcesorium({
    id: 'zebra-hc-stnd-gs0060c-0b',
    slug: 'zebra-hc-stnd-gs0060c-0b',
    name: 'Podstawka gooseneck Zebra do CS60-HC w wersji przewodowej, HC White — STND-GS0060C-0B',
    shortDescription: 'Zebra STND-GS0060C-0B — podstawka gooseneck Intellistand HC White dla CS60-HC pracującego z konwerterem USB.',
    description: `STND-GS0060C-0B to wysięgnik gooseneck z podstawą (Intellistand) dla [Zebra CS60-HC](/produkt/zebra-cs60-hc) w wersji przewodowej, czyli z [konwerterem USB CVTR-U70060C-0B](/produkt/zebra-hc-cvtr-u70060c-0b). Ma kolor HC White.

W podstawce skaner czyta kody prezentacyjnie, a po wyjęciu ręcznie. Zebra oferuje też wersję z obciążoną podstawą [STND-WS0060C-0B](/produkt/zebra-hc-stnd-ws0060c-0b) i [kubek CUP-GS0060C-0B](/produkt/zebra-hc-cup-gs0060c-0b), który pasuje do obu podstawek.`,
    subcategoryIds: ['akcesoria-do-skanerow', 'podstawki-do-skanerow'],
    priceFrom: 193.04,
    images: ['/images/products/STND-GS0060C-0B.png'],
    imageDescriptions: ['Podstawka gooseneck Zebra STND-GS0060C-0B w kolorze HC White z przewodowym skanerem CS60-HC (skaner i konwerter sprzedawane osobno)'],
    availability: 'unavailable',
    specifications: [
      { name: 'Part Number', value: 'STND-GS0060C-0B' },
      { name: 'Typ', value: 'Podstawka Intellistand na elastycznym wysięgniku (bez obciążenia)' },
      { name: 'Kolor', value: 'HC White' },
      { name: 'Kompatybilność', value: 'Zebra CS60-HC w wersji przewodowej' },
    ],
    applications: ['Praca prezentacyjna przewodowego skanera CS60-HC'],
    relatedAccessories: ['zebra-cs60-hc', 'zebra-hc-cvtr-u70060c-0b', 'zebra-hc-stnd-ws0060c-0b', 'zebra-hc-cup-gs0060c-0b'],
    downloads: [przewodnikCs60],
  }),
  akcesorium({
    id: 'zebra-hc-stnd-ws0060c-0b',
    slug: 'zebra-hc-stnd-ws0060c-0b',
    name: 'Podstawka gooseneck Zebra z obciążeniem do CS60-HC, HC White — STND-WS0060C-0B',
    shortDescription: 'Zebra STND-WS0060C-0B — obciążona podstawka gooseneck HC White dla CS60-HC w wersji przewodowej.',
    description: `STND-WS0060C-0B to wersja podstawki Intellistand z obciążoną podstawą do skanera [Zebra CS60-HC](/produkt/zebra-cs60-hc) pracującego przewodowo. Ma kolor HC White.

Obciążona podstawa pozwala ustawić skaner na blacie bez mocowania. Kubek [CUP-GS0060C-0B](/produkt/zebra-hc-cup-gs0060c-0b) pasuje zarówno do tej podstawki, jak i do wersji bez obciążenia [STND-GS0060C-0B](/produkt/zebra-hc-stnd-gs0060c-0b).`,
    subcategoryIds: ['akcesoria-do-skanerow', 'podstawki-do-skanerow'],
    priceFrom: 237.88,
    images: ['/images/products/placeholder.svg'],
    imageDescriptions: ['Obciążona podstawka gooseneck Zebra STND-WS0060C-0B w kolorze HC White do skanera CS60-HC'],
    availability: 'unavailable',
    specifications: [
      { name: 'Part Number', value: 'STND-WS0060C-0B' },
      { name: 'Typ', value: 'Podstawka Intellistand na elastycznym wysięgniku, z obciążoną podstawą' },
      { name: 'Kolor', value: 'HC White' },
      { name: 'Kompatybilność', value: 'Zebra CS60-HC w wersji przewodowej' },
    ],
    applications: ['Stabilne ustawienie przewodowego skanera CS60-HC na blacie'],
    relatedAccessories: ['zebra-cs60-hc', 'zebra-hc-stnd-gs0060c-0b', 'zebra-hc-cup-gs0060c-0b', 'zebra-hc-cvtr-u70060c-0b'],
    downloads: [przewodnikCs60],
  }),
  akcesorium({
    id: 'zebra-hc-cup-gs0060c-0b',
    slug: 'zebra-hc-cup-gs0060c-0b',
    name: 'Kubek do podstawki gooseneck Zebra CS60-HC, HC White — CUP-GS0060C-0B',
    shortDescription: 'Zebra CUP-GS0060C-0B — kubek HC White na skaner CS60-HC w wersji przewodowej, do podstawek gooseneck.',
    description: `CUP-GS0060C-0B pełni rolę gniazda, w którym stoi przewodowy skaner [Zebra CS60-HC](/produkt/zebra-cs60-hc) na podstawce gooseneck. Kolor: HC White.

Pasuje do podstawki bez obciążenia [STND-GS0060C-0B](/produkt/zebra-hc-stnd-gs0060c-0b) i do wersji z obciążeniem [STND-WS0060C-0B](/produkt/zebra-hc-stnd-ws0060c-0b).`,
    subcategoryIds: ['akcesoria-do-skanerow', 'podstawki-do-skanerow'],
    priceFrom: 51.74,
    images: ['/images/products/placeholder.svg'],
    imageDescriptions: ['Kubek Zebra CUP-GS0060C-0B w kolorze HC White do podstawek gooseneck skanera CS60-HC'],
    availability: 'unavailable',
    specifications: [
      { name: 'Part Number', value: 'CUP-GS0060C-0B' },
      { name: 'Typ', value: 'Kubek (gniazdo na skaner) do podstawki gooseneck' },
      { name: 'Kolor', value: 'HC White' },
      { name: 'Kompatybilność', value: 'Zebra CS60-HC w wersji przewodowej; podstawki STND-GS0060C-0B i STND-WS0060C-0B' },
    ],
    applications: ['Gniazdo na przewodowy skaner CS60-HC w podstawce gooseneck'],
    relatedAccessories: ['zebra-cs60-hc', 'zebra-hc-stnd-gs0060c-0b', 'zebra-hc-stnd-ws0060c-0b'],
    downloads: [przewodnikCs60],
  }),
]

export const zebraHcScanners: Product[] = [ds2208Hc, ds2278Hc, ds4608Hc, ds8208Hc, ds8288Hc, cs60Hc, ...akcesoriaHc]
