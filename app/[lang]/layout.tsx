import BackgroundBanner from "@/components/layout/BackgroundBanner";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header/inex";
import { getDictionary, Locale } from "@/utils/i18n/dictionaries";
import { DictionaryProvider } from "@/utils/providers/dictionary-context";
import { notFound } from "next/navigation";
import HeaderBlock from "./_components/HeaderBlock";
import ScrollToTop from "@/components/ScrollToTop";

const validLanguages = ["en", "ru"];

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (!lang || !validLanguages.includes(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang as Locale);

  return (
    <DictionaryProvider dictionary={dictionary}>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </DictionaryProvider>
  );
}
