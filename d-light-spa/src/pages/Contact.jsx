import React from 'react';
import Hero from '../components/sections/Hero';
import Appointment from '../components/sections/Appointment';

const Contact = () => {
  return (
    <>
      <Hero 
        title="Contact Us" 
        breadcrumb="Contact" 
        bgImage="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1920&q=80" 
        description="We would love to hear from you. Get in touch with us to book your next appointment, inquire about our treatments, or simply say hello."
      />
      <Appointment />
    </>
  );
};

export default Contact;
