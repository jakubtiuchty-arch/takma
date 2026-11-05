/**
 * Kwota wpisana ręcznie w złotych → grosze. Przyjmuje polski zapis: przecinek
 * dziesiętny i spacje między tysiącami, także twardą (U+00A0) i wąską (U+202F),
 * które wstawia `toLocaleString('pl-PL')` — więc wklejona kwota też przejdzie.
 * „9,29" → 929, „1 234,56" → 123456. Zwraca null, gdy wpis nie jest nieujemną
 * liczbą (np. „9,2,9", „abc", „-1"); `parseFloat("9,29")` dawał tu po cichu 9 zł.
 */
export function parsujKwotePln(tekst: string): number | null {
  const liczba = tekst.replace(/[\s  ]/g, '').replace(',', '.')
  if (!/^(\d+(\.\d*)?|\.\d+)$/.test(liczba)) return null
  // przesunięcie wykładnikiem zamiast „* 100": 9.295 * 100 = 929.4999…
  return Math.round(Number(`${liczba}e2`))
}

/** Grosze → tekst do pola edycji: przecinek dziesiętny, bez separatora tysięcy („1234,56"). */
export function kwotaDoEdycji(grosze: number): string {
  return (grosze / 100).toFixed(2).replace('.', ',')
}
