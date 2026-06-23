# Import keywords "materiały" do Ahrefs Rank Tracker — instrukcja

**Data**: 3 czerwca 2026
**Cel**: dodać 181 słów kluczowych ze wszystkich realnych produktów Zebra (12 DT + 16 TT + 12 taśm + 21 kategoryjnych) do projektu TAKMA w Ahrefs Rank Tracker, oznaczonych tagiem `materiały`.

---

## Pliki gotowe do importu

| Plik | Liczba pozycji | Format | Zastosowanie |
|---|---|---|---|
| `AHREFS-keywords-materialy.csv` | 181 | CSV z tagami | Główny — import z tagami |
| `AHREFS-keywords-materialy.txt` | 181 | TXT (jedna fraza/linia) | Backup — gdy Ahrefs nie czyta CSV |

---

## Co konkretnie znajduje się w liście

**21 słów kategoryjnych** (tag: `materiały, kategoria`):
- etykiety termiczne Zebra, etykiety termotransferowe Zebra, taśmy termotransferowe Zebra
- etykiety termiczne foliowe Zebra, etykiety termiczne papierowe Zebra (3 podkategorie DT)
- etykiety termotransferowe foliowe/papierowe/specjalne Zebra (3 podkategorie TT)
- etykiety linerless, zabezpieczające, kriogeniczne, BS5609, UL Zebra
- taśma woskowa/woskowo-żywiczna/żywiczna Zebra

**48 słów kluczowych dla 12 etykiet termicznych (DT)** — po 4 warianty per model:
Z-Select 2000D, Z-Perform 1000D, PolyPro 4000D, ZeroLiner 2000D/1100D/4500D, Z-Select 2000D Removable, Z-Perform 1000D Removable, Z-Perform 1000D 110 Tag, Z-Essentials 1000D/500D, 8000D Jewelry

**64 słowa kluczowe dla 16 etykiet termotransferowych (TT)** — po 4 warianty per model:
Z-Perform 1000T, Z-Perform 1000T Removable, Z-Select 2000T, Z-Essentials 500T, Z-Ultimate 3000T White, Z-Ultimate 3000T Silver, PolyE 3100T Gloss, PolyPro 3000T Gloss, PolyPro 3000T Clear, PolyPro 4000T Matte, PolyO 3100T, 8100T Cryocool, 8000T All-Temp, 8000T Blood Bag Deep Freeze, 8000T Void Matte, 8100T Z-Destruct PE

**48 słów kluczowych dla 12 taśm termotransferowych** — po 4 warianty per model:
Zebra 1600 Wax, 2100 European Wax, 2300 Wax, 5319 Performance Wax, 3200 Premium Wax/Resin, 3300 Wax/Resin, 3400 Wax/Resin, 5555 Wax/Resin Cartridge, 4800 Resin, 5095 Resin, 5100 Premium Resin, 8000 ChemResist

**4 warianty per produkt** (przykład Zebra 5095 Resin):
1. Pełna nazwa: `Zebra 5095 Resin`
2. Krótka: `Zebra 5095`
3. Z prefiksem branżowym: `taśma Zebra 5095`
4. Polski opisowy: `taśma żywiczna 5095 Zebra`

---

## System tagów

Każde słowo ma 2-4 tagi (do filtrowania w Ahrefs po wgraniu):

| Tag | Liczba pozycji | Co znaczy |
|---|---|---|
| `materiały` | 181 | Tag główny — wszystkie pozycje tej kampanii |
| `kategoria` | 21 | Słowa kategoryjne (nie produktowe) |
| `produkt` | 160 | Konkretne nazwy produktów |
| `dt` | 60 | Etykiety termiczne |
| `tt` | 85 | Etykiety termotransferowe |
| `tasmy` | 51 | Taśmy termotransferowe |
| `foliowe` | 3 | Sub-kategoria foliowe (DT + TT) |
| `papierowe` | 2 | Sub-kategoria papierowe |
| `specjalne` | 1 | Sub-kategoria specjalne TT |
| `linerless` | 4 | ZeroLiner serie + kategoryjne |
| `krio` | 2 | Kriogeniczne (8100T Cryocool + kategoryjne) |
| `zabezpieczenia` | 2 | VOID i Z-Destruct + kategoryjne |
| `bs5609` | 1 | PolyO 3100T + kategoryjne |
| `ul` | 1 | UL Recognized + kategoryjne |
| `wax` / `wax-resin` / `resin` | 1 każda | Sub-kategorie taśm |

Po imporcie w Ahrefs możesz filtrować np.:
- `materiały AND produkt AND dt` → tylko 12 etykiet termicznych z ich wariantami
- `materiały AND tasmy AND resin` → tylko taśmy żywiczne
- `materiały AND tt AND foliowe` → tylko foliowe TT

---

## Import krok po kroku — Ahrefs Rank Tracker

### Wariant A — Import CSV z tagami (zalecany)

1. Wejdź na **https://app.ahrefs.com/rank-tracker** → wybierz projekt **Takma** (`project_id: 9640671`)
2. Kliknij **"+ Add keywords"** w prawym górnym rogu
3. Wybierz **"Import from CSV"**
4. Załaduj plik **`AHREFS-keywords-materialy.csv`**
5. W konfiguratorze:
   - Kolumna `keyword` → zamapuj na **Keyword**
   - Kolumna `tags` → zamapuj na **Tags**
   - Location: **Poland (Polish)** (jednolicie dla wszystkich)
   - Search engine: **Google**
6. Kliknij **"Import"** → Ahrefs zaciągnie wszystkie 181 słów z tagami

### Wariant B — Import TXT bez tagów (backup)

Jeśli CSV nie chce się zaimportować (czasem Ahrefs marudzi na polskie znaki):

1. Otwórz **`AHREFS-keywords-materialy.txt`**
2. Skopiuj całą zawartość (Ctrl+A → Ctrl+C)
3. W Ahrefs → **"Add keywords"** → **"Paste keywords"**
4. Wklej (Ctrl+V)
5. **Ręcznie dodaj tag** w polu obok wklejania: `materiały`
6. Location: **Poland**
7. **"Add 181 keywords"**

Bez podtagów (kategorii produktowych) — będziesz miał tylko ogólny filtr "materiały", co dla podstawowej kampanii wystarczy.

---

## Po wgraniu — jak monitorować

**Codziennie pierwsze 14 dni**:
- Sprawdź czy wszystkie 181 słów zaciągnięte (filter: tag `materiały`)
- Zobacz pierwsze rankings — większość brandowych będzie od razu w top 20-30 (TAKMA już rankuje na te produkty), część poza top 100

**Co tydzień przez 8 tyg**:
- Filter `materiały AND produkt AND dt` (lub tt, tasmy) → patrz na zmiany pozycji
- Identyfikuj produkty rankujące na pos 11-20 ("striking distance") — to kandydaci do dodatkowej optymalizacji

**Po 4 tyg — pierwszy raport**:
- Średnia pozycja per kategoria (DT/TT/taśmy)
- Liczba słów w top 10
- Liczba słów w top 3
- Lista 5 największych wzrostów + 5 największych spadków

---

## Limity i koszty Ahrefs

**Twoje limity Rank Tracker** (z subskrypcji TAKMA):
- Limit słów kluczowych w projekcie: sprawdź w **Subscription → Limits**
- Obecnie w projekcie Takma masz **244 słów kluczowych** (z poprzedniego setupu)
- Po dodaniu 181 = **425 słów kluczowych w projekcie**

Jeśli limit subskrypcji to <500 słów — bez problemu mieścisz się. Jeśli pojawi się ostrzeżenie o limicie, dwie opcje:
1. Zredukować listę (np. usunąć 4-ty wariant per produkt = -40 słów, zostaje 141)
2. Upgrade subskrypcji Ahrefs

---

## Co dalej — sugestia dodatkowych słów

Po podstawowej kampanii rozważ dodanie:

**Long-tail "kupić/cena/zamówić"** (+40 słów):
- `Z-Select 2000D cena`, `Zebra 2300 Wax cena`, `5095 Resin zamówienie` itp.

**Frazy modyfikatorowe** (+30 słów):
- `etykiety termiczne Zebra hurt`, `taśmy termotransferowe Zebra Warszawa`

**Słowa konkurencji brandowej** (+20 słów):
- `Brother etykiety vs Zebra`, `TSC vs Zebra`, `Honeywell etykiety termiczne`

Razem dodatkowych ~90 słów dla pełnego pokrycia. Ale na start lista 181 wystarcza.

---

## Pliki w tej kampanii

| Plik | Lokalizacja |
|---|---|
| CSV główny | `/Users/jakubtiuchty/takma/AHREFS-keywords-materialy.csv` |
| TXT backup | `/Users/jakubtiuchty/takma/AHREFS-keywords-materialy.txt` |
| Ta instrukcja | `/Users/jakubtiuchty/takma/AHREFS-instrukcja-import-materialy.md` |

Po imporcie pliki można usunąć z lokalnego dysku — same słowa kluczowe są już w Ahrefs.
