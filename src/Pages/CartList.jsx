import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { removeFromCart } from '../redux/cart';

function CartList() {
    const cartIds = useSelector(state => state.cart.cartIds); 
    const dispatch = useDispatch();
    const [allProducts, setAllProducts] = useState([]);

   
    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setAllProducts(response.data);
            } catch (error) {
                console.log('Error fetching products:', error);
            }
        };

        fetchAllProducts();
    }, []);

   
    const cartItems = allProducts.filter(product => cartIds.includes(product.id));

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className="container">
            <h2>Cart List</h2>
            {cartItems.length > 0 ? (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <img src={item.image} alt={item.title} style={{ width: '60px', height: '60px' }} />
                                </td>
                                <td>{item.title}</td>
                                <td>${item.price}</td>
                                <td>{item.category}</td>
                                <td>{item.rating?.rate} ({item.rating?.count} reviews)</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleRemoveFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default CartList;
