import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    question: 'What design services does Elegant Studio provide?',
    answer: 'Under the leadership of Principal Designer Shrey Lathiya, our studio provides end-to-end design services including luxury Architectural Design, bespoke Interior Design (modular layouts, marble work, furniture selection, lighting), and high-end Landscape Design (botanical gardens, water features, limestone decks).',
  },
  {
    question: 'Where is the Elegant Studio located?',
    answer: 'Our atelier is located at Mota Varachha, Surat, Gujarat. Clients are welcome to visit by prior appointment.',
  },
  {
    question: 'How do I initiate a new project consultation?',
    answer: 'You can schedule a consultation by submitting our design inquiry form on the Contact page, emailing us at elegantdesign@gmail.com, or messaging us directly via WhatsApp at +91 95379 43516. We offer both in-person and video consultations.',
  },
  {
    question: 'What is the typical design process?',
    answer: 'Our workflow has four stages: (1) Client Consultation & Vision Board, (2) Space planning, conceptual layouts, and 3D mockups, (3) Detailed structural drawings, material curation, and specifications, (4) Execution supervision ensuring the outcome matches the approved design.',
  },
  {
    question: 'Do you offer turnkey project execution?',
    answer: 'Yes. We offer both conceptual design packages and complete turnkey supervision. For turnkey projects, we coordinate directly with premium contractors, marble specialists, carpentry teams, and landscape crews across Gujarat.',
  },
  {
    question: 'Can you handle integrated indoor-outdoor spaces?',
    answer: 'Absolutely. Combining landscape and architectural design under one studio allows us to seamlessly blend indoor living areas, wellness spaces, glass elevations, and outdoor decks without any stylistic fragmentation.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen pt-32 bg-lux-bg relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-lux-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-lux-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-20 relative z-10">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our design services, process, and studio."
        />
      </section>

      {/* FAQ Accordion */}
      <section className="px-6 md:px-10 max-w-4xl mx-auto mb-28 relative z-10">
        <div className="space-y-6">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                className={`border bg-white rounded-3xl overflow-hidden transition-all duration-500 ${
                  isOpen
                    ? 'border-lux-accent-gold shadow-xl shadow-lux-accent-gold/10'
                    : 'border-lux-accent-gold/25 shadow-sm hover:shadow-md hover:border-lux-accent-gold/50'
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-6 px-8 py-3 text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-5">
                    <span className="flex-shrink-0 w-10 h-10 border border-lux-accent-gold/30 rounded-full flex items-center justify-center bg-lux-accent-gold/10 text-lux-accent-gold text-sm font-semibold">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-heading font-semibold text-lg text-[#121212] transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 text-lux-accent-gold transition-colors duration-300`}
                  >
                    <FiChevronDown size={20} />
                  </motion.div>
                </button>

                {/* Answer Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="mx-8 border-t border-slate-100" />
                      <div className="px-8 py-4 pl-[84px] pr-12">
                        <p className="text-slate-600 text-sm font-normal leading-[1.8]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 px-6 md:px-10 bg-lux-accent-gold relative overflow-hidden">
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
              Still Have Questions?
            </h2>
            <p className="text-lg md:text-xl text-[#121212]/80 mb-10 font-light max-w-2xl mx-auto">
              Reach out to Principal Designer Shrey Lathiya directly via WhatsApp, email, or visit our Surat studio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://wa.me/919537943516"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-full bg-[#121212] text-lux-accent-gold text-sm tracking-[0.2em] uppercase hover:bg-[#1a1a1a] transition-all shadow-xl hover:shadow-2xl font-medium"
              >
                WhatsApp Us
              </a>
              <Link
                to="/contact"
                className="inline-block px-10 py-4 rounded-full border-2 border-[#121212] text-[#121212] text-sm tracking-[0.2em] uppercase hover:bg-[#121212]/10 transition-all font-medium"
              >
                Contact Page
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
