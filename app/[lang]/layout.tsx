import BackgroundBanner from "@/components/layout/BackgroundBanner";
import Header from "@/components/layout/Header/inex";
import { getDictionary, Locale } from "@/utils/i18n/dictionaries";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }]
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  const dictionary = await getDictionary(lang as Locale)
  
  return (
    <>
      <Header dictionary={dictionary} />
      <BackgroundBanner />
      {children}
    </>
  );
}
