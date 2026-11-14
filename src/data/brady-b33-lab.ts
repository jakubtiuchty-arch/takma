import type { Product } from './products'
import { wspolneB33 } from './brady-b33-wspolne'

// Etykiety laboratoryjne i kriogeniczne Brady B33 do przemysłowej drukarki i3300 (także BBP33): polipropylen, FreezerBondz,
// StainerBondz, nylon i poliester odporny na chemikalia, etykiety ze wskaźnikiem sterylizacji i pasek na probówki PCR.
// Gdy warunki pracy w danych Brady przeczą zakresowi temperatur (ciekły azot przy −80 °C), karta podaje tylko zakres temperatur
// i pozostałe warunki — tak jak karty M6. 14.11.2026.

// ---------------------------------------------------------------------------
// Pasek etykiet na probówki PCR B-492 (pid-b33-289-492-wt), jeden PN
// ---------------------------------------------------------------------------

export const bradyB33Pcr492: Product = {
  ...wspolneB33,
  tags: ['healthcare'],
  id: 'brady-b33-289-492-wt',
  slug: 'brady-b33-289-492-wt',
  name: 'Etykiety na probówki PCR Brady FreezerBondz B33-289-492-WT do drukarki i3300',
  seoTitle: 'Brady B33-289-492-WT — etykiety na probówki PCR do i3300',
  seoDescription: 'Pasek ośmiu perforowanych etykiet Brady FreezerBondz B-492 na probówki PCR, do Brady i3300: 9,50 × 6,35 mm, 1500 szt. PN: B33-289-492-WT, nr art. 307018.',
  shortDescription: 'Brady B33-289-492-WT to pasek z ośmioma perforowanymi etykietami 9,50 × 6,35 mm na probówki PCR ustawione w stojaku. Do drukarki Brady i3300.',
  description: 'Pasek B-492 składa się z ośmiu małych etykiet rozdzielonych perforacją. Nakleja się go jednym ruchem na osiem probówek PCR stojących w stojaku, a potem rozrywa na pojedyncze etykiety. Rozerwanie wzdłuż perforacji nie wymaga narzędzi. Materiałem jest biały, błyszczący poliester FreezerBondz z trwałym, agresywnym klejem akrylowym do gładkich powierzchni. Etykiety oznaczają probówki PCR i Eppendorf, probówki wirówkowe oraz fiolki.\n\nJedna etykieta ma 9,50 × 6,35 mm, a rząd liczy osiem sztuk. Odstęp w poziomie wynosi 9,50 mm, a w pionie 12,40 mm. Szerokość materiału to 81 mm. Pasek jest przeznaczony do probówek 0,5 ml. W pudełku jest 1500 etykiet, a nadruk powstaje termotransferem.\n\nGrubość folii wynosi 0,081 mm. Folia znosi zamrażarkę i gorącą kąpiel (100 °C), a nadruk jest odporny na chemikalia i rozmazanie. Etykieta nie może się nakładać na siebie, dlatego nie zaleca się jej do ciekłego azotu. Pasek pasuje do drukarek i3300, BBP33, i4311 i i5300, a taśmę barwiącą B30-R6400 trzeba zamówić osobno.',
  sameAs: 'https://www.brady.eu/labels/pcr-tube-label-for-bbp33-i3300-printers-pid-b33-289-492-wt',
  images: ['/images/products/brady/b33-289-492-wt.png'],
  imageDescriptions: ['Rolka Brady B33-289-492-WT z wysuniętym białym paskiem etykiet, w którym osiem małych etykiet leży w rzędzie rozdzielonych perforacją'],
  specifications: [
    { name: 'Part Number', value: 'B33-289-492-WT' },
    { name: 'Numer artykułu Brady', value: '307018' },
    { name: 'Typ', value: 'Pasek ośmiu perforowanych etykiet, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'FreezerBondz B-492' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, agresywny, akrylowy; do powierzchni gładkich' },
    { name: 'Grubość', value: '0,081 mm' },
    { name: 'Temperatura pracy', value: 'od −196 do 110 °C' },
    { name: 'Temperatura naklejania', value: '−196 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka, łaźnia wodna (100 °C); nie zaleca się ciekłego azotu, bo etykieta nie może się nakładać' },
    { name: 'Odporność', value: 'chemikalia, rozmazanie nadruku' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '9,50 × 6,35 mm' },
    { name: 'Liczba etykiet w rzędzie', value: '8' },
    { name: 'Odstęp etykiet', value: '9,50 mm w poziomie, 12,40 mm w pionie' },
    { name: 'Szerokość materiału', value: '81 mm' },
    { name: 'Liczba sztuk', value: '1500 w pudełku' },
    { name: 'Probówki', value: 'PCR, Eppendorf, wirówkowe, fiolki; pojemność 0,5 ml' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6400' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
  ],
  faq: [
    { question: 'Jak rozdzielić etykiety na pasku B-492?', answer: 'Etykiety rozdziela perforacja. Pasek przykleja się na osiem probówek w stojaku i rozrywa wzdłuż linii.' },
    { question: 'Czy etykiety B33-289-492-WT nadają się do ciekłego azotu?', answer: 'Nie zaleca się ich do ciekłego azotu, bo etykieta nie może się nakładać na siebie. Materiał wytrzymuje zamrażarkę i łaźnię wodną o temperaturze 100 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet na probówki PCR?', answer: 'Zaleca się taśmę barwiącą B30-R6400. Etykiety drukuje [Brady i3300](/produkt/brady-i3300). Obsługują je też starsze drukarki BBP33, i4311 i i5300.' },
  ],
  applications: ['Probówki PCR w stojaku', 'Probówki Eppendorf i wirówkowe', 'Fiolki laboratoryjne'],
}

// ---------------------------------------------------------------------------
// Poliester Workhorse B-488 odporny na rozpuszczalniki i chemikalia (cps-4833353)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, zastosowanie]
const POLIESTER_488: [string, string, string, string, string, string][] = [
  ['B33-195-488', '177000', '22,86', '9,53', '3000', 'Butelki, szalki, kolby'],
  ['B33-199-488', '177001', '26,67', '6,35', '3000', 'Kasety histologiczne'],
  ['B33-194-488', '176999', '22,86', '19,05', '2000', 'Butelki, szalki, kolby'],
  ['B33-141-488', '176998', '22,86', '22,86', '1500', 'Butelki, szalki; 2 w rzędzie'],
  ['B33-213-488', '177002', '26,67', '7,95', '3000', 'Kasety histologiczne'],
]

export const bradyB33Poliester488: Product = {
  ...wspolneB33,
  tags: ['healthcare'],
  id: 'brady-b33-195-488',
  slug: 'brady-b33-195-488',
  name: 'Etykiety poliestrowe odporne na rozpuszczalniki i chemikalia Brady Workhorse B-488 do drukarki i3300',
  seoTitle: 'Brady B-488 — etykiety odporne na rozpuszczalniki do i3300',
  seoDescription: 'Brady i3300: etykiety laboratoryjne B-488 z matowego poliestru, odporne na ksylen i etanol, od −40 do 160 °C. PN: B33-195-488, B33-199-488, B33-141-488.',
  shortDescription: 'Brady B33-195-488 i cztery inne rozmiary białych etykiet z poliestru B-488 zachowują nadruk po kontakcie z ksylenem, etanolem czy toluenem. Do drukarki Brady i3300.',
  description: 'Etykiety B-488 wykonano z białego, matowego poliestru o grubości 0,0914 mm. Nadruk i folia znoszą kontakt z ksylenem, etanolem, toluenem, izopropanolem, MEK i DMSO. Trwały klej akrylowy wiąże z płaskimi, gładkimi powierzchniami. Etykiety oznaczają butelki, szalki, kolby i kasety histologiczne. Można je zadrukować kodami kreskowymi. Służą też do oznaczeń inwentarzowych i kontrolnych oraz do znakowania sprzętu w laboratoriach i szpitalach.\n\nDostępnych jest pięć rozmiarów etykiet wykrawanych. Szerokość wynosi 22,86 albo 26,67 mm, a wysokość od 6,35 do 22,86 mm. Rolka mieści 1500, 2000 lub 3000 sztuk. Najmniejsze etykiety o szerokości 26,67 mm przeznaczono do kaset histologicznych. Kwadratowa wersja 22,86 × 22,86 mm układa się w dwóch rzędach.\n\nZakres temperatur pracy to od −40 do 160 °C, a materiał przechodzi sterylizację w autoklawie. Klej zaczyna wiązać od 10 °C. Materiał spełnia wymagania RoHS (2011/65/UE oraz 2015/863). Taśma barwiąca B30-R4300 jest w osobnej kasecie, a rolkę przyjmują i3300, BBP33, i4311 oraz i5300.',
  sameAs: 'https://www.brady.eu/labels/solvent-chemical-resistant-polyester-labels-for-b33-printers-cps-4833353',
  images: [
    '/images/products/brady/b33-195-488.png',
    '/images/products/brady/b33-199-488.png',
    '/images/products/brady/b33-141-488.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-195-488 na uchwycie z paskiem białych etykiet 22,86 × 9,53 mm',
    'Rolka Brady B33-199-488 z wąskimi etykietami 26,67 × 6,35 mm do kaset histologicznych',
    'Rolka Brady B33-141-488 z kwadratowymi etykietami 22,86 × 22,86 mm ułożonymi w dwóch rzędach',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'Workhorse B-488' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Grubość', value: '0,0914 mm' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni płaskich i gładkich' },
    { name: 'Temperatura pracy', value: 'od −40 do 160 °C' },
    { name: 'Temperatura naklejania', value: 'od 10 °C' },
    { name: 'Warunki pracy', value: 'autoklaw, zamrażarka' },
    { name: 'Odporność', value: 'ksylen, etanol, toluen, izopropanol, MEK, DMSO, ścieranie, korozja, wilgoć' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '22,86 × 9,53 / 26,67 × 6,35 / 22,86 × 19,05 / 22,86 × 22,86 / 26,67 × 7,95 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1500, 2000 albo 3000, zależnie od rozmiaru' },
    { name: 'Gilza', value: '50,8 mm' },
    { name: 'Normy', value: 'RoHS (2011/65/UE, 2015/863)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: POLIESTER_488.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: POLIESTER_488.map(([pn, , szer, wys, szt, zast]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${szt} etykiet ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${szt} szt.`, Zastosowanie: zast },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 26,67 × 6,35 mm, a największa 22,86 × 22,86 mm.',
    Zastosowanie: 'Pojemniki laboratoryjne, do których dobrano rozmiar etykiety.\n\nWęższe etykiety 26,67 mm pasują do kaset histologicznych, a pozostałe do butelek, szalek i kolb.',
  },
  faq: [
    { question: 'Na jakie rozpuszczalniki odporne są etykiety B-488?', answer: 'Na ksylen, etanol, toluen, izopropanol, MEK i DMSO. Materiał znosi też ścieranie, korozję i wilgoć.' },
    { question: 'Czy etykiety B-488 można sterylizować w autoklawie?', answer: 'Tak. Zakres temperatur pracy to od −40 do 160 °C. Materiał nadaje się też do zamrażarki.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-488?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Etykiety drukuje [Brady i3300](/produkt/brady-i3300). Obsługują je też starsze drukarki BBP33, i4311 i i5300.' },
  ],
  applications: ['Butelki, szalki i kolby laboratoryjne', 'Kasety histologiczne', 'Znakowanie sprzętu i inwentarza w szpitalach'],
}

// ---------------------------------------------------------------------------
// Polipropylen B-7425 (cps-3069390)
// ---------------------------------------------------------------------------

// [PN, nr art., szerokość, wysokość, sztuk, rzędów, probówka (ml)]
const POLIPROPYLEN_7425: [string, string, string, string, string, string, string][] = [
  ['B33-151-7425', '148678', '50,8', '6,35', '2000', '1', '4'],
  ['B33-137-7425', '148683', '50,8', '25,4', '1500', '1', '8'],
  ['B33-59-7425', '148673', '25,4', '12,7', '2000', '1', '0,5'],
  ['B33-152-7425', '148681', '25,4', '9,53', '2000', '2', '0,5'],
  ['B33-257-7425', '148677', '20,96', '6,35', '1500', '1', '2'],
  ['B33-179-7425', '148675', '25,4', '25,4', '1500', '1', '2'],
  ['B33-258-7425', '148684', '38,1', '44,45', '900', '1', '4'],
  ['B33-256-7425', '148671', '33,02', '15,24', '1500', '1', '2'],
  ['B33-53-7425', '148674', '50,8', '12,7', '2000', '1', ''],
  ['B33-37-7425', '148679', '38,1', '12,7', '1500', '2', '4'],
  ['B33-235-7425', '148672', '38,1', '25,4', '1250', '1', '4'],
  ['B33-88-7425', '148680', '25,4', '19,05', '2000', '2', '1,5'],
  ['B33-136-7425', '148676', '38,1', '19,05', '1500', '1', '4'],
]

export const bradyB33Polipropylen7425: Product = {
  ...wspolneB33,
  tags: ['healthcare'],
  id: 'brady-b33-151-7425',
  slug: 'brady-b33-151-7425',
  name: 'Polipropylenowe etykiety laboratoryjne odporne na chemikalia Brady B-7425 do drukarki i3300',
  seoTitle: 'Brady B-7425 — polipropylenowe etykiety laboratoryjne do i3300',
  seoDescription: 'Brady i3300: matowe etykiety polipropylenowe B-7425 na probówki, fiolki i szkiełka, od −80 do 70 °C, 13 rozmiarów. PN: B33-151-7425, B33-59-7425, B33-258-7425.',
  shortDescription: 'Brady B33-151-7425 i dwanaście innych rozmiarów matowych etykiet z polipropylenu B-7425 na naczynia laboratoryjne. Do drukarki Brady i3300.',
  description: 'Biały polipropylen B-7425 ma powierzchnię matową. Folia mierzy 0,102 mm, a klej akrylowy trzyma trwale na gładkich podłożach. Etykiety trafiają na probówki wirówkowe i stożkowe, fiolki, szkiełka, płytki wielodołkowe oraz butelki, szalki i kolby. Służą do kodów kreskowych, ogólnej identyfikacji i oznaczania aparatury. Kod powstaje termotransferem.\n\nRodzina ma trzynaście rozmiarów. Najmniejsza etykieta mierzy 20,96 × 6,35 mm, a największa 38,1 × 44,45 mm. Rolka zawiera od 900 do 2000 etykiet. Probówki 0,5 ml obsługują dwa rozmiary: 25,4 × 12,7 oraz 25,4 × 9,53 mm. Dla pojemników 8 ml przewidziano etykietę 50,8 × 25,4 mm. Cztery rozmiary układają się po dwie etykiety w rzędzie.\n\nDolna granica pracy to −80 °C, a górna 70 °C. Etykiety znoszą autoklaw, zamrażarkę oraz wodę o temperaturze 100 °C. Folia jest odporna na chemikalia i rozpuszczalniki, a nadruk się nie rozmazuje. Próbkę, która trafi do zamrażarki, należy oznaczyć przed zamrożeniem. Kasetę z taśmą barwiącą B30-R4300 dokupuje się oddzielnie.',
  sameAs: 'https://www.brady.eu/labels/b33-series-polypropylene-laboratory-labels-cps-3069390',
  images: [
    '/images/products/brady/b33-151-7425.png',
    '/images/products/brady/b33-59-7425.png',
    '/images/products/brady/b33-152-7425.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-151-7425 na uchwycie z paskiem wąskich białych etykiet polipropylenowych 50,8 × 6,35 mm',
    'Rolka Brady B33-59-7425 z białymi etykietami 25,4 × 12,7 mm do probówek',
    'Rolka Brady B33-152-7425 z etykietami 25,4 × 9,53 mm ułożonymi w dwóch rzędach',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7425' },
    { name: 'Typ materiału', value: 'polipropylen' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy, do niskich temperatur; do powierzchni gładkich' },
    { name: 'Temperatura pracy', value: 'od −80 do 70 °C' },
    { name: 'Warunki pracy', value: 'autoklaw, zamrażarka, łaźnia wodna (100 °C)' },
    { name: 'Uwaga', value: 'przy przechowywaniu w zamrażarce etykietę należy nakleić przed zamrożeniem' },
    { name: 'Odporność', value: 'chemikalia, rozpuszczalniki, zimno, wysoka i niska temperatura, rozmazanie nadruku' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '50,8 × 6,35 / 50,8 × 25,4 / 25,4 × 12,7 / 25,4 × 9,53 / 20,96 × 6,35 / 25,4 × 25,4 / 38,1 × 44,45 / 33,02 × 15,24 / 50,8 × 12,7 / 38,1 × 12,7 / 38,1 × 25,4 / 25,4 × 19,05 / 38,1 × 19,05 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: 'od 900 do 2000, zależnie od rozmiaru' },
    { name: 'Gilza', value: '50,8 mm' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: POLIPROPYLEN_7425.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: POLIPROPYLEN_7425.map(([pn, , szer, wys, szt, rzedy, ml]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${szt} etykiet ${szer} × ${wys} mm`,
    attributes: { Rozmiar: `${szer} × ${wys} mm, ${szt} szt.`, Rzędy: rzedy, ...(ml ? { Probówka: `${ml} ml` } : {}) },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 20,96 × 6,35 mm, a największa 38,1 × 44,45 mm.',
    Rzędy: 'Liczba etykiet obok siebie na szerokości rolki.\n\nW czterech rozmiarach etykiety leżą po dwie w rzędzie, w pozostałych po jednej.',
    Probówka: 'Pojemność probówki, do której dobrano rozmiar etykiety.\n\nNajmniejsze etykiety pasują do probówek 0,5 ml, a największe do pojemników 8 ml.',
  },
  faq: [
    { question: 'Kiedy nakleić etykietę B-7425 na próbkę przeznaczoną do zamrażarki?', answer: 'Przed zamrożeniem próbki. Materiał pracuje od −80 do 70 °C i znosi autoklaw.' },
    { question: 'Który rozmiar B-7425 pasuje do probówek 0,5 ml?', answer: 'Etykiety 25,4 × 12,7 mm (B33-59-7425) i 25,4 × 9,53 mm (B33-152-7425). Druga wersja ma dwie etykiety w rzędzie.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-7425?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Etykiety drukuje [Brady i3300](/produkt/brady-i3300). Obsługują je też starsze drukarki BBP33, i4311 i i5300.' },
  ],
  applications: ['Probówki wirówkowe i stożkowe', 'Fiolki, szkiełka i płytki wielodołkowe', 'Kody kreskowe na naczyniach laboratoryjnych'],
}

// ---------------------------------------------------------------------------
// FreezerBondz B-490 (cps-3069374)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar etykiety, sztuk, rzędów, probówka]
const FREEZERBONDZ_490: [string, string, string, string, string, string][] = [
  ['B33-156-490', '142894', '48,26 × 25,4', '1500', '1', '8 ml'],
  ['B33-151-490', '142941', '50,8 × 6,35', '2500', '1', '4 ml'],
  ['B33-157-490', '142895', '55,88 × 38,1', '1000', '1', '15 ml'],
  ['B33-144-490', '142940', 'Ø 12,7', '2500', '3', '2 ml, wieczko fiolki'],
  ['B33-154-490', '142893', '31,75 × 9,53', '1500', '1', '1,5 ml'],
  ['B33-158-490', '142896', '95,25 × 38,1', '1000', '1', '50 ml'],
  ['B33-155-490', '143089', '41,28 × 15,24', '1500', '1', '4 ml'],
  ['B33-68-490', '142943', '12,7 × 19,05', '2500', '4', '0,5 ml'],
  ['B33-125-490', '142938', '22,86 × 12,7', '1650', '1', '0,5 ml'],
]

export const bradyB33FreezerBondz490: Product = {
  ...wspolneB33,
  tags: ['healthcare'],
  id: 'brady-b33-156-490',
  slug: 'brady-b33-156-490',
  name: 'Etykiety kriogeniczne z poliestru Brady FreezerBondz B-490 do drukarki i3300',
  seoTitle: 'Brady FreezerBondz B-490 — etykiety kriogeniczne do i3300',
  seoDescription: 'Brady i3300: etykiety FreezerBondz B-490 z poliestru na probówki, fiolki i butelki, od −196 do 130 °C. PN: B33-156-490, B33-151-490, B33-125-490.',
  shortDescription: 'Brady B33-156-490 i osiem innych rozmiarów etykiet FreezerBondz B-490 z matowego poliestru, także na zamrożone naczynia. Do drukarki Brady i3300.',
  description: 'FreezerBondz B-490 to biały, matowy poliester o grubości 0,065 mm z trwałym klejem akrylowym. Etykiety oznaczają probówki, fiolki, probówki wirówkowe i stożkowe, butelki, szalki i kolby. Nadruk powstaje termotransferem. Etykieta przylega do zamrożonej powierzchni, także do szkła i polipropylenu wyjętych z ciekłego azotu, o ile ma niewielką zakładkę.\n\nRodzina liczy dziewięć rozmiarów. Największa etykieta ma 95,25 × 38,1 mm, a najmniejsza 12,7 × 19,05 mm. Osobny rozmiar to okrągła etykieta o średnicy 12,7 mm, po trzy w rzędzie, przeznaczona na wieczka fiolek. Rolka mieści od 1000 do 2500 sztuk. Najmniejsze rozmiary pasują do probówek 0,5 ml, a największy do naczyń 50 ml.\n\nZakres temperatur obejmuje przedział od −196 do 130 °C. Folia znosi zamrażarkę, gorącą wodę (100 °C), promieniowanie UV i wpływ pogody. Chemikalia i rozmazywanie nadruku jej nie szkodzą. Okrągłych etykiet na wieczka nie zaleca się do ciekłego azotu, bo wieczko nie pozwala na zakładkę. Taśmę barwiącą B30-R4300 zamawia się osobno.',
  sameAs: 'https://www.brady.eu/labels/b33-series-freezerbondz-polyester-labels-cps-3069374',
  images: [
    '/images/products/brady/b33-156-490.png',
    '/images/products/brady/b33-144-490.png',
    '/images/products/brady/b33-68-490.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-156-490 na uchwycie z paskiem białych etykiet FreezerBondz 48,26 × 25,4 mm',
    'Rolka Brady B33-144-490 z okrągłymi etykietami o średnicy 12,7 mm na wieczka fiolek',
    'Rolka Brady B33-68-490 z małymi etykietami 12,7 × 19,05 mm ułożonymi w czterech rzędach',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'FreezerBondz B-490' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Grubość', value: '0,065 mm' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; agresywny we wszystkich rozmiarach poza 31,75 × 9,53 mm' },
    { name: 'Temperatura pracy', value: 'od −196 do 130 °C' },
    { name: 'Temperatura naklejania', value: '−196 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka, łaźnia wodna (100 °C), ciekły azot (z zakładką etykiety; nie dotyczy etykiet na wieczka)' },
    { name: 'Odporność', value: 'chemikalia, rozmazanie nadruku, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '48,26 × 25,4 / 50,8 × 6,35 / 55,88 × 38,1 / Ø 12,7 / 31,75 × 9,53 / 95,25 × 38,1 / 41,28 × 15,24 / 12,7 × 19,05 / 22,86 × 12,7 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: 'od 1000 do 2500, zależnie od rozmiaru' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: FREEZERBONDZ_490.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: FREEZERBONDZ_490.map(([pn, , rozmiar, szt, rzedy, ml]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${szt} etykiet ${rozmiar} mm`,
    attributes: { Rozmiar: `${rozmiar} mm, ${szt} szt.`, Rzędy: rzedy, Probówka: ml },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość albo średnica) i liczba sztuk na rolce.\n\nNajwiększa etykieta ma 95,25 × 38,1 mm, a okrągła etykieta na wieczka ma średnicę 12,7 mm.',
    Rzędy: 'Liczba etykiet obok siebie na szerokości rolki.\n\nWiększość rozmiarów ma jedną etykietę w rzędzie. Etykiety okrągłe mają trzy, a najmniejsze prostokątne cztery.',
    Probówka: 'Pojemność naczynia, do którego dobrano rozmiar etykiety.\n\nOd probówek 0,5 ml po pojemniki 50 ml. Etykieta okrągła jest przeznaczona na wieczko fiolki 2 ml.',
  },
  faq: [
    { question: 'Czy etykiety FreezerBondz B-490 można naklejać na zamrożone naczynia?', answer: 'Tak, na szkło i polipropylen wyjęte z ciekłego azotu, jeśli etykieta ma niewielką zakładkę. Minimalna temperatura naklejania wynosi −196 °C.' },
    { question: 'Czy okrągłe etykiety B33-144-490 nadają się do ciekłego azotu?', answer: 'Nie zaleca się tego, bo etykieta na wieczku fiolki nie może się zakładać. Pozostałe rozmiary B-490 mają zakładkę i można je naklejać na zamrożone naczynia.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-490?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Etykiety drukuje [Brady i3300](/produkt/brady-i3300). Obsługują je też starsze drukarki BBP33, i4311 i i5300.' },
  ],
  applications: ['Zamrożone probówki i fiolki', 'Wieczka fiolek (etykiety okrągłe)', 'Butelki, szalki i kolby z próbkami'],
}

// ---------------------------------------------------------------------------
// FreezerBondz II B-492 (cps-3069373)
// ---------------------------------------------------------------------------

// [PN, nr art., rozmiar etykiety, sztuk, rzędów, probówka]
const FREEZERBONDZ_II_492: [string, string, string, string, string, string][] = [
  ['B33-180-492', '143051', '22,86 × 25,4', '1500', '1', '2 ml'],
  ['B33-156-492', '142917', '48,26 × 25,4', '1500', '1', '8 ml'],
  ['B33-59-492', '143063', '25,4 × 12,7', '2500', '1', '0,5 ml'],
  ['B33-155-492', '134102', '41,28 × 15,24', '1500', '1', '4 ml'],
  ['B33-152-492', '142942', '25,4 × 9,53', '2500', '2', '0,5 ml'],
  ['B33-179-492', '143067', '25,4 × 25,4', '1900', '1', '2 ml'],
]

export const bradyB33FreezerBondz492: Product = {
  ...wspolneB33,
  tags: ['healthcare'],
  id: 'brady-b33-180-492',
  slug: 'brady-b33-180-492',
  name: 'Ultracienkie etykiety kriogeniczne Brady FreezerBondz II B-492 do drukarki i3300',
  seoTitle: 'Brady FreezerBondz II B-492 — etykiety kriogeniczne do i3300',
  seoDescription: 'Brady i3300: błyszczące etykiety FreezerBondz II B-492 z poliestru na zamrożone probówki i fiolki, od −196 do 110 °C. PN: B33-180-492, B33-59-492, B33-152-492.',
  shortDescription: 'Brady B33-180-492 i pięć innych rozmiarów ultracienkich etykiet FreezerBondz II B-492 z błyszczącego poliestru na probówki i fiolki. Do drukarki Brady i3300.',
  description: 'Biały, błyszczący poliester B-492 tworzy etykiety FreezerBondz II. Jest ultracienki (0,081 mm), więc dobrze opina małe naczynia. Etykietę można nakleić na probówkę oszronioną, zamrożoną albo o temperaturze pokojowej. Przy zamrożonej probówce potrzebna jest niewielka zakładka. Gładkie powierzchnie przyjmują ten klej akrylowy na stałe. Etykiety trafiają na fiolki, probówki, probówki wirówkowe i stożkowe, Eppendorf oraz probówki PCR. Druk odbywa się termotransferem.\n\nW rodzinie jest sześć rozmiarów. Wysokość etykiet wynosi od 9,53 do 25,4 mm, a szerokość od 22,86 do 48,26 mm. Rolka zawiera 1500, 1900 albo 2500 sztuk. Etykiety 25,4 × 9,53 mm leżą na rolce parami. Probówki 0,5 ml mają dwa odpowiedniki, a naczynia 8 ml jeden.\n\nZakres pracy zaczyna się od −196 °C i kończy na 110 °C. Etykieta przetrwa ciekły azot i łaźnię wodną, a w większości rozmiarów także autoklaw; wyjątkiem jest rozmiar 41,28 × 15,24 mm. Nadruk nie rozmazuje się i znosi chemikalia. Zalecana taśma barwiąca B30-R6400 jest osobną kasetą.',
  sameAs: 'https://www.brady.eu/labels/b33-series-freezerbondz-ii-polyester-labels-cps-3069373',
  images: [
    '/images/products/brady/b33-180-492.png',
    '/images/products/brady/b33-156-492.png',
    '/images/products/brady/b33-152-492.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-180-492 na uchwycie z paskiem białych błyszczących etykiet 22,86 × 25,4 mm',
    'Rolka Brady B33-156-492 z największymi etykietami 48,26 × 25,4 mm',
    'Rolka Brady B33-152-492 z etykietami 25,4 × 9,53 mm ułożonymi w dwóch rzędach',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'FreezerBondz B-492' },
    { name: 'Typ materiału', value: 'poliester ultracienki' },
    { name: 'Grubość', value: '0,081 mm' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy; agresywny we wszystkich rozmiarach poza 25,4 × 9,53 mm; do powierzchni gładkich' },
    { name: 'Temperatura pracy', value: 'od −196 do 110 °C' },
    { name: 'Temperatura naklejania', value: '−196 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka, łaźnia wodna (100 °C), ciekły azot (z zakładką etykiety)' },
    { name: 'Odporność', value: 'chemikalia, rozmazanie nadruku' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '22,86 × 25,4 / 48,26 × 25,4 / 25,4 × 12,7 / 41,28 × 15,24 / 25,4 × 9,53 / 25,4 × 25,4 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1500, 1900 albo 2500, zależnie od rozmiaru' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6400' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: FREEZERBONDZ_II_492.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: FREEZERBONDZ_II_492.map(([pn, , rozmiar, szt, rzedy, ml]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${szt} etykiet ${rozmiar} mm`,
    attributes: { Rozmiar: `${rozmiar} mm, ${szt} szt.`, Rzędy: rzedy, Probówka: ml },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nNajmniejsza etykieta ma 25,4 × 9,53 mm, a największa 48,26 × 25,4 mm.',
    Rzędy: 'Liczba etykiet obok siebie na szerokości rolki.\n\nRozmiar 25,4 × 9,53 mm ma dwie etykiety w rzędzie, pozostałe po jednej.',
    Probówka: 'Pojemność naczynia, do którego dobrano rozmiar etykiety.\n\nOd probówek 0,5 ml po pojemniki 8 ml.',
  },
  faq: [
    { question: 'Czym różni się FreezerBondz II B-492 od B-490?', answer: 'B-492 ma błyszczącą powierzchnię i grubość 0,081 mm, a B-490 jest matowy i ma 0,065 mm.' },
    { question: 'Czy etykiety B-492 można naklejać na zamrożone naczynia?', answer: 'Tak, z niewielką zakładką, także na szkło i polipropylen wyjęte z ciekłego azotu. Temperatura naklejania wynosi −196 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-492?', answer: 'Zaleca się taśmę barwiącą B30-R6400. Etykiety drukuje [Brady i3300](/produkt/brady-i3300). Obsługują je też starsze drukarki BBP33, i4311 i i5300.' },
  ],
  applications: ['Zamrożone i oszronione probówki', 'Fiolki i probówki wirówkowe', 'Probówki PCR i Eppendorf'],
}

// ---------------------------------------------------------------------------
// StainerBondz B-481 (cps-3069391)
// ---------------------------------------------------------------------------

// [PN, nr art., wysokość, sztuk, rzędów]
const STAINERBONDZ_481: [string, string, string, string, string][] = [
  ['B33-194-481', '143055', '19,05', '2000', '1'],
  ['B33-141-481', '143047', '22,86', '1500', '2'],
  ['B33-195-481', '133831', '9,53', '3000', '1'],
]

export const bradyB33StainerBondz481: Product = {
  ...wspolneB33,
  tags: ['healthcare'],
  id: 'brady-b33-194-481',
  slug: 'brady-b33-194-481',
  name: 'Poliestrowe etykiety na szkiełka mikroskopowe Brady StainerBondz B-481 do drukarki i3300',
  seoTitle: 'Brady StainerBondz B-481 — etykiety na szkiełka do i3300',
  seoDescription: 'Brady i3300: etykiety StainerBondz B-481 z poliestru, odporne na ksylen przy barwieniu szkiełek, od −80 do 130 °C. PN: B33-194-481, B33-141-481, B33-195-481.',
  shortDescription: 'Brady B33-194-481 i dwa inne rozmiary białych etykiet StainerBondz B-481 na szkiełka mikroskopowe poddawane barwieniu. Do drukarki Brady i3300.',
  description: 'Etykiety StainerBondz B-481 wykonano z białego poliestru o powierzchni satynowej. Opracowano je z myślą o szkiełkach mikroskopowych w procesie barwienia. W procesie H&E (hematoksylina i eozyna) oraz w ksylenie nadruk nie znika, materiał się nie wygina i nie zmienia barwy. Kod kreskowy pozostaje czytelny, a etykieta trzyma się szkiełka. Oleje, woda i inne chemikalia jej nie szkodzą. Trwały klej akrylowy pasuje do gładkich powierzchni. Używa się go również w innych oznaczeniach w laboratoriach i szpitalach.\n\nRodzina ma trzy rozmiary o wspólnej szerokości 22,86 mm i wysokościach 9,53, 19,05 oraz 22,86 mm. Rolki zawierają odpowiednio 3000, 2000 i 1500 sztuk, a kwadratowa wersja leży w dwóch rzędach. Wersje różnią się tylko wysokością etykiety.\n\nGrubość folii to 0,0914 mm, a zakres pracy wynosi od −80 do 130 °C. Wytrzymuje chłód zamrażarki i kąpiel w temperaturze 100 °C. Do druku służy taśma B30-R6400 w oddzielnej kasecie. Rolki obsługują drukarki z modelami i3300, BBP33, i4311 oraz i5300.',
  sameAs: 'https://www.brady.eu/labels/b33-series-stainerbondz-laboratory-polyester-labels-cps-3069391',
  images: ['/images/products/brady/b33-194-481.png'],
  imageDescriptions: ['Rolka Brady B33-194-481 na uchwycie z paskiem białych satynowych etykiet StainerBondz 22,86 × 19,05 mm'],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'StainerBondz B-481' },
    { name: 'Typ materiału', value: 'poliester o wysokiej odporności chemicznej' },
    { name: 'Grubość', value: '0,0914 mm' },
    { name: 'Wykończenie', value: 'satynowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Temperatura pracy', value: 'od −80 do 130 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka, łaźnia wodna (100 °C)' },
    { name: 'Odporność', value: 'ksylen, chemikalia, oleje, woda, barwienie H&E' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '22,86 × 19,05 / 22,86 × 22,86 / 22,86 × 9,53 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1500, 2000 albo 3000, zależnie od rozmiaru' },
    { name: 'Gilza', value: '50,8 mm' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6400' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: STAINERBONDZ_481.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: STAINERBONDZ_481.map(([pn, , wys, szt, rzedy]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${szt} etykiet 22,86 × ${wys} mm`,
    attributes: { Rozmiar: `22,86 × ${wys} mm, ${szt} szt.`, Rzędy: rzedy },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nWszystkie etykiety mają szerokość 22,86 mm, a wysokość od 9,53 do 22,86 mm.',
    Rzędy: 'Liczba etykiet obok siebie na szerokości rolki.\n\nEtykiety 22,86 × 22,86 mm leżą po dwie w rzędzie, pozostałe po jednej.',
  },
  faq: [
    { question: 'Do czego służą etykiety StainerBondz B-481?', answer: 'Do oznaczania szkiełek mikroskopowych w procesie barwienia, na przykład hematoksyliną i eozyną (H&E). Nadruk i etykieta znoszą ksylen oraz inne chemikalia.' },
    { question: 'W jakim zakresie temperatur pracuje materiał B-481?', answer: 'Od −80 do 130 °C. Materiał znosi też zamrażarkę i gorącą wodę o temperaturze 100 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-481?', answer: 'Zaleca się taśmę barwiącą B30-R6400. Etykiety drukuje [Brady i3300](/produkt/brady-i3300). Obsługują je też starsze drukarki BBP33, i4311 i i5300.' },
  ],
  applications: ['Szkiełka mikroskopowe w barwieniu H&E', 'Oznaczenia laboratoryjne odporne na ksylen', 'Identyfikacja w szpitalach i laboratoriach'],
}

// ---------------------------------------------------------------------------
// Polipropylen B-7425 z wieczkiem fiolki (cps-3069263)
// ---------------------------------------------------------------------------

// [PN, nr art., etykieta, wieczko]
const POLIPROPYLEN_7425_WIECZKO: [string, string, string, string][] = [
  ['B33-251-7425', '148670', '25,4 × 12,7 mm', 'Ø 11,18 mm'],
  ['B33-249-7425', '148682', '25,4 × 9,53 mm', 'Ø 9,53 mm'],
]

export const bradyB33PolipropylenWieczko7425: Product = {
  ...wspolneB33,
  tags: ['healthcare'],
  id: 'brady-b33-251-7425',
  slug: 'brady-b33-251-7425',
  name: 'Zestawy etykiet i krążków na wieczka fiolek z polipropylenu Brady B-7425 do drukarki i3300',
  seoTitle: 'Brady B-7425 — etykiety z krążkiem na wieczko fiolki do i3300',
  seoDescription: 'Brady i3300: polipropylenowe zestawy B-7425 z etykietą i krążkiem na wieczko fiolki, 1500 zestawów na rolce. PN: B33-251-7425, B33-249-7425.',
  shortDescription: 'Brady B33-251-7425 i B33-249-7425 to polipropylenowe zestawy etykiety i okrągłego krążka na wieczko fiolki, po 1500 zestawów na rolce. Do drukarki Brady i3300.',
  description: 'Zestaw B-7425 składa się z prostokątnej etykiety na ściankę oraz okrągłego krążka na wieczko. Oba elementy są wykrawane z jednej rolki białego polipropylenu o grubości 0,102 mm i powierzchni matowej. Klej akrylowy jest tu trwały i pasuje do powierzchni gładkich. Zestawy służą do oznaczeń laboratoryjnych i wskazywania temperatury. Jeden zestaw oznacza fiolkę, probówkę wirówkową lub stożkową razem z jej wieczkiem, a zestawy leżą na rolce w jednym rzędzie.\n\nPrzygotowano dwie wersje. W pierwszej etykieta mierzy 25,4 mm na 12,7 mm, a krążek ma 11,18 mm średnicy. W drugiej etykieta jest niższa, a krążek ma mniejszą średnicę. Na rolce znajduje się 1500 zestawów. Obie wersje dobrano do pojemników 0,5 ml, a nadruk powstaje termotransferem.\n\nZakres temperatur obejmuje od −80 do 70 °C. Zestawy znoszą autoklaw i zamrażarkę, a próbkę trzeba oznaczyć przed zamrożeniem. Polipropylen jest odporny na rozpuszczalniki oraz chemikalia i nie rozmazuje nadruku. Taśma barwiąca (B30-R4300) dochodzi w oddzielnej kasecie.',
  sameAs: 'https://www.brady.eu/labels/b33-series-polypropylene-vial-top-laboratory-labels-cps-3069263',
  images: [
    '/images/products/brady/b33-251-7425.png',
    '/images/products/brady/b33-249-7425.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-251-7425 na uchwycie z paskiem białych zestawów: prostokątna etykieta i okrągły krążek na wieczko fiolki',
    'Rolka Brady B33-249-7425 z mniejszymi zestawami etykiety 25,4 × 9,53 mm i krążka 9,53 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka zestawów: etykieta i krążek na wieczko, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7425' },
    { name: 'Typ materiału', value: 'polipropylen' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy, do niskich temperatur; do powierzchni gładkich' },
    { name: 'Temperatura pracy', value: 'od −80 do 70 °C' },
    { name: 'Warunki pracy', value: 'autoklaw, zamrażarka, łaźnia wodna (100 °C)' },
    { name: 'Uwaga', value: 'przy przechowywaniu w zamrażarce zestaw należy nakleić przed zamrożeniem' },
    { name: 'Odporność', value: 'chemikalia, rozpuszczalniki, zimno, wysoka i niska temperatura, rozmazanie nadruku' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary zestawu', value: '25,4 × 12,7 mm z krążkiem Ø 11,18 mm / 25,4 × 9,53 mm z krążkiem Ø 9,53 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1500 zestawów' },
    { name: 'Probówki', value: 'fiolki, probówki, probówki wirówkowe i stożkowe; pojemność 0,5 ml' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: POLIPROPYLEN_7425_WIECZKO.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: POLIPROPYLEN_7425_WIECZKO.map(([pn, , etykieta, wieczko]) => ({
    partNumber: pn,
    name: `Brady ${pn} — 1500 zestawów: etykieta ${etykieta} i krążek ${wieczko}`,
    attributes: { Etykieta: etykieta, Wieczko: wieczko },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Etykieta: 'Wymiary prostokątnej etykiety na ściankę fiolki lub probówki (szerokość × wysokość).\n\nDwie wersje różnią się wysokością: 12,7 albo 9,53 mm.',
    Wieczko: 'Średnica okrągłego krążka na wieczko fiolki.\n\nWiększy zestaw ma krążek 11,18 mm, mniejszy 9,53 mm.',
  },
  faq: [
    { question: 'Z czego składa się zestaw B-7425 z wieczkiem?', answer: 'Z prostokątnej etykiety na ściankę i okrągłego krążka na wieczko fiolki. Na rolce jest 1500 zestawów.' },
    { question: 'Czy zestawy B-7425 można naklejać na zamrożone fiolki?', answer: 'Nie. Do zamrażarki zestaw trzeba nakleić przed zamrożeniem próbki. Materiał pracuje od −80 do 70 °C.' },
    { question: 'Jaką taśmę barwiącą zamówić do zestawów B-7425?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Zestawy drukuje [Brady i3300](/produkt/brady-i3300). Obsługują je też starsze drukarki BBP33, i4311 i i5300.' },
  ],
  applications: ['Fiolki z oznaczonym wieczkiem', 'Probówki wirówkowe i stożkowe', 'Próbki przechowywane w zamrażarce'],
}

// ---------------------------------------------------------------------------
// Tkanina nylonowa B-499 z wieczkiem fiolki (cps-3069264)
// ---------------------------------------------------------------------------

// [PN, nr art., etykieta, wieczko]
const NYLON_499_WIECZKO: [string, string, string, string][] = [
  ['B33-126-499', '143011', '22,86 × 12,7 mm', 'Ø 12,7 mm'],
  ['B33-163-499', '143001', '25,4 × 9,53 mm', 'Ø 9,53 mm'],
]

export const bradyB33Nylon499Wieczko: Product = {
  ...wspolneB33,
  tags: ['healthcare'],
  id: 'brady-b33-126-499',
  slug: 'brady-b33-126-499',
  name: 'Zestawy etykiet i krążków na wieczka fiolek z tkaniny nylonowej Brady B-499 do drukarki i3300',
  seoTitle: 'Brady B-499 — nylonowe etykiety z krążkiem na wieczko do i3300',
  seoDescription: 'Brady i3300: zestawy B-499 z tkaniny nylonowej, etykieta i krążek na wieczko fiolki, agresywny klej, od −40 do 90 °C. PN: B33-126-499, B33-163-499.',
  shortDescription: 'Brady B33-126-499 i B33-163-499 to białe zestawy z tkaniny nylonowej: etykieta na fiolkę i krążek na wieczko, po 1500 zestawów. Do drukarki Brady i3300.',
  description: 'Nylonowa tkanina B-499 jest biała, a jej matowa powłoka to poliamid. Warstwa ma 0,166 mm. Agresywny, trwały klej akrylowy działa także w niskiej temperaturze i przylega do powierzchni gładkich, szorstkich oraz trudnych, o małej energii powierzchniowej. Nie ma w niej halogenów. Każdy zestaw to prostokątna etykieta na ściankę oraz okrągły krążek na wieczko fiolki.\n\nSą dwa warianty. Większa etykieta mierzy 22,86 × 12,7 mm, a jej krążek ma średnicę 12,7 mm. W mniejszym wariancie etykieta mierzy 25,4 na 9,53 mm, a krążek ma Ø 9,53 mm. W opakowaniu jest 1500 zestawów. Większy wariant obejmuje także butelki, szalki, kolby i probówki kriogeniczne. Mniejszy przeznaczono na fiolki i probówki. Oba pasują do pojemników 0,5 ml.\n\nGranice temperatur pracy to −40 i 90 °C. Tkanina przechodzi autoklaw i zamrażarkę oraz znosi ścieranie, wilgoć, chemikalia, UV i pogodę. Uznanie UL, akceptacja CSA i bezhalogenowość (DIN VDE 0472-815) dotyczą białego materiału. Taśmę barwiącą B30-R4300 kupuje się w oddzielnej kasecie.',
  sameAs: 'https://www.brady.eu/labels/b33-series-polyimide-coated-nylon-cloth-labels-vial-top-cps-3069264',
  images: [
    '/images/products/brady/b33-126-499.png',
    '/images/products/brady/b33-163-499.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-126-499 na uchwycie z paskiem białych zestawów z tkaniny nylonowej: etykieta i krążek na wieczko',
    'Rolka Brady B33-163-499 z mniejszymi zestawami etykiety 25,4 × 9,53 mm i krążka 9,53 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka zestawów: etykieta i krążek na wieczko, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-499' },
    { name: 'Typ materiału', value: 'tkanina nylonowa z powłoką poliamidową, bezhalogenowa' },
    { name: 'Grubość', value: '0,166 mm' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy, agresywny, do niskich temperatur; do powierzchni gładkich, szorstkich i o niskiej energii powierzchniowej' },
    { name: 'Temperatura pracy', value: 'od −40 do 90 °C' },
    { name: 'Warunki pracy', value: 'autoklaw, zamrażarka' },
    { name: 'Odporność', value: 'ścieranie, chemikalia, wilgoć, niska temperatura, UV, warunki atmosferyczne' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary zestawu', value: '22,86 × 12,7 mm z krążkiem Ø 12,7 mm / 25,4 × 9,53 mm z krążkiem Ø 9,53 mm, zależnie od wersji' },
    { name: 'Liczba sztuk w opakowaniu', value: '1500 zestawów' },
    { name: 'Probówki', value: 'fiolki, probówki, butelki, szalki, kolby; pojemność 0,5 ml' },
    { name: 'Normy', value: 'uznanie UL, akceptacja CSA, bezhalogenowy (DIN VDE 0472, część 815); dotyczy tylko białego materiału' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: NYLON_499_WIECZKO.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: NYLON_499_WIECZKO.map(([pn, , etykieta, wieczko]) => ({
    partNumber: pn,
    name: `Brady ${pn} — 1500 zestawów: etykieta ${etykieta} i krążek ${wieczko}`,
    attributes: { Etykieta: etykieta, Wieczko: wieczko },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Etykieta: 'Wymiary prostokątnej etykiety na ściankę fiolki lub probówki (szerokość × wysokość).\n\nWiększa ma 22,86 × 12,7 mm, mniejsza 25,4 × 9,53 mm.',
    Wieczko: 'Średnica okrągłego krążka na wieczko fiolki.\n\nWiększy zestaw ma krążek 12,7 mm, mniejszy 9,53 mm.',
  },
  faq: [
    { question: 'Czym zestawy B-499 różnią się od zestawów z polipropylenu B-7425?', answer: 'B-499 to cienka tkanina nylonowa z agresywnym klejem, odporna na ścieranie i UV, a B-7425 to folia polipropylenowa. B-499 pracuje od −40 do 90 °C.' },
    { question: 'Czy tkanina B-499 ma atesty?', answer: 'Biała wersja ma uznanie UL i akceptację CSA oraz spełnia wymagania bezhalogenowości DIN VDE 0472, część 815.' },
    { question: 'Jaką taśmę barwiącą zamówić do zestawów B-499?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Zestawy drukuje [Brady i3300](/produkt/brady-i3300). Obsługują je też starsze drukarki BBP33, i4311 i i5300.' },
  ],
  applications: ['Fiolki z oznaczonym wieczkiem', 'Probówki kriogeniczne i butelki', 'Próbki w zamrażarce i autoklawie'],
}

// ---------------------------------------------------------------------------
// StainerBondz B-481, wąskie etykiety do systemu BSP31 (cps-4359533)
// ---------------------------------------------------------------------------

// [PN, nr art., wysokość]
const STAINERBONDZ_481_BSP: [string, string, string][] = [
  ['B33-213-481', '151980', '7,95'],
  ['B33-199-481', '151979', '6,35'],
]

export const bradyB33StainerBondz481Waskie: Product = {
  ...wspolneB33,
  tags: ['healthcare'],
  id: 'brady-b33-213-481',
  slug: 'brady-b33-213-481',
  name: 'Poliestrowe etykiety laboratoryjne odporne na chemikalia Brady StainerBondz B-481 do drukarki i3300',
  seoTitle: 'Brady StainerBondz B-481 — etykiety 26,67 mm do i3300',
  seoDescription: 'Brady i3300: wąskie etykiety StainerBondz B-481 26,67 mm z poliestru odporne na chemikalia, 3000 szt. w pudełku. PN: B33-213-481, B33-199-481.',
  shortDescription: 'Brady B33-213-481 i B33-199-481 to białe etykiety StainerBondz B-481 o szerokości 26,67 mm z poliestru odpornego na chemikalia. Do drukarki Brady i3300.',
  description: 'Etykiety z poliestru StainerBondz B-481 mają białą, satynową powierzchnię. Opracowano je do oznaczania w laboratorium, w połączeniu z systemem mocowania etykiet Brady BSP31. Wydruk wykonany taśmą z serii R6400 wytrzymuje płyny oraz warunki procesów laboratoryjnych. Materiał jest odporny na liczne chemikalia, oleje i wodę, a także na niskie temperatury i rozpuszczalniki. Klej akrylowy trzyma się trwale podłoży gładkich. Etykiety stosuje się do identyfikacji ogólnej, w laboratoriach i placówkach ochrony zdrowia.\n\nRodzina obejmuje dwie wersje. Obie mają szerokość 26,67 mm, a wysokość wynosi 7,95 albo 6,35 mm. Rozstaw etykiet na podkładzie to odpowiednio 11,43 i 8,89 mm, a sam podkład ma 31,75 mm szerokości. Pudełko mieści 3000 sztuk, po jednej w rzędzie.\n\nPrzy grubości 0,0914 mm folia pracuje między −80 a 130 °C. Etykieta wytrzyma chłód zamrażarki i kąpiel o temperaturze 100 °C. Nadruk powstaje termotransferem. Taśmę barwiącą B30-R6400 kupuje się w osobnej kasecie. Rolki obsługuje i3300, a także starsze BBP33, i4311 i i5300.',
  sameAs: 'https://www.brady.eu/labels/b33-series-chemical-resistant-polyester-laboratory-labels-cps-4359533',
  images: ['/images/products/brady/b33-213-481.png'],
  imageDescriptions: ['Rolka Brady B33-213-481 na uchwycie z paskiem białych satynowych etykiet StainerBondz 26,67 × 7,95 mm'],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'StainerBondz B-481' },
    { name: 'Typ materiału', value: 'poliester o wysokiej odporności chemicznej' },
    { name: 'Grubość', value: '0,0914 mm' },
    { name: 'Wykończenie', value: 'satynowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich' },
    { name: 'Temperatura pracy', value: 'od −80 do 130 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka, łaźnia wodna (100 °C)' },
    { name: 'Odporność', value: 'chemikalia, oleje, woda, płyny i warunki procesów laboratoryjnych (przy nadruku taśmą R6400)' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '26,67 × 7,95 / 26,67 × 6,35 mm, zależnie od wersji' },
    { name: 'Liczba sztuk w pudełku', value: '3000' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6400' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: STAINERBONDZ_481_BSP.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: STAINERBONDZ_481_BSP.map(([pn, , wys]) => ({
    partNumber: pn,
    name: `Brady ${pn} — 3000 etykiet 26,67 × ${wys} mm`,
    attributes: { Rozmiar: `26,67 × ${wys} mm, 3000 szt.` },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba sztuk w pudełku.\n\nObie wersje mają szerokość 26,67 mm i różnią się wysokością: 7,95 albo 6,35 mm.',
  },
  faq: [
    { question: 'Z jaką taśmą barwiącą etykiety B-481 są najbardziej odporne?', answer: 'Po zadrukowaniu taśmą z serii R6400 materiał wytrzymuje płyny i warunki procesów laboratoryjnych. Zaleca się B30-R6400.' },
    { question: 'W jakim zakresie temperatur pracuje materiał B-481?', answer: 'Od −80 do 130 °C. Znosi zamrażarkę i kąpiel w temperaturze 100 °C.' },
    { question: 'Jakie drukarki obsługują etykiety B33-213-481 i B33-199-481?', answer: 'Etykiety drukuje [Brady i3300](/produkt/brady-i3300). Obsługują je też starsze drukarki BBP33, i4311 i i5300.' },
  ],
  applications: ['Identyfikacja laboratoryjna z systemem BSP31', 'Oznaczenia odporne na chemikalia i oleje', 'Etykiety w szpitalach'],
}

// ---------------------------------------------------------------------------
// FreezerBondz do BBP33 i i3300: zestawy z krążkiem i same krążki na wieczka (cps-3079472)
// ---------------------------------------------------------------------------

// [PN, nr art., materiał, rozmiar, sztuk]
const FREEZERBONDZ_WIECZKA: [string, string, string, string, string][] = [
  ['B33-182-492', '143082', 'B-492', '25,4 × 12,7 mm + Ø 11,18 mm', '1500 zestawów'],
  ['B33-144-492', '142919', 'B-492', 'Ø 12,7 mm', '1500 etykiet'],
  ['B33-143-492', '142918', 'B-492', 'Ø 9,53 mm', '1500 etykiet'],
  ['B33-163-492', '143000', 'B-492', '25,4 × 9,53 mm + Ø 9,53 mm', '1500 zestawów'],
  ['B33-190-492', '134096', 'B-492', '41,28 × 15,24 mm + Ø 9,53 mm', '1500 zestawów'],
  ['B33-126-490', '142939', 'B-490', '22,86 × 12,7 mm + Ø 12,7 mm', '2500 zestawów'],
  ['B33-181-492', '143100', 'B-492', '25,4 × 12,7 mm + Ø 9,53 mm', '1500 zestawów'],
]

export const bradyB33FreezerBondzWieczka: Product = {
  ...wspolneB33,
  tags: ['healthcare'],
  id: 'brady-b33-182-492',
  slug: 'brady-b33-182-492',
  name: 'Etykiety i krążki kriogeniczne FreezerBondz na wieczka fiolek Brady B-492 i B-490 do drukarki i3300',
  seoTitle: 'Brady FreezerBondz B-492 — krążki na wieczka fiolek do i3300',
  seoDescription: 'Brady i3300: zestawy etykiet i krążki FreezerBondz B-492 i B-490 na wieczka fiolek, od −196 do 110 °C. PN: B33-182-492, B33-144-492, B33-126-490.',
  shortDescription: 'Brady B33-182-492 i sześć innych wersji FreezerBondz: zestawy etykiety z krążkiem oraz same krążki na wieczka fiolek z poliestru. Do drukarki Brady i3300.',
  description: 'Rodzina łączy zestawy etykiet z krążkami oraz same krążki na wieczka fiolek, wykonane z poliestru FreezerBondz. Zestaw ma prostokątną etykietę na ściankę naczynia i okrągły krążek na wieczko. Krążki samodzielne leżą po trzy albo po cztery w rzędzie. Sześć wersji wykonano z błyszczącego poliestru B-492 o grubości 0,081 mm, a jedną z matowego B-490 o grubości 0,065 mm. Biała folia ma trwały, agresywny klej akrylowy do niskich temperatur.\n\nNajmniejszy element to krążek Ø 9,53 mm, a największy zestaw ma etykietę 41,28 × 15,24 mm. Średnica krążka na wieczko wynosi 9,53, 11,18 lub 12,7 mm. Opakowanie mieści 1500 sztuk, a zestaw z materiału B-490 2500. Wersje dobrano do pojemników od 0,5 do 4 ml, a krążki samodzielne do fiolek 1,5 i 2 ml.\n\nZakres temperatur zaczyna się od −196 °C. Górna granica to 110 °C dla B-492 i 130 °C dla B-490. Zamrażarka oraz kąpiel o temperaturze 100 °C nie szkodzą etykiecie, podobnie jak chemikalia. Wieczko nie pozwala na zakładkę, dlatego ciekłego azotu nie zaleca się dla żadnej wersji z krążkiem, z wyjątkiem B33-144-492. Do nadruku zaleca się B30-R6400; wyjątek to B-490 z taśmą B30-R4300.',
  sameAs: 'https://www.brady.eu/labels/freezerbondz-labels-for-bbp33-i3300-printers-cps-3079472',
  images: [
    '/images/products/brady/b33-182-492.png',
    '/images/products/brady/b33-143-492.png',
    '/images/products/brady/b33-190-492.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-182-492 na uchwycie z paskiem białych zestawów: prostokątna etykieta i krążek na wieczko fiolki',
    'Rolka Brady B33-143-492 z okrągłymi krążkami Ø 9,53 mm ułożonymi w czterech rzędach',
    'Rolka Brady B33-190-492 z większymi zestawami etykiety 41,28 × 15,24 mm i krążka 9,53 mm',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka zestawów etykiet z krążkiem albo krążków na wieczka, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'FreezerBondz B-492 (B33-126-490: B-490)' },
    { name: 'Typ materiału', value: 'poliester' },
    { name: 'Grubość', value: '0,081 mm (B33-126-490: 0,065 mm)' },
    { name: 'Wykończenie', value: 'błyszczące (B33-126-490: matowe)' },
    { name: 'Klej', value: 'trwały, agresywny, akrylowy, do niskich temperatur; do powierzchni gładkich' },
    { name: 'Temperatura pracy', value: 'od −196 do 110 °C (B33-126-490: do 130 °C)' },
    { name: 'Temperatura naklejania', value: '−196 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka, łaźnia wodna (100 °C); ciekły azot tylko dla B33-144-492, z zakładką etykiety' },
    { name: 'Odporność', value: 'chemikalia, rozmazanie nadruku' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary', value: '25,4 × 12,7 mm z krążkiem Ø 11,18 mm / Ø 12,7 mm / Ø 9,53 mm / 25,4 × 9,53 mm z krążkiem Ø 9,53 mm / 41,28 × 15,24 mm z krążkiem Ø 9,53 mm / 22,86 × 12,7 mm z krążkiem Ø 12,7 mm / 25,4 × 12,7 mm z krążkiem Ø 9,53 mm, zależnie od wersji' },
    { name: 'Liczba sztuk w opakowaniu', value: '1500 (B33-126-490: 2500 zestawów)' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6400 (B33-126-490: B30-R4300)' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: FREEZERBONDZ_WIECZKA.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: FREEZERBONDZ_WIECZKA.map(([pn, , mat, rozmiar, szt]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${szt}: ${rozmiar}`,
    attributes: { Rozmiar: rozmiar, Materiał: mat, Sztuk: szt },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety i krążka na wieczko albo średnica samego krążka.\n\nZnak „+” oznacza zestaw: prostokątna etykieta na ściankę i okrągły krążek na wieczko. Średnica krążka to 9,53, 11,18 albo 12,7 mm.',
    Materiał: 'Rodzaj poliestru FreezerBondz.\n\nB-492 jest błyszczący, ma 0,081 mm i pracuje do 110 °C. B-490 jest matowy, ma 0,065 mm i pracuje do 130 °C.',
    Sztuk: 'Liczba elementów w opakowaniu.\n\nZestaw to etykieta z krążkiem. Wersje samych krążków liczy się w etykietach.',
  },
  faq: [
    { question: 'Który krążek wybrać na fiolkę 2 ml?', answer: 'Krążek Ø 12,7 mm, czyli B33-144-492. Leży po trzy w rzędzie, a opakowanie mieści 1500 sztuk.' },
    { question: 'Czy zestawy z krążkiem na wieczko nadają się do ciekłego azotu?', answer: 'Nie zaleca się tego, bo wieczko nie pozwala na zakładkę etykiety. Wyjątkiem jest krążek B33-144-492, który można naklejać na zamrożoną powierzchnię z zakładką.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet FreezerBondz na wieczka?', answer: 'Do wersji B-492 zaleca się B30-R6400, a do B33-126-490 taśmę B30-R4300. Wieczka drukuje [Brady i3300](/produkt/brady-i3300). Obsługują je też starsze drukarki BBP33, i4311 i i5300.' },
  ],
  applications: ['Wieczka fiolek i probówek', 'Zestawy etykiety i krążka na naczynia 0,5–4 ml', 'Próbki w zamrażarce'],
}

// ---------------------------------------------------------------------------
// Kolorowe etykiety poliestrowe B-494 (cps-4359542)
// ---------------------------------------------------------------------------

// [PN, nr art., kolor]
const KOLOROWE_494: [string, string, string][] = [
  ['B33-250-494-YL', '149782', 'Żółty i biały'],
  ['B33-250-494-GN', '149786', 'Zielony i biały'],
  ['B33-250-494-OR', '149785', 'Pomarańczowy i biały'],
  ['B33-250-494-RD', '149783', 'Czerwony i biały'],
  ['B33-250-494-BL', '149784', 'Niebieski i biały'],
  ['B33-250-494-PK', '149787', 'Różowy i biały'],
]

export const bradyB33Kolorowe494: Product = {
  ...wspolneB33,
  tags: ['healthcare'],
  id: 'brady-b33-250-494-yl',
  slug: 'brady-b33-250-494-yl',
  name: 'Kolorowe etykiety poliestrowe na fiolki i probówki Brady B-494 do drukarki i3300',
  seoTitle: 'Brady B-494 — kolorowe etykiety na fiolki i probówki do i3300',
  seoDescription: 'Brady i3300: kolorowe zestawy B-494 z poliestru, etykieta i krążek na wieczko, od −196 do 70 °C, 6 kolorów. PN: B33-250-494-YL, B33-250-494-RD.',
  shortDescription: 'Brady B33-250-494-YL i pięć innych kolorów zestawów B-494: etykieta z kolorowym oznaczeniem i krążek na wieczko fiolki z poliestru. Do drukarki Brady i3300.',
  description: 'B-494 to błyszczący poliester do identyfikacji próbek i śledzenia ich historii. Etykieta nie odpada od naczynia, a jej nadruk da się odczytać zarówno po kontakcie z odczynnikami, jak i po pobycie w ciekłym azocie. Kolorowe oznaczenie jest drukowane pod powierzchnią folii, więc kod barwny nie blednie ani się nie rozmazuje. Próbkę można rozpoznać szybko, także długo po wydruku. Zestaw obejmuje etykietę i okrągły krążek na wieczko fiolki.\n\nSześć wersji ma ten sam rozmiar. Etykieta ma 25,4 mm szerokości i 12,7 mm wysokości, Pole nadruku jest równie szerokie, ale ma 9,53 mm wysokości. Krążek ma średnicę 9,53 mm. Kolory oznaczenia to żółty, zielony, pomarańczowy, czerwony, niebieski i różowy, a pole nadruku pozostaje białe. Pudełko mieści 1500 zestawów, a rozmiar dobrano do probówek 2 ml.\n\nFolia ma 0,0762 mm grubości. Pracuje od −196 do 70 °C i znosi zamrażarkę, kąpiel w gorącej wodzie (100 °C) oraz ciekły azot. Jest odporna na chemikalia i rozmazanie. Kasetę z taśmą B30-R6400 trzeba dokupić.',
  sameAs: 'https://www.brady.eu/labels/b33-series-color-polyester-vial-tube-labels-cps-4359542',
  images: [
    '/images/products/brady/b33-250-494-yl.png',
    '/images/products/brady/b33-250-494-gn.png',
    '/images/products/brady/b33-250-494-rd.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-250-494-YL na uchwycie z paskiem etykiet z żółtym oznaczeniem i krążkami na wieczka fiolek',
    'Rolka Brady B33-250-494-GN z zielonym oznaczeniem na etykietach i krążkach',
    'Rolka Brady B33-250-494-RD z czerwonym oznaczeniem na etykietach i krążkach',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka zestawów: etykieta z kolorowym oznaczeniem i krążek na wieczko, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-494' },
    { name: 'Typ materiału', value: 'poliester, nadruk kolorowego oznaczenia pod powierzchnią' },
    { name: 'Grubość', value: '0,0762 mm' },
    { name: 'Wykończenie', value: 'błyszczące' },
    { name: 'Klej', value: 'trwały, akrylowy' },
    { name: 'Temperatura pracy', value: 'od −196 do 70 °C' },
    { name: 'Warunki pracy', value: 'zamrażarka, łaźnia wodna (100 °C), ciekły azot' },
    { name: 'Odporność', value: 'chemikalia, wysoka i niska temperatura, rozmazanie nadruku' },
    { name: 'Kolor', value: 'żółty, zielony, pomarańczowy, czerwony, niebieski lub różowy, z białym polem nadruku' },
    { name: 'Wymiary zestawu', value: 'etykieta 25,4 × 12,7 mm (pole nadruku 25,4 × 9,53 mm) i krążek Ø 9,53 mm' },
    { name: 'Liczba sztuk w pudełku', value: '1500 zestawów' },
    { name: 'Probówki', value: 'fiolki, probówki; pojemność 2 ml' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R6400' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: KOLOROWE_494.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: KOLOROWE_494.map(([pn, , kolor]) => ({
    partNumber: pn,
    name: `Brady ${pn} — 1500 zestawów, oznaczenie ${kolor.split(' i ')[0].toLowerCase()}e`.replace('Żółty', 'żółte'),
    attributes: { Kolor: kolor },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Kolor: 'Kolor oznaczenia na etykiecie i krążku.\n\nOznaczenie jest zadrukowane pod powierzchnią folii. Pole nadruku pozostaje białe.',
  },
  faq: [
    { question: 'Czy kolorowe oznaczenie na etykiecie B-494 wyblaknie?', answer: 'Nie. Kolor jest drukowany pod powierzchnią folii, więc nie blednie ani się nie rozmazuje. Etykieta zostaje czytelna po kontakcie z chemikaliami.' },
    { question: 'W jakim zakresie temperatur pracuje B-494?', answer: 'Od −196 do 70 °C. Folia znosi zamrażarkę, gorącą kąpiel (100 °C) i ciekły azot.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-494?', answer: 'Zaleca się taśmę barwiącą B30-R6400. Etykiety drukuje [Brady i3300](/produkt/brady-i3300). Obsługują je też starsze drukarki BBP33, i4311 i i5300.' },
  ],
  applications: ['Kolorowe kodowanie próbek w probówkach 2 ml', 'Fiolki z oznaczonym wieczkiem', 'Próbki przechowywane w ciekłym azocie'],
}

// ---------------------------------------------------------------------------
// Etykiety ze wskaźnikiem sterylizacji B-7425-AC (cps-3079476)
// ---------------------------------------------------------------------------

// [PN, nr art., etykieta, pole nadruku, sztuk]
const STERYLIZACJA_7425_AC: [string, string, string, string, string][] = [
  ['B33-235-7425-AC', '149261', '38,1 × 25,4 mm', '38,1 × 19,05 mm', '1250'],
  ['B33-137-7425-AC', '149262', '50,8 × 25,4 mm', '50,8 × 19,05 mm', '1500'],
]

export const bradyB33Sterylizacja7425: Product = {
  ...wspolneB33,
  tags: ['healthcare'],
  id: 'brady-b33-235-7425-ac',
  slug: 'brady-b33-235-7425-ac',
  name: 'Etykiety polipropylenowe ze wskaźnikiem sterylizacji parowej Brady B-7425-AC do drukarki i3300',
  seoTitle: 'Brady B-7425-AC — etykiety ze wskaźnikiem sterylizacji, i3300',
  seoDescription: 'Brady i3300: etykiety B-7425-AC z polipropylenu ze wskaźnikiem sterylizacji parowej STERILIZED, 38,1 i 50,8 mm. PN: B33-235-7425-AC, B33-137-7425-AC.',
  shortDescription: 'Brady B33-235-7425-AC i B33-137-7425-AC to polipropylenowe etykiety z nagłówkiem, który po sterylizacji parowej pokazuje napis STERILIZED. Do drukarki Brady i3300.',
  description: 'B-7425-AC to polipropylenowa etykieta wskazująca sterylizację parową. Ma fabrycznie zadrukowany nagłówek, na którym po działaniu warunków autoklawu pojawia się napis STERILIZED. Etykieta pomaga śledzić próbki, prowadzić ewidencję zapasów oraz oznaczać materiały laboratoryjne wymagające sterylizacji. Oznacza fiolki, probówki, stojaki i kolby. Klej akrylowy przylega do stali nierdzewnej, szkła i polipropylenu.\n\nDostępne są dwa rozmiary. Mniejsza etykieta ma 38,1 mm szerokości i 25,4 mm wysokości, a rolka mieści 1250 sztuk. Większa ma 50,8 mm szerokości, taką samą wysokość i 1500 sztuk na rolce. W obu pole nadruku ma 19,05 mm wysokości i tę samą szerokość co etykieta. Mniejszy rozmiar dobrano do pojemników 4 ml, większy do 8 ml.\n\nBiała folia z polipropylenu ma powierzchnię matową i 0,102 mm grubości. Dolny limit pracy to −80 °C, górny 70 °C. Etykieta znosi autoklaw, zamrażarkę oraz kąpiel w gorącej wodzie, a także chemikalia i rozpuszczalniki. Nadruk nie rozmazuje się. Wydruk wykonuje taśma barwiąca B30-R4300 z osobnej kasety. Etykietę nadrukowuje termotransfer w drukarce i3300, a także w modelach BBP33, i4311 i i5300.',
  sameAs: 'https://www.brady.eu/labels/sterilisation-indicating-labels-for-bbp33-i3300-printers-cps-3079476',
  images: [
    '/images/products/brady/b33-235-7425-ac.png',
    '/images/products/brady/b33-137-7425-ac.png',
  ],
  imageDescriptions: [
    'Rolka Brady B33-235-7425-AC na uchwycie z paskiem białych etykiet 38,1 × 25,4 mm ze wskaźnikiem sterylizacji',
    'Rolka Brady B33-137-7425-AC z szerszymi etykietami 50,8 × 25,4 mm ze wskaźnikiem sterylizacji',
  ],
  specifications: [
    { name: 'Typ', value: 'Rolka etykiet wykrawanych ze wskaźnikiem sterylizacji parowej, bez taśmy barwiącej' },
    { name: 'Materiał', value: 'B-7425-AC' },
    { name: 'Typ materiału', value: 'polipropylen z nagłówkiem wskazującym sterylizację parową (napis STERILIZED)' },
    { name: 'Grubość', value: '0,102 mm' },
    { name: 'Wykończenie', value: 'matowe' },
    { name: 'Klej', value: 'trwały, akrylowy; do powierzchni gładkich: stal nierdzewna, szkło, polipropylen' },
    { name: 'Temperatura pracy', value: 'od −80 do 70 °C' },
    { name: 'Warunki pracy', value: 'autoklaw, zamrażarka, łaźnia wodna (100 °C)' },
    { name: 'Odporność', value: 'chemikalia, rozpuszczalniki, zimno, wysoka i niska temperatura, rozmazanie nadruku' },
    { name: 'Kolor', value: 'biały' },
    { name: 'Wymiary etykiety', value: '38,1 × 25,4 / 50,8 × 25,4 mm, zależnie od wersji' },
    { name: 'Pole nadruku', value: '38,1 × 19,05 / 50,8 × 19,05 mm, zależnie od wersji' },
    { name: 'Liczba sztuk na rolce', value: '1250 albo 1500, zależnie od rozmiaru' },
    { name: 'Zalecana taśma barwiąca', value: 'B30-R4300' },
    { name: 'Zgodne drukarki', value: 'i3300, BBP33, i4311, i5300' },
    { name: 'Numery artykułów Brady', value: STERYLIZACJA_7425_AC.map(([pn, art]) => `${pn}: ${art}`).join('; ') },
  ],
  variants: STERYLIZACJA_7425_AC.map(([pn, , etykieta, pole, szt]) => ({
    partNumber: pn,
    name: `Brady ${pn} — ${szt} etykiet ${etykieta} ze wskaźnikiem sterylizacji`,
    attributes: { Rozmiar: `${etykieta}, ${szt} szt.`, 'Pole nadruku': pole },
    availability: 'unavailable' as const,
  })),
  variantAttributeTooltips: {
    Rozmiar: 'Wymiary etykiety (szerokość × wysokość) i liczba sztuk na rolce.\n\nEtykieta 38,1 × 25,4 mm ma 1250 sztuk na rolce, a 50,8 × 25,4 mm 1500 sztuk.',
    'Pole nadruku': 'Część etykiety przeznaczona na nadruk (szerokość × wysokość).\n\nWysokość pola wynosi 19,05 mm w obu wersjach. Resztę etykiety zajmuje nagłówek wskaźnika.',
  },
  faq: [
    { question: 'Co pokazuje nagłówek etykiety B-7425-AC?', answer: 'Po działaniu warunków autoklawu pojawia się na nim napis STERILIZED. Etykieta wskazuje sterylizację parową.' },
    { question: 'Do jakich powierzchni przylega etykieta B-7425-AC?', answer: 'Do stali nierdzewnej, szkła i polipropylenu. Pracuje od −80 do 70 °C i znosi zamrażarkę.' },
    { question: 'Jaką taśmę barwiącą zamówić do etykiet B-7425-AC?', answer: 'Zaleca się taśmę barwiącą B30-R4300. Etykiety drukuje [Brady i3300](/produkt/brady-i3300). Obsługują je też starsze drukarki BBP33, i4311 i i5300.' },
  ],
  applications: ['Fiolki, probówki i kolby po sterylizacji parowej', 'Śledzenie próbek i ewidencja zapasów', 'Oznaczanie stojaków i materiałów laboratoryjnych'],
}

export const bradyB33Lab: Product[] = [bradyB33Pcr492, bradyB33Poliester488, bradyB33Polipropylen7425, bradyB33FreezerBondz490, bradyB33FreezerBondz492, bradyB33StainerBondz481, bradyB33PolipropylenWieczko7425, bradyB33Nylon499Wieczko, bradyB33StainerBondz481Waskie, bradyB33FreezerBondzWieczka, bradyB33Kolorowe494, bradyB33Sterylizacja7425]

export const bradyB33LabSekcje: Record<string, 'przewody' | 'elektronika' | 'lab' | 'ogolne'> = {
  'brady-b33-289-492-wt': 'lab',
  'brady-b33-195-488': 'lab',
  'brady-b33-151-7425': 'lab',
  'brady-b33-156-490': 'lab',
  'brady-b33-180-492': 'lab',
  'brady-b33-194-481': 'lab',
  'brady-b33-251-7425': 'lab',
  'brady-b33-126-499': 'lab',
  'brady-b33-213-481': 'lab',
  'brady-b33-182-492': 'lab',
  'brady-b33-250-494-yl': 'lab',
  'brady-b33-235-7425-ac': 'lab',
}
