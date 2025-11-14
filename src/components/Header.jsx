import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    gsap.from(".logo-part", {
      y: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
    gsap.from(".navlink", {
      y: -20,
      opacity: 0,
      duration: 0.1,
      ease: "power2.out",
      stagger: 0.15,
      clearProps: "all",
    });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl shadow-2xl border-b border-amber-500/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6 lg:px-12">
          {/* === Luxury Logo === */}
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-amber-400 rounded-full shadow-lg shadow-amber-400/60"></div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
                <span
                  className="logo-part text-amber-400"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Sanghati
                </span>
                <span className="logo-part text-white"> Hotel</span>
              </h1>
              <p className="text-xs tracking-widest text-amber-200/80 uppercase font-light -mt-1">
                Luxury • Elegance • Heritage
              </p>
            </div>
          </div>

          {/* === Desktop Menu — NOW FULLY VISIBLE & STUNNING === */}
          <div className="hidden lg:flex items-center space-x-12 text-xl">
            {["HOME", "ABOUT", "MENU", "CONTACT"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={600}
                className="navlink relative text-white/90 font-medium tracking-wider hover:text-amber-400 transition-all duration-300 group cursor-pointer"
              >
                {item}

                {/* Golden underline animation */}
                <span
                  className={`
        absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-500 ease-out origin-left
        ${item === "HOME" ? "w-full" : "w-0 group-hover:w-full"}
      `}
                ></span>
              </Link>
            ))}
          </div>

          {/* === Mobile Menu Toggle === */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white z-50"
          >
            {isOpen ? (
              <X size={34} className="text-amber-400" />
            ) : (
              <Menu size={34} />
            )}
          </button>
        </nav>

        {/* Golden accent line when scrolled */}
        {isScrolled && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"></div>
        )}
      </header>

      {/* === Mobile Full-Screen Menu === */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center space-y-12 text-4xl font-light">
          {["HOME", "ABOUT", "MENU", "CONTACT"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={600}
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-amber-400 transition-all duration-500 hover:scale-110 tracking-wider"
            >
              {item}
            </Link>
          ))}
          <div className="absolute bottom-10 text-amber-400/50 text-sm tracking-widest">
            SANGHATI HOTEL © 2025
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
