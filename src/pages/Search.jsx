import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import subCategory from '../helpers/subCategory'

import displayINRCurrency from '../helpers/Currency'
import { addTocart } from '../helpers/AddtoCart'
import Context from "../context/context"
const Search = () => {
  
    const query= useLocation()
    const searchTerm = query.search.slice(1)
    console.log("query", searchTerm)
    const [data,setData] = useState([])

const searchProduct= async()=>{


    try {
      //const params = new URLSearchParams({ search: encodedSearch })
     
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/search?search=${searchTerm}`);
       // const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/search${query.search}`)
        setData(response.data)
        console.log(response)
       
        
    } catch (error) {
        console.error("Error searching products ", error);
    }
}


const {fetchUserAddToCart}= useContext(Context)
    
    const handleAddToCart = async(id)=>{
        await addTocart(id)
        fetchUserAddToCart()
     }
 


useEffect(()=>{
searchProduct()
},[query])

  return (
    <div className='container mx-auto p-8 '>


      <div className='hidden lg:grid grid-cols-[250px,1fr] ml-10 '>
        <div className='bg-slate-100 p-2 min-h-[calc(100vh-120px)] overflow-y-scroll '>
{/*sort by*/}
          <div className=''>
            < h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Sort by</h3>
            <form className='text-sm flex flex-col gap-2 py-2'>
              <div className='flex items-center gap-3'>
                <input type="radio" name='sort' />
                <label htmlFor="">Price- Low to High</label>
              </div>

              <div className='flex items-center gap-3'>
                <input type="radio" name='sort' />
                <label htmlFor="">Price- High to Low</label>
              </div>
            </form>

          </div>

{/*filter by*/}
          <div >
            < h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Category</h3>
            <form className='text-sm flex flex-col gap-2 py-2'>
            {
                          subCategory.map((categoryName,index)=>{
                            return(
                              <div className='flex items-center gap-3'>
                                 <input type='checkbox' name={"subCategory"}  value={categoryName?.value} id={categoryName?.value}  />
                                 <label htmlFor={categoryName?.value}>{categoryName?.label}</label>
                              </div>
                            )
                          })
                        }
            </form>

          </div>
        </div>

        <div>
        <p className='text-lg font-semibold ml-5 '>Search Results : {data.length}</p>

        
        <div className='p-3'>
               
                <div className='flex flex-wrap -mx-2'>
                    {data.map((product, index) => {
                        return (
                            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2' key={index}>
                                <div className='border rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300'>
                                    
                                <Link  to={'/products/'+product?._id}>
                                    <img src={product.productPictures[0]} className='w-full h-full ' alt={product.title} />
                                  </Link>
                                   
                                    <div className='p-4 bg-white'>
                                        <h2 className='font-medium text-base md:text-lg truncate'>{product?.title}</h2>
                                        <p className='capitalize text-slate-500 mt-1'>{product?.slug}</p>
                                        <div className='flex items-center gap-3 mt-2'>
                                            <p className='text-red-600 font-medium'>{displayINRCurrency(product?.sellingPrice)}</p>
                                            <p className='line-through text-slate-400'>{displayINRCurrency(product?.price)}</p>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                        <button className='mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm' onClick={()=>handleAddToCart(product?._id)} >Add to Cart</button>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

        <div>




        </div>

      </div>
    </div>
  
  )
}

export default Search