import type { Product } from './products'
import { wspolneB30 } from './brady-b30-wspolne'

// Taśmy panelowe R10000 (dwu- i czterokolorowe) w kasetach B30 do wielokolorowej drukarki S3700 (także starsze BBP35 i BBP37).
// Do S3100 nie pasują (druk jednym kolorem). Jedna karta na rodzinę z brady.eu, PN jako warianty. 14.11.2026.

const DRUKARKI_PANELOWE = 'S3700, BBP35, BBP37'

export const bradyB30R10000Dwukolorowa: Product = {
  ...wspolneB30,
  relatedProducts: ['brady-s3700'],
  id: 'brady-b30-r10000-ky-8',
  slug: 'brady-b30-r10000-ky-8',
  name: 'Dwukolorowa taśma barwiąca Brady B30-R10000-KY-8 seria R10000 do S3700',
  seoTitle: 'Brady B30-R10000-KY-8 — dwukolorowe taśmy panelowe do S3700',
  seoDescription: 'Dwukolorowe taśmy barwiące Brady R10000 do S3700: panele 203,2 albo 406,4 mm, 110 mm × 60 m, 9 wersji. PN: B30-R10000-KY-8, B30-R10000-KR-8, B30-R10000-KY-16.',
  shortDescription: 'Brady B30-R10000-KY-8 i pozostałe taśmy dwukolorowe serii R10000 mają na przemian panele w dwóch kolorach, np. czarnym i żółtym. Drukarka nakłada oba kolory na jeden znak bez wymiany kasety. Do drukarek Brady S3700, BBP35 i BBP37.',
  description: 'Dwukolorowa taśma R10000 to kaseta B30, w której taśma barwiąca ma powtarzające się pary paneli w dwóch kolorach. Drukarka Brady S3700 nanosi z jednej kasety oba kolory na ten sam znak albo etykietę. Taśma ma formułę żywiczną, a nadruk jest odporny na rozmazywanie i wytrzymuje lata w halach i na zewnątrz.\n\nDługość taśmy w kasecie to 60 m, a szerokość 110 mm. Wersje z końcówką -8 mają 100 kompletów paneli po 203,2 mm. Końcówka -16 oznacza 60 kompletów paneli po 406,4 mm. Długość panelu wyznacza największą długość wydruku w dwóch kolorach. Czarny łączy się z żółtym, czerwonym, niebieskim albo pomarańczowym, a jedna wersja ma panele niebieskie i czerwone.\n\nUkład Smart Cell rozpoznaje kasetę, dlatego taśmy nie trzeba kalibrować ani przewlekać. Wąskie etykiety drukarka układa tak, aby jeden komplet paneli objął kilka z nich. Wersje czarno-żółte są odporne na zarysowanie i rozpuszczalniki. Kasety obsługują drukarki S3700, BBP35 i BBP37. Jednokolorowa S3100 ich nie przyjmuje.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/b30-series-2-colour-r10000-printer-ribbon-cps-4393945',
  images: ['/images/products/brady/b30-r10000-ky-8.png', '/images/products/brady/b30-r10000-kr-8.png', '/images/products/brady/b30-r10000-rb-16.png'],
  imageDescriptions: [
    'Kaseta Brady B30-R10000-KY-8 z taśmą barwiącą w panelach czarnych i żółtych',
    'Kaseta Brady B30-R10000-KR-8 z taśmą barwiącą w panelach czarnych i czerwonych',
    'Kaseta Brady B30-R10000-RB-16 z taśmą barwiącą w panelach niebieskich i czerwonych',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z dwukolorową taśmą barwiącą (panelową) do druku termotransferowego' },
    { name: 'Seria', value: 'R10000' },
    { name: 'Formuła', value: 'żywiczna' },
    { name: 'Kolory paneli', value: 'czarny z żółtym, czerwonym, niebieskim albo pomarańczowym; niebieski z czerwonym' },
    { name: 'Szerokość taśmy', value: '110 mm' },
    { name: 'Długość taśmy', value: '60 m' },
    { name: 'Grubość', value: '0,0057 mm' },
    { name: 'Długość panelu', value: '203,2 mm (końcówka -8) albo 406,4 mm (końcówka -16)' },
    { name: 'Liczba kompletów paneli', value: '100 (końcówka -8) albo 60 (końcówka -16)' },
    { name: 'Odporność', value: 'wersje czarno-żółte: zarysowanie, rozpuszczalniki' },
    { name: 'Rozpoznawanie kasety', value: 'Smart Cell' },
    { name: 'Zgodne drukarki', value: DRUKARKI_PANELOWE },
    { name: 'Numery artykułów Brady', value: 'B30-R10000-KY-8: 140849; B30-R10000-KR-8: 140850; B30-R10000-KB-8: 140848; B30-R10000-KO-8: 140847; B30-R10000-KY-16: 140855; B30-R10000-KR-16: 140864; B30-R10000-KB-16: 140852; B30-R10000-KO-16: 140863; B30-R10000-RB-16: 140851' },
  ],
  variants: [
    { partNumber: 'B30-R10000-KY-8', name: 'Brady B30-R10000-KY-8 — taśma czarno-żółta, panele 203,2 mm', attributes: { Kolory: 'Czarny i żółty', Panel: '203,2 mm, 100 kompletów' }, availability: 'unavailable' },
    { partNumber: 'B30-R10000-KR-8', name: 'Brady B30-R10000-KR-8 — taśma czarno-czerwona, panele 203,2 mm', attributes: { Kolory: 'Czarny i czerwony', Panel: '203,2 mm, 100 kompletów' }, availability: 'unavailable' },
    { partNumber: 'B30-R10000-KB-8', name: 'Brady B30-R10000-KB-8 — taśma czarno-niebieska, panele 203,2 mm', attributes: { Kolory: 'Czarny i niebieski', Panel: '203,2 mm, 100 kompletów' }, availability: 'unavailable' },
    { partNumber: 'B30-R10000-KO-8', name: 'Brady B30-R10000-KO-8 — taśma czarno-pomarańczowa, panele 203,2 mm', attributes: { Kolory: 'Czarny i pomarańczowy', Panel: '203,2 mm, 100 kompletów' }, availability: 'unavailable' },
    { partNumber: 'B30-R10000-KY-16', name: 'Brady B30-R10000-KY-16 — taśma czarno-żółta, panele 406,4 mm', attributes: { Kolory: 'Czarny i żółty', Panel: '406,4 mm, 60 kompletów' }, availability: 'unavailable' },
    { partNumber: 'B30-R10000-KR-16', name: 'Brady B30-R10000-KR-16 — taśma czarno-czerwona, panele 406,4 mm', attributes: { Kolory: 'Czarny i czerwony', Panel: '406,4 mm, 60 kompletów' }, availability: 'unavailable' },
    { partNumber: 'B30-R10000-KB-16', name: 'Brady B30-R10000-KB-16 — taśma czarno-niebieska, panele 406,4 mm', attributes: { Kolory: 'Czarny i niebieski', Panel: '406,4 mm, 60 kompletów' }, availability: 'unavailable' },
    { partNumber: 'B30-R10000-KO-16', name: 'Brady B30-R10000-KO-16 — taśma czarno-pomarańczowa, panele 406,4 mm', attributes: { Kolory: 'Czarny i pomarańczowy', Panel: '406,4 mm, 60 kompletów' }, availability: 'unavailable' },
    { partNumber: 'B30-R10000-RB-16', name: 'Brady B30-R10000-RB-16 — taśma niebiesko-czerwona, panele 406,4 mm', attributes: { Kolory: 'Niebieski i czerwony', Panel: '406,4 mm, 60 kompletów' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    Kolory: 'Dwa kolory paneli na taśmie R10000.\n\nCzarny z żółtym, czerwonym, niebieskim albo pomarańczowym służy np. do znaków ostrzegawczych, zakazu i nakazu. Panele niebiesko-czerwone są tylko w wersji z panelem 406,4 mm.',
    Panel: 'Długość jednego panelu koloru i liczba kompletów w kasecie 60 m.\n\n203,2 mm — 100 kompletów, do mniejszych znaków i etykiet.\n\n406,4 mm — 60 kompletów, do dłuższych wydruków w dwóch kolorach.',
  },
  faq: [
    { question: 'Jak działa dwukolorowa taśma R10000 w Brady S3700?', answer: 'Taśma ma na przemian panele w dwóch kolorach. [Brady S3700](/produkt/brady-s3700) drukuje każdy kolor ze swojego panelu na tym samym znaku, bez wymiany kasety. Długość panelu, 203,2 albo 406,4 mm, wyznacza największą długość wydruku dwukolorowego.' },
    { question: 'Czy dwukolorowe taśmy R10000 pasują do Brady S3100?', answer: 'Nie. S3100 drukuje jednym kolorem i nie obsługuje taśm panelowych. Dwukolorowe kasety R10000 pasują do drukarek S3700, BBP35 i BBP37.' },
  ],
  applications: ['Dwukolorowe znaki ostrzegawcze, zakazu i nakazu', 'Oznaczenia rur z kolorowym tłem i napisem', 'Etykiety z wyróżnionym nagłówkiem'],
}

export const bradyB30R10000Czterokolorowa: Product = {
  ...wspolneB30,
  relatedProducts: ['brady-s3700'],
  id: 'brady-b30-r10000-kryb-8',
  slug: 'brady-b30-r10000-kryb-8',
  name: 'Czterokolorowa taśma barwiąca Brady B30-R10000-KRYB-8 seria R10000 do S3700',
  seoTitle: 'Brady B30-R10000-KRYB-8 — czterokolorowa taśma do S3700',
  seoDescription: 'Czterokolorowe taśmy barwiące Brady R10000 do S3700: czarny, czerwony, żółty i niebieski albo zielony, 110 mm × 60 m. PN: B30-R10000-KRYB-8, B30-R10000-KRYG-8.',
  shortDescription: 'Brady B30-R10000-KRYB-8 to kaseta z taśmą panelową w czterech kolorach: czarnym, czerwonym, żółtym i niebieskim. Wersja KRYG-8 ma zielony zamiast niebieskiego. Do drukarek Brady S3700, BBP35 i BBP37.',
  description: 'Czterokolorowa taśma R10000 w kasecie B30 ma kolejno po sobie cztery panele: czarny, czerwony, żółty oraz niebieski albo zielony. Z jednej kasety drukarka Brady S3700 tworzy znak bezpieczeństwa w pełnych barwach, np. z czerwonym piktogramem, żółtym tłem i czarnym tekstem. Nadruk żywiczny jest trwały i nie rozmazuje się.\n\nKaseta mieści 60 m taśmy szerokiej na 110 mm. B30-R10000-KRYB-8 i B30-R10000-KRYG-8 mają 50 kompletów paneli o długości 203,2 mm. B30-R10000-KRYB-16 ma 30 kompletów po 406,4 mm i nadaje się do dłuższych znaków. Kolor niebieski występuje w obu długościach paneli, a zielony tylko w krótszej.\n\nPo włożeniu kasety układ Smart Cell odczytuje jej numer i pozostałą ilość taśmy. Wersja KRYB-16 wytrzymuje zarysowania i kontakt z rozpuszczalnikami. Lista zgodnych drukarek obejmuje S3700 oraz starsze BBP35 i BBP37. Drukarka S3100 nie drukuje z taśm panelowych.',
  sameAs: 'https://www.brady.eu/ribbons-cartridges/b30-series-4-colour-r10000-printer-ribbon-cps-4393948',
  images: ['/images/products/brady/b30-r10000-kryb-8.png', '/images/products/brady/b30-r10000-kryg-8.png'],
  imageDescriptions: [
    'Kaseta Brady B30-R10000-KRYB-8 z taśmą w panelach czarnych, czerwonych, żółtych i niebieskich',
    'Kaseta Brady B30-R10000-KRYG-8 z taśmą w panelach czarnych, czerwonych, żółtych i zielonych',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z czterokolorową taśmą barwiącą (panelową) do druku termotransferowego' },
    { name: 'Seria', value: 'R10000' },
    { name: 'Formuła', value: 'żywiczna' },
    { name: 'Kolory paneli', value: 'czarny, czerwony, żółty i niebieski (KRYB) albo zielony (KRYG)' },
    { name: 'Szerokość taśmy', value: '110 mm' },
    { name: 'Długość taśmy', value: '60 m' },
    { name: 'Grubość', value: '0,0057 mm (wersje -8)' },
    { name: 'Długość panelu', value: '203,2 mm (końcówka -8) albo 406,4 mm (końcówka -16)' },
    { name: 'Liczba kompletów paneli', value: '50 (końcówka -8) albo 30 (końcówka -16)' },
    { name: 'Odporność', value: 'B30-R10000-KRYB-16: zarysowanie, rozpuszczalniki' },
    { name: 'Rozpoznawanie kasety', value: 'Smart Cell' },
    { name: 'Zgodne drukarki', value: DRUKARKI_PANELOWE },
    { name: 'Numery artykułów Brady', value: 'B30-R10000-KRYB-8: 140866; B30-R10000-KRYG-8: 140860; B30-R10000-KRYB-16: 140859' },
  ],
  variants: [
    { partNumber: 'B30-R10000-KRYB-8', name: 'Brady B30-R10000-KRYB-8 — czarny, czerwony, żółty, niebieski; panele 203,2 mm', attributes: { '4. kolor': 'Niebieski', Panel: '203,2 mm, 50 kompletów' }, availability: 'unavailable' },
    { partNumber: 'B30-R10000-KRYG-8', name: 'Brady B30-R10000-KRYG-8 — czarny, czerwony, żółty, zielony; panele 203,2 mm', attributes: { '4. kolor': 'Zielony', Panel: '203,2 mm, 50 kompletów' }, availability: 'unavailable' },
    { partNumber: 'B30-R10000-KRYB-16', name: 'Brady B30-R10000-KRYB-16 — czarny, czerwony, żółty, niebieski; panele 406,4 mm', attributes: { '4. kolor': 'Niebieski', Panel: '406,4 mm, 30 kompletów' }, availability: 'unavailable' },
  ],
  variantAttributeTooltips: {
    '4. kolor': 'Czwarty kolor taśmy. Każda wersja ma panele czarny, czerwony i żółty.\n\nNiebieski — do znaków nakazu i informacyjnych.\n\nZielony — do znaków ewakuacyjnych i pierwszej pomocy.',
    Panel: 'Długość panelu koloru i liczba kompletów czterech paneli w kasecie 60 m.\n\n203,2 mm — 50 kompletów.\n\n406,4 mm — 30 kompletów, do dłuższych znaków w pełnych barwach.',
  },
  faq: [
    { question: 'Jakie znaki wydrukuje Brady S3700 z taśmy czterokolorowej?', answer: 'Znaki bezpieczeństwa w pełnych barwach: ostrzegawcze z żółtym tłem, zakazu z czerwonym kołem, nakazu z niebieskim polem albo ewakuacyjne z zielonym. [Brady S3700](/produkt/brady-s3700) nanosi wszystkie kolory z jednej kasety. Do znaków ewakuacyjnych służy wersja KRYG-8 z zielonym panelem.' },
    { question: 'Czym różnią się taśmy KRYB-8 i KRYB-16?', answer: 'Długością paneli. KRYB-8 ma 50 kompletów paneli po 203,2 mm, a KRYB-16 — 30 kompletów po 406,4 mm. Dłuższe panele pozwalają drukować w czterech kolorach dłuższe znaki.' },
  ],
  applications: ['Znaki bezpieczeństwa w pełnych barwach', 'Znaki ewakuacyjne i pierwszej pomocy (wersja z zielonym)', 'Kolorowe oznaczenia Lean/5S'],
}

export const bradyB30TasmyPanelowe: Product[] = [bradyB30R10000Dwukolorowa, bradyB30R10000Czterokolorowa]

export const bradyB30TasmyPanelowSekcje: Record<string, 'ciagle' | 'etykiety' | 'zestawy' | 'tasmy'> = Object.fromEntries(
  bradyB30TasmyPanelowe.map((p) => [p.id, 'tasmy' as const]),
)
