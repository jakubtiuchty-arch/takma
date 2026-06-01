# Specyfikacja — Mikrowidget "Ile etykiet z rolki" na karcie produktu taśmy

**Cel**: Na każdej karcie produktu taśmy termotransferowej (konkretny SKU, np. *Zebra 2300 Wax 110×450 mm, PN 02300BK11045*) klient widzi mikrowidget pozwalający odpowiedzieć na pytanie "ile etykiet wydrukuję z tej rolki dla mojej etykiety".

**Brak złożonych ficzerów**: bez wyboru klasy drukarki, bez miesięcznego zużycia, bez porównań wariantów, bez kalkulacji "ile rolek kupić". Po prostu: jeden suwak, jedna duża liczba.

---

## 1. UX — 3 elementy widoczne klientowi

### 1.1 Input

Jeden suwak (`<input type="range">`) — wysokość etykiety:
- Zakres: **10-200 mm**
- Default: **80 mm** (typowa średnia dla magazynowych etykiet w PL)
- Krok: 1 mm
- Wartość liczbowa wyświetlana obok suwaka (np. "80 mm")

Plus 6 presetów najczęstszych wysokości:
```
[25 mm] [38 mm] [51 mm] [76 mm] [100 mm] [152 mm]
```

### 1.2 Wynik główny

Duża liczba (24-32 px font-weight 500) + opis:

```
Z tej rolki wydrukujesz

5 397
etykiet o wysokości 80 mm
```

### 1.3 Dwie pomocnicze metryki

Pod główną liczbą (12-16 px):

- **Koszt jednej etykiety**: `142 zł / 5 397 = 0,026 zł`
- **Szacowany czas wystarczalności**: `~ 60 dni druku przy 90 et./dobę` (typowy szacunek dla małej firmy / średnio-aktywnego magazynu)

Te dwie metryki są **opcjonalne** — można je ukryć w wariancie ultra-minimalnym jeśli klient TAKMA stwierdzi, że za dużo informacji.

---

## 2. Matematyka — jedno równanie

```
labels_per_roll = floor((rollLengthM * 1000 - WASTE_MM) / (labelHeightMm + GAP_MM))
```

Stałe:
- `WASTE_MM = 2000` (~2 m strata na kalibrację drukarki + koniec rolki)
- `GAP_MM = 3` (standardowa przerwa między etykietami)

Plik: `src/lib/ribbon-math.ts`

```typescript
export const GAP_MM = 3;
export const WASTE_MM = 2000;

export function labelsPerRoll(rollLengthM: number, labelHeightMm: number): number {
  if (rollLengthM <= 0 || labelHeightMm <= 0) return 0;
  const effective = rollLengthM * 1000 - WASTE_MM;
  if (effective <= 0) return 0;
  return Math.floor(effective / (labelHeightMm + GAP_MM));
}
```

To wszystko. Żadnych dodatkowych funkcji.

---

## 3. Komponent — `<RibbonLabelCountWidget>`

Plik: `src/components/calculators/RibbonLabelCountWidget.tsx` (client component)

### 3.1 Props

```typescript
interface RibbonLabelCountWidgetProps {
  rollLengthM: number;        // np. 450
  pricePerRoll: number;       // PLN netto, np. 142
  defaultLabelHeight?: number; // domyślnie 80 mm
}
```

### 3.2 State

```typescript
const [labelHeight, setLabelHeight] = useState(props.defaultLabelHeight ?? 80);
```

### 3.3 Logika (cała w `useMemo`)

```typescript
const result = useMemo(() => {
  const count = labelsPerRoll(props.rollLengthM, labelHeight);
  const costPerLabel = count > 0 ? props.pricePerRoll / count : 0;
  const daysAt90 = count > 0 ? Math.round(count / 90) : 0;
  return { count, costPerLabel, daysAt90 };
}, [props.rollLengthM, props.pricePerRoll, labelHeight]);
```

### 3.4 Pełen szkielet komponentu

```tsx
'use client';

import { useState, useMemo } from 'react';
import { Calculator } from 'lucide-react';
import { labelsPerRoll } from '@/lib/ribbon-math';

interface Props {
  rollLengthM: number;
  pricePerRoll: number;
  defaultLabelHeight?: number;
}

const PRESETS = [25, 38, 51, 76, 100, 152];

function fmt(n: number) {
  return new Intl.NumberFormat('pl-PL').format(n);
}

function fmtPerLabel(n: number) {
  if (n < 0.01) return n.toFixed(4).replace('.', ',') + ' zł';
  if (n < 0.1) return n.toFixed(3).replace('.', ',') + ' zł';
  return n.toFixed(2).replace('.', ',') + ' zł';
}

export default function RibbonLabelCountWidget({
  rollLengthM,
  pricePerRoll,
  defaultLabelHeight = 80,
}: Props) {
  const [h, setH] = useState(defaultLabelHeight);

  const result = useMemo(() => {
    const count = labelsPerRoll(rollLengthM, h);
    return {
      count,
      costPerLabel: count > 0 ? pricePerRoll / count : 0,
      daysAt90: count > 0 ? Math.round(count / 90) : 0,
    };
  }, [rollLengthM, pricePerRoll, h]);

  return (
    <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
      <div className="flex items-center gap-2 mb-3">
        <Calculator className="w-5 h-5 text-amber-900" />
        <span className="font-medium text-amber-950">Na ile etykiet starczy ta rolka?</span>
      </div>

      <div className="flex items-center gap-3 mb-2">
        <label className="text-sm text-amber-900 min-w-[140px]">Wysokość Twojej etykiety:</label>
        <input
          type="range"
          min={10}
          max={200}
          step={1}
          value={h}
          onChange={(e) => setH(parseInt(e.target.value))}
          className="flex-1"
        />
        <span className="font-medium text-amber-950 min-w-[70px] text-right">{h} mm</span>
      </div>

      <div className="flex gap-1.5 flex-wrap mb-4">
        {PRESETS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setH(p)}
            className="text-xs px-2.5 py-1 border border-amber-300 rounded-md hover:bg-amber-100 text-amber-900"
          >
            {p} mm
          </button>
        ))}
      </div>

      <div className="p-4 bg-white rounded-lg">
        <div className="text-xs text-gray-500 mb-1">Z tej rolki wydrukujesz</div>
        <div className="text-3xl font-medium text-amber-950 leading-tight">
          {fmt(result.count)}
        </div>
        <div className="text-sm text-gray-600 mt-1">etykiet o wysokości {h} mm</div>

        <div className="mt-3 pt-3 border-t border-gray-200 flex gap-6 flex-wrap">
          <div>
            <div className="text-[11px] text-gray-500">Koszt jednej etykiety</div>
            <div className="text-base font-medium">{fmtPerLabel(result.costPerLabel)}</div>
          </div>
          <div>
            <div className="text-[11px] text-gray-500">Wystarczy na</div>
            <div className="text-base font-medium">~ {result.daysAt90} dni przy 90 et./dobę</div>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-amber-800 mt-3">
        Wyliczenie: 3 mm odstęp między etykietami + 2 m marży na kalibrację. Dokładność ±2%.
      </p>
    </div>
  );
}
```

To wszystko. **Cały komponent < 100 linii**.

---

## 4. Gdzie umieścić

### Tylko jedno miejsce: karta produktu konkretnej rolki taśmy

Na stronie produktu `/produkt/[slug]` jeśli produkt ma `categoryId === 'materialy-eksploatacyjne'` i `subcategoryIds` zawiera `'tasmy-termotransferowe'`, oraz wybrany wariant ma w atrybutach `Długość` — pod sekcją cena / dodaj do koszyka renderujemy:

```tsx
{selectedVariant && rollLength && (
  <RibbonLabelCountWidget
    rollLengthM={parseLengthFromAttribute(selectedVariant.attributes['Długość'])}
    pricePerRoll={selectedVariant.priceFrom ?? product.priceFrom}
    defaultLabelHeight={80}
  />
)}
```

Helper:
```typescript
function parseLengthFromAttribute(value: string): number | null {
  // value np. "450 m"
  const m = value.match(/(\d+)\s*m/);
  return m ? parseInt(m[1]) : null;
}
```

### Nigdzie indziej

- **Nie** na landingu `/tasmy-termotransferowe` (klient nie wie której taśmy chce — pokażemy mu serie modeli)
- **Nie** na stronie serii `/tasmy-termotransferowe/serie/[slug]` (klient porównuje warianty — tabela wariantów ma własną logikę)
- **Nie** na stronie etykiety TT (klient nie zna jeszcze swojej wysokości etykiety w kontekście Twojej etykiety)

Jedno miejsce, jedno zadanie, koniec.

---

## 5. Edge cases

| Sytuacja | Zachowanie |
|---|---|
| Klient ustawia `h = 10 mm` | Pokazuje liczbę normalnie. Etykietki 10 mm są realne (drobny sprzęt elektroniczny). |
| `h = 200 mm` | Pokazuje liczbę normalnie. Etykietki ≥150 mm są mniej popularne, ale możliwe (etykiety A4). |
| Wariant taśmy bez `Długość` w atrybutach | Widget się nie renderuje. Fallback brak. |
| Cena = 0 lub `null` (specjalistyczne SKU) | Sekcja "Koszt jednej etykiety" jest ukryta. Reszta widgetu działa. |
| Bardzo małe etykiety (1 mm gap może być za duży) | Akceptujemy 2% niedoszacowanie — drobiazg. |
| Bardzo duże etykiety (gap proporcjonalnie mały) | Akceptujemy 2% niedoszacowanie. |

Brak ostrzeżeń o klasie drukarki — to nie jest zadanie tego widgetu. Klient już patrzy na konkretną rolkę, więc albo wie czy mu pasuje do jego drukarki (z opisu produktu), albo nie kupi.

---

## 6. Wariant minimal (jeszcze prostszy)

Jeśli po wdrożeniu okaże się, że klienci nie używają sekcji "Koszt jednej etykiety" i "Wystarczy na X dni" — można je usunąć. Wtedy widget jest:

```
┌──────────────────────────────────────────┐
│ Na ile etykiet starczy ta rolka?         │
│                                          │
│ Wysokość Twojej etykiety: [slider] 80 mm │
│ [25][38][51][76][100][152]               │
│                                          │
│ ┌──────────────────────────────────────┐ │
│ │ Z tej rolki wydrukujesz              │ │
│ │ 5 397                                │ │
│ │ etykiet o wysokości 80 mm            │ │
│ └──────────────────────────────────────┘ │
└──────────────────────────────────────────┘
```

Decyzja "pełny vs minimal" — po pierwszych 2-4 tygodniach z GA4 (event `ribbon_calc_used` z parametrem `variant`).

---

## 7. Schema markup — `HowTo`

Dodać do strony produktu rolki taśmy:

```typescript
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": `Ile etykiet wydrukujesz z rolki ${productName}`,
  "step": [
    { "@type": "HowToStep", "name": "Zmierz wysokość etykiety w mm" },
    { "@type": "HowToStep", "name": "Wpisz wysokość w widget na karcie produktu" },
    { "@type": "HowToStep", "name": "Sprawdź liczbę etykiet i koszt na sztukę" }
  ]
};
```

To otwiera SEO na frazy długoogonowe typu: "ile etykiet z rolki Zebra 2300 Wax", "kalkulator zużycia taśmy 450m".

---

## 8. Tracking GA4

Event do śledzenia:
```javascript
gtag('event', 'ribbon_calc_used', {
  ribbon_part_number: '02300BK11045',
  label_height_mm: 80,
  calculated_count: 5397,
});
```

Trigger: po pierwszej zmianie suwaka (nie na każdym kroku — debounce 500 ms).

**Dlaczego to ważne**: pozwoli za 2-4 tygodnie zobaczyć:
- Czy klienci faktycznie używają widgetu (event count)
- Jakie wysokości etykiet wpisują (mean, median, modal) — to pomoże dobrać domyślny preset
- Czy klienci, którzy używali widgetu, kupują częściej (porównanie z kohortą "tylko view product")

---

## 9. Checklist DoD

- [ ] `src/lib/ribbon-math.ts` z funkcją `labelsPerRoll` + 4 testy jednostkowe (h=80 + L=450 → 4329, h=10 + L=74 → 5538, edge cases)
- [ ] `src/components/calculators/RibbonLabelCountWidget.tsx` (klient component)
- [ ] Osadzony na `/produkt/[slug]` gdy `subcategoryIds` zawiera `'tasmy-termotransferowe'` ORAZ wybrany wariant ma atrybut `Długość`
- [ ] Helper `parseLengthFromAttribute` — wyciąga liczbę z napisu "450 m"
- [ ] Schema markup `HowTo` dodany do strony produktu
- [ ] GA4 event `ribbon_calc_used` z debounce 500 ms
- [ ] Mobile responsive — slider sterowany dotykiem, presety czytelne ≥44 px wysokie
- [ ] Polszczyzna: bez anglicyzmów (gap → odstęp, waste → marża na kalibrację)
- [ ] Walidacja: ujemne wartości, zero, NaN — komponent się nie wywala

---

## 10. Co świadomie odrzuciłem (i dlaczego)

- **Wybór klasy drukarki** → klient patrzy na konkretną rolkę, więc kompatybilność z drukarką zna już z opisu produktu. Dodatkowy dropdown = niepotrzebne tarcie UX.
- **Pole "ile etykiet potrzebuję miesięcznie"** → klient na karcie produktu już zdecydował co kupuje, niepotrzebne mu kalkulowanie ile rolek.
- **Tabela porównawcza wariantów (74m vs 300m vs 450m)** → to powinno być na stronie serii modelu taśmy, nie na karcie konkretnej rolki.
- **Toggle netto/brutto** → B2B operuje netto, cena na karcie jest netto, spójność.
- **Roczne szacunki kosztu** → wprowadza założenia o stałym zużyciu, których nie ma. Lepiej dać "X dni przy 90 et./dobę" jako prosty benchmark.

Decyzja designerska: **lepiej zrobić bardzo dobry mikrowidget niż średni kalkulator wieloparametrowy**.
