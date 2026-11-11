import type { Product } from './products'

// TSC TE210 — biurkowa drukarka etykiet 4" serii TE200 (203 dpi, TT/DT, USB + RS-232 + Ethernet + USB host).
// Fakty: karta katalogowa serii TE200 (TSC EMEA, 30.10.2025) i instrukcja TE200 Series (TSC, 2025).
// Ceny i stany z /api/stock z 11.11.2026. Dokumentacja: docs/catalog/tsc-te210-2026-11-11.md

const te210: Product = {
  id: 'tsc-te210',
  slug: 'tsc-te210',
  name: 'TSC TE210',
  shortDescription: 'TSC TE210 — biurkowa drukarka etykiet 4" serii TE200: termotransfer i druk termiczny, 203 dpi, do 152 mm/s, porty USB, RS-232, Ethernet i USB host, taśma do 300 m.',
  seoTitle: 'TSC TE210 — drukarka etykiet 4", 203 dpi, Ethernet i RS-232',
  seoDescription: 'Drukarka etykiet TSC TE210 4" do termotransferu i druku termicznego: 203 dpi, 152 mm/s, druk do 108 mm, taśma 300 m, porty USB, RS-232, Ethernet i USB host, emulacja ZPL. Drukarka termotransferowa TSC TE210, drukarka biurkowa TE210, TE210 TSC, seria TSC TE200. PN: 99-065A301-00LF00.',
  description: `TSC TE210 to 4-calowa drukarka biurkowa serii TE200. Drukuje etykiety z kodami kreskowymi termotransferowo, przez taśmę barwiącą, albo termicznie, bez taśmy. Typowe wydruki to etykiety półproduktów i wyrobów, etykiety z instrukcjami, etykiety nadawcze, etykiety przyjęcia towaru oraz etykiety cenowe i półkowe. W placówkach medycznych drukuje etykiety identyfikacji pacjenta, etykiety apteczne i etykiety na próbki.

Głowica ma rozdzielczość 203 dpi (8 punktów/mm). Drukarka pracuje z prędkością do 152 mm/s, a pole wydruku ma do 108 mm szerokości. Jedna etykieta może mieć od 5 do 25 400 mm długości. TE210 przyjmuje materiał ciągły, etykiety wycinane, materiał z czarnym znacznikiem lub z wycięciami oraz składankę. Materiał może mieć 20–112 mm szerokości i 0,06–0,19 mm grubości.

W komorze mieści się rolka etykiet o średnicy do 127 mm na gilzie 25,4 mm lub 38 mm. Zewnętrzny uchwyt (opcja) przyjmuje rolkę o średnicy do 214 mm na gilzie 76,2 mm. Taśma barwiąca ma do 300 m długości na gilzie 1" albo do 110 m na gilzie 0,5" i jest nawinięta farbą na zewnątrz. Do druku termotransferowego pasują taśmy woskowe, woskowo-żywiczne i żywiczne o szerokości 40–110 mm.

Z tyłu obudowy są porty USB 2.0, RS-232 i Ethernet 10/100 Mb/s oraz port USB host do skanera lub klawiatury. Wersja 99-065A301-U1LF00 ma dodatkowo wbudowany moduł Bluetooth. TE210 ma 128 MB pamięci Flash, 64 MB SDRAM, zegar czasu rzeczywistego i brzęczyk. Język TSPL-EZD wykonuje polecenia EPL, ZPL, ZPL II i DPL, więc drukarka przyjmuje etykiety przygotowane dla drukarek z tymi językami.

Sterowniki Windows i program BarTender UltraLite są bezpłatne. Program TSC Console służy do konfiguracji drukarki, ustawień sieci i kontroli głowicy funkcją TPH Care. Dealer może zamontować odklejak albo gilotynę do cięcia pełnego i częściowego.`,
  categoryId: 'drukarki-etykiet',
  subcategoryIds: ['biurkowe-drukarki-etykiet', 'termiczne-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'],
  manufacturerId: 'tsc',
  priceFrom: 946.86,
  images: [
    '/images/products/99-065A301-00LF00.png',
    '/images/products/99-065A301-00LF00-2.png',
    '/images/products/99-065A301-00LF00-3.png',
    '/images/products/99-065A301-00LF00-4.png',
  ],
  imageDescriptions: [
    'TSC TE210 — czarna biurkowa drukarka etykiet 4", widok z przodu pod kątem: okienko w pokrywie, przycisk podawania z diodą i dwie etykiety z kodami w szczelinie wydruku',
    'TSC TE210 — otwarta pokrywa: mechanizm taśmy z zielonymi piastami nad rolką etykiet, etykieta wysunięta ze szczeliny',
    'TSC TE210 — uniesiony mechanizm głowicy i taśmy, widoczna ścieżka materiału i rolka etykiet w komorze',
    'TSC TE210 — tył obudowy: włącznik, gniazdo zasilania, porty USB, USB host, RS-232 i Ethernet',
  ],
  tags: ['produkcja', 'logistyka', 'retail'],
  availability: 'available',
  isNew: true,
  isBestseller: false,
  ribbonCoresMm: [25],
  keyParams: {
    rodzajDruku: 'Termotransferowy i termiczny',
    rozdzielczosc: '203 dpi',
    predkoscDruku: 'Do 152 mm/s',
    szerokoscDruku: 'Do 108 mm',
    szerokoscEtykiet: '20–112 mm',
  },
  specifications: [
    { name: 'Typ urządzenia', value: '4-calowa biurkowa drukarka etykiet' },
    { name: 'Metoda druku', value: 'Termotransferowa i termiczna bezpośrednia' },
    { name: 'Rozdzielczość', value: '203 dpi (8 punktów/mm)' },
    { name: 'Prędkość druku', value: 'Do 152 mm/s' },
    { name: 'Szerokość druku', value: 'Do 108 mm' },
    { name: 'Długość etykiety', value: '5–25 400 mm' },
    { name: 'Taśma barwiąca', value: 'Rolka 300 m (średnica do 67 mm, gilza 1") lub 110 m (średnica do 40 mm, gilza 0,5"), farba na zewnątrz; szerokość 40–110 mm' },
    { name: 'Rodzaje taśm', value: 'Woskowe, woskowo-żywiczne, żywiczne' },
    { name: 'Szerokość materiału', value: '20–112 mm' },
    { name: 'Grubość materiału', value: '0,06–0,19 mm' },
    { name: 'Maks. średnica rolki', value: '127 mm' },
    { name: 'Gilza materiału', value: '25,4 mm lub 38 mm (1" lub 1,5")' },
    { name: 'Rodzaje materiałów', value: 'Materiał ciągły, etykiety wycinane, z czarnym znacznikiem, z wycięciami, składanka (nawinięcie na zewnątrz)' },
    { name: 'Przerwa i czarny znacznik', value: 'Przerwa od 2 mm; czarny znacznik od 2 mm wysokości i od 8 mm szerokości' },
    { name: 'Czujniki', value: 'Transmisyjny czujnik przerwy, refleksyjny czujnik czarnego znacznika z regulacją położenia, czujnik końca taśmy, czujnik otwarcia głowicy' },
    { name: 'Panel obsługi', value: 'Włącznik, przycisk podawania i pauzy, dioda LED w trzech kolorach (zielony, bursztynowy, czerwony)' },
    { name: 'Interfejsy', value: 'USB 2.0, RS-232, Ethernet 10/100 Mb/s, USB host (skaner lub klawiatura)' },
    { name: 'Łączność bezprzewodowa', value: 'Bluetooth w wersji 99-065A301-U1LF00 (moduł fabryczny); wersja 99-065A301-00LF00 bez łączności bezprzewodowej' },
    { name: 'Procesor', value: '32-bitowy RISC, 400 MHz' },
    { name: 'Pamięć', value: '128 MB Flash, 64 MB SDRAM' },
    { name: 'Zegar czasu rzeczywistego', value: 'Tak' },
    { name: 'Brzęczyk', value: 'Tak' },
    { name: 'Język drukarki', value: 'TSPL-EZD, zgodny z EPL, ZPL, ZPL II i DPL' },
    { name: 'Czcionki', value: '8 czcionek bitmapowych; silnik TrueType Monotype z czcionką skalowalną CG Triumvirate Bold Condensed; czcionki pobierane z komputera' },
    { name: 'Kody kreskowe 1D', value: 'Code 128UCC, Code 128 (podzbiory A, B, C), EAN-128, Interleaved 2 of 5 (także z cyfrą kontrolną), Code 39 (także z cyfrą kontrolną), Code 93, EAN-13, EAN-8, UPC-A, UPC-E, dodatki 2 i 5 cyfr EAN i UPC, Codabar, POSTNET, MSI (także z cyfrą kontrolną), PLESSEY, China Post, ITF14, Code 11, TELEPEN, TELEPENN, PLANET, Code 49, Deutsche Post Identcode, Deutsche Post Leitcode, LOGMARS' },
    { name: 'Kody kreskowe 2D', value: 'GS1 DataBar, GS1 DataMatrix, MaxiCode, Aztec, PDF417, QR Code, Micro PDF417' },
    { name: 'Obrót czcionek i kodów', value: '0°, 90°, 180°, 270°' },
    { name: 'Zarządzanie', value: 'TSC Console PC, TSC Console Web, aplikacja TSCPRTGo; kontrola głowicy TPH Care' },
    { name: 'Obudowa', value: 'Tworzywo ABS' },
    { name: 'Wymiary (szer. × wys. × gł.)', value: '204 × 164 × 280 mm' },
    { name: 'Waga', value: '2,5 kg' },
    { name: 'Zasilanie', value: 'Zewnętrzny uniwersalny zasilacz impulsowy; wejście 100–240 V AC, 50–60 Hz; wyjście 24 V DC, 2,5 A, 60 W' },
    { name: 'Temperatura pracy', value: '5–40°C, wilgotność 25–85% bez kondensacji' },
    { name: 'Temperatura przechowywania', value: '−40–60°C, wilgotność 10–90% bez kondensacji' },
    { name: 'Certyfikaty', value: 'FCC klasa B, CE klasa B, C-Tick klasa B, UL, cUL, TÜV, CCC, EAC, CoC, BIS, KC, Energy Star' },
    { name: 'Środowisko', value: 'Zgodność z RoHS, REACH i WEEE' },
    { name: 'W zestawie', value: 'Skrócona instrukcja instalacji, przewód zasilający, zewnętrzny zasilacz, przewód USB, 2 trzpienie taśmy 1" do taśmy 300 m, papierowa gilza taśmy 1", trzpień etykiet z 2 zaczepami i 2 adapterami 1,5"' },
    { name: 'Opcje fabryczne', value: 'Wbudowany moduł Bluetooth; wbudowany moduł Wi-Fi z Bluetooth 4.2' },
    { name: 'Opcje montowane przez dealera', value: 'Odklejak (etykiety o długości 25,4–152,4 mm, druk do 76 mm/s); gilotyna do cięcia pełnego i częściowego (papier i podkład etykiet bez kleju, grubość 0,06–0,19 mm)' },
    { name: 'Opcje użytkownika', value: 'Zewnętrzny uchwyt rolki o średnicy do 214 mm na gilzie 76,2 mm; klawiatura z wyświetlaczem KP-200 Plus (przez RS-232); programowalna klawiatura KU-007 Plus; zewnętrzny moduł Bluetooth (przez RS-232)' },
    { name: 'Gwarancja', value: 'Drukarka 2 lata; głowica 25 km lub 12 miesięcy; wałek dociskowy 50 km lub 12 miesięcy — obowiązuje limit osiągnięty wcześniej' },
  ],
  applications: [
    'Etykiety półproduktów i wyrobów na produkcji',
    'Etykiety nadawcze i etykiety przyjęcia towaru',
    'Etykiety cenowe i półkowe w handlu',
    'Etykiety identyfikacji pacjenta, apteczne i na próbki',
  ],
  variants: [
    { partNumber: '99-065A301-00LF00', name: 'TE210, 203 dpi, USB + RS-232 + Ethernet', attributes: {}, priceFrom: 946.86, availability: 'available' },
    { partNumber: '99-065A301-U1LF00', name: 'TE210, 203 dpi, USB + RS-232 + Ethernet + Bluetooth', attributes: { 'Bluetooth': 'Tak' }, priceFrom: 1407.49, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: [],
  faq: [
    {
      question: 'Czym TSC TE210 różni się od TE200?',
      answer: 'Z portów przewodowych TE200 ma tylko USB 2.0, a do tego 8 MB pamięci Flash i 16 MB SDRAM. TE210 ma dodatkowo porty RS-232, Ethernet 10/100 Mb/s i USB host oraz 128 MB Flash i 64 MB SDRAM. TE210 ma też zegar czasu rzeczywistego i brzęczyk. Najdłuższy wydruk ma 25 400 mm w TE210 i 2 794 mm w TE200. Odklejak i gilotynę dealer montuje tylko w TE210.',
    },
    {
      question: 'Jak uruchomić sieć Ethernet w TSC TE210?',
      answer: 'Drukarki dostarczane na rynek UE mają fabrycznie zablokowane połączenie sieciowe, zgodnie z dyrektywą RED. Przed pierwszym podłączeniem do sieci drukarkę łączy się z komputerem przewodem USB i uruchamia program TSC Console. W menu Functions > PRTSecure > Security Mode tryb zmienia się na Standard. Adres IP drukarki widać potem na karcie Ethernet w konfiguracji drukarki, a w TSC Console drukarkę dodaje się po tym adresie.',
    },
    {
      question: 'Jakie taśmy barwiące pasują do TSC TE210?',
      answer: 'TE210 przyjmuje taśmy woskowe, woskowo-żywiczne i żywiczne nawinięte farbą na zewnątrz, o szerokości 40–110 mm. Rolka 300 m na gilzie 1" może mieć do 67 mm średnicy, a rolka 110 m na gilzie 0,5" do 40 mm. W zestawie są 2 trzpienie do taśmy 300 m na gilzie 1". Taśmę na gilzie z wycięciami po obu stronach zakłada się bez trzpienia.',
    },
    {
      question: 'Czy TE210 zastąpi drukarkę Zebra bez zmiany szablonów?',
      answer: 'Firmware TSPL-EZD wykonuje polecenia ZPL i ZPL II, a także EPL i DPL. Drukarka przyjmuje więc etykiety, które system wysyła do drukarek Zebra, Eltron i Datamax. Przed wdrożeniem warto wydrukować próbkę każdego szablonu, bo emulacja może inaczej odwzorować czcionki i grafikę.',
    },
    {
      question: 'Czy TSC TE210 współpracuje z BarTender i NiceLabel?',
      answer: 'Tak. Bezpłatny sterownik Windows pozwala drukować z każdego programu w systemie Windows, w tym z BarTendera i NiceLabel. Do projektowania etykiet jest też bezpłatna wersja BarTender UltraLite. Systemy ERP i WMS mogą wysyłać polecenia TSPL lub ZPL przez sieć, port RS-232 albo USB.',
    },
    {
      question: 'Do czego służy port USB host w TE210?',
      answer: 'Do portu USB host podłącza się skaner kodów kreskowych lub klawiaturę komputerową. Z programowalną klawiaturą KU-007 Plus albo z panelem KP-200 Plus, podłączanym przez RS-232, drukarka drukuje etykiety z zapisanych szablonów bez komputera.',
    },
    {
      question: 'Jak duże rolki etykiet mieszczą się w TSC TE210?',
      answer: 'Wewnątrz mieści się rolka o średnicy do 127 mm, nawinięta na gilzę 25,4 mm lub 38 mm. Materiał może mieć 20–112 mm szerokości i 0,06–0,19 mm grubości. Rolki do 214 mm średnicy na gilzie 76,2 mm wymagają zewnętrznego uchwytu (opcja).',
    },
    {
      question: 'Jakie opcje można zamontować w TSC TE210?',
      answer: 'Dealer montuje odklejak albo gilotynę do cięcia pełnego i częściowego. Odklejak pracuje z etykietami o długości 25,4–152,4 mm. Gilotyna tnie papier i podkład etykiet bez kleju. Fabrycznie drukarka może mieć moduł Bluetooth albo moduł Wi-Fi z Bluetooth 4.2. W ofercie jest wersja z Bluetooth o numerze 99-065A301-U1LF00.',
    },
    {
      question: 'Jak sprawdzić stan głowicy w TE210?',
      answer: 'Funkcja TPH Care w programie TSC Console wykrywa uszkodzone punkty głowicy i pokazuje ich położenie na wykresie. Można ustawić próg liczby uszkodzonych punktów, po którym drukarka zgłasza błąd, oraz wydrukować stronę testową głowicy. Funkcja jest domyślnie wyłączona.',
    },
    {
      question: 'Co jest w zestawie z TSC TE210?',
      answer: 'W pudełku jest drukarka, skrócona instrukcja instalacji, przewód zasilający, zewnętrzny zasilacz i przewód USB. Do tego 2 trzpienie taśmy 1" do taśmy 300 m, papierowa gilza taśmy 1" oraz trzpień etykiet z 2 zaczepami i 2 adapterami 1,5". Etykiety i taśmę barwiącą kupuje się osobno.',
    },
    {
      question: 'Jakie są alternatywy dla TSC TE210?',
      answer: 'Drukarką TSC tej samej klasy jest [TSC TL241](/produkt/tsc-tl241) z portami USB i Ethernet. Porty USB, RS-232 i Ethernet ma też [Brother TD-4T](/produkt/brother-td-4t) w wersji TD-4420TN. Inne biurkowe drukarki termotransferowe 4" to [Honeywell PC42E-T](/produkt/honeywell-pc42e-t), [Zebra ZD230t](/produkt/zebra-zd230t) i [Zebra ZD621t](/produkt/zebra-zd621t).',
    },
  ],
  downloads: [
    { name: 'Karta katalogowa TSC TE200 (EN)', type: 'datasheet' as const, url: '/downloads/tsc/tsc-te200-karta-katalogowa-en.pdf', size: '409 KB' },
    { name: 'Instrukcja TSC TE200/TE210 (EN)', type: 'manual' as const, url: '/downloads/tsc/tsc-te200-instrukcja-en.pdf', size: '2,6 MB' },
    { name: 'Sterowniki i wsparcie TSC', type: 'driver' as const, url: 'https://emea.tscprinters.com/en/products/te-series-4-inch-performance-desktop-printers', size: 'Online' },
  ],
  relatedProducts: ['tsc-tl241', 'tsc-tl341', 'brother-td-4t', 'honeywell-pc42e-t', 'zebra-zd230t', 'zebra-zd621t', 'zebra-zd421t', 'citizen-cl-e321'],
  createdAt: '2026-11-11',
  updatedAt: '2026-11-11',
  sameAs: 'https://emea.tscprinters.com/en/products/te-series-4-inch-performance-desktop-printers',
}

// products.ts dołącza listę do katalogu i rozdziela karty do podkategorii według `subcategoryIds`.
export const tscTeProducts: Product[] = [te210]
