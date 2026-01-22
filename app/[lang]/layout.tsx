
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return children;
}
