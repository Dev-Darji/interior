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
    // Handle form submission here (EmailJS or your backend)
    console.log(formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-lux-bg relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-lux-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-lux-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-20 relative z-10">
        <SectionTitle
          title="Connect With Us"
          subtitle="Let's co-create your signature environment. Reach out to discuss your project."
        />
      </section>

      {/* Contact Content */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Information */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-heading font-semibold mb-8 text-[#121212]">
                Elegant Studio
              </h3>

              <div className="space-y-8">
                {/* Phone */}
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 border border-lux-accent-gold/30 rounded-full flex items-center justify-center flex-shrink-0 bg-lux-accent-gold/10 group-hover:bg-lux-accent-gold group-hover:text-[#121212] transition-all duration-300 text-lux-accent-gold">
                    <FiPhone size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#121212] mb-1">Phone</h4>
                    <p className="text-slate-600 text-sm font-medium">+91 98765 43210</p>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:contact@elegantstudio.in"
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 border border-lux-accent-gold/30 rounded-full flex items-center justify-center flex-shrink-0 bg-lux-accent-gold/10 group-hover:bg-lux-accent-gold group-hover:text-[#121212] transition-all duration-300 text-lux-accent-gold">
                    <FiMail size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#121212] mb-1">Email</h4>
                    <p className="text-slate-600 text-sm font-medium">contact@elegantstudio.in</p>
                  </div>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://instagram.com/elegant_design_studio._"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 border border-lux-accent-gold/30 rounded-full flex items-center justify-center flex-shrink-0 bg-lux-accent-gold/10 group-hover:bg-lux-accent-gold group-hover:text-[#121212] transition-all duration-300 text-lux-accent-gold">
                    <FiInstagram size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#121212] mb-1">Instagram</h4>
                    <p className="text-slate-600 text-sm font-medium">@elegant_design_studio._</p>
                  </div>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 border border-lux-accent-gold/30 rounded-full flex items-center justify-center flex-shrink-0 bg-lux-accent-gold/10 group-hover:bg-lux-accent-gold group-hover:text-[#121212] transition-all duration-300 text-lux-accent-gold">
                    <BsWhatsapp size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#121212] mb-1">WhatsApp Chat</h4>
                    <p className="text-slate-600 text-sm font-medium">Direct Consultation</p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="border border-lux-accent-gold/25 bg-white p-8 rounded-3xl mt-12 shadow-sm">
              <h4 className="font-heading font-semibold text-xl text-[#121212] mb-4">Studio Hours</h4>
              <div className="space-y-2 text-slate-600 text-sm font-medium">
                <p className="flex justify-between border-b border-slate-100 pb-2"><span>Monday - Friday</span> <span>9:30 AM - 6:30 PM</span></p>
                <p className="flex justify-between border-b border-slate-100 pb-2"><span>Saturday</span> <span>10:00 AM - 4:00 PM</span></p>
                <p className="flex justify-between"><span>Sunday</span> <span className="text-lux-accent-gold font-bold">By Appointment</span></p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="border border-lux-accent-gold/25 bg-white p-8 md:p-12 rounded-3xl shadow-lg shadow-lux-accent-gold/5"
            >
              <h3 className="text-3xl font-heading font-semibold mb-8 text-[#121212]">
                Send a Message
              </h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-8 p-4 bg-lux-accent-gold/10 text-lux-accent-gold border border-lux-accent-gold/25 rounded-2xl text-sm font-semibold"
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
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 text-[#121212] placeholder-slate-400 focus:outline-none focus:border-lux-accent-gold focus:bg-white transition-all duration-300 shadow-inner"
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
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 text-[#121212] placeholder-slate-400 focus:outline-none focus:border-lux-accent-gold focus:bg-white transition-all duration-300 shadow-inner"
                    placeholder="example@elegance.com"
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
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 text-[#121212] placeholder-slate-400 focus:outline-none focus:border-lux-accent-gold focus:bg-white transition-all duration-300 shadow-inner"
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
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 text-[#121212] placeholder-slate-400 focus:outline-none focus:border-lux-accent-gold focus:bg-white transition-all duration-300 shadow-inner resize-none"
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
        <h3 className="text-3xl font-heading font-semibold mb-8 text-[#121212] text-center">
          Our Location
        </h3>
        <div className="w-full h-[450px] border border-lux-accent-gold/20 rounded-4xl overflow-hidden relative shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14875.056637402094!2d72.825!3d21.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjAiTiA3MsKwNDknMzAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(35%) contrast(1.15)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  )
}
