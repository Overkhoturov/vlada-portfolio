import { useDictionary } from "@/utils/providers/dictionary-context";
import CourseCard from "./CourseCard";

const CourseBlock = () => {
  const dictionary = useDictionary();

  return (
    <section className="text-primary">
      <h1 className="text-headline-extra-small-strong mb-4">{dictionary.about.courseTitle}</h1>
      <div className="flex flex-col gap-2 hd:flex-wrap hd:flex-row">
        {Object.values(dictionary.about.courses).map((card, index) => (
          <CourseCard key={index} title={card.title} subitle={card.subtitle} grade={card.grade} />
        ))}
      </div>
    </section>
  )
}

export default CourseBlock;
