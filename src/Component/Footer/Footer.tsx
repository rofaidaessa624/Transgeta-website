import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/tr-removebg-preview (1).png";

import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaTiktok, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="tg-footer">
      <div className="container">
        <div className="row gy-4 align-items-start">

          {/* ✅ Column 1 */}
          <div className="col-lg-4 col-md-6">
            <img src={logo} alt="TransGate" className="tg-footer-logo" />

            <p className="tg-footer-desc">{t("footer.desc")}</p>

            <div className="tg-footer-contact">
              <a href="mailto:transgateac@outlook.com">transgateac@outlook.com</a>
              <a href="tel:+2001098396598">+20 01098396598</a>
            </div>

            <div className="tg-social">
              <a
                href="https://wa.me/2001098396598"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a href="https://www.facebook.com/people/Trans-Gate-for-Translation-Services-and-Academic-Consultations/61565149277304/?rdid=HQh4qJxHvGzS4X6K&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17bfQjR8BT%2F" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="https://www.tiktok.com/@trans.gate5?_r=1&_t=ZS-92she7bLNYX" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok />
              </a>
               <a href="https://www.instagram.com/trans_gate?igsh=dWl3cTBkZ2MzcWZx" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="https://www.linkedin.com/in/trans-gate-06836a3a4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>

              <a href="mailto:transgateac@outlook.com" aria-label="Email">
                <MdEmail />
              </a>
            </div>
          </div>

          {/* ✅ Column 2 */}
          <div className="col-lg-2 col-md-6 tg-footer-shift">
            <h5 className="tg-footer-title">{t("footer.quickLinks")}</h5>

            <div className="tg-footer-links">
              <Link to="/about">{t("footer.links.about")}</Link>
              <Link to="/service">{t("footer.links.services")}</Link>
              <Link to="/contact">{t("footer.links.contact")}</Link>
            </div>
          </div>

          {/* ✅ Column 3 */}
          <div className="col-lg-6 col-md-12 tg-footer-shift" >
            <h5 className="tg-footer-title">{t("footer.stayConnected")}</h5>
            <p className="tg-footer-desc2">{t("footer.newsletterText")}</p>

            <form className="tg-newsletter">
              <input
                type="email"
                className="tg-input"
                placeholder={t("footer.placeholder")}
                required
              />
              <button type="submit" className="tg-btn">
                {t("footer.send")}
              </button>
            </form>
          </div>
        </div>

        {/* ✅ Bottom bar */}
        <div className="tg-footer-bottom">
          <p className="m-0">
            © {new Date().getFullYear()} TransGate.
          </p>

          <div className="tg-bottom-links">
            <Link to="/ethics">{t("footer.bottom.ethics")}</Link>
            <span>•</span>
            <Link to="/privacy">{t("footer.bottom.privacy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
