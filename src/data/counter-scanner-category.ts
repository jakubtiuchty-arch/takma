import type { SubcategoryRichContent } from './subcategory-content'

export const counterScannerContent: SubcategoryRichContent = {
  updatedAt: '2026-10-21',
  definition: {
    heading: 'Jaki skaner ladowy wybrać do kasy?',
    content: 'Skaner ladowy odczytuje kod podczas przesuwania produktu nad oknem w blacie. Model poziomy ma jedno okno. Model dwuokienkowy łączy odczyt poziomy i pionowy. Do małego stanowiska porównaj [Magellan 3510HSi](/produkt/datalogic-magellan-3510hsi), [3550HSi](/produkt/datalogic-magellan-3550hsi), [3700HSi](/produkt/datalogic-magellan-3700hsi) i [Zebra SP7201-H](/produkt/zebra-sp7201-h). [SP7208-H](/produkt/zebra-sp7208-h) dodaje AUX do zgodnego dodatkowego czytnika.\n\nDo większej kasy porównaj [Magellan 9550i](/produkt/datalogic-magellan-9550i), [9600i](/produkt/datalogic-magellan-9600i), [9900i](/produkt/datalogic-magellan-9900i) oraz [Zebra MP7200](/produkt/zebra-mp7200). Jeśli nie chcesz wycinać otworu w blacie, sprawdź [skanery prezentacyjne](/skanery-kodow-kreskowych/prezentacyjne).',
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
  technicalDeepDive: '3510HSi obsługuje zasilanie z odpowiedniego portu USB 5 V. 3550HSi wymaga 12 V. W rodzinie 3700HSi wersja 3750 dodaje kolorowy obraz oraz AUX. Poziomy SP7208-H ma AUX, lecz nie zawiera kamery z pionowej wersji V.\n\nW MP7200 kolorowa kamera zależy od PN. W Magellan 9900i dodatkowy moduł odczytu z góry TDR jest opcjonalny. Nie traktuj zdjęcia innej konfiguracji jako listy wyposażenia.',
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
    { question: 'Czy skaner ladowy zawiera wagę?', answer: 'Oferowane tu konfiguracje nie zawierają kompletnej wagi. Przygotowanie Scale Ready lub Adaptive Scale nie oznacza dołączonej wagi ani jej legalizacji.' },
    { question: 'Czy można użyć dowolnego przewodu USB?', answer: 'Nie. Złącze, wyprowadzenia oraz zasilanie muszą odpowiadać modelowi. Dobierz konkretny PN przewodu do skanera i portu hosta.' },
    { question: 'Czy skaner prezentacyjny wymaga otworu w ladzie?', answer: 'Zwykle stoi na blacie. Skanery ladowe z tej kategorii służą do zabudowy. Sprawdź rysunek montażowy wybranej konfiguracji.' },
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
