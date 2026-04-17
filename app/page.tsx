import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TextureStrip from '@/components/TextureStrip'
import KeyNumbers from '@/components/KeyNumbers'
import Story from '@/components/Story'
import Applications from '@/components/Applications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TextureStrip />
      <KeyNumbers />
      <Story />
      <Applications />
      <Contact />
      <Footer />
    </main>
  )
}
