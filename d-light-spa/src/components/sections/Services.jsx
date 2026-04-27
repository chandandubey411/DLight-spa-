import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import { services } from '../../data';

const Services = () => {
  return (
    <section className="py-20 relative bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
