import ContentContainer from "@/components/layout/ContentContainer";
import HeaderBlock from "./_components/HeaderBlock";
import { BasicContainer } from "@/components/layout/Container";
import ContentLayout from "./_components/ContentLayout";

export default function Page() {
  return (
    <ContentContainer>
      <BasicContainer>
        <HeaderBlock />
        <ContentLayout />
      </BasicContainer>
    </ContentContainer>
  );
}
