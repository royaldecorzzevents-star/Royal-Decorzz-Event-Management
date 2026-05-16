import { events } from '@/app/data/events'
import type { Event } from '@/app/types/events'

/** URL-safe slug for event pages (no spaces). */
export function normalizeEventKey(value: string): string {
  return decodeURIComponent(value).toLowerCase().replace(/[\s-_]+/g, '')
}

export function getEventSlug(event: Event): string {
  return normalizeEventKey(event.value)
}

export function getEventHref(event: Event): string {
  return `/events/${getEventSlug(event)}`
}

export function findEventByRouteParam(param: string): Event | undefined {
  const decoded = decodeURIComponent(param).trim()
  const key = normalizeEventKey(param)

  return events.find(
    (event) =>
      event.id === decoded ||
      event.value.toLowerCase() === decoded.toLowerCase() ||
      normalizeEventKey(event.value) === key
  )
}
