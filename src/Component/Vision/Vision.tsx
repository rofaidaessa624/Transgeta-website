import { useTranslation } from "react-i18next";
import styles from "./Vision.module.css";
// import { FaGlobe, FaLightbulb, FaGraduationCap, FaShieldAlt } from "react-icons/fa";

export default function Vision() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // const visionPoints = [
  //   { icon: <FaGlobe size={20} />, text: t("about-us.vision.points.p1") },
  //   { icon: <FaGraduationCap size={20} />, text: t("about-us.vision.points.p2") },
  //   { icon: <FaShieldAlt size={20} />, text: t("about-us.vision.points.p3") },
  //   { icon: <FaLightbulb size={20} />, text: t("about-us.vision.points.p4") }
  // ];

  return (
    <section id="vision" className={`${styles.section} py-5`}>
      <div className="container">
        <div className={`text-center mb-5 ${isArabic ? styles.rtl : ""}`}>
          <h2 className={styles.title}>{t("about-us.vision.title")}</h2>
          <p className={styles.subtitle}>{t("about-us.vision.subtitle")}</p>
        </div>

        

      </div>
    </section>
  );
}
