import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FiPhone } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // ✅ تحديد النوع + initial value
  const formRef = useRef<HTMLFormElement | null>(null);

  // ✅ تحديد نوع الحدث
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ✅ حماية: لو ref null متكملش
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_3txx7tn",
        "template_5mu0k14",
        formRef.current,
        "5fnuW14NvVG58K0Gb"
      )
      .then(
        () => {
          alert(t("contact.form.success")); // ✅ رسالة نجاح
          formRef.current?.reset(); // ✅ reset آمن
        },
        (error) => {
          alert(t("contact.form.error")); // ✅ رسالة خطأ
          console.log("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <>
      <Breadcrumb pageName={t("contact.pageName")} />

      <section className={`${styles.section} py-5`}>
        <div className="container">
          {/* Header */}
          <div className={`text-center mb-5 ${isArabic ? styles.rtl : ""}`}>
            <h2 className={styles.title}>{t("contact.title")}</h2>
            <p className={styles.subtitle}>{t("contact.subtitle")}</p>
          </div>

          {/* Contact Info Cards */}
          <div className="row g-4 mb-5">
            <div className="col-lg-4 col-md-6 col-12">
              <div className={styles.infoCard}>
                <div className={styles.iconBox}>
                  <FontAwesomeIcon icon={faEnvelopeOpenText} />
                </div>
                <h5 className={styles.cardTitle}>
                  {t("contact.info.email.title")}
                </h5>
                <p className={styles.cardText}>transgateac@outlook.com</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className={styles.infoCard}>
                <div className={styles.iconBox}>
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <h5 className={styles.cardTitle}>
                  {t("contact.info.hours.title")}
                </h5>
                <p className={styles.cardText}>
                  {t("contact.info.hours.value")}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className={styles.infoCard}>
                <div className={styles.iconBox}>
                  <FiPhone size={22} />
                </div>
                <h5 className={styles.cardTitle}>
                  {t("contact.info.phone.title")}
                </h5>
                <p className={styles.cardText}>+20 1098396598</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className={`${styles.formCard} ${isArabic ? styles.rtl : ""}`}>
                <h3 className={styles.formTitle}>{t("contact.form.title")}</h3>
                <p className={styles.formSubtitle}>
                  {t("contact.form.subtitle")}
                </p>

                {/* ✅ الفورم مربوط بـ ref + onSubmit */}
                <form ref={formRef} onSubmit={sendEmail}>
                  <div className="row g-4">
                    <div className="col-md-6 col-12">
                      <label className={styles.label} htmlFor="fName">
                        {t("contact.form.firstName")}
                      </label>
                      <input
                        type="text"
                        id="fName"
                        name="first_name"
                        className={styles.input}
                        placeholder={t("contact.form.firstNamePlaceholder")}
                        required
                      />
                    </div>

                    <div className="col-md-6 col-12">
                      <label className={styles.label} htmlFor="lName">
                        {t("contact.form.lastName")}
                      </label>
                      <input
                        type="text"
                        id="lName"
                        name="last_name"
                        className={styles.input}
                        placeholder={t("contact.form.lastNamePlaceholder")}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className={styles.label} htmlFor="email">
                        {t("contact.form.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        className={styles.input}
                        placeholder={t("contact.form.emailPlaceholder")}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className={styles.label} htmlFor="subject">
                        {t("contact.form.subject")}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className={styles.input}
                        placeholder={t("contact.form.subjectPlaceholder")}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className={styles.label} htmlFor="message">
                        {t("contact.form.message")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className={styles.textarea}
                        placeholder={t("contact.form.messagePlaceholder")}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" className={styles.button}>
                    {t("contact.form.submit")}
                  </button>
                </form>
                {/* ✅ نهاية الفورم */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
