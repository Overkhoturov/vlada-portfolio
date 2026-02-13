import { DictionaryType } from "@/utils/i18n/dictionaries";
import { FC } from "react";

type Props = {
  dictionary: DictionaryType;
}

const AboutBlock:FC<Props> = ({dictionary}) => (
  <article className="text-primary mb-4">
    <h1 className="text-headline-small-strong mb-4">{dictionary.about.main.title}</h1>
    <div className="whitespace-pre-line text-body-medium flex flex-col gap-2">
      <p>
        {dictionary.about.main.p1.i}<span className="text-body-medium-strong text-secondary-on-fixed">{dictionary.about.main.p1.strong}</span>{dictionary.about.main.p1.rest}
      </p>
      <p>
        {dictionary.about.main.p2}
      </p>
      <p>
        {dictionary.about.main.p3}
      </p>
    </div>
  </article>
)

export default AboutBlock;
