import ContentContainer from "@/components/layout/ContentContainer";
import HeaderBlock from "./_components/HeaderBlock";
import AboutBlock from "./_components/AboutBlock";
import PortraitBlock from "./_components/PortraitBlock";
import { getDictionary, Locale } from "@/utils/i18n/dictionaries";
import { BasicContainer } from "@/components/layout/Container";
import ListsBlock from "./_components/ListsBlock";
import EducationBlock from "./_components/EducationBlock";
import CourseBlock from "./_components/CourseBlock";

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  const dictionary = await getDictionary(lang as Locale);

  return (
    <ContentContainer>
      <BasicContainer>
        <HeaderBlock />
        <div>
          <AboutBlock />
          <PortraitBlock />
          <ListsBlock />
          <EducationBlock />
          <CourseBlock />
        </div>
      </BasicContainer>
    </ContentContainer>
  );
}
