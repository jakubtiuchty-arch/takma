# Honeywell PX65 RFID — 16.10.2026

## PN i dostępność

Dodano osobną kartę `/produkt/honeywell-px65-rfid` oraz pięć akcesoriów. Bez zmian komponentów i CSS. Potwierdzone fabryczne PN UHF EU:

| PN | Konfiguracja | Cena sprzedaży TAKMA netto PLN | Stan PL / EU |
| --- | --- | ---: | --- |
| PX65A00EU0000200 | 203 dpi, RFID EU, Ethernet | 19824,72 | 0 / 0 |
| PX65A00EU0000300 | 300 dpi, RFID EU, Ethernet | 18995,44 | 0 / 2 |
| 1-040084-900 | Głowica 203 dpi | 2027,61 | 0 / 136 |
| 1-040085-900 | Głowica 300 dpi | 2744,27 | 0 / 248 |
| 1-010110-90 | Wałek dociskowy | 270,92 | 0 / 141 |
| 50147002-002 | Wi-Fi ROW | 2168,52 | 0 / 30 |
| 1-041584-900 | Obcinacz | 5188,76 | 0 / 6 |

Ceny i stany z odczytu `/api/stock?pn=...`, stan zmienny. Wcześniej sprawdzono także bezpośrednie API BlueStar, Ingram i Jarltech: wszystkie trzy mają oferty obu PN drukarki, BlueStar potwierdził 2 szt. 300 dpi. Podłączono LIVE_OFFER_SLUGS dla drukarki i wszystkich pięciu akcesoriów, bez statycznych cen zastępczych. Brak zakupów i rezerwacji.

## Źródła i parametry

- Aktualna rodzina, parametry, gwarancja 1 rok: https://automation.honeywell.com/gb/en/products/productivity-solutions/printers/industrial-printers/px65-industrial-printer .
- Europejskie oferty i stan: https://shop.bluestoreinc.com/en/px65-series-industrial-printer .
- Producent, konfigurator (s. 22: oba RFID EU; s. 29 mapa; s. 33–38 akcesoria): https://www.bluestarinc.com/hubfs/sps-ppr-PX45_PX65%20Configuration%20Guide%20GLOBAL.pdf?hsLang=en-us . Zapis `/downloads/honeywell-px45-px65-konfiguracje-en.pdf`.
- Karta producenta `/downloads/sps-ppr-px45-px65-series-printers-datasheet-en.pdf`: nadruk 167,4 mm, 100–225 mm/s dla obu rozdzielczości, materiał 76–170 mm, rolka 213 mm, gilza 38–76 mm, Ethernet 10/100 Mb/s. Starsza mapa konfiguracji ma Gigabit — przyjęto dedykowaną kartę katalogową i aktualną stronę. Gabaryty 335 × 482 × 238 mm (szer. × gł. × wys.).
- Instrukcja producenta do wyposażenia: https://prod-edam.honeywell.com/content/dam/honeywell-edam/sps/ppr/en-us/public/products/printers/common/documents/sps-ppr-px45-65-acc-en-ug.pdf . Zapis `/downloads/honeywell-px45-px65-akcesoria-en.pdf`.

Oba PN mają ekran LCD 2,36 cala z klawiaturą, RTC, obrotowy uchwyt i przewody EU oraz US. RFID jest fabryczne. Nie mają Wi-Fi, obcinacza ani nawijaka. Nawijak/LTS to opcja fabryczna — nie proponowano późniejszego montażu. Moduł Wi-Fi ROW wymaga autoryzowanego technika. Obcinacz przy RFID ma ciąć między wkładkami. Głowice dobierane do rozdzielczości, bez obietnicy prostego upgrade'u 203 → 300 dpi.

Usunięto niepotwierdzone IP64 ze zwykłej PX65 i jej metadanych oraz porównania. Poprzednia masa 12,6 kg dotyczy PX45; karta katalogowa podaje dla PX65 14,1 kg. W nowej karcie RFID masy nie podano. Opis zwykłej PX65 skupiono na nadruku, z krótką wzmianką o rozbudowie i linkiem do RFID. Poprawiono nieprawidłowe alty: trzecia fotografia przedstawia zamknięty prawy bok, nie otwartą pokrywę.

## Zdjęcia i UI

- Zachowano istniejące zdjęcia PX65, główne pod kątem z lewym bokiem. Mierzona szerokość/wysokość produktu przy progu RGB <210 na białym tle: PX65 91,2% / 49,0%, ZT421 RFID 85,5% / 72,8%, ZT620 RFID 89,5% / 82,2%. Szersza i niższa obudowa PX65 wyjaśnia różnicę wysokości. Pola wszystkich trzech kart 576,5 × 576,5 px. Wizualnie zachowana porównywalna szerokość i marginesy.
- Akcesoria: zdjęcia oryginalnych części z https://www.recode.fr/tete-d-impression-203dpi-intermec-honeywell-px65 , https://www.recode.fr/rouleau-d-impression-%28platen%29-intermec-honeywell-px65 i https://www.ers-online.co.uk/PX65/accessories . Zgodność PN potwierdzona osobno w dokumentacji producenta.
- Imagen zmniejszył produkt i dodał białe marginesy; bez zmian układu kafelków. Kadr głowicy wspólny dla 203/300 dpi, opisany jako poglądowy. Finalne wymiary plików 1254 × 1254; widoczny produkt szer./wys.: głowica 66,1/41,0%, wałek 55,7/55,3%, Wi-Fi 50,5/48,1%, obcinacz 65,4/40,0%. Standardowe pola kafelków 282,25 × 211,69 px. Sprawdzone wizualnie w przeglądarce.
- Jeden dział Akcesoria. Początkowo 4, po rozwinięciu 5, po zwinięciu 4; piąty obcinacz pokazuje cenę i dostępność.
- Tabela PN zawiera wyłącznie różniącą się rozdzielczość, poza standardowymi kolumnami oferty. Odczytano 300 dpi 18995,44 netto / EU 2 oraz 203 dpi 19824,72 netto / 0 szt.
- Kategorie: RFID 29, przemysłowe 51, termotransferowe 68, akcesoria 268. Pierwsze 10 RFID pozostaje Zebra. Usunięta PM65 RFID nie wraca do oferty.
- Kontrole TypeScript, ESLint, unikalność ID/slugów, referencje, obrazy, pliki i liczniki kategorii. Zachowano panel magazynu i filtry wymiarów.

Publikacja wyłącznie przez commit i push na `claude/takma-frontend-build-RrM9E`, następnie automatyczne wdrożenie Vercel z Gita.
