# Podpowiedzi atrybutów wariantów — 4 października 2026

## Przyczyna

`VariantsTable` używa najpierw `product.variantAttributeTooltips`, a następnie wspólnego słownika. MT95 Kambur Pro III nie miał własnych podpowiedzi. Domyślna podpowiedź „Skaner” wymieniała moduły Zebry SE4710, SE4770, SE4850 i SE58 oraz DPM, niezależnie od modelu produktu.

Ten sam opis trafiał do 11 kart bez własnej podpowiedzi „Skaner”: Zebra HC20, HC25, HC50, HC55, ET60, ET65, ET60W, ET65W, Honeywell RT10W, Newland N7 Cachalot Pro II i Newland MT95 Kambur Pro III. Lista modułów była nieadekwatna także dla części kart Zebry.

Domyślne „Łączność” opisywało przewody skanerów przy kasie, mimo że korzystało z niego 13 różnych kart, w tym terminale mobilne. Domyślne „Zestaw” zakładało zakup samego skanera lub skanera z przewodem. Korzystały z niego trzy karty, w tym zestaw terminala Newland.

## Zmiana

- Wspólne opisy „Skaner”, „Łączność” i „Zestaw” wyjaśniają znaczenie kolumny bez przypisywania produktu do marki, modułu lub sposobu pracy.
- MT95 Kambur Pro III ma własne opisy wszystkich czterech kolumn: CM60E, pamięć 6/64 GB, łączność wariantu NLS-MT9557-W5 oraz zawartość zestawu.
- CM60E opisano jako moduł odczytujący kody 1D i 2D, z przykładami kodów i funkcją Acuscan. Usunięto nieadekwatne moduły Zebry i DPM.
- Własne podpowiedzi pozostałych produktów zachowują pierwszeństwo. Warianty, PN, ceny i stany nie zostały zmienione.

Fakty CM60E, pamięci i łączności odpowiadają [karcie producenta Newland](https://www.newland-id.com/en/products/mobile-computers/mt95-kambur-pro-iii) oraz opisowi sprawdzonemu w poprzednim audycie produktu. Tekst stosuje polską adaptację zasad prostego języka technicznego z `docs/standard-jezyka.md`.

## Kontrola

- Test istniejącego produktu obejmuje komplet czterech podpowiedzi i brak obcych modułów w opisach MT95.
- Test wspólnych podpowiedzi wykrywa powrót listy modułów Zebry oraz opisów zakładających konkretny typ produktu.
- `node scripts/test-newland-accessories.cjs`: produkt, powiązania i grafiki bez regresji.
- `npx tsc --noEmit --incremental false` i `git diff --check`.
- W przeglądarce: widoczna podpowiedź przy nagłówku „Skaner” pokazuje CM60E i jego funkcje; sprawdzenie pozostałych trzech podpowiedzi.
- Po wdrożeniu: ponowna kontrola publicznej karty i zrzut tooltipu.

Surowa lista użycia wspólnego słownika, wyniki kontroli i dowody wdrożenia: ignorowany katalog `work/mt95-kambur-pro-iii/variant-tooltips` głównego repozytorium.
