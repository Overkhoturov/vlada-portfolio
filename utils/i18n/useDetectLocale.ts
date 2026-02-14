import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { match } from "@formatjs/intl-localematcher";
import { useLocale } from "../providers/locale-provider";

const useDetectLocale = () => {
  const router = useRouter();
  const params = useParams();
  const { locale, setLocale } = useLocale();

  useEffect(() => {
    const detectLocale = () => {
      const browserLanguages = navigator.languages || [
        navigator.language || "ru",
      ];
      const locales = ["en", "ru"] as const;
      const defaultLocale = "en";

      const languages = browserLanguages.map((lang) => lang.toLowerCase());

      let detectedLocale: (typeof locales)[number] = defaultLocale;

      for (const lang of languages) {
        const langCode = lang.split("-")[0];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (locales.includes(langCode as any)) {
          detectedLocale = langCode as (typeof locales)[number];
          break;
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (locales.includes(lang as any)) {
          detectedLocale = lang as (typeof locales)[number];
          break;
        }
      }

      if (detectedLocale === defaultLocale) {
        try {
          const matched = match(languages, locales, defaultLocale);
          detectedLocale = matched.split("-")[0] as (typeof locales)[number];
        } catch (error) {
          console.log("Using default locale:", defaultLocale);
        }
      }

      return detectedLocale;
    };

    const detectedLocale = detectLocale();

    if (!params.lang || params.lang !== detectedLocale) {
      router.replace(`/${detectedLocale}`);
      setLocale(detectedLocale);
    } else if (locale !== detectedLocale) {
      setLocale(detectedLocale);
    }
  }, [router, params.lang, locale, setLocale]);
};

export default useDetectLocale;
