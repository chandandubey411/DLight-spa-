import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Phone, Mail, MapPin } from 'lucide-react';

const Appointment = () => {
  return (
    <section id="appointment-form" className="py-12 md:py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Form */}
          <div>
            <div className="mb-8">
              <span className="text-pink-500 font-bold tracking-wider text-sm uppercase mb-2 block">Get in Touch</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Book Appointment</h2>
              <p className="text-gray-500">Fill in the form below and our team will get back to you shortly to confirm your booking.</p>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-3xl border-2 border-gray-200 shadow-lg">
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-700 placeholder-gray-400 bg-gray-50 hover:border-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-700 placeholder-gray-400 bg-gray-50 hover:border-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="yourname@email.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-700 placeholder-gray-400 bg-gray-50 hover:border-gray-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-700 bg-gray-50 appearance-none cursor-pointer hover:border-gray-400">
                        <option value="">Select Service...</option>
                        <option value="body-spa">Premium Body Spa</option>
                        <option value="deep-tissue">Deep Tissue Therapy</option>
                        <option value="thai">Thai Body Massage</option>
                        <option value="lulur">Lulur Treatment</option>
                        <option value="reflexo">Reflexo Therapy</option>
                        <option value="hot-towel">Hot Towel Massage</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-700 bg-gray-50 cursor-pointer hover:border-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message / Special Requirements</label>
                  <textarea
                    placeholder="Write any specific requirements or questions..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-700 placeholder-gray-400 bg-gray-50 resize-none hover:border-gray-400"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="relative w-full py-4 rounded-full bg-primary text-white font-semibold text-base overflow-hidden group shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  {/* Shimmer slide overlay */}
                  <span className="absolute inset-0 w-full h-full translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out skew-x-12 pointer-events-none" />
                  
                  {/* Button content */}
                  <span className="relative flex items-center justify-center gap-3">
                    CONFIRM BOOKING
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
          
          {/* Right Info Card */}
          <div className="lg:pl-8 pt-6 lg:pt-0 space-y-6">
            {/* Hours Card */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border-2 border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-full opacity-60 transform translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Opening Hours</h3>
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center border-b-2 border-gray-100 pb-4">
                  <span className="text-gray-600 font-medium">Monday to Sunday</span>
                  <span className="font-bold text-gray-900 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">9:30 AM – 9:45 PM</span>
                </div>
                <p className="text-primary font-medium text-sm">Open all 7 days — Walk-ins welcome!</p>
              </div>
            </div>

            {/* Contact Quick Info */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border-2 border-gray-200 space-y-5">
              <h3 className="text-2xl font-bold text-gray-900">Quick Contact</h3>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Call / WhatsApp</p>
                  <p className="text-gray-900 font-bold">+91 85888 98488</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Us</p>
                  <p className="text-gray-900 font-bold">ocnwellness@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="text-gray-900 font-bold leading-relaxed">3rd Floor, Metro Pillar No. 81, C-57 Vikas Marg, Nirman Vihar, Preet Vihar, New Delhi - 110092</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Appointment;


