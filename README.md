# TAKMA - Frontend Serwisu Katalogowego

Nowoczesny frontend dla firmy TAKMA - dostawcy urządzeń AutoID w Polsce. Serwis typu "a'la sklep" z workflow zapytań ofertowych zamiast tradycyjnego koszyka zakupowego.

## 🚀 Szybki start

### Wymagania

- Node.js 18+
- npm lub yarn

### Instalacja

```bash
# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev

# Build produkcyjny
npm run build

# Uruchomienie buildu produkcyjnego
npm run start
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

## 📁 Struktura projektu

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Główny layout
│   ├── page.tsx            # Strona główna
│   ├── katalog/            # Katalog produktów
│   ├── produkt/[slug]/     # Strona produktu (PDP)
│   ├── zapytanie/          # Formularz zapytania ofertowego
│   ├── o-nas/              # Strona "O nas"
│   ├── kontakt/            # Strona kontaktowa
│   └── polityka-prywatnosci/
│
├── components/
│   ├── ui/                 # Design system (Button, Input, Badge, etc.)
│   ├── layout/             # Navbar, Footer
│   ├── product/            # ProductCard, ProductGrid, ProductGallery
│   ├── rfq/                # RFQDrawer, RFQBadge
│   └── search/             # SearchBar
│
├── data/
│   └── products.ts         # Mock dane produktów (do zastąpienia API)
│
└── store/
    └── rfqStore.ts         # Stan RFQ (Zustand + localStorage)
```

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Język**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand (z persistencją localStorage)
- **UI Components**: Własny design system
- **Ikony**: Custom SVG (Heroicons-inspired)

## 📱 Funkcjonalności

### Strony

| Ścieżka | Opis |
|---------|------|
| `/` | Strona główna (hero, kategorie, bestsellery) |
| `/katalog` | Katalog z filtrami, sortowaniem i wyszukiwaniem |
| `/produkt/[slug]` | Strona produktu (galeria, specyfikacja, pliki) |
| `/zapytanie` | Lista zapytania + formularz ofertowy |
| `/o-nas` | O firmie (20 lat doświadczenia) |
| `/kontakt` | Formularz kontaktowy |

### Kluczowe funkcje

- ✅ **RFQ (Request for Quote)** - lista zapytania zamiast koszyka
- ✅ **Wyszukiwanie** - z debounce i podpowiedziami
- ✅ **Filtrowanie** - kategoria, producent, zastosowanie, nowości
- ✅ **Sortowanie** - popularność, cena, najnowsze
- ✅ **Widok grid/list** - przełączany
- ✅ **Mobile-first** - responsywny design
- ✅ **Drawer RFQ** - mini-koszyk z animacjami
- ✅ **Sticky CTA** - na mobile na stronie produktu
- ✅ **Persistencja** - lista RFQ zapisywana w localStorage

## 🔧 Konfiguracja

### Kolory marki (tailwind.config.ts)

```typescript
colors: {
  primary: {
    // Główny niebieski TAKMA
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  accent: {
    // Akcent - jaśniejszy niebieski
    500: '#0ea5e9',
  }
}
```

### Mock dane

Produkty znajdują się w `src/data/products.ts`. Struktura przygotowana pod przyszłe API:

```typescript
interface Product {
  id: string
  slug: string
  name: string
  shortDescription: string
  categoryId: string
  manufacturerId: string
  priceFrom?: number
  tags: ProductTag[]
  availability: 'available' | 'on-order' | 'unavailable'
  specifications: ProductSpecification[]
  // ...
}
```

## 🔌 Integracja z backendem

Aplikacja jest przygotowana do integracji z API. Punkty do podłączenia:

1. **Produkty** - zastąp `src/data/products.ts` wywołaniami API
2. **Formularz RFQ** - endpoint w `src/app/zapytanie/page.tsx` (linia ~80)
3. **Formularz kontaktowy** - endpoint w `src/app/kontakt/page.tsx`

### Przykład integracji (fetch)

```typescript
// Zamiast importu z data/products.ts:
const products = await fetch('/api/products').then(res => res.json())

// Wysyłka RFQ:
await fetch('/api/rfq', {
  method: 'POST',
  body: JSON.stringify({ formData, items })
})
```

## 📋 TODO (rozwój)

- [ ] Integracja z prawdziwym API
- [ ] System porównywania produktów
- [ ] Ulubione produkty (z localStorage)
- [ ] Skeleton loading dla produktów
- [ ] Filtry cenowe (slider)
- [ ] Strona wyszukiwania
- [ ] Newsletter signup
- [ ] Integracja z systemem CMS (headless)

## 🌐 SEO

- Metadane dla każdej strony
- Semantyczne nagłówki HTML
- Alt-y dla obrazków (placeholdery)
- Open Graph tags
- Generowanie statycznych ścieżek dla produktów

## ♿ Dostępność (WCAG)

- Focus states dla wszystkich interaktywnych elementów
- Aria labels na przyciskach i kontrolkach
- Semantyczna struktura HTML
- Odpowiedni kontrast kolorów
- Keyboard navigation

## 📄 Licencja

Projekt prywatny - TAKMA Sp. z o.o.

---

Opracowano z myślą o firmie TAKMA - 20 lat doświadczenia na rynku AutoID w Polsce.
