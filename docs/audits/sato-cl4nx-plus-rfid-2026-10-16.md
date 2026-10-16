# SATO CL4NX Plus RFID — 2026-10-16

## Zakres

Nowa karta sato-cl4nx-plus-rfid. Dwa zaakceptowane PN europejskie, UHF, RTC i przewód EU. Nie jest to wycofana CL4NX bez Plus. Nie ma osobnej istniejącej karty zwykłej CL4NX Plus w katalogu; tekst tej karty skupia się na RFID.

| PN | Konfiguracja | Cena sprzedaży netto PLN | Stan EU |
|---|---|---:|---:|
| WWCLP172ZNAREU | 203 dpi, UHF, RTC, bez WLAN / On-Metal kit | 15004,87 | 29 |
| WWCLP272ZWPREU | 305 dpi, UHF, RTC, WLAN, On-Metal kit | 19546,16 | 4 |

Źródła ofert: BlueStar i publiczny /api/stock TAKMA; odczyt w dniu audytu. Cena i stan aktualizowane przez istniejącą integrację, także dla SEO/JSON-LD. Brak statycznych cen awaryjnych. Warianty nie są łączone w jeden identyczny zestaw wyposażenia. Tabela: wyłącznie rozdzielczość, Wi-Fi i zestaw On-Metal.

## Akcesoria

| PN | Część | Cena sprzedaży netto PLN | Stan EU |
|---|---|---:|---:|
| R37901800 | Głowica 203 dpi | 2379,11 | 174 |
| R37901900 | Głowica 305 dpi | 2854,92 | 108 |
| R37901501 | Wałek Pure Line | 222,08 | 260 |
| WWCL05100 | Obcinak gilotynowy | 2275,81 | 9 |

Głowice tylko do odpowiadającej rozdzielczości. Katalog części 2025-07-23 potwierdza trzy pierwsze PN. Oficjalne porównanie obcinaków Rev26A potwierdza WWCL05100 dla CL4NX Plus. Obcinak rotacyjny WWCLP5500 wykluczony: nie współpracuje z RFID. Gilotyna: materiał 0,060–0,268 mm, cięcie między wkładkami; nie obiecuje zgodności z grubym On-Metal. Nie dodano japońskiego regenerowanego wałka R49801100 ani przypadkowych opcji WLAN.

## Źródła

- https://shop.bluestoreinc.com/en/cl4nx-plus-rfid-series — dokładne europejskie PN i konfiguracje.
- https://shop.bluestoreinc.com/en/cl4nx-plus-series — PN części i zestawów.
- https://www.satoeurope.com/products/rfid-printers.php — bieżąca oferta RFID.
- https://www.satoamerica.com/support_downloads/printers/industrial/cl4nx-plus/ — dokumentacja i zdjęcie.
- https://www.satoamerica.com/content/dam/sato/sales/content/us/en/support-downloads/printers/industrial-printers/cl4nx-plus/product-datasheets/DS_CL4NX_Plus_Rev26A.pdf.coredownload.inline.pdf — specyfikacja Rev26A; 104 mm, 355 mm/s 203/305 dpi, LCD 3,5 cala, 271×457×321 mm, 15,1 kg, pamięć CPU1/CPU2. Starsza broszura europejska podaje inne maksymalne wymiary rolek, dlatego nie opublikowano ich bez rozstrzygnięcia.
- https://www.satoamerica.com/content/dam/sato/sales/content/us/en/support-downloads/documentation/parts-lists/current/Service-Parts-List_CL4NX_PLUS_Main-1.pdf.coredownload.inline.pdf — części, Fig-2.
- https://www.satoamerica.com/content/dam/sato/sales/content/us/en/support-downloads/printers/industrial-printers/cl4nx-plus/product-datasheets/CL4NX-Plus_Cutter-Comparison_Rev26A.pdf.coredownload.inline.pdf — zgodność obcinaków i ograniczenia materiału.
- https://www.satoamerica.com/content/dam/sato/sales/content/us/en/support-downloads/documentation/operator-and-technical-manuals/industrial-printers/CL4NX_Plus_UHF_Inlay_Configuration_Guide.pdf.coredownload.inline.pdf — dobór wkładek UHF.
- https://www.satoeurope.com/es/news/nuevas-etiquetas-rfid-de-sato-thin-on-metal/107 — Thin On-Metal <0,7 mm bez zestawu On-Metal; nie wolno utożsamiać wszystkich materiałów na metal z wymogiem kit.
- https://www.satoeurope.com/service-and-support/warranty.php — gwarancja 1 rok + warunkowy rok regionalny, limity głowic i wałka.

## Zdjęcia

Oryginalne zdjęcie urządzenia SATO: https://www.satoamerica.com/adobe/dynamicmedia/deliver/dm-aid--bb0fc8fb-e906-4e6f-9c4e-9fc083c2a94e/1080x1080-products-cl4nx-plus.png?preferwebp=true&quality=85

Oryginalne części SATO Printer Store (części wysyłane z magazynu SATO):
- https://cms.satoprinterstore.com/wp-content/uploads/cl4nx-plus-printhead-front.jpg
- https://cms.satoprinterstore.com/wp-content/uploads/platen-roller-sato-cl4nx-plus-r37901501-1000x1000.jpg
- https://cms.satoprinterstore.com/wp-content/uploads/cutter-kit-sato-cl4nx-plus-wwcl05100.jpg
- https://satoprinterstore.com/accessories/cutter-kit-cl4nx-plus-wwcl05100/ — zestaw i zgodność.

Imagen służy wyłącznie dopasowaniu skali i białych marginesów. Zdjęcie głowicy z serii wspólne dla 203/305 dpi oznaczono w opisie jako zdjęcie serii, a zgodność wynika z PN.

## Walidacja

- Kontrola TypeScript, ESLint, diff --check oraz skrypt integralności katalogu: OK. Unikalne ID/slug, zgodne referencje, istniejące pliki, 30 kart RFID, 52 przemysłowe, 69 TT, 272 akcesoria. PM65 RFID pozostaje usunięty. Trasa magazynowa zachowana.
- Przegląd lokalny z rzeczywistym publicznym API cen: obie pozycje 15004,87 / EU29 i 19546,16 / EU4; 4 akcesoria mają ceny, status Dostępny i koszyk.
- Tabela wyłącznie 3 różniące cechy. Pierwsze 10 pozycji RFID to Zebra. Filtr On-Metal uwzględnia nową kartę i właściwy PN.
- Porównano wizualnie karty Zebra ZT421 RFID i ZT620 RFID. Pole główne na wszystkich 576,5 × 576,5 px. Obiekt SATO zajmuje 74,5% szerokości i 68,3% wysokości (próg RGB 210); ZT421 85,5 × 72,8%, ZT620 89,5 × 82,2%. SATO ma bezpieczne białe marginesy i nie dominuje kadru.
- Pola akcesoriów 282,25 × 211,69 px, standardowy wspólny dział, 4 pozycje w jednym rzędzie. Obiekty głowica 58 × 21,4%, wałek 55,3 × 8,7%, komplet obcinaka 70,5 × 70,5%. Referencje części PM65: głowica 65,1 × 48,5%, wałek 62,7 × 24%. Kształt części pozostaje oryginalny; nie zmieniono komponentów, CSS ani przycisków.
- Publikacja tylko commit + push do claude/takma-frontend-build-RrM9E, automatyczny deploy z Gita. Weryfikacja publiczna po zakończeniu wdrożenia.
