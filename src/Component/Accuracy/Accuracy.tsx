import { useContext, useRef } from 'react';
import card1Img from '../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/card1.jpg'
import card2Img from '../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/card2.jpg'
import card3Img from '../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/card3.jpg'
import { motion, useInView } from 'framer-motion'
import { LanguageContext } from '../../Context/LanguageContext';

export default function Accuracy() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("LanguageContext must be used within a LanguageProvider");
    }

    const { language } = context;

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ x: language === "en" ? -200 : 200, opacity: 0 }}
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
                            <div className="row my-4 gy-4">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="card px-4 pt-4 h-100">
                                        <div className="imgContainer position-relative">
                                            <img src={card1Img} className="rounded-0 card-img-top" alt="..." />
                                            <img src="" alt="" className='rounded-circle position-absolute bottom-0 right-0' />
                                        </div>

                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">Flawless Translation</h5>
                                            <p className="card-text flex-grow-1">
                                                EWe deliver translations free of errors, preventing delays or setbacks in your
academic and professional endeavors.liminates mistakes that could delay or harm your academic or professional progress.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="card px-4 pt-4 h-100">
                                        <div className="imgContainer position-relative">
                                            <img src={card2Img} className="rounded-0 card-img-top" alt="..." />
                                            <img src="" alt="" className='rounded-circle position-absolute bottom-0 right-0' />
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">Specialized Linguists</h5>
                                            <p className="card-text flex-grow-1">
Your documents are managed by experts with deep linguistic knowledge and
contextual understanding.                                            
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
                                            <h5 className="card-title">Academic Research Support</h5>
                                            <p className="card-text flex-grow-1">
We provide guidance to enhance the quality and impact of your research. From
structuring your thesis or dissertation to refining your arguments and methodology, 
we hwlp ensure your work meets the highest academic standards.
Our support empowers you to present your ideas with clarity, rigor, and confidence.
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
