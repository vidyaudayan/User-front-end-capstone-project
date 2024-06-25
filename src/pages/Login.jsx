/*import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import user from '../assets/user icon.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [data,setData] = useState({
        email : "",
        password : ""
    })
    const handleSubmit = async(e) =>{
        e.preventDefault()

        }
        const handleOnChange = (e) =>{
            const { name , value } = e.target
    
            setData((preve)=>{
                return{
                    ...preve,
                    [name] : value
                }
            })
        }
       

    return (
        <section id='login'>
            <div className='mx-auto container p-4 '>

                <div className='bg-white p-5 w-full max-w-sm mx-auto border border-black'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={user} alt='login icons' />
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='email'
                                    placeholder='enter email'
                                    name='email'
                                  value={data.email}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>

                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='enter password'
                                   value={data.password}
                                    name='password'
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
                                <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash />
                                            )
                                                :
                                                (
                                                    <FaEye />
                                                )
                                        }
                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                                Forgot password ?
                            </Link>
                        </div>

                        <button className=  'hover:bg-red-700 bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>

                    </form>

                    <p className='my-5'>Don't have account ? <Link to={"/signup"} className=' text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
                    </div>


                     </div>
                </section >
                )
}

                export default LoginForm*/

import { useForm } from "react-hook-form"
import axios from "axios"
import { useContext} from "react"
import { useNavigate } from "react-router-dom"
import Context from "../context/context"
import { toast } from "react-toastify"


export default function LoginForm() {

    const navigate = useNavigate()
    const {fetchUserDetails,fetchUserAddToCart}= useContext(Context)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/signin`, data, {
        withCredentials: true
      });
      const { theme } = response.data;
      document.documentElement.classList.add(theme);
      localStorage.setItem('theme', theme);
      console.log(response);
      const dataApi = response.data;
  
      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate('/');
        fetchUserDetails(); 
        fetchUserAddToCart()
      } 
      
    } catch (error) {
      console.error('Error signing in:', error);
      toast.error('An error occurred during sign-in.');
    }
  };
  
//console.log(watch("example")) // watch input value by passing the name of it

return (
    <form className="w-full max-w-md p-8 bg-white shadow-md rounded-lg mx-auto my-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input 
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email", {required: true, maxLength: 40})}
            />
            {errors.email?.type === "required" && <span className="text-xs text-red-500">Email is required</span>}
            {errors.email?.type === "maxLength" && <span className="text-xs text-red-500">Email cannot exceed 40 characters</span>}
        </div>
        
        <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input 
                type="password"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("password", {required: true})}
            />
            {errors.password?.type === "required" && <span className="text-xs text-red-500">Password is required</span>}
        </div>
      
        <div className="flex justify-center mt-4">
            <input 
                className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-500 cursor-pointer transition duration-300"
                type="submit"
                value="Login"
            />
        </div>
    </form>
)

}