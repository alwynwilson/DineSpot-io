import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../redux/productSlice';




function Header({insideHome}) {
  const dispatch = useDispatch()
  return (
    <>
      <Navbar expand="lg"  style={{background:"Black",marginTop:'-100px'}}>
      <Container>
        <Navbar.Brand href="/"><h1 className='text-warning'><i class="fa-solid fa-location-dot me-2"></i>DineSpot</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='ms-lg-5' style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="" className='ms-lg-5' style={{color:"white"}}>About</Nav.Link>
            <Nav.Link href="" className='ms-lg-5' style={{color:"white"}}>Contact</Nav.Link>
            { insideHome && 
              <Nav.Link>
                <div style={{marginLeft:"430px"}}>
                  <Form className="d-flex ">
                    <Form.Control onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))}  style={{ height: '30px' }}
                      type="search"
                      placeholder="Search Restaurants by place"
                      className="me-2 w-75"
                      aria-label="Search"
                    />
                    <Button  style={{ height: '30px', lineHeight: '0px',textAlign:'top' }} variant="outline-warning"><span className='fw-bolder bg-warning'>Search</span></Button>
                  </Form>
                </div>
              </Nav.Link>
              
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header