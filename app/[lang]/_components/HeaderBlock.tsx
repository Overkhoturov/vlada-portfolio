"use client";
import Tag from "@/components/Tag";
import { useDictionary } from "@/utils/providers/dictionary-context";
import Image from "next/image";

const HeaderBlock = () => {
  const dictionary = useDictionary();
  return (
    <section className="absolute -translate-x-1/2 top-[112px] tablet:top-[130px] hd:top-[152px] 2k:top-[190px] 4k:top-[228px] w-full px-8 pt-12 pb-8 flex flex-col items-center justify-center gap-2">
      <Image width={100} height={100} alt="avatar" src="/avatar.png" />
      <Tag text={dictionary.home.header.greetingTag} variant="primary" />
      <div className="flex flex-col items-center text-center">
        <span className="text-display-small-strong">
          {dictionary.home.header.title}
        </span>
        <span className="text-body-medium">
          {dictionary.home.header.description}
        </span>
      </div>
    </section>
  );
};

export default HeaderBlock;
