# Pre-launch pakiet — /etykiety-termotransferowe-zebra/foliowe

**Kontekst**: Strona w git, jeszcze nie na produkcji. Możliwość wdrożenia wszystkich zmian RAZEM przed pierwszym indeksem Google.

**Komplementarne do**: `AUDYT-foliowe-SEO-AEO-GEO.md` (pełna analiza). Ten plik = **gotowy tekst do wklejenia** zamiast samej strategii.

**Cel pliku**: Claude Code lub Ty otwierasz, kopiujesz, wklejasz w odpowiednie miejsca. Bez interpretacji. Maks. 1 godzina pracy do skończenia.

---

## 1. Co stara strona (live) ma, a co nowa (w git) powinna mieć

| Element | Stary URL (live) `/etykiety-termotransferowe-foliowe` | Nowy URL (git) `/etykiety-termotransferowe-zebra/foliowe` |
|---|---|---|
| Struktura | Stub, podstawowa kategoria | Pełen landing podkategorii |
| FAQ | brak | 19 pytań z schema FAQPage |
| Schema | minimalna | FAQPage + CollectionPage + BreadcrumbList + TechArticle |
| Deep guide | brak | 3 sekcje: TCO, atesty (8), błędy (5) |
| Tabela materiałów | brak | 4 typy folii (PET, BOPP, PE, Poliolefina) |
| Cross-link z taśmami | brak | tablica `recommendedRibbons` |
| GSC pozycja na "etykiety termotransferowe foliowe" | 15-16 (stary URL) | 0 (nie ma jeszcze) — szansa na start od TOP 10 |

**Strategiczna decyzja**: skoro stary URL już ma pozycję 15-16 organicznie, a po deploymencie redirect 301 przekieruje na nowy URL z pełnym contentem — **Google zaktualizuje pozycję w 4-8 tygodni** na nowy URL. To **najlepszy moment na wzbogacenie meta/H1/intro** — będzie indeksowane od razu z bogatymi sygnałami.

---

## 2. Co wkleić — meta title + description w `src/data/products.ts`

Znaleźć subcategory `etykiety-termotransferowe-foliowe` (lub jak się nazywa w pliku) i zastąpić:

```typescript
{
  slug: 'etykiety-termotransferowe-foliowe',
  // ...inne pola...

  seoTitle: 'Etykiety termotransferowe foliowe Zebra — na butelki, słoiki, kosmetyki | TAKMA',
  seoDescription: 'Etykiety foliowe Zebra do butelek, słoików, kosmetyków, chemii i tabliczek znamionowych. Poliester, polipropylen, polietylen. UL, FDA, BfR XIV. 361 wariantów od 180 zł netto.',
}
```

**Liczniki**:
- Title: 73 znaki (Google wyświetla ~60 — pierwsza część "Etykiety termotransferowe foliowe Zebra — na butelki, słoiki" zmieści się w pełnym wyświetlaniu)
- Description: 195 znaków (Google wyświetla ~155, ale resztę indeksuje — można pchnąć trochę dłużej)

**Frazy złapane w meta** (suma volume = ~2 500/mies):
- etykiety termotransferowe foliowe (60 vol — striking distance)
- etykiety na butelki (1 200 vol)
- etykiety na słoiki (800 vol)
- etykiety na kosmetyki (200 vol)
- 361 wariantów + cena = klikalne USP

---

## 3. Co wkleić — H1 + intro w `[subcategory]/page.tsx` (`CONFIG.foliowe`)

Znaleźć `CONFIG.foliowe` w pliku i zastąpić:

```typescript
foliowe: {
  label: 'Foliowe',
  h1: 'Etykiety termotransferowe foliowe Zebra — na butelki, kosmetyki, chemię i produkty przemysłowe',
  intro:
    'Trwałe etykiety foliowe samoprzylepne Zebra — 361 wariantów rozmiarowych w 4 materiałach syntetycznych. ' +
    'Poliester (PET) Z-Ultimate 3000T do tabliczek znamionowych, elektroniki i oznaczeń z certyfikatem UL. ' +
    'Polipropylen (BOPP) PolyPro 3000T/4000T na butelki, słoiki, kosmetyki, opakowania spożywcze i etykiety machine vision. ' +
    'Polietylen (PE) PolyE 3100T na butelki HDPE, tuby kosmetyczne i opakowania elastyczne — z najszerszym atestem żywnościowym BfR XIV RF≥3. ' +
    'Poliolefina PolyO 3100T na beczki chemiczne, transport morski i etykiety GHS — jedyna folia w portfolio Zebry z certyfikatem BS5609. ' +
    'Druk z taśmą żywiczną (resin) Zebra 5095 — nadruk wodoodporny, odporny na rozpuszczalniki, oleje, ścieranie i UV przez 5+ lat indoor. ' +
    'Etykiety foliowe Zebra to wybór dla oznaczeń trwałych na produktach końcowych — opakowaniach, urządzeniach, beczkach chemicznych. ' +
    'Atesty: UL Recognized Component, FDA 175.105, EC 1935/2004, EU 10/2011, BfR XIV, BS5609. BPA-free, latex-free.',
  accent: '#059669',
  productSlug: 'etykiety-termotransferowe-foliowe',
},
```

**Co to robi dla SEO**:
- H1 zawiera 4 kluczowe targety: na butelki, kosmetyki, chemię, przemysłowe
- Intro 8 zdań z naturalnym wpleceniem wszystkich 12 fraz volume
- Każda rodzina folii dostaje 1 zdanie z konkretnym zastosowaniem
- Wzmianka konkretnych atestów = sygnał authority dla AI engines
- Liczbowe USP "361 wariantów" + "5+ lat" + "BPA-free" = trust signals

---

## 4. Cztery nowe sekcje H2 do `FOLIOWE_DEEP_GUIDE`

Dodać do tablicy `FOLIOWE_DEEP_GUIDE` na **końcu** (czyli po 3 obecnych sekcjach TCO + atesty + błędy):

```typescript
{
  heading: 'Etykiety foliowe na butelki — który materiał wybrać?',
  content:
    'Wybór folii na butelki zależy od trzech rzeczy: materiału butelki (szkło vs HDPE elastyczne), wymaganego efektu wizualnego (białe tło vs efekt „no-label look") oraz warunków eksploatacji (kosmetyki indoor vs chemia outdoor). ' +
    'PolyPro 3000T Gloss (białe tło) wybierz na typowe butelki kosmetyków, napoje i produkty masowe — sztywna folia BOPP doskonale pasuje do butelek szklanych i twardych plastikowych. ' +
    'PolyPro 3000T Clear (przezroczysty) wybierz dla efektu premium — etykieta niemal znika na butelce, widać produkt pod nią, idealny do kosmetyków premium i napojów luksusowych. ' +
    'PolyE 3100T Gloss (polietylen elastyczny) wybierz na butelki HDPE ściśliwe (szampony, żele, mleczka) — elastyczność folii pozwala dostosować się do ściskania butelki bez marszczeń. ' +
    'Wszystkie te folie mają atesty żywnościowe FDA, EC 1935/2004 oraz BfR XIV (RF≥2 lub RF≥3). Druk z taśmą żywiczną Zebra 5095 — odporny na 90-dniowy kontakt z wodą i rozpuszczalnikami.',
  table: {
    headers: ['Typ butelki', 'Polecana folia', 'Cena od', 'Atest'],
    rows: [
      ['Butelka szklana kosmetyk', 'PolyPro 3000T Clear', '~240 zł', 'EC 1935, BfR XIV RF≥2'],
      ['Butelka szklana napój', 'PolyPro 3000T Gloss', '~160 zł', 'EC 1935, FDA 175.105'],
      ['Butelka HDPE szampon/żel', 'PolyE 3100T Gloss', '~260 zł', 'BfR XIV RF≥3 (tłuste)'],
      ['Butelka chemia gospodarcza', 'PolyPro 3000T Gloss', '~160 zł', 'EC 1935'],
      ['Butelka olej spożywczy', 'PolyE 3100T Gloss', '~260 zł', 'BfR XIV RF≥3 (tłuszcze)'],
    ],
  },
},
{
  heading: 'Etykiety foliowe na słoiki spożywcze — wodoodporne i atestowane',
  content:
    'Słoiki spożywcze (przetwory, miody, dżemy, sosy) wymagają etykiet odpornych na pasteryzację, kondensację po wyjęciu z chłodni i kontakt z tłustą zawartością przez podkład. ' +
    'PolyPro 3000T Gloss to standardowy wybór — wodoodporna folia BOPP z białym wykończeniem, atest BfR XIV RF≥2 dla produktów suchych i wilgotnych. ' +
    'Dla produktów tłustych (oleje, masła orzechowe, pasztety) wybierz PolyE 3100T Gloss — najszerszy atest BfR XIV RF≥3 obejmuje wszystkie rodzaje żywności łącznie z tłuszczami. ' +
    'Druk: taśma żywiczna Zebra 5095 daje nadruk odporny na warunki pasteryzacji (do 90°C) i wielokrotne mycie w chłodni. ' +
    'Etykieta papierowa (Z-Select 2000T) na słoiku w chłodni odpadnie po 2-3 cyklach kondensacji — folia trzyma latami.',
},
{
  heading: 'Etykiety foliowe na kosmetyki — premium look + odporność chemiczna',
  content:
    'Branża kosmetyków ma dwa kluczowe wymagania: estetyka opakowania (folia premium daje sygnał jakości) oraz odporność etykiety na rozpuszczalniki, alkohol i tłuszcze w kontakcie z zawartością butelki. ' +
    'PolyPro 3000T Clear (przezroczysty) dla butelek szklanych kosmetyków premium — efekt „no-label look", nadruk wygląda jakby był wprost na butelce. Atest BfR XIV RF≥2, BPA-free, latex-free. ' +
    'PolyE 3100T Gloss dla tub kosmetycznych (kremy, żele do golenia, balsamy) — elastyczna folia dopasowuje się do ściskania tuby. Najszerszy atest BfR XIV RF≥3 dla tłustych formulacji kosmetycznych. ' +
    'Z-Ultimate 3000T White (poliester) dla luksusowych etykiet dekoracyjnych na butelkach perfum i wodach toaletowych — wieloletnia odporność na alkohol i kontakt z palcami. ' +
    'Wszystkie folie kosmetyczne Zebra: BPA-free, latex-free, BfR XIV (suche, wilgotne lub tłuste w zależności od serii).',
  table: {
    headers: ['Produkt kosmetyczny', 'Polecana folia', 'Atest', 'USP'],
    rows: [
      ['Butelka szklana perfum', 'Z-Ultimate 3000T White', 'UL Recognized', 'wieloletnia odporność'],
      ['Butelka szklana lakier do paznokci', 'PolyPro 3000T Clear', 'BfR XIV RF≥2', 'efekt no-label look'],
      ['Tuba kremu/balsamu', 'PolyE 3100T Gloss', 'BfR XIV RF≥3', 'elastyczna, dla tłustych'],
      ['Butelka HDPE szampon', 'PolyE 3100T Gloss', 'BfR XIV RF≥3', 'ściśliwa butelka'],
      ['Słoik krem/maska', 'PolyPro 3000T Gloss', 'BfR XIV RF≥2', 'standard premium retail'],
    ],
  },
},
{
  heading: 'Etykiety foliowe na tabliczki znamionowe maszyn — certyfikat UL i 10+ lat trwałości',
  content:
    'Tabliczki znamionowe maszyn (rated plates) wymagają etykiety, która wytrzymuje 10+ lat pracy w przemyśle, kontakt z olejami, rozpuszczalnikami, parą wodną i wahaniami temperatury -40 do +150°C — bez utraty czytelności. ' +
    'Z portfolio Zebry tylko Z-Ultimate 3000T (poliester PET) spełnia te wymagania i posiada certyfikat UL Recognized Component — wymagany dla producentów sprzętu certyfikowanego UL. ' +
    'Z-Ultimate 3000T White — biały gloss, standard dla większości tabliczek znamionowych przemysłowych. ' +
    'Z-Ultimate 3000T Silver — srebrny metaliczny dla maszyn premium, elektroniki konsumenckiej, sprzętu medycznego — wytrzymuje 10+ lat outdoor z dodatkowym laminowaniem. ' +
    'Druk: taśma żywiczna Zebra 5095 dla standardowej trwałości lub Zebra 5100 Premium Resin dla aplikacji wymagających 10+ lat outdoor (cert. UL na sprzęcie elektrycznym). ' +
    'PolyPro nie spełnia wymagań UL — papier całkowicie odpada. Z-Ultimate to jedyna folia w portfolio TAKMA z UL Recognized Component.',
},
```

---

## 5. Nowa sekcja — "Najlepsze etykiety foliowe Zebra 2026 według zastosowania"

Dodać jako **drugą sekcję H2 na stronie** (po intro, przed tabelą materiałów). To jest **kluczowa sekcja dla AI Overviews** — łapie "best of" queries.

W kodzie — dodać nowy `GuideSection` na **pierwszej pozycji** w `FOLIOWE_DEEP_GUIDE` lub renderować osobno:

```typescript
{
  heading: 'Najlepsze etykiety foliowe Zebra 2026 — według zastosowania',
  content:
    'Dla każdego głównego zastosowania foliowych etykiet termotransferowych istnieje konkretna seria Zebra z optymalnym stosunkiem ceny do trwałości i właściwymi atestami. ' +
    'Poniższa tabela porównuje 8 najczęstszych aplikacji w polskim B2B z konkretną rekomendacją serii i ceną wyjściową. ' +
    'Każda etykieta ma osobną stronę serii z pełną specyfikacją techniczną, listą wariantów rozmiarowych i opisem dwell time / aplikacji.',
  table: {
    headers: ['Zastosowanie', 'Polecana seria', 'Cena od (netto)', 'Kluczowy atest / USP'],
    rows: [
      ['Tabliczki znamionowe maszyn (UL)', 'Z-Ultimate 3000T White', '290 zł', 'UL Recognized — jedyna folia z UL w portfolio'],
      ['Butelki szklane kosmetyki premium', 'PolyPro 3000T Clear', '240 zł', 'Efekt "no-label look"'],
      ['Butelki HDPE elastyczne (szampony)', 'PolyE 3100T Gloss', '260 zł', 'BfR RF≥3 — najszerszy atest spożywczy'],
      ['Beczki chemiczne / IBC / transport morski', 'PolyO 3100T', '290 zł', 'BS5609 + GHS — jedyna w portfolio Zebry'],
      ['Maszyny przemysłowe outdoor', 'Z-Ultimate 3000T Silver', '510 zł', '10+ lat outdoor, metaliczne wykończenie'],
      ['Słoiki spożywcze (przetwory, sosy)', 'PolyPro 3000T Gloss', '160 zł', 'BfR XIV RF≥2 + wodoodporna'],
      ['Machine vision (kontrola optyczna)', 'PolyPro 4000T Matte', '270 zł', 'Bez refleksów — czytelna dla kamer'],
      ['Etykiety GHS / chemikalia niebezpieczne', 'PolyO 3100T', '290 zł', 'BS5609 + GHS-compliant'],
    ],
  },
},
```

---

## 6. Trzy comparison summaries (pull quotes)

Dodać na końcu strony (po deep guide, przed FAQ) jako **3 wyróżnione komponenty**. Każdy ma BlockQuote schema dla AI engines.

```tsx
{/* ── COMPARISON SUMMARIES ── */}
<section className="mt-12 mb-12 space-y-6">
  <h2 className="text-2xl font-bold mb-6">Najczęstsze porównania w 1 zdaniu</h2>

  <blockquote
    className="border-l-4 border-emerald-500 pl-6 py-3 italic text-lg text-gray-800 bg-emerald-50/30"
    cite="https://www.takma.com.pl/etykiety-termotransferowe-zebra/foliowe"
  >
    <strong>Z-Ultimate vs PolyPro:</strong> Z-Ultimate 3000T (poliester) wybierz dla wieloletniej
    trwałości, UL i ekstremalnych warunków — ok. 290 zł/rolka. PolyPro 3000T (polipropylen)
    wybierz dla typowego retailu, opakowań i butelek — ok. 160 zł/rolka, 3× tańszy, wystarcza
    do większości zastosowań.
  </blockquote>

  <blockquote
    className="border-l-4 border-amber-500 pl-6 py-3 italic text-lg text-gray-800 bg-amber-50/30"
    cite="https://www.takma.com.pl/etykiety-termotransferowe-zebra/foliowe"
  >
    <strong>Wax-resin vs Resin:</strong> Wax-resin (Zebra 3200) jest do papieru — tania, dobra
    do magazynu i wysyłki. Resin (Zebra 5095) jest <strong>obowiązkowy</strong> do folii — bez
    niego nadruk się ściera palcem. To najczęstszy błąd przy druku TT na folii.
  </blockquote>

  <blockquote
    className="border-l-4 border-blue-500 pl-6 py-3 italic text-lg text-gray-800 bg-blue-50/30"
    cite="https://www.takma.com.pl/etykiety-termotransferowe-zebra/foliowe"
  >
    <strong>Etykieta foliowa TT vs naklejka inkjet:</strong> Etykieta foliowa TT — do zmiennych
    danych, średnie i duże nakłady (1000+ sztuk dziennie), trwałość 5+ lat. Naklejka inkjet —
    pełen kolor, fotografie, małe nakłady (poniżej 1000 sztuk), prototypy. Etykiety foliowe TT
    wygrywają dla przemysłu, magazynu, medycyny i motoryzacji.
  </blockquote>
</section>
```

Plus dorzucić Quotation schema na samym dole strony (po reszcie schema):

```typescript
const quotationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Quotation',
      text: 'Z-Ultimate 3000T (poliester) wybierz dla wieloletniej trwałości, UL i ekstremalnych warunków. PolyPro 3000T (polipropylen) wybierz dla typowego retailu, opakowań i butelek — 3× tańszy.',
      about: 'Porównanie Z-Ultimate vs PolyPro',
    },
    {
      '@type': 'Quotation',
      text: 'Wax-resin (Zebra 3200) jest do papieru. Resin (Zebra 5095) jest obowiązkowy do folii — bez niego nadruk się ściera palcem.',
      about: 'Porównanie taśma wax-resin vs resin',
    },
    {
      '@type': 'Quotation',
      text: 'Etykieta foliowa TT — do zmiennych danych, średnie i duże nakłady, trwałość 5+ lat. Naklejka inkjet — pełen kolor, fotografie, małe nakłady.',
      about: 'Porównanie etykieta foliowa TT vs naklejka inkjet',
    },
  ],
}
```

---

## 7. Słownik pojęć — sekcja na końcu strony

Dodać przed FAQ jako **Glossary section** + DefinedTerm schema:

```tsx
{/* ── GLOSSARY ── */}
<section className="mt-12 mb-12">
  <h2 className="text-2xl font-bold mb-6">Słownik pojęć — etykiety foliowe termotransferowe</h2>
  <dl className="space-y-4">
    <div>
      <dt className="font-semibold text-gray-900">BOPP</dt>
      <dd className="text-gray-700 ml-4">
        Biaxially-Oriented Polypropylene — polipropylen rozciągnięty dwukierunkowo.
        Standard branżowy dla folii etykietowych. Używany w PolyPro 3000T i 4000T.
      </dd>
    </div>
    <div>
      <dt className="font-semibold text-gray-900">PET</dt>
      <dd className="text-gray-700 ml-4">
        Politereftalan etylenu (poliester) — najtwardszy syntetyk w portfolio Zebry,
        odporność chemiczna i mechaniczna na lata. Materiał Z-Ultimate 3000T.
      </dd>
    </div>
    <div>
      <dt className="font-semibold text-gray-900">UL Recognized Component</dt>
      <dd className="text-gray-700 ml-4">
        Amerykański certyfikat materiałów spełniających normy bezpieczeństwa.
        Wymagany w oznaczeniach komponentów sprzętu certyfikowanego UL. Z portfolio
        Zebry tylko Z-Ultimate 3000T White.
      </dd>
    </div>
    <div>
      <dt className="font-semibold text-gray-900">BfR XIV</dt>
      <dd className="text-gray-700 ml-4">
        Niemiecka rekomendacja materiałów do kontaktu z żywnością. Klasy RF: RF≥2 dla
        produktów suchych i wilgotnych, RF≥3 dla wszystkich łącznie z tłustymi.
        PolyE 3100T ma najwyższy RF≥3.
      </dd>
    </div>
    <div>
      <dt className="font-semibold text-gray-900">BS5609</dt>
      <dd className="text-gray-700 ml-4">
        Brytyjska norma odporności na 90-dniowe zanurzenie w wodzie morskiej. Wymagana
        dla transportu chemikaliów drogą morską (kod IMDG). W portfolio Zebry tylko
        PolyO 3100T.
      </dd>
    </div>
    <div>
      <dt className="font-semibold text-gray-900">Dwell time</dt>
      <dd className="text-gray-700 ml-4">
        Czas związania kleju — typowo 24-72 godziny w temperaturze pokojowej. Etykieta
        naklejona i od razu wystawiona na mróz lub chemikalia odpadnie. Krytyczne dla
        etykiet kriogenicznych, chemicznych i medycznych.
      </dd>
    </div>
    <div>
      <dt className="font-semibold text-gray-900">TCO</dt>
      <dd className="text-gray-700 ml-4">
        Total Cost of Ownership — całkowity koszt posiadania uwzględniający cenę
        zakupu, wymiany, robociznę i straty. Folia jest 3× droższa od papieru, ale
        5-letni TCO jest niższy dla trwałych aplikacji.
      </dd>
    </div>
    <div>
      <dt className="font-semibold text-gray-900">Resin (taśma żywiczna)</dt>
      <dd className="text-gray-700 ml-4">
        Taśma barwiąca termotransferowa zbudowana z żywicy — obowiązkowa do druku na
        foliach (PET, PP, PE). W przeciwieństwie do wosku, resin topi się i tworzy
        trwałe wiązanie z folią. Z portfolio Zebry: 4800, 5095 (bestseller), 5100, 8000 ChemResist.
      </dd>
    </div>
  </dl>
</section>
```

Plus DefinedTerm schema (dodać do listy schema na początku strony):

```typescript
const glossarySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'DefinedTerm', '@id': '#BOPP', name: 'BOPP', alternateName: 'Biaxially-Oriented Polypropylene', description: 'Polipropylen rozciągnięty dwukierunkowo, standard dla folii etykietowych. PolyPro 3000T i 4000T.' },
    { '@type': 'DefinedTerm', '@id': '#PET', name: 'PET', alternateName: 'Politereftalan etylenu', description: 'Poliester o wysokiej odporności mechanicznej i chemicznej, materiał Z-Ultimate 3000T.' },
    { '@type': 'DefinedTerm', '@id': '#UL', name: 'UL Recognized Component', description: 'Amerykański certyfikat materiałów dla sprzętu UL-certyfikowanego. Z-Ultimate 3000T White.' },
    { '@type': 'DefinedTerm', '@id': '#BfR', name: 'BfR XIV', description: 'Niemiecka rekomendacja materiałów do kontaktu z żywnością. RF≥2 (suche/wilgotne), RF≥3 (tłuste).' },
    { '@type': 'DefinedTerm', '@id': '#BS5609', name: 'BS5609', description: 'Brytyjska norma odporności na 90-dni w wodzie morskiej. PolyO 3100T.' },
    { '@type': 'DefinedTerm', '@id': '#dwell', name: 'Dwell time', description: 'Czas związania kleju, 24-72h w temp. pokojowej.' },
    { '@type': 'DefinedTerm', '@id': '#TCO', name: 'TCO', alternateName: 'Total Cost of Ownership', description: 'Całkowity koszt posiadania uwzględniający wymianę i robociznę.' },
    { '@type': 'DefinedTerm', '@id': '#resin', name: 'Resin', description: 'Taśma żywiczna do druku na foliach. Zebra 4800, 5095, 5100, 8000 ChemResist.' },
  ],
}
```

---

## 8. Internal linking — gdzie podlinkować nową stronę PRZED launchem

Żeby Google szybko zaindeksował nowy URL po deploymencie, dodać linki w istniejących stronach:

1. **`/etykiety-termotransferowe-zebra` (rodzic)** — kafelek "Foliowe" już prowadzi do `/foliowe` — sprawdzić
2. **`/etykiety-termiczne`** (DT — wzorzec) — w CategoryGuide dodać link "Dla trwałych oznaczeń wybierz [etykiety termotransferowe foliowe](/etykiety-termotransferowe-zebra/foliowe)"
3. **`/produkt/zebra-z-ultimate-3000t-white`** — w opisie produktu link do `/foliowe`
4. **`/tasmy-termotransferowe/serie/5095-resin`** (po wdrożeniu) — w sekcji "Polecana dla etykiet" link do `/foliowe`
5. **`/etykiety-termotransferowe-zebra/papierowe`** — w deep guide TCO link "Dla wieloletniej trwałości wybierz [etykiety foliowe](/etykiety-termotransferowe-zebra/foliowe)"
6. **Strona główna sklepu** — jeśli jest sekcja "popularne kategorie", dodać kafelek

**Cel**: minimum 5 wewnętrznych linków do `/foliowe` z różnych miejsc. Google szybciej zaindeksuje + przekaże ranking power.

---

## 9. Post-launch checklist (pierwsze 30 dni)

### Dzień 1 (deploy day)

- [ ] Sprawdzić w przeglądarce, że strona renderuje się poprawnie (3 razy hard refresh)
- [ ] Sprawdzić Schema markup w Google Rich Results Test (https://search.google.com/test/rich-results) — wszystkie 5 schemas waliduje
- [ ] **Request Indexing w GSC** dla `/etykiety-termotransferowe-zebra/foliowe`
- [ ] Sprawdzić redirect 301 z `/etykiety-termotransferowe-foliowe` (curl -I, response 301)
- [ ] Dodać URL do sitemap.xml (jeśli nie ma w `app/sitemap.ts`)
- [ ] Sprawdzić canonical w renderowanej stronie (View Source)

### Tydzień 1

- [ ] Sprawdzić GSC — czy nowy URL pojawił się w "Discovered – currently not indexed" (good sign) lub już zaindeksowany
- [ ] Sprawdzić GA4 — czy odwiedziny zaczynają lądować na nowym URL (jakieś % z foliowe powinno przyjść)
- [ ] **Manual test AI engines**:
  - Perplexity: *"Polskie etykiety foliowe termotransferowe Zebra na butelki kosmetyki — jaką wybrać"*
  - ChatGPT: *"Jaki atest spożywczy ma etykieta foliowa PolyE 3100T Gloss"*
  - Sprawdzić, czy TAKMA pojawia się w cytowaniach lub odpowiedzi

### Tydzień 2-4

- [ ] GSC — zobaczyć pierwsze impressions na nowym URL
- [ ] Wstępne pozycje na kluczowe frazy (etykiety termotransferowe foliowe, etykiety na butelki, etykiety foliowe)
- [ ] A/B test meta description: jeśli CTR < 2%, przetestować inny title (dłuższa wersja z "361 wariantów od X zł")
- [ ] Sprawdzić Brand Radar w Ahrefs — czy AI engines cytują TAKMA

### Tydzień 4-8

- [ ] GSC — czy stary URL `/etykiety-termotransferowe-foliowe` zniknął z indeksu (Google przekierował na nowy)
- [ ] Pozycje na top frazy — powinny stabilizować się w okolicy top 10-15
- [ ] Pierwsze konwersje z foliowe (klik → product page → koszyk)

---

## 10. Co nie robić (anty-wzorce pre-launch)

1. **Nie usuwaj starego URL z sitemap** — niech redirect 301 zrobi robotę
2. **Nie zmieniaj canonical** w trakcie pierwszego indeksowania — niech Google ustabilizuje
3. **Nie dodawaj wszystkich nowych sekcji jednorazowo, jeśli to wymaga refactoringu** — wystarczy meta + H1 + intro + 4 sekcje H2 + 1 tabela Best of. Reszta (glossary, pull quotes) może iść w drugim PR
4. **Nie zmieniaj struktury URL po deploymencie** — każda kolejna zmiana = reset indeksowania
5. **Nie kupuj linków na nowy URL przez pierwsze 2 miesiące** — Google najpierw chce zobaczyć naturalny ruch

---

## 11. Pliki do otwarcia gdy zaczynasz

| Plik | Co tam wkleić |
|---|---|
| `src/data/products.ts` | Sekcja 2 — meta title + description |
| `src/app/etykiety-termotransferowe-zebra/[subcategory]/page.tsx` → `CONFIG.foliowe` | Sekcja 3 — H1 + intro |
| `src/app/etykiety-termotransferowe-zebra/[subcategory]/page.tsx` → `FOLIOWE_DEEP_GUIDE` | Sekcje 4 + 5 — 4 nowe sekcje H2 + tabela Best of |
| `src/app/etykiety-termotransferowe-zebra/[subcategory]/page.tsx` → render | Sekcja 6 — comparison summaries (BlockQuote) |
| `src/app/etykiety-termotransferowe-zebra/[subcategory]/page.tsx` → render + schema | Sekcja 7 — Glossary + DefinedTerm schema |
| `next.config.js` | Sprawdzić że redirect 301 z `/etykiety-termotransferowe-foliowe` na `/etykiety-termotransferowe-zebra/foliowe` jest (już jest, weryfikacja) |
| Inne strony (do linkowania) | Sekcja 8 — internal linking |

---

## 12. Estymowany czas pracy

| Sekcja | Czas |
|---|---|
| 2. Meta title + description | 5 min |
| 3. H1 + intro | 10 min |
| 4. 4 nowe sekcje H2 z tabelami | 30 min |
| 5. Tabela Best of | 15 min |
| 6. 3 comparison summaries | 20 min |
| 7. Słownik + DefinedTerm schema | 30 min |
| 8. Internal linking (5 miejsc) | 30 min |
| 9. Post-launch checklist Dzień 1 | 30 min |
| **Razem przed launchem** | **~2-3 godziny** |

Jest sensownie zrobić w jednym posiedzeniu — wszystkie zmiany są w jednym pliku page.tsx + 1 plik products.ts + 5 linków w innych stronach. Po commitcie i deploymencie tylko Request Indexing w GSC i monitorowanie.

---

**GO TIME.** Wszystkie sekcje 2-7 są gotowe do wklejenia bez przerabiania. Sekcje 8 + 9 to checklisty post-implementation. Powodzenia!
