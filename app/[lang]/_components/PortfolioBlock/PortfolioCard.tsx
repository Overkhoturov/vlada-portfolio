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
  isSwiper?: boolean;
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
        "h-full p-6 tablet:p-8 tablet:min-h-[384px] hd:min-h-[unset] rounded-[32px] bg-surface-container shadow-drop-800-medium": true,
        "shadow-drop-800-medium": !isDark && !props.isSwiper,
        "shadow-inner-100-small": isDark && !props.isSwiper,
        "min-h-[676px] flex": props.isSwiper,
      })}
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
    >
      <div
        className={classNames({
          "w-full h-full flex flex-col tablet:flex-row items-center gap-4 2k:gap-5 4k:gap-6 ": true,
          "!h-auto": props.isSwiper,
        })}
      >
        <div className="relative w-full min-w-[49%] tablet:h-full overflow-hidden rounded-xl">
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
          <div>
            <h3 className="text-display-medium-strong mb-2 tablet:mb-4 2k:mb-5 4k:mb-6">
              {dictionaryCard.title}
            </h3>

            <div className="flex items-center gap-2 mb-4 tablet:mb-8 2k:mb-10 whitespace-nowrap">
              {dictionaryCard.mainTags.map((tag, index) => (
                <Tag
                  className={classNames({
                    lowercase: true,
                    "!block overflow-hidden text-ellipsis":
                      index === dictionaryCard.mainTags.length - 1,
                  })}
                  key={index}
                  text={tag}
                  variant="primary"
                />
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {dictionaryCard.additionalTags.map((tag, index) => (
                <Tag
                  className="lowercase"
                  key={index}
                  text={tag}
                  variant="secondary"
                />
              ))}
            </div>
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
