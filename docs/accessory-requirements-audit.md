# Audyt prezentacji wymaganych akcesoriów — 2026-10-03

Zakres: 432 unikalne akcesoria przypisane do 17 kart urządzeń Zebra w `accessory-catalog-coverage.json`.

## Wykryte i poprawione przypadki

- Alternatywne źródła zasilania, mocowania i sposoby ładowania HS3100 otrzymują instrukcję wyboru jednego rozwiązania.
- Elementy wspólne dla wszystkich sposobów użycia mają osobne oznaczenie. Warunki przy pozostałych elementach pozostają pełnymi zdaniami.
- Licencja lokalizacyjna baterii BLE jest wymagana dla funkcji lokalizowania, nie dla zwykłego używania ani ładowania baterii.
- Ogólne wymagania konfiguracji, np. posiadana baza ShareCradle, nie otrzymują fikcyjnego statusu magazynowego, ceny ani przycisku koszyka.
- Odnośniki do konfiguracji zachowują warunek użycia zamiast etykiety „Potrzebne do:” z fragmentem zdania.
- Czyszczenie opisu usuwa wyłącznie listy już pokazane w boxie. Zachowuje instrukcje między listami oraz po nich.
- W 57 opisach poprawiono prezentację wymagań, części zamiennych, elementów opcjonalnych i alternatyw. W tej liczbie mieszczą się drobne poprawki spacji i literówek.
- Wymagane przewody i zasilacze dla 10 kart ET65 przeniesiono do boxu z zakupem. Zgodne stacje pozostają przykładami, nie listą do zakupu łącznie.

Parametry, napięcia, ograniczenia systemu, numery PN i relacje zgodności zachowano. Nie dodano nowej deklaracji zgodności sprzętu. Polski tekst stosuje adaptację zasad ASD-STE100 z `standard-jezyka.md`.

## Walidacja

Po zmianach: 247 kart z parsowanymi wymaganiami, 532 wiersze wymagań, 191 wierszy warunkowych i 26 ogólnych wymagań konfiguracji.

- `test-required-accessory-copy.cjs`: alternatywy, licencja BLE, zachowanie instrukcji, brak pozostałych nagłówków wymagań i brak fikcyjnego stanu magazynowego.
- `test-accessory-catalog.cjs`: kompletność 17 rodzin, 432 akcesoria, 819 linków w treści, brak duplikatów PN, obrazy, SEO i kodowanie.
- `test-accessory-navigation.cjs`: 1078 odnośników nawigacji oraz warunki połączeń odwrotnych.
- `test-part-number-search.cjs` i `test-catalog-accessory-filters.cjs`: dokładne PN i filtrowanie zgodności.
- `tsc --noEmit` i `git diff --check`.

Audyt sprawdza prezentację istniejących, wcześniej zweryfikowanych zależności. Nie zastępuje nowej weryfikacji technicznej całego katalogu producenta.
