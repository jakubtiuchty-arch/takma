import { createClient } from '@supabase/supabase-js'

/**
 * Supabase Storage do /takma-transfer — wymiana plików z pracownikami.
 * Bucket PRYWATNY; upload bezpośrednio przeglądarka → Storage (signed upload URL,
 * omija limit ~4.5MB Vercela). Limit 40MB. Klient serwerowy używa service_role.
 */

export const TRANSFER_BUCKET = 'takma-transfer'
export const MAX_FILE_BYTES = 40 * 1024 * 1024 // 40 MB

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

export function transferConfigured(): boolean {
  return !!SUPABASE_URL && !!SERVICE_KEY
}

export function supabaseAdmin() {
  if (!transferConfigured()) {
    throw new Error('Brak konfiguracji Supabase Storage (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY).')
  }
  return createClient(SUPABASE_URL, SERVICE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

let bucketEnsured = false
/** Tworzy prywatny bucket z limitem 40MB, jeśli nie istnieje (idempotentne). */
export async function ensureBucket() {
  if (bucketEnsured) return
  const sb = supabaseAdmin()
  const { data } = await sb.storage.getBucket(TRANSFER_BUCKET)
  if (!data) {
    await sb.storage.createBucket(TRANSFER_BUCKET, {
      public: false,
      fileSizeLimit: MAX_FILE_BYTES,
    })
  }
  bucketEnsured = true
}

/** Bezpieczna nazwa pliku w ścieżce (zachowuje rozszerzenie, usuwa ryzykowne znaki). */
export function safePath(name: string): string {
  const clean = name
    .normalize('NFKD')
    .replace(/[^\w.\- ]+/g, '')
    .replace(/\s+/g, '_')
    .slice(-180)
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  return `${stamp}__${clean || 'plik'}`
}
