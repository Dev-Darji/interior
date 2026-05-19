import { motion } from 'framer-motion'

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.4 }}
      className="p-8 md:p-10 bg-lux-card rounded-4xl border border-white/5 shadow-sm hover:shadow-md transition-all duration-500 group"
    >
      <div className="text-4xl md:text-5xl text-lux-accent-gold mb-6 group-hover:text-lux-accent-tan transition-colors duration-300">
        <Icon strokeWidth={1.2} />
      </div>
      <h3 className="text-xl md:text-2xl font-heading font-light text-lux-text-primary mb-4 group-hover:text-lux-accent-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-lux-text-secondary font-light leading-relaxed text-base">
        {description}
      </p>
    </motion.div>
  )
}
