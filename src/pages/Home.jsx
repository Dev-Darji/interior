import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'
import { projects, testimonials, stats } from '../data/projects'
import {
  FiArrowRight,
  FiAward,
  FiCompass,
  FiHeart,
  FiLayers,
  FiMapPin,
  FiMaximize,
  FiSliders,
} from 'react-icons/fi'

// Local Luxury Images
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'
import img6 from '../images/img6.jpeg'

// Import premium generated interior images for high-contrast blend
import interiorImg1 from '../images/interior_img1.jpeg'
import interiorImg2 from '../images/interior_img2.jpeg'
import interiorImg3 from '../images/interior_img3.jpeg'
import interiorImg4 from '../images/interior_img4.jpeg'
import interiorImg5 from '../images/interior_img5.jpeg'
import interiorImg6 from '../images/interior_img6.jpeg'
import interiorImg7 from '../images/interior_img7.jpeg'
import interiorImg8 from '../images/interior_img8.jpeg'
import interiorImg9 from '../images/interior_img9.jpeg'
import interiorImg10 from '../images/interior_img10.jpeg'
import interiorImg11 from '../images/interior_img11.jpeg'
import interiorImg12 from '../images/interior_img12.jpeg'

// Immersive dynamic counter for premium count-up effect
function Counter({ value, duration = 1.5 }) {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)
  const hasAnimated = useRef(false)

  const target = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const end = target
          if (start === end) return

          const startTime = performance.now()

          const updateCount = (now) => {
            const timePassed = now - startTime
            const progress = Math.min(timePassed / (duration * 1000), 1)
            
            // Ease out quad
            const easeProgress = progress * (2 - progress)
            const currentCount = Math.floor(easeProgress * (end - start) + start)

            setCount(currentCount)

            if (progress < 1) {
              requestAnimationFrame(updateCount)
            } else {
              setCount(end)
            }
          }

          requestAnimationFrame(updateCount)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [target, duration])

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  )
}

export default function Home() {
  const containerRef = useRef(null)
  
  // Custom parallax scroll effects for premium luxury feel
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const heroImageY = useTransform(scrollYProgress, [0, 0.3], ['0%', '15%'])
  const heroTextY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-10%'])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.15])

  const signatureCurations = [
    {
      number: '01',
      title: 'Bespoke Residential curation',
      subtitle: 'Luxury Villa Atelier',
      image: interiorImg6,
      description: 'An absolute harmony of premium Italian marble, warm brass detailing, and curated architectural lighting.',
      link: '/projects/1'
    },
    {
      number: '02',
      title: 'Signature Culinary Spaces',
      subtitle: 'Modular Kitchen Atelier',
      image: interiorImg2,
      description: 'State-of-the-art storage choreography with integrated German engineering and seamless quartz finishes.',
      link: '/projects/2'
    },
    {
      number: '03',
      title: 'Corporate Executive Sanctuaries',
      subtitle: 'Bespoke Office Atelier',
      image: interiorImg3,
      description: 'A workspace design defined by polished timber panelling, soundproofing, and refined ergonomic layout.',
      link: '/projects/3'
    }
  ]

  const pillars = [
    {
      icon: FiCompass,
      title: 'Structural Choreography',
      desc: 'We map spatial flows with absolute geometric precision, maximizing natural luminosity.'
    },
    {
      icon: FiLayers,
      title: 'Artisan Materiality',
      desc: 'Collaborating directly with global stone quarries, timber mills, and textile ateliers.'
    },
    {
      icon: FiSliders,
      title: 'Bespoke Customization',
      desc: 'Every dynamic detail is custom-forged, from hardware fittings to complex modular panels.'
    }
  ]

  return (
    <div ref={containerRef} className="bg-lux-bg text-lux-text-primary overflow-hidden min-h-screen relative">
      {/* Dynamic Background Atmospheric Glows */}
      <motion.div 
        style={{ opacity: glowOpacity }}
        className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-lux-accent-gold/10 blur-[150px] rounded-full pointer-events-none z-0" 
      />
      <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-lux-accent-tan/5 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[15%] right-[-5%] w-[600px] h-[600px] bg-lux-accent-gold/5 blur-[160px] rounded-full pointer-events-none z-0" />

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center relative pt-32 pb-12 sm:pt-36 lg:pt-36 lg:pb-24 z-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Premium Typography */}
          <motion.div 
            style={{ y: heroTextY }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-heading font-bold leading-[1.08] tracking-tight mb-8 text-[#121212]">
              Sculpted <br />
              <span className="text-lux-accent-gold italic">Elegance</span>
            </h1>

            <p className="text-lux-text-primary font-normal text-base md:text-lg leading-relaxed max-w-xl mb-6">
              We design and curate bespoke high-end environments, uniting architectural rigor with exquisite materials. Every space is a tailor-made portrait of silent luxury.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                to="/projects"
                className="px-10 py-5 rounded-full bg-lux-accent-gold text-[#121212] text-xs font-bold tracking-[0.2em] uppercase hover:bg-lux-accent-tan transition-all duration-300 shadow-xl hover:shadow-lux-accent-gold/10 hover:translate-y-[-2px]"
              >
                Explore Portfolio
              </Link>
              <Link
                to="/contact"
                className="px-10 py-5 rounded-full border-2 border-lux-accent-gold text-lux-accent-gold text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-lux-accent-gold hover:text-[#121212]"
              >
                Book Consultation
              </Link>
            </div>

            {/* Quick stats floating bar */}
            <div className="mt-16 md:mt-20 grid grid-cols-3 gap-6 max-w-lg">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-heading font-semibold text-lux-accent-gold mb-1">
                    <Counter value={stat.value} />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-lux-text-secondary font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Asymmetric Layered Showcase Frame */}
          <motion.div 
            style={{ y: heroImageY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
          >
            {/* The gold outline frame backer */}
            <div className="absolute inset-0 border border-lux-accent-gold/25 translate-x-4 translate-y-4 rounded-4xl -z-10" />

            {/* Main Immersive Render Image */}
            <div className="w-full max-w-[540px] aspect-[4/5] rounded-4xl overflow-hidden shadow-2xl relative group">
              <img
                src={interiorImg1}
                alt="High-End Living Sanctuary"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

              {/* Floating Architectural Badge - HIGHLY VISIBLE & LUXURIOUS */}
              <div className="absolute bottom-8 left-8 right-8 border border-lux-accent-gold/30 bg-[#121212]/95 p-6 rounded-3xl shadow-2xl flex items-center justify-between z-20">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-lux-accent-gold font-bold mb-1.5 block">Featured Work</span>
                  <h4 className="text-base font-heading font-medium text-white">The Emerald Penthouse</h4>
                </div>
                <div className="w-10 h-10 border border-lux-accent-gold/40 text-lux-accent-gold bg-lux-accent-gold/10 rounded-full flex items-center justify-center cursor-default">
                  <FiArrowRight size={16} className="stroke-[2.5]" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. THE BRAND PHILOSOPHY STORY */}
      <section className="py-32 md:py-44 px-6 md:px-10 bg-lux-bg-secondary relative z-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Graphic Side */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <motion.img 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src={interiorImg11} 
                alt="Bespoke luxury foyer helical staircase" 
                className="rounded-3xl w-full h-[280px] object-cover border border-white/5 shadow-md"
              />
              <motion.img 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                src={interiorImg9} 
                alt="Bespoke royal walk-in dressing suite" 
                className="rounded-3xl w-full h-[180px] object-cover border border-white/5 shadow-md"
              />
            </div>
            <div className="space-y-4 pt-10">
              <motion.img 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                src={interiorImg7} 
                alt="Bespoke luxury master spa bath" 
                className="rounded-3xl w-full h-[180px] object-cover border border-white/5 shadow-md"
              />
              <motion.img 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25 }}
                src={interiorImg4} 
                alt="Exquisite dining lounge" 
                className="rounded-3xl w-full h-[280px] object-cover border border-white/5 shadow-md"
              />
            </div>
          </div>

          {/* Typography Side */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 lg:pl-6"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-lux-accent-gold font-bold block">Our Narrative</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-[#121212] leading-tight">
              Bespoke Spaces Crafted For the <span className="text-lux-accent-gold italic">Modern Purist</span>
            </h2>
            <div className="h-px bg-lux-accent-gold/25 w-24 my-6" />
            <p className="text-lux-text-primary font-normal leading-relaxed text-lg">
              We approach each layout not merely as layout design, but as bespoke structural choreography. Our narrative prioritizes geometric balance, premium materials, and flawless architectural planning.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 3. SIGNATURE PILLARS (WHY US REDESIGNED) */}
      <section className="py-32 px-6 md:px-10 bg-lux-bg relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Design Distinctions"
            subtitle="The core architectural parameters that separate our studio from standard design."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border border-lux-accent-gold/25 bg-white shadow-sm hover:shadow-xl hover:shadow-lux-accent-gold/10 hover:border-lux-accent-gold transition-all duration-500 rounded-3xl p-10 md:p-12 flex flex-col justify-between group"
              >
                <div className="text-4xl text-lux-accent-gold mb-8 group-hover:text-lux-accent-tan transition-colors duration-300">
                  <pillar.icon strokeWidth={1.2} />
                </div>
                <h3 className="font-heading font-semibold text-2xl text-[#121212] mb-4">{pillar.title}</h3>
                <p className="text-slate-600 font-normal leading-relaxed text-sm">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE SIGNATURE CURATIONS SHOWCASE (PROJECTS REDESIGNED) */}
      <section className="py-32 md:py-44 px-6 md:px-10 bg-lux-bg-secondary relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-lux-accent-gold font-bold block mb-3">Portfolio Curation</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-[#121212]">
                Atelier Masterworks
              </h2>
            </div>
            <Link 
              to="/projects" 
              className="text-xs uppercase tracking-[0.2em] font-semibold text-lux-accent-gold hover:text-lux-accent-tan transition-colors flex items-center gap-2 mt-6 md:mt-0"
            >
              Acquire Full Portfolio <FiArrowRight />
            </Link>
          </div>

          {/* Staggered detailed project showcase layouts */}
          <div className="space-y-32">
            {signatureCurations.map((item, idx) => (
              <div 
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                  idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Photo Side */}
                <div className={`lg:col-span-7 relative ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-lux-accent-gold/5 translate-x-4 translate-y-4 rounded-4xl -z-10" />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="aspect-[16/10] w-full rounded-4xl overflow-hidden shadow-xl border border-white/5"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                    />
                  </motion.div>
                </div>

                {/* Text Description Side */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className={`lg:col-span-5 space-y-6 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-heading font-semibold text-lux-accent-gold/40">{item.number}</span>
                    <span className="h-px bg-lux-accent-gold/20 w-8" />
                    <span className="text-xs uppercase tracking-[0.2em] text-lux-accent-gold font-bold">{item.subtitle}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-heading font-medium text-[#121212] leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-lux-text-primary font-normal leading-relaxed text-sm">
                    {item.description}
                  </p>
                  
                  <div className="pt-4">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-lux-accent-gold">
                      Signature Series
                    </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLIENT PORTRAITS & TESTIMONIAL LOOKBOOK */}
      <section className="py-32 md:py-44 px-6 md:px-10 bg-lux-bg relative z-10 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <SectionTitle
            title="Atelier Endorsements"
            subtitle="Critiques and testimonials from patrons who have acquired our custom spaces."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {testimonials.map((patron, idx) => (
              <motion.div
                key={patron.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border border-lux-accent-gold/25 bg-white shadow-sm hover:shadow-xl hover:shadow-lux-accent-gold/10 hover:border-lux-accent-gold transition-all duration-500 rounded-3xl p-10 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Patrons Custom Stars */}
                  <div className="flex text-lux-accent-gold text-xs gap-1 mb-8">
                    {[...Array(patron.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-[#121212] font-normal leading-relaxed text-base italic mb-10">
                    "{patron.review}"
                  </p>
                </div>

                <div className="flex items-center border-t border-slate-100 pt-6">
                  <img
                    src={patron.image}
                    alt={patron.name}
                    className="w-10 h-10 rounded-full mr-4 object-cover border border-lux-accent-gold/30"
                  />
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-[#121212]">
                      {patron.name}
                    </h4>
                    <span className="text-[10px] uppercase tracking-widest text-lux-accent-gold font-bold">Patron client</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. IMMERSIVE BESPOKE CALL FOR INQUIRIES */}
      <section className="py-28 md:py-36 px-6 md:px-10 bg-lux-accent-gold relative overflow-hidden z-10">
        {/* Intricate golden wireframe decorative backer */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-45 pointer-events-none" />
        


        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#121212] font-bold block mb-4">
              Private Atelier Invitation
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-medium mb-8 text-[#121212] leading-tight">
              Let's Co-Create Your <br />
              <span className="font-logo italic">Signature</span> Environment
            </h2>
            
            <p className="text-base md:text-lg text-[#121212]/90 mb-12 font-normal max-w-2xl mx-auto leading-relaxed">
              Patrons are invited to reserve a private design consultation session at our atelier, either in person or via video connection.
            </p>
            
            <Link
              to="/contact"
              className="inline-block px-12 py-5 rounded-full bg-[#121212] text-lux-accent-gold text-xs tracking-[0.25em] uppercase hover:bg-[#1f1f1f] transition-all shadow-2xl hover:translate-y-[-3px] duration-300 font-semibold"
            >
              Request Private Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
