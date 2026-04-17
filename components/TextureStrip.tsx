'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function TextureStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative w-full overflow-hidden" style={{ height: '55vh', minHeight: '320px' }}>
      <motion.div
        initial={{ scale: 1.06 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/texture-decking.png"
          alt="Notwud composite decking texture"
          fill
          className="object-cover object-center"
          quality={95}
        />
        {/* Subtle dark vignette on top and bottom edges only */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 via-transparent to-bg-primary/60" />
      </motion.div>

      {/* Material detail label — bottom left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-8 left-6 lg:left-12 z-10"
      >
        <p className="text-white/40 text-xs tracking-[0.25em] uppercase">
          Charcoal Black · Anti-slip Embossed Grain · 100% Recycled
        </p>
      </motion.div>
    </section>
  )
}
