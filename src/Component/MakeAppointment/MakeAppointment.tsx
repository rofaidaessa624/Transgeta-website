import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FiPhone } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function MakeAppointment() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section className={`appointmenContainer ${isArabic ? "rtl" : ""}`}>
      <div className="container text-white">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-12 text-center">
            <h2 className="appointmentSmallTitle">
              {t("makeAppointment.smallTitle")}
            </h2>

            <h3 className="appointmentTitle">
              {t("makeAppointment.title")}
            </h3>

            <p className="appointmentDesc">
              {t("makeAppointment.desc")}
            </p>

            <p className="appointmentDesc2">
              {t("makeAppointment.desc2")}
            </p>

            {/* ✅ ICONS */}
            <div className="row mt-5 pt-4 justify-content-center gy-4">
              {/* Email */}
              <div className="col-md-4 col-10">
                <div className="iconBox">
                  <div className="circleIcon">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} />
                  </div>
                  <div>
                    <h4>{t("makeAppointment.emailTitle")}</h4>
                    <p>{t("makeAppointment.emailValue")}</p>
                  </div>
                </div>
              </div>

              {/* Work Hours */}
              <div className="col-md-4 col-10">
                <div className="iconBox">
                  <div className="circleIcon">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div>
                    <h4>{t("makeAppointment.hoursTitle")}</h4>
                    <p>{t("makeAppointment.hoursValue")}</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="col-md-4 col-10">
                <div className="iconBox">
                  <div className="circleIcon">
                    <FiPhone size={22} />
                  </div>
                  <div>
                    <h4>{t("makeAppointment.phoneTitle")}</h4>
                    <p>{t("makeAppointment.phoneValue")}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
