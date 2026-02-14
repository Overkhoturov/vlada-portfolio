import PortfolioBlock from "./_components/PortfolioBlock";

export default function Page({ params }: PageProps<'/[lang]'>) {
  return (
    <main>
      <PortfolioBlock />
    </main>
  );
}
