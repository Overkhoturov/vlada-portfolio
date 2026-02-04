'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { match } from '@formatjs/intl-localematcher';

export default function Home() {
  const router = useRouter();
  // const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    const detectLocale = () => {
      // Get browser languages
      const browserLanguages = navigator.languages || [navigator.language || 'ru'];
      
      // Define supported locales
      const locales = ['en', 'ru'];
      const defaultLocale = 'en';
      
      // Prepare languages for matching (formatjs expects lowercase locales)
      const languages = browserLanguages.map(lang => lang.toLowerCase());
      
      // Use match function for proper locale detection
      // We need to handle the matching manually since match expects specific format
      let locale = defaultLocale;
      
      // Check for exact matches first
      for (const lang of languages) {
        const langCode = lang.split('-')[0]; // Get base language code
        if (locales.includes(langCode)) {
          locale = langCode;
          break;
        }
        
        // Check full locale
        if (locales.includes(lang)) {
          locale = lang;
          break;
        }
      }
      
      // If no match found, use the match function as fallback
      if (locale === defaultLocale) {
        try {
          // Create a Negotiator-like object manually
          // Since we can't use Negotiator on client without importing it
          const matched = match(languages, locales, defaultLocale);
          locale = matched.split('-')[0]; // Extract base language
        } catch (error) {
          console.log('Using default locale:', defaultLocale);
        }
      }
      
      return locale;
    };

    // Get the detected locale
    const locale = detectLocale();
    
    // Only redirect if we're not already on the correct locale
    const currentPath = window.location.pathname;
    const shouldRedirect = !(currentPath === `/${locale}` || currentPath === `/${locale}/`);
    
    router.replace(`/${locale}`);
    // if (shouldRedirect) {
    //   router.replace(`/${locale}`);
    // } else {
    //   // setIsRedirecting(false);
    // }
  }, [router]);
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '24px'
    }}>
      Loading...
    </div>
  );
}



    // <div style={{
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   height: '100vh',
    //   fontSize: '24px'
    // }}>
    //   Loading...
    // </div>