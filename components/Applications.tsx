'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const applications = [
  {
    title: 'Outdoor Decking',
    description:
      'Pools, terraces, garden paths. The anti-slip embossed surface holds up in standing water and salt air without any treatment.',
    image: '/images/app-decking.png',
    tag: '01',
  },
  {
    title: 'Outdoor Furniture',
    description:
      'Benches, table tops, seating. Dense enough to hold structural load and stable enough to leave outside year-round.',
    image: '/images/app-furniture.png',
    tag: '02',
  },
  {
    title: 'Wall Cladding',
    description:
      'Facades, feature walls, interior panels. The grain texture reads well at distance and holds detail up close.',
    image: '/images/app-cladding.png',
    tag: '03',
  },
]

export default function Applications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="applications" ref={ref} className="py-24 md:py-36 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-4">
              Applications
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              One material.
              <br />
              Multiple uses.
            </h2>
          </div>
          <p className="text-text-secondary text-sm max-w-xs leading-relaxed md:text-right">
            Custom installations available for residential and commercial projects
            across Jakarta, BSD, and Semarang.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-border-subtle">
          {applications.map((app, i) => (
            <motion.div
              key={app.tag}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bg-surface group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              {/* Text */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{app.title}</h3>
                  <span className="text-text-muted text-xs font-mono">{app.tag}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {app.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
