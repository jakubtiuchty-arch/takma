import type { Product } from './products'
import { wspolneJ7300 } from './brady-j7300-wspolne'

// Kasety z tuszem P- (z wbudowaną głowicą) i rolka wyrównująca J-ALIGN do drukarki BradyJet J7300. 14.11.2026.

export const bradyJ7300Tusze: Product = {
  ...wspolneJ7300,
  id: 'brady-p-cmy-1',
  slug: 'brady-p-cmy-1',
  name: 'Kasety z tuszem Brady P-CMY-1 i P-K-1 do drukarki BradyJet J7300',
  seoTitle: 'Brady P-CMY-1 i P-K-1 — tusze do drukarki Brady J7300',
  seoDescription: 'Kasety z tuszem do Brady J7300 (BradyJet) z wbudowaną głowicą: CMY 32 ml i czarna 35 ml, także zestawy po 3 szt. PN: P-CMY-1, P-K-1, P-1CMY2K, P-2CMY1K.',
  shortDescription: 'Brady P-CMY-1 (kolory CMY) i P-K-1 (czerń) to kasety z tuszem i wbudowaną głowicą drukującą do kolorowej drukarki etykiet Brady J7300. Są też zestawy po trzy kasety.',
  description: 'Drukarka Brady J7300 drukuje z dwóch kaset z tuszem. Kaseta P-CMY-1 zawiera trzy kolory: cyjan, magentę i żółty. Kaseta P-K-1 zawiera czerń. W każdą kasetę jest wbudowana głowica drukująca, dlatego nowa kaseta ma też nową głowicę.\n\nKaseta CMY mieści 32 ml tuszu, a czarna 35 ml. Zestaw P-1CMY2K zawiera jedną kasetę CMY i dwie czarne, a P-2CMY1K dwie kasety CMY i jedną czarną. Kasetę CMY wkłada się do gniazda 2, a czarną do gniazda 1, zgodnie z numerem na obudowie. Przy 10% tuszu drukarka wyświetla ostrzeżenie. Po wymianie kasety drukarka prosi o wyrównanie i drukuje etykietę testową.\n\nZamknięta kaseta zachowuje przydatność przez rok, a otwarta, pozostawiona w drukarce, do 3 miesięcy. Zamknięte kasety przechowuje się w temperaturze 1–40 °C, zawieszką do góry. Dane kasety drukarka odczytuje przez Smart Cell, a zużycie tuszu pokazuje na ekranie.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/cmy-ink-cartridge-for-bradyjet-j7300-colour-label-printer-pid-p-cmy-1',
  images: ['/images/products/brady/p-cmy-1.png', '/images/products/brady/p-k-1.png', '/images/products/brady/p-2cmy1k.png', '/images/products/brady/p-1cmy2k.png'],
  imageDescriptions: [
    'Kaseta z tuszem CMY Brady P-CMY-1 z wbudowaną głowicą, oznaczona numerem gniazda 2',
    'Kaseta z czarnym tuszem Brady P-K-1 z wbudowaną głowicą, oznaczona numerem gniazda 1',
    'Zestaw Brady P-2CMY1K: dwie kasety CMY i jedna kaseta czarna',
    'Zestaw Brady P-1CMY2K: dwie kasety czarne i jedna kaseta CMY',
  ],
  specifications: [
    { name: 'Typ', value: 'Kasety z tuszem do druku atramentowego z wbudowaną głowicą drukującą' },
    { name: 'Kolory', value: 'P-CMY-1: cyjan, magenta, żółty; P-K-1: czarny' },
    { name: 'Pojemność', value: 'P-CMY-1: 32 ml; P-K-1: 35 ml' },
    { name: 'Zestawy', value: 'P-1CMY2K: 1 × CMY i 2 × K; P-2CMY1K: 2 × CMY i 1 × K' },
    { name: 'Wymiary kasety', value: '40,64 × 71,12 × 99,06 mm' },
    { name: 'Przydatność', value: 'zamknięta kaseta: 1 rok; otwarta w drukarce: do 3 miesięcy' },
    { name: 'Temperatura pracy', value: 'od 5 do 35 °C' },
    { name: 'Temperatura przechowywania', value: 'od 1 do 40 °C' },
    { name: 'Rozpoznawanie kasety', value: 'Smart Cell' },
    { name: 'Zgodne drukarki', value: 'J7300' },
    { name: 'Numery artykułów Brady', value: 'P-CMY-1: 176504; P-K-1: 176505; P-1CMY2K: 177431; P-2CMY1K: 177432' },
  ],
  variants: [
    { partNumber: 'P-CMY-1', name: 'Brady P-CMY-1 — kaseta z tuszem CMY, 32 ml', attributes: { Tusz: 'CMY (cyjan, magenta, żółty)', Ilość: '1 kaseta' }, availability: 'unavailable' },
    { partNumber: 'P-K-1', name: 'Brady P-K-1 — kaseta z czarnym tuszem, 35 ml', attributes: { Tusz: 'Czarny (K)', Ilość: '1 kaseta' }, availability: 'unavailable' },
    { partNumber: 'P-2CMY1K', name: 'Brady P-2CMY1K — 2 kasety CMY i 1 czarna', attributes: { Tusz: '2 × CMY i 1 × czarny', Ilość: '3 kasety' }, availability: 'unavailable' },
    { partNumber: 'P-1CMY2K', name: 'Brady P-1CMY2K — 1 kaseta CMY i 2 czarne', attributes: { Tusz: '1 × CMY i 2 × czarny', Ilość: '3 kasety' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    Tusz: 'Kolory tuszu w kasecie lub zestawie do Brady J7300.\n\nCMY — jedna kaseta z trzema kolorami: cyjanem, magentą i żółtym.\n\nCzarny (K) — osobna kaseta z czernią do tekstu i kodów kreskowych.',
    Ilość: 'Liczba kaset w opakowaniu.\n\n1 kaseta — pojedyncza kaseta CMY albo czarna.\n\n3 kasety — zestaw z przewagą koloru albo czerni, zależnie od zużycia.',
  },
  faq: [
    { question: 'Co zawiera kaseta z tuszem do Brady J7300?', answer: 'Tusz i głowicę drukującą. Kaseta P-CMY-1 ma trzy kolory w 32 ml tuszu, a P-K-1 ma 35 ml czerni. [Brady J7300](/produkt/brady-j7300) używa obu kaset jednocześnie.' },
    { question: 'Który zestaw kaset wybrać?', answer: 'Przy etykietach z dużą ilością tekstu i kodów kreskowych szybciej zużywa się czerń, więc pasuje zestaw P-1CMY2K. Przy kolorowych grafikach i znakach szybciej kończy się kaseta CMY, więc pasuje P-2CMY1K.' },
  ],
  applications: ['Wymiana tuszu w drukarce Brady J7300', 'Zapas kaset do druku kolorowych etykiet'],
}

export const bradyJAlign: Product = {
  ...wspolneJ7300,
  id: 'brady-j-align',
  slug: 'brady-j-align',
  name: 'Rolka wyrównująca Brady J-ALIGN do drukarki BradyJet J7300',
  seoTitle: 'Brady J-ALIGN — rolka do wyrównania kaset w Brady J7300',
  seoDescription: 'Rolka wyrównująca Brady J-ALIGN do drukarki etykiet Brady J7300 (BradyJet): biała matowa taśma 101,6 mm × 12,24 m do wyrównania kaset z tuszem. Nr art. 176579.',
  shortDescription: 'Brady J-ALIGN — rolka białej matowej taśmy 101,6 mm do wyrównania kaset z tuszem po ich wymianie w drukarce Brady J7300. Jedna rolka jest w zestawie z drukarką.',
  description: 'Brady J-ALIGN to rolka białej, matowej taśmy do wyrównania kaset z tuszem w drukarce Brady J7300. Wyrównanie ustawia kasety do druku w obu kierunkach i kalibruje drukarkę do każdej kasety. Drukarka prosi o nie przy każdej nowej kasecie.\n\nPodczas wyrównania drukarka drukuje etykietę testową. Ręczne wyrównanie pomaga, gdy na etykietach są smugi, pasy, nieostry tekst albo przesunięte kolory. Zamiast rolki J-ALIGN można użyć taśmy ciągłej o szerokości co najmniej 75 mm.\n\nSzerokość taśmy to 101,6 mm, podkładu 106,68 mm, a długość rolki 12,24 m. Rolka jest nawinięta na gilzę 76,2 mm i ma układ Smart Cell. Jedna rolka J-ALIGN jest w opakowaniu drukarki. Ta karta dotyczy rolki zapasowej.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/alignment-roll-for-bradyjet-j7300-colour-label-printer-pid-j-align',
  images: ['/images/products/brady/j-align.png'],
  imageDescriptions: ['Rolka wyrównująca Brady J-ALIGN z białą taśmą na niebieskiej szpuli z układem Smart Cell'],
  specifications: [
    { name: 'Part Number', value: 'J-ALIGN' },
    { name: 'Numer artykułu Brady', value: '176579' },
    { name: 'Typ', value: 'Rolka do wyrównania kaset z tuszem' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Szerokość taśmy', value: '101,6 mm' },
    { name: 'Szerokość podkładu', value: '106,68 mm' },
    { name: 'Długość taśmy', value: '12,24 m' },
    { name: 'Gilza', value: '76,2 mm' },
    { name: 'Rozpoznawanie rolki', value: 'Smart Cell' },
    { name: 'Zgodne drukarki', value: 'J7300' },
  ],
  faq: [
    { question: 'Kiedy potrzebna jest rolka J-ALIGN?', answer: 'Po każdej wymianie kasety z tuszem w [Brady J7300](/produkt/brady-j7300) oraz przy smugach lub przesuniętych kolorach. Zamiast niej można założyć taśmę ciągłą szerszą niż 75 mm.' },
  ],
  applications: ['Wyrównanie kaset po wymianie tuszu', 'Kalibracja druku przy smugach i przesuniętych kolorach'],
}

export const bradyJ7300TuszeKarty: Product[] = [bradyJ7300Tusze, bradyJAlign]
