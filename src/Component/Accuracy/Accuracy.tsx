import { useRef } from "react";
import card1Img from "../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/card1.jpg";
import card2Img from "../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/card2.jpg";
import card3Img from "../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/card3.jpg";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Accuracy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  return (
    <motion.div
      ref={ref}
      initial={{ x: isEnglish ? -200 : 200, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
    >
      <section className="my-5 bg-colored">
        <div className="container">
          <div className="row justify-content-center text-white">
            <div className="col-md-2 col-sm-4 col-6 text-center">
              <img
                src="images/grayLogoPreview.png"
                alt=""
                className="img-fluid"
              />
            </div>

            <div className="col-12 text-center">
              <h2 className="fw-bolder my-5 display-6 text-center">
                {t("accuracy.title")}
              </h2>
              <p className="fs-6">{t("accuracy.description")}</p>
            </div>

            <div className="row my-4 gy-4">
              {/* Card 1 */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card px-4 pt-4 h-100">
                  <div className="imgContainer position-relative">
                    <img src={card1Img} className="rounded-0 card-img-top" alt="..." />
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{t("accuracy.cards.card1.title")}</h5>
                    <p className="card-text flex-grow-1">
                      {t("accuracy.cards.card1.text")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card px-4 pt-4 h-100">
                  <div className="imgContainer position-relative">
                    <img src={card2Img} className="rounded-0 card-img-top" alt="..." />
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{t("accuracy.cards.card2.title")}</h5>
                    <p className="card-text flex-grow-1">
                      {t("accuracy.cards.card2.text")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card px-4 pt-4 h-100">
                  <div className="imgContainer position-relative">
                    <img src={card3Img} className="rounded-0 card-img-top" alt="..." />
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{t("accuracy.cards.card3.title")}</h5>
                    <p className="card-text flex-grow-1">
                      {t("accuracy.cards.card3.text")}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
