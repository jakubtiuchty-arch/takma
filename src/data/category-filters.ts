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
}
