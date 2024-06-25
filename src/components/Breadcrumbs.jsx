
/*import React, {useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const [productTitle, setProductTitle] = useState('');

  const fetchProductsDetails = async (productId) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/${productId}`);
        setProductTitle(response.data.title)
        

    } catch (error) {
        console.error("Error fetching product title", error);
    }
};
useEffect(()=>{
fetchProductsDetails()

   const productIndex = pathnames.findIndex((pathname) => pathname === 'products');
   if (productIndex !== -1 && pathnames[productIndex + 1]) {
     const productId = pathnames[productIndex + 1];
     fetchProductsDetails(productId);
   } else {
     setProductTitle('');
   }
},[location.pathname])

  if (location.pathname === '/') {
    return null;
  }
  const pathLabels = {
    '': 'Home',
    'signup': 'Sign Up',
    'login': 'Login',
    'forgot-password': 'Forgot Password',
    'all-products': 'All Products',
    'women-all-products': 'Women\'s Products',
    'kids-all-products': 'Kids\' Products',
    'cart': 'Cart',
    'order': 'Order',
    'success': 'Payment Success',
    'cancel': 'Payment Cancel',
    'search': 'Search',
    'get-users': 'All Users',
    'get-products': 'All Products'
  };

  return (
    <nav>
      <ol className="breadcrumb dark:text-white">
      <li className='dark:text-white'>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          let breadcrumbLabel = pathLabels[value] || value;

          if (index === pathnames.findIndex((pathname) => pathname === 'products') + 1) {
            breadcrumbLabel = productTitle;
          }


          return (
            <li className='dark:text-white' key={to}>
              <Link to={to}>{breadcrumbLabel}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;*/


// src/components/Breadcrumbs.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav>
      <ol className="breadcrumb">
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to}>
              <Link to={to}>{value}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
