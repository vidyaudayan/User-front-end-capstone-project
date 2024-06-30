
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FilterCard } from '../components/Card/FilterCard';




const DisplayProducts = () => {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {


        const fetchSlugProducts = async () => {
            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_BASE_URL}/categories/slug-products`,
                    { category: '66693d12be2e359f1b8b9f28', slug }, 
                    { withCredentials: true }
                );
                setProducts(response.data.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchSlugProducts();
    }, [slug]);
    return (
        <div className='flex gap-6 flex-col mt-3 ml-3'>
            
           
            <div className=' p-3 mb-1 rounded'>
                    <h2 className='text-black dark:text-white'>Total Products: {products.length}</h2>
                </div>

            <div className="products-page container mx-auto grid grid-cols-4 p-5 gap-4">

                {products.length ? (

                    products.map((product) => (
                        <div key={product._id} className="product-card ">

                            <FilterCard className='w-[400px]' key={product._id} product={product} />
                            
                        </div>
                    ))
                ) : (
                    <p>No products found for this category.</p>
                )}
            </div>

        </div>
    )
}

export default DisplayProducts