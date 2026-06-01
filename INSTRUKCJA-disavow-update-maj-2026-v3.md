# Aktualizacja disavow takma.com.pl — instrukcja v3 (trzecia fala SEOExpress)

**Data**: 31 maja 2026
**Powód**: Trzecia fala ataku PBN farmy SEOExpress — nowy template domen `.store` (71 nowych domen w 14 dni, od 16 do 31 maja).

---

## Co się stało (skrót)

- **Atak rozpoczął się 16 maja** — pierwsze pojawienia nowej fali (poprzedni disavow v2 wgrałeś 20 maja, zadziałał ok. 14 dni)
- **W ciągu 14 dni doszło +82 nowe refdomains** (z 279 na 361)
- **DR spadł z 31 (19 maja) na 26 (20 maja)** — spadek o 5 punktów w 1 dzień
- Plateau na DR 26 od 20 maja do 31 maja — atak nadal aktywny, czeka na disavow

## Sprawcy i ich nowy template

Dokładnie ta sama farma co wcześniej (SEOExpress), tylko **nowy wzorzec nazewnictwa domen**:

**Stare wzorce** (już w disavow v2): `[prefix]-seoexpress-tier-1-house.store`, `master-seoexpress-content-consultants.store` itd.

**Nowe wzorce** (do dodania):
- `master-digital-studio-seoexpress.store`
- `expert-seoexpress-authority-directory.store`
- `advanced-link-building-group-seoexpress.store`
- `seoexpress-modern-backlink-platform.store`
- `prime-high-da-seoexpress.store`
- `verified-seoexpress-search-directory.store`
- (... +65 podobnych)

Plus dorzucone inne spamy:
- `linkrankboost.shop`, `rankxlinks.shop`, `theguestposts.shop`, `thetoprankingseo.shop`, `ranklinkpro.shop` (DR 35-54)
- `pagesearch.net`, `indexaward.com`, `allwebsitesdirectory.com`, `tunca.org`, `sporstcenter.com`, `wonvision.com`, `wallpapers.pro`, `ycm.info`, `marathiladies.com` (drobne spamy)
- `acquire.co.in`, `allinone.co.in`, `findit.co.in`, `addurl.in` (indyjskie spam directories)

Wszystkie linkują wzorcem AI-generated marketing-speak typu: *"takma.com.pl Organic Growth Unstoppable: Professional Guest Posting + Dofollow Link Building..."*

---

## Co zmieniłem w pliku

| Wartość | Stara wersja (v2) | Nowa wersja (v3) |
|---|---|---|
| Plik | `disavow-merged-final-v2.txt` (7 maja → 20 maja zaktualizowane) | **`disavow-merged-final-v3.txt`** (31 maja) |
| Liczba domen | 443 | **514** |
| Nowych | — | **+71** |
| Bonus | — | Domeny już w v2 ze starej fali nie są duplikowane (dedup) |

---

## Jak wgrać do Google Search Console — krok po kroku

1. Wejdź na: **https://search.google.com/search-console/disavow-links**

2. Wybierz właściwość: **takma.com.pl** (lub `https://www.takma.com.pl` — zależy od tego, którą wersję masz zweryfikowaną)

3. Kliknij **"Wybierz plik z odrzuconymi linkami"** (Choose file)

4. Wybierz plik: **`/Users/jakubtiuchty/takma/disavow-merged-final-v3.txt`**

5. Potwierdź wczytanie. Google pokaże komunikat: *"Plik zawiera 514 domen i 0 URL-i"*

6. Gotowe.

**Uwaga ważna (przypomnienie)**: Google **zastępuje cały plik** przy każdym wgraniu. Wersja v3 zawiera **wszystkie poprzednie 443 domeny + 71 nowych**. Niczego nie tracisz, niczego nie musisz dodawać ręcznie.

---

## Realny scenariusz po wgraniu

**Krótkoterminowo (1-3 tygodnie)**:
- Google przestaje liczyć nowe spamy z 16-31 maja do oceny domeny
- Ahrefs jeszcze przez 2-4 tygodnie pokazuje DR 26 (niezależny crawler Ahrefs, niezsynchronizowany z Google)

**Średnioterminowo (4-8 tygodni)**:
- DR w Ahrefs zaczyna wracać do poziomu 29-31 (wartość sprzed ataku)
- Pozycje w Google nie powinny się zmienić — atak był na linki nofollow, Google i tak ich nie liczył jako sygnałów rankingowych

**Długoterminowo**:
- **Monitoruj profil linków co 14 dni** — atakujący wraca z nową falą co ~30 dni. Następna fala spodziewana w połowie czerwca.
- Jeśli widać +30 nowych refdomains w 14 dni — to atak. Generujemy v4.

---

## Dlaczego to ten sam atakujący wciąż wraca

Trzy obserwacje:
1. **Wzorzec anchora identyczny** — wszystkie domeny linkują marketing-speakiem o "Boost Ahrefs DR" i "buy backlinks" — to **automatyczny generator AI** kogoś, kto promuje swoją usługę SEO (SEOExpress) używając **wzmianek o realnych markach** (jak TAKMA, ale też innych).
2. **TAKMA nie jest celem osobno** — jesteś po prostu ofiarą "scrappingu" listy domen DR 25-35 z polskiego e-commerce. Każda firma w tej grupie dostaje analogiczny atak.
3. **Atak ma niski koszt dla atakującego** — kupuje hosting + domenę `.store` za $1, hostuje statyczną stronę z linkami do 20-100 marek, scapera daje znać Ahrefs, koszt ataku per ofiara to ułamek dolara.

**To nie jest "problem TAKMA"** — to standardowy szum dla każdej DR-rosnącej domeny w Polsce. Trzeba traktować jak konserwację.

---

## Czego NIE robić

1. **Nie kontaktować atakującego** (jak np. seoexpress.org żeby usunąć linki) — to przyciąga uwagę, generuje więcej fal.
2. **Nie wpisywać poszczególnych domen do disavow ręcznie** — używamy zawsze `domain:` (cała domena), nie `https://`.
3. **Nie czyścić linków zewnętrznych przez prośbę do webmasterów** — to są farmy, nie ma webmasterów do kontaktu.
4. **Nie wykluczać Ahrefsa** w sygnałach — DR 26 vs 31 to żadna realna szkoda dla biznesu. Klienci nie patrzą na DR.

---

## Plik gotowy do wgrania

**Lokalizacja**:

`/Users/jakubtiuchty/takma/disavow-merged-final-v3.txt`

**Wielkość**: 22 KB, 514 domen.

---

## Następne kroki — sprawdź też inne domeny

Atakujący wzmiankuje czasem kilka domen w jednej fali. Sensowne sprawdzenie:
- `serwis-zebry.pl`
- `ezdrp24.com.pl`
- `tc22.pl`
- `zebrazt411.pl`
- `et401.pl`

Jeśli któraś z nich też ma +5 nowych domen z farmy SEOExpress w ostatnich 14 dniach — generujemy disavow analogicznie.

Czy chcesz, żebym sprawdził pozostałe domeny w Ahrefs i wygenerował podobne disavow dla nich (jeśli zaatakowane)?
