import type { Product, ProductSpecification, ProductVariant } from './products'

/**
 * Taśmy termotransferowe SATO: 8 serii (linie Value, Flex, Flow), 61 rozmiarów.
 *
 * Parametry serii z kart technicznych SATO (2025) i katalogu taśm SATO 2026 (PL).
 * Rozmiary, nawój, gilza i liczba rolek w kartonie z opisów pozycji w dystrybucji (31.10.2026).
 * Rolki 300–800 m mają gilzę 1″ (25,4 mm), także tam, gdzie opis pozycji jej nie podaje:
 * żadna drukarka SATO nie przyjmuje rolki 300 m na gilzie ½″.
 *
 * Strona rodzica (/produkt/sato-…) przekierowuje na stronę serii, a każdy rozmiar ma
 * własną kartę /produkt/[slug]/[rozmiar]/[PN].
 */

type Nawoj = 'IN' | 'OUT'

function v(partNumber: string, szerokoscMm: number, dlugoscM: number, nawoj: Nawoj, gilza: '12,7 mm' | '25,4 mm', rolek: number): ProductVariant {
  return {
    partNumber,
    name: `${szerokoscMm} mm × ${dlugoscM} m, ${nawoj}`,
    availability: 'on-order',
    attributes: {
      'Szerokość': `${szerokoscMm} mm`,
      'Długość': `${dlugoscM} m`,
      'Nawój': nawoj,
      'Rdzeń': gilza,
      'Kolor': 'Czarny',
      'Rolek w opakowaniu': String(rolek),
    },
  }
}

const KATALOG: Product['downloads'][number] = {
  name: 'Katalog taśm SATO 2026 (PL)',
  type: 'pdf',
  url: '/datasheets/sato-ribbons-catalogue-pl.pdf',
  size: '2,9 MB',
}

function karta(seria: string, plik: string, rozmiar: string): Product['downloads'][number] {
  return { name: `Karta techniczna SATO ${seria} (EN)`, type: 'datasheet', url: `/datasheets/${plik}`, size: rozmiar }
}

const ZDJECIE = '/images/sato-ribbons/sato-tasmy-termotransferowe.webp'

const ATESTY_STANDARD = 'REACH/SVHC 1907/2006/WE, kontakt z żywnością UE 1935/2004/WE i FDA (USA), RoHS 2011/65/UE, California Proposition 65, bez halogenów wg IEC 61249-2-21:2003'

function wspolne(typ: 'woskowe' | 'woskowo-zywiczne' | 'zywiczne'): Pick<Product, 'categoryId' | 'subcategoryIds' | 'manufacturerId' | 'images' | 'availability' | 'isNew' | 'isBestseller' | 'compatibleAccessories' | 'createdAt'> {
  return {
    categoryId: 'materialy-eksploatacyjne',
    subcategoryIds: ['tasmy-termotransferowe', 'tasmy-termotransferowe-sato', `tasmy-termotransferowe-${typ}`],
    manufacturerId: 'sato',
    images: [ZDJECIE],
    availability: 'on-order',
    isNew: true,
    isBestseller: false,
    compatibleAccessories: [],
    createdAt: '2026-10-31',
  }
}

function spec(name: string, value: string): ProductSpecification {
  return { name, value }
}

export const satoRibbonProducts: Product[] = [
  /* ─────────────── WOSKOWE ─────────────── */
  {
    id: 'sato-swx85',
    slug: 'sato-swx85',
    name: 'Taśma termotransferowa SATO SWX85',
    shortDescription: 'Taśma woskowa SATO z linii Value do etykiet papierowych. Druk do 400 mm/s, folia PET 4,5 μm, cała taśma poniżej 8 μm. Linia Value ma najniższy koszt etykiety w ofercie taśm SATO.',
    description: `## Taśma woskowa do papieru

SATO SWX85 to taśma woskowa z linii Value. Drukuje na papierze powlekanym i niepowlekanym. Służy do etykiet wysyłkowych, magazynowych, półkowych i skrzyniowych w dużych nakładach.

## Parametry techniczne

Folia nośna PET ma grubość 4,5 μm, a cała taśma poniżej 8 μm. Barwnik topi się w temperaturze 65°C. Maksymalna prędkość druku wynosi 400 mm/s (16 ips), a gęstość optyczna nadruku 2,1 ODR. Taśma ma warstwę antystatyczną.

## Ograniczenia

Nadruk woskowy ma niską odporność na ścieranie i nie jest odporny na rozpuszczalniki. Do etykiet foliowych i do kontaktu z chemikaliami służy taśma żywiczna SRS85 lub SRS100.

## Rozmiary

4 rozmiary: szerokość 83, 110 i 154 mm, długość 300 i 450 m, gilza 25,4 mm (1″), nawój OUT.`,
    ...wspolne('woskowe'),
    tags: ['logistyka', 'magazyn', 'retail'],
    specifications: [
      spec('Typ taśmy', 'Woskowa (wax)'),
      spec('Linia SATO', 'Value'),
      spec('Kolor nadruku', 'Czarny'),
      spec('Maks. prędkość druku', '400 mm/s (16 ips)'),
      spec('Folia nośna', 'PET 4,5 μm'),
      spec('Grubość całkowita', 'Poniżej 8 μm'),
      spec('Temperatura topnienia barwnika', '65°C'),
      spec('Gęstość optyczna nadruku', '2,1 ODR'),
      spec('Współczynnik tarcia', 'Kd < 0,2'),
      spec('Warstwa antystatyczna', 'Tak'),
      spec('Podłoża (ocena SATO 0–5)', 'Papier powlekany 5, papier niepowlekany 4, materiały syntetyczne 1'),
      spec('Jakość nadruku (ocena SATO 0–5)', 'Kod kreskowy 0° 5, kod obrócony o 90° 1, małe znaki 2'),
      spec('Odporność (ocena SATO 0–5)', 'Ścieranie 1, rozpuszczalniki poniżej 1'),
      spec('Szerokość', '83, 110, 154 mm'),
      spec('Długość', '300, 450 m'),
      spec('Gilza', '25,4 mm (1″)'),
      spec('Nawój', 'OUT (warstwa barwiąca na zewnątrz)'),
      spec('Przechowywanie', 'Do 12 miesięcy, 5–35°C, wilgotność 20–80%'),
      spec('Atesty i zgodność', ATESTY_STANDARD),
      spec('Producent', 'SATO'),
    ],
    applications: [
      'Etykiety wysyłkowe i adresowe w transporcie i logistyce',
      'Etykiety magazynowe, półkowe i skrzyniowe',
      'Etykiety w handlu detalicznym',
      'Etykiety na opakowania żywności i napojów',
    ],
    variants: [
      v('Y59110300166', 83, 450, 'OUT', '25,4 mm', 10),
      v('Y59110300223', 110, 300, 'OUT', '25,4 mm', 10),
      v('Y59110300167', 110, 450, 'OUT', '25,4 mm', 10),
      v('Y59110300224', 154, 450, 'OUT', '25,4 mm', 10),
    ],
    downloads: [karta('SWX85', 'sato-swx85-datasheet-en.pdf', '0,2 MB'), KATALOG],
    seoTitle: 'SATO SWX85 — taśma woskowa Value do papieru',
    seoDescription: 'Taśma woskowa SATO SWX85 (linia Value) do etykiet papierowych: druk do 400 mm/s, folia PET 4,5 μm, szerokość 83–154 mm, rolki 300 i 450 m, gilza 1″.',
  },
  {
    id: 'sato-swx95',
    slug: 'sato-swx95',
    name: 'Taśma termotransferowa SATO SWX95',
    shortDescription: 'Taśma woskowa SATO z linii Flex do papieru gładkiego i szorstkiego. Druk do 400 mm/s, gęstość nadruku 2 ODR. 13 rozmiarów od 35 do 154 mm, rolki 74–450 m, nawój IN i OUT.',
    description: `## Taśma woskowa do różnych papierów

SATO SWX95 to taśma woskowa z linii Flex. Drukuje na papierach od szorstkich do gładkich: na papierze powlekanym i niepowlekanym ma najwyższą ocenę SATO (5 na 5). Daje ciemny nadruk kodów kreskowych i tekstu przy dużych nakładach.

## Parametry techniczne

Folia nośna PET ma grubość 4,5 μm, a cała taśma poniżej 9 μm. Barwnik topi się w temperaturze 65°C. Maksymalna prędkość druku wynosi 400 mm/s (16 ips), a gęstość optyczna nadruku 2 ODR. Taśma ma warstwę antystatyczną.

## Rozmiary do drukarek biurkowych i przemysłowych

Rolki 74 i 100 m na gilzie 12,7 mm (½″) pasują do drukarek biurkowych, np. SATO CT4-LX. Rolki 300 i 450 m na gilzie 25,4 mm (1″) pasują do drukarek przemysłowych. Seria ma 13 rozmiarów o szerokości 35–154 mm, z nawojem OUT, a w szerokościach 110 i 154 mm także IN.

## Ograniczenia

Nadruk woskowy ma niską odporność na ścieranie i rozpuszczalniki. Do etykiet foliowych służy taśma woskowo-żywiczna SWR100 lub żywiczna SRS100.`,
    ...wspolne('woskowe'),
    tags: ['logistyka', 'magazyn', 'retail'],
    specifications: [
      spec('Typ taśmy', 'Woskowa (wax)'),
      spec('Linia SATO', 'Flex'),
      spec('Kolor nadruku', 'Czarny'),
      spec('Maks. prędkość druku', '400 mm/s (16 ips)'),
      spec('Folia nośna', 'PET 4,5 μm'),
      spec('Grubość całkowita', 'Poniżej 9 μm'),
      spec('Temperatura topnienia barwnika', '65°C'),
      spec('Gęstość optyczna nadruku', '2 ODR'),
      spec('Współczynnik tarcia', 'Kd < 0,2'),
      spec('Warstwa antystatyczna', 'Tak'),
      spec('Podłoża (ocena SATO 0–5)', 'Papier powlekany 5, papier niepowlekany 5, materiały syntetyczne 1'),
      spec('Jakość nadruku (ocena SATO 0–5)', 'Kod kreskowy 0° 5, kod obrócony o 90° 2, małe znaki 3'),
      spec('Odporność (ocena SATO 0–5)', 'Ścieranie 1, rozpuszczalniki poniżej 1'),
      spec('Szerokość', '35, 45, 65, 83, 110, 154 mm'),
      spec('Długość', '74, 100, 300, 450 m'),
      spec('Gilza', '12,7 mm (½″) w rolkach 74 i 100 m; 25,4 mm (1″) w rolkach 300 i 450 m'),
      spec('Nawój', 'OUT; IN w rozmiarach 110 × 300, 110 × 450 i 154 × 450'),
      spec('Przechowywanie', 'Do 12 miesięcy, 5–35°C, wilgotność 20–80%'),
      spec('Atesty i zgodność', ATESTY_STANDARD),
      spec('Producent', 'SATO'),
    ],
    applications: [
      'Etykiety logistyczne, wysyłkowe i magazynowe w dużych nakładach',
      'Etykiety cenowe i półkowe w handlu detalicznym',
      'Etykiety na opakowania żywności i napojów',
      'Druk na drukarkach biurkowych (rolki 74 i 100 m) i przemysłowych (300 i 450 m)',
    ],
    variants: [
      v('Y59110300228', 35, 300, 'OUT', '25,4 mm', 25),
      v('Y59110300229', 45, 450, 'OUT', '25,4 mm', 50),
      v('Y59110300225', 65, 74, 'OUT', '12,7 mm', 25),
      v('Y59110300230', 65, 450, 'OUT', '25,4 mm', 10),
      v('Y59110300231', 83, 450, 'OUT', '25,4 mm', 10),
      v('Y59110300226', 110, 74, 'OUT', '12,7 mm', 25),
      v('Y59110300227', 110, 100, 'OUT', '12,7 mm', 25),
      v('Y59110300233', 110, 300, 'OUT', '25,4 mm', 10),
      v('Y59110300232', 110, 300, 'IN', '25,4 mm', 10),
      v('Y59110300235', 110, 450, 'OUT', '25,4 mm', 10),
      v('Y59110300234', 110, 450, 'IN', '25,4 mm', 10),
      v('Y59110300237', 154, 450, 'OUT', '25,4 mm', 10),
      v('Y59110300236', 154, 450, 'IN', '25,4 mm', 10),
    ],
    downloads: [karta('SWX95', 'sato-swx95-datasheet-en.pdf', '0,2 MB'), KATALOG],
    seoTitle: 'SATO SWX95 — taśma woskowa Flex do papieru',
    seoDescription: 'Taśma woskowa SATO SWX95 (linia Flex): papier gładki i szorstki, druk do 400 mm/s, 13 rozmiarów 35–154 mm, rolki 74–450 m, gilza ½″ lub 1″, nawój IN i OUT.',
  },
  {
    id: 'sato-swx100',
    slug: 'sato-swx100',
    name: 'Taśma termotransferowa SATO SWX100',
    shortDescription: 'Taśma SATO z linii Flex: wosk wzbogacony żywicą do papieru powlekanego i niepowlekanego oraz etykiet RFID. Warstwy antystatyczna i PrintheadSaver chronią głowicę. Druk do 250 mm/s.',
    description: `## Wosk wzbogacony żywicą

SATO SWX100 to taśma z linii Flex o składzie wosku wzbogaconego żywicą. Drukuje na papierze powlekanym i niepowlekanym oraz na papierowych metkach. Nadaje się do etykiet RFID. Ma lepszą odporność na ścieranie niż taśmy SWX85 i SWX95 (ocena SATO ok. 2 zamiast 1) oraz na rozpuszczalniki (1 zamiast poniżej 1).

## Ochrona głowicy

Taśma ma warstwę antystatyczną i powłokę PrintheadSaver. Obie warstwy stabilizują druk i chronią głowicę drukującą. Barwnik o wysokiej czułości daje dobrą jakość nadruku już przy niskiej energii głowicy.

## Parametry techniczne

Folia nośna PET ma grubość 4,5 μm, a cała taśma poniżej 8 μm. Barwnik topi się w temperaturze 70°C. Maksymalna prędkość druku wynosi 250 mm/s (10 ips), a gęstość optyczna nadruku ponad 1,90 ODR. Taśmę należy przechowywać w temperaturze 5–30°C.

## Rozmiary

8 rozmiarów o szerokości 45–154 mm, rolki 300 i 450 m, gilza 25,4 mm (1″), nawój OUT lub IN.`,
    ...wspolne('woskowe'),
    tags: ['logistyka', 'magazyn', 'retail'],
    specifications: [
      spec('Typ taśmy', 'Woskowa wzbogacona żywicą (resin-enhanced wax)'),
      spec('Linia SATO', 'Flex'),
      spec('Kolor nadruku', 'Czarny'),
      spec('Maks. prędkość druku', '250 mm/s (10 ips)'),
      spec('Folia nośna', 'PET 4,5 μm'),
      spec('Grubość całkowita', 'Poniżej 8 μm'),
      spec('Temperatura topnienia barwnika', '70°C'),
      spec('Gęstość optyczna nadruku', 'Ponad 1,90 ODR'),
      spec('Warstwy ochronne', 'Antystatyczna i PrintheadSaver'),
      spec('Etykiety RFID', 'Tak'),
      spec('Podłoża (ocena SATO 0–5)', 'Papier powlekany 5, papier niepowlekany 4, materiały syntetyczne 2'),
      spec('Jakość nadruku (ocena SATO 0–5)', 'Kod kreskowy 0° 5, kod obrócony o 90° 3, małe znaki 3'),
      spec('Odporność (ocena SATO 0–5)', 'Ścieranie ok. 2, rozpuszczalniki 1'),
      spec('Szerokość', '45, 55, 65, 83, 110, 154 mm'),
      spec('Długość', '300, 450 m'),
      spec('Gilza', '25,4 mm (1″)'),
      spec('Nawój', 'OUT; IN w rozmiarach 55 × 300, 110 × 300 i 110 × 450'),
      spec('Przechowywanie', 'Do 12 miesięcy, 5–30°C, wilgotność 20–80%'),
      spec('Atesty i zgodność', 'REACH, kontakt z żywnością ISEGA, RoHS 3, bez halogenów, bez PFAS, limity olejów mineralnych, certyfikat UL'),
      spec('Producent', 'SATO'),
    ],
    applications: [
      'Etykiety i metki papierowe w logistyce i magazynie',
      'Etykiety RFID z papierową warstwą zadruku',
      'Etykiety w handlu detalicznym',
      'Etykiety na opakowania żywności i napojów',
    ],
    variants: [
      v('Y59110100016', 45, 450, 'OUT', '25,4 mm', 24),
      v('Y59110100017', 55, 300, 'IN', '25,4 mm', 15),
      v('Y59110100020', 65, 450, 'OUT', '25,4 mm', 12),
      v('Y59110100024', 83, 450, 'OUT', '25,4 mm', 12),
      v('Y59110100028', 110, 300, 'IN', '25,4 mm', 15),
      v('Y59110100032', 110, 450, 'OUT', '25,4 mm', 12),
      v('Y59110100031', 110, 450, 'IN', '25,4 mm', 12),
      v('Y59110100038', 154, 450, 'OUT', '25,4 mm', 12),
    ],
    downloads: [karta('SWX100', 'sato-swx100-datasheet-en.pdf', '0,2 MB'), KATALOG],
    seoTitle: 'SATO SWX100 — wosk wzbogacony żywicą, linia Flex',
    seoDescription: 'Taśma SATO SWX100 (linia Flex): wosk wzbogacony żywicą do papieru i etykiet RFID, warstwa PrintheadSaver, druk do 250 mm/s, 45–154 mm, rolki 300 i 450 m.',
  },
  {
    id: 'sato-swx-max',
    slug: 'sato-swx-max',
    name: 'Taśma termotransferowa SATO SWX-MAX',
    shortDescription: 'Taśma woskowa SATO z linii Flow na cienkiej folii PET 3,35 μm. Rolka 800 m ma średnicę standardowej rolki 600 m: do 40% dłuższy druk bez wymiany taśmy i 26% mniej tworzywa.',
    description: `## Dłuższa rolka w tej samej średnicy

SATO SWX-MAX to taśma woskowa z linii Flow. Folia nośna PET ma tylko 3,35 μm, a cała taśma poniżej 7 μm. Dlatego rolka 800 m ma średnicę standardowej rolki 600 m i pasuje do drukarek o limicie 600 m. Drukarka pracuje do 40% dłużej bez wymiany taśmy.

## Mniej odpadów

Według SATO taśma zużywa o 26% mniej tworzywa PET niż taśma o standardowej folii, a ślad węglowy jest mniejszy o 830 g. Taśma nie zawiera rozpuszczalników, a barwnik ma atest kompostowalności. Mniej wymian oznacza też mniej pustych gilz i opakowań.

## Parametry techniczne

Barwnik topi się w temperaturze 65°C. Maksymalna prędkość druku wynosi 400 mm/s (16 ips), a gęstość optyczna nadruku 2,1 ODR. Na papierze powlekanym i niepowlekanym taśma ma ocenę SATO 5 na 5.

## Rozmiary

Rolki 800 m z nawojem OUT o szerokości 83, 110 i 154 mm oraz rolki 450 m z nawojem IN o szerokości 154 i 273 mm. Gilza 25,4 mm (1″).`,
    ...wspolne('woskowe'),
    tags: ['logistyka', 'magazyn', 'produkcja'],
    specifications: [
      spec('Typ taśmy', 'Woskowa (wax)'),
      spec('Linia SATO', 'Flow'),
      spec('Kolor nadruku', 'Czarny'),
      spec('Maks. prędkość druku', '400 mm/s (16 ips)'),
      spec('Folia nośna', 'PET 3,35 μm'),
      spec('Grubość całkowita', 'Poniżej 7 μm'),
      spec('Temperatura topnienia barwnika', '65°C'),
      spec('Gęstość optyczna nadruku', '2,1 ODR'),
      spec('Współczynnik tarcia', 'Kd < 0,2'),
      spec('Warstwa antystatyczna', 'Tak'),
      spec('Długość rolki a średnica', 'Rolka 800 m ma średnicę standardowej rolki 600 m'),
      spec('Środowisko', 'Bez rozpuszczalników; o 26% mniej PET; ślad CO2 mniejszy o 830 g niż taśma standardowa'),
      spec('Podłoża (ocena SATO 0–5)', 'Papier powlekany 5, papier niepowlekany 5, materiały syntetyczne 1'),
      spec('Jakość nadruku (ocena SATO 0–5)', 'Kod kreskowy 0° 5, kod obrócony o 90° 2, małe znaki 3'),
      spec('Odporność (ocena SATO 0–5)', 'Ścieranie 1, rozpuszczalniki poniżej 1'),
      spec('Szerokość', '83, 110, 154, 273 mm'),
      spec('Długość', '450, 800 m'),
      spec('Gilza', '25,4 mm (1″)'),
      spec('Nawój', 'OUT w rolkach 800 m; IN w rolkach 450 m'),
      spec('Przechowywanie', 'Do 12 miesięcy, 5–35°C, wilgotność 20–80%'),
      spec('Atesty i zgodność', `${ATESTY_STANDARD}, kompostowalność barwnika`),
      spec('Producent', 'SATO'),
    ],
    applications: [
      'Przemysłowe linie druku i moduły drukujące w pracy ciągłej',
      'Automatyczne etykietowanie z małą liczbą przestojów',
      'Etykiety logistyczne, wysyłkowe i magazynowe w dużych nakładach',
      'Ograniczenie odpadów taśmy i opakowań',
    ],
    variants: [
      v('Y59110300238', 83, 800, 'OUT', '25,4 mm', 10),
      v('Y59110300239', 110, 800, 'OUT', '25,4 mm', 5),
      v('Y59110300270', 154, 450, 'IN', '25,4 mm', 5),
      v('Y59110300240', 154, 800, 'OUT', '25,4 mm', 5),
      v('Y59110300271', 273, 450, 'IN', '25,4 mm', 5),
    ],
    downloads: [karta('SWX-MAX', 'sato-swx-max-datasheet-en.pdf', '0,2 MB'), KATALOG],
    seoTitle: 'SATO SWX-MAX — taśma woskowa Flow, rolka 800 m',
    seoDescription: 'Taśma woskowa SATO SWX-MAX (linia Flow): folia PET 3,35 μm, rolka 800 m w średnicy rolki 600 m, do 40% dłuższy druk, 26% mniej PET, druk do 400 mm/s.',
  },

  /* ─────────────── WOSKOWO-ŻYWICZNE ─────────────── */
  {
    id: 'sato-swr85',
    slug: 'sato-swr85',
    name: 'Taśma termotransferowa SATO SWR85',
    shortDescription: 'Taśma woskowo-żywiczna SATO z linii Value. Wysoka odporność na rozmazywanie, ostry nadruk na papierze i części materiałów syntetycznych. Druk do 400 mm/s.',
    description: `## Wosk-żywica w linii Value

SATO SWR85 to taśma woskowo-żywiczna z linii Value. Nadruk dobrze znosi rozmazywanie i jest ostry, także przy małych znakach. Taśma drukuje na papierze powlekanym i niepowlekanym (ocena SATO 5 na 5) oraz na części materiałów syntetycznych (ocena 3).

## Parametry techniczne

Folia nośna PET ma grubość 4,5 μm, a cała taśma poniżej 9 μm. Barwnik topi się w temperaturze 65°C. Maksymalna prędkość druku wynosi 400 mm/s (16 ips), a gęstość optyczna nadruku 2 ODR. Odporność na ścieranie ma ocenę SATO 2, czyli wyższą niż taśmy woskowe.

## Zastosowania

Gastronomia (HoReCa), produkcja, opieka zdrowotna, transport i logistyka, handel, motoryzacja i ogrodnictwo. Typowe etykiety to oznaczenia pojemników magazynowych, metki odzieżowe i etykiety roślin.

## Rozmiary

4 rozmiary: szerokość 83, 110 i 154 mm, długość 300 i 450 m, gilza 25,4 mm (1″), nawój OUT.`,
    ...wspolne('woskowo-zywiczne'),
    tags: ['produkcja', 'logistyka', 'retail', 'healthcare'],
    specifications: [
      spec('Typ taśmy', 'Woskowo-żywiczna (wax/resin)'),
      spec('Linia SATO', 'Value'),
      spec('Kolor nadruku', 'Czarny'),
      spec('Maks. prędkość druku', '400 mm/s (16 ips)'),
      spec('Folia nośna', 'PET 4,5 μm'),
      spec('Grubość całkowita', 'Poniżej 9 μm'),
      spec('Temperatura topnienia barwnika', '65°C'),
      spec('Gęstość optyczna nadruku', '2 ODR'),
      spec('Współczynnik tarcia', 'Kd < 0,2'),
      spec('Warstwa antystatyczna', 'Tak'),
      spec('Podłoża (ocena SATO 0–5)', 'Papier powlekany 5, papier niepowlekany 5, materiały syntetyczne 3'),
      spec('Jakość nadruku (ocena SATO 0–5)', 'Kod kreskowy 0° 5, kod obrócony o 90° 3, małe znaki 3'),
      spec('Odporność (ocena SATO 0–5)', 'Ścieranie 2, rozpuszczalniki poniżej 1'),
      spec('Szerokość', '83, 110, 154 mm'),
      spec('Długość', '300, 450 m'),
      spec('Gilza', '25,4 mm (1″)'),
      spec('Nawój', 'OUT (warstwa barwiąca na zewnątrz)'),
      spec('Przechowywanie', 'Do 12 miesięcy, 5–35°C, wilgotność 20–80%'),
      spec('Atesty i zgodność', ATESTY_STANDARD),
      spec('Producent', 'SATO'),
    ],
    applications: [
      'Etykiety pojemników magazynowych i produkcyjnych',
      'Metki odzieżowe i etykiety tekstyliów',
      'Etykiety w gastronomii, opiece zdrowotnej i handlu',
      'Etykiety roślin w ogrodnictwie',
      'Etykiety w motoryzacji, transporcie i logistyce',
    ],
    variants: [
      v('Y59110300184', 83, 450, 'OUT', '25,4 mm', 10),
      v('Y59110300187', 110, 300, 'OUT', '25,4 mm', 10),
      v('Y59110300189', 110, 450, 'OUT', '25,4 mm', 10),
      v('Y59110300247', 154, 450, 'OUT', '25,4 mm', 10),
    ],
    downloads: [karta('SWR85', 'sato-swr85-datasheet-en.pdf', '0,2 MB'), KATALOG],
    seoTitle: 'SATO SWR85 — taśma woskowo-żywiczna Value',
    seoDescription: 'Taśma woskowo-żywiczna SATO SWR85 (linia Value): odporność na rozmazywanie, papier i część folii, druk do 400 mm/s, szerokość 83–154 mm, rolki 300 i 450 m.',
  },
  {
    id: 'sato-swr100',
    slug: 'sato-swr100',
    name: 'Taśma termotransferowa SATO SWR100',
    shortDescription: 'Taśma woskowo-żywiczna SATO z linii Flex. Małe znaki i kody obrócone o 90° mają ocenę SATO 4 na 5, więcej niż w SWR85. Folia PET 4 μm, druk do 300 mm/s, 16 rozmiarów.',
    description: `## Wosk-żywica do codziennego etykietowania

SATO SWR100 to taśma woskowo-żywiczna z linii Flex. Daje równą jakość i dużą gęstość nadruku. W ocenie SATO małe znaki i kody kreskowe obrócone o 90° mają 4 na 5, czyli więcej niż w SWR85. Odporność na ścieranie ma ocenę 3.

## Cieńsza folia

Folia nośna PET ma grubość 4 μm. Według SATO taśma zużywa dzięki temu o 12% mniej tworzywa. Cała taśma ma poniżej 9 μm, a barwnik topi się w temperaturze 77°C. Maksymalna prędkość druku wynosi 300 mm/s (12 ips), a gęstość optyczna nadruku 2,1 ODR.

## Podłoża

Papier powlekany i niepowlekany (ocena SATO 5 na 5) oraz część materiałów syntetycznych (ocena 3). Taśma służy do etykiet w żywności, produkcji, opiece zdrowotnej, logistyce, handlu, motoryzacji i ogrodnictwie.

## Rozmiary

16 rozmiarów o szerokości 35–154 mm. Rolki 74 i 100 m na gilzie 12,7 mm (½″) do drukarek biurkowych, rolki 300–600 m na gilzie 25,4 mm (1″) do drukarek przemysłowych. Nawój OUT, a w szerokościach 110 i 154 mm także IN.`,
    ...wspolne('woskowo-zywiczne'),
    tags: ['produkcja', 'logistyka', 'retail', 'healthcare'],
    specifications: [
      spec('Typ taśmy', 'Woskowo-żywiczna (wax/resin)'),
      spec('Linia SATO', 'Flex'),
      spec('Kolor nadruku', 'Czarny'),
      spec('Maks. prędkość druku', '300 mm/s (12 ips)'),
      spec('Folia nośna', 'PET 4 μm'),
      spec('Grubość całkowita', 'Poniżej 9 μm'),
      spec('Temperatura topnienia barwnika', '77°C'),
      spec('Gęstość optyczna nadruku', '2,1 ODR'),
      spec('Współczynnik tarcia', 'Kd < 0,2'),
      spec('Warstwa antystatyczna', 'Tak'),
      spec('Podłoża (ocena SATO 0–5)', 'Papier powlekany 5, papier niepowlekany 5, materiały syntetyczne 3'),
      spec('Jakość nadruku (ocena SATO 0–5)', 'Kod kreskowy 0° 5, kod obrócony o 90° 4, małe znaki 4'),
      spec('Odporność (ocena SATO 0–5)', 'Ścieranie ok. 3, rozpuszczalniki poniżej 1'),
      spec('Szerokość', '35, 45, 65, 83, 110, 154 mm'),
      spec('Długość', '74, 100, 300, 450, 600 m'),
      spec('Gilza', '12,7 mm (½″) w rolkach 74 i 100 m; 25,4 mm (1″) w rolkach 300–600 m'),
      spec('Nawój', 'OUT; IN w rozmiarach 110 × 300, 110 × 450 i 154 × 450'),
      spec('Przechowywanie', 'Do 12 miesięcy, 5–35°C, wilgotność 20–80%'),
      spec('Atesty i zgodność', ATESTY_STANDARD),
      spec('Producent', 'SATO'),
    ],
    applications: [
      'Etykiety produktów i opakowań w przemyśle spożywczym',
      'Etykiety produkcyjne i części w motoryzacji',
      'Etykiety w opiece zdrowotnej i laboratoriach',
      'Etykiety logistyczne i magazynowe z kodami obróconymi',
      'Etykiety roślin i metki w handlu',
    ],
    variants: [
      v('Y59110300250', 35, 300, 'OUT', '25,4 mm', 25),
      v('Y59110300251', 45, 450, 'OUT', '25,4 mm', 50),
      v('Y59110300248', 65, 74, 'OUT', '12,7 mm', 25),
      v('Y59110300252', 65, 450, 'OUT', '25,4 mm', 10),
      v('Y59110300253', 83, 450, 'OUT', '25,4 mm', 25),
      v('Y59110300254', 83, 600, 'OUT', '25,4 mm', 10),
      v('Y59110300249', 110, 74, 'OUT', '12,7 mm', 25),
      v('Y59110300203', 110, 100, 'OUT', '12,7 mm', 25),
      v('Y59110300208', 110, 300, 'OUT', '25,4 mm', 10),
      v('Y59110300207', 110, 300, 'IN', '25,4 mm', 10),
      v('Y59110300210', 110, 450, 'OUT', '25,4 mm', 25),
      v('Y59110300209', 110, 450, 'IN', '25,4 mm', 25),
      v('Y59110300211', 110, 600, 'OUT', '25,4 mm', 10),
      v('Y59110300255', 154, 450, 'OUT', '25,4 mm', 10),
      v('Y59110300256', 154, 450, 'IN', '25,4 mm', 10),
      v('Y59110300257', 154, 600, 'OUT', '25,4 mm', 5),
    ],
    downloads: [karta('SWR100', 'sato-swr100-datasheet-en.pdf', '0,2 MB'), KATALOG],
    seoTitle: 'SATO SWR100 — taśma woskowo-żywiczna Flex',
    seoDescription: 'Taśma woskowo-żywiczna SATO SWR100 (linia Flex): ostre małe znaki i kody 90°, folia PET 4 μm, druk do 300 mm/s, 16 rozmiarów 35–154 mm, rolki 74–600 m.',
  },

  /* ─────────────── ŻYWICZNE ─────────────── */
  {
    id: 'sato-srs85',
    slug: 'sato-srs85',
    name: 'Taśma termotransferowa SATO SRS85',
    shortDescription: 'Taśma żywiczna SATO z linii Value do materiałów syntetycznych (PET, PE, PP, PVC). Najwyższa odporność na ścieranie w ocenie SATO, certyfikat UL 969. Druk do 250 mm/s.',
    description: `## Żywica do trudnych zastosowań

SATO SRS85 to taśma żywiczna z linii Value. Drukuje na materiałach syntetycznych, np. PET, PE, PP i PVC (ocena SATO 5 na 5), oraz na papierze błyszczącym. Na papierze niepowlekanym nie należy jej stosować.

## Odporność nadruku

W ocenie SATO odporność na ścieranie wynosi 5 na 5, a na rozpuszczalniki 2. Nadruk ma najwyższą ocenę jakości kodów kreskowych w obu kierunkach i małych znaków. Taśma ma certyfikat UL 969, wymagany dla wielu etykiet znamionowych.

## Parametry techniczne

Folia nośna PET ma grubość 4,5 μm, a cała taśma poniżej 9 μm. Barwnik topi się w temperaturze 80°C. Maksymalna prędkość druku wynosi 250 mm/s (10 ips), a gęstość optyczna nadruku 2 ODR. Żywica wymaga wysokiej energii głowicy.

## Rozmiary

4 rozmiary: szerokość 60, 110 i 154 mm, długość 300 i 450 m, gilza 25,4 mm (1″), nawój OUT.`,
    ...wspolne('zywiczne'),
    tags: ['produkcja', 'outdoor', 'logistyka', 'healthcare'],
    specifications: [
      spec('Typ taśmy', 'Żywiczna (resin)'),
      spec('Linia SATO', 'Value'),
      spec('Kolor nadruku', 'Czarny'),
      spec('Maks. prędkość druku', '250 mm/s (10 ips)'),
      spec('Folia nośna', 'PET 4,5 μm'),
      spec('Grubość całkowita', 'Poniżej 9 μm'),
      spec('Temperatura topnienia barwnika', '80°C'),
      spec('Gęstość optyczna nadruku', '2 ODR'),
      spec('Współczynnik tarcia', 'Kd < 0,2'),
      spec('Warstwa antystatyczna', 'Tak'),
      spec('Podłoża (ocena SATO 0–5)', 'Materiały syntetyczne 5, papier powlekany 2, papier niepowlekany poniżej 1'),
      spec('Jakość nadruku (ocena SATO 0–5)', 'Kod kreskowy 0° 5, kod obrócony o 90° 5, małe znaki 5'),
      spec('Odporność (ocena SATO 0–5)', 'Ścieranie 5, rozpuszczalniki 2'),
      spec('Szerokość', '60, 110, 154 mm'),
      spec('Długość', '300, 450 m'),
      spec('Gilza', '25,4 mm (1″)'),
      spec('Nawój', 'OUT (warstwa barwiąca na zewnątrz)'),
      spec('Przechowywanie', 'Do 12 miesięcy, 5–35°C, wilgotność 20–80%'),
      spec('Atesty i zgodność', 'REACH/SVHC 1907/2006/WE, kontakt z żywnością UE 1935/2004/WE i FDA (USA), RoHS 2011/65/UE, California Proposition 65, UL 969'),
      spec('Producent', 'SATO'),
    ],
    applications: [
      'Etykiety na elektronikę i płytki PCB',
      'Etykiety znamionowe z wymaganiem UL 969',
      'Etykiety na pojemniki z chemikaliami',
      'Etykiety w motoryzacji, produkcji i opiece zdrowotnej',
      'Etykiety zewnętrzne na foliach syntetycznych',
    ],
    variants: [
      v('Y59110300260', 60, 450, 'OUT', '25,4 mm', 10),
      v('Y59110300261', 110, 300, 'OUT', '25,4 mm', 10),
      v('Y59110300262', 110, 450, 'OUT', '25,4 mm', 25),
      v('Y59110300263', 154, 450, 'OUT', '25,4 mm', 10),
    ],
    downloads: [karta('SRS85', 'sato-srs85-datasheet-en.pdf', '0,2 MB'), KATALOG],
    seoTitle: 'SATO SRS85 — taśma żywiczna Value, UL 969',
    seoDescription: 'Taśma żywiczna SATO SRS85 (linia Value) do folii PET, PE, PP i PVC: ścieranie 5/5 wg SATO, UL 969, druk do 250 mm/s, szerokość 60–154 mm, rolki 300 i 450 m.',
  },
  {
    id: 'sato-srs100',
    slug: 'sato-srs100',
    name: 'Taśma termotransferowa SATO SRS100',
    shortDescription: 'Taśma żywiczna SATO z linii Flex do materiałów syntetycznych. Odporność na rozpuszczalniki 3 na 5 w ocenie SATO, czyli więcej niż w SRS85. Certyfikat UL, druk do 300 mm/s.',
    description: `## Żywica Flex do folii syntetycznych

SATO SRS100 to taśma żywiczna z linii Flex. Drukuje na materiałach syntetycznych (ocena SATO 5 na 5) i na papierze błyszczącym. Na papierze niepowlekanym nie należy jej stosować.

## Odporność nadruku

W ocenie SATO odporność na ścieranie wynosi 5 na 5, a na rozpuszczalniki 3, czyli więcej niż w SRS85. Kody kreskowe w obu kierunkach i małe znaki mają ocenę 5. Taśma ma certyfikat UL oraz atest kontaktu z żywnością ISEGA.

## Parametry techniczne

Folia nośna PET ma grubość 4,5 μm, a cała taśma poniżej 9 μm. Barwnik topi się w temperaturze 100°C. Maksymalna prędkość druku wynosi 300 mm/s (12 ips). Taśmę należy przechowywać w temperaturze 5–30°C.

## Rozmiary

7 rozmiarów o szerokości 60–154 mm, rolki 110–450 m na gilzie 25,4 mm (1″). Nawój OUT, a w rozmiarach 85 × 300 i 110 × 300 nawój IN.`,
    ...wspolne('zywiczne'),
    tags: ['produkcja', 'outdoor', 'logistyka', 'healthcare'],
    specifications: [
      spec('Typ taśmy', 'Żywiczna (resin)'),
      spec('Linia SATO', 'Flex'),
      spec('Kolor nadruku', 'Czarny'),
      spec('Maks. prędkość druku', '300 mm/s (12 ips)'),
      spec('Folia nośna', 'PET 4,5 μm'),
      spec('Grubość całkowita', 'Poniżej 9 μm'),
      spec('Temperatura topnienia barwnika', '100°C'),
      spec('Gęstość optyczna nadruku', 'Ponad 0,8 ODR'),
      spec('Warstwa antystatyczna', 'Tak'),
      spec('Podłoża (ocena SATO 0–5)', 'Materiały syntetyczne 5, papier powlekany 2, papier niepowlekany poniżej 1'),
      spec('Jakość nadruku (ocena SATO 0–5)', 'Kod kreskowy 0° 5, kod obrócony o 90° 5, małe znaki 5'),
      spec('Odporność (ocena SATO 0–5)', 'Ścieranie 5, rozpuszczalniki 3'),
      spec('Szerokość', '60, 76, 85, 110, 154 mm'),
      spec('Długość', '110, 300, 450 m'),
      spec('Gilza', '25,4 mm (1″)'),
      spec('Nawój', 'OUT; IN w rozmiarach 85 × 300 i 110 × 300'),
      spec('Przechowywanie', 'Do 12 miesięcy, 5–30°C, wilgotność 20–80%'),
      spec('Atesty i zgodność', 'REACH/SVHC 1907/2006/WE, kontakt z żywnością ISEGA, RoHS 3, bez halogenów, bez PFAS, limity olejów mineralnych, certyfikat UL'),
      spec('Producent', 'SATO'),
    ],
    applications: [
      'Etykiety na elektronikę, podzespoły i płytki PCB',
      'Etykiety na pojemniki z chemikaliami i rozpuszczalnikami',
      'Etykiety części w motoryzacji i produkcji',
      'Etykiety w opiece zdrowotnej i laboratoriach',
      'Etykiety logistyczne na foliach syntetycznych',
    ],
    variants: [
      v('Y59110100265', 60, 300, 'OUT', '25,4 mm', 30),
      v('Y59110100082', 60, 450, 'OUT', '25,4 mm', 24),
      v('Y59110100264', 76, 110, 'OUT', '25,4 mm', 12),
      v('Y59110100220', 85, 300, 'IN', '25,4 mm', 15),
      v('Y59110100085', 110, 300, 'IN', '25,4 mm', 15),
      v('Y59110100089', 110, 450, 'OUT', '25,4 mm', 12),
      v('Y59110100266', 154, 450, 'OUT', '25,4 mm', 12),
    ],
    downloads: [karta('SRS100', 'sato-srs100-datasheet-en.pdf', '0,2 MB'), KATALOG],
    seoTitle: 'SATO SRS100 — taśma żywiczna Flex do folii',
    seoDescription: 'Taśma żywiczna SATO SRS100 (linia Flex) do folii syntetycznych: ścieranie 5/5 i rozpuszczalniki 3/5 wg SATO, certyfikat UL, druk do 300 mm/s, 60–154 mm.',
  },
]

/** Wszystkie PN taśm SATO — marża taśm i karton w `/api/stock` (patrz unified-stock). */
export const SATO_RIBBON_PART_NUMBERS: ReadonlySet<string> = new Set(
  satoRibbonProducts.flatMap(p => (p.variants ?? []).map(wariant => wariant.partNumber)),
)

export function isSatoRibbonPN(partNumber: string): boolean {
  return SATO_RIBBON_PART_NUMBERS.has(partNumber)
}
