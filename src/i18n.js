// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './locales/es.json';
import en from './locales/en.json';

const resources = {
  es: { translation: es },
  en: { translation: en }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
      format(value, format, lng) {
        if (format === 'year') return new Date().getFullYear();
        return value;
      }
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['localStorage', 'cookie']
    },
    returnNull: false,
    returnEmptyString: false
  });

export default i18n;