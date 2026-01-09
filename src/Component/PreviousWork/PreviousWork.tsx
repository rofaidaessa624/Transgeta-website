import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import WorkCard from "../WorkCard/WorkCard";

export default function PreviousWork() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const items = [
    {
      img: "images/workCardImg1.png",
      title: t("previousWork.items.0.title"),
      desc: t("previousWork.items.0.desc"),
      position: "top",
    },
    {
      img: "images/workCardImg2.png",
      title: t("previousWork.items.1.title"),
      desc: t("previousWork.items.1.desc"),
      position: "bottom",
    },
    {
      img: "images/workCardImg3.png",
      title: t("previousWork.items.2.title"),
      desc: t("previousWork.items.2.desc"),
      position: "top",
    },
    {
      img: "images/workCardImg4.png",
      title: t("previousWork.items.3.title"),
      desc: t("previousWork.items.3.desc"),
      position: "bottom",
    },
    {
      img: "images/workCardImg6.png",
      title: t("previousWork.items.4.title"),
      desc: t("previousWork.items.4.desc"),
      position: "top",
    },
    {
      img: "images/workCardImg7.png",
      title: t("previousWork.items.5.title"),
      desc: t("previousWork.items.5.desc"),
      position: "bottom",
    },
      {
      img: "images/workCardImg5.png",
      title: t("previousWork.items.6.title"),
      desc: t("previousWork.items.6.desc"),
      position: "top",
    },
  ];

  return (
    <section className="previous-work-section" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="section-header text-center mb-5">
          <h2 className="fw-bolder display-5 mb-3">{t("previousWork.title")}</h2>
          <p className="section-subtitle">{t("previousWork.subtitle")}</p>
        </div>

        {/* Cards */}
        <div className="row justify-content-center gy-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`col-lg-6 col-md-6 col-12 stagger-card ${
                visible ? "show" : ""
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <WorkCard
                {...item}
                position={isMobile ? "normal" : item.position}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
