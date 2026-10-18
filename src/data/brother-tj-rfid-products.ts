import type { Product } from './products'

const manual = '/downloads/brother-tj-rfid-instrukcja-en.pdf'
const ids = ['brother-tj-4021tnr', 'brother-tj-4121tnr']

type TjCopy = Pick<Product, 'seoTitle' | 'seoDescription' | 'shortDescription' | 'description' | 'faq'>

const tjCopy: Record<string, TjCopy> = {
  'TJ-4021TNR': {
    seoTitle: 'Brother TJ-4021TNR — drukarka RFID UHF 203 dpi',
    seoDescription: 'Brother TJ-4021TNR: przemysłowa drukarka i koder UHF RFID 203 dpi. Druk 107 mm z prędkością 254 mm/s, rolka 203,2 mm, taśma 450 m, Ethernet.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 203 dpi do etykiet magazynowych i wysyłkowych. Druk do 107 mm z prędkością do 254 mm/s, rolka do 203,2 mm, taśma 450 m.',
    description: `Brother TJ-4021TNR to przemysłowa drukarka etykiet z wbudowanym koderem UHF RFID i głowicą 203 dpi. Drukuje etykiety magazynowe, wysyłkowe i produktowe oraz zapisuje w nich identyfikator EPC. Wybierz ją do pracy ciągłej przy dużych rolkach materiału.

## Prędkość i format etykiet

Głowica 203 dpi drukuje 8 punktów na milimetr. Ta rozdzielczość wystarcza do kodów kreskowych na kartonach i paletach oraz do etykiet lokalizacji regałowych. TJ-4021TNR drukuje z prędkością do 254 mm/s na szerokości 107 mm. Pojedynczy wydruk może mieć do 25 400 mm długości.

Materiał RFID ma szerokość 25,4–116 mm. Rolka mieści się do średnicy 203,2 mm na gilzie 25,4–76,2 mm. Taśma barwiąca ma do 450 m długości i 40–110 mm szerokości. Warstwa barwiąca musi być na zewnątrz nawoju.

## Koder UHF i ustawienia regionu

Drukarka koduje etykiety EPC UHF Gen2. Dla Polski wybierz w menu region EU, czyli pasmo 866–868 MHz. Najmniejszy rozstaw wkładek wynosi 15,875 mm. Kalibrację RFID uruchom z menu drukarki po każdej zmianie typu etykiety.

Etykiety RFID na metal mogą mieć do 1,0 mm grubości. Zwykły materiał ma 0,06–0,28 mm. Przy etykietach na metal przekaż nam opis powierzchni. Dobierzemy materiał i sprawdzimy zapis.

## Obsługa i integracja

Kolorowy ekran dotykowy 3,5 cala służy do ustawień i kalibracji. Interfejsy standardowe to USB, USB Host, RS-232 i Ethernet 10/100. [Moduł PA-WI-002](/produkt/brother-modul-wifi-pa-wi-002) dodaje Wi-Fi. Język FBPL-EZD emuluje EPL, ZPL i DPL. Przed wdrożeniem sprawdzimy polecenia RFID w szablonie.

W kartonie są drukarka, przewód zasilający, przewód USB i gilza. Zasilacz jest wbudowany. Etykiety i taśmy dobierasz osobno. Ofertę rolek znajdziesz w dziale [etykiety RFID](/etykiety-rfid-zebra). Przed zamówieniem podaj nam szerokość etykiety i gilzę. Dobierzemy rolkę do TJ-4021TNR i położenie wkładki.

## Akcesoria i inne wersje

Obcinak PA-CU-004 i odklejak PA-LP-005 nie współpracują z etykietami RFID. Używaj ich tylko z drukarką bez kodera. Do samego nadruku wybierz [Brother TJ-4021TN](/produkt/brother-tj-4021tn). Do drobniejszego nadruku z kodowaniem RFID wybierz [TJ-4121TNR](/produkt/brother-tj-4121tnr) z głowicą 300 dpi.`,
    faq: [
      { question: 'Jakie pasmo RFID ustawić w TJ-4021TNR w Polsce?', answer: 'Region EU, czyli pasmo 866–868 MHz. Drukarka ma też ustawienie Global 902–928 MHz, ale w Europie wybierz EU.' },
      { question: 'Czy TJ-4021TNR ma Wi-Fi?', answer: 'Nie w standardzie. Ma Ethernet, USB, USB Host i RS-232. Wi-Fi dodaje osobno kupowany moduł PA-WI-002.' },
      { question: 'Czy TJ-4021TNR koduje etykiety na metal?', answer: 'Tak, etykiety o grubości do 1,0 mm. Podaj nam rodzaj powierzchni i wymiary etykiety. Dobierzemy materiał i sprawdzimy zapis.' },
      { question: 'Czy do TJ-4021TNR pasuje obcinak PA-CU-004?', answer: 'Nie z etykietami RFID. Obcinak PA-CU-004 i odklejak PA-LP-005 służą do zwykłych etykiet. Montaż akcesoriów wykonuje autoryzowany sprzedawca Brother.' },
      { question: 'Co jest w zestawie z TJ-4021TNR?', answer: 'Drukarka z wbudowanym zasilaczem, przewód zasilający, przewód USB i gilza. Etykiety RFID i taśma barwiąca są sprzedawane osobno.' },
    ],
  },
  'TJ-4121TNR': {
    seoTitle: 'Brother TJ-4121TNR — drukarka RFID UHF 300 dpi',
    seoDescription: 'Brother TJ-4121TNR: przemysłowa drukarka i koder UHF RFID 300 dpi do etykiet z drobnym tekstem i małymi kodami 2D. Druk 105,7 mm, 177,8 mm/s.',
    shortDescription: 'Przemysłowa drukarka i koder UHF RFID 300 dpi do etykiet produktowych z drobnym tekstem. Druk do 105,7 mm z prędkością do 177,8 mm/s, ekran dotykowy 3,5 cala.',
    description: `Brother TJ-4121TNR ma głowicę 300 dpi i fabryczny koder UHF RFID. Wybierz ją, gdy etykieta oprócz identyfikatora EPC zawiera drobny opis, numer partii, logo albo mały kod QR lub DataMatrix.

## Gdzie przydaje się 300 dpi

Głowica drukuje 11,8 punktu na milimetr, a punkt ma ok. 0,085 mm. Drobne znaki mają wyraźne krawędzie, a mały kod 2D jest łatwiejszy do odczytu. Ta rozdzielczość pasuje do etykiet wyrobów, opakowań jednostkowych, części zamiennych i oznaczeń środków trwałych.

Szerokość nadruku wynosi 105,7 mm, a prędkość do 177,8 mm/s. Najdłuższy wydruk ma 11 430 mm. Jeśli drukujesz głównie etykiety logistyczne z dużym kodem kreskowym, szybsza będzie [TJ-4021TNR](/produkt/brother-tj-4021tnr) z głowicą 203 dpi.

## Zapis RFID i projekt etykiety

TJ-4121TNR koduje etykiety EPC UHF Gen2 zgodne z ISO 18000-63. W Polsce ustaw w menu region EU (866–868 MHz). Wkładki mogą występować co 15,875 mm. Projektując etykietę, nie umieszczaj małego kodu 2D nad układem wkładki. Nierówna powierzchnia pogarsza tam nadruk.

Drukarka obsługuje etykiety na metal o grubości do 1,0 mm. Materiał RFID może mieć 25,4–116 mm szerokości.

## Materiały i taśma

Rolka może mieć do 203,2 mm średnicy, a gilza 25,4–76,2 mm. Taśma barwiąca do 450 m musi być nawinięta warstwą barwiącą na zewnątrz. Do drobnego tekstu na folii wybierz taśmę żywiczną, do papieru zwykle woskowo-żywiczną. Rolki etykiet znajdziesz w dziale [etykiety RFID](/etykiety-rfid-zebra). Przed zamówieniem prześlij nam projekt etykiety. Dobierzemy materiał do TJ-4121TNR tak, aby wkładka nie kolidowała z drobnym nadrukiem.

## Połączenia, zestaw i akcesoria

Drukarka ma ekran dotykowy 3,5 cala, USB, USB Host, RS-232 i Ethernet 10/100. Wi-Fi zapewnia [moduł PA-WI-002](/produkt/brother-modul-wifi-pa-wi-002), sprzedawany osobno. Szablony przygotujesz w językach FBPL-EZD lub FBPL-EZS z emulacjami EPL, ZPL, DPL lub SBPL.

Zasilacz jest wbudowany. W zestawie są też przewód zasilający, przewód USB i gilza. Obcinak PA-CU-004 i odklejak PA-LP-005 nie są przeznaczone do etykiet RFID. Bez kodera RFID ten sam nadruk wykona [Brother TJ-4121TN](/produkt/brother-tj-4121tn).`,
    faq: [
      { question: 'Czym TJ-4121TNR różni się od TJ-4021TNR?', answer: 'Rozdzielczością i prędkością. TJ-4121TNR ma 300 dpi i drukuje do 177,8 mm/s. TJ-4021TNR ma 203 dpi i drukuje do 254 mm/s. Koder RFID, rolki i taśmy są takie same.' },
      { question: 'Czy TJ-4121TN bez litery R zakoduje etykietę RFID?', answer: 'Nie. Zwykła TJ-4121TN nie ma kodera RFID. Do kodowania etykiet wybierz TJ-4121TNR.' },
      { question: 'Jaka taśma pasuje do drobnego nadruku w TJ-4121TNR?', answer: 'Taśma o szerokości 40–110 mm i długości do 450 m, z warstwą barwiącą na zewnątrz. Do folii wybierz taśmę żywiczną, do papieru zwykle woskowo-żywiczną.' },
      { question: 'Jak długą etykietę wydrukuje TJ-4121TNR?', answer: 'Do 11 430 mm na jednym wydruku. Wersja 203 dpi, TJ-4021TNR, drukuje do 25 400 mm.' },
      { question: 'Czy TJ-4121TNR można podłączyć przez Wi-Fi?', answer: 'Tak, po montażu modułu PA-WI-002. Montaż i konfigurację wykonuje autoryzowany sprzedawca Brother.' },
    ],
  },
}

export const brotherTjRfidProducts: Product[] = [
  { model: 'TJ-4021TNR', pn: 'TJ4021TNRZ1', dpi: 203, width: '107', speed: '254', length: '25 400', ordinary: 'brother-tj-4021tn', other: ids[1] },
  { model: 'TJ-4121TNR', pn: 'TJ4121TNRZ1', dpi: 300, width: '105,7', speed: '177,8', length: '11 430', ordinary: 'brother-tj-4121tn', other: ids[0] },
].map(({ model, pn, dpi, width, speed, length, ordinary, other }) => {
  const slug = `brother-${model.toLowerCase()}`
  return {
    id: slug, slug, name: `Brother ${model}`, seoH1: `Brother ${model}`,
    ...tjCopy[model],
    categoryId: 'drukarki-etykiet', subcategoryIds: ['drukarki-rfid', 'przemyslowe-drukarki-etykiet', 'termotransferowe-drukarki-etykiet'], manufacturerId: 'brother',
    images: ['/images/products/brother-tj-rfid-framed.webp'], imageDescriptions: [`Brother ${model} — przemysłowa drukarka RFID z ekranem dotykowym i przednią osłoną toru RFID`],
    tags: ['magazyn', 'logistyka', 'produkcja'], availability: 'unavailable', isNew: true, isBestseller: false,
    specifications: [
      { name: 'Part Number', value: pn }, { name: 'Rozdzielczość', value: `${dpi} dpi` },
      { name: 'Metoda druku', value: 'Termotransferowy i termiczny bezpośredni' }, { name: 'Szerokość druku', value: `${width} mm` },
      { name: 'Prędkość nadruku', value: `do ${speed} mm/s; kodowanie RFID zależy od materiału i ustawień` },
      { name: 'Maksymalna długość druku', value: `${length} mm` },
      { name: 'RFID', value: 'UHF EPC Gen2 / ISO 18000-6C; pasmo EU 866–868 MHz' },
      { name: 'Minimalny rozstaw RFID', value: '15,875 mm' },
      { name: 'Szerokość materiału RFID', value: '25,4–116 mm' },
      { name: 'Grubość materiału', value: '0,06–0,28 mm; zgodne etykiety RFID na metal do 1,0 mm' },
      { name: 'Średnica rolki i gilzy', value: 'Rolka do 203,2 mm; gilza 25,4–76,2 mm' },
      { name: 'Taśma barwiąca', value: 'Do 450 m; szerokość 40–110 mm; gilza 25,4 mm; warstwa barwiąca na zewnątrz' },
      { name: 'Łączność', value: 'USB 2.0, USB Host, RS-232, Ethernet 10/100; Wi-Fi opcjonalnie przez PA-WI-002' },
      { name: 'Wyświetlacz', value: 'Kolorowy ekran dotykowy 3,5 cala' },
      { name: 'Polecenia drukarki', value: 'FBPL-EZD / FBPL-EZS: emulacje EPL, ZPL, DPL lub SBPL' },
      { name: 'Wymiary (szer. × gł. × wys.)', value: '248 × 443 × 274 mm' }, { name: 'Masa', value: '9,9 kg' },
      { name: 'Temperatura pracy', value: '0–40°C' },
    ],
    variants: [{ partNumber: pn, name: `${model} — ${dpi} dpi, UHF RFID`, attributes: {}, availability: 'unavailable' }],
    comparison: { title: 'Porównanie przemysłowych drukarek RFID Brother TJ', models: [
      { name: 'TJ-4021TNR', slug: ids[0], highlight: dpi === 203, specs: { 'Rozdzielczość': '203 dpi', 'Szerokość druku': '107 mm', 'Prędkość nadruku': 'do 254 mm/s' } },
      { name: 'TJ-4121TNR', slug: ids[1], highlight: dpi === 300, specs: { 'Rozdzielczość': '300 dpi', 'Szerokość druku': '105,7 mm', 'Prędkość nadruku': 'do 177,8 mm/s' } },
    ] },
    applications: ['Druk i kodowanie etykiet RFID na towary oraz opakowania', 'Identyfikacja pojemników i wyposażenia', 'Przygotowanie etykiet do procesów magazynowych i produkcyjnych'],
    compatibleAccessories: [], relatedAccessories: ['brother-tj-wifi', 'brother-tj-cutter', 'brother-tj-peeler'],
    downloads: [
      { name: 'Instrukcja obsługi i kalibracji RFID Brother TJ (EN)', type: 'manual', url: manual, size: 'PDF' },
      { name: `Sterowniki i wsparcie Brother ${model}`, type: 'driver', url: `https://support.brother.com/g/b/producttop.aspx?c=eu_ot&lang=en&prod=lptj${dpi === 203 ? '4021' : '4121'}tnreuk`, size: 'Online' },
    ],
    relatedProducts: [other, ordinary, 'zebra-zt231-rfid', 'zebra-zt411-rfid'], createdAt: '2026-10-16',
  } satisfies Product
})

export const brotherTjAdditionalAccessories: Product[] = [{
  id: 'brother-tj-wifi', slug: 'brother-modul-wifi-pa-wi-002', name: 'Moduł Wi-Fi Brother PA-WI-002',
  shortDescription: 'Moduł Wi-Fi 802.11a/b/g/n do drukarek Brother TJ, w tym TJ-4021TNR i TJ-4121TNR. Sprzedawany osobno.',
  description: 'Brother PA-WI-002 dodaje połączenie Wi-Fi do zgodnej drukarki Brother TJ. Obsługuje sieci IEEE 802.11a/b/g/n. Pasuje do TJ-4020TN, TJ-4021TN, TJ-4120TN, TJ-4121TN, TJ-4021TNR i TJ-4121TNR. Moduł nie dodaje kodera RFID. Wersje TNR mają ten koder fabrycznie. Montaż i konfigurację zleć autoryzowanemu sprzedawcy Brother. Drukarka jest sprzedawana osobno.',
  categoryId: 'akcesoria', subcategoryIds: ['akcesoria-do-drukarek-etykiet'], manufacturerId: 'brother',
  images: ['/images/products/PAWI002.png'], imageDescriptions: ['Brother PA-WI-002 — moduł Wi-Fi do drukarek przemysłowych TJ'],
  specifications: [{ name: 'Part Number', value: 'PAWI002' }, { name: 'Model', value: 'PA-WI-002' }, { name: 'Standard Wi-Fi', value: 'IEEE 802.11a/b/g/n' }, { name: 'Zgodność', value: 'TJ-4020TN, TJ-4021TN, TJ-4120TN, TJ-4121TN, TJ-4021TNR, TJ-4121TNR' }],
  applications: ['Połączenie drukarki TJ z siecią Wi-Fi'], tags: ['magazyn', 'produkcja'], availability: 'unavailable', isNew: false, isBestseller: false,
  compatibleAccessories: [], relatedAccessories: ids,
  downloads: [{ name: 'Karta produktu Brother PA-WI-002', type: 'datasheet', url: '/downloads/brother-pa-wi-002-karta-produktu.pdf', size: 'PDF' }], createdAt: '2026-10-16',
}]
