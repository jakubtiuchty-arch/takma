import type { BrandCategoryRichContent } from './brand-category-content'

export const sunmiCategory: BrandCategoryRichContent = {
  updatedAt: '2026-10-22',
  contactText: 'Podaj wymagania aplikacji, rodzaje kodów i sposób pracy. Dobierzemy konfigurację terminala, zasilanie oraz zgodne akcesoria.',
  definition: {
    heading: 'Terminale SUNMI do towaru, zamówień i wydruków',
    content: 'Terminal SUNMI łączy aplikację Android z obsługą danych w miejscu pracy. Kolektory serii L służą do pracy z towarem. M3 obsługuje aplikacje przez Wi-Fi. V3, V3H i V3 Plus mają wbudowaną drukarkę termiczną. Wersję skanera, pamięć oraz usługi Google wybierz według PN. Stacjonarne stanowiska kasowe z ekranem 15,6" to [SUNMI T3](/produkt/sunmi-t3), [SUNMI T3 PRO](/produkt/sunmi-t3-pro), [SUNMI D3](/produkt/sunmi-d3) i [SUNMI D3 PRO](/produkt/sunmi-d3-pro) w kategorii [komputery POS](/komputery-pos).',
  },
  sectionHeadings: {
    technicalDeepDive: 'Porównanie terminali SUNMI',
    expertAuthority: 'Dobór terminala i wyposażenia w TAKMA',
    useCases: 'Który SUNMI do danego zadania?',
    comparisons: 'Różnice, które rozstrzygają wybór',
  },
  technicalDeepDive: 'Porównaj sposób wpisywania danych, odczyt kodów i potrzebę drukowania. Poniższe zestawienie opisuje oferowane konfiguracje. Szczegóły poszczególnych PN są na kartach produktów.',
  modelTableLayout: 'tabela',
  modelTable: [
    { name: 'SUNMI L3', href: '/produkt/sunmi-l3', role: 'Duży ekran do pracy z towarem', priceFrom: '', specs: [{ label: 'Ekran', value: '6,75 cala' }, { label: 'Odczyt', value: 'SS1111, SE4710 lub bez modułu' }, { label: 'Sieć', value: 'Wi-Fi 5, LTE' }], bestFor: 'Przyjęcia i kompletacja; skaner oraz tylne POGO według PN.' },
    { name: 'SUNMI L2Ks', href: '/produkt/sunmi-l2ks', role: 'Kolektor z klawiaturą', priceFrom: '', specs: [{ label: 'Ekran', value: '4 cale' }, { label: 'Klawiatura', value: '23 klawisze' }, { label: 'Odczyt', value: 'SE4770 lub SS1111' }], bestFor: 'Częste wpisywanie ilości i lokalizacji.' },
    { name: 'SUNMI L2H', href: '/produkt/sunmi-l2h', role: 'Kody i OCR', priceFrom: '', specs: [{ label: 'Ekran', value: '5,5 cala' }, { label: 'Pamięć', value: '4/64 GB' }, { label: 'Sieć', value: 'Wi-Fi 802.11ac, LTE' }], bestFor: 'Odczyt kodów 1D/2D i OCR w aplikacji magazynowej.' },
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
    'Wyposażenie — stacje, uchwyty i etui dobierz do modelu i PN. Aplikacja oraz licencja są osobnymi elementami wdrożenia.',
  ] },
  useCases: [
    { title: 'Magazyn i sala sprzedaży', description: 'L3 ma duży ekran do list towarów. L2Ks ułatwia wpisywanie ilości klawiaturą. L2H obsługuje OCR, a L2s Pro oferuje różne konfiguracje pamięci i skanera.' },
    { title: 'Obsługa zamówień w lokalu', description: 'M3 P09070020 pracuje przez Wi-Fi i ma GMS EDLA. Wymaga zgodnej aplikacji. Nie ma wbudowanej drukarki ani modemu 4G.' },
    { title: 'Wydruk przy kliencie', description: 'V3 i V3H drukują na papierze 58 mm. Do szerszego papieru wybierz V3 Plus. Wbudowana drukarka termiczna nie zastępuje polskiego urządzenia fiskalnego.' },
  ],
  uniqueInsights: { heading: 'Zgodność akcesoriów ma znaczenie', items: [
    { title: 'Uchwyt L3 wymaga tylnych POGO', text: 'C14004144 pasuje do oferowanych PN P09070073 i P09070030. Pozostałe PN L3 w ofercie nie mają tylnych styków POGO.' },
    { title: 'Stacje do L2H i L2s Pro', text: 'C14004067 ładuje cztery terminale, także w etui, z uchwytem spustowym albo z paskiem na dłoń. C14000144 ładuje jednocześnie terminal i zapasową baterię.' },
    { title: 'V3 Plus ma osobne wyposażenie', text: 'Pasek na dłoń C20000086 pasuje do V3, V3H i V3 Plus. Stacja C14004112 i etui C20000095 pasują do V3 i V3H.' },
  ] },
  comparisons: [
    { title: 'L2Ks czy terminal dotykowy?', content: '[L2Ks](/produkt/sunmi-l2ks) ma 23 fizyczne klawisze. Wybierz go do częstego wpisywania ilości. [L3](/produkt/sunmi-l3) ma większy ekran do rozbudowanych list i formularzy.' },
    { title: 'V3, V3H czy V3 Plus?', content: '[V3](/produkt/sunmi-v3) ma 3/32 GB i drukarkę 58 mm. [V3H](/produkt/sunmi-v3h) zwiększa pamięć do 4/64 GB i dodaje czytnik linii papilarnych. [V3 Plus](/produkt/sunmi-v3-plus) obsługuje papier 58–80 mm, Wi-Fi 6E i Android 14.' },
  ],
  expertAuthority: 'Dobierzemy terminal do aplikacji, sposobu odczytu i sieci. Podaj wymagania programu oraz rodzaj kodów. Terminale innych marek są w kategorii [terminale mobilne](/terminale-mobilne).',
  howToSteps: [],
  faq: [
    { question: 'Który SUNMI ma fizyczną klawiaturę?', answer: 'L2Ks ma ekran 4 cale i 23 klawisze. Pozostałe pokazane tu modele obsługuje się przede wszystkim przez ekran dotykowy.' },
    { question: 'Czy wszystkie terminale SUNMI mają skaner i GMS?', answer: 'Nie. Moduł skanujący i GMS zależą od PN. L2Ks P09044063 pracuje na SUNMI OS bez GMS. W L3, L2s Pro, V3 i V3H występują wersje bez osobnego skanera.' },
    { question: 'Czy SUNMI V3 zastępuje kasę fiskalną?', answer: 'Nie. Wbudowana drukarka termiczna drukuje dane ze zgodnej aplikacji. Nie jest polskim urządzeniem fiskalnym.' },
    { question: 'Czy NFC oznacza obsługę płatności lub UHF RFID?', answer: 'Nie. NFC służy do zgodnych nośników zbliżeniowych. Nie oznacza gotowej usługi płatniczej ani czytnika UHF RFID.' },
    { question: 'SUNMI M3 czy L3 — który wybrać?', answer: '[SUNMI M3](/produkt/sunmi-m3) P09070020 pracuje przez Wi-Fi. Nie ma modemu 4G, NFC ani osobnego skanera, a obudowa ma klasę IP65. [SUNMI L3](/produkt/sunmi-l3) ma 4G LTE, NFC, obudowę IP68 i wersje ze skanerem SS1111 lub SE4710. Oba modele mają ekran 6,75 cala, Android 14 z GMS EDLA i wspólne stacje ładujące.' },
    { question: 'Jaki papier pasuje do drukarki SUNMI V3?', answer: '[SUNMI V3](/produkt/sunmi-v3) i [V3H](/produkt/sunmi-v3h) drukują na papierze termicznym o szerokości 58 mm. Rolka może mieć średnicę do 50 mm. [V3 Plus](/produkt/sunmi-v3-plus) obsługuje papier o szerokości 58–80 mm i rolki o średnicy do 60 mm. Do wydruku etykiet i paragonów z terminala lub tabletu SUNMI służy osobna drukarka [SUNMI NT220](/produkt/sunmi-nt220) na papier 30–58 mm, z USB-C i Bluetooth. Na papier do 80 mm i etykiety bez podkładu jest [SUNMI NT320](/produkt/sunmi-nt320) z USB-C i Ethernetem.' },
    { question: 'Czy SUNMI V3H ma usługi Google?', answer: 'Tak. Oba oferowane PN [SUNMI V3H](/produkt/sunmi-v3h), P06100033 i P06100047, mają system z usługami Google GMS EDLA. W [SUNMI V3](/produkt/sunmi-v3) usługi Google mają P06100009 i P06100077. P06100035 i P06100007 mają SUNMI OS bez usług Google.' },
    { question: 'Czy SUNMI L3 ma RFID i NFC?', answer: 'Wszystkie oferowane PN [SUNMI L3](/produkt/sunmi-l3) mają NFC do zgodnych kart i znaczników zbliżeniowych. Nie mają czytnika UHF RFID. Wersja L3 z UHF RFID jest osobną konfiguracją i nie ma jej w tej ofercie.' },
    { question: 'Czy program magazynowy jest częścią terminala?', answer: 'Nie. Zgodną aplikację i jej licencję dobiera się osobno. Przed zakupem sprawdź wymagania systemu, pamięci i usług Google.' },
  ],
}
