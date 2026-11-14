import type { Product } from './products'
import { wspolneM6 } from './brady-m6-wspolne'

// Winyl, tkanina winylowa i taśma odblaskowa w kasetach M6 / M6C i materiale BM do Brady M610 i M611.
// Kasety nie mają taśmy barwiącej — zalecaną taśmę M61 podaje specyfikacja, a kolor nadruku kolumna „Kolor i nadruk”.
// Rodziny Brady: cps-4554350, 4554316, 5143111, 5193088, 5143089, 4554334, 4554335, 4554346. 14.11.2026.

const DRUKARKI_M610 = 'M610, M611; M710 z adapterem materiałów; starsze BMP61 i BMP71 (BMP71 z adapterem materiałów)'

const KOLORY: Record<string, string> = {
  WT: 'Biały',
  YL: 'Żółty',
  OR: 'Pomarańczowy',
  RD: 'Czerwony',
  BL: 'Niebieski',
  LB: 'Jasnoniebieski',
  GN: 'Zielony',
  GR: 'Zielony',
  BK: 'Czarny',
  BR: 'Brązowy',
  GD: 'Złoty',
  GY: 'Szary',
  PL: 'Fioletowy',
  OC: 'Ochrowy',
  SL: 'Srebrny',
  CL: 'Przezroczysty',
  PK: 'Różowy',
  TN: 'Beżowy',
  SB: 'Błękitny',
}

// Szerokość taśmy ciągłej według członu PN (M6C-<człon>-…).
const SZEROKOSC: Record<string, string> = {
  '250': '6,35 mm',
  '240': '6,1 mm',
  '318': '8,08 mm',
  '375': '9,53 mm',
  '500': '12,7 mm',
  '750': '19,05 mm',
  '1000': '25,4 mm',
  '1500': '38,1 mm',
  '1900': '48,26 mm',
  '2000': '50,8 mm',
}

const kolorZPn = (pn: string) => KOLORY[pn.split('-')[3] ?? 'WT']
// Odmiana koloru w nazwie wariantu: taśma (r. żeński) i etykiety (l. mnoga).
const kolorZenski = (pn: string) => kolorZPn(pn).toLowerCase().replace(/[yi]$/, 'a')
const kolorMnogi = (pn: string) => kolorZPn(pn).toLowerCase().replace(/y$/, 'e').replace(/i$/, 'ie')
const szerokoscZPn = (pn: string) => SZEROKOSC[pn.split('-')[1]]

// Zalecany kolor nadruku wynika z zalecanej taśmy barwiącej: M61-R…10 = czarny, M61-R…10-WT = biały.
type Nadruk = 'czarny' | 'biały' | 'biały lub czarny'
// Kolumna tabeli wersji „Kolor”: kolor materiału i zalecany kolor nadruku (jedna kolumna, aby tabela mieściła się przy 1024 px).
// W tabeli wersji długie nazwy kolorów mają miękkie dywizy, aby tabela mieściła się przy 1024 px (nazwy wariantów bez zmian).
const kolorTabela = (pn: string) => kolorZPn(pn).replace('Jasnoniebieski', 'Jasno\u00ADniebieski').replace('Pomarańczowy', 'Poma\u00ADrań\u00ADczowy').replace('Przezroczysty', 'Prze\u00ADzro\u00ADczysty')
const kolorINadruk = (pn: string, nadruk: Nadruk) => `${kolorTabela(pn)}, nadruk ${nadruk}`

// ---------------------------------------------------------------------------
// B-595 — taśma winylowa do pracy na zewnątrz (cps-4554350)
// ---------------------------------------------------------------------------

const TASMY_595: [string, string, Nadruk][] = [
  ['M6C-2000-595-WT', '174141', 'czarny'],
  ['M6C-2000-595-YL', '174142', 'czarny'],
  ['M6C-2000-595-OR', '174138', 'czarny'],
  ['M6C-2000-595-GD', '174135', 'czarny'],
  ['M6C-2000-595-LB', '174137', 'czarny'],
  ['M6C-2000-595-CL', '174134', 'czarny'],
  ['M6C-2000-595-RD', '174140', 'biały'],
  ['M6C-2000-595-BR', '174133', 'biały'],
  ['M6C-2000-595-GN', '174136', 'biały'],
  ['M6C-2000-595-BL', '174132', 'biały'],
  ['M6C-2000-595-PL', '174139', 'biały'],
  ['M6C-2000-595-BK', '174131', 'biały'],
  ['M6C-1000-595-WT', '174126', 'czarny'],
  ['M6C-1000-595-YL', '174127', 'czarny'],
  ['M6C-1000-595-OR', '174124', 'czarny'],
  ['M6C-1000-595-GY', '174123', 'czarny'],
  ['M6C-1000-595-CL', '174121', 'czarny'],
  ['M6C-1000-595-RD', '174125', 'biały'],
  ['M6C-1000-595-GN', '174122', 'biały'],
  ['M6C-1000-595-BL', '174120', 'biały'],
  ['M6C-1000-595-BK', '174119', 'biały'],
  ['M6C-750-595-WT', '321848', 'czarny'],
  ['M6C-750-595-YL', '321849', 'czarny'],
  ['M6C-750-595-OR', '321850', 'czarny'],
  ['M6C-750-595-RD', '321847', 'czarny'],
  ['M6C-750-595-GN', '321852', 'czarny'],
  ['M6C-750-595-BL', '321851', 'czarny'],
  ['M6C-500-595-WT', '174162', 'czarny'],
  ['M6C-500-595-YL', '174163', 'czarny'],
  ['M6C-500-595-OR', '174160', 'czarny'],
  ['M6C-500-595-CL', '174158', 'czarny'],
  ['M6C-500-595-RD', '174161', 'biały'],
  ['M6C-500-595-GN', '174159', 'biały'],
  ['M6C-500-595-BL', '174157', 'biały'],
  ['M6C-500-595-BK', '174156', 'biały'],
  ['M6C-375-595-WT', '321860', 'czarny'],
  ['M6C-375-595-YL', '321861', 'czarny'],
  ['M6C-375-595-OR', '321862', 'czarny'],
  ['M6C-375-595-RD', '321859', 'czarny'],
  ['M6C-375-595-GN', '321864', 'czarny'],
  ['M6C-375-595-BL', '321863', 'czarny'],
]

const TASMY_595_M7: [string, string, Nadruk][] = [
  ['M7C-2000-595-WT', '173241', 'czarny'],
  ['M7C-2000-595-YL', '173240', 'czarny'],
  ['M7C-2000-595-OR', '173247', 'czarny'],
  ['M7C-2000-595-GD', '173252', 'czarny'],
  ['M7C-2000-595-LB', '173249', 'czarny'],
  ['M7C-2000-595-CL', '173253', 'czarny'],
  ['M7C-2000-595-GY', '173250', 'czarny'],
  ['M7C-2000-595-PK', '173246', 'czarny'],
  ['M7C-2000-595-TN', '173242', 'czarny'],
  ['M7C-2000-595-OC', '173248', 'czarny'],
  ['M7C-2000-595-SB', '173243', 'czarny'],
  ['M7C-2000-595-RD', '173244', 'biały'],
  ['M7C-2000-595-BR', '173254', 'biały'],
  ['M7C-2000-595-GN', '173251', 'biały'],
  ['M7C-2000-595-BL', '173255', 'biały'],
  ['M7C-2000-595-PL', '173245', 'biały'],
  ['M7C-2000-595-BK', '173256', 'biały'],
  ['M7C-1000-595-WT', '173272', 'czarny'],
  ['M7C-1000-595-YL', '173271', 'czarny'],
  ['M7C-1000-595-OR', '173278', 'czarny'],
  ['M7C-1000-595-GD', '173283', 'czarny'],
  ['M7C-1000-595-LB', '173280', 'czarny'],
  ['M7C-1000-595-CL', '173284', 'czarny'],
  ['M7C-1000-595-GY', '173281', 'czarny'],
  ['M7C-1000-595-PK', '173277', 'czarny'],
  ['M7C-1000-595-TN', '173273', 'czarny'],
  ['M7C-1000-595-OC', '173279', 'czarny'],
  ['M7C-1000-595-SB', '173274', 'czarny'],
  ['M7C-1000-595-RD', '173275', 'biały'],
  ['M7C-1000-595-BR', '173285', 'biały'],
  ['M7C-1000-595-GN', '173282', 'biały'],
  ['M7C-1000-595-BL', '173286', 'biały'],
  ['M7C-1000-595-PL', '173276', 'biały'],
  ['M7C-1000-595-BK', '173287', 'biały'],
  ['M7C-750-595-WT', '321854', 'czarny'],
  ['M7C-750-595-YL', '321855', 'czarny'],
  ['M7C-750-595-OR', '321856', 'czarny'],
  ['M7C-750-595-RD', '321853', 'czarny'],
  ['M7C-750-595-GN', '321858', 'czarny'],
  ['M7C-750-595-BL', '321857', 'czarny'],
  ['M7C-500-595-WT', '173205', 'czarny'],
  ['M7C-500-595-YL', '173204', 'czarny'],
  ['M7C-500-595-OR', '173211', 'czarny'],
  ['M7C-500-595-GD', '173216', 'czarny'],
  ['M7C-500-595-LB', '173213', 'czarny'],
  ['M7C-500-595-CL', '173217', 'czarny'],
  ['M7C-500-595-GY', '173214', 'czarny'],
  ['M7C-500-595-PK', '173210', 'czarny'],
  ['M7C-500-595-TN', '173206', 'czarny'],
  ['M7C-500-595-OC', '173212', 'czarny'],
  ['M7C-500-595-SB', '173207', 'czarny'],
  ['M7C-500-595-RD', '173208', 'biały'],
  ['M7C-500-595-BR', '173218', 'biały'],
  ['M7C-500-595-GN', '173215', 'biały'],
  ['M7C-500-595-BL', '173219', 'biały'],
  ['M7C-500-595-PL', '173209', 'biały'],
  ['M7C-500-595-BK', '173220', 'biały'],
  ['M7C-375-595-WT', '321866', 'czarny'],
  ['M7C-375-595-YL', '321867', 'czarny'],
  ['M7C-375-595-OR', '321868', 'czarny'],
  ['M7C-375-595-RD', '321865', 'czarny'],
  ['M7C-375-595-GN', '321870', 'czarny'],
  ['M7C-375-595-BL', '321869', 'czarny'],
  ['M7C-250-595-WT', '173237', 'czarny'],
  ['M7C-250-595-YL', '173236', 'czarny'],
]

export const bradyM6Winyl595: Product = {
  ...wspolneM6,
  id: 'brady-m6c-2000-595-wt',
  slug: 'brady-m6c-2000-595-wt',
  name: 'Taśma winylowa do pracy na zewnątrz Brady M6C-2000-595-WT — kasety M6 i M7 do M610, M611 i M710',
  seoTitle: 'Brady M6C-2000-595-WT — taśma winylowa na zewnątrz do M610 i M710',
  seoDescription: 'Winyl Brady B-595 do M610 i M710: taśma ciągła 6,35–50,8 mm × 15,24 m, do 10 lat na zewnątrz. PN: M6C-2000-595-WT, M7C-1000-595-YL, M6C-500-595-RD.',
  shortDescription: 'Brady M6C-2000-595-WT i pozostałe kasety M6C oraz M7C z winylem B-595 o małym skurczu i bardzo mocnym kleju. Taśma ciągła od 6,35 do 50,8 mm, odporna na warunki zewnętrzne. Kasety M6 pasują do drukarek Brady M610 i M611, a kasety M7 do M710.',
  description: 'Taśma Brady B-595 to winyl o małym skurczu, przeznaczony do oznaczeń na zewnątrz budynków. Na zewnątrz etykieta zachowuje trwałość do 10 lat. Bardzo mocny, trwały klej akrylowy dobrze trzyma zarówno na gładkim, jak i na szorstkim podłożu. Taśmę można nakleić na malowany pustak, malowane drewno, teksturowane tworzywo albo rury w płaszczu papierowym. Powierzchnia winylu jest błyszcząca.\n\nKażda kaseta mieści rolkę 15,24 m taśmy. Długość każdej etykiety określa projekt w drukarce. W rodzinie jest 41 kaset M6C w 13 kolorach i 65 kaset M7C w 17 kolorach. Kasety M6C występują w pięciu szerokościach: najwęższa ma 9,53 mm, najszersza 50,8 mm. Kasety M7C dochodzą jeszcze do szerokości 6,35 mm oraz kolorów różowego, beżowego, błękitnego i ochrowego. Taśma przezroczysta jest dostępna w trzech szerokościach, wymienionych w tabeli wersji.\n\nWinyl znosi promieniowanie UV, chemikalia, smary, oleje, mgłę solną i detergenty. Zakres pracy to od −40 do 82 °C, także w zamrażarce. Taśmę można naklejać już od −18 °C. Materiał ma zgodność z BS 5609 (sekcja 2 i sekcja 3) oraz z dyrektywą RoHS. W kasetach M6C jasne taśmy wymagają czarnej taśmy barwiącej M61-R10010, a część ciemnych białej M61-R10010-WT. Dla kaset M7C służą taśmy M7-R10000 i M7-R6000 (czarne) oraz M7-R10000-WT i M7-R4400-WT (białe). Kasety M6C obsługują drukarki M610 i M611, a do M710 wymagają adaptera materiałów. Kasety M7C pracują w M710 i starszej BMP71.',
  sameAs: 'https://www.brady.eu/labels/all-weather-permanent-adhesive-vinyl-label-tape-for-m710-m610-m611-printers-cps-4554350',
  images: [
    '/images/products/brady/m6c-2000-595-wt.png',
    '/images/products/brady/m6c-2000-595-yl.png',
    '/images/products/brady/m6c-1000-595-rd.png',
  ],
  imageDescriptions: [
    'Rolka białej taśmy winylowej Brady M6C-2000-595-WT o szerokości 50,8 mm na uchwycie kasety',
    'Rolka żółtej taśmy winylowej Brady M6C-2000-595-YL z wysuniętym odcinkiem taśmy',
    'Rolka czerwonej taśmy winylowej Brady M6C-1000-595-RD o szerokości 25,4 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-595' },
    { name: 'Typ materiału', value: 'winyl o małym skurczu, do pracy wewnątrz i na zewnątrz' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, bardzo mocny' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 82 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Warunki pracy', value: 'na zewnątrz (do 10 lat), zamrażarka' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, oleje, woda, UV, mgła solna, detergenty' },
    { name: 'Kolory', value: 'biały, żółty, pomarańczowy, złoty, szary, jasnoniebieski, przezroczysty, czerwony, brązowy, zielony, niebieski, fioletowy, czarny; kasety M7C także różowy, beżowy, błękitny i ochrowy (zależnie od szerokości)' },
    { name: 'Szerokość taśmy', value: '9,53 / 12,7 / 19,05 / 25,4 / 50,8 mm; kasety M7C także 6,35 mm; zależnie od wersji' },
    { name: 'Długość taśmy', value: '15,24 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Normy', value: 'BS 5609:1986, sekcje 2 i 3; RoHS 2011/65/EU (2015/863)' },
    { name: 'Zalecana taśma barwiąca', value: 'kasety M6C: M61-R10010 (czarna) albo M61-R10010-WT (biała), zależnie od koloru taśmy; kasety M7C: M7-R10000 albo M7-R6000 (czarne), M7-R10000-WT albo M7-R4400-WT (białe)' },
    { name: 'Zgodne drukarki', value: 'kasety M6C: M610, M611, BMP61; M710 i BMP71 z adapterem materiałów. Kasety M7C: M710, BMP71' },
    { name: 'Numery artykułów Brady', value: [...TASMY_595, ...TASMY_595_M7].map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: [
    ...TASMY_595.map(([pn, , nadruk]) => ({
      partNumber: pn,
      name: `Brady ${pn} — winyl B-595 ${szerokoscZPn(pn)} × 15,24 m, ${kolorZPn(pn).toLowerCase()}`,
      attributes: { Szerokość: szerokoscZPn(pn), Kolor: kolorINadruk(pn, nadruk), Drukarka: 'M610, M611' },
      availability: 'unavailable' as const,
    })),
    ...TASMY_595_M7.map(([pn, , nadruk]) => ({
      partNumber: pn,
      name: `Brady ${pn} — winyl B-595 ${szerokoscZPn(pn)} × 15,24 m, ${kolorZPn(pn).toLowerCase()}, kaseta do M710`,
      attributes: { Szerokość: szerokoscZPn(pn), Kolor: kolorINadruk(pn, nadruk), Drukarka: 'M710' },
      availability: 'unavailable' as const,
    })),
  ],
  variantAttributeTooltips: {
    Szerokość: 'Szerokość taśmy ciągłej w kasecie.\n\nKażda kaseta ma 15,24 m taśmy. Kasety M6C mają od 9,53 do 50,8 mm, a kasety M7C od 6,35 do 50,8 mm. Długość etykiety wybiera się w projekcie.',
    Kolor: 'Kolor winylu B-595 i kolor nadruku, do którego dobiera się taśmę barwiącą.\n\nNajwięcej kolorów ma taśma 50,8 mm: 12 w kasetach M6C i 17 w M7C. Na taśmie białej, żółtej i przezroczystej nadruk jest czarny, a na czarnej, brązowej i fioletowej biały.',
    Drukarka: 'Drukarki, w których działa dany numer.\n\nM610, M611 — kasety M6 i materiały BM. Pasują też do M710 po założeniu adaptera M71-ADAPT-BK z zestawu drukarki.\n\nM710 — kasety M7 i materiały BM7; nie pasują do M610 ani M611.',
  },
  faq: [
    { question: 'Jak długo taśma B-595 wytrzymuje na zewnątrz?', answer: 'Do 10 lat. Winyl jest odporny na UV, mgłę solną, oleje i detergenty. Etykiety zachowują własności w temperaturach od −40 do 82 °C.' },
    { question: 'Którą taśmę barwiącą wybrać do kolorowej taśmy B-595?', answer: 'Na jasnym tle drukuje czarna taśma M61-R10010. Do taśmy czarnej, brązowej i fioletowej oraz części czerwonych, zielonych i niebieskich zalecana jest biała M61-R10010-WT. Kolor nadruku dla każdej kasety podaje tabela wariantów.' },
    { question: 'Które kasety z winylem B-595 pasują do Brady M710?', answer: 'Kasety M7C działają w [Brady M710](/produkt/brady-m710) bez dodatków. Kasety M6C pasują do M710 po założeniu [adaptera M71-ADAPT-BK](/produkt/brady-m71-adapt-bk) z zestawu drukarki. W M710 stosuje się taśmy M7-R10000 i M7-R6000 oraz M7-R10000-WT i M7-R4400-WT, a taśm M61 nie stosuje się. Do M610 i M611 pasują tylko kasety M6C.' },
  ],
  applications: ['Oznaczenia instalacji na zewnątrz budynków', 'Oznaczanie rur, zaworów i urządzeń', 'Oznaczenia podłóg i magazynu'],
}

// ---------------------------------------------------------------------------
// B-439 WorkHorse — wielozadaniowa taśma winylowa (cps-4554316)
// ---------------------------------------------------------------------------

const TASMY_439: [string, string, Nadruk][] = [
  ['M6C-1000-439', '174308', 'czarny'],
  ['M6C-1000-439-YL', '174314', 'biały lub czarny'],
  ['M6C-1000-439-OR', '174312', 'biały lub czarny'],
  ['M6C-1000-439-RD', '174313', 'biały lub czarny'],
  ['M6C-1000-439-BL', '174310', 'biały lub czarny'],
  ['M6C-1000-439-GR', '174311', 'biały lub czarny'],
  ['M6C-1000-439-BK', '174309', 'biały'],
  ['M6C-1900-439', '174318', 'czarny'],
  ['M6C-1900-439-YL', '174324', 'biały lub czarny'],
  ['M6C-1900-439-OR', '174322', 'biały lub czarny'],
  ['M6C-1900-439-RD', '174323', 'biały lub czarny'],
  ['M6C-1900-439-BL', '174320', 'biały lub czarny'],
  ['M6C-1900-439-GR', '174321', 'biały lub czarny'],
  ['M6C-1900-439-BK', '174319', 'biały'],
  ['M6C-500-439', '174363', 'czarny'],
  ['M6C-500-439-YL', '174369', 'biały lub czarny'],
  ['M6C-500-439-OR', '174367', 'biały lub czarny'],
  ['M6C-500-439-RD', '174368', 'biały lub czarny'],
  ['M6C-500-439-BL', '174365', 'biały lub czarny'],
  ['M6C-500-439-GR', '174366', 'biały lub czarny'],
  ['M6C-500-439-BK', '174364', 'biały'],
  ['M6C-375-439', '174147', 'czarny'],
  ['M6C-375-439-YL', '174148', 'czarny'],
]

export const bradyM6WorkHorse439: Product = {
  ...wspolneM6,
  id: 'brady-m6c-1000-439',
  slug: 'brady-m6c-1000-439',
  name: 'Wielozadaniowa taśma winylowa Brady WorkHorse M6C-1000-439 — kasety M6 do M610 i M611',
  seoTitle: 'Brady WorkHorse M6C-1000-439 — taśma winylowa do M610',
  seoDescription: 'Kolorowy winyl Brady WorkHorse B-439 do M610: 4 szerokości do 48,26 mm, 7 kolorów, praca od −70 do 80 °C. PN: M6C-1000-439, M6C-500-439-YL, M6C-1900-439-RD.',
  shortDescription: 'Brady WorkHorse M6C-1000-439 i pozostałe kasety M6C z kolorowym winylem B-439 na trwałym kleju akrylowym. Taśma ciągła 9,53–48,26 mm w siedmiu kolorach. Do drukarek Brady M610 i M611.',
  description: 'Brady WorkHorse B-439 to kolorowy winyl do ogólnych oznaczeń w zakładzie. Służy do etykiet na produkty, podzespoły i tabliczki znamionowe. Kolor tła pozwala rozróżnić grupy urządzeń albo obwody. Winyl jest bardzo giętki i ma błyszczącą powierzchnię. Mocny, trwały klej akrylowy trzyma na podłożach brudnych, chropowatych i z wyraźną fakturą.\n\nKażda kaseta M6C ma 15,24 m taśmy ciągłej. Szerokości to 9,53, 12,7, 25,4 i 48,26 mm. Taśmy 12,7, 25,4 i 48,26 mm są w siedmiu kolorach: białym, żółtym, pomarańczowym, czerwonym, niebieskim, zielonym i czarnym. Taśma 9,53 mm jest biała albo żółta. Grubość materiału wynosi 0,107 mm.\n\nMateriał pracuje w zakresie od −70 do 80 °C i znosi warunki zamrażarki. Wytrzymuje ścieranie, kontakt z chemikaliami, korozję, wilgoć, UV i warunki atmosferyczne. Kontakt z rozpuszczalnikami powinien być ograniczony. Na białej taśmie drukuje czarna taśma barwiąca M61-R6010. Na czarnej taśmie drukuje biała M61-R4410-WT. Na pozostałych kolorach można użyć jednej z nich. Kasety obsługują drukarki M610 i M611. Drukarka M710 wymaga adaptera materiałów.',
  sameAs: 'https://www.brady.eu/labels/multi-purpose-vinyl-label-tape-for-m710-m610-m611-printers-cps-4554316',
  images: [
    '/images/products/brady/m6c-1000-439.png',
    '/images/products/brady/m6c-1900-439-yl.png',
    '/images/products/brady/m6c-500-439-rd.png',
    '/images/products/brady/m6c-1000-439-bl.png',
  ],
  imageDescriptions: [
    'Rolka białej taśmy Brady WorkHorse M6C-1000-439 o szerokości 25,4 mm na uchwycie kasety',
    'Rolka żółtej taśmy Brady WorkHorse M6C-1900-439-YL o szerokości 48,26 mm',
    'Rolka czerwonej taśmy Brady WorkHorse M6C-500-439-RD o szerokości 12,7 mm',
    'Rolka niebieskiej taśmy Brady WorkHorse M6C-1000-439-BL z wysuniętym odcinkiem taśmy',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'WorkHorse B-439' },
    { name: 'Typ materiału', value: 'winyl, giętki' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, mocny' },
    { name: 'Grubość', value: '0,107 mm' },
    { name: 'Temperatura pracy', value: 'od −70 do 80 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka; ograniczony kontakt z rozpuszczalnikami' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolory', value: 'biały, żółty, pomarańczowy, czerwony, niebieski, zielony, czarny; taśma 9,53 mm: biały i żółty' },
    { name: 'Szerokość taśmy', value: '9,53 / 12,7 / 25,4 / 48,26 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '15,24 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Normy', value: 'RoHS 2011/65/EU (2015/863)' },
    { name: 'Zalecana taśma barwiąca', value: 'M61-R6010 (czarna) do taśmy białej i kolorowej, M61-R4410-WT (biała) do taśmy czarnej i kolorowej; do M710: M7-R6000 albo M7-R4400-WT' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M610 },
    { name: 'Numery artykułów Brady', value: TASMY_439.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: TASMY_439.map(([pn, , nadruk]) => ({
    partNumber: pn,
    name: `Brady WorkHorse ${pn} — winyl ${szerokoscZPn(pn)} × 15,24 m, ${kolorZPn(pn).toLowerCase()}`,
    attributes: { Szerokość: szerokoscZPn(pn), Kolor: kolorINadruk(pn, nadruk) },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Szerokość: 'Szerokość taśmy w kasecie M6C.\n\nTaśma ma 15,24 m. Najwęższa ma 9,53 mm, najszersza 48,26 mm.',
    Kolor: 'Kolor tła winylu WorkHorse i zalecany kolor nadruku.\n\nTaśma 9,53 mm jest tylko biała albo żółta. Taśma biała wymaga nadruku czarnego, a czarna białego. Na pozostałych kolorach można drukować oboma kolorami.',
  },
  faq: [
    { question: 'Jaki zakres temperatur wytrzymuje winyl WorkHorse B-439?', answer: 'Od −70 do 80 °C. Etykiety z tego winylu można stosować w zamrażarkach.' },
    { question: 'Czym drukować na czarnej taśmie B-439?', answer: 'Białą taśmą barwiącą M61-R4410-WT. Na taśmie białej i na żółtej 9,53 mm drukuje czarna M61-R6010. Na pozostałych taśmach kolorowych można użyć jednej z nich.' },
    { question: 'Do których drukarek pasują kasety M6C-439?', answer: 'Do [Brady M610](/produkt/brady-m610) i M611. W M710 kaseta działa z adapterem materiałów i taśmą M7-R6000 albo M7-R4400-WT.' },
  ],
  applications: ['Oznaczenia produktów i podzespołów', 'Tabliczki znamionowe', 'Kody kreskowe i oznaczenia inwentarzowe'],
}

// ---------------------------------------------------------------------------
// B-581 — taśma winylowa do przeklejania (cps-5143111)
// ---------------------------------------------------------------------------

const TASMY_581: [string, string][] = [
  ['M6C-500-581-WT', '177759'],
  ['M6C-500-581-YL', '177762'],
  ['M6C-1000-581-WT', '177760'],
  ['M6C-1000-581-YL', '177763'],
  ['M6C-2000-581-WT', '177761'],
  ['M6C-2000-581-YL', '177764'],
]

// Kasety M7C do M710 — ten sam materiał B-581; taśma barwiąca M7-R6000.
const TASMY_581_M7: [string, string][] = [
  ['M7C-500-581-WT', '173222'],
  ['M7C-500-581-YL', '173221'],
  ['M7C-1000-581-WT', '173289'],
  ['M7C-1000-581-YL', '173288'],
  ['M7C-2000-581-WT', '173258'],
  ['M7C-2000-581-YL', '173257'],
]

export const bradyM6Winyl581: Product = {
  ...wspolneM6,
  id: 'brady-m6c-500-581-wt',
  slug: 'brady-m6c-500-581-wt',
  name: 'Taśma winylowa do przeklejania Brady M6C-500-581-WT — kasety M6 i M7 do M610, M611 i M710',
  seoTitle: 'Brady M6C-500-581-WT — taśma winylowa do przeklejania do M610',
  seoDescription: 'Winyl Brady B-581 do M610 i M710 z klejem do przeklejania. Taśma 12,7–50,8 mm, biała lub żółta. PN: M6C-500-581-WT, M7C-1000-581-YL, M6C-2000-581-WT.',
  shortDescription: 'Brady M6C-500-581-WT i pozostałe kasety M6C oraz M7C z błyszczącym winylem B-581 na kleju do przeklejania. Po zdjęciu etykieta nie zostawia śladów kleju i można ją przenieść. Kasety M6 pasują do drukarek Brady M610 i M611, a kasety M7 do M710.',
  description: 'Brady B-581 to błyszcząca folia winylowa z klejem do przeklejania. Klej trzyma etykietę na miejscu, a po zdjęciu nie zostawia resztek. Oznaczenie można więc przenieść albo wymienić. Materiał jest przeznaczony głównie do oznaczeń wewnątrz budynków, np. w systemie 5S, na regałach i w magazynie. Najlepiej przylega do gładkich powierzchni.\n\nW kasecie M6C jest 15,24 m taśmy o grubości 0,125 mm. Do wyboru są trzy szerokości: 12,7, 25,4 i 50,8 mm. Każda z tych szerokości jest biała albo żółta. Długość pojedynczej etykiety ustala się przy projektowaniu w drukarce. Z taśmy powstają oznaczenia obiektów, magazynu, regałów i bezpieczeństwa.\n\nFolia winylowa działa poprawnie w przedziale od −40 do 82 °C. Minimalna temperatura naklejania wynosi 10 °C. Winyl jest odporny na ścieranie oraz działanie chemikaliów. Na zewnątrz średnia trwałość wynosi pięć lat. Do kaset M6C zaleca się taśmy barwiące M61-R10010 i M61-R6010, a do kaset M7C taśmę M7-R6000. Kasety M6C obsługują M610 i M611 oraz M710 z adapterem materiałów. Kasety M7C mają te same szerokości i kolory co M6C, lecz przeznaczone są do M710.',
  sameAs: 'https://www.brady.eu/labels/repositionable-multi-purpose-vinyl-label-tape-for-m610-m611-m710-printers-cps-5143111',
  images: [
    '/images/products/brady/m6c-500-581-wt.png',
    '/images/products/brady/m6c-1000-581-wt.png',
    '/images/products/brady/m6c-2000-581-yl.png',
  ],
  imageDescriptions: [
    'Rolka białej taśmy winylowej Brady M6C-500-581-WT o szerokości 12,7 mm na uchwycie kasety',
    'Rolka białej taśmy winylowej Brady M6C-1000-581-WT o szerokości 25,4 mm',
    'Rolka żółtej taśmy winylowej Brady M6C-2000-581-YL o szerokości 50,8 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-581' },
    { name: 'Typ materiału', value: 'folia winylowa' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'akrylowy, do przeklejania; schodzi bez resztek' },
    { name: 'Grubość', value: '0,125 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 82 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Warunki pracy', value: 'głównie wewnątrz budynków; na zewnątrz średnio 5 lat; powierzchnie gładkie' },
    { name: 'Odporność', value: 'ścieranie, chemikalia' },
    { name: 'Kolory', value: 'biały, żółty' },
    { name: 'Szerokość taśmy', value: '12,7 / 25,4 / 50,8 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '15,24 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Zalecana taśma barwiąca', value: 'kasety M6C: M61-R10010 albo M61-R6010 (w M710 z adapterem: M7-R10000); kasety M7C: M7-R6000' },
    { name: 'Zgodne drukarki', value: 'kasety M6C: M610, M611, BMP61; M710 i BMP71 z adapterem materiałów. Kasety M7C: M710, BMP71' },
    { name: 'Numery artykułów Brady', value: [...TASMY_581, ...TASMY_581_M7].map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: [
    ...TASMY_581.map(([pn]) => ({
      partNumber: pn,
      name: `Brady ${pn} — winyl do przeklejania ${szerokoscZPn(pn)} × 15,24 m, ${kolorZPn(pn).toLowerCase()}`,
      attributes: { Rozmiar: `ciągła ${szerokoscZPn(pn)} × 15,24 m`, Kolor: kolorZPn(pn), Drukarka: 'M610, M611' },
      availability: 'unavailable' as const,
    })),
    ...TASMY_581_M7.map(([pn]) => ({
      partNumber: pn,
      name: `Brady ${pn} — winyl do przeklejania ${szerokoscZPn(pn)} × 15,24 m, ${kolorZPn(pn).toLowerCase()}, kaseta do M710`,
      attributes: { Rozmiar: `ciągła ${szerokoscZPn(pn)} × 15,24 m`, Kolor: kolorZPn(pn), Drukarka: 'M710' },
      availability: 'unavailable' as const,
    })),
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy B-581 w kasecie.\n\nSą trzy szerokości: 12,7, 25,4 i 50,8 mm. W kasecie jest 15,24 m taśmy.',
    Kolor: 'Kolor folii winylowej.\n\nWszystkie trzy szerokości mają wersję białą i żółtą.',
    Drukarka: 'Drukarki, w których działa dany numer.\n\nM610, M611 — kasety M6. Pasują też do M710 po założeniu adaptera M71-ADAPT-BK z zestawu drukarki.\n\nM710 — kasety M7; nie pasują do M610 ani M611.',
  },
  faq: [
    { question: 'Czy etykietę B-581 można zdjąć bez śladów?', answer: 'Tak. Klej akrylowy do przeklejania trzyma etykietę na miejscu, a po zdjęciu nie zostawia resztek. Etykietę można nakleić w nowym miejscu.' },
    { question: 'Gdzie stosować taśmę B-581?', answer: 'Głównie wewnątrz budynków: w oznaczeniach 5S, w magazynie, na regałach i w oznaczeniach bezpieczeństwa. Taśma najlepiej trzyma się gładkich powierzchni.' },
    { question: 'Którą taśmą barwiącą drukować na B-581?', answer: 'W [Brady M610](/produkt/brady-m610) i M611 taśmą M61-R10010 albo M61-R6010. Do kaset M7C zaleca się taśmę M7-R6000, a do kaset M6C w M710 z adapterem taśmę M7-R10000.' },
    { question: 'Które kasety B-581 pasują do Brady M710?', answer: 'Kasety M7C są przeznaczone do [Brady M710](/produkt/brady-m710) i nie wymagają adaptera. Kasety M6C pasują do M710 po założeniu [adaptera M71-ADAPT-BK](/produkt/brady-m71-adapt-bk) z zestawu drukarki.' },
  ],
  applications: ['Oznaczenia 5S i lean', 'Oznaczenia magazynu i regałów', 'Oznaczenia bezpieczeństwa'],
}

// ---------------------------------------------------------------------------
// B-595 — okrągłe etykiety z datą przeglądu (cps-5193088)
// ---------------------------------------------------------------------------

const PRZEGLADY_595: [string, string, Nadruk][] = [
  ['M6-225-595-WT', '323203', 'czarny'],
  ['M6-225-595-GY', '323199', 'czarny'],
  ['M6-225-595-OR', '323201', 'czarny'],
  ['M6-225-595-OC', '323200', 'czarny'],
  ['M6-225-595-GN', '323198', 'biały'],
  ['M6-225-595-PL', '323202', 'biały'],
  ['M6-225-595-RD', '323204', 'biały'],
  ['M6-225-595-BR', '323196', 'biały'],
  ['M6-225-595-BL', '323197', 'biały'],
  ['M6-226-595-WT', '323212', 'czarny'],
  ['M6-226-595-GY', '323208', 'czarny'],
  ['M6-226-595-OR', '323210', 'czarny'],
  ['M6-226-595-OC', '323209', 'czarny'],
  ['M6-226-595-GN', '323207', 'biały'],
  ['M6-226-595-PL', '323211', 'biały'],
  ['M6-226-595-RD', '323213', 'biały'],
  ['M6-226-595-BR', '323205', 'biały'],
  ['M6-226-595-BL', '323206', 'biały'],
]

// Kasety M7 do M710 (rodzina Brady cps-5193089) — ten sam materiał B-595, te same średnice i kolory.
const PRZEGLADY_595_M7: [string, string, Nadruk][] = [
  ['M7-225-595-WT', '323221', 'czarny'],
  ['M7-225-595-GY', '323217', 'czarny'],
  ['M7-225-595-OR', '323219', 'czarny'],
  ['M7-225-595-OC', '323218', 'czarny'],
  ['M7-225-595-GN', '323216', 'biały'],
  ['M7-225-595-PL', '323220', 'biały'],
  ['M7-225-595-RD', '323222', 'biały'],
  ['M7-225-595-BR', '323214', 'biały'],
  ['M7-225-595-BL', '323215', 'biały'],
  ['M7-226-595-WT', '323230', 'czarny'],
  ['M7-226-595-GY', '323226', 'czarny'],
  ['M7-226-595-OR', '323228', 'czarny'],
  ['M7-226-595-OC', '323227', 'czarny'],
  ['M7-226-595-GN', '323225', 'biały'],
  ['M7-226-595-PL', '323229', 'biały'],
  ['M7-226-595-RD', '323231', 'biały'],
  ['M7-226-595-BR', '323223', 'biały'],
  ['M7-226-595-BL', '323224', 'biały'],
]
const srednicaPrzegladu = (pn: string) => (pn.includes('-225-') ? '25 mm' : '35 mm')

export const bradyM6PrzegladyData595: Product = {
  ...wspolneM6,
  id: 'brady-m6-225-595-wt',
  slug: 'brady-m6-225-595-wt',
  name: 'Okrągłe etykiety winylowe z datą przeglądu Brady M6-225-595-WT — kasety M6 i M7 do M610, M611 i M710',
  seoTitle: 'Brady M6-225-595-WT — etykiety z datą przeglądu do M610 i M710',
  seoDescription: 'Okrągłe etykiety Brady z winylu B-595 do M610 i M710 na daty przeglądów gaśnic: Ø 25 lub 35 mm, 250 szt. PN: M6-225-595-WT, M7-226-595-RD, M6-225-595-BL.',
  shortDescription: 'Brady M6-225-595-WT i pozostałe kasety M6 oraz M7 z okrągłymi etykietami z winylu B-595 do oznaczania daty przeglądu. Średnica 25 albo 35 mm, dziewięć kolorów, rolka po 250 sztuk. Kasety M6 pasują do drukarek Brady M610 i M611, a kasety M7 do M710.',
  description: 'Okrągłe etykiety Brady z datą przeglądu oznaczają termin kontroli maszyn i wyposażenia. Przykładem są gaśnice, które wymagają regularnych przeglądów. Datę i inne dane drukuje się na miejscu, w chwili kontroli. Etykiety są z winylu B-595 z błyszczącą powierzchnią. Klej akrylowy jest trwały i mocny, więc etykieta trzyma także na szorstkim podłożu.\n\nEtykiety mają średnicę 25 albo 35 mm. Rolka w kasecie M6 lub M7 zawiera 250 etykiet. Każda średnica jest w dziewięciu kolorach: białym, szarym, pomarańczowym, ochrowym, zielonym, fioletowym, czerwonym, brązowym i niebieskim. Gotowe szablony etykiet przeglądowych zawiera program Brady Workstation.\n\nEtykieta wytrzymuje temperaturę od −40 do 82 °C i warunki w zamrażarce. Przy naklejaniu temperatura może spaść do −18 °C. Etykiety są odporne na ścieranie, oleje, wodę i chemikalia. Można je stosować na zewnątrz. Materiał spełnia normę BS 5609:1986. W kasetach M6 na etykietach białych, szarych, pomarańczowych i ochrowych drukuje czarna taśma M61-R10010, a na pozostałych kolorach biała M61-R10010-WT. W kasetach M7 służą do tego odpowiednio taśmy M7-R10000 albo M7-R6000 oraz M7-R10000-WT albo M7-R4400-WT. Do M610 i M611 służą kasety M6. Drukarka M710 przyjmuje kasety M7, a kasety M6 tylko z adapterem materiałów.',
  sameAs: 'https://www.brady.eu/labels/all-weather-permanent-adhesive-vinyl-inspection-date-labels-for-m610-m611-m710-printers-cps-5193088',
  images: [
    '/images/products/brady/m6-225-595-wt.png',
    '/images/products/brady/m6-226-595-rd.png',
    '/images/products/brady/m6-226-595-gn.png',
    '/images/products/brady/m6-225-595-bl.png',
  ],
  imageDescriptions: [
    'Rolka białych okrągłych etykiet przeglądowych Brady M6-225-595-WT na uchwycie kasety',
    'Rolka czerwonych okrągłych etykiet przeglądowych Brady M6-226-595-RD o średnicy 35 mm',
    'Rolka zielonych okrągłych etykiet przeglądowych Brady M6-226-595-GN',
    'Rolka niebieskich okrągłych etykiet przeglądowych Brady M6-225-595-BL o średnicy 25 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z wykrawanymi etykietami okrągłymi, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-595' },
    { name: 'Typ materiału', value: 'winyl do pracy wewnątrz i na zewnątrz' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy, mocny' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 82 °C' },
    { name: 'Temperatura naklejania', value: 'od −18 °C' },
    { name: 'Warunki pracy', value: 'na zewnątrz, zamrażarka' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, olej, woda' },
    { name: 'Kolory', value: 'biały, szary, pomarańczowy, ochrowy, zielony, fioletowy, czerwony, brązowy, niebieski' },
    { name: 'Wymiary etykiety', value: 'średnica 25 albo 35 mm' },
    { name: 'Liczba sztuk na rolce', value: '250' },
    { name: 'Format', value: 'etykiety wykrawane, okrągłe' },
    { name: 'Normy', value: 'BS 5609:1986, sekcje 2 i 3' },
    { name: 'Zalecana taśma barwiąca', value: 'kasety M6: M61-R10010 (czarna) do etykiet białych, szarych, pomarańczowych i ochrowych, M61-R10010-WT (biała) do pozostałych; kasety M7: M7-R10000 albo M7-R6000 (czarne) i M7-R10000-WT albo M7-R4400-WT (białe) w tych samych grupach kolorów' },
    { name: 'Zgodne drukarki', value: 'kasety M6: M610, M611, BMP61; M710 i BMP71 z adapterem materiałów. Kasety M7: M710, BMP71' },
    { name: 'Numery artykułów Brady', value: [...PRZEGLADY_595, ...PRZEGLADY_595_M7].map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: [
    ...PRZEGLADY_595.map(([pn, , nadruk]) => ({
      partNumber: pn,
      name: `Brady ${pn} — 250 okrągłych etykiet Ø ${srednicaPrzegladu(pn)}, ${kolorMnogi(pn)}`,
      attributes: { Rozmiar: `Ø ${srednicaPrzegladu(pn)}, 250 szt.`, Kolor: kolorINadruk(pn, nadruk), Drukarka: 'M610, M611' },
      availability: 'unavailable' as const,
    })),
    ...PRZEGLADY_595_M7.map(([pn, , nadruk]) => ({
      partNumber: pn,
      name: `Brady ${pn} — 250 okrągłych etykiet Ø ${srednicaPrzegladu(pn)}, ${kolorMnogi(pn)}, kaseta do M710`,
      attributes: { Rozmiar: `Ø ${srednicaPrzegladu(pn)}, 250 szt.`, Kolor: kolorINadruk(pn, nadruk), Drukarka: 'M710' },
      availability: 'unavailable' as const,
    })),
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Średnica okrągłej etykiety przeglądowej.\n\nSą dwie średnice: 25 i 35 mm. Rolka zawsze ma 250 etykiet.',
    Kolor: 'Kolor tła etykiety przeglądowej i zalecany kolor nadruku.\n\nObie średnice mają te same dziewięć kolorów. Na tle białym, szarym, pomarańczowym i ochrowym nadruk jest czarny, a na pozostałych biały.',
    Drukarka: 'Drukarki, w których działa dany numer.\n\nM610, M611 — kasety M6. Pasują też do M710 po założeniu adaptera M71-ADAPT-BK z zestawu drukarki.\n\nM710 — kasety M7; nie pasują do M610 ani M611.',
  },
  faq: [
    { question: 'Do czego służą etykiety z datą przeglądu?', answer: 'Do oznaczania daty kontroli maszyn, urządzeń i wyposażenia, np. gaśnic. Datę drukuje się w chwili przeglądu, w dowolnym miejscu zakładu.' },
    { question: 'Jaką taśmą barwiącą drukować na etykietach przeglądowych?', answer: 'Na etykietach białych, szarych, pomarańczowych i ochrowych taśmą czarną M61-R10010. Na zielonych, fioletowych, czerwonych, brązowych i niebieskich taśmą białą M61-R10010-WT. Obie pasują do [Brady M610](/produkt/brady-m610) i M611.' },
    { question: 'Czy etykiety z datą przeglądu pasują do Brady M710?', answer: 'Kasety M7 są przeznaczone do [Brady M710](/produkt/brady-m710) i nie wymagają adaptera. Kasety M6 pasują do M710 po założeniu [adaptera M71-ADAPT-BK](/produkt/brady-m71-adapt-bk) z zestawu drukarki. W M710 stosuje się taśmy M7-R10000 i M7-R6000 oraz M7-R10000-WT i M7-R4400-WT.' },
  ],
  applications: ['Daty przeglądów gaśnic', 'Kontrola maszyn i urządzeń', 'Oznaczenia inwentarzowe'],
}

// ---------------------------------------------------------------------------
// B-595 — etykiety z nagłówkiem ANSI (cps-5143089). Nagłówki po hiszpańsku (według zdjęć produktu).
// ---------------------------------------------------------------------------

const ANSI_595: [string, string, string, string][] = [
  ['M6-38-595-PRE', '177766', 'PRECAUCION', 'żółty'],
  ['M6-38-595-ADV', '177767', 'ADVERTENCIA', 'pomarańczowy'],
  ['M6-38-595-PEL', '177769', 'PELIGRO', 'czerwony'],
  ['M6-38-595-AVISO', '177768', 'AVISO', 'niebieski'],
]

// ---------------------------------------------------------------------------
// CleanLift B-498 — tkanina winylowa do przeklejania, kasety M6 i M6C (cps-4554334)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar, sztuk na rolce (puste = taśma ciągła), przekrój AWG]
const CLEANLIFT_498: [string, string, string, string, string][] = [
  ['M6-19-498', '174224', '25,4 × 25,4 mm', '250', '12–10 AWG'],
  ['M6-10-498', '174176', '6,35 × 19,05 mm', '750', '16–10 AWG'],
  ['M6-7-498', '174348', '12,7 × 12,7 mm', '500', '22–16 AWG'],
  ['M6-11-498', '174183', '19,05 × 12,7 mm', '500', '16–10 AWG'],
  ['M6-18-498', '174217', '19,05 × 25,4 mm', '250', '10–4 AWG'],
  ['M6-30-498', '174272', '19,05 × 38,1 mm', '250', '10–4 AWG'],
  ['M6-15-498', '174195', '25,4 × 6,99 mm', '750', '22–16 AWG'],
  ['M6-16-498', '173720', '25,4 × 9,53 mm', '500', '12–10 AWG'],
  ['M6-17-498', '174214', '25,4 × 12,7 mm', '500', '12–10 AWG'],
  ['M6-103-498', '174075', '25,4 × 31,75 mm', '250', ''],
  ['M6-21-498', '174237', '25,4 × 63,5 mm', '100', ''],
  ['M6-23-498', '173768', '25,4 × 101,6 mm', '100', ''],
  ['M6-28-498', '173789', '38,1 × 6,35 mm', '750', '10–4 AWG'],
  ['M6-29-498', '174264', '38,1 × 12,7 mm', '500', '10–4 AWG'],
  ['M6-31-498', '174279', '38,1 × 25,4 mm', '250', '10–4 AWG'],
  ['M6-32-498', '173843', '38,1 × 38,1 mm', '250', '10–4 AWG'],
  ['M6-33-498', '173851', '38,1 × 101,6 mm', '100', '1 AWG – 500 MCM'],
  ['M6-34-498', '173860', '38,1 × 152,4 mm', '50', ''],
  ['M6C-240-498', '174143', '6,1 mm × 9,14 m', '', ''],
  ['M6C-318-498', '174146', '8,08 mm × 9,14 m', '', ''],
  ['M6C-375-498', '174150', '9,53 mm × 9,14 m', '', ''],
  ['M6C-500-498', '173913', '12,7 mm × 9,14 m', '', ''],
]

// Kasety M7 i M7C do M710 — ten sam materiał B-498; taśma barwiąca M7-R6200.
const CLEANLIFT_498_M7: [string, string, string, string, string][] = [
  ['M7-19-498', '173396', '25,4 × 25,4 mm', '250', '12–10 AWG'],
  ['M7-10-498', '173431', '6,35 × 19,05 mm', '750', '16–10 AWG'],
  ['M7-7-498', '173312', '12,7 × 12,7 mm', '500', '22–16 AWG'],
  ['M7-11-498', '173428', '12,7 × 19,05 mm', '500', '16–10 AWG'],
  ['M7-18-498', '173402', '19,05 × 25,4 mm', '250', '10–4 AWG'],
  ['M7-30-498', '173348', '38,1 × 19,05 mm', '250', '10–4 AWG'],
  ['M7-16-498', '174554', '25,4 × 9,53 mm', '500', '12–10 AWG'],
  ['M7-17-498', '173405', '25,4 × 12,7 mm', '500', '12–10 AWG'],
  ['M7-21-498', '173376', '25,4 × 63,5 mm', '100', ''],
  ['M7-33-498', '174607', '38,1 × 101,6 mm', '100', ''],
  ['M7-29-498', '173356', '38,1 × 12,7 mm', '500', '10–4 AWG'],
  ['M7-31-498', '173341', '38,1 × 25,4 mm', '250', '10–4 AWG'],
  ['M7-32-498', '174606', '38,1 × 38,1 mm', '250', '10–4 AWG'],
  ['M7C-240-498', '173239', '6,1 mm × 9,14 m', '', ''],
  ['M7C-318-498', '173235', '8,08 mm × 9,14 m', '', ''],
  ['M7C-375-498', '173232', '9,53 mm × 9,14 m', '', ''],
  ['M7C-500-498', '173225', '12,7 mm × 9,14 m', '', ''],
  ['M7C-1000-498', '173293', '25,4 mm × 9,14 m', '', ''],
  ['M7C-1900-498', '173264', '48,26 mm × 9,14 m', '', ''],
]

export const bradyM6CleanLift498: Product = {
  ...wspolneM6,
  id: 'brady-m6-19-498',
  slug: 'brady-m6-19-498',
  name: 'Etykiety z tkaniny winylowej do przeklejania Brady CleanLift M6-19-498 — kasety M6 i M7 do M610, M611 i M710',
  seoTitle: 'Brady CleanLift M6-19-498 — etykiety do przeklejania do M710',
  seoDescription: 'Tkanina winylowa Brady CleanLift B-498 do M610 i M710: etykiety i taśmy ciągłe do przeklejania. PN: M6-19-498, M7-11-498, M6-7-498, M7C-500-498.',
  shortDescription: 'Brady CleanLift M6-19-498 i pozostałe kasety M6, M6C, M7 i M7C z tkaniną winylową B-498 na kleju do przeklejania. Etykiety wykrawane od 6,35 × 19,05 do 38,1 × 152,4 mm oraz taśma ciągła. Kasety M6 pasują do drukarek Brady M610 i M611, a kasety M7 do M710.',
  description: 'CleanLift B-498 to tkanina winylowa z kauczukowym klejem do przeklejania. Po naklejeniu etykieta trzyma mocno, ale daje się zdjąć czysto i przenieść. Podłoże z tkaniny jest elastyczne, więc etykieta dobrze owija przewody. Specjalna warstwa wierzchnia daje wyraźny nadruk, a wykończenie jest półbłyszczące. Etykiety oznaczają przewody, płytki drukowane, urządzenia i środki trwałe.\n\nW części M6 jest 18 kaset z gotowymi etykietami oraz cztery z taśmą ciągłą. Dla M710 przygotowano 13 kaset M7 z etykietami oraz 6 kaset M7C z taśmą. Wymiary etykiet podaje tabela wersji. Na rolce jest od 50 do 750 sztuk. Taśma ciągła ma 9,14 m długości. W kasetach M6C jej szerokość sięga 12,7 mm, a w kasetach M7C aż 48,26 mm. Etykiety owijane obejmują przewody od 22 AWG do 500 MCM. Etykieta M6 38,1 × 101,6 mm pasuje na przewody od 10,8 do 24,31 mm.\n\nGrubość tkaniny to 0,185 mm. Materiał ma uznanie UL. Etykiety można stosować od −40 do 80 °C oraz w zamrażarce. Etykiety nakleja się przy temperaturze nie niższej niż 10 °C. Tkanina znosi tarcie, działanie chemikaliów, korozję, wilgotność, promienie UV i pogodę. Nadruk w M610 i M611 powstaje z taśmy barwiącej M61-R6210. Do M710 kasety M6 wymagają adaptera materiałów, natomiast kasety M7 go nie potrzebują. Dla kaset M7 przewidziano taśmę M7-R6200.',
  sameAs: 'https://www.brady.eu/labels/repositionable-multi-purpose-vinyl-cloth-labels-for-m710-m610-m611-printers-cps-4554334',
  images: [
    '/images/products/brady/m6-19-498.png',
    '/images/products/brady/m6-7-498.png',
    '/images/products/brady/m6-34-498.png',
    '/images/products/brady/m6c-318-498.png',
  ],
  imageDescriptions: [
    'Rolka etykiet CleanLift Brady M6-19-498 25,4 × 25,4 mm na uchwycie kasety',
    'Rolka małych etykiet CleanLift Brady M6-7-498 12,7 × 12,7 mm',
    'Rolka długich etykiet CleanLift Brady M6-34-498 38,1 × 152,4 mm',
    'Rolka taśmy ciągłej CleanLift Brady M6C-318-498 z tkaniny winylowej',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z wykrawanymi etykietami albo taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'CleanLift B-498' },
    { name: 'Typ materiału', value: 'tkanina winylowa' },
    { name: 'Wykończenie', value: 'półbłyszczące' },
    { name: 'Klej', value: 'kauczukowy, do przeklejania; schodzi czysto' },
    { name: 'Grubość', value: '0,185 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 80 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka; powierzchnie gładkie i szorstkie' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: 'od 6,35 × 19,05 do 38,1 × 152,4 mm (18 rozmiarów M6; kasety M7 także 12,7 × 19,05 mm); taśma ciągła 6,1 / 8,08 / 9,53 / 12,7 mm × 9,14 m; kasety M7C także 25,4 i 48,26 mm' },
    { name: 'Liczba sztuk na rolce', value: 'od 50 do 750, zależnie od rozmiaru' },
    { name: 'Zakres średnic przewodu', value: 'od 22 AWG do 500 MCM, zależnie od rozmiaru; np. 3,05–7,14 mm (M6-16-498), 3,81–11,18 mm (M6-28-498, M6-32-498), 10,8–24,31 mm (M6-33-498)' },
    { name: 'Pole nadruku', value: '38,1 × 25,4 mm (M6-33-498)' },
    { name: 'Format', value: 'etykiety wykrawane (M6, M7) albo taśma ciągła (M6C, M7C)' },
    { name: 'Normy', value: 'uznanie UL' },
    { name: 'Zalecana taśma barwiąca', value: 'M61-R6210; do M710 (kasety M6 z adapterem i kasety M7): M7-R6200' },
    { name: 'Zgodne drukarki', value: 'kasety M6 i M6C: M610, M611, BMP61; M710 i BMP71 z adapterem materiałów. Kasety M7 i M7C: M710, BMP71' },
    { name: 'Numery artykułów Brady', value: [...CLEANLIFT_498, ...CLEANLIFT_498_M7].map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: [
    ...CLEANLIFT_498.map(([pn, , rozmiar, sztuk, awg]) => ({
      partNumber: pn,
      name: sztuk
        ? `Brady CleanLift ${pn} — ${sztuk} etykiet ${rozmiar}, białe`
        : `Brady CleanLift ${pn} — taśma ciągła ${rozmiar}, biała`,
      attributes: {
        Rozmiar: sztuk ? `${rozmiar}, ${sztuk} szt.` : `ciągła ${rozmiar}`,
        ...(awg ? { 'Przewód (AWG)': awg } : {}),
        Drukarka: 'M610, M611',
      },
      availability: 'unavailable' as const,
    })),
    ...CLEANLIFT_498_M7.map(([pn, , rozmiar, sztuk, awg]) => ({
      partNumber: pn,
      name: sztuk
        ? `Brady CleanLift ${pn} — ${sztuk} etykiet ${rozmiar}, białe, kaseta do M710`
        : `Brady CleanLift ${pn} — taśma ciągła ${rozmiar}, biała, kaseta do M710`,
      attributes: {
        Rozmiar: sztuk ? `${rozmiar}, ${sztuk} szt.` : `ciągła ${rozmiar}`,
        ...(awg ? { 'Przewód (AWG)': awg } : {}),
        Drukarka: 'M710',
      },
      availability: 'unavailable' as const,
    })),
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety i liczba etykiet na rolce albo wymiary taśmy ciągłej.\n\nEtykiety wykrawane mają od 6,35 × 19,05 do 38,1 × 152,4 mm, od 50 do 750 sztuk. Taśma ciągła ma 9,14 m.',
    'Przewód (AWG)': 'Przekrój przewodu w skali AWG, na który owija się etykietę. Mniejsza liczba AWG oznacza grubszy przewód.\n\nEtykiety 12,7 × 12,7 mm pasują na przewody 22–16 AWG. Etykieta 38,1 × 101,6 mm obejmuje przewody od 1 AWG do 500 MCM, czyli od 10,8 do 24,31 mm.',
    Drukarka: 'Drukarki, w których działa dany numer.\n\nM610, M611 — kasety M6 i materiały BM. Pasują też do M710 po założeniu adaptera M71-ADAPT-BK z zestawu drukarki.\n\nM710 — kasety M7 i materiały BM7; nie pasują do M610 ani M611.',
  },
  faq: [
    { question: 'Jak dobrać etykietę CleanLift do przewodu?', answer: 'Na podstawie przekroju przewodu w AWG z tabeli wariantów. Najmniejsze etykiety, 12,7 × 12,7 mm i 25,4 × 6,99 mm, są na przewody 22–16 AWG. Etykieta 38,1 × 101,6 mm obejmuje przewody od 1 AWG do 500 MCM, czyli od 10,8 do 24,31 mm.' },
    { question: 'Czym różnią się kasety M6 i M6C z materiałem B-498?', answer: 'Kasety M6 mają gotowe etykiety wykrawane o stałym rozmiarze. Kasety M6C mają 9,14 m taśmy ciągłej, a o długości etykiety decyduje projekt w drukarce [Brady M610](/produkt/brady-m610).' },
    { question: 'Którą taśmą barwiącą drukować na CleanLift B-498?', answer: 'Taśmą M61-R6210 w M610 i M611. W M710 zalecana jest taśma M7-R6200, zarówno do kaset M7, jak i do kaset M6 po założeniu adaptera.' },
    { question: 'Które kasety CleanLift B-498 pasują do Brady M710?', answer: 'Kasety M7 i M7C działają w [Brady M710](/produkt/brady-m710) bez adaptera. Kasety M6 i M6C pasują do M710 po założeniu [adaptera M71-ADAPT-BK](/produkt/brady-m71-adapt-bk) z zestawu drukarki. Taśm M61 nie stosuje się w M710.' },
  ],
  applications: ['Oznaczanie przewodów i kabli', 'Płytki drukowane i podzespoły', 'Środki trwałe i kody kreskowe'],
}

// ---------------------------------------------------------------------------
// CleanLift B-498 — materiał BM luzem na dużej rolce (cps-4554335)
// ---------------------------------------------------------------------------

const CLEANLIFT_498_BM: [string, string, string, string, string][] = [
  ['BM-11-498', '174416', '19,05 × 12,7 mm', '5000', '16–10 AWG'],
  ['BM-29-498', '174470', '12,7 × 38,1 mm', '5000', '10–4 AWG'],
  ['BM-18-498', '174434', '19,05 × 25,4 mm', '2500', '12–10 AWG'],
  ['BM-19-498', '174454', '25,4 × 25,4 mm', '2500', '12–10 AWG'],
]

// [PN, nr art., szerokość taśmy] — taśmy ciągłe na rolce 83,82 m, tylko do M710 i BMP71.
const CLEANLIFT_498_BM7: [string, string, string][] = [
  ['BM7C-240-498', '173475', '6,1 mm'],
  ['BMC-375-498', '173476', '9,53 mm'],
]

export const bradyBmCleanLift498: Product = {
  ...wspolneM6,
  id: 'brady-bm-11-498',
  slug: 'brady-bm-11-498',
  name: 'Etykiety z tkaniny winylowej do przeklejania Brady CleanLift BM-11-498 — materiał BM i BM7 do M610, M611 i M710',
  seoTitle: 'Brady CleanLift BM-11-498 — etykiety luzem do M610 i M710',
  seoDescription: 'Etykiety Brady CleanLift B-498 luzem do M610 i M710: rolki po 2500 lub 5000 szt., tkanina winylowa do przeklejania. PN: BM-11-498, BM-18-498, BM7C-240-498.',
  shortDescription: 'Brady CleanLift BM-11-498 i pozostałe materiały BM oraz BM7 z tkaniny winylowej B-498 na dużych rolkach. Od 2500 do 5000 białych etykiet na przewody i dwie taśmy ciągłe, z klejem do przeklejania. Etykiety wykrawane BM pasują do drukarek Brady M610, M611 i M710, a taśmy ciągłe BM7 do M710.',
  description: 'Materiał Brady BM-498 to etykiety CleanLift z tkaniny winylowej B-498 na dużych rolkach. Rolka luzem mieści 2500 albo 5000 etykiet. Taki zapas przydaje się przy oznaczaniu dużej liczby przewodów w jednym projekcie. Etykietę można zdjąć i przykleić drugi raz, a klej kauczukowy schodzi czysto.\n\nSą cztery rozmiary etykiet wykrawanych. Rozmiary 19,05 × 12,7 mm i 12,7 × 38,1 mm są po 5000 sztuk. Rozmiary 19,05 × 25,4 mm i 25,4 × 25,4 mm są po 2500 sztuk. Wszystkie etykiety są białe. Owija się je wokół przewodów o przekroju od 16 do 4 AWG. Wersje BM7C-240-498 i BMC-375-498 to taśma ciągła o szerokości 6,1 i 9,53 mm na rolce 83,82 m.\n\nPowierzchnia tkaniny jest półbłyszcząca. Materiał ma uznanie UL i grubość 0,185 mm. Etykiety działają w temperaturach od −40 do 80 °C. Minimalna temperatura przy naklejaniu to 10 °C. Materiał wytrzymuje ścieranie, chemikalia, wilgoć i promieniowanie UV. Nadruk wykonuje taśma barwiąca: M61-R6210 przy M610 i M611 oraz M7-R6200 przy M710. Etykiety wykrawane działają w M610, M611 i M710 oraz w starszych BMP61 i BMP71. Taśmy ciągłe pracują tylko w M710 i BMP71.',
  sameAs: 'https://www.brady.eu/labels/repositionable-multi-purpose-vinyl-cloth-labels-bulk-for-m710-m610-m611-printers-cps-4554335',
  images: ['/images/products/brady/bm-11-498.png', '/images/products/brady/bm-29-498.png'],
  imageDescriptions: [
    'Pudełko z dużą rolką etykiet CleanLift Brady BM-11-498 i wysuniętym paskiem etykiet',
    'Pudełko z dużą rolką etykiet CleanLift Brady BM-29-498 12,7 × 38,1 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Materiał luzem na dużej rolce z wykrawanymi etykietami albo taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'CleanLift B-498' },
    { name: 'Typ materiału', value: 'tkanina winylowa' },
    { name: 'Wykończenie', value: 'półbłyszczące' },
    { name: 'Klej', value: 'kauczukowy, do przeklejania' },
    { name: 'Grubość', value: '0,185 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 80 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka; powierzchnie gładkie i szorstkie' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, korozja, wilgoć, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '19,05 × 12,7 / 12,7 × 38,1 / 19,05 × 25,4 / 25,4 × 25,4 mm; taśma ciągła 6,1 / 9,53 mm × 83,82 m; zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '2500 albo 5000, zależnie od rozmiaru' },
    { name: 'Zakres średnic przewodu', value: 'od 16 do 4 AWG, zależnie od rozmiaru' },
    { name: 'Format', value: 'etykiety wykrawane luzem na dużej rolce (BM) albo taśma ciągła na dużej rolce (BM7C, BMC)' },
    { name: 'Normy', value: 'uznanie UL' },
    { name: 'Zalecana taśma barwiąca', value: 'M61-R6210; do M710: M7-R6200' },
    { name: 'Zgodne drukarki', value: 'etykiety wykrawane BM: M610, M611, M710; starsze BMP61 i BMP71. Taśmy ciągłe BM7C i BMC: M710, BMP71' },
    { name: 'Numery artykułów Brady', value: [...CLEANLIFT_498_BM, ...CLEANLIFT_498_BM7].map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: [
    ...CLEANLIFT_498_BM.map(([pn, , rozmiar, sztuk, awg]) => ({
      partNumber: pn,
      name: `Brady CleanLift ${pn} — ${sztuk} etykiet ${rozmiar} luzem, białe`,
      attributes: { Rozmiar: `${rozmiar}, ${sztuk} szt.`, 'Przewód (AWG)': awg, Drukarka: 'M610, M611, M710' },
      availability: 'unavailable' as const,
    })),
    ...CLEANLIFT_498_BM7.map(([pn, , szerokosc]) => ({
      partNumber: pn,
      name: `Brady CleanLift ${pn} — taśma ciągła ${szerokosc} × 83,82 m na dużej rolce, biała, materiał BM7 do M710`,
      attributes: { Rozmiar: `ciągła ${szerokosc} × 83,82 m`, Drukarka: 'M710' },
      availability: 'unavailable' as const,
    })),
  ],
  variantAttributeTooltips: {
    Rozmiar: 'Format etykiety wykrawanej i ilość sztuk na dużej rolce albo wymiary taśmy ciągłej.\n\nMniejsze etykiety są po 5000 sztuk, a 19,05 × 25,4 mm i 25,4 × 25,4 mm po 2500 sztuk. Taśmy ciągłe mają 83,82 m.',
    'Przewód (AWG)': 'Przekrój przewodu w skali AWG, który obejmuje owinięta etykieta.\n\nEtykiety 19,05 × 12,7 mm pasują na przewody 16–10 AWG, a 12,7 × 38,1 mm na grubsze, 10–4 AWG.',
    Drukarka: 'Drukarki, w których działa dany numer.\n\nM610, M611, M710 — etykiety wykrawane na dużych rolkach.\n\nM710 — taśmy ciągłe z materiałem BM7; nie pasują do M610 ani M611.',
  },
  faq: [
    { question: 'Czym materiał BM różni się od kasety M6?', answer: 'Materiał BM to ta sama tkanina CleanLift B-498 na dużej rolce. Rolka ma 2500 albo 5000 etykiet, a kasety M6 z tym materiałem mają od 50 do 750 etykiet. Oba rodzaje pracują w [Brady M610](/produkt/brady-m610) i M611.' },
    { question: 'Czy materiał BM-498 pasuje do Brady M710?', answer: 'Etykiety wykrawane BM-11-498, BM-18-498, BM-19-498 i BM-29-498 działają w [Brady M710](/produkt/brady-m710) oraz w M610 i M611. Taśmy ciągłe BM7C-240-498 i BMC-375-498 są tylko do M710 i BMP71. Do M710 służy taśma barwiąca M7-R6200, a taśmy M61 nie pasują.' },
    { question: 'Do jakich przewodów pasują etykiety BM-498?', answer: 'BM-11-498 do przewodów 16–10 AWG, BM-18-498 i BM-19-498 do 12–10 AWG, a BM-29-498 do 10–4 AWG.' },
  ],
  applications: ['Oznaczanie dużych serii przewodów', 'Kody kreskowe', 'Płytki drukowane i podzespoły'],
}

// ---------------------------------------------------------------------------
// B-584 — taśma odblaskowa do pracy na zewnątrz (cps-4554346). M6C-1000-584-YL bez danych — pominięta.
// ---------------------------------------------------------------------------

// [PN, nr art., taśma barwiąca do M710 zalecana]
const ODBLASKOWE_584: [string, string, boolean][] = [
  ['M6C-2000-584-YL', '174130', true],
  ['M6C-2000-584-OR', '174128', true],
  ['M6C-2000-584-SL', '174129', true],
  ['M6C-2000-584', '176822', false],
  ['M6C-1500-584-YL', '176820', false],
  ['M6C-1500-584-OR', '176819', false],
  ['M6C-1500-584', '176821', false],
  ['M6C-1000-584-OR', '174117', true],
  ['M6C-1000-584', '176818', false],
  ['M6C-750-584-YL', '176816', false],
  ['M6C-750-584-OR', '176815', false],
  ['M6C-750-584', '176817', false],
]

export const bradyM6Odblaskowa584: Product = {
  ...wspolneM6,
  id: 'brady-m6c-2000-584-yl',
  slug: 'brady-m6c-2000-584-yl',
  name: 'Taśma odblaskowa Brady M6C-2000-584-YL — kasety M6 do M610 i M611',
  seoTitle: 'Brady M6C-2000-584-YL — taśma odblaskowa do M610',
  seoDescription: 'Taśma odblaskowa Brady B-584 do M610: 19,05–50,8 mm × 9,14 m, 4 kolory, średnio 4–6 lat na zewnątrz. PN: M6C-2000-584-YL, M6C-1500-584-OR, M6C-750-584.',
  shortDescription: 'Brady M6C-2000-584-YL i pozostałe kasety M6C z odblaskową taśmą B-584 i trwałym klejem akrylowym. Szerokość od 19,05 do 50,8 mm, cztery kolory, praca na zewnątrz. Do drukarek Brady M610 i M611.',
  description: 'Taśma Brady B-584 odbija światło w kierunku jego źródła, np. reflektora albo latarki. Oznaczenie jest więc dobrze widoczne, gdy pada na nie światło. Taśma służy do oznaczania narzędzi na budowie, kasków, szaf zewnętrznych, słupów, urządzeń na dachach oraz regałów. Ma błyszczącą powierzchnię i trwały klej akrylowy. Najlepiej trzyma się gładkich powierzchni.\n\nKaseta M6C zawiera 9,14 m taśmy ciągłej o grubości 0,14 mm. Szerokość wynosi 19,05, 25,4, 38,1 albo 50,8 mm. Kolory to biały, żółty, pomarańczowy i srebrny. Taśma srebrna ma tylko szerokość 50,8 mm. W szerokości 25,4 mm są kolory biały i pomarańczowy.\n\nFolia odblaskowa i klej spełniają wymagania odblaskowości Federal Specification L-S-300. Przeciętna trwałość na zewnątrz to 4–6 lat. Taśma wytrzymuje temperatury od −40 do 70 °C. Naklejać ją można, gdy temperatura wynosi co najmniej 10 °C. Taśma ma odporność na ścieranie oraz chemikalia. Zalecana taśma barwiąca to czarna M61-R10010. Taśmę drukują M610 i M611. Po założeniu adaptera materiałów drukuje ją też M710.',
  sameAs: 'https://www.brady.eu/labels/retro-reflective-all-weather-label-tape-for-m710-m610-m611-printers-cps-4554346',
  images: [
    '/images/products/brady/m6c-2000-584-yl.png',
    '/images/products/brady/m6c-2000-584-or.png',
    '/images/products/brady/m6c-2000-584-sl.png',
    '/images/products/brady/m6c-2000-584.png',
  ],
  imageDescriptions: [
    'Rolka żółtej taśmy odblaskowej Brady M6C-2000-584-YL o szerokości 50,8 mm',
    'Rolka pomarańczowej taśmy odblaskowej Brady M6C-2000-584-OR z wysuniętym odcinkiem',
    'Rolka srebrnej taśmy odblaskowej Brady M6C-2000-584-SL',
    'Rolka białej taśmy odblaskowej Brady M6C-2000-584 na uchwycie kasety',
  ],
  specifications: [
    { name: 'Typ', value: 'Kaseta z taśmą ciągłą, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-584' },
    { name: 'Typ materiału', value: 'taśma odblaskowa (retrorefleksyjna)' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Grubość', value: '0,14 mm' },
    { name: 'Temperatura pracy', value: 'od −40 do 70 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Warunki pracy', value: 'na zewnątrz (średnio 4–6 lat); powierzchnie gładkie' },
    { name: 'Odporność', value: 'ścieranie, chemikalia' },
    { name: 'Kolory', value: 'biały, żółty, pomarańczowy; srebrny (tylko 50,8 mm)' },
    { name: 'Szerokość taśmy', value: '19,05 / 25,4 / 38,1 / 50,8 mm, zależnie od wersji' },
    { name: 'Długość taśmy', value: '9,14 m' },
    { name: 'Format', value: 'taśma ciągła' },
    { name: 'Normy', value: 'Federal Specification L-S-300 (odblaskowość)' },
    { name: 'Zalecana taśma barwiąca', value: 'M61-R10010; do M710: M7-R10000 (kasety M6C-2000-584-YL, M6C-2000-584-OR, M6C-2000-584-SL i M6C-1000-584-OR)' },
    { name: 'Zgodne drukarki', value: DRUKARKI_M610 },
    { name: 'Numery artykułów Brady', value: ODBLASKOWE_584.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: ODBLASKOWE_584.map(([pn]) => ({
    partNumber: pn,
    name: `Brady ${pn} — taśma odblaskowa ${szerokoscZPn(pn)} × 9,14 m, ${kolorZenski(pn)}`,
    attributes: { Rozmiar: `ciągła ${szerokoscZPn(pn)} × 9,14 m`, Kolor: kolorZPn(pn) },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Szerokość i długość taśmy odblaskowej w kasecie.\n\nKażda kaseta ma 9,14 m taśmy. Szerokość wynosi od 19,05 do 50,8 mm.',
    Kolor: 'Kolor taśmy odblaskowej B-584.\n\nBiały, żółty i pomarańczowy są w kilku szerokościach. Srebrny jest tylko w szerokości 50,8 mm.',
  },
  faq: [
    { question: 'Gdzie stosuje się taśmę odblaskową B-584?', answer: 'Tam, gdzie oznaczenie musi być widoczne w świetle reflektora lub latarki: na narzędziach, kaskach, szafach zewnętrznych, słupach, urządzeniach na dachach i regałach.' },
    { question: 'Jak długo taśma B-584 wytrzymuje na zewnątrz?', answer: 'Przeciętnie 4–6 lat. Zakres temperatur pracy taśmy wynosi od −40 do 70 °C.' },
    { question: 'Czy taśmę odblaskową można drukować w M710?', answer: 'Tak, z adapterem materiałów. Taśmę barwiącą M7-R10000 zaleca się do kaset M6C-2000-584-YL, M6C-2000-584-OR, M6C-2000-584-SL i M6C-1000-584-OR. Kasety są przeznaczone przede wszystkim do [Brady M610](/produkt/brady-m610) i M611.' },
  ],
  applications: ['Narzędzia i kaski na budowie', 'Szafy, słupy i urządzenia na zewnątrz', 'Regały i oznaczenia obiektów'],
}

export const bradyM6Winyl: Product[] = [
  bradyM6Winyl595,
  bradyM6WorkHorse439,
  bradyM6Winyl581,
  bradyM6PrzegladyData595,
  bradyM6CleanLift498,
  bradyBmCleanLift498,
  bradyM6Odblaskowa584,
]

export const bradyM6WinylSekcje: Record<string, 'kable' | 'ogolne' | 'lab' | 'tasmy'> = {
  'brady-m6c-2000-595-wt': 'ogolne',
  'brady-m6c-1000-439': 'ogolne',
  'brady-m6c-500-581-wt': 'ogolne',
  'brady-m6-225-595-wt': 'ogolne',
  'brady-m6-19-498': 'ogolne',
  'brady-bm-11-498': 'ogolne',
  'brady-m6c-2000-584-yl': 'ogolne',
}
