import { Link } from 'react-router-dom'
import { FiInstagram, FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-lux-text-primary py-16 md:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-12 md:mb-16">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center border border-lux-accent-gold/40 rounded-full bg-lux-accent-gold/10">
                <span className="text-xl font-logo text-lux-accent-gold leading-none mt-1">E</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-heading font-light tracking-[0.2em] text-lux-text-primary leading-tight">
                  ELEGANT
                </span>
                <span className="text-[9px] font-light tracking-[0.3em] text-lux-accent-gold uppercase leading-tight">
                  Design Studio
                </span>
              </div>
            </div>
            <p className="text-lux-text-secondary text-sm font-light leading-relaxed">
              Premium interior design studio creating elegant spaces for modern living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-light text-sm tracking-[0.2em] text-lux-accent-light uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-lux-text-secondary text-sm font-light">
              <li><Link to="/" className="hover:text-lux-accent-gold transition-colors duration-300">Home</Link></li>
              <li><Link to="/projects" className="hover:text-lux-accent-gold transition-colors duration-300">Projects</Link></li>
              <li><Link to="/about" className="hover:text-lux-accent-gold transition-colors duration-300">About</Link></li>
              <li><Link to="/contact" className="hover:text-lux-accent-gold transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-light text-sm tracking-[0.2em] text-lux-accent-light uppercase mb-6">
              Connect
            </h4>
            <ul className="space-y-3 text-lux-text-secondary text-sm font-light">
              <li>
                <a href="https://instagram.com/elegant_design_studio._" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-lux-accent-gold transition-colors duration-300 group">
                  <FiInstagram className="group-hover:text-lux-accent-gold text-lux-text-secondary transition-colors" />
                  @elegant_design_studio._
                </a>
              </li>
              <li><a href="#" className="hover:text-lux-accent-gold transition-colors duration-300">Facebook</a></li>
              <li><a href="#" className="hover:text-lux-accent-gold transition-colors duration-300">Pinterest</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-light text-sm tracking-[0.2em] text-lux-accent-light uppercase mb-6">
              Newsletter
            </h4>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2.5 bg-white/5 rounded-lg text-white placeholder-lux-text-secondary font-light text-sm focus:outline-none focus:ring-1 focus:ring-lux-accent-gold/50 border border-white/10"
              />
              <button className="px-4 py-2.5 bg-lux-accent-gold text-[#121212] font-medium rounded-lg text-sm hover:bg-lux-accent-tan transition-colors duration-300 uppercase tracking-[0.15em]">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-lux-text-secondary text-sm font-light">
              &copy; {new Date().getFullYear()} Elegant Design Studio. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="https://instagram.com/elegant_design_studio._" target="_blank" rel="noreferrer" className="text-lux-text-secondary hover:text-lux-accent-gold transition-colors duration-300">
                <FiInstagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-lux-text-secondary hover:text-lux-accent-gold transition-colors duration-300">
                <FiFacebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-lux-text-secondary hover:text-lux-accent-gold transition-colors duration-300">
                <FiLinkedin size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-lux-text-secondary hover:text-lux-accent-gold transition-colors duration-300">
                <FiTwitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
