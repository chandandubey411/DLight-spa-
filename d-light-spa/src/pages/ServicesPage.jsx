import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';

const ServicesPage = () => {
  return (
    <>
      <Hero 
        title="Our Services" 
        breadcrumb="Services" 
        bgImage="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1920&q=80" 
        description="Explore our wide range of premium spa services. From soothing massages to revitalizing facials, we have the perfect treatment tailored just for you."
      />
      <Services />
    </>
  );
};

export default ServicesPage;
