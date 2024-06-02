import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import { Tab, Tabs, Container, Row, Col, Card, ListGroup, Spinner } from 'react-bootstrap';
import './View.css';
import Header from '../Components/Header';

function View() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { allProducts, error, loading } = useSelector((state) => state.productReducer);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, allProducts.length]);

  useEffect(() => {
    if (Array.isArray(allProducts) && allProducts.length > 0) {
      const foundProduct = allProducts.find((item) => item.id.toString() === id);
      setProduct(foundProduct);
    }
  }, [allProducts, id]);

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

  if (!product) {
    return (
      <div className="fw-bolder text-center mt-5 mb-5 text-danger">
        Product Not Found !!
      </div>
    );
  }

  return (
    <Container className="mt-5">
      <Header />
      <Row className='mt-5'>
        <Col md={6}>
          <Card className="shadow rounded">
            <Card.Img variant="top" src={product.photograph} style={{ height: '720px' }} />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow rounded">
            <Card.Body style={{ height: '720px' }}>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text><strong>Neighborhood:</strong> {product.neighborhood}</Card.Text>
              <Card.Text><strong>Address:</strong> {product.address}</Card.Text>
              <Card.Text><strong>Cuisine:</strong> {product.cuisine_type}</Card.Text>
              <Tabs defaultActiveKey="operating_hours" id="product-details-tabs" className="custom-tabs">
                <Tab eventKey="operating_hours" title="Operating Hours">
                  <ListGroup variant="flush">
                    {product.operating_hours && Object.entries(product.operating_hours).map(([day, hours], index) => (
                      <ListGroup.Item key={index} style={{ background: 'black' }}>
                        <strong>{day}:</strong> {hours}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                  <ListGroup variant="flush">
                    {product.reviews && product.reviews.map((review, index) => (
                      <ListGroup.Item style={{ background: 'black' }} key={index}>
                        <strong>{review.name}:</strong> {review.comments}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Tab>
                <Tab eventKey="latlng" title="Location">
                  <ListGroup variant="flush" style={{ background: 'black' }}>
                    <ListGroup.Item>Latitude: {product.latlng.lat}</ListGroup.Item>
                    <ListGroup.Item>Longitude: {product.latlng.lng}</ListGroup.Item>
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
