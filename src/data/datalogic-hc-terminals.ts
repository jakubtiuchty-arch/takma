import type { Product } from './products'

// Terminale dla ochrony zdrowia Datalogic Memor 12 HC i Memor 17 HC oraz akcesoria HC.
// Konfiguracje PN: lista „Models & Accessories” na stronie Memor 12-17 (datalogic.com, pd-1102), karta katalogowa
// DS-MEMOR12-17-HEALTHCARE-EN Rev A i strona Memor 12/17 HC (pd-1130); ceny i stany z /api/stock z 25.10.2026.
// Dokumentacja: docs/catalog/terminale-hc-2026-10-25/T2.md

const HC_DATASHEET = { name: 'Karta katalogowa Memor 12-17 Healthcare (EN)', type: 'datasheet' as const, url: '/datasheets/datalogic-memor-12-17-hc-en.pdf', size: '638 KB' }
const MEMOR_QSG = { name: 'Skrócona instrukcja Memor 12/17 (EN)', type: 'manual' as const, url: '/downloads/memor12-17_qsg_en.pdf', size: '1,3 MB' }
const MEMOR_UM = { name: 'Instrukcja użytkownika Memor 12/17 (EN)', type: 'manual' as const, url: '/downloads/memor12_17_um.pdf', size: '8,9 MB' }
const HC_SAME_AS = 'https://www.datalogic.com/eng/healthcare/mobile-computers/memor-12-17-hc-pd-1130.html'

const PLACEHOLDER = '/images/products/placeholder.svg'
const MEMOR_HC = ['datalogic-memor-12-hc', 'datalogic-memor-17-hc']

// ---- Terminale ----

const memor12Hc: Product = {
  id: 'datalogic-memor-12-hc',
  slug: 'datalogic-memor-12-hc',
  name: 'Datalogic Memor 12 HC',
  shortDescription: 'Datalogic Memor 12 HC — biały terminal 6" dla szpitali, z łącznością Wi-Fi 6E: obudowa przygotowana do dezynfekcji, skaner 2D Halogen z Green Spot, ładowanie bezprzewodowe Qi.',
  seoTitle: 'Datalogic Memor 12 HC — terminal medyczny z Wi-Fi 6E',
  seoDescription: 'Terminal mobilny Datalogic Memor 12 HC dla szpitali: biała obudowa przygotowana do dezynfekcji, ekran 6" FHD+, skaner 2D z Green Spot, Wi-Fi 6E, NFC, PTT i ładowanie Qi. Terminal medyczny Datalogic Memor 12 HC, Memor 12 HC Datalogic, komputer mobilny Datalogic dla służby zdrowia. PN: 944950027.',
  description: `Datalogic Memor 12 HC to dotykowy terminal z systemem Android w białym wykonaniu HC, przeznaczonym dla placówek medycznych. Nie ma modemu komórkowego. Z siecią łączy się przez Wi-Fi 6E, dlatego jest przeznaczony do pracy wewnątrz szpitala: przy przyjęciu pacjenta, opiece przy łóżku, obsłudze elektronicznej dokumentacji medycznej i w laboratorium.

Obudowę i akcesoria HC przygotowano do dezynfekcji. Odporność na środki czyszczące wskazane przez producenta dotyczy terminala, gumowej osłony i ładowarek. Pełną listę preparatów zawierają pytania i odpowiedzi poniżej.

Obudowa ma grubość 13,5 mm. Ekran 6 cali chroni szkło Gorilla Glass 7, a panel dotykowy reaguje także na dotyk w rękawiczkach. Skaner Halogen DE2121-DL z dekodowaniem DeepSight odczytuje kody 1D i 2D, również uszkodzone lub zabrudzone. Zielony punkt Green Spot potwierdza udany odczyt.

Połączenie alarmowe uruchamia przycisk programowalny albo zdefiniowany gest. Terminal ma przycisk PTT, NFC oraz aparaty 13 MP i 8 MP. Wymienna bateria 4000 mAh ładuje się bezprzewodowo w standardzie Qi. Bezprzewodowe stacje ładujące nie mają odsłoniętych styków, co ułatwia ich czyszczenie. Datalogic zapewnia 4 + 4 lata wsparcia sprzętu i oprogramowania, a gwarancja producenta wynosi 1 rok.`,
  categoryId: 'terminale-mobilne',
  subcategoryIds: ['terminale-mobilne', 'terminale-dla-sluzby-zdrowia'],
  manufacturerId: 'datalogic',
  priceFrom: 2779.49,
  images: [
    '/images/products/944950027.png',
    '/images/products/944950027-2.png',
    '/images/products/944950027-3.png',
  ],
  imageDescriptions: [
    'Datalogic Memor 12 HC — biały terminal dla służby zdrowia, widok z przodu na ekran 6 cali z ikoną Wi-Fi i widok z tyłu na aparat, diodę LED i logo Datalogic',
    'Datalogic Memor 12 HC — biała tylna ścianka z aparatem, diodą LED, logo Datalogic i pokrywą baterii (obudowa wspólna z Memor 17 HC)',
    'Datalogic Memor 12 HC — oba boki białej obudowy z miętowymi przyciskami skanowania (obudowa wspólna z Memor 17 HC)',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ urządzenia', value: 'Dotykowy terminal mobilny z Androidem, wersja Healthcare (HC)' },
    { name: 'Kolor obudowy', value: 'Biały' },
    { name: 'Dezynfekcja', value: 'Obudowa i akcesoria HC przygotowane do dezynfekcji; odporność chemiczna dotyczy terminala, osłony gumowej i ładowarek' },
    { name: 'System operacyjny', value: 'Android 13 z GMS; 4 + 4 lata wsparcia sprzętu i oprogramowania' },
    { name: 'Procesor', value: 'Qualcomm QCx4490, 8 rdzeni, 2,4 GHz' },
    { name: 'Pamięć', value: '6 GB RAM (opcjonalnie 2 GB SWAP), 64 GB UFS, karta microSD do 2 TB' },
    { name: 'Wyświetlacz', value: '6" LTPS FHD+ 1080 × 2160 (18:9), 450 nit' },
    { name: 'Panel dotykowy', value: 'Pojemnościowy, 5 punktów dotyku, Gorilla Glass 7 z optical bonding; obsługa w rękawiczkach i rysikiem, odrzucanie kropli wody' },
    { name: 'Skaner', value: 'Halogen DE2121-DL 1D/2D (standardowy zasięg), Green Spot, dekodowanie DeepSight' },
    { name: 'Aparaty', value: 'Tylny 13 MP z autofokusem i diodą LED; przedni 8 MP ze stałą ostrością' },
    { name: 'Wi-Fi', value: 'IEEE 802.11 a/b/g/n/ac/ax (Wi-Fi 6E), pasma 2,4 / 5 / 6 GHz, 2×2 MIMO, WPA3 Enterprise 192-bit' },
    { name: 'Bluetooth', value: '5.3 (Classic i BLE)' },
    { name: 'NFC', value: 'ISO 14443-4 A/B, ISO 15693, MIFARE, FeliCa; emulacja karty, płatności zbliżeniowe, Apple ECP' },
    { name: 'Lokalizacja', value: 'A-GPS; GPS, Galileo i BeiDou dwuzakresowe' },
    { name: 'Czujniki', value: 'Akcelerometr, żyroskop, czujnik światła, czujnik zbliżeniowy, magnetometr' },
    { name: 'Przyciski', value: '2 boczne przyciski skanowania, PTT, zasilanie, głośność +/−, 3 przyciski programowe Androida' },
    { name: 'Audio', value: '2 mikrofony z redukcją szumów, głośnik, słuchawka do rozmów' },
    { name: 'Złącza', value: 'USB 3.2 Gen 1 Type-C (host i klient); USB 2.0 Type-C (złącze dolne)' },
    { name: 'Bateria', value: 'Wymienna, Li-Ion 3,87 V, 4000 mAh (14,98 Wh)' },
    { name: 'Ładowanie bezprzewodowe', value: 'Qi EPP, 7 W' },
    { name: 'Szczelność', value: 'IP65 i IP68 z baterią (IEC 60529)' },
    { name: 'Upadki', value: 'Wielokrotne na beton: 1,3 m bez osłony, 1,5 m z osłoną gumową w zakresie −10…50 °C (MIL-STD-810H)' },
    { name: 'Przewroty', value: '500 × 0,5 m bez osłony; 500 × 1 m z osłoną gumową (IEC 60068-2-32)' },
    { name: 'Temperatura', value: 'Praca: −10…50 °C; przechowywanie: −40…70 °C' },
    { name: 'ESD', value: '15 kV w powietrzu, 8 kV kontaktowo' },
    { name: 'Wymiary i masa', value: '165 × 76,7 × 13,5 mm; 245 g z baterią' },
    { name: 'Oprogramowanie', value: 'Datalogic Mobility Suite (m.in. Shield, Launcher, Enterprise Browser, Scan2Deploy Studio, OEMConfig, Wedge, SoftSpot)' },
    { name: 'Zarządzanie (EMM)', value: 'SOTI MobiControl, VMware Workspace ONE, Microsoft Intune, 42Gears SureMDM, Ivanti Neurons, Ivanti Avalanche' },
    { name: 'Gwarancja producenta', value: '1 rok' },
  ],
  applications: ['Przyjęcie pacjenta', 'Opieka przy łóżku pacjenta', 'Elektroniczna dokumentacja medyczna', 'Laboratorium'],
  variants: [
    { partNumber: '944950027', name: 'Memor 12 HC, Wi-Fi 6E, 6 / 64 GB, Android 13 GMS, biały', attributes: {}, priceFrom: 2779.49, availability: 'available' },
  ],
  compatibleAccessories: [],
  relatedAccessories: [
    'datalogic-memor-hc-94a150126',
    'datalogic-memor-hc-94a150127',
    'datalogic-memor-hc-94acc0411',
    'datalogic-memor-hc-94acc0405',
    'datalogic-memor-hc-94acc0409',
    'datalogic-zasilacz-usb-94acc0383',
    'datalogic-cable-usbc-skorpio-94ACC0327',
    'datalogic-psu-94ACC0380',
    'datalogic-przewod-zasilajacy-eu-95a051041',
  ],
  faq: [
    {
      question: 'Czym Memor 12 HC różni się od czarnego Datalogic Memor 12?',
      answer: 'Biała obudowa Memor 12 HC jest przygotowana do częstej dezynfekcji środkami z listy Datalogic. Terminal ma też własne akcesoria HC: białe stacje bezprzewodowe, gumową osłonę, jasnozielony pasek na dłoń i klips z czerwonym przyciskiem. Ekran, skaner Halogen, procesor i Wi-Fi 6E są takie same jak w [Datalogic Memor 12](/produkt/datalogic-memor-12).',
    },
    {
      question: 'Jakie środki czyszczące i dezynfekcyjne można stosować do Memor 12 HC?',
      answer: 'Lista Datalogic obejmuje: Sani-Cloth HB, Sani-Cloth Plus, Super Sani-Cloth, Hepacide Quat II, alkohol izopropylowy 70% (IPA) / chusteczki z alkoholem 70%, CaviWipes, Virex 256, Glassex z amoniakiem / Formula 409 Glass and Surface Cleaner, Glassex z amoniakiem / Windex, wodny roztwór podchlorynu sodu 0,8% / Clorox Bleach oraz 100% łagodny płyn do naczyń z wodą. Odporność na te środki dotyczy terminala, gumowej osłony i ładowarek.',
    },
    {
      question: 'Czy Memor 12 HC ma przycisk alarmowy?',
      answer: 'Terminal nie ma osobnego przycisku alarmowego. Połączenie alarmowe przypisuje się do przycisku programowalnego albo do zdefiniowanego gestu. Czerwony przycisk alarmowy ma zdejmowany [klips kieszeniowy 94ACC0411](/produkt/datalogic-memor-hc-94acc0411), sprzedawany osobno.',
    },
    {
      question: 'Jak ładować Memor 12 HC?',
      answer: 'Terminal ładuje się bezprzewodowo (Qi EPP, 7 W) albo przez złącze USB-C. [Stacja 94A150126](/produkt/datalogic-memor-hc-94a150126) ładuje jeden terminal. Do jej zasilania potrzebny jest zasilacz USB 94ACC0383 i przewód 94ACC0327. [Stacja 94A150127](/produkt/datalogic-memor-hc-94a150127) ładuje cztery terminale. Wymaga zasilacza 94ACC0380 i przewodu sieciowego 95A051041.',
    },
    {
      question: 'Czy Memor 12 HC działa w sieci komórkowej?',
      answer: 'Nie. Memor 12 HC łączy się przez Wi-Fi 6E w pasmach 2,4, 5 i 6 GHz oraz przez Bluetooth 5.3. Dla personelu, który pracuje także poza szpitalem, przeznaczony jest [Datalogic Memor 17 HC](/produkt/datalogic-memor-17-hc) z modemem 5G.',
    },
    {
      question: 'Jak długo Datalogic wspiera Memor 12 HC?',
      answer: 'Producent przewiduje 4 + 4 lata wsparcia sprzętu i oprogramowania. Terminal jest dostarczany z Androidem 13 i usługami Google (GMS). Aktualizacje zabezpieczeń Androida dostarcza Datalogic Shield. Datalogic oferuje tę usługę w umowach rocznych, 3-letnich i do 5 lat.',
    },
    {
      question: 'Jakie terminale dla służby zdrowia są alternatywą dla Memor 12 HC?',
      answer: 'Do porównania w tej samej klasie terminali dotykowych: [Zebra HC20](/produkt/zebra-hc20), [Zebra HC50](/produkt/zebra-hc50) i [Honeywell CT37 HC](/produkt/honeywell-ct37-hc).',
    },
  ],
  downloads: [HC_DATASHEET, MEMOR_QSG, MEMOR_UM],
  relatedProducts: ['datalogic-memor-17-hc', 'zebra-hc20', 'zebra-hc50', 'honeywell-ct37-hc'],
  createdAt: '2026-10-25',
  sameAs: HC_SAME_AS,
}

const memor17Hc: Product = {
  id: 'datalogic-memor-17-hc',
  slug: 'datalogic-memor-17-hc',
  name: 'Datalogic Memor 17 HC',
  shortDescription: 'Datalogic Memor 17 HC — terminal dla służby zdrowia z 5G i Wi-Fi 6E do pracy w szpitalu i podczas wizyt domowych: biała obudowa przygotowana do dezynfekcji, eSIM, skaner Halogen 2D.',
  seoTitle: 'Datalogic Memor 17 HC — terminal 5G dla służby zdrowia',
  seoDescription: 'Datalogic Memor 17 HC: biały terminal mobilny z 5G, Wi-Fi 6E i eSIM dla szpitali i opieki domowej, obudowa przygotowana do dezynfekcji, skaner z Green Spot, Qi. Terminal dla pielęgniarek Datalogic Memor 17 HC, Memor 17 HC Datalogic, terminal medyczny 5G Datalogic. PN: 944950006, 944950023.',
  description: `Datalogic Memor 17 HC to biały terminal dotykowy dla personelu medycznego, który pracuje w szpitalu i poza nim. Oprócz Wi-Fi 6E ma modem 5G z gniazdem nano SIM i obsługą eSIM. Łączność komórkowa utrzymuje połączenie podczas wizyt domowych u pacjentów i przy przemieszczaniu się między placówkami medycznymi. Terminal może także pracować w prywatnych sieciach 5G.

Wersja HC jest przeznaczona do ciągłej dezynfekcji. Terminal i jego akcesoria zaprojektowano tak, aby zapobiegać gromadzeniu się zarazków i bakterii na ich powierzchniach. Bateria ładuje się bezprzewodowo (Qi EPP, 7 W) w białych stacjach, które nie mają odkrytych styków.

Są dwie konfiguracje z 6 GB RAM. Wersja 944950006 ma 64 GB pamięci flash. Wersja 944950023 ma 128 GB i baterię z funkcją SafeSwap, która chroni dane aplikacji podczas wymiany baterii.

Skaner Halogen DE2121-DL z technologią Green Spot ułatwia identyfikację pacjenta, śledzenie leków i ewidencję sprzętu. Wezwanie alarmowe można przypisać do programowalnego przycisku lub do gestu. Biały klips 94ACC0411 z czerwonym przyciskiem alarmowym jest sprzedawany osobno. W stacji Smart Docking 94A150141 terminal pracuje w trybie Desktop. Producent udziela 1 roku gwarancji.`,
  categoryId: 'terminale-mobilne',
  subcategoryIds: ['terminale-mobilne', 'terminale-dla-sluzby-zdrowia'],
  manufacturerId: 'datalogic',
  priceFrom: 3471.94,
  images: [
    '/images/products/944950006.png',
    '/images/products/944950006-2.png',
    '/images/products/944950006-3.png',
    '/images/products/944950006-4.png',
    '/images/products/944950006-5.png',
  ],
  imageDescriptions: [
    'Datalogic Memor 17 HC — biały terminal dla służby zdrowia, widok z przodu na ekran 6 cali z ikoną sieci 5G',
    'Datalogic Memor 17 HC — widok z tyłu na aparat 13 MP z diodą LED, logo Datalogic i pokrywę baterii',
    'Datalogic Memor 17 HC — widok z przodu pod kątem na lewy bok z miętowym przyciskiem skanowania i regulacją głośności',
    'Datalogic Memor 17 HC — widok z przodu pod kątem na prawy bok z miętowym przyciskiem skanowania',
    'Datalogic Memor 17 HC — profile obu boków białej obudowy o grubości 13,5 mm',
  ],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Typ urządzenia', value: 'Dotykowy terminal mobilny z Androidem i 5G, wersja Healthcare (HC)' },
    { name: 'Kolor obudowy', value: 'Biały' },
    { name: 'Dezynfekcja', value: 'Przygotowany do dezynfekcji (disinfectant-ready) razem z akcesoriami HC; odporność chemiczna obejmuje terminal, osłonę gumową i ładowarki' },
    { name: 'System operacyjny', value: 'Android 13 z GMS; wsparcie 4 + 4 lata (sprzęt i oprogramowanie)' },
    { name: 'Procesor', value: 'Qualcomm QCx4490 Octa-core 2,4 GHz' },
    { name: 'Pamięć', value: '6 GB RAM (+2 GB SWAP opcjonalnie); 64 GB lub 128 GB UFS zależnie od PN; microSD do 2 TB' },
    { name: 'Wyświetlacz', value: '6,0" FHD+ (1080 × 2160), LTPS, podświetlenie LED, 450 nit' },
    { name: 'Panel dotykowy', value: 'Gorilla Glass 7, optical bonding, 5 punktów; praca w rękawiczkach i z rysikiem' },
    { name: 'Skaner', value: 'Halogen DE2121-DL 1D/2D, Green Spot, DeepSight' },
    { name: 'Aparaty', value: '13 MP z tyłu (autofokus, lampa LED), 8 MP z przodu' },
    { name: 'Łączność komórkowa', value: 'NR 5G FR1, LTE-Advanced (3GPP Rel. 16); 1 nano SIM i eSIM; VoLTE, VoNR, połączenia przez Wi-Fi' },
    { name: 'Pasma EMEA', value: '5G: n1/2/3/5/7/8/20/25/28/38/40/41/66/77/78/79; FDD-LTE: B1/2/3/4/5/7/8/17/19/20/25/28/66; TDD-LTE: B34/38/39/40/41/42/43; WCDMA: B1/2/4/5/8; GSM: 4 pasma' },
    { name: 'WLAN', value: 'Wi-Fi 6E (802.11ax), 2,4 / 5 / 6 GHz, 2×2 MIMO, WPA3 Enterprise 192-bit' },
    { name: 'Bluetooth', value: 'Bluetooth 5.3, Classic i Low Energy' },
    { name: 'NFC', value: 'Tagi typu 1–5 (ISO 14443-4 A/B, ISO 15693, MIFARE, FeliCa); emulacja karty; płatności zbliżeniowe i Apple ECP' },
    { name: 'Lokalizacja', value: 'A-GPS; dwuzakresowe GPS, Galileo, BeiDou; barometr (określanie wysokości)' },
    { name: 'Czujniki', value: 'Akcelerometr 3-osiowy, żyroskop, czujnik oświetlenia, czujnik zbliżeniowy, magnetometr, barometr' },
    { name: 'Przyciski', value: 'Dwa boczne przyciski skanowania, PTT, włącznik, przyciski głośności, 3 przyciski programowe Androida' },
    { name: 'Złącza', value: 'USB-C 3.2 Gen 1 (host i klient); USB 2.0 Type-C na spodzie' },
    { name: 'Bateria', value: 'Li-Ion 4000 mAh, 3,87 V, 14,98 Wh, wymienna; SafeSwap tylko w wersji 6 / 128 GB (944950023)' },
    { name: 'Ładowanie bezprzewodowe', value: 'Zgodne z WPC Qi EPP, 7 W' },
    { name: 'Szczelność', value: 'IP65 i IP68 z włożoną baterią, wg IEC 60529' },
    { name: 'Odporność na upadki', value: '1,3 m na beton bez osłony; 1,5 m z osłoną gumową (MIL-STD-810H); 500 przewrotów z 0,5 m bez osłony i z 1 m z osłoną' },
    { name: 'Temperatura', value: 'Praca −10…50 °C; przechowywanie i transport −40…70 °C' },
    { name: 'Wymiary i masa', value: '165 × 76,7 × 13,5 mm; 245 g z baterią' },
    { name: 'Komunikacja głosowa', value: '2 mikrofony z redukcją szumów, głośnik do rozmów w trybie głośnomówiącym; zgodność z Zello PTT' },
    { name: 'Oprogramowanie', value: 'Datalogic Mobility Suite: Shield (aktualizacje zabezpieczeń), Launcher, Scan2Deploy Studio, OEMConfig, Wi-Fi Guard, Battery Manager' },
    { name: 'Gwarancja producenta', value: '1 rok' },
  ],
  applications: ['Wizyty domowe u pacjentów', 'Identyfikacja pacjenta i śledzenie leków', 'Ewidencja sprzętu medycznego', 'Przemieszczanie się między placówkami medycznymi'],
  variants: [
    { partNumber: '944950006', name: 'Memor 17 HC, 5G + Wi-Fi 6E, 6 / 64 GB, Android 13 GMS, biały', attributes: { 'Pamięć': '6 / 64 GB' }, priceFrom: 3471.94, availability: 'available' },
    { partNumber: '944950023', name: 'Memor 17 HC, 5G + Wi-Fi 6E, 6 / 128 GB, SafeSwap, Android 13 GMS, biały', attributes: { 'Pamięć': '6 / 128 GB', 'SafeSwap': 'Tak' }, priceFrom: 3814.6, availability: 'available' },
  ],
  variantAttributeTooltips: {
    'Pamięć': 'Pamięć RAM i pamięć flash UFS na system, aplikacje i dane.\n\n6 / 64 GB — wersja podstawowa.\n\n6 / 128 GB — dwa razy więcej miejsca na dane; ta wersja ma także SafeSwap.\n\nObie wersje przyjmują kartę microSD do 2 TB.',
    'SafeSwap': 'Ochrona danych aplikacji przy wymianie baterii.\n\nW Memor 17 HC funkcję ma tylko wersja 6 / 128 GB.',
  },
  compatibleAccessories: [],
  relatedAccessories: [
    'datalogic-memor-hc-94a150126',
    'datalogic-memor-hc-94a150127',
    'datalogic-memor-hc-94acc0414',
    'datalogic-memor-hc-94acc0411',
    'datalogic-memor-hc-94acc0405',
    'datalogic-memor-hc-94acc0409',
    'datalogic-memor-hc-94a150141',
    'datalogic-zasilacz-usb-94acc0383',
    'datalogic-cable-usbc-skorpio-94ACC0327',
    'datalogic-psu-94ACC0380',
    'datalogic-przewod-zasilajacy-eu-95a051041',
  ],
  faq: [
    {
      question: 'Którą wersję Memor 17 HC wybrać: 944950006 czy 944950023?',
      answer: 'Obie mają 6 GB RAM, 5G i Wi-Fi 6E. 944950006 ma 64 GB pamięci flash. 944950023 ma 128 GB i obsługuje SafeSwap, czyli ochronę danych aplikacji przy wymianie baterii. Jeśli bateria będzie wymieniana w trakcie pracy z otwartą aplikacją, właściwa jest wersja 944950023.',
    },
    {
      question: 'Czym Memor 17 HC różni się od Datalogic Memor 17?',
      answer: 'Memor 17 HC ma białą obudowę i akcesoria przygotowane do częstej dezynfekcji. Do wersji HC przeznaczone są białe stacje bezprzewodowe, bateria HC, osłona HC, jasnozielony pasek i klips z czerwonym przyciskiem alarmowym. Procesor, ekran, skaner i modem 5G odpowiadają czarnemu [Datalogic Memor 17](/produkt/datalogic-memor-17).',
    },
    {
      question: 'Czym można dezynfekować Memor 17 HC?',
      answer: 'Datalogic wymienia następujące środki: Sani-Cloth HB, Sani-Cloth Plus, Super Sani-Cloth, Hepacide Quat II, alkohol izopropylowy 70% (IPA) / chusteczki z alkoholem 70%, CaviWipes, Virex 256, Glassex z amoniakiem / Formula 409 Glass and Surface Cleaner, Glassex z amoniakiem / Windex, wodny roztwór podchlorynu sodu 0,8% / Clorox Bleach oraz 100% łagodny płyn do naczyń z wodą. Lista obejmuje terminal, osłonę gumową i ładowarki.',
    },
    {
      question: 'Jak z Memor 17 HC wezwać pomoc?',
      answer: 'Połączenie alarmowe lub wezwanie pomocy przypisuje się do jednego z programowalnych przycisków albo do własnego gestu. Działa to w budynku i poza nim. Fizyczny czerwony przycisk alarmowy jest w [klipsie 94ACC0411](/produkt/datalogic-memor-hc-94acc0411), który zamawia się osobno.',
    },
    {
      question: 'Jakie stacje ładujące pasują do Memor 17 HC?',
      answer: 'Do wersji HC służą białe stacje bezprzewodowe: jednogniazdowa [94A150126](/produkt/datalogic-memor-hc-94a150126) i czterogniazdowa [94A150127](/produkt/datalogic-memor-hc-94a150127). Biała stacja [Smart Docking 94A150141](/produkt/datalogic-memor-hc-94a150141) z trybem Desktop pozwala korzystać z terminala jak ze stanowiska biurowego podczas ładowania. Zasilacze i przewody są sprzedawane osobno.',
    },
    {
      question: 'Czy do Memor 17 HC jest zapasowa bateria?',
      answer: 'Tak. Datalogic oferuje baterię w wersji HC do Memor 17 HC: [94ACC0414](/produkt/datalogic-memor-hc-94acc0414). Fabryczna bateria terminala ma 4000 mAh i ładuje się bezprzewodowo.',
    },
    {
      question: 'Jakie inne terminale dla służby zdrowia z łącznością komórkową są w ofercie?',
      answer: 'Z modemem komórkowym do porównania są [Zebra HC25](/produkt/zebra-hc25) i [Zebra HC55](/produkt/zebra-hc55). Bez modemu, tylko z Wi-Fi 6E, pracuje [Datalogic Memor 12 HC](/produkt/datalogic-memor-12-hc).',
    },
  ],
  downloads: [HC_DATASHEET, MEMOR_QSG, MEMOR_UM],
  relatedProducts: ['datalogic-memor-12-hc', 'zebra-hc25', 'zebra-hc55', 'honeywell-ct37-hc'],
  createdAt: '2026-10-25',
  sameAs: HC_SAME_AS,
}

// ---- Akcesoria HC ----

const dock1Hc: Product = {
  id: 'datalogic-memor-hc-94a150126',
  slug: 'datalogic-memor-hc-94a150126',
  name: 'Stacja ładująca Datalogic 94A150126 HC do Memor 12 HC i Memor 17 HC',
  shortDescription: 'Datalogic 94A150126 — biała jednogniazdowa stacja HC: bezprzewodowo ładuje jeden terminal Memor 12 HC albo Memor 17 HC.',
  seoTitle: 'Stacja Datalogic 94A150126 HC do Memor 12 HC / 17 HC',
  seoDescription: 'Biała stacja Datalogic 94A150126 (Single Slot Charging Dock HC) do bezprzewodowego ładowania jednego terminala Datalogic Memor 12 HC lub Memor 17 HC. Stacja ładująca Memor 17 HC. PN: 94A150126.',
  description: `Stacja Datalogic 94A150126 ładuje bezprzewodowo jeden terminal [Memor 12 HC](/produkt/datalogic-memor-12-hc) lub [Memor 17 HC](/produkt/datalogic-memor-17-hc). Ma białą obudowę w wersji HC i służy wyłącznie do ładowania, bez transmisji danych. Stacja nie ma odsłoniętych styków, co ułatwia jej czyszczenie. Odporność chemiczna wersji HC obejmuje także ładowarki.

## Co jest potrzebne do użycia?

**Wymagane — sprzedawane osobno**

- [Przewód USB-A / USB-C Datalogic 1,2 m (94ACC0327)](/produkt/datalogic-kabel-usb-c-skorpio-x5)
- [Zasilacz sieciowy USB-A Datalogic z wtyczkami regionalnymi (94ACC0383)](/produkt/datalogic-zasilacz-usb-94acc0383)

Aby korzystać ze stacji, potrzebny jest przewód i zasilacz z listy. Elementy te nie są dołączone do stacji.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'datalogic',
  priceFrom: 645.93,
  images: ['/images/products/94A150126.png'],
  imageDescriptions: ['Stacja ładująca Datalogic 94A150126 HC — biała jednogniazdowa stacja do bezprzewodowego ładowania terminala Memor 12 HC lub Memor 17 HC'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '94A150126' },
    { name: 'Typ', value: 'Stacja jednogniazdowa, ładowanie bezprzewodowe, tylko ładowanie' },
    { name: 'Kolor', value: 'Biały (wersja HC)' },
    { name: 'Zasilanie', value: 'Zasilacz 94ACC0383 i przewód USB-A / USB-C 94ACC0327 (sprzedawane osobno)' },
    { name: 'Kompatybilność', value: 'Datalogic Memor 12 HC, Memor 17 HC' },
  ],
  applications: ['Bezprzewodowe ładowanie jednego terminala Memor 12 HC lub Memor 17 HC'],
  compatibleAccessories: [],
  relatedAccessories: ['datalogic-cable-usbc-skorpio-94ACC0327', 'datalogic-zasilacz-usb-94acc0383'],
  downloads: [HC_DATASHEET],
  relatedProducts: MEMOR_HC,
  createdAt: '2026-10-25',
}

const dock4Hc: Product = {
  id: 'datalogic-memor-hc-94a150127',
  slug: 'datalogic-memor-hc-94a150127',
  name: 'Stacja ładująca Datalogic 94A150127 HC na 4 terminale Memor 12 HC / 17 HC',
  shortDescription: 'Datalogic 94A150127 — biała czterogniazdowa stacja HC do ładowania bezprzewodowego terminali Datalogic Memor HC (modele 12 HC i 17 HC).',
  seoTitle: 'Stacja 4-gniazdowa Datalogic 94A150127 HC do Memor HC',
  seoDescription: 'Datalogic 94A150127 (4-Slot Wireless Charging Dock HC): biała stacja ładująca bezprzewodowo cztery terminale z rodziny Datalogic Memor 12/17 HC. Ładowarka 4-gniazdowa Memor 17 HC. PN: 94A150127.',
  description: `Datalogic 94A150127 to czterogniazdowa stacja w białej wersji HC. Ładuje bezprzewodowo do czterech terminali naraz; pasują modele [Memor 12 HC](/produkt/datalogic-memor-12-hc) oraz [Memor 17 HC](/produkt/datalogic-memor-17-hc). Stacja służy wyłącznie do ładowania. Gniazda bez odsłoniętych styków łatwiej utrzymać w czystości.

## Co jest potrzebne do użycia?

**Wymagane — sprzedawane osobno**

- [Zasilacz Datalogic do stacji Memor 12/17 (94ACC0380)](/produkt/datalogic-psu-memor-12)
- [Przewód zasilający Datalogic z wtyczką europejską (95A051041)](/produkt/datalogic-przewod-zasilajacy-eu-95a051041)

Zasilacz i przewód sieciowy nie wchodzą w skład stacji.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'datalogic',
  priceFrom: 2133.55,
  images: [PLACEHOLDER],
  imageDescriptions: ['Stacja ładująca Datalogic 94A150127 HC na cztery terminale Memor 12 HC i Memor 17 HC'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '94A150127' },
    { name: 'Typ', value: 'Stacja 4-gniazdowa, ładowanie bezprzewodowe, tylko ładowanie' },
    { name: 'Kolor', value: 'Biały (wersja HC)' },
    { name: 'Zasilanie', value: 'Zasilacz 94ACC0380 i przewód sieciowy 95A051041 (sprzedawane osobno)' },
    { name: 'Kompatybilność', value: 'Datalogic Memor 12 HC, Memor 17 HC' },
  ],
  applications: ['Bezprzewodowe ładowanie do czterech terminali Memor HC jednocześnie'],
  compatibleAccessories: [],
  relatedAccessories: ['datalogic-psu-94ACC0380', 'datalogic-przewod-zasilajacy-eu-95a051041'],
  downloads: [HC_DATASHEET],
  relatedProducts: MEMOR_HC,
  createdAt: '2026-10-25',
}

const smartDockHc: Product = {
  id: 'datalogic-memor-hc-94a150141',
  slug: 'datalogic-memor-hc-94a150141',
  name: 'Stacja Smart Docking Datalogic 94A150141 do Memor 17 HC, biała',
  shortDescription: 'Datalogic 94A150141 — biała stacja Smart Docking z trybem Desktop do terminala Memor 17 HC: ładowanie i praca w środowisku biurowym.',
  seoTitle: 'Stacja Smart Docking Datalogic 94A150141 do Memor 17 HC',
  seoDescription: 'Biała stacja Datalogic Smart Docking Station M17 (94A150141) z trybem Desktop do terminala Datalogic Memor 17 HC. Stacja dokująca Memor 17 HC. PN: 94A150141.',
  description: `Datalogic 94A150141 to biała stacja Smart Docking do terminala [Memor 17 HC](/produkt/datalogic-memor-17-hc). Pracuje w trybie Desktop: obraz z terminala trafia na zewnętrzny monitor, a personel korzysta z pełnego środowiska pulpitu, podczas gdy urządzenie się ładuje. Jeden terminal może więc służyć do pracy mobilnej i do dokumentacji przy stanowisku.

## Co jest potrzebne do użycia?

**Wymagane — sprzedawane osobno**

- [Zasilacz Datalogic do stacji Memor 12/17 (94ACC0380)](/produkt/datalogic-psu-memor-12)
- [Przewód zasilający Datalogic z wtyczką europejską (95A051041)](/produkt/datalogic-przewod-zasilajacy-eu-95a051041)

Stacja jest dostarczana bez zasilacza i bez przewodu sieciowego.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['stacje-ladowarki-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'datalogic',
  priceFrom: 1934.81,
  images: [PLACEHOLDER],
  imageDescriptions: ['Biała stacja Smart Docking Datalogic 94A150141 z trybem Desktop do terminala Memor 17 HC'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '94A150141' },
    { name: 'Typ', value: 'Smart Docking Station, tryb Desktop' },
    { name: 'Kolor', value: 'Biały' },
    { name: 'Zasilanie', value: 'Zasilacz 94ACC0380 i przewód sieciowy 95A051041 (sprzedawane osobno)' },
    { name: 'Kompatybilność', value: 'Datalogic Memor 17 HC' },
  ],
  applications: ['Dokumentacja przy stanowisku z użyciem terminala'],
  compatibleAccessories: [],
  relatedAccessories: ['datalogic-psu-94ACC0380', 'datalogic-przewod-zasilajacy-eu-95a051041'],
  downloads: [HC_DATASHEET],
  relatedProducts: ['datalogic-memor-17-hc'],
  createdAt: '2026-10-25',
}

const batteryHc: Product = {
  id: 'datalogic-memor-hc-94acc0414',
  slug: 'datalogic-memor-hc-94acc0414',
  name: 'Bateria Datalogic 94ACC0414 HC do Memor 17 HC',
  shortDescription: 'Datalogic 94ACC0414 — bateria w wersji HC do terminala Datalogic Memor 17 HC, na zapas lub do wymiany.',
  seoTitle: 'Bateria Datalogic 94ACC0414 HC do Memor 17 HC',
  seoDescription: 'Bateria Datalogic 94ACC0414 (Battery, HC) do terminala dla służby zdrowia Datalogic Memor 17 HC. Zapasowa bateria Memor 17 HC. PN: 94ACC0414.',
  description: `Datalogic 94ACC0414 to bateria w wersji HC do terminala [Memor 17 HC](/produkt/datalogic-memor-17-hc). Służy jako bateria zapasowa lub zamienna. Bateria w Memor 17 HC jest wymienna, a terminal ładuje się także bezprzewodowo.

Bateria jest przeznaczona do Memor 17 HC. Do czarnych terminali Memor 12 i Memor 17 służy bateria 94ACC0410.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['baterie-do-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'datalogic',
  priceFrom: 306.9,
  images: [PLACEHOLDER],
  imageDescriptions: ['Bateria Datalogic 94ACC0414 w wersji HC do terminala Memor 17 HC'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '94ACC0414' },
    { name: 'Typ', value: 'Bateria wymienna, wersja HC' },
    { name: 'Kompatybilność', value: 'Datalogic Memor 17 HC' },
  ],
  applications: ['Wymiana baterii w terminalu Memor 17 HC'],
  compatibleAccessories: [],
  relatedAccessories: [],
  downloads: [HC_DATASHEET],
  relatedProducts: ['datalogic-memor-17-hc'],
  createdAt: '2026-10-25',
}

const handStrapHc: Product = {
  id: 'datalogic-memor-hc-94acc0409',
  slug: 'datalogic-memor-hc-94acc0409',
  name: 'Pasek na dłoń Datalogic 94ACC0409 HC do Memor 12 HC / 17 HC (5 szt.)',
  shortDescription: 'Datalogic 94ACC0409 — jasnozielone paski na dłoń HC, komplet 5 sztuk; pasują do Memor 12 HC oraz Memor 17 HC.',
  seoTitle: 'Pasek na dłoń Datalogic 94ACC0409 HC do Memor HC, 5 szt.',
  seoDescription: 'Jasnozielony pasek na dłoń Datalogic 94ACC0409 (Hand Strap HC, 5 szt.) — akcesorium terminala Memor 17 HC i Memor 12 HC. PN: 94ACC0409.',
  description: `Datalogic 94ACC0409 to pasek na dłoń w wersji HC, w kolorze jasnozielonym. Przeznaczony jest dla obu modeli HC: [Memor 17 HC](/produkt/datalogic-memor-17-hc) oraz [Memor 12 HC](/produkt/datalogic-memor-12-hc). Ergonomiczny pasek służy do noszenia terminala i pomaga ograniczyć zmęczenie dłoni podczas długiej zmiany.

Opakowanie zawiera 5 pasków.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'datalogic',
  priceFrom: 207.54,
  images: [PLACEHOLDER],
  imageDescriptions: ['Jasnozielony pasek na dłoń Datalogic 94ACC0409 HC do terminali Memor 12 HC i Memor 17 HC'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '94ACC0409' },
    { name: 'Typ', value: 'Pasek na dłoń, wersja HC' },
    { name: 'Kolor', value: 'Jasnozielony' },
    { name: 'Ilość w opakowaniu', value: '5 szt.' },
    { name: 'Kompatybilność', value: 'Datalogic Memor 12 HC, Memor 17 HC' },
  ],
  applications: ['Noszenie terminala podczas długiej zmiany'],
  compatibleAccessories: [],
  relatedAccessories: [],
  downloads: [HC_DATASHEET],
  relatedProducts: MEMOR_HC,
  createdAt: '2026-10-25',
}

const bootHc: Product = {
  id: 'datalogic-memor-hc-94acc0405',
  slug: 'datalogic-memor-hc-94acc0405',
  name: 'Osłona gumowa Datalogic 94ACC0405 HC do Memor 12 HC / 17 HC',
  shortDescription: 'Datalogic 94ACC0405 — gumowa osłona HC dla Memor 17 HC / Memor 12 HC; z nią terminal znosi upadki z 1,5 m.',
  seoTitle: 'Osłona gumowa Datalogic 94ACC0405 HC do Memor 17 HC',
  seoDescription: 'Osłona ochronna Datalogic 94ACC0405 (Rubber Boot HC) na terminal Memor 17 HC lub Memor 12 HC: upadki z 1,5 m na beton, odporność na środki dezynfekcyjne. PN: 94ACC0405.',
  description: `Datalogic 94ACC0405 to gumowa osłona HC, którą zakłada się na [Memor 17 HC](/produkt/datalogic-memor-17-hc) albo [Memor 12 HC](/produkt/datalogic-memor-12-hc). Chroni obudowę przed skutkami przypadkowych upadków i codziennym zużyciem.

Z osłoną terminal wytrzymuje wielokrotne upadki z wysokości 1,5 m na beton (bez osłony 1,3 m) oraz 500 przewrotów z 1 m. Osłona jest objęta tą samą listą środków dezynfekcyjnych co terminal i ładowarki.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'datalogic',
  priceFrom: 163.67,
  images: [PLACEHOLDER],
  imageDescriptions: ['Osłona gumowa Datalogic 94ACC0405 w wersji HC do terminali Memor 12 HC i Memor 17 HC'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '94ACC0405' },
    { name: 'Typ', value: 'Osłona gumowa (rubber boot), wersja HC' },
    { name: 'Odporność terminala z osłoną', value: 'Upadki z 1,5 m na beton (MIL-STD-810H); 500 przewrotów z 1 m (IEC 60068-2-32)' },
    { name: 'Kompatybilność', value: 'Datalogic Memor 12 HC, Memor 17 HC' },
  ],
  applications: ['Ochrona terminala przed upadkami'],
  compatibleAccessories: [],
  relatedAccessories: [],
  downloads: [HC_DATASHEET],
  relatedProducts: MEMOR_HC,
  createdAt: '2026-10-25',
}

const clipHc: Product = {
  id: 'datalogic-memor-hc-94acc0411',
  slug: 'datalogic-memor-hc-94acc0411',
  name: 'Klips kieszeniowy Datalogic 94ACC0411 z czerwonym przyciskiem alarmowym do Memor HC',
  shortDescription: 'Datalogic 94ACC0411 — biały zdejmowany klips kieszeniowy z czerwonym przyciskiem alarmowym; akcesorium HC do terminali Memor HC (12 HC i 17 HC).',
  seoTitle: 'Klips Datalogic 94ACC0411 z przyciskiem alarmowym, Memor HC',
  seoDescription: 'Klips kieszeniowy Datalogic 94ACC0411 (Pocket clip with emergency red button) z czerwonym przyciskiem alarmowym, zdejmowany; do Memor 12 HC oraz Memor 17 HC. PN: 94ACC0411.',
  description: `Datalogic 94ACC0411 to biały klips kieszeniowy, w którym nosi się terminal [Memor 17 HC](/produkt/datalogic-memor-17-hc) lub [Memor 12 HC](/produkt/datalogic-memor-12-hc). Na górnej krawędzi ma czerwony przycisk alarmowy. Klips pozwala nosić terminal przypięty do kieszeni odzieży roboczej i można go zdjąć.

Terminal Memor HC nie ma własnego przycisku alarmowego. Bez klipsa wezwanie alarmowe przypisuje się do przycisku programowalnego lub gestu.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['etui-kabury-uchwyty', 'akcesoria-do-terminali'],
  manufacturerId: 'datalogic',
  priceFrom: 143.23,
  images: ['/images/products/94ACC0411.png'],
  imageDescriptions: ['Klips kieszeniowy Datalogic 94ACC0411 — biała ramka na terminal z czerwonym przyciskiem alarmowym i klipsem na odwrocie'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '94ACC0411' },
    { name: 'Typ', value: 'Klips kieszeniowy, zdejmowany' },
    { name: 'Przycisk', value: 'Czerwony przycisk alarmowy' },
    { name: 'Kolor', value: 'Biały' },
    { name: 'Kompatybilność', value: 'Datalogic Memor 12 HC, Memor 17 HC' },
  ],
  applications: ['Noszenie terminala przy odzieży', 'Wezwanie alarmowe przyciskiem'],
  compatibleAccessories: [],
  relatedAccessories: [],
  downloads: [HC_DATASHEET],
  relatedProducts: MEMOR_HC,
  createdAt: '2026-10-25',
}

const usbWallAdapter: Product = {
  id: 'datalogic-zasilacz-usb-94acc0383',
  slug: 'datalogic-zasilacz-usb-94acc0383',
  name: 'Zasilacz sieciowy USB-A Datalogic 94ACC0383 z wtyczkami regionalnymi',
  shortDescription: 'Datalogic 94ACC0383 — zasilacz sieciowy z gniazdem USB-A i czterema wtyczkami regionalnymi do jednogniazdowych stacji Memor 12/17 i Memor 12 HC / 17 HC.',
  seoTitle: 'Zasilacz USB Datalogic 94ACC0383 do stacji Memor 12/17 HC',
  seoDescription: 'Zasilacz Datalogic 94ACC0383 (Power Wall Adapter, USB-A, 4 wtyczki regionalne) do zasilania jednogniazdowych stacji Memor 12 HC / 17 HC 94A150126 oraz 94A150128 i 94A150129 przewodem 94ACC0327. PN: 94ACC0383.',
  description: `Datalogic 94ACC0383 to zasilacz sieciowy z gniazdem USB-A i czterema wymiennymi wtyczkami regionalnymi. Zasila jednogniazdowe stacje terminali Memor przez przewód USB-A / USB-C 94ACC0327: białą stację HC [94A150126](/produkt/datalogic-memor-hc-94a150126) oraz stacje [stacja 1-gniazdowa (94A150128)](/produkt/datalogic-dock-1slot-memor-12) i [stacja bezprzewodowa (94A150129)](/produkt/datalogic-dock-wireless-memor-12) do Memor 12/17. Z tym samym przewodem ładuje także sam terminal, również w wersji HC, przez złącze USB-C.

## Co jest potrzebne do użycia?

**Wymagane — sprzedawane osobno**

- [Przewód USB-A / USB-C Datalogic 1,2 m (94ACC0327)](/produkt/datalogic-kabel-usb-c-skorpio-x5)

Przewód łączy zasilacz ze stacją i nie wchodzi w skład zestawu.`,
  categoryId: 'akcesoria',
  subcategoryIds: ['kable-zasilacze-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'datalogic',
  priceFrom: 108.16,
  images: ['/images/products/94ACC0383.png'],
  imageDescriptions: ['Zasilacz sieciowy USB-A Datalogic 94ACC0383 z czterema wtyczkami regionalnymi: europejską, brytyjską, australijską i amerykańską'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '94ACC0383' },
    { name: 'Typ', value: 'Zasilacz sieciowy z gniazdem USB-A' },
    { name: 'Wtyczki', value: '4 wymienne wtyczki regionalne' },
    { name: 'Kompatybilność', value: 'Stacje 1-gniazdowe 94A150126 (Memor 12 HC / 17 HC), 94A150128 i 94A150129 (Memor 12/17) z przewodem 94ACC0327' },
  ],
  applications: ['Zasilanie stacji jednogniazdowej'],
  compatibleAccessories: [],
  relatedAccessories: ['datalogic-cable-usbc-skorpio-94ACC0327', 'datalogic-memor-hc-94a150126'],
  downloads: [],
  relatedProducts: MEMOR_HC,
  createdAt: '2026-10-25',
}

const powerCordEu: Product = {
  id: 'datalogic-przewod-zasilajacy-eu-95a051041',
  slug: 'datalogic-przewod-zasilajacy-eu-95a051041',
  name: 'Przewód zasilający Datalogic 95A051041 z wtyczką europejską',
  shortDescription: 'Datalogic 95A051041 — przewód sieciowy z wtyczką europejską do zasilacza 94ACC0380 (stacje i ładowarki Memor 12/17, także białe stacje HC).',
  seoTitle: 'Przewód zasilający Datalogic 95A051041 (Europa)',
  seoDescription: 'Przewód zasilający Datalogic 95A051041 (Power Cord, Europe) do zasilacza 94ACC0380, który zasila białe stacje HC 94A150127 i 94A150141 oraz stacje i ładowarki Memor 12/17. PN: 95A051041.',
  description: `Datalogic 95A051041 to przewód sieciowy z wtyczką europejską. Łączy z gniazdem sieciowym zasilacz [zasilacz do stacji (94ACC0380)](/produkt/datalogic-psu-memor-12), który jest sprzedawany bez przewodu. Ten zasilacz zasila między innymi białe stacje HC: czterogniazdową [94A150127](/produkt/datalogic-memor-hc-94a150127) i Smart Docking [94A150141](/produkt/datalogic-memor-hc-94a150141).`,
  categoryId: 'akcesoria',
  subcategoryIds: ['kable-zasilacze-terminali', 'akcesoria-do-terminali'],
  manufacturerId: 'datalogic',
  priceFrom: 55.55,
  images: ['/images/products/95A051041.png'],
  imageDescriptions: ['Przewód zasilający Datalogic 95A051041 z wtyczką europejską (zdjęcie poglądowe)'],
  tags: ['healthcare'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: '95A051041' },
    { name: 'Typ', value: 'Przewód zasilający, wtyczka europejska' },
    { name: 'Kompatybilność', value: 'Zasilacz Datalogic 94ACC0380' },
  ],
  applications: ['Podłączenie zasilacza stacji do sieci'],
  compatibleAccessories: [],
  relatedAccessories: ['datalogic-psu-94ACC0380'],
  downloads: [],
  relatedProducts: MEMOR_HC,
  createdAt: '2026-10-25',
}

// Terminale i akcesoria w jednej liście: integracja w products.ts dołącza ją do katalogu
// i rozdziela do podkategorii według `subcategoryIds`.
export const datalogicHcTerminals: Product[] = [
  memor12Hc,
  memor17Hc,
  dock1Hc,
  dock4Hc,
  smartDockHc,
  batteryHc,
  handStrapHc,
  bootHc,
  clipHc,
  usbWallAdapter,
  powerCordEu,
]
