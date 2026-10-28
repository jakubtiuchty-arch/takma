import type { FilterDefinition } from '@/components/subcategory/FilterableProductGrid'

/**
 * Filtry w lewym sidebarze stron kategorii (checkboxy z licznikiem, jak na podkategoriach).
 * Kategorie mają luźne, opisowe specyfikacje, więc filtry są „pochodne”: reguła = wyrażenie
 * regularne na tekście specyfikacji, producent albo przedział ceny. Reguły są zwykłymi danymi,
 * bo trafiają do komponentu klienckiego. Kolejność reguł = kolejność opcji w filtrze.
 */
export const categoryFilters: Record<string, FilterDefinition[]> = {
  'uchwyty-rfid': [
    { specKey: 'Bluetooth', label: 'Bluetooth' },
    { specKey: 'Skaner kodów', label: 'Skaner kodów' },
  ],
  'terminale-rfid': [
    { specKey: 'producent', label: 'Producent', derived: [{ value: 'Zebra', manufacturer: 'zebra' }] },
    { specKey: 'lacznosc', label: 'Łączność komórkowa', derived: [
      { value: 'Z 5G', pattern: '^5G,', specs: ['Łączność'] },
      { value: 'Bez 5G', pattern: 'bez 5G', specs: ['Łączność'] },
    ] },
  ],
  'terminale-naramienne': [
    { specKey: 'zlacza', label: 'Złącza', description: 'Złącze terminala do przewodów i akcesoriów.\n• USB-C — ładowanie i dane przez standardowy przewód USB-C; skanery tylko Bluetooth.\n• Wzmocnione złącza boczne — przewód USB, skaner przewodowy RS4000 lub RS5000x i adapter audio.', derived: [
      { value: 'USB-C', pattern: 'USB-C', specs: ['Złącza'] },
      { value: 'Wzmocnione złącza boczne', pattern: 'wzmocnione złącza boczne', specs: ['Złącza'] },
    ] },
    { specKey: 'klawiatura', label: 'Klawiatura', description: 'Fizyczne klawisze pod ekranem ułatwiają wpisywanie danych w grubych rękawicach.', derived: [
      { value: 'Wersja z klawiaturą', pattern: '23 klawisze', specs: ['Klawiatura'] },
    ] },
    { specKey: 'mroznia', label: 'Praca w mroźni', description: 'Terminal, który z odpowiednią baterią pracuje w temperaturze do −30 °C.', derived: [
      { value: 'Do −30 °C', pattern: '−30 °C', specs: ['Temperatura pracy'] },
    ] },
  ],
  'drukarki-rfid': [
    { specKey: 'producent', label: 'Producent', derived: [
      { value: 'Zebra', manufacturer: 'zebra' },
      { value: 'Brother', manufacturer: 'brother' },
      { value: 'TSC', manufacturer: 'tsc' },
      { value: 'SATO', manufacturer: 'sato' },
      { value: 'Honeywell', manufacturer: 'honeywell' },
      { value: 'BIXOLON', manufacturer: 'bixolon' },
    ] },
    {
      specKey: 'rodzaj',
      label: 'Rodzaj drukarki',
      description: 'Wybierz miejsce pracy drukarki.\n• Biurkowa — przy stanowisku pracy\n• Przemysłowa — w magazynie lub na produkcji\n• Mobilna — drukowanie przy towarze, z zasilaniem z baterii',
      derived: [
        { value: 'Biurkowa', subcategory: 'biurkowe-drukarki-etykiet' },
        { value: 'Przemysłowa', subcategory: 'przemyslowe-drukarki-etykiet' },
        { value: 'Mobilna', subcategory: 'mobilne-drukarki-etykiet' },
      ],
    },
    {
      specKey: 'rozdzielczosc',
      label: 'Rozdzielczość',
      description: 'Rozdzielczość dotyczy nadruku, a nie zasięgu RFID. Filtr pokazuje modele z oferowanym wariantem o danej rozdzielczości. Właściwy numer katalogowy wybierz na karcie drukarki.',
      derived: [
        { value: '203 dpi', pattern: '\\b203\\b', specs: ['Rozdzielczość'] },
        { value: '300 / 305 dpi', pattern: '\\b(?:300|305)\\b', specs: ['Rozdzielczość'] },
        { value: '600 / 609 dpi', pattern: '\\b(?:600|609)\\b', specs: ['Rozdzielczość'] },
      ],
    },
    {
      specKey: 'szerokosc',
      label: 'Szerokość druku',
      description: 'Maksymalna szerokość nadruku. Sprawdź też szerokość podkładu, średnicę rolki i gilzę. W ZD611R limit wynosi 56 mm przy 203 dpi lub 54 mm przy 300 dpi.',
      derived: [
        { value: '2 cale (54–56 mm)', pattern: '\\b(?:54|56)\\s*mm', specs: ['Szerokość druku'] },
        { value: '3 cale (72 mm)', pattern: '\\b72\\s*mm', specs: ['Szerokość druku'] },
        { value: '4 cale (104–112 mm)', pattern: '\\b(?:104|105[,.]7|107|108|110|112)\\s*mm', specs: ['Szerokość druku'] },
        { value: '6 cali (152–168 mm)', pattern: '\\b(?:152|165[,.]3|166[,.]4|167[,.][45]|168)\\s*mm', specs: ['Szerokość druku'] },
      ],
    },
    {
      specKey: 'metoda-druku',
      label: 'Metoda druku',
      description: 'Druk termiczny wymaga etykiet termoczułych i nie wymaga taśmy. Druk termotransferowy wymaga taśmy barwiącej. W obu metodach kodowanie wymaga zgodnych etykiet RFID.',
      derived: [
        { value: 'Termiczny bez taśmy', pattern: 'termiczny bezpośredni', specs: ['Metoda druku'] },
        { value: 'Termiczny bez taśmy', subcategory: 'termiczne-drukarki-etykiet' },
        { value: 'Termotransferowy', subcategory: 'termotransferowe-drukarki-etykiet' },
      ],
    },
    {
      specKey: 'etykiety-na-metal',
      label: 'Etykiety na metal',
      description: 'ZT411 wymaga wersji On-Metal do etykiet Silverline. SATO CL4NX Plus RFID ma zestaw On-Metal w PN WWCLP272ZWPREU; wybrane cienkie etykiety SATO Thin On-Metal mogą działać także bez zestawu. Brother TJ-4021TNR i TJ-4121TNR obsługują zgodne etykiety na metal do 1,0 mm. TSC TH240R i TH340R z anteną wewnętrzną i ręcznym odrywaniem obsługują wybrane etykiety do 1,35 mm. TSC MB241TR i MB341TR z ręcznym odrywaniem obsługują zgodne etykiety do 1,65 mm. T6000e obsługuje zgodne etykiety na metal dobrane do konfiguracji. Sprawdź wkładkę, format rolki i kalibrację.',
      derived: [
        { value: 'Dostępna wersja On-Metal', slugs: ['zebra-zt411-rfid', 'sato-cl4nx-plus-rfid'] },
        { value: 'Etykiety na metal do 1,0 mm', slugs: ['brother-tj-4021tnr', 'brother-tj-4121tnr'] },
        { value: 'Etykiety na metal do 1,35 mm', slugs: ['tsc-th240r', 'tsc-th340r'] },
        { value: 'Etykiety na metal do 1,65 mm', slugs: ['tsc-mb241tr', 'tsc-mb341tr'] },
        { value: 'Etykiety na metal — T6000e', slugs: ['tsc-printronix-t6604e-rfid', 'tsc-printronix-t6206e-rfid', 'tsc-printronix-t6306e-rfid', 'tsc-printronix-t6204e-rfid', 'tsc-printronix-t6304e-rfid'] },
      ],
    },
  ],
  'etykiety-rfid-zebra': [
    { specKey: 'Typ druku', label: 'Metoda druku', derived: [
      { value: 'Termiczny bez taśmy', pattern: 'termiczny bezpośredni', specs: ['Typ druku'] },
      { value: 'Termotransferowy', pattern: 'termotransferowy', specs: ['Typ druku'] },
    ] },
    { specKey: 'Format rolki', label: 'Rodzaj rolki', derived: [
      { value: 'Przemysłowa', pattern: '^Przemysłowa', specs: ['Format rolki'] },
      { value: 'Biurkowa', pattern: '^Biurkowa', specs: ['Format rolki'] },
      { value: 'Mobilna', pattern: '^Mobilna', specs: ['Format rolki'] },
    ] },
    { specKey: 'Materiał', label: 'Materiał' },
  ],
  'drukarki-kart': [
    {
      specKey: 'producent',
      label: 'Producent',
      derived: [
        { value: 'Magicard', manufacturer: 'magicard' },
        { value: 'Zebra', manufacturer: 'zebra' },
      ],
    },
    {
      specKey: 'druk',
      label: 'Druk',
      description: 'Ile stron karty drukarka zadrukuje sama.\n• Jednostronny — tylko awers; rewers czysty albo z nadrukiem fabrycznym\n• Dwustronny — drukarka odwraca kartę i drukuje też rewers, np. regulamin, kod QR, dane kontaktowe',
      derived: [
        { value: 'Jednostronny', pattern: 'jednostronny', specs: ['Druk jedno-/dwustronny'] },
        { value: 'Dwustronny', pattern: 'dwustronny', specs: ['Druk jedno-/dwustronny'] },
      ],
    },
    {
      specKey: 'lacznosc',
      label: 'Łączność',
      description: 'Jak podłączyć drukarkę do komputera.\n• USB — jeden komputer, najprościej\n• Ethernet — sieć szkolna lub firmowa, druk z kilku stanowisk\n• Wi-Fi — bez kabla; w części modeli jako opcja dokupowana',
      derived: [
        { value: 'USB', pattern: 'USB', specs: ['Łączność', 'Łączność (standard)', 'Łączność (opcja)'] },
        { value: 'Ethernet', pattern: 'Ethernet', specs: ['Łączność', 'Łączność (standard)', 'Łączność (opcja)'] },
        { value: 'Wi-Fi', pattern: 'Wi-?Fi', specs: ['Łączność', 'Łączność (standard)', 'Łączność (opcja)'] },
      ],
    },
    {
      specKey: 'kodowanie',
      label: 'Kodowanie kart',
      description: 'Zapis danych na karcie podczas druku. Filtr pokazuje tylko drukarki, których wersja z koderem jest w naszej ofercie.\n• Pasek magnetyczny — karty lojalnościowe, starsze systemy dostępu\n• RFID / NFC — karty zbliżeniowe do drzwi, bramek i rejestracji czasu pracy\n• Smart card — chip stykowy do podpisu i uwierzytelniania',
      derived: [
        { value: 'Pasek magnetyczny', pattern: 'magnetyczn', specs: ['Kodowanie (opcja)'] },
        { value: 'RFID / NFC', pattern: 'RFID|NFC|zbliżeniow|Mifare', specs: ['Kodowanie (opcja)'] },
        { value: 'Smart card', pattern: 'smart ?card|chipow', specs: ['Kodowanie (opcja)'] },
      ],
    },
    {
      specKey: 'cena',
      label: 'Cena netto',
      derived: [
        { value: 'do 3 000 zł', priceMax: 3000 },
        { value: '3 000 – 4 500 zł', priceMin: 3000, priceMax: 4500 },
        { value: 'powyżej 4 500 zł', priceMin: 4500 },
      ],
    },
  ],
  'mobilne-drukarki-etykiet': [
    {
      specKey: 'producent',
      label: 'Producent',
      derived: [
        { value: 'Zebra', manufacturer: 'zebra' },
        { value: 'Honeywell', manufacturer: 'honeywell' },
        { value: 'Brother', manufacturer: 'brother' },
        { value: 'Citizen', manufacturer: 'citizen' },
      ],
    },
    {
      specKey: 'szerokosc',
      label: 'Szerokość druku',
      description: 'Maksymalna szerokość etykiety lub paragonu.\n• 2 cale (48 mm) — paragony, małe etykiety cenowe, do kieszeni\n• 3 cale (72 mm) — etykiety półkowe i kurierskie mniejszego formatu\n• 4 cale (104 mm) — pełnowymiarowe etykiety logistyczne i wysyłkowe',
      derived: [
        { value: '2 cale (48 mm)', pattern: '(^|[^0-9,])4[0-9] ?mm', specs: ['Szerokość druku'] },
        { value: '3 cale (72 mm)', pattern: '7[0-9] ?mm|–80 ?mm', specs: ['Szerokość druku', 'Szerokość nośnika'] },
        { value: '4 cale (104 mm)', pattern: '10[0-9](,[0-9])? ?mm', specs: ['Szerokość druku'] },
      ],
    },
    {
      specKey: 'lacznosc',
      label: 'Łączność',
      description: 'Jak drukarka łączy się z terminalem, telefonem lub siecią. Bluetooth mają wszystkie modele.\n• Wi-Fi — druk z sieci firmowej, w części modeli jako wariant lub opcja\n• NFC — parowanie z terminalem przez przyłożenie\n• RS-232 — kabel szeregowy do starszych urządzeń\n• Ethernet — w stacji dokującej',
      derived: [
        { value: 'Wi-Fi', pattern: 'Wi-?Fi|802\\.11', specs: ['Wi-Fi', 'Wi-Fi (RJ-4250WB)', 'Interfejsy', 'Dual Radio'] },
        { value: 'NFC', pattern: '^Tak|NFC', specs: ['NFC'] },
        { value: 'NFC', pattern: 'NFC', specs: ['Interfejsy'] },
        { value: 'RS-232', pattern: 'RS-?232', specs: ['RS-232', 'Interfejsy', 'Interfejs szeregowy'] },
        { value: 'Ethernet (stacja)', pattern: 'Ethernet|10/100', specs: ['Ethernet', 'Interfejsy'] },
      ],
    },
    {
      specKey: 'szczelnosc',
      label: 'Szczelność (IP)',
      description: 'Odporność obudowy na pył i wodę.\n• IP42–IP43 — biuro, sklep, samochód\n• IP54 — pył i bryzgi wody; magazyn, dostawy, teren\n• IP65 — z osłoną ochronną; strugi wody, budowa',
      derived: [
        { value: 'IP42–IP43', pattern: 'IP4[0-9]', specs: ['Klasa ochrony', 'Klasa ochrony (IP)'] },
        { value: 'IP54', pattern: 'IP54', specs: ['Klasa ochrony', 'Klasa ochrony (IP)'] },
        { value: 'IP65 (z osłoną)', pattern: 'IP65', specs: ['Klasa ochrony', 'Klasa ochrony (IP)'] },
      ],
    },
    {
      specKey: 'upadki',
      label: 'Odporność na upadki',
      description: 'Z jakiej wysokości drukarka wytrzymuje upadek na beton wg testów producenta.\n• do 1,5 m — z ręki lub z biurka\n• 1,8 m — z ręki na stojąco, z etui\n• 2 m i więcej — z wózka lub rampy; kurierzy, magazyn',
      derived: [
        { value: 'do 1,5 m', pattern: '1,5[0-9]? ?m', specs: ['Odporność na upadki'] },
        { value: '1,8 m', pattern: '1,8 ?m', specs: ['Odporność na upadki'] },
        { value: '2 m i więcej', pattern: '(^|[^0-9,])2(,[0-9])? ?m', specs: ['Odporność na upadki'] },
      ],
    },
    {
      specKey: 'cena',
      label: 'Cena netto',
      derived: [
        { value: 'do 1 500 zł', priceMax: 1500 },
        { value: '1 500 – 3 000 zł', priceMin: 1500, priceMax: 3000 },
        { value: 'powyżej 3 000 zł', priceMin: 3000 },
      ],
    },
  ],
  'termiczne-drukarki-etykiet': [
    {
      specKey: 'producent',
      label: 'Producent',
      derived: [
        { value: 'Zebra', manufacturer: 'zebra' },
        { value: 'Honeywell', manufacturer: 'honeywell' },
        { value: 'Brother', manufacturer: 'brother' },
        { value: 'Citizen', manufacturer: 'citizen' },
      ],
    },
    {
      specKey: 'typ',
      label: 'Rodzaj',
      description: 'Gdzie drukarka pracuje.\n• Biurkowa — na stałe przy komputerze lub w sieci, zasilana z gniazdka, duże rolki\n• Mobilna — na baterię, noszona przy pasku lub w aucie; kurierzy, magazyn, inwentaryzacja',
      derived: [
        { value: 'Biurkowa', notSpecs: ['Bateria', 'Bateria standardowa'] },
        { value: 'Mobilna (na baterię)', pattern: '\\S', specs: ['Bateria', 'Bateria standardowa'] },
      ],
    },
    {
      specKey: 'rozdzielczosc',
      label: 'Rozdzielczość',
      description: 'Gęstość punktów druku.\n• 203 dpi — standard do etykiet logistycznych, kodów kreskowych i paragonów\n• 300 dpi — drobny tekst, małe etykiety, kody 2D na małej powierzchni',
      derived: [
        { value: '203 dpi', pattern: '203', specs: ['Rozdzielczość', 'Rozdzielczość druku'] },
        { value: '300 dpi', pattern: '300', specs: ['Rozdzielczość', 'Rozdzielczość druku'] },
      ],
    },
    {
      specKey: 'szerokosc',
      label: 'Szerokość druku',
      description: 'Maksymalna szerokość etykiety.\n• 2 cale (do 56 mm) — małe etykiety cenowe, paragony, opaski\n• 3 cale (72 mm) — etykiety półkowe i kurierskie mniejszego formatu\n• 4 cale (104–108 mm) — etykiety logistyczne i wysyłkowe A6',
      derived: [
        { value: '2 cale (do 56 mm)', pattern: '(^|[^0-9,])(4[0-9]|5[0-9]) ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
        { value: '3 cale (72 mm)', pattern: '7[0-9] ?mm|–80 ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku', 'Szerokość nośnika'] },
        { value: '4 cale (104–108 mm)', pattern: '10[0-9](,[0-9])? ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
      ],
    },
    {
      specKey: 'lacznosc',
      label: 'Łączność',
      description: 'Jak podłączyć drukarkę. USB mają wszystkie modele.\n• Ethernet — praca w sieci firmowej, druk z kilku stanowisk\n• Wi-Fi — bez kabla; często jako opcja lub wariant\n• Bluetooth — druk z terminala lub telefonu\n• RS-232 — kabel szeregowy do wag i starszych systemów',
      derived: [
        { value: 'Ethernet', pattern: 'Ethernet|10/100|\\bLAN\\b', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Ethernet', 'Wi-Fi', 'Wi-Fi (RJ-4250WB)', 'RS-232', 'Interfejs szeregowy', 'Dual Radio'] },
        { value: 'Wi-Fi', pattern: 'Wi-?Fi|802\\.11', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Ethernet', 'Wi-Fi', 'Wi-Fi (RJ-4250WB)', 'RS-232', 'Interfejs szeregowy', 'Dual Radio'] },
        { value: 'Bluetooth', pattern: 'Bluetooth|\\bBLE\\b', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Ethernet', 'Wi-Fi', 'Wi-Fi (RJ-4250WB)', 'RS-232', 'Interfejs szeregowy', 'Dual Radio'] },
        { value: 'Bluetooth', pattern: '\\S', specs: ['Bluetooth'] },
        { value: 'RS-232', pattern: 'RS-?232', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Ethernet', 'Wi-Fi', 'Wi-Fi (RJ-4250WB)', 'RS-232', 'Interfejs szeregowy', 'Dual Radio'] },
      ],
    },
    {
      specKey: 'wyposazenie',
      label: 'Wyposażenie',
      description: 'Elementy, które ułatwiają obsługę.\n• Wyświetlacz — stan drukarki i ustawienia bez komputera\n• Obcinacz — automatyczne cięcie etykiet ciągłych i paragonów (opcja fabryczna)\n• Odklejak — podaje etykietę bez podkładu, gotową do naklejenia (opcja fabryczna)',
      derived: [
        { value: 'Wyświetlacz', pattern: '\\S', specs: ['Wyświetlacz'] },
        { value: 'Obcinacz (opcja)', pattern: 'cutter|obcinacz|gilotyn', specs: ['Opcje fabryczne', 'Opcje', 'Odrywacz'] },
        { value: 'Odklejak (opcja)', pattern: 'peeler|odklejak|dispenser', specs: ['Opcje fabryczne', 'Opcje'] },
      ],
    },
    {
      specKey: 'cena',
      label: 'Cena netto',
      derived: [
        { value: 'do 1 000 zł', priceMax: 1000 },
        { value: '1 000 – 2 000 zł', priceMin: 1000, priceMax: 2000 },
        { value: 'powyżej 2 000 zł', priceMin: 2000 },
      ],
    },
  ],
  'termotransferowe-drukarki-etykiet': [
    {
      specKey: 'producent',
      label: 'Producent',
      derived: [
        { value: 'Zebra', manufacturer: 'zebra' },
        { value: 'Honeywell', manufacturer: 'honeywell' },
        { value: 'TSC', manufacturer: 'tsc' },
        { value: 'Citizen', manufacturer: 'citizen' },
        { value: 'Brother', manufacturer: 'brother' },
      ],
    },
    {
      specKey: 'klasa',
      label: 'Klasa',
      description: 'Do jakiego obciążenia drukarka jest zbudowana.\n• Biurkowa — rolki do 127 mm, kilkaset etykiet dziennie; sklep, biuro, mały magazyn\n• Przemysłowa — rolki 200 mm, metalowa konstrukcja, praca ciągła na kilka zmian; produkcja, logistyka',
      derived: [
        { value: 'Biurkowa', pattern: '(^|[^0-9])12[0-9] ?mm', specs: ['Max średnica rolki', 'Maks. średnica rolki', 'Maks. średnica rolki mediów'] },
        { value: 'Biurkowa', slugs: ['zebra-zd421t', 'honeywell-pc45t', 'honeywell-pc42e-t'] },
        { value: 'Przemysłowa', pattern: '^(?!.*wewn)(.*[^0-9])?2[0-9][0-9](,[0-9])? ?mm', specs: ['Max średnica rolki', 'Maks. średnica rolki', 'Maks. średnica rolki mediów'] },
        { value: 'Przemysłowa', slugs: ['zebra-zt231', 'honeywell-pd45', 'honeywell-pd45s', 'honeywell-pm45', 'honeywell-pm65', 'honeywell-px45'] },
      ],
    },
    {
      specKey: 'rozdzielczosc',
      label: 'Rozdzielczość',
      description: 'Gęstość punktów druku.\n• 203 dpi — etykiety logistyczne, kody kreskowe, teksty od 3 mm\n• 300 dpi — drobny tekst, małe etykiety, kody 2D, elektronika\n• 600 dpi — bardzo małe etykiety, PCB, jubilerstwo',
      derived: [
        { value: '203 dpi', pattern: '203', specs: ['Rozdzielczość', 'Rozdzielczość druku'] },
        { value: '300 dpi', pattern: '300', specs: ['Rozdzielczość', 'Rozdzielczość druku'] },
        { value: '600 dpi', pattern: '600', specs: ['Rozdzielczość', 'Rozdzielczość druku'] },
      ],
    },
    {
      specKey: 'szerokosc',
      label: 'Szerokość druku',
      description: 'Maksymalna szerokość etykiety.\n• 2 cale (do 56 mm) — małe etykiety, opaski, biżuteria\n• 4 cale (104–108 mm) — standard: etykiety logistyczne i wysyłkowe\n• 6 cali (166–168 mm) — etykiety paletowe, chemia, duże kartony\n• 8 cali (216 mm) — etykiety wielkoformatowe',
      derived: [
        { value: '2 cale (do 56 mm)', pattern: '(^|[^0-9,])(4[0-9]|5[0-9]) ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
        { value: '4 cale (104–108 mm)', pattern: '10[0-9](,[0-9])? ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
        { value: '4 cale (104–108 mm)', pattern: '–1[0-2][0-9] ?mm', specs: ['Szerokość mediów'] },
        { value: '6 cali (166–168 mm)', pattern: '16[0-9](,[0-9])? ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
        { value: '6 cali (166–168 mm)', pattern: '–17[0-9](,[0-9])? ?mm', specs: ['Szerokość mediów'] },
        { value: '8 cali (216 mm)', pattern: '2[12][0-9](,[0-9])? ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
      ],
    },
    {
      specKey: 'lacznosc',
      label: 'Łączność',
      description: 'Jak podłączyć drukarkę. USB mają wszystkie modele.\n• Ethernet — sieć firmowa, druk z kilku stanowisk i z systemu WMS/ERP\n• Wi-Fi — bez kabla; zwykle jako opcja\n• Bluetooth — druk z terminala lub telefonu\n• RS-232 — kabel szeregowy do wag i starszych systemów',
      derived: [
        { value: 'Ethernet', pattern: 'Ethernet|10/100|\\bLAN\\b|Gigabit', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Łączność bezprzewodowa', 'Ethernet', 'Wi-Fi', 'RS-232', 'Dual Radio'] },
        { value: 'Wi-Fi', pattern: 'Wi-?Fi|802\\.11', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Łączność bezprzewodowa', 'Ethernet', 'Wi-Fi', 'RS-232', 'Dual Radio'] },
        { value: 'Bluetooth', pattern: 'Bluetooth|\\bBLE\\b', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Łączność bezprzewodowa', 'Ethernet', 'Wi-Fi', 'RS-232', 'Dual Radio'] },
        { value: 'Bluetooth', pattern: '\\S', specs: ['Bluetooth'] },
        { value: 'RS-232', pattern: 'RS-?232|szeregow', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Łączność bezprzewodowa', 'Ethernet', 'Wi-Fi', 'RS-232', 'Dual Radio'] },
        { value: 'RS-232', pattern: '\\S', specs: ['RS-232'] },
      ],
    },
    {
      specKey: 'tasma',
      label: 'Nawój taśmy',
      description: 'Ile metrów taśmy barwiącej mieści drukarka. Dłuższa taśma = rzadsza wymiana i niższy koszt metra.\n• do 74 m — małe rolki na rdzeniu 0,5", drukarki biurkowe podstawowe\n• 300 m — rdzeń 1", biurkowe wyższej klasy\n• 450 m i więcej — drukarki przemysłowe',
      derived: [
        { value: 'do 74 m', pattern: '(^|[^0-9])74 ?m', specs: ['Max długość taśmy', 'Maks. długość taśmy', 'Długość taśmy', 'Taśma (ribbon)'] },
        { value: '300 m', pattern: '(^|[^0-9])300 ?m', specs: ['Max długość taśmy', 'Maks. długość taśmy', 'Długość taśmy', 'Taśma (ribbon)'] },
        { value: '450 m i więcej', pattern: '(^|[^0-9])(360|450|600) ?m', specs: ['Max długość taśmy', 'Maks. długość taśmy', 'Długość taśmy', 'Taśma (ribbon)'] },
      ],
    },
    {
      specKey: 'wyswietlacz',
      label: 'Wyświetlacz',
      description: 'Panel na drukarce.\n• Dotykowy — ustawienia, kalibracja i podgląd stanu bez komputera\n• Zwykły LCD lub diody — podstawowe komunikaty',
      derived: [
        { value: 'Dotykowy', pattern: 'dotykow|touch', specs: ['Wyświetlacz'] },
        { value: 'LCD lub diody', pattern: '^(?!.*(dotykow|touch)).*\\S', specs: ['Wyświetlacz'] },
      ],
    },
    {
      specKey: 'cena',
      label: 'Cena netto',
      derived: [
        { value: 'do 2 000 zł', priceMax: 2000 },
        { value: '2 000 – 5 000 zł', priceMin: 2000, priceMax: 5000 },
        { value: 'powyżej 5 000 zł', priceMin: 5000 },
      ],
    },
  ],
  'przemyslowe-drukarki-etykiet': [
    {
      specKey: 'producent',
      label: 'Producent',
      derived: [
        { value: 'Zebra', manufacturer: 'zebra' },
        { value: 'Honeywell', manufacturer: 'honeywell' },
        { value: 'TSC', manufacturer: 'tsc' },
        { value: 'Citizen', manufacturer: 'citizen' },
        { value: 'Brother', manufacturer: 'brother' },
      ],
    },
    {
      specKey: 'rozdzielczosc',
      label: 'Rozdzielczość',
      description: 'Gęstość punktów druku.\n• 203 dpi — etykiety logistyczne i paletowe, kody kreskowe\n• 300 dpi — drobny tekst, kody 2D, etykiety produktowe\n• 406–600 dpi — bardzo małe etykiety, elektronika, PCB',
      derived: [
        { value: '203 dpi', pattern: '203', specs: ['Rozdzielczość', 'Rozdzielczość druku'] },
        { value: '300 dpi', pattern: '300', specs: ['Rozdzielczość', 'Rozdzielczość druku'] },
        { value: '406–600 dpi', pattern: '406|600', specs: ['Rozdzielczość', 'Rozdzielczość druku'] },
      ],
    },
    {
      specKey: 'szerokosc',
      label: 'Szerokość druku',
      description: 'Maksymalna szerokość etykiety.\n• 4 cale (104–108 mm) — standard: etykiety logistyczne, wysyłkowe, produktowe\n• 6 cali (166–168 mm) — etykiety paletowe GS1, chemia, duże kartony\n• 8 cali (216 mm) — etykiety wielkoformatowe i plakaty',
      derived: [
        { value: '4 cale (104–108 mm)', pattern: '10[0-9](,[0-9])? ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
        { value: '4 cale (104–108 mm)', pattern: '–1[0-2][0-9] ?mm', specs: ['Szerokość mediów'] },
        { value: '6 cali (166–168 mm)', pattern: '16[0-9](,[0-9])? ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
        { value: '6 cali (166–168 mm)', pattern: '–17[0-9](,[0-9])? ?mm', specs: ['Szerokość mediów'] },
        { value: '8 cali (216 mm)', pattern: '2[12][0-9](,[0-9])? ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
      ],
    },
    {
      specKey: 'predkosc',
      label: 'Prędkość druku',
      description: 'Maksymalna prędkość przesuwu etykiety. Model z kilkoma rozdzielczościami trafia do kilku przedziałów.\n• do 199 mm/s — kilkaset etykiet na godzinę, druk na żądanie\n• 200–299 mm/s — linia pakowania, magazyn\n• 300 mm/s i więcej — druk seryjny, wysokie nakłady',
      derived: [
        { value: 'do 199 mm/s', pattern: '(^|[^0-9,])(1[0-9][0-9]|[1-9][0-9])(,[0-9])? ?mm/s', specs: ['Prędkość druku', 'Szybkość druku'] },
        { value: '200–299 mm/s', pattern: '(^|[^0-9,])2[0-9][0-9](,[0-9])? ?mm/s', specs: ['Prędkość druku', 'Szybkość druku'] },
        { value: '300 mm/s i więcej', pattern: '(^|[^0-9,])3[0-9][0-9](,[0-9])? ?mm/s', specs: ['Prędkość druku', 'Szybkość druku'] },
      ],
    },
    {
      specKey: 'lacznosc',
      label: 'Łączność',
      description: 'Jak podłączyć drukarkę. USB mają wszystkie modele.\n• Ethernet — sieć firmowa, druk z systemu WMS/ERP\n• Wi-Fi — bez kabla; zwykle jako opcja\n• Bluetooth — druk z terminala lub telefonu\n• RS-232 — kabel szeregowy do wag i sterowników linii',
      derived: [
        { value: 'Ethernet', pattern: 'Ethernet|10/100|\\bLAN\\b|Gigabit', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Łączność bezprzewodowa', 'Ethernet', 'Wi-Fi', 'RS-232', 'Dual Radio'] },
        { value: 'Wi-Fi', pattern: 'Wi-?Fi|802\\.11', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Łączność bezprzewodowa', 'Ethernet', 'Wi-Fi', 'RS-232', 'Dual Radio'] },
        { value: 'Bluetooth', pattern: 'Bluetooth|\\bBLE\\b', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Łączność bezprzewodowa', 'Ethernet', 'Wi-Fi', 'RS-232', 'Dual Radio'] },
        { value: 'Bluetooth', pattern: '\\S', specs: ['Bluetooth'] },
        { value: 'RS-232', pattern: 'RS-?232|szeregow', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Łączność bezprzewodowa', 'Ethernet', 'Wi-Fi', 'RS-232', 'Dual Radio'] },
        { value: 'RS-232', pattern: '\\S', specs: ['RS-232'] },
      ],
    },
    {
      specKey: 'tasma',
      label: 'Nawój taśmy',
      description: 'Ile metrów taśmy barwiącej mieści drukarka. Dłuższa taśma = rzadsza wymiana na linii.\n• do 360 m — mniejsze modele przemysłowe\n• 450 m — standard przemysłowy\n• 600 m — najdłuższe nawoje, praca ciągła',
      derived: [
        { value: 'do 360 m', pattern: '(^|[^0-9])(300|360) ?m', specs: ['Max długość taśmy', 'Maks. długość taśmy', 'Długość taśmy', 'Taśma (ribbon)'] },
        { value: '450 m', pattern: '(^|[^0-9])450 ?m', specs: ['Max długość taśmy', 'Maks. długość taśmy', 'Długość taśmy', 'Taśma (ribbon)'] },
        { value: '600 m', pattern: '(^|[^0-9])600 ?m', specs: ['Max długość taśmy', 'Maks. długość taśmy', 'Długość taśmy', 'Taśma (ribbon)'] },
      ],
    },
    {
      specKey: 'wyswietlacz',
      label: 'Wyświetlacz',
      description: 'Panel na drukarce.\n• Dotykowy — ustawienia, kalibracja i podgląd stanu bez komputera\n• LCD z klawiszami — podstawowe menu i komunikaty',
      derived: [
        { value: 'Dotykowy', pattern: 'dotykow|touch', specs: ['Wyświetlacz'] },
        { value: 'LCD z klawiszami', pattern: '^(?!.*(dotykow|touch)).*\\S', specs: ['Wyświetlacz'] },
      ],
    },
    {
      specKey: 'cena',
      label: 'Cena netto',
      derived: [
        { value: 'do 3 000 zł', priceMax: 3000 },
        { value: '3 000 – 6 000 zł', priceMin: 3000, priceMax: 6000 },
        { value: 'powyżej 6 000 zł', priceMin: 6000 },
      ],
    },
  ],
  'biurkowe-drukarki-etykiet': [
    {
      specKey: 'producent',
      label: 'Producent',
      derived: [
        { value: 'Zebra', manufacturer: 'zebra' },
        { value: 'Honeywell', manufacturer: 'honeywell' },
        { value: 'TSC', manufacturer: 'tsc' },
        { value: 'Citizen', manufacturer: 'citizen' },
        { value: 'Brother', manufacturer: 'brother' },
      ],
    },
    {
      specKey: 'technologia',
      label: 'Technologia druku',
      description: 'Czym drukarka nanosi obraz.\n• Termiczna — bez taśmy, na papierze termicznym; etykiety krótkotrwałe: wysyłkowe, paragony, cenówki\n• Termotransferowa — z taśmą barwiącą; nadruk trwały: etykiety produktowe, magazynowe, na folii. Drukuje też termicznie',
      derived: [
        { value: 'Termiczna (bez taśmy)', pattern: 'termiczn|direct thermal', specs: ['Rodzaj druku', 'Metoda druku'] },
        { value: 'Termotransferowa (z taśmą)', pattern: 'termotransfer', specs: ['Rodzaj druku', 'Metoda druku'] },
      ],
    },
    {
      specKey: 'rozdzielczosc',
      label: 'Rozdzielczość',
      description: 'Gęstość punktów druku.\n• 203 dpi — etykiety logistyczne, kody kreskowe, teksty od 3 mm\n• 300 dpi — drobny tekst, małe etykiety, kody 2D\n• 600 dpi — bardzo małe etykiety, elektronika',
      derived: [
        { value: '203 dpi', pattern: '203', specs: ['Rozdzielczość', 'Rozdzielczość druku'] },
        { value: '300 dpi', pattern: '300', specs: ['Rozdzielczość', 'Rozdzielczość druku'] },
        { value: '600 dpi', pattern: '600', specs: ['Rozdzielczość', 'Rozdzielczość druku'] },
      ],
    },
    {
      specKey: 'szerokosc',
      label: 'Szerokość druku',
      description: 'Maksymalna szerokość etykiety.\n• 2 cale (do 56 mm) — małe etykiety cenowe, opaski, biżuteria\n• 4 cale (104–108 mm) — standard: etykiety logistyczne, wysyłkowe, produktowe',
      derived: [
        { value: '2 cale (do 56 mm)', pattern: '(^|[^0-9,])(4[0-9]|5[0-9]) ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
        { value: '4 cale (104–108 mm)', pattern: '10[0-9](,[0-9])? ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
        { value: '4 cale (104–108 mm)', pattern: '–1[0-2][0-9] ?mm', specs: ['Szerokość mediów'] },
      ],
    },
    {
      specKey: 'lacznosc',
      label: 'Łączność',
      description: 'Jak podłączyć drukarkę. USB mają wszystkie modele.\n• Ethernet — sieć firmowa, druk z kilku stanowisk\n• Wi-Fi — bez kabla; często jako opcja\n• Bluetooth — druk z terminala lub telefonu\n• RS-232 — kabel szeregowy do wag i starszych systemów',
      derived: [
        { value: 'Ethernet', pattern: 'Ethernet|10/100|\\bLAN\\b|Gigabit', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Łączność bezprzewodowa', 'Ethernet', 'Wi-Fi', 'Wi-Fi (RJ-4250WB)', 'RS-232', 'Interfejs szeregowy', 'Dual Radio'] },
        { value: 'Wi-Fi', pattern: 'Wi-?Fi|802\\.11', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Łączność bezprzewodowa', 'Ethernet', 'Wi-Fi', 'Wi-Fi (RJ-4250WB)', 'RS-232', 'Interfejs szeregowy', 'Dual Radio'] },
        { value: 'Bluetooth', pattern: 'Bluetooth|\\bBLE\\b', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Łączność bezprzewodowa', 'Ethernet', 'Wi-Fi', 'Wi-Fi (RJ-4250WB)', 'RS-232', 'Interfejs szeregowy', 'Dual Radio'] },
        { value: 'Bluetooth', pattern: '\\S', specs: ['Bluetooth'] },
        { value: 'RS-232', pattern: 'RS-?232|szeregow', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Łączność bezprzewodowa', 'Ethernet', 'Wi-Fi', 'Wi-Fi (RJ-4250WB)', 'RS-232', 'Interfejs szeregowy', 'Dual Radio'] },
        { value: 'RS-232', pattern: '\\S', specs: ['RS-232'] },
      ],
    },
    {
      specKey: 'wyposazenie',
      label: 'Wyposażenie',
      description: 'Elementy, które ułatwiają obsługę.\n• Wyświetlacz — stan drukarki i ustawienia bez komputera\n• Obcinacz — automatyczne cięcie etykiet ciągłych (opcja fabryczna)\n• Odklejak — podaje etykietę bez podkładu, gotową do naklejenia (opcja fabryczna)',
      derived: [
        { value: 'Wyświetlacz', pattern: '\\S', specs: ['Wyświetlacz'] },
        { value: 'Obcinacz (opcja)', pattern: 'cutter|obcinacz|gilotyn', specs: ['Opcje fabryczne', 'Opcje', 'Odrywacz'] },
        { value: 'Odklejak (opcja)', pattern: 'peeler|odklejak|dispenser', specs: ['Opcje fabryczne', 'Opcje'] },
      ],
    },
    {
      specKey: 'cena',
      label: 'Cena netto',
      derived: [
        { value: 'do 1 000 zł', priceMax: 1000 },
        { value: '1 000 – 2 000 zł', priceMin: 1000, priceMax: 2000 },
        { value: 'powyżej 2 000 zł', priceMin: 2000 },
      ],
    },
  ],
  'kolorowe-drukarki-etykiet': [
    {
      specKey: 'klasa',
      label: 'Klasa urządzenia',
      description: 'Do jakiego obciążenia drukarka jest zbudowana.\n• Biurkowa — od kilkudziesięciu do kilkuset etykiet dziennie, stoi na blacie obok stanowiska\n• Przemysłowa — druk całymi zmianami, większe rolki, cięższa obudowa i gwarancja z serwisem u klienta',
      derived: [
        { value: 'Biurkowa', notSpecs: ['Klasa urządzenia'] },
        { value: 'Przemysłowa', pattern: 'przemysłowa', specs: ['Klasa urządzenia'] },
      ],
    },
    {
      specKey: 'szerokosc',
      label: 'Szerokość druku',
      description: 'Najszersza etykieta, jaką drukarka zadrukuje.\n• Do 108 mm (4 cale) — etykiety produktowe, chłodnicze i wysyłkowe; ten format wybiera większość firm\n• Do 212 mm (8 cali) — etykiety na beczki, kanistry i kartony zbiorcze, także formaty zbliżone do A4',
      derived: [
        { value: 'do 108 mm (4 cale)', pattern: '10[48] ?mm', specs: ['Szerokość druku'] },
        { value: 'do 212 mm (8 cali)', pattern: '212 ?mm', specs: ['Szerokość druku'] },
      ],
    },
    {
      specKey: 'predkosc',
      label: 'Prędkość druku',
      description: 'Ile milimetrów etykiety powstaje w sekundę. Przy 100 mm/s etykieta o wysokości 150 mm wychodzi w półtorej sekundy.\n• Do 100 mm/s — pojedyncze etykiety i krótkie serie\n• 100–150 mm/s — praca przez całą zmianę\n• Powyżej 150 mm/s — etykietowanie na linii produkcyjnej',
      derived: [
        { value: 'do 100 mm/s', pattern: '(8[0-9]|9[0-9]|100) ?mm/s', specs: ['Prędkość druku'] },
        { value: '100–150 mm/s', pattern: '(10[1-9]|1[1-4][0-9]) ?mm/s', specs: ['Prędkość druku'] },
        { value: 'powyżej 150 mm/s', pattern: '(1[5-9][0-9]|[2-9][0-9]{2}) ?mm/s', specs: ['Prędkość druku'] },
      ],
    },
    {
      specKey: 'tusz',
      label: 'Rodzaj tuszu',
      description: 'Czym drukarka nanosi kolor.\n• Pigmentowy — po wyschnięciu nie rozmazuje się od wody i nie blaknie na świetle; etykiety chłodnicze, chemiczne i produktowe\n• Barwnikowy — mocniejsze, głębsze kolory na papierze błyszczącym, ale nadruk jest wrażliwy na wilgoć',
      derived: [
        { value: 'Pigmentowy', pattern: 'pigmentow', specs: ['Technologia druku'] },
        { value: 'Barwnikowy', pattern: 'barwnikow', specs: ['Technologia druku'] },
      ],
    },
    {
      specKey: 'wykonczenie',
      label: 'Odbiór etykiety',
      description: 'Co dzieje się z etykietą po wydruku.\n• Gilotyna — drukarka odcina każdą etykietę; konieczna przy rolkach ciągłych, na których długość ustawia się w projekcie\n• Odklejak — oddziela etykietę od podkładu i podaje gotową do naklejenia, a podkład nawija na szpulę. To osobna wersja drukarki, nie dokładana opcja',
      derived: [
        { value: 'Gilotyna', pattern: 'automatyczna|w zestawie|w standardzie', specs: ['Gilotyna'] },
        { value: 'Gilotyna', pattern: 'gilotyn', specs: ['Wersje'] },
        { value: 'Odklejak (wersja Pe)', pattern: 'odklejak', specs: ['Wersje'] },
      ],
    },
    {
      specKey: 'rozdzielczosc',
      label: 'Rozdzielczość',
      description: 'Gęstość kropel tuszu.\n• 720 × 360 dpi — logo, piktogramy i kody kreskowe w typowej etykiecie produktowej\n• 600 × 1200 dpi — drobny skład i gęste kody 2D\n• 1200 × 1200 dpi — zdjęcia produktu i mikrotekst',
      derived: [
        { value: '720 × 360 dpi', pattern: '720 ?× ?360', specs: ['Rozdzielczość'] },
        { value: '600 × 1200 dpi', pattern: 'do 600 ?× ?1200', specs: ['Rozdzielczość'] },
        { value: '1200 × 1200 dpi', pattern: '1200 ?× ?1200', specs: ['Rozdzielczość'] },
      ],
    },
    {
      specKey: 'cena',
      label: 'Cena netto',
      derived: [
        { value: 'do 10 000 zł', priceMax: 10000 },
        { value: '10 000 – 20 000 zł', priceMin: 10000, priceMax: 20000 },
        { value: 'powyżej 20 000 zł', priceMin: 20000 },
      ],
    },
  ],
  'drukarki-etykiet': [
    {
      specKey: 'producent',
      label: 'Producent',
      derived: [
        { value: 'Zebra', manufacturer: 'zebra' },
        { value: 'Honeywell', manufacturer: 'honeywell' },
        { value: 'TSC', manufacturer: 'tsc' },
        { value: 'Citizen', manufacturer: 'citizen' },
        { value: 'Brother', manufacturer: 'brother' },
      ],
    },
    {
      specKey: 'rodzaj',
      label: 'Rodzaj',
      description: 'Gdzie drukarka pracuje.\n• Biurkowa — przy komputerze lub w sieci, rolki do 127 mm; sklep, biuro, mały magazyn\n• Przemysłowa — rolki 200 mm, metalowa konstrukcja, praca ciągła; produkcja, logistyka\n• Mobilna — na baterię, przy pasku lub w aucie; kurierzy, inwentaryzacja',
      derived: [
        { value: 'Biurkowa', pattern: '(^|[^0-9])12[0-9] ?mm', specs: ['Max średnica rolki', 'Maks. średnica rolki', 'Maks. średnica rolki mediów'], notSpecs: ['Bateria', 'Bateria standardowa'] },
        { value: 'Biurkowa', slugs: ['zebra-zd421t', 'honeywell-pc45t', 'honeywell-pc42e-t', 'honeywell-pc45d', 'brother-td-2020a'] },
        { value: 'Przemysłowa', pattern: '^(?!.*wewn)(.*[^0-9])?2[0-9][0-9](,[0-9])? ?mm', specs: ['Max średnica rolki', 'Maks. średnica rolki', 'Maks. średnica rolki mediów'] },
        { value: 'Przemysłowa', slugs: ['zebra-zt231', 'honeywell-pd45', 'honeywell-pd45s', 'honeywell-pm45', 'honeywell-pm65', 'honeywell-px45'] },
        { value: 'Mobilna (na baterię)', pattern: '\\S', specs: ['Bateria', 'Bateria standardowa'] },
      ],
    },
    {
      specKey: 'technologia',
      label: 'Technologia druku',
      description: 'Czym drukarka nanosi obraz.\n• Termiczna — bez taśmy, na papierze termicznym; etykiety krótkotrwałe: wysyłkowe, paragony, cenówki\n• Termotransferowa — z taśmą barwiącą; nadruk trwały: etykiety produktowe, magazynowe, na folii. Drukuje też termicznie',
      derived: [
        { value: 'Termiczna (bez taśmy)', pattern: 'termiczn|direct thermal', specs: ['Rodzaj druku', 'Metoda druku'] },
        { value: 'Termotransferowa (z taśmą)', pattern: 'termotransfer', specs: ['Rodzaj druku', 'Metoda druku'] },
      ],
    },
    {
      specKey: 'rozdzielczosc',
      label: 'Rozdzielczość',
      description: 'Gęstość punktów druku.\n• 203 dpi — etykiety logistyczne, kody kreskowe, teksty od 3 mm\n• 300 dpi — drobny tekst, małe etykiety, kody 2D\n• 600 dpi — bardzo małe etykiety, elektronika',
      derived: [
        { value: '203 dpi', pattern: '203', specs: ['Rozdzielczość', 'Rozdzielczość druku'] },
        { value: '300 dpi', pattern: '300', specs: ['Rozdzielczość', 'Rozdzielczość druku'] },
        { value: '600 dpi', pattern: '600', specs: ['Rozdzielczość', 'Rozdzielczość druku'] },
      ],
    },
    {
      specKey: 'szerokosc',
      label: 'Szerokość druku',
      description: 'Maksymalna szerokość etykiety.\n• 2 cale (do 56 mm) — małe etykiety, paragony, opaski\n• 3 cale (72 mm) — mobilne etykiety kurierskie\n• 4 cale (104–108 mm) — standard: etykiety logistyczne i wysyłkowe\n• 6–8 cali — etykiety paletowe i wielkoformatowe',
      derived: [
        { value: '2 cale (do 56 mm)', pattern: '(^|[^0-9,])(4[0-9]|5[0-9]) ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
        { value: '3 cale (72 mm)', pattern: '7[0-9] ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
        { value: '3 cale (72 mm)', pattern: '–80 ?mm', specs: ['Szerokość nośnika'] },
        { value: '4 cale (104–108 mm)', pattern: '10[0-9](,[0-9])? ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
        { value: '4 cale (104–108 mm)', pattern: '–1[0-2][0-9] ?mm', specs: ['Szerokość mediów'] },
        { value: '6–8 cali (168–216 mm)', pattern: '16[0-9](,[0-9])? ?mm|2[12][0-9](,[0-9])? ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
        { value: '6–8 cali (168–216 mm)', pattern: '–17[0-9](,[0-9])? ?mm', specs: ['Szerokość mediów'] },
      ],
    },
    {
      specKey: 'lacznosc',
      label: 'Łączność',
      description: 'Jak podłączyć drukarkę. USB mają wszystkie modele.\n• Ethernet — sieć firmowa, druk z kilku stanowisk\n• Wi-Fi — bez kabla; często jako opcja\n• Bluetooth — druk z terminala lub telefonu\n• RS-232 — kabel szeregowy do wag i starszych systemów',
      derived: [
        { value: 'Ethernet', pattern: 'Ethernet|10/100|\\bLAN\\b|Gigabit', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Łączność bezprzewodowa', 'Ethernet', 'Wi-Fi', 'Wi-Fi (RJ-4250WB)', 'RS-232', 'Interfejs szeregowy', 'Dual Radio'] },
        { value: 'Wi-Fi', pattern: 'Wi-?Fi|802\\.11', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Łączność bezprzewodowa', 'Ethernet', 'Wi-Fi', 'Wi-Fi (RJ-4250WB)', 'RS-232', 'Interfejs szeregowy', 'Dual Radio'] },
        { value: 'Bluetooth', pattern: 'Bluetooth|\\bBLE\\b', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Łączność bezprzewodowa', 'Ethernet', 'Wi-Fi', 'Wi-Fi (RJ-4250WB)', 'RS-232', 'Interfejs szeregowy', 'Dual Radio'] },
        { value: 'Bluetooth', pattern: '\\S', specs: ['Bluetooth'] },
        { value: 'RS-232', pattern: 'RS-?232|szeregow', specs: ['Interfejsy', 'Interfejsy standardowe', 'Interfejsy opcjonalne', 'Opcje interfejsów', 'Łączność bezprzewodowa', 'Ethernet', 'Wi-Fi', 'Wi-Fi (RJ-4250WB)', 'RS-232', 'Interfejs szeregowy', 'Dual Radio'] },
        { value: 'RS-232', pattern: '\\S', specs: ['RS-232'] },
      ],
    },
    {
      specKey: 'cena',
      label: 'Cena netto',
      derived: [
        { value: 'do 1 500 zł', priceMax: 1500 },
        { value: '1 500 – 4 000 zł', priceMin: 1500, priceMax: 4000 },
        { value: 'powyżej 4 000 zł', priceMin: 4000 },
      ],
    },
  ],
  'terminale-mobilne': [
    {
      specKey: 'producent',
      label: 'Producent',
      derived: [
        { value: 'Zebra', manufacturer: 'zebra' },
        { value: 'Honeywell', manufacturer: 'honeywell' },
        { value: 'Datalogic', manufacturer: 'datalogic' },
        { value: 'Newland', manufacturer: 'newland' },
        { value: 'M3 Mobile', manufacturer: 'm3-mobile' },
        { value: 'CipherLab', manufacturer: 'cipherlab' },
        { value: 'SUNMI', manufacturer: 'sunmi' },
        { value: 'Bluebird', manufacturer: 'bluebird' },
        { value: 'ProGlove', manufacturer: 'proglove' },
      ],
    },
    { specKey: 'system-terminala', label: 'System operacyjny', description: 'Android obsługuje zgodne aplikacje mobilne. cOS wymaga aplikacji zadaniowej dla kolektora; nie uruchamia aplikacji Android.', derived: [{value: 'Android', pattern: 'Android', specs: ['System operacyjny', 'System']}, {value: 'cOS', pattern: 'cOS', specs: ['System operacyjny']}] },
    {
      specKey: 'forma',
      label: 'Obsługa',
      description: 'Jak wprowadza się dane.\n• Z klawiaturą — fizyczne klawisze, praca w rękawicach, szybkie wpisywanie ilości; magazyn, produkcja\n• Dotykowy — duży ekran jak w smartfonie, aplikacje mobilne; handel, kurierzy, serwis',
      derived: [
        { value: 'Z klawiaturą', pattern: '\\S', specs: ['Klawiatura'] },
        { value: 'Dotykowy (bez klawiatury)', notSpecs: ['Klawiatura'] },
      ],
    },
    {
      specKey: 'ekran',
      label: 'Ekran',
      description: 'Przekątna wyświetlacza.\n• 4–4,3" — kompaktowe terminale z klawiaturą\n• 5–5,7" — pośrednie, do jednej ręki\n• 6" i więcej — pełnoekranowe, dużo miejsca na aplikację',
      derived: [
        { value: '4–4,3"', pattern: '^4[,.]?[0-9]?\\s*["″]', specs: ['Wyświetlacz'] },
        { value: '5–5,7"', pattern: '^5[,.]?[0-9]{0,2}\\s*["″]', specs: ['Wyświetlacz'] },
        { value: '6" i więcej', pattern: '^6[,.]?[0-9]{0,2}\\s*["″]', specs: ['Wyświetlacz'] },
      ],
    },
    {
      specKey: 'siec',
      label: 'Sieć komórkowa',
      description: 'Czy terminal łączy się poza zasięgiem firmowego Wi-Fi.\n• Wi-Fi + LTE/5G — karta SIM, praca w terenie i w aucie\n• Tylko Wi-Fi — w budynku, w zasięgu sieci firmowej; tańszy wariant',
      derived: [
        { value: 'Wi-Fi + LTE/5G', pattern: '5G|LTE|\\b4G\\b|WWAN|SIM', specs: ['WWAN', 'SIM', 'Łączność'] },
        { value: 'Tylko Wi-Fi', pattern: 'Wi-Fi|WiFi|802\\.11', specs: ['WLAN', 'Wi-Fi', 'Łączność'], notSpecs: ['WWAN', 'SIM'] },
      ],
    },
    {
      specKey: 'temperatura',
      label: 'Temperatura pracy',
      description: 'Najniższa temperatura, w której terminal pracuje zgodnie ze specyfikacją.\n• Standardowa — do -20°C; hala, magazyn, rampa\n• Mroźnia (do -30°C) — wersja Freezer: podgrzewany ekran i bateria odporna na zimno',
      derived: [
        // Tylko temperatura pracy — „Temperatura przechowywania" schodzi do -30°C
        // w każdym terminalu i wrzucałaby całą listę do wyników mroźni.
        { value: 'Mroźnia (do -30°C)', pattern: '-\\s?30\\s?°C|freezer|cold storage|mroźn', specs: ['Temp. pracy', 'Temperatura pracy'] },
        { value: 'Standardowa', pattern: '-\\s?(1[0-9]|20)\\s?°C', specs: ['Temp. pracy', 'Temperatura pracy'] },
      ],
    },
    {
      specKey: 'wifi',
      label: 'Wi-Fi',
      description: 'Generacja sieci bezprzewodowej. Model dostępny w kilku konfiguracjach pojawia się przy każdej, którą da się u nas zamówić.\n• Wi-Fi 6/6E lub 7 — nowe wdrożenia, gęste magazyny, mniejsze opóźnienia\n• Wi-Fi 5 (ac) — wystarcza do skanowania i prostych aplikacji',
      derived: [
        { value: 'Wi-Fi 6/6E lub 7', pattern: 'Wi-?Fi ?6|Wi-?Fi ?7|802\\.11 ?ax|802\\.11 ?be', specs: ['WLAN', 'Wi-Fi', 'Łączność'] },
        { value: 'Wi-Fi 5 (ac)', pattern: '802\\.11 ?a/b/g/n/ac(?!/ax)|802\\.11ac|Wi-?Fi ?5', specs: ['WLAN', 'Wi-Fi', 'Łączność'] },
      ],
    },
    {
      specKey: 'skaner',
      label: 'Skaner',
      description: 'Zasięg czytnika kodów.\n• Standardowy — do ok. 1 m; sklep, kompletacja z półki\n• Dalekiego zasięgu — do 12–30 m; regały wysokiego składowania, place. Zwykle jako wariant',
      derived: [
        { value: 'Standardowy', pattern: '\\S', specs: ['Skaner'] },
        { value: 'Daleki zasięg (wariant)', pattern: 'SE58|SE55|AC670|XLR|Extended|Advanced|dalek|FlexRange|\\bER\\b|\\bLR\\b|DE2172|SE4850|SE5500|SE5800|Smart Focus|[1-3][0-9](,[0-9])? ?m\\b', specs: ['Skaner', 'Zasięg skanera'] },
      ],
    },
    {
      specKey: 'upadki',
      label: 'Odporność na upadki',
      description: 'Z jakiej wysokości terminal wytrzymuje upadek na beton wg testów producenta.\n• do 1,5 m — z ręki\n• 1,8 m — z ręki na stojąco, wózek\n• 2,4 m i więcej — z rampy, wózka widłowego; ciężki magazyn i produkcja',
      derived: [
        { value: 'do 1,5 m', pattern: '(^|[^0-9,.])1[,.][0-5][0-9]? ?m', specs: ['Odporność', 'Odporność na upadki', 'Upadki'] },
        { value: '1,8 m', pattern: '1[,.]8 ?m', specs: ['Odporność', 'Odporność na upadki', 'Upadki'] },
        { value: '2,4 m i więcej', pattern: '(^|[^0-9,.])[23]([,.][0-9]{1,2})? ?m\\b', specs: ['Odporność', 'Odporność na upadki', 'Upadki'] },
      ],
    },
    {
      specKey: 'szczelnosc',
      label: 'Szczelność (IP)',
      description: 'Odporność obudowy na pył i wodę.\n• IP64–IP65 — pył i bryzgi; magazyn, sklep\n• IP67 — chwilowe zanurzenie; chłodnie, deszcz\n• IP68 — dłuższe zanurzenie, mycie; produkcja spożywcza, teren',
      derived: [
        { value: 'IP64–IP65', pattern: 'IP6[45]', specs: ['Odporność', 'Klasa ochrony', 'Klasa szczelności'] },
        { value: 'IP67', pattern: 'IP67', specs: ['Odporność', 'Klasa ochrony', 'Klasa szczelności'] },
        { value: 'IP68', pattern: 'IP68', specs: ['Odporność', 'Klasa ochrony', 'Klasa szczelności'] },
      ],
    },
    {
      specKey: 'cena',
      label: 'Cena netto',
      derived: [
        { value: 'do 3 000 zł', priceMax: 3000 },
        { value: '3 000 – 6 000 zł', priceMin: 3000, priceMax: 6000 },
        { value: 'powyżej 6 000 zł', priceMin: 6000 },
      ],
    },
  ],
  'akcesoria-do-terminali': [
    {
      specKey: 'producent',
      label: 'Producent',
      derived: [
        { value: 'Zebra', manufacturer: 'zebra' },
        { value: 'Honeywell', manufacturer: 'honeywell' },
        { value: 'Datalogic', manufacturer: 'datalogic' },
        { value: 'Newland', manufacturer: 'newland' },
        { value: 'M3 Mobile', manufacturer: 'm3-mobile' },
        { value: 'Bluebird', manufacturer: 'bluebird' },
      ],
    },
    {
      specKey: 'rodzaj',
      label: 'Rodzaj akcesorium',
      description: 'Najczęstsze wybory.\n• Stacja dokująca — ładuje terminal, 1 lub więcej gniazd\n• Ładowarka akumulatorów — ładuje same baterie\n• Akumulator — zapasowy lub rozszerzony\n• Etui, boot, kabura — ochrona i noszenie',
      derived: [
        { value: 'Stacja dokująca', namePattern: 'stacja|dock|cradle' },
        { value: 'Ładowarka akumulatorów', namePattern: 'ładowark|charger' },
        { value: 'Akumulator', namePattern: '^(?!.*(ładowark|charger)).*(akumulator|bateria|battery)' },
        { value: 'Uchwyt pistoletowy', namePattern: 'pistolet|pistol|trigger|gun grip' },
        { value: 'Uchwyt samochodowy, wózkowy', namePattern: 'samochodow|wózkow|wozkow|vehicle|forklift|na wózek' },
        { value: 'Etui, boot, kabura', namePattern: 'etui|boot|obudow|nakładk|futerał|kabur|holster|osłon' },
        { value: 'Pasek, smycz, rysik', namePattern: 'pasek|smycz|strap|lanyard|rysik' },
        { value: 'Folia, szkło na ekran', namePattern: 'folia|szkło|protector' },
        { value: 'Zasilacz, kabel', namePattern: 'zasilacz|kabel|cable|przewód|\\bpsu\\b|adapter' },
        { value: 'Pakiet serwisowy', namePattern: 'speed care|serwis|gwarancj|onecare' },
      ],
    },
    {
      specKey: 'model',
      label: 'Do terminala',
      description: 'Rodzina terminali, do której pasuje akcesorium. Wykaz konkretnych wariantów jest w specyfikacji akcesorium.',
      derived: [
        { value: 'Zebra TC22 / TC27 (TC21, TC26)', pattern: 'TC2[1267]\\b', specs: ['Kompatybilność'] },
        { value: 'Zebra TC22 / TC27 (TC21, TC26)', namePattern: 'TC2[1267]\\b' },
        { value: 'Zebra TC52 / TC57', pattern: 'TC5[27]', specs: ['Kompatybilność'] },
        { value: 'Zebra TC52 / TC57', namePattern: 'TC5[27]' },
        { value: 'Zebra TC53 / TC58', pattern: 'TC5[38]', specs: ['Kompatybilność'] },
        { value: 'Zebra TC53 / TC58', namePattern: 'TC5[38]' },
        { value: 'Zebra TC73 / TC78', pattern: 'TC7[38]', specs: ['Kompatybilność'] },
        { value: 'Zebra TC73 / TC78', namePattern: 'TC7[38]' },
        { value: 'Zebra TC501 / TC701', pattern: 'TC[57]01', specs: ['Kompatybilność'] },
        { value: 'Zebra TC501 / TC701', namePattern: 'TC[57]01' },
        { value: 'Zebra MC2200 / MC2700', pattern: 'MC2[27]00', specs: ['Kompatybilność'] },
        { value: 'Zebra MC2200 / MC2700', namePattern: 'MC2[27]00' },
        { value: 'Zebra MC3300x / MC3400 / MC3450', pattern: 'MC3[34]', specs: ['Kompatybilność'] },
        { value: 'Zebra MC3300x / MC3400 / MC3450', namePattern: 'MC3[34]' },
        { value: 'Zebra MC9300 / MC9400 / MC9450', pattern: 'MC9[34]', specs: ['Kompatybilność'] },
        { value: 'Zebra MC9300 / MC9400 / MC9450', namePattern: 'MC9[34]' },
        { value: 'Zebra EM45', pattern: 'EM45', specs: ['Kompatybilność'] },
        { value: 'Zebra EM45', namePattern: 'EM45' },
        { value: 'Zebra HC20 / HC25 / HC50 / HC55', pattern: 'HC[25][05]', specs: ['Kompatybilność'] },
        { value: 'Zebra HC20 / HC25 / HC50 / HC55', namePattern: 'HC[25][05]' },
        { value: 'Datalogic Memor 12/17', pattern: 'Memor 12|Memor 17', specs: ['Kompatybilność'] },
        { value: 'Datalogic Memor 12/17', namePattern: 'Memor 12|Memor 17' },
        { value: 'Datalogic Memor 30/35', pattern: 'Memor 30|Memor 35', specs: ['Kompatybilność'] },
        { value: 'Datalogic Memor 30/35', namePattern: 'Memor 30|Memor 35' },
        { value: 'Datalogic Skorpio X5', pattern: 'Skorpio X5', specs: ['Kompatybilność'] },
        { value: 'Datalogic Skorpio X5', namePattern: 'Skorpio X5' },
        { value: 'Newland N7 Cachalot', pattern: '\\bN7\\b', specs: ['Kompatybilność'] },
        { value: 'Newland N7 Cachalot', namePattern: '\\bN7\\b' },
        { value: 'Newland MT93 Megattera', pattern: 'MT93', specs: ['Kompatybilność'] },
        { value: 'Newland MT93 Megattera', namePattern: 'MT93' },
        { value: 'Newland MT95 Kambur', pattern: 'MT95|Kambur', specs: ['Kompatybilność'] },
        { value: 'Newland MT95 Kambur', namePattern: 'MT95|Kambur' },
        { value: 'M3 SL20 / SL20+', pattern: 'SL20(?!K)', specs: ['Kompatybilność'] },
        { value: 'M3 SL20 / SL20+', namePattern: 'SL20(?!K)' },
        { value: 'M3 SL20K', pattern: 'SL20K', specs: ['Kompatybilność'] },
        { value: 'M3 SL20K', namePattern: 'SL20K' },
        { value: 'M3 US20 / US30', pattern: 'US20|US30', specs: ['Kompatybilność'] },
        { value: 'M3 US20 / US30', namePattern: 'US20|US30' },
        { value: 'M3 SM30', pattern: 'SM30', specs: ['Kompatybilność'] },
        { value: 'M3 SM30', namePattern: 'SM30' },
        { value: 'M3 UL20 / UL30', pattern: 'UL20|UL30', specs: ['Kompatybilność'] },
        { value: 'M3 UL20 / UL30', namePattern: 'UL20|UL30' },
        { value: 'Bluebird S10', pattern: 'Bluebird S10(?! RFID)', specs: ['Kompatybilność'] },
        { value: 'Bluebird S10 RFID', pattern: 'Bluebird S10 RFID', specs: ['Kompatybilność'] },
        { value: 'Bluebird S20', pattern: 'Bluebird S20', specs: ['Kompatybilność'] },
        { value: 'Bluebird S50 / S70', pattern: 'Bluebird S[57]0', specs: ['Kompatybilność'] },
        { value: 'Bluebird EF551 / EF551R', pattern: 'Bluebird EF551', specs: ['Kompatybilność'] },
        { value: 'Bluebird EK430', pattern: 'Bluebird EK430', specs: ['Kompatybilność'] },
        { value: 'Bluebird SF650', pattern: 'Bluebird SF650', specs: ['Kompatybilność'] },
      ],
    },
    {
      specKey: 'cena',
      label: 'Cena netto',
      derived: [
        { value: 'do 200 zł', priceMax: 200 },
        { value: '200 – 500 zł', priceMin: 200, priceMax: 500 },
        { value: 'powyżej 500 zł', priceMin: 500 },
      ],
    },
  ],
  'skanery-kodow-kreskowych': [
    {
      specKey: 'producent',
      label: 'Producent',
      derived: [
        { value: 'Zebra', manufacturer: 'zebra' },
        { value: 'Honeywell', manufacturer: 'honeywell' },
        { value: 'Datalogic', manufacturer: 'datalogic' },
        { value: 'Newland', manufacturer: 'newland' },
        { value: 'M3 Mobile', manufacturer: 'm3-mobile' },
        { value: 'ProGlove', manufacturer: 'proglove' },
        { value: 'Socket Mobile', manufacturer: 'socket-mobile' },
      ],
    },
    {
      specKey: 'rodzaj',
      label: 'Rodzaj',
      description: 'Jak skaner pracuje.\n• Przewodowy — kabel USB do kasy lub komputera, bez ładowania\n• Bezprzewodowy — Bluetooth lub radio producenta; zasięg zależy od modelu i otoczenia\n• Ladowy — wbudowany w blat kasy; towar przesuwa się nad oknem\n• Prezentacyjny — stoi na blacie, kod podsuwa się pod okno\n• Pierścieniowy i noszony — na palcu lub na grzbiecie dłoni, obie ręce wolne; magazyn, produkcja',
      derived: [
        { value: 'Przewodowy', subcategory: 'skanery-przewodowe' },
        { value: 'Bezprzewodowy', subcategory: 'skanery-bezprzewodowe' },
        { value: 'Ladowy', subcategory: 'skanery-ladowe' },
        { value: 'Prezentacyjny', subcategory: 'skanery-prezentacyjne' },
        { value: 'Pierścieniowy i noszony', subcategory: 'skanery-pierscieniowe' },
      ],
    },
    {
      specKey: 'kody',
      label: 'Odczyt kodów',
      description: 'Jakie kody skaner czyta.\n• 1D i 2D — kody kreskowe, QR, DataMatrix, także z ekranu telefonu\n• Tylko 1D — klasyczne kody kreskowe; tańszy skaner do kasy i magazynu',
      derived: [
        { value: '1D i 2D', pattern: '2D|area imager', specs: ['Typ skanera', 'Typ', 'Technologia', 'Technologia skanowania', 'Skaner'] },
        { value: 'Tylko 1D', pattern: 'liniowy|linear|CCD', specs: ['Typ skanera', 'Typ', 'Technologia', 'Technologia skanowania', 'Skaner'] },
      ],
    },
    {
      specKey: 'specjalne',
      label: 'Zastosowanie specjalne',
      description: 'Wersje do trudnych zadań. Zwykły skaner czyta z 10–60 cm.\n• Daleki zasięg — do kilkunastu metrów; wysokie regały, place\n• Gęste kody (HD) — bardzo małe kody na elektronice\n• DPM — kody grawerowane lub nabijane na metalu i plastiku',
      derived: [
        { value: 'Daleki zasięg (XR, ER)', pattern: 'dalekiego|extended|\\bXR\\b|\\bER\\b|XLR|long range', specs: ['Typ skanera', 'Typ', 'Technologia', 'Technologia skanowania', 'Skaner'] },
        { value: 'Daleki zasięg (XR, ER)', namePattern: '-xr\\b|-er\\b|xlr|ixr' },
        { value: 'Gęste kody (HD)', pattern: 'High Density|\\bHD\\b', specs: ['Typ skanera', 'Typ', 'Technologia', 'Technologia skanowania', 'Skaner'] },
        { value: 'Gęste kody (HD)', namePattern: '-hd\\b' },
        { value: 'DPM (kody na metalu)', pattern: 'DPM|Direct Part', specs: ['Typ skanera', 'Typ', 'Technologia', 'Technologia skanowania', 'Skaner'] },
        { value: 'DPM (kody na metalu)', namePattern: 'dpe|dpm|nvh' },
      ],
    },
    {
      specKey: 'upadki',
      label: 'Odporność na upadki',
      description: 'Z jakiej wysokości skaner wytrzymuje upadek na beton.\n• do 1,5 m — kasa, biuro\n• 1,8 m — sklep, lekki magazyn\n• 2,4–3 m — wersje przemysłowe: magazyn, produkcja, rampa',
      derived: [
        { value: 'do 1,5 m', pattern: '(^|[^0-9,.])1[,.][0-5][0-9]? ?m', specs: ['Odporność na upadki', 'Upadki'] },
        { value: '1,8 m', pattern: '1[,.]8 ?m', specs: ['Odporność na upadki', 'Upadki'] },
        { value: '2,4–3 m (przemysłowe)', pattern: '(^|[^0-9,.])(2[,.][4-9]|3([,.]0)?) ?m', specs: ['Odporność na upadki', 'Upadki'] },
      ],
    },
    {
      specKey: 'szczelnosc',
      label: 'Szczelność (IP)',
      description: 'Odporność na pył i wodę.\n• IP42–IP52 — sklep, biuro, lekki magazyn\n• IP65 — pył i strugi wody\n• IP67–IP68 — zanurzenie, mycie; chłodnie, produkcja spożywcza',
      derived: [
        { value: 'IP42–IP52', pattern: 'IP4[0-9]|IP5[0-9]', specs: ['Klasa szczelności', 'IP', 'Klasa ochrony'] },
        { value: 'IP65', pattern: 'IP65', specs: ['Klasa szczelności', 'IP', 'Klasa ochrony'] },
        { value: 'IP67–IP68', pattern: 'IP6[78]', specs: ['Klasa szczelności', 'IP', 'Klasa ochrony'] },
      ],
    },
    {
      specKey: 'interfejs',
      label: 'Interfejs',
      description: 'Jak podłączyć skaner. Sprawdź interfejs oraz przewód wymagany przez konkretny PN.\n• RS-232 — kasy fiskalne, wagi, starsze systemy\n• Keyboard Wedge — interfejs klawiaturowy; nie jest tym samym co USB HID\n• Ethernet przemysłowy — sterowniki PLC na linii produkcyjnej',
      derived: [
        { value: 'RS-232', pattern: 'RS-?232', specs: ['Interfejsy', 'Interfejs'] },
        { value: 'Keyboard Wedge', pattern: 'Keyboard Wedge|KBW|emulacja klawiatury', specs: ['Interfejsy', 'Interfejs'] },
        { value: 'Ethernet przemysłowy', pattern: 'Ethernet', specs: ['Interfejsy', 'Interfejs'] },
      ],
    },
    {
      specKey: 'cena',
      label: 'Cena netto',
      derived: [
        { value: 'do 500 zł', priceMax: 500 },
        { value: '500 – 1 500 zł', priceMin: 500, priceMax: 1500 },
        { value: 'powyżej 1 500 zł', priceMin: 1500 },
      ],
    },
  ],
  'tablety-przemyslowe': [
    {
      specKey: 'producent',
      label: 'Producent',
      derived: [
        { value: 'Zebra', manufacturer: 'zebra' },
        { value: 'Honeywell', manufacturer: 'honeywell' },
        { value: 'Brady', manufacturer: 'brady' },
        { value: 'Getac', manufacturer: 'getac' },
        { value: 'Bluebird', manufacturer: 'bluebird' },
      ],
    },
    {
      specKey: 'system',
      label: 'System operacyjny',
      description: 'Na czym działają aplikacje.\n• Android — aplikacje mobilne, skanowanie, MDM; magazyn, sklep, transport\n• Windows — programy desktopowe, ERP i SCADA bez przepisywania; produkcja, serwis',
      derived: [
        { value: 'Android', pattern: 'Android', specs: ['System operacyjny'] },
        { value: 'Android', slugs: ['zebra-et60', 'zebra-et65'] },
        { value: 'Windows', pattern: 'Windows', specs: ['System operacyjny'] },
      ],
    },
    {
      specKey: 'ekran',
      label: 'Przekątna ekranu',
      description: 'Rozmiar wyświetlacza.\n• 8" — do jednej ręki, na wózku, w kieszeni kurtki\n• 10" — czytelne tabele i mapy, w aucie i na stanowisku\n• 11–14" — programy Windows i dokumentacja techniczna, w pojeździe i na stanowisku',
      derived: [
        { value: '8"', pattern: '^8[,.]?[0-9]?\\s*["″]', specs: ['Wyświetlacz'] },
        { value: '8"', pattern: '\\S', specs: ['Wyświetlacz 8″'] },
        { value: '10"', pattern: '^10([,.][0-9]{1,2})?\\s*["″]', specs: ['Wyświetlacz'] },
        { value: '10"', pattern: '\\S', specs: ['Wyświetlacz 10″'] },
        { value: '11–12,5"', pattern: '^1[12][,.]?[0-9]?\\s*["″]', specs: ['Wyświetlacz'] },
        { value: '14"', pattern: '^14[,.]?[0-9]?\\s*["″]', specs: ['Wyświetlacz'] },
      ],
    },
    {
      specKey: 'skaner',
      label: 'Skaner kodów',
      description: 'Czy tablet ma wbudowany czytnik kodów.\n• Wbudowany — skanowanie bez dodatkowego urządzenia; magazyn, inwentaryzacja\n• Bez skanera — tablet do aplikacji i dokumentów; kody przez kamerę lub zewnętrzny skaner',
      derived: [
        { value: 'Wbudowany', pattern: '\\S', specs: ['Skaner', 'Skaner kodów'] },
        // Getac: czytnik kodów jest opcją części PN, więc model trafia do obu grup.
        { value: 'Bez skanera', slugs: ['brady-rt710', 'getac-zx80', 'getac-zx10-g2', 'getac-ux10-g5', 'getac-f110-g7', 'getac-f120', 'getac-g140'] },
        { value: 'Bez skanera', notSpecs: ['Skaner', 'Skaner kodów'] },
      ],
    },
    {
      specKey: 'upadki',
      label: 'Odporność na upadki',
      description: 'Z jakiej wysokości tablet wytrzymuje upadek na beton wg testów producenta.\n• 1,2–1,3 m — z ręki, z blatu\n• 1,5 m i więcej — z wózka, z uchwytu w aucie',
      derived: [
        { value: '1,2–1,3 m', pattern: '(^|[^0-9,.])1[,.][23][0-9]? ?m', specs: ['Odporność na upadki', 'Odporność na upadek', 'Upadki', 'Odporność'] },
        { value: '1,5 m i więcej', pattern: '(^|[^0-9,.])(1[,.][5-9][0-9]?|2([,.][0-9])?) ?m', specs: ['Odporność na upadki', 'Odporność na upadek', 'Upadki', 'Odporność'] },
      ],
    },
    {
      specKey: 'szczelnosc',
      label: 'Szczelność (IP)',
      description: 'Odporność obudowy na pył i wodę.\n• IP65 — pył i strugi wody\n• IP66 — silne strumienie, spłukiwanie wężem\n• IP68 — zanurzenie',
      derived: [
        { value: 'IP65', pattern: 'IP65', specs: ['Klasa ochrony', 'Klasa szczelności', 'Odporność'] },
        { value: 'IP66', pattern: 'IP66', specs: ['Klasa ochrony', 'Klasa szczelności', 'Odporność'] },
        { value: 'IP67', pattern: 'IP67', specs: ['Klasa ochrony', 'Klasa szczelności', 'Odporność'] },
        { value: 'IP68', pattern: 'IP68', specs: ['Klasa ochrony', 'Klasa szczelności', 'Odporność'] },
      ],
    },
    {
      specKey: 'cena',
      label: 'Cena netto',
      derived: [
        { value: 'do 3 000 zł', priceMax: 3000 },
        { value: '3 000 – 8 000 zł', priceMin: 3000, priceMax: 8000 },
        { value: 'powyżej 8 000 zł', priceMin: 8000 },
      ],
    },
  ],
  'materialy-eksploatacyjne': [
    {
      specKey: 'rodzaj',
      label: 'Rodzaj materiału',
      description: 'Co kupujesz.\n• Etykiety termiczne — bez taśmy, nadruk krótkotrwały: wysyłka, cenówki\n• Etykiety termotransferowe — z taśmą, nadruk trwały: produkt, magazyn, folia\n• Taśmy termotransferowe — barwiące do drukarek etykiet\n• Taśmy do drukarek kart — kolorowe i mono do Magicard i Zebra ZC\n• Karty PVC i opaski — blankiety kart i opaski na rękę',
      derived: [
        { value: 'Etykiety termiczne', subcategory: 'etykiety-termiczne' },
        { value: 'Etykiety termotransferowe', subcategory: 'etykiety-termotransferowe' },
        { value: 'Taśmy termotransferowe', subcategory: 'tasmy-termotransferowe' },
        { value: 'Taśmy do drukarek kart', subcategory: 'tasmy-do-drukarek-kart' },
        { value: 'Karty PVC', subcategory: 'karty-pcv' },
        { value: 'Opaski identyfikacyjne', subcategory: 'opaski-identyfikacyjne' },
      ],
    },
    {
      specKey: 'producent',
      label: 'Producent',
      derived: [
        { value: 'Zebra', manufacturer: 'zebra' },
        { value: 'Magicard', manufacturer: 'magicard' },
      ],
    },
    {
      specKey: 'drukarki',
      label: 'Do drukarek',
      description: 'Do jakich urządzeń pasuje materiał. Etykiety i taśmy termotransferowe pasują do drukarek biurkowych i przemysłowych — decyduje szerokość i nawój wariantu.\n• Kart Magicard — Pronto100, 300, 600\n• Kart Zebra ZC — ZC100, ZC300, ZXP\n• Opasek — HC100, ZD510',
      derived: [
        { value: 'Etykiet biurkowych', pattern: 'biurkow|desktop|\\bZD(?!510)|\\bGK|\\bGC|TLP|LP ?28', specs: ['Kompatybilność', 'Kompatybilne drukarki', 'Kompatybilne kategorie drukarek', 'Zalecane drukarki'] },
        { value: 'Etykiet biurkowych', subcategory: 'tasmy-termotransferowe' },
        { value: 'Etykiet biurkowych', subcategory: 'etykiety-termiczne' },
        { value: 'Etykiet biurkowych', subcategory: 'etykiety-termotransferowe' },
        { value: 'Etykiet przemysłowych', pattern: 'przemysłow|industrial|\\bZT|105SL|ZM400', specs: ['Kompatybilność', 'Kompatybilne drukarki', 'Kompatybilne kategorie drukarek', 'Zalecane drukarki'] },
        { value: 'Etykiet przemysłowych', subcategory: 'tasmy-termotransferowe' },
        { value: 'Etykiet przemysłowych', subcategory: 'etykiety-termiczne' },
        { value: 'Etykiet przemysłowych', subcategory: 'etykiety-termotransferowe' },
        { value: 'Kart Magicard', pattern: 'Magicard|Pronto', specs: ['Kompatybilność', 'Kompatybilne drukarki', 'Kompatybilne kategorie drukarek', 'Zalecane drukarki'] },
        { value: 'Kart Zebra ZC', pattern: '\\bZC[13]|ZXP', specs: ['Kompatybilność', 'Kompatybilne drukarki', 'Kompatybilne kategorie drukarek', 'Zalecane drukarki'] },
        { value: 'Opasek (HC100, ZD510)', pattern: 'HC100|ZD510|opas', specs: ['Kompatybilność', 'Kompatybilne drukarki', 'Kompatybilne kategorie drukarek', 'Zalecane drukarki'] },
        { value: 'Opasek (HC100, ZD510)', subcategory: 'opaski-identyfikacyjne' },
      ],
    },
    {
      specKey: 'material',
      label: 'Materiał',
      description: 'Z czego zrobiona jest etykieta, karta lub opaska.\n• Papier — najtańszy, do wnętrz i krótkiego użycia\n• Folia syntetyczna — PET, polipropylen, winyl; odporna na wodę, chemię i ścieranie\n• PVC — blankiety kart i opaski',
      derived: [
        { value: 'Papier', pattern: 'papier|paper', specs: ['Materiał', 'Materiał lica', 'Facestock — szczegóły'] },
        { value: 'Folia syntetyczna', pattern: 'poliester|PET\\b|polipropylen|\\bPP\\b|BOPP|polietylen|\\bPE\\b|winyl(?!u)|vinyl|poliimid|poliolefin|syntetycz|foli', specs: ['Materiał', 'Materiał lica', 'Facestock — szczegóły'] },
        { value: 'PVC', pattern: 'PVC|polichlorek', specs: ['Materiał', 'Materiał lica', 'Facestock — szczegóły'] },
      ],
    },
    {
      specKey: 'klej',
      label: 'Klej',
      description: 'Jak etykieta trzyma się podłoża.\n• Permanentny — na stałe; kartony, produkty, regały\n• Usuwalny — schodzi bez śladu; ceny, promocje, szkło\n• Do niskich temperatur — naklejanie na zmrożone i chłodzone opakowania',
      derived: [
        { value: 'Permanentny', pattern: 'permanent|trwał', specs: ['Klej', 'Klej (szczegóły)', 'Zapięcie'] },
        { value: 'Usuwalny', pattern: 'usuwaln|removable', specs: ['Klej', 'Klej (szczegóły)', 'Zapięcie'] },
        { value: 'Do niskich temperatur', pattern: 'all-?temp|mroż|zamraż|freezer|chłodn|-[0-9]{2} ?°C', specs: ['Klej', 'Klej (szczegóły)', 'Zapięcie'] },
        { value: 'Do niskich temperatur', pattern: '-[1-9][0-9] ?°C', specs: ['Min. temperatura aplikacji'] },
      ],
    },
    {
      specKey: 'zywnosc',
      label: 'Kontakt z żywnością',
      description: 'Czy materiał ma atest do bezpośredniego kontaktu z żywnością (FDA, EC 1935/2004, BfR).',
      derived: [
        { value: 'Z atestem żywnościowym', pattern: '^Tak|FDA|EC ?1935|BfR|EU ?10/2011', specs: ['Atest żywnościowy', 'Atest żywnościowy (UE)', 'Atest żywnościowy (US)', 'Atesty żywnościowe'] },
        { value: 'Bez atestu', pattern: '^Nie', specs: ['Atest żywnościowy', 'Atest żywnościowy (UE)', 'Atest żywnościowy (US)', 'Atesty żywnościowe'] },
        { value: 'Bez atestu', notSpecs: ['Atest żywnościowy', 'Atest żywnościowy (UE)', 'Atest żywnościowy (US)', 'Atesty żywnościowe'], subcategory: 'etykiety-termiczne' },
        { value: 'Bez atestu', notSpecs: ['Atest żywnościowy', 'Atest żywnościowy (UE)', 'Atest żywnościowy (US)', 'Atesty żywnościowe'], subcategory: 'etykiety-termotransferowe' },
      ],
    },
    {
      specKey: 'tasma',
      label: 'Rodzaj taśmy',
      description: 'Dla taśm barwiących.\n• Woskowa — papier, wnętrza, najtańsza\n• Woskowo-żywiczna — papier powlekany i folia, odporność na ścieranie\n• Żywiczna — folie, chemia, zewnątrz, najtrwalsza\n• Do kart: kolorowa (YMCKO) albo monochromatyczna',
      derived: [
        { value: 'Woskowa', subcategory: 'tasmy-termotransferowe-woskowe' },
        { value: 'Woskowo-żywiczna', subcategory: 'tasmy-termotransferowe-woskowo-zywiczne' },
        { value: 'Żywiczna', subcategory: 'tasmy-termotransferowe-zywiczne' },
        { value: 'Do kart: kolorowa (YMCKO)', pattern: 'YMC|kolor|color', specs: ['Typ taśmy'] },
        { value: 'Do kart: monochromatyczna', pattern: 'mono', specs: ['Typ taśmy'] },
      ],
    },
    {
      specKey: 'cena',
      label: 'Cena netto',
      description: 'Etykiety i taśmy z wieloma wariantami nie mają jednej ceny — cena jest na karcie wariantu, dlatego nie trafiają do przedziałów.',
      derived: [
        { value: 'do 200 zł', priceMax: 200 },
        { value: '200 – 500 zł', priceMin: 200, priceMax: 500 },
        { value: 'powyżej 500 zł', priceMin: 500 },
      ],
    },
  ],
  'opaski-identyfikacyjne': [
    {
      specKey: 'przeznaczenie',
      label: 'Przeznaczenie',
      description: 'Dla kogo opaska.\n• Dorośli — 279 mm, standard szpitalny\n• Dzieci — 178 mm, oddziały pediatryczne\n• Niemowlęta — 152 mm, neonatologia',
      derived: [
        { value: 'Dorośli', pattern: 'doro', specs: ['Przeznaczenie'] },
        { value: 'Dzieci', pattern: 'dzie', specs: ['Przeznaczenie'] },
        { value: 'Niemowlęta', pattern: 'niemowl', specs: ['Przeznaczenie'] },
      ],
    },
    {
      specKey: 'ilosc',
      label: 'Ilość w opakowaniu',
      description: 'Liczba opasek w opakowaniu zbiorczym (6 kartridży).',
      derived: [
        { value: '1 200 szt.', pattern: '^1 ?200', specs: ['Łączna ilość'] },
        { value: '1 800 szt.', pattern: '^1 ?800', specs: ['Łączna ilość'] },
        { value: '2 100 szt.', pattern: '^2 ?100', specs: ['Łączna ilość'] },
      ],
    },
    {
      specKey: 'cena',
      label: 'Cena netto',
      derived: [
        { value: 'do 1 200 zł', priceMax: 1200 },
        { value: '1 200 – 1 400 zł', priceMin: 1200, priceMax: 1400 },
        { value: 'powyżej 1 400 zł', priceMin: 1400 },
      ],
    },
  ],
  'karty-pvc': [
    {
      specKey: 'rodzaj',
      label: 'Rodzaj karty',
      description: 'Wszystkie drukuje się tak samo.\n• Zwykła PVC — identyfikator, legitymacja, karta lojalnościowa\n• Unique 125 kHz — numer tylko do odczytu; otwiera drzwi w systemach Roger i Satel\n• MIFARE 1K — pamięć 1 kB z zapisem: dostęp, czas pracy, stołówka na jednej karcie\n• DESFire EV1 / EV3 — szyfrowanie AES, wiele aplikacji; strefy chronione, e-legitymacje, karty miejskie\n• NTAG213 / NTAG216 — czytana telefonem; wizytówka NFC, link do opinii\n• Dualna — dwa chipy: 125 kHz do szlabanu i starszych czytników + 13,56 MHz do drzwi',
      derived: [
        { value: 'Zwykła PVC', notSpecs: ['Chip'] },
        { value: 'Unique 125 kHz', pattern: '^Zbliżeniowa Unique', specs: ['Rodzaj karty'] },
        { value: 'MIFARE 1K', pattern: '^Zbliżeniowa MIFARE Classic 1K', specs: ['Rodzaj karty'] },
        { value: 'DESFire EV1', pattern: '^Zbliżeniowa MIFARE DESFire EV1', specs: ['Rodzaj karty'] },
        { value: 'DESFire EV3', pattern: '^Zbliżeniowa MIFARE DESFire EV3', specs: ['Rodzaj karty'] },
        { value: 'NFC NTAG213 / 216', pattern: 'NTAG21', specs: ['Rodzaj karty'] },
        { value: 'Dualna 125 kHz + 13,56 MHz', pattern: '^Dualna', specs: ['Rodzaj karty'] },
      ],
    },
    {
      specKey: 'numer',
      label: 'Nadrukowany numer',
      description: 'Dotyczy kart zbliżeniowych. Numer na karcie pozwala wpisać ją do systemu dostępu bez czytnika. Dla MIFARE i DESFire nadruk numeru na zamówienie.',
      derived: [
        { value: 'Bez numeru', pattern: '^Brak', specs: ['Numer nadrukowany'] },
        { value: 'Z numerem', pattern: '^Tak', specs: ['Numer nadrukowany'] },
      ],
    },
    {
      specKey: 'drukarka',
      label: 'Do drukarki',
      derived: [
        { value: 'Magicard', pattern: 'Magicard', specs: ['Kompatybilność'] },
        { value: 'Zebra ZC', pattern: 'ZC100|ZC300', specs: ['Kompatybilność'] },
      ],
    },
    {
      specKey: 'grubosc',
      label: 'Grubość karty',
      description: 'Standard to 0,76 mm.\n• 0,76–0,8 mm — zwykła karta: identyfikator, legitymacja, karta dostępu; karty dualne z dwiema antenami mają 0,8 mm\n• 0,25 mm (10 mil) — cienka, samoprzylepna lub do naklejania na karty zbliżeniowe',
      derived: [
        { value: '0,76–0,8 mm — standard', pattern: '0,76|0,80|30 mil', specs: ['Grubość'] },
        { value: '0,25 mm — cienka', pattern: '0,25|10 mil', specs: ['Grubość'] },
      ],
    },
    // bez filtra ceny: karty Zebra są wyceniane za opakowanie, karty Unique za sztukę — jedna skala nie ma sensu
  ],
  'karty-plastikowe': [
    {
      specKey: 'kolor',
      label: 'Kolor',
      description: 'Białe pod druk kolorowy i zdjęcia. Srebrne i czarne pod taśmy jednokolorowe: logo, nazwisko, numer.',
      derived: [
        { value: 'Białe', pattern: '^(Biał|Śnieżnobiał|Ciepła biel)', specs: ['Kolor'] },
        { value: 'Srebrne', pattern: '^Srebrn', specs: ['Kolor'] },
        { value: 'Czarne', pattern: '^Czarn', specs: ['Kolor'] },
      ],
    },
    {
      specKey: 'typ',
      label: 'Typ karty',
      description: '• Zwykła — do identyfikatorów i kart klubowych\n• HoloPatch — złote pole, na którym znak HoloKote z Magicard wygląda jak hologram\n• Samoprzylepna — do naklejenia na grubą kartę dostępu, której drukarka nie przyjmie',
      derived: [
        { value: 'Zwykła', pattern: 'do zadruku$|kolorowa$', specs: ['Rodzaj karty'] },
        { value: 'HoloPatch (Magicard)', pattern: 'HoloPatch', specs: ['Rodzaj karty'] },
        { value: 'Samoprzylepna', pattern: 'samoprzylepna', specs: ['Rodzaj karty'] },
      ],
    },
    {
      specKey: 'grubosc',
      label: 'Grubość karty',
      description: 'Standard to 0,76 mm, tyle co karta bankowa. 0,40 mm to karta samoprzylepna, 0,25 mm cienka do kart tymczasowych.',
      derived: [
        { value: '0,76 mm — standard', pattern: '0,76|30 mil', specs: ['Grubość'] },
        { value: '0,40 mm — samoprzylepna', pattern: '0,40', specs: ['Grubość'] },
        { value: '0,25 mm — cienka', pattern: '0,25|10 mil', specs: ['Grubość'] },
      ],
    },
    {
      specKey: 'opakowanie',
      label: 'Opakowanie',
      derived: [
        { value: '100 szt.', pattern: '^100', specs: ['Opakowanie'] },
        { value: '500 szt.', pattern: '^500', specs: ['Opakowanie'] },
      ],
    },
  ],
  'karty-zblizeniowe': [
    {
      specKey: 'rodzaj',
      label: 'Rodzaj chipu',
      description: '• Unique 125 kHz — numer tylko do odczytu; otwiera drzwi w systemach Roger i Satel\n• MIFARE 1K — pamięć 1 kB z zapisem: dostęp, czas pracy, stołówka na jednej karcie\n• DESFire EV1 / EV3 — szyfrowanie AES, wiele aplikacji; strefy chronione, e-legitymacje, karty miejskie\n• NTAG213 / NTAG216 — czytana telefonem; wizytówka NFC, link do opinii\n• Dualna — dwa chipy: 125 kHz do szlabanu i starszych czytników + 13,56 MHz do drzwi',
      derived: [
        { value: 'Unique 125 kHz', pattern: '^Zbliżeniowa Unique', specs: ['Rodzaj karty'] },
        { value: 'MIFARE 1K', pattern: '^Zbliżeniowa MIFARE Classic 1K', specs: ['Rodzaj karty'] },
        { value: 'DESFire EV1', pattern: '^Zbliżeniowa MIFARE DESFire EV1', specs: ['Rodzaj karty'] },
        { value: 'DESFire EV3', pattern: '^Zbliżeniowa MIFARE DESFire EV3', specs: ['Rodzaj karty'] },
        { value: 'NFC NTAG213 / 216', pattern: 'NTAG21', specs: ['Rodzaj karty'] },
        { value: 'Dualna 125 kHz + 13,56 MHz', pattern: '^Dualna', specs: ['Rodzaj karty'] },
      ],
    },
    {
      specKey: 'czestotliwosc',
      label: 'Częstotliwość',
      description: '125 kHz to starsze systemy: Roger, Satel, domofony, szlabany. 13,56 MHz to MIFARE, DESFire i NFC w telefonie.',
      derived: [
        { value: '125 kHz', pattern: '125 kHz', specs: ['Częstotliwość'] },
        { value: '13,56 MHz', pattern: '13,56 MHz', specs: ['Częstotliwość'] },
      ],
    },
    {
      specKey: 'numer',
      label: 'Nadrukowany numer',
      description: 'Numer na karcie pozwala wpisać ją do systemu dostępu bez czytnika. Dla MIFARE i DESFire nadruk numeru na zamówienie.',
      derived: [
        { value: 'Bez numeru', pattern: '^Brak', specs: ['Numer nadrukowany'] },
        { value: 'Z numerem', pattern: '^Tak', specs: ['Numer nadrukowany'] },
      ],
    },
    {
      specKey: 'drukarka',
      label: 'Do drukarki',
      derived: [
        { value: 'Magicard', pattern: 'Magicard', specs: ['Kompatybilność'] },
        { value: 'Zebra ZC', pattern: 'ZC100|ZC300', specs: ['Kompatybilność'] },
      ],
    },
  ],
  'dyspensery-etykiet': [
    {
      specKey: 'etykiety',
      label: 'Rodzaj etykiet',
      description: 'Czym różnią się wersje RS i U.\n• Papierowe i foliowe — czujnik odbiciowy; wystarczy, gdy wszystkie etykiety mają nadruk na nieprzezroczystym podłożu\n• Także przezroczyste i czarne — czujnik fotoelektryczny; etykieta przezroczysta nie odbija światła, więc czujnik odbiciowy jej nie rozpoznaje i urządzenie podaje dwie sztuki naraz albo się zatrzymuje',
      derived: [
        { value: 'Papierowe i foliowe (RS)', pattern: 'odbiciowy', specs: ['Obsługiwane etykiety'] },
        { value: 'Także przezroczyste i czarne (U)', pattern: 'fotoelektryczny', specs: ['Obsługiwane etykiety'] },
      ],
    },
    {
      specKey: 'szerokosc',
      label: 'Szerokość etykiet',
      description: 'Najszersza etykieta, którą dyspenser odklei.\n• do 115 mm — etykiety produktowe i apteczne\n• do 165 mm — etykiety wysyłkowe i opakowania zbiorcze',
      derived: [
        { value: 'do 115 mm', pattern: '115 ?mm', specs: ['Maks. szerokość etykiet'] },
        { value: 'do 165 mm', pattern: '165 ?mm', specs: ['Maks. szerokość etykiet'] },
      ],
    },
    {
      specKey: 'dlugosc',
      label: 'Min. długość etykiety',
      description: 'Najkrótsza etykieta, którą urządzenie rozpozna. Przy bardzo małych etykietach ma to znaczenie rozstrzygające.',
      derived: [
        { value: 'od 6 mm', pattern: '^6 ?mm', specs: ['Min. długość etykiety'] },
        { value: 'od 20 mm', pattern: '^20 ?mm', specs: ['Min. długość etykiety'] },
      ],
    },
    {
      specKey: 'cena',
      label: 'Cena netto',
      derived: [
        { value: 'do 2 400 zł', priceMax: 2400 },
        { value: 'powyżej 2 400 zł', priceMin: 2400 },
      ],
    },
  ],
  'nawijarki-do-etykiet': [
    {
      specKey: 'typ',
      label: 'Typ urządzenia',
      description: 'Funkcja, jaką urządzenie pełni wobec nośnika.\n• Nawijarka — zwija zadrukowany materiał za drukarką\n• Nawijarka i odwijak — jedno urządzenie zwija albo podaje rolkę i samoczynnie rozpoznaje kierunek; wymagane przy drukarkach atramentowych, które cofają nośnik',
      derived: [
        { value: 'Nawijarka', pattern: 'Nawijarka zewnętrzna', specs: ['Typ'] },
        { value: 'Nawijarka i odwijak', pattern: 'Nawijarka i odwijak', specs: ['Typ'] },
      ],
    },
    {
      specKey: 'szerokosc',
      label: 'Szerokość nośnika',
      description: 'Najszerszy materiał, jaki urządzenie przyjmie — wraz z podkładem, a nie sama etykieta.\n• do 110 i 115 mm — drukarki biurkowe\n• do 155 mm — drukarki przemysłowe czterocalowe\n• do 170 i 255 mm — drukarki sześciocalowe i nośnik szeroki',
      derived: [
        { value: 'do 110 mm', pattern: '110 ?mm', specs: ['Maks. szerokość nośnika'] },
        { value: 'do 115 mm', pattern: '115 ?mm', specs: ['Maks. szerokość nośnika'] },
        { value: 'do 155 mm', pattern: '155 ?mm', specs: ['Maks. szerokość nośnika'] },
        { value: 'do 170 mm', pattern: '170 ?mm', specs: ['Maks. szerokość nośnika'] },
        { value: 'do 255 mm', pattern: '255 ?mm', specs: ['Maks. szerokość nośnika'] },
      ],
    },
    {
      specKey: 'gilza',
      label: 'Uchwyt gilzy',
      description: 'Element, na którym powstaje nawój.\n• Trzon stały — jedna średnica gilzy, większa sztywność i dopuszczalna masa rolki\n• Rozsuwany (ACH) — każda gilza w zakresie 25–101 mm bez wymiany osprzętu\n• Szybkozłączny Quick-Chuck — zakładanie i zdejmowanie jednym ruchem dźwigni',
      derived: [
        { value: 'Trzon stały 76 mm', pattern: 'Trzon 76 ?mm|Trzon 10', specs: ['Uchwyt gilzy'] },
        { value: 'Rozsuwany 25–101 mm (ACH)', pattern: '25–101', specs: ['Uchwyt gilzy'] },
        { value: 'Szybkozłączny (Quick-Chuck)', pattern: 'Quick-Chuck', specs: ['Uchwyt gilzy'] },
      ],
    },
    {
      specKey: 'predkosc',
      label: 'Prędkość nawijania',
      description: 'Wartość odniesiona do początku rolki z gilzą 76 mm.\n• do 50 cm/s — drukarki biurkowe\n• do 80 i 90 cm/s — dobierana automatycznie do pracy drukarki\n• do 125 cm/s — nadąża za najszybszymi drukarkami termotransferowymi',
      derived: [
        { value: 'do 50 cm/s', pattern: '50 ?cm/s', specs: ['Prędkość nawijania'] },
        { value: 'do 80 cm/s', pattern: '80 ?cm/s', specs: ['Prędkość nawijania'] },
        { value: 'do 90 cm/s', pattern: '90 ?cm/s', specs: ['Prędkość nawijania'] },
        { value: 'do 125 cm/s', pattern: '125 ?cm/s', specs: ['Prędkość nawijania'] },
      ],
    },
    {
      specKey: 'cena',
      label: 'Cena netto',
      derived: [
        { value: 'do 2 000 zł', priceMax: 2000 },
        { value: '2 000 – 3 000 zł', priceMin: 2000, priceMax: 3000 },
        { value: 'powyżej 3 000 zł', priceMin: 3000 },
      ],
    },
  ],
  'tasmy-do-drukarek-kart': [
    {
      specKey: 'producent',
      label: 'Producent',
      derived: [
        { value: 'Magicard', manufacturer: 'magicard' },
        { value: 'Zebra', manufacturer: 'zebra' },
      ],
    },
    {
      specKey: 'drukarka',
      label: 'Do drukarki',
      description: 'Taśma pasuje tylko do swojej serii drukarek — sprawdź model przed zakupem.',
      derived: [
        { value: 'Magicard Pronto100', pattern: 'Pronto', specs: ['Kompatybilność'] },
        { value: 'Magicard 300', pattern: 'Magicard 300', specs: ['Kompatybilność'] },
        { value: 'Magicard 600', pattern: 'Magicard 600', specs: ['Kompatybilność'] },
        { value: 'Magicard Prima 8', pattern: 'Prima 8', specs: ['Kompatybilność'] },
        { value: 'Zebra ZC100 / ZC300', pattern: 'ZC100', specs: ['Kompatybilność'] },
        { value: 'Zebra ZC350', pattern: 'ZC350', specs: ['Kompatybilność'] },
      ],
    },
    {
      specKey: 'rodzaj',
      label: 'Rodzaj taśmy',
      description: 'Co taśma drukuje.\n• Kolorowa YMCKO — pełny kolor ze zdjęciem, jedna strona\n• Kolorowa dwustronna YMCKOK — przód w kolorze, tył czarny\n• Czarna — tekst i kody, najtańszy druk\n• Kolor jednolity — biała, niebieska, złota itp. na kartach kolorowych\n• Scratch-off — zdrapka na kody i PIN-y',
      derived: [
        { value: 'Kolorowa (YMCKO)', pattern: 'YMCKO\\b', specs: ['Typ taśmy'] },
        { value: 'Kolorowa dwustronna (YMCKOK)', pattern: 'YMCKOK', specs: ['Typ taśmy'] },
        { value: 'Czarna', pattern: 'czarn|\\bKO\\b|\\(K\\)', specs: ['Typ taśmy'] },
        { value: 'Czarna', pattern: '^Czarn', specs: ['Kolor'] },
        { value: 'Kolor jednolity (biała, niebieska, złota…)', pattern: 'biał|\\(W\\)', specs: ['Typ taśmy'] },
        { value: 'Kolor jednolity (biała, niebieska, złota…)', pattern: '^(Bia|Nieb|Ziel|Czerw|Sreb|Zło)', specs: ['Kolor'] },
        { value: 'Scratch-off (zdrapka)', pattern: 'scratch', specs: ['Typ taśmy'] },
      ],
    },
    {
      specKey: 'wydajnosc',
      label: 'Wydajność',
      description: 'Ile kart wydrukuje jedna taśma. Kolorowe mają mniejszą wydajność niż jednokolorowe.',
      derived: [
        { value: 'do 300 wydruków', pattern: '^(100|200|250|300)\\b', specs: ['Wydajność'] },
        { value: '400 – 800 wydruków', pattern: '^(400|600|700|800)\\b', specs: ['Wydajność'] },
        { value: '1 000 wydruków i więcej', pattern: '^(1 ?[05]00|2 ?000)\\b', specs: ['Wydajność'] },
      ],
    },
    {
      specKey: 'cena',
      label: 'Cena netto',
      derived: [
        { value: 'do 150 zł', priceMax: 150 },
        { value: '150 – 250 zł', priceMin: 150, priceMax: 250 },
        { value: 'powyżej 250 zł', priceMin: 250 },
      ],
    },
  ],
}

// Strona marki: te same filtry co kategoria (grupa Producent chowa się sama, bo ma jedną wartość)
for (const brand of ['terminale-mobilne-zebra', 'terminale-newland', 'terminale-honeywell', 'terminale-datalogic', 'terminale-m3-mobile', 'terminale-bluebird']) {
  categoryFilters[brand] = categoryFilters['terminale-mobilne']
}
// Skanery: strony marek i podkategorie dostają ten sam zestaw — grupy z jedną wartością (Producent, Rodzaj) chowają się same
for (const page of ['skanery-kodow-kreskowych-zebra', 'skanery-honeywell', 'skanery-datalogic', 'skanery-kodow-kreskowych-newland', 'skanery-proglove', 'skanery-kodow-kreskowych/przewodowe', 'skanery-kodow-kreskowych/bezprzewodowe', 'skanery-kodow-kreskowych/prezentacyjne', 'skanery-kodow-kreskowych/ladowe', 'skanery-kodow-kreskowych/pierscieniowe']) {
  categoryFilters[page] = categoryFilters['skanery-kodow-kreskowych']
}
// Skanery ladowe: Szczelność i Interfejs mają dane tylko dla części z 9 modeli, więc tu ich nie ma
categoryFilters['skanery-kodow-kreskowych/ladowe'] = [
  categoryFilters['skanery-kodow-kreskowych'].find(d => d.specKey === 'producent')!,
  {
    specKey: 'konstrukcja',
    label: 'Konstrukcja',
    description: 'Liczba okien odczytu.\n\n• Jedno okno — poziome okno w blacie; mały blat\n\n• Dwa okna — okno poziome i pionowe w wieży; kasy o dużym ruchu',
    derived: [
      { value: 'Jedno okno (poziomy)', slugs: ['datalogic-magellan-3510hsi', 'datalogic-magellan-3550hsi', 'datalogic-magellan-3700hsi', 'zebra-sp7201-h', 'zebra-sp7208-h'] },
      { value: 'Dwa okna (dwuokienkowy)', slugs: ['datalogic-magellan-9550i', 'datalogic-magellan-9600i', 'datalogic-magellan-9900i', 'zebra-mp7200'] },
    ],
  },
  {
    specKey: 'cena',
    label: 'Cena netto',
    derived: [
      { value: 'do 2 000 zł', priceMax: 2000 },
      { value: '2 000 – 4 000 zł', priceMin: 2000, priceMax: 4000 },
      { value: 'powyżej 4 000 zł', priceMin: 4000 },
    ],
  },
]
categoryFilters['skanery-datalogic'] = [
  ...categoryFilters['skanery-kodow-kreskowych'].map(def => {
    if (def.specKey === 'szczelnosc') return {
      ...def,
      description: 'Klasa ochrony obudowy. IP30 i IP40 nie zapewniają ochrony przed wodą. Wyższą odporność na pył i wodę porównaj według klasy konkretnego modelu.',
      derived: [
        { value: 'IP30', pattern: 'IP30', specs: ['Klasa ochrony'] },
        ...(def.derived ?? []).map(rule => rule.value === 'IP42–IP52' ? { ...rule, value: 'IP40–IP52' } : rule),
      ],
    }
    if (def.specKey === 'interfejs') return {
      ...def,
      derived: [{ value: 'USB', pattern: 'USB', specs: ['Interfejsy', 'Interfejs'] }, ...(def.derived ?? [])],
    }
    if (def.specKey === 'upadki') return {
      ...def,
      description: 'Wysokość testu upadku na beton. Liczba upadków i warunki zależą od modelu; szczegóły sprawdzisz na karcie produktu.',
      derived: [...(def.derived ?? []), { value: '2 m', pattern: '(^|[^0-9,.])2([,.]0)? ?m', specs: ['Odporność na upadki'] }],
    }
    return def
  }),
  {
    specKey: 'radio-skanera',
    label: 'Łączność bezprzewodowa',
    description: 'Bluetooth i STAR wymagają zgodnego urządzenia lub bazy. Bazy Bluetooth i STAR nie są zamienne do transmisji danych.',
    derived: [
      { value: 'Bluetooth', pattern: 'Bluetooth', specs: ['Łączność'] },
      { value: 'STAR 433 MHz', pattern: 'STAR', specs: ['Łączność'] },
    ],
  },
]
for (const page of ['tablety-przemyslowe-zebra', 'tablety-honeywell', 'tablety-brady', 'tablety-getac', 'tablety-bluebird']) {
  categoryFilters[page] = categoryFilters['tablety-przemyslowe']
}
// Drukarki etykiet — strony marek: ten sam zestaw co kategoria (Producent chowa się sam)
for (const page of ['drukarki-etykiet-zebra', 'drukarki-etykiet-honeywell', 'drukarki-etykiet-tsc', 'drukarki-etykiet-citizen', 'drukarki-etykiet-brother', 'drukarki-etykiet-bixolon']) {
  categoryFilters[page] = categoryFilters['drukarki-etykiet']
}
categoryFilters['drukarki-kart-magicard'] = categoryFilters['drukarki-kart']

/**
 * Akcesoria do drukarek etykiet: części (głowice, wałki, gilotyny, odklejaki), interfejsy,
 * zasilanie i osłony — ponad 200 pozycji pięciu producentów (Zebra, Honeywell, Brother, TSC,
 * Citizen). Rodzaj bierze się z nazwy produktu (tylko część kart ma wiersz „Typ”), seria
 * drukarki z wiersza „Kompatybilność” i z nazwy. Lista serii jest długa, ale po zaznaczeniu
 * producenta zostają w niej tylko jego drukarki (cross-filtrowanie w gridzie).
 */
categoryFilters['akcesoria-do-drukarek-etykiet'] = [
  {
    specKey: 'producent',
    label: 'Producent',
    derived: [
      { value: 'Zebra', manufacturer: 'zebra' },
      { value: 'Honeywell', manufacturer: 'honeywell' },
      { value: 'Brother', manufacturer: 'brother' },
      { value: 'TSC', manufacturer: 'tsc' },
      { value: 'Citizen', manufacturer: 'citizen' },
    ],
  },
  {
    specKey: 'rodzaj',
    label: 'Rodzaj akcesorium',
    description: 'Co chcesz wymienić albo dołożyć.\n• Głowica — gdy na wydruku są białe pasy, których nie usuwa czyszczenie\n• Wałek dociskowy — wymienia się razem z głowicą albo gdy etykiety przesuwają się krzywo\n• Gilotyna — drukarka sama odcina etykietę\n• Odklejak — drukarka oddziela etykietę od podkładu i podaje ją gotową do naklejenia\n• Nawijak — zbiera podkład albo gotowe etykiety na rolkę\n• Interfejsy — Ethernet, Wi-Fi, RS-232, LPT do drukarek, które nie mają ich w standardzie',
    derived: [
      // „Wałek dociskowy (dla głowicy 203 dpi)” to wałek, nie głowica
      { value: 'Głowice drukujące', namePattern: '^(?!wałek).*głowic' },
      { value: 'Wałki dociskowe', namePattern: 'wałek|wałki|platen' },
      { value: 'Gilotyny (obcinaki)', namePattern: 'gilotyn|obcina|cutter' },
      { value: 'Odklejaki (dyspensery)', namePattern: 'odklejak|dyspenser' },
      // „Składany rdzeń do nawijaka” to część nawijaka, nie nawijak — ląduje w „Prowadnice, rdzenie”
      { value: 'Nawijaki', namePattern: '^(?!składany rdzeń).*nawijak' },
      { value: 'Interfejsy sieciowe i komunikacyjne', namePattern: 'wi-?fi|ethernet|rs-?232|\\bLPT\\b|równoległ|parallel|interfejs' },
      { value: 'Moduły RFID, konwertery, klawiatury', namePattern: 'rfid|konwerter|klawiatur' },
      { value: 'Baterie, ładowarki i zasilacze', namePattern: 'bateri|ładowark|zasilacz' },
      { value: 'Etui i osłony', namePattern: 'etui|futerał|egzoszkielet' },
      { value: 'Uchwyty, klipsy i stacje dokujące', namePattern: 'klips|uchwyt|stacj[aęi] (dokując|samochodow)' },
      { value: 'Kable i adaptery', namePattern: 'kabel|adapter(?! rdzeni)' },
      { value: 'Prowadnice, rdzenie i pozostałe części', namePattern: 'prowadnic|rdze|mega door|kalibracyjn' },
    ],
  },
  {
    specKey: 'drukarka',
    label: 'Do drukarki',
    description: 'Część musi pasować do serii drukarki — głowica z ZD421 nie wejdzie do ZD621. Model drukarki jest na naklejce pod spodem albo na pasku z tyłu obudowy.',
    derived: [
      { value: 'Zebra ZD220 / ZD230', pattern: 'ZD2[23]0', specs: ['Kompatybilność'] },
      { value: 'Zebra ZD220 / ZD230', namePattern: 'ZD2[23]0' },
      { value: 'Zebra ZD411 / ZD421', pattern: 'ZD41\\d|ZD42\\d', specs: ['Kompatybilność'] },
      { value: 'Zebra ZD411 / ZD421', namePattern: 'ZD41\\d|ZD42\\d' },
      { value: 'Zebra ZD621', pattern: 'ZD62\\d', specs: ['Kompatybilność'] },
      { value: 'Zebra ZD621', namePattern: 'ZD62\\d' },
      { value: 'Zebra ZT111 / ZT231', pattern: 'ZT111|ZT2[23]\\d', specs: ['Kompatybilność'] },
      { value: 'Zebra ZT111 / ZT231', namePattern: 'ZT111|ZT2[23]\\d' },
      { value: 'Zebra ZT411 / ZT421', pattern: 'ZT41\\d|ZT42\\d', specs: ['Kompatybilność'] },
      { value: 'Zebra ZT411 / ZT421', namePattern: 'ZT41\\d|ZT42\\d' },
      { value: 'Zebra ZT510', pattern: 'ZT510', specs: ['Kompatybilność'] },
      { value: 'Zebra ZT510', namePattern: 'ZT510' },
      { value: 'Zebra ZT610 / ZT620', pattern: 'ZT61\\d|ZT62\\d', specs: ['Kompatybilność'] },
      { value: 'Zebra ZT610 / ZT620', namePattern: 'ZT61\\d|ZT62\\d' },
      { value: 'Zebra ZQ210 / ZQ220 Plus', pattern: 'ZQ2[12]\\d', specs: ['Kompatybilność'] },
      { value: 'Zebra ZQ210 / ZQ220 Plus', namePattern: 'ZQ2[12]\\d' },
      { value: 'Zebra ZQ310 / ZQ320 Plus', pattern: 'ZQ3[12]\\d', specs: ['Kompatybilność'] },
      { value: 'Zebra ZQ310 / ZQ320 Plus', namePattern: 'ZQ3[12]\\d' },
      { value: 'Zebra ZQ511 / ZQ521', pattern: 'ZQ5[12]\\d', specs: ['Kompatybilność'] },
      { value: 'Zebra ZQ511 / ZQ521', namePattern: 'ZQ5[12]\\d' },
      { value: 'Zebra ZQ610 / ZQ620 / ZQ630 Plus', pattern: 'ZQ6[123]\\d', specs: ['Kompatybilność'] },
      { value: 'Zebra ZQ610 / ZQ620 / ZQ630 Plus', namePattern: 'ZQ6[123]\\d' },
      { value: 'Zebra ZD510-HC', pattern: 'ZD510', specs: ['Kompatybilność'] },
      { value: 'Zebra ZD510-HC', namePattern: 'ZD510' },
      { value: 'Honeywell PC42E-T', pattern: 'PC42E', specs: ['Kompatybilność'] },
      { value: 'Honeywell PC42E-T', namePattern: 'PC42E' },
      { value: 'Honeywell PC45d / PC45t', pattern: 'PC45', specs: ['Kompatybilność'] },
      { value: 'Honeywell PC45d / PC45t', namePattern: 'PC45' },
      { value: 'Honeywell PM45 / PM45C', pattern: 'PM45', specs: ['Kompatybilność'] },
      { value: 'Honeywell PM45 / PM45C', namePattern: 'PM45' },
      { value: 'Honeywell PM65', pattern: 'PM65', specs: ['Kompatybilność'] },
      { value: 'Honeywell PM65', namePattern: 'PM65' },
      { value: 'Honeywell PX940', pattern: 'PX940', specs: ['Kompatybilność'] },
      { value: 'Honeywell PX940', namePattern: 'PX940' },
      { value: 'Honeywell RP2 / RP2f', pattern: '\\bRP2', specs: ['Kompatybilność'] },
      { value: 'Honeywell RP2 / RP2f', namePattern: '\\bRP2' },
      { value: 'Honeywell RP4 / RP4f', pattern: '\\bRP4', specs: ['Kompatybilność'] },
      { value: 'Honeywell RP4 / RP4f', namePattern: '\\bRP4' },
      // Brother: TD-4D (TD-4410D…TD-4550DNWB) i TD-4T (TD-4410T…TD-4750TNWBR) różnią się końcówką modelu
      { value: 'Brother TD-4D', pattern: 'TD-4D\\b|TD-4\\d{3}D(N|NWB)?\\b', specs: ['Kompatybilność'] },
      { value: 'Brother TD-4D', namePattern: 'TD-4D\\b' },
      { value: 'Brother TD-4T', pattern: 'TD-4T\\b|TD-4\\d{3}(T|TN|TNWBR?|DNWBT)\\b', specs: ['Kompatybilność'] },
      { value: 'Brother TD-4T', namePattern: 'TD-4T\\b' },
      { value: 'Brother TJ-4020TN / 4021TN / 4120TN / 4121TN', pattern: 'TJ-4\\d{3}', specs: ['Kompatybilność'] },
      { value: 'Brother TJ-4020TN / 4021TN / 4120TN / 4121TN', namePattern: 'TJ-4\\d{3}|\\bdo TJ\\b' },
      { value: 'Brother RJ-4230B / RJ-4250WB', pattern: 'RJ-4[23]\\d0', specs: ['Kompatybilność'] },
      { value: 'Brother RJ-4230B / RJ-4250WB', namePattern: 'RJ-4[23]\\d0' },
      { value: 'TSC TTP-286MT / TTP-384MT', pattern: 'TTP-(286|384)MT', specs: ['Kompatybilność'] },
      { value: 'TSC TTP-286MT / TTP-384MT', namePattern: 'TTP-(286|384)MT' },
      { value: 'TSC ML241P / ML341P', pattern: 'ML[23]4[01]P', specs: ['Kompatybilność'] },
      { value: 'TSC ML241P / ML341P', namePattern: 'ML[23]4[01]P' },
      { value: 'TSC MB241T / MB341T', pattern: 'MB[23]4[01]', specs: ['Kompatybilność'] },
      { value: 'TSC MB241T / MB341T', namePattern: 'MB[23]4[01]' },
      { value: 'TSC MH241T / MH261T / MH341T / MH641T', pattern: 'MH[236][46][01]', specs: ['Kompatybilność'] },
      { value: 'TSC MH241T / MH261T / MH341T / MH641T', namePattern: 'MH[236][46][01]' },
      { value: 'Citizen CL-S521 / CL-S621 / CL-S631', pattern: 'CL-S[56][23]1', specs: ['Kompatybilność'] },
      { value: 'Citizen CL-S521 / CL-S621 / CL-S631', namePattern: 'CL-S[56][23]1' },
      { value: 'Citizen CL-S400DT', pattern: 'CL-S400', specs: ['Kompatybilność'] },
      { value: 'Citizen CL-S400DT', namePattern: 'CL-S400' },
      { value: 'Citizen CL-S700', pattern: 'CL-S70\\d', specs: ['Kompatybilność'] },
      { value: 'Citizen CL-S700', namePattern: 'CL-S70\\d' },
      { value: 'Citizen CL-E720 / CL-E730', pattern: 'CL-E7\\d{2}', specs: ['Kompatybilność'] },
      { value: 'Citizen CL-E720 / CL-E730', namePattern: 'CL-E7\\d{2}' },
    ],
  },
  {
    specKey: 'rozdzielczosc',
    label: 'Rozdzielczość',
    description: 'Dotyczy głowic i wałków. Głowica i wałek muszą mieć tę samą rozdzielczość co drukarka: 203 dpi do zwykłych etykiet, 300 dpi do drobnego tekstu i małych kodów, 600 dpi do mikroetykiet.',
    derived: [
      { value: '203 dpi', pattern: '(^|[^0-9])203 ?dpi', specs: ['Rozdzielczość'] },
      { value: '203 dpi', namePattern: '(^|[^0-9])203 ?dpi' },
      { value: '300 dpi', pattern: '(^|[^0-9])300 ?dpi', specs: ['Rozdzielczość'] },
      { value: '300 dpi', namePattern: '(^|[^0-9])300 ?dpi' },
      { value: '406 dpi', pattern: '(^|[^0-9])406 ?dpi', specs: ['Rozdzielczość'] },
      { value: '406 dpi', namePattern: '(^|[^0-9])406 ?dpi' },
      { value: '600 dpi', pattern: '(^|[^0-9])600 ?dpi', specs: ['Rozdzielczość'] },
      { value: '600 dpi', namePattern: '(^|[^0-9])600 ?dpi' },
    ],
  },
  {
    specKey: 'cena',
    label: 'Cena netto',
    derived: [
      { value: 'do 300 zł', priceMax: 300 },
      { value: '300 – 1 000 zł', priceMin: 300, priceMax: 1000 },
      { value: '1 000 – 2 500 zł', priceMin: 1000, priceMax: 2500 },
      { value: 'powyżej 2 500 zł', priceMin: 2500 },
    ],
  },
]

/**
 * Etykiety do kolorowych drukarek (Epson ColorWorks): rodzaj i materiał z wiersza
 * „Rodzaj”/„Materiał” w specyfikacji, szerokość z nazwy, cena z priceFrom.
 */
categoryFilters['etykiety-do-kolorowych-drukarek'] = [
  {
    specKey: 'rodzaj',
    label: 'Rodzaj',
    derived: [
      { value: 'Etykiety wykrojone', pattern: 'wykrojone', specs: ['Rodzaj'] },
      { value: 'Etykiety ciągłe', pattern: 'Etykiety ciągłe', specs: ['Rodzaj'] },
      { value: 'Papier do biletów', pattern: 'biletów', specs: ['Rodzaj'] },
    ],
  },
  {
    specKey: 'material',
    label: 'Powierzchnia',
    derived: [
      { value: 'Matowa (Premium Matte)', pattern: 'matow', specs: ['Materiał'] },
      { value: 'Błyszcząca (High Gloss)', pattern: 'błyszcz', specs: ['Materiał'] },
    ],
  },
  {
    specKey: 'szerokosc',
    label: 'Szerokość rolki',
    derived: [
      { value: '51 mm', pattern: '^51 mm', specs: ['Szerokość', 'Szerokość rolki'] },
      { value: '76 mm', pattern: '^76 mm', specs: ['Szerokość', 'Szerokość rolki'] },
      { value: '80 mm', pattern: '^80 mm', specs: ['Szerokość', 'Szerokość rolki'] },
      { value: '102 mm', pattern: '^102 mm', specs: ['Szerokość', 'Szerokość rolki'] },
      { value: '105 mm', pattern: '^105 mm', specs: ['Szerokość', 'Szerokość rolki'] },
    ],
  },
  {
    specKey: 'cena',
    label: 'Cena netto',
    derived: [
      { value: 'do 40 zł', priceMax: 40 },
      { value: '40 – 70 zł', priceMin: 40, priceMax: 70 },
      { value: 'powyżej 70 zł', priceMin: 70 },
    ],
  },
]

/**
 * Filtr ceny dla katalogu (/katalog), gdy nie wybrano kategorii. Specyfikacje
 * różnią się między kategoriami — drukarka nie ma przekątnej ekranu, a skaner
 * rozdzielczości druku — więc wspólne zostają producent (budowany z listy
 * producentów na stronie) i cena. Po wybraniu kategorii wchodzi jej zestaw.
 */
export const filtrCenaKatalogu: FilterDefinition = {
  specKey: 'katalog-cena',
  label: 'Cena netto',
  derived: [
    { value: 'do 500 zł', priceMax: 500 },
    { value: '500 – 2 000 zł', priceMin: 500, priceMax: 2000 },
    { value: '2 000 – 5 000 zł', priceMin: 2000, priceMax: 5000 },
    { value: '5 000 – 10 000 zł', priceMin: 5000, priceMax: 10000 },
    { value: 'powyżej 10 000 zł', priceMin: 10000 },
  ],
}

// BIXOLON label printers use the same filter controls and taxonomy as other brands.
for (const page of ['drukarki-etykiet', 'termiczne-drukarki-etykiet', 'termotransferowe-drukarki-etykiet', 'biurkowe-drukarki-etykiet', 'przemyslowe-drukarki-etykiet', 'mobilne-drukarki-etykiet', 'akcesoria-do-drukarek-etykiet']) {
  const producer = categoryFilters[page]?.find(filter => filter.specKey === 'producent')
  if (producer?.derived && !producer.derived.some(option => option.manufacturer === 'bixolon')) {
    producer.derived.push({ value: 'BIXOLON', manufacturer: 'bixolon' })
  }
  for (const filter of categoryFilters[page] ?? []) {
    if (!filter.derived || !['rodzaj', 'klasa'].includes(filter.specKey)) continue
    const desktop = filter.derived.find(option => option.value === 'Biurkowa')
    const industrial = filter.derived.find(option => option.value === 'Przemysłowa')
    const mobile = filter.derived.find(option => option.value.startsWith('Mobilna'))
    if (mobile) filter.derived.push({ value: mobile.value, slugs: ['bixolon-xm7-20', 'bixolon-xm7-30', 'bixolon-xm7-40', 'bixolon-spp-l310', 'bixolon-spp-l410', 'bixolon-spp-l3000'] })
    if (desktop) filter.derived.push({ value: desktop.value, slugs: ['bixolon-xd3-40d', 'bixolon-xd3-40t', 'bixolon-xd5-40d', 'bixolon-xd5-40t', 'bixolon-xd5-40iid', 'bixolon-xd5-40iit', 'bixolon-slp-dx220', 'bixolon-slp-tx220', 'bixolon-slp-dl410', 'bixolon-xl5-40ct', 'bixolon-xq-840ii', 'bixolon-xd5-40tr'] })
    if (industrial) filter.derived.push({ value: industrial.value, slugs: ['bixolon-xt3-40', 'bixolon-xt5-40', 'bixolon-xt5-40nr'] })
  }
}

// RFID is an additional choice within the existing BIXOLON printer-type filter.
categoryFilters['drukarki-etykiet-bixolon'] = categoryFilters['drukarki-etykiet-bixolon'].map(filter =>
  filter.specKey === 'rodzaj' ? {
    ...filter,
    description: `${filter.description}\n• RFID — drukowanie etykiet i kodowanie znaczników radiowych`,
    derived: [...(filter.derived ?? []), { value: 'RFID', subcategory: 'drukarki-rfid' }],
  } : filter
)

// Mobile receipt printers: options follow published model specifications.
categoryFilters['mobilne-drukarki-paragonow'] = [
  {
    "specKey": "Szerokość papieru",
    "label": "Szerokość papieru",
    "derived": [
      { "value": "58 mm", "pattern": "^58 mm$", "specs": ["Szerokość papieru"] },
      { "value": "80 mm", "pattern": "^80 mm$", "specs": ["Szerokość papieru"] },
      { "value": "112 mm", "pattern": "^112 mm$", "specs": ["Szerokość papieru"] }
    ]
  },
  {
    "specKey": "laczność-paragony",
    "label": "Łączność",
    "derived": [
      {
        "value": "USB",
        "pattern": "USB",
        "specs": [
          "Interfejsy"
        ]
      },
      {
        "value": "Bluetooth",
        "pattern": "Bluetooth",
        "specs": [
          "Interfejsy"
        ]
      },
      {
        "value": "Wi-Fi",
        "pattern": "Wi-Fi",
        "specs": [
          "Interfejsy"
        ]
      }
    ]
  },
  {
    "specKey": "material-paragony",
    "label": "Materiał",
    "derived": [
      {
        "value": "Papier termiczny",
        "slugs": [
          "bixolon-spp-c200",
          "bixolon-spp-c300",
          "bixolon-spp-r210",
          "bixolon-spp-r200iiiplus",
          "bixolon-spp-r310",
          "bixolon-spp-r410"
        ]
      },
      {
        "value": "Dostępny wariant linerless",
        "slugs": [
          "bixolon-spp-r210",
          "bixolon-spp-r200iiiplus"
        ]
      }
    ]
  }
]

categoryFilters['drukarki-pos'] = [
  {
    "specKey": "papier-pos",
    "label": "Szerokość papieru",
    "derived": [
      {
        "value": "58 mm",
        "slugs": [
          "bixolon-srp-q200"
        ]
      },
      {
        "value": "80 mm",
        "slugs": [
          "bixolon-srp-330iii",
          "bixolon-srp-350v",
          "bixolon-srp-350plusv",
          "bixolon-srp-380",
          "bixolon-srp-380plus",
          "bixolon-srp-q300",
          "bixolon-srp-f310ii",
          "bixolon-srp-s300ii"
        ]
      }
    ]
  },
  {
    "specKey": "lacznosc-pos",
    "label": "Łączność",
    "derived": [
      {
        "value": "USB",
        "pattern": "USB",
        "specs": [
          "Interfejsy",
          "Łączność bezprzewodowa"
        ]
      },
      {
        "value": "Ethernet",
        "pattern": "Ethernet",
        "specs": [
          "Interfejsy",
          "Łączność bezprzewodowa"
        ]
      },
      {
        "value": "RS-232",
        "pattern": "RS.?232",
        "specs": [
          "Interfejsy",
          "Łączność bezprzewodowa"
        ]
      },
      {
        "value": "Wi-Fi",
        "pattern": "Wi-Fi",
        "specs": [
          "Interfejsy",
          "Łączność bezprzewodowa"
        ]
      },
      {
        "value": "Bluetooth",
        "pattern": "Bluetooth",
        "specs": [
          "Interfejsy",
          "Łączność bezprzewodowa"
        ]
      },
      {
        "value": "PoweredUSB",
        "pattern": "PoweredUSB",
        "specs": [
          "Interfejsy",
          "Łączność bezprzewodowa"
        ]
      }
    ]
  },
  {
    "specKey": "material-pos",
    "label": "Materiał",
    "derived": [
      {
        "value": "Papier termiczny do potwierdzeń",
        "slugs": [
          "bixolon-srp-330iii",
          "bixolon-srp-350v",
          "bixolon-srp-350plusv",
          "bixolon-srp-380",
          "bixolon-srp-380plus",
          "bixolon-srp-q200",
          "bixolon-srp-q300",
          "bixolon-srp-f310ii",
          "bixolon-srp-s300ii"
        ]
      },
      {
        "value": "Dostępne wersje linerless",
        "slugs": [
          "bixolon-srp-s300ii"
        ]
      }
    ]
  }
]

// POS manufacturers and technology use the existing sidebar controls.
categoryFilters['drukarki-pos'] = [
  { specKey: 'producent', label: 'Producent', derived: [{ value: 'Epson', manufacturer: 'epson' }, { value: 'BIXOLON', manufacturer: 'bixolon' }, { value: 'Citizen', manufacturer: 'citizen' }, { value: 'SUNMI', manufacturer: 'sunmi' }] },
  { specKey: 'technologia-pos', label: 'Technologia druku', derived: [
    { value: 'Termiczna', pattern: '^Termiczny', specs: ['Metoda druku'] },
    { value: 'Igłowa', pattern: '^Igłowy$', specs: ['Metoda druku'] },
    { value: 'Hybrydowa', pattern: '^Hybrydowy', specs: ['Metoda druku'] },
    { value: 'Atramentowa', pattern: '^Atramentowy$', specs: ['Metoda druku'] }
  ] },
  { specKey: 'papier-pos', label: 'Papier', derived: [
    { value: '58 mm', pattern: '58', specs: ['Szerokość papieru'] },
    // Citizen podaje zakres (57,5–79,5 lub 59–80 mm), a instrukcje — papier 58 i 80 mm.
    { value: '58 mm', slugs: ['citizen-ct-e301', 'citizen-ct-e351', 'citizen-ct-e601', 'citizen-ct-e651', 'citizen-ct-e651l'] },
    { value: '76 mm', pattern: '76', specs: ['Szerokość papieru'] },
    { value: '80 mm', pattern: '80', specs: ['Szerokość papieru'] },
    { value: '80 mm', slugs: ['citizen-ct-e301', 'citizen-ct-e601', 'citizen-ct-e651l', 'citizen-ct-s601iir', 'citizen-ct-s4500'] },
    { value: '112 mm', pattern: '112', specs: ['Szerokość papieru'] },
    { value: 'Formularze i arkusze', pattern: 'Formularze|arkusz', specs: ['Szerokość papieru'] }
  ] },
  // Citizen: Ethernet, RS-232 i Wi-Fi z karty interfejsu liczą się jak opcje w „Interfejsy” u Epson i BIXOLON.
  ...categoryFilters['drukarki-pos'].filter(f => f.specKey === 'lacznosc-pos').map(f => ({ ...f, derived: f.derived?.map(rule => ({ ...rule, specs: [...(rule.specs ?? []), 'Karty interfejsu'] })) })),
  { specKey: 'material-pos', label: 'Materiał', derived: [
    { value: 'Papier termiczny', pattern: '^Termiczny|^Hybrydowy', specs: ['Metoda druku'] },
    { value: 'Dostępne wersje linerless', slugs: ['bixolon-srp-s300ii','epson-tm-l100','epson-tm-l90lf','citizen-ct-s601iir'] },
    { value: 'Etykiety', slugs: ['epson-tm-l90','epson-tm-l100','epson-tm-l90lf','bixolon-srp-s300ii','sunmi-nt220','sunmi-nt320','citizen-ct-e651l','citizen-ct-s4500','citizen-ct-s601iir'] },
    { value: 'Papier zwykły / formularze', pattern: '^Igłowy|^Atramentowy|^Hybrydowy', specs: ['Metoda druku'] }
  ] }
]
categoryFilters['mobilne-drukarki-paragonow'] = [
  { specKey: 'producent', label: 'Producent', derived: [{ value: 'Epson', manufacturer: 'epson' }, { value: 'BIXOLON', manufacturer: 'bixolon' }] },
  ...categoryFilters['mobilne-drukarki-paragonow'].map(f => f.specKey === 'material-paragony' ? { ...f, derived: f.derived?.map(rule => rule.value === 'Papier termiczny' ? { ...rule, slugs: [...(rule.slugs ?? []), 'epson-tm-p20ii', 'epson-tm-p80ii'] } : rule) } : f)
]

// Komputery POS: filtrują tylko cechy, które różnią oferowane modele (drukarka, ekran, pamięć, usługi Google i cena).
categoryFilters['komputery-pos'] = [
  { specKey: 'drukarka-komputer-pos', label: 'Drukarka wbudowana', derived: [
    { value: 'Z drukarką 80 mm', pattern: '80 mm', specs: ['Drukarka'] },
    { value: 'Z drukarką 58 mm', pattern: '^Termiczna 58 mm', specs: ['Drukarka'] },
    { value: 'Bez drukarki', notSpecs: ['Drukarka'] }
  ] },
  { specKey: 'przekatna-komputer-pos', label: 'Przekątna ekranu', derived: [
    { value: '10,1"', pattern: '^IPS 10,1"', specs: ['Ekran'] },
    { value: '15,6"', pattern: '^(IPS )?15,6"', specs: ['Ekran'] }
  ] },
  { specKey: 'ekran-klienta-komputer-pos', label: 'Ekran klienta', derived: [
    { value: 'W zestawie', pattern: '^(W zestawie|Wbudowany)', specs: ['Ekran klienta'] },
    { value: 'Do dokupienia', pattern: '.', specs: ['Ekran klienta (opcja)'] }
  ] },
  { specKey: 'pamiec-komputer-pos', label: 'Pamięć RAM', derived: [
    { value: '3 GB', pattern: '^3 GB RAM', specs: ['Pamięć'] },
    { value: '4 GB', pattern: '^4 GB RAM', specs: ['Pamięć'] },
    { value: '6 GB', pattern: '^6 GB RAM', specs: ['Pamięć'] }
  ] },
  { specKey: 'uslugi-google-komputer-pos', label: 'Usługi Google', derived: [
    { value: 'Z usługami Google (GMS)', pattern: 'GMS', specs: ['System operacyjny'] },
    { value: 'SUNMI OS bez usług Google', pattern: 'bez usług Google', specs: ['System operacyjny'] }
  ] },
  { specKey: 'cena-komputer-pos', label: 'Cena netto', derived: [
    { value: 'do 3 500 zł', priceMax: 3500 },
    { value: '3 500 – 6 000 zł', priceMin: 3500, priceMax: 6000 },
    { value: 'powyżej 6 000 zł', priceMin: 6000 }
  ] }
]
categoryFilters['akcesoria-do-komputerow-pos'] = [
  { specKey: 'rodzaj-akcesorium-pos', label: 'Rodzaj akcesorium', derived: [
    { value: 'Ekran klienta', namePattern: '^Ekran klienta' },
    { value: 'Szuflada kasowa', namePattern: '^Szuflada kasowa' },
    { value: 'Zasilacz', namePattern: '^Zasilacz' },
    { value: 'Prowadnica papieru', namePattern: '^Prowadnica' }
  ] },
  { specKey: 'zgodnosc-komputer-pos', label: 'Zgodny komputer', derived: [
    { value: 'SUNMI T3', pattern: 'SUNMI T3(,|$)', specs: ['Zgodność'] },
    { value: 'SUNMI T3 80 mm', pattern: 'SUNMI T3 80 mm', specs: ['Zgodność'] },
    { value: 'SUNMI T3 PRO', pattern: 'SUNMI T3 PRO(,|$)', specs: ['Zgodność'] },
    { value: 'SUNMI T3 PRO MAX', pattern: 'SUNMI T3 PRO MAX', specs: ['Zgodność'] },
    { value: 'SUNMI D3 PRO', pattern: 'SUNMI D3 PRO', specs: ['Zgodność'] }
  ] }
]

// Ekrany KDS: jedna karta SUNMI FLEX 3 KDS z trzema rozmiarami jako wariantami, więc przekątna czyta wiersz „Ekran”.
categoryFilters['ekrany-kds'] = [
  { specKey: 'przekatna-ekran-kds', label: 'Przekątna ekranu', derived: [
    { value: '15,6"', pattern: '15,6"', specs: ['Ekran'] },
    { value: '18,5"', pattern: '18,5"', specs: ['Ekran'] },
    { value: '21,5" (22")', pattern: '21,5"', specs: ['Ekran'] }
  ] },
  { specKey: 'cena-ekran-kds', label: 'Cena netto', derived: [
    { value: 'do 2 500 zł', priceMax: 2500 },
    { value: 'powyżej 2 500 zł', priceMin: 2500 }
  ] }
]
categoryFilters['akcesoria-do-ekranow-kds'] = [
  { specKey: 'rodzaj-akcesorium-kds', label: 'Rodzaj akcesorium', derived: [
    { value: 'Moduł PoE', namePattern: '^Moduł PoE' },
    { value: 'Ramię VESA', namePattern: '^Przegubowe ramię' },
    { value: 'Stojak', namePattern: '^Stojak' }
  ] }
]

// Kioski: karta SUNMI FLEX 3 z czterema rozmiarami jako wariantami i karta Zebra KC401, więc przekątna
// i pamięć czytają wiersze specyfikacji.
categoryFilters['kioski-samoobslugowe'] = [
  { specKey: 'producent', label: 'Producent', derived: [
    { value: 'SUNMI', manufacturer: 'sunmi' },
    { value: 'Zebra', manufacturer: 'zebra' }
  ] },
  { specKey: 'przekatna-kiosk', label: 'Przekątna ekranu', derived: [
    { value: '10,1"', pattern: '^10,1"', specs: ['Ekran'] },
    { value: '15,6"', pattern: '15,6"', specs: ['Ekran'] },
    { value: '18,5"', pattern: '18,5"', specs: ['Ekran'] },
    { value: '21,5" (22")', pattern: '21,5"', specs: ['Ekran'] },
    { value: '27"', pattern: '27"', specs: ['Ekran'] }
  ] },
  { specKey: 'pamiec-kiosk', label: 'Pamięć', derived: [
    { value: '4 GB RAM / 64 GB', pattern: '4 GB RAM / 64 GB', specs: ['Pamięć'] },
    { value: '6 GB RAM / 64 GB', pattern: '6 GB RAM / 64 GB', specs: ['Pamięć'] },
    { value: '6 GB RAM / 128 GB', pattern: '6 GB RAM / 128 GB', specs: ['Pamięć'] }
  ] },
  { specKey: 'cena-kiosk', label: 'Cena netto', derived: [
    { value: 'do 2 500 zł', priceMax: 2500 },
    { value: 'powyżej 2 500 zł', priceMin: 2500 }
  ] }
]
// Akcesoria do kiosków: rodzaj z nazwy, zgodny kiosk i rozmiar z wiersza „Zgodność” („SUNMI FLEX 3 18,5", 22" i 27"”).
// Uchwyt PrintKiosk (zd621r) ma zgodność w wierszu „Kompatybilność”, przewód 450042 w „Zgodność”.
categoryFilters['akcesoria-do-kioskow'] = [
  { specKey: 'rodzaj-akcesorium-kiosk', label: 'Rodzaj akcesorium', derived: [
    { value: 'Stojak podłogowy', namePattern: '^Stojak podłogowy' },
    { value: 'Stojak na ladę', namePattern: '^Stojak (na ladę|biurkowy)' },
    { value: 'Moduł', namePattern: '^(Moduł(?! skanera)|Lampka|Skaner)' },
    { value: 'Moduł skanera', namePattern: '^Moduł skanera' },
    { value: 'Kamera', namePattern: '^Kamera' },
    { value: 'Uchwyt POS', namePattern: '^Uchwyt POS' },
    { value: 'Uchwyt', namePattern: '^Uchwyt (?!POS)' },
    { value: 'Zasilanie', namePattern: '^(Zasilacz|Przewód sieciowy)' }
  ] },
  { specKey: 'zgodny-kiosk', label: 'Zgodny kiosk', derived: [
    { value: 'SUNMI FLEX 3', pattern: 'SUNMI FLEX 3(?! KDS)', specs: ['Zgodność'] },
    { value: 'Zebra KC401', pattern: 'KC401', specs: ['Zgodność', 'Kompatybilność'] }
  ] },
  { specKey: 'zgodny-rozmiar-kiosk', label: 'Zgodny rozmiar', derived: [
    { value: '18,5"', pattern: 'FLEX 3 (?!KDS)[^;]*18,5"', specs: ['Zgodność'] },
    { value: '22"', pattern: 'FLEX 3 (?!KDS)[^;]*22"', specs: ['Zgodność'] },
    { value: '27"', pattern: 'FLEX 3 (?!KDS)[^;]*27"', specs: ['Zgodność'] }
  ] }
]

// Laptopy przemysłowe Getac: łączność komórkowa zależy od PN, więc model z wersjami z 4G/5G i bez trafia do obu grup.
categoryFilters['laptopy-przemyslowe'] = [
  { specKey: 'klasa-laptop', label: 'Klasa odporności', derived: [
    { value: 'Fully rugged (IP66)', pattern: 'IP66', specs: ['Klasa ochrony'] },
    { value: 'Rugged (IP53)', pattern: 'IP53', specs: ['Klasa ochrony'] }
  ] },
  { specKey: 'ekran-laptop', label: 'Przekątna ekranu', derived: [
    { value: '12,2–13,3"', pattern: '^1[23][,.][0-9]\\s*["″]', specs: ['Wyświetlacz'] },
    { value: '14"', pattern: '^14\\s*["″]', specs: ['Wyświetlacz'] },
    { value: '15,6"', pattern: '^15[,.]6\\s*["″]', specs: ['Wyświetlacz'] }
  ] },
  { specKey: 'procesor-laptop', label: 'Procesor', derived: [
    { value: 'Intel', pattern: '^Intel', specs: ['Procesor'] },
    { value: 'AMD', pattern: '^AMD', specs: ['Procesor'] }
  ] },
  { specKey: 'wwan-laptop', label: 'Łączność komórkowa', derived: [
    { value: 'Tak (4G LTE lub 5G)', slugs: ['getac-b360', 'getac-s410-g5', 'getac-s510', 'getac-b360x', 'getac-b360x-pro'] },
    { value: 'Nie (Wi-Fi)', slugs: ['getac-b360', 'getac-v120', 'getac-s410-g5', 'getac-s510', 'getac-s510ad', 'getac-b360x', 'getac-b360x-pro'] }
  ] },
  { specKey: 'cena-laptop', label: 'Cena netto', derived: [
    { value: 'do 12 000 zł', priceMax: 12000 },
    { value: 'powyżej 12 000 zł', priceMin: 12000 }
  ] }
]

categoryFilters['terminale-cipherlab'] = [
  { specKey: 'System operacyjny', label: 'System operacyjny', description: 'Android uruchamia zgodne aplikacje mobilne. cOS to system do aplikacji zadaniowych tworzonych np. w Forge Application Generator; nie uruchamia aplikacji Android.', derived: [{value: 'Android', pattern: 'Android', specs: ['System operacyjny']}, {value: 'cOS', pattern: 'cOS', specs: ['System operacyjny']}] },
  { specKey: 'forma-cipherlab', label: 'Rodzaj terminala', derived: [{value: 'Dotykowy', slugs: ['cipherlab-rs20','cipherlab-rs36','cipherlab-rs38','cipherlab-rs38h']}, {value: 'Z klawiaturą', slugs: ['cipherlab-rk26','cipherlab-rk96','cipherlab-rk96-cold-storage','cipherlab-8000','cipherlab-8200','cipherlab-8300','cipherlab-8600']}] },
  { specKey: 'zastosowanie-cipherlab', label: 'Zastosowanie', derived: [{value: 'Ochrona zdrowia', slugs: ['cipherlab-rs38h']}, {value: 'Mroźnia', slugs: ['cipherlab-rk96-cold-storage']}] },
  { specKey: 'modem-cipherlab', label: 'Łączność komórkowa', derived: [{value: 'Dostępne wersje LTE', slugs: ['cipherlab-rs36','cipherlab-rk26']}, {value: 'Dostępne wersje 5G', slugs: ['cipherlab-rs38','cipherlab-rs38h']}] }
]

// Concrete parameter help; clone definitions to preserve shared category arrays.
const catalogFilterHelp: Record<string, string> = {
  "Rozdzielczość": "Gęstość nadruku w punktach na cal.\n• 180–203 dpi — standardowy tekst i większe kody.\n• 300–305 dpi — drobniejszy tekst i mniejsze kody.\n• 600–609 dpi — bardzo drobne elementy. Nie zwiększa zasięgu RFID.",
  "Szerokość druku": "Maksymalna szerokość nadruku, a nie szerokość rolki.\n• Projekt musi mieścić się w obszarze zadruku.\n• Sprawdź osobno dopuszczalną szerokość podkładu i średnicę rolki.",
  "Łączność": "Sposób połączenia urządzenia z systemem.\n• USB — przewód do komputera lub kasy.\n• Ethernet — przewodowa sieć lokalna.\n• Wi-Fi — sieć bezprzewodowa. Bluetooth — połączenie bezpośrednie.\n• PoweredUSB wymaga zgodnego portu POS, nie zwykłego USB.",
  "Metoda druku": "Sposób tworzenia nadruku na etykiecie.\n• Termiczny — papier termiczny, bez taśmy barwiącej.\n• Termotransferowy — taśma barwiąca dobrana do etykiety.\n• Kodowanie RFID jest niezależne od nadruku.",
  "Technologia druku": "Sposób tworzenia wydruku.\n• Termiczny — głowica nagrzewa papier termiczny.\n• Termotransferowy — barwnik z taśmy trafia na etykietę.\n• Igłowy — uderzenia igieł przez taśmę barwiącą.\n• Atramentowy — atrament nanoszony na zgodny materiał. Hybrydowy łączy różne mechanizmy.",
  "Szerokość papieru": "Szerokość przyjmowanej rolki papieru.\n• Nie oznacza szerokości nadruku: marginesy zmniejszają obszar zadruku.\n• Sprawdź też maksymalną średnicę rolki.",
  "Papier": "Format materiału przyjmowanego przez drukarkę.\n• 58, 76 lub 80 mm — szerokość papieru w rolce.\n• Formularze — pojedyncze dokumenty w obsługiwanym formacie.\n• Format papieru nie określa rodzaju powłoki ani liczby kopii.",
  "Łączność komórkowa": "Modem umożliwia pracę w sieci operatora poza zasięgiem Wi-Fi.\n• LTE lub 5G wymaga aktywnej usługi i zgodnej karty SIM lub eSIM.\n• Bez 5G nie musi oznaczać braku LTE; sprawdź konfigurację PN.",
  "Interfejs": "Połączenie skanera z kasą lub komputerem.\n• USB — połączenie przewodowe.\n• RS-232 — port szeregowy, wymaga zgodnego przewodu i ustawień.\n• Keyboard Wedge — przesyłanie danych przez zgodne złącze klawiatury.\n• Port bazy i łącze radiowe skanera to różne elementy zestawu.",
  "Łączność bezprzewodowa": "Sposób komunikacji skanera z bazą lub urządzeniem.\n• Bluetooth — połączenie ze zgodnym urządzeniem lub bazą Bluetooth.\n• STAR — radio Datalogic, wymaga zgodnej bazy STAR.\n• Bazy STAR i Bluetooth nie są zamienne.",
  "Odczyt kodów": "Rodzaje odczytywanych kodów.\n• 1D — kody liniowe, np. EAN i Code 128.\n• 2D — kody dwuwymiarowe, np. QR i Data Matrix.\n• Odczyt DPM i bardzo małych kodów wymaga odpowiedniej optyki.",
  "Zastosowanie specjalne": "Optyka lub wykonanie do określonego zadania.\n• Daleki zasięg — odczyt z większej odległości; zasięg zależy od rozmiaru i jakości kodu.\n• DPM — odczyt oznaczeń naniesionych bezpośrednio na część.\n• Healthcare — wykonanie do zastosowań medycznych; sprawdź dopuszczone środki czyszczące.",
  "Odporność na upadki": "Wysokość upadku deklarowana dla określonych warunków badania.\n• Podłoże, temperatura i liczba upadków wpływają na wynik.\n• Nie oznacza gwarancji braku uszkodzeń przy każdym upadku.",
  "Szczelność (IP)": "Stopień ochrony obudowy przed ciałami stałymi i wodą.\n• Pierwsza cyfra: 3 — ciała od 2,5 mm; 4 — od 1 mm; 5 — ochrona przed pyłem; 6 — pyłoszczelność.\n• Druga cyfra: 0 — bez ochrony przed wodą; 2 — krople przy przechyleniu; 4 — bryzgi; 5 — strumień; 7/8 — zanurzenie w określonych warunkach.\n• IP nie potwierdza odporności na detergenty ani mycie ciśnieniowe.",
  "Skaner kodów": "Optyczny odczyt kodów jest niezależny od odczytu RFID.\n• Z modułem — uchwyt może także skanować obsługiwane kody kreskowe.\n• Bez modułu — kody wymagają osobnego skanera lub terminala.",
  "Bluetooth": "Bezpośrednie połączenie radiowe uchwytu z kompatybilnym urządzeniem.\n• Wymaga zgodnego profilu i aplikacji.\n• Nie zastępuje adaptera mechanicznego ani nie oznacza, że terminal jest dołączony.",
  "Rodzaj rolki": "Format nawoju etykiet.\n• Rolki biurkowe i przemysłowe różnią się m.in. gilzą i średnicą zewnętrzną.\n• Sprawdź oba wymiary oraz szerokość materiału. Sam format rolki nie potwierdza zgodności RFID.",
  "Rodzaj terminala": "Sposób obsługi terminala.\n• Dotykowy — wpisywanie przez ekran.\n• Z klawiaturą — fizyczne klawisze do ilości, numerów i tekstu.\n• Liczba klawiszy i układ zależą od wariantu PN.",
  "Zastosowanie": "Wykonanie terminala do warunków pracy.\n• Healthcare — obudowa do czyszczenia dopuszczonymi środkami.\n• Mroźnia — konfiguracja do niskiej temperatury; sprawdź zakres temperatur i wymagane akcesoria."
}
const categorySpecificHelp: Record<string, Record<string, string>> = {
  "drukarki-etykiet-bixolon": {
    "Rodzaj": "Sposób użytkowania drukarki.\n• Biurkowa — praca przy stanowisku.\n• Przemysłowa — większa konstrukcja do pracy w magazynie lub na produkcji.\n• Mobilna — druk przy towarze, z akumulatora. Wymiary rolki zależą od modelu."
  },
  "skanery-datalogic": {
    "Rodzaj": "Sposób pracy skanera.\n• Ręczny przewodowy — skanowanie z urządzeniem połączonym przewodem.\n• Bezprzewodowy — komunikacja przez radio.\n• Prezentacyjny — zbliżanie kodu do okna.\n• Ladowy — zabudowa w stanowisku kasowym."
  },
  "etykiety-rfid-zebra": {
    "Materiał": "Podłoże etykiety i jej przeznaczenie.\n• Papier — do zastosowań wymagających papierowej etykiety.\n• Materiał syntetyczny — dobierz do wilgoci, ścierania i temperatury.\n• On-Metal — do wskazanych powierzchni metalowych; wymaga potwierdzonej zgodności drukarki."
  },
  "drukarki-pos": {
    "Materiał": "Materiał musi pasować do mechanizmu drukarki.\n• Termiczny — papier z warstwą reagującą na ciepło.\n• Linerless — etykiety samoprzylepne bez podkładu, tylko do zgodnych drukarek.\n• Zwykły papier — do odpowiednich drukarek igłowych lub atramentowych."
  },
  "komputery-pos": {
    "Drukarka wbudowana": "Drukarka termiczna w komputerze do paragonów niefiskalnych i bonów z programu POS.\n• Z drukarką 80 mm — T3 80 mm i T3 PRO MAX (Seiko, gilotyna) oraz D3 MINI 80 mm (gilotyna). T3 80 mm z prowadnicą drukuje też na papierze 58 mm.\n• Z drukarką 58 mm — D3 MINI 58 mm.\n• Bez drukarki — T3, T3 PRO, D3 i D3 PRO; wydruki przez osobną drukarkę POS.",
    "Przekątna ekranu": "Przekątna ekranu głównego, od strony sprzedawcy.\n• 10,1\" — kompaktowe SUNMI D3 MINI z drukarką.\n• 15,6\" — T3, T3 PRO, D3 i D3 PRO; więcej miejsca na program sprzedaży.",
    "Ekran klienta": "Drugi ekran od strony klienta, np. z pozycjami i kwotą.\n• W zestawie — SUNMI D3 z ekranem klienta 10,1\" oraz D3 MINI z wbudowanym wyświetlaczem 2,4\" (58 mm) lub ekranem dotykowym 4\" (80 mm).\n• Do dokupienia — do T3 i T3 80 mm ekrany C02020008 i C02020007, do T3 PRO i T3 PRO MAX ekrany C02020003 i C02020004, do D3 PRO ekran C02020005. Ekrany do tych modeli nie są zamienne.",
    "Pamięć RAM": "Pamięć operacyjna dla programu sprzedaży.\n• 3 GB — SUNMI D3 i D3 MINI, pamięć 32 GB.\n• 4 GB — SUNMI T3, T3 80 mm i D3 PRO, pamięć 64 GB.\n• 6 GB — SUNMI T3 PRO i T3 PRO MAX, pamięć 128 GB.",
    "Usługi Google": "Usługi Google (GMS) w systemie SUNMI OS: na Androidzie 13 w T3, T3 PRO, D3 PRO i D3 MINI 80 mm, na Androidzie 14 w D3.\n• Z usługami Google — Sklep Google Play i aplikacje Google.\n• SUNMI OS bez usług Google — sklep SUNMI App Store; aplikacje instaluje zwykle dostawca oprogramowania. Ta wersja jest dostępna w T3 PRO, T3 PRO MAX, D3 PRO i D3 MINI. D3 MINI 58 mm ma tylko tę wersję.",
    "Cena netto": "Cena netto komputera. SUNMI D3 i D3 MINI mają ekran klienta w cenie. Do pozostałych modeli ekran klienta kupuje się osobno. Szufladę kupuje się osobno do każdego modelu."
  },
  "ekrany-kds": {
    "Przekątna ekranu": "Przekątna ekranu SUNMI FLEX 3 KDS. Każdy rozmiar ma własny PN na karcie produktu.\n• 15,6\" — najmniejsza obudowa, 250 nitów, PoE wbudowane.\n• 18,5\" i 21,5\" (22\") — ekran IPS 400 nitów, procesor 8-rdzeniowy, czytnik linii papilarnych.",
    "Cena netto": "Cena netto najtańszego rozmiaru. Ceny 18,5\" i 22\" podaje tabela wersji na karcie produktu."
  },
  "akcesoria-do-ekranow-kds": {
    "Rodzaj akcesorium": "Wyposażenie ekranu KDS SUNMI FLEX 3.\n• Moduł PoE — zasilanie przez przewód sieciowy w wersjach 18,5\" i 22\".\n• Ramię VESA i stojak — mocowanie ekranu przez VESA 100 × 100."
  },
  "kioski-samoobslugowe": {
    "Przekątna ekranu": "Przekątna ekranu kiosku. Każdy rozmiar SUNMI FLEX 3 ma własny PN na karcie produktu.\n• 10,1\" — Zebra KC401: WXGA 1280 × 800 px, 300 nitów, 6 GB RAM i 64 GB pamięci.\n• 15,6\" — SUNMI FLEX 3: 250 nitów, 4 GB RAM i 64 GB pamięci.\n• 18,5\", 21,5\" (22\") i 27\" — SUNMI FLEX 3: ekran IPS 400 nitów, 6 GB RAM i 128 GB pamięci, czytnik linii papilarnych.",
    "Pamięć": "Pamięć operacyjna i pamięć na dane.\n• 6 GB RAM / 64 GB — Zebra KC401, z gniazdem microSD do 2 TB.\n• 4 GB RAM / 64 GB — SUNMI FLEX 3 15,6\".\n• 6 GB RAM / 128 GB — SUNMI FLEX 3 18,5\", 22\" i 27\".",
    "Producent": "Producent kiosku.\n• SUNMI — FLEX 3 w czterech rozmiarach, od 15,6\" do 27\", ze stojakami podłogowymi i na ladę.\n• Zebra — KC401 z ekranem 10,1\", następca CC600 i CC6000; moduł skanera i uchwyty VESA są akcesoriami.",
    "Cena netto": "Cena netto kiosku; przy SUNMI FLEX 3 cena najtańszego rozmiaru. Ceny pozostałych rozmiarów podaje tabela wersji na karcie produktu. Stojaki, uchwyty, moduły i zasilacze kupuje się osobno."
  },
  "akcesoria-do-kioskow": {
    "Rodzaj akcesorium": "Wyposażenie kiosku.\n• Stojak podłogowy i stojak na ladę — ustawiają ekran SUNMI FLEX 3; stojaki Retail i Restaurant mają drukarkę w zestawie.\n• Moduł, kamera i uchwyt POS — odczyt kart i kodów, sygnalizacja stanu, rozpoznawanie twarzy i terminal płatniczy przy ekranie SUNMI FLEX 3.\n• Moduł skanera — skaner SR500 do Zebra KC401 z kątem skanowania +25°, 0° lub −25°.\n• Uchwyt — montaż Zebra KC401 na ścianie, na słupie albo z drukarką w stanowisku PrintKiosk.\n• Zasilanie — zasilacz 36 W i przewód sieciowy C5 do Zebra KC401.",
    "Zgodny kiosk": "Kiosk, do którego pasuje akcesorium.\n• SUNMI FLEX 3 — stojaki, moduły, kamera i uchwyt POS; zgodne rozmiary podaje filtr „Zgodny rozmiar”.\n• Zebra KC401 — moduły skanera, uchwyty i zasilanie; uchwyty Zebra pasują także do CC6000.",
    "Zgodny rozmiar": "Rozmiar ekranu SUNMI FLEX 3, do którego pasuje akcesorium. Stojaki Retail pasują tylko do ekranu 22\". Zgodność z wersją 15,6\" prosimy potwierdzić przed zamówieniem."
  },
  "laptopy-przemyslowe": {
    "Klasa odporności": "Odporność obudowy laptopa.\n• Fully rugged (IP66) — ochrona przed pyłem i silnymi strumieniami wody, upadek z 1,2–1,8 m, gwarancja 3 lata Bumper-to-Bumper, także przy przypadkowych uszkodzeniach.\n• Rugged (IP53) — ochrona przed pyłem i natryskiem wody, upadek z 0,9 m, 3 lata gwarancji ograniczonej (limited warranty).",
    "Przekątna ekranu": "Przekątna ekranu laptopa.\n• 12,2–13,3\" — mniejsza obudowa: 302 × 224 mm (V120) albo 342 × 281 mm (B360).\n• 14\" i 15,6\" — większy ekran: obudowa 350 × 293 mm (S410 G5) albo 375 × 277 mm (S510, S510AD).",
    "Procesor": "Producent procesora.\n• Intel — Core Ultra (z układem NPU Intel AI Boost) albo Core i5/i7 13. generacji.\n• AMD — Ryzen AI 300 z układem NPU AMD XDNA 2 do 50 TOPS; laptop jest komputerem Copilot+ PC.",
    "Łączność komórkowa": "Modem 4G LTE albo 5G z GPS do pracy poza zasięgiem Wi-Fi. Model trafia do obu grup, gdy w ofercie są wersje z modemem i bez modemu. Wersję wybiera się w tabeli na karcie produktu.",
    "Cena netto": "Cena netto najtańszej wersji w ofercie. Ceny pozostałych wersji podaje tabela na karcie produktu."
  },
  "akcesoria-do-komputerow-pos": {
    "Rodzaj akcesorium": "Wyposażenie stanowiska kasowego.\n• Ekran klienta — drugi ekran od strony klienta, montowany z tyłu komputera.\n• Szuflada kasowa — otwiera się sygnałem z portu szuflady.\n• Zasilacz i prowadnica papieru — części zamienne i dodatkowe.",
    "Zgodny komputer": "Model, z którym akcesorium współpracuje. Ekrany klienta do T3 i do T3 PRO nie są zamienne. Ekran C02020005 pasuje tylko do D3 PRO. Prowadnica papieru 58 mm pasuje tylko do T3 80 mm, bo T3 nie ma drukarki."
  },
  "mobilne-drukarki-paragonow": {
    "Materiał": "Rodzaj materiału do drukowania w terenie.\n• Papier termiczny — potwierdzenia bez taśmy barwiącej.\n• Linerless — etykiety bez podkładu; wymagają przystosowanego modelu i zgodnego kleju."
  }
}
for (const category of ["drukarki-etykiet-bixolon", "drukarki-pos", "komputery-pos", "akcesoria-do-komputerow-pos", "ekrany-kds", "akcesoria-do-ekranow-kds", "kioski-samoobslugowe", "akcesoria-do-kioskow", "laptopy-przemyslowe", "mobilne-drukarki-paragonow", "drukarki-rfid", "etykiety-rfid-zebra", "terminale-rfid", "uchwyty-rfid", "terminale-cipherlab", "skanery-datalogic"]) {
  categoryFilters[category] = (categoryFilters[category] ?? []).map(filter => ({
    ...filter,
    description: categorySpecificHelp[category]?.[filter.label] ?? catalogFilterHelp[filter.label] ?? filter.description,
  }))
}

categoryFilters['terminale-sunmi'] = [
  { specKey: 'Ekran', label: 'Ekran', description: 'Przekątna ekranu terminala. Większy ekran mieści więcej danych; L2Ks ma dodatkowo fizyczną klawiaturę.', derived: [
    { value: '4 cale', pattern: '^4 cale', specs: ['Ekran'] },
    { value: '5,5 cala', pattern: '^5,5', specs: ['Ekran'] },
    { value: '6,75 cala', pattern: '^6,75', specs: ['Ekran'] },
  ] },
  { specKey: 'Drukarka', label: 'Wbudowana drukarka', description: 'Drukarka termiczna w terminalu drukuje dokumenty ze zgodnej aplikacji. Nie jest polskim urządzeniem fiskalnym. Szerokość dotyczy papieru.', derived: [
    { value: 'Papier 58 mm', pattern: 'papier 58 mm', specs: ['Drukarka'] },
    { value: 'Papier 58–80 mm', pattern: '58–80 mm', specs: ['Drukarka'] },
  ] },
  { specKey: 'Klasa szczelności', label: 'Ochrona obudowy', description: 'IP65 chroni przed pyłem i strumieniami wody. IP67 i IP68 obejmują określone warunki zanurzenia. Klasa IP nie określa odporności na upadki.' },
]

// Drukarki dla ochrony zdrowia (Zebra, TSC, SATO, Honeywell, Citizen): producent z manufacturerId, rodzaj i technologia
// z podkategorii kart, szerokość po slugach (karty mają różne nazwy wierszy specyfikacji).
categoryFilters['drukarki-dla-sluzby-zdrowia'] = [
  { specKey: 'producent', label: 'Producent', derived: [
    { value: 'Zebra', manufacturer: 'zebra' },
    { value: 'TSC', manufacturer: 'tsc' },
    { value: 'SATO', manufacturer: 'sato' },
    { value: 'Honeywell', manufacturer: 'honeywell' },
    { value: 'Citizen', manufacturer: 'citizen' },
  ] },
  { specKey: 'rodzaj', label: 'Rodzaj drukarki', description: 'Miejsce pracy i rodzaj nośnika.\n• Drukarka opasek — opaski z kartridżów\n• Biurkowa — etykiety na stanowisku, w wielu modelach także opaski z rolki\n• Mobilna — etykiety przy łóżku pacjenta, zasilanie z baterii', derived: [
    { value: 'Drukarka opasek', slugs: ['zebra-zd510-hc'] },
    { value: 'Biurkowa', subcategory: 'biurkowe-drukarki-etykiet' },
    { value: 'Mobilna', subcategory: 'mobilne-drukarki-etykiet' },
  ] },
  { specKey: 'technologia', label: 'Technologia druku', description: 'Sposób druku.\n• Termiczna — bez taśmy barwiącej\n• Termotransferowa — z taśmą barwiącą', derived: [
    { value: 'Termiczna', slugs: ['zebra-zd510-hc'] },
    { value: 'Termiczna', subcategory: 'termiczne-drukarki-etykiet' },
    { value: 'Termotransferowa', subcategory: 'termotransferowe-drukarki-etykiet' },
  ] },
  { specKey: 'szerokosc', label: 'Szerokość druku', description: 'Maksymalna szerokość druku.\n• Opaski z kartridżów — do 30,16 mm\n• 2 cale — ok. 48–57 mm\n• 3 cale — do 72 mm\n• 4 cale — 104–108 mm', derived: [
    { value: 'Opaski (do 30 mm)', slugs: ['zebra-zd510-hc'] },
    { value: '2 cale', slugs: ['zebra-zd411-hc', 'zebra-zd611-hc', 'zebra-zq610-plus-hc', 'tsc-th220thc', 'tsc-dh220thc', 'tsc-dh220lhc', 'sato-ws2-2'] },
    { value: '3 cale', slugs: ['zebra-zq620-plus-hc', 'tsc-alpha-30lhc'] },
    { value: '4 cale', slugs: ['zebra-zd421-hc', 'zebra-zd621-hc', 'tsc-th240thc', 'tsc-dh240thc', 'sato-ct4-lx-hc', 'honeywell-pc45d-hc', 'citizen-cl-h300sv'] },
  ] },
]

// Skanery dla ochrony zdrowia (Zebra HC, Honeywell, Datalogic, Newland, Socket Mobile): łączność, rodzaj i wibracja
// po slugach, bo karty pochodzą z kilku plików i mają różne nazwy wierszy specyfikacji. Socket Mobile po slugach —
// marka dochodzi razem z kartami.
categoryFilters['skanery-dla-sluzby-zdrowia'] = [
  { specKey: 'producent', label: 'Producent', derived: [
    { value: 'Zebra', manufacturer: 'zebra' },
    { value: 'Honeywell', manufacturer: 'honeywell' },
    { value: 'Datalogic', manufacturer: 'datalogic' },
    { value: 'Newland', manufacturer: 'newland' },
    { value: 'Socket Mobile', slugs: ['socket-mobile-durascan-d745', 'socket-mobile-durascan-d765'] },
  ] },
  { specKey: 'lacznosc', label: 'Łączność', description: 'Sposób połączenia z komputerem lub tabletem.\n• Przewodowy — USB lub RS-232, bez ładowania; stałe stanowisko\n• Bluetooth — praca przy łóżku pacjenta, ze stacją, wózkiem lub tabletem\n• Radio 433 MHz — system STAR Datalogic z bazą', derived: [
    { value: 'Przewodowy', slugs: ['zebra-ds2208-hc', 'zebra-ds4608-hc', 'zebra-ds8208-hc', 'honeywell-xenon-ultra-1960h', 'datalogic-gryphon-gd4690-hc', 'datalogic-gryphon-gd4620-hc', 'newland-hr33-marlin-ai-white', 'newland-hr23-dorada-ai-white'] },
    { value: 'Bluetooth', slugs: ['zebra-ds2278-hc', 'zebra-ds8288-hc', 'zebra-cs60-hc', 'honeywell-xenon-ultra-1962h', 'datalogic-gryphon-gbt4600-hc', 'newland-hr33-marlin-ai-bt-white', 'newland-hr23-dorada-ai-bt-white', 'socket-mobile-durascan-d745', 'socket-mobile-durascan-d765'] },
    { value: 'Radio 433 MHz', slugs: ['datalogic-gryphon-gm4600-hc'] },
  ] },
  { specKey: 'rodzaj', label: 'Rodzaj', description: 'Kształt skanera.\n• Pistoletowy — z rękojeścią i spustem\n• Bez rękojeści — skaner trzymany w dłoni jak pilot, z przyciskiem odczytu na górze', derived: [
    { value: 'Pistoletowy', slugs: ['zebra-ds2208-hc', 'zebra-ds4608-hc', 'zebra-ds8208-hc', 'honeywell-xenon-ultra-1960h', 'datalogic-gryphon-gd4690-hc', 'datalogic-gryphon-gd4620-hc', 'newland-hr33-marlin-ai-white', 'newland-hr23-dorada-ai-white', 'zebra-ds2278-hc', 'zebra-ds8288-hc', 'honeywell-xenon-ultra-1962h', 'datalogic-gryphon-gbt4600-hc', 'datalogic-gryphon-gm4600-hc', 'newland-hr33-marlin-ai-bt-white', 'newland-hr23-dorada-ai-bt-white'] },
    { value: 'Bez rękojeści', slugs: ['zebra-cs60-hc', 'socket-mobile-durascan-d745', 'socket-mobile-durascan-d765'] },
  ] },
  { specKey: 'wibracja', label: 'Ciche potwierdzenie', description: 'Potwierdzenie odczytu bez sygnału dźwiękowego, np. przy śpiącym pacjencie.\n• Wibracja — w Honeywell Xenon Ultra 1960h i Datalogic Gryphon GBT4600 HC / GM4600 HC jako opcja\n• Światło na kodzie — Direct Decode Indicator w skanerach Zebra (w DS2208-HC i DS2278-HC jako tryb „Do Not Disturb”) i Green Spot w Datalogic Gryphon 4600 HC', derived: [
    { value: 'Wibracja', slugs: ['zebra-ds4608-hc', 'zebra-ds8208-hc', 'zebra-ds8288-hc', 'zebra-cs60-hc', 'honeywell-xenon-ultra-1960h', 'honeywell-xenon-ultra-1962h', 'datalogic-gryphon-gbt4600-hc', 'datalogic-gryphon-gm4600-hc', 'newland-hr33-marlin-ai-white', 'newland-hr23-dorada-ai-white', 'newland-hr33-marlin-ai-bt-white', 'newland-hr23-dorada-ai-bt-white'] },
    { value: 'Światło na kodzie', slugs: ['zebra-ds2208-hc', 'zebra-ds2278-hc', 'zebra-ds4608-hc', 'zebra-ds8208-hc', 'zebra-ds8288-hc', 'zebra-cs60-hc', 'datalogic-gryphon-gd4690-hc', 'datalogic-gryphon-gd4620-hc', 'datalogic-gryphon-gbt4600-hc', 'datalogic-gryphon-gm4600-hc'] },
  ] },
]

// Terminale dla ochrony zdrowia (Zebra HC2X/HC5X, Honeywell CT37 HC, Datalogic Memor 12 HC / 17 HC, CipherLab RS38H):
// łączność i przycisk alarmowy po slugach, bo karty pochodzą z kilku plików i mają różne nazwy wierszy specyfikacji.
// Honeywell CT37 HC ma warianty Wi-Fi i 5G, więc jest w obu opcjach łączności.
categoryFilters['terminale-dla-sluzby-zdrowia'] = [
  { specKey: 'producent', label: 'Producent', derived: [
    { value: 'Zebra', manufacturer: 'zebra' },
    { value: 'Honeywell', manufacturer: 'honeywell' },
    { value: 'Datalogic', manufacturer: 'datalogic' },
    { value: 'CipherLab', manufacturer: 'cipherlab' },
  ] },
  { specKey: 'lacznosc', label: 'Łączność', description: 'Sieć, z którą terminal przesyła dane.\n• Tylko Wi-Fi — praca w budynku z siecią bezprzewodową placówki\n• Wi-Fi + 5G — także poza budynkiem, np. w opiece domowej i transporcie pacjentów; karta nano SIM i eSIM', derived: [
    { value: 'Tylko Wi-Fi', slugs: ['zebra-hc20', 'zebra-hc50', 'honeywell-ct37-hc', 'datalogic-memor-12-hc'] },
    { value: 'Wi-Fi + 5G', slugs: ['zebra-hc25', 'zebra-hc55', 'honeywell-ct37-hc', 'datalogic-memor-17-hc', 'cipherlab-rs38h'] },
  ] },
  { specKey: 'alarm', label: 'Przycisk alarmowy', description: 'Czerwony przycisk w obudowie terminala, który można zaprogramować, np. do wybrania numeru albo uruchomienia aplikacji. W Datalogic Memor 12 HC i 17 HC alarm uruchamia się przyciskiem programowalnym lub gestem.', derived: [
    { value: 'W obudowie terminala', slugs: ['zebra-hc20', 'zebra-hc25', 'zebra-hc50', 'zebra-hc55', 'cipherlab-rs38h'] },
  ] },
]

// Programy do etykiet (BarTender, Loftware Cloud): filtry po slugach, bo karty licencji nie mają wspólnych wierszy
// specyfikacji. Z filtrami strona ma ten sam układ co pozostałe podkategorie z treścią rozszerzoną, w tym tabelę porównawczą.
categoryFilters['programy-do-etykiet'] = [
  { specKey: 'producent', label: 'Producent', derived: [
    { value: 'BarTender', manufacturer: 'bartender' },
    { value: 'Loftware', manufacturer: 'loftware' },
  ] },
  { specKey: 'miejsce', label: 'Gdzie działa', description: 'Gdzie pracuje program.\n• Windows — program instalowany na komputerach firmy\n• Przeglądarka — projektowanie i druk z chmury; Loftware Cloud ma też Desktop Designer dla Windows', derived: [
    { value: 'Windows', slugs: ['bartender-starter', 'bartender-professional', 'bartender-automation', 'bartender-enterprise', 'loftware-cloud-designer', 'loftware-cloud-essentials', 'loftware-cloud-business'] },
    { value: 'Przeglądarka', slugs: ['bartender-cloud', 'loftware-cloud-designer', 'loftware-cloud-essentials', 'loftware-cloud-business'] },
  ] },
  { specKey: 'licencja', label: 'Licencja', description: 'Sposób liczenia licencji.\n• Na stanowisko — BarTender Workstation: 1 użytkownik na 1 komputerze, drukarki bez limitu\n• Na liczbę drukarek — limit drukarek, użytkownicy lub komputery bez limitu', derived: [
    { value: 'Na stanowisko', slugs: ['bartender-starter', 'bartender-professional'] },
    { value: 'Na liczbę drukarek', slugs: ['bartender-professional', 'bartender-automation', 'bartender-enterprise', 'bartender-cloud', 'loftware-cloud-designer', 'loftware-cloud-essentials', 'loftware-cloud-business'] },
  ] },
]
