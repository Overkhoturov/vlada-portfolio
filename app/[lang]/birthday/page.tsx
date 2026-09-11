import { redirect } from "next/navigation";
import { verifyAccessToken } from "@/utils/birthday/token";
import ContentContainer from "@/components/layout/ContentContainer";
import { BasicContainer } from "@/components/layout/Container";
import BackgroundBanner from "@/components/layout/BackgroundBanner";
import BirthdayContent from "./_components/BirthdayContent";

interface PageProps {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ token?: string }>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { lang } = await params;
  const { token } = await searchParams;

  if (!verifyAccessToken(token)) {
    redirect(`/${lang}`);
  }

  return (
    <>
      <BackgroundBanner />
      <ContentContainer>
        <BasicContainer>
          <BirthdayContent />
        </BasicContainer>
      </ContentContainer>
    </>
  );
}
