
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/cropped-WhatsApp_Image_2025-11-12_at_17-06-08_0162802e-remov (1).png'
import { useTranslation } from 'react-i18next'
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
export default function NavBar() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("LanguageContext must be used within LanguageProvider");
  }

  const { language,setLanguage } = context;
  const [nextLang, setNextLang] = useState("");
  useEffect(()=>{
    language==='ar'?setNextLang("english"):setNextLang("العربية")
  },[language])

  const changeLang = (selectedLang: string) => {
    if (selectedLang === "en")
      setNextLang("العربية")
    else
      setNextLang("english")
    i18n.changeLanguage(selectedLang);
    setLanguage(selectedLang)
    document.documentElement.dir = selectedLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <>
      <Navbar expand="lg" className="bg-white">
        <Container fluid>
          <Navbar.Brand>
              <img
                alt=""
                src={logo}
                width={150}
                height={150}
                className="d-inline-block align-top"
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-3">
              <Link to="/" className='fw-medium text-decoration-none'>
                {t("nav.home")}
              </Link>
              <Link className='fw-medium text-decoration-none' to='/service' >
                {t("nav.Services")}
              </Link>

              <Link className='fw-medium text-decoration-none' to='/about'>
                {t("nav.About")}
              </Link>

              <Link className='fw-medium text-decoration-none' to='/resources'>
                {t("nav.Resources")}
              </Link>
              <Link className='fw-medium text-decoration-none' to='/ethics'>
                {t("nav.Ethics")}
              </Link>
              <Link className='fw-medium text-decoration-none' to='/contact' >
                {t("nav.Contact")}
              </Link>
            </Nav>
                      <div className="buttons d-flex gap-3 my-3 my-md-0">
            <button className='btn btn-primary text-white'>
              Pricing Request
            </button>
            <button className='btn btn-outline-primary' onClick={() => changeLang(nextLang === 'english' ? "en" : "ar")}>
              {nextLang}
            </button>
          </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
