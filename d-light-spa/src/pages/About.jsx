import React from 'react';
import Hero from '../components/sections/Hero';
import { Leaf, Droplets, Heart, Star, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Hero 
        title="About Us" 
        breadcrumb="About" 
        bgImage="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1920&q=80" 
        description="Discover the story behind Delight Spa & Wellness. Learn about our passionate team, our philosophy of wellness, and our commitment to providing you with an unforgettable spa experience."
      />
      
      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Spa Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-secondary font-medium tracking-wider mb-2">OUR STORY</h4>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">A Sanctuary of Serenity Since 2019</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to create an oasis of tranquility in the heart of the bustling city, Delight Spa & Wellness has been a premier destination for luxury wellness. We believe that true beauty and health emerge when the body, mind, and spirit are in perfect harmony.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our journey began with a simple philosophy: to provide holistic, rejuvenating treatments using only the finest natural and organic products. Today, we continue to uphold this commitment, offering tailored experiences that nurture your well-being.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Users size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">10k+</h5>
                    <p className="text-sm text-gray-500">Happy Clients</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Award size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">15+</h5>
                    <p className="text-sm text-gray-500">Awards Won</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-secondary font-medium tracking-wider mb-2">WHY CHOOSE US</h4>
            <h2 className="text-4xl font-bold text-gray-900">Experience the Delight Spa & Wellness Difference</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="w-10 h-10 text-primary" />,
                title: "Natural Products",
                description: "We use 100% organic, cruelty-free products that are gentle on your skin and the environment."
              },
              {
                icon: <Star className="w-10 h-10 text-primary" />,
                title: "Expert Therapists",
                description: "Our highly trained professionals possess years of experience in specialized healing techniques."
              },
              {
                icon: <Heart className="w-10 h-10 text-primary" />,
                title: "Personalized Care",
                description: "Every treatment is customized to address your specific needs and wellness goals."
              },
              {
                icon: <Droplets className="w-10 h-10 text-primary" />,
                title: "Tranquil Ambience",
                description: "Immerse yourself in our serene environment designed to instantly melt away your stress."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Rejuvenate Your Body and Soul?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Take the first step towards total relaxation. Book your appointment today and let us pamper you with our luxurious treatments.
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary font-semibold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all transform hover:-translate-y-1">
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
