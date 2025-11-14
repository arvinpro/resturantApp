import React from "react";
import sukuti from "../images/sukuti.jpg";
import bbq from "../images/bbq.png";
import khaja from "../images/khajaset.jpg";
import ghongi from "../images/ghongi.jpg";
import momo from "../images/momo.jpg";        // optional
import sekuwa from "../images/sekuwa.jpg";      // optional

function Menubar() {
  const menuItems = [
    {
      img: sukuti,
      title: "Buff Sukuti",
      desc: "Spicy dried buffalo meat, perfectly smoked & served with fresh salad and beaten rice",
      price: "Rs. 450",
    },
    {
      img: bbq,
      title: "Chicken & Buff BBQ",
      desc: "Juicy grilled BBQ platter with sausage, veggies & signature smoky sauce",
      price: "Rs. 650",
    },
    {
      img: khaja,
      title: "Deluxe Khaja Set",
      desc: "Royal thali with chicken, buff, fish, duck meat & authentic Tharu sides",
      price: "Rs. 1200",
    },
    {
      img: ghongi,
      title: "Ghongi Curry",
      desc: "Traditional Tharu delicacy – fresh river snails in rich aromatic curry",
      price: "Rs. 380",
    },
    {
      img: momo || sukuti,
      title: "Chicken Chilli Momo",
      desc: "Steamed dumplings tossed in spicy chilli sauce with onions & bell peppers",
      price: "Rs. 280",
    },
    {
      img: sekuwa || bbq,
      title: "Pork Sekuwa",
      desc: "Charcoal-grilled pork cubes marinated in Himalayan spices, served sizzling",
      price: "Rs. 520",
    },
  ];

  return (
    <section id="menu" className="relative bg-gradient-to-br from-black via-gray-900 to-amber-950 text-white py-20 px-6 overflow-hidden">
      
      {/* Elegant Thin Golden Top Line - Same as About & Contact */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      <div className="absolute top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent"></div>
      
      {/* Subtle soft glow for luxury */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-amber-500/20 to-transparent blur-xl"></div>

      {/* Enhanced Header */}
      <div className="text-center mb-16 max-w-5xl mx-auto">
        <h1 className="inline-block bg-gradient-to-r from-yellow-400 to-amber-600 text-black px-12 py-5 rounded-full font-extrabold text-5xl tracking-widest shadow-2xl mb-6">
          OUR MENU
        </h1>
        <p className="text-3xl font-bold text-amber-300 mb-4">
          Authentic Flavors of Terai 
        </p>
        <p className="text-lg text-amber-100 leading-relaxed max-w-3xl mx-auto">
          Experience the true taste of Nepali Tharu cuisine – crafted with fresh local ingredients 
          and centuries-old recipes. Every bite tells a story of tradition and passion.
        </p>
        <div className="mt-8 flex justify-center gap-8 text-amber-400 font-medium text-sm">
          <span>Fresh Ingredients</span>
          <span>•</span>
          <span>Handmade Daily</span>
          <span>•</span>
          <span>100% Halal</span>
        </div>
      </div>

      {/* 6 Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-gray-800/90 to-black rounded-3xl overflow-hidden 
                         shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-amber-500/50
                         border border-amber-900/50 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-yellow-500 text-black font-bold px-5 py-2 rounded-full text-lg shadow-xl">
                    {item.price}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-amber-400 mb-3 tracking-wide group-hover:text-yellow-300 transition">
                  {item.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-5">
                  <span className="text-amber-500 text-sm font-semibold">Popular Choice</span>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/20 rounded-full blur-3xl group-hover:bg-amber-500/40 transition"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-16 space-x-4">
        <button className="w-14 h-14 rounded-full font-bold text-lg bg-yellow-500 text-black shadow-xl scale-110">
          1
        </button>
        <button className="w-14 h-14 rounded-full font-bold text-lg bg-gray-800 text-gray-500 border border-amber-800 hover:bg-amber-600 hover:text-white transition">
          2
        </button>
        <button className="w-14 h-14 rounded-full font-bold text-lg bg-gray-800 text-gray-500 border border-amber-800 hover:bg-amber-600 hover:text-white transition">
          3
        </button>

        <span className="ml-8 text-amber-300 font-medium">
          Page <span className="text-yellow-400">1</span> — Explore More Coming Soon!
        </span>
      </div>

      {/* Bottom Golden Accent - Matching all sections */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
    </section>
  );
}

export default Menubar;