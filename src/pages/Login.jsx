
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
  
//console.log(watch("example")) 

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