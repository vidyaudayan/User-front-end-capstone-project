import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import displayINRCurrency from '../helpers/Currency';
import ReviewForm from './Review';
import { toast } from 'react-toastify';
import { useContext } from 'react'
import { addTocart } from '../helpers/AddtoCart'
import Context from "../context/context"

import Horizontalcard from '../components/Card/Horizontalcard';
const Productdetails = () => {
    const [loading, setLoading] = useState(true)
    const productImageListLoading = new Array(4).fill(null)
    const [activeImage, setActiveImage]= useState('')

    const [showReviewForm, setShowReviewForm] = useState(false);
    const [reviews, setReviews] = useState([]);
    const {fetchUserAddToCart}= useContext(Context)
    
    const handleAddToCart = async(id)=>{
        await addTocart(id)
        fetchUserAddToCart()
     }
    const [data, setData] = useState({
        title: "",
        slug: "",
        category: "",
        productPictures: [],
        description: "",
        price: "",
        sellingPrice: ""
    })
    const params = useParams()
    console.log("product id", params)
    const { productId } = params;

    const fetchProductsDetails = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/${productId}`);
            setData(response.data)
            console.log(response)
            setLoading(false)
            setActiveImage(response?.data?.productPictures[0])
        } catch (error) {
            console.error("Error fetching product details:", error);
           
        }

    };

    const fetchReviews = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/review/product/${productId}`);
          setReviews(response.data);
        } catch (error) {
          console.error('Error fetching reviews:', error);
          toast.error('An error occurred in review');
        }
      };

    useEffect(() => {
        fetchProductsDetails();
        fetchReviews();
    }, [productId])

    const handleImageChange=(img)=>{
        setActiveImage(img)
    }
    const calculateDiscount = (originalPrice, sellingPrice) => {
        if (!originalPrice || !sellingPrice) return 0;
        const discount = ((originalPrice - sellingPrice) / originalPrice) * 100;
        return discount.toFixed(2); 
    };

    const discountPercentage = calculateDiscount(data.price, data.sellingPrice);

    const descriptionItems = data.description.split(',').map((item, index) => item.trim());

    const handleReviewSubmitted = (newReview) => {
        setReviews([...reviews, newReview]);
      };


    return (
        <div className='container mx-auto p-8 ml-8 mt-6'>

            <div className=' min-h-[200px] flex flex-col lg:flex-row gap-3 lg:gap-32'>

                {/*product image*/}
                <div className='h-96 flex flex-col lg:flex-row-reverse gap-5 lg:gap-36'>

                    <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200'>
                      <img className='h-full w-full ' src={activeImage} alt="" />
                    </div>
                    <div className='h-full'>
                        {
                            loading ? (
                                <div className='flex gap-2 lg:flex-col h-full overflow-scroll scrollbar-none'>
                                    {
                                        productImageListLoading.map(img => {
                                            return (
                                                <div className='w-20 h-20 bg-slate-200 animate-pulse rounded'>

                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            ) : (

                                <div className='flex gap-2 lg:flex-col h-full overflow-scroll scrollbar-none lg:mt-6'>
                                    {
                                        data?.productPictures?.map((img, index) => {
                                            return (
                                                <div className='w-20 h-20 bg-slate-300 rounded p-1' key={index}>
                                                    < img className='w-full h-full  mix-blend-multiply cursor-pointer' onMouseEnter={()=>handleImageChange(img)}   onClick={()=>handleImageChange(img)} src={img} alt="" />
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            )
                        }
                    </div>
                </div>

                {/*product details*/}
                <div className='flex flex-col items-center gap-1 ml-6 lg:ml-12'>
                      <h2 className='text-xl lg:text-2xl font-medium'>{data?.title}</h2>
                        <p className='text-slate-400 font-medium'>{data.slug}</p>
                <div className='text-blue-500 flex items-center justify-center gap-1'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />

                </div>

                <div className='flex flex-col items-center gap-2 my-1'>
                
                    <p className='text-red-500 font-medium'>{ displayINRCurrency(data.sellingPrice)}</p>
                    <p className='text-slate-500 '>MRP<span className='line-through font-normal px-1'>{ displayINRCurrency(data.price)}</span></p>
                    <p className='text-green-500 font-medium'>
                    {discountPercentage > 0 ? `( ${discountPercentage}% OFF )` : 'No discount available'}</p>
                </div>

                <div className='flex flex-col items-center gap-3 my-2'>
                    <button className='min-w-[120px] border-2 border-orange-600 px-3 py-1 font-medium rounded hover:bg-orange-600 hover:text-white'> Buy</button>
                    <button className='min-w-[120px] border-2 border-red-600 px-3 py-1 font-medium  rounded hover:bg-red-500 hover:text-white' onClick={()=>handleAddToCart(data?._id)}>Add To Cart</button>
                </div>
                 

                  <div className='border w-52 h-52 p-4 rounded-lg bg-white shadow'>
                <p className='text-slate-600 font-medium mb-2'>Product Description</p>
                <ul className='list-disc list-inside'>
                    {descriptionItems.map((item, index) => (
                        <li key={index} className='dark:text-black'>{item}</li>
                    ))}
                </ul>
            </div>

                </div>
            </div>

<div className='mt-6'>
<Horizontalcard category={data?.category} heading={'Products you may also like..'}/>

</div>

<div className="mt-6">
        <h3 className="text-xl font-medium">Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id} className=" border p-4 rounded my-2">
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setShowReviewForm(true)}
        >
          Add Review
        </button>
      </div>

      {showReviewForm && (
        <ReviewForm
          productId={productId}
        
          onReviewSubmitted={handleReviewSubmitted}
          onClose={() => setShowReviewForm(false)}
        />
      )}


        </div>
       
    )
}

export default Productdetails