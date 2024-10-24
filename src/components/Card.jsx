import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({title, description, image, price}) {
    return (
        <div>
            <Card style={{ width: '18rem', margin: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                <Card.Img variant="top" src={image} style={{ width: '240px', height:'210px',margin:'20px' }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                   
                    <Card.Text>
                       <strong>Price: </strong>${price}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards