
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function MyVerticallyCenteredModal({ productId, show, onHide }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(response => {
          setProduct(response.data);
        })
        .catch(error => {
          console.error("Error fetching product details:", error);
        });
    }
  }, [productId]);

 
  const handleClose = () => {
    setProduct(null);
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {product ? product.title : "Loading..."}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {product ? (
          <div>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '50%', height: 'auto', marginBottom: '15px' }}
            />
            <h4>${product.price}</h4>
            <p>{product.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
          </div>
        ) : (
          <p>Loading product details...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
