import React from 'react'

function Contact() {
  return (
    <div id='contact'>
      <div class="min-h-screen bg-slate-200 p-6 flex flex-col items-center justify-center">
          
  <div class="bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div>
      <h2 class="text-3xl font-bold text-gray-800 mb-4">CONTACT US</h2>
      <p class="text-gray-600 mb-6">We’d love to hear from you! Fill out the form and we’ll get back to you as soon as possible.</p>
      
      <div class="space-y-4 text-gray-700">
        <p><strong>Email:</strong> sanghatirestro2025@gmail.com</p>
        <p><strong>Phone:</strong> +977 9861140141</p>
        <p><strong>Address:</strong> Bharatpur-27, Meghauli, Nepal</p>
      </div>
    </div>
    

    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" placeholder="Your Name" class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" placeholder="you@example.com" class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700">Message</label>
        <textarea rows="4" placeholder="Your Message..." class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
      </div>
      
      <button type="submit" class="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
        Send Message
      </button>
    </form>

  </div>
</div>

    </div>
  )
}

export default Contact
