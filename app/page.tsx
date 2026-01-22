'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

    useEffect(() => {
      const browserLang = navigator.language || navigator.languages[0];
      const defaultLocale = 'ru';
      let locale = defaultLocale;
      
      if (browserLang.toLowerCase().startsWith('en')) {
        locale = 'en';
      }
      
      router.replace(`/${locale}`);
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
