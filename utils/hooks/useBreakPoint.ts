import { useState, useEffect } from 'react';

type Breakpoint = 'mobile' | 'tablet' | 'hd' | 'full-hd' | '2k' | '4k';

const breakpointValues: Record<Breakpoint, number> = {
  'mobile': 320,
  'tablet': 700,
  'hd': 1200,
  'full-hd': 1800,
  '2k': 2400,
  '4k': 3400,
};

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('mobile');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
    
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      
      if (width >= breakpointValues['4k']) {
        setBreakpoint('4k');
      } else if (width >= breakpointValues['2k']) {
        setBreakpoint('2k');
      } else if (width >= breakpointValues['full-hd']) {
        setBreakpoint('full-hd');
      } else if (width >= breakpointValues['hd']) {
        setBreakpoint('hd');
      } else if (width >= breakpointValues['tablet']) {
        setBreakpoint('tablet');
      } else {
        setBreakpoint('mobile');
      }
    };

    updateBreakpoint();

    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateBreakpoint, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const getWindowDimensions = () => {
    if (!isClient) return { width: 0, height: 0 };
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const { width: windowWidth } = getWindowDimensions();

  return {
    breakpoint,
    isClient,
    
    isMobile: breakpoint === 'mobile',
    isMobileStrict: isClient && windowWidth < 700,
    isMobileInclusive: isClient && windowWidth <= 699,
    isMobileViewport: isClient && windowWidth < 768,
    isPhone: isClient && windowWidth < 480,
    isLargePhone: isClient && windowWidth >= 480 && windowWidth < 700,
    
    isTablet: breakpoint === 'tablet',
    isTabletViewport: isClient && windowWidth >= 700 && windowWidth < 1200,
    
    isDesktop: isClient && windowWidth >= 1200,
    isDesktopStrict: isClient && windowWidth >= 1200,
    
    isSmallScreen: breakpoint === 'mobile' || breakpoint === 'tablet',
    isMediumOrLarger: breakpoint !== 'mobile',
    isHdOrLarger: ['hd', 'full-hd', '2k', '4k'].includes(breakpoint),
    
    mediaQuery: (query: string) => {
      if (!isClient) return false;
      return window.matchMedia(query).matches;
    },
    
    windowWidth,
    windowHeight: isClient ? window.innerHeight : 0,
  };
};
