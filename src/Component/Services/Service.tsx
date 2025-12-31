import { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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

export default function Service() {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/public/services`, {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        setServices(res.data.data.services);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setLoading(false);
      });
  }, []);

const translationServices = services
  .filter((s) => s.category === "translation")
  .slice(0, 3);

const academicServices = services
  .filter((s) => s.category === "academic")
  .slice(0, 3);


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

  if (loading) return <p className="text-center py-5">{t("loading")}</p>;

  return (
    <section className="my-5">
      <div className="container my-5">
        {/* ✅ Translation */}
        <h2 className="fw-bolder my-5 display-5 text-center">
          {t("services.translation.title")}
        </h2>

        <div className="row justify-content-between text-center gy-4">
          {translationServices.map((service) => {
            const title = getTitle(service);
            const bullets = toBullets(getDescription(service));

            return (
              <div key={service.id} className="col-lg-4 col-md-6 col-12">
                <ServiceCard
                  img={getImg(service)}
                  title={title}
                  bullets={bullets} // ✅ description بدل short_description
                  rating={5}
                  buttonText={t("services.orderNow")}
                  onButtonClick={() => openWhatsApp(title)}
                />
              </div>
            );
          })}
        </div>

        {/* ✅ See More */}
        <div className="text-left mt-4">
          <Link to="/translation-services" className="btn btn-dark px-4 py-2">
            {t("services.seeMore")}
          </Link>
        </div>

        <hr className="my-5" />

        {/* ✅ Academic */}
        <h2 className="fw-bolder my-5 display-5 text-center">
          {t("services.academic.title")}
        </h2>

        <div className="row justify-content-between text-center gy-4">
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
         {/* ✅ See More */}
        <div className="text-left mt-4">
         <Link to="/academic-services" className="btn btn-dark px-4 py-2">
  {t("services.seeMore")}
</Link>

        </div>

      </div>
    </section>
  );
}
