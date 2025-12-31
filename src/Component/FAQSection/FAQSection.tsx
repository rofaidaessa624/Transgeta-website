import styles from "./FAQSection.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type FAQItem = {
  q: string;
  a: string;
};

type Props = {
  image: string;
  items: FAQItem[];
  title?: string; // ✅ optional title
};

export default function FAQSection({ image, items, title }: Props) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [active, setActive] = useState<number | null>(0);

  return (
    <section className={styles.wrapper}>
      <div className={`${styles.containerFluid} ${isArabic ? styles.rtl : ""}`}>
        <div className={styles.innerBox}>
          <div className="row align-items-center g-5">
            
            {/* ✅ Image */}
            <div className="col-lg-5">
          <div className={styles.imageWrap}>
  <img src={image} className={styles.image} alt="faq" />
</div>

            </div>

            {/* ✅ FAQ */}
            <div className="col-lg-7">
              <h2 className={styles.title}>
                {title || t("faq.title", "Clients Questions")}
              </h2>

              <div className={styles.faqBox}>
                {items.map((item, idx) => (
                  <div key={idx} className={styles.item}>
                    <button
                      className={`${styles.question} ${
                        active === idx ? styles.active : ""
                      }`}
                      onClick={() => setActive(active === idx ? null : idx)}
                    >
                      <span className={styles.qText}>{item.q}</span>

                      <span className={styles.icon}>
                        {active === idx ? "−" : "+"}
                      </span>
                    </button>

                    {active === idx && <p className={styles.answer}>{item.a}</p>}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
