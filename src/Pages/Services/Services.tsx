import Breadcrumb from '../../Component/Breadcrumb/Breadcrumb'
import { Carousel } from 'react-bootstrap'
import ConvertLang from '../../Component/ConvertLang/ConvertLang'
import Service from '../../Component/Services/Service'
import MakeAppointment from '../../Component/MakeAppointment/MakeAppointment'

export default function Services() {
  return (
    <>
    <Breadcrumb pageName={"Services"}/>
    {/* Language services carousal */}
    <div className="container ">
        <div className="row justify-content-center">
            <div className="col-11">
                <div className="bg-body-secondary p-5 rounded-5">
                    <h2>Professional Translation Services</h2>
                    <p>High-quality human translation between Arabic, English, and multiple international languages.</p>
    <Carousel className="row" interval={null}>
                      <Carousel.Item className="col-lg-2 col-md-3 col-5">

<ConvertLang fromLang={"English"} toLang={"Arabic"}/>
      </Carousel.Item>
                      <Carousel.Item className="col-lg-2 col-md-3 col-5">

<ConvertLang fromLang={"English"} toLang={"Arabic"}/>
      </Carousel.Item>
                      <Carousel.Item className="col-lg-2 col-md-3 col-5">

<ConvertLang fromLang={"English"} toLang={"Arabic"}/>
      </Carousel.Item>

    </Carousel>

                </div>
            </div>
        </div>
    </div>
    <Service/>
    <MakeAppointment/>
    </>
  )
}
