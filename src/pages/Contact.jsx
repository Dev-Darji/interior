import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { FiPhone, FiMail, FiMapPin, FiInstagram } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Design Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Hello Elegant Design Studio Team,\n\n` +
      `I would like to request a design consultation. Here are my details:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n\n` +
      `Project Vision / Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    )
    
    window.location.href = `mailto:elegantdesign@gmail.com?subject=${subject}&body=${body}`
    
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-lux-bg relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-lux-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-lux-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <SectionTitle
            title="Connect With Us"
            subtitle="Let's co-create your signature environment. Reach out to discuss your project."
          />
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-1 flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Header Card */}
              <div className="border border-lux-accent-gold/25 bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="text-3xl font-heading font-semibold mb-1 text-[#121212]">
                  Elegant Studio
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-lux-accent-gold font-bold mb-5">
                  Architectural &bull; Interior &bull; Landscape Designers
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-full bg-lux-accent-gold/10 border border-lux-accent-gold/30 flex items-center justify-center text-lux-accent-gold text-sm font-heading font-bold">
                    SL
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-bold block">Principal Designer</span>
                    <span className="text-base font-heading font-semibold text-[#121212]">Shrey Lathiya</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Links */}
              <div className="border border-lux-accent-gold/25 bg-white p-6 rounded-3xl shadow-sm space-y-1">
                <motion.a
                  href="tel:+919537943516"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group cursor-pointer p-3 rounded-2xl hover:bg-lux-accent-gold/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 border border-lux-accent-gold/30 rounded-full flex items-center justify-center flex-shrink-0 bg-lux-accent-gold/10 group-hover:bg-lux-accent-gold group-hover:text-[#121212] transition-all duration-300 text-lux-accent-gold">
                    <FiPhone size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#121212] mb-0.5">Phone</h4>
                    <p className="text-slate-600 text-sm font-medium">+91 95379 43516</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:elegantdesign@gmail.com"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group cursor-pointer p-3 rounded-2xl hover:bg-lux-accent-gold/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 border border-lux-accent-gold/30 rounded-full flex items-center justify-center flex-shrink-0 bg-lux-accent-gold/10 group-hover:bg-lux-accent-gold group-hover:text-[#121212] transition-all duration-300 text-lux-accent-gold">
                    <FiMail size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#121212] mb-0.5">Email</h4>
                    <p className="text-slate-600 text-sm font-medium">elegantdesign@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://wa.me/919537943516"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group cursor-pointer p-3 rounded-2xl hover:bg-lux-accent-gold/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 border border-lux-accent-gold/30 rounded-full flex items-center justify-center flex-shrink-0 bg-lux-accent-gold/10 group-hover:bg-lux-accent-gold group-hover:text-[#121212] transition-all duration-300 text-lux-accent-gold">
                    <BsWhatsapp size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#121212] mb-0.5">WhatsApp</h4>
                    <p className="text-slate-600 text-sm font-medium">Direct Consultation</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://instagram.com/elegant_design_studio._"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group cursor-pointer p-3 rounded-2xl hover:bg-lux-accent-gold/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 border border-lux-accent-gold/30 rounded-full flex items-center justify-center flex-shrink-0 bg-lux-accent-gold/10 group-hover:bg-lux-accent-gold group-hover:text-[#121212] transition-all duration-300 text-lux-accent-gold">
                    <FiInstagram size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#121212] mb-0.5">Instagram</h4>
                    <p className="text-slate-600 text-sm font-medium">@elegant_design_studio._</p>
                  </div>
                </motion.a>
              </div>

              {/* Address Card */}
              <div className="border border-lux-accent-gold/25 bg-white p-6 rounded-3xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-lux-accent-gold/30 rounded-full flex items-center justify-center flex-shrink-0 bg-lux-accent-gold/10 text-lux-accent-gold mt-0.5">
                    <FiMapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#121212] mb-2">Studio Address</h4>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">
                      Mota Varachha, Surat, Gujarat
                    </p>
                  </div>
                </div>
              </div>

              {/* Studio Hours Card */}
              <div className="border border-lux-accent-gold/25 bg-white p-6 rounded-3xl shadow-sm">
                <h4 className="font-heading font-semibold text-[#121212] mb-4">Studio Hours</h4>
                <div className="space-y-2.5 text-slate-600 text-sm font-medium">
                  <p className="flex justify-between border-b border-slate-50 pb-2.5"><span>Monday – Friday</span> <span className="text-[#121212]">9:30 AM – 6:30 PM</span></p>
                  <p className="flex justify-between border-b border-slate-50 pb-2.5"><span>Saturday</span> <span className="text-[#121212]">10:00 AM – 4:00 PM</span></p>
                  <p className="flex justify-between"><span>Sunday</span> <span className="text-lux-accent-gold font-bold">By Appointment</span></p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
              onSubmit={handleSubmit}
              className="border-2 border-lux-accent-gold/40 bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-lux-accent-gold/5"
            >
              <h3 className="text-3xl font-heading font-semibold mb-8 text-[#121212]">
                Send a Message
              </h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-8 p-4 bg-lux-accent-gold/10 text-lux-accent-gold border-2 border-lux-accent-gold/30 rounded-2xl text-sm font-semibold"
                >
                  Thank you for reaching out. Our design consultant will contact you within 24 hours.
                </motion.div>
              )}

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] font-bold text-slate-700 mb-2.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-lux-accent-gold/30 bg-slate-50/20 text-[#121212] placeholder-slate-400 focus:outline-none focus:border-lux-accent-gold focus:bg-white transition-all duration-300 shadow-sm"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] font-bold text-slate-700 mb-2.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-lux-accent-gold/30 bg-slate-50/20 text-[#121212] placeholder-slate-400 focus:outline-none focus:border-lux-accent-gold focus:bg-white transition-all duration-300 shadow-sm"
                    placeholder="elegantdesign@gmail.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] font-bold text-slate-700 mb-2.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-lux-accent-gold/30 bg-slate-50/20 text-[#121212] placeholder-slate-400 focus:outline-none focus:border-lux-accent-gold focus:bg-white transition-all duration-300 shadow-sm"
                    placeholder="Enter phone number"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] font-bold text-slate-700 mb-2.5">
                    Project Vision / Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-lux-accent-gold/30 bg-slate-50/20 text-[#121212] placeholder-slate-400 focus:outline-none focus:border-lux-accent-gold focus:bg-white transition-all duration-300 shadow-sm resize-none"
                    placeholder="Describe your design aspirations, preferred style, and budget details..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Design Inquiry
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-3xl font-heading font-semibold mb-8 text-[#121212] text-center"
        >
          Our Location
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full h-[450px] border border-lux-accent-gold/20 rounded-4xl overflow-hidden relative shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14875.056637402094!2d72.825!3d21.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjAiTiA3MsKwNDknMzAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(35%) contrast(1.15)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>
    </div>
  )
}
