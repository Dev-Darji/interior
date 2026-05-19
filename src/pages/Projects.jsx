import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const categories = ['All', 'Residential', 'Luxury Villa', 'Modular Kitchen', 'Office', 'Commercial']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-10 bg-lux-bg">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle
          title="Our Projects"
          subtitle="Discover our portfolio of beautifully designed spaces"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-20 md:mb-24">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm uppercase tracking-[0.15em] transition-all ${
                activeCategory === category
                  ? 'bg-lux-accent-gold text-[#121212] font-bold shadow-sm'
                  : 'bg-lux-card text-lux-text-secondary border border-white/5 hover:border-lux-accent-gold/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lux-text-secondary text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
