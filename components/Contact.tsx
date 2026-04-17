'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  phone: string
  projectType: string
  message: string
}

const projectTypes = ['Residential', 'Commercial', 'Developer', 'Other']

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setError('')
    try {
      // Split full name into first + last for Jotform field q3
      const nameParts = data.name.trim().split(' ')
      const firstName = nameParts[0] || ''
      const lastName = nameParts.slice(1).join(' ') || '-'

      const formData = new FormData()
      formData.append('q3_fullName[first]', firstName)
      formData.append('q3_fullName[last]', lastName)
      formData.append('q4_email', data.email)
      formData.append('q5_phoneNumber[full]', data.phone || '')
      formData.append('q6_projectType', data.projectType || '')
      formData.append('q7_message', data.message || '')

      const res = await fetch('https://submit.jotform.com/submit/261062564062047', {
        method: 'POST',
        body: formData,
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or reach out via WhatsApp.')
      }
    } catch {
      setError('Something went wrong. Please try again or reach out via WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <div>
              <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-6">
                Get in Touch
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-6">
                Tell us about your project.
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-10">
                We'll get back to you within one business day — along with the full Notwud spec sheet.
              </p>

              {/* WhatsApp */}
              <div className="border-t border-border-subtle pt-8">
                <p className="text-text-secondary text-sm mb-4">Prefer to talk directly?</p>
                <a
                  href="https://wa.me/6281958889502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white text-sm font-medium hover:text-white/70 transition-colors group"
                >
                  <span className="flex items-center justify-center w-9 h-9 border border-border-subtle group-hover:border-white/40 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                  Chat on WhatsApp
                  <span className="text-text-muted">→</span>
                </a>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <p className="text-text-muted text-xs leading-relaxed">
                betterfuture@jangjo.com
                <br />
                www.jangjo.com
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-8"
          >
            {submitted ? (
              <div className="h-full flex flex-col justify-center py-16 border border-border-subtle p-12">
                <div className="text-4xl font-extrabold mb-4">Thank you.</div>
                <p className="text-text-secondary text-base leading-relaxed mb-8">
                  We've received your enquiry and will be in touch within one business day.
                  The Notwud spec sheet is on its way to your inbox.
                </p>
                <a
                  href="/Notwud-Brochure.pdf"
                  download
                  className="inline-block text-sm text-white underline underline-offset-4 hover:text-text-secondary transition-colors"
                >
                  Download brochure now →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-text-secondary tracking-wide uppercase">
                      Full Name <span className="text-white/40">*</span>
                    </label>
                    <input
                      {...register('name', { required: true })}
                      placeholder="Your name"
                      className={`bg-bg-surface border ${
                        errors.name ? 'border-red-500/50' : 'border-border-subtle'
                      } px-4 py-3.5 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-white/40 transition-colors`}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-text-secondary tracking-wide uppercase">
                      Email <span className="text-white/40">*</span>
                    </label>
                    <input
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      type="email"
                      placeholder="your@email.com"
                      className={`bg-bg-surface border ${
                        errors.email ? 'border-red-500/50' : 'border-border-subtle'
                      } px-4 py-3.5 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-white/40 transition-colors`}
                    />
                  </div>
                </div>

                {/* Phone + Project Type */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-text-secondary tracking-wide uppercase">
                      Phone Number
                    </label>
                    <input
                      {...register('phone')}
                      placeholder="+62 ..."
                      className="bg-bg-surface border border-border-subtle px-4 py-3.5 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-text-secondary tracking-wide uppercase">
                      Project Type
                    </label>
                    <select
                      {...register('projectType')}
                      defaultValue=""
                      className="bg-bg-surface border border-border-subtle px-4 py-3.5 text-sm text-white focus:outline-none focus:border-white/40 transition-colors appearance-none"
                    >
                      <option value="" disabled className="text-text-muted">
                        Select type
                      </option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-bg-surface">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-text-secondary tracking-wide uppercase">
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Tell us about your project — location, scale, timeline..."
                    className="bg-bg-surface border border-border-subtle px-4 py-3.5 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-white/40 transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <div className="flex items-center justify-between pt-2">
                  <p className="text-text-muted text-xs max-w-xs leading-relaxed">
                    We'll reply with the full Notwud spec sheet attached.
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-white text-bg-primary px-8 py-4 text-sm font-semibold tracking-wide hover:bg-white/90 disabled:opacity-50 transition-colors duration-200 whitespace-nowrap"
                  >
                    {loading ? 'Sending...' : 'Send Enquiry →'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
