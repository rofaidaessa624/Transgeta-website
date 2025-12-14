import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/Untitled_design__14_-removebg-preview.png'
export default function Footer() {
    return (
        <>
            <footer className='py-md-5'>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-md-4">
                            <img src={logo} alt=""
                                width={200}
                                height={200}
                            />
                            <address >
                                <a href="mailto:info@transgateacd.online" className='text-decoration-none  text-white'>info@transgateacd.online</a>
                                <p><a href="tel:+20 01098396598" className='text-decoration-none  text-white'>+20 01098396598</a></p>
                                <div className="icons">
                                    <i></i>
                                    <i></i>
                                </div>
                            </address>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex flex-column">
                                <h2 className='text-white fs-4'>
                                    Quick Links
                                </h2>
                                <Link className='text-white text-decoration-none fw-light' to='/about'>About Us</Link>
                                <Link className='text-white text-decoration-none fw-light' to='/service'>Services</Link>
                                <Link className='text-white text-decoration-none fw-light' to='/contact'>Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex flex-column">
                                <h2 className='text-white fs-4'>Stay Connected</h2>
                                <p className='text-white fs-6 fw-lighter my-3 mb-4'>Sign up for exclusive updates, new arrivals & insider only discounts</p>
                                <form className='d-flex gap-3'>
                                    <input type="text" className='py-2 form-control rounded-3' placeholder="Your Email Address" />
                                    <button type='submit' className='py-2 btn btn-dark'>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
