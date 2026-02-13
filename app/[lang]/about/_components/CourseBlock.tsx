import { FC } from "react";
import { DictionaryType } from "@/utils/i18n/dictionaries";
import CourseCard from "./CourseCard";

type Props = {
  dictionary: DictionaryType;
}

const CourseBlock: FC<Props> = () => {
  const educationCards = [
    {
      title: 'Продуктовый подход для дизайнеров',
      subTitle: 'Яндекс Практикум',
      grade: '2024',
    },
    {
      title: 'Продуктовый подход для дизайнеров',
      subTitle: 'Яндекс Практикум',
      grade: '2024',
    },
    {
      title: 'Продуктовый подход для дизайнеров',
      subTitle: 'Яндекс Практикум',
      grade: '2024',
    },
    {
      title: 'Продуктовый подход для дизайнеров',
      subTitle: 'Яндекс Практикум',
      grade: '2024',
    },
  ]

  return (
    <section className="text-primary">
      <h1 className="text-headline-extra-small-strong mb-4">Курсы</h1>
      <div className="flex flex-col gap-2 hd:flex-wrap hd:flex-row">
        {educationCards.map((card, index) => (
          <CourseCard key={index} {...card} />
        ))}
      </div>
    </section>
  )
}

export default CourseBlock;
