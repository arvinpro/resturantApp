import React from 'react';
import sukuti from '../images/sukuti.jpg';
import bbq from '../images/bbq.png';
import khaja from '../images/khajaset.jpg';
import ghongi from '../images/ghongi.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function About() {
  useGSAP(() => {
    gsap.from('.about-title', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
      },
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
    });

    gsap.from('.about-text', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 70%',
      },
      y: 60,
      opacity: 0,
      duration: 1.4,
      delay: 0.3,
      ease: 'power3.out',
    });

    gsap.from('.gallery-img', {
      scrollTrigger: {
        trigger: '.image-gallery',
        start: 'top 85%',
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section id="about" className="relative py-24 px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-black via-gray-950 to-amber-950">
      
      {/* Elegant Thin Golden Top Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      <div className="absolute top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Elegant Text Content */}
        <div className="space-y-10 text-center lg:text-left">
          <div>
            <h3 className="about-title text-2xl md:text-3xl font-light tracking-widest text-amber-300 uppercase mb-4">
              Discover Our Legacy
            </h3>
            <h1 className="about-title text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                style={{ fontFamily: '"Playfair Display", serif' }}>
              A Journey of
              <span className="block text-amber-400 mt-2 tracking-tight">Taste & Tradition</span>
            </h1>
          </div>

          <p className="about-text text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl font-light"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            At <span className="text-amber-400 font-medium">Sanghati Resturant</span>, we don’t just serve food — 
            we craft memories. Every dish is a celebration of heritage, prepared with the finest local ingredients 
            and served with timeless elegance. From our legendary sukuti to the finest Terai ghongi, 
            each bite tells a story of passion, culture, and culinary artistry.
          </p>

          <div className="pt-8">
            <p className="text-3xl italic text-amber-400" style={{ fontFamily: '"Dancing Script", cursive' }}>
              "Where tradition meets perfection"
            </p>
            <div className="mt-4 w-32 h-px bg-amber-400"></div>
          </div>
        </div>

        {/* Right: Image Gallery */}
        <div className="image-gallery grid grid-cols-2 gap-6">
          {[sukuti, bbq, khaja, ghongi].map((img, index) => (
            <div
              key={index}
              className="gallery-img group relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={img}
                alt={`Dish ${index + 1}`}
                className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-2xl ring-4 ring-transparent group-hover:ring-amber-400/50 transition-all duration-500 shadow-amber-400/30"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom golden accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
    </section>
  );
}

export default About;