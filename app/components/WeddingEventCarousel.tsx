'use client'

import StorageEventCarousel from './StorageEventCarousel'
import type { EventImage } from '@/app/types/events'

interface WeddingEventCarouselProps {
  title: string
  fallbackImages: EventImage[]
}

/** @deprecated Use StorageEventCarousel with folder="wedding" */
export default function WeddingEventCarousel(props: WeddingEventCarouselProps) {
  return <StorageEventCarousel folder="wedding" {...props} />
}
