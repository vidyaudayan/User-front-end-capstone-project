// Footer.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-4 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex  lg:flex-row gap-2 justify-evenly items-center">
          <div className=" lg:mb-0">
            <h3 className="text-lg font-bold">Glamazone</h3>
            <p className="text-sm">© 2024 Glamazone</p>
            <p className="text-sm"> All rights reserved.</p>
          </div>
          <div className="flex flex-col m-1">
          <h3 className='font-medium'>Glamazone</h3>
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms of Service</a>
          </div>
          <div className="flex flex-col m-1">
        
            <a href="/about" className="hover:underline font-medium">Join Our team</a>
            <a href="/contact" className="hover:underline">Cancellation</a>
            <a href="/privacy" className="hover:underline">Delivery</a>
            <a href="/terms" className="hover:underline">Brands</a>
            <a href="/terms" className="hover:underline">Coupon</a>
          </div>
          <div className="flex flex-col ">
            <h3 className='m-1 font-medium'>Shop By</h3>
            <a href="/" className="hover:underline">Men</a>
            <a href="/" className="hover:underline">Women</a>
            <a href="/" className="hover:underline">Kids</a>
            <a href="/" className="hover:underline">New Arrivals</a>
          </div>
          <div className="flex flex-col ">
            <h3 className='m-1 font-medium'>Help</h3>
            <a href="/" className="hover:underline">Track Your Order</a>
            <a href='/' className="hover:underline">Returns</a>
            <a href="/" className="hover:underline">Payments</a>
            <a href="/" className="hover:underline">Customer Care</a>
          </div>
          <div className="mt-4 lg:mt-0 flex space-x-4">
            <h3 className='m-1 font-medium'>Follow Us</h3>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
