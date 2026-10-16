# Brother TD-4650TNWBR / TD-4750TNWBR — 16.10.2026

## Zakres

Dwie osobne karty RFID, po jednym PN: TD4650TNWBRZ1 i TD4750TNWBRZ1. PN usunięte z wariantów ogólnej karty TD-4T; zostają tam cztery warianty TN/TNWB i linki do RFID. Stare adresy TD-4T z tymi PN przekierowują kodem 308 na właściwe karty. Nie zmieniono komponentów ani CSS kart. W tabelach jednego PN atrybuty są puste; porównanie obu modeli zawiera wyłącznie rozdzielczość, szerokość i prędkość nadruku.

Kategorie: RFID 12, biurkowe 28, termotransferowe 52, akcesoria do drukarek etykiet 232. Filtr producenta Zebra/Brother korzysta z istniejącego mechanizmu. Reguła szerokości 4 cale obejmuje też 105,7 mm. Nie przypisano etykiet RFID Zebra do Brothera bez potwierdzenia konkretnego materiału.

## Źródła techniczne

- https://store.brother.pl/devices/label-printer/td/td4650tnwbr
- https://store.brother.pl/devices/label-printer/td/td4750tnwbr
- https://www.brother.pl/-/media/product-downloads/devices/label-printers/td/td-series-datasheet/karta_produktu_td-4t-high-step-models.pdf
- Instrukcja EN, wersja 06: public/downloads/td-4650tnwb_4750tnwb_4650tnwbr_4750tnwbr_eng_ug_06.pdf. Ustawianie anteny, kalibracja po zmianie materiału, kontrola danych EPC i obsługa błędów RFID.
- https://www.brother.eu/-/media/product-downloads/devices/nordics/eu_en/cheat-sheets/td-series-cheatsheet.pdf
- https://www.brother.eu/-/media/product-downloads/devices/nordics/td4_series_leaflet_english.pdf
- https://store.brother.pl/accessories/td/parh001
- https://store.brother.pl/accessories/td/pacu003
- https://www.brother.pl/support/warranty oraz regulamin rozszerzenia z kwietnia 2026.

Witryna producenta ma omyłkę szerokości obudowy 291 mm na TD-4650TNWBR; karta PDF i wariant 300 dpi podają 219 × 284 × 191 mm. Przyjęto 219 mm. Prędkości nadruku: 203 i 152 mm/s, nie stare 152/127 z ogólnej karty. Nie są gwarancją prędkości kodowania RFID. Nie deklarowano automatycznej zgodności z WMS ani nieudokumentowanej gwarancji na zużycie głowicy/wałka. Ogólna strona gwarancji PL nie wymienia jednoznacznie pełnych nazw wariantów RFID, dlatego nowe karty zawierają odnośnik do warunków, bez obietnicy rozszerzenia dla każdego kanału dystrybucji.

## Akcesoria i oferty

Wspólne trzy akcesoria: PA-RH-001 (nowa karta, PN PARH001), PA-CU-003 (PACU003), PA-LP-004 (PALP004). Brother oznacza obcinak i odklejak jako niezalecane do materiałów RFID. Ograniczenie jest w opisie drukarek, FAQ, nazwach i krótkich opisach obu akcesoriów. Montaż przez sprzedawcę/serwis. Nie dopisano niepotwierdzonych głowic ani wałków z TD-4D do nowych kart. Usunięto je także z powiązań ogólnej TD-4T.

PN rozpoznane w /api/stock oraz potwierdzone bezpośrednim odczytem Ingram PnA (zgodny ItemID i VPN, waluta PLN). Oba PN drukarek bez zapasów. Migawka publicznego API: 1876,14 i 2288,92 zł netto; uchwyt 98,19 zł netto, EU 1; obcinak 603,12 i odklejak 139,18 zł netto, brak zapasów. Ceny nie zostały wpisane na stałe do nowych kart. Nowe karty, akcesoria i ogólna TD-4T korzystają z LIVE_OFFER_SLUGS (HTML, metadane i JSON-LD), a komponenty klienta ze wspólnego API. Bezpośredni Jarltech nie znalazł obu PN drukarek. Surowe odczyty w prywatnym katalogu /tmp/brother-rfid-research; bez kluczy i cen zakupu w repozytorium.

## Zdjęcia i wygląd

Oryginalne zdjęcia producenta odczytane z DOM kart. Źródła głównych zdjęć:
- TD4650: https://bie-p-001-delivery.sitecorecontenthub.cloud/api/public/content/70dafbfeeeab45f5aad30466b2b0561c?v=89a1fa5c
- TD4750: https://bie-p-001-delivery.sitecorecontenthub.cloud/api/public/content/7c0b2152e90f40d3952030296f3cff67?v=e570323e
- Uchwyt: https://bie-p-001-delivery.sitecorecontenthub.cloud/api/public/content/6e718d76629f4366b0dbf32d513a78cd?v=21e001db

Wbudowany image_gen: dopasowanie białych marginesów i skali, bez zmiany konstrukcji. Pliki końcowe: public/images/products/td-4650tnwbr-framed.webp, td-4750tnwbr-framed.webp i brother-pa-rh-001.webp. Konwersja do WebP zmienia tylko format. Oryginały wygenerowane w /Users/jakubtiuchty/.codex/generated_images/01a120b0-d464-76c0-9d63-537cb9a66124: odpowiednio exec-24d3de39-56c5-4725-8fbf-436fcc714576.png, exec-02c6cc7b-c070-4967-a209-a87d12da5797.png oraz exec-a9c62357-d80d-403f-87d7-f1f8fe90ca5e.png. Ostatni powstał po korekcie skali exec-4f73a8ca-8571-4371-ad19-239ccbe3b694.png.

Pomiar obiektu progiem różnicy od bieli 35: główne zdjęcie TD4650 84,9% × 69,8%, TD4750 80,7% × 67,4%; wzorce TD-4T_1 77,7% × 63,5%, ZD621R 86,8% × 80,1%. Uchwyt po korekcie 55,1% × 56,0%; obcinak 56,2% × 60,4%, odklejak 54,9% × 55,0%. Pola galerii w lokalnym teście i na obu publicznych wzorcach TD-4T/ZD621R: 576,5 × 576,5 px; pola akcesoriów 282,25 × 211,69 px przy tym samym widoku 1280 px. Jedna wspólna sekcja Akcesoria, trzy produkty mieszczą się w pierwszym rzędzie. Nie zmieniono mechanizmu rozwijania pozostałych produktów.

### Prompty image_gen

Obie drukarki (osobne wywołanie dla każdego oryginalnego zdjęcia):

> Use case: precise-object-edit. Edit target: this exact real manufacturer photograph of a Brother RFID desktop label printer. E-commerce framing only. Preserve the EXACT photographed printer, viewing angle, housing geometry, all buttons, LCD, seams, latch, output slot, surface texture and original Brother/model lettering. Do not redesign, relight, redraw, add or remove hardware or text. Put the identical printer centered on a pure white square canvas. Uniformly enlarge it so the visible printer occupies about 78 percent of canvas width, maintaining original aspect ratio and generous balanced white margins. No crop. No added text, no decoration, no props. Preserve existing subtle shadow only. Output one square product photo.

Uchwyt, pierwsze dopasowanie:

> Use case: precise-object-edit. Edit target: this EXACT real manufacturer photo of Brother PA-RH-001 external media roll holder. Only change uniform product scale and white canvas margins. Preserve exact geometry, all gray roll guides and slot count, black base, silver metal extension plate, all holes, screws and printed diagram. Do not redesign, redraw, add or remove parts or text. Center the complete original holder on a pure white square canvas, with its maximum visible dimension about 60 percent of canvas height and width, keeping original proportions and angle. Generous equal margins, no crop, no new text or decorations. Keep shadow minimal. Output one square catalog photo.

Uchwyt, korekta:

> Precise object edit. The provided image is the edit target: current Brother PA-RH-001 roll holder on white. Shrink the ENTIRE existing photographed holder uniformly by 15 percent relative to this image, keeping it centered on the same square white canvas. This is only a margin/scale correction: preserve the exact original object, printed diagram, metal plate, holes, screws, gray guides and slot count, black base, perspective and colors. Do not redraw, redesign, add, remove, relight, rotate or crop anything. More white margins on all sides. No text or decoration.

## Kontrola

Sprawdzono unikalne ID/slugi, brak zdublowanych PN, trzy istniejące akcesoria, pliki zdjęć, liczniki podkategorii, cztery pozostawione warianty TD-4T i puste atrybuty pojedynczych PN. TypeScript i lint bez błędów. Lokalna aplikacja działała z wyłączoną produkcyjną bazą i bez kluczy dystrybucji; proxy tylko do odczytu publicznego /api/stock. UI potwierdza ceny i brak zapasów drukarek, dostępny uchwyt, trzy akcesoria. Filtr Brother pokazuje dwa modele, filtr 4 cale uwzględnia oba. Widok 390 px bez poziomego przepełnienia. Zachowano pliki oraz pozycję panelu /admin/etykiety-na-magazynie. Publikacja wyłącznie przez commit i push na claude/takma-frontend-build-RrM9E.
