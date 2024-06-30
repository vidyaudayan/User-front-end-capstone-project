import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import displayINRCurrency from '../../helpers/Currency'
import { addTocart } from '../../helpers/AddtoCart'
import Context from "../../context/context"
 
export const VerticalCardNew = ({ category, heading,product }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const loadingList = new Array(5).fill(null)
    const [products, setProducts] = useState([]);

    const {fetchUserAddToCart}= useContext(Context)
    
    const handleAddToCart = async(id)=>{
        await addTocart(id)
        fetchUserAddToCart()
     }
 


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



  
        return (
            <div className='p-2'>
                <h2 className='text-2xl font-semibold mb-2'>{heading}</h2>
                <div className='flex flex-wrap -mx-2'>
                    {products.map((product, index) => {
                        return (
                            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ' key={index}>
                                <div className='border rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300'>
                                    
                                    <Link  to={'/products/'+product?._id}>
                                    <img src={product.productPictures[0]} className='w-full h-full ' alt={product.title} />
                                    </Link>
                                   
                                    <div className='p-1 bg-white'>
                                        <h2 className='font-medium text-base text-black md:text-lg truncate'>{product?.title}</h2>
                                        <p className='capitalize text-slate-500 mt-1'>{product?.slug}</p>
                                        <div className='flex items-center gap-3 mt-2'>
                                            <p className='text-red-600 font-medium'>{displayINRCurrency(product?.sellingPrice)}</p>
                                            <p className='line-through text-slate-400'>{displayINRCurrency(product?.price)}</p>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                        <button className='mt-3 mb-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm' onClick={()=>handleAddToCart(product?._id)}>Add to Cart</button>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        
        
    )
}