# Wnioski SEO, AEO i GEO przed launchem: /tasmy-termotransferowe

Data audytu: 2026-06-03

Zakres: strona kategorii `https://www.takma.com.pl/tasmy-termotransferowe`, sprawdzona lokalnie w repo `takma` przez render Next.js pod `http://localhost:3001/tasmy-termotransferowe`.

Nie wprowadzono zmian w kodzie strony.

## Podsumowanie

Strona jest warunkowo gotowa do launchu. Nie ma blokera indeksacji: lokalny render zwraca `200`, treść jest renderowana serwerowo, strona ma canonical, meta robots `index, follow`, jeden H1 i bogatą treść kategorii.

Najważniejsze rzeczy do poprawy przed publikacją:

1. Dodać `og:image` i `twitter:image` dla strony.
2. Usunąć albo zastąpić `HowTo` schema, bo ten typ rich result jest deprecated w Google.
3. Skrócić title i meta description.
4. Zaktualizować `lastmod` w sitemap dla `/tasmy-termotransferowe`.
5. Dopisać stronę do `llms.txt` i zoptymalizować obraz hero.

## Ocena robocza

| Obszar | Ocena | Komentarz |
|---|---:|---|
| SEO | 82/100 | Mocna treść i linkowanie, ale metadane i schema wymagają korekty. |
| AEO | 86/100 | Dobre definicje, tabele i FAQ; odpowiedzi są widoczne w HTML. |
| GEO | 78/100 | SSR, robots i llms.txt są dobre, ale brak wpisu tej strony w llms.txt i brak social/OG obrazu osłabiają sygnały. |

## Co działa dobrze

- Strona jest indeksowalna: canonical wskazuje `https://www.takma.com.pl/tasmy-termotransferowe`, meta robots to `index, follow`.
- Treść kategorii jest obszerna: lokalny render pokazał ok. 1923 słowa w `<main>`.
- Struktura treści jest dobra pod AEO: definicja "Co to jest taśma termotransferowa?", porównanie typów, instrukcja doboru, tabela modeli i FAQ.
- Linkowanie wewnętrzne jest mocne: strona linkuje do 12 stron serii oraz do powiązanych kategorii etykiet.
- JSON-LD obejmuje `Organization`, `WebSite`, `CollectionPage`, `ItemList`, `BreadcrumbList`, `TechArticle`, `DefinedTermSet`, `FAQPage` i `HowTo`.
- `robots.txt` dopuszcza boty AI search: `GPTBot`, `ChatGPT-User`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`.
- `llms.txt` istnieje, co jest dobrym sygnałem GEO na poziomie domeny.

## Problemy i rekomendacje

### High: brak og:image i twitter:image

W wynikowym HTML nie ma `og:image` ani `twitter:image`.

Źródło: `src/app/tasmy-termotransferowe/page.tsx`, `generateMetadata()` ustawia `openGraph.title`, `openGraph.description` i `openGraph.url`, ale nie ustawia obrazu.

Dodatkowo globalny obraz `/images/takma-og.png` jest wskazywany w layoucie i wielu miejscach serwisu, ale plik nie istnieje w `public/images`.

Ryzyko:

- gorszy wygląd udostępnień na LinkedIn, Facebooku, Slacku i komunikatorach,
- słabszy sygnał multimedialny dla AI i social preview,
- nieprzewidywalny preview strony kategorii.

Rekomendacja:

- dodać dedykowany obraz 1200 x 630 dla taśm, np. `/images/tasmy-termotransferowe-og.png`,
- ustawić go w `openGraph.images`,
- dodać `twitter.images`,
- naprawić albo dodać brakujący globalny `/images/takma-og.png`.

### High: HowTo schema jest deprecated

Strona emituje `HowTo` JSON-LD dla sekcji "Jak dobrać taśmę do drukarki".

Źródło: `src/app/tasmy-termotransferowe/page.tsx`, blok `howToSchema`.

Ryzyko:

- Google nie pokazuje już HowTo rich results,
- typ może dawać fałszywe poczucie wsparcia w Search Console,
- lepiej nie używać przestarzałego typu schema przed launchem.

Rekomendacja:

- zostawić instrukcję jako widoczną treść HTML,
- usunąć `HowTo` JSON-LD,
- ewentualnie wzmocnić `TechArticle` albo `WebPage` o `about`, `mentions`, `mainEntity` i `dateModified`.

Źródło zewnętrzne: Google Search Central, "Changes to HowTo and FAQ rich results": https://developers.google.com/search/blog/2023/08/howto-faq-changes

### Medium: FAQPage schema ma ograniczoną wartość dla Google

Strona emituje `FAQPage` JSON-LD. Treść FAQ jest widoczna na stronie, więc technicznie jest spójna z HTML. Problem jest strategiczny: Google ogranicza FAQ rich results do znanych, autorytatywnych stron rządowych i zdrowotnych.

Ryzyko:

- bardzo niska szansa na klasyczny FAQ rich result,
- schema raczej nie da widocznego efektu w Google Search.

Rekomendacja:

- zostawić widoczne FAQ, bo jest dobre pod AEO i użytkownika,
- `FAQPage` można zostawić jako machine-readable context, ale nie traktować go jako źródła rich result,
- priorytetowo dopracować treści pytań i odpowiedzi, zamiast polegać na samym schema.

Źródło zewnętrzne: Google Search Central FAQPage docs: https://developers.google.com/search/docs/appearance/structured-data/faqpage

### Medium: title i meta description są za długie

Wynikowy HTML:

- title: 74 znaki,
- meta description: 168 znaków.

Aktualne źródło: `src/data/products.ts`, pola `seoTitle` i `seoDescription` dla `tasmy-termotransferowe`.

Ryzyko:

- Google może skrócić lub przepisać title/snippet,
- najważniejsze frazy mogą być ucięte w wynikach.

Rekomendacja:

- skrócić title do ok. 55-60 znaków,
- skrócić description do ok. 150-155 znaków,
- zachować frazy: "taśmy termotransferowe Zebra", "woskowe", "woskowo-żywiczne", "żywiczne".

Przykład title:

`Taśmy termotransferowe Zebra | Wosk, WR, żywica`

Przykład description:

`Oryginalne taśmy Zebra: 2300 Wax, 3200 Wax/Resin i 5095 Resin. Dobór do etykiety, drukarki i zastosowania. 12 modeli, 140 wariantów.`

### Medium: niespójny lastmod w sitemap

W sitemap `/tasmy-termotransferowe` ma `lastmod` `2026-02-15`, podczas gdy strona emituje `dateModified: 2026-05-31` w `TechArticle`.

Źródło:

- `src/app/sitemap.ts`, `lastUpdated = new Date('2026-02-15')`,
- `/tasmy-termotransferowe` trafia do sitemap przez ogólną listę `subcategoryPages`,
- strony serii i wariantów taśm mają już `2026-05-30`.

Ryzyko:

- słabszy sygnał świeżości dla nowo przebudowanej strony,
- niespójność między sitemap i schema.

Rekomendacja:

- nadać `/tasmy-termotransferowe` własny `lastModified`, np. `2026-05-31`,
- albo rozszerzyć logikę sitemap o mapę dat dla przebudowanych landingów.

### Medium: obraz hero jest ciężki jako plik źródłowy

`public/images/tasmy-hero.png` ma 2 050 437 bajtów, czyli ok. 2 MB.

Next.js generuje zoptymalizowane warianty, ale plik źródłowy nadal jest ciężki i hero jest ładowany z `priority`, więc może wpływać na LCP.

Rekomendacja:

- przygotować WebP/AVIF dla hero,
- ograniczyć rozmiar źródłowy,
- sprawdzić LCP w PageSpeed Insights po deployu.

### Medium: llms.txt istnieje, ale nie zawiera wpisu dla tej strony

`public/llms.txt` istnieje i jest rozbudowany, ale nie znalazłem w nim wpisu dla `/tasmy-termotransferowe`.

Ryzyko:

- AI crawlery mają mniej bezpośrednich wskazówek, że ta strona jest kluczowym przewodnikiem po taśmach.

Rekomendacja:

- dopisać link do `/tasmy-termotransferowe` w sekcji materiałów eksploatacyjnych albo kluczowych stron,
- dodać krótki opis: "Przewodnik po taśmach termotransferowych Zebra: woskowe, woskowo-żywiczne, żywiczne, dobór do etykiety i drukarki."

## AEO: wnioski szczegółowe

Mocne elementy:

- pytaniowe nagłówki: "Co to jest taśma termotransferowa?", "Jak dobrać taśmę do drukarki?", "Jak dobrać taśmę do etykiety?",
- odpowiedzi są konkretne i widoczne w HTML,
- tabele dobrze odpowiadają na intencje porównawcze,
- FAQ obejmuje pytania zakupowe i techniczne.

Do poprawy:

- dodać krótką odpowiedź 40-60 słów bezpośrednio pod H1 lub pod pierwszym H2,
- skrócić część odpowiedzi FAQ, bo niektóre są długie i mogą być mniej cytowalne,
- wprowadzić 1-2 bloki typu "Najkrótsza rekomendacja" z decyzją: papier = wax, papier z tarciem = wax/resin, folia = resin.

## GEO: wnioski szczegółowe

Mocne elementy:

- SSR: treść jest dostępna w HTML bez konieczności wykonywania JavaScriptu,
- `robots.txt` pozwala kluczowym crawlerom AI search,
- `llms.txt` istnieje,
- strona ma definicje, tabele i dane liczbowe.

Do poprawy:

- dodać stronę do `llms.txt`,
- dodać dedykowany obraz OG,
- dodać bardziej samodzielne, cytowalne bloki odpowiedzi po 100-160 słów,
- rozważyć widoczny znacznik aktualizacji treści, np. "Aktualizacja: maj 2026", spójny z `dateModified`.

## Priorytet wdrożenia

1. Przed launchem: `og:image` / `twitter:image` i brakujący globalny `takma-og.png`.
2. Przed launchem: usunięcie lub zastąpienie `HowTo` JSON-LD.
3. Przed launchem: skrócenie title i meta description.
4. Przed launchem lub zaraz po: poprawienie `lastmod` w sitemap.
5. Po launchem: dopisanie strony do `llms.txt`.
6. Po launchem: optymalizacja obrazu hero i test PageSpeed/LCP.

## Ostateczna decyzja

Strona może iść do launchu, jeśli akceptujemy drobne ryzyka w social preview i schema. Z punktu widzenia SEO/AEO/GEO lepiej jednak wykonać 3 poprawki przed publikacją: obraz social, korekta schema `HowTo`, skrócenie metadanych.

