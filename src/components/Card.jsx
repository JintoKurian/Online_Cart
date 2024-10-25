import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../redux/cart';
import { useDispatch } from 'react-redux';

function Cards({ title, description, image, price, onBuy, id }) {
    const dispatch = useDispatch();


    const handleAddToCart = (id)=>{
        dispatch(addToCart(id));
        alert("Item added to cart successfully")
    }

    return (
        <div>
            <Card style={{ width: '18rem', margin: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                <Card.Img variant="top" src={image} style={{ width: '240px', height: '210px', margin: '20px' }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <strong>Price: </strong>${price}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                        <Button variant="warning" onClick={onBuy}>
                            Buy
                        </Button>
                        <Button variant="primary" onClick={() => handleAddToCart(id)}>
                            Add to Cart
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Cards;


