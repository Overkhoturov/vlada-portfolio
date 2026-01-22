import Tag from "@/components/Tag";
import Image from "next/image";
import { FC, useState } from "react";
import { StyledPortfolioCard } from "./PortfolioCard.styles";
import classNames from "classnames";

type Props = {
  title: string;
  img: string;
  mainTags: string[];
  additionalTags: string[];
}

const PortfolioCard:FC<Props> = (props) => {
  const [isOver, setOver] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <StyledPortfolioCard
      className="flex flex-col max-w-[824px] w-full transition-all duration-300 ease-in-out 2xl:flex-row items-center gap-4 lg:gap-8 p-8 bg-[#F7F7F7] rounded-4xl relative cursor-pointer"
      onClick={handleCardClick}
      onMouseOver={() => !isFlipped && setOver(true)}
      onMouseOut={() => !isFlipped && setOver(false)}
      style={{
        perspective: "1000px",
        height: "auto",
        minHeight: "320px"
      }}
    >
      <div 
        className="relative w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="w-full h-full flex flex-col 2xl:flex-row items-center gap-4 lg:gap-8"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)"
          }}
        >
          <div className="relative w-full max-w-[364px] max-h-64 overflow-hidden rounded-xl">
            <Image
              className={classNames({
                'porfolio-img w-full h-full object-cover transition duration-300 ease-in-out': true,
                'scale-110': isOver && !isFlipped,
                'scale-100': !isOver || isFlipped,
              })}
              src={props.img}
              alt="project-cover"
              width={364}
              height={256}
            />
          </div>
          <div className="max-w-[364px] w-full">
            <h3 className="font-medium text-[32px] leading-10 mb-3">{props.title}</h3>

            <div className="flex flex-wrap items-center gap-3 mb-[58px]">
              {props.mainTags.map((tag, index) => (
                <Tag key={index} text={tag} variant="outlined" />
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {props.additionalTags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))}
            </div>
          </div>
        </div>

        <div
          className="absolute top-0 left-0 w-full h-full bg-black rounded-4xl overflow-hidden flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <iframe
            className="w-full h-full border-0"
            src="https://embed.figma.com/design/OB0Sn4S24ihYwaBbWBDPzw/Portfolio?node-id=1-3&embed-host=share"
            title={`${props.title} - Figma Design`}
            allowFullScreen
          />
        </div>
      </div>

      <div className="absolute bottom-4 right-4 text-sm text-gray-500 transition-opacity duration-300">
        {isFlipped ? "Click to go back ←" : "Click to see details →"}
      </div>
    </StyledPortfolioCard>
  );
}

export default PortfolioCard;
