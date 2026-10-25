# ProGlove — lokalne karty produktowe, 24.10.2026

Zakres: MARK 3, MARK Basic, MARK Display, LEO, MAI oraz redakcja tekstów MARK 2. Wyłącznie lokalnie; bez publikacji w tej turze. Górna część karty, ceny, dostępność, galeria i natywne specyfikacje/FAQ/pliki/akcesoria pozostają bez zmian.

## Źródła

Strony producenta: https://proglove.com/products/hardware/mark-3/, https://proglove.com/products/hardware/mark-basic/, https://proglove.com/products/hardware/mark-display/, https://proglove.com/products/hardware/leo/, https://proglove.com/products/wearable-companion/mai/. Dane sprawdzono z istniejącymi lokalnymi kartami katalogowymi public/datasheets/proglove-{mark-3,mark-basic,mark-display,leo,mai}.pdf i katalogiem produktów.

Oryginalne filmy/GIF-y producenta zapisano lokalnie jako H264 (do 1600 px, faststart). Przezroczystość zdjęć zachowana w WebP. Nie generowano urządzeń ani animacji. Responsywne duplikaty tego samego filmu pominięto. Wstęp Basic i MAI odtwarza się raz; krótkie obroty, prezentacje funkcji i film magazynowy MAI są zapętlone. ProductMotion respektuje reduced-motion, pauzuje poza widokiem i ładuje plik przy zbliżeniu do sekcji.

## Różnice i warunki

- MARK 3: M010, 39 g, IP65, −20…+50°C, Multi Range orientacyjnie 10 cm–6 m. Przykłady zasięgów z PDF, bez obietnicy 6 m dla każdego kodu. Index Trigger od −5°C; do chłodni Hand Strap lub Reel.
- Basic: M007 Standard Range i M011 Multi Range; interaktywne porównanie PN i zakresów. 39–40 g, IP54, około 8000 skanów.
- Display: M008/M006, e-paper 1,54 cala bez dotyku, 48 g, IP54. Wyraźnie wskazana integracja ekranu i brak HID.
- LEO: 35 g, IP43, odczyty z bliska, około 4000 skanów, ładowanie około godziny.
- MAI: 1,95 cala dotyk, 4 przyciski, Wi-Fi 6/BLE5.4, IP65, 1250 mAh. Masa 68 g z technicznego PDF zamiast marketingowych 65 g. Pięć autentycznych przykładowych ekranów. Obsługa zadań wymaga konfiguracji/integracji. Osobne akcesoria Gen 2 G020/C021; starsze stacje i mocowania nie są zgodne.

## Weryfikacja

ESLint zmienionych komponentów, scoped TypeScript i git diff --check poprawne. Pięć kart na szerokości 390 px: scrollWidth 390, bez poziomego przewijania. Przełączniki Basic/Display i pięć ekranów MAI sprawdzone. Odtwarzanie animacji MARK 3 (obrót, zasięg, pogoda), Display (obrót/ekran/parowanie), LEO oraz obu filmów MAI sprawdzone w przeglądarce (readyState 4, brak błędu). Basic i animacja parowania również sprawdzone. Widoczność nagłówków i rozmiary autentycznych zdjęć skorygowane. Podglądy w outputs folderu rozmowy.

## Pochodzenie mediów

### mark-3

- `mark3-device-background.webp` — https://proglove.com/wp-content/uploads/2023/02/mark3-device-background.jpg
- `MARK3-Display-Distance-Scanner.mp4` — https://proglove.com/wp-content/uploads/2023/03/MARK3-Display-Distance-Scanner.mp4
- `MARK3-MultiRange-3-Seasons_3.mp4` — https://proglove.com/wp-content/uploads/2023/03/MARK3-MultiRange-3-Seasons_3.mp4
- `MARK3-scanner_1.mp4` — https://proglove.com/wp-content/uploads/2023/03/MARK3-scanner_1.mp4
- `mark3-benefits-build-to-wear.webp` — https://proglove.com/wp-content/uploads/2023/03/mark3-benefits-build-to-wear.png

### mark-basic

- `mark-basic-hero-section-video-1920X1040.mp4` — https://proglove.com/wp-content/themes/proglove/videos/mark-basic-hero-section-video-1920X1040.mp4
- `mark-basic-2-connectivity-gif.mp4` — https://proglove.com/wp-content/uploads/2024/01/mark-basic-2-connectivity-gif.gif
- `mark-basic-2-tab-image-2-big.webp` — https://proglove.com/wp-content/uploads/2024/01/mark-basic-2-tab-image-2-big.png
- `mark-basic-2-tab-image.webp` — https://proglove.com/wp-content/uploads/2024/01/mark-basic-2-tab-image.png
- `mark-basic-image.webp` — https://proglove.com/wp-content/uploads/2024/03/mark-basic-image.png

### mark-display

- `Connectivity-desktop-1.mp4` — https://proglove.com/wp-content/uploads/2023/03/Connectivity-desktop-1.gif
- `MARK-Display-scanner_1.mp4` — https://proglove.com/wp-content/uploads/2023/03/MARK-Display-scanner_1.mp4
- `MARKDisplay-rotation.mp4` — https://proglove.com/wp-content/uploads/2023/03/MARKDisplay-rotation.mp4
- `display-about-device-image.webp` — https://proglove.com/wp-content/uploads/2023/03/display-about-device-image.jpg
- `mark-display-benefits-accuracy.webp` — https://proglove.com/wp-content/uploads/2023/03/mark-display-benefits-accuracy.png

### leo

- `leo-benefit-image-1.webp` — https://proglove.com/wp-content/uploads/2023/02/leo-benefit-image-1.png
- `MARK-Leo-scanner_1.mp4` — https://proglove.com/wp-content/uploads/2023/03/MARK-Leo-scanner_1.mp4
- `leo-about-device-image.webp` — https://proglove.com/wp-content/uploads/2023/03/leo-about-device-image.jpg
- `mark-leo-benefits-use.webp` — https://proglove.com/wp-content/uploads/2023/03/mark-leo-benefits-use.jpg
- `mark-leo-benefits-wearit.webp` — https://proglove.com/wp-content/uploads/2023/03/mark-leo-benefits-wearit.png

### mai

- `mai-section-one-v2.mp4` — https://proglove.com/wp-content/themes/proglove/videos/mai-section-one-v2.mp4
- `mai-section-two-v2.mp4` — https://proglove.com/wp-content/themes/proglove/videos/mai-section-two-v2.mp4
- `mai-section-eight-image-five.webp` — https://proglove.com/wp-content/uploads/2025/03/mai-section-eight-image-five.png
- `mai-section-eight-image-four.webp` — https://proglove.com/wp-content/uploads/2025/03/mai-section-eight-image-four.png
- `mai-section-eight-image-one.webp` — https://proglove.com/wp-content/uploads/2025/03/mai-section-eight-image-one.png
- `mai-section-eight-image-three.webp` — https://proglove.com/wp-content/uploads/2025/03/mai-section-eight-image-three.png
- `mai-section-eight-image-two.webp` — https://proglove.com/wp-content/uploads/2025/03/mai-section-eight-image-two.png
- `mai-section-five-image-v3.webp` — https://proglove.com/wp-content/uploads/2025/03/mai-section-five-image-v3.png
- `mai-section-five-warehouse-image.webp` — https://proglove.com/wp-content/uploads/2025/03/mai-section-five-warehouse-image.png
- `mai-section-four-image-one-v2.webp` — https://proglove.com/wp-content/uploads/2025/03/mai-section-four-image-one-v2.png
- `mai-section-four-image-three.webp` — https://proglove.com/wp-content/uploads/2025/03/mai-section-four-image-three.png
- `mai-section-four-image-two.webp` — https://proglove.com/wp-content/uploads/2025/03/mai-section-four-image-two.png
- `mai-section-seven-image-scaled.webp` — https://proglove.com/wp-content/uploads/2025/03/mai-section-seven-image-scaled.jpg
- `mai-section-six-image.webp` — https://proglove.com/wp-content/uploads/2025/03/mai-section-six-image.jpg
- `mai-section-three-bg-image.webp` — https://proglove.com/wp-content/uploads/2025/03/mai-section-three-bg-image.jpg

## Poprawa zdjęcia MAI — 25.10.2026

Zdjęcie hero mai-section-eight-image-one miało 212 × 255 px; API mediów producenta potwierdziło brak większego oryginału tego ujęcia. Przygotowano rekonstrukcję wysokiej rozdzielczości z imagegen na podstawie dokładnie tego zdjęcia, 1143 × 1376 px, z przezroczystością i zachowaniem frontalnego ujęcia, czterech przycisków oraz układu ekranu. Nowy plik mai-front-hq.webp dotyczy hero. Oryginały zachowane. Kontrola wizualna lokalnie; bez publikacji produkcyjnej.

## Audyt rozdzielczości ProGlove — 25.10.2026

Sprawdzono wszystkie statyczne media sześciu landingów i rozmiary galerii produktów. Pięć przykładowych ekranów MAI miało 212×255 / 256×212 px: widok pobierania korzysta teraz z mai-front-hq, pozostałe cztery z odrestaurowanych plików mai-screen-*-hq (około 1376 px dłuższego boku, przezroczystość). Każdy odtworzono oddzielnie w imagegen z dokładnym ekranem jako referencją; zachowano układ i treść ekranu oraz cztery przyciski. Nie podmieniono jednego ekranu na drugi.

Dodatkowo wymieniono zdjęcia hero Basic (540×540) i LEO (667×507 z dużymi marginesami) na mark-basic-front-hq 1222×1287 i leo-front-hq 1003×1568. Oryginały zachowane. Kontrola konturów, oznaczeń, obudowy i proporcji z referencjami oraz w lokalnej przeglądarce.

MARK 2: hero/porównanie 1280×960, zdjęcie pracy 1440×600, zdjęcia mocowań 800×800. MARK 3: hero 1280×960 i zdjęcie 1406×600. Display: hero 1280×960 i zdjęcie pracy 1440×600. Basic: pozostałe zdjęcia 1400×1400 i 800×891. LEO: pozostałe zdjęcia 1440×600 i 1280×960. MAI: zdjęcie pracy 1440×1098. Pliki te mają wystarczającą rozdzielczość dla widocznego obiektu i nie wymagają rekonstrukcji. Galeryjne obrazy produktów/akcesoriów mają 800×800. Nieużywane małe obrazki źródłowe nie są renderowane i nie były przerabiane. Plakatów oryginalnych animacji nie zastępowano generowanymi zdjęciami.

Sprawdzono pięć zakładek MAI i nowe zdjęcia hero Basic/LEO w dużym widoku. Wszystkie zmiany lokalne, bez publikacji produkcyjnej.
