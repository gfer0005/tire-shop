import React from 'react'

const Photos = () => {
  const photos = [
    { src: 'https://images.unsplash.com/photo-1527247043589-98e6ac08f56c', alt: 'Tire installation' },
    { src: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c', alt: 'Custom wheels' },
    { src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e', alt: 'Wheel alignment' },
    { src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537', alt: 'Tire shop' },
    { src: 'https://images.unsplash.com/photo-1562141961-b5d1dfb57448', alt: 'Performance tires' },
    { src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2', alt: 'Off-road tires' },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">Photo Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-lg transition duration-300 hover:shadow-2xl">
            <img src={photo.src} alt={photo.alt} className="w-full h-64 object-cover transition duration-300 transform hover:scale-105" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Photos