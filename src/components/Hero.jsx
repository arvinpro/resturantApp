import React from "react";
import Header from "./Header";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#hero-heading", {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    tl.from("#hero-subheading", {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    }, "-=0.6");

    tl.from("#hero-paragraph", {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    }, "-=0.7");

    tl.from("#btn",{
      opacity:0,
      y:10,
      duration:1
    })

  }, []);

  return (
    <div id="hero" className='relative h-screen bg-[url("./images/home.png")] bg-cover bg-center'>
      <Header />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white px-4 text-center">
        <h1 id="hero-heading" className="text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl font-great text-amber-300">
          Welcome to Sanghati Restaurant
        </h1>

        <h1 id="hero-subheading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-anton mt-2">
          EAT HEALTHY AND DELICIOUS FOOD
        </h1>

        <p id="hero-paragraph" className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-flame mt-2 max-w-[90%] md:max-w-3xl">
          We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are. Enjoy our delicious and quality food with us — thank you!
        </p>

        <div id="btn" className="mt-4 flex flex-wrap justify-center gap-4">
          <button id="btn1" className="text-sm sm:text-base md:text-lg font-medium px-4 py-2 hover:bg-white hover:text-blue-900 transition bg-amber-500 rounded">
            BOOK A TABLE
          </button>
          <button id="btn2" className="text-sm sm:text-base md:text-lg border border-white px-4 py-2 hover:bg-white hover:text-blue-900 transition rounded">
            JOIN US SOON
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
