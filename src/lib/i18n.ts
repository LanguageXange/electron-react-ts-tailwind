// https://www.i18next.com/how-to/backend-fallback
// https://github.com/i18next/i18next-browser-languageDetector

// electron
// https://github.com/shawnbanasick/electron-react-i18n-boilerplate/blob/main/src/renderer/src/configs/i18nResources.js

// below might need tweaking!
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
//import Backend from "i18next-fs-backend";  //
import { initReactI18next } from "react-i18next";

import resourcesToBackend from "i18next-resources-to-backend";

// https://www.i18next.com/how-to/backend-fallback

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language, namespace) =>
        import(`../locales/${language}/${namespace}.json`)
    )
  )
  .init({
    fallbackLng: "en",
    ns: ["common", "components"],
    supportedLngs: ["en", "zh-TW"],
    defaultNS: "common",
    fallbackNS: "common",
  });
