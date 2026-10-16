import type { Product } from './products'

const ids = ['tsc-th240r', 'tsc-th340r']
const support = 'https://emea.tscprinters.com/en/products/th-series-4-inch-performance-desktop-printers'
const datasheet = '/downloads/tsc-th-dh-karta-produktu-en.pdf'
const manual = '/downloads/tsc-th-dh-instrukcja-en.pdf'
const sharedAccessories = ['tsc-th-wifi', 'tsc-th-bluetooth', 'tsc-th-roll-holder']

export const tscThRfidAccessories: Product[] = [
  {
    id: 'tsc-th-wifi', slug: 'tsc-modul-wifi-sp-th240-0041', pn: 'SP-TH240-0041', image: 'wifi',
    name: 'Moduł Wi-Fi i Bluetooth TSC TH240 EU',
    description: 'TSC SP-TH240-0041 to moduł Wi-Fi 802.11a/b/g/n/ac i Bluetooth 5.0 w wersji EU/EMEA. Pasuje do serii TH240 i TH340, w tym TH240R oraz TH340R. Służy do rozbudowy wariantu bez łączności radiowej. Warianty TH240R-A001-0102 i TH340R-A001-0102 mają już Wi-Fi z Bluetooth, więc nie wymagają tego modułu. Montaż zleć serwisowi. Drukarka jest sprzedawana osobno. Nie kupuj jednocześnie osobnego modułu Bluetooth do tego samego gniazda.',
    printers: ids,
  },
  {
    id: 'tsc-th-bluetooth', slug: 'tsc-modul-bluetooth-sp-th240-0044', pn: 'SP-TH240-0044', image: 'bluetooth',
    name: 'Moduł Bluetooth TSC TH240',
    description: 'TSC SP-TH240-0044 to moduł Bluetooth 5.0 do serii TH240 i TH340, w tym TH240R oraz TH340R. Umożliwia rozbudowę wariantu bez łączności radiowej. Nie dodaje Wi-Fi. Jest alternatywą dla modułu Wi-Fi z Bluetooth SP-TH240-0041. Warianty z fabrycznym Wi-Fi i Bluetooth nie wymagają tej części. Montaż zleć serwisowi. Drukarka jest sprzedawana osobno.',
    printers: ids,
  },
  {
    id: 'tsc-th-roll-holder', slug: 'tsc-uchwyt-rolki-op-com-0002', pn: 'OP-COM-0002', image: 'holder',
    name: 'Zewnętrzny uchwyt rolki TSC — gilza 3 cale',
    description: 'TSC OP-COM-0002 to zewnętrzny uchwyt rolki etykiet ze szpindlem do gilzy 76,2 mm, czyli 3 cale. Pasuje do serii TH240 i TH340, w tym TH240R oraz TH340R. Ustawia się go za drukarką, a materiał podaje przez wejście zewnętrzne. Przed użyciem etykiet RFID sprawdź prowadzenie podkładu i kalibrację wkładki. Uchwyt nie jest napędzanym nawijakiem. Drukarka i rolka etykiet są sprzedawane osobno.',
    printers: ids,
  },
  {
    id: 'tsc-th-head-203', slug: 'tsc-glowica-ph-th240-0001', pn: 'PH-TH240-0001', image: 'head203',
    name: 'Głowica TSC TH240R — 203 dpi',
    description: 'TSC PH-TH240-0001 to moduł głowicy drukującej 203 dpi do serii TH240, w tym TH240R. Jest częścią zamienną do urządzenia o tej rozdzielczości. Nie zastępuje głowicy 300 dpi do TH340R. Przed zakupem podaj model i numer seryjny drukarki. Zestaw obejmuje jedną głowicę. Głowica wykonuje nadruk i nie dodaje kodera RFID. Wymianę zleć serwisowi.',
    printers: [ids[0]],
  },
  {
    id: 'tsc-th-head-300', slug: 'tsc-glowica-ph-th240-0002', pn: 'PH-TH240-0002', image: 'head300',
    name: 'Głowica TSC TH340R — 300 dpi',
    description: 'TSC PH-TH240-0002 to moduł głowicy drukującej 300 dpi do serii TH340, w tym TH340R. Jest częścią zamienną do urządzenia o tej rozdzielczości. Nie zastępuje głowicy 203 dpi do TH240R. Przed zakupem podaj model i numer seryjny drukarki. Zestaw obejmuje jedną głowicę. Zdjęcie jest poglądowe. Głowica wykonuje nadruk i nie dodaje kodera RFID. Wymianę zleć serwisowi.',
    printers: [ids[1]],
  },
].map(a => ({
  id: a.id, slug: a.slug, name: `${a.name} — ${a.pn}`, shortDescription: a.description.split('. ')[0] + '.', description: a.description,
  seoTitle: `${a.name} | TAKMA`, seoDescription: `${a.name}, PN ${a.pn}. Sprawdź zgodność, cenę, dostępność i wyposażenie w TAKMA.`,
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'tsc', tags: ['magazyn', 'retail'],
  images: [`/images/products/tsc-th-${a.image}.webp`], imageDescriptions: [`${a.name} — ${a.pn}${a.image === 'head300' ? '; zdjęcie poglądowe' : ''}`],
  specifications: [{ name: 'Part Number', value: a.pn }, { name: 'Zgodność', value: a.printers.map(id => id === ids[0] ? 'TH240R' : 'TH340R').join(', ') }],
  applications: [], availability: 'unavailable', isNew: false, isBestseller: false, compatibleAccessories: [], relatedAccessories: a.printers,
  downloads: [{ name: 'Instrukcja serii TH/DH, w tym RFID (EN)', type: 'manual', url: manual, size: 'PDF' }], createdAt: '2026-10-16',
}))

export const tscThRfidProducts: Product[] = [
  { model: 'TH240R', dpi: 203, width: '108', speed: '203', head: 'PH-TH240-0001', headId: 'tsc-th-head-203', other: ids[1] },
  { model: 'TH340R', dpi: 300, width: '105,7', speed: '152', head: 'PH-TH240-0002', headId: 'tsc-th-head-300', other: ids[0] },
].map(({ model, dpi, width, speed, head, headId, other }) => {
  const slug = `tsc-${model.toLowerCase()}`
  return {
    id: slug, slug, name: `TSC ${model}`, seoH1: `TSC ${model}`,
    seoTitle: `TSC ${model} — biurkowa drukarka RFID ${dpi} dpi | TAKMA`,
    seoDescription: `TSC ${model}: drukarka UHF RFID ${dpi} dpi, ekran dotykowy i Ethernet. Wersje EU oraz Wi-Fi z Bluetooth. Sprawdź ceny, stany i zgodne akcesoria.`,
    shortDescription: `Biurkowa drukarka i koder UHF RFID ${dpi} dpi. Druk do ${width} mm, ekran dotykowy 3,5 cala, Ethernet i taśma barwiąca do 300 m. Wersje EU.`,
    description: `TSC ${model} to biurkowa drukarka z fabrycznym koderem UHF RFID. Drukuje tekst, grafikę i kody oraz zapisuje dane w układzie zgodnej etykiety.

## ${dpi === 203 ? 'Kodowanie RFID na stanowisku magazynowym i w sklepie' : 'Nadruk 300 dpi do drobnego tekstu i szczegółowych kodów'}

${dpi === 203 ? 'TH240R ma rozdzielczość 203 dpi. Służy do przygotowania etykiet na towary, kartony i pojemniki przy stanowisku pracy.' : 'TH340R ma rozdzielczość 300 dpi. Ułatwia przygotowanie drobnego tekstu i szczegółowych kodów na etykietach produktów.'} Maksymalna szerokość druku wynosi ${width} mm, a prędkość nadruku do ${speed} mm/s.

Prędkość zadania RFID zależy od wkładki, ilości danych i ustawień. Rozdzielczość nadruku nie określa zasięgu radiowego. Do kodowania potrzebujesz szablonu z poleceniami RFID i zgodnego materiału.

## Europejskie konfiguracje z Ethernetem lub Wi-Fi

Wybierz wariant do swojego stanowiska:
- ${model}-A001-0002 — USB, USB Host, RS-232 i Ethernet 10/100; bez Wi-Fi i Bluetooth.
- ${model}-A001-0102 — te same porty oraz Wi-Fi 802.11a/b/g/n/ac z Bluetooth.

Oba PN obejmują UHF RFID, kolorowy ekran dotykowy 3,5 cala, zegar czasu rzeczywistego oraz sygnalizator dźwiękowy. Zestaw zawiera zasilacz, przewód zasilający EU, przewód USB i skróconą instrukcję. Etykiety oraz taśmy barwiące są sprzedawane osobno.

Pokazane wersje mają ręczne odrywanie etykiet. Nie obejmują obcinaka ani odklejaka. Inne sposoby podawania wymagają doboru odpowiedniej konfiguracji RFID i materiału.

## Etykiety RAIN UHF i kalibracja

Koder obsługuje pasywne etykiety RAIN UHF zgodne z GS1 EPC Gen2 v2 i ISO 18000-63. Minimalny rozstaw kolejnych etykiet RFID wynosi 15,9 mm. Wykonaj kalibrację podawania i RFID po każdej zmianie materiału.

Wybrane etykiety na metal o grubości do 1,35 mm wymagają zgodnej konfiguracji z anteną wewnętrzną i ręcznego odrywania. Sam limit grubości nie potwierdza zgodności każdej etykiety. Sprawdź wkładkę, jej położenie, szerokość podkładu oraz zapis i odczyt na docelowym przedmiocie.

Drukarka kontroluje zapis danych. Może oznaczyć błędną etykietę zgodnie z wybranym trybem obsługi błędów. Pokazane PN mają UHF RFID. Funkcje HF lub NFC wymagają odrębnej konfiguracji i nie są częścią tych zestawów.

## Materiał i taśma barwiąca

Szerokość materiału wynosi 15–120 mm. Drukarka mieści rolkę o średnicy do 127 mm na gilzie 25,4–38,1 mm. Zakres mechaniczny materiału nie zastępuje wymagań konkretnej wkładki RFID.

Druk termotransferowy wymaga taśmy barwiącej. Możesz użyć taśmy do 300 m na gilzie 25,4 mm albo do 110 m na gilzie 12,7 mm. Szerokość taśmy wynosi 40–110 mm. Druk termiczny bezpośredni wymaga etykiety termoczułej i nie wymaga taśmy.

[Zewnętrzny uchwyt OP-COM-0002](/produkt/tsc-uchwyt-rolki-op-com-0002) służy do podawania materiału z rolki ustawionej za drukarką. Ma szpindel do gilzy 76,2 mm. Przed użyciem RFID sprawdź prowadzenie materiału i kalibrację.

## Łączność i integracja z systemem

Wersja podstawowa pracuje przewodowo. [Moduł SP-TH240-0041](/produkt/tsc-modul-wifi-sp-th240-0041) dodaje Wi-Fi i Bluetooth. [Moduł SP-TH240-0044](/produkt/tsc-modul-bluetooth-sp-th240-0044) dodaje sam Bluetooth. Są to alternatywy; wariant z fabrycznym Wi-Fi nie wymaga ich zakupu.

TSPL-EZD obsługuje emulacje EPL, ZPL, ZPL II i DPL dla nadruku. Polecenia RFID wymagają obsługi TSPL lub ZPL w aplikacji. Powiąż identyfikator EPC z rekordem towaru w WMS albo ERP i ustal obsługę błędów kodowania. Sam wydruk PDF nie zapisuje danych w etykiecie RFID.

TSC Console wspiera konfigurację urządzenia. SOTI Connect wymaga osobnej licencji. Do radiowej inwentaryzacji regałów potrzebujesz osobnego czytnika UHF i oprogramowania.

## Serwis i gwarancja

Właściwa głowica do ${model} ma numer ${head} i rozdzielczość ${dpi} dpi. Przed zakupem części podaj model i numer seryjny. Głowice 203 i 300 dpi nie są automatycznymi zamiennikami.

Gwarancja na drukarkę wynosi 3 lata. Głowica ma ochronę przez 12 miesięcy lub 25 km druku. Wałek ma ochronę przez 12 miesięcy lub 50 km druku. Dla części z limitem przebiegu obowiązuje warunek, który nastąpi wcześniej.

Porównaj także [${dpi === 203 ? 'TH340R' : 'TH240R'}](/produkt/${other}) z rozdzielczością ${dpi === 203 ? '300' : '203'} dpi oraz [Zebra ZD621R](/produkt/zebra-zd621r). Do większych rolek i pracy na stanowisku przemysłowym sprawdź [TSC MB241TR](/produkt/tsc-mb241tr).`,
    categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'biurkowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'tsc',
    tags: ['magazyn', 'retail', 'logistyka'], images: ['/images/products/tsc-th-rfid-main.webp'],
    imageDescriptions: [`TSC ${model} — drukarka biurkowa w obudowie z ekranem dotykowym, widok pod kątem`],
    availability: 'unavailable', isNew: true, isBestseller: false,
    keyParams: { rodzajDruku: 'Termotransferowy i termiczny bezpośredni; UHF RFID', rozdzielczosc: `${dpi} dpi`, szerokoscDruku: `${width} mm`, predkoscDruku: `do ${speed} mm/s; RFID zależy od materiału`, szerokoscEtykiet: '15–120 mm' },
    specifications: [
      { name: 'Rozdzielczość', value: `${dpi} dpi` }, { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' },
      { name: 'Szerokość druku', value: `${width} mm` }, { name: 'Prędkość nadruku', value: `do ${speed} mm/s; kodowanie zależy od wkładki i danych` },
      { name: 'RFID', value: 'RAIN UHF, GS1 EPC Gen2 v2 / ISO 18000-63; bez HF/NFC w tych PN' },
      { name: 'Minimalny rozstaw RFID', value: '15,9 mm; wymagany dobór wkładki i kalibracja' },
      { name: 'Etykiety na metal', value: 'Wybrane materiały do 1,35 mm; antena wewnętrzna i ręczne odrywanie' },
      { name: 'Szerokość materiału', value: '15–120 mm; dobór RFID zależy od wkładki' }, { name: 'Rolka wewnętrzna', value: 'Średnica do 127 mm; gilza 25,4–38,1 mm' },
      { name: 'Taśma barwiąca', value: 'Do 300 m na gilzie 25,4 mm lub do 110 m na gilzie 12,7 mm; szerokość 40–110 mm' },
      { name: 'Łączność', value: 'USB, USB Host, RS-232, Ethernet 10/100; Wi-Fi i Bluetooth zależnie od PN' },
      { name: 'Wyświetlacz', value: 'Kolorowy ekran dotykowy 3,5 cala' }, { name: 'Pamięć', value: '128 MB RAM i 128 MB Flash' },
      { name: 'Obsługa etykiet', value: 'Ręczne odrywanie; bez obcinaka i odklejaka w pokazanych PN' },
      { name: 'W zestawie', value: 'Zasilacz, przewód zasilający EU, przewód USB i skrócona instrukcja' },
      { name: 'Gwarancja', value: 'Drukarka 3 lata; głowica 12 miesięcy / 25 km; wałek 12 miesięcy / 50 km — pierwszy osiągnięty limit' },
    ],
    variants: [
      { partNumber: `${model}-A001-0002`, name: `${dpi} dpi, EU — Ethernet`, attributes: { 'Łączność': 'USB, USB Host, RS-232, Ethernet' }, availability: 'unavailable' },
      { partNumber: `${model}-A001-0102`, name: `${dpi} dpi, EU — Wi-Fi i Bluetooth`, attributes: { 'Łączność': 'USB, USB Host, RS-232, Ethernet, Wi-Fi + Bluetooth' }, availability: 'unavailable' },
    ],
    comparison: { title: 'Porównanie TH240R i TH340R', models: [
      { name: 'TH240R', slug: ids[0], highlight: dpi === 203, specs: { 'Rozdzielczość': '203 dpi', 'Szerokość druku': '108 mm', 'Prędkość nadruku': 'do 203 mm/s' } },
      { name: 'TH340R', slug: ids[1], highlight: dpi === 300, specs: { 'Rozdzielczość': '300 dpi', 'Szerokość druku': '105,7 mm', 'Prędkość nadruku': 'do 152 mm/s' } },
    ] },
    compatibleAccessories: [], relatedAccessories: [...sharedAccessories, headId],
    applications: ['Druk i kodowanie etykiet UHF na towary i opakowania', 'Etykietowanie na stanowisku magazynowym i w sklepie', 'Przygotowanie oznaczeń wyposażenia'],
    faq: [
      { question: 'Czym różnią się dwa europejskie warianty?', answer: `${model}-A001-0002 ma połączenia przewodowe. ${model}-A001-0102 dodaje Wi-Fi i Bluetooth. Rozdzielczość, RFID, ekran dotykowy, ręczne odrywanie oraz zestaw zasilający EU są wspólne.` },
      { question: 'Czy trzeba dokupić moduł RFID?', answer: 'Nie. Pokazane PN mają fabryczny koder UHF RFID. Dobierz zgodne etykiety i szablon z poleceniami kodowania. Sam nadruk nie zapisuje danych radiowych.' },
      { question: 'Czy obsługuje etykiety RFID na metal?', answer: 'Wybrane etykiety do 1,35 mm wymagają zgodnej konfiguracji z anteną wewnętrzną i ręcznego odrywania. Potwierdź wkładkę, położenie i materiał. Sprawdź zapis i odczyt na docelowej powierzchni.' },
      { question: 'Czy obcinak lub odklejak są w zestawie?', answer: 'Nie. Pokazane PN mają ręczne odrywanie. Dobór obcinaka lub odklejaka wymaga potwierdzenia wersji RFID i konstrukcji etykiety. Obcinak musi ciąć poza wkładką.' },
      { question: 'Czy moduły Wi-Fi i Bluetooth trzeba kupić razem?', answer: 'Nie. Moduł Wi-Fi z Bluetooth i moduł samego Bluetooth są alternatywami. Wariant z fabrycznym Wi-Fi i Bluetooth nie wymaga żadnego z nich.' },
      { question: 'Jaka głowica pasuje do tego modelu?', answer: `${model} wymaga głowicy ${dpi} dpi o PN ${head}. Przed zakupem podaj numer seryjny. Nie dobieraj głowicy wyłącznie po wspólnej obudowie serii TH.` },
    ],
    downloads: [{ name: 'Karta serii TH/DH (EN)', type: 'datasheet', url: datasheet, size: 'PDF' }, { name: 'Instrukcja serii TH/DH, w tym RFID (EN)', type: 'manual', url: manual, size: 'PDF' }, { name: 'Sterowniki i wsparcie TSC', type: 'driver', url: support, size: 'Online' }],
    relatedProducts: [other, 'zebra-zd621r', 'brother-td-4650tnwbr', 'tsc-mb241tr'], createdAt: '2026-10-16', sameAs: support,
  } satisfies Product
})
