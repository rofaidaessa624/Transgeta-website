import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MasterLayout from "./Component/MasterLayout/MasterLayout";
import Ethics from "./Pages/Ethics/Ethics";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Resources from "./Pages/Resources/Resources";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AllAcademicServices from "./Component/Services/AllAcademicServices";
import AllTranslationServices from "./Component/Services/AllTranslationServices";

function App() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "ethics", element: <Ethics /> },
        { path: "resources", element: <Resources /> },
        { path: "about", element: <About /> },

        // ✅ NEW PAGE: Translation Services
        { path: "translation-services", element: <AllTranslationServices /> },
{ path: "academic-services", element: <AllAcademicServices /> },

        // ✅ Services page (existing)
        { path: "service", element: <Services /> },

        { path: "contact", element: <Contact /> },

        // ✅ Single article
        { path: "articles/:id", element: <SingleBlog /> },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
