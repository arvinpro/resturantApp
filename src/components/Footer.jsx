import React from 'react'

function Footer() {
  return (
    <div>
      <footer class="bg-gray-900 text-white py-8">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row justify-between items-center">
      

      <div class="mb-4 md:mb-0">
        <h1 class="text-xl font-dancing">Sanghati Restaurant</h1>
      </div>
      
   
      <div class="flex space-x-6 text-sm">
        <a href="#" class="hover:text-yellow-400 transition">Home</a>
        <a href="#" class="hover:text-yellow-400 transition">Menu</a>
        <a href="#" class="hover:text-yellow-400 transition">About</a>
        <a href="#" class="hover:text-yellow-400 transition">Contact</a>
      </div>
    </div>

    <div class="text-center text-gray-400 text-sm mt-6">
      © 2025 Sanghati Restaurant. All rights reserved.
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
