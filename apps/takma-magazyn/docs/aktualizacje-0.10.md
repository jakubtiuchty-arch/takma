# Aktualizacje Androida przez internet — 0.10.0

Kanał pilotażowy: `https://www.takma.com.pl/downloads/magazyn/pilot.json`.
APK, manifest i źródła Androida są w repozytorium. Pliki APK są wersjonowane nazwą i skrótem SHA-256. Nie zastępuj pliku istniejącej wersji. Publikacja: wyłącznie commit/push na `claude/takma-frontend-build-RrM9E`.

## Obsługa

Po otwarciu aplikacji sprawdzanie wersji odbywa się najwyżej raz na sześć godzin. Ustawienia terminala → Sprawdź aktualizację uruchamia sprawdzanie ręczne. Nowa wersja pokazuje opis i przyciski Później / Pobierz. Po pobraniu pracownik wybiera Zainstaluj, w razie potrzeby udziela w ustawieniach Androida zezwolenia na instalacje z TAKMA Magazyn, wraca i zatwierdza instalację systemową.

Przed instalacją zakończ bieżącą czynność. Aktualizacja używa tego samego identyfikatora pakietu i podpisu; nie usuwa aplikacji ani pamięci Vault. Backend, baza, liczenie i wydania nie są modyfikowane. Nigdy nie odinstalowuj aplikacji w celu aktualizacji — usunęłoby to aktywację i lokalne niepotwierdzone operacje.

Pierwsze przejście z 0.9.0 wymaga jednorazowej instalacji 0.10.0 na CT37: przez USB (`adb install -r`) lub pobranie pliku APK na terminalu. Wersja 0.9.0 sama nie sprawdza aktualizacji. Kolejne wersje będą dostępne w aplikacji.

## Wydanie kolejnej wersji

1. Zwiększ versionCode i versionName w android/app/build.gradle.
2. Buduj na komputerze z dotychczasowym kluczem pilota. Nie commituj keystore ani haseł. Zachowaj bezpieczną kopię klucza poza repozytorium.
3. Uruchom `./gradlew assembleDebug lintDebug` z katalogu android.
4. Uruchom `node apps/takma-magazyn/scripts/publish-pilot.mjs` z katalogu repozytorium. Skrypt sprawdza podpis i pakiet, kopiuje APK i generuje manifest z prawdziwą wersją, rozmiarem oraz SHA-256.
5. Commit źródeł, manifestu i APK. Fetch/rebase aktualnej gałęzi produkcyjnej, push na nią. Poczekaj na wdrożenie Git i sprawdź pobranie oraz hash z www.takma.com.pl.

Obecny pilot ma applicationId `pl.takma.magazyn.debug` i istniejący podpis Android Debug. Nie zastępuj go pakietem release: to inna aplikacja. Kanał release jest zarezerwowany, ale nie został opublikowany; dystrybucja handlowa wymaga oddzielnego stałego klucza i procesu wydawniczego.

## Zabezpieczenia i testy

- Wyłącznie HTTPS, host www.takma.com.pl i katalog downloads/magazyn. Bez podążania za przekierowaniami i bez tokenów magazynu.
- Limit manifestu 32 KiB, APK 100 MiB, timeouty; kontrola wielkości i SHA-256, pakietu, versionCode oraz podpisu bieżącej aplikacji.
- Prywatny plik w cache, udostępniony instalatorowi tylko do odczytu przez provider z tymczasowym uprawnieniem. Provider nie eksportuje plików aplikacji.
- Instalacja wymaga działania pracownika i systemowego instalatora. Brak połączenia przy automatycznym sprawdzaniu nie blokuje pracy.
- `UpdatePolicyTest.java`: zaufany HTTPS, fałszywy host, credentials, port, HTTP, obcy katalog, za duży i ucięty plik, błędny hash.
- assembleDebug i lintDebug: OK; 0 błędów, 3 dotychczasowe ostrzeżenia (target SDK, backup, tłumaczenia).
- Podpis 0.10.0 porównany z lokalnym APK 0.9.0: zgodny.
- Test fizyczny instalatora i zachowania aktywacji: do wykonania na CT37. ADB nie wykrywa terminala. Emulator API 35 nie startuje (brak obrazu systemu). Nie wykonano testowego wydania ani zapisu do bazy magazynu.

Dokumentacja Android: https://developer.android.com/reference/android/content/pm/PackageInstaller oraz https://source.android.com/docs/security/features/apksigning .
