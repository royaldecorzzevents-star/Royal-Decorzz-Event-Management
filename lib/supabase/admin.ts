import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/database.types'
import { getSupabaseUrl } from './env'

/** Server-only client that can list storage when RLS blocks anon/publishable keys. */
export function createAdminClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!serviceRoleKey) {
    return null
  }

  return createClient<Database>(getSupabaseUrl(), serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}
