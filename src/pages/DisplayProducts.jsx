
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import displayINRCurrency from '../helpers/Currency';
import { FilterCard } from '../components/Card/FilterCard';
import subCategory from '../helpers/subCategory'



const DisplayProductsWomen = () => {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortOption, setSortOption] = useState('');
    const [priceRange, setPriceRange] = useState('');




    useEffect(() => {


        const fetchSlugProducts = async () => {
            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_BASE_URL}/categories/slug-products`,
                    { category: '665c08c584ec78676b1660a5', slug },  // Adjust the category as necessary
                    { withCredentials: true }
                );
                setProducts(response.data.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchSlugProducts();
    }, [slug,]);
    return (
        <div className='flex gap-4 flex-col  ml-1'>
            
           
            <div className=' p-2 mb-1 rounded'>
                    <h2 className='text-black dark:text-white'>Total Products: {products.length}</h2>
                </div>




            <div className="products-page container mx-auto grid grid-cols-4 gap-4 ">



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

export default DisplayProductsWomen