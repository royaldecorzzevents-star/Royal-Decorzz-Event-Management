import type { SupabaseClient } from '@supabase/supabase-js'
import { getWeddingFolder } from './env'
import {
  fetchStorageImages,
  type StorageImage,
  type StorageImagesDebug,
} from './storage-images'

export type WeddingImage = StorageImage
export type WeddingImagesDebug = StorageImagesDebug

export async function fetchWeddingImages(
  supabase: SupabaseClient,
  options?: { debug?: WeddingImagesDebug }
): Promise<WeddingImage[]> {
  return fetchStorageImages(supabase, getWeddingFolder(), options)
}
