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
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h4 className="text-secondary font-medium tracking-wider mb-2 text-sm uppercase">Get In Touch</h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">We're Here For You</h2>
            <p className="text-gray-500 mt-4">Have questions or want to book a session? Reach out through any of the channels below — we respond promptly!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8 text-primary" />,
                title: "Our Location",
                details: ["3rd Floor, Metro Pillar No 81, C-57, Vikas Marg,", "above Yellow Chilli Restaurant, Nirman Vihar,", "Preet Vihar, New Delhi - 110092"],
                sub: "Easily accessible from Nirman Vihar Metro Station (Blue Line)"
              },
              {
                icon: <Phone className="w-8 h-8 text-primary" />,
                title: "Call Us",
                details: ["+91 85888 98488"],
                sub: "Available Mon–Sun, 9:30 AM to 9:45 PM. WhatsApp also available on this number."
              },
              {
                icon: <Mail className="w-8 h-8 text-primary" />,
                title: "Email Us",
                details: ["ocnwellness@gmail.com"],
                sub: "Send us your queries or appointment requests. We'll reply within 24 hours."
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "Opening Hours",
                details: ["Mon - Sun: 09:30 AM - 09:45 PM"],
                sub: "Open all 7 days a week. Walk-ins are welcome — no prior booking needed!"
              }
            ].map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="mb-4">
                  {info.details.map((line, i) => (
                    <p key={i} className="text-gray-800 font-semibold leading-snug">{line}</p>
                  ))}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{info.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Appointment />

      {/* Map Section */}
      <section className="h-[280px] md:h-[400px] w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.204561278857!2d77.28854895!3d28.63660525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5b03513eb1%3A0x7d6a5c2d33dd5ea!2sPreet%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110092!5e0!3m2!1sen!2sin!4v1714201089209!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 grayscale contrast-125 opacity-80"
          title="DLight Spa Location"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
