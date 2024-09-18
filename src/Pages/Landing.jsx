import React from 'react'
import { Link } from 'react-router-dom'
import LandingImage from '../assets/Landing.jpg'
import LandingOne from '../assets/LandingOne.jpg'
import Header from '../Components/Header'

function Landing() {
  return (
    <>
      <Header />
      <div style={{ minHeight: '90vh', marginTop: '-80px' }} className="d-flex justify-content-center align-items-center w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
              <h1 className='text-warning' style={{ fontSize: '50px', fontWeight: "900" }}>
                <i className="fa-solid fa-location-dot me-2"></i>DineSpot
              </h1>
              <p className='mb-5' style={{ textAlign: 'justify', color: "white" }}>
                Craving something new? <span style={{ color: "rgba(255, 193, 7, 1)", fontWeight: "500" }}>DineSpot</span> is your ultimate dining companion, guiding you to the best restaurants around! Whether you're in the mood for a cozy cafe, a trendy bistro, or an exotic cuisine, we've got you covered. Explore top-rated spots, read authentic reviews, and find hidden gems that will tantalize your taste buds.
              </p>
              <Link style={{ color: "white", fontWeight: "900" }} to="/restaurants" className="btn btn-warning bg-warning">START TO EXPLORE</Link>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="d-flex flex-column flex-md-row">
                <img className="img-fluid rounded-5 mb-3 mb-md-0 ms-md-3" style={{ height: "450px", border: "5px solid rgba(255, 193, 7, 1)" }} src={LandingImage} alt="Landing" />
                <img className="img-fluid rounded-5 ms-md-3 mt-3 mt-md-0" style={{ height: "400px", border: "5px solid rgba(255, 193, 7, 1)" }} src={LandingOne} alt="LandingOne" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
