import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function LuxeNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home', id: 'home' },
    { path: '/projects', label: 'Projects', id: 'projects' },
    { path: '/services', label: 'Services', id: 'services' },
    { path: '/about', label: 'About', id: 'about' },
    { path: '/contact', label: 'Contact', id: 'contact' },
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-lux-card/95 backdrop-blur-md shadow-sm border-b border-white/5 py-4'
            : 'bg-transparent backdrop-blur-xs py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="relative group flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-lux-accent-gold/40 rounded-full bg-lux-accent-gold/10 backdrop-blur-md"
              >
                <span className="text-2xl md:text-3xl font-logo text-lux-accent-gold leading-none mt-1">E</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-heading font-bold tracking-[0.2em] text-lux-text-primary leading-tight">
                  ELEGANT
                </span>
                <span className="text-[9px] md:text-[10px] font-semibold tracking-[0.3em] text-lux-accent-gold uppercase leading-tight">
                  Design Studio
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={() => setActiveSection(link.id)}
                  className="relative group"
                >
                  <motion.span
                    className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                      activeSection === link.id
                        ? 'text-lux-accent-gold'
                        : 'text-lux-text-secondary group-hover:text-lux-text-primary'
                    }`}
                  >
                    {link.label}
                  </motion.span>
                  {/* Underline animation */}
                  <motion.div
                    className="absolute -bottom-1.5 left-0 h-px bg-lux-accent-gold origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  {activeSection === link.id && (
                    <motion.div
                      className="absolute -bottom-1.5 left-0 h-px bg-lux-accent-gold w-full"
                      layoutId="underline"
                      transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side - CTA Button */}
            <div className="hidden md:block">
              <motion.div
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="relative px-8 py-3 rounded-full text-xs font-bold tracking-[0.15em] uppercase text-[#121212] overflow-hidden group block"
                >
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-lux-accent-gold rounded-full opacity-100 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl bg-lux-accent-gold/40 transition-opacity duration-300" />

                  {/* Text */}
                  <span className="relative z-10 text-[#121212]">Book Consultation</span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-lux-text-primary hover:text-lux-accent-gold transition-colors"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-40 md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-lux-text-primary/10 backdrop-blur-sm"
        />

        {/* Menu Panel */}
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: isOpen ? 0 : 300 }}
          transition={{ type: 'spring', stiffness: 400, damping: 40 }}
          className="absolute right-0 top-0 h-full w-80 bg-lux-card shadow-xl"
        >
          <div className="pt-20 px-6">
            <div className="space-y-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => {
                      setActiveSection(link.id)
                      setIsOpen(false)
                    }}
                    className="block px-4 py-3 text-sm tracking-[0.15em] uppercase text-lux-text-secondary hover:text-lux-accent-gold hover:bg-lux-bg-secondary/50 rounded-lg transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full px-6 py-3 bg-lux-accent-gold text-[#121212] rounded-full font-bold text-xs tracking-[0.15em] uppercase text-center hover:bg-lux-accent-tan transition-all duration-300"
              >
                Book Consultation
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
