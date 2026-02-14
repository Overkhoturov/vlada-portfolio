import ContentContainer from "@/components/layout/ContentContainer";
import HeaderBlock from "./_components/HeaderBlock";
import { BasicContainer } from "@/components/layout/Container";
import ContentLayout from "./_components/ContentLayout";
import BackgroundBanner from "@/components/layout/BackgroundBanner";

export default function Page() {
  return (
    <>
      <BackgroundBanner />
      <ContentContainer>
        <BasicContainer>
          <HeaderBlock />
          <ContentLayout />
        </BasicContainer>
      </ContentContainer>
    </>
  );
}
