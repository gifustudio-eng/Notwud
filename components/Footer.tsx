import Image from 'next/image'

const partners = [
  { src: '/images/logo-jangjo-element-black.png', alt: 'Jangjo Element', width: 140 },
  { src: '/images/logo-flexitech.webp', alt: 'Flexitech Evolusindo', width: 180 },
  { src: '/images/logo-jangjo.png', alt: 'Jangjo', width: 180 },
]

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-primary">
      {/* Partner logos */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <p className="text-text-muted text-xs tracking-[0.15em] uppercase mb-10">
          A product of
        </p>
        <div className="flex flex-wrap items-center gap-10 md:gap-14">
          {partners.map((p) => (
            <div key={p.alt} className="opacity-50 hover:opacity-80 transition-opacity duration-300">
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={32}
                className="h-7 w-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © 2026 PT Jangjo Teknologi Indonesia. Notwud™ is a product of Jangjo Element,
            in collaboration with Flexitech Evolusindo.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:betterfuture@jangjo.com"
              className="text-text-muted text-xs hover:text-text-secondary transition-colors"
            >
              betterfuture@jangjo.com
            </a>
            <a
              href="https://www.jangjo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted text-xs hover:text-text-secondary transition-colors"
            >
              jangjo.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
