'use client';

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { Calendar, MapPin, Tag, Users, Clock, ArrowLeft, Share2, Heart } from 'lucide-react';
import Link from 'next/link';
import EventCarousel from '@/components/EventCarousel';
import { events } from '@/data/events';
import { Event } from '@/types/events';

interface EventPageProps {
  params: { id: string };
}

export default function EventPage({ params }: EventPageProps) {
  const event = events.find(e => e.id === params.id);

  if (!event) {
    notFound();
  }

  const relatedEvents = events.filter(e => e.id !== event.id && e.category === event.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white shadow-sm sticky top-0 z-40"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/events"
              className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Events</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gray-100 rounded-full hover:bg-purple-100 transition-colors duration-300"
              >
                <Heart className="w-5 h-5 text-gray-600" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gray-100 rounded-full hover:bg-purple-100 transition-colors duration-300"
              >
                <Share2 className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Section with Carousel */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative bg-white"
      >
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              {event.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full mb-6"
                >
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Featured Event
                </motion.div>
              )}
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {event.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {event.description}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date & Time</p>
                    <p className="font-semibold text-gray-900">{event.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900">{event.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Tag className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-semibold text-gray-900">{event.category}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Expected Guests</p>
                    <p className="font-semibold text-gray-900">150-200 Attendees</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Register Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300"
                >
                  Download Brochure
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              <EventCarousel images={event.images} title={event.title} />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Event Details */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Event Details</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What's Included</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Premium venue decoration and styling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Professional event planning and coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>High-quality catering and bar services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Entertainment and audiovisual equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Professional photography and videography</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Event Schedule</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="font-medium text-gray-900">Guest Arrival</p>
                        <p className="text-sm text-gray-600">4:00 PM - Welcome drinks and networking</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="font-medium text-gray-900">Main Event</p>
                        <p className="text-sm text-gray-600">5:00 PM - Ceremony begins</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="font-medium text-gray-900">Reception</p>
                        <p className="text-sm text-gray-600">7:00 PM - Dinner and celebration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Pricing Options</h3>
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Standard Package</span>
                        <span className="text-purple-600 font-bold">{event.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">Includes all basic services and amenities</p>
                    </div>
                    <div className="p-4 border-2 border-purple-600 rounded-xl bg-purple-50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Premium Package</span>
                        <span className="text-purple-600 font-bold">From ${(parseInt(event.price.replace(/[^0-9]/g, '')) * 1.5).toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-gray-600">All standard features plus VIP services and exclusive amenities</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Venue Features</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Climate-controlled indoor spaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Beautiful outdoor gardens and terraces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Ample parking and valet services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Accessibility compliant facilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Create Unforgettable Memories?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join us for an extraordinary experience that will leave lasting impressions
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                Book Your Spot Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="py-16 bg-gray-50"
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Events</h2>
              <p className="text-lg text-gray-600">Explore more events in the {event.category} category</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedEvents.map((relatedEvent, index) => (
                <motion.div
                  key={relatedEvent.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1, 
                    ease: 'easeOut' 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: 'easeOut' }
                  }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  <Link href={`/events/${relatedEvent.id}`}>
                    <div className="relative">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={relatedEvent.images[0].url}
                          alt={relatedEvent.images[0].alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                      {relatedEvent.featured && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                          Featured
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                          {relatedEvent.title}
                        </h3>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                          {relatedEvent.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {relatedEvent.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Calendar className="w-4 h-4 text-purple-500" />
                          <span className="text-sm">{relatedEvent.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <MapPin className="w-4 h-4 text-purple-500" />
                          <span className="text-sm">{relatedEvent.location}</span>
                        </div>
                      </div>
                      
                      <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                        View Details
                      </button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
}
