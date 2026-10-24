import type { BrandCategoryRichContent } from './brand-category-content'

export const progloveFaq = [
  { question: 'Co trzeba kupić razem ze skanerem ProGlove?', answer: 'Skaner jest sprzedawany sam. Do pracy potrzebne są jedno mocowanie (Hand Strap, Index Trigger albo Reel) i stacja ładująca 2- lub 10-gniazdowa. MAI wymaga własnej opaski Hand Strap Gen 2 i stacji Gen 2. Karta każdego skanera pokazuje te elementy przy przycisku zakupu.' },
  { question: 'Czy skanery ProGlove wymagają bramki Gateway?', answer: 'Nie zawsze. LEO, MARK Basic, MARK 2 i MARK 3 łączą się przez Bluetooth Low Energy bezpośrednio z terminalem, tabletem lub smartfonem z Androidem albo iOS (profil HID). MARK Display i MAI łączą się z tymi urządzeniami przez aplikację INSIGHT Mobile lub SDK, a MAI także przez Wi-Fi. [Gateway](/produkt/proglove-x001-a007) jest potrzebny do połączenia z komputerem przez USB, a [Gateway Plus](/produkt/proglove-a009-eu) także przez Ethernet lub RS-232.' },
  { question: 'Który skaner ProGlove pracuje w chłodni?', answer: 'MARK 2 i MARK 3 pracują w temperaturze od −20 do +50°C, a MAI od −10°C. LEO, MARK Basic i MARK Display pracują od 0°C. Index Trigger działa od −5°C, dlatego w zimnie zaleca się Hand Strap lub Reel.' },
  { question: 'Czym różnią się zasięgi Standard Range, Mid Range i Multi Range?', answer: 'Standard Range odczytuje kody z bliska, do ok. 90 cm. Mid Range ma optymalny zakres ok. 30–150 cm. Multi Range w MARK Basic obejmuje ok. 10–250 cm, a w MARK 3 i MAI do 6 m.' },
  { question: 'Jaka jest gwarancja na skanery ProGlove?', answer: 'Producent udziela 12 miesięcy gwarancji fabrycznej. Kontrakty serwisowe ProGlove Care na 36 albo 60 miesięcy przygotujemy na zapytanie.' },
  { question: 'Czy mocowania są sprzedawane na sztuki?', answer: 'Nie. Mocowania mają numery PN opakowań: Index Trigger po 3 lub 10 sztuk, Hand Strap po 3 lub 10 sztuk, Reel po 2 sztuki. Liczba sztuk jest podana w nazwie każdej pozycji.' },
]

export const progloveCategory: BrandCategoryRichContent = {
  updatedAt: '2026-10-24',
  contactText: 'Podaj rodzaj kodów, odległość odczytu i urządzenie, z którym skaner ma współpracować. Dobierzemy skaner ProGlove, mocowania i stacje ładujące.',
  definition: {
    heading: 'Skanery ProGlove noszone na grzbiecie dłoni',
    content: 'ProGlove produkuje skanery kodów kreskowych noszone na grzbiecie dłoni. Skaner wpina się w mocowanie, a odczyt uruchamia spust w mocowaniu, więc obie ręce zostają wolne do pracy z towarem. Skanery łączą się przez Bluetooth z terminalem, tabletem lub smartfonem, a z komputerem przez bramkę Gateway. Modele różnią się zasięgiem odczytu, liczbą skanów na jednym ładowaniu, odpornością obudowy i ekranem. Skaner pracuje tylko z mocowaniem ProGlove i ładuje się tylko w stacji ProGlove.',
  },
  sectionHeadings: {
    technicalDeepDive: 'Porównanie skanerów ProGlove',
    expertAuthority: 'Dobór skanera i wyposażenia w TAKMA',
    useCases: 'Który ProGlove do danego zadania?',
    comparisons: 'Różnice, które rozstrzygają wybór',
  },
  buyingGuide: {
    heading: 'Jak wybrać skaner ProGlove?',
    items: [
      'Odległość odczytu — Standard Range do odczytów z bliska, Mid Range do ok. 150 cm, Multi Range do etykiet na regałach i odczytu z wózka.',
      'Warunki pracy — do chłodni i na zewnątrz wybiera się modele z pracą od −20°C; obudowę IP65 mają MARK 3 i MAI.',
      'Ekran — MARK Display pokazuje instrukcje na ekranie e-paper, a MAI ma kolorowy ekran dotykowy i Wi-Fi.',
      'Mocowanie — Index Trigger w trzech rozmiarach do stałych operatorów, Hand Strap w jednym rozmiarze do zmiennej obsady, Reel na stałe stanowiska.',
    ],
  },
  expertAuthority: 'Pomożemy dobrać skaner ProGlove do kodów, odległości odczytu i urządzenia, z którym ma pracować. Sprawdzimy zgodność mocowań, stacji i bramki Gateway z wybranym modelem. Skanery na palec i inne skanery noszone są w kategorii [skanery pierścieniowe i noszone](/skanery-kodow-kreskowych/pierscieniowe).',
  technicalDeepDive: 'Zestawienie obejmuje oferowane modele. Szczegóły wersji i numery PN są na kartach produktów.',
  modelTableLayout: 'tabela',
  modelTable: [
    { name: 'ProGlove LEO', href: '/produkt/proglove-leo', role: 'Model wejściowy', priceFrom: '', specs: [{ label: 'Zasięg', value: 'Standard Range' }, { label: 'Bateria', value: 'ok. 4000 skanów' }, { label: 'Obudowa', value: 'IP43, 35 g' }], bestFor: 'Kompletacja, pakowanie i e-commerce z bliska.' },
    { name: 'ProGlove MARK Basic', href: '/produkt/proglove-mark-basic', role: 'Podstawowy', priceFrom: '', specs: [{ label: 'Zasięg', value: 'Multi Range 10–250 cm lub Standard Range' }, { label: 'Bateria', value: 'ok. 8000 skanów' }, { label: 'Obudowa', value: 'IP54' }], bestFor: 'Codzienne skanowanie w magazynie i pakowni.' },
    { name: 'ProGlove MARK 2', href: '/produkt/proglove-mark-2', role: 'Pierwotny model serii', priceFrom: '', specs: [{ label: 'Zasięg', value: 'Standard Range lub Mid Range' }, { label: 'Bateria', value: 'ok. 12 000 skanów' }, { label: 'Praca', value: 'od −20°C' }], bestFor: 'Logistyka, montaż i produkcja.' },
    { name: 'ProGlove MARK 3', href: '/produkt/proglove-mark-3', role: 'Multi Range, IP65', priceFrom: '', specs: [{ label: 'Zasięg', value: '10 cm–6 m' }, { label: 'Bateria', value: 'ok. 12 000 skanów' }, { label: 'Obudowa', value: 'IP65, od −20°C' }], bestFor: 'Wózki widłowe, cross-docking, praca na zewnątrz.' },
    { name: 'ProGlove MARK Display', href: '/produkt/proglove-mark-display', role: 'Z ekranem e-paper', priceFrom: '', specs: [{ label: 'Ekran', value: '1,54″ e-paper' }, { label: 'Zasięg', value: 'Standard Range lub Mid Range' }, { label: 'Bateria', value: 'ok. 7500 skanów' }], bestFor: 'Instrukcje kompletacji na dłoni zamiast terminala pistoletowego.' },
    { name: 'ProGlove MAI', href: '/produkt/proglove-mai', role: 'Ekran dotykowy, Wi-Fi', priceFrom: '', specs: [{ label: 'Ekran', value: 'AMOLED 1,95″, dotykowy' }, { label: 'Łączność', value: 'Wi-Fi 6, Bluetooth 5.4' }, { label: 'Zasięg', value: '5 cm–6 m' }], bestFor: 'Prowadzenie operatora krok po kroku bez terminala.' },
  ],
  useCases: [
    { title: 'Kompletacja i pakowanie z bliska', description: 'LEO (35 g) jest najlżejszy i ładuje się w godzinę; MARK Basic Standard Range odczytuje kody z bliska, ok. 10–90 cm.' },
    { title: 'Magazyn, rampa i wózki widłowe', description: 'MARK 3 odczytuje kody do 6 m i ma obudowę IP65. MARK Basic Multi Range obsługuje etykiety regałowe do ok. 250 cm.' },
    { title: 'Praca prowadzona przez system', description: 'MARK Display wyświetla lokalizację i ilość na ekranie e-paper. MAI prowadzi pracownika na kolorowym ekranie dotykowym i może pracować przez Wi-Fi bez terminala.' },
  ],
  uniqueInsights: {
    heading: 'Co sprawdzić przed zakupem?',
    items: [
      { title: 'Mocowanie i stacja są wymagane', text: 'Skaner ProGlove nie ma własnego spustu ani ładowarki. Do każdego skanera dobiera się jedno mocowanie i stację ładującą; MAI ma osobne akcesoria Gen 2.' },
      { title: 'Mocowania w opakowaniach', text: 'Index Trigger i Hand Strap są sprzedawane po 3 lub 10 sztuk, a Reel po 2 sztuki. Index Trigger występuje w rozmiarach S, M i L oraz w wersjach na lewą i prawą rękę.' },
    ],
  },
  comparisons: [
    { title: 'MARK 2 czy MARK 3?', content: '[MARK 2](/produkt/proglove-mark-2) i [MARK 3](/produkt/proglove-mark-3) wykonują ok. 12 000 skanów na ładowaniu i pracują od −20°C. MARK 3 czyta kody do 6 m i ma obudowę IP65. MARK 2 ma wersje Standard Range i Mid Range oraz obudowę IP54.' },
    { title: 'MARK Display czy MAI?', content: '[MARK Display](/produkt/proglove-mark-display) ma ekran e-paper 1,54″ bez dotyku i waży 48 g. [MAI](/produkt/proglove-mai) ma kolorowy ekran dotykowy 1,95″, cztery przyciski, Wi-Fi 6 i waży 68 g.' },
  ],
  howToSteps: [],
  faq: progloveFaq,
}
