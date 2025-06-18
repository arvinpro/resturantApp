import React, { useEffect } from 'react'
import sukuti from '../images/sukuti.jpg'
import bbq from '../images/bbq.png'
import khaja from '../images/khajaset.jpg'
import ghongi from '../images/ghongi.jpg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function About() {

  return (
    <div id='about' className="grid gap-10 lg:grid-cols-2 items-center px-6 py-10">
  {/* Left Side: Text Content */}
  <div className="text-center lg:text-left max-w-3xl mx-auto">
    <h1 id='txt' className="text-3xl sm:text-4xl font-salsa text-yellow-500">About Us</h1>
    <p id='txt' className="mt-4 font-flame text-justify text-base sm:text-lg leading-relaxed">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, ratione qui assumenda a perspiciatis quia cum aliquam placeat aperiam tempore voluptatum laboriosam exercitationem. Deserunt quidem eveniet dolores enim facere provident ab non optio. Ipsam optio nihil culpa, esse praesentium officia tempore cumque laboriosam. Accusantium, suscipit. Qui minima facilis repellendus eveniet temporibus corrupti blanditiis consequuntur quos beatae! Minima officiis officia quos ex magni sit dolorem eum praesentium natus?
    </p>
  </div>

  {/* Right Side: Image Grid */}
  <div id='photo' className="grid grid-cols-2 gap-y-6 gap-x-0  place-items-center">
    <img src={sukuti} alt="Sukuti" className="w-60 h-32 object-cover rounded-xl shadow-md hover:scale-110 duration-1000" />
    <img src={bbq} alt="BBQ" className="w-60 h-32 object-cover rounded-xl shadow-md  hover:scale-110 duration-1000" />
    <img src={khaja} alt="Khaja" className="w-60 h-32 object-cover rounded-xl shadow-md  hover:scale-110 duration-1000" />
    <img src={ghongi} alt="Ghongi" className="w-60 h-32 object-cover rounded-xl shadow-md  hover:scale-110 duration-1000" />
  </div>

 
</div>

  )
}

export default About
