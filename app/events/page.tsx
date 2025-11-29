'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, MapPin } from 'lucide-react';
import EventHeader from '../components/EventHeader';
import EventList from '../components/EventList';
import EventDetails from '../components/EventDetails';
import Footer from '../components/Footer';
import { events } from '../data/events';
// import { Event } from '@/types/events';

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(events.map(event => event.category))];
    return cats;
  }, []);

  const locations = useMemo(() => {
    const locs = ['All', ...new Set(events.map(event => event.location.split(',')[1]?.trim() || event.location))];
    return locs;
  }, []);

  const filteredEvents = useMemo(() => {
    return events;
  }, [searchTerm, selectedCategory, selectedLocation]);

  const featuredEvent = useMemo(() => {
    return filteredEvents.find(event => event.featured) || filteredEvents[0];
  }, [filteredEvents]);

  return (
    <div className="min-h-screen bg-black">
      <EventHeader />

      <main>
        {/* Filters Section */}
        {/* <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white py-8 shadow-sm sticky top-0 z-30"
        > */}
          {/* <div className="container mx-auto px-6"> */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="flex flex-col lg:flex-row gap-4 items-center"
            >

              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>


              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>


              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-600" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div> */}

            {/* Results Count */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="mt-4 text-sm text-gray-600"
            >
              Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
            </motion.div> */}
          {/* </div> */}
        {/* </motion.section> */}

        {/* Events List */}
        {filteredEvents.length > 0 ? (
          <EventList events={filteredEvents} />
        ) : (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="py-16"
          >
            <div className="container mx-auto px-6 text-center">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Events Found</h2>
              <p className="text-gray-600">Try adjusting your filters or search terms</p>
            </div>
          </motion.section>
        )}

        {/* Featured Event Details */}
        {/* {featuredEvent && <EventDetails event={featuredEvent} />} */}
      </main>

      <Footer />
    </div>
  );
}
