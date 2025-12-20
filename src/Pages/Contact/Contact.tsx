import Breadcrumb from '../../Component/Breadcrumb/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { FiPhone } from 'react-icons/fi'
export default function Contact() {
    return (
        <>
            <Breadcrumb pageName={"Contact"} />
            <div className="container">
                <div className="row">
                    <h2 className='fw-bolder mb-0'>Get In Touch</h2>
                    <div className="icons row my-4  gy-5  mx-auto">
                        <div className="col-md-4 col-10 mt-0">
                            <div className="d-flex h-100 gap-3 align-items-center">
                                <div className="d-flex text-white bg-black cricledIcon justify-content-center align-items-center">
                                    <FontAwesomeIcon className='fs-4 bg-black rounded-circle' icon={faEnvelopeOpenText} />
                                </div>
                                <div className="contentContainer">
                                    <h3 className='fs-5 fw-bold'>Email</h3>
                                    <address className='mb-0'>info@transgatescd.online</address>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-10 mt-0">
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
                        <div className="col-md-4 col-10 mt-0">
                            <div className="d-flex gap-3 align-items-center">
                                <div className="d-flex text-white bg-black cricledIcon justify-content-center align-items-center">
                                    {/* <FontAwesomeIcon className='fs-4 bg-black rounded-circle' icon={faPhone} /> */}
                                    <FiPhone size={25} />
                                </div>
                                <div className="contentContainer">
                                    <h3 className='fs-5 fw-bold'>Phone</h3>
                                    <address className='mb-0'>+20 1098396598</address>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row justify-content-center contactDetails">
                            <div className="col-md-4 col-8"></div>
                            <div className="col-md-4 col-8"></div>
                            <div className="col-md-4 col-8"></div>
                        </div>
                    </div>
                    <div className="col-12">
                        <form>
                            <div className="row justify-content-center">
                                <div className="col-md-6 col-11">
                                    <div className="mb-3">
                                        <label htmlFor="fName" className="form-label">First Name</label>
                                        <input type="text" className="form-control" id="fName" aria-describedby="firstNameHelp" placeholder='First Name' />
                                    </div>
                                </div>
                                <div className="col-md-6 col-11">
                                    <div className="mb-3">
                                        <label htmlFor="lName" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="lName" aria-describedby="lastNameHelp" placeholder='Last Name' />
                                    </div>
                                </div>
                                                            <div className=" col-11 col-lg-12">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email Address' />
                                </div>
                            </div>
                            <div className="col-11 col-lg-12">
                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label ">Subject</label>
                                    <input type="text" className="form-control" id="subject" aria-describedby="subjectHelp" placeholder='Subject' />
                                </div>
                            </div>
                            <div className=" col-11 col-lg-12">
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Your Message</label>
                                    <textarea className="form-control" id="message" rows={3} placeholder='Your Message'></textarea>
                                </div>
                            </div>
                            </div>




                            <button type="submit" className="btn bg-primary text-white">Submit Form</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
