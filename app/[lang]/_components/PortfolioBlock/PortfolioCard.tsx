"use client";
import Tag from "@/components/Tag";
import Image from "next/image";
import { FC, useContext, useState } from "react";
import classNames from "classnames";
import { ThemeContext } from "@/utils/providers/theme-provider";
import { useDictionary } from "@/utils/providers/dictionary-context";
import Button, { ButtonType, ButtonVariant } from "@/components/Button";
import LinkComponent from "@/components/layout/Header/LinkComponent";

type Props = {
  id: string;
  figmaUrl?: string;
  img: string;
  isHideShadow?: boolean;
};

const PortfolioCard: FC<Props> = (props) => {
  const [isOver, setOver] = useState(false);
  const { isDark } = useContext(ThemeContext);
  const dictionary = useDictionary();
  const dictionaryCard =
    dictionary.home.main.cards[
      props.id as keyof typeof dictionary.home.main.cards
    ];

  return (
    <div
      className={classNames({
        "h-full p-6 rounded-[32px] border border-outline bg-surface-container shadow-drop-800-medium": true,
        "shadow-drop-800-medium": !isDark && !props.isHideShadow,
        "shadow-inner-100-small": isDark && !props.isHideShadow,
      })}
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
    >
      <div className="w-full h-full flex flex-col tablet:flex-row items-center gap-4 lg:gap-8">
        <div className="relative w-full max-h-64 overflow-hidden rounded-xl">
          <Image
            className={classNames({
              "porfolio-img w-full h-full object-cover transition duration-300 ease-in-out": true,
              "scale-110": isOver,
              "scale-100": !isOver,
            })}
            src={props.img}
            alt="project-cover"
            width={364}
            height={256}
          />
        </div>
        <div className="tablet:max-w-none w-full grow flex flex-col justify-between">
          <h3 className="font-medium text-[32px] leading-10 mb-3">
            {dictionaryCard.title}
          </h3>

          <div className="flex flex-wrap items-center gap-3 mb-[58px]">
            {dictionaryCard.mainTags.map((tag, index) => (
              <Tag
                className="lowercase"
                key={index}
                text={tag}
                variant="primary"
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {dictionaryCard.additionalTags.map((tag, index) => (
              <Tag
                className="lowercase"
                key={index}
                text={tag}
                variant="secondary"
              />
            ))}
          </div>

          {props.figmaUrl && (
            <div className="mt-4 tablet:mt-8 2k:mt-5 4k:mt-12">
              <LinkComponent linkType="out" link={props.figmaUrl}>
                <Button
                  variant={ButtonVariant.FILLED}
                  size="lg"
                  type={ButtonType.PRIMARY}
                  text={dictionary.home.main.cardDetailsBtn}
                  className="w-full"
                />
              </LinkComponent>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
