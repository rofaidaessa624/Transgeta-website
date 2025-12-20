import Breadcrumb from '../../Component/Breadcrumb/Breadcrumb'
import ConvertLang from '../../Component/ConvertLang/ConvertLang'
import Service from '../../Component/Services/Service'
import MakeAppointment from '../../Component/MakeAppointment/MakeAppointment'
import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";



export default function Services() {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <>
      <Breadcrumb pageName={"Services"} />
      {/* Language services carousal */}
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-11">
            <div className="bg-body-secondary p-5 rounded-5">
              <h2>Professional Translation Services</h2>
              <p>High-quality human translation between Arabic, English, and multiple international languages.</p>
              {/* <Carousel className="row" interval={null} controls={true} indicators={false} >
                <Carousel.Item className="col-lg-2 col-md-3 col-5 w-auto">
                  <div className="col-lg-4 col-md-8 col-12">
                    <ConvertLang fromLang={"English"} toLang={"Arabic"} /></div>

                </Carousel.Item>
                <Carousel.Item className="col-lg-2 col-md-3 col-5">
                  <div className="col-lg-4 col-md-8 col-12">
                    <ConvertLang fromLang={"English"} toLang={"Arabic"} /></div>

                </Carousel.Item>
                <Carousel.Item className="col-lg-2 col-md-3 col-5">
                  <div className="col-lg-4 col-md-8 col-12">
                    <ConvertLang fromLang={"English"} toLang={"Arabic"} /></div>

                </Carousel.Item>
                <Carousel.Item className="col-lg-2 col-md-3 col-5">
                  <div className="col-lg-4 col-md-8 col-12">
                    <ConvertLang fromLang={"English"} toLang={"Arabic"} /></div>

                </Carousel.Item>
                <Carousel.Item className="col-lg-2 col-md-3 col-5">
                  <div className="col-lg-4 col-md-8 col-12">
                    <ConvertLang fromLang={"English"} toLang={"Arabic"} /></div>

                </Carousel.Item>

              </Carousel> */}
              <div className="position-relative">
                <button className="swiper-prev btn btn-primary">‹</button>
                <button className="swiper-next btn btn-primary">›</button>

                <Swiper
                  className="w-100 rounded-2"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 16,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    992: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  }}
                  navigation={{
                    prevEl: ".swiper-prev",
                    nextEl: ".swiper-next",
                  }}
                  observer
                  observeParents
                  modules={[Navigation]}
                  slidesPerView={5}
                  spaceBetween={5}
                  loop={true}
                  speed={1000}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                >

                  <SwiperSlide
                  >
                    <ConvertLang fromLang={"English"} toLang={"Arabic"} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ConvertLang fromLang={"English"} toLang={"Arabic"} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ConvertLang fromLang={"English"} toLang={"Arabic"} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ConvertLang fromLang={"English"} toLang={"Arabic"} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ConvertLang fromLang={"English"} toLang={"Arabic"} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ConvertLang fromLang={"English"} toLang={"Arabic"} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ConvertLang fromLang={"English"} toLang={"Arabic"} />
                  </SwiperSlide>
                </Swiper>
              </div>


            </div>
          </div>
        </div>
      </div>
      <Service />
      <MakeAppointment />
    </>
  )
}
