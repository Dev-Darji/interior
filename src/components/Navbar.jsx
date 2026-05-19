import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-cream-light shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-heading font-bold text-warm-brown">
            Elegance
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-warm-brown hover:text-dark-brown transition-colors font-body font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Dark Mode + CTA + Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-cream text-warm-brown"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            <Link
              to="/contact"
              className="hidden md:block px-6 py-2 bg-warm-brown text-cream-light rounded-lg hover:bg-dark-brown transition-colors"
            >
              Book Consultation
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 text-warm-brown hover:bg-cream rounded"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-4 py-2 bg-warm-brown text-cream-light rounded-lg text-center"
            >
              Book Consultation
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
