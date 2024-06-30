


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orders, setOrders] = useState([]);
  const [reviews, setReviews] = useState([]);


  const fetchReviews = async () => {
    try {
      const reviewsResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/reviews`, { withCredentials: true });
      setReviews(reviewsResponse.data);

      console.log("review res", reviewsResponse)

    } catch (error) {
      console.error('Error fetching reviews:', error);
      setError('Error fetching reviews');

    }
  };

  const fetchOrdeHistory = async () => {
    try {
      const ordersResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/orders`, { withCredentials: true });
      setOrders(ordersResponse.data);
      console.log("order res", ordersResponse)

    } catch (error) {
      console.error('Error fetching order:', error);
      setError('Error fetching order history');

    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, { withCredentials: true });
        setProfile(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError('Error fetching profile');
        setLoading(false);
      }
    };

    fetchProfile(), fetchReviews(), fetchOrdeHistory()
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Loading profile...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="flex gap-3 lg:flex-row md:flex-col sm:flex-col justify-center">
      {profile ? (
        <div className=" border p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl border p-3 font-bold mb-4">Profile</h1>
       <div className='border'>
       <div className="mb-2">
            <p className="text-gray-700"><strong>First Name:</strong> {profile.firstName}</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-700"><strong>Last Name:</strong> {profile.lastName}</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-700"><strong>Email:</strong> {profile.email}</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-700"><strong>Role:</strong> {profile.role}</p>
          </div>
       </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">No profile data found.</p>
      )}



      


      <div className='flex flex-col border'>
        <h3 className="text-xl p-3 font-semibold mb-2">Reviews</h3>
        {reviews.length ? (
          <ul className="space-y-2">
            {reviews.map(review => (
              <li className="border p-4 rounded-md shadow-sm">
                <p><strong>Review ID:</strong> {review._id}</p>
                <p><strong>Product:</strong> {review.product_id}</p>
                <p><strong>Rating:</strong> {review.rating}</p>
                <p><strong>Comment:</strong> {review.comment}</p>
                <p><strong>Date:</strong> {new Date(review.createdAt).toLocaleDateString()}</p>
                {/* <Link to={`/product/${review.product._id}`} className="text-blue-500 hover:underline">View Product</Link>*/}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews found.</p>
        )}
      </div>


    </div>


  );
};

export default Profile;




