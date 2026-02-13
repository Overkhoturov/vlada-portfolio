import { FC } from "react";
import { DictionaryType } from "@/utils/i18n/dictionaries";
import CourseCard from "./CourseCard";

type Props = {
  dictionary: DictionaryType;
}

const EducationBlock: FC<Props> = () => {
  const educationCards = [
    {
      title: 'Южный Федеральный Университет',
      subTitle: 'Информационные системы и технологии (инженер-программист)',
      grade: '2020 · Бакалавр',
    },
    {
      title: 'Южный Федеральный Университет',
      subTitle: 'Информационные системы и технологии (инженер-программист)',
      grade: '2020 · Бакалавр',
    },
  ]

  return (
    <section className="text-primary mb-4">
      <h1 className="text-headline-extra-small-strong mb-4">Образование</h1>
      <div className="flex flex-col tablet:flex-row hd:flex-col full-hd:flex-row gap-2">
        {educationCards.map((card, index) => (
          <CourseCard key={index} {...card} />
        ))}
      </div>
    </section>
  )
}

export default EducationBlock;
