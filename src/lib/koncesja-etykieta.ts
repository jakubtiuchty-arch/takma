/**
 * Jak nazwać numer, na który wystawiono ofertę dystrybutora.
 *
 * Nie każda taka oferta stoi na koncesji Zebry. Przy sprzęcie spoza
 * PartnerConnect — M3 Mobile, Newland i reszta — Jarltech wiąże wycenę
 * własnym numerem projektu („Q-20260826-611"). Numer koncesji Zebry jest
 * zawsze samymi cyframi, więc po tym je rozróżniamy i nie nazywamy koncesją
 * czegoś, co nią nie jest.
 *
 * Moduł jest wolny od zależności serwerowych — korzystają z niego także
 * komponenty klienckie (import z `lib/koncesje` wciągnąłby Prismę do bundla).
 */

export const czyNumerKoncesji = (requestId: string) => /^\d{5,}$/.test(requestId)

/** „81463572" → „koncesja 81463572"; „Q-20260826-611" → „projekt Q-20260826-611". */
export const etykietaPowiazania = (requestId: string) =>
  `${czyNumerKoncesji(requestId) ? 'koncesja' : 'projekt'} ${requestId}`
