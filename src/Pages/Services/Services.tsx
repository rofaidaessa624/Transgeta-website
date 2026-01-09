import { useEffect, useMemo, useRef, useState } from "react";
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

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://api.transgateacd.com";
const FALLBACK_IMG = "/images/blogImage.jpg";
const WHATSAPP_NUMBER = "+201234567890";

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
  descKey: string; // ✅ add this
};


export default function AllServicesPreview() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [translationServices, setTranslationServices] = useState<Service[]>([]);
  const [academicServices, setAcademicServices] = useState<Service[]>([]);
  // const [religiousServices, setReligiousServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Slider Data (كل اللغات) - النصوص داخل الصفحة
  const slides: SlideItem[] = useMemo(() => {
    const texts = {
      ar_en: isArabic ? "ترجمة عربي إلى إنجليزي" : "Arabic to English Translation",
      en_ar: isArabic ? "ترجمة إنجليزي إلى عربي" : "English to Arabic Translation",

      ar_fr: isArabic ? "ترجمة عربي إلى فرنسي" : "Arabic to French Translation",
      fr_ar: isArabic ? "ترجمة فرنسي إلى عربي" : "French to Arabic Translation",
      fr_en: isArabic ? "ترجمة فرنسي إلى إنجليزي" : "French to English Translation",
      en_fr: isArabic ? "ترجمة إنجليزي إلى فرنسي" : "English to French Translation",

      ar_es: isArabic ? "ترجمة عربي إلى إسباني" : "Arabic to Spanish Translation",
      es_ar: isArabic ? "ترجمة إسباني إلى عربي" : "Spanish to Arabic Translation",
      es_en: isArabic ? "ترجمة إسباني إلى إنجليزي" : "Spanish to English Translation",
      en_es: isArabic ? "ترجمة إنجليزي إلى إسباني" : "English to Spanish Translation",

      ar_it: isArabic ? "ترجمة عربي إلى إيطالي" : "Arabic to Italian Translation",
      it_ar: isArabic ? "ترجمة إيطالي إلى عربي" : "Italian to Arabic Translation",
      it_en: isArabic ? "ترجمة إيطالي إلى إنجليزي" : "Italian to English Translation",
      en_it: isArabic ? "ترجمة إنجليزي إلى إيطالي" : "English to Italian Translation",

      el_ar: isArabic ? "ترجمة يوناني إلى عربي" : "Greek to Arabic Translation",
      el_en: isArabic ? "ترجمة يوناني إلى إنجليزي" : "Greek to English Translation",

      ar_ru: isArabic ? "ترجمة عربي إلى روسي" : "Arabic to Russian Translation",
      ru_ar: isArabic ? "ترجمة روسي إلى عربي" : "Russian to Arabic Translation",
      ru_en: isArabic ? "ترجمة روسي إلى إنجليزي" : "Russian to English Translation",
      en_ru: isArabic ? "ترجمة إنجليزي إلى روسي" : "English to Russian Translation",

      ar_uk: isArabic ? "ترجمة عربي إلى أوكراني" : "Arabic to Ukrainian Translation",
      uk_ar: isArabic ? "ترجمة أوكراني إلى عربي" : "Ukrainian to Arabic Translation",
      en_uk: isArabic ? "ترجمة إنجليزي إلى أوكراني" : "English to Ukrainian Translation",
      uk_en: isArabic ? "ترجمة أوكراني إلى إنجليزي" : "Ukrainian to English Translation",

      ar_bg: isArabic ? "ترجمة عربي إلى بلغاري" : "Arabic to Bulgarian Translation",
      bg_ar: isArabic ? "ترجمة بلغاري إلى عربي" : "Bulgarian to Arabic Translation",
      bg_en: isArabic ? "ترجمة بلغاري إلى إنجليزي" : "Bulgarian to English Translation",
      en_bg: isArabic ? "ترجمة إنجليزي إلى بلغاري" : "English to Bulgarian Translation",

      ar_zh: isArabic ? "ترجمة عربي إلى صيني" : "Arabic to Chinese Translation",
      zh_ar: isArabic ? "ترجمة صيني إلى عربي" : "Chinese to Arabic Translation",
      zh_en: isArabic ? "ترجمة صيني إلى إنجليزي" : "Chinese to English Translation",
      en_zh: isArabic ? "ترجمة إنجليزي إلى صيني" : "English to Chinese Translation",

      ar_tr: isArabic ? "ترجمة عربي إلى تركي" : "Arabic to Turkish Translation",
      tr_ar: isArabic ? "ترجمة تركي إلى عربي" : "Turkish to Arabic Translation",
      tr_en: isArabic ? "ترجمة تركي إلى إنجليزي" : "Turkish to English Translation",
      en_tr: isArabic ? "ترجمة إنجليزي إلى تركي" : "English to Turkish Translation",

      ar_de: isArabic ? "ترجمة عربي إلى ألماني" : "Arabic to German Translation",
      de_ar: isArabic ? "ترجمة ألماني إلى عربي" : "German to Arabic Translation",
      de_en: isArabic ? "ترجمة ألماني إلى إنجليزي" : "German to English Translation",
      en_de: isArabic ? "ترجمة إنجليزي إلى ألماني" : "English to German Translation",

      ar_sr: isArabic ? "ترجمة عربي إلى صربي" : "Arabic to Serbian Translation",
      sr_ar: isArabic ? "ترجمة صربي إلى عربي" : "Serbian to Arabic Translation",
      sr_en: isArabic ? "ترجمة صربي إلى إنجليزي" : "Serbian to English Translation",
      en_sr: isArabic ? "ترجمة إنجليزي إلى صربي" : "English to Serbian Translation",

      ar_pt: isArabic ? "ترجمة عربي إلى برتغالي" : "Arabic to Portuguese Translation",
      pt_ar: isArabic ? "ترجمة برتغالي إلى عربي" : "Portuguese to Arabic Translation",
      pt_en: isArabic ? "ترجمة برتغالي إلى إنجليزي" : "Portuguese to English Translation",
      en_pt: isArabic ? "ترجمة إنجليزي إلى برتغالي" : "English to Portuguese Translation",

      ar_ur: isArabic ? "ترجمة عربي إلى أوردو" : "Arabic to Urdu Translation",
      ur_ar: isArabic ? "ترجمة أوردو إلى عربي" : "Urdu to Arabic Translation",

      // ✅ Austrian German
      deat_ar: isArabic ? "ترجمة نمساوي إلى عربي" : "Austrian German to Arabic Translation",
      deat_en: isArabic ? "ترجمة نمساوي إلى إنجليزي" : "Austrian German to English Translation",

      // ✅ Persian
      ar_fa: isArabic ? "ترجمة عربي إلى فارسي" : "Arabic to Persian Translation",
      fa_ar: isArabic ? "ترجمة فارسي إلى عربي" : "Persian to Arabic Translation",
      fa_en: isArabic ? "ترجمة فارسي إلى إنجليزي" : "Persian to English Translation",
      en_fa: isArabic ? "ترجمة إنجليزي إلى فارسي" : "English to Persian Translation",

      // ✅ Romanian
      ar_ro: isArabic ? "ترجمة عربي إلى روماني" : "Arabic to Romanian Translation",
      ro_ar: isArabic ? "ترجمة روماني إلى عربي" : "Romanian to Arabic Translation",
      en_ro: isArabic ? "ترجمة إنجليزي إلى روماني" : "English to Romanian Translation",
      ro_en: isArabic ? "ترجمة روماني إلى إنجليزي" : "Romanian to English Translation",

      // ✅ Korean
      ar_ko: isArabic ? "ترجمة عربي إلى كوري" : "Arabic to Korean Translation",
      ko_ar: isArabic ? "ترجمة كوري إلى عربي" : "Korean to Arabic Translation",
    };

    return [
      { fromKey: "ar", toKey: "en", fromCountry: "eg", toCountry: "gb", descKey: texts.ar_en },
      { fromKey: "en", toKey: "ar", fromCountry: "gb", toCountry: "eg", descKey: texts.en_ar },

      { fromKey: "ar", toKey: "fr", fromCountry: "eg", toCountry: "fr", descKey: texts.ar_fr },
      { fromKey: "fr", toKey: "ar", fromCountry: "fr", toCountry: "eg", descKey: texts.fr_ar },
      { fromKey: "fr", toKey: "en", fromCountry: "fr", toCountry: "gb", descKey: texts.fr_en },
      { fromKey: "en", toKey: "fr", fromCountry: "gb", toCountry: "fr", descKey: texts.en_fr },

      { fromKey: "ar", toKey: "es", fromCountry: "eg", toCountry: "es", descKey: texts.ar_es },
      { fromKey: "es", toKey: "ar", fromCountry: "es", toCountry: "eg", descKey: texts.es_ar },
      { fromKey: "es", toKey: "en", fromCountry: "es", toCountry: "gb", descKey: texts.es_en },
      { fromKey: "en", toKey: "es", fromCountry: "gb", toCountry: "es", descKey: texts.en_es },

      { fromKey: "ar", toKey: "it", fromCountry: "eg", toCountry: "it", descKey: texts.ar_it },
      { fromKey: "it", toKey: "ar", fromCountry: "it", toCountry: "eg", descKey: texts.it_ar },
      { fromKey: "it", toKey: "en", fromCountry: "it", toCountry: "gb", descKey: texts.it_en },
      { fromKey: "en", toKey: "it", fromCountry: "gb", toCountry: "it", descKey: texts.en_it },

      { fromKey: "el", toKey: "ar", fromCountry: "gr", toCountry: "eg", descKey: texts.el_ar },
      { fromKey: "el", toKey: "en", fromCountry: "gr", toCountry: "gb", descKey: texts.el_en },

      { fromKey: "ar", toKey: "ru", fromCountry: "eg", toCountry: "ru", descKey: texts.ar_ru },
      { fromKey: "ru", toKey: "ar", fromCountry: "ru", toCountry: "eg", descKey: texts.ru_ar },
      { fromKey: "ru", toKey: "en", fromCountry: "ru", toCountry: "gb", descKey: texts.ru_en },
      { fromKey: "en", toKey: "ru", fromCountry: "gb", toCountry: "ru", descKey: texts.en_ru },

      { fromKey: "ar", toKey: "uk", fromCountry: "eg", toCountry: "ua", descKey: texts.ar_uk },
      { fromKey: "uk", toKey: "ar", fromCountry: "ua", toCountry: "eg", descKey: texts.uk_ar },
      { fromKey: "en", toKey: "uk", fromCountry: "gb", toCountry: "ua", descKey: texts.en_uk },
      { fromKey: "uk", toKey: "en", fromCountry: "ua", toCountry: "gb", descKey: texts.uk_en },

      { fromKey: "ar", toKey: "bg", fromCountry: "eg", toCountry: "bg", descKey: texts.ar_bg },
      { fromKey: "bg", toKey: "ar", fromCountry: "bg", toCountry: "eg", descKey: texts.bg_ar },
      { fromKey: "bg", toKey: "en", fromCountry: "bg", toCountry: "gb", descKey: texts.bg_en },
      { fromKey: "en", toKey: "bg", fromCountry: "gb", toCountry: "bg", descKey: texts.en_bg },

      { fromKey: "ar", toKey: "zh", fromCountry: "eg", toCountry: "cn", descKey: texts.ar_zh },
      { fromKey: "zh", toKey: "ar", fromCountry: "cn", toCountry: "eg", descKey: texts.zh_ar },
      { fromKey: "zh", toKey: "en", fromCountry: "cn", toCountry: "gb", descKey: texts.zh_en },
      { fromKey: "en", toKey: "zh", fromCountry: "gb", toCountry: "cn",   descKey: texts.en_zh },

      { fromKey: "ar", toKey: "tr", fromCountry: "eg", toCountry: "tr", descKey : texts.ar_tr },
      { fromKey: "tr", toKey: "ar", fromCountry: "tr", toCountry: "eg", descKey: texts.tr_ar },
      { fromKey: "tr", toKey: "en", fromCountry: "tr", toCountry: "gb", descKey: texts.tr_en },
      { fromKey: "en", toKey: "tr", fromCountry: "gb", toCountry: "tr", descKey: texts.en_tr },

      { fromKey: "ar", toKey: "de", fromCountry: "eg", toCountry: "de", descKey: texts.ar_de },
      { fromKey: "de", toKey: "ar", fromCountry: "de", toCountry: "eg", descKey: texts.de_ar },
      { fromKey: "de", toKey: "en", fromCountry: "de", toCountry: "gb", descKey: texts.de_en },
      { fromKey: "en", toKey: "de", fromCountry: "gb", toCountry: "de", descKey: texts.en_de },

      { fromKey: "ar", toKey: "sr", fromCountry: "eg", toCountry: "rs", descKey: texts.ar_sr },
      { fromKey: "sr", toKey: "ar", fromCountry: "rs", toCountry: "eg", descKey: texts.sr_ar },
      { fromKey: "sr", toKey: "en", fromCountry: "rs", toCountry: "gb", descKey: texts.sr_en },
      { fromKey: "en", toKey: "sr", fromCountry: "gb", toCountry: "rs", descKey: texts.en_sr },

      { fromKey: "ar", toKey: "pt", fromCountry: "eg", toCountry: "pt", descKey: texts.ar_pt },
      { fromKey: "pt", toKey: "ar", fromCountry: "pt", toCountry: "eg", descKey: texts.pt_ar },
      { fromKey: "pt", toKey: "en", fromCountry: "pt", toCountry: "gb", descKey: texts.pt_en },
      { fromKey: "en", toKey: "pt", fromCountry: "gb", toCountry: "pt", descKey: texts.en_pt },

      { fromKey: "ar", toKey: "ur", fromCountry: "eg", toCountry: "pk", descKey: texts.ar_ur },
      { fromKey: "ur", toKey: "ar", fromCountry: "pk", toCountry: "eg", descKey: texts.ur_ar },

      { fromKey: "de", toKey: "ar", fromCountry: "at", toCountry: "eg", descKey: texts.deat_ar },
      { fromKey: "de", toKey: "en", fromCountry: "at", toCountry: "gb", descKey: texts.deat_en },

      { fromKey: "ar", toKey: "fa", fromCountry: "eg", toCountry: "ir", descKey: texts.ar_fa },
      { fromKey: "fa", toKey: "ar", fromCountry: "ir", toCountry: "eg", descKey: texts.fa_ar },
      { fromKey: "fa", toKey: "en", fromCountry: "ir", toCountry: "gb", descKey: texts.fa_en },
      { fromKey: "en", toKey: "fa", fromCountry: "gb", toCountry: "ir", descKey: texts.en_fa },

      { fromKey: "ar", toKey: "ro", fromCountry: "eg", toCountry: "ro", descKey: texts.ar_ro },
      { fromKey: "ro", toKey: "ar", fromCountry: "ro", toCountry: "eg", descKey: texts.ro_ar },
      { fromKey: "en", toKey: "ro", fromCountry: "gb", toCountry: "ro", descKey: texts.en_ro },
      { fromKey: "ro", toKey: "en", fromCountry: "ro", toCountry: "gb", descKey: texts.ro_en },

      { fromKey: "ar", toKey: "ko", fromCountry: "eg", toCountry: "kr", descKey: texts.ar_ko },
      { fromKey: "ko", toKey: "ar", fromCountry: "kr", toCountry: "eg", descKey: texts.ko_ar },
    ];
  }, [isArabic]);

  // ✅ Swiper Progress
  const swiperRef = useRef<SwiperType | null>(null);
  const total = slides.length;
  const [progress, setProgress] = useState((1 / total) * 100);

  const updateProgress = (swiper: SwiperType) => {
    const idx = swiper.realIndex ?? 0;
    setProgress(((idx + 1) / total) * 100);
  };

  // ✅ مهم جدًا لحل مشكلة الريفريش عند تغيير اللغة
  const [swiperKey, setSwiperKey] = useState(0);
  useEffect(() => {
    setSwiperKey((prev) => prev + 1);
  }, [i18n.language]);

  // ✅ FAQ Items
  const faqItems = [
    { q: t("faq.items.q1.q"), a: t("faq.items.q1.a") },
    { q: t("faq.items.q2.q"), a: t("faq.items.q2.a") },
    { q: t("faq.items.q3.q"), a: t("faq.items.q3.a") },
    { q: t("faq.items.q4.q"), a: t("faq.items.q4.a") },
    { q: t("faq.items.q5.q"), a: t("faq.items.q5.a") },
  ];

  // ✅ Fetch services مرة واحدة
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/public/services`, {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        const allServices: Service[] = res.data?.data?.services || [];

        setTranslationServices(allServices.filter((s) => s.category === "translation"));
        setAcademicServices(allServices.filter((s) => s.category === "academic"));
        // setReligiousServices(allServices.filter((s) => s.category === "religious"));

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setError(t("services.translation.fetchError"));
        setLoading(false);
      });
  }, [t]);

  const getTitle = (s: Service) => (isArabic ? s.name_ar : s.name_en);
  const getDescription = (s: Service) => (isArabic ? s.description_ar : s.description_en) || "";

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
    <div dir={isArabic ? "rtl" : "ltr"}>
      {/* ✅ Slider Section */}
      <section className={styles.wrapper}>
        <div className="container">
          <div className={styles.card}>
            <div className={styles.header}>
              <h2 className={styles.title} style={{ direction: isArabic ? "rtl" : "ltr" }}>
                {t("services.langSection.title")}
              </h2>
              <p className={styles.subtitle} style={{ direction: isArabic ? "rtl" : "ltr" }}>
                {t("services.langSection.subtitle")}
              </p>
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
                key={swiperKey}
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

          {loading && <p className="text-center text-muted">{t("loading")}</p>}

          {!loading && error && (
            <div className={styles.errorBox}>
              <h3>{t("services.translation.somethingWrong")}</h3>
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && (
            <>
              {/* ✅ Translation */}
              <h2 className="fw-bold text-center mb-4">{t("services.translation.title")}</h2>
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

              {/* ✅ Academic */}
              <h2 className="fw-bold text-center mb-4">{t("services.academic.title")}</h2>
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

              <hr className="my-5" />

              {/* ✅ Religious */}
              {/* <h2 className="fw-bold text-center mb-4">
                {isArabic ? "الخدمات الدينية" : "Religious Services"}
              </h2>
              <div className="row g-4">
                {religiousServices.map((service) => {
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
              </div> */}
            </>
          )}

          <MakeAppointment />
          <FAQSection image="/images/dispatcher.jpg" items={faqItems} />
        </div>
      </section>
    </div>
  );
}
