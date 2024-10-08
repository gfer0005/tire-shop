import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Home, Contact, Photos, Services } from './pages'
import { Truck } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const PageTransition = ({ children }) => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative no-scrollbar overflow-hidden">
      <div 
        className="fixed inset-0 bg-cover bg-center z-0 opacity-10" 
        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&q=80&w=2000&h=1000)'}}
      ></div>
      <header className="bg-gray-900 p-4 relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Truck size={24} className="text-blue-400" />
            <span className="text-xl font-bold">TireMax Store</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition duration-300">Services</Link></li>
              <li><Link to="/photos" className="hover:text-blue-400 transition duration-300">Photos</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto mt-8 px-4 relative z-10 overflow-y-auto no-scrollbar">
        <PageTransition>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </main>

      <footer className="bg-gray-900 p-4 mt-8 relative z-10">
        <div className="container mx-auto text-center text-gray-400">
          &copy; 2024 TireMax Store. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App