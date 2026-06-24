import HeroSection     from '@/components/sections/heroSection'
import AboutSection    from '@/components/sections/aboutSection'
import ProjectSection  from '@/components/sections/projectSection'
import ContactSection  from '@/components/sections/contactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </>
  )
}