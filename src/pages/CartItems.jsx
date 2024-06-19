import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Context from '../context/context';
import { MdAdd } from "react-icons/md";
import { LuMinus } from "react-icons/lu";
import displayINRCurrency from '../helpers/Currency';
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import { useParams } from 'react-router-dom';

const Cart = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const context = useContext(Context);
    const [totalItems, setCartTotalItems] = useState()
    const [cartItems, setCartItems] = useState([]);


    const params = useParams()
    console.log("product id", params)
    const { productId } = params;


    const fetchCart = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/cart`, { withCredentials: true });
            const dataResponse = response.data;
            console.log("cart", dataResponse);
            setData(dataResponse.cart);
            setCartTotalItems(dataResponse.totalItems);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching user cart details:', error);
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchCart();
    }, []);



    const updateCartLocally = (productId, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.product._id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };


    const updateQuantity = async (id, quantity) => {
        const productId = id
        console.log("id", id)
        try {
            const response = await axios.put(
                `${import.meta.env.VITE_BASE_URL}/cart/update`,
                { productId, quantity }, // Ensure the product ID is sent as an object
                { withCredentials: true }
            );
            console.log(response);
            updateCartLocally(productId, quantity);
            toast.success("Product quantity updated");
            return response
        } catch (error) {
            console.error("Error adding product to cart:", error);
            toast.error("Failed to update quantity in cart");
        }
    }
    const CartItem = ({ productItem, handleDeleteProduct }) => {
        const handleDeleteClick = () => {
            handleDeleteProduct(productItem.product._id);
        };
    }
    const calculateDiscount = (originalPrice, sellingPrice) => {
        if (!originalPrice || !sellingPrice) return 0;
        const discount = ((originalPrice - sellingPrice) / originalPrice) * 100;
        return discount.toFixed(2); // Keeping 2 decimal places
    };

    //  const discountPercentage = calculateDiscount(cartItems.sellingPrice, cartItems.product.price);

    const handleDeleteProduct = async (productId) => {
        if (window.confirm("Are you sure you want to delete this product from the cart?")) {
            console.log("Deleting product with ID:", productId);
            try {
                const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/cart/delete/${productId}`, {
                    withCredentials: true
                });

                const data = response.data;
                console.log(data)
                toast.success("Product deleted");
                window.location.reload();
                if (data && data.success) {
                    toast.success("Product deleted");
                    setCartItems((prevItems) => prevItems.filter((item) => item.product._id !== productId));
                }
            } catch (error) {
                console.log(error)
                toast.error("error in delete product")
            }
        }
    };
    return (
        <div className='container mx-auto lg:p-8'>
            <div className='text-center text-lg my-3'>
                {
                    !loading && (!data || data.products.length === 0) && (
                        <p className='bg-red-100 py-5'>No items in cart</p>
                    )
                }
            </div>

            <div className='flex flex-col lg:flex-row gap-6 lg:justify-between'>
                {/* View products */}
                <div className='w-full max-w-4xl lg:p-8'>
                    {
                        loading ? (
                            new Array(context.cartTotalItems).fill(null).map((item, index) => {
                                return (
                                    <div className='w-full bg-red-100 h-36 my-2 border border-red-200 rounded animate-pulse' key={index}></div>
                                );
                            })
                        ) : (
                            data && data.products.map((productItem) => {

                                return (
                                    <div className='w-full bg-red-100 h-36 my-2 border border-red-200 rounded flex items-center hover:bg-red-300 ' key={productItem.product._id}>
                                        <div className='w- h-full p-4'>
                                            <img className='w-full h-full object-scale-down mix-blend-multiply' src={productItem?.product?.productPictures[0]} alt={productItem.product.title} />
                                        </div>



                                        <div className='  relative'>


                                            {/* delete product */}
                                            <div className=''>
                                                <div className='absolute left-80 w-72  text-xl flex flex-col items-center  gap-1 lg:ml-36'>

                                                    <div className='flex flex-col items-center pr-8 gap-1'>


                                                        <p className='text-slate-700 text-sm '>MRP<span className='line-through font-normal px-1'>{displayINRCurrency(productItem.product.price)}</span></p>
                                                        <p className='text-green-500 font-normal text-sm '>  Discounted Price </p>
                                                        <p className='text-red-600 font-bold text-sm'>{displayINRCurrency(productItem.product.sellingPrice)}</p>
                                                    </div>


                                                    <div className='cursor-pointer w-16 p-2 text-xl flex items-center hover:text-2xl hover:text-red-900'>
                                                        <MdDelete onClick={() => handleDeleteProduct(productItem.product._id)} />
                                                    </div>
                                                </div> 

                                            </div>



                                            <h3 className='lg:text-md text:sm text-ellipsis line-clamp-1 font-semibold'>{productItem.product.title}</h3>

                                            <p className='text-sm'>Quantity: {productItem.quantity}</p>
                                            <p className='text-sm'>Price: {displayINRCurrency(productItem.product.sellingPrice)}</p>

                                           

                                            <div className='flex items-center gap-3 mt-1'>
                                                <button
                                                    className='bg-blue-400 hover:bg-blue-600 h-6 w-6 rounded flex items-center justify-center cursor-pointer'
                                                    onClick={() => {
                                                        if (productItem.quantity <= 1) {
                                                          handleDeleteProduct(productItem.product._id);
                                                        } else {
                                                          updateQuantity(productItem.product._id, productItem.quantity - 1);
                                                        }
                                                      }}
                                                   
                                                >
                                                    <LuMinus />
                                                </button>

                                                <p className='text-sm font-medium'>{productItem.quantity}</p>

                                                <button
                                                    className='bg-blue-400 hover:bg-blue-600 h-6 w-6 rounded flex items-center justify-center cursor-pointer'
                                                    onClick={() => updateQuantity(productItem.product._id, productItem.quantity + 1)}
                                                >
                                                    <MdAdd />
                                                </button>
                                            </div>
                                        </div>


                                    </div>
                                );
                            })
                        )
                    }
                </div>

                {/* Order summary */}
                <div className='mt-5 lg:mr-36 lg:mt-0 w-[400px] max-w-full p-9'>
                    {
                        loading ? (
                            <div className='h-72 bg-blue-200 border border-slate-300 animate-pulse'>
                                <h3>Order Summary</h3>
                            </div>
                        ) : (
                            <div className='h-72 p-6 bg-green-100 flex flex-col border border-red-100'>
                               
                                <h3 className='text-center font-semibold p-3 bg-red-100 hover:bg-red-300'>Order Summary</h3>
                                <div className='border h-52 border-red-200 p-2 hover:bg-green-300  '>
                                <p className='text-sm font-md pt-1'>Total Items: {context.cartTotalItems}</p>
                                <p className='text-sm font-md pt-1'>Delivery charge: {displayINRCurrency(0)} <span className='text-green-500 pl-1'>Free</span></p>
                                <p className='text-sm font-md pt-1'>Platform fee: {displayINRCurrency(17)}</p>
                                
                                <p className='text-sm font-bold pt-1'>Total Price: {displayINRCurrency(data && data.products.reduce((acc, item) => acc + (item.product.sellingPrice * item.quantity)+17, 0))}</p>
                                <button className='bg-green-700 w-full p-2 mt-6 text-white rounded-md hover:bg-white hover:text-green-900'>Proceed to shipping</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;
