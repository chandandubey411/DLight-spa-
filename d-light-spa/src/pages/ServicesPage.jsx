import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <>
      <Hero 
        title="Our Services" 
        breadcrumb="Services" 
        bgImage="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1920&q=80" 
        description="Explore our wide range of premium spa services. From soothing massages to revitalizing facials, we have the perfect treatment tailored just for you."
      />
      
      {/* Existing Services Grid */}
      <Services />

      {/* Special Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-secondary font-medium tracking-wider mb-2">EXCLUSIVE OFFERS</h4>
            <h2 className="text-4xl font-bold text-gray-900">Curated Spa Packages</h2>
            <p className="text-gray-600 mt-4">Indulge in our carefully crafted packages designed for maximum relaxation and rejuvenation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bridal Glow",
                price: "₹ 4,999",
                duration: "3 Hours",
                features: ["Aromatherapy Massage", "Radiance Facial", "Body Scrub", "Manicure & Pedicure"],
                popular: false
              },
              {
                title: "Ultimate Relaxation",
                price: "₹ 6,999",
                duration: "4 Hours",
                features: ["Hot Stone Massage", "Anti-Aging Facial", "Detox Body Wrap", "Scalp Treatment", "Spa Lunch"],
                popular: true
              },
              {
                title: "Couples Retreat",
                price: "₹ 8,999",
                duration: "2.5 Hours",
                features: ["Couples Swedish Massage", "Express Facials", "Private Jacuzzi Access", "Champagne & Strawberries"],
                popular: false
              }
            ].map((pkg, index) => (
              <div key={index} className={`bg-white rounded-3xl p-8 shadow-xl relative flex flex-col ${pkg.popular ? 'border-2 border-primary transform md:-translate-y-4' : 'border border-gray-100'}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-gray-500 font-medium">/ {pkg.duration}</span>
                </div>
                <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`w-full py-4 rounded-xl font-bold transition-all text-center ${pkg.popular ? 'bg-primary text-white hover:bg-primary/90 shadow-lg' : 'bg-gray-50 text-gray-900 hover:bg-gray-100'}`}>
                  Book Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Etiquette / FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-secondary font-medium tracking-wider mb-2">WHAT TO EXPECT</h4>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Spa Etiquette & Information</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Arrival Time",
                    desc: "Please arrive 15 minutes prior to your scheduled appointment to allow time for check-in and preparation."
                  },
                  {
                    title: "Cancellations",
                    desc: "We request a 24-hour notice for cancellations to avoid a 50% cancellation fee."
                  },
                  {
                    title: "Health Conditions",
                    desc: "Kindly advise us of any health conditions, allergies, or injuries which could affect your service."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Spa Relaxation" 
                className="rounded-3xl relative z-10 w-full object-cover h-[500px] shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
