import BackgroundBanner from "@/components/layout/BackgroundBanner";
import PortfolioBlock from "./_components/PortfolioBlock";
import HeaderBlock from "./_components/HeaderBlock";
import ContentContainer from "@/components/layout/ContentContainer";
import classNames from "classnames";

export default function Page() {
  return (
    <>
      <BackgroundBanner>
        <HeaderBlock />
      </BackgroundBanner>
      <ContentContainer
        className={classNames({
          "mt-[318px] tablet:mt-[302px] hd:mt-[334px] 2k:mt-[418px] 4k:mt-[501px]": true,
          "tablet:px-8 hd:px-16 full-hd:px-[120px] 2k:px-[150px] 4k:px-[180px]": true,
          "hd:py-16 2k:py-20 4k:py-24": true,
        })}
      >
        <PortfolioBlock />
      </ContentContainer>
    </>
  );
}
