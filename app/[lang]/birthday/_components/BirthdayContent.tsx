"use client";

import Link from "next/link";
import { useDictionary } from "@/utils/providers/dictionary-context";
import Button, { ButtonType, ButtonVariant } from "@/components/Button";

const BirthdayContent = () => {
  const dictionary = useDictionary();

  return (
    <article className="text-primary mb-4 flex flex-col items-center text-center gap-6">
      <h1 className="text-headline-small-strong tablet:text-headline-extra-medium-strong">
        {dictionary.birthdayPage.title}
      </h1>

      <p className="whitespace-pre-line text-body-medium text-secondary-on-fixed max-w-[640px]">
        {dictionary.birthdayPage.text}
      </p>

      <div className="relative w-full max-w-[560px] overflow-hidden rounded-[32px] aspect-video bg-surface-container-low">
        <video
          className="w-full h-full object-cover"
          src="/birthday-video.mp4"
          controls
          playsInline
        />
      </div>

      <Link href="/birthday-present.pdf" target="_blank" download>
        <Button
          text={dictionary.birthdayPage.downloadPdf}
          variant={ButtonVariant.FILLED}
          type={ButtonType.PRIMARY}
          size="lg"
        />
      </Link>
    </article>
  );
};

export default BirthdayContent;
