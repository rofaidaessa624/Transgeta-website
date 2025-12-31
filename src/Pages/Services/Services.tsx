import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import ServiceCard from "../../Component/ServiceCard/ServiceCard";
import styles from "./ServicesLang.module.css";

import MakeAppointment from "../../Component/MakeAppointment/MakeAppointment";
import FAQSection from "../../Component/FAQSection/FAQSection";

// ✅ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";

// ✅ ConvertLang
import ConvertLang from "../../Component/ConvertLang/ConvertLang";

const BASE_URL = "http://127.0.0.1:8000";
const FALLBACK_IMG = "/images/blogImage.jpg";
const WHATSAPP_NUMBER = "201234567890";

type Service = {
  id: number;
  name_ar: string;
  name_en: string;
  category: "translation" | "academic" | "religious";
  icon_url: string | null;
  description_ar: string | null;
  description_en: string | null;
};

type SlideItem = {
  fromKey: string;
  toKey: string;
  fromCountry: string;
  toCountry: string;
  descKey: string;
};

export default function AllServicesPreview() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [translationServices, setTranslationServices] = useState<Service[]>([]);
  const [academicServices, setAcademicServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Slider Data (مرة واحدة)
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
  ];

  // ✅ Swiper Progress
  const swiperRef = useRef<SwiperType | null>(null);
  const total = slides.length;
  const [progress, setProgress] = useState((1 / total) * 100);

  const updateProgress = (swiper: SwiperType) => {
    const idx = swiper.realIndex ?? 0;
    setProgress(((idx + 1) / total) * 100);
  };

  // ✅ FAQ Items (مرة واحدة)
  const faqItems = [
    { q: t("faq.items.q1.q"), a: t("faq.items.q1.a") },
    { q: t("faq.items.q2.q"), a: t("faq.items.q2.a") },
    { q: t("faq.items.q3.q"), a: t("faq.items.q3.a") },
    { q: t("faq.items.q4.q"), a: t("faq.items.q4.a") },
    { q: t("faq.items.q5.q"), a: t("faq.items.q5.a") },
  ];

  // ✅ Fetch all services مرة واحدة
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/public/services`, {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        const allServices: Service[] = res.data?.data?.services || [];

        setTranslationServices(allServices.filter((s) => s.category === "translation"));
        setAcademicServices(allServices.filter((s) => s.category === "academic"));

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setError(t("services.translation.fetchError"));
        setLoading(false);
      });
  }, [t]);

  const getTitle = (s: Service) => (isArabic ? s.name_ar : s.name_en);

  const getDescription = (s: Service) =>
    (isArabic ? s.description_ar : s.description_en) || "";

  const toBullets = (text: string) =>
    text
      .split(/\r?\n/)
      .map((x) => x.trim())
      .filter(Boolean);

  const getImg = (s: Service) => {
    if (!s.icon_url) return FALLBACK_IMG;
    if (s.icon_url.startsWith("http")) return s.icon_url;
    return `${BASE_URL}/files/services/${s.icon_url}`;
  };

  const openWhatsApp = (serviceName: string) => {
    const message = isArabic
      ? `مرحباً، أريد طلب خدمة: ${serviceName}`
      : `Hello, I want to order this service: ${serviceName}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* ✅ Slider Section مرة واحدة فقط */}
      <section className={styles.wrapper}>
        <div className="container">
          <div className={styles.card}>
            <div className={styles.header}>
              <h2 className={styles.title}>{t("services.langSection.title")}</h2>
              <p className={styles.subtitle}>{t("services.langSection.subtitle")}</p>
            </div>

            <div className={styles.sliderWrap}>
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

              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  updateProgress(swiper);
                }}
                onSlideChange={updateProgress}
                loop={slides.length >= 6}
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
                    <ConvertLang {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className={styles.progressBar}>
                <span className={styles.progressLine} style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Services Sections */}
      <section className={`${styles.section} py-5`}>
        <div className={`container ${isArabic ? styles.rtl : ""}`}>

          {loading && (
            <p className="text-center text-muted">{t("loading")}</p>
          )}

          {!loading && error && (
            <div className={styles.errorBox}>
              <h3>{t("services.translation.somethingWrong")}</h3>
              <p>{error}</p>
            </div>
          )}

          {/* ✅ Translation Section */}
          {!loading && !error && (
            <>
              <h2 className="fw-bold text-center mb-4">
                {t("services.translation.title")}
              </h2>

              <div className="row g-4">
                {translationServices.map((service) => {
                  const title = getTitle(service);
                  const bullets = toBullets(getDescription(service));

                  return (
                    <div key={service.id} className="col-lg-4 col-md-6 col-12">
                      <ServiceCard
                        img={getImg(service)}
                        title={title}
                        bullets={bullets}
                        rating={5}
                        buttonText={t("services.orderNow")}
                        onButtonClick={() => openWhatsApp(title)}
                      />
                    </div>
                  );
                })}
              </div>

              <hr className="my-5" />

              {/* ✅ Academic Section */}
              <h2 className="fw-bold text-center mb-4">
                {t("services.academic.title")}
              </h2>

              <div className="row g-4">
                {academicServices.map((service) => {
                  const title = getTitle(service);
                  const bullets = toBullets(getDescription(service));

                  return (
                    <div key={service.id} className="col-lg-4 col-md-6 col-12">
                      <ServiceCard
                        img={getImg(service)}
                        title={title}
                        bullets={bullets}
                        rating={5}
                        buttonText={t("services.orderNow")}
                        onButtonClick={() => openWhatsApp(title)}
                      />
                    </div>
                  );
                })}
              </div>
            </>
          )}

          <MakeAppointment />
          <FAQSection image="/images/dispatcher.jpg" items={faqItems} />
        </div>
      </section>
    </>
  );
}
