/*import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import subCategory from '../helpers/subCategory'
import { VerticalCardNew } from '../components/Card/VerticalCardNew'
 

const WomenProductsDisplay = () => {
  return (
    <div className='container mx-auto p-8'>


      <div className='hidden lg:grid grid-cols-[250px,1fr] ml-10'>
        <div className='bg-slate-100 p-2 min-h-[calc(100vh-120px)] overflow-y-scroll'>
{/*sort by*/
         /* <div >
            < h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Sort by</h3>
            <form className='text-sm flex flex-col gap-2 py-2'>
              <div className='flex items-center gap-3'>
                <input type="radio" name='sort' />
                <label htmlFor="">Price- Low to High</label>
              </div>

              <div className='flex items-center gap-3'>
                <input type="radio" name='sort' />
                <label htmlFor="">Price- High to Low</label>
              </div>
            </form>

          </div>*/

{/*filter by*/}
         /* <div >
            < h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Category</h3>
            <form className='text-sm flex flex-col gap-2 py-2'>
            {
                          subCategory.map((categoryName,index)=>{
                            return(
                              <div className='flex items-center gap-3'>
                                 <input type='checkbox' name={"subCategory"}  value={categoryName?.value} id={categoryName?.value}  />
                                 <label htmlFor={categoryName?.value}>{categoryName?.label}</label>
                              </div>
                            )
                          })
                        }
            </form>

          </div>
        </div>

        <div>
        <VerticalCardNew category={"66693d12be2e359f1b8b9f28"} heading={'Popualar In Fashion'}/>  
        </div>

      </div>
    </div>
  )

}*/








import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import womensubCategory from '../helpers/womenSubcategory';
import { VerticalCardNew } from '../components/Card/VerticalCardNew';
import { FilterCard } from '../components/Card/FilterCard';

const WomenProductsDisplay= () => {
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortOption, setSortOption] = useState('');
    const [priceRange, setPriceRange] = useState('');
    
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/products/filter`, { subCategories: selectedSubCategories, sort: sortOption,priceRange: priceRange });
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        if (selectedSubCategories.length > 0) {
            fetchProducts();
        } else {
            setProducts([]); // Clear products if no subcategory is selected
        }
    }, [selectedSubCategories,sortOption, priceRange]);

    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        setSelectedSubCategories(prevSelected =>
            prevSelected.includes(value)
                ? prevSelected.filter(sc => sc !== value)
                : [...prevSelected, value]
        );
    };

    const handleSortChange = (event) => {
      setSortOption(event.target.value);
      console.log("sort.. ", event.target.value)
  };
  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
};

    return (
        <div className='container mx-auto p-8'>
            <div className='hidden lg:grid grid-cols-[250px,1fr] ml-10'>
                <div className='bg-slate-100 p-2 min-h-[calc(100vh-120px)] overflow-y-scroll'>
                    {/* sort by */}
                    <div>
                        <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Sort by</h3>
                        <form className='text-sm flex flex-col gap-2 py-2'>
                            <div className='flex items-center gap-3'>
                                <input type="radio" name='sort' value="lowToHigh"
                                    onChange={handleSortChange} checked={sortOption === 'lowToHigh'}/>
                                <label className='dark:text-black'>Price- Low to High</label>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input type="radio" name='sort'  value="highToLow"
                                    onChange={handleSortChange}   checked={sortOption === 'highToLow'}/>
                                <label className='dark:text-black'>Price- High to Low</label>
                            </div>
                        </form>
                    </div>

 {/* Price Filter */}
 <div>
                        <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Price</h3>
                        <form className='text-sm flex flex-col gap-2 py-2'>
                            <div className='flex items-center gap-3'>
                                <input
                                    type="radio"
                                    name="priceRange"
                                    value="below500"
                                    onChange={handlePriceRangeChange}
                                    checked={priceRange === 'below500'}
                                />
                                <label htmlFor="below500" className='dark:text-black'>Below Rs.500</label>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input
                                    type="radio"
                                    name="priceRange"
                                    value="500to1000"
                                    onChange={handlePriceRangeChange}
                                    checked={priceRange === '500to1000'}
                                />
                                <label htmlFor="500to1000" className='dark:text-black'>Rs.500-1000</label>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input
                                    type="radio"
                                    name="priceRange"
                                    value="1001to1500"
                                    onChange={handlePriceRangeChange}
                                    checked={priceRange === '1001to1500'}
                                />
                                <label htmlFor="1001to1500" className='dark:text-black'>Rs.1001-1500</label>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input
                                    type="radio"
                                    name="priceRange"
                                    value="1501to2000"
                                    onChange={handlePriceRangeChange}
                                    checked={priceRange === '1501to2000'}
                                />
                                <label htmlFor="1501to2000" className='dark:text-black'>Rs.1501-2000</label>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input
                                    type="radio"
                                    name="priceRange"
                                    value="2001to2500"
                                    onChange={handlePriceRangeChange}
                                    checked={priceRange === '2001to2500'}
                                />
                                <label htmlFor="2001to2500" className='dark:text-black'>Rs.2001-2500</label>
                            </div>
                        </form>
                    </div>


                    {/* filter by */}
                    <div>
                        <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Category</h3>
                        <form className='text-sm flex flex-col gap-2 py-2'>
                            {womensubCategory.map((categoryName, index) => (
                                <div className='flex items-center gap-3' key={index}>
                                    <input
                                        type='checkbox'
                                        name='subCategory'
                                        value={categoryName.value}
                                        id={categoryName.value}
                                        onChange={handleCheckboxChange}
                                        checked={selectedSubCategories.includes(categoryName.value)}
                                    />
                                    <label htmlFor={categoryName.value} className='dark:text-black'>{categoryName.label}</label>
                                </div>
                            ))}
                        </form>

                       
                    </div>
                </div>
              

                <div className=' '>
               
        
                {selectedSubCategories.length === 0 && !sortOption && !priceRange ? (
                <VerticalCardNew category={"66693d12be2e359f1b8b9f28"} heading={'Top Fashion'} />
              ) : (
                <>  
                      
                      <div className='flex flex-col'>
                <p className='text-lg font-semibold ml-5 '>Search Results : {products.length}</p>
                </div>
                {loading ? (
                        <p>Loading products...</p>
                    ) : (
                        products.length > 0 ? (
                     
                            products.map(product => (
                              
                                <FilterCard key={product._id} product={product} />
                            ))
                        ) : (
                            <p>No products found for the selected categories.</p>
                        )
                    )}
                    </>
                        )}
                </div>
            </div>
        </div>
    );
};


export default WomenProductsDisplay