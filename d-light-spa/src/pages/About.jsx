import React from 'react';
import Hero from '../components/sections/Hero';

const About = () => {
  return (
    <>
      <Hero 
        title="About Us" 
        breadcrumb="About" 
        bgImage="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1920&q=80" 
        description="Discover the story behind Fallspa. Learn about our passionate team, our philosophy of wellness, and our commitment to providing you with an unforgettable spa experience."
      />
      <div className="py-20 text-center container-custom">
        <h2 className="text-3xl font-bold mb-4">About Fallspa</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          We are dedicated to providing the best spa experiences. This page is currently under construction. Please check back later for more information about our story and mission.
        </p>
      </div>
    </>
  );
};

export default About;
