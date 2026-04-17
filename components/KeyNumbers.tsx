'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '5 KG', label: 'of waste diverted from landfill with every single plank' },
  { value: '25+', label: 'years guaranteed lifespan in extreme tropical climates' },
  { value: '100%', label: 'recycled material — no virgin inputs, no compromise' },
  { value: '0', label: 'maintenance required. No staining, sealing, or refinishing. Ever.' },
]

export default function KeyNumbers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-bg-surface border-y border-border-subtle py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bg-surface p-8 md:p-12"
            >
              <div className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                {stat.value}
              </div>
              <div className="text-text-secondary text-sm leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
