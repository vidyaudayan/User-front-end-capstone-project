
{/*import { useForm } from "react-hook-form"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const navigate= useNavigate()
  const onSubmit =async (data) => {
 //axios.post('http://localhost:3000/api/v1/user/signup', data, {withCredentials:true})
 axios.post(`${import.meta.env.VITE_BASE_URL}/user/signup`, data, {withCredentials:true})
 .then(res=>{
  console.log(res)
  toast.success('User signed up successfully!');
  navigate('/login')
 })
 .catch(error=>{
    if (error.response && error.response.status === 409) {
        // Assuming 409 Conflict is the status code for already registered email
        toast.error('User already exists. Please use a different email.');
      } else {
        toast.error('Signup failed. Please try again.');
      }
      console.log(error);
      navigate('/signup');
 })

  }

//console.log(watch("example")) // watch input value by passing the name of it

  return (
   

    <form className="w-full max-w-2xl py-8 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} >
         <div className="flex flex-col gap-2">
            <label htmlFor="name">First Name</label>
            <input className="border border-slate-400" {...register("firstName", {required:true, maxLength:40})} />
             {errors.firstName?.type==="required" && <span className="text-xs text-red-400">First Name is required</span>}
             {errors.firstName?.type==="maxLength" && <span className="text-xs text-red-400"> Name cannot exceed 40 characters</span>}
        </div>

        <div className="flex flex-col gap-2">
            <label htmlFor="name">Last Name</label>
            <input className="border border-slate-400" {...register("lastName", {required:true, maxLength:40})} />
             {errors.lastName?.type==="required" && <span className="text-xs text-red-400">First Name is required</span>}
             {errors.lastName?.type==="maxLength" && <span className="text-xs text-red-400"> Name cannot exceed 40 characters</span>}
        </div>
        
        <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input className="border border-slate-400" {...register("email", {required:true, maxLength:40})} />
             {errors.email?.type==="required" && <span className="text-xs text-red-400"> Email is required</span>}
             {errors.email?.type==="maxLength" && <span className="text-xs text-red-400"> Email cannot exceed 40 characters</span>}
        </div>
        <div className="flex flex-col gap-2 ">
            <label htmlFor="password">Password</label>
            <input type="password" className="border border-slate-400"  {...register("password" , {required:true})} />
            {errors.password?.type==="required" && <span className="text-xs text-red-400"> Password is required</span>}
        </div>
      
        <div className="flex justify-center">
        <input className="bg-green-500 px-4 h-10 text-white hover:bg-green-400 cursor-pointer" type="submit" value="Signup"/>
   
        </div>

        <div className="flex gap-2">
        <p>You already have an account?</p>
        <Link to={'/login'}> <span className="text-sm text-red-600 hover:underline">Login</span> </Link>
        </div>


    </form>
  )
}*/}




import { useForm } from "react-hook-form"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const navigate= useNavigate()
  const onSubmit =async (data) => {
 
 axios.post(`${import.meta.env.VITE_BASE_URL}/user/signup`, data, {withCredentials:true})
 .then(res=>{
  console.log(res)
  toast.success('User signed up successfully!');
  navigate('/login')
 })
 .catch(error=>{
    if (error.response && error.response.status === 409) {
        
        toast.error('User already exists. Please use a different email.');
      } else {
        toast.error('Signup failed. Please try again.');
      }
      console.log(error);
      navigate('/signup');
 })

  }

//console.log(watch("example")) // watch input value by passing the name of it
return (
    <form className="w-full max-w-2xl p-8 bg-white shadow-md rounded-lg mx-auto my-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
            <input 
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("firstName", {required: true, maxLength: 40})}
            />
            {errors.firstName?.type === "required" && <span className="text-xs text-red-500">First Name is required</span>}
            {errors.firstName?.type === "maxLength" && <span className="text-xs text-red-500">Name cannot exceed 40 characters</span>}
        </div>

        <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
            <input 
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("lastName", {required: true, maxLength: 40})}
            />
            {errors.lastName?.type === "required" && <span className="text-xs text-red-500">Last Name is required</span>}
            {errors.lastName?.type === "maxLength" && <span className="text-xs text-red-500">Name cannot exceed 40 characters</span>}
        </div>

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
                value="Signup"
            />
        </div>

        <div className="flex gap-2 mt-4 justify-center">
            <p className="text-sm text-gray-600">Already have an account?</p>
            <Link to={'/login'}>
                <span className="text-sm text-blue-600 hover:underline">Login</span>
            </Link>
        </div>
    </form>
)
}