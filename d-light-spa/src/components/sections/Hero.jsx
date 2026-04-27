import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const heroImages = [
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1920&q=80"
];

const Hero = ({ title = "Service", breadcrumb = "Service", bgImage, description }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!isHome) return; // Only run carousel on home page
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHome]);

  return (
    <div className={`relative w-full flex items-center justify-start overflow-hidden bg-white ${isHome ? 'min-h-screen' : 'min-h-[280px] sm:min-h-[350px] md:h-[450px] mt-16 md:mt-20'}`}>
      <div className="absolute inset-0 z-0 bg-black">
        {isHome ? (
          heroImages.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt="Spa Background" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-80' : 'opacity-0'
              }`}
            />
          ))
        ) : (
          <img 
            src={bgImage || heroImages[0]} 
            alt={`${title} Background`}
            className="w-full h-full object-cover opacity-80"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="absolute inset-0 bg-pink-50/20 mix-blend-multiply"></div>
      </div>
      
      <div className={`container-custom relative z-10 ${isHome ? 'pt-24 sm:pt-28 md:pt-32' : 'py-10 sm:py-12'}`}>
        <h1 className={`${isHome ? 'text-4xl sm:text-5xl md:text-7xl lg:text-8xl' : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'} font-bold text-gray-900 mb-4 md:mb-6 transition-all duration-500`}>
          {title}
        </h1>
        
        {description && (
          <p className="text-gray-700 text-base md:text-lg lg:text-xl max-w-xl md:max-w-2xl font-medium leading-relaxed">
            {description}
          </p>
        )}
      </div>
      
      {/* Carousel Indicators for Home */}
      {isHome && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {heroImages.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;
