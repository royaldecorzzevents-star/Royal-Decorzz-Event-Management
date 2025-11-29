'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Tag, Users } from 'lucide-react';
import Link from 'next/link';
import EventCarousel from './EventCarousel';
import { Event } from '../types/events';

interface EventCardProps {
  event: Event;
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      className=" rounded-2xl p-1 hover:shadow-2xl hover:border-[#b98f37] hover:shadow-[#b98f37] transition-all duration-300 overflow-hidden group cursor-pointer border border-[#5a1d56] shadow-lg"
    >
      <Link href={`/events/${event.value}`}>
        {/* Image Carousel */}
        <div className="relative">
          <EventCarousel images={event.images} title={event.title} />
          {event.featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-black to-[#b98f37] text-white text-sm font-semibold rounded-full backdrop-blur-sm"
            >
              Featured
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-purple-600 transition-colors duration-300">
              {event.title}
            </h3>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
              {event.category}
            </span>
          </div>

          <p className="text-white mb-4 line-clamp-2">
            {event.description}
          </p>
{/*
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="w-4 h-4 text-purple-500" />
              <span className="text-sm">{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-4 h-4 text-purple-500" />
              <span className="text-sm">{event.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Tag className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-semibold text-purple-600">{event.price}</span>
            </div>
          </div> */}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-black to-[#b98f37] text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            View Details
          </motion.button>
        </div>
      </Link>
    </motion.article>
  );
}
