import ContentContainer from "@/components/layout/ContentContainer";
import HeaderBlock from "./_components/HeaderBlock";
import { getDictionary, Locale } from "@/utils/i18n/dictionaries";
import { BasicContainer } from "@/components/layout/Container";
import ContentLayout from "./_components/ContentLayout";

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  const dictionary = await getDictionary(lang as Locale);

  return (
    <ContentContainer>
      <BasicContainer>
        <HeaderBlock dictionary={dictionary} />
        <ContentLayout dictionary={dictionary} />
      </BasicContainer>
    </ContentContainer>
  );
}
