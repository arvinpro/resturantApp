import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaViber, FaMapMarkerAlt, FaPhone, FaEnvelope, FaStar } from "react-icons/fa";

function Contact() {
  return (
    <>
      {/* Elegant Thin Golden Top Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      <div className="absolute top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent"></div>

      {/* Optional subtle glow (kept your original dramatic effect but toned down) */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-amber-500/20 to-transparent blur-xl"></div>

      <div id="contact" className="relative bg-gradient-to-br from-black via-gray-900 to-amber-950 text-white py-20 px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="inline-block bg-gradient-to-r from-yellow-400 to-amber-600 text-black px-12 py-5 rounded-full font-extrabold text-5xl tracking-widest shadow-2xl mb-6">
            GET IN TOUCH
          </h1>
          <p className="text-xl text-amber-200 font-medium">
            We’d love to hear from you! Visit us or drop a message
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info + Social Icons */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-bold text-amber-400 mb-6">Sanghati Restaurant</h2>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4].map((_, i) => (
                    <FaStar key={i} className="fill-current" />
                  ))}
                  <FaStar className="text-yellow-400" />
                </div>
                <span className="text-sm text-gray-400">(36 Reviews)</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Your perfect stop for authentic Tharu & Nepali cuisine in the heart of Meghauli, Chitwan.
                Located just minutes from Chitwan National Park — perfect before or after your jungle safari!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
                <p>H6JH+77W, Narayani 44200<br />Bharatpur-27, Meghauli, Chitwan, Nepal</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-yellow-500 text-2xl" />
                <p>+977 9861358199</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-yellow-500 text-2xl" />
                <p>sanghatirestro2025@gmail.com</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div>
              <p className="text-amber-400 font-semibold mb-4">Follow & Message Us</p>
              <div className="flex gap-6 text-3xl">
                <a href="https://facebook.com/sanghatirestaurant" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-4 rounded-full hover:bg-blue-700 hover:scale-110 transition shadow-lg">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com/sanghati_restaurant" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full hover:scale-110 transition shadow-lg">
                  <FaInstagram />
                </a>
                <a href="https://wa.me/9779861140141" target="_blank" rel="noopener noreferrer" className="bg-green-500 p-4 rounded-full hover:bg-green-600 hover:scale-110 transition shadow-lg">
                  <FaWhatsapp />
                </a>
                <a href="viber://chat?number=%2B9779861140141" className="bg-purple-600 p-4 rounded-full hover:bg-purple-700 hover:scale-110 transition shadow-lg">
                  <FaViber />
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-900/50">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Opening Hours</h3>
              <p className="text-gray-300">Every Day: <span className="text-amber-300 font-semibold">8:00 AM – 10:00 PM</span></p>
              <p className="text-sm text-gray-400 mt-2">Open 365 days a year!</p>
            </div>
          </div>

          {/* Right: Contact Form + Google Map */}
          <div className="space-y-8">
            {/* Contact Form */}
            <form className="bg-gray-800/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-amber-900/40">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Send Us a Message</h3>
              <div className="space-y-5">
                <input type="text" placeholder="Your Name" className="w-full px-5 py-3 bg-gray-900/80 border border-amber-800/50 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition placeholder-gray-500" />
                <input type="email" placeholder="Your Email" className="w-full px-5 py-3 bg-gray-900/80 border border-amber-800/50 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition placeholder-gray-500" />
                <textarea rows={5} placeholder="Your Message..." className="w-full px-5 py-3 bg-gray-900/80 border border-amber-800/50 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition placeholder-gray-500 resize-none"></textarea>
                <button  className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold py-4 rounded-xl hover:from-yellow-400 hover:to-amber-500 transform hover:scale-105 transition shadow-xl">
                  Send Message
                </button>
              </div>
            </form>

            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-700/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.123456789!2d84.250000!3d27.580000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996f8b8b8b8b8b8%3A0x8f8b8b8b8b8b8b8b!2sSanghati%20Restaurant!5e0!3m2!1sen!2snp!4v1730000000000"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sanghati Restaurant Location"
              ></iframe>
            </div>

            <p className="text-center text-amber-300 text-sm italic">
              <a href="https://maps.app.goo.gl/r6vQFmC1Fx3ukqm79" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 underline font-medium">
                Get Directions → Sanghati Restaurant | 4.4 ★ (36 Reviews)
              </a>
            </p>
          </div>
        </div>

        {/* Bottom golden accent (consistent with About section) */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
      </div>
    </>
  );
}

export default Contact;