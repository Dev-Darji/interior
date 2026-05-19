import HeroSlider from './HeroSlider'
import HeroContent from './HeroContent'

export default function LuxeHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Hero Slider Background */}
      <HeroSlider />

      {/* Hero Content */}
      <HeroContent />
    </section>
  )
}
