// ============================================
// BRAND PILLAR PAGE CONTENT
// ============================================

export interface CategoryTile {
  categoryId: string
  name: string
  href: string
  description: string
}

export interface BrandPillarData {
  heroText: string
  categoryTiles: CategoryTile[]
  featuredSlugs: string[]
  technologies: { name: string; badge: string; description: string }[]
  industries: { name: string; description: string; products: string }[]
  timeline: { year: string; event: string }[]
  aboutParagraphs: string[]
  partnership: string[]
  service: string[]
  comparisonIntro: string
  comparison: { aspect: string; zebra: string; honeywell: string; datalogic: string }[]
  whyBuyItems: { title: string; text: string }[]
  faq: { question: string; answer: string }[]
  guideLinks: { title: string; href: string }[]
}

export const brandPillarContent: Record<string, BrandPillarData> = {
  zebra: {
    heroText: 'Drukarki etykiet, terminale mobilne, skanery kodów kreskowych, tablety przemysłowe, materiały eksploatacyjne i akcesoria — pełna oferta Zebra Technologies z cenami netto i dostawą z magazynu w Polsce.',

    categoryTiles: [
      {
        categoryId: 'drukarki-etykiet',
        name: 'Drukarki etykiet',
        href: '/drukarki-etykiet-zebra',
        description: 'Biurkowe ZD, przemysłowe ZT, mobilne ZQ. Od 576 zł netto.',
      },
      {
        categoryId: 'terminale-mobilne',
        name: 'Terminale mobilne',
        href: '/terminale-mobilne-zebra',
        description: 'Serie TC i MC z Androidem. Wi-Fi 6E, IP65–IP68.',
      },
      {
        categoryId: 'skanery-kodow-kreskowych',
        name: 'Skanery kodów',
        href: '/skanery-kodow-kreskowych-zebra',
        description: 'Ręczne, bezprzewodowe, prezentacyjne. Od 181 zł netto.',
      },
      {
        categoryId: 'tablety-przemyslowe',
        name: 'Tablety przemysłowe',
        href: '/tablety-przemyslowe',
        description: 'Seria ET: 8″ i 10″. Android i Windows. IP65/IP66.',
      },
      {
        categoryId: 'drukarki-kart',
        name: 'Drukarki kart',
        href: '/drukarki-kart',
        description: 'Seria ZC — druk kart plastikowych i identyfikatorów.',
      },
      {
        categoryId: 'materialy-eksploatacyjne',
        name: 'Materiały eksploatacyjne',
        href: '/materialy-eksploatacyjne',
        description: 'Etykiety termiczne i termotransferowe, taśmy barwiące.',
      },
    ],

    featuredSlugs: [
      'zebra-zd421t',
      'zebra-zt231',
      'zebra-zq511',
      'zebra-tc22',
      'zebra-mc3400',
      'zebra-ds2208',
      'zebra-ds4608',
      'zebra-et40',
    ],

    // ────────────────────────────────
    // TECHNOLOGIE
    // ────────────────────────────────
    technologies: [
      {
        name: 'Mobility DNA',
        badge: 'Terminale',
        description: 'Ponad 30 narzędzi software zamieniających Androida w system klasy enterprise. DataWedge (skanowanie bez pisania kodu), StageNow (masowe wdrażanie przez QR), LifeGuard (patche bezpieczeństwa przez 5–10 lat), Enterprise Browser, Device Tracker, RxLogger. Każde rozwiązuje konkretny problem IT w magazynie, sklepie czy na linii produkcyjnej.',
      },
      {
        name: 'Link-OS / Print DNA',
        badge: 'Drukarki',
        description: 'System operacyjny wbudowany w każdą drukarkę Zebra. Zdalna aktualizacja firmware, monitoring stanu drukarki, konfiguracja przez przeglądarkę — nawet z drugiego końca Polski. Print Touch (parowanie NFC smartfonem), Profile Manager Enterprise (zarządzanie 1000 drukarek z jednej konsoli), PrintSecure (szyfrowanie i kontrola dostępu).',
      },
      {
        name: 'DataWedge',
        badge: 'Skanowanie',
        description: 'Wbudowany w każdy terminal i skaner Zebra. Przechwytuje dane ze skanera i wkleja do dowolnej aplikacji — jak input z klawiatury. Nie musisz pisać ani linijki kodu. Działa z SAP, Oracle, aplikacjami webowymi, Comarch WMS i własnymi programami. Profile konfiguracyjne, filtrowanie danych, formatowanie kodów.',
      },
      {
        name: 'LifeGuard for Android',
        badge: 'Bezpieczeństwo',
        description: 'Comiesięczne patche bezpieczeństwa Android, dostarczane OTA (Over The Air) przez cały cykl życia terminala. To nie obietnica — Zebra publikuje harmonogram aktualizacji dla każdego modelu. Terminal kupiony w 2026 roku będzie bezpieczny w 2034. Najdłuższe wsparcie w branży.',
      },
      {
        name: 'StageNow',
        badge: 'Wdrożenie',
        description: 'Nowy terminal z pudełka? Skanujesz jeden kod QR — urządzenie samo konfiguruje Wi-Fi, instaluje aplikacje, ustawia zabezpieczenia. Wdrożenie 100 terminali w jeden dzień, bez IT na hali. Od wersji 5.0: Smart Profiles z automatyczną detekcją wymaganego OS.',
      },
      {
        name: 'Device Tracker',
        badge: 'Lokalizacja',
        description: 'Znajduje zgubione terminale na magazynie — nawet gdy są wyłączone (przez BLE). Raporty aktywności: kto ostatnio używał urządzenia, gdzie je zostawił. Automatyczne alarmy (dźwięk, wibracja, LED). Przy flocie 100+ terminali to realna oszczędność — każdy zgubiony terminal to 2 000–8 000 zł.',
      },
    ],

    // ────────────────────────────────
    // BRANŻE
    // ────────────────────────────────
    industries: [
      {
        name: 'Magazyn i logistyka',
        description: 'Klawiatura fizyczna i uchwyt pistoletowy — bo w rękawicach ekran dotykowy nie wystarczy. Skanowanie dalekiego zasięgu na regały do 20 m. Drukarki przemysłowe do etykiet wysyłkowych 24/7.',
        products: '[MC3400](/produkt/zebra-mc3400), [MC9400](/produkt/zebra-mc9400), [ZT411](/produkt/zebra-zt411), [ZQ521](/produkt/zebra-zq521)',
      },
      {
        name: 'Retail i e-commerce',
        description: 'Cienkie, lekkie terminale do kieszeni fartucha. Skanery na kasie z gwarancją 5 lat. Drukarki biurkowe do etykiet cenowych i wysyłkowych. Workcloud do zarządzania zadaniami na hali.',
        products: '[TC22](/produkt/zebra-tc22), [DS2208](/produkt/zebra-ds2208), [DS9308](/produkt/zebra-ds9308), [ZD421t](/produkt/zebra-zd421t)',
      },
      {
        name: 'Produkcja',
        description: 'Terminale na linię produkcyjną do skanowania WIP i kontroli jakości. Drukarki przemysłowe do ciągłego druku etykiet. Skanery IP67 — czytają nawet uszkodzone i brudne kody.',
        products: '[MC3400](/produkt/zebra-mc3400), [ZT610](/produkt/zebra-zt610), [DS3608-SR](/produkt/zebra-ds3608-sr)',
      },
      {
        name: 'Ochrona zdrowia',
        description: 'Obudowy odporne na dezynfekcję, plastik medyczny klasy IEC 60601-1. Drukarki opasek identyfikacyjnych z systemem kartridżowym. Druk przy łóżku pacjenta.',
        products: '[ZD510-HC](/produkt/zebra-zd510-hc), [ZQ620 Plus](/produkt/zebra-zq620-plus), [DS2208](/produkt/zebra-ds2208)',
      },
      {
        name: 'Transport i serwis terenowy',
        description: 'Drukarki mobilne na pasku kuriera — druk paragonów i etykiet w terenie. Terminale z 5G/LTE dla serwisantów i kierowców. Od pieszych kurierów po flotę TIR-ów.',
        products: '[TC27](/produkt/zebra-tc27), [ZQ521](/produkt/zebra-zq521), [ZQ320 Plus](/produkt/zebra-zq320-plus)',
      },
    ],

    // ────────────────────────────────
    // TIMELINE
    // ────────────────────────────────
    timeline: [
      { year: '1969', event: 'Ed Kaplan i Gerhard Cless zakładają Data Specialties w Chicago. Każdy włożył 500 dolarów. Produkcja urządzeń elektromechanicznych — po godzinach, na poddaszu.' },
      { year: '1982', event: 'Pierwsza drukarka kodów kreskowych o nazwie „The Zebra" — zaprezentowana na targach w Dallas. Firma zmienia kierunek na druk etykiet on-demand.' },
      { year: '1986', event: 'Zmiana nazwy na Zebra Technologies Corporation. Wprowadzenie druku termotransferowego — technologii, która do dziś dominuje rynek.' },
      { year: '1991', event: 'IPO na giełdzie NASDAQ (ticker: ZBRA). Cena emisyjna: 15,50 USD za akcję. Przychody roku: 45,6 mln USD, ok. 200 pracowników.' },
      { year: '1998', event: 'Fuzja z Eltron International — wejście w segment drukarek biurkowych desktop.' },
      { year: '2007', event: 'Anders Gustafsson zostaje CEO. Pełni tę funkcję do dziś — tylko dwóch CEO w 55+ lat historii firmy.' },
      { year: '2014', event: 'Przejęcie działu Enterprise od Motorola Solutions za 3,45 mld USD. Portfolio rośnie o terminale mobilne (serie TC, MC), skanery kodów i tablety przemysłowe. 4 500 pracowników Motoroli przechodzi do Zebry.' },
      { year: '2021', event: 'Przejęcie Fetch Robotics za 290 mln USD (roboty AMR do magazynów) i Adaptive Vision (machine vision). Przychody: 5,63 mld USD — rekord.' },
      { year: '2024', event: 'Przychody: 4,98 mld USD. 9 900 pracowników w 54 krajach. Siedziba w Lincolnshire, Illinois.' },
    ],

    // ────────────────────────────────
    // O FIRMIE
    // ────────────────────────────────
    aboutParagraphs: [
      'Zebra Technologies to amerykański producent urządzeń Auto-ID z siedzibą w Lincolnshire pod Chicago. Firma działa od 1969 roku — zaczynała od urządzeń elektromechanicznych, w 1982 roku pokazała pierwszą drukarkę kodów kreskowych, a od 2014 roku (po przejęciu działu Enterprise od Motorola Solutions za 3,45 mld USD) jest też producentem terminali mobilnych, skanerów kodów i tabletów przemysłowych.',
      'Dziś Zebra to lider rynku drukarek etykiet na świecie i jeden z dwóch największych producentów terminali enterprise (obok Honeywell). 9 900 pracowników, 54 kraje, przychody blisko 5 mld USD. W Polsce urządzenia Zebra pracują w centrach logistycznych, sieciach handlowych (Żabka, Biedronka), na liniach produkcyjnych, w szpitalach i u kurierów.',
      'TAKMA jest autoryzowanym [Premier Solution Partner Zebra Technologies](https://www.zebra.com/pl/pl/partners/partner-application-locator/partner-details.html?id=001i0000019OwOUAA0&viewType=nav) — najwyższy poziom w programie PartnerConnect. Widniejemy w oficjalnym rejestrze partnerów na zebra.com. Serwis gwarancyjny i pogwarancyjny drukarek, terminali i skanerów Zebra realizujemy we współpracy z [serwis-zebry.pl](https://www.serwis-zebry.pl) — autoryzowanym centrum serwisowym z zapleczem części zamiennych.',
    ],

    // ────────────────────────────────
    // PARTNERSTWO
    // ────────────────────────────────
    partnership: [
      'Premier Solution Partner to najwyższy poziom w programie [Zebra PartnerConnect](https://www.zebra.com/us/en/partners/partnerconnect.html) w ścieżce Solution Partner. Wymaga minimum 1,5 mln USD rocznej sprzedaży produktów Zebra i co najmniej 30% przychodów z usług wdrożeniowych — nie wystarczy tylko odsprzedawać hardware. Na całą Polskę jest kilkunastu partnerów na tym poziomie.',
      'Co to daje klientowi? Bezpośredni kontakt TAKMA z działem technicznym Zebra w przypadku złożonych wdrożeń. Priorytetowy dostęp do nowych produktów i programów pilotażowych. Oficjalny serwis z częściami zamiennymi producenta przez [serwis-zebry.pl](https://www.serwis-zebry.pl). Wpis w [lokalizatorze partnerów](https://www.zebra.com/pl/pl/partners/partner-application-locator/partner-details.html?id=001i0000019OwOUAA0&viewType=nav) — można nas znaleźć wpisując „Wrocław" lub „Polska".',
    ],

    // ────────────────────────────────
    // SERWIS
    // ────────────────────────────────
    service: [
      'Serwis urządzeń Zebra realizujemy we współpracy z [serwis-zebry.pl](https://www.serwis-zebry.pl) — autoryzowanym centrum serwisowym z zapleczem części zamiennych. Naprawy drukarek (głowice, wałki, moduły sieciowe), terminali (ekrany, baterie, porty ładowania), skanerów (okna skanujące, kable, podstawki). Czas naprawy: 3–5 dni roboczych. Odbiór i dostawa kurierem w całej Polsce.',
      'Dla terminali i drukarek dostępne są kontrakty [Zebra OneCare](/poradnik/jak-wybrac-terminal-mobilny) — rozszerzona gwarancja producenta z naprawą uszkodzeń przypadkowych (rozbity ekran, pęknięta obudowa, zalanie). Warianty: Essential (naprawa 3 dni), Select (priorytet), Premier (next-day replacement). Kontrakty od 1 do 5 lat — wykupujesz w ciągu 30 dni od zakupu urządzenia. Ceny OneCare widoczne na kartach produktów.',
    ],

    // ────────────────────────────────
    // PORÓWNANIE
    // ────────────────────────────────
    comparisonIntro: 'Zebra, Honeywell i Datalogic to trzy największe marki urządzeń Auto-ID dostępne w Polsce. Każda ma swoje mocne strony — wybór zależy od zastosowania, budżetu i istniejącej infrastruktury.',
    comparison: [
      { aspect: 'Drukarki etykiet', zebra: 'Lider rynku — ZD, ZT, ZQ. Najszersza gama.', honeywell: 'PC45, PD45, PM45, PX940. Emulacja ZPL.', datalogic: 'Brak w ofercie.' },
      { aspect: 'Terminale mobilne', zebra: 'TC, MC, EM — najszersza gama enterprise.', honeywell: 'CT, CK — ergonomia, Mobility Edge.', datalogic: 'Memor, Skorpio — najlepsza cena.' },
      { aspect: 'Skanery kodów', zebra: 'DS, LI — prędkość, zasięg do 24 m.', honeywell: 'Voyager, Xenon — modularność.', datalogic: 'QuickScan, Gryphon — best value.' },
      { aspect: 'Ekosystem software', zebra: '30+ narzędzi Mobility DNA / Print DNA.', honeywell: 'Operational Intelligence, Forge.', datalogic: 'Datalogic Mobility Suite.' },
      { aspect: 'Wsparcie Android', zebra: 'LifeGuard — do A19, 8–10 lat.', honeywell: 'Sentinel — 5–7 lat.', datalogic: '3–5 lat.' },
      { aspect: 'Serwis w Polsce', zebra: 'serwis-zebry.pl (autoryzowany).', honeywell: 'Przez dystrybutorów.', datalogic: 'Przez dystrybutorów.' },
      { aspect: 'Pozycja cenowa', zebra: 'Premium.', honeywell: 'Premium.', datalogic: 'Mid-range.' },
    ],

    // ────────────────────────────────
    // DLACZEGO TAKMA
    // ────────────────────────────────
    whyBuyItems: [
      {
        title: 'Autoryzowane partnerstwo',
        text: 'Premier Solution Partner Zebra z oficjalnym wpisem na zebra.com. Nie szary import — pełna gwarancja producenta na każde urządzenie.',
      },
      {
        title: 'Ceny z dystrybucji',
        text: 'Ceny netto aktualizowane codziennie bezpośrednio z hurtowni Ingram Micro i BlueStar. Bez pośredników, bez narzutów.',
      },
      {
        title: 'Serwis w Polsce',
        text: 'Naprawy gwarancyjne i pogwarancyjne przez serwis-zebry.pl. Części zamienne na miejscu, czas naprawy 3–5 dni roboczych.',
      },
      {
        title: 'Konfiguracja i wdrożenie',
        text: 'Staging flotowy, konfiguracja MDM, integracja z WMS/ERP. 25 lat na rynku — znamy te urządzenia od podszewki.',
      },
    ],

    // ────────────────────────────────
    // FAQ (18 pytań)
    // ────────────────────────────────
    faq: [
      {
        question: 'Gdzie kupić urządzenia Zebra w Polsce?',
        answer: 'TAKMA jest autoryzowanym [Premier Solution Partner Zebra Technologies](https://www.zebra.com/pl/pl/partners/partner-application-locator/partner-details.html?id=001i0000019OwOUAA0&viewType=nav) — widniejemy w oficjalnym rejestrze partnerów na zebra.com. Sprzedajemy drukarki etykiet, terminale, skanery, tablety i akcesoria Zebra z cenami netto aktualizowanymi codziennie. Wysyłka z magazynu PL (24h) lub EU (2–3 dni). Siedziba we Wrocławiu.',
      },
      {
        question: 'Ile kosztuje najtańsze urządzenie Zebra?',
        answer: 'Najtańszy produkt Zebra w naszej ofercie to skaner [LI2208](/produkt/zebra-li2208) od 181 zł netto. Najtańsza drukarka etykiet: [ZD220t](/produkt/zebra-zd220t) od 639 zł. Najtańszy terminal: [MC2200](/produkt/zebra-mc2200) od 2 261 zł. Najtańszy tablet: [ET40](/produkt/zebra-et40) od 2 407 zł. Ceny netto, aktualizowane codziennie.',
      },
      {
        question: 'Czym różnią się serie drukarek ZD, ZT i ZQ?',
        answer: 'ZD (np. [ZD421](/produkt/zebra-zd421t), [ZD621](/produkt/zebra-zd621t)) to drukarki biurkowe — kompaktowe, do biura, apteki, e-commerce. ZT (np. [ZT231](/produkt/zebra-zt231), [ZT411](/produkt/zebra-zt411), [ZT610](/produkt/zebra-zt610)) to drukarki przemysłowe — metalowa obudowa, praca 24/7, duże rolki. ZQ (np. [ZQ511](/produkt/zebra-zq511), [ZQ620 Plus](/produkt/zebra-zq620-plus)) to drukarki mobilne — na pasku lub w pojeździe, zasilanie bateryjne, Bluetooth. Szczegóły w [poradniku](/poradnik/jak-wybrac-drukarke-etykiet).',
      },
      {
        question: 'Który terminal Zebra do magazynu?',
        answer: 'Zależy od warunków i budżetu. [MC3400](/produkt/zebra-mc3400) (od 4 561 zł) — klawiatura + uchwyt pistoletowy, Wi-Fi 6E, optymalny do typowego magazynu. [MC9400](/produkt/zebra-mc9400) (od 7 638 zł) — ultra-rugged, chłodnie, porty, upadki z 3 m. [TC22](/produkt/zebra-tc22) (od 2 417 zł) — dotykowy, lekki, dobry do retail i lekkiego magazynu. Porównanie modeli w [poradniku terminali](/poradnik/jak-wybrac-terminal-mobilny).',
      },
      {
        question: 'Jaki skaner Zebra do kasy lub apteki?',
        answer: '[DS2208](/produkt/zebra-ds2208) (od 352 zł) — ręczny imager 2D, USB, gwarancja 5 lat. Czyta kody z ekranów smartfonów. Do apteki lub kasy z dużym ruchem: [DS9308](/produkt/zebra-ds9308) prezentacyjny (hands-free) lub [DS4608](/produkt/zebra-ds4608) z szybszym dekodowaniem. Do magazynu: [DS3678-SR](/produkt/zebra-ds3678-sr) bezprzewodowy, IP67.',
      },
      {
        question: 'Czy urządzenia Zebra mają serwis w Polsce?',
        answer: 'Tak. TAKMA współpracuje z [serwis-zebry.pl](https://www.serwis-zebry.pl) — autoryzowanym centrum serwisowym Zebra. Naprawa drukarek, terminali i skanerów. Części zamienne na miejscu, czas naprawy 3–5 dni roboczych, odbiór kurierem. Dodatkowo dostępne kontrakty Zebra OneCare — rozszerzona gwarancja do 5 lat z naprawą uszkodzeń przypadkowych.',
      },
      {
        question: 'Jak długo Zebra wspiera Android na terminalach?',
        answer: 'Zebra oferuje najdłuższe wsparcie Android w branży. Najnowsze modele ([TC501](/produkt/zebra-tc501), [TC701](/produkt/zebra-tc701)) mają wsparcie do Android 19 — 8–10 lat aktualizacji bezpieczeństwa (program LifeGuard). Starsze modele (TC22, TC53) wspierane do A16–A17. Dla porównania: Honeywell — 5–7 lat, Datalogic — 3–5 lat, Newland — 3 lata.',
      },
      {
        question: 'Czy drukarki Zebra działają z SAP, WMS i ERP?',
        answer: 'Tak, bez wyjątku. Drukarki Zebra obsługują ZPL II i EPL2 (branżowy standard), łączą się przez USB, Ethernet i Wi-Fi. Kompatybilne z SAP EWM, Oracle WMS, Comarch WMS, BaseLinker, Shoper, PrestaShop i każdym systemem wysyłającym etykiety. Platforma Link-OS umożliwia zdalne zarządzanie flotą. TAKMA pomaga w konfiguracji i testach.',
      },
      {
        question: 'Co to jest Zebra OneCare?',
        answer: 'Zebra OneCare to oficjalny program kontraktów serwisowych producenta. Obejmuje naprawę uszkodzeń przypadkowych (rozbity ekran, pęknięta obudowa), wymianę urządzenia i wsparcie techniczne 8×5. Warianty: Essential (naprawa 3 dni), Select (priorytet), Premier (next-day replacement). Kontrakty od 1 do 5 lat. Wykupujesz w ciągu 30 dni od zakupu urządzenia. Ceny OneCare widoczne na kartach produktów w naszym sklepie.',
      },
      {
        question: 'Zebra vs Honeywell — co wybrać?',
        answer: 'Zebra dominuje ekosystemem software (Mobility DNA — 30+ narzędzi, Link-OS, DataWedge) i serwisem w Polsce ([serwis-zebry.pl](https://www.serwis-zebry.pl)). Honeywell wygrywa w wybranych niszach: [PX940](/produkt/honeywell-px940) z wbudowanym weryfikatorem kodów (jedyny na rynku), [PM45](/produkt/honeywell-pm45) z emulacją ZPL. Cenowo porównywalne. Jeśli masz flotę Zebra — zostań przy Zebrze (kompatybilność). Szczegóły: [porównanie terminali](/poradnik/zebra-vs-honeywell-terminale-mobilne), [porównanie drukarek](/poradnik/jak-wybrac-drukarke-etykiet).',
      },
      {
        question: 'Jakie etykiety pasują do drukarek Zebra?',
        answer: 'Do drukarek termicznych (ZD220d, ZD421d): etykiety Z-Select 2000D lub Z-Perform 2000D. Do termotransferowych (ZD421t, ZT231, ZT411): etykiety Z-Perform 1000T / Z-Select 2000T + taśma woskowa 2300 Wax. Do etykiet trwałych (chemia, outdoor, mroźnie): Z-Ultimate 3000T (folia poliester) + taśma żywiczna 5095 Resin. Pełna oferta: [materiały eksploatacyjne](/materialy-eksploatacyjne).',
      },
      {
        question: 'Czy tablety Zebra ET pracują w chłodniach i na mrozie?',
        answer: '[Zebra ET60](/produkt/zebra-et60) i [ET65](/produkt/zebra-et65) działają od -20°C do +50°C z opcją podgrzewanego ekranu. Ekran pojemnościowy reaguje w rękawicach. Bateria hot-swap — wymiana bez wyłączania tabletu. IP66. Do standardowego magazynu wystarczy [ET40](/produkt/zebra-et40) lub [ET45](/produkt/zebra-et45) (IP65, 8 cali, od 2 407 zł).',
      },
      {
        question: 'Co to jest Zebra Mobility DNA?',
        answer: 'Mobility DNA to ekosystem ponad 30 narzędzi software, które zamieniają Androida w system klasy enterprise. Najważniejsze: DataWedge (skanowanie bez kodu), StageNow (masowy staging przez QR), LifeGuard (aktualizacje bezpieczeństwa 5–10 lat), Device Tracker (lokalizacja zgubionych terminali, nawet wyłączonych), Enterprise Browser (przeglądarka z interfejsem minimalizującym błędy), OEMConfig (konfiguracja przez MDM). Mobility DNA jest wbudowane w każdy terminal Zebra — bez dodatkowych opłat.',
      },
      {
        question: 'Czy TAKMA konfiguruje i wdraża urządzenia Zebra?',
        answer: 'Tak. Oferujemy staging flotowy (konfiguracja dziesiątek terminali za pomocą StageNow), konfigurację MDM (SOTI MobiControl, Microsoft Intune, VMware Workspace ONE), integrację skanerów z systemami WMS/ERP, programowanie szablonów etykiet ZPL, oraz szkolenia operatorów. Działamy od 2002 roku — wdrażaliśmy floty od 5 do 500+ urządzeń.',
      },
      {
        question: 'Jak przenieść się z innej marki na Zebra?',
        answer: 'Drukarki: Zebra obsługuje ZPL II i EPL2 — jeśli obecne drukarki (np. TSC, SATO) używają tych języków, migracja jest bezproblemowa. Honeywell obsługuje emulację ZPL (ZSim), więc przejście w obie strony jest łatwe. Terminale: aplikacje Android działają na każdym terminalu — kluczowa jest konfiguracja DataWedge (skanowanie) i MDM. TAKMA pomaga w migracji — doradzamy, testujemy kompatybilność i konfigurujemy nową flotę.',
      },
      {
        question: 'Czy terminale Zebra obsługują RFID?',
        answer: 'Tak. [TC501](/produkt/zebra-tc501) ma czytnik RFID UHF wbudowany w standardzie — pierwszy terminal Zebra z RFID bez dodatkowego modułu. Pozostałe modele ([MC3300x](/produkt/zebra-mc3300x), [MC3400](/produkt/zebra-mc3400)) obsługują RFID przez opcjonalną nakładkę. Do inwentaryzacji RFID na dużą skalę: MC3300xR (terminal + sled RFID). Anteny stacjonarne: [AN440](/produkt/zebra-antena-rfid-an440).',
      },
      {
        question: 'Ile kosztuje kontrakt Zebra OneCare?',
        answer: 'Ceny zależą od kategorii urządzenia i długości kontraktu. Orientacyjne przedziały netto: skanery ręczne — od 100–250 zł/rok. Drukarki biurkowe — od 300–600 zł/rok. Terminale mobilne — od 400–1 500 zł/rok. Drukarki przemysłowe — od 800–2 000 zł/rok. Dokładne ceny OneCare widoczne na kartach produktów w sekcji „Kontrakty serwisowe". Kontrakt można wykupić do 30 dni od zakupu.',
      },
      {
        question: 'Czym różni się Zebra TC22 od TC53?',
        answer: '[TC22](/produkt/zebra-tc22) (od 2 417 zł) to entry-level: ekran 6" HD+, skaner SE4710, Wi-Fi 6, IP68, upadki 1,5 m, wsparcie do A16. [TC53](/produkt/zebra-tc53) (od 6 418 zł) to premium: ekran 6" FHD+, skaner SE55 (szybszy, dalszy zasięg), Wi-Fi 6E, procesor Qualcomm 6490, wsparcie do A17, więcej RAM. TC22 to dobry wybór do retail i lekkiego magazynu. TC53 do wymagających środowisk, gdzie liczy się prędkość skanowania i długi cykl życia.',
      },
    ],

    guideLinks: [
      { title: 'Jak wybrać drukarkę etykiet — poradnik kupującego', href: '/poradnik/jak-wybrac-drukarke-etykiet' },
      { title: 'Drukarki etykiet Zebra — przewodnik po seriach ZD i ZT', href: '/poradnik/drukarki-etykiet-zebra-przewodnik' },
      { title: 'Jak wybrać terminal mobilny — poradnik kupującego', href: '/poradnik/jak-wybrac-terminal-mobilny' },
      { title: 'Zebra vs Honeywell — porównanie terminali mobilnych', href: '/poradnik/zebra-vs-honeywell-terminale-mobilne' },
      { title: 'Top 10 terminali mobilnych 2026 — ranking z cenami', href: '/poradnik/top-10-terminali-mobilnych-2026' },
      { title: 'Drukarka termiczna vs termotransferowa — porównanie', href: '/poradnik/drukarka-termiczna-vs-termotransferowa' },
    ],
  },
}
