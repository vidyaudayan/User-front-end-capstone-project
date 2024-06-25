import React from 'react'
import { GiSparklingSabre } from "react-icons/gi";

const Label = () => {
  return (
    <div className=' w-full h-28 bg-black p-1 rounded-3xl mt-5 ring ring-blue-300 hover:ring-blue-500'>
     <h3 className='text-white text-3xl flex  items-center justify-center font-extrabold mt-8 animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'><span className='mr-1 text-3 text-yellow-500'><GiSparklingSabre />
     </span> Celebrate Shoppping <span className='ml-1  text-3 text-yellow-500'><GiSparklingSabre />
     </span> </h3>
    </div>
  )
}

export default Label