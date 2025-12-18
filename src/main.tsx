import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import App from './App.tsx'
import "./i18n";
import LanguageProvider from './Context/LanguageContext.tsx';
import AuthContextProvider from './Context/AuthContext/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <AuthContextProvider>
            <App />
      </AuthContextProvider>
    </LanguageProvider>
  </StrictMode>,
)
