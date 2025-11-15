import React, { useState } from "react";
import Header from "./Header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import toast, { Toaster } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: 1,
    seating: "indoor",
    terms: false,
  });

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".welcome-text", {
      y: 100,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
    });

    tl.from(".main-heading span", {
      y: 120,
      rotation: 15,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
    }, "-=1");

    tl.fromTo(".golden-line", {
      scaleX: 0,
      transformOrigin: "left",
    }, {
      scaleX: 1,
      duration: 1.2,
      ease: "power3.inOut",
    }, "-=1.2");

    tl.from(".elegant-subtext", { opacity: 0, y: 30, duration: 1 }, "-=0.8");
    tl.from(".stylish-btn", { y: 60, opacity: 0, stagger: 0.2, duration: 0.9, ease: "back.out(1.8)" }, "-=0.6");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.terms) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    // Simulate booking
    toast.success(
      `Thank you, ${formData.fullName}! 🎉\nYour table for ${formData.guests} ${formData.guests > 1 ? 'guests' : 'guest'} on ${startDate.toLocaleDateString()} has been reserved!`,
      {
        duration: 6000,
        style: {
          background: '#1a1a1a',
          color: '#fff',
          fontWeight: 'bold',
          border: '1px solid #f59e0b',
          borderRadius: '12px',
          padding: '16px',
        },
        icon: '🍽️',
      }
    );

    setIsOpen(false);
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      guests: 1,
      seating: "indoor",
      terms: false,
    });
    setStartDate(new Date());
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  return (
    <>
      <Toaster position="top-center" />

      <section
        id="home"
        className="relative h-screen w-full bg-cover bg-center bg-fixed overflow-hidden"
        style={{
          backgroundImage: "url('./images/home.png')",
        }}
      >
        <Header />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10"></div>

        {/* Golden decorative elements */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-600 via-amber-400 to-amber-600 z-20"></div>
        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl z-20"></div>

        {/* Left Content */}
        <div className="absolute inset-0 flex items-center z-20 px-8 md:px-16 lg:px-24">
          <div className="max-w-3xl text-white">
            <h3 className="welcome-text text-2xl md:text-3xl lg:text-4xl font-light tracking-widest text-amber-200 uppercase mb-4 opacity-90">
              Welcome to
            </h3>

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

            <div className="golden-line mt-4 w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>

            <p className="elegant-subtext mt-8 text-xl md:text-2xl lg:text-3xl font-extralight text-amber-100/90 leading-relaxed italic max-w-2xl"
               style={{ fontFamily: '"Dancing Script", cursive' }}>
              Where every dish is a masterpiece, crafted with passion and served with grace.
            </p>

            <div className="stylish-btn mt-12 flex flex-col sm:flex-row gap-6">
              {/* Reserve Button - Opens Modal */}
              <button
                onClick={() => setIsOpen(true)}
                className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-blue-950 font-bold text-lg rounded-full shadow-2xl hover:shadow-amber-400/70 transform hover:scale-110 transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 tracking-wider drop-shadow">RESERVE YOUR TABLE</span>
                <div className="absolute inset-0 bg-white/40 scale-0 group-hover:scale-150 transition-transform duration-1000 rounded-full"></div>
              </button>

              <button className="px-10 py-5 border-2 border-amber-400 text-amber-400 font-medium text-lg rounded-full backdrop-blur-md hover:bg-amber-400/20 hover:text-white transition-all duration-500 tracking-widest">
                <Link
                to="menu"
                spy={true}
                smooth={true}
                duration={800}
                offset={-80} // Adjust if you have a fixed header       
              >
                DISCOVER OUR MENU
              </Link>
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

      {/* Reservation Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black p-8 text-left align-middle shadow-2xl shadow-amber-500/20 transition-all border border-amber-500/30">
                  <Dialog.Title as="h3" className="text-3xl font-bold text-amber-400 text-center mb-2">
                    Reserve Your Table
                  </Dialog.Title>
                  <p className="text-center text-amber-100/80 mb-8 text-lg italic">
                    Experience luxury dining at Sanghati
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        className="w-full px-5 py-4 bg-white/10 border border-amber-500/40 rounded-lg text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition"
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className="w-full px-5 py-4 bg-white/10 border border-amber-500/40 rounded-lg text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition"
                      />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="w-full px-5 py-4 bg-white/10 border border-amber-500/40 rounded-lg text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition"
                      />

                      <div className="bg-white/10 border border-amber-500/40 rounded-lg p-2">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          minDate={new Date()}
                          showTimeSelect
                          dateFormat="MMMM d, yyyy h:mm aa"
                          className="w-full px-4 py-3 bg-transparent text-white focus:outline-none"
                          placeholderText="Select Date & Time"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-amber-200 mb-2">Number of Guests</label>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-white/10 border border-amber-500/40 rounded-lg text-white focus:outline-none focus:border-amber-400"
                        >
                          {[1,2,3,4,5,6,7,8,9,10].map(n => (
                            <option key={n} value={n} className="bg-gray-900">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-amber-200 mb-2">Preferred Seating</label>
                        <select
                          name="seating"
                          value={formData.seating}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-white/10 border border-amber-500/40 rounded-lg text-white focus:outline-none focus:border-amber-400"
                        >
                          <option value="indoor" className="bg-gray-900">Indoor</option>
                          <option value="outdoor" className="bg-gray-900">Outdoor (Terrace)</option>
                          <option value="rooftop" className="bg-gray-900">Rooftop (VIP)</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleInputChange}
                        required
                        className="w-6 h-6 text-amber-500 bg-gray-800 border-amber-500/50 rounded focus:ring-amber-400"
                      />
                      <label className="text-amber-100 text-sm leading-tight">
                        I agree to Sanghati Restaurant's <span className="text-amber-400 underline">policies</span> and <span className="text-amber-400 underline">cancellation rules</span>
                      </label>
                    </div>

                    <div className="flex gap-4 justify-center pt-6">
                      <button
                        type="submit"
                        className="px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300"
                      >
                        Confirm Reservation
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="px-8 py-4 border border-amber-500 text-amber-400 rounded-full hover:bg-amber-500/20 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Hero;