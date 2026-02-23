import { createBrowserClient } from '@supabase/ssr'

export function createSerwisClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SERWIS_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SERWIS_SUPABASE_ANON_KEY!
  )
}
