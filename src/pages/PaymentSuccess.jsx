import React from 'react'
import success from '../assets/success.gif'
const PaymentSuccess = () => {
  return (
    <div className='w-full bg-green-100  max-w-md mx-auto flex flex-col items-center justify-center  mt-6'>
    <img src={success} alt="" />
    <h3 className='font-bold text-lg p-3'>Payment Successsful</h3>
    </div>
  )
}

export default PaymentSuccess