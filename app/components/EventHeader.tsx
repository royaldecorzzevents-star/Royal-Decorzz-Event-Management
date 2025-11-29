'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function EventHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative overflow-hidden bg-gradient-to-br from-[#5a1d56] via-black to-black text-white"
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-6 py-14 md:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              // animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="p-3 bg-purple-600/10 rounded-full backdrop-blur-sm"
            >
              {/* <Sparkles className="w-8 h-8 text-[#5a1d56]" /> */}
              <Image src="/logo.png" alt="Logo" width={32} height={32} />
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#b98f37] to-[#ffffff] bg-clip-text text-transparent">
            Royal Events
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Discover extraordinary events crafted with elegance and precision
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400"
          >
            {/* <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#5a1d56]" />
              <span>Upcoming Events</span>
            </div> */}
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#5a1d56]" />
              <span>Premium Venues</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}
