/**
 * Matematyka kalkulatora "ile etykiet z rolki taśmy termotransferowej".
 *
 * Wzór jednoetapowy:
 *   labels_per_roll = floor((rollLengthM * 1000 - WASTE_MM) / (labelHeightMm + GAP_MM))
 *
 * Stałe:
 *  - WASTE_MM = 2000 — ~2 m strat na kalibrację drukarki + koniec rolki
 *  - GAP_MM = 3 — standardowy odstęp między etykietami w roli
 */

export const GAP_MM = 3
export const WASTE_MM = 2000

export function labelsPerRoll(rollLengthM: number, labelHeightMm: number): number {
  if (rollLengthM <= 0 || labelHeightMm <= 0) return 0
  const effective = rollLengthM * 1000 - WASTE_MM
  if (effective <= 0) return 0
  return Math.floor(effective / (labelHeightMm + GAP_MM))
}

/** Wyciągnij długość rolki w metrach z atrybutu wariantu (np. "450 m" → 450, "300 m" → 300, "Rdzeń: 25 mm" → null). */
export function parseLengthFromAttribute(value: string): number | null {
  const m = value.match(/(\d+)\s*m\b/)
  return m ? parseInt(m[1]) : null
}

// ── Self-tests (deweloperskie, nie usuwać) ──
// Inline assertions sprawdzane przy pierwszym imporcie modułu w środowisku Node.
// h=80, L=450 → floor((450000-2000)/(80+3)) = floor(448000/83) = 5397
console.assert(labelsPerRoll(450, 80) === 5397, 'L=450, h=80 should be 5397')
// h=152, L=450 → floor(448000/155) = 2890
console.assert(labelsPerRoll(450, 152) === 2890, 'L=450, h=152 should be 2890')
// L=0 → 0
console.assert(labelsPerRoll(0, 80) === 0, 'L=0 should be 0')
// L=1m → floor((1000-2000)/(80+3)) = 0 (effective ≤ 0)
console.assert(labelsPerRoll(1, 80) === 0, 'L=1 (effective≤0) should be 0')
