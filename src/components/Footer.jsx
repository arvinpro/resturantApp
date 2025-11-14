import React from "react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp, 
  FaViber, 
  FaPhone, 
  FaMapMarkerAlt 
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Golden top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left: Brand Name */}
          <div className="text-center md:text-left">
            <h1 
              className="text-4xl font-bold tracking-wider"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Sanghati
              <span className="block text-amber-400 text-3xl -mt-2">Restaurant</span>
            </h1>
            <p className="text-amber-200 text-sm italic mt-2">Authentic Tharu Cuisine • Meghauli, Chitwan</p>
          </div>

          {/* Center: Social Icons */}
          <div className="flex gap-5">
            <a href="https://facebook.com" target="_blank" className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all duration-300 shadow-lg hover:shadow-amber-500/50 hover:scale-110">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 hover:scale-110 shadow-lg">
              <FaInstagram />
            </a>
            <a href="https://wa.me/9779861140141" target="_blank" className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg">
              <FaWhatsapp />
            </a>
            <a href="viber://chat?number=%2B9779861140141" className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg">
              <FaViber />
            </a>
          </div>

          {/* Right: Contact Info */}
          <div className="text-center md:text-right space-y-2 text-sm text-gray-400">
            <div className="flex items-center justify-center md:justify-end gap-2">
              <FaMapMarkerAlt className="text-amber-400" />
              <span>H6JH+77W, Meghauli, Chitwan</span>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-2">
              <FaPhone className="text-amber-400" />
              <span>+977 9861358199</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-amber-900/30 text-center text-gray-500 text-xs">
          © 2025 <span className="text-amber-400 font-medium">Sanghati Restaurant</span>. All rights reserved.
        </div>
      </div>

      {/* Subtle golden bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-950/20 to-transparent pointer-events-none"></div>
    </footer>
  );
}

export default Footer;