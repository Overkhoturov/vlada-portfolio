"use client";
import { BasicContainer } from "@/components/layout/Container";
import PortfolioCard from "./PortfolioCard";
import ProjectSwiper from "./ProjectSwiper";
import { useDictionary } from "@/utils/providers/dictionary-context";

const cards = [
  {
    id: "pixual",
    img: "/portfolio/pixual.png",
    figmaUrl:
      "https://embed.figma.com/design/OB0Sn4S24ihYwaBbWBDPzw/Portfolio?node-id=1-3&embed-host=share",
  },
  {
    id: "expenso",
    img: "/portfolio/expenso.png",
    figmaUrl:
      "https://embed.figma.com/design/OB0Sn4S24ihYwaBbWBDPzw/Portfolio?node-id=1-3&embed-host=share",
  },
  {
    id: "breezify",
    img: "/portfolio/breezify.png",
    figmaUrl:
      "https://embed.figma.com/design/OB0Sn4S24ihYwaBbWBDPzw/Portfolio?node-id=1-3&embed-host=share",
  },
  {
    id: "lettuce",
    img: "/portfolio/lettuce.png",
    figmaUrl:
      "https://embed.figma.com/design/OB0Sn4S24ihYwaBbWBDPzw/Portfolio?node-id=1-3&embed-host=share",
  },
  {
    id: "gts",
    img: "/portfolio/gts.png",
    figmaUrl:
      "https://embed.figma.com/design/OB0Sn4S24ihYwaBbWBDPzw/Portfolio?node-id=1-3&embed-host=share",
  },
];

const PortfolioBlock = () => {
  const dictionary = useDictionary();

  return (
    <div>
      <h1 className="text-headline-medium-strong text-center">
        {dictionary.home.main.title}
      </h1>

      <BasicContainer className="hidden tablet:grid gap-8 grid-cols-1 lg:grid-cols-2 py-[88px] px-4 md:px-12 lg:px-16 xl:px-20 2xl:px-[120px]">
        {cards.map((card) => (
          <PortfolioCard key={card.id} {...card} />
        ))}
      </BasicContainer>

      <div className="tablet:hidden">
        <ProjectSwiper
          items={cards.map((card) => (
            <PortfolioCard isHideShadow key={card.id} {...card} />
          ))}
        />
      </div>
    </div>
  );
};

export default PortfolioBlock;
