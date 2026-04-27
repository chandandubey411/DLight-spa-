import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const Appointment = () => {
  return (
    <section id="appointment-form" className="py-20 bg-pastel relative overflow-hidden">
      {/* Decorative lines */}
      <svg className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100" fill="none" stroke="#a855f7" strokeWidth="2" />
        <path d="M0,300 C150,400 350,200 500,300 C650,400 850,200 1000,300" fill="none" stroke="#a855f7" strokeWidth="2" />
      </svg>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Form */}
          <div>
            <div className="mb-8">
              <span className="text-pink-500 font-bold tracking-wider text-sm uppercase mb-2 block">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get Appointment</h2>
              <p className="text-gray-500">Aenean ut enim vel lectus rutrum sodales. Aliquam consequat augue eget enim convallis, at maximus libero ullamcorper. Cras sit amet placerat nisi.</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white/60 shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input placeholder="First Name" />
                  <Input placeholder="Email" type="email" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    as="select" 
                    options={[
                      { value: '', label: 'Department...' },
                      { value: 'spa', label: 'Spa & Relax' },
                      { value: 'massage', label: 'Massage Therapy' },
                      { value: 'facial', label: 'Facials & Skincare' },
                    ]} 
                  />
                  <Input type="date" />
                </div>
                <Input as="textarea" placeholder="Write your specific requirements or questions..." />
                <Button type="button" className="px-8 w-full md:w-auto flex items-center gap-2 group">
                  SUBMIT NOW
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Button>
              </form>
            </div>
          </div>
          
          {/* Right Info Card */}
          <div className="lg:pl-12 pt-8 lg:pt-0">
            <div className="bg-white rounded-2xl p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-full opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-8 relative z-10">Opening Hours</h3>
              
              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-600">Monday to Friday:</span>
                  <span className="font-medium text-gray-900">09:00 am - 10:00 pm</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-medium text-gray-900">09:00 am - 08:00 pm</span>
                </div>
                <div className="flex justify-between pb-4">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-medium text-gray-900">09:00 am - 05:00 pm</span>
                </div>
              </div>
              
              <p className="text-primary font-medium relative z-10">Check out seasonal discounts for best offers.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Appointment;
