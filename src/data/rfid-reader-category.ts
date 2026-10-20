import type { Subcategory } from './products'
import type { SubcategoryRichContent } from './subcategory-content'

export const rfidReaderCategory: Subcategory = {
  id: 'czytniki-rfid', slug: 'czytniki-rfid', name: 'Czytniki RFID',
  parentCategoryId: 'terminale-mobilne', icon: 'smartphone',
  description: 'Kieszonkowe czytniki UHF RFID do zgodnych telefonów, terminali i komputerów.',
  seoTitle: 'Czytniki RFID — kieszonkowe czytniki UHF Bluetooth | TAKMA',
  seoDescription: 'Kieszonkowe czytniki UHF RFID do telefonu i komputera. Porównaj pasmo, łączność i ładowanie. Sprawdź europejskie PN, ceny oraz dostępność.',
  longDescription: 'Kieszonkowy czytnik RFID przesyła dane znaczników do aplikacji na urządzeniu nadrzędnym. Nie wymaga obudowy pistoletowej ani montażu telefonu na uchwycie. Unitech RP902 ma Bluetooth 5.0, statusowy ekran 0,96 cala i wymienną baterię. Wybierz europejskie pasmo UHF i sprawdź obsługę czytnika w aplikacji.',
  productIds: ['unitech-rp902'], productCount: 1,
}

export const rfidReaderContent: SubcategoryRichContent = {
  updatedAt: '2026-10-20',
  definition: { heading: 'Co to jest kieszonkowy czytnik RFID?', content: 'Kieszonkowy czytnik RFID odczytuje znaczniki radiowe i przesyła dane do aplikacji na telefonie, terminalu lub komputerze. Ma własną baterię. Może mieć mały ekran statusu, ale nie zastępuje urządzenia z programem magazynowym.\n\n[Unitech RP902](/produkt/unitech-rp902) to czytnik UHF z Bluetooth 5.0. Europejski PN RP902-33E8S0G pracuje w paśmie 865–868 MHz. Waży 106 g i ma obudowę IP65.' },
  buyingGuide: { heading: 'Jak dobrać czytnik RFID?', items: ['Sprawdź standard znacznika. UHF, NFC i HF nie są zamienne.', 'Dobierz europejski PN oraz obsługiwane pasmo.', 'Sprawdź obsługę czytnika i profilu Bluetooth w aplikacji.', 'Przetestuj etykiety na rzeczywistych towarach.', 'Dobierz baterię oraz wyposażenie do ładowania.'] },
  expertAuthority: 'TAKMA pomaga dobrać czytnik i ładowanie do urządzenia oraz sposobu pracy. Przy doborze potrzebujemy nazwy aplikacji, rodzaju znaczników i opisu procesu.',
  technicalDeepDive: 'UHF RFID pozwala identyfikować znaczniki bez widoczności nadrukowanego kodu. Zasięg zależy od anteny, mocy, znacznika i otoczenia. Metal oraz płyny mogą wpływać na odczyt. Zgodność protokołu nie gwarantuje konkretnego zasięgu.\n\n[Drukarki RFID](/drukarki-rfid) służą do przygotowania oznaczeń. [Etykiety RFID](/etykiety-rfid-zebra) dobierz także do powierzchni towaru. Parametry rolki i układu radiowego muszą odpowiadać wymaganiom wybranej drukarki.',
  useCases: [{ title: 'Kontrola wyposażenia', description: 'Odczyt oznakowanych narzędzi i urządzeń w zgodnej aplikacji.' }, { title: 'Liczenie przy półce', description: 'Zbieranie identyfikatorów znaczników podczas kontroli zapasów.' }, { title: 'Wyszukiwanie towaru', description: 'Wyszukiwanie wybranego znacznika przy użyciu odpowiedniej funkcji aplikacji.' }],
  uniqueInsights: { heading: 'Co sprawdzić przed wdrożeniem?', items: [{ title: 'Aplikacja', text: 'Samo sparowanie Bluetooth nie potwierdza obsługi wszystkich funkcji RFID przez program.' }, { title: 'Zasilanie', text: 'Sprawdź zawartość zestawu. Przewód USB nie oznacza, że w zestawie znajduje się także zasilacz sieciowy.' }] },
  comparisons: [{ title: 'Czytnik kieszonkowy czy uchwyt?', content: 'Czytnik kieszonkowy możesz trzymać oddzielnie od telefonu. [Uchwyty RFID](/uchwyty-rfid) mają konstrukcję pistoletową. Część modeli umożliwia montaż zgodnego terminala przez adapter.' }, { title: 'Czytnik czy terminal?', content: '[Terminal RFID](/terminale-rfid) ma system i ekran aplikacji. Zewnętrzny czytnik przesyła dane do innego urządzenia. Wybór zależy od posiadanego sprzętu i programu.' }],
  faq: [{ question: 'Czy kieszonkowy czytnik RFID ma Androida?', answer: 'Nie należy tego zakładać. RP902 jest czytnikiem zewnętrznym. Program działa na urządzeniu nadrzędnym.' }, { question: 'Czy czytnik UHF odczyta NFC?', answer: 'Nie. UHF i NFC wykorzystują inne pasma oraz standardy. Sprawdź rodzaj znacznika.' }, { question: 'Czy RP902 odczytuje kody kreskowe?', answer: 'Oferowany RP902-33E8S0G nie ma skanera kodów. Odczytuje znaczniki UHF RFID.' }],
  howToSteps: [{ name: 'Określ znaczniki', text: 'Podaj standard i zastosowanie etykiety.' }, { name: 'Sprawdź aplikację', text: 'Potwierdź obsługiwany model czytnika i sposób połączenia.' }, { name: 'Wykonaj próbę', text: 'Sprawdź odczyt na rzeczywistych towarach przed wdrożeniem.' }],
}
