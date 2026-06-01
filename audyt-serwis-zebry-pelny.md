# Audyt SEO serwis-zebry.pl (Ahrefs, 2026-05-09)

## TL;DR

| Metryka | serwis-zebry.pl | serwis-zebra.pl (rywal) |
|---|---|---|
| DR | **13** | **23** ⚠️ |
| Live backlinks | 9 679 | — |
| Live refdomains | 6 | — |
| Org keywords PL | 44 | 44 |
| Top 1-3 PL | 7 | 7 |
| Org traffic/mies | **282** ⭐ | 212 |
| Traffic value | $8 469 ⭐ | $7 132 |

**Diagnoza**: rywal ma o 10 punktów wyższy DR, ale my mamy więcej traffic. **Wygrywamy na content, przegrywamy na link equity**.

**Problem**: 90% traffic pochodzi z **poradników** (sterowniki, ZPL, setup utilities), nie z **service**. Strony service-intent rankują marginalnie.

---

## Backlink profile — clean!

W przeciwieństwie do takma.com.pl (92% spam), serwis-zebry.pl ma **100% clean profile**:

| Anchor | Refdomains | Top DR |
|---|---|---|
| Serwis drukarek Zebra | 3 | 27 |
| Serwis-Zebry.pl | 3 | 27 |
| Blog — poradniki i FAQ | 3 | 27 |
| Poradniki wideo | 3 | 27 |
| Instrukcje obsługi (PL) | 3 | 27 |
| Sterowniki Windows | 3 | 27 |
| serwis terminali Zebra | 2 | 49 |
| Przejdź do serwis-zebry.pl → | 2 | 7 |
| najczęstsze awarie terminali Zebra | 1 | 49 |

**Wszystkie anchory są branded + service-related**. To zdrowy profil. Disavow niepotrzebny.

Główny limit: **tylko 6 refdomains** — bardzo mało. To bottleneck DR (DR 13 odzwierciedla ten brak external links).

---

## Top 15 stron — split „service" vs „poradnik"

| URL | Visits | UR | Top kw | Pos | Vol | Typ |
|---|---|---|---|---|---|---|
| /sterowniki | **98** | 4.8 | zebra gk420d sterowniki | 4 | 200 | 📚 poradnik |
| /blog/zebra-setup-utilities-poradnik-konfiguracja | **94** | 4.6 | zebra setup utilities | 2 | 450 | 📚 poradnik |
| /blog/sterowniki-zebra-windows-11... | 16 | 4.5 | zebra zd420 sterowniki | 3 | 100 | 📚 poradnik |
| /blog/drukarka-zebra-nie-drukuje-przyczyny-rozwiazania | 14 | 4.7 | drukarka zebra nie drukuje etykiet | 2 | 40 | 🛠 SERVICE |
| /instrukcje/zebra-zd421t | 13 | 0.0 | zebra zd421 instrukcja | 3 | 100 | 📚 poradnik |
| /blog/zebra-designer-3-poradnik-projektowanie-etykiet | 9 | 0.0 | zebra designer 3 | 9 | 200 | 📚 poradnik |
| /instrukcje/zebra-tc21/instrukcja-po-polsku | 9 | 0.0 | zebra tc21 | 6 | 150 | 📚 poradnik |
| /instrukcje/zebra-zt610/instrukcja-po-polsku | 7 | 0.0 | zebra zt610 | 6 | 100 | 📚 poradnik |
| /instrukcje/zebra-zt230/instrukcja-po-polsku | 5 | 4.5 | zebra zt230 | 10 | 200 | 📚 poradnik |
| **/serwis-zebra/katowice** | 5 | 4.8 | serwis zebra | 4 | 60 | 🛠 SERVICE |
| /instrukcje | 4 | 5.0 | zebra zd420 instrukcja | 7 | 40 | 📚 poradnik |
| /blog/kalibracja-drukarki-zebra-poradnik-krok-po-kroku | 3 | 5.0 | zebra zd420 kalibracja | 6 | 40 | 🛠 SERVICE |
| /blog/jezyk-zpl-poradnik-komendy-przyklady | 3 | 4.6 | zpl co to | 10 | 40 | 📚 poradnik |
| / (homepage) | 2 | 5.0 | zebra serwis | 9 | 70 | 🛠 SERVICE |
| **/serwis-drukarek-zebra** | **0** | **0.0** | zebra zt 410 | 6 | 20 | 🛠 SERVICE |
| **/serwis-zebra/wroclaw** | **0** | 4.8 | zebra wrocław | 9 | 40 | 🛠 SERVICE |
| /blog/cennik-naprawy-drukarki-zebra-koszty-serwisu | **0** | 5.0 | naprawa drukarek | 2 | 500 | ⚠️ generic |

## Wniosek z top stron

**Service stron (z 7 service URLs):**
- /blog/drukarka-zebra-nie-drukuje... — 14 visits ⭐
- /serwis-zebra/katowice — 5 visits
- /blog/kalibracja-drukarki-zebra... — 3 visits
- /  (homepage) — 2 visits
- /serwis-drukarek-zebra — **0 visits**
- /serwis-zebra/wroclaw — **0 visits**
- /blog/cennik-naprawy-drukarki-zebra-koszty-serwisu — **0 visits** (rankuje wysoko ale 0 click)

**Łącznie service traffic**: ~24 visits/mies (8% całości)

**Poradnik traffic**: ~258 visits/mies (92% całości)

To jest **odwrotne ułożenie niż powinno** dla portalu serwisowego.

---

## Najważniejsze problemy

### Problem 1 — strona kategorii service ma UR 0 i 0 traffic

`/serwis-drukarek-zebra` (główna strona service drukarek) — **UR 0, 0 backlinków, 0 visits**.

To jest top-level service hub i powinna być najsilniejsza. Aktualnie jest sierotą — nikt na nią nie linkuje, Google nie traktuje jej poważnie.

**Akcja**: 
- Dodać silne internal linking ze wszystkich blog postów do tej strony
- Dodać do header/nav jako primary item
- Zewnętrzne linki (np. z takma.com.pl/zebra → serwis-zebry.pl/serwis-drukarek-zebra)

### Problem 2 — strony lokalne mają UR 4.8 ale 0-5 visits

`/serwis-zebra/wroclaw` (UR 4.8) — 0 visits
`/serwis-zebra/katowice` (UR 4.8) — 5 visits
`/serwis-zebra/warszawa` — pozycja 1 (z poprzednich danych) ale niski volume

Local SEO słabo skonwertowane mimo dobrego UR. Powód: keyword "serwis zebra warszawa" ma niski volume w Ahrefs (vol 0 w danych), ale w GSC zazwyczaj ludzie szukają. Tutaj problemem może być:
- Brak Local Business Schema (LocalBusiness + areaServed dla każdego miasta)
- Brak Google Business Profile per miasto (lub jeden GBP zamiast wielu)
- Title/meta nie eksponuje miasta wystarczająco

### Problem 3 — strona „cennik naprawy" rankuje na generic „naprawa drukarek"

`/blog/cennik-naprawy-drukarki-zebra-koszty-serwisu`:
- Pozycja **2** dla „naprawa drukarek" (vol 500)
- Pozycja 2 dla „głowica drukarki" (vol 150)
- **0 visits** — czyli AI Overview / People Also Ask zżerają click-through

User powiedział: nie chce rankować na generic. **Akcja: przepisz title/H1/meta na strict Zebra-only** (jak omówiliśmy w poprzednim raporcie).

### Problem 4 — bardzo niska liczba refdomains (tylko 6)

Wszystkie 6 to legit (głównie z takma.com.pl, microsites). Brak organic zewnętrznych linków.

**Akcja**: link building to highest priority dla wzrostu DR z 13 do 25+.

---

## Co z keywords serwis-related?

Z 44 obecnie rankujących, **tylko 4 są strict service** (zawierają „serwis"/„naprawa"/„usterka" + Zebra/model):

1. **serwis zebra** — poz 4 (60 vol, 5 visits) — /serwis-zebra/katowice
2. **zebra serwis** — poz 9 (70 vol, 2 visits) — homepage  
3. **drukarka zebra nie drukuje etykiet** — poz 1 (40 vol, 14 visits) — service intent ✅
4. **zebra zd420 kalibracja** — poz 6 (40 vol, 3 visits) — service intent ✅

To wszystko. **4 service keywords z 44 = 9%**.

Pozostałe 40 to: instrukcje, sterowniki, ZPL, setup utilities, zebra designer — czyli **informational/poradnikowe**.

---

## Rekomendacje strategiczne

### Krótkoterminowe (1-2 tyg)

1. **Dodaj 257 service keywords z poprzedniego pliku** do Rank Trackera. Da bazę monitorowania.
2. **Przepisz title/meta** dla `/blog/cennik-naprawy-drukarki-zebra-koszty-serwisu` — usuń generic „naprawa drukarek" intent.
3. **Dodaj LocalBusiness schema** na strony per miasto (`/serwis-zebra/warszawa`, /wroclaw, /gdansk itd.) z areaServed.

### Średnioterminowe (4-8 tyg)

4. **Stwórz dedykowane strony service per model**:
   - `/serwis-drukarek-zebra/zd421` — naprawa, najczęstsze usterki, cennik
   - `/serwis-drukarek-zebra/zt411`
   - `/serwis-drukarek-zebra/zt230`
   - `/serwis-terminali-zebra/tc21`, `/tc22`, `/tc52`, `/tc53`, `/mc3300`, `/mc3400`, `/mc9400`
   - `/serwis-skanerow-zebra/ds2208`, `/ds3608`, `/ds3678`, `/li2208`
   
   Każda strona z H1 „Serwis Zebra MODEL — diagnostyka, naprawa, koszty", FAQPage schema, breadcrumbs.

5. **Wzmocnij `/serwis-drukarek-zebra` (UR 0!)** — top-level service category. Internal linking ze wszystkich blog postów.

### Długoterminowe (8-16 tyg)

6. **Link building** — DR 13 to bottleneck. Cele:
   - Cross-linki z takma.com.pl (już są częściowo, wzmocnić)
   - Branżowe portale (logistyka, produkcja)
   - Partnerstwa z firmami które mają Zebra w stack (warto zachęcić ich do linków: „ich serwis Zebra: serwis-zebry.pl")

7. **Stop pisanie nowych poradników**. Aktualne 6-7 poradników (setup, sterowniki, ZPL itd.) generują 92% trafficu — wystarczą. **Nowy content tylko service-related**.

---

## Porównanie z głównym rywalem (serwis-zebra.pl)

| Metryka | serwis-zebry.pl (my) | serwis-zebra.pl (rywal) | Stan |
|---|---|---|---|
| DR | 13 | **23** | -10 ❌ |
| Org keywords PL | 44 | 44 | równo |
| Top 1-3 | 7 | 7 | równo |
| **Org traffic** | **282** | 212 | **+70 ⭐ wygrywamy** |
| Traffic value | $8 469 | $7 132 | +$1.3k ⭐ |

**Wygrywamy na content jakości** — więcej trafficu mimo niższego DR. Zła wiadomość: rywal ma więcej refdomains/zaufania od Google.

Rywal pewnie wkrótce przeskoczy nas, gdy bardziej zoptymalizuje content. **Trzeba ich uderzyć w 4-8 tyg** — przez dodanie 30+ stron service-per-model.

---

## Podsumowanie — najpilniejsze ruchy

1. **Dziś (1h)**: 257 service keywords do Rank Tracker + 5 competitorów
2. **Ten tydzień (4h)**: przepisz `/cennik-naprawy-drukarki-zebra-koszty-serwisu` + LocalBusiness schema + wzmocnij internal linking do `/serwis-drukarek-zebra`
3. **Następne 4 tyg (~30h)**: 30+ stron `/serwis-{kategoria}/{model}` (drukarki + terminale + skanery)
4. **Długoterminowo**: link building do DR 25+

Po tych ruchach realna meta:
- Org traffic 282 → **600-800 visits/mies** w 12 tygodni
- DR 13 → **20-25** (po link building)
- Service traffic z 24 → **300+** visits/mies (10-12× wzrost)
- Wyprzedzenie serwis-zebra.pl pod każdym względem

Gotowy na priorytet 1 (keywords + competitors) — masz pliki w folderze. Po ich dodaniu i pierwszych zmianach kodu, sprawdzimy efekt za 7 dni.
