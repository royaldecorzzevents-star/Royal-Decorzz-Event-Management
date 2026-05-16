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
    >
      <motion.div className="relative z-10 p-6 md:p-10 lg:p-12">
        <motion.div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
          <motion.div>
            <motion.span className="inline-flex items-center gap-2 rounded-full border border-[#b98f37]/30 bg-[#b98f37]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#b98f37]">
              <MapPin className="h-3.5 w-3.5" />
              Find us
            </motion.span>
            <h3 className="mt-4 bg-gradient-to-r from-[#b98f37] via-white to-[#5a1d56] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Our Store
            </h3>
            <p className="mt-2 max-w-lg text-sm text-white/65 md:text-base">
              Visit our studio in Coimbatore or reach out—we bring celebrations to life across Tamil Nadu.
            </p>
          </motion.div>
          <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
            Serving all of Tamil Nadu
          </span>
        </motion.div>

        <motion.div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          <motion.div className="flex flex-col gap-4 lg:col-span-2">
            <motion.div className="group rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md transition-colors hover:border-[#b98f37]/30">
              <motion.div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#b98f37]/20 to-[#5a1d56]/40">
                <MapPin className="h-5 w-5 text-[#b98f37]" />
              </motion.div>
              <h4 className="text-lg font-semibold text-white">Store address</h4>
              <address className="mt-3 space-y-1 text-sm not-italic leading-relaxed text-white/75">
                {ADDRESS_LINES.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            </motion.div>

            <motion.div className="group rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md transition-colors hover:border-[#5a1d56]/50">
              <motion.div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#5a1d56]/40 to-black">
                <Clock className="h-5 w-5 text-white/90" />
              </motion.div>
              <h4 className="text-lg font-semibold text-white">Opening hours</h4>
              <p className="mt-2 text-2xl font-bold text-white">8:00 AM – 8:00 PM</p>
              <p className="mt-1 text-sm text-white/55">Open every day of the week</p>
            </motion.div>

            <motion.div className="group rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md transition-colors hover:border-white/20">
              <motion.div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                <Phone className="h-5 w-5 text-white/80" />
              </motion.div>
              <h4 className="text-lg font-semibold text-white">Call us</h4>
              <a
                href="tel:+916383503223"
                className="mt-2 inline-block text-lg font-medium text-[#b98f37] transition-colors hover:text-white"
              >
                +91 63835 03223
              </a>
            </motion.div>

            <motion.a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg"
              style={{ background: 'linear-gradient(135deg, #b98f37 0%, #5a1d56 100%)' }}
            >
              <Navigation className="h-4 w-4" />
              Get directions
            </motion.a>
          </motion.div>

          <motion.div className="relative lg:col-span-3">
            <motion.div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <motion.div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-full"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.div className="relative">
                  <span className="absolute -inset-3 animate-pulse rounded-full bg-[#b98f37]/30 blur-md" />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#b98f37] bg-[#5a1d56] shadow-xl">
                    <MapPin className="h-6 w-6 text-[#b98f37]" fill="currentColor" />
                  </span>
                </motion.div>
              </motion.div>

              <motion.div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-lg border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                  Royal Decorzz
                </span>
                <span className="rounded-lg border border-[#b98f37]/30 bg-[#b98f37]/10 px-3 py-1.5 text-xs font-medium text-[#b98f37] backdrop-blur-md">
                  Coimbatore
                </span>
              </motion.div>

              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Royal Decorzz store location"
                className="block min-h-[280px] grayscale-[20%] contrast-[1.05] transition-[filter] duration-500 hover:grayscale-0 md:min-h-[420px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
