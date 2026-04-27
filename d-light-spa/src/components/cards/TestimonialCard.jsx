import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-[#fff9f4] rounded-2xl p-8 relative border border-transparent hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)] hover:-translate-y-2 transition-all duration-300 cursor-default">
      <div className="absolute top-8 right-8 text-orange-100 opacity-50">
        <Quote size={64} fill="currentColor" />
      </div>
      
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-sm"
        />
        <div>
          <h4 className="font-semibold text-lg text-gray-900">{testimonial.name}</h4>
          <span className="text-primary text-sm font-medium px-2 py-0.5 bg-white rounded-full shadow-sm">{testimonial.role}</span>
        </div>
      </div>
      
      <p className="text-gray-500 text-sm leading-relaxed relative z-10">
        "{testimonial.text}"
      </p>
    </div>
  );
};

export default TestimonialCard;
