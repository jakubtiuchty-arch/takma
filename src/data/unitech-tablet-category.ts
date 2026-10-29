import type { BrandCategoryRichContent } from './brand-category-content'

export const unitechTabletFaq = [
  { question: 'Który tablet Unitech wybrać do Androida, a który do Windows?', answer: 'Android 13 ma [RT112](/produkt/unitech-rt112). Windows 11 na architekturze ARM ma [RT112 Windows](/produkt/unitech-rt112-windows), a Windows 11 z procesorem Intel [TB170 Plus](/produkt/unitech-tb170-plus).' },
  { question: 'Czy tablety Unitech mają zasilacz w zestawie?', answer: 'Tak, ale bez przewodu sieciowego. RT112 i RT112 Windows mają zasilacz USB-C, a europejski zestaw TB170 Plus zasilacz AC/DC. Do wszystkich trzech modeli pasuje [przewód sieciowy EU 1550-905940G](/produkt/unitech-przewod-sieciowy-eu-c5), sprzedawany osobno.' },
  { question: 'Które tablety Unitech mają wbudowany skaner kodów?', answer: 'Skaner jest opcją części PN. RT112 i RT112 Windows mają wersje z silnikiem 2D, a TB170 Plus wersję z czytnikiem 1D/2D. Pozostałe wersje są bez skanera.' },
  { question: 'Które tablety Unitech mają modem 5G lub 4G LTE?', answer: 'RT112 i RT112 Windows mają wersje 5G, a Windows także eSIM. TB170 Plus ma wersje 4G LTE. Wersje Wi-Fi nie mają modułu komórkowego.' },
  { question: 'Jaka jest gwarancja na tablety Unitech?', answer: 'Gwarancja na tablety Unitech w naszej ofercie wynosi 12 miesięcy.' },
  { question: 'Jakie akcesoria są dostępne do tabletów Unitech?', answer: 'Do RT112 i RT112 Windows: bateria, stacja biurkowa, uchwyty samochodowe, paski, rysik i szkło ochronne. Do TB170 Plus: bateria, ładowarka baterii, pióro, stacje, paski, rączka i podpórka. Uchwyt POS i płyta VESA są wspólne dla trzech modeli.' },
]

export const unitechTabletCategory: BrandCategoryRichContent = {
  updatedAt: '2026-10-29',
  contactText: 'Podaj system, miejsce pracy i sposób skanowania. Dobierzemy tablet Unitech, wersję łączności oraz zasilanie, stacje i uchwyty.',
  definition: {
    heading: 'Tablety Unitech 10,1″: RT112 z Androidem lub Windows i TB170 Plus z Windows 11',
    content: 'Tablet przemysłowy Unitech to komputer z ekranem dotykowym 10,1″ i obudową do pracy w magazynie, handlu, produkcji i serwisie. W ofercie są trzy modele.\n\n[RT112](/produkt/unitech-rt112) ma Androida 13, a [RT112 Windows](/produkt/unitech-rt112-windows) Windows 11 na ARM. Oba mają obudowę IP67 i wymienną baterię 8800 mAh.\n\n[TB170 Plus](/produkt/unitech-tb170-plus) ma Windows 11 na procesorze Intel, ekran 800 nitów, porty jak w komputerze i baterię wymienianą bez wyłączania, w obudowie IP65.\n\nKażdy model występuje w wersjach ze skanerem kodów lub bez niego. Dalej opisano tylko to, co odróżnia modele.',
  },
  sectionHeadings: {
    technicalDeepDive: 'Porównanie tabletów Unitech',
    expertAuthority: 'Dobór tabletu i wyposażenia w TAKMA',
    useCases: 'Który tablet Unitech do danego zadania?',
    comparisons: 'Różnice, które rozstrzygają wybór',
  },
  buyingGuide: {
    heading: 'Jak wybrać tablet Unitech?',
    items: [
      'System — [RT112](/produkt/unitech-rt112) pracuje na Androidzie 13 z usługami Google, [RT112 Windows](/produkt/unitech-rt112-windows) na Windows 11 IoT Enterprise LTSC dla Arm64, a [TB170 Plus](/produkt/unitech-tb170-plus) na Windows 11 IoT Enterprise LTSC z procesorem Intel N200.',
      'Odporność — RT112 i RT112 Windows mają obudowę IP67, wytrzymują upadek z 1,5 m na beton i spełniają MIL-STD-810H. TB170 Plus ma IP65, wytrzymuje upadek z 1,5 m na beton i spełnia MIL-STD-810G.',
      'Łączność — RT112 i RT112 Windows są w wersjach Wi-Fi 6E i 5G, a Windows 5G ma także eSIM. TB170 Plus ma Wi-Fi 6E, opcję 4G LTE i port RJ45 z PXE.',
      'Skaner — każdy model ma wersje bez skanera i ze skanerem: 2D w RT112 i RT112 Windows, 1D/2D w TB170 Plus. Opcjonalny silnik RT112 Windows czyta kody z odległości do 10 m.',
      'Bateria — RT112 i RT112 Windows mają wymienną baterię 8800 mAh, a TB170 Plus baterię 4300 mAh typu hot swap.',
    ],
  },
  expertAuthority: 'Pomożemy dobrać tablet Unitech do aplikacji, systemu i miejsca pracy. Sprawdzimy zgodność stacji, uchwytów, baterii i pasków z wybranym modelem. Terminale mobilne tej marki są na stronie [terminale Unitech](/terminale-unitech), a tablety innych producentów w kategorii [tablety przemysłowe](/tablety-przemyslowe).',
  technicalDeepDive: 'Zestawienie obejmuje oferowane konfiguracje. Szczegóły poszczególnych PN są na kartach produktów.',
  modelTableLayout: 'tabela',
  modelTable: [
    { name: 'Unitech RT112', href: '/produkt/unitech-rt112', role: 'Android 13, IP67', priceFrom: '', specs: [{ label: 'Ekran', value: '10,1″, 450 nitów' }, { label: 'Sieć', value: 'Wi-Fi 6E, opcja 5G' }, { label: 'Bateria', value: '8800 mAh, wymienna' }], bestFor: 'Sprawdzanie stanów i zamówienia w sklepie i magazynie; NFC i opcjonalny skaner 2D.' },
    { name: 'Unitech RT112 Windows', href: '/produkt/unitech-rt112-windows', role: 'Windows 11 na ARM, IP67', priceFrom: '', specs: [{ label: 'Ekran', value: '10,1″, 450 nitów' }, { label: 'Sieć', value: 'Wi-Fi 6E, opcja 5G z eSIM' }, { label: 'Zasilanie', value: 'Praca bez baterii przez POGO' }], bestFor: 'Kasy POS, kioski, linie produkcyjne i pojazdy; opcjonalny skaner 2D.' },
    { name: 'Unitech TB170 Plus', href: '/produkt/unitech-tb170-plus', role: 'Windows 11, Intel N200, IP65', priceFrom: '', specs: [{ label: 'Ekran', value: '10,1″ IPS, 800 nitów' }, { label: 'Sieć', value: 'Wi-Fi 6E, opcja 4G LTE' }, { label: 'Porty', value: 'USB-A, USB-C, RJ45, micro HDMI' }], bestFor: 'Produkcja, serwis w terenie i magazyny; pióro Digitizer Pen i bateria hot swap.' },
  ],
  useCases: [
    { title: 'Sklep i magazyn z Androidem — RT112', description: '[RT112](/produkt/unitech-rt112) skanuje towar, sprawdza jego stan w systemie i składa zamówienie online dla klienta. Wersje 5G przesyłają dane poza zasięgiem Wi-Fi, a moduł NFC obsługuje karty ISO 14443 i ISO 15693.' },
    { title: 'Kioski, kasy i linie produkcyjne — RT112 Windows', description: '[RT112 Windows](/produkt/unitech-rt112-windows) uruchamia Windows 11 na stanowisku stałym i może pracować bez baterii, gdy zasilanie dochodzi ze [stacji biurkowej](/produkt/unitech-rt112-stacja-biurkowa) lub [uchwytu samochodowego](/produkt/unitech-rt112-uchwyt-samochodowy-usb).' },
    { title: 'Produkcja i serwis w terenie — TB170 Plus', description: '[TB170 Plus](/produkt/unitech-tb170-plus) ma ekran 800 nitów czytelny w słońcu, port RJ45 z PXE i baterię wymienianą bez wyłączania. [Pióro Digitizer Pen](/produkt/unitech-tb170-plus-pioro) służy do notatek i podpisów.' },
  ],
  uniqueInsights: {
    heading: 'Co sprawdzić przed zakupem tabletu Unitech?',
    items: [
      { title: 'Zasilacz jest bez przewodu sieciowego', text: 'W zestawie RT112 i RT112 Windows jest zasilacz USB-C bez przewodu sieciowego, a europejski zestaw TB170 Plus ma zasilacz AC/DC bez przewodu EU. Ten sam [przewód EU 1550-905940G](/produkt/unitech-przewod-sieciowy-eu-c5) pasuje do zasilaczy wszystkich trzech modeli i kupuje się go osobno.' },
      { title: 'Windows na ARM a Windows na procesorze Intel', text: 'RT112 Windows działa na architekturze Arm64, a system LTSC nie zawiera Microsoft Store ani aplikacji Aparat. TB170 Plus ma procesor Intel N200. Przed zakupem należy sprawdzić, czy aplikacje firmy działają na wybranej architekturze.' },
      { title: 'NFC jest tylko w RT112 z Androidem', text: 'Moduł HF/NFC ma [RT112](/produkt/unitech-rt112). RT112 Windows nie ma NFC; w tej rodzinie karty zbliżeniowe odczytuje tylko wersja z Androidem.' },
      { title: 'TB170 Plus ma IP65, a RT112 IP67', text: 'RT112 i RT112 Windows mają klasę IP67 i wytrzymują zanurzenie na głębokość 1 m do 30 minut. TB170 Plus ma klasę IP65 i ekran o jasności 800 nitów.' },
    ],
  },
  comparisons: [
    {
      title: 'Unitech RT112, RT112 Windows i TB170 Plus — parametry obok siebie',
      content: '| Parametr | [RT112](/produkt/unitech-rt112) | [RT112 Windows](/produkt/unitech-rt112-windows) | [TB170 Plus](/produkt/unitech-tb170-plus) |\n|---|---|---|---|\n| System | Android 13 | Windows 11 IoT Enterprise LTSC, Arm64 | Windows 11 IoT Enterprise LTSC |\n| Procesor | Qualcomm 5430, do 2,1 GHz | Qualcomm 6490, do 2,7 GHz | Intel Alder Lake-N N200 |\n| RAM / pamięć | 6 GB / 128 GB Flash | 8 GB / 128 GB Flash | 8 GB / 256 GB SSD |\n| Ekran | 10,1″ 1920 × 1200, 450 nitów | 10,1″ 1920 × 1200, 450 nitów | 10,1″ IPS 1920 × 1200, 800 nitów |\n| Łączność | Wi-Fi 6E, opcja 5G | Wi-Fi 6E, opcja 5G z eSIM | Wi-Fi 6E, opcja 4G LTE |\n| Skaner | Opcja 2D; NFC | Opcja 2D; bez NFC | Opcja 1D/2D |\n| Klasa szczelności | IP67 | IP67 | IP65 |\n| Bateria | 8800 mAh, wymienna | 8800 mAh, wymienna | 4300 mAh, hot swap |\n| Wymiary / masa | 260 × 165 × 12 mm / 690 g | 260 × 165 × 12 mm / 690 g | 283 × 192 × 15 mm / 990 g |',
    },
  ],
  howToSteps: [],
  faq: unitechTabletFaq,
}
