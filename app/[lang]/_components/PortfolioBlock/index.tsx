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
      "https://www.figma.com/design/2XuOAaxqAanMhUDy1XsFIE/UI-kit.-Pixual?node-id=26-9781&t=vzA1CaSA8BTqa9pH-1",
  },
  {
    id: "expenso",
    img: "/portfolio/expenso.png",
    figmaUrl:
      "https://www.figma.com/design/opLEuWqKiiP5Na3bbFFIYL/eXpenso?node-id=1432-31615&t=z1Aii35onF4boHzR-1",
  },
  {
    id: "breezify",
    img: "/portfolio/breezify.png",
    figmaUrl:
      "https://www.figma.com/design/Veo94bdi9miMblF3sWtzqV/Breezify?node-id=141-3529&t=eAUlr3OHzw3s6c6G-1",
  },
  {
    id: "lettuce",
    img: "/portfolio/lettuce.png",
    figmaUrl:
      "https://www.figma.com/design/OVNDndI2IPYBvZgKriLq8L/Lettuce?node-id=619-19210&t=rlm0RKsjHpbHOr7Y-1",
  },
  {
    id: "gts",
    img: "/portfolio/gts.png",
    // figmaUrl:
    //   "https://embed.figma.com/design/OB0Sn4S24ihYwaBbWBDPzw/Portfolio?node-id=1-3&embed-host=share",
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
