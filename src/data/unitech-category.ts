import type { BrandCategoryRichContent } from './brand-category-content'

export const unitechFaq = [
  { question: 'Jakie terminale Unitech są w ofercie TAKMA?', answer: 'W ofercie jest pięć modeli z Androidem i certyfikatem GMS. Terminale dotykowe z ekranem 6 cali i Androidem 15 to EA660 z Wi-Fi 6E lub 5G, EA530 z Wi-Fi 6E lub 4G LTE oraz EA530 UHF z wbudowanym czytnikiem UHF RFID. Terminale z klawiaturą i ekranem 4 cale to HT730 Plus z Androidem 14, Wi-Fi 6E i opcją 5G oraz HT330 z Androidem 12, Wi-Fi 802.11ac i opcją 4G LTE. Certyfikat AER mają EA660 i HT730 Plus.' },
  { question: 'Czy terminale Unitech mają zasilacz w zestawie?', answer: 'Nie. EA660, EA530, EA530 UHF i HT330 mają w zestawie baterię, przewód USB-C i skróconą instrukcję, ale nie mają zasilacza. W zestawie HT730 Plus nie ma ani zasilacza, ani przewodu USB-C. Zasilacz i przewód sprzedajemy osobno, a karta każdego terminala pokazuje, co jest potrzebne do ładowania. Terminale EA ładują się do pełna w ciągu 4 godzin, a HT330 w ciągu 4,5 godziny.' },
  { question: 'Który terminal Unitech ma wbudowany czytnik UHF RFID?', answer: 'EA530 UHF ma czytnik z układem Impinj E310 i odczytuje znaczniki z odległości do 1,8 m. Terminale EA530 i EA660 mają wbudowany tylko czytnik HF/NFC; czytnik UHF Unitech RP300 o zasięgu do 25 m dołącza się do nich przez adapter. HT730 Plus i HT330 nie mają czytnika UHF; współpracują przez Bluetooth z kieszonkowym czytnikiem RP902.' },
  { question: 'Które terminale Unitech mają 5G, a które 4G LTE?', answer: 'Modem 5G mają wersje EA660 i HT730 Plus oznaczone 5G. EA530, EA530 UHF i HT330 w wersjach z siecią komórkową mają modem 4G LTE. Wersje tylko z Wi-Fi nie mają modemu komórkowego ani gniazda SIM.' },
  { question: 'Który terminal Unitech ma klawiaturę?', answer: 'Klawiaturę fizyczną mają HT730 Plus (29, 38 lub 47 klawiszy, zależnie od PN) i HT330 (32 klawisze z podświetleniem). Terminale EA660, EA530 i EA530 UHF mają tylko ekran dotykowy.' },
  { question: 'Który terminal Unitech pracuje w mroźni?', answer: 'Wersje HT730 Plus z grzałką (PN HT730-NH6122BG i HT730-NH61U2BG) pracują w temperaturze od -30°C do +50°C, a grzałka chroni przed skraplaniem pary. Pozostałe terminale Unitech w ofercie pracują od -20°C.' },
  { question: 'Czy bateria w terminalu Unitech wymienia się bez wyłączania?', answer: 'Tak, w EA660 oraz w standardowych wersjach EA530 (4G i tylko z Wi-Fi). Model EA530 UHF nie obsługuje wymiany baterii bez wyłączania terminala. W HT730 Plus aplikacje pozostają aktywne do 1 minuty po wyjęciu baterii.' },
  { question: 'Do jakiej wersji Androida można zaktualizować terminale Unitech?', answer: 'Terminale EA mają fabrycznie Androida 15 z możliwością aktualizacji do Androida 17. HT730 Plus ma Androida 14 z aktualizacją do Androida 16, a HT330 Androida 12.' },
  { question: 'Jaka jest gwarancja na terminale Unitech?', answer: 'Gwarancja na terminale Unitech w naszej ofercie wynosi 12 miesięcy.' },
]

export const unitechCategory: BrandCategoryRichContent = {
  updatedAt: '2026-10-30',
  contactText: 'Podaj rodzaj kodów, sposób łączności i aplikację. Dobierzemy terminal Unitech, zasilanie oraz zgodne stacje, baterie i uchwyty.',
  definition: {
    heading: 'Terminale Unitech z Androidem: EA660, EA530, EA530 UHF, HT730 Plus i HT330',
    content: 'Terminal mobilny Unitech łączy odczyt kodów kreskowych z aplikacją firmy i komunikuje się z nią przez Wi-Fi albo sieć komórkową. W ofercie są dwie grupy terminali z Androidem i certyfikatem GMS. Terminale dotykowe EA660, EA530 i EA530 UHF mają ekran 6 cali, Android 15, Wi-Fi 6E, Bluetooth 5.2, imager 2D, czytnik HF/NFC, dwa przyciski skanowania, wymienną baterię, złącze USB typu C z OTG i gniazdo microSD do 1 TB; obudowa ma klasę IP65 i IP68 i wytrzymuje upadki z 1,5 m (1,8 m w etui). Terminale z klawiaturą HT730 Plus i HT330 mają ekran 4 cale obsługiwany także w rękawicach, wymienną baterię, złącze USB typu C i gniazdo microSD do 256 GB. HT730 Plus ma Android 14, Wi-Fi 6E, czytnik HF/NFC i klasę IP65 / IP67, a HT330 Android 12, Wi-Fi 802.11ac i klasę IP67. Unitech udostępnia narzędzia do zarządzania flotą: MoboLink, StageGO, OEMConfig i Enterprise Launcher; terminale EA współpracują też z SOTI i VMware, a HT330 z SOTI, Ivanti Wavelink i 42Gears. Dalej opisano tylko to, co odróżnia modele.',
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
      'Obsługa — terminal dotykowy z ekranem 6 cali (EA660, EA530, EA530 UHF) albo terminal z klawiaturą i ekranem 4 cale (HT730 Plus, HT330) do pracy jedną ręką, także w rękawicach.',
      'Łączność — wersja tylko z Wi-Fi do pracy w budynku albo wersja z siecią komórkową do pracy w terenie: 4G LTE (EA530, HT330) lub 5G (EA660, HT730 Plus).',
      'Odczyt — imager 2D do kodów z ekranów i papieru albo silnik dalekiego zasięgu: w EA660 do 12 m, w HT730 Plus do 32 m.',
      'Mroźnia — HT730 Plus w wersji z grzałką pracuje od -30°C do +50°C; pozostałe terminale pracują od -20°C.',
      'RFID — EA530 UHF z wbudowanym czytnikiem UHF do 1,8 m albo czytnik RP300 do 25 m dołączony do EA530 lub EA660.',
      'Bateria — wymiana bez wyłączania w EA660 i w standardowych wersjach EA530; EA530 UHF tej funkcji nie ma. HT330 ma baterię na ponad 20 godzin pracy.',
    ],
  },
  expertAuthority: 'Pomożemy dobrać terminal Unitech do aplikacji, kodów i sieci. Sprawdzimy zgodność stacji, baterii i uchwytów z wybranym modelem. Terminale innych marek są w kategorii [terminale mobilne](/terminale-mobilne).',
  technicalDeepDive: 'Zestawienie obejmuje oferowane konfiguracje. Szczegóły poszczególnych PN są na kartach produktów.',
  modelTableLayout: 'tabela',
  modelTable: [
    { name: 'Unitech EA660', href: '/produkt/unitech-ea660', role: 'Dotykowy, z opcją 5G', priceFrom: '', specs: [{ label: 'Ekran', value: '6 cali, 630 nitów' }, { label: 'Skaner', value: 'Standardowy lub dalekiego zasięgu (do 12 m)' }, { label: 'Sieć', value: 'Wi-Fi 6E, 5G' }], bestFor: 'Handel, gastronomia, logistyka i ochrona zdrowia; bateria 5000 mAh.' },
    { name: 'Unitech EA530', href: '/produkt/unitech-ea530', role: 'Dotykowy, lekki', priceFrom: '', specs: [{ label: 'Ekran', value: '6 cali HD+, 500 nitów' }, { label: 'Masa', value: '242 g' }, { label: 'Sieć', value: 'Wi-Fi 6E, 4G LTE' }], bestFor: 'Handel i logistyka; bateria 4250 mAh wymieniana bez wyłączania.' },
    { name: 'Unitech EA530 UHF', href: '/produkt/unitech-ea530-uhf', role: 'UHF RFID', priceFrom: '', specs: [{ label: 'RFID', value: 'UHF, Impinj E310' }, { label: 'Odczyt', value: 'Do 1,8 m' }, { label: 'Sieć', value: 'Wi-Fi 6E, 4G LTE' }], bestFor: 'Inwentaryzacja i śledzenie majątku ze znacznikami UHF.' },
    { name: 'Unitech HT730 Plus', href: '/produkt/unitech-ht730-plus', role: 'Z klawiaturą, daleki zasięg', priceFrom: '', specs: [{ label: 'Ekran', value: '4 cale, 400 nitów' }, { label: 'Skaner', value: 'Standardowy lub dalekiego zasięgu (do 32 m)' }, { label: 'Sieć', value: 'Wi-Fi 6E, 5G' }], bestFor: 'Magazyn, logistyka i serwis w terenie; wersja z grzałką do chłodni i mroźni.' },
    { name: 'Unitech HT330', href: '/produkt/unitech-ht330', role: 'Z klawiaturą, lekki', priceFrom: '', specs: [{ label: 'Ekran', value: '4 cale, 450 nitów' }, { label: 'Masa', value: '295 g' }, { label: 'Sieć', value: 'Wi-Fi, 4G LTE' }], bestFor: 'Handel, transport i logistyka oraz produkcja; bateria 5200 mAh na ponad 20 godzin.' },
  ],
  useCases: [
    { title: 'Handel i gastronomia', description: 'EA660 i EA530 sprawdzają stany i obsługują klientów przy półce. EA660 przyjmuje też zamówienia klientów, jest przeznaczony także do gastronomii i hotelarstwa i ma ekran o jasności 630 nitów.' },
    { title: 'Logistyka i magazyn', description: 'EA660 z silnikiem dalekiego zasięgu czyta etykiety z odległości do 12 m. EA530 z czytnikiem RP300 odczytuje znaczniki UHF z odległości do 25 m. HT730 Plus z silnikiem dalekiego zasięgu czyta kody z odległości do 32 m.' },
    { title: 'Inwentaryzacja RFID', description: 'EA530 UHF odczytuje kody kreskowe i znaczniki UHF jednym urządzeniem; aplikacja TagAccess prowadzi inwentaryzację i wyszukiwanie znaczników.' },
    { title: 'Chłodnie i mroźnie', description: 'HT730 Plus w wersji z grzałką pracuje w temperaturze od -30°C do +50°C bez skraplania pary. Ta wersja jest przeznaczona do chłodni, dystrybucji żywności i logistyki farmaceutycznej.' },
    { title: 'Inwentaryzacja na całą zmianę', description: 'HT330 z baterią 5200 mAh pracuje ponad 20 godzin, ma 32 podświetlane klawisze i waży 295 g.' },
  ],
  uniqueInsights: {
    heading: 'Co sprawdzić przed zakupem wyposażenia?',
    items: [
      { title: 'Zasilacz jest sprzedawany osobno', text: 'Terminale Unitech nie mają zasilacza w zestawie, a HT730 Plus nie ma też przewodu USB-C. Karta każdego terminala pokazuje zasilacz i przewód potrzebne do ładowania.' },
      { title: 'Stacje wymagają wkładki dopasowanej do osłony', text: 'Stacje 1-slot i 5-slot EA mają wyjmowaną wkładkę, a stacje 1-gniazdowe HT330 wyjmowaną pokrywę. Terminal w etui albo z uchwytem pistoletowym wkłada się do stacji po jej wyjęciu. W stacjach 4-gniazdowych HT730 Plus terminal z osłoną ładuje się po zdjęciu wyjmowanej części.' },
    ],
  },
  comparisons: [
    { title: 'EA660 czy EA530?', content: '[EA660](/produkt/unitech-ea660) ma ekran Full HD+ o jasności 630 nitów, procesor Snapdragon 4490, baterię 5000 mAh oraz wersje z modemem 5G i z silnikiem dalekiego zasięgu. [EA530](/produkt/unitech-ea530) ma ekran HD+ 500 nitów, baterię 4250 mAh, wersję z modemem 4G LTE i masę 242 g.' },
    { title: 'EA530 czy EA530 UHF?', content: '[EA530](/produkt/unitech-ea530) wymienia baterię bez wyłączania, a znaczniki UHF odczytuje tylko z dołączonym czytnikiem RP300. [EA530 UHF](/produkt/unitech-ea530-uhf) ma wbudowany czytnik UHF Impinj E310 do 1,8 m, ale nie obsługuje wymiany baterii bez wyłączania. Oba modele współpracują z czytnikiem RP300 o zasięgu do 25 m.' },
    { title: 'Terminal dotykowy czy z klawiaturą?', content: 'Terminale [EA660](/produkt/unitech-ea660), [EA530](/produkt/unitech-ea530) i [EA530 UHF](/produkt/unitech-ea530-uhf) mają ekran 6 cali i obsługę dotykową. [HT730 Plus](/produkt/unitech-ht730-plus) i [HT330](/produkt/unitech-ht330) mają ekran 4 cale i klawiaturę fizyczną do wpisywania ilości i kodów; ich ekran dotykowy obsługuje rękawice i mokre dłonie.' },
    { title: 'HT730 Plus czy HT330?', content: '[HT730 Plus](/produkt/unitech-ht730-plus) ma procesor Snapdragon 4490, 6 GB RAM i 128 GB Flash, Android 14 z aktualizacją do 16, Wi-Fi 6E, wersje 5G, wersję z grzałką do -30°C, silnik dalekiego zasięgu do 32 m i baterię 6700 mAh. [HT330](/produkt/unitech-ht330) ma Android 12, 3 GB RAM i 32 GB Flash, Wi-Fi 802.11ac, wersję 4G LTE, baterię 5200 mAh na ponad 20 godzin pracy i masę 295 g.' },
  ],
  howToSteps: [],
  faq: unitechFaq,
}
