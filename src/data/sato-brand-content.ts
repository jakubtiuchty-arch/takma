import type { BrandPillarData } from './brand-pillar-content'

export const satoBrandContent: BrandPillarData = {
  updatedAt: '2026-11-01',
  heroText: 'SATO łączy drukarki z materiałami do znakowania, technologią RFID i oprogramowaniem. Oferta obejmuje etykiety i metki, taśmy termotransferowe, opaski identyfikacyjne oraz metkownice ręczne. W TAKMA porównasz drukarki, serie taśm i zgodne akcesoria. Pozostałe rozwiązania dobierzemy do zastosowania w Twojej firmie.',
  categoryTiles: [
    { categoryId: 'drukarki-etykiet', name: 'Drukarki SATO', href: '/katalog?producent=sato&kategoria=drukarki-etykiet', description: 'Modele przemysłowe, kompaktowe, medyczne oraz konfiguracje RFID.' },
    { categoryId: 'materialy-eksploatacyjne', name: 'Taśmy termotransferowe SATO', href: '/tasmy-termotransferowe-sato', description: 'Osiem serii woskowych, woskowo-żywicznych i żywicznych. Wybierz rozmiar i rodzaj nadruku.' },
    { categoryId: 'akcesoria', name: 'Akcesoria SATO', href: '/katalog?producent=sato&kategoria=akcesoria', description: 'Elementy wyposażenia do konkretnych drukarek. Sprawdź zgodność modelu i numer PN.' },
  ],
  portfolio: {
    intro: 'Drukarka jest częścią całego procesu identyfikacji. Poniżej znajdziesz główne grupy produktów i rozwiązań SATO. Pozycje spoza katalogu sklepu wymagają indywidualnego potwierdzenia konfiguracji i dostępności.',
    items: [
      { name: 'Drukarki i moduły drukujące', description: 'Urządzenia przemysłowe, biurkowe i mobilne oraz moduły do systemów drukowania i aplikacji etykiet. Dobór zależy od formatu, nakładu, materiału i integracji z linią.' },
      { name: 'Etykiety i metki', description: 'Materiały papierowe oraz syntetyczne, do druku termicznego i termotransferowego. Etykiety samoprzylepne i metki bez kleju dobiera się do powierzchni, temperatury oraz wymaganej trwałości.' },
      { name: 'Etykiety linerless', description: 'Etykiety bez podkładu oddzielającego. Pozwalają ograniczyć odpady z podkładu. Wymagają drukarki przystosowanej do danego materiału i sposobu odcinania.' },
      { name: 'Taśmy termotransferowe', description: 'Serie Value, Flex i Flow obejmują taśmy woskowe, woskowo-żywiczne oraz żywiczne. Dobierz powłokę do podłoża i odporności nadruku, a szerokość, nawój i gilzę do drukarki.' },
      { name: 'Opaski identyfikacyjne', description: 'Opaski do identyfikacji pacjentów i obsługi procesów medycznych. Materiał, sposób zapięcia i zgodność z drukarką należy dobrać do warunków użytkowania.' },
      { name: 'RFID i PJM', description: 'Drukarki RFID zapisują dane w zgodnych znacznikach. Osobna rodzina PJM obejmuje znaczniki, czytniki i rozwiązania do identyfikacji wielu obiektów, również ułożonych blisko siebie.' },
      { name: 'Metkownice i aplikatory ręczne', description: 'Metkownice jedno-, dwu- i trzyrzędowe do cen, dat i oznaczeń partii. Ręczne aplikatory ułatwiają nanoszenie gotowych etykiet.' },
      { name: 'Oprogramowanie i integracja', description: 'AEP, AEP Cloud i SOS wspierają aplikacje etykietowe, dystrybucję danych i nadzór nad urządzeniami. Zakres funkcji oraz zgodność zależą od modelu i wybranej usługi.' },
      { name: 'Skanery i terminale partnerów', description: 'Rozwiązania SATO można uzupełniać urządzeniami do odczytu kodów i zbierania danych od partnerów. Nie są to własne modele terminali SATO; dobór wymaga sprawdzenia aplikacji i interfejsów.' },
    ],
  },
  featuredTitle: 'Wybrane produkty SATO w TAKMA',
  featuredSlugs: ['sato-cl4-sxr', 'sato-cl6-sxr', 'sato-cl4nx-plus', 'sato-cl6nx-plus', 'sato-ct4-lx-rfid', 'sato-cl4-sxr-rfid', 'sato-ct4-lx-hc', 'sato-ws2-2'],
  aboutParagraphs: [
    'SATO dostarcza rozwiązania do automatycznej identyfikacji i znakowania. Drukarki, nośniki danych oraz oprogramowanie wspólnie obsługują oznaczanie produktów, jednostek logistycznych i pacjentów.',
    'Oferta producenta jest szersza od listy produktów w sklepie. Katalog TAKMA obejmuje rodziny CL4-SXR, CL6-SXR, CL4NX Plus i CL6NX Plus, konfiguracje RFID, CT4-LX-HC i WS2-2 oraz akcesoria i serie taśm. Wybór konkretnego numeru PN określa wyposażenie urządzenia.',
    'Przy doborze rozwiązania zacznij od etykiety: jej wymiaru, powierzchni i warunków pracy. Następnie dopasuj technologię druku, materiał, taśmę, rozdzielczość i sposób przekazywania danych. RFID wymaga dodatkowo zgodności znacznika i modułu kodującego.',
  ],
  technologiesTitle: 'Technologie i oprogramowanie SATO',
  technologiesIntro: 'Funkcje zależą od modelu, wyposażenia oraz usługi. Przed wdrożeniem sprawdź zgodność drukarki z wybranym rozwiązaniem.',
  technologies: [
    { name: 'AEP', badge: 'Aplikacje', description: 'Platforma do uruchamiania aplikacji bezpośrednio na zgodnej drukarce. Pozwala budować stanowiska etykietowania bez komputera, także z podłączonym skanerem, klawiaturą lub wagą.' },
    { name: 'AEP Cloud', badge: 'Chmura', description: 'Platforma do zarządzania aplikacjami i danymi wykorzystywanymi podczas etykietowania. Pomaga udostępniać aktualne informacje wielu stanowiskom.' },
    { name: 'SATO Online Services', badge: 'Nadzór', description: 'SOS służy do zdalnego monitorowania zgodnych drukarek. Udostępnia informacje o stanie urządzenia, które pomagają planować obsługę i reagować na problemy.' },
    { name: 'RFID', badge: 'Identyfikacja', description: 'Wyposażona w odpowiedni moduł drukarka może drukować etykietę i kodować znacznik. UHF i HF wymagają zgodnych znaczników oraz odpowiedniej konfiguracji sprzętowej.' },
    { name: 'PJM', badge: 'Odczyt wielu obiektów', description: 'Technologia identyfikacji stosowana m.in. przy obiegu materiałów medycznych. Rozwiązanie obejmuje czytniki, znaczniki i oprogramowanie dobrane do procesu.' },
    { name: 'Projektowanie etykiet', badge: 'Integracja', description: 'SATO współpracuje także z oprogramowaniem innych producentów, m.in. BarTender, NiceLabel i TEKLYNX. Dobór programu oraz sterownika zależy od drukarki i źródła danych.' },
  ],
  industries: [
    { name: 'Produkcja', description: 'Oznaczanie wyrobów, części, partii i opakowań. Materiał etykiety oraz taśma muszą odpowiadać warunkom dalszego użytkowania.', products: 'Drukarki przemysłowe, etykiety, taśmy, moduły drukujące' },
    { name: 'Logistyka i magazyn', description: 'Etykiety na kartony i palety, oznaczenia lokalizacji oraz identyfikacja RFID. Szerokość druku dobierz do wzoru etykiety logistycznej.', products: 'CL4-SXR, CL6-SXR, CL4NX Plus, CL6NX Plus i konfiguracje RFID' },
    { name: 'Ochrona zdrowia', description: 'Identyfikacja pacjentów, próbek i materiałów. Dobór obejmuje zarówno drukarkę, jak i odpowiednie opaski lub etykiety.', products: 'CT4-LX-HC, WS2-2, opaski i rozwiązania PJM' },
    { name: 'Handel i żywność', description: 'Ceny, daty, partie i oznaczenia produktów. Metkownice ręczne uzupełniają stanowiska drukowania etykiet.', products: 'Drukarki kompaktowe, etykiety, metki i metkownice' },
  ],
  timeline: [], partnership: [], service: [], comparisonIntro: '', comparison: [], showServiceBanner: false,
  whyBuyItems: [
    { title: 'Dobór urządzenia', text: 'Porównaj format druku, rozdzielczość, interfejsy i obsługę materiałów. Wybierz wyposażenie na podstawie konkretnego numeru PN.' },
    { title: 'Materiały do zastosowania', text: 'Dobierz etykietę i taśmę do powierzchni, temperatury oraz wymaganej odporności nadruku.' },
    { title: 'Zgodne akcesoria', text: 'Sprawdź obcinak, odklejak, nawijak i pozostałe elementy pod kątem konkretnego modelu drukarki.' },
  ],
  faq: [
    { question: 'Czy SATO produkuje tylko drukarki?', answer: 'Nie. Oferta obejmuje także etykiety i metki, taśmy termotransferowe, opaski identyfikacyjne, metkownice i aplikatory ręczne, rozwiązania RFID oraz oprogramowanie.' },
    { question: 'Które produkty SATO są w katalogu TAKMA?', answer: 'Katalog obejmuje drukarki CL4-SXR, CL6-SXR, CL4NX Plus, CL6NX Plus, modele i konfiguracje RFID, CT4-LX-HC, WS2-2, zgodne akcesoria oraz osiem serii taśm. Aktualne ceny i dostępność sprawdzisz na kartach produktów.' },
    { question: 'Jak dobrać taśmę SATO?', answer: 'Sprawdź rodzaj etykiety i wymaganą odporność nadruku. Następnie dobierz szerokość, długość nawoju, gilzę i stronę barwiącą do drukarki. Taśmy woskowe, woskowo-żywiczne i żywiczne mają różne zastosowania.' },
    { question: 'Czy każda drukarka SATO obsługuje RFID?', answer: 'Nie. Kodowanie wymaga odpowiedniej konfiguracji z modułem RFID i zgodnych znaczników. Samo drukowanie kodów kreskowych nie oznacza obsługi RFID.' },
    { question: 'Czy można drukować bez komputera?', answer: 'Tak, na zgodnych drukarkach z odpowiednio przygotowaną aplikacją AEP. Sposób wprowadzania danych i podłączania urządzeń zewnętrznych zależy od modelu oraz aplikacji.' },
    { question: 'Czy wszystkie rozwiązania producenta można od razu kupić online?', answer: 'Nie. Produkty obecne w katalogu mają własne karty. Dobór etykiet na zamówienie, opasek, metkownic i rozwiązań projektowych wymaga indywidualnego potwierdzenia dostępności oraz parametrów.' },
  ],
  guideLinks: [ { title: 'Wybierz serię taśm termotransferowych SATO', href: '/tasmy-termotransferowe-sato' }, { title: 'Porównaj drukarki etykiet', href: '/drukarki-etykiet' }, { title: 'Zobacz pełny katalog SATO w TAKMA', href: '/katalog?producent=sato' } ],
}
