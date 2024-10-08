import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">Contact Us</h1>
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="space-y-6 mb-8">
          <div className="flex items-center">
            <MapPin className="mr-4 text-blue-400" size={24} />
            <p className="text-gray-300">123 Tire Street, Wheel City, TC 12345</p>
          </div>
          <div className="flex items-center">
            <Phone className="mr-4 text-blue-400" size={24} />
            <p className="text-gray-300">(555) 123-4567</p>
          </div>
          <div className="flex items-center">
            <Mail className="mr-4 text-blue-400" size={24} />
            <p className="text-gray-300">60346@etu.he2b.be</p>
          </div>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-300">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-blue-400" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-gray-300">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-blue-400" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-gray-300">Message</label>
            <textarea id="message" rows={4} className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-blue-400" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 text-lg font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact