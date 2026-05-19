import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FiChevronUp } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      className={`fixed bottom-8 right-8 z-40 p-3 bg-lux-accent-gold text-[#121212] rounded-full hover:bg-lux-accent-tan transition-colors ${
        !isVisible && 'pointer-events-none'
      }`}
    >
      <FiChevronUp size={24} />
    </motion.button>
  )
}
