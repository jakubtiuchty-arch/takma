import type { BrandCategoryRichContent } from './brand-category-content'

export const bluebirdFaq = [
  { question: 'Które terminale Bluebird mają 5G?', answer: 'Wersje 5G mają S20, S50, S70 i EF551 (PN z oznaczeniem A5) oraz S70 Explosion Protection. S10 i EK430 mają wersje 4G LTE, a SF650 ma 4G LTE w każdej wersji. Terminale z eSIM to S20, S50, S70, S70 Explosion Protection, EF551 i S10 w wersji z modemem.' },
  { question: 'Czy terminale Bluebird mają zasilacz w zestawie?', answer: 'Nie, poza smartfonem SF650. Do ładowania bezpośredniego potrzebne są zasilacz 5 V / 3 A (602010041), wtyczka EU (602020024) i kabel USB-A – USB-C (603010005). Stacje ładujące mają osobne zasilacze 9 V albo 12 V i przewód zasilający EU.' },
  { question: 'Który terminal Bluebird ma klawiaturę?', answer: 'EK430 ma klawiaturę 34-klawiszową numeryczną albo 47-klawiszową alfanumeryczną oraz ekran dotykowy 4,3 cala. Jest dostępny w obudowie prostej i pistoletowej. Pozostałe terminale Bluebird w ofercie są dotykowe.' },
  { question: 'Czy Bluebird ma terminal do strefy zagrożonej wybuchem?', answer: 'Tak. S70 Explosion Protection ma certyfikaty ATEX, IECEx i UKEX do strefy 2 i 22. Ma te same wymiary, procesor i ekran co S70.' },
  { question: 'Czy Bluebird ma terminal z czytnikiem UHF RFID?', answer: 'Tak. S10 RFID ma wbudowany czytnik UHF w uchwycie pistoletowym. Oferowana wersja pracuje w europejskim paśmie 865–868 MHz i odczytuje ponad 1300 tagów na sekundę.' },
  { question: 'Czy terminale Bluebird dostają aktualizacje Androida?', answer: 'Najwyższa zapowiedziana wersja Androida zależy od modelu, np. Android 17 dla S20 i Android 18 dla S10. Aktualizacje systemu wymagają wykupienia programu gwarancyjnego Bluebird (BluebirdCare). Wersje i terminy zależą od planu Qualcomm.' },
  { question: 'Jaka jest gwarancja na terminale Bluebird?', answer: 'Gwarancja na terminale Bluebird w naszej ofercie wynosi 12 miesięcy.' },
]

export const bluebirdCategory: BrandCategoryRichContent = {
  updatedAt: '2026-10-24',
  contactText: 'Podaj rodzaj kodów, aplikację i sposób pracy. Dobierzemy terminal Bluebird, zasilanie oraz zgodne stacje i baterie.',
  definition: {
    heading: 'Terminale Bluebird do magazynu, sklepu i pracy w terenie',
    content: 'Bluebird produkuje terminale mobilne z Androidem i czytniki RFID. Terminal łączy skaner kodów z aplikacją firmy i komunikuje się z nią przez Wi-Fi albo sieć komórkową. Modele dotykowe mają ekrany od 5,45 do 6,5 cala. Model z klawiaturą ma ekran 4,3 cala i klawiaturę numeryczną albo alfanumeryczną. W ofercie są też terminal z czytnikiem UHF RFID, wersja z certyfikatem ATEX i smartfon firmowy bez skanera.',
  },
  sectionHeadings: {
    technicalDeepDive: 'Porównanie terminali Bluebird',
    expertAuthority: 'Dobór terminala i wyposażenia w TAKMA',
    useCases: 'Który Bluebird do danego zadania?',
    comparisons: 'Różnice, które rozstrzygają wybór',
  },
  buyingGuide: {
    heading: 'Jak wybrać terminal Bluebird?',
    items: [
      'Obsługa — terminal dotykowy do aplikacji mobilnych albo EK430 z klawiaturą do częstego wpisywania ilości i kodów.',
      'Skaner — moduł standardowy do odczytu z bliska albo SE55 lub SE4850 do kodów na wysokich regałach.',
      'Łączność — wersja z Wi-Fi do pracy w budynku albo wersja 4G LTE lub 5G do pracy w terenie.',
    ],
  },
  expertAuthority: 'Pomożemy dobrać terminal Bluebird do aplikacji, kodów i sieci. Sprawdzimy zgodność stacji, baterii i uchwytów z wybranym modelem. Terminale innych marek są w kategorii [terminale mobilne](/terminale-mobilne).',
  technicalDeepDive: 'Zestawienie obejmuje oferowane konfiguracje. Szczegóły poszczególnych PN są na kartach produktów.',
  modelTableLayout: 'tabela',
  modelTable: [
    { name: 'Bluebird S10', href: '/produkt/bluebird-s10', role: 'Dotykowy, podstawowy', priceFrom: '', specs: [{ label: 'Ekran', value: '5,5 cala' }, { label: 'System', value: 'Android 14' }, { label: 'Sieć', value: 'Wi-Fi, 4G LTE' }], bestFor: 'Sklep, proste zadania magazynowe i dostawy.' },
    { name: 'Bluebird S20', href: '/produkt/bluebird-s20', role: 'Dotykowy, smukły', priceFrom: '', specs: [{ label: 'Ekran', value: '6 cali' }, { label: 'Skaner', value: 'SE4710' }, { label: 'Sieć', value: 'Wi-Fi 6E, 5G' }], bestFor: 'Handel i logistyka; obudowa 12,5 mm, 243 g.' },
    { name: 'Bluebird S50', href: '/produkt/bluebird-s50', role: 'Dotykowy, wzmocniony', priceFrom: '', specs: [{ label: 'Ekran', value: '6 cali, 600 nitów' }, { label: 'Skaner', value: 'SE4720, SE4770, SE55' }, { label: 'Sieć', value: 'Wi-Fi 6E, 5G' }], bestFor: 'Handel, doręczenia i serwis terenowy; 2,4 m w osłonie.' },
    { name: 'Bluebird S70', href: '/produkt/bluebird-s70', role: 'Dotykowy, wzmocniony', priceFrom: '', specs: [{ label: 'Ekran', value: '6 cali, 600 nitów' }, { label: 'Upadki', value: '3,05 m (temp. pokojowa)' }, { label: 'Sieć', value: 'Wi-Fi 6E, 5G' }], bestFor: 'Handel, doręczenia, serwis terenowy i służby publiczne.' },
    { name: 'Bluebird S70 Explosion Protection', href: '/produkt/bluebird-s70-explosion-protection', role: 'Strefa Ex 2/22', priceFrom: '', specs: [{ label: 'Certyfikaty', value: 'ATEX, IECEx, UKEX' }, { label: 'Skaner', value: 'SE4770' }, { label: 'Sieć', value: 'Wi-Fi 6E, 5G' }], bestFor: 'Zakłady z atmosferą wybuchową w strefie 2 i 22.' },
    { name: 'Bluebird EF551', href: '/produkt/bluebird-ef551', role: 'Dotykowy, kompaktowy', priceFrom: '', specs: [{ label: 'Ekran', value: '5,45 cala' }, { label: 'Obudowa', value: 'Standardowa lub Rugged (EF551R)' }, { label: 'Sieć', value: 'Wi-Fi 6E, 5G' }], bestFor: 'Handel, doręczenia i ochrona zdrowia; EF551R do upadków z 2,4 m w temperaturze pokojowej.' },
    { name: 'Bluebird EK430', href: '/produkt/bluebird-ek430', role: 'Z klawiaturą', priceFrom: '', specs: [{ label: 'Klawiatura', value: '34 lub 47 klawiszy' }, { label: 'Obudowa', value: 'Prosta lub pistoletowa' }, { label: 'Skaner', value: 'SE4710, SE4850' }], bestFor: 'Kompletacja z wpisywaniem ilości i aplikacje terminalowe.' },
    { name: 'Bluebird S10 RFID', href: '/produkt/bluebird-s10-rfid', role: 'UHF RFID', priceFrom: '', specs: [{ label: 'RFID', value: '865–868 MHz (EU)' }, { label: 'Odczyt', value: 'Ponad 1300 tagów/s' }, { label: 'Zasięg', value: 'Ponad 13 m' }], bestFor: 'Inwentaryzacja towarów i majątku z tagami UHF.' },
    { name: 'Bluebird SF650', href: '/produkt/bluebird-sf650', role: 'Smartfon bez skanera', priceFrom: '', specs: [{ label: 'Ekran', value: '6,5 cala' }, { label: 'Sieć', value: '4G LTE, Wi-Fi 5' }, { label: 'Skaner', value: 'Brak' }], bestFor: 'Komunikacja i aplikacje firmowe bez odczytu kodów.' },
  ],
  useCases: [
    { title: 'Magazyn i kompletacja', description: 'S10 obsługuje kompletację, wysyłki i przyjęcia towaru. EK430 ma klawiaturę do wpisywania ilości i wersję pistoletową.' },
    { title: 'Sklep i dostawy', description: 'S10 i S20 są lekkie i mają wersje z modemem. SF650 służy do komunikacji i aplikacji firmowych bez odczytu kodów.' },
    { title: 'Warunki szczególne', description: 'S70 wytrzymuje upadki z 3,05 m na beton w temperaturze pokojowej. S70 Explosion Protection pracuje w strefie 2 i 22. S10 RFID odczytuje tagi UHF.' },
  ],
  uniqueInsights: {
    heading: 'Co sprawdzić przed zakupem wyposażenia?',
    items: [
      { title: 'Zasilacz jest sprzedawany osobno', text: 'Poza SF650 terminale nie mają zasilacza w zestawie. Karta każdego terminala pokazuje zasilacz, wtyczkę i kabel potrzebne do ładowania.' },
      { title: 'Stacje wymagają zasilacza i czasem podkładki', text: 'Stacje S10, S20 i S50 wymagają podkładki dla terminala bez osłony rugged boot. Stacje EF551 wymagają podkładki dopasowanej do obudowy terminala. Zasilacz i przewód zasilający do stacji zamawia się osobno.' },
    ],
  },
  comparisons: [
    { title: 'S50 czy S70?', content: '[S50](/produkt/bluebird-s50) i [S70](/produkt/bluebird-s70) mają ten sam procesor, ekran i stacje. S70 wytrzymuje upadki z 3,05 m na beton w temperaturze pokojowej i z baterią standardową waży 355 g. S50 z baterią standardową waży 322 g i wytrzymuje upadek z 2,4 m w osłonie ochronnej.' },
    { title: 'EF551 czy EF551R?', content: '[EF551](/produkt/bluebird-ef551) ma obudowę standardową i masę 284,5 g. EF551R ma obudowę Rugged, masę 332 g i odporność na upadki z 2,4 m w temperaturze pokojowej. Obie wersje pasują do tych samych stacji.' },
  ],
  howToSteps: [],
  faq: bluebirdFaq,
}
