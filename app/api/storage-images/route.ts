import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'
import { getStorageBucket } from '@/lib/supabase/env'
import {
  fetchStorageImages,
  type StorageImagesDebug,
} from '@/lib/supabase/storage-images'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const folder = searchParams.get('folder')

  if (!folder) {
    return NextResponse.json({ error: 'Missing folder query parameter' }, { status: 400 })
  }

  const debug: StorageImagesDebug = {
    bucket: getStorageBucket(),
    folder,
    listedPaths: [],
  }

  try {
    const admin = createAdminClient()
    const supabase = admin ?? (await createClient())
    const images = await fetchStorageImages(supabase, folder, { debug })

    return NextResponse.json({
      images,
      bucket: debug.bucket,
      folder: debug.folder,
      count: images.length,
      ...(images.length === 0 && {
        hint:
          'Storage list returned no files. Ensure the folder exists and public read policy is applied.',
        debug,
        usingServiceRole: Boolean(admin),
      }),
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to load images'
    return NextResponse.json({ error: message, debug }, { status: 500 })
  }
}
