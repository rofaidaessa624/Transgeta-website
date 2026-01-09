import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./AllTranslationServices.module.css";

import MakeAppointmen from "../MakeAppointment/MakeAppointment.tsx";
import FAQSection from "../FAQSection/FAQSection";

// ✅ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";

// ✅ ConvertLang
import ConvertLang from "../ConvertLang/ConvertLang";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://api.transgateacd.com";
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
  descKey: string; // ✅ add this
};


export default function AllTranslationServices() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Swiper Ref
  const swiperRef = useRef<SwiperType | null>(null);

  // ✅ كل اللغات المطلوبة
  const slides: SlideItem[] = [
    // ✅ عربي ↔ إنجليزي
    { fromKey: "ar", toKey: "en", fromCountry: "eg", toCountry: "gb", descKey: "ar_en" },
    { fromKey: "en", toKey: "ar", fromCountry: "gb", toCountry: "eg", descKey: "en_ar" },

    // ✅ فرنسي ↔ عربي
    { fromKey: "fr", toKey: "ar", fromCountry: "fr", toCountry: "eg", descKey: "fr_ar" },
    { fromKey: "ar", toKey: "fr", fromCountry: "eg", toCountry: "fr", descKey: "ar_fr" },

    // ✅ فرنسي ↔ إنجليزي
    { fromKey: "fr", toKey: "en", fromCountry: "fr", toCountry: "gb", descKey: "fr_en" },
    { fromKey: "en", toKey: "fr", fromCountry: "gb", toCountry: "fr", descKey: "en_fr" },

    // ✅ إسباني ↔ عربي
    { fromKey: "es", toKey: "ar", fromCountry: "es", toCountry: "eg", descKey: "es_ar" },
    { fromKey: "ar", toKey: "es", fromCountry: "eg", toCountry: "es", descKey: "ar_es" },

    // ✅ إسباني ↔ إنجليزي
    { fromKey: "es", toKey: "en", fromCountry: "es", toCountry: "gb", descKey: "es_en" },
    { fromKey: "en", toKey: "es", fromCountry: "gb", toCountry: "es", descKey: "en_es" },

    // ✅ إيطالي ↔ عربي
    { fromKey: "it", toKey: "ar", fromCountry: "it", toCountry: "eg", descKey: "it_ar" },
    { fromKey: "ar", toKey: "it", fromCountry: "eg", toCountry: "it", descKey: "ar_it" },

    // ✅ إيطالي ↔ إنجليزي
    { fromKey: "it", toKey: "en", fromCountry: "it", toCountry: "gb", descKey: "it_en" },
    { fromKey: "en", toKey: "it", fromCountry: "gb", toCountry: "it", descKey: "en_it" },

    // ✅ يوناني ↔ عربي
    { fromKey: "el", toKey: "ar", fromCountry: "gr", toCountry: "eg", descKey: "el_ar" },
    { fromKey: "ar", toKey: "el", fromCountry: "eg", toCountry: "gr", descKey: "ar_el" },

    // ✅ يوناني ↔ إنجليزي
    { fromKey: "el", toKey: "en", fromCountry: "gr", toCountry: "gb", descKey: "el_en" },
    { fromKey: "en", toKey: "el", fromCountry: "gb", toCountry: "gr", descKey: "en_el" },

    // ✅ روسي ↔ عربي
    { fromKey: "ru", toKey: "ar", fromCountry: "ru", toCountry: "eg", descKey: "ru_ar" },
    { fromKey: "ar", toKey: "ru", fromCountry: "eg", toCountry: "ru", descKey: "ar_ru" },

    // ✅ روسي ↔ إنجليزي
    { fromKey: "ru", toKey: "en", fromCountry: "ru", toCountry: "gb", descKey: "ru_en" },
    { fromKey: "en", toKey: "ru", fromCountry: "gb", toCountry: "ru", descKey: "en_ru" },

    // ✅ أوكراني ↔ عربي
    { fromKey: "uk", toKey: "ar", fromCountry: "ua", toCountry: "eg", descKey: "uk_ar" },
    { fromKey: "ar", toKey: "uk", fromCountry: "eg", toCountry: "ua", descKey: "ar_uk" },

    // ✅ إنجليزي ↔ أوكراني
    { fromKey: "en", toKey: "uk", fromCountry: "gb", toCountry: "ua", descKey: "en_uk" },
    { fromKey: "uk", toKey: "en", fromCountry: "ua", toCountry: "gb", descKey: "uk_en" },

    // ✅ بلغاري ↔ عربي
    { fromKey: "bg", toKey: "ar", fromCountry: "bg", toCountry: "eg", descKey: "bg_ar" },
    { fromKey: "ar", toKey: "bg", fromCountry: "eg", toCountry: "bg", descKey: "ar_bg" },

    // ✅ بلغاري ↔ إنجليزي
    { fromKey: "bg", toKey: "en", fromCountry: "bg", toCountry: "gb", descKey: "bg_en" },
    { fromKey: "en", toKey: "bg", fromCountry: "gb", toCountry: "bg", descKey: "en_bg" },

    // ✅ صيني ↔ عربي
    { fromKey: "zh", toKey: "ar", fromCountry: "cn", toCountry: "eg", descKey: "zh_ar" },
    { fromKey: "ar", toKey: "zh", fromCountry: "eg", toCountry: "cn", descKey: "ar_zh" },

    // ✅ صيني ↔ إنجليزي
    { fromKey: "zh", toKey: "en", fromCountry: "cn", toCountry: "gb", descKey: "zh_en" },
    { fromKey: "en", toKey: "zh", fromCountry: "gb", toCountry: "cn", descKey: "en_zh" },

    // ✅ تركي ↔ عربي
    { fromKey: "tr", toKey: "ar", fromCountry: "tr", toCountry: "eg", descKey: "tr_ar" },
    { fromKey: "ar", toKey: "tr", fromCountry: "eg", toCountry: "tr", descKey: "ar_tr" },

    // ✅ تركي ↔ إنجليزي
    { fromKey: "tr", toKey: "en", fromCountry: "tr", toCountry: "gb", descKey: "tr_en" },
    { fromKey: "en", toKey: "tr", fromCountry: "gb", toCountry: "tr", descKey: "en_tr" },

    // ✅ ألماني ↔ عربي
    { fromKey: "de", toKey: "ar", fromCountry: "de", toCountry: "eg", descKey: "de_ar" },
    { fromKey: "ar", toKey: "de", fromCountry: "eg", toCountry: "de", descKey: "ar_de" },

    // ✅ ألماني ↔ إنجليزي
    { fromKey: "de", toKey: "en", fromCountry: "de", toCountry: "gb", descKey: "de_en" },
    { fromKey: "en", toKey: "de", fromCountry: "gb", toCountry: "de", descKey: "en_de" },

    // ✅ صربي ↔ عربي
    { fromKey: "sr", toKey: "ar", fromCountry: "rs", toCountry: "eg", descKey: "sr_ar" },
    { fromKey: "ar", toKey: "sr", fromCountry: "eg", toCountry: "rs", descKey: "ar_sr" },

    // ✅ صربي ↔ إنجليزي
    { fromKey: "sr", toKey: "en", fromCountry: "rs", toCountry: "gb", descKey: "sr_en" },
    { fromKey: "en", toKey: "sr", fromCountry: "gb", toCountry: "rs", descKey: "en_sr" },

    // ✅ برتغالي ↔ عربي
    { fromKey: "pt", toKey: "ar", fromCountry: "pt", toCountry: "eg", descKey: "pt_ar" },
    { fromKey: "ar", toKey: "pt", fromCountry: "eg", toCountry: "pt", descKey: "ar_pt" },

    // ✅ برتغالي ↔ إنجليزي
    { fromKey: "pt", toKey: "en", fromCountry: "pt", toCountry: "gb", descKey: "pt_en" },
    { fromKey: "en", toKey: "pt", fromCountry: "gb", toCountry: "pt", descKey: "en_pt" },

    // ✅ أوردو ↔ عربي
    { fromKey: "ur", toKey: "ar", fromCountry: "pk", toCountry: "eg", descKey: "ur_ar" },
    { fromKey: "ar", toKey: "ur", fromCountry: "eg", toCountry: "pk", descKey: "ar_ur" },

    // ✅ نمساوي ↔ عربي (Austrian German)
    { fromKey: "deat", toKey: "ar", fromCountry: "at", toCountry: "eg", descKey: "deat_ar" },
    { fromKey: "ar", toKey: "deat", fromCountry: "eg", toCountry: "at", descKey: "ar_deat" },

    // ✅ نمساوي ↔ إنجليزي
    { fromKey: "deat", toKey: "en", fromCountry: "at", toCountry: "gb", descKey: "deat_en" },
    { fromKey: "en", toKey: "deat", fromCountry: "gb", toCountry: "at", descKey: "en_deat" },

    // ✅ فارسي ↔ عربي
    { fromKey: "fa", toKey: "ar", fromCountry: "ir", toCountry: "eg", descKey: "fa_ar" },
    { fromKey: "ar", toKey: "fa", fromCountry: "eg", toCountry: "ir", descKey: "ar_fa" },

    // ✅ فارسي ↔ إنجليزي
    { fromKey: "fa", toKey: "en", fromCountry: "ir", toCountry: "gb", descKey: "fa_en" },
    { fromKey: "en", toKey: "fa", fromCountry: "gb", toCountry: "ir", descKey: "en_fa" },

    // ✅ روماني ↔ عربي
    { fromKey: "ro", toKey: "ar", fromCountry: "ro", toCountry: "eg", descKey: "ro_ar" },
    { fromKey: "ar", toKey: "ro", fromCountry: "eg", toCountry: "ro", descKey: "ar_ro" },

    // ✅ روماني ↔ إنجليزي
    { fromKey: "en", toKey: "ro", fromCountry: "gb", toCountry: "ro", descKey: "en_ro" },
    { fromKey: "ro", toKey: "en", fromCountry: "ro", toCountry: "gb", descKey: "ro_en" },

    // ✅ كوري ↔ عربي
    { fromKey: "ko", toKey: "ar", fromCountry: "kr", toCountry: "eg", descKey: "ko_ar" },
    { fromKey: "ar", toKey: "ko", fromCountry: "eg", toCountry: "kr", descKey: "ar_ko" },
  ];

  // ✅ الترجمات جوه الصفحة بدل JSON
  // const langDescriptions = {
  //   en: {
  //     ar_en: "Arabic to English translation",
  //     en_ar: "English to Arabic translation",

  //     fr_ar: "French to Arabic translation",
  //     ar_fr: "Arabic to French translation",
  //     fr_en: "French to English translation",
  //     en_fr: "English to French translation",

  //     es_ar: "Spanish to Arabic translation",
  //     ar_es: "Arabic to Spanish translation",
  //     es_en: "Spanish to English translation",
  //     en_es: "English to Spanish translation",

  //     it_ar: "Italian to Arabic translation",
  //     ar_it: "Arabic to Italian translation",
  //     it_en: "Italian to English translation",
  //     en_it: "English to Italian translation",

  //     el_ar: "Greek to Arabic translation",
  //     ar_el: "Arabic to Greek translation",
  //     el_en: "Greek to English translation",
  //     en_el: "English to Greek translation",

  //     ru_ar: "Russian to Arabic translation",
  //     ar_ru: "Arabic to Russian translation",
  //     ru_en: "Russian to English translation",
  //     en_ru: "English to Russian translation",

  //     uk_ar: "Ukrainian to Arabic translation",
  //     ar_uk: "Arabic to Ukrainian translation",
  //     uk_en: "Ukrainian to English translation",
  //     en_uk: "English to Ukrainian translation",

  //     bg_ar: "Bulgarian to Arabic translation",
  //     ar_bg: "Arabic to Bulgarian translation",
  //     bg_en: "Bulgarian to English translation",
  //     en_bg: "English to Bulgarian translation",

  //     zh_ar: "Chinese to Arabic translation",
  //     ar_zh: "Arabic to Chinese translation",
  //     zh_en: "Chinese to English translation",
  //     en_zh: "English to Chinese translation",

  //     tr_ar: "Turkish to Arabic translation",
  //     ar_tr: "Arabic to Turkish translation",
  //     tr_en: "Turkish to English translation",
  //     en_tr: "English to Turkish translation",

  //     de_ar: "German to Arabic translation",
  //     ar_de: "Arabic to German translation",
  //     de_en: "German to English translation",
  //     en_de: "English to German translation",

  //     sr_ar: "Serbian to Arabic translation",
  //     ar_sr: "Arabic to Serbian translation",
  //     sr_en: "Serbian to English translation",
  //     en_sr: "English to Serbian translation",

  //     pt_ar: "Portuguese to Arabic translation",
  //     ar_pt: "Arabic to Portuguese translation",
  //     pt_en: "Portuguese to English translation",
  //     en_pt: "English to Portuguese translation",

  //     ur_ar: "Urdu to Arabic translation",
  //     ar_ur: "Arabic to Urdu translation",

  //     deat_ar: "Austrian German to Arabic translation",
  //     ar_deat: "Arabic to Austrian German translation",
  //     deat_en: "Austrian German to English translation",
  //     en_deat: "English to Austrian German translation",

  //     fa_ar: "Persian to Arabic translation",
  //     ar_fa: "Arabic to Persian translation",
  //     fa_en: "Persian to English translation",
  //     en_fa: "English to Persian translation",

  //     ro_ar: "Romanian to Arabic translation",
  //     ar_ro: "Arabic to Romanian translation",
  //     ro_en: "Romanian to English translation",
  //     en_ro: "English to Romanian translation",

  //     ko_ar: "Korean to Arabic translation",
  //     ar_ko: "Arabic to Korean translation",
  //   },

  //   ar: {
  //     ar_en: "ترجمة عربي إلى إنجليزي",
  //     en_ar: "ترجمة إنجليزي إلى عربي",

  //     fr_ar: "ترجمة فرنسي إلى عربي",
  //     ar_fr: "ترجمة عربي إلى فرنسي",
  //     fr_en: "ترجمة فرنسي إلى إنجليزي",
  //     en_fr: "ترجمة إنجليزي إلى فرنسي",

  //     es_ar: "ترجمة إسباني إلى عربي",
  //     ar_es: "ترجمة عربي إلى إسباني",
  //     es_en: "ترجمة إسباني إلى إنجليزي",
  //     en_es: "ترجمة إنجليزي إلى إسباني",

  //     it_ar: "ترجمة إيطالي إلى عربي",
  //     ar_it: "ترجمة عربي إلى إيطالي",
  //     it_en: "ترجمة إيطالي إلى إنجليزي",
  //     en_it: "ترجمة إنجليزي إلى إيطالي",

  //     el_ar: "ترجمة يوناني إلى عربي",
  //     ar_el: "ترجمة عربي إلى يوناني",
  //     el_en: "ترجمة يوناني إلى إنجليزي",
  //     en_el: "ترجمة إنجليزي إلى يوناني",

  //     ru_ar: "ترجمة روسي إلى عربي",
  //     ar_ru: "ترجمة عربي إلى روسي",
  //     ru_en: "ترجمة روسي إلى إنجليزي",
  //     en_ru: "ترجمة إنجليزي إلى روسي",

  //     uk_ar: "ترجمة أوكراني إلى عربي",
  //     ar_uk: "ترجمة عربي إلى أوكراني",
  //     uk_en: "ترجمة أوكراني إلى إنجليزي",
  //     en_uk: "ترجمة إنجليزي إلى أوكراني",

  //     bg_ar: "ترجمة بلغاري إلى عربي",
  //     ar_bg: "ترجمة عربي إلى بلغاري",
  //     bg_en: "ترجمة بلغاري إلى إنجليزي",
  //     en_bg: "ترجمة إنجليزي إلى بلغاري",

  //     zh_ar: "ترجمة صيني إلى عربي",
  //     ar_zh: "ترجمة عربي إلى صيني",
  //     zh_en: "ترجمة صيني إلى إنجليزي",
  //     en_zh: "ترجمة إنجليزي إلى صيني",

  //     tr_ar: "ترجمة تركي إلى عربي",
  //     ar_tr: "ترجمة عربي إلى تركي",
  //     tr_en: "ترجمة تركي إلى إنجليزي",
  //     en_tr: "ترجمة إنجليزي إلى تركي",

  //     de_ar: "ترجمة ألماني إلى عربي",
  //     ar_de: "ترجمة عربي إلى ألماني",
  //     de_en: "ترجمة ألماني إلى إنجليزي",
  //     en_de: "ترجمة إنجليزي إلى ألماني",

  //     sr_ar: "ترجمة صربي إلى عربي",
  //     ar_sr: "ترجمة عربي إلى صربي",
  //     sr_en: "ترجمة صربي إلى إنجليزي",
  //     en_sr: "ترجمة إنجليزي إلى صربي",

  //     pt_ar: "ترجمة برتغالي إلى عربي",
  //     ar_pt: "ترجمة عربي إلى برتغالي",
  //     pt_en: "ترجمة برتغالي إلى إنجليزي",
  //     en_pt: "ترجمة إنجليزي إلى برتغالي",

  //     ur_ar: "ترجمة أوردو إلى عربي",
  //     ar_ur: "ترجمة عربي إلى أوردو",

  //     deat_ar: "ترجمة نمساوي إلى عربي",
  //     ar_deat: "ترجمة عربي إلى نمساوي",
  //     deat_en: "ترجمة نمساوي إلى إنجليزي",
  //     en_deat: "ترجمة إنجليزي إلى نمساوي",

  //     fa_ar: "ترجمة فارسي إلى عربي",
  //     ar_fa: "ترجمة عربي إلى فارسي",
  //     fa_en: "ترجمة فارسي إلى إنجليزي",
  //     en_fa: "ترجمة إنجليزي إلى فارسي",

  //     ro_ar: "ترجمة روماني إلى عربي",
  //     ar_ro: "ترجمة عربي إلى روماني",
  //     ro_en: "ترجمة روماني إلى إنجليزي",
  //     en_ro: "ترجمة إنجليزي إلى روماني",

  //     ko_ar: "ترجمة كوري إلى عربي",
  //     ar_ko: "ترجمة عربي إلى كوري",
  //   },
  // } as const;

  // ✅ Fix TS any
  // type Lang = keyof typeof langDescriptions;
  // type DescKey = keyof typeof langDescriptions.en;

  // const getLangDesc = (key: string) => {
  //   const lang: Lang = isArabic ? "ar" : "en";
  //   return (langDescriptions[lang] as Record<string, string>)[key] || key;
  // };

  // ✅ progress
  const total = slides.length;
  const [progress, setProgress] = useState((1 / total) * 100);

  const updateProgress = (swiper: SwiperType) => {
    const idx = swiper.realIndex ?? 0;
    setProgress(((idx + 1) / total) * 100);
  };

  // ✅ حل مشكلة Refresh عند تغيير اللغة
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
      swiperRef.current.slideTo(0, 0);
    }
  }, [i18n.language]);

  // ✅ FAQ
  const faqItems = [
    { q: t("faq.items.q1.q"), a: t("faq.items.q1.a") },
    { q: t("faq.items.q2.q"), a: t("faq.items.q2.a") },
    { q: t("faq.items.q3.q"), a: t("faq.items.q3.a") },
    { q: t("faq.items.q4.q"), a: t("faq.items.q4.a") },
    { q: t("faq.items.q5.q"), a: t("faq.items.q5.a") },
  ];

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/public/services`, {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        const allServices: Service[] = res.data?.data?.services || [];
        const translationsOnly = allServices.filter(
          (s) => s.category === "translation"
        );
        setServices(translationsOnly);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching translation services:", err);
        setError("Failed to load services");
        setLoading(false);
      });
  }, []);

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
      {/* ✅ Language Slider Section */}
      <section className={styles.wrapper}>
        <div className="container">
          <div className={styles.card}>
<div
  className={styles.header}
  dir={isArabic ? "rtl" : "ltr"}
  style={{ textAlign: isArabic ? "right" : "left" }}
>
              <h2 className={styles.title}>
                {isArabic ? "خدمات الترجمة الاحترافية" : "Professional Translation Services"}
              </h2>
              <p className={styles.subtitle}>
                {isArabic
                  ? "ترجمة بشرية عالية الجودة بين العربية والإنجليزية والعديد من اللغات الدولية."
                  : "High-quality human translation between Arabic, English, and multiple international languages."}
              </p>
            </div>

            <div className={styles.sliderWrap}>
              {/* ✅ prev btn */}
              <button
                className={`${styles.navBtn} ${styles.prev}`}
                onClick={() =>
                  isArabic
                    ? swiperRef.current?.slideNext()
                    : swiperRef.current?.slidePrev()
                }
                type="button"
              >
                ‹
              </button>

              {/* ✅ next btn */}
              <button
                className={`${styles.navBtn} ${styles.next}`}
                onClick={() =>
                  isArabic
                    ? swiperRef.current?.slidePrev()
                    : swiperRef.current?.slideNext()
                }
                type="button"
              >
                ›
              </button>

              <Swiper
                key={i18n.language} // ✅ rebuild swiper
                dir={isArabic ? "rtl" : "ltr"}
                style={{ direction: isArabic ? "rtl" : "ltr" }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  updateProgress(swiper);
                }}
                onSlideChange={updateProgress}
                loop={slides.length >= 6 && !isArabic} // ✅ loop off in rtl to avoid bugs
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
                  <SwiperSlide key={`${i18n.language}-${idx}`} className={styles.slide}>
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

      {/* ✅ Services Cards */}
      <section className={`${styles.section} py-5`}>
        <div className={`container ${isArabic ? styles.rtl : ""}`}>
          <h1 className="text-center fw-bold mb-5">
            {isArabic ? "جميع خدمات الترجمة" : "All Translation Services"}
          </h1>

          {loading && <p className="text-center text-muted">{isArabic ? "جاري التحميل..." : "Loading..."}</p>}

          {!loading && error && (
            <div className={styles.errorBox}>
              <h3>{isArabic ? "حدث خطأ ما" : "Something went wrong"}</h3>
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && services.length === 0 && (
            <p className="text-center text-muted">
              {isArabic ? "لا توجد خدمات ترجمة حالياً" : "No translation services found"}
            </p>
          )}

          {!loading && !error && services.length > 0 && (
            <div className="row g-4">
              {services.map((service) => {
                const title = getTitle(service);
                const bullets = toBullets(getDescription(service));

                return (
                  <div key={service.id} className="col-lg-4 col-md-6 col-12">
                    <ServiceCard
                      img={getImg(service)}
                      title={title}
                      bullets={bullets}
                      rating={5}
                      buttonText={isArabic ? "اطلب الآن" : "Order Now"}
                      onButtonClick={() => openWhatsApp(title)}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {/* ✅ Shared sections */}
          <MakeAppointmen />
          <FAQSection image="/images/dispatcher.jpg" items={faqItems} />
        </div>
      </section>
    </>
  );
}
