import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiPhone, FiInstagram } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import { motion } from 'framer-motion'

export default function LuxeNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Derive active section from current URL path
  const getActiveId = () => {
    const path = location.pathname
    if (path === '/') return 'home'
    if (path.startsWith('/projects')) return 'projects'
    if (path.startsWith('/services')) return 'services'
    if (path.startsWith('/contact')) return 'contact'
    if (path.startsWith('/faq')) return 'faq'
    return 'home'
  }
  const activeSection = getActiveId()

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
    { path: '/contact', label: 'Contact', id: 'contact' },
    { path: '/faq', label: 'FAQ', id: 'faq' },
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
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="relative group flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-lux-accent-gold/40 rounded-full bg-lux-accent-gold/10 backdrop-blur-md"
              >
                <span className="text-2xl md:text-3xl font-heading font-medium text-lux-accent-gold leading-none mt-1">E</span>
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
            <div className="hidden md:flex items-center space-x-14">
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

            {/* Right Side - Social Icons */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="https://instagram.com/elegant_design_studio._"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-lux-accent-gold/30 bg-lux-accent-gold/10 flex items-center justify-center text-lux-accent-gold hover:bg-lux-accent-gold hover:text-[#121212] transition-all duration-300"
              >
                <FiInstagram size={16} />
              </motion.a>
              <motion.a
                href="https://wa.me/919537943516"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-lux-accent-gold/30 bg-lux-accent-gold/10 flex items-center justify-center text-lux-accent-gold hover:bg-lux-accent-gold hover:text-[#121212] transition-all duration-300"
              >
                <BsWhatsapp size={16} />
              </motion.a>
              <motion.a
                href="tel:+919537943516"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-lux-accent-gold/30 bg-lux-accent-gold/10 flex items-center justify-center text-lux-accent-gold hover:bg-lux-accent-gold hover:text-[#121212] transition-all duration-300"
              >
                <FiPhone size={16} />
              </motion.a>
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
          <div className="pt-32 px-6">
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
                    className={`block px-4 py-3 text-sm tracking-[0.15em] uppercase rounded-lg transition-all duration-300 ${
                      activeSection === link.id
                        ? 'text-lux-accent-gold font-bold bg-lux-bg-secondary/80'
                        : 'text-lux-text-secondary hover:text-lux-accent-gold hover:bg-lux-bg-secondary/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex items-center justify-center gap-4"
            >
              <a
                href="https://instagram.com/elegant_design_studio._"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 rounded-full border border-lux-accent-gold/30 bg-lux-accent-gold/10 flex items-center justify-center text-lux-accent-gold hover:bg-lux-accent-gold hover:text-[#121212] transition-all duration-300"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href="https://wa.me/919537943516"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 rounded-full border border-lux-accent-gold/30 bg-lux-accent-gold/10 flex items-center justify-center text-lux-accent-gold hover:bg-lux-accent-gold hover:text-[#121212] transition-all duration-300"
              >
                <BsWhatsapp size={18} />
              </a>
              <a
                href="tel:+919537943516"
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 rounded-full border border-lux-accent-gold/30 bg-lux-accent-gold/10 flex items-center justify-center text-lux-accent-gold hover:bg-lux-accent-gold hover:text-[#121212] transition-all duration-300"
              >
                <FiPhone size={18} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
