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
    <div className='container-fluid' style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))', gap: '1rem', padding: '1rem' }} >
       {products.length > 0 ? (
                products.map((product) => (
                    <Cards 
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                    />
                ))
            ) : (
                <p>Loading products...</p>
            )}
    </div>
  )
}

export default ProductList