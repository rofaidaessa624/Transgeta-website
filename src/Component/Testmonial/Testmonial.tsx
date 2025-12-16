import { useState } from 'react';
import quoteIcon from '../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/image (4).svg'
import styles from './Testmonial.module.css'
import quoteEndIcon from '../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/image (5).svg' 
import { Carousel } from 'react-bootstrap';
export default function Testmonial() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex:number) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <h2 className='fw-bolder my-5 display-5 text-center'>Our Customer's Positive Comments</h2>
                    <div className="col-md-11 col-11 bg-primary rounded-3 mx-auto">
                        <div className="row py-5 justify-content-start px-4">
                            <div className={`${styles.quoteContainer} col-md-4`}>
                                <div className="iconContainer rounded-circle border border-5 border-black w-auto d-inline-flex me-auto p-2 h-auto bg-white">
                                    <img src={quoteEndIcon}
                                        width="20px"
                                        height="20px"
                                        alt="" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <Carousel activeIndex={index} onSelect={handleSelect} className='d-flex align-items-stretch'>
                                    <Carousel.Item className='h-100'>
                                        <figure className="card bg-transparent">
                                            <div className="card-body">

                                                <blockquote className="card-text text-white">
                                                    <p >
                                                        “Dr. Hager is one of the best people in the field of translation.
                                                        Extremely professional and delivers excellent quality.
                                                        She delivered exactly on time.
                                                        </p>
                                                </blockquote>

                                                <div className="imgContainer text-end">
                                                    <img
                                                        src={quoteEndIcon}
                                                        className="img-thumbnail w-25 bg-transparent border-0"
                                                        alt=""
                                                        aria-hidden="true"
                                                    />
                                                </div>

                                                <figcaption className="text-white">
                                                    <strong className='fs-5 fw-bold'>Sara Hany</strong><br />
                                                    <span>Student</span>
                                                </figcaption>

                                            </div>
                                        </figure>
                                    </Carousel.Item>
                                    <Carousel.Item className='h-100'>
                                        <figure className="card bg-transparent ">
                                            <div className="card-body">

                                                <blockquote className="card-text text-white">
                                                    <p>
                                                        “Dr. Hager is one of the best people in the field of translation.
                                                        Extremely professional and delivers excellent quality.
                                                        She delivered exactly on time.
                                                        Thank you so much for your effort!
                                                        I will definitely work with you again.
                                                        Your dedication and attention to detail truly satisfy the client.”
                                                    </p>
                                                </blockquote>

                                                <div className="imgContainer text-end">
                                                    <img
                                                        src={quoteEndIcon}
                                                        className="img-thumbnail w-25 bg-transparent border-0"
                                                        alt=""
                                                        aria-hidden="true"
                                                    />
                                                </div>

                                                <figcaption className="text-white">
                                                    <strong className='fs-5 fw-bold'>Sara Hany</strong><br />
                                                    <span>Student</span>
                                                </figcaption>

                                            </div>
                                        </figure>
                                    </Carousel.Item>
                                    <Carousel.Item className='h-100'>
                                        <figure className="card bg-transparent ">
                                            <div className="card-body">

                                                <blockquote className="card-text text-white">
                                                    <p>
                                                        “Dr. Hager is one of the best people in the field of translation.
                                                        Extremely professional and delivers excellent quality.
                                                        She delivered exactly on time.
                                                        Thank you so much for your effort!
                                                        I will definitely work with you again.
                                                        Your dedication and attention to detail truly satisfy the client.”
                                                    </p>
                                                </blockquote>

                                                <div className="imgContainer text-end">
                                                    <img
                                                        src={quoteIcon}
                                                        className="img-thumbnail w-25 bg-transparent border-0"
                                                        alt=""
                                                        aria-hidden="true"
                                                    />
                                                </div>

                                                <figcaption className="text-white">
                                                    <strong className='fs-5 fw-bold'>Sara Hany</strong><br />
                                                    <span>Student</span>
                                                </figcaption>

                                            </div>
                                        </figure>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
