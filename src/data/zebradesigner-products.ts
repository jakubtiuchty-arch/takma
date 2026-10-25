import type { Product } from './products'

export const zebraDesignerProducts: Product[] = [{
  id: 'zebra-zebradesigner-professional', slug: 'zebra-zebradesigner-professional',
  name: 'ZebraDesigner Professional 3', manufacturerId: 'zebra',
  categoryId: 'oprogramowanie', subcategoryIds: ['programy-do-etykiet'],
  shortDescription: 'Program dla Windows do projektowania i drukowania etykiet na drukarkach Zebra. Dane z Excela i baz ODBC, kody kreskowe oraz RFID. Licencja na jeden komputer.',
  description: `ZebraDesigner Professional 3 to program dla Windows do projektowania i drukowania etykiet na zgodnych drukarkach Zebra. W jednym projekcie umieścisz tekst, grafikę, kody kreskowe oraz pola zmienne.

Połącz szablon z arkuszem Excel, bazą Access lub plikiem tekstowym. Inne bazy podłączysz przez ODBC. Wartości można łączyć i przekształcać, także za pomocą prostych skryptów VB. Kreator GS1-128 ułatwia przygotowanie kodu.

Professional obsługuje projektowanie i kodowanie etykiet RFID. Ta funkcja wymaga zgodnej drukarki RFID oraz odpowiednich etykiet. Sam zakup programu nie dodaje kodowania RFID do zwykłej drukarki.

Jednorazowa licencja aktywacyjna działa na jednym komputerze w danym czasie. Aby przenieść ją na inne stanowisko, najpierw dezaktywuj poprzednią instalację. Program można sprawdzić przez 30 dni przed zakupem.`,
  priceFrom: 804.05, licenseDelivery: 'email', availability: 'on-order', isNew: true, isBestseller: false,
  images: ['/images/products/zebra-zebradesigner-professional-box.png', '/images/zebradesigner-landing/screen-1.jpg', '/images/zebradesigner-landing/screen-2.jpg'],
  imageDescriptions: ['ZebraDesigner Professional 3 — wizualizacja licencji elektronicznej', 'ZebraDesigner Professional — projekt etykiety logistycznej i ustawienia kodu kreskowego', 'ZebraDesigner Professional — widok programu do projektowania etykiet'],
  tags: ['magazyn', 'produkcja', 'logistyka'],
  variants: [{ partNumber: 'ZEBRADESIGNER-PRO3', name: 'licencja bezterminowa, 1 komputer, klucz elektroniczny', attributes: { 'Licencja': 'Bezterminowa', 'Stanowiska': '1 komputer' }, priceFrom: 804.05, availability: 'on-order' }],
  specifications: [
    { name: 'Edycja', value: 'ZebraDesigner Professional 3' },
    { name: 'Licencja', value: 'Jednorazowa aktywacja; jeden komputer w danym czasie' },
    { name: 'System', value: 'Windows 10 lub Windows 11, edycje desktopowe; 32 lub 64 bity' },
    { name: 'Drukarki', value: 'Zgodne drukarki Zebra; zgodność modelu należy sprawdzić przed zakupem' },
    { name: 'Źródła danych', value: 'Microsoft Excel, Microsoft Access, pliki tekstowe, ODBC' },
    { name: 'Dane zmienne', value: 'Dane z klawiatury, data, czas, liczniki, łączenie pól, proste skrypty VB' },
    { name: 'Kody kreskowe', value: 'Projektowanie kodów, kreator GS1-128' },
    { name: 'RFID', value: 'Projektowanie i kodowanie; wymagana zgodna drukarka RFID i etykiety RFID' },
    { name: 'Wersja próbna', value: '30 dni' },
    { name: 'Aktywacja', value: 'License Key i Customer ID; aktywacja online lub procedura offline' },
    { name: 'Starsze projekty', value: 'Obsługa formatów utworzonych w ZebraDesigner 2' },
  ],
  applications: ['Etykiety produktów z danymi z Excela', 'Etykiety logistyczne z kodami kreskowymi', 'Numeracja partii i etykiety z licznikami', 'Kodowanie etykiet RFID na zgodnej drukarce'],
  compatibleAccessories: [], relatedProducts: ['bartender-professional', 'loftware-cloud-designer', 'bartender-starter'],
  faq: [
    { question: 'Czym Professional różni się od Essentials?', answer: 'Essentials 3 jest bezpłatny bez limitu 30 dni i nie wymaga aktywacji. Obejmuje tekst, grafikę, kody kreskowe, kreator GS1-128, dane z klawiatury, datę, czas oraz liczniki. Professional dodaje połączenia z Excelem, Accessem, plikami tekstowymi i bazami przez ODBC, łączenie pól, proste skrypty VB oraz druk i kodowanie RFID na zgodnym sprzęcie. Płatna licencja Professional działa na jednym komputerze w danym czasie; 30 dni dotyczy jego wersji próbnej.' },
    { question: 'Czy licencja obejmuje kilka komputerów?', answer: 'Nie. Jedna licencja działa na jednym komputerze w danym czasie. Przed przeniesieniem licencji dezaktywuj ją na poprzednim stanowisku.' },
    { question: 'Czy program obsługuje drukarki innych marek?', answer: 'ZebraDesigner jest przeznaczony do zgodnych drukarek Zebra. Do floty różnych marek rozważ BarTender lub Loftware. Przed zakupem podaj model swojej drukarki.' },
    { question: 'Czy mogę sprawdzić program przed zakupem?', answer: 'Tak. Zebra udostępnia 30-dniową wersję próbną Professional. Po tym okresie dalsza praca w edycji Professional wymaga zakupu i aktywacji licencji.' },
    { question: 'Czy RFID działa na każdej drukarce Zebra?', answer: 'Nie. Potrzebujesz drukarki wyposażonej w moduł kodowania RFID i zgodnych etykiet RFID. Program służy do przygotowania projektu oraz danych do kodowania.' },
    { question: 'Jak aktywować obecną wersję?', answer: 'Do aktualnej wersji potrzebujesz License Key oraz Customer ID. Starsze 18-cyfrowe klucze zaczynające się od 3467 wymagają wymiany przez sprzedawcę lub wsparcie Zebra przed ponowną aktywacją.' },
  ],
  downloads: [{ name: 'ZebraDesigner Professional 3 — instrukcja (EN)', type: 'pdf', url: '/downloads/zebra/zebradesigner-3-professional-instrukcja-en.pdf', size: '2,3 MB' }, { name: 'ZebraDesigner 3 — instalator i wsparcie Zebra', type: 'driver', url: 'https://www.zebra.com/us/en/support-downloads/software/printer-software/zebra-designer-3-downloads.html', size: 'Online' }],
  seoTitle: 'ZebraDesigner Professional 3 — licencja, etykiety i RFID',
  seoDescription: 'Projektuj etykiety dla drukarek Zebra. Excel, Access, ODBC, kody kreskowe i RFID. ZebraDesigner Professional 3: licencja bezterminowa na jeden komputer. Cena i dostępność TAKMA.',
  sameAs: 'https://www.zebra.com/us/en/software/printer-software/zebradesigner.html', createdAt: '2026-10-25',
}]
