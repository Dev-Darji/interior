import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'
import {
  FiHome,
  FiBriefcase,
  FiTrendingUp,
  FiAward,
  FiDroplet,
  FiLayout,
} from 'react-icons/fi'

const servicesData = [
  {
    icon: FiHome,
    title: 'Residential Interior',
    description: 'Transform your home into a personal sanctuary. From modern apartments to luxury villas, we create spaces that reflect your lifestyle.',
    features: ['Space planning', 'Color consultation', 'Furniture selection', 'Lighting design'],
  },
  {
    icon: FiBriefcase,
    title: 'Commercial Design',
    description: 'Create inspiring workspaces that boost productivity. We design offices, retail spaces, and hospitality venues.',
    features: ['Office planning', 'Brand reflection', 'Ergonomic design', 'Corporate ambiance'],
  },
  {
    icon: FiLayout,
    title: 'Modular Kitchen',
    description: 'Smart kitchen solutions combining functionality with elegant design. Maximize storage and workflow efficiency.',
    features: ['Space optimization', 'Storage solutions', 'Premium appliances', 'Modern aesthetics'],
  },
  {
    icon: FiTrendingUp,
    title: 'Space Planning',
    description: 'Maximize every square inch with strategic planning. We optimize layouts for better functionality and aesthetics.',
    features: ['3D visualization', 'Layout optimization', 'Flow analysis', 'Spatial efficiency'],
  },
  {
    icon: FiAward,
    title: 'Furniture Design',
    description: 'Custom furniture pieces designed to match your space and style. Unique designs crafted by our expert team.',
    features: ['Custom pieces', 'Bespoke designs', 'Quality materials', 'Durability'],
  },
  {
    icon: FiDroplet,
    title: 'Renovation',
    description: 'Breathe new life into your existing spaces. Complete renovation services with minimal disruption.',
    features: ['Full renovation', 'Project management', 'Quality craftsmanship', 'Timeline assurance'],
  },
]

const process = [
  {
    title: 'Initial Consultation',
    description: 'We meet to understand your vision, requirements, budget, and timeline.',
  },
  {
    title: 'Concept Development',
    description: 'Our team creates initial concepts and design directions for your approval.',
  },
  {
    title: '3D Visualization',
    description: 'We develop detailed 3D models so you can visualize the final result.',
  },
  {
    title: 'Design Refinement',
    description: 'Based on your feedback, we refine and finalize every detail.',
  },
  {
    title: 'Execution',
    description: 'Our team manages the entire execution with quality and timeline assurance.',
  },
  {
    title: 'Project Handover',
    description: 'Final walkthrough and handover of your beautifully designed space.',
  },
]

export default function Services() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-lux-bg relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-lux-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-lux-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-20 relative z-10">
        <SectionTitle
          title="Our Services"
          subtitle="Tailored architectural interior design and luxury curation solutions."
        />
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="border border-lux-accent-gold/25 bg-white shadow-sm hover:shadow-xl hover:shadow-lux-accent-gold/10 hover:border-lux-accent-gold transition-all duration-500 rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between group">
                <div>
                  <div className="text-4xl text-lux-accent-gold mb-6 group-hover:text-lux-accent-tan transition-colors duration-300">
                    <service.icon strokeWidth={1.2} />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-[#121212] group-hover:text-lux-accent-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 font-normal text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-3 pt-6 border-t border-slate-100">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-slate-700 text-xs font-bold tracking-wide uppercase">
                      <span className="w-1.5 h-1.5 bg-lux-accent-gold rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden my-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-center mb-16 text-[#121212]">
            Our Architectural Workflow
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="border border-lux-accent-gold/20 bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl font-heading font-semibold text-lux-accent-gold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-[#121212]">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto py-20 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-center mb-16 text-[#121212]">
          Studio Distinctions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: 'Experienced Design Team',
              desc: 'Our design atelier features experts with a proven history in high-end, premium interior curation.',
            },
            {
              title: 'Tailored Bespoke Concepts',
              desc: 'We reject copy-paste designs. Every blueprint, material choice, and custom detail is uniquely created for your vision.',
            },
            {
              title: 'Immersive 3D Visualizations',
              desc: 'Walk through your home virtually before building begins, with render layouts detailing lighting and scale.',
            },
            {
              title: 'End-to-End Delivery Management',
              desc: 'From initial structural design to the absolute final handover, our team supervises every minor aspect.',
            },
            {
              title: 'Elite Quality Sourcing',
              desc: 'We maintain global relationships with elite marble, timber, and lighting manufacturers to bring premium quality.',
            },
            {
              title: 'Structured Fixed Budgeting',
              desc: 'No hidden costs, no surprises. Detailed estimations provide complete transparency on capital allocation.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 border border-lux-accent-gold bg-lux-accent-gold/10 text-lux-accent-gold rounded-full text-sm font-semibold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-[#121212] mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 px-6 md:px-10 bg-lux-accent-gold relative overflow-hidden mt-20">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border border-[#121212]" />
          <div className="absolute top-40 right-20 w-48 h-48 rounded-full border border-[#121212]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light mb-6 text-[#121212]">
              Ready to Design Your Dream Space?
            </h2>
            <p className="text-lg md:text-xl text-[#121212]/80 mb-10 font-light max-w-2xl mx-auto">
              Schedule a private atelier consultation today and take the first step towards a magnificent bespoke interior environment.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 rounded-full bg-[#121212] text-lux-accent-gold text-sm tracking-[0.2em] uppercase hover:bg-[#1a1a1a] transition-all shadow-xl hover:shadow-2xl font-medium"
            >
              Book Your Atelier Session
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
