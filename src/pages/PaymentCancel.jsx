import React from 'react'
import cancel from '../assets/cancel.gif'
import { Link } from 'react-router-dom'

const PaymentCancel = () => {
  return (
    <div className='w-full bg-red-100  max-w-md mx-auto flex flex-col items-center justify-center mt-3'>
        <img className='bg-red-100' src={cancel} alt="" />
        <h3 className='font-bold text-lg p-3'>Payment Cancelled</h3>
        <Link to={'/cart'} className=' p-2 mb-4 border border-red-600 rounded-md font-semibold hover:bg-red-300'> Go to Cart</Link>
        
        </div>
    
  )
}

export default PaymentCancel