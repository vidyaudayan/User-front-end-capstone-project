 import { toast } from "react-toastify";
 import axios from "axios";

 export const addTocart= async(id,  quantity = 1)=>{
 const productId = id
 console.log("id", id)
 try {
    const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/cart/addtocart`,
        { productId,quantity}, 
        { withCredentials: true }
    );
    console.log(response);

    toast.success("Product added to cart");
    return response
} catch (error) {
    console.error("Error adding product to cart:", error);
    toast.error("Failed to add product to cart");
}
}