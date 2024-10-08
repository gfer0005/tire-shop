import React from 'react'
import { Link } from 'react-router-dom'
import { Wrench, Users, Building, Star, Clock, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

const Home = () => {
  const additionalArticles = [
    {
      title: "Customer Satisfaction Guaranteed",
      icon: Star,
      content: "We pride ourselves on delivering exceptional service. Our team goes above and beyond to ensure your complete satisfaction with every visit."
    },
    {
      title: "Quick Turnaround Time",
      icon: Clock,
      content: "We understand the value of your time. Our efficient processes ensure that most services are completed within hours, not days."
    },
    {
      title: "Safety First",
      icon: Shield,
      content: "Your safety is our top priority. We use only high-quality parts and follow strict safety protocols in all our services."
    }
  ]

  return (
    <div className="space-y-12">
      <AnimatedSection>
        <div className="relative h-96 rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?auto=format&fit=crop&q=80&w=2000&h=1000" 
            alt="Modern tire background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-5xl font-bold mb-4 text-white">Welcome to TireMax Store</h1>
            <p className="text-xl mb-8 text-gray-200">Your premier destination for top-quality tires and expert service</p>
            <Link to="/services" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 text-lg font-semibold">
              Explore Our Services
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedSection>
          <motion.div 
            className="bg-gray-800 p-6 rounded-xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800&h=400" alt="Premium Tire Selection" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Premium Tire Selection</h2>
            <p className="text-gray-300">Discover our extensive range of high-performance, all-season, and specialty tires from top brands. We have the perfect fit for every vehicle and driving condition.</p>
          </motion.div>
        </AnimatedSection>
        <AnimatedSection>
          <motion.div 
            className="bg-gray-800 p-6 rounded-xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src="https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7f9?auto=format&fit=crop&q=80&w=800&h=400" alt="Expert Installation & Care" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Expert Installation & Care</h2>
            <p className="text-gray-300">Our certified technicians use state-of-the-art equipment to ensure precise installation, balancing, and alignment. Trust us to keep your ride smooth and safe.</p>
          </motion.div>
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-blue-400 text-center">About Our Garage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="flex flex-col items-center text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Wrench size={48} className="text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">State-of-the-Art Equipment</h3>
              <p className="text-gray-300">Our garage is equipped with the latest technology to provide top-notch service for your vehicle.</p>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Users size={48} className="text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Expert Team</h3>
              <p className="text-gray-300">Our certified technicians have years of experience and ongoing training to serve you better.</p>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Building size={48} className="text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Convenient Location</h3>
              <p className="text-gray-300">Easily accessible garage with a comfortable waiting area for our valued customers.</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-blue-400 text-center">Why Choose TireMax?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalArticles.map((article, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <article.icon size={48} className="text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{article.title}</h3>
                <p className="text-gray-300">{article.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default Home