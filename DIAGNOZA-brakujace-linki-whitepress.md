# Diagnoza brakujących linków WhitePress dla serwis-zebry.pl

**Data analizy**: 31 maja 2026
**Projekt**: serwis-zebry.pl
**Status**: 3 publikacje opłacone (756,70 zł), Ahrefs nie widzi żadnej

---

## 1. Stan faktyczny

| Portal | Cena (netto) | Data publikacji | Dni od publikacji | Status WhitePress | Status w Ahrefs |
|---|---|---|---|---|---|
| e-produkcja.pl | 128,80 zł | 29.04.2026 | **33** | Opublikowany, zweryfikowany, dofollow | ❌ Brak linka |
| pramed.pl | 322,00 zł | 09.05.2026 | **22** | Opublikowany, zweryfikowany, dofollow | ❌ Brak linka |
| automatyka.pl | 305,90 zł | 11.05.2026 | **20** | Opublikowany, zweryfikowany, dofollow | ❌ Brak linka |
| **RAZEM** | **756,70 zł** | | | | **0 z 3 widoczne** |

**Średni czas indeksowania Ahrefs**: 3-14 dni. Po 20-33 dniach link który istnieje **musi już być widoczny**. Brak = link nie istnieje / ma `nofollow` / strona z `noindex`.

---

## 2. URL-e do sprawdzenia

| Portal | URL pełny |
|---|---|
| e-produkcja.pl | https://e-produkcja.pl/drukarki-etykiet-w-produkcji-jak-uniknac-kosztownych-przestojow-linii/ |
| pramed.pl | [URL z panelu WhitePress — sprawdź ID zamówienia 674312] |
| automatyka.pl | [URL z panelu WhitePress — sprawdź ID zamówienia 674792] |

---

## 3. Lista kontrolna — co sprawdzić w każdym artykule (15 min na portal)

Otwórz każdy URL w przeglądarce (Chrome). Wypełnij tabelę:

| Test | Co robić | e-produkcja | pramed | automatyka |
|---|---|---|---|---|
| **Test 1**: HTTP 200 | Otwórz URL, czy się ładuje | ☐ tak / ☐ 404 / ☐ redirect | ☐ tak / ☐ 404 / ☐ redirect | ☐ tak / ☐ 404 / ☐ redirect |
| **Test 2**: Link istnieje | Ctrl+F → "serwis-zebry" | ☐ jest / ☐ nie ma | ☐ jest / ☐ nie ma | ☐ jest / ☐ nie ma |
| **Test 3**: Atrybut `rel` linka | Prawym → Inspect → tag `<a href="...serwis-zebry...">` | ☐ dofollow / ☐ nofollow / ☐ sponsored | ☐ dofollow / ☐ nofollow / ☐ sponsored | ☐ dofollow / ☐ nofollow / ☐ sponsored |
| **Test 4**: Target URL prawidłowy | Czy `href=` to faktycznie `serwis-zebry.pl/...`, nie redirect typu `/out?url=` | ☐ prawidłowy / ☐ redirect | ☐ prawidłowy / ☐ redirect | ☐ prawidłowy / ☐ redirect |
| **Test 5**: Meta `noindex` | View Source (Ctrl+U) → szukaj `<meta name="robots"` | ☐ index / ☐ noindex | ☐ index / ☐ noindex | ☐ index / ☐ noindex |
| **Test 6**: robots.txt | Otwórz `[portal]/robots.txt` → szukaj `Disallow:` dla Twojego URL | ☐ ok / ☐ blokowany | ☐ ok / ☐ blokowany | ☐ ok / ☐ blokowany |

**Interpretacja wyniku**:

- Test 1 == "404" lub "redirect" → artykuł **został usunięty** przez wydawcę po publikacji → **REKLAMACJA**
- Test 2 == "nie ma" → link **został usunięty** z artykułu → **REKLAMACJA**
- Test 3 == "nofollow" lub "sponsored" → wydawca **zamienił atrybut** po zatwierdzeniu → **REKLAMACJA**
- Test 4 == "redirect" → link technicznie **nie liczy się jako dofollow** (Google liczy przez kod 301/302 ale traci znaczenie) → **REKLAMACJA** (zależnie od typu redirectu)
- Test 5 == "noindex" → cały artykuł **wykluczony z indeksu Google** → link traci moc SEO → **REKLAMACJA**
- Test 6 == "blokowany" → artykuł nie crawlowany przez Google → **REKLAMACJA**

Każda odpowiedź na "REKLAMACJA" = podstawa do zwrotu pieniędzy.

---

## 4. Gdzie szukać atrybutu `rel` w HTML (Test 3)

W kodzie HTML artykułu Twój link wygląda np. tak:

**Dofollow (prawidłowy)**:
```html
<a href="https://www.serwis-zebry.pl/serwis-drukarek-zebra">serwis drukarek Zebra</a>
```
(brak `rel`)

**Nofollow (oszustwo)**:
```html
<a href="https://www.serwis-zebry.pl/serwis-drukarek-zebra" rel="nofollow">serwis drukarek Zebra</a>
```

**Sponsored (też oszustwo, jak nofollow z punktu widzenia SEO)**:
```html
<a href="https://www.serwis-zebry.pl/serwis-drukarek-zebra" rel="sponsored">serwis drukarek Zebra</a>
```

**Redirect (Test 4)**:
```html
<a href="https://e-produkcja.pl/out?url=https://serwis-zebry.pl/...">link</a>
```
(zamiast bezpośredniego linku do serwis-zebry.pl)

---

## 5. Bonus — sprawdzenie z linii poleceń (jeśli wolisz)

W terminalu (macOS / Linux):

```bash
# Pobierz HTML strony
curl -sL -A "Mozilla/5.0" "https://e-produkcja.pl/drukarki-etykiet-w-produkcji-jak-uniknac-kosztownych-przestojow-linii/" > artykul.html

# Sprawdź czy meta noindex
grep -i "noindex" artykul.html

# Sprawdź X-Robots-Tag w nagłówkach
curl -sI -L -A "Mozilla/5.0" "https://e-produkcja.pl/drukarki-etykiet-w-produkcji-jak-uniknac-kosztownych-przestojow-linii/" | grep -i "x-robots"

# Sprawdź link do serwis-zebry.pl i jego atrybuty
grep -oE '<a[^>]*serwis-zebry[^>]*>[^<]*</a>' artykul.html
```

Wynik `grep -oE` pokaże Ci dokładnie cały tag `<a>` z atrybutami — łatwo zobaczysz `rel="nofollow"`.

---

## 6. Szablon reklamacji do WhitePress

### Wariant A — przez panel WhitePress (zgłoszenie do zamówienia)

**Tytuł**: Reklamacja zamówienia [ID zamówienia] — link nie spełnia warunków zamówienia

**Treść**:

> Dzień dobry,
>
> Zgłaszam reklamację publikacji w ramach zamówienia [ID — np. 674792 dla automatyka.pl].
>
> **Dane zamówienia**:
> - Portal: [np. e-produkcja.pl]
> - Data publikacji: [data]
> - Status w panelu WhitePress: "Opublikowany, zweryfikowany, link dofollow"
> - URL artykułu: [pełny URL]
>
> **Problem stwierdzony [data sprawdzenia]**:
> [wybierz odpowiednie z poniższej listy]
>
> 1. Atrybut `rel` linka został zmieniony na `nofollow` po zatwierdzeniu publikacji.
>    Dowód: w kodzie HTML strony pod tagiem `<a href="https://www.serwis-zebry.pl/...">` widnieje `rel="nofollow"`.
>
> 2. Artykuł zawiera meta tag `<meta name="robots" content="noindex">` lub nagłówek `X-Robots-Tag: noindex` — wykluczający stronę z indeksu Google.
>
> 3. Link został usunięty z artykułu po publikacji — w treści brak odsyłacza do https://www.serwis-zebry.pl/.
>
> 4. Link prowadzi przez przekierowanie (`/out?url=`, `/redirect?=`) zamiast bezpośrednio do strony docelowej.
>
> **Skutek**: po 20+ dniach od publikacji link **nie jest zaindeksowany przez crawlery SEO** (Ahrefs, Majestic). Wpisanie domeny `[portal].pl` w Ahrefs jako external linked domain nie pokazuje żadnego linka do `serwis-zebry.pl`. To dowodzi, że wartość linka jako sygnału rankingowego dla Google jest zerowa.
>
> Zamawiałem usługę "publikacja artykułu z linkiem dofollow do strony serwis-zebry.pl" za [cena] zł netto. Otrzymana wartość nie odpowiada zamówieniu.
>
> **Oczekuję**:
> - Naprawienia publikacji przez wydawcę w terminie 7 dni roboczych (przywrócenie linka dofollow / usunięcie `noindex` / usunięcie redirectu)
> - Lub: pełnego zwrotu kwoty [cena] zł netto
>
> W załączeniu dowody:
> - Screenshot panelu WhitePress z potwierdzeniem "Opublikowany, zweryfikowany, dofollow"
> - Screenshot kodu HTML strony pokazujący aktualny stan linka
> - Screenshot Ahrefs Site Explorer dla [portal].pl → External Linked Domains z filtrem "serwis-zebry" — pusty
>
> Z poważaniem,
> Jakub Tiuchty
> TAKMA / serwis-zebry.pl

### Wariant B — bezpośredni mail do BOK WhitePress

Adres: `bok@whitepress.pl` lub `kontakt@whitepress.pl`

**Temat**: Reklamacja braku linka dofollow — 3 zamówienia z kwietnia-maja 2026

Treść analogiczna jak wyżej, ale dla wszystkich 3 zamówień zbiorczo. Wymień każde zamówienie osobno.

---

## 7. Dowody do załączenia (zrób screenshoty)

### Screenshot 1 — z panelu WhitePress

Dla każdego zamówienia: ekran szczegółów zamówienia (jak masz teraz w przeglądarce) pokazujący:
- ID zamówienia
- Portal
- Status "Opublikowany, zweryfikowany"
- "Linki w artykule: Mają być dofollow"
- Datę publikacji
- Koszt

### Screenshot 2 — z kodu HTML strony

W przeglądarce: F12 → Elements → znajdź tag `<a>` linkujący do serwis-zebry.pl → screenshot pokazujący atrybut `rel=` lub jego brak.

### Screenshot 3 — z Ahrefs (lub z Twojego ekranu GSC)

Ahrefs Site Explorer dla każdego z 3 portali:
- Wpisz `e-produkcja.pl` jako target
- Lewy menu → Outgoing Links → External Linked Domains
- Filtr → "serwis-zebry"
- Screenshot pustego wyniku ("No data")

To **niepodważalny dowód**, że link nie istnieje w realnym świecie.

### Screenshot 4 — z `curl` (opcjonalnie, bardzo techniczne)

Wynik `curl` pokazujący nagłówki HTTP (z X-Robots-Tag jeśli jest) lub kawałek HTML z atrybutem `rel="nofollow"`.

---

## 8. Czas reakcji — co realnie spodziewać się

| Wydawca | Polityka reklamacji | Prawdopodobny scenariusz |
|---|---|---|
| WhitePress (BOK) | Standardowo 7-14 dni roboczych | Skontaktują się z wydawcą portalu, poproszą o korektę |
| Wydawca portalu | Brak presji prawnej | Albo szybko naprawi (jeśli to honest mistake), albo będzie próbował zwlekać |
| Termin korekty | 7-21 dni od zgłoszenia | Dofollow przywrócony lub zwrot pieniędzy |

**Co WhitePress NIE robi**:
- Nie kontroluje regularnie czy linki są wciąż dofollow po publikacji
- Nie ma SLA na "trwałość" linka
- W TOS jest klauzula "link może zostać zmieniony przez wydawcę"

Czyli WhitePress jest pośrednikiem — ale przy oficjalnej reklamacji na podstawie dowodów zwykle wymusza na wydawcy korektę albo zwraca kasę.

---

## 9. Lekcja na przyszłość

Jak unikać takich strat:

1. **Po każdej publikacji w linkhouse — w 7-14 dni** sprawdzić ręcznie URL, atrybut `rel`, meta noindex.
2. **W 21-30 dni** sprawdzić w Ahrefs Site Explorer (`Outgoing Links` z portalu → filtr na Twoją domenę). Jeśli pusto → reklamacja od razu.
3. **Wybierać portale z trakcją organiczną** — portal z DR 50 ale ruchem 50 wejść/miesiąc to fasada. Sprawdź ruch w Ahrefs przed kupnem.
4. **Wpłacać częściowo** — niektóre platformy pozwalają na "publish + verify + pay" zamiast "pay upfront".
5. **Trzymać kopie HTML strony w dniu publikacji** — `curl > kopia.html` w dniu zatwierdzenia. To dowód że na początku link był dofollow.

---

## 10. Co konkretnie zrobić w ciągu najbliższych 60 minut

1. **20 min** — Otwórz 3 URL, wykonaj Testy 1-6 z sekcji 3 (lista kontrolna)
2. **10 min** — Zrób screenshoty (sekcja 7)
3. **15 min** — Wypełnij szablon reklamacji (sekcja 6) podstawiając konkretne wartości
4. **5 min** — Wyślij/zgłoś do WhitePress
5. **10 min** — Zapisz wyniki testów w tym pliku (sekcja 3) — żeby wracać do nich po odpowiedzi

W 60 min mamy szansę odzyskać 756,70 zł lub dostać prawdziwe linki w zamian.
