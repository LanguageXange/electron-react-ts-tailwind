import config from "./config";

export const siteConfig = {
  name: "CoolSite",
  language: {
    "zh-TW": {
      name: "繁體中文",
      shortName: "中",
      icon: "🇹🇼",
    },
    en: {
      name: "English",
      shortName: "英",
      icon: "🇺🇸",
    },
  },
  env: config.ENV,
  versions: [
    {
      key: "frontend",
      i18nKey: "label.version.fe",
      // version: config.VERSION_FRONTEND,
    },
    {
      key: "backend",
      i18nKey: "label.version.be",
      //version: config.VERSION_BACKEND,
    },
  ] as const,
};

export type SiteConfig = typeof siteConfig;
