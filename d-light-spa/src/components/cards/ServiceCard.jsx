import React from 'react';

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col sm:flex-row gap-5 md:gap-6 text-center sm:text-left">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-primary mx-auto sm:mx-0">
          <Icon size={32} strokeWidth={1.5} />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
        <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
