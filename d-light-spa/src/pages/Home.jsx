import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Appointment from '../components/sections/Appointment';
import Testimonials from '../components/sections/Testimonials';

const Home = () => {
  return (
    <>
      <Hero 
        title="Relax & Renew"
        breadcrumb="Welcome"
        description="Experience the ultimate tranquility and rejuvenation at Delight Spa & Wellness. We offer premium treatments designed to refresh your body, calm your mind, and restore your inner balance."
      />
      <Services />
      <Appointment />
      <Testimonials />
    </>
  );
};

export default Home;
