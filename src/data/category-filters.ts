import type { FilterDefinition } from '@/components/subcategory/FilterableProductGrid'

/**
 * Filtry w lewym sidebarze stron kategorii (checkboxy z licznikiem, jak na podkategoriach).
 * Kategorie mają luźne, opisowe specyfikacje, więc filtry są „pochodne”: reguła = wyrażenie
 * regularne na tekście specyfikacji, producent albo przedział ceny. Reguły są zwykłymi danymi,
 * bo trafiają do komponentu klienckiego. Kolejność reguł = kolejność opcji w filtrze.
 */
export const categoryFilters: Record<string, FilterDefinition[]> = {
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
      description: 'Zapis danych na karcie podczas druku, zwykle jako opcja.\n• Pasek magnetyczny — karty lojalnościowe, starsze systemy dostępu\n• RFID / NFC — karty zbliżeniowe do drzwi, bramek i rejestracji czasu pracy\n• Smart card — chip stykowy do podpisu i uwierzytelniania',
      derived: [
        { value: 'Pasek magnetyczny', pattern: 'magnetyczn', specs: ['Kodowanie (opcja)', 'Kodowanie'] },
        { value: 'RFID / NFC', pattern: 'RFID|NFC|zbliżeniow|Mifare', specs: ['Kodowanie (opcja)', 'Kodowanie'] },
        { value: 'Smart card', pattern: 'smart ?card|chipow', specs: ['Kodowanie (opcja)', 'Kodowanie'] },
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
      description: 'Maksymalna szerokość etykiety.\n• 2 cale (do 56 mm) — małe etykiety, opaski, biżuteria\n• 4 cale (104–108 mm) — standard: etykiety logistyczne i wysyłkowe\n• 6 cali (168 mm) — etykiety paletowe, chemia, duże kartony\n• 8 cali (216 mm) — etykiety wielkoformatowe',
      derived: [
        { value: '2 cale (do 56 mm)', pattern: '(^|[^0-9,])(4[0-9]|5[0-9]) ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
        { value: '4 cale (104–108 mm)', pattern: '10[0-9](,[0-9])? ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
        { value: '4 cale (104–108 mm)', pattern: '–1[0-2][0-9] ?mm', specs: ['Szerokość mediów'] },
        { value: '6 cali (168 mm)', pattern: '16[0-9](,[0-9])? ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
        { value: '6 cali (168 mm)', pattern: '–17[0-9](,[0-9])? ?mm', specs: ['Szerokość mediów'] },
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
      description: 'Maksymalna szerokość etykiety.\n• 4 cale (104–108 mm) — standard: etykiety logistyczne, wysyłkowe, produktowe\n• 6 cali (168 mm) — etykiety paletowe GS1, chemia, duże kartony\n• 8 cali (216 mm) — etykiety wielkoformatowe i plakaty',
      derived: [
        { value: '4 cale (104–108 mm)', pattern: '10[0-9](,[0-9])? ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
        { value: '4 cale (104–108 mm)', pattern: '–1[0-2][0-9] ?mm', specs: ['Szerokość mediów'] },
        { value: '6 cali (168 mm)', pattern: '16[0-9](,[0-9])? ?mm', specs: ['Szerokość druku', 'Maks. szerokość druku'] },
        { value: '6 cali (168 mm)', pattern: '–17[0-9](,[0-9])? ?mm', specs: ['Szerokość mediów'] },
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
      ],
    },
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
        { value: '5–5,7"', pattern: '^5[,.]?[0-9]?\\s*["″]', specs: ['Wyświetlacz'] },
        { value: '6" i więcej', pattern: '^6[,.]?[0-9]?\\s*["″]', specs: ['Wyświetlacz'] },
      ],
    },
    {
      specKey: 'siec',
      label: 'Sieć komórkowa',
      description: 'Czy terminal łączy się poza zasięgiem firmowego Wi-Fi.\n• Wi-Fi + LTE/5G — karta SIM, praca w terenie i w aucie\n• Tylko Wi-Fi — w budynku, w zasięgu sieci firmowej; tańszy wariant',
      derived: [
        { value: 'Wi-Fi + LTE/5G', pattern: '5G|LTE|\\b4G\\b|WWAN|SIM', specs: ['WWAN', 'SIM', 'Łączność'] },
        { value: 'Tylko Wi-Fi', notSpecs: ['WWAN', 'SIM'] },
      ],
    },
    {
      specKey: 'wifi',
      label: 'Wi-Fi',
      description: 'Generacja sieci bezprzewodowej.\n• Wi-Fi 6/6E lub 7 — nowe wdrożenia, gęste magazyny, mniejsze opóźnienia\n• Wi-Fi 5 (ac) — wystarcza do skanowania i prostych aplikacji',
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
        { value: 'Newland', manufacturer: 'newland' },
        { value: 'M3 Mobile', manufacturer: 'm3-mobile' },
      ],
    },
    {
      specKey: 'rodzaj',
      label: 'Rodzaj',
      description: 'Jak skaner pracuje.\n• Przewodowy — kabel USB do kasy lub komputera, bez ładowania\n• Bezprzewodowy — Bluetooth i stacja, praca do 100 m od bazy\n• Prezentacyjny — stoi na ladzie, kod podsuwa się pod okno\n• Pierścieniowy — na palcu, obie ręce wolne; magazyn',
      derived: [
        { value: 'Przewodowy', subcategory: 'skanery-przewodowe' },
        { value: 'Bezprzewodowy (Bluetooth)', subcategory: 'skanery-bezprzewodowe' },
        { value: 'Prezentacyjny', subcategory: 'skanery-prezentacyjne' },
        { value: 'Pierścieniowy', subcategory: 'skanery-pierscieniowe' },
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
        { value: '2,4–3 m (przemysłowe)', pattern: '(^|[^0-9,.])(2[,.]4|3([,.]0)?) ?m', specs: ['Odporność na upadki', 'Upadki'] },
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
      description: 'Jak podłączyć skaner. USB mają wszystkie modele.\n• RS-232 — kasy fiskalne, wagi, starsze systemy\n• Keyboard Wedge — skaner udaje klawiaturę, bez sterowników\n• Ethernet przemysłowy — sterowniki PLC na linii produkcyjnej',
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
      description: 'Rozmiar wyświetlacza.\n• 8" — do jednej ręki, na wózku, w kieszeni kurtki\n• 10" — czytelne tabele i mapy, w aucie i na stanowisku',
      derived: [
        { value: '8"', pattern: '^8[,.]?[0-9]?\\s*["″]', specs: ['Wyświetlacz'] },
        { value: '8"', pattern: '\\S', specs: ['Wyświetlacz 8″'] },
        { value: '10"', pattern: '^10[,.]?[0-9]?\\s*["″]', specs: ['Wyświetlacz'] },
        { value: '10"', pattern: '\\S', specs: ['Wyświetlacz 10″'] },
      ],
    },
    {
      specKey: 'skaner',
      label: 'Skaner kodów',
      description: 'Czy tablet ma wbudowany czytnik kodów.\n• Wbudowany — skanowanie bez dodatkowego urządzenia; magazyn, inwentaryzacja\n• Bez skanera — tablet do aplikacji i dokumentów; kody przez kamerę lub zewnętrzny skaner',
      derived: [
        { value: 'Wbudowany', pattern: '\\S', specs: ['Skaner', 'Skaner kodów'] },
        { value: 'Bez skanera', notSpecs: ['Skaner', 'Skaner kodów'] },
      ],
    },
    {
      specKey: 'upadki',
      label: 'Odporność na upadki',
      description: 'Z jakiej wysokości tablet wytrzymuje upadek na beton wg testów producenta.\n• 1,2–1,3 m — z ręki, z blatu\n• 1,5 m i więcej — z wózka, z uchwytu w aucie',
      derived: [
        { value: '1,2–1,3 m', pattern: '(^|[^0-9,.])1[,.][0-3][0-9]? ?m', specs: ['Odporność na upadki', 'Odporność na upadek', 'Upadki', 'Odporność'] },
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
  'karty-pcv': [
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
        { value: 'Zebra ZC100 / ZC300', pattern: '\\bZC', specs: ['Kompatybilność'] },
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
        { value: '600 wydruków', pattern: '^600\\b', specs: ['Wydajność'] },
        { value: '1 000 wydruków i więcej', pattern: '^1 ?[05]00\\b', specs: ['Wydajność'] },
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
for (const brand of ['terminale-mobilne-zebra', 'terminale-newland', 'terminale-honeywell', 'terminale-datalogic', 'terminale-m3-mobile']) {
  categoryFilters[brand] = categoryFilters['terminale-mobilne']
}
// Skanery: strony marek i podkategorie dostają ten sam zestaw — grupy z jedną wartością (Producent, Rodzaj) chowają się same
for (const page of ['skanery-kodow-kreskowych-zebra', 'skanery-honeywell', 'skanery-kodow-kreskowych-newland', 'skanery-kodow-kreskowych/przewodowe', 'skanery-kodow-kreskowych/bezprzewodowe', 'skanery-kodow-kreskowych/prezentacyjne', 'skanery-kodow-kreskowych/pierscieniowe']) {
  categoryFilters[page] = categoryFilters['skanery-kodow-kreskowych']
}
for (const page of ['tablety-przemyslowe-zebra', 'tablety-honeywell']) {
  categoryFilters[page] = categoryFilters['tablety-przemyslowe']
}
// Drukarki etykiet — strony marek: ten sam zestaw co kategoria (Producent chowa się sam)
for (const page of ['drukarki-etykiet-zebra', 'drukarki-etykiet-honeywell', 'drukarki-etykiet-tsc', 'drukarki-etykiet-citizen', 'drukarki-etykiet-brother']) {
  categoryFilters[page] = categoryFilters['drukarki-etykiet']
}
categoryFilters['drukarki-kart-magicard'] = categoryFilters['drukarki-kart']
