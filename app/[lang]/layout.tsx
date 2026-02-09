import Header from "@/components/layout/Header/inex";
import { getDictionary, Locale } from "@/utils/i18n/dictionaries";
import { useLocale } from "@/utils/providers/locale-provider";
import Image from "next/image";

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
      <Image width={364} height={256} className="absolute left-0 top-0 overflow-hidden w-full" src='/Background.png' alt="bg" />
      {children}
    </>
      
  );
}
