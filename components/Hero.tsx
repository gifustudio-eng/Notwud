'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpeg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />

      {/* Inner layout: navbar offset top, content fills middle, stats at bottom */}
      <div className="relative z-10 flex flex-col h-full max-w-7xl mx-auto w-full px-6 lg:px-12 pt-20 pb-10 md:pb-16">

        {/* ── MIDDLE: two columns, vertically centered ── */}
        <div className="flex-1 flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

            {/* LEFT — headline + subtext + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center"
            >
              {/* Mobile-only logo — above headline */}
              <div className="lg:hidden mb-6">
                <Image
                  src="/images/logo-notwud.png"
                  alt="Notwud"
                  width={200}
                  height={50}
                  className="h-8 w-auto object-contain brightness-0 invert"
                  priority
                />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5">
                Built from waste.<br />
                Built to last<br />
                25 years.
              </h1>
              <p className="text-white/50 text-sm md:text-base max-w-xs mb-8 leading-relaxed">
                100% recycled material. Zero maintenance.
                Marine-grade. Made in Indonesia.
              </p>
              <div className="flex flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-block bg-white text-bg-primary px-6 py-3.5 text-sm font-semibold tracking-wide hover:bg-white/90 transition-colors duration-200"
                >
                  Get in Touch
                </a>
                <a
                  href="#story"
                  className="inline-block border border-white/30 text-white px-6 py-3.5 text-sm font-medium tracking-wide hover:border-white/60 transition-colors duration-200"
                >
                  Our Story
                </a>
              </div>
            </motion.div>

            {/* RIGHT — Notwud logo vertically centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex flex-col items-center justify-center gap-4"
            >
              <Image
                src="/images/logo-notwud.png"
                alt="Notwud"
                width={480}
                height={120}
                className="w-full max-w-[340px] xl:max-w-[400px] h-auto object-contain brightness-0 invert"
                priority
              />
              <p className="text-white/30 text-xs tracking-[0.3em] uppercase">
                Premium Composite Decking
              </p>
            </motion.div>

          </div>
        </div>

        {/* ── BOTTOM: stats pinned to bottom of hero ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-6 border-t border-white/10 grid grid-cols-3 gap-6 max-w-md"
        >
          {[
            { value: '5 KG', label: 'waste diverted per plank' },
            { value: '25+', label: 'year guaranteed lifespan' },
            { value: '0', label: 'maintenance required' },
          ].map((stat) => (
            <div key={stat.value}>
              <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
              <div className="text-white/40 text-xs mt-1 leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
