import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './app/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  Root  from '../src/routes/root.jsx';
import ErrorPage from './error-page.jsx';
import Home from './pages/Home.jsx';
import LoginForm from './pages/Login.jsx';
import SignUpForm from './pages/Signup.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import AllProductsDisplay from './pages/AllProductsDisplay.jsx'
import WomenProductsDisplay from './pages/WomenProductsDisplay.jsx'
import KidsProductsDisplay from './pages/KidsProductsDisplay.jsx'
import Productdetails from './pages/Productdetails.jsx'
import Cart from './pages/CartItems.jsx'
import Order from './pages/Order.jsx'
import Search from './pages/Search.jsx'
import PaymentSuccess from './pages/PaymentSuccess.jsx'
import PaymentCancel from './pages/PaymentCancel.jsx'
import DisplayProducts from './pages/DisplayProducts.jsx'
import DisplayProductsWomen from './pages/DisplayProductsWomen.jsx'
import DisplayProductsKids from './pages/DisplayProductsKids.jsx'
import Profile from './pages/Profile.jsx'
import ViewOrder from './pages/ViewOrder.jsx'

const router = createBrowserRouter([
  {
   
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
   
    children: [
     
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/signup",
        element: <SignUpForm/>,
      },
      {
        path: "/login",
        element: <LoginForm/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword/>,
      },
      {
        path: "/men-all-products",
        element: <AllProductsDisplay/>,
      },
      {
        path: "/women-all-products",
        element: <WomenProductsDisplay/>,
      },
      {
        path: "/kids-all-products",
        element: <KidsProductsDisplay/>,
      },
      {
        path:'/products/:productId',
        element:<Productdetails/>
      },
      {
        path:'/product/:slug',
        element:<DisplayProducts/>
      },
      {
        path:'/women-product/:slug',
        element:<DisplayProductsWomen/>
      },
      {
        path:'/kids-product/:slug',
        element:<DisplayProductsKids/>
      },
      {
          path:"/cart",
          element:<Cart/>
      },
      {
        path:"/order",
        element:<Order/>
    },
    {
      path:"/success",
      element:<PaymentSuccess/>
    },
    {
      path:"/view-order",
      element:<ViewOrder/>
    },
   
    {
      path:"/cancel",
      element:<PaymentCancel/>
    },
      {
      path:"/search",
      element:<Search/>
      },
        
      
    ],
  },
]);


 
  
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
 <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>,
  </Provider>
)
