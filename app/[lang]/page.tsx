import PortfolioBlock from "./_components/PortfolioBlock";
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'

export default async function Page({ params }: PageProps<'/[lang]'>) {
    const { lang } = await params
 
  if (!hasLocale(lang)) notFound()
 
  const dict = await getDictionary(lang)
  return (
    <main>
      {dict.products.cart}
      <PortfolioBlock />
    </main>
  );
}
