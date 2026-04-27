import React from 'react';
import { Link } from 'react-router-dom';
import { Flower2, Mail, Phone, Clock, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-gray-300 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Flower2 className="text-primary" size={32} />
              <span className="text-2xl font-serif font-bold text-white tracking-tight">Delight Spa<span className="text-primary">.</span></span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              A premier destination in Preet Vihar for luxury wellness and relaxation. We provide holistic, rejuvenating treatments using only the finest natural products.
            </p>
            <div className="flex items-start gap-4 mb-4">
              <Clock className="text-primary mt-1" size={20} />
              <div>
                <p className="text-sm font-semibold text-white">Monday - Sunday:</p>
                <p className="text-sm">9:30am - 9:45pm</p>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Other Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Project</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Latest Blog</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-primary transition-colors">Premium Body Spa</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Deep Tissue Therapy</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Thai Body Massage</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Lulur Treatment</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Reflexo Therapy</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Hot Towel Massage</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Subscribe Now !</h4>
            <div className="relative mb-8">
              <input 
                type="email" 
                placeholder="Your Email..." 
                className="w-full bg-white text-gray-800 rounded-full py-3 px-6 pr-14 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="absolute right-1 top-1 bottom-1 w-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors">
                <Send size={16} />
              </button>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>Copyright © {new Date().getFullYear()} <span className="text-primary font-medium">Delight Spa & Wellness</span>. All rights reserved.</p>
          
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <Mail className="text-primary" size={18} />
              <div>
                <p className="font-semibold text-white">ocnwellness@gmail.com</p>
                <p className="text-xs text-gray-500">Our Email</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-primary" size={18} />
              <div>
                <p className="font-semibold text-white">+91 85888 98488</p>
                <p className="text-xs text-gray-500">Call Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
