import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Productdetails = () => {
    const [loading, setLoading] = useState(true)
    const productImageListLoading = new Array(4).fill(null)

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
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    };

    useEffect(() => {
        fetchProductsDetails()
    }, [productId])

    return (
        <div className='container mx-auto p-8 ml-8'>

            <div className=' min-h-[200px]'>

                {/*product image*/}
                <div className='h-96'>

                    <div className=''>

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

                                <div className='flex gap-2 lg:flex-col h-full overflow-scroll scrollbar-none'>
                                    {
                                        data.productPictures.map((img, index) => {
                                            return (
                                                <div className='w-20 h-20 bg-slate-300 rounded p-1' key={index}>
                                                    < img className='w-full h-full  mix-blend-multiply' src={img} alt="" />
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
                <div>

                </div>
            </div>


        </div>
    )
}

export default Productdetails