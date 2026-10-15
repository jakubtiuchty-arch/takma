# Etykiety RFID Zebra — wdrożenie 15.10.2026

Zakres: 25 PN z potwierdzonym stanem PL/EU, 21 kart, bez sampli i bez wariantów FCC. Odrzucono dostępny 10026770 (FCC). Nie dodawano PN bez bieżącego zapasu.

## Oferta i integracja

Ceny i zapasy korzystają z lookupUnifiedStock, wspólnego źródła SSR, API, koszyka i schematu ProductGroup. Rejestracja jako etykiety obejmuje marżę 15%. Wpisy cache utworzone przed rejestracją PN z marżą 10% są odświeżane. Cena sprzedaży dotyczy rolki. BlueStar ma istniejącą korektę pakietową z porównaniem do ceny jednostkowej Ingram/Jarltech oraz kotwicy katalogowej. Nie kopiowano cen zakupu do katalogu.

## Treść i zgodność

Ścisły podział na rodzinę, materiał i klasę rolki. Warianty tej samej rodziny mają w tabeli tylko różniące się parametry. Stałe dane są w specyfikacji. Podlinkowano drukarki, zachowano wymaganie T5 On-Metal, adapterów gilz i limitów mobilnych rolek. Zestawienie stanowi dobór dokumentacyjny, bez deklaracji fizycznego testu każdego PN.

Rozbieżności w katalogu PDF i opisach portalu zachowano poniżej. Opis klienta korzysta z dokładnego opisu PN, bez notatek o źródłach. Przy konfliktach wkładki BT781 wskazano UCODE 8/9 bez fałszywej precyzji. PN ZIPRD3017407 ma TT mimo prefiksu ZIPRD.

## Wygląd i zdjęcia

Użyto ProductGallery, ProductGrid, VariantsTable, RelatedProducts, SubcategoryPage i standardowych filtrów. Nie zmieniano proporcji kafelków ani struktury galerii.

Wzorce: /produkt/zebra-z-ultimate-3000t-white/51x32/880247-031D i /produkt/zebra-z-select-2000d/102x152/200963. Oba pola galerii: 576,5 × 576,5 px przy tym samym widoku. Udział widocznego produktu w źródle: 40,3% i 67,1% dłuższego wymiaru. Odpowiednie pola galerii mają padding 16 px.

Źródła obrazów: portal producenta. Grafiki wkładek mają alty wyraźnie odróżniające rozmiar anteny od całej etykiety. Dwa obrazy dopasowano w Imagen: ZBR2200 i Metal Skin Delta. Ostateczne kadry mają około 53% i 63% zajętości dłuższego wymiaru. Nie użyto metadanych product-image-frames do zmiany układu kafelków.

## Kontrola

Testy: scripts/test-rfid-labels.cjs — 21 kart/25 PN, wyszukiwanie PN, brak FCC/sampli, klasyfikacja do marży etykiet, zgodność warunkowa, różniące się atrybuty, obecność obrazów, unikalne meta i schemat oferty brutto. TypeScript bez błędów. Build produkcyjny lokalny zakończony. Lint: tylko wcześniejsze ostrzeżenia projektu.

Lokalna sieć zwracała niewłaściwy certyfikat T-Mobile dla API BlueStar. Nie wyłączano TLS. Lokalny test ofert zakończono; cache wyłącznie 25 PN odświeżono przez działającą integrację w chmurze. Odczyt chmurowy ponownie potwierdził zapas wszystkich 25 PN. Końcowa kontrola na wdrożeniu Vercel.

## Źródła per karta

### zebra-etykiety-rfid-bt713-pp-przemyslowe

PN: ZIPRT3016014

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0016/ziprt3016014-photography-product-boingtech-bt713-rfidinlay-Supplies.png

- https://solutionspathway.zebra.com/xxx/ziprt3016014/product/1-21XZK22J

- Brak stwierdzonych rozbieżności. Dobór wymaga kalibracji RFID.

### zebra-etykiety-rfid-bt781-pp-przemyslowe

PN: ZIPRT3016343

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0016/ziprt3016343-photography-product-boingtech-bt781-rfidinlay-supplies.png

- https://solutionspathway.zebra.com/xxx/ziprt3016343/product/1-23TYJIGQ

- Brak stwierdzonych rozbieżności. Dobór wymaga kalibracji RFID.

### zebra-etykiety-rfid-bt781-pet-przemyslowe

PN: ZIPRT3016946

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0016/ziprt3016946-photography-product-boingtech-bt781-rfidinlay-supplies.png

- https://solutionspathway.zebra.com/xxx/ziprt3016946/product/1-26AM3V2Z

- Brak stwierdzonych rozbieżności. Dobór wymaga kalibracji RFID.

### zebra-etykiety-rfid-bt573-pp-przemyslowe

PN: ZIPRT3017401

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0017/polypro3000t-gloss-supplies-photography-product.jpg

- https://solutionspathway.zebra.com/xxx/ziprt3017401/product/1-2AH4AU9A

- Etykiety/rolkę: portal 4523; katalog 4500.

### zebra-etykiety-rfid-zbr2000-przemyslowe

PN: ZIPRT3014647

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0016/ziprt3014647-photography-product-zbr2000-rfidinlay-supplies.png

- https://solutionspathway.zebra.com/xxx/ziprt3014647/product/1-18Q8ZH4E

- Brak stwierdzonych rozbieżności. Dobór wymaga kalibracji RFID.

### zebra-etykiety-rfid-zbr2100-przemyslowe

PN: ZIPRT3017402

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0019/zselect2000t-desktop-25.4-roll-supplies-photography-product.jpg

- https://solutionspathway.zebra.com/xxx/ziprt3017402/product/1-2AHKS4NA

- Etykiety/rolkę: portal 4022; katalog 4000.

### zebra-etykiety-rfid-zbr2200-przemyslowe

PN: ZIPRT3019418, ZIPRT3019419

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0022/zbr2200-rfid-inlay-supplies-photography-product.jpg

- https://solutionspathway.zebra.com/xxx/ziprt3019418/product/1-2KZ8HQ9B
- https://solutionspathway.zebra.com/xxx/ziprt3019419/product/1-2KZ91G66

- Brak stwierdzonych rozbieżności. Dobór wymaga kalibracji RFID.
- Brak stwierdzonych rozbieżności. Dobór wymaga kalibracji RFID.

### zebra-etykiety-rfid-zbr4000-przemyslowe

PN: ZIPRT3014477, ZIPRT3014478

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0016/ziprt3014477-photography-product-zbr4000-rfidinlay-supplies.png

- https://solutionspathway.zebra.com/xxx/ziprt3014477/product/1-175ZUHVU
- https://solutionspathway.zebra.com/xxx/ziprt3014478/product/1-18Q94CQW

- Brak stwierdzonych rozbieżności. Dobór wymaga kalibracji RFID.
- Brak stwierdzonych rozbieżności. Dobór wymaga kalibracji RFID.

### zebra-etykiety-rfid-bt781-pp-biurkowe

PN: ZIPRD3016344

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0016/ziprd3016344-photography-product-boingtech-bt781-rfidInlay-supplies.png

- https://solutionspathway.zebra.com/xxx/ziprd3016344/product/1-23TY7A6B

- Brak stwierdzonych rozbieżności. Dobór wymaga kalibracji RFID.

### zebra-etykiety-rfid-bt573-pet-biurkowe

PN: ZIPRD3017407

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0020/ziprd3017407-photography-product-boingtech-bt0573-rfidInlay-supplies.png

- https://solutionspathway.zebra.com/xxx/ziprd3017407/product/1-2AOFLFQ0

- Etykiety/rolkę: portal 1015; katalog 1000.

### zebra-etykiety-rfid-bt793-biurkowe

PN: ZIPRD3016390

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0017/zselect2000d-desktop-25.4-roll-supplies1-photography-product.jpg

- https://solutionspathway.zebra.com/xxx/ziprd3016390/product/1-23WH64R6

- Wymiar: portal 54 × 35 mm; katalog 54 × 34 mm. Potwierdzić rysunek materiału. Etykiety/rolkę: portal 750; katalog 700.

### zebra-etykiety-rfid-zbr2000-biurkowe

PN: ZIPRD3014658

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0016/ziprd3014658-photography-product-zbr2000-rfidinlay-supplies.png

- https://solutionspathway.zebra.com/xxx/ziprd3014658/product/1-18Q94CQA

- Brak stwierdzonych rozbieżności. Dobór wymaga kalibracji RFID.

### zebra-etykiety-rfid-zbr2100-biurkowe

PN: ZIPRD3017409, ZIPRD3017411

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0020/ziprd3017409-photography-product-zbr2100-rfidinlay-supplies.png

- https://solutionspathway.zebra.com/xxx/ziprd3017409/product/1-2AOFNHXQ
- https://solutionspathway.zebra.com/xxx/ziprd3017411/product/1-2AOH4BN6

- Etykiety/rolkę: portal 508; katalog 500.
- Etykiety/rolkę: portal 203; katalog 200.

### zebra-etykiety-rfid-zbr2100-mobilne

PN: ZIPRM3017413, ZIPRM3017414

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0020/ziprm3017413-photography-product-zbr2100-rfidinlay-supplies.png

- https://solutionspathway.zebra.com/xxx/ziprm3017413/product/1-2AOI2E2B
- https://solutionspathway.zebra.com/xxx/ziprm3017414/product/1-2AQMQUEA

- Etykiety/rolkę: portal 184; katalog 180. Średnica gotowej rolki nie jest podana przy PN. Sprawdzić limit wybranej drukarki.
- Etykiety/rolkę: portal 77; katalog 75. Średnica gotowej rolki nie jest podana przy PN. Sprawdzić limit wybranej drukarki.

### zebra-etykiety-rfid-silverline-micro-ii

PN: 10026763

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0020/silverline-blade-ii-micro-ii-slim-ii-classic-ii-frontfacing-supplies-photography-product.jpg

- https://solutionspathway.zebra.com/xxx/10026763/product/1-225YEYCF

- Wymaga konfiguracji On-Metal. Zwykła drukarka RFID nie stanowi potwierdzenia zgodności.

### zebra-etykiety-rfid-silverline-slim-ii

PN: 10026765

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0020/silverline-blade-ii-micro-ii-slim-ii-classic-ii-frontfacing-supplies-photography-product.jpg

- https://solutionspathway.zebra.com/xxx/10026765/product/1-225YPCKT

- Wymaga konfiguracji On-Metal. Zwykła drukarka RFID nie stanowi potwierdzenia zgodności.

### zebra-etykiety-rfid-silverline-blade-ii

PN: 10026767

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0020/silverline-blade-ii-micro-ii-slim-ii-classic-ii-frontfacing-supplies-photography-product.jpg

- https://solutionspathway.zebra.com/xxx/10026767/product/1-22HU37HJ

- Kategoria wycofana mimo statusu Production — potwierdzić dostępność Wymaga konfiguracji On-Metal. Zwykła drukarka RFID nie stanowi potwierdzenia zgodności.

### zebra-etykiety-rfid-silverline-blade-ii-plus

PN: 10039973

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0020/silverline-blade-ii-micro-ii-slim-ii-classic-ii-photography-product-front-facing-supplies-photography-product.jpg

- https://solutionspathway.zebra.com/xxx/10039973/product/1-2B8FVN61

- Wymaga konfiguracji On-Metal. Zwykła drukarka RFID nie stanowi potwierdzenia zgodności.

### zebra-etykiety-rfid-silverline-classic-ii

PN: 10026769

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0020/silverline-classic-ii-stacked-left-front-facing-supplies-photography-product.jpg

- https://solutionspathway.zebra.com/xxx/10026769/product/1-22XPL1HI

- Wymaga konfiguracji On-Metal. Zwykła drukarka RFID nie stanowi potwierdzenia zgodności.

### zebra-etykiety-rfid-metal-skin-delta

PN: ZIPRT3019300

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0024/xerafy-metal-skin-delta-rfidsupplies-photography-product.png

- https://solutionspathway.zebra.com/xxx/ziprt3019300/product/1-2K84J74C

- Wymaga konfiguracji On-Metal. Zwykła drukarka RFID nie stanowi potwierdzenia zgodności. Metal Skin: katalog umieszcza materiał w sekcji On-Metal. Dokładną konfigurację i minimalny skok potwierdzić.

### zebra-etykiety-rfid-metal-skin-titanium

PN: ZIPRT3019299

Obraz źródłowy: https://www.zebra.com/content/dam/zebra_dam/global/photography/product/0024/xerafy-metal-skin-titanium-supplies-photography-product.png

- https://solutionspathway.zebra.com/xxx/ziprt3019299/product/1-2K83X83R

- Wymaga konfiguracji On-Metal. Zwykła drukarka RFID nie stanowi potwierdzenia zgodności. Metal Skin: katalog umieszcza materiał w sekcji On-Metal. Dokładną konfigurację i minimalny skok potwierdzić.

