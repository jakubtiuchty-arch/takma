/**
 * Mapuje nazwę modelu taśmy Zebra (z pola `recommendedRibbons` w `TransferLabelSeries`)
 * na slug strony serii taśmy w `/tasmy-termotransferowe/serie/[slug]`.
 *
 * Przykłady:
 *   'Zebra 2300 Wax'              → '2300-wax'
 *   'Zebra 5095 Resin'             → '5095-resin'
 *   'Zebra 3200 Wax/Resin'         → '3200-wax-resin'
 *   'Zebra 2100 European Wax'      → '2100-wax'    (alias — w katalogu tylko jeden 2100)
 *   'Zebra 5100 Premium Resin'     → '5100-resin'  (alias — w katalogu tylko jeden 5100)
 *   'Zebra 8000 ChemResist'        → '8000-chemresist'
 */
export function ribbonNameToSlug(name: string): string {
  const cleaned = name
    .replace(/^Zebra\s+/i, '')          // usuń prefix "Zebra "
    .replace(/\bEuropean\b/i, '')        // "2100 European Wax" → "2100 Wax"
    .replace(/\bPremium\b/i, '')         // "5100 Premium Resin" → "5100 Resin"
    .replace(/\s+/g, ' ')                // collapse spaces
    .trim()
    .toLowerCase()
    .replace(/\//g, '-')                 // "wax/resin" → "wax-resin"
    .replace(/\s+/g, '-')                // spaces → myślniki
  return cleaned
}

// ── Self-tests (deweloperskie, nie usuwać) ──
// Można odpalić ad-hoc: npx tsx -e "import './src/lib/ribbon-name-to-slug.ts'"
console.assert(ribbonNameToSlug('Zebra 2300 Wax') === '2300-wax', 'wax simple')
console.assert(ribbonNameToSlug('Zebra 5095 Resin') === '5095-resin', 'resin simple')
console.assert(ribbonNameToSlug('Zebra 3200 Wax/Resin') === '3200-wax-resin', 'wax/resin')
console.assert(ribbonNameToSlug('Zebra 2100 European Wax') === '2100-wax', 'european alias')
console.assert(ribbonNameToSlug('Zebra 5100 Premium Resin') === '5100-resin', 'premium alias')
console.assert(ribbonNameToSlug('Zebra 8000 ChemResist') === '8000-chemresist', 'chemresist')
