import styles from './Home.module.css'
import logo from '../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/Untitled_design__14_-removebg-preview.png'
import { Link } from 'react-router-dom'
import CountUp from "react-countup";
import { GrCertificate } from "react-icons/gr";
import { motion } from "framer-motion";
import {  FaHandshake } from 'react-icons/fa';



export default function Hero() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <section className={`${styles['hero-bg']} mb-4 text-white`}>
                    <div className="container-fluid p-0">
                        <div className="row m-0">
                            <div className="col-12 px-0 ps-md-4 ">
                                <div className={`card p- pb-3 bg-transparent border-0 rounded-0 rounded-start-3  text-center`}>
                                    <img
                                        src={logo}
                                        className=" w-25 d-block mx-auto"
                                        alt="..." />
                                    <div className="card-body text-white">
                                        <h2 className="card-title fw-bolder h1">
                                            Translate … Consult… Succeed with <span className='txt-colored'>TransGate</span></h2>
                                        <div className="col-md-6 col-12 align-self-end ps-md-5 mx-auto">
                                            <div className="row ">
                                                <div className="col-6 d-flex">
                                                    <FaHandshake className='bg-black txt-colored rounded-circle px-2 mx-3'
                                                        style={{ "width": "70px", "height": "70px" }}
                                                    />
                                                    <div className="content d-fles flex-column text-center">
                                                        <CountUp
                                                            className='txt-colored h1'
                                                            start={0}
                                                            end={91}
                                                            duration={4}
                                                            delay={2}
                                                            separator=" "
                                                            suffix='+'
                                                            decimal=","
                                                        >
                                                        </CountUp>
                                                        <p className=''>Partnerships</p>
                                                    </div>
                                                </div>
                                                <div className="col-6 d-flex">
                                                    <GrCertificate color='white' className='bg-colored text-white rounded-circle px-2 mx-3'
                                                        style={{ "width": "70px", "height": "70px" }}
                                                    />
                                                    <div className="content d-fles flex-column text-center">
                                                        <CountUp
                                                            className='txt-colored h1'
                                                            start={0}
                                                            end={7}
                                                            duration={4}
                                                            delay={2}
                                                            separator=" "
                                                            suffix='+'
                                                            decimal=","
                                                        >
                                                        </CountUp>
                                                        <p className=''>Years Of Experience</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="card-text my-3 w-75 mx-auto">
                                            Trans-Gate delivers precise, professional translation services for academic and scientific work, alongside expert consultations to enhance research quality and impact. Serving clients in over 35 countries, we empower scholars worldwide to communicate their ideas with clarity, accuracy, and confidence.                                        </p>
                                        <Link to='' className="btn text-white fw-semibold px-4 py-3 bg-colored">Get Started</Link>
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
