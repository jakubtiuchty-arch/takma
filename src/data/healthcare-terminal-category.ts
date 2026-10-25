import type { Subcategory } from './products'
import type { SubcategoryRichContent } from './subcategory-content'

// Terminale mobilne dla ochrony zdrowia kilku producentów: Zebra HC20 / HC25 / HC50 / HC55 (products.ts),
// Honeywell CT37 HC (honeywell-hc-terminals.ts), Datalogic Memor 12 HC i Memor 17 HC (datalogic-hc-terminals.ts)
// oraz CipherLab RS38H (cipherlab-products.ts). Karty z osobnych plików trafiają tu także przez pętlę `subcategoryIds`
// w products.ts. Parametry w treści według dokumentów producentów: Zebra HC2X/HC5X (karta 05/2025),
// Honeywell CT37 HC (karta Rev C 09/25, przewodnik akcesoriów Rev B 10/24), Datalogic Memor 12-17 HC
// (karta Rev A, 2026), CipherLab RS38H (broszura 09/2024 i strona produktu). Źródła: docs/catalog/terminale-hc-2026-10-25/T3.md.
export const healthcareTerminalCategory: Subcategory = {
  id: 'terminale-dla-sluzby-zdrowia',
  slug: 'terminale-dla-sluzby-zdrowia',
  name: 'Terminale dla służby zdrowia',
  parentCategoryId: 'terminale-mobilne',
  description: 'Dotykowe terminale mobilne z Androidem w wersjach dla ochrony zdrowia: Zebra, Honeywell, Datalogic i CipherLab. Do pracy przy łóżku pacjenta, w laboratorium i w opiece domowej.',
  seoTitle: 'Terminale dla służby zdrowia: terminal medyczny Zebra, Honeywell, Datalogic | TAKMA',
  seoDescription: 'Terminale dla służby zdrowia Zebra, Honeywell, Datalogic i CipherLab: terminal medyczny dla szpitala, komputer mobilny dla pielęgniarek, wersje Wi-Fi i 5G. Porównanie modeli.',
  longDescription: 'Terminale dla służby zdrowia to dotykowe komputery mobilne z Androidem i wbudowanym skanerem kodów kreskowych, przygotowane do pracy w szpitalach, przychodniach, laboratoriach i w opiece domowej. Ich obudowy znoszą regularne przecieranie środkami dezynfekcyjnymi wskazanymi przez producenta. Personel odczytuje nimi kody z opasek pacjentów, etykiet leków i probówek, przegląda dokumentację w systemie szpitalnym, rozmawia przez Wi-Fi lub sieć komórkową i robi zdjęcia. Opaski i etykiety z kodami drukują [drukarki dla służby zdrowia](/drukarki-dla-sluzby-zdrowia), a na stałych stanowiskach kody odczytują [skanery dla służby zdrowia](/skanery-dla-sluzby-zdrowia).',
  icon: 'smartphone',
  productIds: [
    'zebra-hc20',
    'zebra-hc25',
    'zebra-hc50',
    'zebra-hc55',
    'honeywell-ct37-hc',
    'datalogic-memor-12-hc',
    'datalogic-memor-17-hc',
    'cipherlab-rs38h',
  ],
  productCount: 8,
}

export const healthcareTerminalContent: SubcategoryRichContent = {
  updatedAt: '2026-10-25',
  sectionHeadings: {
    technicalDeepDive: 'Obudowa, czyszczenie i ładowanie',
    useCases: 'Zastosowania w placówce',
    comparisons: 'Porównanie modeli',
    howToSteps: 'Jak wybrać terminal dla służby zdrowia?',
  },
  definition: {
    heading: 'Czym różni się terminal dla służby zdrowia od zwykłego terminala mobilnego?',
    content: 'Terminal dla służby zdrowia, nazywany też terminalem medycznym lub komputerem mobilnym dla szpitala, ma przede wszystkim obudowę przygotowaną do częstej dezynfekcji. Wszyscy czterej producenci tej kategorii opisują obudowy swoich modeli jako przygotowane do dezynfekcji, ale podają różne zakresy środków. Zebra wykonuje HC20, HC25, HC50 i HC55 z tworzyw przeznaczonych dla ochrony zdrowia, dopuszczonych do ponad 30 chusteczek i środków dezynfekcyjnych, a port USB-C zamyka zaślepką. Honeywell przygotował obudowę i złącza CT37 HC do czyszczenia 46 dopuszczonymi środkami. Datalogic publikuje dla Memor 12 HC i Memor 17 HC listę środków, która obejmuje terminal, osłonę i ładowarki. CipherLab przetestował RS38H z ponad 24 środkami czyszczącymi, w tym z alkoholem izopropylowym, oraz ze sterylizacją światłem UV-C.\n\nPozostałe cechy zależą od producenta. Czerwony przycisk alarmowy w obudowie mają terminale Zebra HC2X/HC5X i CipherLab RS38H. W Datalogic Memor 12 HC i 17 HC wezwanie alarmowe uruchamia się przyciskiem programowalnym albo gestem, a Honeywell CT37 HC ma przycisk PTT. Skaner Zebra SE4720 ma białe oświetlenie i zielony celownik LED, Datalogic Memor HC potwierdza odczyt zielonym punktem Green Spot, a Honeywell CT37 HC ma silnik N6700 do małych etykiet na opaskach i lekach.',
  },
  comparisonTable: {
    heading: 'Porównanie terminali dla służby zdrowia',
    intro: 'Podstawowe parametry modeli według kart katalogowych producentów. Konfiguracje, pamięć i numery PN opisują karty produktów.',
    columns: ['Łączność', 'Skaner', 'Obudowa i czyszczenie', 'Alarm', 'Bateria i ładowanie'],
    rows: [
      { model: 'Zebra HC20', href: '/produkt/zebra-hc20', role: 'Wi-Fi, 6 GB / 64 GB, aparat tylny 16 MP', cells: ['Wi-Fi 6 (Wi-Fi 6E z licencją Zebra DNA Enterprise)', 'SE4720, białe oświetlenie, zielony celownik', 'Przygotowana do dezynfekcji, tworzywa dla ochrony zdrowia; ponad 30 środków; zaślepka USB-C', 'Czerwony przycisk alarmowy', '3800 mAh, wymienna; ładowanie dowolnym przewodem USB-C'] },
      { model: 'Zebra HC25', href: '/produkt/zebra-hc25', role: 'Wi-Fi i sieć komórkowa, 6 GB / 64 GB', cells: ['5G, Wi-Fi 6 (Wi-Fi 6E z licencją Zebra DNA Enterprise); nano SIM i eSIM', 'SE4720, białe oświetlenie, zielony celownik', 'Przygotowana do dezynfekcji, tworzywa dla ochrony zdrowia; ponad 30 środków; zaślepka USB-C', 'Czerwony przycisk alarmowy', '3800 mAh, wymienna; ładowanie dowolnym przewodem USB-C'] },
      { model: 'Zebra HC50', href: '/produkt/zebra-hc50', role: 'Wi-Fi, 8 GB / 128 GB, aparat przedni 5 MP', cells: ['Wi-Fi 6E', 'SE4720, białe oświetlenie, zielony celownik', 'Przygotowana do dezynfekcji, tworzywa dla ochrony zdrowia; ponad 30 środków; zaślepka USB-C', 'Czerwony przycisk alarmowy', '3800 mAh, wymiana bez wyłączania (true hot swap)'] },
      { model: 'Zebra HC55', href: '/produkt/zebra-hc55', role: 'Wi-Fi i sieć komórkowa, 8 GB / 128 GB, aparat przedni 5 MP', cells: ['5G, Wi-Fi 6E; nano SIM i eSIM', 'SE4720, białe oświetlenie, zielony celownik', 'Przygotowana do dezynfekcji, tworzywa dla ochrony zdrowia; ponad 30 środków; zaślepka USB-C', 'Czerwony przycisk alarmowy', '3800 mAh, wymiana bez wyłączania (true hot swap)'] },
      { model: 'Honeywell CT37 HC', href: '/produkt/honeywell-ct37-hc', role: 'Wersje Wi-Fi albo 5G, 8 GB / 128 GB, przycisk PTT', cells: ['Wi-Fi 6E albo 5G i Wi-Fi 6E (zależnie od PN)', 'Honeywell N6700', 'Obudowa i złącza przygotowane do dezynfekcji; 46 dopuszczonych środków', '—', '3846 mAh, hot swap; Quick Charge 4.0'] },
      { model: 'Datalogic Memor 12 HC', href: '/produkt/datalogic-memor-12-hc', role: 'Wi-Fi, ładowanie bezprzewodowe', cells: ['Wi-Fi 6E', 'Halogen DE2121-DL, Green Spot', 'Przygotowana do dezynfekcji; lista środków dla terminala, osłony i ładowarek', 'Przycisk programowalny lub gest; klips z czerwonym przyciskiem (akcesorium)', '4000 mAh, wymienna; ładowanie bezprzewodowe Qi'] },
      { model: 'Datalogic Memor 17 HC', href: '/produkt/datalogic-memor-17-hc', role: 'Wi-Fi i 5G, ładowanie bezprzewodowe', cells: ['5G, Wi-Fi 6E', 'Halogen DE2121-DL, Green Spot', 'Przygotowana do dezynfekcji; lista środków dla terminala, osłony i ładowarek', 'Przycisk programowalny lub gest; klips z czerwonym przyciskiem (akcesorium)', '4000 mAh, wymienna, SafeSwap w wersji 6 GB / 128 GB; ładowanie bezprzewodowe Qi'] },
      { model: 'CipherLab RS38H', href: '/produkt/cipherlab-rs38h', role: '5G, 8 GB / 128 GB, aparat tylny 16 MP', cells: ['5G, Wi-Fi 6E; nano SIM i eSIM', 'SE4720, zielony celownik LED', 'Obudowa i złącza przygotowane do dezynfekcji; testy z ponad 24 środkami i światłem UV-C; zaślepka USB-C', 'Czerwony przycisk SOS', '4500 mAh, hot swap'] },
    ],
    note: 'Wszystkie modele mają ekran dotykowy 6", NFC, aparat tylny, szczelność IP65 i IP68 oraz roczną gwarancję producenta. „—” oznacza, że karta katalogowa nie wymienia przycisku alarmowego. W Zebra HC20 i HC25 funkcja Workstation Connect wymaga licencji Zebra DNA Enterprise.',
  },
  buyingGuide: {
    heading: 'Jak wybrać terminal do szpitala?',
    items: [
      'Wi-Fi czy 5G — terminal tylko z Wi-Fi (Zebra HC20 i HC50, Honeywell CT37 HC w wersji WLAN, Datalogic Memor 12 HC) wystarcza personelowi, który pracuje w budynku z siecią bezprzewodową. Wersja z 5G (Zebra HC25 i HC55, Honeywell CT37 HC w wersji WWAN, Datalogic Memor 17 HC, CipherLab RS38H) zachowuje łączność przy wizytach domowych, w transporcie pacjentów i między budynkami.',
      'Ekran — wszystkie modele mają ekran 6". Jasność wynosi 450 nitów w Zebra HC2X/HC5X i Datalogic Memor HC, 600 nitów w Honeywell CT37 HC i 630 nitów w CipherLab RS38H. Ekrany obsługuje się także w cienkich rękawiczkach.',
      'Przycisk alarmowy — czerwony przycisk w obudowie mają Zebra HC20, HC25, HC50, HC55 i CipherLab RS38H. Zebra stosuje sekwencję uruchomienia, która ogranicza fałszywe alarmy. W Datalogic Memor 12 HC i 17 HC alarm uruchamia przycisk programowalny lub gest, a do obu modeli jest klips z czerwonym przyciskiem 94ACC0411.',
      'Wymiana baterii — bez wyłączania terminala baterię wymienia się w Zebra HC50 i HC55 (do 60 s pracy bez baterii), Honeywell CT37 HC i CipherLab RS38H. W Zebra HC20 i HC25 bateria też jest wymienna, ale bez tej funkcji. Datalogic ma funkcję SafeSwap tylko w Memor 17 HC 6 GB / 128 GB.',
      'Ładowanie — Datalogic Memor 12 HC i 17 HC ładują się bezprzewodowo w stacjach bez odsłoniętych styków, co ułatwia ich czyszczenie. Pozostałe modele ładuje się w stacjach albo przewodem USB-C.',
      'Akcesoria — producenci oferują osobne wersje akcesoriów dla ochrony zdrowia: stacje, ładowarki baterii, paski na dłoń i klipsy. Zebra stosuje jeden zestaw akcesoriów dla HC20, HC25, HC50 i HC55. Przy terminalach Honeywell trzeba sprawdzić, czy akcesorium pasuje do wersji HC, bo nie każde akcesorium CT37 jest z nią zgodne.',
      'Praca przy biurku — terminal może zastąpić komputer na stanowisku pielęgniarskim. Zebra oferuje stację Connect Cradle z funkcją Workstation Connect, CipherLab — stację Workstation Connect, która przenosi obraz RS38H na monitor wózka, a Honeywell — stację CT37 z wyjściem HDMI i portem Ethernet.',
    ],
  },
  expertAuthority: 'TAKMA jest partnerem kilku producentów terminali mobilnych. Pomagamy dobrać terminal dla służby zdrowia razem ze stacjami, bateriami, skanerami i drukarkami opasek. Na początku ustalamy, gdzie personel będzie pracować, czy potrzebna jest sieć komórkowa, z jakim systemem szpitalnym terminal ma współpracować i jakimi środkami placówka dezynfekuje sprzęt.',
  technicalDeepDive: 'Obudowa przygotowana do dezynfekcji wytrzymuje regularne przecieranie środkami stosowanymi w placówce. Każdy producent określa, jakie środki są dopuszczone dla danego modelu. Zebra udostępnia dla HC2X/HC5X osobny dokument z wykazem zatwierdzonych środków i zasadami czyszczenia. Honeywell dopuszcza do czyszczenia CT37 HC 46 środków. Datalogic wymienia w karcie Memor 12-17 HC m.in. Sani-Cloth HB, Sani-Cloth Plus, Super Sani-Cloth, 70% alkohol izopropylowy, CaviWipes, Virex 256 i 0,8% roztwór podchlorynu sodu, a lista obejmuje terminal, osłonę i ładowarki. CipherLab podaje dla RS38H testy z ponad 24 środkami, w tym z alkoholem izopropylowym i medycznym, ale nie publikuje pełnej listy.\n\nOdsłonięte złącza i szczeliny utrudniają czyszczenie. Zebra i CipherLab zamykają port USB-C zaślepką. Datalogic stosuje w Memor 12 HC i 17 HC ładowanie bezprzewodowe Qi, więc stacje HC nie mają odsłoniętych styków. Honeywell opisuje jako przygotowane do dezynfekcji także złącza CT37 HC.\n\nTerminale wytrzymują upadki na beton według MIL-STD-810H: Zebra HC2X/HC5X z 1,25 m, Datalogic Memor 12 HC i 17 HC z 1,3 m (z osłoną z 1,5 m), CipherLab RS38H z 1,5 m (z osłoną z 1,8 m), a Honeywell CT37 HC z 1,8 m (z osłoną z 2,1 m) w temperaturze pokojowej.',
  useCases: [
    { title: 'Podawanie leków przy łóżku', description: 'Odczyt kodu z opaski pacjenta i z opakowania leku, a potem zapis podania w systemie szpitalnym bez odchodzenia od łóżka.' },
    { title: 'Pobieranie i śledzenie próbek', description: 'Identyfikacja pacjenta przed pobraniem, odczyt kodów na probówkach oraz kontrola próbek w drodze do laboratorium.' },
    { title: 'Komunikacja personelu', description: 'Rozmowy przez Wi-Fi lub sieć komórkową, PTT i wiadomości. Zebra HC2X/HC5X może pracować jako telefon centrali PBX z oprogramowaniem Workcloud Communication.' },
    { title: 'Dokumentacja zdjęciowa', description: 'Zdjęcia ran i stanu pacjenta aparatem tylnym. CipherLab RS38H z Pic\'n Fill OCR przepisuje też odczyty ciśnienia i poziomu cukru z ekranów monitorów.' },
    { title: 'Opieka domowa i transport pacjentów', description: 'Dostęp do dokumentacji poza szpitalem przez sieć 5G w Zebra HC25 i HC55, Honeywell CT37 HC w wersji WWAN, Datalogic Memor 17 HC i CipherLab RS38H.' },
    { title: 'Sprzęt i materiały medyczne', description: 'Odczyt kodów UDI wyrobów medycznych, inwentaryzacja materiałów i kontrola sprzętu na oddziale.' },
  ],
  uniqueInsights: {
    heading: 'Co sprawdzić przed wdrożeniem?',
    items: [
      { title: 'Środki dezynfekcyjne placówki', text: 'Należy porównać środki stosowane na oddziale z listą producenta dla wybranego modelu i dla jego akcesoriów, np. osłony i stacji.' },
      { title: 'Akcesoria w wersji HC', text: 'Stacje, ładowarki, paski i klipsy dla ochrony zdrowia mają osobne numery PN. Wersje do terminali w osłonie i bez osłony mogą się różnić.' },
      { title: 'Licencje i oprogramowanie', text: 'Część funkcji wymaga licencji lub aplikacji producenta, np. Workstation Connect w Zebra HC20 i HC25 albo rozmowy PTT i PBX przez Workcloud Communication.' },
    ],
  },
  comparisons: [
    {
      title: 'Zebra HC20 czy HC50?',
      verdict: 'HC20 do podstawowych zadań, HC50 do pracy z większą liczbą aplikacji, wideorozmów i wymiany baterii bez wyłączania.',
      content: 'Oba terminale mają ekran 6", skaner SE4720 i czerwony przycisk alarmowy. [Zebra HC20](/produkt/zebra-hc20) ma 6 GB RAM i 64 GB pamięci flash oraz Wi-Fi 6, a Wi-Fi 6E po zakupie licencji Zebra DNA Enterprise. [Zebra HC50](/produkt/zebra-hc50) ma 8 GB RAM, 128 GB pamięci flash, Wi-Fi 6E, przedni aparat 5 MP do wideokonsultacji i wymianę baterii bez wyłączania. W HC50 pakiet Zebra DNA Enterprise jest wstępnie zainstalowany i licencjonowany.',
    },
    {
      title: 'Wi-Fi czy 5G w terminalu dla szpitala?',
      content: 'Wersja z Wi-Fi, np. [Zebra HC50](/produkt/zebra-hc50) albo [Datalogic Memor 12 HC](/produkt/datalogic-memor-12-hc), pracuje w sieci bezprzewodowej placówki. Wersja z 5G, np. [Zebra HC55](/produkt/zebra-hc55), [Datalogic Memor 17 HC](/produkt/datalogic-memor-17-hc) albo [CipherLab RS38H](/produkt/cipherlab-rs38h), ma też kartę nano SIM i eSIM, więc działa poza budynkiem, na przykład w opiece domowej. Modele z 5G obsługują również prywatne sieci LTE i 5G.',
    },
    {
      title: 'Honeywell CT37 HC, Datalogic Memor 17 HC czy CipherLab RS38H?',
      content: 'Wszystkie trzy mają ekran 6", Wi-Fi 6E i wersje z 5G. [Honeywell CT37 HC](/produkt/honeywell-ct37-hc) ma ekran 600 nitów w rozdzielczości 2280 × 1080, silnik N6700, przycisk PTT i baterię 3846 mAh z hot swap. [Datalogic Memor 17 HC](/produkt/datalogic-memor-17-hc) ma silnik Halogen z Green Spot, baterię 4000 mAh i ładowanie bezprzewodowe Qi. [CipherLab RS38H](/produkt/cipherlab-rs38h) ma czerwony przycisk SOS, skaner SE4720, ekran 630 nitów i baterię 4500 mAh z hot swap.',
    },
  ],
  faq: [
    {
      question: 'Co wyróżnia terminal dla służby zdrowia na tle zwykłego terminala mobilnego?',
      answer: 'Przede wszystkim obudowa przygotowana do częstej dezynfekcji środkami dopuszczonymi przez producenta. Zależnie od modelu terminal ma też czerwony przycisk alarmowy (Zebra HC2X/HC5X, CipherLab RS38H), zaślepkę portu USB-C, skaner z zielonym celownikiem lub potwierdzeniem Green Spot oraz osobną linię akcesoriów dla ochrony zdrowia. Szczegóły każdego modelu podaje jego karta produktu.',
    },
    {
      question: 'Jakimi środkami można dezynfekować terminal?',
      answer: 'Tylko środkami z listy producenta dla danego modelu. Zebra dopuszcza dla HC2X/HC5X ponad 30 chusteczek i środków dezynfekcyjnych, a Honeywell dla CT37 HC — 46 środków. Datalogic wymienia dla Memor 12 HC i 17 HC m.in. 70% alkohol izopropylowy, Sani-Cloth Plus, CaviWipes i 0,8% roztwór podchlorynu sodu. CipherLab przetestował RS38H z ponad 24 środkami, w tym z alkoholem izopropylowym i medycznym, oraz ze światłem UV-C.',
    },
    {
      question: 'Który terminal ma przycisk alarmowy?',
      answer: 'Czerwony przycisk alarmowy w obudowie mają [Zebra HC20](/produkt/zebra-hc20), [HC25](/produkt/zebra-hc25), [HC50](/produkt/zebra-hc50) i [HC55](/produkt/zebra-hc55) oraz [CipherLab RS38H](/produkt/cipherlab-rs38h). Przycisk można zaprogramować, np. do wybrania numeru albo uruchomienia aplikacji. W [Datalogic Memor 12 HC](/produkt/datalogic-memor-12-hc) i [Memor 17 HC](/produkt/datalogic-memor-17-hc) wezwanie alarmowe uruchamia się przyciskiem programowalnym albo gestem.',
    },
    {
      question: 'Czy terminal czyta kody z opasek pacjentów?',
      answer: 'Tak. Wszystkie terminale w tej kategorii mają wbudowany skaner kodów 1D i 2D, który odczytuje kody z opasek identyfikacyjnych, etykiet leków i probówek. Przed wdrożeniem warto sprawdzić odczyt na opaskach stosowanych w placówce. Opaski są w dziale [opaski identyfikacyjne](/opaski-identyfikacyjne), a drukarki do nich — wśród [drukarek dla służby zdrowia](/drukarki-dla-sluzby-zdrowia).',
    },
    {
      question: 'Czy baterię można wymienić bez wyłączania terminala?',
      answer: 'Tak, w Zebra HC50 i HC55, Honeywell CT37 HC i CipherLab RS38H. Zebra HC50 i HC55 działają do 60 s bez baterii. W Honeywell CT37 HC poniżej −10°C baterię wymienia się w trybie warm swap. W Zebra HC20 i HC25 bateria jest wymienna, ale bez tej funkcji, a w Datalogic funkcję SafeSwap ma Memor 17 HC 6 GB / 128 GB.',
    },
    {
      question: 'Czy terminal może zastąpić telefon na oddziale?',
      answer: 'Terminale z tej kategorii obsługują rozmowy przez Wi-Fi, a wersje z 5G także przez sieć komórkową. Zebra HC2X/HC5X po instalacji Workcloud Communication obsługuje rozmowy PTT i może pracować jako telefon centrali PBX. Honeywell CT37 HC i Datalogic Memor HC mają przycisk PTT. Sposób połączenia z centralą telefoniczną placówki warto ustalić z jej dostawcą.',
    },
    {
      question: 'Jaką gwarancję mają terminale dla służby zdrowia?',
      answer: 'Zebra, Honeywell, Datalogic i CipherLab dają na te terminale roczną gwarancję producenta. Zebra oferuje dodatkowo kontrakty serwisowe Zebra OneCare: Special Value dla HC20 i HC25 oraz Essential i Select dla HC50 i HC55.',
    },
    {
      question: 'Gdzie są skanery i drukarki dla placówek medycznych?',
      answer: 'Ręczne skanery kodów na stałe stanowiska są na stronie [skanery dla służby zdrowia](/skanery-dla-sluzby-zdrowia), a drukarki etykiet i opasek — na stronie [drukarki dla służby zdrowia](/drukarki-dla-sluzby-zdrowia). Stacje, baterie i paski do terminali są w dziale [akcesoria do terminali](/akcesoria-do-terminali).',
    },
  ],
  howToSteps: [
    { name: 'Określ miejsce pracy', text: 'Ustal, czy personel będzie pracować tylko w budynku z siecią Wi-Fi, czy także poza nim, np. w opiece domowej albo w transporcie pacjentów.' },
    { name: 'Wybierz łączność i wyposażenie', text: 'Wybierz wersję Wi-Fi albo 5G. Sprawdź, czy potrzebny jest przycisk alarmowy, przedni aparat do wideorozmów i wymiana baterii bez wyłączania.' },
    { name: 'Sprawdź środki dezynfekcyjne', text: 'Porównaj środki stosowane w placówce z listą producenta dla terminala i jego akcesoriów.' },
    { name: 'Dobierz akcesoria i przetestuj', text: 'Wybierz stacje, baterie, paski i klipsy w wersji dla ochrony zdrowia. Potem sprawdź odczyt kodów z opasek, leków i probówek oraz pracę z systemem szpitalnym.' },
  ],
}
