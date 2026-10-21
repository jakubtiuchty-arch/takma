import type { BrandCategoryRichContent } from './brand-category-content'

export const sunmiCategory: BrandCategoryRichContent = {
  updatedAt: '2026-10-21',
  contactText: 'Podaj wymagania aplikacji, rodzaje kodów i sposób pracy. Dobierzemy konfigurację terminala, zasilanie oraz zgodne akcesoria.',
  definition: {
    heading: 'Terminale SUNMI do towaru, zamówień i wydruków',
    content: 'Terminal SUNMI łączy aplikację Android z obsługą danych w miejscu pracy. Kolektory serii L służą do pracy z towarem. M3 obsługuje aplikacje przez Wi-Fi. V3, V3H i V3 Plus mają wbudowaną drukarkę termiczną. Wersję skanera, pamięć oraz usługi Google wybierz według PN.',
  },
  sectionHeadings: {
    technicalDeepDive: 'Porównanie terminali SUNMI',
    expertAuthority: 'Dobór terminala i wyposażenia w TAKMA',
    useCases: 'Który SUNMI do danego zadania?',
    comparisons: 'Różnice, które rozstrzygają wybór',
  },
  technicalDeepDive: 'Porównaj sposób wpisywania danych, odczyt kodów i potrzebę drukowania. Poniższe zestawienie opisuje oferowane konfiguracje. Szczegóły poszczególnych PN znajdziesz na kartach produktów.',
  modelTable: [
    { name: 'SUNMI L3', href: '/produkt/sunmi-l3', role: 'Duży ekran do pracy z towarem', priceFrom: '', specs: [{ label: 'Ekran', value: '6,75 cala' }, { label: 'Odczyt', value: 'SS1111, SE4710 lub bez modułu' }, { label: 'Sieć', value: 'Wi-Fi 5, LTE' }], bestFor: 'Przyjęcia i kompletacja; skaner oraz tylne POGO według PN.' },
    { name: 'SUNMI L2Ks', href: '/produkt/sunmi-l2ks', role: 'Kolektor z klawiaturą', priceFrom: '', specs: [{ label: 'Ekran', value: '4 cale' }, { label: 'Klawiatura', value: '23 klawisze' }, { label: 'Odczyt', value: 'SE4770 lub SS1111' }], bestFor: 'Częste wpisywanie ilości i lokalizacji.' },
    { name: 'SUNMI L2H', href: '/produkt/sunmi-l2h', role: 'Kody i OCR', priceFrom: '', specs: [{ label: 'Ekran', value: '5,5 cala' }, { label: 'Pamięć', value: '4/64 GB' }, { label: 'Sieć', value: 'Wi-Fi 6, LTE' }], bestFor: 'Odczyt kodów 1D/2D i OCR w aplikacji magazynowej.' },
    { name: 'SUNMI L2s Pro', href: '/produkt/sunmi-l2s-pro', role: 'Dotykowy terminal do towaru', priceFrom: '', specs: [{ label: 'Ekran', value: '5,5 cala' }, { label: 'Pamięć', value: '3/32 lub 4/64 GB' }, { label: 'Odczyt', value: 'Moduł 1D/2D lub bez modułu' }], bestFor: 'Uzupełnianie półek i sprawdzanie stanów; konfiguracja według PN.' },
    { name: 'SUNMI M3', href: '/produkt/sunmi-m3', role: 'Zamówienia przez Wi-Fi', priceFrom: '', specs: [{ label: 'Ekran', value: '6,75 cala' }, { label: 'Pamięć', value: '3/32 GB' }, { label: 'System', value: 'Android 14, GMS EDLA' }], bestFor: 'Obsługa zamówień w lokalu. PN P09070020 nie ma LTE ani drukarki.' },
    { name: 'SUNMI V3', href: '/produkt/sunmi-v3', role: 'Wydruki 58 mm', priceFrom: '', specs: [{ label: 'Ekran', value: '6,75 cala' }, { label: 'Pamięć', value: '3/32 GB' }, { label: 'Drukarka', value: 'Papier 58 mm' }], bestFor: 'Wydruki przy kliencie; NFC i skaner według PN.' },
    { name: 'SUNMI V3H', href: '/produkt/sunmi-v3h', role: '58 mm i większa pamięć', priceFrom: '', specs: [{ label: 'Pamięć', value: '4/64 GB' }, { label: 'Drukarka', value: 'Papier 58 mm' }, { label: 'Biometria', value: 'Czytnik linii papilarnych' }], bestFor: 'Aplikacje wymagające większej pamięci niż V3.' },
    { name: 'SUNMI V3 Plus', href: '/produkt/sunmi-v3-plus', role: 'Wydruki 58–80 mm', priceFrom: '', specs: [{ label: 'Pamięć', value: '4/64 GB' }, { label: 'Drukarka', value: 'Papier 58–80 mm' }, { label: 'Sieć', value: 'Wi-Fi 6E, LTE' }], bestFor: 'Szersze wydruki i odczyt 1D/2D. Android 14.' },
  ],
  buyingGuide: { heading: 'Jak wybrać konfigurację SUNMI?', items: [
    'Aplikacja — sprawdź wersję Androida, pamięć i wymaganie usług GMS. Sama obecność Androida nie oznacza GMS.',
    'Kody — odróżnij dedykowany skaner od aparatu. Wariant bez modułu skanującego nie ma tego samego wyposażenia.',
    'Sieć — oferowany M3 działa przez Wi-Fi. Do pracy poza zasięgiem sieci lokalnej porównaj konfiguracje LTE.',
    'Wydruk — V3 i V3H używają papieru 58 mm. V3 Plus obsługuje 58–80 mm.',
    'Wyposażenie — stacje, uchwyty i osłony dobierz do modelu i PN. Aplikacja oraz licencja są osobnymi elementami wdrożenia.',
  ] },
  useCases: [
    { title: 'Magazyn i sala sprzedaży', description: 'L3 ma duży ekran do list towarów. L2Ks ułatwia wpisywanie ilości klawiaturą. L2H obsługuje OCR, a L2s Pro oferuje różne konfiguracje pamięci i skanera.' },
    { title: 'Obsługa zamówień w lokalu', description: 'M3 P09070020 pracuje przez Wi-Fi i ma GMS EDLA. Wymaga zgodnej aplikacji. Nie ma wbudowanej drukarki ani modemu 4G.' },
    { title: 'Wydruk przy kliencie', description: 'V3 i V3H drukują na papierze 58 mm. Do szerszego papieru wybierz V3 Plus. Wbudowana drukarka termiczna nie zastępuje polskiego urządzenia fiskalnego.' },
  ],
  uniqueInsights: { heading: 'Zgodność akcesoriów ma znaczenie', items: [
    { title: 'Uchwyt L3 wymaga tylnych POGO', text: 'C14004144 pasuje do oferowanych PN P09070073 i P09070030. Nie wystarczy sama nazwa L3.' },
    { title: 'Osłona a stacja L2H i L2s Pro', text: 'C14000144 wymaga zdjęcia osłony. C14004067 obsługuje terminale z osłoną i bez niej.' },
    { title: 'V3 Plus ma osobne wyposażenie', text: 'Pasek C20000086 pasuje do V3, V3H i V3 Plus. Nie przenoś tej zgodności na stacje oraz osłony.' },
  ] },
  comparisons: [
    { title: 'L2Ks czy terminal dotykowy?', content: '[L2Ks](/produkt/sunmi-l2ks) ma 23 fizyczne klawisze. Wybierz go do częstego wpisywania ilości. [L3](/produkt/sunmi-l3) ma większy ekran do rozbudowanych list i formularzy.' },
    { title: 'V3, V3H czy V3 Plus?', content: '[V3](/produkt/sunmi-v3) ma 3/32 GB i drukarkę 58 mm. [V3H](/produkt/sunmi-v3h) zwiększa pamięć do 4/64 GB i dodaje czytnik linii papilarnych. [V3 Plus](/produkt/sunmi-v3-plus) obsługuje papier 58–80 mm, Wi-Fi 6E i Android 14.' },
  ],
  expertAuthority: 'Dobierzemy terminal do aplikacji, sposobu odczytu i sieci. Podaj wymagania programu oraz rodzaj kodów. Inne marki porównasz w kategorii [terminale mobilne](/terminale-mobilne).',
  howToSteps: [],
  faq: [
    { question: 'Który SUNMI ma fizyczną klawiaturę?', answer: 'L2Ks ma ekran 4 cale i 23 klawisze. Pozostałe pokazane tu modele obsługuje się przede wszystkim przez ekran dotykowy.' },
    { question: 'Czy wszystkie terminale SUNMI mają skaner i GMS?', answer: 'Nie. Moduł skanujący i GMS zależą od PN. W L2Ks P09044063 nie ma GMS ani NFC. W L3, L2s Pro i rodzinie V3 występują wersje bez osobnego skanera.' },
    { question: 'Czy SUNMI V3 zastępuje kasę fiskalną?', answer: 'Nie. Wbudowana drukarka termiczna drukuje dane ze zgodnej aplikacji. Nie jest polskim urządzeniem fiskalnym.' },
    { question: 'Czy NFC oznacza obsługę płatności lub UHF RFID?', answer: 'Nie. NFC służy do zgodnych nośników zbliżeniowych. Nie oznacza gotowej usługi płatniczej ani czytnika UHF RFID.' },
    { question: 'Czy program magazynowy jest częścią terminala?', answer: 'Nie. Zgodną aplikację i jej licencję dobiera się osobno. Przed zakupem sprawdź wymagania systemu, pamięci i usług Google.' },
  ],
}
