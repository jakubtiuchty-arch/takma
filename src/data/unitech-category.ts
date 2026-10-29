import type { BrandCategoryRichContent } from './brand-category-content'

export const unitechFaq = [
  { question: 'Jakie terminale Unitech są w ofercie TAKMA?', answer: 'W ofercie są trzy modele z ekranem 6 cali i Androidem 15: EA660 z Wi-Fi 6E lub 5G, EA530 z Wi-Fi 6E lub 4G LTE oraz EA530 UHF z wbudowanym czytnikiem UHF RFID. Wszystkie mają certyfikat GMS, a EA660 także AER. Komputer noszony WD200 Plus jest w kategorii terminale naramienne.' },
  { question: 'Czy terminale Unitech mają zasilacz w zestawie?', answer: 'Nie. W zestawie są terminal, bateria, przewód USB-C i skrócona instrukcja. Zasilacz USB-C z szybkim ładowaniem sprzedajemy osobno. Terminal ładuje się do pełna w ciągu 4 godzin.' },
  { question: 'Który terminal Unitech ma wbudowany czytnik UHF RFID?', answer: 'EA530 UHF ma czytnik z układem Impinj E310 i odczytuje znaczniki z odległości do 1,8 m. Terminale EA530 i EA660 mają wbudowany tylko czytnik HF/NFC; czytnik UHF Unitech RP300 o zasięgu do 25 m dołącza się do nich przez adapter.' },
  { question: 'Które terminale Unitech mają 5G, a które 4G LTE?', answer: 'Modem 5G mają wersje EA660 oznaczone 5G. Modem 4G LTE ma EA530 w wersji 4G oraz EA530 UHF. Wersje tylko z Wi-Fi 6E nie mają modułu SIM ani GPS.' },
  { question: 'Czy bateria w terminalu Unitech wymienia się bez wyłączania?', answer: 'Tak, w EA660 oraz w standardowych wersjach EA530 (4G i tylko z Wi-Fi). Model EA530 UHF nie obsługuje wymiany baterii bez wyłączania terminala.' },
  { question: 'Do jakiej wersji Androida można zaktualizować terminale Unitech?', answer: 'Terminale mają fabrycznie Androida 15 z możliwością aktualizacji do Androida 17.' },
  { question: 'Jaka jest gwarancja na terminale Unitech?', answer: 'Gwarancja na terminale Unitech w naszej ofercie wynosi 12 miesięcy.' },
]

export const unitechCategory: BrandCategoryRichContent = {
  updatedAt: '2026-10-29',
  contactText: 'Podaj rodzaj kodów, sposób łączności i aplikację. Dobierzemy terminal Unitech, zasilanie oraz zgodne stacje, baterie i uchwyty.',
  definition: {
    heading: 'Terminale Unitech z Androidem 15: EA660, EA530 i EA530 UHF',
    content: 'Terminal mobilny Unitech łączy odczyt kodów kreskowych z aplikacją firmy i komunikuje się z nią przez Wi-Fi albo sieć komórkową. Terminale EA mają ekran dotykowy 6 cali, imager 2D, czytnik HF/NFC, Android 15 z certyfikatem GMS, Bluetooth 5.2 i Wi-Fi 6E. Mają dwa przyciski skanowania, wymienną baterię, złącze USB typu C z OTG i gniazdo microSD do 1 TB. Obudowa ma klasę IP65 i IP68 i wytrzymuje upadki z 1,5 m (1,8 m w etui). Unitech udostępnia narzędzia do zarządzania flotą: MoboLink, StageGO, OEMConfig i Enterprise Launcher; terminale współpracują też z SOTI i VMware. Dalej opisano tylko to, co odróżnia modele. Komputer noszony WD200 Plus z ekranem 3,54 cala jest opisany w kategorii [terminale naramienne](/terminale-naramienne).',
  },
  sectionHeadings: {
    technicalDeepDive: 'Porównanie terminali Unitech',
    expertAuthority: 'Dobór terminala i wyposażenia w TAKMA',
    useCases: 'Który terminal Unitech do danego zadania?',
    comparisons: 'Różnice, które rozstrzygają wybór',
  },
  buyingGuide: {
    heading: 'Jak wybrać terminal Unitech?',
    items: [
      'Łączność — wersja tylko z Wi-Fi 6E do pracy w budynku albo wersja 4G LTE (EA530) lub 5G (EA660) z eSIM i kartą nano SIM do pracy w terenie.',
      'Odczyt — imager 2D do kodów z ekranów i papieru albo EA660 z silnikiem dalekiego zasięgu do odczytu z odległości do 12 m.',
      'RFID — EA530 UHF z wbudowanym czytnikiem UHF do 1,8 m albo czytnik RP300 do 25 m dołączony do EA530 lub EA660.',
      'Bateria — wymiana bez wyłączania w EA660 i w standardowych wersjach EA530; EA530 UHF tej funkcji nie ma.',
    ],
  },
  expertAuthority: 'Pomożemy dobrać terminal Unitech do aplikacji, kodów i sieci. Sprawdzimy zgodność stacji, baterii i uchwytów z wybranym modelem. Terminale innych marek są w kategorii [terminale mobilne](/terminale-mobilne).',
  technicalDeepDive: 'Zestawienie obejmuje oferowane konfiguracje. Szczegóły poszczególnych PN są na kartach produktów.',
  modelTableLayout: 'tabela',
  modelTable: [
    { name: 'Unitech EA660', href: '/produkt/unitech-ea660', role: 'Dotykowy, z opcją 5G', priceFrom: '', specs: [{ label: 'Ekran', value: '6 cali, 630 nitów' }, { label: 'Skaner', value: 'Standardowy lub dalekiego zasięgu (do 12 m)' }, { label: 'Sieć', value: 'Wi-Fi 6E, 5G' }], bestFor: 'Handel, gastronomia, logistyka i ochrona zdrowia; bateria 5000 mAh.' },
    { name: 'Unitech EA530', href: '/produkt/unitech-ea530', role: 'Dotykowy, lekki', priceFrom: '', specs: [{ label: 'Ekran', value: '6 cali HD+, 500 nitów' }, { label: 'Masa', value: '242 g' }, { label: 'Sieć', value: 'Wi-Fi 6E, 4G LTE' }], bestFor: 'Handel i logistyka; bateria 4250 mAh wymieniana bez wyłączania.' },
    { name: 'Unitech EA530 UHF', href: '/produkt/unitech-ea530-uhf', role: 'UHF RFID', priceFrom: '', specs: [{ label: 'RFID', value: 'UHF, Impinj E310' }, { label: 'Odczyt', value: 'Do 1,8 m' }, { label: 'Sieć', value: 'Wi-Fi 6E, 4G LTE' }], bestFor: 'Inwentaryzacja i śledzenie majątku ze znacznikami UHF.' },
    { name: 'Unitech WD200 Plus', href: '/produkt/unitech-wd200-plus', role: 'Komputer noszony na nadgarstku', priceFrom: '', specs: [{ label: 'Ekran', value: '3,54 cala, 500 nitów' }, { label: 'Odczyt kodów', value: 'Aparat 16 MP lub skaner Bluetooth' }, { label: 'Sieć', value: 'Wi-Fi 6' }], bestFor: 'Kompletacja z wolnymi rękami; Android 13, IP68.' },
  ],
  useCases: [
    { title: 'Handel i gastronomia', description: 'EA660 i EA530 sprawdzają stany i obsługują klientów przy półce. EA660 przyjmuje też zamówienia klientów, jest przeznaczony także do gastronomii i hotelarstwa i ma ekran o jasności 630 nitów.' },
    { title: 'Logistyka i magazyn', description: 'EA660 z silnikiem dalekiego zasięgu czyta etykiety z odległości do 12 m. EA530 z czytnikiem RP300 odczytuje znaczniki UHF z odległości do 25 m.' },
    { title: 'Inwentaryzacja RFID', description: 'EA530 UHF odczytuje kody kreskowe i znaczniki UHF jednym urządzeniem; aplikacja TagAccess prowadzi inwentaryzację i wyszukiwanie znaczników.' },
  ],
  uniqueInsights: {
    heading: 'Co sprawdzić przed zakupem wyposażenia?',
    items: [
      { title: 'Zasilacz jest sprzedawany osobno', text: 'Terminale Unitech nie mają zasilacza w zestawie. Karta każdego terminala pokazuje zasilacz potrzebny do ładowania.' },
      { title: 'Stacje wymagają wkładki dopasowanej do osłony', text: 'Stacje 1-slot i 5-slot mają wyjmowaną wkładkę. Terminal w etui albo z uchwytem pistoletowym wkłada się do stacji po jej wyjęciu.' },
    ],
  },
  comparisons: [
    { title: 'EA660 czy EA530?', content: '[EA660](/produkt/unitech-ea660) ma ekran Full HD+ o jasności 630 nitów, procesor Snapdragon 4490, baterię 5000 mAh oraz wersje z modemem 5G i z silnikiem dalekiego zasięgu. [EA530](/produkt/unitech-ea530) ma ekran HD+ 500 nitów, baterię 4250 mAh, wersję z modemem 4G LTE i masę 242 g.' },
    { title: 'EA530 czy EA530 UHF?', content: '[EA530](/produkt/unitech-ea530) wymienia baterię bez wyłączania, a znaczniki UHF odczytuje tylko z dołączonym czytnikiem RP300. [EA530 UHF](/produkt/unitech-ea530-uhf) ma wbudowany czytnik UHF Impinj E310 do 1,8 m, ale nie obsługuje wymiany baterii bez wyłączania. Oba modele współpracują z czytnikiem RP300 o zasięgu do 25 m.' },
  ],
  howToSteps: [],
  faq: unitechFaq,
}
