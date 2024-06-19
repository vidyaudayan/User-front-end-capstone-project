import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const query= useLocation().search
   
    console.log("query", query)

const searchProduct= async()=>{
    try {
        const encodedQuery = encodeURIComponent(searchTerm); 
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/search?q=${encodedQuery}`);
        //setData(response.data)
        console.log(response)
       
        
    } catch (error) {
        console.error("Error searching products ", error);
    }
}

useEffect(()=>{
searchProduct()
},[])

  return (
    <div>Search</div>
  )
}

export default Search