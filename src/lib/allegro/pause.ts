/**
 * Wstrzymanie sprzedaży na Allegro (18.11.2026: wszystkie oferty zakończone w Sales Center).
 *
 * Dopóki przełącznik jest włączony, nic po stronie sklepu nie wystawia ani nie wznawia ofert:
 *  - publikacja hurtowa (cron allegro-bulk-publish i przycisk w /admin/allegro/hurtowe),
 *  - odświeżanie opisów (cron allegro-refresh i przycisk), bo publishDraft może ustawić ACTIVE,
 *  - ręczne „Wystaw” (publishDraft),
 *  - wznawianie w synchronizacji stanów (allegro-stock nadal aktualizuje liczbę sztuk,
 *    ale nie wysyła publication ACTIVE).
 *
 * Domyślnie WŁĄCZONY. Wznowienie sprzedaży: ALLEGRO_PAUSED=false w zmiennych Vercela
 * (Production) i nowe wdrożenie, a potem „Wystaw lub wznów” na zakończonych ofertach
 * w Sales Center (Allegro pozwala wznowić zakończoną ofertę przez 60 dni).
 */
export const ALLEGRO_PAUSED = process.env.ALLEGRO_PAUSED !== 'false'

export const ALLEGRO_PAUSED_MESSAGE =
  'Sprzedaż na Allegro jest wstrzymana (ALLEGRO_PAUSED). Oferty nie są wystawiane ani wznawiane.'
