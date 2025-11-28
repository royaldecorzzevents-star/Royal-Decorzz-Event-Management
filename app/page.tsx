'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <header className="px-6 md:px-10 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-full"
            style={{ background: 'linear-gradient(135deg, #5a1d56 0%, #000000 100%)' }}
          />
          <span className="text-white text-xl font-bold tracking-wide">
            Royal Decorzz
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-white/80 hover:text-white transition-colors" href="#services">
            Services
          </a>
          <a className="text-white/80 hover:text-white transition-colors" href="#work">
            Our Work
          </a>
          <a className="text-white/80 hover:text-white transition-colors" href="#about">
            About
          </a>
          <a className="text-white/80 hover:text-white transition-colors" href="#contact">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all"
          style={{ backgroundColor: '#5a1d56' }}
        >
          Get a Quote
        </a>
      </header>

      <main className="px-6 md:px-10">
        <section className="relative overflow-hidden rounded-3xl border border-white/10"
          style={{ background: 'radial-gradient(1200px 600px at 80% -10%, rgba(90,29,86,0.35), transparent), radial-gradient(900px 400px at -10% 100%, rgba(90,29,86,0.25), transparent)' }}>
          <div className="relative z-10 grid md:grid-cols-2 gap-10 p-8 md:p-14">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
                Royal Decorzz
                <span className="block text-2xl md:text-3xl font-normal mt-3 text-white/80">
                  Elevating Moments. Crafting Memories.
                </span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-white/80">
                A boutique event management studio turning your vision into reality—weddings,
                corporate galas, luxury socials, and bespoke celebrations styled with elegance and precision.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#services"
                  className="rounded-full px-6 py-3 text-sm font-semibold text-white transition-all"
                  style={{ backgroundColor: '#5a1d56' }}
                >
                  Explore Services
                </a>
                <a
                  href="#work"
                  className="rounded-full px-6 py-3 text-sm font-semibold border border-white/20 text-white hover:bg-white/10 transition-all"
                >
                  View Portfolio
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-white/70">
                <div className="flex -space-x-3">
                  <span className="h-8 w-8 rounded-full bg-white/10 border border-white/20" />
                  <span className="h-8 w-8 rounded-full bg-white/10 border border-white/20" />
                  <span className="h-8 w-8 rounded-full bg-white/10 border border-white/20" />
                </div>
                <span className="text-sm">Trusted by 200+ happy clients</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl blur-2xl opacity-40"
                   style={{ background: 'linear-gradient(135deg, rgba(90,29,86,0.6), rgba(0,0,0,0.6))' }} />
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#5a1d56] to-black">
                  <div className="h-full w-full grid grid-cols-3 gap-1 p-1">
                    <div className="bg-white/5 rounded" />
                    <div className="bg-white/10 rounded" />
                    <div className="bg-white/5 rounded" />
                    <div className="bg-white/10 rounded" />
                    <div className="bg-white/5 rounded" />
                    <div className="bg-white/10 rounded" />
                    <div className="bg-white/5 rounded" />
                    <div className="bg-white/10 rounded" />
                    <div className="bg-white/5 rounded" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 rotate-6 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg"
                   style={{ backgroundColor: '#5a1d56' }}>
                Full-service planning
              </div>
              <div className="absolute -top-5 -right-5 -rotate-6 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg bg-white/10 border border-white/15">
                Luxury decor & styling
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mt-16 md:mt-24">
          <h2 className="text-white text-2xl md:text-3xl font-bold">Signature Services</h2>
          <p className="text-white/70 mt-2 max-w-2xl">
            Tailored experiences infused with artistry, logistics, and a royal touch.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: 'Weddings & Receptions', desc: 'From intimate vows to grand soirées—every detail refined.' },
              { title: 'Corporate Events', desc: 'Brand launches, award nights, and executive retreats with impact.' },
              { title: 'Luxury Socials', desc: 'Milestone birthdays, anniversaries, and private gatherings in style.' },
            ].map((card) => (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.08]"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                     style={{ background: 'radial-gradient(600px 200px at 0% 0%, rgba(90,29,86,0.25), transparent)' }} />
                <h3 className="relative z-10 text-white text-lg font-semibold">{card.title}</h3>
                <p className="relative z-10 mt-2 text-white/75 text-sm">{card.desc}</p>
                <div className="relative z-10 mt-6">
                  <span
                    className="inline-flex items-center text-sm font-semibold text-white/90"
                    style={{ color: '#fff' }}
                  >
                    Learn more →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="mt-16 md:mt-24">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-white text-2xl md:text-3xl font-bold">Recent Highlights</h2>
              <p className="text-white/70 mt-2">A glimpse into moments we were honored to craft.</p>
            </div>
            <a
              href="#contact"
              className="hidden md:inline-flex rounded-full px-5 py-2.5 text-sm font-semibold text-white"
              style={{ backgroundColor: '#5a1d56' }}
            >
              Plan your event
            </a>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10">
                <div className="aspect-[4/3] bg-gradient-to-br from-black to-[#5a1d56]">
                  <div className="h-full w-full flex items-end p-4">
                    <div className="rounded-lg bg-black/50 px-3 py-2 text-white text-sm border border-white/10">
                      Event #{i}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white text-xl font-semibold">Our Philosophy</h3>
              <p className="text-white/75 mt-3">
                We believe every celebration deserves thoughtful design, impeccable coordination,
                and an atmosphere that feels uniquely yours. With curated vendor networks and
                meticulous planning, we orchestrate events that are effortless for you and unforgettable for your guests.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white text-xl font-semibold">Why Royal Decorzz</h3>
              <ul className="text-white/80 mt-3 space-y-2 list-disc pl-5">
                <li>Bespoke concepts and styling</li>
                <li>End-to-end planning and logistics</li>
                <li>Detail-first execution with premium finishes</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16 md:mt-24 mb-16">
          <div className="rounded-3xl border border-white/10 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-white/[0.03]">
                <h3 className="text-white text-2xl font-bold">Let's create something unforgettable</h3>
                <p className="text-white/75 mt-3">
                  Tell us about your vision and we'll craft a tailored proposal.
                </p>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300">
                    Something went wrong. Please try again later.
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full rounded-lg bg-black/60 border border-white/15 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2"
                    style={{ boxShadow: '0 0 0 0 #000', accentColor: '#5a1d56' }}
                    required
                  />
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email or phone"
                    className="w-full rounded-lg bg-black/60 border border-white/15 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2"
                    style={{ boxShadow: '0 0 0 0 #000', accentColor: '#5a1d56' }}
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Event details"
                    rows={4}
                    className="w-full rounded-lg bg-black/60 border border-white/15 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2"
                    style={{ boxShadow: '0 0 0 0 #000', accentColor: '#5a1d56' }}
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full px-6 py-3 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#5a1d56' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Request a Quote'}
                  </button>
                </form>
              </div>
              <div
                className="p-8 md:p-12 text-white"
                style={{ background: 'linear-gradient(135deg, #5a1d56 0%, #000000 100%)' }}
              >
                <h4 className="text-xl font-semibold">Contact</h4>
                <div className="mt-4 space-y-2 text-white/90">
                  <p>contact@royaldecorzz.com</p>
                  <p>+1 (000) 000-0000</p>
                  <p>Available worldwide</p>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-semibold">Hours</h4>
                  <p className="mt-2 text-white/90">Mon–Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 md:px-10 py-8 border-t border-white/10 mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/60 text-sm">
            © {new Date().getFullYear()} Royal Decorzz. All rights reserved.
          </span>
          <div className="flex items-center gap-6 text-sm">
            <a className="text-white/60 hover:text-white" href="#">Privacy</a>
            <a className="text-white/60 hover:text-white" href="#">Terms</a>
            <a className="text-white/60 hover:text-white" href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
