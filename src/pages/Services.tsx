import React from 'react'

const Services = () => {
  const services = [
    { 
      title: 'Tire Installation', 
      description: 'Professional mounting and balancing of new tires.',
      image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&q=80&w=800&h=400'
    },
    { 
      title: 'Wheel Alignment', 
      description: 'Ensure your vehicle drives straight and handles properly.',
      image: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80&w=800&h=400'
    },
    { 
      title: 'Tire Rotation', 
      description: 'Extend the life of your tires with regular rotations.',
      image: 'https://images.unsplash.com/photo-1626447852999-4eb9afd5a856?auto=format&fit=crop&q=80&w=800&h=400'
    },
    { 
      title: 'Flat Tire Repair', 
      description: 'Quick and reliable repair for punctures and leaks.',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800&h=400'
    },
    { 
      title: 'Custom Wheels', 
      description: 'Wide selection of aftermarket wheels to fit your style.',
      image: 'https://images.unsplash.com/photo-1611921059253-1938ab681a07?auto=format&fit=crop&q=80&w=800&h=400'
    },
    { 
      title: 'Tire Pressure Monitoring', 
      description: 'Keep your tires at optimal pressure for safety and efficiency.',
      image: 'https://images.unsplash.com/photo-1592853625597-7d17be820d0c?auto=format&fit=crop&q=80&w=800&h=400'
    },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-800 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl hover:bg-gray-700 overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-blue-400">{service.title}</h2>
              <p className="text-gray-300">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services