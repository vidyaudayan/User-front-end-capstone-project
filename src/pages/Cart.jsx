import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import Context from '../context/context'
import axios from 'axios'
const Cart = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const context = useContext(Context)
    const loadingCart = new Array(context.cartTotalItems).fill(null)

    const fetchCart = async () => {
        try {
         setLoading(true)
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/cart`, { withCredentials: true });
            const dataResponse = response.data;
            // Handle the dataResponse as needed
            console.log("cart", dataResponse);
            setData(response?.data);
            //setLoading(false)

           
        } catch (error) {

            console.error('Error fetching user cart details:', error);
        }
    };
   
  
    console.log("cartdata", data)
    useEffect(() => {
fetchCart()
      }, [])


    return (
        <div className='container mx-auto lg:p-8'>
            <div className='text-center text-lg my-3'>
                {
                  !loading && (
                        <p className='bg-red-100 py-5'>No items in cart</p>
                    )
                }
            </div>

            < div className='flex flex-col lg:flex-row gap-6 lg:justify-between'>
                { /*view product*/}
                <div className='w-full max-w-5xl lg:p-8'>
                    {
                        loading ? (
                            loadingCart.map(item => {
                                return (
                                    <div className='w-full bg-red-100 h-36 my-2 border border-red-200 rounded animate-pulse' key={item}>

                                    </div>
                                )
                            })

                           

                        ) : (
                          <div></div>
                        )
                    }
                </div>
                
                {/*order summary*/}
               <div className='mt-5 lg:mt-0 w-96 max-w-sm p-9'>
               {
                    loading?(
                    <div className='h-36 bg-slate-100 border border-slate-300 animate-pulse'>
                   Total
                </div>
                    ):(
                        <div className='h-36 bg-slate-100'>
                   Total
                </div>
                    )
                }
               </div>

                
            </div>

        </div>
    )
}

export default Cart