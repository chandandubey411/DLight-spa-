import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleBookClick = () => {
    navigate('/contact');
    setIsMobileMenuOpen(false);
    
    // Scroll to form after a short delay to allow page transition
    setTimeout(() => {
      const formElement = document.getElementById('appointment-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <Logo size="md" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-semibold transition-colors hover:text-primary relative group ${
                location.pathname === link.path ? 'text-primary' : 'text-gray-800'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button onClick={handleBookClick}>BOOK APPOINTMENT</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium ${
                location.pathname === link.path ? 'text-primary' : 'text-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button onClick={handleBookClick} className="mt-2 w-11/12">BOOK APPOINTMENT</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
