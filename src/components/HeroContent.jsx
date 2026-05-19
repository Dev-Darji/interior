import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function HeroContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const scrollDownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1,
      },
    },
  }

  const bounceVariants = {
    bounce: {
      y: [0, 8, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center pt-24 md:pt-28 z-10 px-6 md:px-8">
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-5xl"
      >
        {/* Small Label */}
        <motion.div variants={itemVariants} className="mb-8 md:mb-12">
          <span className="inline-block px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/40 text-white text-xs font-light tracking-[0.3em] uppercase">
            Premium Interior Design
          </span>
        </motion.div>

        {/* Main Heading - PROFESSIONAL PREMIUM */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-light text-white leading-[1.1] mb-10 md:mb-12 tracking-tight text-center"
        >
          <span className="font-logo block mb-4 text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-lux-accent-gold">Elegant</span>
          Interior Design
          <br />
          <span className="text-white/80 italic">Studio</span>
        </motion.h1>

        {/* Subheading - CLEAR & PROFESSIONAL */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 md:mb-16 font-light leading-relaxed text-center"
        >
          Transforming spaces with sophisticated design, premium materials, and timeless elegance. Every project reflects luxury, comfort, and modern living standards.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 md:gap-7 justify-center items-center"
        >
          {/* Primary Button */}
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/projects"
              className="relative px-8 md:px-10 py-3.5 md:py-4 rounded-full text-lux-text-primary font-light text-xs md:text-sm tracking-[0.2em] uppercase overflow-hidden group inline-block shadow-sm"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-lux-accent-gold rounded-full opacity-100 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl bg-lux-accent-gold/50 transition-opacity duration-300" />

              {/* Text */}
              <span className="relative z-10">View Projects</span>
            </Link>
          </motion.div>

          {/* Secondary Button */}
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/contact"
              className="relative px-8 md:px-10 py-3.5 md:py-4 rounded-full font-light text-xs md:text-sm tracking-[0.2em] uppercase overflow-hidden group inline-block border border-white/50 hover:border-white/80 transition-all duration-300"
            >
              {/* Hover background fill */}
              <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Text */}
              <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
                Get Free Consultation
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        variants={scrollDownVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-12 md:bottom-16 z-10"
      >
        <motion.div variants={bounceVariants} animate="bounce">
          <div className="flex flex-col items-center gap-3">
            <span className="text-white/60 text-xs tracking-[0.2em] uppercase font-light">
              Scroll to explore
            </span>
            <FiArrowDown className="text-white/70 text-base" strokeWidth={1} />
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 py-10 md:py-14 px-6 md:px-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {[
              { value: '120+', label: 'Projects' },
              { value: '50+', label: 'Clients' },
              { value: '8', label: 'Years' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                className="px-4 py-3 md:px-6 md:py-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 text-center group"
              >
                <p className="text-lg md:text-2xl font-heading font-light text-lux-accent-light mb-1">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-white/70 group-hover:text-white/90 transition-colors uppercase tracking-[0.15em]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
