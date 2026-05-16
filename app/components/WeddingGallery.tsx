'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { StorageImage } from '@/lib/supabase/storage-images'

type HighlightImage = StorageImage & {
  label: string
}

const HIGHLIGHT_FOLDERS = [
  { folder: 'wedding', label: 'Wedding' },
  { folder: 'birthday', label: 'Birthday' },
  { folder: 'namingceremony', label: 'Naming Ceremony' },
] as const

function GallerySkeleton() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative overflow-hidden rounded-2xl border border-white/10"
        >
          <motion.div
            className="aspect-[4/3] bg-gradient-to-br from-black to-[#5a1d56]"
            animate={{ opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      ))}
    </>
  )
}

export default function WeddingGallery() {
  const [images, setImages] = useState<HighlightImage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const results = await Promise.all(
          HIGHLIGHT_FOLDERS.map(async ({ folder, label }) => {
            const res = await fetch(`/api/storage-images?folder=${encodeURIComponent(folder)}`)
            const json = await res.json()
            if (!res.ok) {
              throw new Error(json.error ?? `Failed to load ${label} images`)
            }
            const first = (json.images as StorageImage[] | undefined)?.[0]
            return first ? { ...first, label } : null
          })
        )

        if (!cancelled) {
          setImages(results.filter((img) => img !== null))
          setError(null)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load highlights')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  if (loading) {
    return <GallerySkeleton />
  }

  if (error) {
    return (
      <p className="col-span-full text-center text-white/60 text-sm py-8">
        Could not load photos: {error}. Ensure the bucket is public and storage folders exist.
      </p>
    )
  }

  if (images.length === 0) {
    return (
      <p className="col-span-full text-center text-white/60 text-sm py-8">
        No highlight images found. Upload one image each to the{' '}
        <code className="text-white/80">wedding</code>,{' '}
        <code className="text-white/80">birthday</code>, and{' '}
        <code className="text-white/80">namingceremony</code> folders in Supabase Storage.
      </p>
    )
  }

  return (
    <>
      {images.map((image, index) => (
        <motion.div
          key={image.path}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10"
        >
          <motion.div
            className="aspect-[4/3] relative bg-black"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src={image.url}
              alt={image.name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')}
              fill
              unoptimized
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <motion.div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="rounded-lg bg-black/50 px-3 py-2 text-white text-sm border border-white/10 backdrop-blur-sm">
                {image.label}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </>
  )
}
