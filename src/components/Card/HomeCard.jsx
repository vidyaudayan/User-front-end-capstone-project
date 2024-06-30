import React from 'react';
import image1 from '../../assets/home-3.avif'
import image2 from '../../assets/home-2.avif'
import image3 from '../../assets/home-4.jpg'
import image4 from '../../assets/home-5.avif'
const products = [
  {
    id: 1,
    image: image2,
    name: 'Mitra',
    price: '50% OFF',
  },
  {
    id: 2,
    image: image1,
    name: 'Status',
    price: '40% OFF',
  },
  {
    id: 3,
    image: image3,
    name: 'Union',
    price: '25% OFF',
  },
  {
    id: 4,
    image: image4,
    name: 'Stars',
    price: '30% OFF',
  },
  
];

const HomeCard = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mb-4">
      {products.map(product => (
        <div key={product.id} className="relative bg-white shadow-md rounded-md overflow-hidden transition-transform transform hover:scale-105">
          <div className="w-full h-full overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h2 className="text-xl font-medium text-white truncate">{product.name}</h2>
            <p className="text-lg text-gray-300">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCard;

