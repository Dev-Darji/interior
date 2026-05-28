import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { stats } from '../data/projects'

export default function About() {
  const teamMembers = [
    {
      name: 'Sophia Johnson',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      bio: '8+ years in luxury interior design',
    },
    {
      name: 'Michael Chen',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      bio: 'Specializes in modern & minimalist spaces',
    },
    {
      name: 'Emma Williams',
      role: 'Interior Stylist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      bio: 'Expert in color and material selection',
    },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 bg-lux-bg relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-lux-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-lux-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-20 relative z-10">
        <SectionTitle
          title="About Elegant Studio"
          subtitle="A heritage of crafting exquisite living spaces tailored for discerning lifestyles."
        />
      </section>

      {/* Story Section */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-lux-accent-gold/10 translate-x-4 translate-y-4 rounded-4xl -z-10" />
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              alt="Luxury Interior Work"
              className="rounded-4xl shadow-2xl object-cover h-[500px] w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-light mb-6 text-lux-text-primary">
              Our Journey
            </h2>
            <p className="text-lux-text-secondary mb-6 leading-relaxed font-light text-lg">
              Elegant Design Studio was founded with a singular, uncompromising vision: to create beautifully curated, functional environments that serve as personal sanctuaries. What began as a passionate team of creative minds has evolved into a leading interior design atelier.
            </p>
            <p className="text-lux-text-secondary mb-6 leading-relaxed font-light">
              We operate under the philosophy that true luxury is deeply personal. It's not simply about opulence; it is about harmony, exceptional materiality, and custom solutions that speak directly to the way our clients inhabit their environments.
            </p>
            <p className="text-lux-text-secondary leading-relaxed font-light">
              With projects successfully delivered across premium residential developments and sophisticated commercial spaces, we remain committed to setting new benchmarks in quality, timely execution, and custom interior solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics banner */}
      <section className="py-20 bg-lux-bg-secondary border-y border-white/5 relative overflow-hidden my-24">
        {/* Subtle decorative grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <h3 className="text-5xl md:text-6xl font-heading font-light text-[#121212] mb-2">{stat.value}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-lux-text-secondary font-light">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto py-20 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-heading font-light text-center mb-16 text-lux-text-primary">
          Core Pillars
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Artisan Quality',
              description: 'We source only premium materials and collaborate with master craftsmen to ensure every custom fixture is executed flawlessly.',
            },
            {
              title: 'Impeccable Transparency',
              description: 'Our design processes are transparent, with fixed pricing, clear material specifications, and absolute structural integrity.',
            },
            {
              title: 'Bespoke Innovation',
              description: 'We look past fleeting interior trends, conceptualizing timeless yet progressive layouts that elevate daily living.',
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="border border-white/5 bg-lux-card/40 backdrop-blur-md p-10 rounded-4xl text-center hover:border-lux-accent-gold/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-heading font-light mb-4 text-lux-accent-gold">
                {value.title}
              </h3>
              <p className="text-lux-text-secondary font-light leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto py-20 relative z-10">
        <div className="border border-white/5 bg-lux-card/30 backdrop-blur-md rounded-4xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle gold glow inside */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-lux-accent-gold/5 blur-[80px] rounded-full pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light mb-6 text-lux-text-primary">
              Our Design Philosophy
            </h2>
            <p className="text-lg md:text-xl text-lux-text-secondary font-light leading-relaxed mb-6">
              "We believe that interior design is about creating spaces that tell your story. Every choice of texture, light, and dimension must serve a functional intent while elevating human experience."
            </p>
            <div className="h-px bg-lux-accent-gold/20 w-24 my-6" />
            <p className="text-sm text-lux-text-muted font-light uppercase tracking-[0.2em]">
              Elegant Design Studio Atelier
            </p>
          </motion.div>
        </div>
      </section>

      {/* Awards/Recognition */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto py-20 relative z-10">
        <h2 className="text-4xl font-heading font-light text-center mb-16 text-lux-text-primary">
          Atelier Distinctions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            'Best Interior Design Studio - Luxury Awards 2023',
            'Excellence in Luxury Residential Layouts - 2022',
            'Client Satisfaction & Delivery Choice Award - 2023',
            'Most Timeless Design Atelier - Modernist Council 2022',
          ].map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center p-6 border border-white/5 bg-lux-card/40 backdrop-blur-md rounded-3xl hover:border-lux-accent-gold/20 transition-all duration-300"
            >
              <div className="w-10 h-10 border border-lux-accent-gold bg-lux-accent-gold/10 text-lux-accent-gold rounded-full flex items-center justify-center mr-5 text-sm flex-shrink-0 font-light">
                ★
              </div>
              <p className="text-base md:text-lg font-heading font-light text-lux-text-primary">{award}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
