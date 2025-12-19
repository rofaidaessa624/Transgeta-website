import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb"
import styles from './About.module.css'
import { MdVerifiedUser } from "react-icons/md";
import { AiFillClockCircle,AiOutlineCheckCircle } from "react-icons/ai";
import { HiAcademicCap } from "react-icons/hi2";
import Achievement from "../../Component/Achievement/Achievement";
import CoreValue from "../../Component/CoreValue/CoreValue";



export default function About() {
  return (
    <>
      <Breadcrumb pageName={"About"} />
      <section className="my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className={`${styles.aboutBg} col-lg-4 col-md-12 justify-content-end d-flex p-0 h-75 align-self-center`}>
              <img src="images/aboutImg.jpg" className="w-75 align-self-end border border-white border-5 me-3 " alt="" />
            </div>
            <div className="col-lg-6 col-sm-8 col-12 text-center ">
              <img src="/images/logo.png" className="w-25" alt="" />
              <h2 className='fw-bolder mb-3 display-5 text-start'>About Us</h2>
              <p className="text-muted text-start "><span className="fw-bolder">Trans-Gate</span> is dedicated to bridging knowledge and empowering minds. We
                provide professional translation services for all Documents, ensuring every word
                is precise, clear, and impactful. Our approach goes beyond language, focusing on
                conveying the full meaning, tone, and academic integrity of your work.
              </p>
              {/* <p className="text-muted text-start ">Alongside translation, we offer expert academic consultations. We guide students
                and researchers in structuring their projects, enhancing clarity, and maximizing
                academic impact. Our mission is to support your intellectual growth, helping you
                communicate ideas effectively and achieve your highest potential.
              </p>
              <p className="text-muted text-start ">At Trans-Gate, our core values of accuracy, integrity, professionalism, and client
                empowerment shape every project. We combine meticulous attention to detail
                with a commitment to inspiration and clarity, ensuring each client receives
                guidance and service that elevates their work and strengthens their academic
                journey.</p> */}
              <div className="row align-items-stretch gy-3">
                <div className="col-md-6 col-12 ">
                  <div className="card mb-3 h-100 d-flex flex-column justify-content-center">
                    <div className="row g-0">
                      <div className="col-md-4 d-flex justify-content-center align-items-center ">
                        <AiOutlineCheckCircle size={30} className="cricledIcon text-white bg-colored" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Accuracy</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                                <div className="col-md-6 col-12 ">
                  <div className="card mb-3 h-100 d-flex flex-column justify-content-center">
                    <div className="row g-0">
                      <div className="col-md-4 d-flex justify-content-center align-items-center ">
<HiAcademicCap size={30} className="cricledIcon txt-colored bg-white"/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Academic Excellence</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                                <div className="col-md-6 col-12 ">
                  <div className="card mb-3 h-100 d-flex flex-column justify-content-center">
                    <div className="row g-0">
                      <div className="col-md-4 d-flex justify-content-center align-items-center ">
                        <AiFillClockCircle className="cricledIcon txt-colored bg-white"  size={30}/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Commitment to final agreed Deadlines.</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                                <div className="col-md-6 col-12 ">
                  <div className="card mb-3 h-100 d-flex flex-column justify-content-center">
                    <div className="row g-0">
                      <div className="col-md-4 d-flex justify-content-center align-items-center ">
                        <MdVerifiedUser size={25} className="cricledIcon txt-colored bg-white"/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title text-start">Integrity</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <Achievement/>
        <CoreValue/>
      </section>
    </>
  )
}
