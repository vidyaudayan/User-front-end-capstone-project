
import React, { useState } from 'react';
import axios from 'axios';
import { IoClose } from "react-icons/io5";


const ReviewForm = ({ productId,  onReviewSubmitted, onClose }) => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      product_id: productId,
      rating,
      comment,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/review/add-review`, reviewData,  {withCredentials:true});
      onReviewSubmitted(response.data); 
      onClose(); 
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <button className="close-button" onClick={onClose}><IoClose /></button>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="rating">Rating:</label>
            <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
          </div>
          <button className='reviewButton' type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
