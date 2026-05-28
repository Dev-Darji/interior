import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProjectCard({ id, image, title, description, category }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <div className="overflow-hidden rounded-4xl bg-lux-card border border-white/5 shadow-sm hover:shadow-lg hover:shadow-lux-accent-gold/5 transition-all duration-500">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-lux-bg-secondary h-80 md:h-96">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Category */}
          <div className="mb-3 md:mb-4">
            <span className="inline-block px-3 py-1.5 text-xs font-bold tracking-[0.25em] uppercase text-lux-accent-gold border border-lux-accent-gold/40 rounded-full">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-heading font-medium text-[#121212] transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-lux-text-secondary text-sm md:text-base font-normal leading-relaxed line-clamp-2 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
