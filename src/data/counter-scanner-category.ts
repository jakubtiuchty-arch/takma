import type { SubcategoryRichContent } from './subcategory-content'
import { counterScannerProducts } from './counter-scanner-products'

// Jak zlote() w src/lib/cena-od.ts (twarda spacja w tysiącach). Import cena-od.ts pociągnąłby cały products.ts.
function zlote(v: number): string {
  return String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0')
}

// Cena z tego samego pola co na kaflu, żeby tabela i siatka pokazywały tę samą kwotę.
function cenaOd(id: string): string {
  const cena = counterScannerProducts.find(p => p.id === id)?.priceFrom
  return cena ? `${zlote(cena)} zł` : '—'
}

export const counterScannerContent: SubcategoryRichContent = {
  updatedAt: '2026-10-21',
  sectionHeadings: { technicalDeepDive: 'Zasilanie, port AUX i kamera w modelach' },
  definition: {
    heading: 'Jaki skaner ladowy wybrać do kasy?',
    content: 'Skaner ladowy odczytuje kod podczas przesuwania produktu nad oknem w blacie. Model poziomy ma jedno okno. Model dwuokienkowy łączy odczyt poziomy i pionowy. Do małego stanowiska porównaj [Magellan 3510HSi](/produkt/datalogic-magellan-3510hsi), [3550HSi](/produkt/datalogic-magellan-3550hsi), [3700HSi](/produkt/datalogic-magellan-3700hsi) i [Zebra SP7201-H](/produkt/zebra-sp7201-h). Port AUX na dodatkowy skaner ręczny mają 3510HSi i 3550HSi przy zasilaniu 12 V, 3750HSi oraz [SP7208-H](/produkt/zebra-sp7208-h).\n\nDo większej kasy porównaj [Magellan 9550i](/produkt/datalogic-magellan-9550i), [9600i](/produkt/datalogic-magellan-9600i), [9900i](/produkt/datalogic-magellan-9900i) oraz [Zebra MP7200](/produkt/zebra-mp7200). Jeśli nie chcesz wycinać otworu w blacie, sprawdź [skanery prezentacyjne](/skanery-kodow-kreskowych/prezentacyjne).',
  },
  comparisonTable: {
    heading: 'Porównanie skanerów ladowych',
    intro: 'Modele z jednym oknem mieszczą się w małym blacie. Modele dwuokienkowe odczytują kod z kilku stron towaru.',
    columns: ['Okna odczytu', 'Wymiary w blacie', 'Gwarancja', 'Cena netto od'],
    rows: [
      { model: 'Datalogic Magellan 3510HSi', href: '/produkt/datalogic-magellan-3510hsi', role: 'Zasilanie z portu USB 5 V', cells: ['1 (poziome)', '15,2 × 15,2 cm, głęb. 8,7 cm', '3 lata', cenaOd('datalogic-magellan-3510hsi')] },
      { model: 'Datalogic Magellan 3550HSi', href: '/produkt/datalogic-magellan-3550hsi', role: 'Zasilanie 12 V', cells: ['1 (poziome)', '15,2 × 15,2 cm, głęb. 8,7 cm', '3 lata', cenaOd('datalogic-magellan-3550hsi')] },
      { model: 'Datalogic Magellan 3700HSi', href: '/produkt/datalogic-magellan-3700hsi', role: '3750HSi z kolorowym obrazem i AUX', cells: ['1 (poziome)', '15,2 × 15,2 cm, głęb. 8,7 cm', '3 lata', cenaOd('datalogic-magellan-3700hsi')] },
      { model: 'Zebra SP7201-H', href: '/produkt/zebra-sp7201-h', role: 'Zasilanie z portu USB 5 V, bez AUX', cells: ['1 (poziome)', '15,2 × 15,2 cm, głęb. 8,6 cm', '3 lata', cenaOd('zebra-sp7201-h')] },
      { model: 'Zebra SP7208-H', href: '/produkt/zebra-sp7208-h', role: 'Port AUX na skaner ręczny', cells: ['1 (poziome)', '15,2 × 15,2 cm, głęb. 8,6 cm', '3 lata', cenaOd('zebra-sp7208-h')] },
      { model: 'Datalogic Magellan 9550i', href: '/produkt/datalogic-magellan-9550i', role: 'Wersje z Adaptive Scale', cells: ['2 (poziome i pionowe)', 'szer. 29,2 cm, głęb. 10,4 cm', '1 rok', cenaOd('datalogic-magellan-9550i')] },
      { model: 'Datalogic Magellan 9600i', href: '/produkt/datalogic-magellan-9600i', role: 'Płyta krótka lub średnia Flush', cells: ['2', 'szer. 29,2 cm, głęb. 10,2 cm', '1 rok', cenaOd('datalogic-magellan-9600i')] },
      { model: 'Datalogic Magellan 9900i', href: '/produkt/datalogic-magellan-9900i', role: 'Niska wieża 6,8 cm', cells: ['2', 'szer. 29,2 cm, głęb. 10,2 cm', '1 rok', cenaOd('datalogic-magellan-9900i')] },
      { model: 'Zebra MP7200', href: '/produkt/zebra-mp7200', role: 'Wersje Scale Ready i z kolorową kamerą', cells: ['2', '39,8 lub 50,6 × 29,2 cm, głęb. 10,1 cm', '1 rok', cenaOd('zebra-mp7200')] },
    ],
    note: 'Ceny netto bez przewodów, mocowań i zasilaczy. Zawartość zestawu zależy od PN.',
  },
  buyingGuide: {
    heading: 'Co sprawdzić przed zamówieniem?',
    items: [
      'Montaż — dobierz wymiary otworu, głębokość pod blatem i sposób mocowania do konkretnego PN.',
      'Płyta odczytu — porównaj długość i rodzaj szkła. Wersja bez górnej płyty wymaga jej osobnego doboru.',
      'Interfejs — dopasuj przewód USB lub RS-232 do portu kasy i wymagań programu POS.',
      'Zasilanie — zwykłe USB, USB POT i zewnętrzny zasilacz nie są tym samym rozwiązaniem. Sprawdź wymagania modelu.',
      'Zawartość — sam skaner może nie zawierać mocowania, przewodu ani zasilacza. Tabela na karcie pokazuje różnice między PN.',
      'Waga — Scale Ready i Adaptive Scale oznaczają przygotowanie do integracji. Nie potwierdzają wagi ani legalizacji w zestawie.',
    ],
  },
  expertAuthority: 'TAKMA pomaga dobrać skaner, przewód i zasilanie do istniejącego stanowiska POS. Przed doborem przygotuj model kasy, rodzaj portu, wymiary blatu oraz przykładowe kody.',
  technicalDeepDive: '3510HSi obsługuje zasilanie z odpowiedniego portu USB 5 V. 3550HSi wymaga 12 V. W rodzinie 3700HSi wersja 3750 dodaje kolorowy obraz oraz AUX. Poziomy SP7208-H ma AUX, lecz nie zawiera kamery z pionowej wersji V.\n\nW MP7200 kolorowa kamera zależy od PN. W Magellan 9900i dodatkowy moduł odczytu z góry TDR jest opcjonalny. Wyposażenie zależy od PN. Tabela wariantów na karcie produktu pokazuje różnice.',
  useCases: [
    { title: 'Kasa z małym blatem', description: 'Porównaj czytniki poziome z jednym oknem. Sprawdź dostęp pod blatem i miejsce na przewody.' },
    { title: 'Duży przepływ towarów', description: 'Dwa okna zwiększają przestrzeń, przez którą można przedstawić kod. Dobierz obudowę do istniejącej lady.' },
    { title: 'Kasa samoobsługowa', description: 'Sprawdź integrację z aplikacją POS. Kamera lub dodatkowy czytnik nie uruchamiają automatycznie kontroli transakcji.' },
  ],
  uniqueInsights: { heading: 'Trzy ważne rozróżnienia', items: [
    { title: 'Przygotowanie pod wagę', text: 'Skaner Scale Ready wymaga zgodnego modułu ważącego i właściwej integracji. Nie jest gotową wagą handlową.' },
    { title: 'POT i zwykłe USB', text: 'POT pobiera energię ze zgodnego hosta. Przewód do zasilania zewnętrznego wymaga osobnego zasilacza.' },
    { title: 'Zdjęcie a konfiguracja', text: 'Długość płyty, mocowanie i wyposażenie sprawdzaj według PN. Ta sama rodzina może mieć kilka obudów i zestawów.' },
  ] },
  faq: [
    { question: 'Czy skaner ladowy odczytuje QR?', answer: 'Wszystkie modele w tej kategorii odczytują kody 1D i 2D, w tym QR. Wynik zależy od jakości, wielkości i ustawienia kodu.' },
    { question: 'Czy skaner ladowy zawiera wagę?', answer: 'Oferowane tu konfiguracje nie zawierają kompletnej wagi. Przygotowanie Scale Ready lub Adaptive Scale nie oznacza dołączonej wagi ani jej legalizacji. Kompletna skanerowaga wymaga modułu ważącego zgodnego z modelem.' },
    { question: 'Czy można użyć dowolnego przewodu USB?', answer: 'Nie. Złącze, wyprowadzenia oraz zasilanie muszą odpowiadać modelowi. Dobierz konkretny PN przewodu do skanera i portu hosta.' },
    { question: 'Czym różni się skaner ladowy od prezentacyjnego?', answer: 'Skaner ladowy jest wbudowany w blat kasy, a towar przesuwa się nad oknem odczytu. Skaner prezentacyjny stoi na blacie lub jest mocowany do ściany i nie wymaga wycinania otworu. Modele bez zabudowy są w kategorii [skanery prezentacyjne](/skanery-kodow-kreskowych/prezentacyjne).' },
    { question: 'Co to jest skaner dwuokienkowy (bioptyczny)?', answer: 'Skaner dwuokienkowy ma okno poziome w płycie i okno pionowe w wieży. Odczytuje kod z kilku stron towaru bez jego obracania. W ofercie są to [Magellan 9550i](/produkt/datalogic-magellan-9550i), [9600i](/produkt/datalogic-magellan-9600i), [9900i](/produkt/datalogic-magellan-9900i) i [Zebra MP7200](/produkt/zebra-mp7200).' },
    { question: 'Jaki otwór w blacie wymaga skaner ladowy?', answer: 'Modele poziome mają obudowę 15,2 × 15,2 cm i głębokość 8,6–8,7 cm. Modele dwuokienkowe mają szerokość 29,2 cm i ok. 10 cm głębokości. Wymiary wycięcia zależą od mocowania i długości płyty wybranego PN.' },
    { question: 'Czy skaner ladowy można podłączyć do kasy fiskalnej?', answer: 'Tak, jeśli kasa ma port RS-232 lub USB obsługujący skaner. Wszystkie modele w tej kategorii mają interfejs RS-232 i USB. Do każdego portu potrzebny jest właściwy przewód.' },
  ],
  comparisons: [
    { title: 'Jedno okno czy dwa?', content: 'Jedno okno sprawdza się w kompaktowej zabudowie. Dwa okna umożliwiają odczyt z poziomej i pionowej strony stanowiska. Wybierz konstrukcję według miejsca i sposobu podawania towarów.' },
  ],
  howToSteps: [
    { name: 'Zmierz stanowisko', text: 'Zapisz wymiary otworu, głębokość pod blatem i sposób mocowania.' },
    { name: 'Sprawdź połączenie', text: 'Ustal port hosta i wymagany sposób zasilania.' },
    { name: 'Wybierz PN', text: 'Porównaj płytę, szkło, kamerę i wyposażenie zestawu.' },
    { name: 'Sprawdź kody i aplikację', text: 'Przetestuj przykładowe etykiety oraz integrację z systemem POS.' },
  ],
}
