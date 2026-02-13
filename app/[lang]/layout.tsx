// app/[lang]/layout.tsx
import BackgroundBanner from "@/components/layout/BackgroundBanner";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header/inex";
import { getDictionary, Locale } from "@/utils/i18n/dictionaries";
import { notFound } from "next/navigation";

const validLanguages = ['en', 'ru'];

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps) {
  const { lang } = await params

  // Validate language
  if (!lang || !validLanguages.includes(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang as Locale)
  
  return (
    <>
      <Header dictionary={dictionary} />
      <BackgroundBanner />
      {children}
      <Footer dictionary={dictionary} />
    </>
  );
}