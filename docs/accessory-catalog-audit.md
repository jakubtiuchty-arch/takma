# Akcesoria Zebra — kontrola przed commitem

Data: 3 października 2026.

Zakres: ET65 Android i Windows, TC201, TC22, TC27, MC3400, MC3450, MC9400, MC9450, TC53, TC58, TC53e, TC58e, TC73, TC78, TC501 i TC701.

432 unikalne akcesoria korzystają ze wspólnych kart tam, gdzie numer PN jest identyczny. Listy modeli i ich kolejność są zapisane w `accessory-catalog-coverage.json`.

Połączono cztery wcześniejsze pary kart:

| PN | Jedna karta docelowa |
| --- | --- |
| CBL-DC-388A1-01 | `/produkt/zebra-kabel-zasilajacy-388` |
| CBL-EC5X-USBC3A-01 | `/produkt/zebra-cable-usbc-et4x` |
| 450083 | `/produkt/zebra-dc-dc-9-60v-et6x` |
| 300039 | `/produkt/zebra-direct-wire-kit-et6x` |

Powiązania urządzeń i odnośniki w opisach prowadzą do kart docelowych. Cztery poprzednie adresy otrzymały przekierowania 301. Numery PN, wymagania zasilania i ograniczenia zgodności zachowano. Przewód USB-C ma wspólny opis, a wymaganie zasilacza dotyczy wskazanych stacji i ładowarki, nie połączenia z komputerem.

Usunięto nieużywane, wcześniej wykluczone karty włoskiego przewodu i opakowania 450 szkieł. Widoczne nazwy stosują ET65; oryginalne numery PN i istniejące adresy zachowują oznaczenia producenta.

Kontrola automatyczna obejmuje: brak duplikatów ID, slugów i PN w zakresie zadania; pełne listy modeli; zgodność baterii Android/Windows; zdjęcia i wymiary; metadane SEO; kodowanie NFC; odnośniki; wymagane elementy; dokładne wyszukiwanie PN. Widoczne statusy to Dostępny i Niedostępny.

Testy:

- `node scripts/test-accessory-catalog.cjs`
- `node scripts/test-accessory-navigation.cjs`
- `node scripts/test-part-number-search.cjs`
- `node scripts/test-catalog-accessory-filters.cjs`
- `npx tsc --noEmit`
- `git diff --check`

Wszystkie powyższe kontrole przeszły na osobnej kopii plików przygotowanych do commita. Sprawdzono także cztery przekierowania 301, zachowanie parametrów zapytania i odpowiedzi HTTP 200 kart docelowych. Przeszła kompilacja produkcyjna Next.js: `next build --experimental-build-mode compile`. Ten tryb sprawdza kompilację i ślady zależności, bez generowania wszystkich statycznych stron.

Wcześniejsze kontrole katalogów dystrybutorów, przewodników, zdjęć i kart produktów pozostają w lokalnych raportach `work/*-accessories` oraz `work/et6x-full`. Nie dodano ich surowych odpowiedzi API, kopii PDF, obrazów źródłowych ani materiałów roboczych do commita.
