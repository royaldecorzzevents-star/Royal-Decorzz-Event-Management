import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'
import { fetchWeddingImages, type WeddingImagesDebug } from '@/lib/supabase/wedding-images'
import { getStorageBucket, getWeddingFolder } from '@/lib/supabase/env'

export const dynamic = 'force-dynamic'

export async function GET() {
  const debug: WeddingImagesDebug = {
    bucket: getStorageBucket(),
    folder: getWeddingFolder(),
    listedPaths: [],
  }

  try {
    const admin = createAdminClient()
    const supabase = admin ?? (await createClient())
    const images = await fetchWeddingImages(supabase, { debug })

    return NextResponse.json({
      images,
      bucket: debug.bucket,
      folder: debug.folder,
      count: images.length,
      ...(images.length === 0 && {
        hint:
          'Storage list returned no files. Run supabase/fix-storage-policy.sql in Supabase SQL Editor, or add SUPABASE_SERVICE_ROLE_KEY to .env.local (server only).',
        debug,
        usingServiceRole: Boolean(admin),
      }),
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to load images'
    return NextResponse.json({ error: message, debug }, { status: 500 })
  }
}
