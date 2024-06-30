import React from 'react';
import { Link } from 'react-router-dom';
import displayINRCurrency from '../../helpers/Currency';
import { addTocart } from '../../helpers/AddtoCart'
import Context from "../../context/context"
 import { useContext } from 'react';
export const FilterCard = ({ product, onAddToCart }) => {

    const {fetchUserAddToCart}= useContext(Context)
    
    const handleAddToCart = async(id)=>{
        await addTocart(id)
        fetchUserAddToCart()
     }
 
    return (
        <div className='w-full   p-2'>
            <div className='border rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300'>
                <Link to={'/products/' + product._id}>
                    <img src={product.productPictures[0]} className='w-full h-full' alt={product.title} />
                </Link>
                <div className='p-4 bg-white'>
                    <h2 className='font-medium text-base md:text-lg truncate dark:text-black'>{product.title}</h2>
                    <p className='capitalize text-slate-500 mt-1'>{product.slug}</p>
                    <div className='flex items-center gap-3 mt-2'>
                        <p className='text-red-600 font-medium'>{displayINRCurrency(product.sellingPrice)}</p>
                        <p className='line-through text-slate-400'>{displayINRCurrency(product.price)}</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm' onClick={()=>handleAddToCart(product?._id)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
