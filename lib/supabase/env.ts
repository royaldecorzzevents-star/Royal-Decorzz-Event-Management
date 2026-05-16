export function getSupabaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!url) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL')
  }
  return url
}

/** Supports publishable key (new) or anon key (legacy). */
export function getSupabaseKey(): string {
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!key) {
    throw new Error(
      'Missing NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY'
    )
  }
  return key
}

export function getStorageBucket(): string {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET ??
    process.env.NEXT_PUBLIC_SUPABASE_WEDDING_BUCKET ??
    'images'
  )
}

export function getWeddingBucket(): string {
  return getStorageBucket()
}

export function getWeddingFolder(): string {
  return process.env.NEXT_PUBLIC_SUPABASE_WEDDING_FOLDER ?? 'wedding'
}
