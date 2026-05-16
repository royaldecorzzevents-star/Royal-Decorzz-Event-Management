import type { SupabaseClient } from '@supabase/supabase-js'
import { getStorageBucket } from './env'

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif|bmp|svg)$/i
const MAX_DEPTH = 3

export type StorageImage = {
  name: string
  path: string
  url: string
}

export type StorageImagesDebug = {
  bucket: string
  folder: string
  listedPaths: string[]
}

function normalizeFolder(folder: string): string {
  if (!folder) return ''
  return folder.replace(/^\/+|\/+$/g, '')
}

function isFolderEntry(item: { name: string; id?: string | null }): boolean {
  return item.id == null && !IMAGE_EXT.test(item.name)
}

async function listAtPath(
  supabase: SupabaseClient,
  bucket: string,
  path: string,
  depth: number,
  debug?: StorageImagesDebug
): Promise<StorageImage[]> {
  if (depth > MAX_DEPTH) return []

  const listPath = path || ''
  if (debug) {
    debug.listedPaths.push(listPath || '(root)')
  }

  const { data, error } = await supabase.storage.from(bucket).list(listPath, {
    limit: 100,
    sortBy: { column: 'created_at', order: 'desc' },
  })

  if (error) {
    throw error
  }

  const images: StorageImage[] = []

  for (const item of data ?? []) {
    if (!item.name || item.name.startsWith('.')) continue

    const objectPath = listPath ? `${listPath}/${item.name}` : item.name

    if (IMAGE_EXT.test(item.name)) {
      const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(objectPath)
      images.push({
        name: item.name,
        path: objectPath,
        url: urlData.publicUrl,
      })
      continue
    }

    if (isFolderEntry(item)) {
      const nested = await listAtPath(supabase, bucket, objectPath, depth + 1, debug)
      images.push(...nested)
    }
  }

  return images
}

export async function fetchStorageImages(
  supabase: SupabaseClient,
  folder: string,
  options?: { debug?: StorageImagesDebug; bucket?: string }
): Promise<StorageImage[]> {
  const bucket = options?.bucket ?? getStorageBucket()
  const normalizedFolder = normalizeFolder(folder)

  const debug =
    options?.debug ??
    ({
      bucket,
      folder: normalizedFolder,
      listedPaths: [],
    } satisfies StorageImagesDebug)

  const images = await listAtPath(supabase, bucket, normalizedFolder, 0, debug)

  return images.sort((a, b) => a.name.localeCompare(b.name))
}

/** Maps event `value` slugs to Supabase storage folder names inside the images bucket. */
export function getEventStorageFolder(eventValue: string): string | null {
  const key = eventValue.toLowerCase().replace(/\s+/g, '')
  const folders: Record<string, string> = {
    wedding: 'wedding',
    housewarming: 'housewarming',
    babynamingceremony: 'namingceremony',
    birthday: 'birthday',
    babyshower: 'babyshower',
  }
  return folders[key] ?? null
}
