import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./BrandsCarousal.module.css";
import { useTranslation } from "react-i18next";

const API_BASE_URL = "http://127.0.0.1:8000/api";
const FILE_BASE_URL = "http://127.0.0.1:8000";

interface Partner {
  id: number;
  name: string;
  website_url: string | null;
  sort_order: number | null;
  logo_url?: string | null;
  logo_path?: string | null;
}

function getPartnerLogo(partner: Partner) {
  if (partner.logo_url && partner.logo_url.startsWith("http")) {
    return partner.logo_url;
  }

  if (partner.logo_path) {
    return `${FILE_BASE_URL}/files/partners/${partner.logo_path}`;
  }

  return "/images/default-logo.png";
}

export default function BrandsCarousal() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/partners`)
      .then((response) => {
        const list =
          response.data?.data?.partners ||
          response.data?.data ||
          response.data ||
          [];
        setPartners(list);
      })
      .catch((e) => {
        console.error("Failed to load partners:", e);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // ✅ Loading UI
  if (loading) {
    return (
      <section className={styles.section}>
        <div className="container">
          <div className={styles.header}>
            <h2 className={styles.title}>{t("partners.title")}</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-12">
              <div className={styles.skeletonGrid}>
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div key={idx} className={styles.skeletonCard}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ✅ Error UI
  if (error) {
    return (
      <section className={styles.section}>
        <div className="container text-center">
          <div className={styles.header}>
            <h2 className={styles.title}>{t("partners.title")}</h2>
          </div>

          <div className={styles.errorBox}>
            <p className="m-0">{t("partners.error")}</p>
          </div>
        </div>
      </section>
    );
  }

  if (!partners.length) return null;

  return (
    <section className={styles.section}>
      <div className={`container ${isArabic ? styles.rtl : ""}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t("partners.title")}</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-12">
            <Swiper
              className={styles.swiper}
              dir={isArabic ? "rtl" : "ltr"} // ✅ يخلي الاتجاه مظبوط في العربي
              breakpoints={{
                0: { slidesPerView: 2, spaceBetween: 12 },
                768: { slidesPerView: 3, spaceBetween: 16 },
                992: { slidesPerView: 5, spaceBetween: 18 },
              }}
              modules={[Autoplay]}
              loop
              loopAdditionalSlides={12}
              speed={7000} // ✅ smoother continuous
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              allowTouchMove={true}
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <a
                    className={styles.partnerCard}
                    href={partner.website_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!partner.website_url) e.preventDefault();
                    }}
                    title={partner.name}
                  >
                    <div className={styles.logoBox}>
                      <img
                        src={getPartnerLogo(partner)}
                        alt={partner.name}
                        className={styles.logo}
                        loading="lazy"
                      />
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
