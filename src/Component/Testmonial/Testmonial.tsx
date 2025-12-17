import { useState } from 'react';
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
        <section className="my-5">
                        <div className="container">
                <div className="row">
                    <h2 className='fw-bolder my-5 display-5 text-center'>Our Customer's Positive Comments</h2>
                    <div className=" col-12 bg-colored rounded-3 mx-auto">
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
                                <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} controls={false}>
                                    <Carousel.Item className='h-100'>
                                        <figure className="card bg-transparent border-0">
                                            <div className="card-body">

                                                <blockquote className="card-text text-white">
                                                    <p >
                                                        “Dr. Hager is one of the best people in the field of translation.
                                                        Extremely professional and delivers excellent quality.
                                                        She delivered exactly on time.
                                                        </p>
                                                </blockquote>

                                                    <div className="iconContainer w-25 ms-auto">
                                                   <img
                                                        src={quoteEndIcon}
                                                        className="img-thumbnail w-50 bg-transparent border-0"
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
                                        <figure className="card bg-transparent border-0 ">
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

                                                    <div className="iconContainer w-25 ms-auto">
                                                   <img
                                                        src={quoteEndIcon}
                                                        className="img-thumbnail w-50 bg-transparent border-0"
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
                                        <figure className="card bg-transparent border-0 ">
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

                                                    <div className="iconContainer w-25 ms-auto">
                                                   <img
                                                        src={quoteEndIcon}
                                                        className="img-thumbnail w-50 bg-transparent border-0"
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
        </section>
        </>
    )
}
