import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../redux/productSlice';
import { Tab, Tabs, Container, Row, Col, Card, ListGroup, Spinner } from 'react-bootstrap';
import './View.css';


function View() {
  const { id } = useParams();
  const [product,setProduct] = useState("")
  const dispatch = useDispatch();
  const { allProducts, error, loading } = useSelector((state) => state.productReducer);

  useEffect(() => {
    // dispatch(fetchProducts());
    if (localStorage.getItem("allProducts")) {
      const product = JSON.parse(localStorage.getItem("allProducts"));

      setProduct(product.find((item) => item.id == id));
    }
  }, [dispatch]);


  // const productId = parseInt(id, 10);
  // const product = allProducts.find((prod) => prod.id === productId);

  // Debug log to check the fetched products and the found product
  useEffect(() => {
    console.log('Fetched Products:', allProducts);
    console.log('Found Product:', product);
  }, [allProducts, product]);

  if (loading) {
    return (
      <div className="text-center mt-5 fw-bolder">
        <Spinner className="me-2" animation="border" variant="primary" />Loading..
      </div>
    );
  }

  if (error) {
    return (
      <div className="fw-bolder text-center mt-5 mb-5 text-danger">
        {error}
      </div>
    );
  }

  if (!allProducts || !allProducts.length) {
    return (
      <div className="fw-bolder text-center mt-5 mb-5 text-danger">
        No Products Found !!
      </div>
    );
  }

  if (!product) {
    return (
      <div className="fw-bolder text-center mt-5 mb-5 text-danger">
        Product Not Found !!
      </div>
    );
  }

  return (
    <Container className="mt-5">
      
      <Row>
        <Col md={6}>
          <Card className="shadow rounded">
            <Card.Img variant="top" src={product.photograph} />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow rounded">
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text><strong>Neighborhood:</strong> {product.neighborhood}</Card.Text>
              <Card.Text><strong>Address:</strong> {product.address}</Card.Text>
              <Card.Text><strong>Cuisine:</strong> {product.cuisine_type}</Card.Text>
              <Card.Text><strong>Latitude:</strong> {product.latlng.lat}</Card.Text>
              <Card.Text><strong>Longitude:</strong> {product.latlng.lng}</Card.Text>
              <Tabs defaultActiveKey="operating_hours" id="product-details-tabs" className="custom-tabs">
                <Tab eventKey="operating_hours" title="Operating Hours">
                  <ListGroup variant="flush">
                    {Object.entries(product.operating_hours).map(([day, hours], index) => (
                      <ListGroup.Item key={index}>
                        <strong>{day}:</strong> {hours}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                  <ListGroup variant="flush">
                    {product.reviews.map((review, index) => (
                      <ListGroup.Item key={index}>
                        <strong>{review.name}:</strong> {review.comments}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default View;
