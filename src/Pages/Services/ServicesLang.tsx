import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import Service from "../../Component/Services/Service";
import ConvertLang from "../../Component/ConvertLang/ConvertLang";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import styles from "./ServicesLang.module.css";
import { useTranslation } from "react-i18next";

// ✅ New Components
import MakeAppointmen from "../../Component/MakeAppointment/MakeAppointment.tsx"
import FAQSection from "../../Component/FAQSection/FAQSection";


type SlideItem = {
  fromKey: string;
  toKey: string;
  fromCountry: string;
  toCountry: string;
  descKey: string; // ✅ add this
};


export default function ServicesLang() {
  const swiperRef = useRef<SwiperType | null>(null);
  const { t } = useTranslation();

  // ✅ FAQ Items
  const faqItems = [
    {
      q: t("faq.items.q1.q"),
      a: t("faq.items.q1.a"),
    },
    {
      q: t("faq.items.q2.q"),
      a: t("faq.items.q2.a"),
    },
    {
      q: t("faq.items.q3.q"),
      a: t("faq.items.q3.a"),
    },
    {
      q: t("faq.items.q4.q"),
      a: t("faq.items.q4.a"),
    },
    {
      q: t("faq.items.q5.q"),
      a: t("faq.items.q5.a"),
    },
  ];

  // ✅ Slides Data
  const slides: SlideItem[] = [
    {
      fromKey: "arabic",
      toKey: "english",
      fromCountry: "sa",
      toCountry: "gb",
      descKey: "services.langCards.ar_en",
    },
    {
      fromKey: "arabic",
      toKey: "french",
      fromCountry: "sa",
      toCountry: "fr",
      descKey: "services.langCards.ar_fr",
    },
    {
      fromKey: "english",
      toKey: "french",
      fromCountry: "gb",
      toCountry: "fr",
      descKey: "services.langCards.en_fr",
    },
    {
      fromKey: "arabic",
      toKey: "spanish",
      fromCountry: "sa",
      toCountry: "es",
      descKey: "services.langCards.ar_es",
    },
  ];

  const total = slides.length;
  const [progress, setProgress] = useState((1 / total) * 100);

  const updateProgress = (swiper: SwiperType) => {
    const idx = swiper.realIndex ?? 0;
    setProgress(((idx + 1) / total) * 100);
  };

  return (
    <>
      {/* ✅ Breadcrumb */}
<Breadcrumb pageName={t("services.pageTitle")} />
<MakeAppointmen />
  <FAQSection image="/images/faqGirl.jpg" items={faqItems} />

      {/* ✅ Language Services Carousel */}
      <section className={styles.wrapper}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className={styles.card}>
                {/* Header */}
                <div className={styles.header}>
                  <h2 className={styles.title}>{t("services.langSection.title")}</h2>
                  <p className={styles.subtitle}>{t("services.langSection.subtitle")}</p>

                  {/* ✅ اختبار سريع (احذفيه بعد التأكد) */}
                  <p style={{ color: "red" }}>{t("languages.english")}</p>
                </div>

                {/* Slider */}
                <div className={styles.sliderWrap}>
                  {/* Navigation Buttons */}
                  <button
                    className={`${styles.navBtn} ${styles.prev}`}
                    onClick={() => swiperRef.current?.slidePrev()}
                    aria-label="Previous"
                    type="button"
                  >
                    ‹
                  </button>

                  <button
                    className={`${styles.navBtn} ${styles.next}`}
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label="Next"
                    type="button"
                  >
                    ›
                  </button>

                  {/* Swiper */}
                  <Swiper
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                      updateProgress(swiper);
                    }}
                    onSlideChange={updateProgress}
                    loop
                    speed={900}
                    spaceBetween={22}
                    breakpoints={{
                      0: { slidesPerView: 1.15 },
                      576: { slidesPerView: 1.8 },
                      768: { slidesPerView: 2.6 },
                      992: { slidesPerView: 3.2 },
                      1200: { slidesPerView: 3.6 },
                    }}
                    className={styles.swiper}
                  >
                    {slides.map((item, idx) => (
                      <SwiperSlide key={idx} className={styles.slide}>
                        <ConvertLang
                          fromKey={item.fromKey}
                          toKey={item.toKey}
                          fromCountry={item.fromCountry}
                          toCountry={item.toCountry}
                          descKey={item.descKey}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Progress Bar */}
                  <div className={styles.progressBar}>
                    <span
                      className={styles.progressLine}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Services Section */}
      <Service />

      {/* ✅ Make Appointment Component */}
      <MakeAppointmen />
    </>
  );
}
