import { createHash } from 'crypto'

/**
 * Przelewy24 — płatności online sklepu (zastępuje Stripe, 2026-06).
 *
 * UWAGA transport: konto 352235 ma WYŁĄCZONE REST API (testAccess → 401,
 * wymaga aktywacji przez BOK P24). Klasyczne API 3.2 działa na samym kluczu
 * CRC (zweryfikowane: trnRegister → token), więc używamy go. Podpisy: md5
 * z pól rozdzielonych `|`. Po ewentualnej aktywacji REST wystarczy podmienić
 * transport w tym pliku — interfejs funkcji się nie zmieni.
 *
 * Przepływ: trnRegister (tu) → redirect klienta na trnRequest/{token} →
 * klient płaci (BLIK / pay-by-link / karta) → P24 POST-uje formularz na
 * urlStatus → my OBOWIĄZKOWO wołamy trnVerify (bez tego transakcja nie jest
 * rozliczona!) → zamówienie PAID.
 *
 * Env: P24_MERCHANT_ID, P24_POS_ID (zwykle = merchant), P24_CRC,
 * P24_SANDBOX=true → sandbox.przelewy24.pl. (P24_API_KEY — nieużywany przez
 * API 3.2, zostawiony w env pod przyszły REST.)
 */

const SANDBOX = process.env.P24_SANDBOX === 'true'
export const P24_BASE = SANDBOX ? 'https://sandbox.przelewy24.pl' : 'https://secure.przelewy24.pl'

function creds() {
  const merchantId = process.env.P24_MERCHANT_ID
  const posId = process.env.P24_POS_ID || process.env.P24_MERCHANT_ID
  const crc = process.env.P24_CRC
  if (!merchantId || !posId || !crc) throw new Error('Brak konfiguracji P24 (P24_MERCHANT_ID/P24_CRC)')
  return { merchantId, posId, crc }
}

export function p24Configured(): boolean {
  return !!(process.env.P24_MERCHANT_ID && process.env.P24_CRC)
}

function md5(s: string): string {
  return createHash('md5').update(s, 'utf8').digest('hex')
}

/** POST form na endpoint klasycznego API; odpowiedź `error=0&...` jako mapa. */
async function p24Form(path: string, fields: Record<string, string>): Promise<Record<string, string>> {
  const res = await fetch(`${P24_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(fields).toString(),
  })
  const text = await res.text()
  const parsed = Object.fromEntries(new URLSearchParams(text))
  if (!res.ok || parsed.error !== '0') {
    throw new Error(`P24 ${path}: ${text.slice(0, 300)}`)
  }
  return parsed
}

export interface P24RegisterInput {
  sessionId: string // nasz unikalny id (= order.id)
  amount: number // GROSZE brutto
  description: string
  email: string
  client?: string
  urlReturn: string
  urlStatus: string
}

/** Rejestracja transakcji → URL do przekierowania klienta. */
export async function p24Register(input: P24RegisterInput): Promise<{ token: string; redirectUrl: string }> {
  const { merchantId, posId, crc } = creds()
  const sign = md5(`${input.sessionId}|${merchantId}|${input.amount}|PLN|${crc}`)
  const d = await p24Form('/trnRegister', {
    p24_merchant_id: merchantId,
    p24_pos_id: posId,
    p24_session_id: input.sessionId,
    p24_amount: String(input.amount),
    p24_currency: 'PLN',
    p24_description: input.description,
    p24_email: input.email,
    ...(input.client ? { p24_client: input.client } : {}),
    p24_country: 'PL',
    p24_language: 'pl',
    p24_url_return: input.urlReturn,
    p24_url_status: input.urlStatus,
    p24_time_limit: '30', // minuty — jak dotąd sesja Stripe
    p24_wait_for_result: '1', // P24 czeka na wynik przed redirectem — mniej stanów „pending"
    p24_encoding: 'UTF-8',
    p24_api_version: '3.2',
    p24_sign: sign,
  })
  return { token: d.token, redirectUrl: `${P24_BASE}/trnRequest/${d.token}` }
}

/** Notyfikacja z urlStatus — klasyczne API wysyła form-urlencoded z polami p24_*. */
export interface P24Notification {
  sessionId: string
  amount: number
  currency: string
  orderId: number
  sign: string
}

export function parseP24Notification(form: URLSearchParams): P24Notification {
  return {
    sessionId: form.get('p24_session_id') || '',
    amount: Number(form.get('p24_amount') || 0),
    currency: form.get('p24_currency') || '',
    orderId: Number(form.get('p24_order_id') || 0),
    sign: form.get('p24_sign') || '',
  }
}

/** Weryfikacja podpisu notyfikacji: md5(sessionId|orderId|amount|currency|crc). */
export function p24VerifyNotificationSign(n: P24Notification): boolean {
  const { crc } = creds()
  return md5(`${n.sessionId}|${n.orderId}|${n.amount}|${n.currency}|${crc}`) === n.sign
}

/** OBOWIĄZKOWE potwierdzenie transakcji po notyfikacji — rozlicza płatność. */
export async function p24Verify(sessionId: string, p24OrderId: number, amount: number): Promise<void> {
  const { merchantId, posId, crc } = creds()
  const sign = md5(`${sessionId}|${p24OrderId}|${amount}|PLN|${crc}`)
  await p24Form('/trnVerify', {
    p24_merchant_id: merchantId,
    p24_pos_id: posId,
    p24_session_id: sessionId,
    p24_amount: String(amount),
    p24_currency: 'PLN',
    p24_order_id: String(p24OrderId),
    p24_sign: sign,
  })
}
