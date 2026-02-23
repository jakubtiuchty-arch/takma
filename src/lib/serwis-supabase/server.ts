import { createClient } from '@supabase/supabase-js'

/**
 * Server-side Supabase client with service role key.
 * Used in API routes for admin operations (insert repair_requests, create users).
 * Connects to serwis-zebry Supabase project.
 */
export function createSerwisServiceClient() {
  const url = process.env.NEXT_PUBLIC_SERWIS_SUPABASE_URL
  const key = process.env.SERWIS_SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    throw new Error('Missing SERWIS_SUPABASE env variables')
  }

  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
