# Zebra WS501-R — kontrola danych

Data: 2026-10-18. Dokumentacja robocza.

## Model i PN

Europejski WS5012-0D3M1030EEA: mocowanie na grzbiet dłoni, SR560, UHF 865–868 MHz, 3 GB RAM / 32 GB Flash, bateria 2400 mAh. Potwierdzenie konkretnego PN: oferty Ingram, BlueStar i Jarltech (kod Jarltech zws501r). Nie dodano odmian US/ERW ani zwykłego WS501.

Specyfikacja:
https://www.zebra.com/us/en/products/spec-sheets/mobile-computers/wearable/ws501-r.html

Oficjalny PDF Zebra (wersja 2026-02-14), pozyskany bez zmiany treści z kopii dystrybucyjnej:
https://productphoto.tecsys.dk/DOCUMENTS/ZEB/ws501-r-spec-sheet-en-us.pdf

Parametry: QCS2290 4 rdzenie 2,0 GHz; 2 cale AMOLED 460 × 460; Wi-Fi 6, BT5.3, NFC; UHF nominalnie około 1,5 m; IP65; −10..+50°C; upadki 1,5 m na beton (MIL-STD-810G). Nie przepisano 1,8 m z opisów zwykłego WS501. Gwarancja jeden rok od wysyłki wg specyfikacji Zebra.

## Akcesoria

Główne źródło zgodności aktualnej wersji RFID:
https://www.zebra.com/content/dam/support-dam/en/documentation/unrestricted/guide/product/ws501rfid-prg-en.pdf

Tabela Device Accessories, strony drukowane 72–74, potwierdza wszystkie dodane PN: stacje CRD-WS5X-2SRD-01 / 10SRD-01, bateria BTRY-WS5X-24MA-01, ładowarki SAC-WS5X-4S24-01 / 20S24-01, przewód CBL-WS5X-USBA-01, zasilacze 50 W / 108 W, przewody DC 388 / 381, USB EU. Europejski przewód AC wykorzystuje istniejącą kartę TAKMA.

Zdjęcia wspólnych akcesoriów o identycznym PN pochodzą z katalogu WS50. Zgodności z WS501-R nie wywnioskowano ze zdjęć — potwierdza ją aktualna instrukcja WS501/WS501 RFID. Nie dodano ładowarek ani baterii 1300 mAh.

CBL-WS5X-USBA-01 to przewód USB-A 1,2 m. Nie użyto zdjęcia podobnego CBL-WS5X-USB-01 z gniazdem USB-C.

Dodatkowe anteny wymagają doboru pasma, dłoni i odpowiedniego uchwytu. W opisie podano warunek doboru; nie utworzono niezweryfikowanych zestawów.

## Dystrybucja i cena

Sprawdzono trzy integracje. Terminal: BlueStar 1809,42 EUR netto zakupu / 9 szt.; Jarltech 1809,42 EUR / 10 szt.; Ingram 8216,11 PLN / 0 szt. Reguły istniejącej integracji dają 8690,12 PLN netto sprzedaży (EUR/PLN 4,3661, mnożnik terminali 1,10). Dodano jawne rozpoznanie slugu WS501-R do reguł cenowych terminali Zebra.

Wszystkie sześć nowych PN akcesoriów ma cenę. Stacje, bateria i ładowarki mają fizyczny stan 0; przewód USB jest dostępny. Ceny i dostępność kart pochodzą z istniejącego /api/stock i listy rfidTerminalAccessories. Dostaw w drodze nie doliczamy do stanu fizycznego prezentowanego klientowi.

## Wygląd i dokumenty

Zachowano istniejące komponenty. Dla jednego PN tabela zachowuje wyłącznie PN, cenę, stan i akcje; nie powtarza stałych parametrów. Akcesoria: pierwszy rząd 4 szt., rozwijanie do 12 i zwijanie do 4. Pliki PDF są lokalne; pochodzenie i SHA256 w document-sources.json. Zdjęcia w photo-sources.json; pomiar skali względem MC3400 i TC53e-RFID w photo-measurements.json. Pole galerii 584 × 584 przy szerokości okna 1440 px.

## Kontrole

TypeScript i lint bez błędów. Przeglądarka: H1, meta/OG/Twitter, śródtytuły, schemat Product z UHF i konkretnymi parametrami, akcesoria 4→12→4, telefon 390 px bez przepełnienia. Wszystkie nowe linki produktowe i identyfikatory akcesoriów istnieją. Dokumenty: PDF, HTTP200, application/pdf.


## Korekta wyglądu po uwagach użytkownika

Linki w opisie WS501-R pozostają zwykłym tekstem w akapitach. Mają kolor niebieski (#2563eb), grubość 600 i nie mają podkreślenia. Użyto istniejącego renderera LinkedText; klasy są ograniczone do opisu WS501-R. Brak kafelków, ramek i dodatkowych przycisków. Adresy produktów pozostają bez zmian.

W sekcji akcesoriów WS501-R zastosowano opcjonalną normalizację widocznego obiektu. Nie zmieniono proporcji pola zdjęcia ani siatki. Pozostałe karty nie otrzymują flagi uniformImage; test MC3330xR i TC53e-RFID potwierdził brak zmiany transformacji. Pomiar granic PNG uwzględnia kanał alfa, aby przezroczyste tło nie było traktowane jako produkt. Dla 12 gotowych obrazów w polu 286 × 215–216 px widoczny najdłuższy bok ma 175–176 px. Raport: accessory-card-measurements.json.

Sprawdzono wszystkie 12 kafli po rozwinięciu, działanie 4→12→4, osiem linków tekstowych w akapitach, bez podkreślenia oraz widok 390 px bez przepełnienia. TypeScript bez błędów. Lint: istniejące, niezwiązane ostrzeżenie o img w page.tsx:808; brak nowych ostrzeżeń. Kontrola geometrii dla wszystkich 12 plików przy proporcjach 1:1 i 4:3 potwierdza wyśrodkowanie i brak przycięcia.
