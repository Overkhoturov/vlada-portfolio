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
      {/* <div data-mode="Light" className="w-[1920px] h-[1080px] left-0 top-0 absolute opacity-50 bg-white overflow-hidden">
        <div className="w-[3435px] h-[2639px] left-[-851px] top-[-431px] absolute bg-gradient-to-l from-sky-500 to-sky-700 blur-[150px]" />
        <div className="w-[2030.09px] h-[2285.58px] left-[1180.67px] top-[-552.68px] absolute origin-top-left rotate-[45.32deg] bg-gradient-to-bl from-blue-500 to-blue-800 blur-[150px]" />
    </div> */}
      {children}
    </>
      
  );
}
