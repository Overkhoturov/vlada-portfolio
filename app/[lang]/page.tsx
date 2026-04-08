import BackgroundBanner from "@/components/layout/BackgroundBanner";
import PortfolioBlock from "./_components/PortfolioBlock";
import HeaderBlock from "./_components/HeaderBlock";
import ContentContainer from "@/components/layout/ContentContainer";

export default function Page() {
  return (
    <>
      <BackgroundBanner>
        <HeaderBlock />
      </BackgroundBanner>
      <ContentContainer className="mt-[318px] tablet:mt-[302px] hd:mt-[334px] 2k:mt-[418px] 4k:mt-[501px]">
        <PortfolioBlock />
      </ContentContainer>
    </>
  );
}
