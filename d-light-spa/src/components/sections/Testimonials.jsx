import React from 'react';
import TestimonialCard from '../cards/TestimonialCard';
import { testimonials } from '../../data';

const Testimonials = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-pink-500 font-bold tracking-wider text-sm uppercase mb-2 block">Our Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">What Our Clients Say</h2>
          <p className="text-gray-500 leading-relaxed">Hear what our happy clients have to say about their experience at Delight Spa & Wellness. Their satisfaction is our greatest achievement.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
