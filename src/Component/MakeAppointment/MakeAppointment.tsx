import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { FiPhone } from 'react-icons/fi'


export default function MakeAppointment() {
    return (
        <>
            <section className="bg-colored appointmenContainer py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-11 text-white">
                            <div className="d-flex">
                                <h2>Make Appointment</h2>
                            </div>
                            <h3>Get Our Service Easily</h3>
                            <p>At TransGate, we believe that every word matters. Accuracy in translation is not just a service—it’s a responsibility. Whether you’re translating official documents, academic research, or critical medical reports, precision and professionalism are at the heart of everything we do.</p>
                            <p>We provide certified, reliable, and high-quality translation services for all types of documents and in all languages. Our team of specialized translators ensures that every text is delivered with clarity, consistency, and flawless linguistic accuracy.</p>
                            <p>From graduation certificates and legal contracts to theses, dissertations, and medical reports—TransGate is your trusted partner for all translation needs.</p>
                            <div className="icons row my-5 mb-3 pt-5">
                                <div className="col-md-4 col-6">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="d-flex text-white bg-black cricledIcon justify-content-center align-items-center">
                                            <FontAwesomeIcon className='fs-4 bg-black rounded-circle' icon={faEnvelopeOpenText} />
                                        </div>
                                        <div className="contentContainer">
                                            <h3 className='fs-5 fw-bold'>Email</h3>
                                            <address className='mb-0'>info@transgatescd.online</address>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="d-flex text-white bg-black cricledIcon justify-content-center align-items-center">
                                            <FontAwesomeIcon className='fs-4 bg-black rounded-circle' icon={faClock} />
                                        </div>
                                        <div className="contentContainer">
                                            <h3 className='fs-5 fw-bold'>Work Hours</h3>
                                            <address className='mb-0'>Everyday 08:00 - 18:00</address>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="d-flex text-white bg-black cricledIcon justify-content-center align-items-center">
                                            {/* <FontAwesomeIcon className='fs-4 bg-black rounded-circle' icon={faPhone} /> */}
                                        <FiPhone size={25}/>
                                        </div>
                                        <div className="contentContainer">
                                            <h3 className='fs-5 fw-bold'>Phone</h3>
                                            <address className='mb-0'>+20 1098396598</address>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
