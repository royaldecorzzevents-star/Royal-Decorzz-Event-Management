'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin, Navigation, Phone } from 'lucide-react'

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.64535110289793!2d76.93477188797549!3d11.163509107238788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f143ddc2f05b%3A0xc01f0d2fdd52d9cc!2s55%2C%20Sowdambika%20Nagar%2C%20Samichettipalayam%2C%20Coimbatore%2C%20Tamil%20Nadu%20641047!5e0!3m2!1sen!2sin!4v1769689024599!5m2!1sen!2sin'

const MAP_LINK =
  'https://www.google.com/maps/place/55,+Sowdambika+Nagar,+Samichettipalayam,+Coimbatore,+Tamil+Nadu+641047'

const ADDRESS_LINES = [
  '55, Sowdambika Nagar',
  'Samichettipalayam',
  'Coimbatore, Tamil Nadu 641047',
]

export default function OurStoreSection() {
  return (
    <motion.section
      id="store"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative mt-12 overflow-hidden rounded-3xl border border-white/10"
      style={{
        background:
          'radial-gradient(900px 500px at 0% 0%, rgba(185,143,55,0.12), transparent), radial-gradient(1000px 600px at 100% 100%, rgba(90,29,86,0.4), transparent)',
      }}
    > <div className="relative z-10 p-6 md:p-10 lg:p-12">
        {/* Header */} <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"> <div> <span className="inline-flex items-center gap-2 rounded-full border border-[#b98f37]/30 bg-[#b98f37]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#b98f37]"> <MapPin className="h-3.5 w-3.5" />
          Find Us </span>

          <h2 className="mt-4 bg-gradient-to-r from-[#b98f37] via-white to-[#5a1d56] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Visit Our Studio
          </h2>

          <p className="mt-3 max-w-xl text-white/65">
            Creating unforgettable weddings, birthdays, corporate events and
            luxury celebrations across Tamil Nadu.
          </p>
        </div>

          <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
            Serving All Tamil Nadu
          </span>
        </div>

        {/* Stats */}
        <div className="mb-8 flex flex-wrap gap-3">
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            🎉 500+ Events Decorated
          </div>

          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            💍 Wedding Specialists
          </div>

          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            ⭐ Premium Event Styling
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:col-span-2">
            {/* Address */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#b98f37]/40 hover:shadow-[0_20px_60px_rgba(185,143,55,0.12)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#b98f37]/20 to-[#5a1d56]/20">
                <MapPin className="h-6 w-6 text-[#b98f37]" />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-white">
                Visit Our Studio
              </h3>

              <address className="space-y-1 text-sm not-italic text-white/70">
                {ADDRESS_LINES.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            </motion.div>

            {/* Hours */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#5a1d56]/40 hover:shadow-[0_20px_60px_rgba(90,29,86,0.15)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5a1d56]/30 to-black">
                <Clock className="h-6 w-6 text-white" />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                Opening Hours
              </h3>

              <p className="text-3xl font-bold text-white">
                8 AM – 8 PM
              </p>

              <p className="mt-2 text-sm text-white/55">
                Open every day
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#b98f37]/40 hover:shadow-[0_20px_60px_rgba(185,143,55,0.12)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
                <Phone className="h-6 w-6 text-white" />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                Call Us
              </h3>

              <a
                href="tel:+916383503223"
                className="text-2xl font-bold text-[#b98f37] transition-colors hover:text-white"
              >
                +91 63835 03223
              </a>

              <p className="mt-2 text-sm text-white/55">
                Booking & enquiries
              </p>
            </motion.div>

            {/* Service Area */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#5a1d56]/40 hover:shadow-[0_20px_60px_rgba(90,29,86,0.15)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5a1d56]/30 to-black">
                <Navigation className="h-6 w-6 text-white" />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                We Travel To You
              </h3>

              <p className="text-sm leading-relaxed text-white/70">
                Weddings, receptions, birthdays, engagements and corporate
                events across Tamil Nadu.
              </p>

              <span className="mt-4 inline-flex rounded-full border border-[#b98f37]/20 bg-[#b98f37]/10 px-3 py-1 text-xs font-medium text-[#b98f37]">
                Statewide Service
              </span>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl"
          >
            <iframe
              src={MAP_EMBED_URL}
              loading="lazy"
              title="Royal Decorzz Location"
              className="h-[450px] w-full"
            />

            <div className="flex items-center justify-between border-t border-white/10 bg-black/40 p-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  Royal Decorzz
                </p>

                <p className="text-xs text-white/60">
                  Coimbatore, Tamil Nadu
                </p>
              </div>

              <motion.a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white"
                style={{
                  background:
                    'linear-gradient(135deg,#b98f37 0%,#5a1d56 100%)',
                }}
              >
                <Navigation className="h-4 w-4" />
                Directions
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>)
}
