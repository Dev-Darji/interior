import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'
import { projects } from '../data/projects'

export default function ProjectDetails() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === parseInt(id))
  const relatedProjects = project?.relatedProjects?.map((pId) =>
    projects.find((p) => p.id === pId)
  ) || []

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 text-center">
        <h1 className="text-4xl font-heading font-bold mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-blue-600 hover:text-blue-800">
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-lux-bg relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-lux-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8 relative z-10">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-lux-text-secondary hover:text-lux-accent-gold transition-colors duration-300 text-sm font-light uppercase tracking-widest"
        >
          <FiArrowLeft /> Back to Projects
        </Link>
      </div>

      {/* Hero Image */}
      <div className="w-full relative z-10 px-6 md:px-10 max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-4xl overflow-hidden shadow-2xl h-[400px] md:h-[600px] relative"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1.5 text-xs font-light tracking-[0.25em] uppercase text-lux-accent-gold border border-lux-accent-gold/30 rounded-full">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light mb-6 text-lux-text-primary">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-lux-text-secondary mb-10 font-light leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-16 border-t border-white/5 pt-10"
            >
              <h2 className="text-3xl font-heading font-light mb-6 text-lux-text-primary">
                Atelier Vision & Concept
              </h2>
              <p className="text-lux-text-secondary mb-4 leading-relaxed font-light">
                This project represents Elegant Design Studio's commitment to structural clarity and spatial harmony. Every material, custom element, and furniture layout was calculated to maximize comfort and modern luxury standards.
              </p>
              <p className="text-lux-text-secondary leading-relaxed font-light">
                Our design consultants closely collaborated with the client, analyzing architectural flow, natural luminance, and tactile finishes to craft an environment that matches their distinct personality and way of living.
              </p>
            </motion.div>

            {/* Before & After */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-16 border-t border-white/5 pt-10"
            >
              <h2 className="text-3xl font-heading font-light mb-6 text-lux-text-primary">
                Transformation Narrative
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-xs uppercase tracking-widest font-light text-lux-text-secondary mb-3">ATELIER PREVIEW (BEFORE)</p>
                  <img
                    src={project.beforeImage}
                    alt="Before"
                    className="w-full h-64 object-cover rounded-3xl border border-white/5"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-light text-lux-accent-gold mb-3">SIGNATURE FINISH (AFTER)</p>
                  <img
                    src={project.afterImage}
                    alt="After"
                    className="w-full h-64 object-cover rounded-3xl border border-lux-accent-gold/20 shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="border border-white/5 bg-lux-card/40 backdrop-blur-md p-8 rounded-4xl sticky top-32 shadow-xl">
              <h3 className="text-2xl font-heading font-light mb-6 text-lux-accent-gold">
                Atelier Profile
              </h3>

              <div className="space-y-6 mb-8 border-b border-white/5 pb-8">
                <div>
                  <p className="text-xs text-lux-text-muted uppercase tracking-[0.15em] mb-1 font-light">LOCATION</p>
                  <p className="text-lg font-heading font-light text-lux-text-primary">{project.location}</p>
                </div>

                <div>
                  <p className="text-xs text-lux-text-muted uppercase tracking-[0.15em] mb-1 font-light">TOTAL AREA</p>
                  <p className="text-lg font-heading font-light text-lux-text-primary">{project.area}</p>
                </div>

                <div>
                  <p className="text-xs text-lux-text-muted uppercase tracking-[0.15em] mb-3 font-light">CURATED MATERIALS</p>
                  <div className="flex flex-wrap gap-2">
                    {project.materials.map((material, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-lux-text-secondary rounded-full text-xs font-light tracking-wide"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Button to="/contact" variant="primary" className="w-full text-center block">
                Acquire Similar Aesthetic
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-20 border-t border-white/5"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-light mb-12 text-lux-text-primary">
              Further Inspirations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                relatedProject && <ProjectCard key={relatedProject.id} {...relatedProject} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
