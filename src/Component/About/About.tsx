import { FaRegCircleDot } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import styles from './About.module.css'
import logo from '../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/Untitled_design__14_-removebg-preview.png'

export default function About() {
    return (
        <>
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                                                            <img src={logo} alt="" className="img-fluid"/>
=                            <div className="d-flex align-items-center gap-3">
                                <div className="icon-container bg-black p-1 rounded-circle">
                                    <FaRegCircleDot size={25} fill="#fff" className="bg-black " />
                                </div>
                                <h2 className="m-0">About TransGate</h2>
                            </div>
                            <h3>Why Choose Trans Gate?</h3>
                            <p>
                                About TransGate
                                Why Choose Trans Gate?
                                At Trans Gate, we specialize in delivering high-precision academic translation services designed to reflect the true value and depth of your research. We understand that scientific work requires accuracy, consistency, and professional handling and that’s exactly what we provide.
                                Our team of expert translators is trained across diverse scientific fields to ensure your content is translated with clarity, integrity, and academic excellence.
                            </p>
                            <ul className={`${styles['list-img']} row`}>
                                <div className="col-6">
                                    <li className="d-flex align-items-center my-3">
                                        {/* <FaCheckCircle fill="#1b90c6" size={20} /> */}
                                        <p className="ms-2 m-0">Unmatched Commitment to Deadlinesa</p>
                                    </li>
                                    <li className="d-flex align-items-center my-3">
                                        <FaCheckCircle fill="#1b90c6" size={20} />
                                        <p className="ms-2 m-0">Extensive Experience in the Translation Industry</p>
                                    </li>
                                </div>
                                <div className="col-6">
                                    <li className="d-flex align-items-center my-3">
                                        <FaCheckCircle fill="#1b90c6" size={20} />
                                        <p className="ms-2 m-0">Highly Skilled & Specialized Translators</p>
                                    </li>
                                    <li className="d-flex align-items-center my-3">
                                        <FaCheckCircle fill="#1b90c6" size={20} />
                                        <p className="ms-2 m-0">Multi-Language Translation Capabilities</p>
                                    </li>
                                    <li className="d-flex align-items-center my-3">
                                        <FaCheckCircle fill="#1b90c6" size={20} />
                                        <p className="ms-2 m-0">Exceptional Accuracy & Quality Assurance</p>
                                    </li>
                                </div>
                            </ul>
                        </div>
                        <div className="col-md-6 col-12">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
