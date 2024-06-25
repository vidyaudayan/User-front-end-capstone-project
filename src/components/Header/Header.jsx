import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { GrSearch } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserDetails } from '../../features/user/userSlice';
import axios from 'axios';
import MegaMenu from '../NavMenu/MegaMenu';
import Context from '../../context/context';
import Theme from '../Theme';


const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(false)
  const user = useSelector(state => state?.user?.user)
  console.log("user header", user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const context = useContext(Context)


  const handleLogout = async () => {

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/logout`, {}, {
        withCredentials: true
      });

      const data = response.data;
      // console.log(data)



      if (data && data.success) {
        toast.success(data.message);
        dispatch(setUserDetails(null));
        navigate('/');


      }
    } catch (error) {
      toast.error(data.message)
    }
  };

 const handleSearch = (e)=>{
const {value}= e.target
if(value){
navigate(`/search?q=${value}`)
}else{
  navigate('/search')
}
 }

  return (
    <header className='h-24 shadow-md w-full fixed mb-8 z-40 dark:bg-black md:bg-slate-200 '>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>

        <div className='ml-6' >
          <Link to='/'> <img className='w-60 ' src={logo} alt="" /></Link>
        </div>
        <div>

          <MegaMenu />
        </div>

 

        <div className='hidden lg:flex items-center mb-6 justify-between border border-slate-300 rounded-full px-4 bg-white shadow-md'>
          <input className='w-full outline-none px-2 py-1 text-gray-700' type="text" placeholder='Search your products...' onChange={handleSearch} />
          <div className='text-xl min-w-[50px] h-10 bg-white flex items-center justify-center rounded-full text-black cursor-pointer'>
            <GrSearch />
          </div>
        </div>


        <div className='flex  items-center gap-4'>

          <div className='flex  justify-center'>
            {
              user?.firstName ? (
                <h4 className='text-xl capitalize'>{user.firstName}</h4>
              ) : ("")
            }
          </div>


          <div className='flex flex-col items-center  justify-center  '>
            <div className='text-2xl cursor-pointer' onClick={() => setMenuDisplay(preve => !preve)}>
              <FaUserAlt className='' /></div>
            {
              menuDisplay && (
                <div className='absolute mt-8 bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded  '>
                  <nav>
                    <Link className='hover:bg-slate-100 p-2 hidden md:block' onClick={() => setMenuDisplay(preve => !preve)} ></Link>
                  </nav>
                </div>
              )
            }


          </div>



          <Link to={'/cart'} className='text-2xl relative' >
            <span> <FaShoppingBag /></span>
            {
              user?.firstName ? (

                <div className=' bg-fuchsia-600 text-white w-5 h-5 rounded-full p-2 flex items-center justify-center absolute -top-2 -right-3'>
                  <p className='text-sm'>{context.cartTotalItems}</p></div>
              ) : ("")
            }



          </Link>
          <div>
          <Theme/>
        </div>
        </div>

      
        <div>
          {
            user?.id ? (
              <button onClick={handleLogout} className=' bg-red-600 text-white h-10 rounded w-20 p-2 mr-8 ml-2 hover:bg-red-700 underline hover:underline-offset-2'>Sign Out</button>
            ) : (
              <Link to='/signup' className=' bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 underline hover:underline-offset-2'>Signup/Login</Link>
            )
          }

        </div>






      </div>
    </header>
  )
}

export default Header