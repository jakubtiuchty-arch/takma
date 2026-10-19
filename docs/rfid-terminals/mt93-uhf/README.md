# Newland MT93 Megattera Pro UHF — weryfikacja 2026-10-19

## Katalog i zgodność

- Główna karta producenta: https://www.newland-id.com/en/products/mobile-computers/mt93-megattera-pro-uhf . Europejski PN NLS-MT9356-W4-UHF1, Android 13 GMS/AER, 4/64 GB, UHF Impinj E710, ETSI 865,6–867,6 MHz. Jeden wariant; brak zbędnej tabeli porównawczej.
- Specyfikacja producenta udostępnia EPC Class 1 Gen 2. Nie powielamy literówki ISO 18000-BC z tabeli HTML/PDF. Zasięg jest warunkowy: >12 m wewnątrz / >8 m na zewnątrz dla Alien 9740, nie gwarancja wyniku na dowolnym towarze.
- Gwarancja terminala: 2 lata według strony producenta; baterii BTY95LU: 3 miesiące; stacji: 1 rok.
- Dokładne źródła dokumentów i zdjęć: sources.json. Pobranie 2026-10-19. Oryginalne PDF-y zachowane bez zmian: karta katalogowa (4 strony), instrukcja rodziny MT93 V1.0 (77 stron), skrócona instrukcja MT93 (1 strona), Battery Care 2026.1 (4 strony), QSG-MCD93-U-V1.1 (1 strona). Instrukcje rodziny są opisane jako dokumenty rodziny, nie dedykowany podręcznik RFID.
- Potwierdzone na stronie modelu: BTY95LU, NLS-MCD93-U-01, SPMT93, ADP710, CBL-TC-N7, NLS-CPA-UNIV. AD60-D-M potwierdzony na stronie stacji NLS-MCD93-U-01. Do 4 stacji; pojedyncza ADP710, połączone AD60-D-M. Bez dublowania istniejących kart akcesoriów.
- W komplecie terminala: bateria, uchwyt UHF, przewód USB-C, zasilacz z wymiennymi wtykami, ochrona ekranu, pasek. Stacja osobno. Nie podpinamy niepotwierdzonych kabur/osłon ani drukarek jako gwarantowanej zgodności etykiet.

## Ceny i stany

Bezpośrednie odczyty Ingram, BlueStar, Jarltech w plikach JSON. W chwili sprawdzenia terminal: Jarltech 779,35 EUR netto zakupu, 7 szt.; Ingram 3538,83 PLN netto zakupu, 3 szt. Suma fizycznych stanów 10 szt. Cena sklepu z istniejącego mechanizmu unified-stock: 3746,51 PLN netto (zmienna). Nie zmieniono przelicznika ani marż sklepu. Odświeżono wyłącznie cache 8 potwierdzonych PN. CBL-TC-N7 nie ma obecnie potwierdzonej oferty; nie dodano wymyślonej ceny. Pozostałe części otrzymują ceny/stany przez obecne API. Zapasowa bateria i ADP710 mają stan zerowy.

## Zdjęcia i wygląd

Oryginalne zdjęcia katalogowe miały artefakty przezroczystości. Obróbka w image_gen (Imagen), bez nowych akcesoriów. Główne pokazuje ekran i sam terminal, bez opcjonalnej stacji. Pozostałe: bok i antena. Trzy nowe akcesoria: bateria, stacja, szkło. Wyniki i identyfikatory w image-manifest.json. Pliki produkcyjne: public/images/products/mt93-uhf-{main,side,antenna,battery,cradle,screen}-v1.webp.

Prompty: wierne czyszczenie odpowiedniego zdjęcia źródłowego; zachowanie konstrukcji, złączy, przycisków, proporcji i perspektywy; usunięcie artefaktów; białe tło i marginesy. Zdjęcie główne: usunięcie wyłącznie opcjonalnej stacji ze zdjęcia zestawu, z drugim zdjęciem kompletnego urządzenia jako odniesieniem konstrukcji. Brak ręki lub dodatków. Cele kadrowania 76% dla terminala / 66% dla akcesoriów. Skala rzeczywista sprawdzona w przeglądarce.

Pomiar w measurements.json: pole główne 584×584, wysokość widocznego Newlanda 78,4%, TC22R 77,6%, MC3330xR 77,1%. Bez licznika galerii. Akcesoria: wspólne pole 286×214,5, fizyczna długa krawędź ok. 65–67% wysokości pola, porównane z RFD40 Standard i Datalogic 3138. Zachowany istniejący komponent, 4 elementy + rozwijanie do 7 i zwijanie. Nie zmieniono standardowych kart bez uniformImage. Przejrzano React checklist: brak nowych hooków, zapytań lub zależności; zmiana dotyczy istniejącej ścieżki wyświetlania zdjęć.

## Kontrole przed pushem

TypeScript bez błędów, lint bez nowych ostrzeżeń (istniejące ostrzeżenie img na stronie produktu). Przeglądarka: Product/InStock, PN, cena dodatnia, metaopis, wszystkie linki w opisie 200, linki niepodkreślone i semibold, lokalne PDF-y 200/application/pdf/%PDF-, akcesoria 4→7→4, mobilny 390 px bez przewijania poziomego, kategoria 7 modeli i sześć Zebr na górze, /admin/etykiety-na-magazynie przekierowuje do logowania. Wyniki w local-results.json. Wdrożenie wyłącznie przez Git na claude/takma-frontend-build-RrM9E.
