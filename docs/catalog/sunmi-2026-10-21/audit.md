# SUNMI — pierwsza grupa terminali mobilnych

Data: 2026-10-21. Zakres: 8 modeli, 24 europejskie konfiguracje oraz 22 zgodne akcesoria. Kategoria `/terminale-sunmi` wykorzystuje istniejące komponenty terminali. Stanowiska stacjonarne POS, kioski i drukarki SUNMI pozostają poza tym wdrożeniem.

## Źródła

- Aktualny katalog producenta: https://www.sunmi.com/en/products
- Jarltech: https://www.jarltech.com/en/product-search?field_manufacturer_ref%5B54%5D=54&items_per_page=96
- Panel https://partner.eu.sunmi.com/dashboard/ służy przede wszystkim do zarządzania urządzeniami i aplikacjami. Bez zmian w konfiguracji konta.

- L3: https://www.jarltech.com/en/sunmi-l3
- L2Ks: https://www.jarltech.com/en/sunmi-l2ks
- L2H: https://www.jarltech.com/en/sunmi-l2h
- L2s Pro: https://www.jarltech.com/en/sunmi-l2s-pro
- M3: https://www.jarltech.com/en/sunmi-m3
- V3: https://www.jarltech.com/en/sunmi-v3
- V3H: https://www.jarltech.com/en/sunmi-v3h
- V3 Plus: https://www.jarltech.com/en/sunmi-v3-plus

Dokumenty producenta pobrano z załączników tych kart Jarltech. Zapisano 8 rzeczywistych PDF w `public/datasheets/`. Parametry konfiguracji ustalono według konkretnych PN; opcje rodziny nie są przypisywane wszystkim wersjom.

## Konfiguracje i ceny detaliczne netto

Migawka cen i stanów z istniejącej integracji TAKMA (wybór oferty Ingram/Jarltech). Stany są zmienne. Dane poniżej nie obejmują cen zakupu.

| Model | PN | Cena netto PLN | Magazyn PL | Magazyn EU |
|---|---|---:|---:|---:|
| L3 | P09070015 | 1671.68 | 0 | 35 |
| L3 | P09070073 | 1806.77 | 0 | 180 |
| L3 | P09070030 | 2245.83 | 0 | 0 |
| L3 | P09070036 | 1840.56 | 0 | 763 |
| L3 | P09070052 | 2009.39 | 0 | 26 |
| L3 | P09070072 | 1249.58 | 0 | 286 |
| L2Ks | P09044025 | 2360.66 | 0 | 56 |
| L2Ks | P09044063 | 1870.95 | 0 | 0 |
| L2Ks | P09044064 | 1989.14 | 0 | 0 |
| L2H | P09030059 | 2819.92 | 0 | 81 |
| L2H | P09030061 | 2819.92 | 0 | 0 |
| L2s Pro | P09064085 | 1806.77 | 0 | 1301 |
| L2s Pro | P09064007 | 2009.39 | 0 | 14 |
| L2s Pro | P09064014 | 2009.39 | 0 | 240 |
| L2s Pro | P09064024 | 1401.51 | 0 | 296 |
| L2s Pro | P09064080 | 1806.77 | 0 | 0 |
| M3 | P09070020 | 996.25 | 0 | 423 |
| V3 | P06100009 | 1296.81 | 0 | 1247 |
| V3 | P06100035 | 1296.81 | 0 | 461 |
| V3 | P06100007 | 1239.39 | 0 | 422 |
| V3 | P06100077 | 1509.56 | 0 | 671 |
| V3H | P06100033 | 1509.56 | 0 | 1052 |
| V3H | P06100047 | 1671.68 | 0 | 848 |
| V3 Plus | P06120005 | 1854.05 | 0 | 28 |

## Warunki zgodności i wyłączenia

- L3: uchwyt C14004144 przypięty z warunkiem tylnych POGO; w tej ofercie spełniają go P09070073 i P09070030. Inne PN na karcie L3 nie otrzymują deklaracji zgodności z uchwytem.
- L3 P09070005 (UHF) nie został dodany do tej grupy. Nie mieszamy wersji RFID z kartą standardowego L3.
- M3 P09070017 pominięto: tytuł i opis dystrybutora nie są spójne co do pamięci 32/64 GB. Dodano jednoznaczny P09070020 3/32 GB.
- L2Ks P09044023 pominięto: brak jednoznacznego oznaczenia modułu skanującego. Wybrano trzy opisane konfiguracje SE4770/SS1111.
- L2Ks: eSIM nie jest przypisane konfiguracjom GMS. Specyfikacja producenta wskazuje ograniczenie GMS.
- L2H i L2s Pro: stacja C14000144 wymaga zdjęcia osłony; C14004067 obsługuje wersje z osłoną i bez niej.
- V3 Plus: nie przypięto szkła C20000060 ani stacji C14004112 na podstawie ogólnej listy akcesoriów Jarltech. Ich opis dotyczy V3/V3H. Przypięto jednoznacznie zgodny pasek C20000086.
- Pominięto konfiguracje z brytyjskim przewodem zasilającym. Nie publikowano deklaracji gwarancji bez dodatkowej weryfikacji warunków dla wybranego PN.

## Zdjęcia i wygląd

- Frontowe zdjęcia L3, L2Ks, L2H, L2s Pro i M3 pobrano z kart Jarltech. Front V3 Plus pochodzi z oficjalnej strony SUNMI: https://www.sunmi.com/en/v3-plus
- Montaże V3/V3H rozdzielono w imagegen, zachowując widok przedniego urządzenia. Oryginały pozostawiono jako dodatkowe ujęcia.
- Cztery zdjęcia akcesoriów L3/M3 pochodzą z oficjalnego L3: https://www.sunmi.com/en/l3/ . W imagegen zmieniono tło na białe. Podpis wyjaśnia, że terminale i baterie na ilustracji nie są dołączone.
- Pozostałe 18 akcesoriów ma szare logo SUNMI w istniejącym wzorcu zastępczym. Nie użyto przypadkowych zdjęć podobnych akcesoriów.
- Pole zdjęcia kategorii: 293,66 × 220,24 px przy szerokości okna testowego 1264 px. Ten sam pomiar dla CipherLab RS20 i RS36. Udział widocznego dłuższego boku produktu: 72% wysokości pola, akcesoria 62%.
- Zachowano wspólną sekcję Akcesoria, pierwszy rząd czterech produktów oraz istniejące rozwijanie i zwijanie.

## Weryfikacja

- TypeScript: `tsc --noEmit`.
- 30 kart oraz kategoria: HTTP 200, jeden H1, prawidłowy canonical i parsowalne schema Product/ProductGroup.
- 46/46 PN ma bieżącą ofertę cenową w integracji.
- 8 PDF pobranych przez adresy lokalne; sprawdzona sygnatura `%PDF`.
- Zweryfikowano rozwijanie 4 → 8 → 4 akcesoriów L3.
- Produkcja wyłącznie z commita na `claude/takma-frontend-build-RrM9E`; sprawdzenie po publikacji zostanie zapisane w raporcie końcowym.

## Uzupełnienie 2026-10-22: zdjęcia akcesoriów i baterie

- Zdjęcia 12 akcesoriów zamiast obrazu zastępczego. C02020013, C20000106 i C11000007: oficjalne rendery z https://www.sunmi.com/en/l3/ (`file.cdn.sunmi.com/newebsite/products/l3/lg/p10-1.jpg`, `p10-2.jpg`, `p10-3.jpg`), tło wycięte rembg (BiRefNet). C02004005, C14000157, C14000159, C14000144, C14004067, C20000001, C20000003, C20000026 i bateria X09060578: zdjęcia producenta z kart produktów barcodesite.eu (Shopify, 700–768 px). Obróbka `scripts/obrob-zdjecia.py --plotno=1254x1254 --wypelnienie=0.78`, zapis WebP 1254 × 1254 na białym tle.
- C14000144: plik z karty barcodesite C14004014. To samo zdjęcie ERS i barcodesite przypisują C14000144 (miniatury 200–265 px); C14004014 zostaje z obrazem zastępczym, bo nie wiadomo, czy stacja L2Ks wygląda tak samo.
- Bez zdjęcia (brak źródła w dobrej jakości): C11000003 (tylko zdjęcie z osobą i miniatura 70 × 144), C11000001, C14004014, C14004112, C20000060, C20000086 i C20000095 (miniatury 200–500 px lub plansza z logo), baterie X09060609, X09060403 i X09050774.
- Baterie: PN z list akcesoriów Jarltech (sunl3bat X09060609 – L3; sunl2ksbat X09060403 – L2Ks; sunl2sbat-5 X09060578 – L2H i L2s Pro; sunv3bat X09050774 – V3 i V3H) i ERS. Napięcie i pojemność z kart katalogowych w `public/datasheets/`. Dla M3 i V3 Plus nie znaleziono PN baterii zapasowej. E15014028 i E15010063 (L2s/L2H) nie mają oferty w integracji.
