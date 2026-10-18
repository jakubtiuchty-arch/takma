import type { Subcategory } from './products'

export const rfidTerminalCategory: Subcategory = {
  "id": "terminale-rfid",
  "slug": "terminale-rfid",
  "name": "Terminale RFID",
  "parentCategoryId": "terminale-mobilne",
  "description": "Terminale mobilne z czytnikiem UHF RFID do inwentaryzacji i identyfikacji towarów.",
  "seoTitle": "Terminale RFID UHF do magazynu i inwentaryzacji | TAKMA",
  "seoDescription": "Terminale RFID UHF z Androidem do inwentaryzacji i wyszukiwania towarów. Porównaj Zebra TC22R, TC53e-RFID i EM45 RFID. Europejskie PN, aktualne ceny, stany i akcesoria.",
  "longDescription": "Terminale RFID odczytują znaczniki radiowe bez celowania w kod kreskowy. W tej kategorii znajdziesz terminale Android z wbudowanym czytnikiem UHF do inwentaryzacji, identyfikacji wyposażenia i kontroli towarów. Porównaj zasięg, sposób odczytu kodów oraz łączność. Dobierz wersję europejską i akcesoria do konkretnego modelu.",
  "icon": "smartphone",
  "productIds": [
    "zebra-tc22r",
    "zebra-em45-rfid",
    "zebra-tc53e-rfid",
    "zebra-mc3330xr",
    "zebra-mc3390xr",
    "zebra-ws501-r"
  ],
  "productCount": 6
}

import type { SubcategoryRichContent } from './subcategory-content'

export const rfidTerminalContent: SubcategoryRichContent = {
  updatedAt: '2026-10-18',
  definition: {
    heading: 'Co to jest terminal RFID?',
    content: 'Terminal RFID to komputer mobilny z czytnikiem znaczników radiowych. Łączy odczyt z aplikacją magazynową, ekranem i komunikacją z systemem firmy. UHF RFID pozwala identyfikować oznakowane towary bez celowania w nadruk kodu kreskowego.\n\nW tej kategorii znajdziesz urządzenia z wbudowanym UHF RFID. [Zebra TC22R](/produkt/zebra-tc22r) służy do szybkiego odczytu wielu znaczników. [Zebra EM45 RFID](/produkt/zebra-em45-rfid) ma obudowę smartfona, łączność 5G i czytnik do pracy z małej odległości. [Zebra TC53e-RFID](/produkt/zebra-tc53e-rfid) łączy wbudowany UHF krótkiego zasięgu ze skanerem SE4720 i Wi-Fi 6E. [Zebra MC3330xR](/produkt/zebra-mc3330xr) i [MC3390xR](/produkt/zebra-mc3390xr) mają fizyczną klawiaturę oraz wbudowany UHF. [Zebra WS501-R](/produkt/zebra-ws501-r) to terminal ubieralny do pracy na dłoni. Samo NFC w zwykłym terminalu nie oznacza obsługi etykiet UHF.\n\nDo przygotowania oznaczeń dobierz [drukarkę RFID](/drukarki-rfid) i [etykiety RFID](/etykiety-rfid-zebra). Zgodność czytnika z protokołem nie potwierdza jeszcze parametrów druku ani możliwości kodowania etykiety w konkretnej drukarce.',
  },
  buyingGuide: {
    heading: 'Jak wybrać terminal RFID do inwentaryzacji?',
    items: [
      'Sposób odczytu — określ, czy liczysz wiele produktów, czy sprawdzasz wybrany przedmiot z bliska.',
      'Pasmo UHF — do pracy w Polsce wybierz konfigurację europejską 865–868 MHz.',
      'Łączność — do pracy w magazynie może wystarczyć Wi-Fi. Do pracy poza siecią firmową rozważ model z 5G.',
      'Kody kreskowe — wybierz osobny skaner 1D/2D albo odczyt aparatem, zależnie od częstotliwości skanowania.',
      'Aplikacja — sprawdź obsługę czytnika RFID, format danych EPC i połączenie z systemem magazynowym.',
      'Akcesoria — dobierz ładowanie, baterie i ochronę do konkretnego modelu oraz numeru PN.',
    ],
  },
  expertAuthority: 'TAKMA pomaga dobrać terminal, znaczniki i wyposażenie do procesu magazynowego. Przed zamówieniem ustalimy wymagany zasięg, sposób ładowania oraz współpracę z aplikacją.',
  technicalDeepDive: 'Zasięg odczytu zależy od czytnika, anteny, znacznika, powierzchni produktu i otoczenia. Metal oraz płyny mogą zmieniać warunki odczytu. Nominalny zasięg nie gwarantuje takiego samego wyniku w każdym magazynie.\n\nCzytnik UHF i skaner kodów kreskowych pełnią różne funkcje. UHF odczytuje układ radiowy znacznika. Skaner lub aparat odczytuje widoczny nadruk. Aplikacja musi przypisać oba identyfikatory do właściwego towaru.\n\nOsobną grupę stanowią zwykłe terminale połączone z uchwytem RFID. Taki zestaw wymaga zgodnego czytnika i właściwego adaptera. TC22R i EM45 RFID mają UHF wbudowane, więc nie wymagają dokupienia uchwytu RFD40 ani RFD90.',
  useCases: [
    { title: 'Inwentaryzacja magazynu', description: 'Liczenie towarów z etykietami UHF i porównanie wyników ze stanem w aplikacji.' },
    { title: 'Identyfikacja wyposażenia', description: 'Sprawdzanie oznakowanych urządzeń, narzędzi i innych składników majątku.' },
    { title: 'Kontrola przyjęć i wydań', description: 'Weryfikacja identyfikatorów towarów podczas ich przepływu przez magazyn.' },
  ],
  uniqueInsights: { heading: 'Co sprawdzić przed wdrożeniem?', items: [
    { title: 'Próba na docelowym towarze', text: 'Sprawdź odczyt na rzeczywistym opakowaniu, przy docelowej gęstości znaczników i ustawionej mocy.' },
    { title: 'Obsługa RFID w aplikacji', text: 'Samo działanie kodów kreskowych nie potwierdza obsługi czytnika UHF przez program magazynowy.' },
  ] },
  comparisons: [
    { title: 'TC22R czy EM45 RFID?', content: '[TC22R](/produkt/zebra-tc22r) ma uchwyt pistoletowy, skaner SE4710 i czytnik do szybkiego liczenia znaczników. [EM45 RFID](/produkt/zebra-em45-rfid) ma format smartfona, 5G i UHF do 1,2 m. Wybór zależy od sposobu pracy.' },
  ],
  faq: [
    { question: 'Czy terminal RFID działa bez widocznego kodu kreskowego?', answer: 'Tak. UHF RFID odczytuje układ radiowy znacznika. Odczyt nadal zależy od rodzaju etykiety, materiału i otoczenia.' },
    { question: 'Czy terminal z NFC odczyta etykiety magazynowe UHF?', answer: 'Nie. NFC i UHF wykorzystują inne pasma oraz protokoły. Do odczytu etykiet UHF potrzebujesz czytnika UHF.' },
    { question: 'Czy TC22R i EM45 RFID wymagają osobnego uchwytu?', answer: 'Nie. Oba modele mają wbudowany UHF RFID. Zwykły TC22 i zwykły EM45 to inne urządzenia.' },
    { question: 'Czy aplikacja magazynowa jest w cenie terminala?', answer: 'Cena dotyczy sprzętu wskazanego numerem PN. Integrację z programem magazynowym i licencje aplikacji należy ustalić osobno.' },
  ],
  howToSteps: [
    { name: 'Określ proces', text: 'Podaj liczbę oznakowanych towarów, wymagany zasięg i miejsce pracy.' },
    { name: 'Dobierz terminal i znaczniki', text: 'Wybierz europejski PN, sprawdź aplikację i wykonaj próbę odczytu.' },
    { name: 'Dobierz wyposażenie', text: 'Ustal sposób ładowania i liczbę stanowisk. Sprawdź elementy sprzedawane osobno.' },
  ],
}
