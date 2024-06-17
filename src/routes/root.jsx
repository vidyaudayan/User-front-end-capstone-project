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

export const cartContext = createContext();


function Root() {
  const [cartTotalItems, setCartTotalItems] = useState(0);

  const dispatch= useDispatch()
  
const fetchUserDetails = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {withCredentials:true});
    const dataResponse = response.data;
    // Handle the dataResponse as needed
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
    // Handle the dataResponse as needed
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


useEffect(()=>{
  /**user Details */
  fetchUserDetails()
fetchUserAddToCart()
},[])

  return (
    <div>
       <Context.Provider value={{
          fetchUserDetails, // user detail fetch 
       cartTotalItems,
       fetchUserAddToCart
      }}>
      <ToastContainer  position='top-center'/>
        <Header/>
        <main className='min-h-[calc(100vh-120px)] pt-24'>
        <Outlet/>
        </main>
      
        </Context.Provider>
    </div>
  )
}

export default Root