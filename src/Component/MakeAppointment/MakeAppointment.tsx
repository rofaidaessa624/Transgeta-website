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
                            <h3>Access Our Services with Ease</h3>
                            <p>
                                Experience seamless access to Trans-Gate's translation and academic consultation services. Our streamlined process allows you to submit your documents, request consultations, and receive expert support quickly and efficiently, saving you time while ensuring high-quality results.
                            </p>
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
