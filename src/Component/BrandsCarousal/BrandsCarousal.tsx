import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function BrandsCarousal() {
  return (
    <section className="my-5 bg-colored">
        <div className="container">
            <div className="row justify-content-center">
                <h2 className="text-center text-white">Our Partners</h2>
                <div className="col-10 mx-auto my-3">


<Swiper
className="w-100 rounded-2"
breakpoints={{
    0: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  }}
  observer
  observeParents
  modules={[Autoplay]}
  slidesPerView={5}
  spaceBetween={5}
    loop={true}
  speed={1000}
  autoplay={{ delay: 2000, disableOnInteraction: false }}
>

    <SwiperSlide
    >
      <img src='/images/workCardImg7.png' alt="brand" className="brand-img border border-light-subtle border-1 rounded-2"/>
    </SwiperSlide>
    <SwiperSlide>
      <img src='/images/workCardImg6.png' alt="brand" className="brand-img border border-light-subtle border-1 rounded-2" />
    </SwiperSlide>
        <SwiperSlide>
      <img src='/images/workCardImg5.png' alt="brand" className="brand-img border border-light-subtle border-1 rounded-2" />
    </SwiperSlide>
        <SwiperSlide>
      <img src='/images/workCardImg4.png' alt="brand" className="brand-img border border-light-subtle border-1 rounded-2" />
    </SwiperSlide>
        <SwiperSlide>
      <img src='/images/workCardImg3.png' alt="brand" className="brand-img border border-light-subtle border-1 rounded-2" />
    </SwiperSlide>
            <SwiperSlide>
      <img src='/images/workCardImg2.png' alt="brand" className="brand-img border border-light-subtle border-1 rounded-2" />
    </SwiperSlide>
                <SwiperSlide>
      <img src='/images/workCardImg1.png' alt="brand" className="brand-img border border-light-subtle border-1 rounded-2" />
    </SwiperSlide>
</Swiper>

                </div>
            </div>
        </div>
    </section>
  )
}
