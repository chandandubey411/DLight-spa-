import React from 'react';
import Hero from '../components/sections/Hero';
import Appointment from '../components/sections/Appointment';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Hero 
        title="Contact Us" 
        breadcrumb="Contact" 
        bgImage="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1920&q=80" 
        description="We would love to hear from you. Get in touch with us to book your next appointment, inquire about our treatments, or simply say hello."
      />
      
      {/* Contact Info Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8 text-primary" />,
                title: "Our Location",
                details: ["3rd Floor, Metro Pillar No 81, C-57, Vikas Marg,", "above Yellow Chilli Restaurant, Nirman Vihar,", "Preet Vihar, New Delhi - 110092"]
              },
              {
                icon: <Phone className="w-8 h-8 text-primary" />,
                title: "Call Us",
                details: ["+91 85888 98488"]
              },
              {
                icon: <Mail className="w-8 h-8 text-primary" />,
                title: "Email Us",
                details: ["ocnwellness@gmail.com"]
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "Opening Hours",
                details: ["Mon - Sun: 09:30 AM - 09:45 PM"]
              }
            ].map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                {info.details.map((line, i) => (
                  <p key={i} className="text-gray-600">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Appointment />

      {/* Map Section */}
      <section className="h-[400px] w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.204561278857!2d77.28854895!3d28.63660525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5b03513eb1%3A0x7d6a5c2d33dd5ea!2sPreet%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110092!5e0!3m2!1sen!2sin!4v1714201089209!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 grayscale contrast-125 opacity-80"
          title="Delight Spa & Wellness Location"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
