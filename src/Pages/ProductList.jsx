import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../components/Card'


function ProductList() {

    const [products, setProducts] = useState([]);

   useEffect(()=>{
    axios.get(' https://fakestoreapi.com/products').then((response)=>{
        // console.log(product.data)
        setProducts(response.data);
    }).catch((error)=>{
        console.log("Error fetching products: ", error)
    })
   },[])

  return (
    <div className='container-fluid'>
       {products.length > 0 ? (
                products.map((product) => (
                    <Cards />
                ))
            ) : (
                <p>Loading products...</p>
            )}
    </div>
  )
}

export default ProductList