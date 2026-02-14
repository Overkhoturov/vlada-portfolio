"use client";
import { useBreakpoint } from "@/utils/hooks/useBreakPoint";
import { ThemeContext } from "@/utils/providers/theme-provider";
import { FC, PropsWithChildren, useContext, useMemo } from "react";

const BackgroundBanner: FC<PropsWithChildren> = ({ children }) => {
  const { isDark } = useContext(ThemeContext);
  const { isLowerTablet } = useBreakpoint();

  const src = useMemo(() => {
    if (isDark) {
      return isLowerTablet
        ? "/background/dark-tablet.png"
        : "/background/dark.png";
    }
    return isLowerTablet
      ? "/background/light-tablet.png"
      : "/background/light.png";
  }, [isLowerTablet, isDark]);

  return (
    <div
      className="absolute left-0 top-0 w-full h-[388px] tablet:h-[470px] hd:h-[720px] full-hd:h-[1080px] 2k:h-[1440px] 4k:h-[2160px] flex items-center justify-center"
    >
      <div className="z-10">
        {children}
      </div>
      <div
        style={{ backgroundImage: `url('${src}')` }}
        className="absolute w-full h-full full-hd:top-[-400px] 2k:top-[-600px] 4k:top-[-800px] bg-[50%] bg-cover bg-no-repeat"
      />
    </div>
  );
};

export default BackgroundBanner;
