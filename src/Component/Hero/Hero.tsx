import styles from './Home.module.css'
import logo from '../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/Untitled_design__14_-removebg-preview.png'
import { Link } from 'react-router-dom'
import CountUp from "react-countup";
import { IoLogoWechat } from "react-icons/io5";
import { motion } from "framer-motion";



export default function Hero() {
    return (
        <>
            <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
            <section className={`${styles['hero-bg']} mb-4`}>
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        <div className="col-md-6 col-12 align-self-end ps-md-5">
                            <div className="row">
                                <div className="col-6 d-flex">
                                    <IoLogoWechat color='white' className='bg-black rounded-circle px-2 mx-3'
                                        style={{ "width": "70px", "height": "70px" }}
                                    />
                                    <div className="content d-fles flex-column text-center">
                                        <CountUp
                                            className='text-primary h1'
                                            start={0}
                                            end={91}
                                            duration={4}
                                            delay={2}
                                            separator=" "
                                            decimal=","
                                        >
                                        </CountUp>
                                        <p className='text-muted'>Legal Translation</p>
                                    </div>
                                </div>
                                <div className="col-6 d-flex">
                                    <IoLogoWechat color='white' className='bg-black rounded-circle px-2 mx-3'
                                        style={{ "width": "70px", "height": "70px" }}
                                    />
                                    <div className="content d-fles flex-column text-center">
                                        <CountUp
                                            className='text-primary h1'
                                            start={0}
                                            end={91}
                                            duration={4}
                                            delay={2}
                                            separator=" "
                                            decimal=","
                                        >
                                        </CountUp>
                                        <p className='text-muted'>Legal Translation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 px-0 px-md-4 ">
                            <div className={`card p- pb-3 ${styles['heroColor']} border-0 rounded-0 rounded-start-3 `}>
                                <img
                                    src={logo}
                                    className=" w-25 d-block mx-auto"
                                    alt="..." />
                                <div className="card-body text-white">
                                    <h2 className="card-title fw-bolder h1">Make
                                        <br />
                                        Your Day Easy
                                        <br />
                                        With TransGate</h2>
                                    <p className="card-text my-3">
                                        At Trans Gate, we provide accurate, professional academic translation for master’s theses, PhD dissertations, and scientific research.
                                    </p>
                                    <Link to='' className="btn bg-black text-white fw-semibold px-4 py-3">Get Started</Link>
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
