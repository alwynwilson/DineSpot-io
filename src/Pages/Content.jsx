import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { Col, Row, Card, Spinner, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import './Content.css';

function Content() {
  const dispatch = useDispatch();
  const { allProducts, error, loading } = useSelector((state) => state.productReducer);
  console.log(allProducts)
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Number of products per page

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Ensure allProducts is an array
  const productsArray = Array.isArray(allProducts) ? allProducts : [];
  
  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsArray.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header insideHome={true} />
      <div style={{ marginTop: '100px' }} className="container-fluid">
        {loading ? (
          <div className="text-center mt-5 fw-bolder">
            <Spinner className="me-2" animation="border" variant="primary" />Loading..
          </div>
        ) : (
          <>
            <Row className="my-5">
              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <Col key={product?.id} className="mb-5" sm={12} md={6} lg={4} xl={3}>
                    <Card className="shadow rounded ms-5 product-card" style={{ width: '16rem' }}>
                      <Link to={`/${product?.id}/view`} className="text-left">
                        <Card.Img height={'400px'} variant="top" className="product-image" src={product?.photograph} />
                        <Card.ImgOverlay className="d-flex flex-column justify-content-end rounded product-overlay">
                          <Card.Title className="product-title" style={{ fontSize: '20px',fontWeight:"800" }}>
                            {product?.name.slice(0, 20)}
                          </Card.Title>
                          <Card.Title className="product-title" style={{ fontSize: '14px' }}>
                            {product?.neighborhood.slice(0, 20)}
                          </Card.Title>
                          <Card.Title className="product-title" style={{ fontSize: '11px' }}>
                            {product?.cuisine_type.slice(0, 20)}
                          </Card.Title>
                        </Card.ImgOverlay>
                      </Link>
                    </Card>
                  </Col>
                ))
              ) : (
                <div className="fw-bolder text-center mt-5 mb-5 text-danger">Product Not Found !!</div>
              )}
            </Row>
            <div className='d-flex justify-content-center'>
              <Pagination className="pagination-custom text-center" style={{ background: 'black', width: "35px" }}>
                {Array.from({ length: Math.ceil(productsArray.length / productsPerPage) }, (_, index) => (
                  <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Content;
