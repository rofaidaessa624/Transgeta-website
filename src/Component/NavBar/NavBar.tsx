import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/cropped-WhatsApp_Image_2025-11-12_at_17-06-08_0162802e-remov (1).png'

export default function NavBar() {
  return (
    <>
      <Navbar className="bg-white">
        <Container fluid>
          <Navbar.Brand>
            <Link to='/'>
            <img
              alt=""
              src={logo}
              width={150}
              height={150}
              className="d-inline-block align-top"
            />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-3">
              <Nav.Link>
                <Link to="/" className='fw-medium text-decoration-none'>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link >
                <Link className='fw-medium text-decoration-none' to='/service' >
                  Our Services
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className='fw-medium text-decoration-none' to='/about'>
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className='fw-medium text-decoration-none' to='/resources'>
                  Insights & Resources
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className='fw-medium text-decoration-none' to='/ethics'>
                  Ethical Standards
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className='fw-medium text-decoration-none' to='/contact'>
                Contact us 
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="buttons d-flex gap-3">
            <button className='btn btn-primary text-white'>
              Pricing Request
              </button>
              <button className='btn btn-outline-primary'> 
                العربية
              </button>
          </div>
        </Container>
      </Navbar>
    </>
  )
}
