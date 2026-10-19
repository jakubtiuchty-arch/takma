# TSL 3166 — weryfikacja przed publikacją, 19.10.2026

## PN i parametry

- 3166-ES1-EU: ETSI Lower Band 865–868 MHz, skaner 1D/2D.
- 3166-EX1-EU: to samo pasmo, bez skanera kodów.
- Oba: Impinj E710, EPC Gen 2 v2, nominalny odczyt 9 m / zapis 4 m (zależne od warunków), do 1200 znaczników/s, IP67, upadki 1,8 m, Bluetooth 4.2 compliant, pamięć 32 GB.
- Dane baterii bieżącego czytnika: 10,8 V, 3350 mAh, 36,2 Wh. Nie przenosimy ich na starszy zapasowy PN 1166-00-BA-3000.
- Gwarancja: 12 miesięcy przy prawidłowym użytkowaniu, karta katalogowa v1.27.
- Źródła: https://www.tsl.com/products/3166/ oraz https://www.tsl.com/downloads/tsl-products/3166-downloads/ .
- Model nie figuruje na https://www.tsl.com/end-of-life/ . Nie dodajemy wycofanego 2128P.

## Akcesoria i zawartość

Potwierdzenie: oryginalny dokument Ordering Information v1.02 (2025), skopiowany na TAKMA jako /instrukcje/tsl-3166-wyposazenie-en.pdf.

- Czytnik zawiera baterię. Nie zawiera telefonu, mocowania ani ładowania.
- 1166-CRD-01-KIT: stacja czytnika, zasilacz 65 W i przewód Mini USB. Oddzielny przewód IEC-1.8M-EU jest wymagany.
- 1166-00-BA-3000: bateria do 1166 i 3166.
- 1166-BC-EU: ładowarka wyjętej baterii z zasilaczem i przewodem EU, bez baterii.
- Dodatkowe potwierdzenia: https://www.tsl.com/products/1166-3166-dock/ , https://www.tsl.com/products/spare-battery-for-the-1166-uhf-reader/ , https://www.tsl.com/products/1166-external-battery-charger/ .
- Nie podpinamy adapterów terminali bez potwierdzonego konkretnego PN i urządzenia. Nie zakładamy zamienności ePop-Loq i Zebra eConnex.

## Dystrybucja

Odpytano BlueStar, Ingram i Jarltech dla wszystkich sześciu PN. Wszystkie znaleziono w BlueStar; pozostałe źródła bez ofert. Dane kosztowe EUR pozostają poza publiczną dokumentacją. Ceny sprzedaży PLN i faktyczne stany w stock-check-2026-10-19.json. Nie liczymy dostaw oczekiwanych jako fizycznego stanu. Karty i warianty korzystają ze wspólnego API stock, NBP i standardowej marży, tak jak istniejące modele.

## Dokumenty

- /datasheets/tsl-3166-en.pdf: oryginalna karta v1.27, 16.10.2026, 6 stron.
- /instrukcje/tsl-3166-wyposazenie-en.pdf: oryginalny dokument PN/akcesoriów v1.02, 2 strony.
- Pełnej instrukcji nie dodano: pobranie zostało zablokowane w przeglądarce. Nie obchodzono blokady. Oba opublikowane pliki są lokalne i mają sprawdzoną treść.

## Zdjęcia i wygląd

Imagen: zachowano konstrukcję i detale, poprawiono ostrość, tło oraz marginesy. Zdjęcie główne pokazuje sam czytnik, bez opcjonalnego telefonu. Na zdjęciu ładowarki usunięto baterię, która nie jest częścią zestawu; sprawdzono trzy styki wejścia C14. Przewód ma wtyk EU i IEC C13.

Porównano wizualnie z Zebra RFD40 Standard i Datalogic 3138 RFID. Przy szerokości okna 1280 px wszystkie karty mają pole główne 584 × 584 px. Fizyczny TSL zajmuje 59,5% wysokości i 60% szerokości, celowo mniej niż wzorce (82,7% i 77,2% wysokości) zgodnie z życzeniem pomniejszenia. Drugie zdjęcie ma 64,8% wysokości. Pomiary ciemnego obiektu bez białych marginesów w image-measurements.json.

Kafelki akcesoriów zachowują istniejący format 4:3 i wspólną normalizację obiektu do 66%. Cztery akcesoria w jednym rzędzie. Bez nowych wzorców układu. Linki opisu: rgb(37,99,235), grubość 600, bez podkreślenia. Kategoria ma 8 uchwytów, pierwsze 5 to Zebra. Filtr producenta TSL zwraca 1 urządzenie i 4 akcesoria.

## Kontrole

TypeScript, ESLint, kontrola linków katalogowych, lokalnych plików i danych stock. Tabela wariantów ma wyłącznie różniący się parametr skanera kodów. Uzupełniono regułę middleware o nowy prefiks tsl-, aby uniknąć przekierowania na starą stronę produktu.
