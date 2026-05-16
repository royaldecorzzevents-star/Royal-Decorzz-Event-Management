'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import { EventImage } from '@/app/types/events';

interface EventCarouselProps {
  images: EventImage[];
  title: string;
}

export default function EventCarousel({ images, title }: EventCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[4/3] bg-gradient-to-br from-black to-[#5a1d56] rounded-2xl border border-white/10 flex items-center justify-center">
        <p className="text-white/60">No images available</p>
      </div>
    );
  }

  const safeIndex = Math.min(currentIndex, images.length - 1);
  const current = images[safeIndex];

  return (
    <div className="relative group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={safeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={current.url}
              alt={current.alt || title}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={safeIndex === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
          {safeIndex + 1} / {images.length}
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className="transition-all duration-300"
              aria-label={`Go to image ${index + 1}`}
            >
              <Circle
                className={`w-2 h-2 ${
                  index === safeIndex
                    ? 'fill-[#b98f37] text-[#b98f37]'
                    : 'fill-white/30 text-white/30'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
