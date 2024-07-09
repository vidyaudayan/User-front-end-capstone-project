import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const ViewOrder = () => {
    const [orders, setOrders] = useState([]);

    const fetchOrdeHistory = async () => {
        try {
          const ordersResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/order`, { withCredentials: true });
          setOrders(ordersResponse.data);
          console.log("order res", ordersResponse)
    
        } catch (error) {
          console.error('Error fetching order:', error);
          setError('Error fetching order history');
    
        }
      };

      useEffect(()=>{
fetchOrdeHistory()
      },[])
  return (

<div className="ml-3">
      <h2 className="text-2xl text-center font-bold mb-4">Your Orders</h2>
      {orders.length ? (
        orders.map(order => (
          <div key={order._id} className="order-card border  border-black p-4 mb-4 rounded-md shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Order ID: {order._id}</h3>
            <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Total Amount Paid:</strong> {order.total_price}</p>
            <h4 className="font-semibold">Products:</h4>
            <ul className='border border-slate-400 p-3 mt-2'>
              {order.products.map(product => (
                <li key={product.product_id._id} className="product-item mb-4">
                  <p><strong>Product Name:</strong> {product.product_id.title}</p>
                  <p><strong>Quantity:</strong> {product.quantity}</p>
                  <p><strong>MRP:</strong> {product.product_id.price}</p>
                  {product.product_id.productPictures.length > 0 && (
                    <img 
                      src={product.product_id.productPictures[0]} 
                      alt={product.product_id.name} 
                      className="w-32 h-32 object-cover"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>



  

  )
}

export default ViewOrder