'use client';

import { motion } from 'framer-motion';
import { Event } from '../types/events';

interface EventListProps {
    events: Event[];
}

export default function EventMiniList({ events }: EventListProps) {
    const displayedEvents = events.slice(0, 3); // Only show first 3


    const handleClick = (event: Event) => {
        window.location.href = `/events/${event.value}`;
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="py-16"
        >
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedEvents.map((event) => (
                        <motion.div
                            key={event.id}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.08]"
                                onClick={() => handleClick(event)}
                            >
                                <div
                                    className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                                    style={{
                                        background: 'radial-gradient(600px 200px at 0% 0%, rgba(90,29,86,0.25), transparent)'
                                    }}
                                />
                                <h3 className="relative z-10 text-white text-lg font-semibold">
                                    {event.title}
                                </h3>

                                <p className="relative z-10 mt-2 text-white/75 text-sm">
                                    {event.description}
                                </p>

                                <div className="relative z-10 mt-6">
                                    <span className="inline-flex items-center text-sm font-semibold text-white/90">
                                        View more →
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
