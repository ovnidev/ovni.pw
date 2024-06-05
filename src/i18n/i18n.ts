import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import * as english from "./langs/english"
import * as spanish from "./langs/spanish"

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({

    supportedLngs: [ 'en', 'es' ],

    detection: {
      lookupLocalStorage: 'lang',
    },

    fallbackLng: "en",

    interpolation: {
        escapeValue: false,
    },

    resources: {
      
      en: {
        globals: english.globals,
        home: english.home,
        folder: english.folder,
        password: english.password
      },

      es: {
        globals: spanish.globals,
        home: spanish.home,
        folder: spanish.folder,
        password: spanish.password
      }

    },

});

export default i18n;