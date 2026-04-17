'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const paragraphs = [
  `Jangjo has been running waste collection and processing across Jakarta's commercial districts for years. Every day, black plastic bags come in by the truckload from office buildings, malls, and restaurants. Over 40 tons of it.`,
  `Recycling was the obvious answer. But cleaning and processing black plastic is slow, expensive, and the economics rarely work out. So in 2025 we tried something different — instead of breaking it down, we built something out of it.`,
  `We started mixing the plastic with other waste we were already collecting. Broken glass. Ceramic fragments. Construction debris. Each batch taught us something. We kept adjusting the formula until we landed on a material that held its shape, felt solid underfoot, and looked genuinely good.`,
  `The charcoal black color comes directly from the material. No dye, no coating. That's just what it is.`,
]

export default function Story() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="story" ref={ref} className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left — label + headline */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-6">
                The Origin
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance">
                We process over 40 tons of waste a day.
                At some point, we asked what else we could do with it.
              </h2>
            </motion.div>
          </div>

          {/* Right — body text */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-6">
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`leading-relaxed ${
                  i === paragraphs.length - 1
                    ? 'text-white font-medium text-lg'
                    : 'text-text-secondary text-base'
                }`}
              >
                {para}
              </motion.p>
            ))}

            {/* Callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 pt-8 border-t border-border-subtle"
            >
              <p className="text-text-secondary text-sm leading-relaxed">
                We called it{' '}
                <span className="text-white font-semibold">Notwud</span> — a play on the Indonesian{' '}
                <em>"bukan kayu"</em>, not wood. Because it isn't. But when you first look at it,
                that's exactly what you think.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Facility photos — monochrome, full width below text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid md:grid-cols-2 gap-px bg-border-subtle"
        >
          {[
            { src: '/images/facility-sorting.jpg', alt: 'Jangjo waste sorting facility' },
            { src: '/images/facility-team.jpg', alt: 'Jangjo processing team' },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden bg-bg-surface">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover grayscale"
              />
              {/* Subtle dark overlay for consistency with page tone */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
