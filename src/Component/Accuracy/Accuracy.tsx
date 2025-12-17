import { useRef } from 'react';
import card1Img from '../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/card1.jpg'
import card2Img from '../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/card2.jpg'
import card3Img from '../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/card3.jpg'
import { motion, useInView } from 'framer-motion'

export default function Accuracy() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <>
            <motion.div
                ref={ref}
                initial={{ x: -200, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
            >
                <section className="my-5 bg-colored">
                    <div className="container">
                        <div className="row justify-content-center text-white">
                            <div className="col-md-2 col-sm-4 col-6 text-center">
                                <img src="images/grayLogoPreview.png" alt="" className="img-fluid" />
                            </div>
                            <div className="col-12 text-center">
                                <h2 className='fw-bolder my-5 display-6 text-center'>Are you looking for a reliable & professional translation?</h2>
                                <p className='fs-6'>
                                    Translation is not just converting words  it’s the precise transfer of meaning, context, and intent. That’s why we provide you with accurate, high-quality translations delivered by certified language experts.
                                </p>
                            </div>
                            <div className="row my-4">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="card px-4 pt-4">
                                        <div className="imgContainer position-relative">
                                            <img src={card1Img} className="rounded-0 card-img-top" alt="..." />
                                            <img src="" alt="" className='rounded-circle position-absolute bottom-0 right-0' />
                                        </div>

                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">Error-Free Translation</h5>
                                            <p className="card-text flex-grow-1">
                                                Eliminates mistakes that could delay or harm your academic or professional progress.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="card px-4 pt-4">
                                        <div className="imgContainer position-relative">
                                            <img src={card2Img} className="rounded-0 card-img-top" alt="..." />
                                            <img src="" alt="" className='rounded-circle position-absolute bottom-0 right-0' />
                                        </div>

                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">Expert Linguists</h5>
                                            <p className="card-text flex-grow-1">
                                                Your documents are handled by specialists with strong command of language and context.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="card px-4 pt-4 h-100">
                                        <div className="imgContainer position-relative">
                                            <img src={card3Img} className="rounded-0 card-img-top" alt="..." />
                                            <img src="" alt="" className='rounded-circle position-absolute bottom-0 right-0' />
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">Precise Meaning Transfer</h5>
                                            <p className="card-text">
                                                We ensure every idea is conveyed clearly and accurately.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.div>

        </>
    )
}
