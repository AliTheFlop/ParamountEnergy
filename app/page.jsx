import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
import CTASection from '@/components/sections/CTASection'
import Stats from '@/components/sections/Stats'

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Testimonials />
      <CTASection />
    </div>
  )
}