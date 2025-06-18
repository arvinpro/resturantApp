import React, { useState,useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-scroll';

import { Menu, X } from 'lucide-react'; // or any other icon library

function Header() {
  const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
useGSAP(()=>{
  gsap.from("#nav",{
      x:10,
      opacity:0,
      duration:2,
      delay:0.5,
      stagger:1
  })
})
  return (
    <header className={` font-salsa text-white fixed w-full top-0 left-0 z-50 transition-all duration-1000 ${
      isScrolled ? 'bg-blue-950 text-white shadow-md' : 'bg-transparent text-white'
    }`}>
      <nav id='nav' className="max-w-screen-xl mx-auto flex justify-between items-center p-5 px-7 cursor-pointer">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className='font-dancing text-2xl'>SanghatiHotel</h1> 
          {/* <img src={logo} alt="..." className='h-20' /> */}
        </div>

        {/* Desktop Menu */}
       <div className="hidden md:flex space-x-9 items-center">
  <Link
    to="hero"
    smooth={true}
    duration={500}
    className="relative text-amber-300 hover:text-yellow-300 after:block after:h-[2px] after:bg-yellow-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
  >
    HOME
  </Link>
  <Link
    to="about"
    smooth={true}
    duration={500}
    className="relative text-white hover:text-yellow-300 after:block after:h-[2px] after:bg-yellow-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
  >
    ABOUT
  </Link>
  <Link
    to="menu"
    smooth={true}
    duration={500}
    className="relative text-white hover:text-yellow-300 after:block after:h-[2px] after:bg-yellow-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
  >
    MENU
  </Link>
  <Link
    to="contact"
    smooth={true}
    duration={500}
    className="relative text-white hover:text-yellow-300 after:block after:h-[2px] after:bg-yellow-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
  >
    CONTACT
  </Link>
  <button className="border border-white px-3 py-1 hover:bg-white hover:text-blue-900 transition">
    EVENTS
  </button>
</div>


        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4">
          <Link to="hero" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link to="about" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>ABOUT</Link>
          <Link to="menu" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>MENU</Link>
          <Link to="contact" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>CONTACT</Link>
          <button onClick={() => setIsOpen(false)} className="border border-white px-3 py-1 rounded-xl hover:bg-white hover:text-blue-900 transition">EVENTS</button>
        </div>
      )}
    </header>
  );
}

export default Header;
