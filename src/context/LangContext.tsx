"use client";

import en from "@/locale/en";
import React, { createContext, useContext, useEffect, useState } from "react";

interface Translation {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface LangContextValue {
  language: string;
  changeLanguage: (lang: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: (key: string | number, count?: number) => string | any;
}

export const LangContext = createContext<LangContextValue | null>(null);

const supportedLanguages = ["en"];
const defaultLanguage = "en";

const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    const storedLang = localStorage.getItem("language");

    if (storedLang && supportedLanguages.includes(storedLang)) {
      setLanguage(storedLang);
    } else if (supportedLanguages.includes(browserLang)) {
      setLanguage(browserLang);
    } else {
      setLanguage(defaultLanguage);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const translations: { [key in string]: Translation } = {
    en,
  };

  const t = (key: string | number, count?: number) => {
    const keys = key.toString().split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[language];

    for (let i = 0; i < keys.length; i++) {
      if (value && value.hasOwnProperty(keys[i])) {
        value = value[keys[i]];
      } else {
        return "";
      }
    }

    if (
      typeof count === "number" &&
      value.hasOwnProperty(count === 1 ? "one" : "other")
    ) {
      value = value[count === 1 ? "one" : "other"];
    } else if (value.hasOwnProperty("one")) {
      value = value["one"];
    }
    if (typeof value === "string" && count) {
      return value.replace("{count}", count.toString());
    }
    return value;
  };

  return (
    <LangContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;

export const useLangContext = () => {
  const context = useContext(LangContext);

  if (context === null) {
    throw new Error("useLangContext must be used within a LangProvider");
  }

  return context;
};
