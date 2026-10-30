import type { Subcategory } from './products'

export const wearableTerminalCategory: Subcategory = {
  "id": "terminale-naramienne",
  "slug": "terminale-naramienne",
  "name": "Terminale naramienne",
  "parentCategoryId": "terminale-mobilne",
  "description": "Komputery z Androidem noszone na przedramieniu do pracy z wolnymi rękami w sklepie, magazynie i produkcji.",
  "seoTitle": "Terminale naramienne Zebra WT5400, WT6400 i Unitech WD200 Plus — komputery noszone na nadgarstku | TAKMA",
  "seoDescription": "Terminal naramienny, czyli komputer noszony na nadgarstku z Androidem: Zebra WT5400 do sklepów, Zebra WT6400 do magazynu i mroźni oraz Unitech WD200 Plus do kompletacji. Terminal na rękę ze skanerem noszonym, mocowania, stacje i baterie.",
  "longDescription": "Terminal naramienny to komputer mobilny z Androidem noszony na przedramieniu w mocowaniu z paskiem. Ekran pozostaje w polu widzenia, a obie ręce są wolne do chwytania towaru. Takie terminale stosuje się przy kompletacji zamówień, przyjęciach, sortowaniu i uzupełnianiu półek w sklepach, magazynach i zakładach produkcyjnych. Kody odczytuje [skaner noszony na palcu lub dłoni](/skanery-kodow-kreskowych/pierscieniowe), połączony z terminalem przez Bluetooth albo przewodem. Mocowanie, ładowanie i skaner zamawia się osobno, razem z [akcesoriami do terminali](/akcesoria-do-terminali).",
  "icon": "smartphone",
  "productIds": [
    "zebra-wt6400",
    "zebra-wt5400",
    "proglove-lana",
    "unitech-wd200-plus"
  ],
  "productCount": 4
}

import type { SubcategoryRichContent } from './subcategory-content'

export const wearableTerminalContent: SubcategoryRichContent = {
  updatedAt: '2026-10-30',
  comparisonTable: {
    heading: 'Zebra WT5400, WT6400 i Unitech WD200 Plus — porównanie',
    columns: ['Przeznaczenie', 'Ekran i klawiatura', 'Skanery', 'Złącza', 'Aparat', 'Temperatura pracy'],
    rows: [
      {
        model: 'Zebra WT5400',
        href: '/produkt/zebra-wt5400',
        role: 'Terminal do sklepów i realizacji zamówień internetowych.',
        cells: [
          'Sklep: zamówienia internetowe, przyjęcia, półki, ceny',
          'Ekran dotykowy 4,7 cala',
          'Bluetooth: RS2100, RS5100, RS6100',
          'USB-C (USB 3.0)',
          'Brak',
          '−20 do 50 °C',
        ],
      },
      {
        model: 'Zebra WT6400',
        href: '/produkt/zebra-wt6400',
        role: 'Terminal do magazynu, produkcji i mroźni.',
        cells: [
          'Magazyn, centrum dystrybucji, produkcja, mroźnia',
          'Ekran dotykowy 4,7 cala lub ekran z klawiaturą 23 klawisze',
          'Bluetooth: RS2100, RS5100, RS6100; przewodowe: RS4000, RS5000x',
          '2 wzmocnione złącza boczne (USB 2.0)',
          'Boczny 13 MP, pochylony o 22°',
          '−20 do 50 °C; z baterią rozszerzoną −30 do 50 °C',
        ],
      },
      {
        model: 'Unitech WD200 Plus',
        href: '/produkt/unitech-wd200-plus',
        role: 'Komputer noszony do kompletacji z wolnymi rękami.',
        cells: [
          'Magazyn, handel, logistyka, transport, place przeładunkowe',
          'Ekran dotykowy 3,54 cala',
          'Bluetooth: MS633, MS652 Plus, MS912 Plus, MS912 Plus 2D, MS926; aparat 16 MP odczytuje kody',
          'USB-C (USB 2.0), styki POGO do stacji',
          '16 MP z lampą',
          '−20 do 50 °C',
        ],
      },
    ],
  },
  definition: {
    heading: 'Co to jest terminal naramienny?',
    content: 'Komputer noszony na nadgarstku łączy ekran terminala z mocowaniem na rękę. Pracownik czyta zadanie na ekranie, a kod skanuje skanerem założonym na palec lub grzbiet dłoni. Nie musi odkładać urządzenia, gdy podnosi karton albo sięga do regału.\n\nW ofercie TAKMA są dwa terminale Zebra, komputer Unitech WD200 Plus i komputer ProGlove LANA. [Zebra WT5400](/produkt/zebra-wt5400) powstał do pracy w sklepach: realizacji zamówień internetowych, przyjęć na zaplecze i uzupełniania półek. Ma złącze USB-C i współpracuje ze skanerami Bluetooth. [Zebra WT6400](/produkt/zebra-wt6400) służy w magazynach, centrach dystrybucji i zakładach produkcyjnych. Do wyboru jest wersja z samym ekranem lub z klawiaturą. Terminal ma aparat 13 MP z boku obudowy, złącza do skanerów na przewód i baterię przystosowaną do mroźni (−30 °C).\n\nOba terminale Zebra nosi się w mocowaniu na nadgarstek albo w mocowaniu na pasek przy biodrze. Do odczytu kodów służą [skanery noszone](/skanery-kodow-kreskowych/pierscieniowe) [Zebra RS2100](/produkt/zebra-rs2100), [RS5100](/produkt/zebra-rs5100) i [RS6100](/produkt/zebra-rs6100). [ProGlove LANA](/produkt/proglove-lana) z ekranem 3,54 cala i masą 123 g nosi się na przedramieniu w mocowaniu Arm Mount albo w kieszeni, a kody odczytują połączone z nim przez Bluetooth skanery noszone ProGlove. [Unitech WD200 Plus](/produkt/unitech-wd200-plus) ma ekran 3,54 cala i aparat 16 MP; nie ma wbudowanego skanera, więc kody czyta aparatem albo skanerem Unitech MS633, MS652 Plus, MS912 Plus, MS912 Plus 2D lub MS926. Terminal ubieralny z czytnikiem UHF RFID, mocowany na grzbiecie dłoni, jest w kategorii [terminale RFID](/terminale-rfid).',
  },
  buyingGuide: {
    heading: 'Jak wybrać terminal naramienny?',
    items: [
      'Miejsce pracy — do sklepu wystarcza model z ekranem dotykowym i złączem USB-C. W mroźni potrzebny jest terminal z baterią przystosowaną do temperatury −30 °C.',
      'Skaner — skaner Bluetooth paruje się z terminalem przez NFC. Skaner przewodowy wymaga terminala ze wzmocnionymi złączami bocznymi.',
      'Wprowadzanie danych — przy częstym wpisywaniu ilości w grubych rękawicach przydaje się fizyczna klawiatura pod ekranem.',
      'Bateria — wersja 3500 mAh starcza na zmianę, wersja 5000 mAh wydłuża pracę, a w WT6400 umożliwia pracę w mroźni.',
      'Mocowanie — typ paska (pojedyncze pokrętło, podwójne pokrętło, rzep) i rozmiar dobiera się do przedramienia pracownika, a przy pracy w kurtce wybiera się XL.',
      'Ładowanie — liczba terminali na zmianę decyduje o wyborze stacji 1-, 5- lub 10-gniazdowej i ładowarki zapasowych baterii.',
    ],
  },
  expertAuthority: 'TAKMA, partner Zebra, dobiera terminal naramienny, skaner noszony, mocowania i stacje ładujące do procesu i liczby stanowisk. Przed zamówieniem ustalamy sposób ładowania, rozmiary pasków oraz współpracę aplikacji ze skanerem.',
  technicalDeepDive: 'W obu modelach moduł NFC znajduje się w korpusie terminala, a nie w baterii, i jest oznaczony ikoną. Skaner Bluetooth paruje się przez zbliżenie do tej ikony. RS5100 i RS6100 mogą też być zasilane przez terminal za pomocą adaptera przewodowego, a kody nadal przesyłają przez Bluetooth. Z WT5400 łączy je [adapter USB-C](/produkt/zebra-wt-cbl-rs5x6-adptc-01), a z WT6400 [adapter do złącza bocznego](/produkt/zebra-rs6100-cbl-rs5x6-adpwt-01).\n\nPlatforma obu modeli jest wspólna: ekran 4,7 cala HD (720 × 1280), ośmiordzeniowy Qualcomm QCS4490 2,4 GHz, 6 GB RAM i 64 GB Flash, Wi-Fi 6E z pasmem 6 GHz oraz Bluetooth 5.3. Zatrzaski po bokach baterii pozwalają wymienić ją na ręce pracownika. Pełne ładowanie trwa około 4 h dla baterii 3500 mAh i około 5,5 h dla baterii 5000 mAh.\n\nZestaw zawiera terminal z baterią. Mocowanie oraz [stację ładującą](/stacje-ladowarki-terminali) lub przewód USB trzeba zamówić oddzielnie. [Stacja Ethernet](/produkt/zebra-wt-crd-wt64-5s5be-01) współpracuje tylko z WT6400.',
  useCases: [
    { title: 'Realizacja zamówień w sklepie', description: 'Kompletacja zamówień internetowych, przyjęcie dostawy na zaplecze i uzupełnianie półek z WT5400 i skanerem Bluetooth.' },
    { title: 'Kompletacja i sortowanie w magazynie', description: 'Lista pobrań na ekranie WT6400 i skaner na palcu; obie ręce pozostają wolne do chwytania kartonów.' },
    { title: 'Chłodnie i mroźnie', description: 'WT6400 z baterią rozszerzoną pracuje od −30 °C, a ekran obsługuje się w grubych rękawicach.' },
    { title: 'Produkcja', description: 'Dostarczanie materiałów do linii, śledzenie wyrobów w toku i kontrola jakości ze zdjęciem z bocznego aparatu WT6400.' },
  ],
  uniqueInsights: { heading: 'Co sprawdzić przed wdrożeniem?', items: [
    { title: 'Rozmiar paska', text: 'Pasek z pokrętłem w rozmiarze S reguluje się w zakresie 128–191 mm, L 164–265 mm, a XL 218–375 mm. Rozmiar XL jest przeznaczony do noszenia na kurtce.' },
    { title: 'Własne mocowanie dla pracownika', text: 'Terminal odpina się od mocowania jednym przyciskiem. Mocowanie z paskiem może więc należeć do jednej osoby, a terminale mogą krążyć między zmianami.' },
    { title: 'Stacja Ethernet tylko do WT6400', text: 'Stacja 5-gniazdowa z Ethernetem nie współpracuje z WT5400. Pozostałe stacje i ładowarki są wspólne dla obu modeli.' },
  ] },
  comparisons: [
    { title: 'WT5400 czy WT6400?', content: '[WT5400](/produkt/zebra-wt5400) wybiera się do sklepu: ma złącze USB-C 3.0, waży 254 g z baterią standardową i współpracuje ze skanerami Bluetooth. [WT6400](/produkt/zebra-wt6400) sprawdza się w magazynie, na produkcji i w mroźni: oferuje aparat 13 MP, obsługę skanerów na przewód, opcjonalną klawiaturę oraz stację z Ethernetem.' },
  ],
  faq: [
    { question: 'Czym terminal naramienny różni się od terminala trzymanego w dłoni?', answer: 'Terminal naramienny jest zamocowany na przedramieniu, więc pracownik nie odkłada go przy podnoszeniu towaru. Kody odczytuje osobny skaner noszony na palcu lub dłoni. Terminal trzymany w dłoni zajmuje jedną rękę podczas skanowania.' },
    { question: 'Czy terminal naramienny ma wbudowany skaner kodów?', answer: 'WT5400 i WT6400 nie mają wbudowanego skanera. Kody odczytuje skaner noszony połączony przez Bluetooth lub, w przypadku WT6400, przewodem. Boczny aparat 13 MP w WT6400 wykonuje zdjęcia i może też odczytywać kody. Unitech WD200 Plus również nie ma silnika skanującego: kody czyta jego aparat 16 MP albo sparowany skaner Bluetooth Unitech.' },
    { question: 'Czy do terminala naramiennego trzeba dokupić mocowanie?', answer: 'Tak, w przypadku Zebra WT5400 i WT6400. Terminal jest dostarczany tylko z baterią, dlatego mocowanie na rękę lub pasek oraz sposób ładowania dobiera się przy zamówieniu. W pudełku Unitech WD200 Plus są tylko komputer, przewód USB-C i skrócona instrukcja, więc uchwyt na nadgarstek oraz zasilacz albo stację zamawia się osobno. ProGlove LANA można nosić także w kieszeni, bez mocowania Arm Mount.' },
    { question: 'Jakie skanery współpracują z terminalami naramiennymi Zebra?', answer: 'Z oboma modelami współpracują skanery Bluetooth [RS2100](/produkt/zebra-rs2100), [RS5100](/produkt/zebra-rs5100) i [RS6100](/produkt/zebra-rs6100). WT6400 obsługuje też skanery przewodowe RS4000 i [RS5000x](/produkt/zebra-rs5000x).' },
    { question: 'Czy terminal naramienny można nosić na biodrze?', answer: 'Tak, w mocowaniu na pasek. Taki sposób noszenia stosuje się przy kompletacji głosowej. Dane wprowadza się wtedy skanerem albo zestawem słuchawkowym.' },
  ],
  howToSteps: [
    { name: 'Opis procesu', text: 'Liczba pracowników na zmianę, miejsce pracy (sklep, magazyn, mroźnia) i rodzaj skanera.' },
    { name: 'Wybór terminala i baterii', text: 'WT5400 lub WT6400, wersja z klawiaturą lub bez oraz bateria standardowa albo rozszerzona.' },
    { name: 'Mocowania i ładowanie', text: 'Typ i rozmiar mocowania dla każdego pracownika, stacje ładujące i ładowarki zapasowych baterii.' },
  ],
}
