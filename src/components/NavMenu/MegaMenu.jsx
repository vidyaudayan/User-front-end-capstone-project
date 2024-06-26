import React from 'react';
import './MegaMenu.css';
import { Link } from 'react-router-dom';

const MegaMenu = () => {
  return (
    <nav className="megamenu">
      <ul className="megamenu__list">
        <li className="megamenu__item">
          <a href="#" className="megamenu__link dark:text-white  hover:font-semibold">Men</a>
          <div className="megamenu__dropdown">
            <div className="megamenu__column">
              <Link to={'/all-products'}><h3 className='font-semibold'>Clothing</h3></Link>
              <a href="#">T-Shirts</a>
              <a href="#">Shirts</a>
              <a href="#">Jeans</a>
              <a href="#">Jackets</a>
            </div>
            <div className="megamenu__column">
              <h3 className='font-semibold'>Shoes</h3>
              <a href="#">Casual Shoes</a>
              <a href="#">Formal Shoes</a>
              <a href="#">Sports Shoes</a>
            </div>
            <div className="megamenu__column">
              <h3 className='font-semibold'>Accessories</h3>
              <a href="#">Watches</a>
              <a href="#">Bags</a>
              <a href="#">Sunglasses</a>
            </div>

            <div className="megamenu__column">
              <h3 className='font-semibold'>Trending</h3>
              <a href="#">T-Shirts</a>
              <a href="#">Shirts</a>
              <a href="#">Jeans</a>
              <a href="#">Jackets</a>
            </div>

            <div className="megamenu__column">
              <h3 className='font-semibold'>Occation</h3>
              <a href="#">T-Shirts</a>
              <a href="#">Shirts</a>
              <a href="#">Jeans</a>
              <a href="#">Jackets</a>
            </div>
          </div>
        </li>
        <li className="megamenu__item">
          <a href="#" className="megamenu__link dark:text-white hover:font-semibold">Women</a>
          <div className="megamenu__dropdown">
            <div className="megamenu__column">
           <Link to={'/women-all-products'}><h3  className='font-semibold'>Clothing</h3></Link>   
              <a href="#">Dresses</a>
              <a href="#">Jeans</a>
              <a href="#">Skirts</a>
            </div>
            <div className="megamenu__column">
              <h3>Shoes</h3>
              <a href="#">Heels</a>
              <a href="#">Flats</a>
              <a href="#">Sneakers</a>
            </div>
            <div className="megamenu__column">
              <h3>Accessories</h3>
              <a href="#">Watches</a>
              <a href="#">Bags</a>
              <a href="#">Jewelry</a>
            </div>
            <div className="megamenu__column">
              <h3>Trending</h3>
              <a href="#">T-Shirts</a>
              <a href="#">Shirts</a>
              <a href="#">Jeans</a>
              <a href="#">Jackets</a>
            </div>

            <div className="megamenu__column">
              <h3>Occation</h3>
              <a href="#">T-Shirts</a>
              <a href="#">Shirts</a>
              <a href="#">Jeans</a>
              <a href="#">Jackets</a>
            </div>
          </div>
         
        </li>

        <li className="megamenu__item">
          <a href="#" className="megamenu__link dark:text-white hover:font-semibold">KIDS</a>
          <div className="megamenu__dropdown">
            <div className="megamenu__column">
             <Link to={'/kids-all-products'}><h3  className='font-semibold'>Clothing</h3></Link> 
              <a href="#">T-Shirts</a>
              <a href="#">Shirts</a>
              <a href="#">Jeans</a>
              <a href="#">Jackets</a>
            </div>
            <div className="megamenu__column">
              <h3>Shoes</h3>
              <a href="#">Casual Shoes</a>
              <a href="#">Formal Shoes</a>
              <a href="#">Sports Shoes</a>
            </div>
            <div className="megamenu__column">
              <h3>Accessories</h3>
              <a href="#">Watches</a>
              <a href="#">Bags</a>
              <a href="#">Sunglasses</a>
            </div>
            <div className="megamenu__column">
              <h3>Trending</h3>
              <a href="#">T-Shirts</a>
              <a href="#">Shirts</a>
              <a href="#">Jeans</a>
              <a href="#">Jackets</a>
            </div>

            <div className="megamenu__column">
              <h3>Occation</h3>
              <a href="#">T-Shirts</a>
              <a href="#">Shirts</a>
              <a href="#">Jeans</a>
              <a href="#">Jackets</a>
            </div>
          </div>
        </li>
      
      </ul>
    </nav>
  );
};

export default MegaMenu;
