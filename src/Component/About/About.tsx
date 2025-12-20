import { FaRegCircleDot } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import styles from './About.module.css'
import { MdGTranslate } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";

export default function About() {
    return (
        <>
            <section className="my-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-12">
                            <img src="/images/logo.png" alt="" className="img-fluid" />
                            <div className="d-flex align-items-center gap-3 my-3">
                                <div className=" bg-white rounded-circle">
                                    <FaRegCircleDot size={30} fill={"#1b90c6"} className=" bg-white rounded-circle " />
                                </div>
                                <h2 className="m-0">About TransGate</h2>
                            </div>
                            <h2 className="fw-bolder ">
                                What makes Trans-Gate the preferred choice for translation services and
                                academic consulting?</h2>
                            <p className="text-muted">
                                Trans-Gate stands out by elevating your words and empowering your intellect
through a combination of accuracy, expertise, and guidance.
                            </p>
                            <ul className={`${styles['list-img']} row`}>
                                <div className="col-lg-6 col-12">
                                    <li className="d-flex align-items-center my-3">
                                        <div className="icon-container">
                                            <FaCheckCircle fill="#1b90c6" size={20} />
                                        </div>
                                        <p className="ms-2 m-0">Unmatched Commitment to Deadlinesa</p>
                                    </li>
                                    <li className="d-flex align-items-center my-3">
                                        <div className="icon-container">
                                            <FaCheckCircle fill="#1b90c6" size={20} />
                                        </div>                                        <p className="ms-2 m-0">Extensive Experience in the Translation Industry</p>
                                    </li>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <li className="d-flex align-items-center my-3">
                                        <div className="icon-container">
                                            <FaCheckCircle fill="#1b90c6" size={20} />
                                        </div>                                        <p className="ms-2 m-0">Highly Skilled & Specialized Translators</p>
                                    </li>
                                    <li className="d-flex align-items-center my-3">
                                        <div className="icon-container">
                                            <FaCheckCircle fill="#1b90c6" size={20} />
                                        </div>                                        <p className="ms-2 m-0">Multi-Language Translation Capabilities</p>
                                    </li>
                                    <li className="d-flex align-items-center my-3">
                                        <div className="icon-container">
                                            <FaCheckCircle fill="#1b90c6" size={20} />
                                        </div>                                        <p className="ms-2 m-0">Exceptional Accuracy & Quality Assurance</p>
                                    </li>
                                </div>
                            </ul>
                        </div>
                        <div className={`${styles['about-bg']} col-lg-6 col-12 `}>
                             <div className="d-flex flex-column h-100 justify-content-center align-items-start">
                                    <div className="card my-5 mb-3 d-flex flex-column justify-content-center">
                                        <div className="row g-0">
                                            <div className="col-md-4 d-flex justify-content-center align-items-center ">
                                                <MdGTranslate size={40} className="txt-colored bg-white" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">Translation Services</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                    
                                    <div className="card mb-3 d-flex flex-column justify-content-center">
                                        <div className="row g-0">
                                            <div className="col-md-4 d-flex justify-content-center align-items-center ">
                                                <HiAcademicCap size={30} className="cricledIcon txt-colored bg-white" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">Academic Excellence</h5>
                                                </div>
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
