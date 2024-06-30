import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Context from '../context/context.jsx'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import { useEffect, createContext } from 'react'
import { useDispatch } from 'react-redux'
import { setUserDetails } from '../features/user/userSlice.js'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import Theme from '../components/Theme.jsx'
export const cartContext = createContext();


function Root() {
  const [cartTotalItems, setCartTotalItems] = useState(0);

  const dispatch= useDispatch()
  
const fetchUserDetails = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {withCredentials:true});
    const dataResponse = response.data;

    console.log(dataResponse);
   
    const dataApi = response.data;
    dispatch(setUserDetails(dataApi))
   /* if (dataApi.success) {
      dispatch(setUserDetails(dataApi));
    }*/
  } catch (error) {
    
    console.error('Error fetching user details:', error);
  }
};


const fetchUserAddToCart = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/cart`, {withCredentials:true});
    const dataResponse = response.data;

    console.log("cart",dataResponse);
    setCartTotalItems(dataResponse?.totalItems);
   
   
    const dataApi = response.data;
   // dispatch(setUserDetails(dataApi))
   /* if (dataApi.success) {
      dispatch(setUserDetails(dataApi));
    }*/
  } catch (error) {
    
    console.error('Error fetching user cart details:', error);
  }
};

const clearCart = async () => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/cart/clear-cart`, {}, { withCredentials: true });
    if (response.status === 200) {
      setCartTotalItems(0);
    }
  } catch (error) {
    console.error('Error clearing cart:', error);
  }
};



useEffect(()=>{

  fetchUserDetails()
fetchUserAddToCart()
},[])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
       <Context.Provider value={{
          fetchUserDetails, 
       cartTotalItems,
       fetchUserAddToCart,clearCart
      }}>
      <ToastContainer  position='top-center'/>
        <Header/>
        <Theme/>
        <main className='min-h-[calc(100vh-120px)] pt-24'>
       <Breadcrumbs/>
        <Outlet/>
        </main>
       <Footer/>
        </Context.Provider>
    </div>
  )
}

export default Root