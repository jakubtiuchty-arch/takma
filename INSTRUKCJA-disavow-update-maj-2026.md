# Aktualizacja pliku disavow dla takma.com.pl — instrukcja

**Data**: 16 maja 2026
**Powód**: Atak spamerski z farmy PBN seoexpress.org — łącznie 60 domen w dwóch falach (kwiecień + maj 2026)

---

## Co się zmieniło

| | Wartość |
|---|---|
| Plik poprzedni | `disavow-merged-final.txt` (7 maja 2026) — 385 domen |
| **Plik nowy** | **`disavow-merged-final-v2.txt`** — 443 domeny |
| Dodanych | 58 nowych domen z farmy PBN |
| Bonus | Domena `artsjc.org` (norweski spam erotyczny) była już w pliku |

---

## Co konkretnie dodałem

Dwie fale ataku z farmy "SEOExpress.org":

**Fala 1 (15-17 kwietnia 2026)** — 34 domeny z końcówkami `.shop`, `.website`, `.online`, `.site`, `.space`, `.store`. Przykłady:
- `seoexpress.shop`, `seoexpress.online`, `seoexpress.store`
- `thebacklink.shop`, `theguestpost.shop`
- `kawaiishop.shop`, `mysky-shop.shop`, `simplywebshop.shop`

**Fala 2 (15-16 maja 2026)** — 26 nowych domen z końcówką `.store` i prefiksami typu "luxury", "prime", "elite", "advanced":
- `luxury-seoexpress-tier-1-house.store`
- `prime-white-hat-seoexpress-network.store`
- `elite-authority-marketplace-seoexpress.store`
- `master-seoexpress-content-consultants.store`

Wszystkie wstawiają **identyczny tekst** ("When starting out with takma.com.pl, getting noticed was impossible until a mentor recommended checking out SEOExpress.org...") jako sztuczne "case study". Atakujący promuje swoją "usługę SEO" przez wzmianki o realnych markach.

---

## Jak wgrać do Google Search Console — krok po kroku

1. Wejdź na: **https://search.google.com/search-console/disavow-links**

2. Wybierz właściwość: **takma.com.pl** (lub `https://www.takma.com.pl` — zależy od tego, którą wersję masz zweryfikowaną)

3. Kliknij **"Wybierz plik z odrzuconymi linkami"** (Choose file)

4. Wybierz plik: **`/Users/jakubtiuchty/takma/disavow-merged-final-v2.txt`**

5. Potwierdź wczytanie. Google pokaże komunikat typu "Plik zawiera 443 domeny i 0 URL-i"

6. Gotowe. Aktualizacja zacznie działać w Google w ciągu kilku dni do tygodni.

**Uwaga ważna**: Google **zastępuje cały plik** przy każdym wgraniu. To znaczy że jak wgrywasz nową wersję, stara w 100% znika — dlatego nowa wersja musi zawierać WSZYSTKIE poprzednie domeny + nowe. Wersja v2 to ma już zrobione automatycznie (385 + 58 = 443).

---

## Co się stanie po wgraniu

**Krótkoterminowo (1-2 tygodnie)**:
- Google przestaje uwzględniać te linki w obliczaniu jakości profilu Twojej domeny
- Ahrefs jeszcze przez 2-4 tygodnie pokazuje stary obraz — bo Ahrefs ma własny crawler

**Średnioterminowo (1-2 miesiące)**:
- DR w Ahrefs powinno wrócić do poziomu 28-30 (zanim spadło z powodu ataku)
- Twoja pozycja w Google na słowa kluczowe nie powinna się zmienić — bo Google **i tak ignorował** te linki (były nofollow)

**Długoterminowo**:
- Sprawdzaj profil linków co 30 dni
- Jeśli pojawi się kolejna fala (ten sam atakujący lub inny PBN) — wracaj do mnie, zrobimy aktualizację

---

## Dlaczego to się dzieje akurat takma.com.pl

Twoja domena ma teraz **DR 30** (zanim spadła do 26 z powodu ataku) i ~ 120 odwiedzin organic miesięcznie. To poziom, na którym automatyczne boty PBN zaczynają "łapać" domenę w swoich listach celów. To **nie znaczy, że robisz coś źle** — wręcz przeciwnie, znaczy że Twoja domena urosła do poziomu, kiedy ją widać.

Większe polskie firmy B2B mają takie ataki co kilka tygodni. To kosztuje średnio 1-2 godziny pracy na kwartał, żeby utrzymywać aktualny disavow.

---

## Plik gotowy do wgrania

Lokalizacja:

**`/Users/jakubtiuchty/takma/disavow-merged-final-v2.txt`**

Wielkość: 19 KB, 443 domeny.

---

## Następne kroki — sprawdź też inne domeny

Jeśli atakujący wzmiankuje wiele Twoich domen na raz, może też pojawić się spam dla:

- `serwis-zebry.pl`
- `ezdrp24.com.pl`

Czy mam sprawdzić te dwie domeny w Ahrefs pod kątem analogicznych spam linków z farmy seoexpress?
