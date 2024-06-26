import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

import displayINRCurrency from '../../helpers/Currency'

export const Verticalcard = ({ category, heading }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const loadingList = new Array(5).fill(null)
  const [products, setProducts] = useState([]);

  const [scroll, setScroll] = useState(0)
  const scrollElement = useRef()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/categories/category-products`, { category });
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]);

  const scrollRight = () => {
    scrollElement.current.scrollLeft += 300
  }
  const scrollLeft = () => {
    scrollElement.current.scrollLeft -= 300
  }

  return (
    <div className='container mx-auto px-4 my-3 relative'>
      <h2 className='text-2xl font-semibold py-4'>{heading}</h2>

      <div className='flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none transition-all' ref={scrollElement}>

        <button className='bg-white dark:text-black shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' onClick={scrollLeft}><FaAngleLeft /></button>
        <button className='bg-white dark:text-black shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' onClick={scrollRight}><FaAngleRight /></button>

        {
          products.map((product, index) => {
            return (
              <div className='w-full min-w-[300px] md:min-w-[340px] max-w-[300px] md:max-w-[320px]  bg-white rounded-sm shadow-md hover:bg-slate-200 ' key={index}>
                <div className='bg-slate-200 h-32 p-2 min-w-[140px] md:min-w-[145px] flex gap-1 lg:gap-6 lg:ml-1'>
                  <img src={product.productPictures[0]} className='object-cover   hover:scale-110 transition-all' />
                  <img src={product.productPictures[1]} className='object-cover   hover:scale-110 transition-all' />
                  <img src={product.productPictures[2]} className='object-cover   hover:scale-110 transition-all' />
                </div>
                <div className='px-2 py-1 grid'>
                  <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1'>{product?.title}</h2>
                  <p className='capitalize text-slate-500'>{product?.slug}</p>

                  <div className='flex gap-3'>
                    < p className='text-red-600 font-medium' >{displayINRCurrency(product?.sellingPrice)}</p>
                    <p className='line-through text-slate-400'>{displayINRCurrency(product?.price)}</p>
                  </div>
                  <button className='bg-red-500 hover:bg-red-600 text-white p-1 px-2 rounded-full text-sm py-2 mt-2 mb-2 '>Add to Cart</button>
                </div>
                <div>

                </div>
              </div>
            )
          })
        }
      </div>




    </div>
  )
}

