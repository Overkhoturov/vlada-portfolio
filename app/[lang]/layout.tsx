import Header from "@/components/layout/Header/inex";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
    <Header />
    {children}
    </>
      
  );
}
