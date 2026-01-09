import { useTranslation } from "react-i18next";
import styles from "./Ethics.module.css";


export default function Ethics() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section className={`${styles.section} py-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            {/* ✅ Header */}
            <div className={`text-center mb-5 ${isArabic ? styles.rtl : ""}`}>
              <h1 className={styles.pageTitle}>{t("ethics.article.title")}</h1>
            </div>

            {/* ✅ Article Card */}
            {/* <div className={`${styles.articleCard} ${isArabic ? styles.rtl : ""}`}>
              <p className={styles.articleBody}>
                {t("ethics.article.body")}
              </p>
            </div> */}

            {/* ✅ NEW: Disclaimer Section */}
            <div className={`mt-5 ${isArabic ? styles.rtl : ""}`}>
              <h2 className={styles.subTitle}>{t("ethics.disclaimer.title")}</h2>
              <div className={styles.articleCard}>
                <p className={styles.articleBody}>{t("ethics.disclaimer.body1")}</p>
                <p className={styles.articleBody}>{t("ethics.disclaimer.body2")}</p>
                <p className={styles.articleBody}>{t("ethics.disclaimer.body3")}</p>
                <p className={styles.articleBody}>{t("ethics.disclaimer.body4")}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
