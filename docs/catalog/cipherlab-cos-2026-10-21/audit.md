# CipherLab Proprietary Systems (cOS), 21.10.2026

## Zakres i źródła

Dodano karty rodzin 8000, 8200, 8300 i 8600. Nie są to urządzenia Android. Nie przypisano bez potwierdzenia europejskich PN, cen, zapasu ani zawartości zestawu. Karty są `quoteOnly`, z istniejącym formularzem zapytania.

- Lista czterech rodzin: https://www.cipherlab.com/en/product-c56006/Proprietary.html
- 8000: https://www.cipherlab.com/en/product-256774/Pocket-sized-Mobile-Computers-8000-Series.html
- 8200: https://www.cipherlab.com/en/product-248147/Enterprise-Mobile-Computer-8200-Series.html
- 8300: https://www.cipherlab.com/en/product-256773/Light-Industrial-Mobile-Computer-8300-Series.html
- 8600: https://www.cipherlab.com/en/product-249335/Industrial-Mobile-Computer-8600-Series.html
- Strona zbiorcza nadal wymienia 8400, ale jej odnośnik zwraca 404. Osobna lista Proprietary zawiera tylko cztery rodziny. Lista wycofanych nie rozstrzyga 8400. Nie oznaczono jej arbitralnie jako wycofanej i nie opublikowano niepewnej karty.

PDF-y pobrano 21.10.2026, bez zmian w treści, do public/datasheets/cipherlab-{8000,8200,8300,8600}.pdf:
- https://www.cipherlab.com/files/CipherLab_8000_Mobile_Computer_EN_Brochure.pdf
- https://www.cipherlab.com/files/CipherLab_8200_Mobile_Computer_EN_Brochure.pdf
- https://www.cipherlab.com/files/CipherLab_8300_Mobile_Computer_EN_Brochure.pdf
- https://www.cipherlab.com/files/CPL_8600_Brochure_ALL_EN_CS3_FA_English.pdf

## Dystrybucja

Dla rozpoznanych kandydatów PN wykonano odczyt z istniejącej integracji sklepu oraz osobny odczyt BlueStar:
A8001RSC00001, A8001RSC00002, A8001RSC00005, A8001RSC00006, A8200RSC42VU1, A860SN8R223V1, A8600SNPNUN01, A8300RA000007, A8001RAC00012.

Odpowiedzi nie potwierdziły ofert tych PN. BlueStar zwrócił `found: false`. Kontrola pozytywna BlueStar ZD4A042-30EM00EZ zwróciła `found: true` (1931 szt.); P1112640-031 również `found: true`. Nie jest to dowód, że BlueStar nie dostarcza całej rodziny CipherLab. Brak wyniku API nie oznacza potwierdzonego stanu zero. Nie skopiowano cen innych sklepów. Nie dodano nierozstrzygniętych kandydatów PN jako wariantów handlowych.

Wycena, europejskie PN i konkretne akcesoria wymagają potwierdzonej oferty dystrybutora. Opisy wyjaśniają funkcję stacji i dobór wyposażenia, bez przypisywania niepotwierdzonych części.

## Treści i integracja

- Cztery odrębne intencje: 8000 — kieszonkowa inwentaryzacja; 8200 — ekran 2,1 cala i konfiguracje komunikacji; 8300 — batch i IP65; 8600 — kolorowy ekran i klawiatury modułowe.
- Warianty rodziny opisano warunkowo. Nie przypisano Wi-Fi wszystkim 8200, skanowania QR wszystkim wersjom ani opcjonalnego HF jako wyposażenia standardowego/UHF.
- Kategoria marki wyjaśnia Android/cOS, ma linki do czterech rodzin oraz filtr systemu. Główna kategoria terminali nie opisuje już całej oferty jako Android. Dodano brakujący filtr producenta CipherLab.
- Reguła „Tylko Wi-Fi” wymaga potwierdzenia Wi-Fi w specyfikacji, aby kolektor batch bez radia nie trafiał do tej grupy.
- Poprawiono przekazywanie istniejącego `quoteOnly` do kafelków kategorii marki. Nie pokazują one mylącego „Powiadom” i stanu „Niedostępny”.
- Schema kart rodzin nie udaje MPN numerem wewnętrznym TAKMA. Nie ma fikcyjnych ofert ani ceny 0 zł.

## Zdjęcia

Oryginalne główne fotografie producenta: p-170715-06346.jpg (8000), p-230421-08004.jpg (8200), p-170715-06340.jpg (8300), na cdn.cipherlab.com/comm/upimage/.
8600: front p-170623-01683-430x0.jpg z oficjalnej galerii; poprawa ostrości w image_gen, zachowano budowę i klawiaturę. Finalny WebP zawiera XMP IPTC DigitalSourceType compositeWithTrainedAlgorithmicMedia. Oryginalne materiały zachowano roboczo. Nie wycinano obrazów z PDF.

Pomiary przed publikacją:
- Galeria 576,5 × 576,5 px, widoczny dłuższy bok produktu 484,26 px (84%), tak samo jak istniejące RK26 i RK96.
- Kategoria: pole 293,664 × 220,242 px (4:3), widoczny dłuższy bok 72% wysokości. Cztery nowe obrazy i wzorce RS20/RS36 mają tę samą proporcję. Odległość tytułu od góry kafelka 258,242 px dla wszystkich sześciu.

Kontrola lokalna: TypeScript bez błędów, 4 karty z canonical i pojedynczym H1, Product bez fikcyjnego MPN/oferty, cztery rzeczywiste PDF, filtr cOS 4/Android 7, formularz otwiera się z nazwą kolektora. Nie wysyłano zapytania testowego.

## Współbieżna praca

Osobny checkout i gałąź codex/cipherlab-cos. Przed zmianami pobrano 9 nowszych commitów produkcyjnych do 20d81811 przez fast-forward. Nie zmieniano folderu ani gałęzi roboczej Claude. Przed pushem należy ponownie pobrać gałąź produkcyjną i zachować wszystkie nowsze zmiany.
