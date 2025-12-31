import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "/images/tr.jpg"; 
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import styles from "./NavBar.module.css";

const WHATSAPP_NUMBER = "201098396598"; // ✅ رقمك هنا

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const context = useContext(LanguageContext);

  if (!context)
    throw new Error("LanguageContext must be used within LanguageProvider");

  const { language, setLanguage } = context;
  const [nextLang, setNextLang] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setNextLang(language === "ar" ? "English" : "العربية");
  }, [language]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeLang = (lang: "en" | "ar") => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  // ✅ Pricing Request WhatsApp
  const openWhatsAppPricing = () => {
    const message =
      language === "ar"
        ? "مرحباً، أريد طلب عرض أسعار."
        : "Hello, I want to request pricing.";

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
    >
      <Container fluid className="px-5">
        {/* ✅ LOGO */}
        <Navbar.Brand as={Link} to="/" className={styles.brand}>
          <img
            src={logo}
            alt="logo"
            className={`${styles.logo} ${scrolled ? styles.logoSmall : ""}`}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className={styles.toggle} />

        <Navbar.Collapse id="navbar-nav">
          {/* ✅ LINKS */}
          <Nav className={`mx-auto ${styles.navLinks}`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {t("nav.home")}
            </NavLink>

            <NavLink
              to="/service"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {t("nav.Services")}
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {t("nav.About")}
            </NavLink>

            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {t("nav.Resources")}
            </NavLink>

            <NavLink
              to="/ethics"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {t("nav.Ethics")}
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {t("nav.Contact")}
            </NavLink>
          </Nav>

          {/* ✅ ACTION BUTTONS */}
          <div className={styles.actions}>
            {/* ✅ Pricing Request WhatsApp */}
            <button className={styles.primaryBtn} onClick={openWhatsAppPricing}>
              {t("nav.pricing-request")}
            </button>

            {/* ✅ Language Button */}
            <button
              className={styles.langBtn}
              onClick={() => changeLang(nextLang === "English" ? "en" : "ar")}
            >
              {nextLang}
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
