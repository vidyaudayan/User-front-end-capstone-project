import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Context from '../context/context';
import displayINRCurrency from '../helpers/Currency';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { IoLocation } from "react-icons/io5";
import {loadStripe} from '@stripe/stripe-js';

const Order = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [address, setAddress] = useState({
        houseName:'',
        street: '',
        city: '',
        state: '',
        pinCode: '',
       
    });

    const context = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        
        const fetchCart = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/cart`, { withCredentials: true });
                const dataResponse = response.data;
                setData(dataResponse.cart);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user cart details:', error);
                setLoading(false);
            }
        };
        fetchCart();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value
        }));
    };

    /*const handleSubmitOrder = async () => {
        const orderData = {
            products: data.products.map(item => ({
              product_id: item.product._id,
              quantity: item.quantity,
            })),
             address: {
                houseName: address.houseName,
                street: address.street,
                city: address.city,
                state: address.state,
                pinCode: address.pinCode,
                country: address.country,
              },
          };
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/order`, {
               orderData
            }, { withCredentials: true });

            if (response.data.success) {
                toast.success("Order placed successfully!");
                navigate('/payment'); 
            } else {
                toast.error("Failed to place order");
            }
        } catch (error) {
            console.error('Error placing order:', error);
            toast.error("Error placing order");
        }
    };*/
 
    const handleSubmitOrder = async () => {
        const totalPrice = data.products.reduce((acc, item) => acc + (item.product.sellingPrice * item.quantity) + 17, 0)
        console.log("order total",totalPrice)
        try {
          // Ensure data and address are valid before proceeding
          if (!data || !data.products || !address.houseName) {
            throw new Error('Missing required product or address information');
          }
      
          const orderData = {
            
            products: data.products.map(item => ({
              product_id: item.product._id,
              quantity: item.quantity,
              
            })),
            address: {
              houseName: address.houseName,
              street: address.street,
              city: address.city,
              state: address.state,
              pinCode: address.pinCode,
              country: address.country, // Assuming you have a country field
            }, totalPrice
          };
      
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/order`, orderData, { withCredentials: true });
        
            toast.success("Order placed successfully!");
             //navigate('/payment'); 
        
         
        } catch (error) {
          console.error('Error placing order:', error);
          toast.error("Error placing order");
        }
      };


  const handlePayment= async()=>{

    const stripePromise = await loadStripe(`${import.meta.env.VITE_STRIPE_API_KEY}`);
    const cartItems= data.products
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/payment/checkout`,cartItems, { withCredentials: true });
        const dataResponse = response.data;
        //setData(dataResponse.cart);
        //setLoading(false);

        console.log("Session:",response)
       if (dataResponse?.id){
        stripePromise.redirectToCheckout({sessionId:dataResponse.id})
       }
    
    } catch (error) {
        console.error('Error in payment', error);
        //setLoading(false);
    }
  }

    return (
        <div className='container mx-auto h-1/3 p-4 lg:p-8'>
        {loading ? (
            <div>Loading...</div>
        ) : (
            <div className='flex flex-col lg:flex-row gap-2'>
                <div className='w-full lg:w-1/2 p-2 bg-green-100 border border-red-100'>
              
               <div className='flex items-center justify-center'>
               <span className='text-center text-xl font-semibold p-3 dark:text-black'> <IoLocation /></span>
               <h3 className='text-center text-xl font-semibold p-3 rounded hover:bg-red-300 dark:text-black'>  Delivery Address</h3>
               <span className='text-center text-xl font-semibold p-3 dark:text-black'> <IoLocation /></span>
               </div>
                    
                    <form>
                        <div className='mb-4'>
                            <label className='block text-sm font-bold mb-2 dark:text-black' htmlFor='houseName'>House Name</label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
                                id='houseName'
                                type='text'
                                placeholder='houseName'
                                name='houseName'
                                value= {address.houseName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-bold mb-2 dark:text-black' htmlFor='street'>Street</label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='street'
                                type='text'
                                placeholder='Street'
                                name='street'
                                value={address.street}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-bold mb-2 dark:text-black' htmlFor='city'>City</label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='city'
                                type='text'
                                placeholder='City'
                                name='city'
                                value={address.city}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-bold mb-2 dark:text-black' htmlFor='state'>State</label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='state'
                                type='text'
                                placeholder='State'
                                name='state'
                                value={address.state}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-bold mb-2 dark:text-black' htmlFor='pinCode'>Pin Code</label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='pinCode'
                                type='text'
                                placeholder='Pin Code'
                                name='pinCode'
                                value={address.pinCode}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-bold mb-2 dark:text-black' htmlFor='country'>Country</label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='country'
                                type='text'
                                placeholder='Country'
                                name='country'
                                value={address.country}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button
                            className='bg-green-500 w-full p-2  text-white rounded-md hover:bg-green-700  '
                            type='button'
                            onClick={handleSubmitOrder}
                        >
                            Place Order
                        </button>
                    </form>
                </div>

                <div className='w-full lg:w-1/3 h-1/4 p-4 ml-16 bg-green-100 '>
                    <h3 className='text-center font-semibold p-3 dark:text-black'>Order Details</h3>
                    <div className='border p-2 hover:bg-green-300'>
                        <p className='text-sm font-md pt-1 dark:text-black'>Total Items: {context.cartTotalItems}</p>
                        <p className='text-sm font-md pt-1 dark:text-black'>Platform fee: {displayINRCurrency(0)} <span className='text-green-500 pl-1'>Free</span></p>
                        <p className='text-sm font-md pt-1 dark:text-black'>Delivery charge: {displayINRCurrency(17)}</p>
                        <p className='text-sm font-bold pt-1 dark:text-black'>Total Price: {displayINRCurrency(data && data.products.reduce((acc, item) => acc + (item.product.sellingPrice * item.quantity) + 17, 0))}</p>
                    </div>
                    <div>
                        <button className='w-full p-2 text-white bg-red-500 hover:bg-red-700' onClick={handlePayment}>Proceed to Payment</button>
                    </div>
                    
                </div>
                
            </div>
        )}
    </div>
    )
};

export default Order;
