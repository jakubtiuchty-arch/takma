import type { Subcategory } from './products'
import type { SubcategoryRichContent } from './subcategory-content'
import { rfidLabelProducts } from './rfid-label-products'

export const rfidLabelCategory: Subcategory = {
  id: 'etykiety-rfid',
  slug: 'etykiety-rfid-zebra',
  name: 'Etykiety RFID Zebra',
  parentCategoryId: 'materialy-eksploatacyjne',
  description: 'Etykiety RAIN UHF RFID do produktów, opakowań i metalu. Rolki przemysłowe, biurkowe i mobilne.',
  seoTitle: 'Etykiety RFID Zebra — rolki UHF i Silverline | TAKMA',
  seoDescription: 'Etykiety RFID Zebra do produktów, opakowań i metalu. Wybierz PN, wymiary oraz rolkę do drukarki. Sprawdź ceny netto i aktualne stany w TAKMA.',
  longDescription: 'Etykiety RFID Zebra łączą powierzchnię do nadruku z anteną i układem do radiowego zapisu danych. Wybierz rolkę do drukarki przemysłowej, biurkowej lub mobilnej. Do metalowych przedmiotów dobierz konstrukcję Silverline albo Metal Skin i odpowiednią konfigurację On-Metal. Na kartach znajdziesz numery PN, wymiary, nawój oraz warunki zgodności z drukarkami. Ceny dotyczą jednej rolki.',
  icon: 'tag',
  productIds: rfidLabelProducts.map(product => product.id),
  productCount: rfidLabelProducts.length,
}

export const rfidLabelContent: SubcategoryRichContent = {
  updatedAt: '2026-10-15',
  definition: {
    heading: 'Co to jest etykieta RFID i do czego służy?',
    content: 'Etykieta RFID ma antenę i układ elektroniczny. Czytnik UHF odczytuje zapisany identyfikator radiowo. Dzięki temu nie musi widzieć nadrukowanego kodu. Na tej samej etykiecie możesz umieścić tekst, kod kreskowy lub QR. Nadruk i zapis RFID są osobnymi operacjami.\n\nW tej kategorii znajdziesz etykiety Zebra RAIN UHF RFID na rolkach. Służą do identyfikacji towarów, opakowań, części i wyposażenia. Nie są to znaczniki NFC. Dobierz materiał do powierzchni przedmiotu, a format rolki do konkretnej drukarki RFID.',
  },
  buyingGuide: {
    heading: 'Jak dobrać etykietę RFID Zebra?',
    items: [
      'Powierzchnia — do kartonu lub tworzywa wybierz odpowiednią etykietę standardową. Do metalu potrzebujesz konstrukcji przeznaczonej do tej powierzchni.',
      'Metoda druku — etykieta DT drukuje bez taśmy barwiącej. Etykieta TT wymaga odpowiedniej taśmy, sprzedawanej osobno.',
      'Rozmiar — porównaj szerokość i wysokość etykiety z polem znakowania. Wymiar anteny nie jest wymiarem całej etykiety.',
      'Rolka — sprawdź średnicę gilzy i średnicę zewnętrzną. Rolka przemysłowa 200 mm nie mieści się wewnątrz biurkowej drukarki z limitem 127 mm.',
      'Wkładka RFID — dopasuj jej położenie, pamięć i ustawienia kodowania do drukarki oraz aplikacji.',
      'Numer PN — porównaj nawój, materiał i wersję regionalną. Podobna nazwa rodziny nie oznacza takiej samej rolki.',
    ],
  },
  expertAuthority: 'Podaj nam PN drukarki, rozmiar etykiety, znakowaną powierzchnię i planowany nakład. Jeśli używasz już RFID, dodaj nazwę czytnika oraz format identyfikatora. TAKMA pomoże dobrać materiał i ustawienia stanowiska.',
  technicalDeepDive: 'Rolki przemysłowe RFID Zebra mają zwykle gilzę 76 mm i średnicę do 200 mm. Rolki biurkowe z tej oferty mają gilzę 76 mm i średnicę do 127 mm. ZD611R i ZD621R wymagają odpowiedniego adaptera gilzy. Przy wąskich etykietach sprawdź również szerokość podkładu.\n\nMobilne etykiety ZBR2100 mają gilzę 19 mm i czarny znacznik. ZQ521 RFID mieści rolkę do 57 mm, a ZQ630 Plus RFID do 66 mm. Przed zakupem potwierdź średnicę gotowej rolki dla danego PN. Format 102 mm jest za szeroki do ZQ511 RFID.\n\nSilverline i Metal Skin wymagają doboru konfiguracji do materiałów na metal. Przy ZT411 wybierz odpowiednią wersję T5 On-Metal. Standardowa wersja T0 nie jest zamiennikiem. Po założeniu nowego materiału wykonaj kalibrację etykiet i RFID zgodnie z instrukcją urządzenia.',
  useCases: [
    { title: 'Produkty i opakowania', description: 'Rodziny BT713, BT781, BT793 oraz ZBR2000, ZBR2100 i ZBR2200 służą do identyfikacji produktów i opakowań. Dobierz rozmiar do miejsca naklejenia oraz ilości danych na nadruku.' },
    { title: 'Logistyka i pojemniki', description: 'Etykiety z większym polem nadruku mieszczą dane logistyczne i kody. Czytnik RFID odczytuje identyfikator powiązany z rekordem w WMS lub ERP.' },
    { title: 'Wyposażenie metalowe', description: 'Silverline i Metal Skin służą do znakowania metalowych urządzeń i elementów majątku. Wybierz format, który mieści się na przedmiocie, oraz zgodną konfigurację drukarki.' },
  ],
  uniqueInsights: {
    heading: 'Co sprawdzić przed zamówieniem rolki?',
    items: [
      { title: 'Cena i opakowanie', text: 'Cena na karcie dotyczy jednej rolki. Liczba etykiet na rolce i rolek w kartonie to różne parametry. Porównuj oferty dla tego samego PN.' },
      { title: 'Druk i odczyt', text: 'Drukarka RFID zapisuje dane w układzie etykiety. Zwykły skaner odczyta jedynie nadrukowany kod. Do odczytu radiowego potrzebujesz zgodnego czytnika UHF.' },
      { title: 'Dobór do procesu', text: 'Zasięg odczytu zależy od czytnika, anteny, powierzchni i otoczenia. Sama nazwa wkładki ani wielkość etykiety nie określa wyniku w magazynie.' },
    ],
  },
  comparisons: [
    { title: 'RFID a zwykłe etykiety', content: 'Zwykłe [etykiety termiczne](/etykiety-termiczne-zebra) i [termotransferowe](/etykiety-termotransferowe-zebra) służą do nadruku. Etykieta RFID ma dodatkowo układ do radiowego zapisu danych. Sam nadruk kodu QR nie nadaje etykiecie funkcji RFID.' },
    { title: 'Drukarka a czytnik RFID', content: '[Drukarka RFID](/drukarki-rfid) przygotowuje i koduje etykietę. Czytnik służy do późniejszego odczytu przy towarze lub w bramce. Dobór obu urządzeń zależy od sposobu pracy i formatu danych.' },
  ],
  faq: [
    { question: 'Czy cena etykiet RFID dotyczy rolki?', answer: 'Tak. Cena na kartach dotyczy jednej rolki. W parametrach znajdziesz liczbę etykiet na rolce i rolek w kartonie. Liczby te zależą od PN.' },
    { question: 'Czy każda drukarka Zebra koduje RFID?', answer: 'Nie. Potrzebujesz drukarki w konfiguracji RFID. Do Silverline i innych grubszych materiałów na metal dobierz właściwą wersję On-Metal.' },
    { question: 'Czy do etykiet RFID potrzebuję taśmy barwiącej?', answer: 'Do etykiet termotransferowych TT potrzebujesz taśmy. Etykiety termiczne bezpośrednie DT drukują bez niej. Technologia RFID sama nie określa metody nadruku.' },
    { question: 'Czy etykiety RFID można nakleić na metal?', answer: 'Do metalu wybierz konstrukcję przeznaczoną do tej powierzchni, np. Silverline lub Metal Skin. Zwykła etykieta UHF nie jest jej automatycznym zamiennikiem.' },
  ],
  howToSteps: [],
}
