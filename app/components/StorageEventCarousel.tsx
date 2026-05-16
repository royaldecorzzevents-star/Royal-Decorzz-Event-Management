'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import EventCarousel from './EventCarousel'
import type { EventImage } from '@/app/types/events'
import type { StorageImage } from '@/lib/supabase/storage-images'

interface StorageEventCarouselProps {
  folder: string
  title: string
  fallbackImages: EventImage[]
}

function toEventImages(storageImages: StorageImage[]): EventImage[] {
  return storageImages.map((image) => ({
    id: image.path,
    url: image.url,
    alt: image.name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
  }))
}

export default function StorageEventCarousel({
  folder,
  title,
  fallbackImages,
}: StorageEventCarouselProps) {
  const [images, setImages] = useState<EventImage[] | null>(null)
  const fallbackRef = useRef(fallbackImages)
  fallbackRef.current = fallbackImages

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch(`/api/storage-images?folder=${encodeURIComponent(folder)}`)
        const json = await res.json()
        if (!cancelled && res.ok && json.images?.length > 0) {
          setImages(toEventImages(json.images))
        } else if (!cancelled) {
          setImages(fallbackRef.current)
        }
      } catch {
        if (!cancelled) {
          setImages(fallbackRef.current)
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [folder])

  if (images === null) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black to-[#5a1d56]"
          animate={{ opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    )
  }

  return <EventCarousel images={images} title={title} />
}
