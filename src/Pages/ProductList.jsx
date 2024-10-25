import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../components/Card';
import ProductDetailsModal from '../components/ProductDetailsModal';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';


function ProductList() {
    const [products, setProducts] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const cartArray = useSelector(state=>state.cart)


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
            .catch(error => console.log("Error fetching products: ", error));
    }, []);

    const handleBuyClick = (productId) => {
        setSelectedProductId(productId);
        setModalShow(true);
    };

    useEffect(()=>{
        console.log(cartArray)
    
        },[cartArray])
    
 

    return (
        <>
        <div className='container-fluid' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))', gap: '1rem', padding: '1rem', background:'linear-gradient(135deg, #f0f4f8, #dfe7ec)' }}>
            {products.length > 0 ? (
                products.map((product) => (
                    <Cards
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                        id={product.id}
                        onBuy={() => handleBuyClick(product.id)}
                    />
                ))
            ) : (
                <p>Loading products...</p>
            )}
            <ProductDetailsModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                productId={selectedProductId}
            />

            
        </div>
<Footer/>
        </>

    );
}

export default ProductList;
