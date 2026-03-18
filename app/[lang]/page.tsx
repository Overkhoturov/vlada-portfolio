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
      <ContentContainer className="mt-[248px]">
        <PortfolioBlock />
      </ContentContainer>
    </>
  );
}
