import { notFound } from 'next/navigation'

export default async function Page({ params }: PageProps<'/[lang]'>) {
  //   const { lang } = await params
 
  // if (!hasLocale(lang)) notFound()
 
  // const dict = await getDictionary(lang)
  return (
    <main>
      {/* <span className="text-headline-medium-strong">

        {dict.products.cart}
      </span> */}
      {/* <PortfolioBlock /> */}
    </main>
  );
}
