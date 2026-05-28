import { Link } from 'react-router-dom'
import { FiInstagram, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import logoImage from '../images/logo_image.jpeg'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-slate-300 py-16 md:py-20 border-t border-white/5 relative overflow-hidden">
      {/* Subtle gold glow behind footer */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-lux-accent-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 items-start mb-12 md:mb-16">
          {/* Logo & Designer Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 overflow-hidden border border-lux-accent-gold/40 rounded-full bg-white shadow-sm">
                <img
                  src={logoImage}
                  alt="Elegant Design Studio Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-heading font-light tracking-[0.2em] text-white leading-tight">
                  ELEGANT
                </span>
                <span className="text-[9px] font-light tracking-[0.3em] text-lux-accent-gold uppercase leading-tight">
                  Design Studio
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
              Premium interior, architectural, and landscape design studio creating signature environments across Gujarat.
            </p>
            <div className="pt-4 border-t border-white/5">
              <span className="text-xs uppercase tracking-[0.15em] text-lux-accent-gold font-bold block mb-1">Principal Designer</span>
              <span className="text-lg font-heading font-semibold text-white">Shrey Lathiya</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-light text-sm tracking-[0.2em] text-lux-accent-light uppercase">
              Quick Links
            </h4>
            <ul className="grid grid-cols-3 md:grid-cols-1 gap-y-3 gap-x-4 md:gap-0 md:space-y-3.5 text-slate-400 text-sm font-light">
              <li><Link to="/" className="hover:text-lux-accent-gold transition-colors duration-300">Home</Link></li>
              <li><Link to="/projects" className="hover:text-lux-accent-gold transition-colors duration-300">Projects</Link></li>
              <li><Link to="/services" className="hover:text-lux-accent-gold transition-colors duration-300">Services</Link></li>
              <li><Link to="/contact" className="hover:text-lux-accent-gold transition-colors duration-300">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-lux-accent-gold transition-colors duration-300">FAQs</Link></li>
            </ul>
          </div>

          {/* Studio Address */}
          <div>
            <h4 className="font-heading font-light text-sm tracking-[0.2em] text-lux-accent-light uppercase">
              Our Studio
            </h4>
            <div className="flex gap-3 text-slate-400 text-sm font-light leading-relaxed">
              <FiMapPin size={16} className="text-lux-accent-gold flex-shrink-0 mt-1" />
              <div>
                <p>
                  Mota Varachha, Surat, Gujarat
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-light text-sm tracking-[0.2em] text-lux-accent-light uppercase">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm font-light">
              <li>
                <a href="tel:+919537943516" className="flex items-center gap-3 hover:text-lux-accent-gold transition-colors duration-300 group">
                  <FiPhone size={15} className="text-lux-accent-gold group-hover:scale-110 transition-transform" />
                  +91 95379 43516
                </a>
              </li>
              <li>
                <a href="mailto:elegantdesign@gmail.com" className="flex items-center gap-3 hover:text-lux-accent-gold transition-colors duration-300 group">
                  <FiMail size={15} className="text-lux-accent-gold group-hover:scale-110 transition-transform" />
                  elegantdesign@gmail.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/elegant_design_studio._" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-lux-accent-gold transition-colors duration-300 group">
                  <FiInstagram size={15} className="text-lux-accent-gold group-hover:scale-110 transition-transform" />
                  @elegant_design_studio._
                </a>
              </li>
              <li>
                <a href="https://wa.me/919537943516" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-lux-accent-gold transition-colors duration-300 group">
                  <BsWhatsapp size={15} className="text-lux-accent-gold group-hover:scale-110 transition-transform" />
                  WhatsApp Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-4 md:pt-10">
          <div className="flex justify-center items-center">
            <p className="text-slate-500 text-sm font-light text-center">
              &copy; {new Date().getFullYear()} Elegant Design Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
