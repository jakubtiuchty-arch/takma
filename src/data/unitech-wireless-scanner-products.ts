import type { Product } from './products'

// Skanery bezprzewodowe, noszone i kieszonkowe Unitech oraz komputer noszony WD200 Plus (30.10.2026).
// Warianty tylko dla PN z ceną w /api/stock; priceFrom to wartość startowa, ceny i stany na karcie aktualizuje API.
// Cechy wspólne rodzin (np. obudowa i akumulator serii MS85x) opisuje strona marki, karty opisują to, co odróżnia model.
// Dokumentacja: docs/catalog/unitech-skanery-2026-10-30/S2.md

const TAGI_MAGAZYN: Product['tags'] = ['magazyn', 'logistyka', 'produkcja']
const TAGI_HANDEL: Product['tags'] = ['retail', 'magazyn', 'logistyka']

const MS852B_DS = { name: 'Karta katalogowa Unitech MS852B (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ms852b-karta-katalogowa-en.pdf', size: '1,2 MB' }
const MS852B_UM = { name: 'Instrukcja obsługi Unitech MS852B (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms852b-instrukcja-en.pdf', size: '4,5 MB' }
const MS852B_QSG = { name: 'Skrócona instrukcja Unitech MS852B (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms852b-skrocona-instrukcja-en.pdf', size: '2,7 MB' }
const MS852B_PLUS_DS = { name: 'Karta katalogowa Unitech MS852B Plus (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ms852b-plus-karta-katalogowa-en.pdf', size: '499 KB' }
const MS852B_PLUS_UM = { name: 'Instrukcja obsługi Unitech MS852B Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms852b-plus-instrukcja-en.pdf', size: '5,8 MB' }
const MS852B_PLUS_QSG = { name: 'Skrócona instrukcja Unitech MS852B Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms852b-plus-skrocona-instrukcja-en.pdf', size: '2,7 MB' }
const MS852B_LR_DS = { name: 'Karta katalogowa Unitech MS852B LR (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ms852b-lr-karta-katalogowa-en.pdf', size: '1,3 MB' }
const MS852B_LR_UM = { name: 'Instrukcja obsługi Unitech MS852B LR (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms852b-lr-instrukcja-en.pdf', size: '5,2 MB' }
const MS852B_LR_QSG = { name: 'Skrócona instrukcja Unitech MS852B LR (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms852b-lr-skrocona-instrukcja-en.pdf', size: '2,6 MB' }
const MS852P_DS = { name: 'Karta katalogowa Unitech MS852P (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ms852p-karta-katalogowa-en.pdf', size: '710 KB' }
const MS852P_UM = { name: 'Instrukcja obsługi Unitech MS852P (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms852p-instrukcja-en.pdf', size: '9,7 MB' }
const MS852B_PLUS_ESD_DS = { name: 'Karta katalogowa Unitech MS852B Plus ESD (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ms852b-plus-esd-karta-katalogowa-en.pdf', size: '404 KB' }
const MS852B_PLUS_ESD_UM = { name: 'Instrukcja obsługi Unitech MS852B Plus ESD (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms852b-plus-esd-instrukcja-en.pdf', size: '4,3 MB' }
const MS851B_ESD_DS = { name: 'Karta katalogowa Unitech MS851B ESD (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ms851b-esd-karta-katalogowa-en.pdf', size: '365 KB' }
const MS851B_ESD_QSG = { name: 'Skrócona instrukcja Unitech MS851B ESD (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms851b-esd-skrocona-instrukcja-en.pdf', size: '2,6 MB' }
const MS822B_DS = { name: 'Karta katalogowa Unitech MS822B (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ms822b-karta-katalogowa-en.pdf', size: '697 KB' }
const MS822B_UM = { name: 'Instrukcja obsługi Unitech MS822B (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms822b-instrukcja-en.pdf', size: '2,9 MB' }
const MS838B_DS = { name: 'Karta katalogowa Unitech MS838B (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ms838b-karta-katalogowa-en.pdf', size: '659 KB' }
const MS838B_UM = { name: 'Instrukcja obsługi Unitech MS838B (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms838b-instrukcja-en.pdf', size: '2,9 MB' }
const MS838B_QSG = { name: 'Skrócona instrukcja Unitech MS838B (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms838b-skrocona-instrukcja-en.pdf', size: '5,7 MB' }
const MS836B_DS = { name: 'Karta katalogowa Unitech MS836B (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ms836b-karta-katalogowa-en.pdf', size: '855 KB' }
const MS836B_UM = { name: 'Instrukcja obsługi Unitech MS836B (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms836b-instrukcja-en.pdf', size: '3,7 MB' }
const MS633_DS = { name: 'Karta katalogowa Unitech MS633 i MS633 LR (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ms633-karta-katalogowa-en.pdf', size: '539 KB' }
const MS633_UM = { name: 'Instrukcja obsługi Unitech MS633 i MS633 LR (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms633-instrukcja-en.pdf', size: '5,0 MB' }
const MS633_QSG = { name: 'Skrócona instrukcja Unitech MS633 i MS633 LR (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms633-skrocona-instrukcja-en.pdf', size: '3,2 MB' }
const MS652_DS = { name: 'Karta katalogowa Unitech MS652 Plus (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ms652-plus-karta-katalogowa-en.pdf', size: '683 KB' }
const MS652_UM = { name: 'Instrukcja obsługi Unitech MS652 Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms652-plus-instrukcja-en.pdf', size: '4,7 MB' }
const MS626_DS = { name: 'Karta katalogowa Unitech MS626 Plus (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ms626-plus-karta-katalogowa-en.pdf', size: '732 KB' }
const MS626_UM = { name: 'Instrukcja obsługi Unitech MS626 Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms626-plus-instrukcja-en.pdf', size: '4,0 MB' }
const MS626_QSG = { name: 'Skrócona instrukcja Unitech MS626 Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms626-plus-skrocona-instrukcja-en.pdf', size: '757 KB' }
const MS912_2D_DS = { name: 'Karta katalogowa Unitech MS912 Plus 2D (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ms912-plus-2d-karta-katalogowa-en.pdf', size: '411 KB' }
const MS912_2D_UM = { name: 'Instrukcja obsługi Unitech MS912 Plus 2D (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms912-plus-2d-instrukcja-en.pdf', size: '4,1 MB' }
const MS912_2D_QSG = { name: 'Skrócona instrukcja Unitech MS912 Plus 2D (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms912-plus-2d-skrocona-instrukcja-en.pdf', size: '430 KB' }
const MS912_DS = { name: 'Karta katalogowa Unitech MS912 Plus (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ms912-plus-karta-katalogowa-en.pdf', size: '448 KB' }
const MS912_UM = { name: 'Instrukcja obsługi Unitech MS912 Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms912-plus-instrukcja-en.pdf', size: '4,7 MB' }
const MS912_QSG = { name: 'Skrócona instrukcja Unitech MS912 Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms912-plus-skrocona-instrukcja-en.pdf', size: '353 KB' }
const MS926_DS = { name: 'Karta katalogowa Unitech MS926 (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-ms926-karta-katalogowa-en.pdf', size: '872 KB' }
const MS926_UM = { name: 'Instrukcja obsługi Unitech MS926 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms926-instrukcja-en.pdf', size: '7,9 MB' }
const MS926_QSG = { name: 'Skrócona instrukcja Unitech MS926 (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-ms926-skrocona-instrukcja-en.pdf', size: '2,9 MB' }
const WD200_DS = { name: 'Karta katalogowa Unitech WD200 Plus (EN)', type: 'datasheet' as const, url: '/downloads/unitech/unitech-wd200-plus-karta-katalogowa-en.pdf', size: '1,7 MB' }
const WD200_UM = { name: 'Instrukcja obsługi Unitech WD200 Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-wd200-plus-instrukcja-en.pdf', size: '3,0 MB' }
const WD200_QSG = { name: 'Skrócona instrukcja Unitech WD200 Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-wd200-plus-skrocona-instrukcja-en.pdf', size: '681 KB' }
const WD200_ACC = { name: 'Broszura akcesoriów Unitech WD200 Plus (EN)', type: 'manual' as const, url: '/downloads/unitech/unitech-wd200-plus-akcesoria-en.pdf', size: '783 KB' }
const MS852B_PLUS_ESD_QSG = MS852B_PLUS_QSG

const ms852b: Product = {
  id: 'unitech-ms852b',
  slug: 'unitech-ms852b',
  name: 'Unitech MS852B',
  seoH1: 'Unitech MS852B',
  seoTitle: 'Skaner Bluetooth Unitech MS852B 2D ze stacją ładującą',
  seoDescription: 'Skaner kodów kreskowych Unitech MS852B: bezprzewodowy imager 2D z łącznością Bluetooth do 100 m, stacją ładującą i akumulatorem 2850 mAh. Skaner bezprzewodowy Unitech MS852B, czytnik kodów 2D MS852B Unitech. PN: MS852-AUBB0C-SG.',
  shortDescription: 'Unitech MS852B — bezprzewodowy skaner 2D z Bluetooth i stacją ładującą: matryca 1280 × 960, odczyt OCR i kodów z ekranów telefonów, do 20 godzin pracy.',
  description: `Unitech MS852B to ręczny skaner 2D z Bluetooth do magazynu, produkcji, logistyki i ogólnego skanowania w handlu. Czyta kody 1D i 2D z ekranów telefonów, kody uszkodzone lub słabo wydrukowane oraz znaki OCR. Matryca CMOS 1280 × 960 z migawką rolling shutter rozpoznaje Code 39 od 5 mil i PDF417 od 6,6 mil. Lista symbologii obejmuje kody pocztowe, m.in. Intelligent Mail, KIX i Planet, oraz DotCode.

Skaner współpracuje ze stacją ładującą. Odłożony do stacji paruje się z nią automatycznie, a po włączeniu w ustawieniach może pracować w automatycznym trybie prezentacyjnym: w stacji czyta bez udziału spustu, a po wyjęciu wraca do trybu ze spustem. Poza zasięgiem w trybie Auto dane zostają w pamięci skanera (20 KB) i są wysyłane po powrocie w zasięg; w trybie wsadowym pamięć mieści 7 MB.

Wymienny akumulator 2850 mAh daje do 20 godzin pracy, a pełne ładowanie trwa poniżej 6,5 godziny. Obudowa IP42 wytrzymuje upadki z 2,1 m na beton. Stacja ładująca z przewodem USB należy do zestawu.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-bezprzewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS852B',
  priceFrom: 1366.35,
  availability: 'unavailable',
  images: ['/images/products/MS852-AUBB0C-SG.png', '/images/products/MS852-AUBB0C-SG-2.png', '/images/products/MS852-AUBB0C-SG-3.png'],
  imageDescriptions: [
    'Unitech MS852B — skaner 2D w stacji ładującej, widok z przodu pod kątem na okno skanera i żółty spust',
    'Unitech MS852B — widok z boku, skaner odłożony w stację',
    'Unitech MS852B — widok od tyłu, skaner w stacji ładującej',
  ],
  tags: TAGI_MAGAZYN,
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'MS852-AUBB0C-SG' },
    { name: 'Typ skanera', value: 'Ręczny skaner 2D, bezprzewodowy (Bluetooth), ze stacją ładującą' },
    { name: 'Matryca', value: 'CMOS 1280 × 960, migawka rolling shutter' },
    { name: 'Celownik i oświetlenie', value: 'Celownik zielony LED 610 nm; jedna ciepła biała dioda' },
    { name: 'Rozdzielczość', value: '5,0 mil (Code 39), 6,6 mil (PDF417)' },
    { name: 'Głębia ostrości', value: 'UPC 100%: 4,6–49,5 cm; QR 20 mil: 3,8–29,2 cm; Code 39 5 mil: 6,1–24,1 cm; Data Matrix 10 mil: 7,4–21,6 cm' },
    { name: 'Kody 2D', value: 'QR, DotCode, Data Matrix, Aztec, PDF417, Micro PDF417, MaxiCode, Codablock A i F, GS1 Composite, Han Xin; OCR' },
    { name: 'Kody pocztowe', value: 'Australian Post, British Post, Canadian Post, Intelligent Mail, Japanese Post, KIX, Korea Post, Planet, Postnet' },
    { name: 'Interfejsy', value: 'USB przez przewód stacji; Bluetooth: profile HID i SPP' },
    { name: 'Łączność Bluetooth', value: 'Dual mode (LE 4.2 i 2.1+EDR), do 100 m w otwartej przestrzeni' },
    { name: 'Pamięć', value: '7 MB w trybie wsadowym, 20 KB w trybie Auto' },
    { name: 'Akumulator', value: 'Wymienny, 2850 mAh; ładowanie poniżej 6,5 h; praca do 20 h' },
    { name: 'Klasa szczelności', value: 'IP42' },
    { name: 'Odporność na upadki', value: '2,1 m na beton (sam skaner)' },
    { name: 'Odporność ESD', value: '8 kV w kontakcie, 15 kV w powietrzu' },
    { name: 'Temperatura pracy', value: '-10°C do +50°C' },
    { name: 'Wymiary i masa', value: 'Skaner 87,8 × 71,6 × 177,7 mm, 213 g; stacja 120,6 × 88,7 × 86,0 mm' },
    { name: 'Zawartość zestawu', value: 'Skaner z akumulatorem, stacja, przewód USB' },
    { name: 'Gwarancja producenta', value: '36 miesięcy' },
  ],
  applications: ['Inwentaryzacja w magazynie i produkcji', 'Skanowanie kodów z ekranów telefonów', 'Odczyt kodów OCR i kodów pocztowych'],
  variants: [
    { partNumber: 'MS852-AUBB0C-SG', name: 'MS852-AUBB0C-SG, Bluetooth, stacja ładująca, przewód USB', attributes: {}, priceFrom: 1366.35, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms85x-stacja-ladujaca', 'unitech-ms85x-bateria', 'unitech-ms85x-podstawka', 'unitech-ms85x-uchwyt-biurkowy', 'unitech-ms85x-etui', 'unitech-ms85x-przewod-usb', 'unitech-rp902-zasilacz'],
  relatedProducts: ['unitech-ms852b-plus', 'unitech-ms852b-lr', 'unitech-ms852p', 'unitech-ms851b-esd', 'datalogic-gryphon-gbt4600', 'newland-hr33-marlin-bt'],
  downloads: [MS852B_DS, MS852B_UM, MS852B_QSG],
  faq: [
    {
      question: 'Czym MS852B różni się od MS852B Plus?',
      answer: 'W MS852B pracuje sensor 1280 × 960 (rolling shutter), który rozróżnia Code 39 od 5 mil, a akumulator wystarcza na 20 godzin. [MS852B Plus](/produkt/unitech-ms852b-plus) ma sensor z migawką globalną o rozdzielczości 1280 × 800, czyta kody od 3 mil, pracuje ponad 25 godzin i dekoduje Digimarc.',
    },
    {
      question: 'Z jakiej odległości MS852B czyta kody?',
      answer: 'Kody UPC 100% skaner odczytuje od 4,6 do 49,5 cm, a kody QR 20 mil od 3,8 do 29,2 cm. Do odczytu z większych odległości służy [MS852B LR](/produkt/unitech-ms852b-lr).',
    },
    {
      question: 'Jak działa automatyczny tryb prezentacyjny w stacji?',
      answer: 'Po zeskanowaniu kodu ustawienia „enable” skaner odłożony do stacji czyta kody bez naciskania spustu. Po wyjęciu ze stacji wraca do trybu ze spustem.',
    },
    {
      question: 'Czy do ładowania MS852B potrzebny jest zasilacz?',
      answer: 'W zestawie z przewodem USB stacja ładuje skaner po podłączeniu do komputera. Zasilacz jest dołączany do wersji z przewodem RS-232, której nie ma w ofercie.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS852B?',
      answer: 'Odbiornik USB 2,4 GHz zamiast Bluetooth ma [MS852P](/produkt/unitech-ms852p). Do stref chronionych przed wyładowaniami elektrostatycznymi służy [MS852B Plus ESD](/produkt/unitech-ms852b-plus-esd). Szerszy wybór pokazuje kategoria [skanery bezprzewodowe](/skanery-kodow-kreskowych/bezprzewodowe).',
    },
  ],
  createdAt: '2026-10-30',
  updatedAt: '2026-10-30',
}

const ms852bPlus: Product = {
  id: 'unitech-ms852b-plus',
  slug: 'unitech-ms852b-plus',
  name: 'Unitech MS852B Plus',
  seoH1: 'Unitech MS852B Plus',
  seoTitle: 'Skaner Bluetooth Unitech MS852B Plus 2D z migawką globalną',
  seoDescription: 'Skaner kodów kreskowych Unitech MS852B Plus: bezprzewodowy imager 2D 1280 × 800 z migawką globalną, odczytem OCR, DotCode i Digimarc, wersje SR i HD. Czytnik kodów 2D MS852B Plus Unitech, skaner Bluetooth MS852B+. PN: MS852-VUBB0C-SG, MS852-ZUBB0C-SG.',
  shortDescription: 'Unitech MS852B Plus — bezprzewodowy skaner 2D z matrycą 1280 × 800 i migawką globalną, odczytem OCR, DotCode i Digimarc; wersje SR i HD.',
  description: `Unitech MS852B Plus to bezprzewodowy imager 2D z megapikselową matrycą 1280 × 800 i migawką globalną. Jest przeznaczony do logistyki, produkcji oraz inwentaryzacji w magazynach handlowych. Poza kodami 1D i 2D odczytuje znaki OCR, np. ze strony danych paszportu, kody DotCode stosowane na oponach i opakowaniach papierosów oraz kody Digimarc na opakowaniach detalicznych.

Rozdzielczość dla kodów 1D wynosi 3 mil (0,075 mm), a odczyt jest możliwy w świetle do 100 000 luksów, czyli w pełnym słońcu. Celownik jest laserowy czerwony, a oświetlenie białe. W wersji standardowej kod UPC 13 mil jest odczytywany do 57,3 cm, oraz Code 39 20 mil do 80 cm.

Akumulator 2850 mAh pozwala pracować ponad 25 godzin (odczyt co 5 sekund), a ładowanie trwa poniżej 6,5 godziny. Dane zeskanowane poza zasięgiem trafiają do pamięci i są przesyłane po powrocie w zasięg; tryb wsadowy korzysta z pamięci 7 MB. Karta obejmuje wersję standardową (SR) oraz wersję HD do drobnych kodów.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-bezprzewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS852BPlus',
  priceFrom: 1589.09,
  availability: 'unavailable',
  images: ['/images/products/MS852-VUBB0C-SG.png', '/images/products/MS852-VUBB0C-SG-2.png', '/images/products/MS852-VUBB0C-SG-3.png'],
  imageDescriptions: [
    'Unitech MS852B Plus — skaner 2D odłożony do stacji ładującej, widok z boku',
    'Unitech MS852B Plus — widok z przodu pod kątem, okno skanera i żółty spust',
    'Unitech MS852B Plus — widok od tyłu, skaner w stacji ładującej',
  ],
  tags: TAGI_MAGAZYN,
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'MS852-VUBB0C-SG (SR), MS852-ZUBB0C-SG (HD)' },
    { name: 'Typ skanera', value: 'Ręczny skaner 2D, bezprzewodowy (Bluetooth), ze stacją ładującą; wersja SR (standardowa) i HD (gęste kody)' },
    { name: 'Matryca', value: '1280 × 800, migawka globalna' },
    { name: 'Celownik i oświetlenie', value: 'Celownik laserowy czerwony; oświetlenie białe LED' },
    { name: 'Rozdzielczość', value: '3 mil (0,075 mm) dla kodów 1D' },
    { name: 'Głębia ostrości (SR)', value: 'UPC 13 mil: 3,4–57,3 cm; Code 39 20 mil: 3,5–80 cm; Code 39 5 mil: 7–30,1 cm; QR 15 mil: 3,3–39 cm' },
    { name: 'Kody specjalne', value: 'OCR, DotCode, Digimarc' },
    { name: 'Kody pocztowe', value: 'Australian, British, Canadian, China, Japanese, Korea, Netherlands Post, Planet, Postnet' },
    { name: 'Odporność na światło', value: 'Do 100 000 luksów (światło słoneczne)' },
    { name: 'Interfejsy', value: 'USB przez przewód stacji; Bluetooth: profile HID i SPP' },
    { name: 'Łączność Bluetooth', value: 'Dual mode (LE 4.2 i 2.1+EDR), do 100 m w otwartej przestrzeni' },
    { name: 'Pamięć', value: '7 MB w trybie wsadowym, 20 KB w trybie Auto' },
    { name: 'Akumulator', value: 'Wymienny, 2850 mAh; ładowanie poniżej 6,5 h; praca ponad 25 h' },
    { name: 'Klasa szczelności', value: 'IP42' },
    { name: 'Odporność na upadki', value: '2,1 m na beton (sam skaner)' },
    { name: 'Temperatura pracy', value: '-10°C do +50°C' },
    { name: 'Wymiary i masa', value: 'Skaner 87,8 × 71,6 × 177,7 mm, 213 g; stacja 120,6 × 88,7 × 86,0 mm' },
    { name: 'Zawartość zestawu', value: 'Skaner z akumulatorem, stacja, przewód USB' },
    { name: 'Gwarancja producenta', value: '36 miesięcy' },
  ],
  applications: ['Logistyka i inwentaryzacja w magazynach handlowych', 'Odczyt kodów DotCode na oponach i opakowaniach', 'Odczyt OCR dokumentów'],
  variants: [
    { partNumber: 'MS852-VUBB0C-SG', name: 'MS852-VUBB0C-SG, wersja standardowa (SR), stacja, przewód USB', attributes: { 'Optyka': 'Standardowa (SR)' }, priceFrom: 1589.09, availability: 'unavailable' },
    { partNumber: 'MS852-ZUBB0C-SG', name: 'MS852-ZUBB0C-SG, wersja HD, stacja, przewód USB', attributes: { 'Optyka': 'Gęste kody (HD)' }, priceFrom: 1589.09, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    'Optyka': 'Silnik skanujący MS852B Plus w dwóch wersjach.\n\n• Standardowa (SR) — odczyt z większej odległości: kody UPC 13 mil do 57,3 cm, Code 39 20 mil do 80 cm.\n\n• Gęste kody (HD) — silnik do drobnych kodów, np. Data Matrix o module 6,7 mil, odczytywanych z mniejszej odległości.',
  },
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms85x-stacja-ladujaca', 'unitech-ms85x-bateria', 'unitech-ms85x-podstawka', 'unitech-ms85x-uchwyt-biurkowy', 'unitech-ms85x-etui', 'unitech-ms85x-przewod-usb', 'unitech-rp902-zasilacz'],
  relatedProducts: ['unitech-ms852b', 'unitech-ms852b-lr', 'unitech-ms852p', 'unitech-ms852b-plus-esd', 'datalogic-gryphon-gbt4600', 'newland-hr33-marlin-bt'],
  downloads: [MS852B_PLUS_DS, MS852B_PLUS_UM, MS852B_PLUS_QSG],
  faq: [
    {
      question: 'Co odróżnia MS852B Plus od MS852B?',
      answer: 'Plus rejestruje obraz migawką globalną i rozpoznaje kody już od 3 mil, a nie od 5 mil. Czas pracy rośnie z 20 do ponad 25 godzin, a lista kodów obejmuje Digimarc. Podstawowy [MS852B](/produkt/unitech-ms852b) korzysta z migawki rolling shutter.',
    },
    {
      question: 'Którą wersję wybrać: SR czy HD?',
      answer: 'Wersja SR czyta z większej odległości i sprawdza się przy etykietach logistycznych. Wersja HD jest przeznaczona do drobnych kodów, np. Data Matrix 6,7 mil, które trzeba odczytywać z mniejszej odległości. Różnicę wskazuje kolumna „Optyka” w tabeli wariantów.',
    },
    {
      question: 'Czy zasięg 100 m dotyczy odczytu kodów?',
      answer: 'Nie. Wartość 100 m opisuje zasięg radia Bluetooth między skanerem a stacją lub urządzeniem w otwartej przestrzeni. Odległość odczytu kodu zależy od jego rozmiaru i podaje ją tabela głębi ostrości w specyfikacji.',
    },
    {
      question: 'Jak długo działa akumulator?',
      answer: 'Skaner pracuje ponad 25 godzin przy jednym odczycie co 5 sekund. Akumulator 2850 mAh jest wymienny, a ładowanie trwa poniżej 6,5 godziny.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS852B Plus?',
      answer: 'Wersja w obudowie antystatycznej to [MS852B Plus ESD](/produkt/unitech-ms852b-plus-esd). Odczyt z odległości do 21 m zapewnia [MS852B LR](/produkt/unitech-ms852b-lr). Pozostałe skanery Bluetooth zebrano w kategorii [skanery bezprzewodowe](/skanery-kodow-kreskowych/bezprzewodowe).',
    },
  ],
  createdAt: '2026-10-30',
  updatedAt: '2026-10-30',
}

const ms852bLr: Product = {
  id: 'unitech-ms852b-lr',
  slug: 'unitech-ms852b-lr',
  name: 'Unitech MS852B LR',
  seoH1: 'Unitech MS852B LR',
  seoTitle: 'Skaner Bluetooth Unitech MS852B LR 2D — odczyt do 21 m',
  seoDescription: 'Skaner kodów kreskowych Unitech MS852B LR: bezprzewodowy imager 2D dalekiego zasięgu, odczyt do 21 m, pamięć 590 000 kodów, stacja ładująca w zestawie. Skaner daleki zasięg Unitech MS852B LR, czytnik kodów 2D LR. PN: MS852-OUBB0C-SG.',
  shortDescription: 'Unitech MS852B LR — bezprzewodowy skaner 2D dalekiego zasięgu: odczyt do 21 m, tolerancja ruchu, pamięć do 590 000 kodów, stacja ładująca w zestawie.',
  description: `Unitech MS852B LR to bezprzewodowy skaner 2D o dużym zasięgu odczytu, przeznaczony do magazynów z regałami wysokiego składowania, placów, zakładów produkcyjnych i serwisu w terenie. Kody Code 39 o module 100 mil odczytuje z odległości do 17,78 m, kody QR 100 mil do 20,85 m, a z bliska od 7,6 cm. Kody odblaskowe Code 128 100 mil czyta do 17,78 m. Matryca 1280 × 800 z migawką globalną i tolerancja ruchu pozwalają skanować w trakcie przemieszczania się.

Celownik ma długość fali 655 nm, a oświetlenie jest czerwone (660 nm). Głośniejszy sygnał dźwiękowy i jaśniejsze diody ułatwiają odbiór potwierdzenia w ciemnym miejscu. Poza zasięgiem Bluetooth skaner przechowuje w pamięci do 590 000 kodów.

Obudowa IP42 wytrzymuje upadek z 1,8 m na beton, a w [etui ochronnym 386793G](/produkt/unitech-ms85x-etui) z 2,2 m; etui nie wchodzi w skład zestawu. Skaner waży 233 g i pracuje ponad 12 godzin na jednym ładowaniu akumulatora 2850 mAh. Do skanera dołączono stację z przewodem USB oraz akumulator.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-bezprzewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS852BLR',
  priceFrom: 3019.26,
  availability: 'unavailable',
  images: ['/images/products/MS852-OUBB0C-SG.png', '/images/products/MS852-OUBB0C-SG-2.png', '/images/products/MS852-OUBB0C-SG-3.png'],
  imageDescriptions: [
    'Unitech MS852B LR w żółtym etui ochronnym (akcesorium) — skaner w stacji ładującej, widok z boku',
    'Unitech MS852B LR w żółtym etui ochronnym (akcesorium) — widok z przodu pod kątem na okno skanera',
    'Unitech MS852B LR w żółtym etui ochronnym (akcesorium) — widok z przodu, skaner w stacji',
  ],
  tags: TAGI_MAGAZYN,
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'MS852-OUBB0C-SG' },
    { name: 'Typ skanera', value: 'Ręczny skaner 2D dalekiego zasięgu (long range), bezprzewodowy (Bluetooth), ze stacją ładującą' },
    { name: 'Matryca', value: '1280 × 800, migawka globalna' },
    { name: 'Celownik i oświetlenie', value: 'Celownik 655 nm; oświetlenie Hyper Red 660 nm' },
    { name: 'Rozdzielczość', value: '3,0 mil (Code 39), 5,0 mil (PDF417)' },
    { name: 'Głębia ostrości', value: 'Code 39 100 mil: 50,8 cm – 17,78 m; Code 128 100 mil (odblaskowy): 76,2 cm – 17,78 m; QR 100 mil: 40 cm – 20,85 m; Code 39 10 mil: 7,6 cm – 2,16 m' },
    { name: 'Odporność na światło', value: 'Do 107 639 luksów' },
    { name: 'Pamięć', value: 'Do 590 000 kodów poza zasięgiem; 7 MB w trybie wsadowym, 20 KB w trybie Auto' },
    { name: 'Interfejsy', value: 'USB przez przewód stacji; Bluetooth: profile HID i SPP' },
    { name: 'Łączność Bluetooth', value: 'Dual mode (LE 4.2 i 2.1+EDR), do 100 m w otwartej przestrzeni' },
    { name: 'Akumulator', value: 'Wymienny, 2850 mAh; ładowanie poniżej 6,5 h; praca ponad 12 h (do 50 000 odczytów)' },
    { name: 'Klasa szczelności', value: 'IP42' },
    { name: 'Odporność na upadki', value: '1,8 m na beton; 2,2 m w etui ochronnym (etui sprzedawane osobno)' },
    { name: 'Temperatura pracy', value: '-10°C do +50°C' },
    { name: 'Wymiary i masa', value: 'Skaner 87,8 × 71,6 × 177,7 mm, 233 g; stacja 120,6 × 88,7 × 86,0 mm' },
    { name: 'Zawartość zestawu', value: 'Skaner z akumulatorem, stacja, przewód USB; etui ochronne nie wchodzi w skład zestawu' },
    { name: 'Gwarancja producenta', value: '36 miesięcy' },
  ],
  applications: ['Odczyt etykiet z regałów wysokiego składowania', 'Skanowanie z odległości na placach i w serwisie w terenie', 'Skanowanie w ruchu'],
  variants: [
    { partNumber: 'MS852-OUBB0C-SG', name: 'MS852-OUBB0C-SG, daleki zasięg, stacja, przewód USB', attributes: {}, priceFrom: 3019.26, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms85x-etui', 'unitech-ms85x-stacja-ladujaca', 'unitech-ms85x-bateria', 'unitech-ms85x-podstawka', 'unitech-ms85x-uchwyt-biurkowy', 'unitech-ms85x-przewod-usb', 'unitech-rp902-zasilacz'],
  relatedProducts: ['unitech-ms852b', 'unitech-ms852b-plus', 'unitech-ms852p', 'datalogic-gryphon-gbt4600', 'newland-hr33-marlin-bt'],
  downloads: [MS852B_LR_DS, MS852B_LR_UM, MS852B_LR_QSG],
  faq: [
    {
      question: 'Z jakiej odległości MS852B LR odczytuje kody?',
      answer: 'Zasięg odczytu wynosi od 7,6 cm do 21 m, zależnie od rodzaju i wielkości kodu. Kody QR 100 mil są czytane do 20,85 m, a Code 39 100 mil na papierze do 17,78 m. Zasięg 21 m nie dotyczy trybów automatycznych (prezentacyjnego i Auto Aim).',
    },
    {
      question: 'Czy etui ochronne jest w zestawie?',
      answer: 'Nie. Etui [386793G](/produkt/unitech-ms85x-etui) kupuje się osobno. Z etui skaner wytrzymuje upadki z 2,2 m, a bez etui z 1,8 m.',
    },
    {
      question: 'Ile kodów skaner zapisuje poza zasięgiem Bluetooth?',
      answer: 'Pamięć mieści do 590 000 kodów. Skaner wysyła je do urządzenia po powrocie w zasięg.',
    },
    {
      question: 'Czym MS852B LR różni się od MS852B Plus?',
      answer: 'MS852B LR jest zoptymalizowany pod odczyt z dużych odległości i w ruchu, a czas pracy wynosi ponad 12 godzin. [MS852B Plus](/produkt/unitech-ms852b-plus) pracuje ponad 25 godzin i odczytuje drobniejsze kody z mniejszej odległości.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS852B LR?',
      answer: 'Skaner bez etui, o krótszym zasięgu, to [MS852B](/produkt/unitech-ms852b). Skanery o długim zasięgu innych marek są w kategorii [skanery bezprzewodowe](/skanery-kodow-kreskowych/bezprzewodowe).',
    },
  ],
  createdAt: '2026-10-30',
  updatedAt: '2026-10-30',
}

const ms852p: Product = {
  id: 'unitech-ms852p',
  slug: 'unitech-ms852p',
  name: 'Unitech MS852P',
  seoH1: 'Unitech MS852P',
  seoTitle: 'Skaner bezprzewodowy Unitech MS852P 2D z odbiornikiem USB 2,4 GHz',
  seoDescription: 'Skaner kodów kreskowych Unitech MS852P: bezprzewodowy imager 2D z radiem 2,4 GHz i odbiornikiem USB, stacją i zasilaczem w zestawie, do 15 godzin pracy. Skaner z radiem 2,4 GHz Unitech MS852P, czytnik kodów 2D MS852P. PN: MS852-AUPBGC-SG.',
  shortDescription: 'Unitech MS852P — bezprzewodowy skaner 2D z radiem 2,4 GHz i odbiornikiem USB: bez parowania Bluetooth, odczyt OCR-A i OCR-B, stacja i zasilacz w zestawie.',
  description: `Unitech MS852P to ręczny skaner 2D komunikujący się z komputerem przez radio 2,4 GHz. Odbiornik USB dołączony do zestawu działa po włożeniu do portu, bez parowania Bluetooth, a zasięg wynosi do 10 m w otwartej przestrzeni. Rozwiązanie jest przeznaczone do stanowisk z laptopem lub komputerem.

Zastosowania obejmują szpitale (kody na probówkach), magazynach, produkcji i administracji publicznej. Matryca 1280 × 800 z celownikiem laserowym 655 nm czyta kody 1D i 2D, również uszkodzone lub słabo wydrukowane, oraz znaki OCR-A i OCR-B, np. numery z paszportów. Kod Code 39 20 mil skaner odczytuje do 91,7 cm, a UPC-A do 63,2 cm. Dane można formatować prefiksem, sufiksem i znacznikiem Code ID, a poprawny odczyt zgłaszają dioda LED, brzęczyk i wibrator.

Wymienny akumulator 2850 mAh ładuje się w stacji. Pełne ładowanie trwa około 5 godzin, a czas pracy wynosi do 15 godzin. Zestaw uzupełniają odbiornik USB, stacja, przewód do stacji i zasilacz. Obudowa IP42 jest odporna na upadki z 2,1 m.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-bezprzewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS852P',
  priceFrom: 2127.86,
  availability: 'unavailable',
  images: ['/images/products/MS852-AUPBGC-SG.png', '/images/products/MS852-AUPBGC-SG-2.png'],
  imageDescriptions: [
    'Unitech MS852P — skaner 2D w stacji widoczny od przodu, czerwony celownik w oknie skanera',
    'Unitech MS852P — widok z przodu pod kątem, skaner w stacji z przewodem',
  ],
  tags: TAGI_MAGAZYN,
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'MS852-AUPBGC-SG' },
    { name: 'Typ skanera', value: 'Ręczny skaner 2D, bezprzewodowy (radio 2,4 GHz, odbiornik USB), ze stacją ładującą' },
    { name: 'Matryca', value: 'CMOS 1280 × 800' },
    { name: 'Celownik i oświetlenie', value: 'Celownik laserowy 655 nm; jedna dioda Hyper Red 660 nm' },
    { name: 'Rozdzielczość', value: '3 mil (Code 39), 5 mil (Code 128 i PDF417)' },
    { name: 'Głębia ostrości', value: 'Code 39 3 mil: 7,6–14,7 cm; Code 39 20 mil: 4,1–91,7 cm; UPC-A 100%: 4,1–63,2 cm; QR 20 mil: 2,8–44,5 cm' },
    { name: 'Kody OCR', value: 'OCR-A, OCR-B' },
    { name: 'Interfejsy', value: 'USB przez odbiornik; radio 2,4 GHz, profile SPP i HID' },
    { name: 'Zasięg radia', value: '10 m w otwartej przestrzeni' },
    { name: 'Akumulator', value: 'Wymienny, 2850 mAh; ładowanie w stacji ok. 5 h; praca do 15 h' },
    { name: 'Klasa szczelności', value: 'IP42' },
    { name: 'Odporność na upadki', value: '2,1 m na beton (sam skaner)' },
    { name: 'Temperatura pracy', value: '-10°C do +50°C' },
    { name: 'Wymiary i masa', value: 'Skaner 87,8 × 71,6 × 177,7 mm, 213 g; stacja 120,6 × 88,7 × 86,0 mm' },
    { name: 'Zawartość zestawu', value: 'Skaner z akumulatorem, odbiornik USB, stacja, przewód USB do stacji, zasilacz' },
    { name: 'Gwarancja producenta', value: '36 miesięcy' },
  ],
  applications: ['Skanowanie kodów na probówkach w szpitalu', 'Stanowiska komputerowe w magazynie i produkcji', 'Odczyt numerów OCR z dokumentów'],
  variants: [
    { partNumber: 'MS852-AUPBGC-SG', name: 'MS852-AUPBGC-SG, radio 2,4 GHz, odbiornik USB, stacja, zasilacz', attributes: {}, priceFrom: 2127.86, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms85x-bateria', 'unitech-ms85x-etui', 'unitech-ms85x-podstawka', 'unitech-ms85x-uchwyt-biurkowy', 'unitech-ms85x-przewod-usb', 'unitech-rp902-zasilacz'],
  relatedProducts: ['unitech-ms852b', 'unitech-ms852b-plus', 'unitech-ms838b', 'unitech-ms836b', 'datalogic-quickscan-qm2500', 'datalogic-gryphon-gm4200'],
  downloads: [MS852P_DS, MS852P_UM],
  faq: [
    {
      question: 'Czy MS852P wymaga parowania Bluetooth?',
      answer: 'Nie. Skaner komunikuje się przez radio 2,4 GHz z odbiornikiem USB z zestawu. Odbiornik wystarczy włożyć do portu komputera.',
    },
    {
      question: 'Jaki jest zasięg MS852P?',
      answer: 'Zasięg radia wynosi do 10 m w otwartej przestrzeni. Skaner z Bluetooth o zasięgu do 100 m to [MS852B](/produkt/unitech-ms852b).',
    },
    {
      question: 'Czy MS852P odczytuje kody OCR?',
      answer: 'Tak. Skaner obsługuje czcionki OCR-A i OCR-B, które stosuje się m.in. do numerów w paszportach.',
    },
    {
      question: 'Co zawiera zestaw MS852-AUPBGC-SG?',
      answer: 'Zestaw obejmuje skaner z akumulatorem, odbiornik USB, stację, przewód USB do stacji oraz zasilacz. Akumulator ładuje się w stacji około 5 godzin.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS852P?',
      answer: 'Skaner 2D z radiem 2,4 GHz i odbiornikiem w formie klucza USB to [MS838B](/produkt/unitech-ms838b), a z odbiornikiem w stacji — [MS822B](/produkt/unitech-ms822b). Całą ofertę skanerów radiowych i Bluetooth pokazuje kategoria [skanery bezprzewodowe](/skanery-kodow-kreskowych/bezprzewodowe).',
    },
  ],
  createdAt: '2026-10-30',
  updatedAt: '2026-10-30',
}

const ms852bPlusEsd: Product = {
  id: 'unitech-ms852b-plus-esd',
  slug: 'unitech-ms852b-plus-esd',
  name: 'Unitech MS852B Plus ESD',
  seoH1: 'Unitech MS852B Plus ESD',
  seoTitle: 'Skaner ESD Unitech MS852B Plus 2D Bluetooth do stref EPA',
  seoDescription: 'Skaner ESD Unitech MS852B Plus: Bluetooth, imager 2D HD w obudowie antystatycznej do pomieszczeń czystych, z odczytem kodów DPM, Bluetooth i stacją ESD. Skaner antystatyczny Unitech MS852B Plus ESD, czytnik kodów ESD. PN: MS852-ZUBB0C-LG.',
  shortDescription: 'Unitech MS852B Plus ESD — bezprzewodowy skaner 2D HD w obudowie antystatycznej do stref chronionych przed wyładowaniami; odczyt kodów DPM, Bluetooth, ponad 25 godzin pracy.',
  description: `Unitech MS852B Plus ESD to bezprzewodowy skaner 2D do stref chronionych przed wyładowaniami elektrostatycznymi: pomieszczeń czystych i zakładów produkcji wrażliwych na ładunki statyczne. Środek antystatyczny jest wmieszany w tworzywo obudowy i przewodu, dlatego ochrona nie ściera się jak powłoka nałożona na powierzchnię. Rezystancja powierzchniowa mieści się w zakresie 10⁵–10⁹ Ω na kwadrat, a materiał nie zawiera chloru.

Silnik w wersji HD czyta kody Code 39 o module 3 mil z odległości 6,6–18,3 cm oraz kody Data Matrix 6,7 mil z 7,2–18,0 cm. Skaner obsługuje kody DPM, znaki OCR, DotCode i Digimarc. Sygnał dźwiękowy jest głośniejszy, a diody jaśniejsze, więc potwierdzenie odczytu widać i słychać także w ciemnym pomieszczeniu.

Skaner łączy się przez Bluetooth w zasięgu 100 m w linii widoczności i przekazuje dane do komputera przez stację z przewodem USB. Wymienny akumulator 2850 mAh zapewnia ponad 25 godzin pracy i do 50 000 odczytów na jednym ładowaniu. Klasa szczelności to IP42, a odporność na upadek 2,1 m na beton.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-bezprzewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS852BPLUS_ESD',
  priceFrom: 2097.59,
  availability: 'available',
  images: ['/images/products/MS852-ZUBB0C-LG.png', '/images/products/MS852-ZUBB0C-LG-2.png'],
  imageDescriptions: [
    'Unitech MS852B Plus ESD — skaner 2D w czarnej stacji ładującej, widok z przodu pod kątem',
    'Unitech MS852B Plus ESD — skaner widoczny z boku i od tyłu, czarna obudowa antystatyczna',
  ],
  tags: TAGI_MAGAZYN,
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'MS852-ZUBB0C-LG' },
    { name: 'Typ skanera', value: 'Ręczny skaner 2D HD (High Density), bezprzewodowy (Bluetooth), ESD, ze stacją ładującą' },
    { name: 'Obudowa ESD', value: 'Antystatyk wmieszany w tworzywo obudowy i przewodu; 10⁵–10⁹ Ω/sq; bez chloru' },
    { name: 'Matryca', value: '1280 × 800, migawka globalna' },
    { name: 'Rozdzielczość', value: '3 mil (0,075 mm) dla kodów 1D' },
    { name: 'Głębia ostrości', value: 'Code 39 3 mil: 6,6–18,3 cm; Data Matrix 6,7 mil: 7,2–18,0 cm; QR 15 mil: 2,7–30,8 cm; UPC 13 mil: 3,8–40,5 cm' },
    { name: 'Kody specjalne', value: 'DPM, OCR, DotCode, Digimarc' },
    { name: 'Interfejsy', value: 'USB przez przewód stacji; Bluetooth: profile HID i SPP' },
    { name: 'Łączność Bluetooth', value: 'Dual mode (LE 4.2 i 2.1+EDR), do 100 m w otwartej przestrzeni' },
    { name: 'Tryby pracy', value: 'Ze spustem, prezentacyjny, buforowy' },
    { name: 'Pamięć', value: '7 MB w trybie wsadowym, 20 KB w trybie Auto' },
    { name: 'Akumulator', value: 'Wymienny, 2850 mAh; ładowanie poniżej 6,5 h; praca ponad 25 h' },
    { name: 'Klasa szczelności', value: 'IP42' },
    { name: 'Odporność na upadki', value: '2,1 m na beton (sam skaner)' },
    { name: 'Temperatura pracy', value: '-10°C do +50°C' },
    { name: 'Zawartość zestawu', value: 'Skaner z akumulatorem, stacja, przewód USB' },
    { name: 'Gwarancja producenta', value: '36 miesięcy' },
  ],
  applications: ['Pomieszczenia czyste i strefy EPA', 'Produkcja półprzewodników i elektroniki', 'Odczyt kodów DPM'],
  variants: [
    { partNumber: 'MS852-ZUBB0C-LG', name: 'MS852-ZUBB0C-LG, ESD, HD, Bluetooth, stacja ESD, przewód USB', attributes: {}, priceFrom: 2097.59, availability: 'available' },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms85x-stacja-ladujaca-esd', 'unitech-ms85x-bateria', 'unitech-ms85x-przewod-usb', 'unitech-ms85x-podstawka', 'unitech-ms85x-uchwyt-biurkowy', 'unitech-ms85x-etui', 'unitech-rp902-zasilacz'],
  relatedProducts: ['unitech-ms851b-esd', 'unitech-ms852b-plus', 'unitech-ms852b', 'datalogic-gryphon-gbt4600', 'newland-hr33-marlin-bt'],
  downloads: [MS852B_PLUS_ESD_DS, MS852B_PLUS_ESD_UM, MS852B_PLUS_QSG],
  faq: [
    {
      question: 'Czym skaner ESD różni się od zwykłego MS852B Plus?',
      answer: 'Obudowa i przewód są wykonane z tworzywa z antystatykiem wmieszanym w materiał, a skaner ma silnik HD z odczytem DPM. Zwykły [MS852B Plus](/produkt/unitech-ms852b-plus) nie ma obudowy antystatycznej.',
    },
    {
      question: 'Dlaczego ochrona antystatyczna nie ściera się?',
      answer: 'Środek antystatyczny jest wmieszany w tworzywo, a nie nałożony na jego powierzchnię. Antystatyk nadal dociera do powierzchni, więc ochrona utrzymuje się mimo przecierania obudowy.',
    },
    {
      question: 'Jaką stację ładującą należy stosować?',
      answer: 'Do skanerów ESD przeznaczona jest [stacja ESD 5000-900082G](/produkt/unitech-ms85x-stacja-ladujaca-esd). Zwykła stacja 5000-900064G nie jest na liście zgodnych akcesoriów tej wersji.',
    },
    {
      question: 'Czy skaner odczytuje kody DPM?',
      answer: 'Tak. Silnik HD obsługuje kody DPM, czyli wybijane lub grawerowane bezpośrednio na elementach. Skaner czyta też kody OCR, DotCode i Digimarc.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS852B Plus ESD?',
      answer: 'Skaner ESD z laserem 1D to [MS851B ESD](/produkt/unitech-ms851b-esd). Skaner bez obudowy antystatycznej to [MS852B Plus](/produkt/unitech-ms852b-plus).',
    },
  ],
  createdAt: '2026-10-30',
  updatedAt: '2026-10-30',
}

const ms851bEsd: Product = {
  id: 'unitech-ms851b-esd',
  slug: 'unitech-ms851b-esd',
  name: 'Unitech MS851B ESD',
  seoH1: 'Unitech MS851B ESD',
  seoTitle: 'Skaner laserowy ESD Unitech MS851B Bluetooth 1D',
  seoDescription: 'Skaner ESD Unitech MS851B: bezprzewodowy skaner laserowy 1D w obudowie antystatycznej, do 104 skanów na sekundę, ponad 30 godzin pracy. Antystatyczny skaner laserowy Unitech MS851B ESD, czytnik kodów 1D ESD. PN: MS851-SUBB0C-LG.',
  shortDescription: 'Unitech MS851B ESD — bezprzewodowy skaner laserowy 1D w obudowie antystatycznej: do 104 skanów na sekundę, ponad 30 godzin pracy, stacja w zestawie.',
  description: `Unitech MS851B ESD to bezprzewodowy skaner laserowy 1D w obudowie antystatycznej. Stosuje się go w pomieszczeniach czystych i przy montażu elektroniki, gdzie wyładowania elektrostatyczne zagrażają podzespołom. Tworzywo obudowy i przewodu zawiera wmieszany środek antystatyczny i nie zawiera chloru.

Dioda laserowa 650 nm wykonuje do 104 (± 12) skanów na sekundę w obu kierunkach. Skaner czyta kody 1D z rozdzielczością 4 mil: UPC 13 mil do 63,5 cm, Code 39 20 mil do 116,8 cm, a Code 39 100 mil do 4,57 m. Kąt pochylenia wynosi ±65°, odchylenia ±40°, a obrotu ±35°. Odczyt jest możliwy w świetle słonecznym do 86 111 luksów. Lista symbologii obejmuje m.in. ISBT 128, Code 32 i GS1 DataBar; kody 2D nie są obsługiwane.

Akumulator 2850 mAh zapewnia ponad 30 godzin pracy; liczba odczytów sięga 50 000, jeśli skaner skanuje raz na 5 sekund. Stacja ładująca i przewód USB są częścią zestawu. Obudowa ma klasę IP42 i znosi upadki z 2,1 m. Skaner pracuje ze spustem, w trybie prezentacyjnym albo buforowym.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-bezprzewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS851BESD',
  priceFrom: 1652.66,
  availability: 'unavailable',
  images: ['/images/products/MS851-SUBB0C-LG.png', '/images/products/MS851-SUBB0C-LG-2.png'],
  imageDescriptions: [
    'Unitech MS851B ESD — skaner laserowy w stacji ładującej, widok z przodu pod kątem',
    'Unitech MS851B ESD — widok skanera z przodu pod kątem, okno lasera i spust',
  ],
  tags: TAGI_MAGAZYN,
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'MS851-SUBB0C-LG' },
    { name: 'Typ skanera', value: 'Ręczny skaner laserowy liniowy 1D, bezprzewodowy (Bluetooth), ESD, ze stacją ładującą' },
    { name: 'Obudowa ESD', value: 'Antystatyk wmieszany w tworzywo obudowy i przewodu; 10⁵–10⁹ Ω/sq; bez chloru' },
    { name: 'Źródło światła', value: 'Dioda laserowa 650 nm; 104 (± 12) skanów/s (dwukierunkowo)' },
    { name: 'Rozdzielczość', value: '4 mil (0,1 mm)' },
    { name: 'Głębia ostrości', value: 'Code 128 5 mil: 3,6–17,8 cm; UPC 13 mil: 4,6–63,5 cm; Code 39 20 mil: 3,6–116,8 cm; Code 39 100 mil: 61–457 cm' },
    { name: 'Kąty odczytu', value: 'Pochylenie ±65°, odchylenie ±40°, obrót ±35°' },
    { name: 'Odporność na światło', value: 'Do 86 111 luksów (światło słoneczne)' },
    { name: 'Interfejsy', value: 'USB przez przewód stacji; Bluetooth: profile HID i SPP' },
    { name: 'Łączność Bluetooth', value: 'Dual mode (LE 4.2 i 2.1+EDR), do 100 m w otwartej przestrzeni' },
    { name: 'Tryby pracy', value: 'Ze spustem, prezentacyjny, buforowy' },
    { name: 'Pamięć', value: '7 MB w trybie wsadowym, 20 KB w trybie Auto' },
    { name: 'Akumulator', value: 'Wymienny, 2850 mAh; ładowanie poniżej 6,5 h; praca ponad 30 h' },
    { name: 'Klasa szczelności', value: 'IP42' },
    { name: 'Odporność na upadki', value: '2,1 m na beton (sam skaner)' },
    { name: 'Temperatura pracy', value: '-10°C do +50°C' },
    { name: 'Zawartość zestawu', value: 'Skaner z akumulatorem, stacja, przewód USB' },
    { name: 'Gwarancja producenta', value: '36 miesięcy' },
  ],
  applications: ['Pomieszczenia czyste i produkcja elektroniki', 'Odczyt kodów 1D z odległości do kilku metrów', 'Magazyn z wymaganiami ESD'],
  variants: [
    { partNumber: 'MS851-SUBB0C-LG', name: 'MS851-SUBB0C-LG, ESD, laser 1D, Bluetooth, stacja, przewód USB', attributes: {}, priceFrom: 1652.66, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms85x-stacja-ladujaca-esd', 'unitech-ms85x-bateria', 'unitech-ms85x-przewod-usb', 'unitech-ms85x-podstawka', 'unitech-ms85x-uchwyt-biurkowy', 'unitech-ms85x-etui', 'unitech-rp902-zasilacz'],
  relatedProducts: ['unitech-ms852b-plus-esd', 'unitech-ms852b', 'datalogic-gryphon-gbt4200', 'datalogic-powerscan-pbt9100'],
  downloads: [MS851B_ESD_DS, MS851B_ESD_QSG],
  faq: [
    {
      question: 'Czy MS851B ESD czyta kody 2D i QR?',
      answer: 'Nie. Skaner laserowy czyta tylko kody liniowe 1D. Kody 2D, w tym QR, odczytuje [MS852B Plus ESD](/produkt/unitech-ms852b-plus-esd).',
    },
    {
      question: 'Jak daleko MS851B ESD czyta kody 1D?',
      answer: 'Kody UPC 13 mil są czytane do 63,5 cm, a duże kody Code 39 o module 100 mil do 4,57 m. Dokładne odległości zależą od rodzaju kodu i podaje je tabela w specyfikacji.',
    },
    {
      question: 'Jakiej stacji wymaga skaner ESD?',
      answer: 'Skaner jest dostarczany ze stacją i przewodem USB. Zapasową lub dodatkową stację ESD oferuje [karta 5000-900082G](/produkt/unitech-ms85x-stacja-ladujaca-esd).',
    },
    {
      question: 'Jak długo pracuje MS851B ESD na jednym ładowaniu?',
      answer: 'Czas pracy wynosi ponad 30 godzin, a akumulator 2850 mAh ładuje się poniżej 6,5 godziny. Akumulator jest wymienny.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS851B ESD?',
      answer: 'Skaner ESD 2D to [MS852B Plus ESD](/produkt/unitech-ms852b-plus-esd). Modele innych marek pracujące bezprzewodowo zestawiono w kategorii [skanery bezprzewodowe](/skanery-kodow-kreskowych/bezprzewodowe).',
    },
  ],
  createdAt: '2026-10-30',
  updatedAt: '2026-10-30',
}

const ms822b: Product = {
  id: 'unitech-ms822b',
  slug: 'unitech-ms822b',
  name: 'Unitech MS822B',
  seoH1: 'Unitech MS822B',
  seoTitle: 'Skaner bezprzewodowy Unitech MS822B 2D — 2,4 GHz, Bluetooth i USB-C',
  seoDescription: 'Skaner kodów kreskowych Unitech MS822B: bezprzewodowy imager 2D ze stacją z odbiornikiem 2,4 GHz do 100 m, Bluetooth 4.2 i przewodem USB-C, do 40 godzin pracy. Skaner 2,4 GHz Unitech MS822B, czytnik kodów 2D MS822B. PN: MS822-2UBU02-SG.',
  shortDescription: 'Unitech MS822B — bezprzewodowy skaner 2D ze stacją z odbiornikiem 2,4 GHz (do 100 m), Bluetooth 4.2 i USB-C; ponad 40 godzin pracy, pamięć 4 MB.',
  description: `Unitech MS822B to bezprzewodowy skaner 2D, który z komputerem łączy stacja z wbudowanym odbiornikiem 2,4 GHz. Radio 2,4 GHz sięga 100 m bez przeszkód. Skaner może też pracować przez Bluetooth 4.2 (10 m) albo przez przewód USB-C. Jest przeznaczony do kas, programów lojalnościowych, sprawdzania kuponów, weryfikacji danych osobowych, inwentaryzacji i serwisu w terenie.

Wymienny akumulator 18650 o pojemności 2600 mAh umożliwia ponad 40 godzin pracy; do pełnego naładowania potrzeba 6 godzin. Pamięć 4 MB pozwala prowadzić inwentaryzację poza zasięgiem: zebrane kody są wysyłane do komputera po powrocie w zasięg stacji. Tryby pracy obejmują spust, tryb prezentacyjny i buforowy. Odczyt potwierdzają brzęczyk i dioda LED, a prefiks, sufiks i Code ID umożliwiają formatowanie danych.

Matryca 1280 × 800 rejestruje 60 klatek na sekundę. EAN-13 13 mil skaner odczytuje w zakresie 50–510 mm. Obudowa ma klasę IP52, wytrzymuje upadek z 1,5 m na beton i waży 180 g. Stacja z odbiornikiem 2,4 GHz i przewodem jest dołączona do skanera.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-bezprzewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS822B',
  priceFrom: 601.38,
  availability: 'on-order',
  images: ['/images/products/MS822-2UBU02-SG.png', '/images/products/MS822-2UBU02-SG-2.png', '/images/products/MS822-2UBU02-SG-3.png', '/images/products/MS822-2UBU02-SG-4.png'],
  imageDescriptions: [
    'Unitech MS822B — skaner 2D odłożony do niskiej stacji z odbiornikiem 2,4 GHz, widok z przodu pod kątem',
    'Unitech MS822B — widok z przodu na okno skanera i pomarańczowy spust',
    'Unitech MS822B — widok z boku, rękojeść i spust',
    'Unitech MS822B — skaner położony obok stacji z odbiornikiem',
  ],
  tags: TAGI_HANDEL,
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'MS822-2UBU02-SG' },
    { name: 'Typ skanera', value: 'Ręczny skaner 2D, bezprzewodowy (2,4 GHz i Bluetooth 4.2), stacja z odbiornikiem 2,4 GHz' },
    { name: 'Matryca', value: 'CMOS 1280 × 800, 60 klatek/s' },
    { name: 'Celownik i oświetlenie', value: 'Celownik LED 625 nm; oświetlenie o temperaturze barwowej 6000–6500 K' },
    { name: 'Rozdzielczość', value: '3 mil (Code 39 i EAN-13)' },
    { name: 'Głębia ostrości', value: 'EAN-13 13 mil: 50–510 mm' },
    { name: 'Kąty odczytu', value: 'Pochylenie ±65°, odchylenie ±65°, obrót 360°' },
    { name: 'Kody 2D', value: 'PDF417, Micro PDF417, QR, Micro QR, Data Matrix, Aztec' },
    { name: 'Interfejsy', value: 'Radio 2,4 GHz przez stację (USB), Bluetooth 4.2 (HID, BLE, SPP), USB-C' },
    { name: 'Zasięg radia', value: '2,4 GHz: 100 m; Bluetooth: 10 m (w otwartej przestrzeni)' },
    { name: 'Tryby pracy', value: 'Ze spustem, prezentacyjny, buforowy' },
    { name: 'Pamięć', value: '4 MB' },
    { name: 'Akumulator', value: 'Wymienny 18650, 2600 mAh; ładowanie ok. 6 h; praca ponad 40 h' },
    { name: 'Klasa szczelności', value: 'IP52' },
    { name: 'Odporność na upadki', value: '1,5 m na beton (sam skaner)' },
    { name: 'Temperatura pracy', value: '-10°C do +50°C' },
    { name: 'Wymiary i masa', value: 'Skaner 161 × 72 × 96,5 mm, 180 g; stacja 106 × 80,5 × 70 mm' },
    { name: 'Zawartość zestawu', value: 'Skaner, stacja z odbiornikiem 2,4 GHz i przewodem' },
    { name: 'Gwarancja producenta', value: '36 miesięcy' },
  ],
  applications: ['Kasa i sprawdzanie kuponów', 'Weryfikacja danych osobowych', 'Inwentaryzacja i serwis w terenie'],
  variants: [
    { partNumber: 'MS822-2UBU02-SG', name: 'MS822-2UBU02-SG, 2,4 GHz i Bluetooth, stacja z odbiornikiem, przewód', attributes: {}, priceFrom: 601.38, availability: 'on-order' },
  ],
  compatibleAccessories: [],
  relatedAccessories: [],
  relatedProducts: ['unitech-ms838b', 'unitech-ms836b', 'unitech-ms852p', 'datalogic-quickscan-qm2500', 'datalogic-gryphon-gm4200', 'newland-hr23-dorada-bt'],
  downloads: [MS822B_DS, MS822B_UM],
  faq: [
    {
      question: 'Gdzie w MS822B znajduje się odbiornik 2,4 GHz?',
      answer: 'Odbiornik jest wbudowany w stację z zestawu. Stację łączy z komputerem przewód, a skaner komunikuje się z nią drogą radiową na odległość do 100 m w otwartej przestrzeni.',
    },
    {
      question: 'Czy MS822B może pracować przez Bluetooth?',
      answer: 'Tak. Skaner obsługuje Bluetooth 4.2 (profile HID, BLE i SPP) w zasięgu do 10 m oraz połączenie przewodem USB-C.',
    },
    {
      question: 'Jak MS822B zachowuje się poza zasięgiem?',
      answer: 'Skaner zapisuje kody w pamięci 4 MB i wysyła je po powrocie w zasięg stacji. Dzięki temu inwentaryzację można prowadzić w miejscach bez zasięgu radia.',
    },
    {
      question: 'Czym MS822B różni się od MS838B?',
      answer: 'MS822B ma matrycę 1280 × 800, tryb prezentacyjny, klasę IP52 i odbiornik w stacji. [MS838B](/produkt/unitech-ms838b) ma matrycę 640 × 480, odbiornik w formie klucza USB i klasę IP42.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS822B?',
      answer: 'Skaner 2D z odbiornikiem USB w zestawie to [MS838B](/produkt/unitech-ms838b), a wersja laserowa 1D to [MS836B](/produkt/unitech-ms836b). Wszystkie skanery bez przewodu zestawiono w kategorii [skanery bezprzewodowe](/skanery-kodow-kreskowych/bezprzewodowe).',
    },
  ],
  createdAt: '2026-10-30',
  updatedAt: '2026-10-30',
}

const ms838b: Product = {
  id: 'unitech-ms838b',
  slug: 'unitech-ms838b',
  name: 'Unitech MS838B',
  seoH1: 'Unitech MS838B',
  seoTitle: 'Skaner bezprzewodowy Unitech MS838B 2D z odbiornikiem USB 2,4 GHz',
  seoDescription: 'Skaner kodów kreskowych Unitech MS838B: bezprzewodowy imager 2D z odbiornikiem USB (radio 2,4 GHz, 100 m), Bluetooth i USB-C, pamięć na 40 000 kodów EAN. Skaner 2D do kasy Unitech MS838B, czytnik kodów 2D MS838B. PN: MS838-2UBB0D-SG.',
  shortDescription: 'Unitech MS838B — bezprzewodowy skaner 2D z odbiornikiem USB (radio 2,4 GHz, zasięg 100 m), Bluetooth i USB-C; kupony z telefonów, pamięć na 40 000 kodów EAN, do 16 godzin pracy.',
  description: `Unitech MS838B to ręczny skaner 2D z odbiornikiem 2,4 GHz w formie klucza USB, przeznaczony do kas i inwentaryzacji w supermarketach, sklepach i magazynach. Odbiornik działa bez konfiguracji po włożeniu do portu USB, a zasięg to 100 m bez przeszkód. Skaner można też połączyć przez Bluetooth 4.2 (10 m) lub przewód USB-C.

Matryca 640 × 480 wykonuje 60 klatek na sekundę i odczytuje kody 1D oraz 2D, w tym kupony wyświetlane na ekranie telefonu. Zakres odczytu EAN-13 13 mil to 60–310 mm, a rozdzielczość sięga od 3 mil. Czerwona dioda wyznacza pole odczytu, a białe oświetlenie wspomaga odczyt.

Poza zasięgiem skaner zapisuje w pamięci 2 MB do 40 000 kodów EAN i przesyła je po powrocie. Akumulator 18650 2600 mAh daje ponad 16 godzin pracy, a ładowanie trwa 5 godzin. Skaner waży 200 g, ma klasę IP42 i wytrzymuje upadki z 1,5 m. Razem ze skanerem dostarczane są odbiornik 2,4 GHz i przewód USB-C do ładowania.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-bezprzewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS838B',
  priceFrom: 445.56,
  availability: 'available',
  images: ['/images/products/MS838-2UBB0D-SG.png', '/images/products/MS838-2UBB0D-SG-2.png', '/images/products/MS838-2UBB0D-SG-3.png', '/images/products/MS838-2UBB0D-SG-4.png'],
  imageDescriptions: [
    'Unitech MS838B — skaner 2D widoczny z przodu, okno skanera i pomarańczowy spust',
    'Unitech MS838B — widok z boku, rękojeść i spust',
    'Unitech MS838B — widok z góry pod kątem, głowica z logo Unitech',
    'Unitech MS838B — widok z przodu pod kątem, rękojeść ze spustem',
  ],
  tags: TAGI_HANDEL,
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'MS838-2UBB0D-SG' },
    { name: 'Typ skanera', value: 'Ręczny skaner 2D, bezprzewodowy (2,4 GHz z odbiornikiem USB i Bluetooth 4.2)' },
    { name: 'Matryca', value: 'CMOS 640 × 480, 60 klatek/s' },
    { name: 'Celownik i oświetlenie', value: 'Celownik czerwony LED; oświetlenie białe LED' },
    { name: 'Rozdzielczość', value: 'Od 3 mil (Code 39)' },
    { name: 'Głębia ostrości', value: 'EAN-13 13 mil: 60–310 mm' },
    { name: 'Kody 2D', value: 'PDF417, Micro PDF417, QR, Micro QR, Data Matrix, Aztec' },
    { name: 'Interfejsy', value: 'Radio 2,4 GHz przez odbiornik USB, Bluetooth 4.2 (HID, BLE, SPP), USB-C' },
    { name: 'Zasięg radia', value: '2,4 GHz: 100 m; Bluetooth: 10 m (w otwartej przestrzeni)' },
    { name: 'Tryby pracy', value: 'Ze spustem, buforowy' },
    { name: 'Pamięć', value: '2 MB; 40 000 kodów EAN poza zasięgiem' },
    { name: 'Akumulator', value: 'Wymienny 18650, 2600 mAh; ładowanie ok. 5 h; praca ponad 16 h' },
    { name: 'Klasa szczelności', value: 'IP42' },
    { name: 'Odporność na upadki', value: '1,5 m na beton (sam skaner)' },
    { name: 'Temperatura pracy', value: '-10°C do +50°C' },
    { name: 'Wymiary i masa', value: '174 × 72 × 96 mm, 200 g' },
    { name: 'Zawartość zestawu', value: 'Skaner, odbiornik 2,4 GHz, przewód ładujący USB-C' },
    { name: 'Gwarancja producenta', value: '15 miesięcy' },
  ],
  applications: ['Kasa w supermarkecie i sklepie', 'Sprawdzanie kuponów z ekranów telefonów', 'Inwentaryzacja półek i magazynu'],
  variants: [
    { partNumber: 'MS838-2UBB0D-SG', name: 'MS838-2UBB0D-SG, 2,4 GHz z odbiornikiem USB i Bluetooth, USB-C', attributes: {}, priceFrom: 445.56, availability: 'available' },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms83x-odbiornik-2-4-ghz', 'unitech-ms83x-podstawka'],
  relatedProducts: ['unitech-ms822b', 'unitech-ms836b', 'unitech-ms852p', 'datalogic-quickscan-qm2500', 'datalogic-gryphon-gm4200', 'newland-hr23-dorada-bt'],
  downloads: [MS838B_DS, MS838B_UM, MS838B_QSG],
  faq: [
    {
      question: 'Czy MS838B wymaga konfiguracji odbiornika?',
      answer: 'Nie. Odbiornik 2,4 GHz z zestawu działa jako plug and play: wystarczy włożyć go do portu USB komputera.',
    },
    {
      question: 'Czy MS838B czyta kody QR z ekranu telefonu?',
      answer: 'Tak. Imager 2D odczytuje kody 1D i 2D wyświetlane na telefonie, np. kupony i bilety. Kod EAN-13 13 mil jest czytany z odległości 60–310 mm.',
    },
    {
      question: 'Ile kodów skaner przechowuje poza zasięgiem?',
      answer: 'Pamięć 2 MB mieści 40 000 kodów EAN. Skaner wysyła je do komputera po powrocie w zasięg.',
    },
    {
      question: 'Czy do MS838B można dokupić podstawkę i drugi odbiornik?',
      answer: 'Tak. Do skanera pasują [podstawka 5200-900014G](/produkt/unitech-ms83x-podstawka) i [odbiornik 2,4 GHz 5500-900098G](/produkt/unitech-ms83x-odbiornik-2-4-ghz). Te same akcesoria obsługują [MS836B](/produkt/unitech-ms836b).',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS838B?',
      answer: 'Skaner 2D z odbiornikiem w stacji i matrycą 1280 × 800 to [MS822B](/produkt/unitech-ms822b). Wersja laserowa 1D to [MS836B](/produkt/unitech-ms836b). Porównanie z modelami innych marek umożliwia kategoria [skanery bezprzewodowe](/skanery-kodow-kreskowych/bezprzewodowe).',
    },
  ],
  createdAt: '2026-10-30',
  updatedAt: '2026-10-30',
}

const ms836b: Product = {
  id: 'unitech-ms836b',
  slug: 'unitech-ms836b',
  name: 'Unitech MS836B',
  seoH1: 'Unitech MS836B',
  seoTitle: 'Skaner laserowy bezprzewodowy Unitech MS836B 1D z odbiornikiem USB',
  seoDescription: 'Skaner kodów kreskowych Unitech MS836B: bezprzewodowy skaner laserowy 1D, 100 skanów na sekundę, odbiornik USB 2,4 GHz o zasięgu 100 m, pamięć 16 MB i ponad 30 godzin pracy. Skaner laserowy Unitech MS836B, czytnik kodów 1D MS836B. PN: MS836-SUBB0D-SG.',
  shortDescription: 'Unitech MS836B — bezprzewodowy skaner laserowy 1D: 100 skanów na sekundę, odbiornik USB 2,4 GHz o zasięgu 100 m, pamięć 16 MB, ponad 30 godzin pracy.',
  description: `Unitech MS836B to bezprzewodowy skaner laserowy 1D do kas, kontroli zapasów i zarządzania magazynem w supermarketach i sklepach. Silnik liniowy wykonuje 100 odczytów na sekundę i dekoduje kody niskiej jakości, także wyświetlane na ekranie telefonu. Kod EAN-13 13 mil skaner czyta z odległości od 10 do 265 mm, a rozdzielczość wynosi od 4 mil. Kody 2D nie są obsługiwane.

Skaner łączy się z komputerem przez odbiornik USB 2,4 GHz (do 100 m w otwartej przestrzeni), przez Bluetooth 4.2 w zasięgu 10 m albo przewodem USB-C. Pamięć 16 MB mieści 40 000 kodów EAN zebranych poza zasięgiem. Tryby pracy to ze spustem i buforowy. Brzęczyk i dioda LED sygnalizują poprawny odczyt, a dane formatuje się prefiksem, sufiksem i znacznikiem Code ID. Lista symbologii obejmuje m.in. China Post 25 i GS1 DataBar.

Akumulator 18650 2600 mAh pozwala pracować ponad 30 godzin, a ładowanie trwa 5 godzin. Obudowa IP42 o masie 216 g wytrzymuje upadki z 1,5 m na beton. Dołączone są odbiornik 2,4 GHz oraz przewód USB-C do ładowania.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-bezprzewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS836B',
  priceFrom: 326.72,
  availability: 'available',
  images: ['/images/products/MS836-SUBB0D-SG.png', '/images/products/MS836-SUBB0D-SG-2.png', '/images/products/MS836-SUBB0D-SG-3.png', '/images/products/MS836-SUBB0D-SG-4.png'],
  imageDescriptions: [
    'Unitech MS836B — skaner laserowy 1D widoczny z przodu, czerwone światło lasera i niebieski spust',
    'Unitech MS836B — widok z boku, rękojeść i niebieski spust',
    'Unitech MS836B — widok z przodu pod kątem, głowica i spust',
    'Unitech MS836B — widok z góry pod kątem, głowica z logo Unitech',
  ],
  tags: TAGI_HANDEL,
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'MS836-SUBB0D-SG' },
    { name: 'Typ skanera', value: 'Ręczny skaner laserowy liniowy 1D, bezprzewodowy (2,4 GHz z odbiornikiem USB i Bluetooth 4.2)' },
    { name: 'Szybkość skanowania', value: '100 odczytów na sekundę' },
    { name: 'Rozdzielczość', value: 'Od 4 mil (Code 39)' },
    { name: 'Głębia ostrości', value: 'EAN-13 13 mil: 10–265 mm' },
    { name: 'Odporność na światło', value: '0–100 000 luksów' },
    { name: 'Interfejsy', value: 'Radio 2,4 GHz przez odbiornik USB, Bluetooth 4.2 (HID, BLE, SPP), USB-C' },
    { name: 'Zasięg radia', value: '2,4 GHz: 100 m; Bluetooth: 10 m (w otwartej przestrzeni)' },
    { name: 'Tryby pracy', value: 'Ze spustem, buforowy' },
    { name: 'Pamięć', value: '16 MB; 40 000 kodów EAN poza zasięgiem' },
    { name: 'Akumulator', value: 'Wymienny 18650, 2600 mAh; ładowanie ok. 5 h; praca ponad 30 h' },
    { name: 'Klasa szczelności', value: 'IP42' },
    { name: 'Odporność na upadki', value: '1,5 m na beton (sam skaner)' },
    { name: 'Temperatura pracy', value: '-10°C do +50°C' },
    { name: 'Wymiary i masa', value: '174 × 72 × 96 mm, 216 g' },
    { name: 'Zawartość zestawu', value: 'Skaner, odbiornik 2,4 GHz, przewód ładujący USB-C' },
    { name: 'Gwarancja producenta', value: '15 miesięcy' },
  ],
  applications: ['Kasa w supermarkecie i sklepie', 'Kontrola zapasów', 'Zarządzanie magazynem'],
  variants: [
    { partNumber: 'MS836-SUBB0D-SG', name: 'MS836-SUBB0D-SG, laser 1D, 2,4 GHz z odbiornikiem USB i Bluetooth, USB-C', attributes: {}, priceFrom: 326.72, availability: 'available' },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms83x-odbiornik-2-4-ghz', 'unitech-ms83x-podstawka'],
  relatedProducts: ['unitech-ms838b', 'unitech-ms822b', 'unitech-ms851b-esd', 'datalogic-gryphon-gbt4200', 'datalogic-gryphon-gm4200'],
  downloads: [MS836B_DS, MS836B_UM],
  faq: [
    {
      question: 'Czy MS836B czyta kody QR?',
      answer: 'Nie. Skaner laserowy odczytuje wyłącznie kody liniowe 1D, takie jak EAN, UPC, Code 39 i Code 128. Kody 2D czyta [MS838B](/produkt/unitech-ms838b).',
    },
    {
      question: 'Czy MS836B odczyta kod wyświetlony na telefonie?',
      answer: 'Tak, jeśli jest to kod liniowy. Skaner czyta kody 1D drukowane i wyświetlane na ekranie, także niskiej jakości.',
    },
    {
      question: 'Jak długo MS836B pracuje na jednym ładowaniu?',
      answer: 'Czas pracy ciągłej wynosi ponad 30 godzin. Akumulator 18650 o pojemności 2600 mAh ładuje się 5 godzin.',
    },
    {
      question: 'Czym MS836B różni się od MS838B?',
      answer: 'MS836B ma silnik laserowy 1D, pamięć 16 MB i czas pracy ponad 30 godzin. [MS838B](/produkt/unitech-ms838b) ma imager 2D, pamięć 2 MB i ponad 16 godzin pracy. Obudowa, radio i akcesoria są wspólne.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS836B?',
      answer: 'Skaner 2D z odbiornikiem USB to [MS838B](/produkt/unitech-ms838b). Skaner laserowy w obudowie antystatycznej to [MS851B ESD](/produkt/unitech-ms851b-esd). Skanery liniowe innych producentów znajdują się w kategorii [skanery bezprzewodowe](/skanery-kodow-kreskowych/bezprzewodowe).',
    },
  ],
  createdAt: '2026-10-30',
  updatedAt: '2026-10-30',
}

const ms633: Product = {
  id: 'unitech-ms633',
  slug: 'unitech-ms633',
  name: 'Unitech MS633',
  seoH1: 'Unitech MS633',
  seoTitle: 'Skaner pierścieniowy Unitech MS633 2D Bluetooth — wersje MS633 i LR',
  seoDescription: 'Skaner pierścieniowy Unitech MS633: noszony na palcu skaner 2D z Bluetooth do 50 m, masa 56 g, wersja LR czyta kody do 12 m. Skaner na palec Unitech MS633, ring scanner MS633 LR. PN: MS633-DUBU00-SG, MS633-OUBU00-SG.',
  shortDescription: 'Unitech MS633 — skaner pierścieniowy 2D z Bluetooth, noszony na palcu (56 g); wersja MS633 LR czyta kody do 12 m, akumulator 600 mAh do 9 godzin pracy.',
  description: `Unitech MS633 to skaner 2D noszony na palcu, który pozostawia obie ręce wolne. Masa wynosi 56 g, a jeden przycisk obraca głowicę, dzięki czemu skaner przełącza się między lewą a prawą ręką. Jest przeznaczony do handlu, inwentaryzacji, magazynów i logistyki.

Karta obejmuje dwie wersje. MS633 ma matrycę 1280 × 960 i jedną ciepłą białą diodę; kody UPC czyta od 4,6 do 49,5 cm, a kody QR 20 mil do 35,6 cm. MS633 LR waży 67 g, ma matrycę 2688 × 1520 i dwie diody; zasięg odczytu wynosi do 12 m, a kody UPC 13 mil odczytuje do 1,8 m. Celownik w obu wersjach jest zielony, laserowy.

Skaner komunikuje się przez Bluetooth (HID, SPP i BLE 4.2) w zasięgu do 50 m albo przewodem USB-C. Wymienny akumulator 600 mAh pracuje 9 godzin i ładuje się 2 godziny. Odczyt potwierdzają dioda, sygnał dźwiękowy i wibracja. Skaner obsługują oprogramowanie ScanBridge i Scanner SDK. Pudełko zawiera akumulator, uchwyt na palec i przewód USB-C.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-pierscieniowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS633',
  priceFrom: 1116.21,
  availability: 'available',
  images: ['/images/products/MS633-DUBU00-SG.png', '/images/products/MS633-DUBU00-SG-2.png', '/images/products/MS633-DUBU00-SG-3.png', '/images/products/MS633-DUBU00-SG-4.png'],
  imageDescriptions: [
    'Unitech MS633 — skaner pierścieniowy widoczny z przodu pod kątem, niebieski przycisk spustu i okno skanera',
    'Unitech MS633 — widok z boku, głowica skanera i uchwyt na palec',
    'Unitech MS633 — widok od tyłu, port USB-C i wzmocnienie na palec',
    'Unitech MS633 LR — wersja dalekiego zasięgu z dwiema diodami oświetlenia, widok z przodu pod kątem',
  ],
  tags: TAGI_MAGAZYN,
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'MS633-DUBU00-SG (MS633), MS633-OUBU00-SG (MS633 LR)' },
    { name: 'Typ skanera', value: 'Skaner pierścieniowy 2D, noszony na palcu, bezprzewodowy (Bluetooth); wersja LR: daleki zasięg (long range)' },
    { name: 'Matryca', value: 'MS633: CMOS 1280 × 960; MS633 LR: CMOS 2688 × 1520' },
    { name: 'Celownik i oświetlenie', value: 'Celownik zielony laserowy; MS633: 1 ciepła biała dioda, MS633 LR: 2 diody' },
    { name: 'Głębia ostrości (MS633)', value: 'UPC 100%: 4,6–49,5 cm; QR 20 mil: 3,0–35,6 cm; Code 39 5 mil: 6,1–24,1 cm' },
    { name: 'Głębia ostrości (MS633 LR)', value: 'UPC 13 mil: 6,4–180 cm; Code 128 15 mil: 18,2–182,9 cm; Data Matrix 200 mil: 20 cm – 14,4 m; QR 200 mil: 25 cm – 18 m' },
    { name: 'Zasięg odczytu', value: 'Do 12 m (wersja LR)' },
    { name: 'Interfejsy', value: 'Bluetooth: HID, SPP, BLE 4.2; USB-C (USB HID, wirtualny port COM)' },
    { name: 'Zasięg Bluetooth', value: 'Ponad 50 m bez przeszkód' },
    { name: 'Akumulator', value: 'Wymienny, 600 mAh; ładowanie 2 h; praca 9 h' },
    { name: 'Sygnalizacja', value: 'Dioda LED, sygnał dźwiękowy, wibracja' },
    { name: 'Odporność na upadki', value: 'Wielokrotne upadki z 1,5 m na beton' },
    { name: 'Odporność ESD', value: '4 kV w kontakcie, 8 kV w powietrzu' },
    { name: 'Temperatura pracy', value: '-10°C do +50°C' },
    { name: 'Wymiary i masa', value: 'MS633: 64,8 × 34,5 × 24,7 mm, 56 g; MS633 LR: 70,0 × 36,4 × 28,4 mm, 67 g' },
    { name: 'Oprogramowanie', value: 'ScanBridge Utility, Scanner SDK' },
    { name: 'Zawartość zestawu', value: 'Skaner, akumulator 600 mAh, uchwyt na palec, przewód USB-C, skrócona instrukcja' },
    { name: 'Gwarancja producenta', value: '15 miesięcy' },
  ],
  applications: ['Kompletacja i inwentaryzacja z wolnymi rękami', 'Handel i hotelarstwo', 'Odczyt z regałów (wersja LR)'],
  variants: [
    { partNumber: 'MS633-DUBU00-SG', name: 'MS633-DUBU00-SG, skaner 2D, Bluetooth, USB-C', attributes: { 'Zasięg': 'Standardowy' }, priceFrom: 1116.21, availability: 'available' },
    { partNumber: 'MS633-OUBU00-SG', name: 'MS633-OUBU00-SG, skaner 2D LR, Bluetooth, USB-C', attributes: { 'Zasięg': 'Wydłużony (LR)' }, priceFrom: 2787.69, availability: 'available' },
  ],
  variantAttributeTooltips: {
    'Zasięg': 'Wersja optyki MS633.\n\n• Standardowy — matryca 1280 × 960, jedna dioda oświetlenia, masa 56 g.\n\n• Wydłużony (LR) — matryca 2688 × 1520, dwie diody, odczyt kodów do 12 m. Wersja jest cięższa o 11 g i ma osobny akumulator.',
  },
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms633-bateria', 'unitech-ms633-lr-bateria', 'unitech-ms633-ladowarka-baterii', 'unitech-ms633-uchwyt-na-palec', 'unitech-rp902-przewod-usb-c'],
  relatedProducts: ['unitech-ms652-plus', 'unitech-ms626-plus', 'zebra-rs5100', 'zebra-rs6100', 'proglove-mark-2'],
  downloads: [MS633_DS, MS633_UM, MS633_QSG],
  faq: [
    {
      question: 'Czym różnią się MS633 i MS633 LR?',
      answer: 'MS633 LR ma matrycę 2688 × 1520, dwie diody oświetlenia, a zasięg odczytu sięga 12 m. MS633 ma matrycę 1280 × 960 i czyta kody z mniejszej odległości, np. UPC do 49,5 cm. Wersję wskazuje kolumna „Zasięg” w tabeli wariantów.',
    },
    {
      question: 'Jak zmienić rękę, na której skaner jest noszony?',
      answer: 'Głowicę skanera obraca się jednym przyciskiem. Dzięki temu skaner pracuje na lewej lub prawej ręce bez zmiany mocowania.',
    },
    {
      question: 'Czy MS633 i MS633 LR mają ten sam akumulator?',
      answer: 'Nie. Do MS633 służy [akumulator 1400-900075G](/produkt/unitech-ms633-bateria), a do MS633 LR [akumulator 1400-900076G](/produkt/unitech-ms633-lr-bateria). Obie wersje ładuje [ładowarka 2-stanowiskowa](/produkt/unitech-ms633-ladowarka-baterii).',
    },
    {
      question: 'Z jakimi urządzeniami współpracuje MS633?',
      answer: 'Skaner łączy się przez Bluetooth z telefonami, tabletami i komputerami, i współpracuje z komputerem noszonym [WD200 Plus](/produkt/unitech-wd200-plus). Konfigurację ułatwia aplikacja ScanBridge.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS633?',
      answer: 'Wersja noszona na dwóch palcach z parowaniem NFC to [MS652 Plus](/produkt/unitech-ms652-plus), a [MS626 Plus](/produkt/unitech-ms626-plus) waży tylko 19,4 g i ma dotykowy spust. Pozostałe skanery noszone na palcu są w kategorii [skanery pierścieniowe](/skanery-kodow-kreskowych/pierscieniowe).',
    },
  ],
  createdAt: '2026-10-30',
  updatedAt: '2026-10-30',
}

const ms652Plus: Product = {
  id: 'unitech-ms652-plus',
  slug: 'unitech-ms652-plus',
  name: 'Unitech MS652 Plus',
  seoH1: 'Unitech MS652 Plus',
  seoTitle: 'Skaner pierścieniowy Unitech MS652 Plus 2D z Bluetooth i NFC',
  seoDescription: 'Skaner pierścieniowy Unitech MS652 Plus: noszony na dwóch palcach skaner 2D z Bluetooth do 100 m, parowaniem NFC i pamięcią 590 000 kodów. Skaner na palec Unitech MS652 Plus, ring scanner MS652+. PN: MS652-AUDB00-SG.',
  shortDescription: 'Unitech MS652 Plus — skaner pierścieniowy 2D noszony na dwóch palcach: Bluetooth do 100 m, parowanie NFC z telefonem, pamięć do 590 000 kodów, akumulator 800 mAh.',
  description: `Unitech MS652 Plus to skaner 2D noszony na dwóch palcach, w wersji MS652-AUDB00-SG z modułem spustu na dwa palce. Takie mocowanie zwiększa stabilność skanera na dłoni. Przycisk spustu można przenieść na drugą stronę, więc skaner pracuje na lewej i prawej ręce; moduł spustu zdejmuje się i zakłada ponownie przyciskiem zwalniającym i obrotem. Dwie podkładki na palce pozwalają dopasować skaner do dłoni.

Bluetooth występuje w podwójnej wersji: LE 4.2 i klasycznej 2.1 klasy 1, z zasięgiem 100 m w linii widoczności. Moduł NFC umożliwia parowanie z telefonem lub tabletem z Androidem albo iOS przez zbliżenie. W trybie Auto dane zeskanowane poza zasięgiem nie giną: pamięć 7,5 MB mieści do 590 000 kodów EAN-13 i wysyła je po powrocie w zasięg.

Matryca 1280 × 960 czyta kody 1D, 2D i PDF417 z papieru oraz z ekranów. Akumulator 800 mAh pracuje 9 godzin przy odczycie co 5 sekund i ładuje się 4 godziny przewodem USB lub w stacji. Obudowa IP42 waży 95 g. Skaner współpracuje z komputerem noszonym [Unitech WD200 Plus](/produkt/unitech-wd200-plus).`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-pierscieniowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS652PLUS',
  priceFrom: 1428.72,
  availability: 'on-order',
  images: ['/images/products/MS652-AUDB00-SG.png', '/images/products/MS652-AUDB00-SG-2.png', '/images/products/MS652-AUDB00-SG-3.png', '/images/products/MS652-AUDB00-SG-4.png'],
  imageDescriptions: [
    'Unitech MS652 Plus — dwa skanery pierścieniowe z niebieskimi wstawkami, widok z przodu pod kątem',
    'Unitech MS652 Plus — widok z przodu na okno skanera i pasek na palce',
    'Unitech MS652 Plus — widok z boku, niebieski moduł spustu na dwa palce',
    'Unitech MS652 Plus — widok z boku od strony paska na rzep',
  ],
  tags: TAGI_MAGAZYN,
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'MS652-AUDB00-SG' },
    { name: 'Typ skanera', value: 'Skaner pierścieniowy 2D, noszony na dwóch palcach, bezprzewodowy (Bluetooth i NFC)' },
    { name: 'Matryca', value: 'CMOS 1280 × 960, migawka rolling shutter; 30 klatek/s' },
    { name: 'Celownik i oświetlenie', value: 'Celownik zielony LED 610 nm' },
    { name: 'Głębia ostrości', value: 'UPC 100%: 4,6–49,5 cm; QR 20 mil: 3,8–29,2 cm; Code 39 5 mil: 6,1–24,1 cm; Data Matrix 10 mil: 7,4–21,6 cm' },
    { name: 'Odporność na światło', value: 'Do 107 639 luksów (światło słoneczne)' },
    { name: 'Interfejsy', value: 'Bluetooth: BLE HID, SPP i HID; micro USB' },
    { name: 'Łączność Bluetooth', value: 'LE 4.2 i 2.1+EDR klasa 1; do 100 m w otwartej przestrzeni; parowanie NFC' },
    { name: 'Tryby pracy', value: 'Ze spustem, prezentacyjny, Auto, wsadowy' },
    { name: 'Pamięć', value: '7,5 MB; do 590 000 kodów EAN-13' },
    { name: 'Akumulator', value: 'Wymienny, 800 mAh / 3,7 V; ładowanie 4 h; praca 9 h przy odczycie co 5 s' },
    { name: 'Klasa szczelności', value: 'IP42' },
    { name: 'Odporność na upadki', value: '1,5 m na beton (sam skaner)' },
    { name: 'Temperatura pracy', value: '-10°C do +50°C' },
    { name: 'Wymiary i masa', value: '50 × 71 × 21 mm, 95 g' },
    { name: 'Zawartość zestawu', value: 'Skaner, akumulator, przewód micro USB, podkładka na palec, moduł spustu' },
    { name: 'Gwarancja producenta', value: '15 miesięcy' },
  ],
  applications: ['Handel i hotelarstwo', 'Logistyka i serwis w terenie', 'Praca z wolnymi rękami i stabilnym mocowaniem'],
  variants: [
    { partNumber: 'MS652-AUDB00-SG', name: 'MS652-AUDB00-SG, skaner 2D na dwa palce, Bluetooth i NFC, micro USB', attributes: {}, priceFrom: 1428.72, availability: 'on-order' },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms652-bateria', 'unitech-ms652-stacja-usb', 'unitech-ms652-przewod-micro-usb', 'unitech-ms652-uchwyt-na-dwa-palce', 'unitech-ms652-podkladka-386268g', 'unitech-ms652-podkladka-386286g', 'unitech-ms652-pasek', 'unitech-ea660-smycz', 'unitech-rp902-zasilacz'],
  relatedProducts: ['unitech-ms633', 'unitech-ms626-plus', 'zebra-rs5100', 'zebra-rs6100', 'proglove-mark-2'],
  downloads: [MS652_DS, MS652_UM],
  faq: [
    {
      question: 'Jak sparować MS652 Plus z telefonem?',
      answer: 'Skaner ma moduł NFC. Wystarczy zbliżyć go do telefonu lub tabletu z Androidem albo iOS, aby rozpocząć parowanie Bluetooth.',
    },
    {
      question: 'Czy dane giną po wyjściu poza zasięg?',
      answer: 'Nie, jeśli skaner pracuje w trybie Auto. Pamięć 7,5 MB mieści do 590 000 kodów EAN-13, a skaner wysyła je po powrocie w zasięg.',
    },
    {
      question: 'Czy moduł spustu można zdjąć?',
      answer: 'Tak. Moduł zdejmuje się, naciskając przycisk zwalniający i obracając go w lewo. Przy zakładaniu spust można ustawić po lewej lub prawej stronie, zależnie od ręki użytkownika.',
    },
    {
      question: 'Jakie akcesoria są potrzebne do ładowania?',
      answer: 'Skaner ładuje się przewodem micro USB z zestawu. Dodatkowo dostępne są [stacja z przewodem USB](/produkt/unitech-ms652-stacja-usb) i zapasowy [akumulator](/produkt/unitech-ms652-bateria). Zasilacz [1010-900067G](/produkt/unitech-rp902-zasilacz) sprzedaje się osobno.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS652 Plus?',
      answer: 'Skaner na jednym palcu z uchwytem na palec to [MS633](/produkt/unitech-ms633). Modelem z dotykowym spustem i masą 19,4 g jest [MS626 Plus](/produkt/unitech-ms626-plus). Dalsze modele noszone na dłoni pokazuje kategoria [skanery pierścieniowe](/skanery-kodow-kreskowych/pierscieniowe).',
    },
  ],
  createdAt: '2026-10-30',
  updatedAt: '2026-10-30',
}

const ms626Plus: Product = {
  id: 'unitech-ms626-plus',
  slug: 'unitech-ms626-plus',
  name: 'Unitech MS626 Plus',
  seoH1: 'Unitech MS626 Plus',
  seoTitle: 'Skaner pierścieniowy Unitech MS626 Plus 2D Bluetooth 5.0 — 19,4 g',
  seoDescription: 'Skaner pierścieniowy Unitech MS626 Plus: noszony na palcu skaner 2D o masie 19,4 g, 120 klatek na sekundę, Bluetooth 5.0 i dotykowy spust do pracy w rękawicach. Skaner na palec Unitech MS626 Plus, ring scanner MS626+. PN: MS626-PUBB00-SG.',
  shortDescription: 'Unitech MS626 Plus — skaner pierścieniowy 2D o masie 19,4 g z Bluetooth 5.0, 120 klatkami na sekundę i dotykowym spustem działającym w rękawicach.',
  description: `Unitech MS626 Plus waży 19,4 g i mieści się na palcu w obudowie 27,6 × 46,2 × 26,8 mm. Jest przeznaczony do handlu, hotelarstwa, magazynów i serwisu w terenie. Dotykowy przycisk spustu działa także w rękawicach, a skaner można przestawić na lewą lub prawą rękę.

Matryca 640 × 480 wykonuje do 120 klatek na sekundę. Skaner odczytuje kody 1D i 2D w rozdzielczości 3 mil oraz kody z ekranów telefonów i monitorów LCD, w tym DotCode. Pas odczytu ma szerokość do 75 mm; UPC 13 mil odczytuje z 65–315 mm, a Code 39 5 mil z 50–150 mm.

Bluetooth 5.0 w trybie dual mode zapewnia zasięg do 20 m, a przewód USB-C umożliwia pracę przez USB HID lub wirtualny port COM. Akumulator 240 mAh wystarcza na około 5 godzin, a pełne ładowanie trwa 2,5 godziny. Obudowa IP42 znosi upadki z 1,5 m. Do skanera dołączono przewód USB-C oraz pasek na rzep.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-pierscieniowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS626Plus',
  priceFrom: 599.49,
  availability: 'on-order',
  images: ['/images/products/MS626-PUBB00-SG.png', '/images/products/MS626-PUBB00-SG-2.png', '/images/products/MS626-PUBB00-SG-3.png', '/images/products/MS626-PUBB00-SG-4.png'],
  imageDescriptions: [
    'Unitech MS626 Plus — skaner pierścieniowy z żółtym panelem dotykowego spustu, widok z przodu pod kątem',
    'Unitech MS626 Plus — widok z boku, pasek na rzep na palec',
    'Unitech MS626 Plus — dwa skanery pierścieniowe, widok z góry i z przodu',
    'Unitech MS626 Plus — widok z boku, żółty panel spustu i pasek na rzep',
  ],
  tags: TAGI_HANDEL,
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'MS626-PUBB00-SG' },
    { name: 'Typ skanera', value: 'Skaner pierścieniowy 2D (2. generacja), noszony na palcu, bezprzewodowy (Bluetooth 5.0)' },
    { name: 'Matryca', value: '640 × 480; 120 klatek/s' },
    { name: 'Celownik i oświetlenie', value: 'Celownik czerwony LED; oświetlenie białe LED' },
    { name: 'Rozdzielczość', value: '3 mil (0,075 mm); szerokość odczytu do 75 mm' },
    { name: 'Głębia ostrości', value: 'Code 39 5 mil: 50–150 mm; UPC/EAN 13 mil: 65–315 mm; QR 15 mil: 35–175 mm; PDF417 6,67 mil: 55–120 mm; Data Matrix 10 mil: 50–120 mm' },
    { name: 'Kody 2D', value: 'QR, Micro QR, PDF417, MicroPDF417, Data Matrix, Aztec, MaxiCode, Han Xin, DotCode' },
    { name: 'Interfejsy', value: 'Bluetooth: HID, SPP, BLE; USB HID i USB VCP (USB-C)' },
    { name: 'Łączność Bluetooth', value: '5.0 dual mode (klasa 2), do 20 m w otwartej przestrzeni' },
    { name: 'Pamięć', value: '2 MB' },
    { name: 'Akumulator', value: '3,7 V, 240 mAh; ładowanie ok. 2,5 h; praca do 5 h' },
    { name: 'Klasa szczelności', value: 'IP42' },
    { name: 'Odporność na upadki', value: '1,5 m na beton' },
    { name: 'Temperatura pracy', value: '-10°C do +50°C; ładowanie 10–45°C' },
    { name: 'Wymiary i masa', value: '27,6 × 46,2 × 26,8 mm, 19,4 g' },
    { name: 'Zawartość zestawu', value: 'Skaner, przewód USB-C, pasek na rzep' },
    { name: 'Gwarancja producenta', value: '15 miesięcy' },
  ],
  applications: ['Handel i hotelarstwo', 'Magazyn i serwis w terenie', 'Praca w rękawicach'],
  variants: [
    { partNumber: 'MS626-PUBB00-SG', name: 'MS626-PUBB00-SG, skaner 2D, Bluetooth 5.0, USB-C, pasek na rzep', attributes: {}, priceFrom: 599.49, availability: 'on-order' },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-rp902-przewod-usb-c'],
  relatedProducts: ['unitech-ms633', 'unitech-ms652-plus', 'zebra-rs2100', 'proglove-leo', 'proglove-mark-basic'],
  downloads: [MS626_DS, MS626_UM, MS626_QSG],
  faq: [
    {
      question: 'Czy MS626 Plus działa w rękawicach?',
      answer: 'Tak. Przycisk spustu jest dotykowy i reaguje także przy pracy w rękawicach.',
    },
    {
      question: 'Jak długo pracuje akumulator MS626 Plus?',
      answer: 'Akumulator 240 mAh wystarcza na około 5 godzin pracy. Pełne ładowanie zajmuje 2,5 godziny; akumulator ładuje się w zakresie 10–45°C.',
    },
    {
      question: 'Czy MS626 Plus czyta kody z ekranu telefonu?',
      answer: 'Tak. Skaner odczytuje zarówno kody liniowe, jak i dwuwymiarowe z ekranów telefonów i monitorów LCD, także DotCode.',
    },
    {
      question: 'Jak zmienić rękę, na której skaner jest noszony?',
      answer: 'MS626 Plus obsługuje pracę na lewej i prawej ręce. Skaner mocuje się na palcu paskiem na rzep z zestawu.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS626 Plus?',
      answer: 'Skaner z wymiennym akumulatorem 600 mAh to [MS633](/produkt/unitech-ms633), a skaner na dwa palce z NFC to [MS652 Plus](/produkt/unitech-ms652-plus). Skanery pierścieniowe innych marek zebrano w kategorii [skanery pierścieniowe](/skanery-kodow-kreskowych/pierscieniowe).',
    },
  ],
  createdAt: '2026-10-30',
  updatedAt: '2026-10-30',
}

const ms912Plus2d: Product = {
  id: 'unitech-ms912-plus-2d',
  slug: 'unitech-ms912-plus-2d',
  name: 'Unitech MS912 Plus 2D',
  seoH1: 'Unitech MS912 Plus 2D',
  seoTitle: 'Skaner kieszonkowy Unitech MS912 Plus 2D Bluetooth 5.0 — 30,7 g',
  seoDescription: 'Skaner kieszonkowy Unitech MS912 Plus 2D: bezprzewodowy skaner kodów 2D o masie 30,7 g, Bluetooth 5.0 do 20 m, tryb pamięci 2 MB i USB-C. Skaner Bluetooth Unitech MS912 Plus 2D, mini skaner 2D MS912+. PN: MS912-2UBB00-SG.',
  shortDescription: 'Unitech MS912 Plus 2D — kieszonkowy skaner 2D o masie 30,7 g z Bluetooth 5.0 do 20 m, trybem pamięci 2 MB, funkcją iOS Hotkey i przewodem USB-C.',
  description: `Unitech MS912 Plus 2D to kieszonkowy skaner 2D o masie 30,7 g i wymiarach 72 × 30 × 20 mm. Nosi się go na smyczy lub zawiesza na szlufce paska, a obsługa ogranicza się do jednego przycisku. Zastosowania obejmują hotelarstwo, serwis w terenie i ochronę zdrowia.

Silnik 2D 640 × 480 czyta kody 1D od 5 mil i kody 2D od 10 mil; UPC/EAN 13 mil z odległości 55–270 mm, QR 15 mil z 40–190 mm. Bluetooth 5.0 (klasa 2) z profilami HID i SPP działa do 20 m w otwartej przestrzeni, a funkcja iOS Hotkey przełącza klawiaturę ekranową iPhone lub iPada. W trybie pamięci 2 MB skaner zapisuje odczyty zamiast wysyłać je od razu, a po zakończeniu skanowania eksportuje dane do komputera przez USB.

Akumulator 350 mAh wystarcza na 5000 odczytów (jeden odczyt co 5 sekund, połączenie Bluetooth). Ładowanie trwa 2 godziny przez port USB-C. Skaner wytrzymuje upadki z 1,5 m. Smycz na nadgarstek i przewód USB-C stanowią wyposażenie dołączone do skanera.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-bezprzewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS912_plus_2D',
  priceFrom: 831.7,
  availability: 'on-order',
  images: ['/images/products/MS912-2UBB00-SG.png', '/images/products/MS912-2UBB00-SG-2.png', '/images/products/MS912-2UBB00-SG-3.png', '/images/products/MS912-2UBB00-SG-4.png'],
  imageDescriptions: [
    'Unitech MS912 Plus 2D — kieszonkowy skaner z białą obudową i czarną głowicą, widok z przodu pod kątem',
    'Unitech MS912 Plus 2D — widok z boku, port USB-C',
    'Unitech MS912 Plus 2D — widok z przodu, niebieski przycisk skanowania',
    'Unitech MS912 Plus 2D — widok od tyłu, pokrywa i otwór na smycz',
  ],
  tags: TAGI_HANDEL,
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'MS912-2UBB00-SG' },
    { name: 'Typ skanera', value: 'Kieszonkowy skaner 2D, bezprzewodowy (Bluetooth 5.0)' },
    { name: 'Matryca', value: '640 × 480; 30 klatek/s' },
    { name: 'Celownik', value: 'Czerwona dioda LED 625 nm' },
    { name: 'Rozdzielczość', value: '5 mil (kody 1D), 10 mil (kody 2D)' },
    { name: 'Głębia ostrości', value: 'Code 39 5 mil: 55–100 mm; UPC/EAN 13 mil: 55–270 mm; QR 15 mil: 40–190 mm; PDF417 6,7 mil: 45–120 mm; Data Matrix 10 mil: 40–90 mm' },
    { name: 'Odporność na światło', value: 'Do 70 000 luksów (światło słoneczne)' },
    { name: 'Interfejsy', value: 'Bluetooth: HID i SPP; USB HID, USB VCP, tryb pamięci (USB-C)' },
    { name: 'Łączność Bluetooth', value: '5.0 (klasa 2), do 20 m w otwartej przestrzeni' },
    { name: 'Pamięć', value: '2 MB' },
    { name: 'Akumulator', value: '3,7 V, 350 mAh; ładowanie ok. 2 h; 5000 odczytów (1 odczyt / 5 s)' },
    { name: 'Odporność na upadki', value: '1,5 m' },
    { name: 'Temperatura pracy', value: '-10°C do +50°C' },
    { name: 'Wymiary i masa', value: '72 × 30 × 20 mm, 30,7 g' },
    { name: 'Zawartość zestawu', value: 'Skaner, przewód USB-C, smycz na nadgarstek' },
    { name: 'Gwarancja producenta', value: '15 miesięcy' },
  ],
  applications: ['Hotelarstwo i serwis w terenie', 'Ochrona zdrowia', 'Skanowanie z telefonem lub tabletem'],
  variants: [
    { partNumber: 'MS912-2UBB00-SG', name: 'MS912-2UBB00-SG, skaner 2D, Bluetooth 5.0, USB-C, smycz', attributes: {}, priceFrom: 831.7, availability: 'on-order' },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms9xx-smycz-na-szyje', 'unitech-rp902-zasilacz'],
  relatedProducts: ['unitech-ms912-plus', 'unitech-ms926'],
  downloads: [MS912_2D_DS, MS912_2D_UM, MS912_2D_QSG],
  faq: [
    {
      question: 'Co oznacza funkcja iOS Hotkey?',
      answer: 'Funkcja przełącza klawiaturę ekranową iPhone lub iPada. Dzięki temu skaner sparowany z urządzeniem Apple nie zasłania ekranu klawiaturą podczas odczytu.',
    },
    {
      question: 'Jak działa tryb pamięci?',
      answer: 'W trybie pamięci skaner zapisuje odczyty w pamięci 2 MB zamiast wysyłać je przez Bluetooth. Po zakończeniu skanowania dane eksportuje się do komputera.',
    },
    {
      question: 'Z jakiej odległości MS912 Plus 2D czyta kody?',
      answer: 'Kody UPC/EAN 13 mil są czytane z odległości 55–270 mm, a kody QR 15 mil z 40–190 mm. Najdrobniejsze kody 1D mają moduł 5 mil.',
    },
    {
      question: 'Jak długo pracuje akumulator?',
      answer: 'Akumulator 350 mAh wystarcza na 5000 odczytów przy jednym odczycie co 5 sekund z połączeniem Bluetooth. Pełne ładowanie trwa 2 godziny.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS912 Plus 2D?',
      answer: 'Wersja do kodów liniowych to [MS912 Plus](/produkt/unitech-ms912-plus). Kieszonkowy skaner 2D z wyświetlaczem OLED to [MS926](/produkt/unitech-ms926). Dalsze skanery Bluetooth są w dziale [skanery bezprzewodowe](/skanery-kodow-kreskowych/bezprzewodowe).',
    },
  ],
  createdAt: '2026-10-30',
  updatedAt: '2026-10-30',
}

const ms912Plus: Product = {
  id: 'unitech-ms912-plus',
  slug: 'unitech-ms912-plus',
  name: 'Unitech MS912 Plus',
  seoH1: 'Unitech MS912 Plus',
  seoTitle: 'Skaner kieszonkowy Unitech MS912 Plus 1D Bluetooth — 650 skanów na sekundę',
  seoDescription: 'Skaner kieszonkowy Unitech MS912 Plus: bezprzewodowy skaner kodów 1D z liniowym sensorem CMOS, 650 skanów na sekundę, rozdzielczość 4 mil, Bluetooth do 10 m. Skaner Bluetooth Unitech MS912 Plus 1D, mini skaner MS912+. PN: MS912-FUBB00-TG.',
  shortDescription: 'Unitech MS912 Plus — kieszonkowy skaner kodów 1D z liniowym sensorem CMOS: 650 skanów na sekundę, rozdzielczość 4 mil, Bluetooth do 10 m, masa 30,2 g.',
  description: `Unitech MS912 Plus to kieszonkowy skaner kodów 1D z liniowym sensorem CMOS, który wykonuje do 650 skanów na sekundę. Wersja Plus ma większą szybkość odczytu i rozdzielczość 4 mil, a kody wyświetlane na ekranach telefonów czyta bez problemu. Skaner odczytuje kody w całkowitej ciemności i w bezpośrednim słońcu do 100 000 luksów. Szerokość odczytu wynosi 140 mm (Code 39 13 mil).

Obudowa o masie 30,2 g ma wymiary 72 × 30 × 20 mm. Mieści się w kieszeni, a w pudełku jest smycz na nadgarstek. Bluetooth 2.1+EDR (profile HID i SPP) pracuje w zasięgu do 10 m. W trybie Auto skaner przechowuje dane zebrane poza zasięgiem i wysyła je po powrocie, a funkcja iOS Hotkey włącza i wyłącza klawiaturę dotykową urządzeń iPhone i iPad.

Akumulator 350 mAh wystarcza na 6000 odczytów na jednym ładowaniu (jeden odczyt co 5 sekund). Ładowanie odbywa się przez standardowy port USB. Skaner pracuje w temperaturze od 0 do 50°C. Wybrane odległości odczytu: Code 39 4 mil — 40–65 mm, UPC/EAN 13 mil — 35–230 mm.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-bezprzewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS912PLUS',
  priceFrom: 784.61,
  availability: 'unavailable',
  images: ['/images/products/MS912-FUBB00-TG.png', '/images/products/MS912-FUBB00-TG-2.png', '/images/products/MS912-FUBB00-TG-3.png', '/images/products/MS912-FUBB00-TG-4.png'],
  imageDescriptions: [
    'Unitech MS912 Plus — kieszonkowy skaner kodów 1D, widok z przodu na okno skanera',
    'Unitech MS912 Plus — widok z boku, gniazdo USB pod zaślepką',
    'Unitech MS912 Plus — skaner na smyczy noszonej na szyi',
    'Unitech MS912 Plus — widok z przodu, niebieski przycisk skanowania',
  ],
  tags: TAGI_HANDEL,
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'MS912-FUBB00-TG' },
    { name: 'Typ skanera', value: 'Kieszonkowy skaner liniowy 1D (CCD, liniowy CMOS), bezprzewodowy (Bluetooth 2.1+EDR)' },
    { name: 'Szybkość skanowania', value: '650 skanów na sekundę' },
    { name: 'Źródło światła', value: 'Czerwona dioda LED 625 nm' },
    { name: 'Rozdzielczość', value: '4 mil (0,1 mm); szerokość odczytu 140 mm (Code 39 13 mil)' },
    { name: 'Głębia ostrości', value: 'Code 39 4 mil: 40–65 mm; Code 39 5 mil: 35–90 mm; Code 39 10 mil: 35–195 mm; UPC/EAN 13 mil: 35–230 mm' },
    { name: 'Odporność na światło', value: 'Do 100 000 luksów (bezpośrednie słońce)' },
    { name: 'Interfejsy', value: 'Bluetooth: HID i SPP; USB HID, USB VCP' },
    { name: 'Łączność Bluetooth', value: '2.1+EDR, do 10 m w otwartej przestrzeni' },
    { name: 'Akumulator', value: '3,7 V, 350 mAh; 6000 odczytów na ładowanie (1 odczyt / 5 s)' },
    { name: 'Odporność na upadki', value: '1,5 m' },
    { name: 'Temperatura pracy', value: '0°C do +50°C' },
    { name: 'Wymiary i masa', value: '72 × 30 × 20 mm, 30,2 g' },
    { name: 'Zawartość zestawu', value: 'Skaner, przewód USB, smycz na nadgarstek' },
    { name: 'Gwarancja producenta', value: '15 miesięcy' },
  ],
  applications: ['Hotelarstwo i serwis w terenie', 'Ochrona zdrowia', 'Odczyt kodów 1D z ekranu telefonu'],
  variants: [
    { partNumber: 'MS912-FUBB00-TG', name: 'MS912-FUBB00-TG, skaner 1D, Bluetooth, przewód USB, smycz', attributes: {}, priceFrom: 784.61, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms9xx-smycz-na-szyje', 'unitech-rp902-zasilacz'],
  relatedProducts: ['unitech-ms912-plus-2d', 'unitech-ms926'],
  downloads: [MS912_DS, MS912_UM, MS912_QSG],
  faq: [
    {
      question: 'Czy MS912 Plus czyta kody 2D i QR?',
      answer: 'Nie. Skaner z liniowym sensorem odczytuje kody 1D. Kody 2D odczytują [MS912 Plus 2D](/produkt/unitech-ms912-plus-2d) i [MS926](/produkt/unitech-ms926).',
    },
    {
      question: 'Czy MS912 Plus czyta kody z ekranu telefonu?',
      answer: 'Tak, ale wyłącznie kod liniowy. Takie kody skaner odczytuje w każdych warunkach oświetlenia, od ciemności po bezpośrednie słońce do 100 000 luksów.',
    },
    {
      question: 'Jaki jest zasięg Bluetooth w MS912 Plus?',
      answer: 'Radio Bluetooth 2.1+EDR sięga 10 m w linii widoczności. MS912 Plus 2D ma Bluetooth 5.0 z zasięgiem do 20 m.',
    },
    {
      question: 'Co dzieje się z odczytami poza zasięgiem?',
      answer: 'W trybie Auto dane czekają w buforze skanera i trafiają do urządzenia, gdy wróci łączność.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS912 Plus?',
      answer: 'Kieszonkowy skaner 2D to [MS912 Plus 2D](/produkt/unitech-ms912-plus-2d), a model z wyświetlaczem OLED to [MS926](/produkt/unitech-ms926). Skanery bez kabla innych marek znajdują się w dziale [skanery bezprzewodowe](/skanery-kodow-kreskowych/bezprzewodowe).',
    },
  ],
  createdAt: '2026-10-30',
  updatedAt: '2026-10-30',
}

const ms926: Product = {
  id: 'unitech-ms926',
  slug: 'unitech-ms926',
  name: 'Unitech MS926',
  seoH1: 'Unitech MS926',
  seoTitle: 'Skaner kieszonkowy Unitech MS926 2D z wyświetlaczem OLED i NFC',
  seoDescription: 'Skaner kieszonkowy Unitech MS926: bezprzewodowy skaner 2D z wyświetlaczem OLED 1 cal, parowaniem NFC, tablicą wyszukiwania 10 000 kodów i pamięcią na 100 000 kodów. Skaner Bluetooth Unitech MS926, mini skaner 2D z wyświetlaczem. PN: MS926-UUBU00-SG.',
  shortDescription: 'Unitech MS926 — kieszonkowy skaner 2D z wyświetlaczem OLED 1 cal, parowaniem NFC, tablicą wyszukiwania do 10 000 kodów i pamięcią na 100 000 kodów.',
  description: `Unitech MS926 to kieszonkowy skaner 2D z wyświetlaczem OLED 1 cal (128 × 64) i trzema przyciskami, na którym widać odczytane dane. Zastosowania przy obsłudze klienta to identyfikacja osób i bilety mobilne.

Funkcja Smart Data Mapping łączy tablicę wyszukiwania na maksymalnie 10 000 kodów z podglądem i edycją danych oraz znacznikiem daty i godziny. Pamięć flash 2 MB mieści do 100 000 kodów w trybie wsadowym (zależnie od długości kodu).

Parowanie z urządzeniem z NFC odbywa się przez zbliżenie; dostępne jest też zwykłe połączenie Bluetooth 2.1+EDR (HID, SPP) w zasięgu około 9 m (30 stóp). Matryca 640 × 480 pracuje z prędkością 30 klatek na sekundę i czyta kody z ekranów telefonów oraz z papieru w dowolnej orientacji.

Akumulator 680 mAh ładuje się przez USB-C około 4 godzin i zapewnia 5 godzin pracy (jeden odczyt co 5 sekund). Skaner ma klasę IP42, wytrzymuje upadki z 1,5 m i waży 63 g. Wyposażenie obejmuje przewód USB-C do ładowania i smycz na nadgarstek.`,
  categoryId: 'skanery-kodow-kreskowych',
  subcategoryIds: ['skanery-bezprzewodowe'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/MS926',
  priceFrom: 1384.92,
  availability: 'unavailable',
  images: ['/images/products/MS926-UUBU00-SG.png', '/images/products/MS926-UUBU00-SG-2.png', '/images/products/MS926-UUBU00-SG-3.png', '/images/products/MS926-UUBU00-SG-4.png'],
  imageDescriptions: [
    'Unitech MS926 — kieszonkowy skaner 2D z wyświetlaczem OLED, widok z góry pod kątem na okno skanera',
    'Unitech MS926 — widok z przodu na wyświetlacz OLED z żółtym pasem',
    'Unitech MS926 — widok z boku, wyświetlacz i przyciski',
    'Unitech MS926 — widok od tyłu, szara obudowa i port USB-C',
  ],
  tags: TAGI_HANDEL,
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'MS926-UUBU00-SG' },
    { name: 'Typ skanera', value: 'Kieszonkowy skaner 2D z wyświetlaczem OLED, bezprzewodowy (Bluetooth 2.1+EDR, NFC)' },
    { name: 'Wyświetlacz', value: 'OLED 1 cal, 128 × 64; 3 przyciski' },
    { name: 'Matryca', value: 'CMOS 640 × 480; 30 klatek/s' },
    { name: 'Oświetlenie', value: 'Białe LED 5000 K; odczyt w świetle od 0 do 100 000 luksów' },
    { name: 'Głębia ostrości', value: 'UPC 100%: 55–280 mm; Code 39 20 mil: 60–380 mm; QR 20 mil: 50–230 mm; Data Matrix 10 mil: 60–130 mm' },
    { name: 'Tolerancja ruchu', value: 'Do 10 cm/s dla UPC 13 mil' },
    { name: 'Interfejsy', value: 'Bluetooth: HID i SPP; USB-C' },
    { name: 'Łączność Bluetooth', value: '2.1+EDR, do 30 stóp (ok. 9 m) w otwartej przestrzeni; parowanie NFC' },
    { name: 'Tryby pracy', value: 'Ze spustem, prezentacyjny, Auto, wsadowy, wedge' },
    { name: 'Pamięć', value: '64 KB SRAM, 2 MB Flash; do 100 000 kodów w trybie wsadowym' },
    { name: 'Smart Data Mapping', value: 'Tablica wyszukiwania do 10 000 kodów, podgląd i edycja danych, znacznik daty i godziny' },
    { name: 'Akumulator', value: 'Li-ion 680 mAh; ładowanie ok. 4 h; praca 5 h (1 odczyt / 5 s)' },
    { name: 'Klasa szczelności', value: 'IP42' },
    { name: 'Odporność na upadki', value: '1,5 m na beton (sam skaner)' },
    { name: 'Temperatura pracy', value: '0°C do +50°C' },
    { name: 'Wymiary i masa', value: '95,9 × 36,9 × 21,1 mm, 63 g' },
    { name: 'Zawartość zestawu', value: 'Skaner, przewód USB-C, smycz na nadgarstek' },
    { name: 'Gwarancja producenta', value: '15 miesięcy' },
  ],
  applications: ['Identyfikacja osób i bilety mobilne', 'Obsługa klienta z podglądem odczytu', 'Kontrola danych z tablicą wyszukiwania'],
  variants: [
    { partNumber: 'MS926-UUBU00-SG', name: 'MS926-UUBU00-SG, skaner 2D z wyświetlaczem OLED, Bluetooth, NFC, USB-C', attributes: {}, priceFrom: 1384.92, availability: 'unavailable' },
  ],
  compatibleAccessories: [],
  relatedAccessories: ['unitech-ms926-stacja-ladujaca', 'unitech-ms926-pasek-na-nadgarstek', 'unitech-ms9xx-smycz-na-szyje', 'unitech-rp902-zasilacz'],
  relatedProducts: ['unitech-ms912-plus-2d', 'unitech-ms912-plus'],
  downloads: [MS926_DS, MS926_UM, MS926_QSG],
  faq: [
    {
      question: 'Do czego służy wyświetlacz OLED w MS926?',
      answer: 'Na wyświetlaczu 1 cal widać odczytane dane i stan skanera. Trzy przyciski przewijają zawartość, a odczyt może być uzupełniony znacznikiem daty i godziny.',
    },
    {
      question: 'Co to jest Smart Data Mapping?',
      answer: 'To funkcja łącząca tablicę wyszukiwania (do 10 000 kodów wczytanych do pamięci) z podglądem i edycją danych. Pozwala porównać odczyt z listą i poprawić dane przed wysłaniem.',
    },
    {
      question: 'Jaki jest zasięg Bluetooth w MS926?',
      answer: 'Zasięg wynosi do 30 stóp, czyli około 9 m w otwartej przestrzeni. Skaner można sparować z urządzeniem wyposażonym w NFC przez zbliżenie.',
    },
    {
      question: 'Ile kodów MS926 zapisze w trybie wsadowym?',
      answer: 'Pamięć flash 2 MB mieści do 100 000 kodów, zależnie od ich długości. Dane eksportuje się do urządzenia po zakończeniu skanowania.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech MS926?',
      answer: 'Kieszonkowy skaner 2D bez wyświetlacza to [MS912 Plus 2D](/produkt/unitech-ms912-plus-2d), a skaner liniowy to [MS912 Plus](/produkt/unitech-ms912-plus). Skanery innych marek pracujące bez przewodu pokazuje kategoria [skanery bezprzewodowe](/skanery-kodow-kreskowych/bezprzewodowe).',
    },
  ],
  createdAt: '2026-10-30',
  updatedAt: '2026-10-30',
}

const wd200Plus: Product = {
  id: 'unitech-wd200-plus',
  slug: 'unitech-wd200-plus',
  name: 'Unitech WD200 Plus',
  seoH1: 'Unitech WD200 Plus',
  seoTitle: 'Komputer noszony Unitech WD200 Plus z Androidem 13 — terminal na nadgarstek',
  seoDescription: 'Komputer noszony Unitech WD200 Plus: terminal naramienny z Androidem 13, aparatem 16 MP, HF/NFC i współpracą ze skanerami pierścieniowymi Unitech. Terminal na nadgarstek Unitech WD200 Plus, WD200+ Unitech, komputer ubieralny. PN: WD200-0F6FRM3G.',
  shortDescription: 'Unitech WD200 Plus — komputer noszony na nadgarstku z Androidem 13 do kompletacji z wolnymi rękami: aparat 16 MP, HF/NFC, współpraca ze skanerami Unitech MS633, MS652 Plus, MS912 Plus 2D oraz MS926.',
  description: `Unitech WD200 Plus to komputer noszony z Androidem 13 (z certyfikatem GMS), przeznaczony do intensywnej kompletacji zamówień w magazynach, handlu, logistyce, transporcie i na placach przeładunkowych. Nie ma wbudowanego silnika skanującego. Kody odczytuje aparat 16 MP z lampą błyskową, obsługiwany aplikacją USS Camera, albo sparowany skaner Bluetooth. Współpracują z nim skanery pierścieniowe [MS633](/produkt/unitech-ms633) i [MS652 Plus](/produkt/unitech-ms652-plus), kieszonkowe [MS912 Plus 2D](/produkt/unitech-ms912-plus-2d) i [MS926](/produkt/unitech-ms926) oraz czytnik UHF RFID [RP902](/produkt/unitech-rp902).

Terminal odczytuje znaczniki HF/NFC 13,56 MHz (ISO 14443A/B i ISO 15693). Dwa mikrofony i głośnik 1 W z układem Smart PA zapewniają czytelną rozmowę w hałasie. Flotą zarządzają SOTI, 42Gears, MoboLink i VMware, a narzędzia Unitech (StageGO, OEMConfig, Enterprise Launcher) przygotowują urządzenia do pracy. Aktualizacje oprogramowania dostarcza FOTA. Aplikacje działają na 8-rdzeniowym procesorze z 4 GB RAM i 64 GB pamięci Flash, a zakres temperatury pracy to −20…50°C.

W pudełku są terminal, przewód USB-C i skrócona instrukcja. Zasilacz oraz mocowanie na nadgarstek kupuje się osobno.

## Co jest potrzebne do użycia?

**Wymagane — sprzedawane osobno**

- [Zasilacz Unitech EA660, EA530 i WD200 Plus, wtyczka EU (1010-900074G)](/produkt/unitech-ea-zasilacz-usb-c-eu)

**Wymagane dla komputera: mocowanie (jedno z) — sprzedawane osobno**

- [Zestaw uchwytu na nadgarstek Unitech WD200 Plus (3210-900026G)](/produkt/unitech-wd200-uchwyt-na-nadgarstek)
- [Uchwyt dwupaskowy Unitech WD200 Plus (3210-900051G)](/produkt/unitech-wd200-uchwyt-dwupaskowy)

Terminal ładuje się przewodem USB-C z zasilacza, a także w stacji 4-gniazdowej.`,
  categoryId: 'terminale-mobilne',
  subcategoryIds: ['terminale-naramienne'],
  manufacturerId: 'unitech',
  sameAs: 'https://www.ute.com/en/products/detail/WD200Plus',
  priceFrom: 2556.4,
  availability: 'on-order',
  images: ['/images/products/WD200-0F6FRM3G.png', '/images/products/WD200-0F6FRM3G-2.png', '/images/products/WD200-0F6FRM3G-3.png', '/images/products/WD200-0F6FRM3G-4.png'],
  imageDescriptions: [
    'Unitech WD200 Plus — widok z przodu pod kątem, ekran z aplikacjami Android',
    'Unitech WD200 Plus — widok z przodu, ekran dotykowy i boczny przycisk',
    'Unitech WD200 Plus na nadgarstku w mocowaniu z czarnym paskiem',
    'Unitech WD200 Plus — tył obudowy z tabliczką znamionową',
  ],
  tags: ['magazyn', 'logistyka', 'retail'],
  isNew: true,
  isBestseller: false,
  specifications: [
    { name: 'Part Number', value: 'WD200-0F6FRM3G' },
    { name: 'Typ urządzenia', value: 'Komputer noszony na nadgarstku (terminal naramienny)' },
    { name: 'System operacyjny', value: 'Android 13 z certyfikatem GMS' },
    { name: 'Procesor', value: '8 rdzeni: 2 × A75 2,0 GHz + 6 × A55 1,8 GHz' },
    { name: 'Pamięć RAM / Flash', value: '4 GB RAM, 64 GB Flash' },
    { name: 'Wyświetlacz', value: '3,54″ TFT-LCD 960 × 640, 500 nitów; pojemnościowy, obsługa w rękawicach i na mokro' },
    { name: 'Skaner kodów', value: 'Brak wbudowanego silnika; aparat 16 MP z lampą (USS Camera) lub skaner Bluetooth' },
    { name: 'NFC / HF RFID', value: '13,56 MHz; ISO 14443A/B, ISO 15693' },
    { name: 'Wi-Fi', value: 'Wi-Fi 6 (2 × 2 MU-MIMO), IEEE 802.11 ax/a/b/g/n/ac/d/h/i/k/r/v; szybki roaming 802.11r, OKC' },
    { name: 'Łączność', value: 'Bluetooth 5; GPS, GLONASS, Galileo, BeiDou' },
    { name: 'Złącza', value: 'USB 2.0 typ C z OTG; styki POGO do stacji' },
    { name: 'Audio', value: 'Głośnik 1 W z układem Smart PA; dwa mikrofony' },
    { name: 'Bateria', value: 'Wbudowana 3,85 V, 2500 mAh Li-polymer, naprawialna serwisowo; ładowanie USB PD; praca do 11 h' },
    { name: 'Klasa szczelności', value: 'IP68 (zanurzenie do 1 m przez 1 h)' },
    { name: 'Odporność na upadki', value: '1,5 m na beton wg MIL-STD-810G; 1000 przewrotów z 0,5 m' },
    { name: 'Temperatura pracy', value: '-20°C do +50°C' },
    { name: 'Wymiary i masa', value: '96,7 × 60,7 × 14,43 mm, 123 g z baterią' },
    { name: 'Zarządzanie urządzeniami', value: 'SOTI, 42Gears, MoboLink, VMware; narzędzia Unitech: StageGO, OEMConfig, Enterprise Launcher' },
    { name: 'Zawartość zestawu', value: 'Terminal, przewód USB-C, skrócona instrukcja; zasilacz i mocowanie sprzedawane osobno' },
    { name: 'Gwarancja', value: '12 miesięcy' },
  ],
  applications: ['Kompletacja zamówień z wolnymi rękami', 'Magazyn, handel i transport', 'Place przeładunkowe'],
  variants: [
    { partNumber: 'WD200-0F6FRM3G', name: 'WD200-0F6FRM3G, Wi-Fi 6, 4 / 64 GB, aparat 16 MP, bez silnika skanującego', attributes: {}, priceFrom: 2556.4, availability: 'on-order' },
  ],
  compatibleAccessories: [],
  relatedAccessories: [
    'unitech-wd200-uchwyt-na-nadgarstek',
    'unitech-ea-zasilacz-usb-c-eu',
    'unitech-wd200-stacja-4-slot',
    'unitech-wd200-uchwyt-dwupaskowy',
    'unitech-rp902-przewod-usb-c',
    'unitech-wd200-szklo-ochronne',
    'unitech-wd200-podkladka',
    'unitech-wd200-pasek',
    'unitech-rp902-zasilacz',
  ],
  relatedProducts: ['zebra-wt5400', 'zebra-wt6400', 'proglove-lana'],
  downloads: [WD200_DS, WD200_UM, WD200_QSG, WD200_ACC],
  faq: [
    {
      question: 'Czy WD200 Plus ma wbudowany skaner kodów kreskowych?',
      answer: 'Nie. Kody odczytuje aparat 16 MP z lampą, obsługiwany aplikacją USS Camera, albo skaner Bluetooth połączony z komputerem. Do pracy z wolnymi rękami służą skanery [MS633](/produkt/unitech-ms633), [MS652 Plus](/produkt/unitech-ms652-plus), [MS912 Plus 2D](/produkt/unitech-ms912-plus-2d) i [MS926](/produkt/unitech-ms926).',
    },
    {
      question: 'Co zawiera zestaw WD200 Plus?',
      answer: 'W pudełku są komputer, przewód USB-C i skrócona instrukcja. Zasilacz i mocowanie na nadgarstek trzeba zamówić osobno, a opcjonalnie także stację 4-gniazdową.',
    },
    {
      question: 'Jak ładować WD200 Plus?',
      answer: 'Komputer ładuje się przewodem USB-C z [zasilacza](/produkt/unitech-ea-zasilacz-usb-c-eu) albo w [stacji 4-gniazdowej](/produkt/unitech-wd200-stacja-4-slot) przez styki POGO. Bateria 2500 mAh jest wbudowana i naprawialna serwisowo.',
    },
    {
      question: 'Czy WD200 Plus współpracuje z czytnikiem UHF RFID?',
      answer: 'Tak. Z komputerem współpracuje czytnik [Unitech RP902](/produkt/unitech-rp902). Sam komputer odczytuje znaczniki HF/NFC 13,56 MHz.',
    },
    {
      question: 'Jakie są alternatywy dla Unitech WD200 Plus?',
      answer: 'Inne terminale noszone to [Zebra WT5400](/produkt/zebra-wt5400), [Zebra WT6400](/produkt/zebra-wt6400) i [ProGlove LANA](/produkt/proglove-lana). Wszystkie są w kategorii [terminale naramienne](/terminale-naramienne).',
    },
  ],
  createdAt: '2026-10-30',
  updatedAt: '2026-10-30',
}

export const unitechWirelessScannerProducts: Product[] = [
  ms852bPlusEsd,
  ms836b,
  ms838b,
  ms822b,
  ms912Plus2d,
  ms633,
  ms652Plus,
  ms626Plus,
  wd200Plus,
  ms852b,
  ms852bPlus,
  ms852bLr,
  ms852p,
  ms851bEsd,
  ms912Plus,
  ms926,
]
