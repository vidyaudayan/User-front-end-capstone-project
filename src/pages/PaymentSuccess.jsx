import React from 'react'
import success from '../assets/success.gif'
import { useEffect ,useContext} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Context from '../context/context';
const PaymentSuccess = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get('session_id');
  const {clearCart} = useContext(Context)
  console.log("sessionid",sessionId)
  useEffect(() => {
    const handleCheckoutSuccess = async () => {
      console.log("handleCheckoutSuccess called");
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/payment/paysuccess`,
          { sessionId },
          { withCredentials: true }
        );

        if (response.status === 200) {
          clearCart()
          console.log('Cart cleared successfully');
      
        
  
        }
      } catch (error) {
        console.error('Error during checkout success handling:', error);
      }
    };

   if (sessionId) {
    console.log("Calling handleCheckoutSuccess with sessionId:", sessionId);
      handleCheckoutSuccess();
    }
  }, [sessionId,clearCart]);

  return (
    <div className='w-full bg-green-100  max-w-md mx-auto flex flex-col items-center justify-center  mt-6'>
    <img src={success} alt="" />
    <h3 className='font-bold text-lg p-3'>Payment Successsful</h3>
    </div>
  )
}

export default PaymentSuccess