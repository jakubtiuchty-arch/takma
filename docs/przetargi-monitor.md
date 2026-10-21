# Monitor przetargów TAKMA

## Zakres

- BZP: ogłoszenia o zamówieniach oraz osobny strumień `NoticeUpdateNotice`.
- TED: polscy zamawiający, branżowe i szerokie CPV oraz słowa kluczowe; także korekty.
- BK2021: pełnotekstowe wyszukiwanie publicznych ogłoszeń, szczegóły przez `/api/announcements/{id}/compact`.
- PlatformaZakupowa.pl: publiczna wyszukiwarka, osobne frazy i wszystkie strony wyników.
- Własne publiczne listy HTML/RSS: dodawane w panelu. Zakres obejmuje pozycje dostępne na wskazanej liście, bez gwarancji odczytu aplikacji JavaScript.

Nie jest to komplet wszystkich zamówień w Polsce. Ogłoszenia ukryte wyłącznie w nieindeksowanym załączniku lub za logowaniem mogą pozostać niewykryte. Można dodać bezpośredni link.

## Trwałość i aktualizacja

Każdy kandydat jest zapisany przed oceną AI, także oceny 0–29. Status użytkownika jest zachowany przy aktualizacji. Kursor przesuwa się dopiero po zapisaniu całej strony. Przerwane okna są wznawiane; błędy nie są uznawane za pusty wynik.

Dwa niezależne tory: `RECENT/` czyta nowe ogłoszenia z bieżącego dnia, źródła podstawowe uzupełniają początkowe 60 dni i później ponownie czytają okna 7 dni. Historia nie blokuje sprawdzania nowych ogłoszeń. Źródła mają osobne kursory, błędy i czas ostatniego zakończonego okna. Brak zakończenia przez 48 h jest widoczny w panelu.

Zmiany BZP łączymy po numerze zmienianego ogłoszenia. Termin z sekcji 8.1 po zmianie aktualizuje oryginalny wpis. Zachowujemy treść i odnośnik do zmiany. Ponowne pobranie pierwotnego ogłoszenia nie nadpisuje nowego terminu. TED przechowuje najpóźniejszą datę części jako granicę archiwizacji; właściwy termin części należy sprawdzić w analizie i dokumentacji.

## Analiza dokumentów

Odczyt PDF z warstwą tekstową, DOCX, XLSX i ZIP (bez zagnieżdżania archiwów). Wyszukiwanie fragmentów branżowych obejmuje cały tekst, a nie tylko początek. Limity: 24 pobrania, 24 MiB na plik, 60 MiB po rozpakowaniu, 65 tys. znaków kontekstu. Osiągnięcie limitu oznacza analizę niepełną. Skany, stare DOC/XLS, RAR/7z, blokady, logowanie i błędy pobrania są widoczne do ręcznej kontroli. OCR nie jest zaimplementowany.

AI otrzymuje dokumenty jako niezaufane dane. Części są pokazywane tylko z cytatem występującym w odczytanym materiale i znanym URL źródła. Bez dowodu nie wolno uznać osobnego ofertowania. Brak SWZ/OPZ lub niepotwierdzony cytat kieruje analizę do ręcznej kontroli. Żaden wynik nie stanowi ostatecznej decyzji o dopuszczalności udziału.

## Uruchamianie

`/api/cron/przetargi`: Bearer `CRON_SECRET`, harmonogram z Gita co 30 minut. Globalna dzierżawa zapobiega nakładaniu przebiegów. Osobne budżety pobierania i analizy pozostawiają kolejkę na kolejne uruchomienie.

- `?dry=1`: tylko odczyt stanu, bez mutacji i wiadomości.
- `?notify=0`: normalna synchronizacja bez dziennego e-maila.
- `?only=analysis&notify=0&id=<id>`: analiza wskazanego wpisu bez pobierania źródeł (ten sam sekret).
- Przycisk „Ponów analizę” ustawia wpis w kolejce. Wszystkie akcje panelu wymagają sesji administratora.

Dzienny e-mail zachowuje dotychczasowego adresata. Wysyłane są niezapowiedziane wcześniej otwarte dopasowania >=40. Potwierdzenie wysyłki jest zapisywane dopiero po sukcesie dostawcy.

## Baza i wdrożenie

Zmiana schematu jest addytywna: `prisma/migrations/20261021070000_tender_monitor/migration.sql`. Nie usuwa danych ani statusów. W tym środowisku zastano bazę rozwijaną poza pełnym łańcuchem migracji; SQL zastosowano transakcyjnie bez uruchamiania starych migracji na istniejących tabelach. Nowe wdrożenia generują klienta Prisma w standardowym buildzie. Nie stosować `migrate reset`.

Produkcja wyłącznie przez push gałęzi `claude/takma-frontend-build-RrM9E`. Zachować widok etykiet magazynowych i jego menu.

## Weryfikacja

`node scripts/test-tenders.cjs` — dopasowania, fałszywy identyfikator postępowania, terminy PL i DST, zmiana terminu BZP, filtry, późne fragmenty dokumentów, DOCX/XLSX/ZIP, pliki nieobsługiwane i prywatne adresy.

`LIVE=1 node scripts/test-tenders.cjs` — dodatkowe odczyty bieżących API i publicznej wyszukiwarki (bez bazy i maila).

`tsc --noEmit`, `next build`, odczyt wszystkich pięciu widoków z autoryzacją, wizualne porównanie z dotychczasowym panelem, test analizy rzeczywistego postępowania i weryfikacja wdrożenia z Gita.
