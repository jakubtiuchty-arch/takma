import type { Product } from './products'

const id = 'tsc-alpha-40l-rfid'
const support = 'https://emea.tscprinters.com/en/products/alpha-series-4-inch-performance-mobile-rfid-printers'
const datasheet = '/downloads/tsc-alpha-40l-rfid-karta-produktu-en.pdf'
const accessories = [
  { id: 'tsc-alpha40l-battery', slug: 'tsc-bateria-alpha-40l-op-p-sb-001-0001', pn: 'OP-P-SB-001-0001', image: 'battery', name: 'Bateria TSC Alpha-40L 6200 mAh', description: 'TSC OP-P-SB-001-0001 to wymienna bateria Li-ion Smart Battery 6200 mAh do Alpha-40L, także wersji RFID. Napięcie nominalne wynosi 7,4 V. Zestaw obejmuje jedną baterię, bez drukarki i ładowarki. Bateria zapasowa pozwala wymienić rozładowany akumulator podczas pracy. Dane o stanie baterii można odczytać przez narzędzia zarządzania zgodnej drukarki.' },
  { id: 'tsc-alpha40l-dock1', slug: 'tsc-stacja-alpha-40l-op-p-dc1-001-2001', pn: 'OP-P-DC1-001-2001', image: 'dock1', name: 'Stacja ładująca TSC Alpha-40L — 1 drukarka, EU', description: 'TSC OP-P-DC1-001-2001 to stacja do ładowania jednej drukarki Alpha-40L, także wersji RFID. Ładuje baterię zamontowaną w drukarce. Konfiguracja EU obejmuje zasilacz i przewód europejski. Drukarka jest sprzedawana osobno. Stacja nie jest ładowarką do wyjętej baterii.' },
  { id: 'tsc-alpha40l-case', slug: 'tsc-etui-alpha-40l-op-p-ec-002-0001', pn: 'OP-P-EC-002-0001', image: 'case', name: 'Etui z paskiem TSC Alpha-40L', description: 'TSC OP-P-EC-002-0001 to etui ochronne z paskiem na ramię do drukarki Alpha-40L, także wersji RFID. Umożliwia noszenie drukarki i zapewnia dodatkową osłonę w terenie. Zgodna drukarka w etui ma deklarowaną odporność na upadek z 2,5 m. Drukarka jest sprzedawana osobno. Pasek jest częścią tego zestawu, więc nie trzeba kupować drugiego paska do etui.' },
  { id: 'tsc-alpha40l-strap', slug: 'tsc-pasek-alpha-40l-op-p-ss-001-0001', pn: 'OP-P-SS-001-0001', image: 'strap', name: 'Pasek na ramię TSC Alpha-40L', description: 'TSC OP-P-SS-001-0001 to pasek do noszenia drukarki Alpha-40L na ramieniu, także wersji RFID. Jest przeznaczony do bezpośredniego noszenia drukarki bez etui. Zestaw nie obejmuje drukarki ani etui. Jeśli wybierasz etui OP-P-EC-002-0001, pasek jest już częścią zestawu etui.' },
  { id: 'tsc-alpha40l-dock4', slug: 'tsc-stacja-alpha-40l-op-p-dc4-001-2001', pn: 'OP-P-DC4-001-2001', image: 'dock4', name: 'Stacja ładująca TSC Alpha-40L — 4 drukarki, EU', description: 'TSC OP-P-DC4-001-2001 to stacja do ładowania maksymalnie czterech drukarek Alpha-40L, także wersji RFID. Ładuje baterie bez wyjmowania ich z drukarek. Konfiguracja EU obejmuje zasilacz i przewód europejski. Drukarki są sprzedawane osobno. Stacja nie zastępuje ładowarki wyjętych baterii.' },
  { id: 'tsc-alpha40l-charger4', slug: 'tsc-ladowarka-alpha-40l-op-p-bc4-001-2001', pn: 'OP-P-BC4-001-2001', image: 'charger4', name: 'Ładowarka TSC Alpha-40L — 4 baterie, EU', description: 'TSC OP-P-BC4-001-2001 to ładowarka do maksymalnie czterech baterii wyjętych z drukarek Alpha-40L, także wersji RFID. Konfiguracja EU obejmuje zasilacz i przewód europejski. Baterie oraz drukarki są sprzedawane osobno. Baterie widoczne na zdjęciu przedstawiają sposób użycia i nie są częścią zestawu. Do ładowania całych drukarek wybierz stację dokującą.' },
]

export const tscAlpha40lRfidAccessories: Product[] = accessories.map(a => ({
  id: a.id, slug: a.slug, name: `${a.name} — ${a.pn}`,
  shortDescription: a.description.split('. ')[0] + '.', description: a.description,
  seoTitle: `${a.name} | TAKMA`, seoDescription: `${a.name}, PN ${a.pn}. Zgodność z Alpha-40L RFID. Sprawdź cenę, dostępność i zawartość zestawu w TAKMA.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'tsc',
  images: [`/images/products/tsc-alpha40l-${a.image}.webp`], imageDescriptions: [`${a.name} — ${a.pn}${a.image === 'charger4' ? '; baterie pokazano dla zilustrowania użycia i są sprzedawane osobno' : ''}`],
  tags: ['magazyn', 'logistyka'], specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Zgodność', value: 'TSC Alpha-40L oraz Alpha-40L RFID' }],
  availability: 'unavailable', isNew: false, isBestseller: false, applications: [], compatibleAccessories: [], relatedAccessories: [id],
  downloads: [{ name: 'Karta Alpha-40L RFID i akcesoria (EN)', type: 'datasheet', url: datasheet, size: 'PDF' }], createdAt: '2026-10-16',
}))

export const tscAlpha40lRfidProduct: Product = {
  id, slug: id, name: 'TSC Alpha-40L RFID', seoH1: 'TSC Alpha-40L RFID',
  seoTitle: 'TSC Alpha-40L RFID — mobilna drukarka UHF, EU | TAKMA',
  seoDescription: 'TSC Alpha-40L RFID: mobilna drukarka 203 dpi, druk do 104 mm. Europejskie wersje Bluetooth oraz Wi-Fi. Sprawdź ceny, stany i akcesoria w TAKMA.',
  shortDescription: 'Mobilna drukarka termiczna i koder RAIN UHF RFID. Druk do 104 mm, bateria 6200 mAh oraz warianty Bluetooth i Wi-Fi. Europejski zasilacz w zestawie.',
  description: `TSC Alpha-40L RFID to mobilna drukarka termiczna z koderem RAIN UHF RFID. Przygotowuje nadruk i zapisuje dane w układzie etykiety bezpośrednio przy towarze.

## Druk i kodowanie przy towarze

Drukarka służy do oznaczania kartonów, pojemników i wyposażenia w magazynie, sklepie oraz w terenie. Ma rozdzielczość 203 dpi i drukuje z szerokością do 104 mm. Maksymalna prędkość nadruku wynosi 127 mm/s. Kodowanie RFID może zmniejszyć wydajność całego zadania.

Druk termiczny bezpośredni wymaga etykiet termoczułych. Nie wymaga taśmy barwiącej. Sam nadruk kodu kreskowego nie zapisuje danych w układzie RFID.

## Dwa warianty europejskie

Wybierz połączenie z terminalem lub siecią:
- A40LR-A001-0002 — USB-C i Bluetooth MFi, bez Wi-Fi.
- A40LR-A001-1002 — USB-C oraz Wi-Fi 802.11a/b/g/n/ac z Bluetooth.

Oba warianty mają NFC do parowania, baterię Li-ion 6200 mAh, zasilacz z przewodem EU i klips do paska. NFC do parowania nie jest koderem etykiet HF/NFC. Gniazdo USB-C służy do komunikacji i nie zastępuje zasilacza do ładowania.

## Etykiety RFID i dobór rolki

Alpha-40L RFID obsługuje pasywne etykiety UHF zgodne z GS1 EPC Gen2 v2 i ISO 18000-63. Obsługuje etykiety z przerwą oraz z czarnym znacznikiem. Po zmianie materiału wykonaj kalibrację podawania i RFID.

Szerokość materiału z podkładem wynosi 50,8–112 mm. Zalecana maksymalna średnica rolki RFID wynosi 62 mm. Limit 67 mm dotyczy materiału bez RFID. Gilza ma 25,4 mm; adaptery umożliwiają użycie gilz 19,1 i 38,1 mm. Minimalny rozstaw kolejnych etykiet RFID wynosi 15,9 mm. Dobierz także wkładkę, grubość materiału i jej położenie względem anteny.

Wersja RFID pracuje z ręcznym odrywaniem etykiet. Nie ma trybu odklejania. Nie obsługuje etykiet RFID na metal ani układów HF/NFC. Etykiety są sprzedawane osobno. Przed wdrożeniem sprawdź kodowanie i odczyt na docelowym przedmiocie.

## Kontrola zapisu i integracja z systemem

Drukarka sprawdza zapis danych podczas kodowania. Może przekreślić błędną etykietę i zakodować kolejną zgodnie z ustawionym trybem obsługi błędów. Obsługuje polecenia RFID w TSPL i wybrane polecenia ZPL2.

Aby pracować z WMS lub ERP, powiąż identyfikator EPC z rekordem towaru. Alpha-40L RFID kontroluje etykietę w swoim torze materiałów. Do radiowej inwentaryzacji regałów potrzebujesz osobnego czytnika UHF RFID i oprogramowania. Zwykłej Alpha-40L bez RFID nie można później rozbudować o ten koder.

## Bateria i praca w terenie

Wymienna bateria ma napięcie 7,4 V i pojemność 6200 mAh. Czas pracy zależy od nadruku, kodowania, temperatury i połączeń. Kolorowy ekran 2,3 cala z przyciskami służy do ustawień i kalibracji. TSC Console wspiera konfigurację oraz kontrolę stanu urządzenia. SOTI Connect wymaga osobnej licencji.

Drukarka waży około 1,025 kg z baterią. Ma klasę IP54 z wyłączeniem toru papieru i odporność na upadek z 1,8 m. Opcjonalne etui zwiększa deklarowaną odporność na upadek do 2,5 m. Temperatura pracy wynosi od −20 do 50°C, a ładowania od 0 do 40°C.

## Ładowanie i akcesoria

Zasilacz EU jest częścią oferowanych zestawów. Do ładowania całej drukarki można dokupić [stację 1-gniazdową](/produkt/tsc-stacja-alpha-40l-op-p-dc1-001-2001) albo [stację 4-gniazdową](/produkt/tsc-stacja-alpha-40l-op-p-dc4-001-2001). Obie konfiguracje stacji EU obejmują zasilacz i przewód.

[Ładowarka 4 baterii](/produkt/tsc-ladowarka-alpha-40l-op-p-bc4-001-2001) ładuje baterie wyjęte z drukarek. [Bateria zapasowa](/produkt/tsc-bateria-alpha-40l-op-p-sb-001-0001) jest sprzedawana osobno. [Etui](/produkt/tsc-etui-alpha-40l-op-p-ec-002-0001) obejmuje pasek. [Osobny pasek](/produkt/tsc-pasek-alpha-40l-op-p-ss-001-0001) służy do noszenia drukarki bez etui.

Do porównania sprawdź [Zebra ZQ521 RFID](/produkt/zebra-zq521-rfid) oraz [Zebra ZQ630 Plus RFID](/produkt/zebra-zq630-plus-rfid).

## Gwarancja

Gwarancja na drukarkę wynosi 2 lata, a na baterię 1 rok. Głowica ma ochronę przez 12 miesięcy lub 25 km druku. Wałek ma ochronę przez 12 miesięcy lub 50 km druku. Dla części z limitem przebiegu obowiązuje warunek, który nastąpi wcześniej.`,
  categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'mobilne-drukarki-etykiet', 'termiczne-drukarki-etykiet'], manufacturerId: 'tsc',
  tags: ['magazyn', 'logistyka', 'retail', 'outdoor'],
  images: ['/images/products/tsc-alpha40l-main.webp', '/images/products/tsc-alpha40l-front.webp', '/images/products/tsc-alpha40l-open.webp'],
  imageDescriptions: ['TSC Alpha-40L RFID — mobilna drukarka z ekranem i przyciskami, widok pod kątem', 'TSC Alpha-40L RFID — widok z przodu z oznaczeniem UHF RFID', 'TSC Alpha-40L RFID — otwarta drukarka z widocznym torem materiałów'],
  availability: 'unavailable', isNew: true, isBestseller: false,
  keyParams: { rodzajDruku: 'Termiczny bezpośredni; RAIN UHF RFID', rozdzielczosc: '203 dpi', szerokoscDruku: '104 mm', predkoscDruku: 'do 127 mm/s; kodowanie zależy od etykiety', szerokoscEtykiet: '50,8–112 mm' },
  specifications: [
    { name: 'Rozdzielczość', value: '203 dpi' }, { name: 'Metoda druku', value: 'Termiczny bezpośredni' },
    { name: 'Szerokość druku', value: '104 mm' }, { name: 'Prędkość nadruku', value: 'do 127 mm/s; RFID zależy od materiału i danych' },
    { name: 'RFID', value: 'RAIN UHF, GS1 EPC Gen2 v2 / ISO 18000-63; bez HF/NFC i etykiet na metal' },
    { name: 'Szerokość materiału', value: '50,8–112 mm z podkładem' }, { name: 'Średnica rolki', value: 'RFID: zalecane maks. 62 mm; materiał bez RFID: maks. 67 mm' },
    { name: 'Gilza', value: '25,4 mm; 19,1 i 38,1 mm z adapterami' }, { name: 'Minimalny rozstaw RFID', value: '15,9 mm; dobierz wkładkę i kalibrację' },
    { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; bez trybu odklejania' }, { name: 'Czujniki materiału', value: 'Przerwa między etykietami i czarny znacznik' },
    { name: 'Łączność', value: 'USB-C do komunikacji, NFC do parowania; Bluetooth lub Wi-Fi z Bluetooth zależnie od PN' },
    { name: 'Wyświetlacz', value: 'Kolorowy LCD 2,3 cala z przyciskami' }, { name: 'Pamięć', value: '128 MB RAM i 128 MB Flash; microSD do 32 GB' },
    { name: 'Polecenia RFID', value: 'TSPL i wybrane polecenia ZPL2' }, { name: 'Bateria', value: 'Li-ion Smart Battery 7,4 V, 6200 mAh; wymienna' },
    { name: 'Klasa ochrony', value: 'IP54 z wyłączeniem toru papieru' }, { name: 'Odporność na upadek', value: '1,8 m; z opcjonalnym etui 2,5 m' },
    { name: 'Temperatura pracy', value: 'od −20 do 50°C; ładowanie od 0 do 40°C' }, { name: 'Wymiary', value: '160 × 191 × 79 mm' }, { name: 'Masa', value: 'około 1,025 kg z baterią' },
    { name: 'W zestawie', value: 'Bateria, zasilacz i przewód EU, klips do paska, adaptery gilz i skrócona instrukcja' },
    { name: 'Gwarancja', value: 'Drukarka 2 lata; bateria 1 rok; głowica 12 miesięcy / 25 km; wałek 12 miesięcy / 50 km — pierwszy osiągnięty limit' },
  ],
  variants: [
    { partNumber: 'A40LR-A001-0002', name: 'EU — Bluetooth', attributes: { 'Łączność bezprzewodowa': 'Bluetooth MFi' }, availability: 'unavailable' },
    { partNumber: 'A40LR-A001-1002', name: 'EU — Wi-Fi i Bluetooth', attributes: { 'Łączność bezprzewodowa': 'Wi-Fi 802.11a/b/g/n/ac + Bluetooth' }, availability: 'unavailable' },
  ],
  compatibleAccessories: [], relatedAccessories: accessories.map(a => a.id),
  applications: ['Druk i kodowanie etykiet UHF RFID przy towarze', 'Oznaczanie kartonów i pojemników w magazynie', 'Mobilne etykietowanie w handlu i serwisie terenowym'],
  faq: [
    { question: 'Czym różnią się europejskie PN?', answer: 'A40LR-A001-0002 ma Bluetooth MFi. A40LR-A001-1002 ma Wi-Fi 802.11a/b/g/n/ac i Bluetooth. Oba mają RFID, USB-C do komunikacji, NFC do parowania, baterię oraz zasilacz EU.' },
    { question: 'Czy USB-C ładuje baterię?', answer: 'Nie. USB-C służy do komunikacji. Do ładowania użyj zasilacza z zestawu lub zgodnej stacji ładującej. Wyjętą baterię można ładować w osobnej ładowarce.' },
    { question: 'Czy rolka RFID może mieć średnicę 67 mm?', answer: 'Dla etykiet RFID zalecana maksymalna średnica rolki wynosi 62 mm. Limit 67 mm dotyczy materiału bez RFID. Sprawdź także wkładkę, gilzę i szerokość podkładu.' },
    { question: 'Czy drukarka obsługuje etykiety z przerwą i na metal?', answer: 'Obsługuje zgodne etykiety UHF z przerwą lub czarnym znacznikiem. Nie obsługuje etykiet RFID na metal. Wersja RFID pracuje tylko z ręcznym odrywaniem, bez odklejania.' },
    { question: 'Czy zwykłą Alpha-40L można rozbudować o RFID?', answer: 'Nie. RFID jest wyposażeniem fabrycznym odpowiedniej konfiguracji. Wybierz PN z oznaczeniem A40LR. Zwykły wariant A40L nie zastępuje tej wersji.' },
    { question: 'Czy urządzenie policzy towary na półce?', answer: 'Koduje i sprawdza etykietę w torze materiałów. Do inwentaryzacji regałów potrzebujesz osobnego czytnika UHF RFID i oprogramowania.' },
  ],
  downloads: [
    { name: 'Karta Alpha-40L RFID i akcesoria (EN)', type: 'datasheet', url: datasheet, size: 'PDF' },
    { name: 'Instrukcja Alpha-40L RFID (EN)', type: 'manual', url: '/downloads/tsc-alpha-40l-rfid-instrukcja-en.pdf', size: 'PDF' },
    { name: 'Sterowniki i wsparcie TSC Alpha-40L RFID', type: 'driver', url: support, size: 'Online' },
  ],
  relatedProducts: ['zebra-zq521-rfid', 'zebra-zq630-plus-rfid', 'zebra-zq511-rfid'], createdAt: '2026-10-16', sameAs: support,
}
