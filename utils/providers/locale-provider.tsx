"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { match } from "@formatjs/intl-localematcher";
import { Locale } from "../i18n/dictionaries";
import { usePathname } from "next/navigation";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isLoading: boolean;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<Locale>("en"); // Default
  const [isLoading, setIsLoading] = useState(true);
  const pathName = usePathname();

  useEffect(() => {
    const detectLocale = () => {
      const browserLanguages = navigator.languages || [
        navigator.language || "en",
      ];

      const locales = ["en", "ru"];
      const defaultLocale = "ru";

      const languages = browserLanguages.map((lang) => lang.toLowerCase());

      let detectedLocale = defaultLocale;

      const cookieLocale = document.cookie
        .split("; ")
        .find((row) => row.startsWith("preferred-locale="))
        ?.split("=")[1] as Locale | undefined;

      if (cookieLocale && locales.includes(cookieLocale)) {
        detectedLocale = cookieLocale;
      } else {
        for (const lang of languages) {
          const langCode = lang.split("-")[0];
          if (locales.includes(langCode)) {
            detectedLocale = langCode as Locale;
            break;
          }

          if (locales.includes(lang as Locale)) {
            detectedLocale = lang as Locale;
            break;
          }
        }

        if (detectedLocale === defaultLocale) {
          try {
            const matched = match(languages, locales, defaultLocale);
            detectedLocale = matched.split("-")[0] as Locale;
          } catch (error) {
            console.log("Using default locale:", defaultLocale);
          }
        }
      }

      return detectedLocale;
    };

    const detectedLocale = detectLocale() as Locale;
    console.log("detectedLocale", detectedLocale);
    setLocale(detectedLocale);
    setIsLoading(false);

    document.documentElement.lang = detectedLocale;
  }, [pathName]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("preferred-locale", locale);
      document.cookie = `preferred-locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;
    }
  }, [locale, isLoading]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, isLoading }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
