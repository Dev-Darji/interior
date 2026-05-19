import { motion } from 'framer-motion'

export default function SectionTitle({ title, subtitle, centered = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`mb-16 md:mb-20 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-4xl md:text-6xl font-heading font-medium text-[#121212] mb-5 md:mb-6 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-lux-text-secondary max-w-2xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
