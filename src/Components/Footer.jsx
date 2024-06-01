import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div>
        <div style={{width:'95%',height:"400px",background:'black'}} className='container-fluid mt-5 '>
        <div className="d-flex justify-content-between p-5">

          <div style={{width:'400px'}} className="intro">
            <h5 className='text-warning'><i class="fa-solid fa-location-dot me-2"></i>DineSpot</h5>
            <p style={{color:"white"}}>The Place where your food and space matters, Taste the magical flavours of the greatest chef's from the great mariott. </p>
            <p style={{color:"white"}}>Code licensed Luminar, docs cc bu 3.0.</p>
            <p style={{color:"white"}}>Currently v5.3.2</p>
          </div>

          <div className="links d-flex flex-column">
            <h5 className='text-warning'>Links</h5>
            <Link className="mt-2 mb-2" to={'/'} style={{textDecoration:'none',color:'White'}}>Home</Link>
            <Link to={'/restuarants'} style={{textDecoration:'none',color:'White'}}>Search </Link>
          </div>

          <div className="guides d-flex flex-column">
            <h5 className='text-warning'>Guide</h5>
            <a className="mt-2 mb-2" href="https://react.dev/" style={{textDecoration:'none',color:'White'}} target='_blank'>Top Menu</a>
            <a className="mb-2" href="https://react-bootstrap.github.io/" style={{textDecoration:'none',color:'White'}} target='_blank'>Reservations</a>
            <a className="mb-2" href="https://reactrouter.com/en/main" style={{textDecoration:'none',color:'White'}} target='_blank'>Authentic Dishes</a>
          </div>

          <div className="contact">
            <h5 className='text-warning'>Contact</h5>
            <div className="d-flex">
              <input type="text" className='form-control' placeholder='Enter your email here'/>
              <button className='btn btn-warning ms-3'><i className="fa-solid fa-arrow-right text-dark bg-light"></i></button>
            </div>
            <div className="icons d-flex justify-content-between mt-3 ">
              <a href="" style={{textDecoration:'none',color:'Black'}} target='_blank'>
                <i className='fa-brands fa-twitter text-warning'></i>
              </a>
              <a href="" style={{textDecoration:'none',color:'Black'}} target='_blank'>
                <i className='fa-brands fa-instagram text-warning'></i>
              </a>
              <a href="" style={{textDecoration:'none',color:'Black'}} target='_blank'>
                <i className='fa-brands fa-facebook text-warning'></i>
              </a>
              <a href="" style={{textDecoration:'none',color:'Black'}} target='_blank'>
                <i className='fa-brands fa-linkedin text-warning'></i>
              </a>
              <a href="" style={{textDecoration:'none',color:'Black'}} target='_blank'>
                <i className='fa-brands fa-github text-warning'></i>
              </a>
              <a href="" style={{textDecoration:'none',color:'Black'}} target='_blank'>
                <i className='fa-solid fa-phone text-warning'></i>
              </a>
            </div>
          </div>

        </div>
          <p className='text-center mt-5 text-warning'>Copyright © 2024 React Bootstrap. Built with Docusaurus.</p>
        </div>
      </div>
    </>
  )
}

export default Footer