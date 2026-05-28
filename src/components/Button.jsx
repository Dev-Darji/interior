import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles = 'font-light rounded-full transition-all duration-300 uppercase tracking-[0.15em] text-xs md:text-sm'

  const variants = {
    primary: 'bg-lux-accent-gold text-white font-medium hover:bg-lux-bg-secondary hover:text-[#121212] hover:border-lux-accent-gold-light shadow-sm hover:shadow-md border border-lux-accent-gold transition-all duration-300',
    secondary: 'bg-transparent border border-lux-accent-gold text-lux-accent-gold hover:bg-lux-accent-gold hover:text-white transition-all duration-300',
    gold: 'bg-lux-accent-gold text-white font-medium hover:bg-lux-bg-secondary hover:text-[#121212] shadow-sm transition-all duration-300',
  }

  const sizes = {
    sm: 'px-6 py-2.5 text-xs',
    md: 'px-8 py-3 md:py-3.5',
    lg: 'px-10 md:px-12 py-3.5 md:py-4',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.div>
  )

  if (to) {
    return <Link to={to} className={classes} {...props}>{content}</Link>
  }

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>{content}</a>
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  )
}
