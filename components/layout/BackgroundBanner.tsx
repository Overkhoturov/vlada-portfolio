'use client'
import { useBreakpoint } from "@/utils/hooks/useBreakPoint";
import { ThemeContext } from "@/utils/providers/theme-provider";
import Image from "next/image";
import { FC, PropsWithChildren, useContext, useMemo } from "react";

const BackgroundBanner: FC<PropsWithChildren> = ({ children }) => {
  const {isDark} = useContext(ThemeContext);
  const {isLowerTablet} = useBreakpoint();

  const src = useMemo(() => {
    if (isDark) {
      return isLowerTablet ? '/background/dark-tablet.png' : '/background/dark.png'
    }
    return isLowerTablet ? '/background/light-tablet.png' : '/background/light.png'
  }, [isLowerTablet, isDark])

  return (
    <div className="flex items-center justify-center">
      <Image
        width={100}
        height={320}
        className="absolute left-0 top-0 overflow-hidden w-full h-80"
        src={src}
        alt="bg"
      />
      {children}
    </div>
  )
}

export default BackgroundBanner;
