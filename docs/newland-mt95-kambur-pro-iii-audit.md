# Newland MT95 Kambur Pro III — karta produktu

Weryfikacja: 4 października 2026 r.

- Strona producenta: https://www.newland-id.com/en/products/mobile-computers/mt95-kambur-pro-iii .
- Karta katalogowa: `public/datasheets/newland-mt95-kambur-pro-iii-en.pdf`, 4 strony. Oryginalne zdjęcia producenta, bez zmiany proporcji.
- Dodany wariant: **NLS-MT9557-W5**, identyfikator Jarltech **newmt9557**. Wariant obsługuje głos i dane. Nie dodano wariantu W5-DO bez potwierdzenia oferty.
- Oferta Jarltech jest ograniczona ilościowo i obowiązuje do **31 marca 2027 r.** Termin wynika z przekazanego zrzutu oferty; API potwierdza PN i aktualną ofertę. Termin zapisano w `src/data/supplier-offers.ts`. Komunikat znika po terminie, także na otwartej karcie. Nie obiecuje stałej ceny do końca oferty ani nie wylicza rabatu.
- Cena sprzedaży i stan magazynowy korzystają z istniejącego API stock. Cena katalogowa jest wartością zastępczą. Nie wprowadzono ceny zakupu, przekreślonej ceny ani niepotwierdzonej najniższej ceny z 30 dni.
- Bateria **5100 mAh** zgodnie z producentem. Opis dystrybutora z wartością 6000 mAh nie został przeniesiony.
- Zestaw zawiera zasilacz EU/UK, przewód USB-C, baterię, osłonę, pasek i folię. Nie generuje wymagań zakupu zasilacza lub stacji do ładowania USB-C.
- Nie powiązano starszych akcesoriów Pro II. Producent wskazuje dla Pro III m.in. NLS-MCD9557-1C, NLS-BTY-MT9557-01, NLS-MPG9557-01. W aktualizacji poniżej dodano własne karty akcesoriów.
- Plan bezpieczeństwa do IV kwartału 2029 r.: https://www.newland-id.com/en/support/android-roadmap-for-newland-devices/ . Nie obiecano Androida 17.
- Porównanie TC22/TC501: https://www.zebra.com/gb/en/products/spec-sheets/mobile-computers/handheld/tc22-tc27.html oraz https://www.zebra.com/us/en/products/mobile-computers/handheld/tc5x-series.html . Porównanie rozróżnia Wi-Fi TC22 i opcjonalne 5G TC501; nie deklaruje ogólnego rankingu wydajności.
- Instrukcja Pro III kieruje teraz do produktu Pro III zamiast Pro II.
- Produkt korzysta z istniejącego Product/Offer/FAQ schema, kanonicznego URL, wyszukiwania PN oraz automatycznej mapy strony z datą 2026-10-04.


## Aktualizacja zdjęć, promocji, magazynów i akcesoriów — 4 października 2026

- Trzy zdjęcia terminala mają przezroczyste tło i bezpieczne marginesy. Dwie stacje otrzymały zdjęcia z przezroczystym tłem i subtelnym napisem TAKMA na obudowie. Pozostałe akcesoria używają zdjęć właściwych PN z katalogu producenta.
- Baner wykorzystuje układ wysuwanego banera promocji etykiet Zebra, ale ma granatowo-błękitne kolory Newland. Pokazuje termin 31 marca 2027 r. Nie ujawnia ceny zakupu ani nie obiecuje niepotwierdzonego rabatu.
- Naprawiono uzupełnianie stanów Jarltech dla Newland także wtedy, gdy produkt jest dostępny w Polsce. Podczas kontroli terminal miał 26 szt. PL i 153 szt. EU/DE. Liczby pochodzą z integracji; nie są wpisane na stałe. Towar w dostawie nie jest traktowany jako dostępny.
- Dodano 23 odrębne karty PN. Do terminala przypisano 22 potwierdzone akcesoria. HS106 jest na liście głównej producenta, lecz szczegółowa karta wskazuje MT67/MT90/MT93/N7 z uchwytem. Dlatego karta HS106 istnieje w katalogu, ale nie jest oznaczona jako zgodna z Pro III.
- NLS-MCD9557-1C: wybór ADP710 do jednej stacji lub AD60-D-M do połączonych stacji. NLS-MCD9557-1CC: komunikacja USB, bez Ethernet; wymagane ADP710 i CBL-TC-N7. Aktualna karta producenta wymienia przewód DC–USB oraz 2 wkładki w zestawie.
- Stacja samochodowa ma dwa alternatywne sposoby zasilania: adapter gniazda samochodowego albo przewód do montażu stałego. Zestaw NLS-CPA-UNIV zawiera własny przewód USB-C i nie wymaga ponownego zakupu kabla.
- Pojemność baterii zapasowej nie została dopisana: szczegółowa strona zawiera stare 6000 mAh, sprzeczne z aktualnym urządzeniem 5100 mAh. Identyfikację zapewnia dokładny PN.
- Zdjęcie MS105 wybrano z właściwej trzeciej fotografii producenta; dwa wcześniejsze obrazy na stronie przedstawiały klips MC105.
- Ceny zastępcze to zweryfikowane ceny sprzedaży z istniejącego API sklepu. Dla 6 pozycji bez potwierdzonej ceny użyto „Cena na zapytanie” i statusu Niedostępny. Nie wymyślono cen.
- Opisy mają polskie znaki, krótkie zdania, SEO title/description, FAQ, dokładny PN i powiązania wymaganych elementów. Wszystkie karty korzystają z kanonicznych adresów, Product schema i istniejącej mapy strony.

### Obróbka zdjęć

Tryb: edycja lokalnych zdjęć w narzędziu image_gen; przezroczyste PNG. Materiał referencyjny: zdjęcia producenta, a dla terminala także czysty kadr starszego Newland jako wzorzec obramowania, nie konstrukcji produktu.

Zestaw instrukcji terminala (3 widoki): usunąć białe tło, czarny cień podłoża i boczne smugi; zachować dokładną geometrię urządzenia, ekran, przyciski, kamery, złącza, etykiety i perspektywę; delikatnie poprawić ostrość; portret 1024×1536, około 90% wysokości, pełne marginesy; nie dodawać tekstu ani grafiki.

Zestaw instrukcji stacji (2 PN): usunąć tło, cień i smugi; zachować konstrukcję ze zdjęcia danego PN, bez dopisywania portów; cały produkt w kwadratowym kadrze 1280×1280 z marginesem; jedyny znak wodny to subtelny szary napis TAKMA na przedniej dolnej części produktu. Nie gwarantuje to niemożności usunięcia znaku w edytorze.

Pliki wynikowe:

- `/images/products/newland-mt95-kambur-pro-iii-front-cutout-v2.png`
- `/images/products/newland-mt95-kambur-pro-iii-back-cutout-v2.png`
- `/images/products/newland-mt95-kambur-pro-iii-sides-cutout-v2.png`
- `/images/products/newland-nls-mcd9557-1c-cutout-v2.png`
- `/images/products/newland-nls-mcd9557-1cc-cutout-v2.png`

### Źródła szczegółowe akcesoriów

- https://www.newland-id.com/en/products/charging-power/ad60-d-m
- https://www.newland-id.com/en/products/charging-power/adp710
- https://www.newland-id.com/en/products/protection-handling/bt105
- https://www.newland-id.com/en/products/cables/cbl-tc-n7
- https://www.newland-id.com/en/products/protection-handling/hs105
- https://www.newland-id.com/en/products/protection-handling/hs106
- https://www.newland-id.com/en/products/protection-handling/mc105
- https://www.newland-id.com/en/products/protection-handling/ms105
- https://www.newland-id.com/en/products/charging-power/bty-mt95
- https://www.newland-id.com/en/products/base-stations/nls-cc-mt95-01
- https://www.newland-id.com/en/products/base-stations/nls-ccsm-01
- https://www.newland-id.com/en/products/cables/nls-cpa-ccmt93-01
- https://www.newland-id.com/en/products/charging-power/nls-cpa-univ
- https://www.newland-id.com/en/products/charging-power/nls-dcc-ccmt93-01
- https://www.newland-id.com/en/products/protection-handling/nls-hs-mt-001
- https://www.newland-id.com/en/products/base-stations/nls-mcd9557-1c
- https://www.newland-id.com/en/products/base-stations/nls-mcd9557-1cc
- https://www.newland-id.com/en/products/peripherals/nls-mpg9557-01
- https://www.newland-id.com/en/products/protection-handling/nls-rb9557-01
- https://www.newland-id.com/en/products/protection-handling/nls-sp-mt9557
- https://www.newland-id.com/en/products/protection-handling/ns105
- https://www.newland-id.com/en/products/protection-handling/pt105
- https://www.newland-id.com/en/products/protection-handling/rc105

### Kontrole

- `node scripts/test-newland-mt95-pro-iii.cjs` — PASS.
- `node scripts/test-newland-accessories.cjs` — PASS: 23 unikalne karty, 22 powiązania, dokładne PN, wymagania, obrazy, SEO i kodowanie.
- `node scripts/test-newland-stock.cjs` — PASS: PL+DE, brak cache i dostawa przyszła.
- Testy required-accessory-copy, accessory-catalog i accessory-navigation — PASS.
- TypeScript `--noEmit --incremental false` — PASS.
- Przeglądarka: czyste zdjęcie terminala; magazyn PL i EU; rozwinięcie banera; stacje 1C/1CC i wymagania. ADP710 dodany bezpośrednio z boxu do koszyka z ceną 128,24 zł netto. Po sprawdzeniu usunięto testową pozycję.

## 4 października 2026 — ujednolicenie wszystkich zdjęć akcesoriów

Obrobiono 23 zdjęcia katalogowe. Karta MT95 Kambur Pro III nadal zawiera 22 potwierdzone akcesoria; HS106 pozostaje poza jej powiązaniami. Użyto wbudowanego imagegen w trybie edycji, po jednym zdjęciu na PN. Wyniki: PNG RGBA 1254×1254, przezroczyste tło, bez cienia pod produktem. Znak wodny: tylko subtelny napis TAKMA na powierzchni produktu. Oryginały zachowano.

Instrukcje wspólne: zachować rzeczywistą konstrukcję, proporcje, kąt, kolory, oznaczenia i wszystkie elementy zestawu. Usunąć białe tło, zewnętrzne cienie, szare smugi i aureole. Nie dodawać portów, części, symboli ani logotypu TAKMA. Szkło pozostaje cienką półprzezroczystą płytką, bez ramki telefonu. Przy przewodach uciętych w oryginale odtworzyć jedynie prostą dolną pętlę, bez zmiany złączy. Pełne instrukcje i wyniki wywołań zachowano w roboczym archiwum photo-result-*.json.

Granice produktu odczytano z kanału alfa (próg 8/255), bez modyfikowania pikseli. Metadane product-image-frames.json pozwalają wyśrodkować każdy produkt i pokazać jego dłuższy wymiar na 82% kwadratowego kadru. Pozostaje co najmniej 9% marginesu. Ten sam sposób prezentacji działa w kartach katalogu, galerii i wymaganych akcesoriach. Inne zdjęcia zachowują poprzedni układ.

Pliki wynikowe w public:

- `/images/products/newland-nls-mcd9557-1c-catalog-v3.png` — NLS-MCD9557-1C
- `/images/products/newland-nls-mcd9557-1cc-catalog-v3.png` — NLS-MCD9557-1CC
- `/images/products/newland-nls-bty-mt9557-01-catalog-v3.png` — NLS-BTY-MT9557-01
- `/images/products/newland-nls-mpg9557-01-catalog-v3.png` — NLS-MPG9557-01
- `/images/products/newland-nls-rb9557-01-catalog-v3.png` — NLS-RB9557-01
- `/images/products/newland-nls-sp-mt9557-catalog-v3.png` — NLS-SP-MT9557
- `/images/products/newland-nls-hs-mt-001-catalog-v3.png` — NLS-HS-MT-001
- `/images/products/newland-hs105-catalog-v3.png` — HS105
- `/images/products/newland-adp710-catalog-v3.png` — ADP710
- `/images/products/newland-cbl-tc-n7-catalog-v3.png` — CBL-TC-N7
- `/images/products/newland-ad60-d-m-catalog-v3.png` — AD60-D-M
- `/images/products/newland-nls-cpa-univ-catalog-v3.png` — NLS-CPA-UNIV
- `/images/products/newland-nls-cc-mt95-01-catalog-v3.png` — NLS-CC-MT95-01
- `/images/products/newland-nls-ccsm-01-catalog-v3.png` — NLS-CCSM-01
- `/images/products/newland-nls-cpa-ccmt93-01-catalog-v3.png` — NLS-CPA-CCMT93-01
- `/images/products/newland-nls-dcc-ccmt93-01-catalog-v3.png` — NLS-DCC-CCMT93-01
- `/images/products/newland-bt105-catalog-v3.png` — BT105
- `/images/products/newland-mc105-catalog-v3.png` — MC105
- `/images/products/newland-rc105-catalog-v3.png` — RC105
- `/images/products/newland-ns105-catalog-v3.png` — NS105
- `/images/products/newland-pt105-catalog-v3.png` — PT105
- `/images/products/newland-ms105-catalog-v3.png` — MS105
- `/images/products/newland-hs106-catalog-v3.png` — HS106

Weryfikacja: przejrzano wszystkie 23 zdjęcia w siatce kontrolnej. Test newland-accessories obejmuje powiązania i dokładne PN oraz geometrię wszystkich kadrów: 82%, wyśrodkowanie, marginesy i brak zmiany innych zdjęć.
