import React from "react";
import Header from "./Header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();

    // Main welcome line
    tl.from(".welcome-text", {
      y: 100,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
    });

    // Main heading with stagger effect
    tl.from(".main-heading span", {
      y: 120,
      rotation: 15,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
    }, "-=1");

    // Golden underline drawing animation
    tl.fromTo(".golden-line", {
      scaleX: 0,
      transformOrigin: "left",
    }, {
      scaleX: 1,
      duration: 1.2,
      ease: "power3.inOut",
    }, "-=1.2");

    // Subtext & buttons
    tl.from(".elegant-subtext", { opacity: 0, y: 30, duration: 1 }, "-=0.8");
    tl.from(".stylish-btn", { y: 60, opacity: 0, stagger: 0.2, duration: 0.9, ease: "back.out(1.8)" }, "-=0.6");
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full bg-cover bg-center bg-fixed overflow-hidden"
      style={{
        backgroundImage: "url('./src/images/home.png')", // public/images/home.png
      }}
    >
      <Header />

      {/* Gradient overlay (left heavy) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10"></div>

      {/* Golden decorative elements */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-600 via-amber-400 to-amber-600 z-20"></div>
      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl z-20"></div>

      {/* Left Content - Super Stylish Text */}
      <div className="absolute inset-0 flex items-center z-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl text-white">
          {/* Elegant Welcome */}
          <h3 className="welcome-text text-2xl md:text-3xl lg:text-4xl font-light tracking-widest text-amber-200 uppercase mb-4 opacity-90">
            Welcome to
          </h3>

          {/* Super Stylish Main Heading */}
          <h1 className="main-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
            <span className="block text-white drop-shadow-2xl" style={{ textShadow: "0 0 40px rgba(251,191,36,0.4)" }}>
              SANGHATI
            </span>
            <span className="block text-amber-400 tracking-tight" style={{
              fontFamily: '"Playfair Display", serif',
              textShadow: "0 10px 40px rgba(0,0,0,0.8), 0 0 80px rgba(251,191,36,0.6)",
              filter: "drop-shadow(0 0 20px rgba(251,191,36,0.8))"
            }}>
              Restaurant
            </span>
          </h1>

          {/* Animated Golden Underline */}
          <div className="golden-line mt-4 w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>

          {/* Handwritten-style Elegant Subtext */}
          <p className="elegant-subtext mt-8 text-xl md:text-2xl lg:text-3xl font-extralight text-amber-100/90 leading-relaxed italic max-w-2xl"
             style={{ fontFamily: '"Dancing Script", cursive' }}>
            Where every dish is a masterpiece, crafted with passion and served with grace.
          </p>

          {/* Ultra-Stylish Buttons */}
          <div className="stylish-btn mt-12 flex flex-col sm:flex-row gap-6">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-blue-950 font-bold text-lg rounded-full shadow-2xl hover:shadow-amber-400/70 transform hover:scale-110 transition-all duration-500 overflow-hidden">
              <span className="relative z-10 tracking-wider drop-shadow">RESERVE YOUR TABLE</span>
              <div className="absolute inset-0 bg-white/40 scale-0 group-hover:scale-150 transition-transform duration-1000 rounded-full"></div>
            </button>

            <button className="px-10 py-5 border-2 border-amber-400 text-amber-400 font-medium text-lg rounded-full backdrop-blur-md hover:bg-amber-400/20 hover:text-white transition-all duration-500 tracking-widest">
              DISCOVER OUR MENU
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-12 text-amber-400 animate-bounce">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;