import React from 'react';
import './MegaMenu.css';
import { Link } from 'react-router-dom';

const MegaMenu = () => {
  return (
    <nav className="megamenu ">
      <ul className="megamenu__list">
        <li className="megamenu__item">
          <a href="#" className="megamenu__link dark:text-white  hover:font-semibold">Men</a>
          <div className="megamenu__dropdown">
            <div className="megamenu__column">
              <Link to={'/men-all-products'}><h3 className='font-semibold text-black'>Clothing</h3></Link>
             
              <Link to="/product/tshirts">T-Shirts</Link>
              <Link to="/product/shirt">Shirts</Link>
              <Link to="/product/jeans">Jeans</Link>
              <Link to="/product/jackets">Jackets</Link>
             
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
           <Link to={'/women-all-products'}><h3  className='font-semibold text-black'>Clothing</h3></Link>   
           <Link to="/women-product/kurthi">Kurthi</Link>
           <Link to={'/women-product/womenjackets'}>Jackets</Link>
           <Link to="/women-product/dress">Dresses</Link>
            <Link to="/women-product/saree">Saree</Link>
            </div>
            <div className="megamenu__column">
              <h3  className='font-semibold'>Shoes</h3>
              <a href="#">Heels</a>
              <a href="#">Flats</a>
              <a href="#">Sneakers</a>
            </div>
            <div className="megamenu__column">
              <h3  className='font-semibold'>Accessories</h3>
              <a href="#">Watches</a>
              <a href="#">Bags</a>
              <a href="#">Jewelry</a>
            </div>
            <div className="megamenu__column">
              <h3  className='font-semibold'>Trending</h3>
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
          <a href="#" className="megamenu__link dark:text-white hover:font-semibold">KIDS</a>
          <div className="megamenu__dropdown">
            <div className="megamenu__column">
             <Link to={'/kids-all-products'}><h3  className='font-semibold text-black'>Clothing</h3></Link> 
             <Link to={'/kids-all-products'}> <h3 className='font-semibold text-slate-800'>Boys</h3></Link>
              <Link to="/kids-product/kidshirt">Shirts</Link>
              <Link to="/kids-product/kidtshirts">Tshirts</Link>
              <Link to="/kids-product/kidshorts">Shorts</Link>
              <Link to="/kids-product/kidjackets">Jackets</Link>
            </div>

            <div className="megamenu__column">
            <Link  to={'/kids-all-products'}><h2  className='font-semibold text-slate-800 '>Girls</h2></Link>
              <Link to="/kids-product/frock">Frocks</Link>
              <Link to="/kids-product/kiddresses">Dresses</Link>
              <Link to={'/kids-product/kidskirts'}>Skirts</Link>
            </div>
            <div className="megamenu__column">
              <h3  className='font-semibold mt-9'>Shoes</h3>
              <a href="#">Casual Shoes</a>
              <a href="#">Formal Shoes</a>
              <a href="#">Sports Shoes</a>
            </div>
            
            <div className="megamenu__column">
              <h3  className='font-semibold mt-9'>Trending</h3>
              <a href="#">T-Shirts</a>
              <a href="#">Shirts</a>
              <a href="#">Jeans</a>
              <a href="#">Jackets</a>
            </div>

            <div className="megamenu__column">
              <h3  className='font-semibold mt-9'>Occation</h3>
              <a href="#">3/4ths</a>
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
