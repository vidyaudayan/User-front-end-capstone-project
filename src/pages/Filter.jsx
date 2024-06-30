import React, { useState, useEffect } from 'react';
import axios from 'axios';
import subCategory from '../helpers/subCategory'

const CategoryPage = ({ category }) => {
    const [availableSubCategories, setAvailableSubCategories] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
     
        setAvailableSubCategories(subCategory[category] || []);
    }, [category]);

    useEffect(() => {
 
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.post('/api/products/filter', { subCategories: selectedSubCategories });
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
            setProducts([]); 
        }
    }, [selectedSubCategories]);

    const handleCheckboxChange = (subCategory) => {
        setSelectedSubCategories(prevSelected =>
            prevSelected.includes(subCategory)
                ? prevSelected.filter(sc => sc !== subCategory)
                : [...prevSelected, subCategory]
        );
    };

    return (
        <div className="category-page">
            <div className="filter-sidebar">
                {availableSubCategories.map(subCategory => (
                    <div key={subCategory}>
                        <input
                            type="checkbox"
                            id={subCategory}
                            value={subCategory}
                            onChange={() => handleCheckboxChange(subCategory)}
                            checked={selectedSubCategories.includes(subCategory)}
                        />
                        <label htmlFor={subCategory}>{subCategory}</label>
                    </div>
                ))}
            </div>
            <div className="product-list">
                {loading ? (
                    <p>Loading products...</p>
                ) : (
                    products.map(product => (
                        <div key={product._id} className="product-item">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>${product.price.toFixed(2)}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
