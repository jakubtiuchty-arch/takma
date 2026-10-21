/**
 * Sygnał przerwania po `ms` milisekundach.
 * `AbortSignal.timeout` nie istnieje w starszych przeglądarkach (Safari < 16, Chrome < 103).
 * Bezpośrednie wywołanie rzucało tam TypeError w trakcie renderu i kładło całą stronę.
 */
export function timeoutSignal(ms: number): AbortSignal {
  if (typeof AbortSignal.timeout === 'function') return AbortSignal.timeout(ms)
  const controller = new AbortController()
  setTimeout(() => controller.abort(), ms)
  return controller.signal
}
