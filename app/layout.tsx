import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Notwud™ — Premium Composite Decking',
  description:
    'Built from waste. Built to last 25 years. Premium composite decking made from 100% recycled material by Jangjo Element.',
  openGraph: {
    title: 'Notwud™ — Premium Composite Decking',
    description: 'Built from waste. Built to last 25 years.',
    siteName: 'Notwud',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
